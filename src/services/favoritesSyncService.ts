import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

const LOCAL_VERBS_KEY = 'wordpocket_fav_verbs';
const LOCAL_VOCAB_KEY = 'wordpocket_fav_vocab';

interface RemoteFavoritesData {
  verbs: string[];
  vocab: string[];
  updatedAt?: string;
}

/**
 * Lê favoritos locais armazenados no localStorage
 */
export function getLocalFavorites(): { verbs: string[]; vocab: string[] } {
  let verbs: string[] = [];
  let vocab: string[] = [];

  try {
    const rawVerbs = localStorage.getItem(LOCAL_VERBS_KEY);
    if (rawVerbs) {
      verbs = JSON.parse(rawVerbs);
    }
  } catch {
    verbs = [];
  }

  try {
    const rawVocab = localStorage.getItem(LOCAL_VOCAB_KEY);
    if (rawVocab) {
      vocab = JSON.parse(rawVocab);
    }
  } catch {
    vocab = [];
  }

  return { verbs, vocab };
}

/**
 * Salva favoritos no localStorage local
 */
export function setLocalFavorites(verbs: string[], vocab: string[]): void {
  try {
    localStorage.setItem(LOCAL_VERBS_KEY, JSON.stringify(Array.from(new Set(verbs))));
    localStorage.setItem(LOCAL_VOCAB_KEY, JSON.stringify(Array.from(new Set(vocab))));
  } catch {
    // Modo privado ou quota
  }
}

/**
 * Limpa os favoritos locais ao deslogar para evitar vazamento entre contas
 */
export function clearLocalFavoritesOnLogout(): void {
  try {
    localStorage.removeItem(LOCAL_VERBS_KEY);
    localStorage.removeItem(LOCAL_VOCAB_KEY);
  } catch {
    // Ignora
  }
}

/**
 * Busca os favoritos salvos no Firestore para o usuário
 */
export async function getRemoteFavorites(uid: string): Promise<RemoteFavoritesData> {
  if (!isFirebaseConfigured || !db) {
    return { verbs: [], vocab: [] };
  }

  try {
    const favRef = doc(db, 'users', uid, 'favorites', 'all');
    const snap = await getDoc(favRef);

    if (snap.exists()) {
      const data = snap.data() as RemoteFavoritesData;
      return {
        verbs: Array.isArray(data.verbs) ? data.verbs : [],
        vocab: Array.isArray(data.vocab) ? data.vocab : []
      };
    }
    return { verbs: [], vocab: [] };
  } catch (error) {
    console.error('Erro ao buscar favoritos remotos no Firestore:', error);
    return { verbs: [], vocab: [] };
  }
}

/**
 * Salva favoritos remotos no Firestore
 */
export async function saveRemoteFavorites(
  uid: string,
  verbs: string[],
  vocab: string[]
): Promise<void> {
  if (!isFirebaseConfigured || !db) return;

  try {
    const favRef = doc(db, 'users', uid, 'favorites', 'all');
    await setDoc(
      favRef,
      {
        verbs: Array.from(new Set(verbs)),
        vocab: Array.from(new Set(vocab)),
        updatedAt: new Date().toISOString(),
        updatedAtServer: serverTimestamp()
      },
      { merge: true }
    );
  } catch (error) {
    console.warn('Gravação de favoritos remotos pendente ou offline:', error);
  }
}

/**
 * Sincroniza e une (merge) favoritos locais e remotos no momento do login
 */
export async function syncLocalFavoritesToRemote(
  uid: string
): Promise<{ verbsCount: number; vocabCount: number }> {
  const local = getLocalFavorites();
  const remote = await getRemoteFavorites(uid);

  // União idempotente dos conjuntos (sem duplicações)
  const mergedVerbs = Array.from(new Set([...remote.verbs, ...local.verbs]));
  const mergedVocab = Array.from(new Set([...remote.vocab, ...local.vocab]));

  // Atualiza ambos (remoto e local)
  await saveRemoteFavorites(uid, mergedVerbs, mergedVocab);
  setLocalFavorites(mergedVerbs, mergedVocab);

  // Dispara evento de storage para sincronizar hooks abertos na página
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('wordpocket-favorites-updated'));
  }

  return {
    verbsCount: mergedVerbs.length,
    vocabCount: mergedVocab.length
  };
}

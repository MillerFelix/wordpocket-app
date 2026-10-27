import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import { Note } from '../types/notes';

const STORAGE_PREFIX = 'wordpocket_notes_';

export function getNotesStorageKey(uid?: string | null): string {
  return `${STORAGE_PREFIX}${uid || 'visitor'}`;
}

/**
 * Lê anotações do localStorage síncrono (cache local / modo visitante / offline)
 */
export function getLocalNotes(uid?: string | null): Note[] {
  try {
    const raw = localStorage.getItem(getNotesStorageKey(uid));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Erro ao ler anotações locais:', err);
  }
  return [];
}

/**
 * Salva a lista inteira de anotações no localStorage
 */
export function saveLocalNotes(notes: Note[], uid?: string | null): void {
  try {
    localStorage.setItem(getNotesStorageKey(uid), JSON.stringify(notes));
  } catch (err) {
    console.error('Erro ao salvar anotações locais:', err);
  }
}

/**
 * Ordena anotações: fixadas no topo (isPinned), depois pela data de atualização mais recente
 */
export function sortNotes(notes: Note[]): Note[] {
  return [...notes].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    const timeA = new Date(a.updatedAt || a.createdAt).getTime();
    const timeB = new Date(b.updatedAt || b.createdAt).getTime();
    return timeB - timeA;
  });
}

/**
 * Carrega anotações do usuário.
 * Retorna do cache local imediatamente e, se autenticado e online, sincroniza com Firestore.
 */
export async function getNotes(uid?: string | null): Promise<Note[]> {
  const localNotes = getLocalNotes(uid);

  if (!uid || !isFirebaseConfigured || !db) {
    return sortNotes(localNotes);
  }

  try {
    const notesRef = collection(db, 'users', uid, 'notes');
    const snapshot = await getDocs(notesRef);
    const remoteNotes: Note[] = [];

    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      remoteNotes.push({
        id: docSnap.id,
        title: data.title || '',
        content: data.content || '',
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString(),
        isPinned: Boolean(data.isPinned)
      });
    });

    if (remoteNotes.length > 0) {
      // Mescla com eventuais anotações locais mais recentes
      const noteMap = new Map<string, Note>();
      remoteNotes.forEach((n) => noteMap.set(n.id, n));
      localNotes.forEach((local) => {
        const remote = noteMap.get(local.id);
        if (!remote || new Date(local.updatedAt).getTime() > new Date(remote.updatedAt).getTime()) {
          noteMap.set(local.id, local);
        }
      });

      const merged = Array.from(noteMap.values());
      saveLocalNotes(merged, uid);
      return sortNotes(merged);
    } else if (localNotes.length > 0) {
      // Se Firestore estiver vazio mas o usuário tiver notas locais, faz upload para a nuvem
      for (const note of localNotes) {
        await setDoc(doc(db, 'users', uid, 'notes', note.id), note, { merge: true });
      }
      return sortNotes(localNotes);
    }

    return [];
  } catch (err) {
    console.warn('Falha ao sincronizar anotações com a nuvem, utilizando cache local:', err);
    return sortNotes(localNotes);
  }
}

/**
 * Salva ou atualiza uma anotação localmente e sincroniza com a nuvem se autenticado
 */
export async function saveNote(note: Note, uid?: string | null): Promise<Note> {
  const now = new Date().toISOString();
  const updatedNote: Note = {
    ...note,
    updatedAt: now,
    createdAt: note.createdAt || now
  };

  // 1. Atualiza cache local imediatamente
  const localNotes = getLocalNotes(uid);
  const existingIndex = localNotes.findIndex((n) => n.id === updatedNote.id);
  let updatedList: Note[];

  if (existingIndex >= 0) {
    updatedList = [...localNotes];
    updatedList[existingIndex] = updatedNote;
  } else {
    updatedList = [updatedNote, ...localNotes];
  }

  saveLocalNotes(updatedList, uid);

  // 2. Se autenticado, sincroniza com Firestore
  if (uid && isFirebaseConfigured && db) {
    try {
      const noteRef = doc(db, 'users', uid, 'notes', updatedNote.id);
      await setDoc(noteRef, updatedNote, { merge: true });
    } catch (err) {
      console.warn('Erro ao salvar anotação no Firestore (salva apenas localmente):', err);
    }
  }

  return updatedNote;
}

/**
 * Exclui uma anotação localmente e no Firestore se autenticado
 */
export async function deleteNote(noteId: string, uid?: string | null): Promise<void> {
  // 1. Remove do cache local imediatamente
  const localNotes = getLocalNotes(uid);
  const filtered = localNotes.filter((n) => n.id !== noteId);
  saveLocalNotes(filtered, uid);

  // 2. Remove do Firestore se autenticado
  if (uid && isFirebaseConfigured && db) {
    try {
      const noteRef = doc(db, 'users', uid, 'notes', noteId);
      await deleteDoc(noteRef);
    } catch (err) {
      console.warn('Erro ao excluir anotação no Firestore:', err);
    }
  }
}

/**
 * Cria um objeto de nova anotação inicializado
 */
export function createEmptyNote(): Note {
  const now = new Date().toISOString();
  return {
    id: `note_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    title: '',
    content: '',
    createdAt: now,
    updatedAt: now,
    isPinned: false
  };
}

/**
 * Converte HTML em texto puro para prévia
 */
export function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Formata data da anotação de maneira legível em português
 */
export function formatNoteDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    if (isToday) {
      return `Hoje às ${hours}:${minutes}`;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();

    if (isYesterday) {
      return `Ontem às ${hours}:${minutes}`;
    }

    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  } catch {
    return '';
  }
}

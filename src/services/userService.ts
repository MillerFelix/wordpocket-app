import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db, isFirebaseConfigured } from './firebase';
import { UserProfile } from '../types/auth';
import { DEFAULT_AVATAR_ID, getStoredVisitorAvatar } from '../data/avatars';

/**
 * Busca o documento de perfil do usuário no Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (isFirebaseConfigured && db) {
    try {
      const userRef = doc(db, 'users', uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data() as UserProfile;
        try {
          localStorage.setItem(`wordpocket_profile_${uid}`, JSON.stringify(data));
        } catch {
          // Fallback silencioso para erro de storage
        }
        return data;
      }
    } catch (error) {
      console.warn('Erro ao buscar perfil do usuário no Firestore, verificando cache local:', error);
    }
  }

  // Fallback para cache local (offline ou Firestore não configurado)
  try {
    const cached = localStorage.getItem(`wordpocket_profile_${uid}`);
    if (cached) {
      return JSON.parse(cached) as UserProfile;
    }
  } catch {
    // Ignora erro de parsing
  }

  return null;
}

/**
 * Cria ou atualiza o perfil inicial do usuário após login/cadastro
 */
export async function createOrUpdateProfile(
  user: User,
  fallbackName?: string
): Promise<UserProfile> {
  const existing = await getUserProfile(user.uid);

  const nowIso = new Date().toISOString();
  const cleanExplicitName = fallbackName?.trim();
  const cleanAuthName = user.displayName?.trim();

  if (existing) {
    // Se recebemos um nome explícito (ex: formulário de cadastro) ou novo do Firebase Auth
    const candidateName = cleanExplicitName || cleanAuthName;
    const shouldUpdateName = !!candidateName && candidateName !== existing.displayName;
    const resolvedName = shouldUpdateName ? candidateName : (existing.displayName || 'Estudante');

    const resolvedAvatarId = existing.avatarId || getStoredVisitorAvatar() || DEFAULT_AVATAR_ID;

    const updatedProfile: UserProfile = {
      ...existing,
      displayName: resolvedName,
      avatarId: resolvedAvatarId,
      lastLoginAt: nowIso
    };

    try {
      localStorage.setItem(`wordpocket_profile_${user.uid}`, JSON.stringify(updatedProfile));
    } catch {
      // Ignora erro de storage
    }

    if (isFirebaseConfigured && db) {
      try {
        const userRef = doc(db, 'users', user.uid);
        const updates: Record<string, unknown> = {
          lastLoginAt: nowIso,
          avatarId: resolvedAvatarId,
          updatedAtServer: serverTimestamp()
        };
        if (shouldUpdateName) {
          updates.displayName = resolvedName;
        }
        await updateDoc(userRef, updates);
      } catch {
        // Fallback silencioso para modo offline
      }
    }
    return updatedProfile;
  }

  // Cria novo perfil com o nome explícito informado no cadastro
  const resolvedDisplayName = cleanExplicitName || cleanAuthName || 'Estudante';
  const email = user.email || '';
  const photoURL = user.photoURL || null;
  const initialAvatarId = getStoredVisitorAvatar() || DEFAULT_AVATAR_ID;

  const newProfile: UserProfile = {
    uid: user.uid,
    email,
    displayName: resolvedDisplayName,
    photoURL,
    avatarId: initialAvatarId,
    createdAt: nowIso,
    lastLoginAt: nowIso,
    onboardingCompleted: false,
    preferences: {
      audioRate: 0.9,
      preferredVoice: 'en-US'
    }
  };

  try {
    localStorage.setItem(`wordpocket_profile_${user.uid}`, JSON.stringify(newProfile));
  } catch {
    // Ignora erro de storage
  }

  if (isFirebaseConfigured && db) {
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        ...newProfile,
        createdAtServer: serverTimestamp(),
        lastLoginAtServer: serverTimestamp()
      });
    } catch (error) {
      console.warn('Gravação remota pendente ou offline ao criar perfil:', error);
    }
  }

  return newProfile;
}

/**
 * Atualiza campos específicos do perfil do usuário
 */
export async function updateUserProfile(
  uid: string,
  updates: Partial<UserProfile>
): Promise<void> {
  try {
    const cached = localStorage.getItem(`wordpocket_profile_${uid}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      localStorage.setItem(`wordpocket_profile_${uid}`, JSON.stringify({ ...parsed, ...updates }));
    }
  } catch {
    // Ignora erro de storage
  }

  if (!isFirebaseConfigured || !db) return;

  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    ...updates,
    updatedAtServer: serverTimestamp()
  });
}

/**
 * Marca o onboarding como concluído para o usuário
 */
export async function completeUserOnboarding(uid: string): Promise<void> {
  await updateUserProfile(uid, { onboardingCompleted: true });
}

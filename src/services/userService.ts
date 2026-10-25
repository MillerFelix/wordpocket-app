import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db, isFirebaseConfigured } from './firebase';
import { UserProfile } from '../types/auth';

/**
 * Busca o documento de perfil do usuário no Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (!isFirebaseConfigured || !db) return null;

  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar perfil do usuário no Firestore:', error);
    return null;
  }
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
  const displayName = user.displayName || fallbackName || user.email?.split('@')[0] || 'Estudante';
  const email = user.email || '';
  const photoURL = user.photoURL || null;

  if (existing) {
    // Atualiza último login
    if (isFirebaseConfigured && db) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          lastLoginAt: nowIso,
          updatedAtServer: serverTimestamp()
        });
      } catch {
        // Fallback silencioso para modo offline
      }
    }
    return {
      ...existing,
      displayName: existing.displayName || displayName,
      lastLoginAt: nowIso
    };
  }

  // Cria novo perfil
  const newProfile: UserProfile = {
    uid: user.uid,
    email,
    displayName,
    photoURL,
    createdAt: nowIso,
    lastLoginAt: nowIso,
    onboardingCompleted: false,
    preferences: {
      audioRate: 0.9,
      preferredVoice: 'en-US'
    }
  };

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

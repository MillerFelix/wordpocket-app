import React, { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { User, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../services/firebase';
import { 
  signInWithEmail as apiSignInWithEmail,
  signUpWithEmail as apiSignUpWithEmail,
  signInWithGoogle as apiSignInWithGoogle,
  signOutUser as apiSignOutUser,
  sendPasswordReset as apiSendPasswordReset,
  formatAuthError
} from '../services/authService';
import { 
  createOrUpdateProfile, 
  getUserProfile, 
  updateUserProfile, 
  completeUserOnboarding,
  hasCompletedOnboarding,
  setLocalOnboardingCompleted
} from '../services/userService';

import { AuthMode, UserProfile } from '../types/auth';
import { DEFAULT_AVATAR_ID, getStoredVisitorAvatar, setStoredVisitorAvatar } from '../data/avatars';

export interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isVisitor: boolean;
  isConfigured: boolean;
  authError: string | null;
  clearAuthError: () => void;
  // Auth Operations
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, displayName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  updateProfileData: (data: Partial<UserProfile>) => Promise<void>;
  avatarId: string;
  updateAvatar: (avatarId: string) => Promise<void>;
  completeOnboarding: () => Promise<void>;
  // Auth Modal State
  isAuthModalOpen: boolean;
  authModalMode: AuthMode;
  openAuthModal: (mode?: AuthMode) => void;
  closeAuthModal: () => void;
  // Visitor Prompt Modal State
  isVisitorPromptOpen: boolean;
  visitorPromptExplanation: string;
  openVisitorPrompt: (explanation?: string) => void;
  closeVisitorPrompt: () => void;
  // Onboarding Guided Tutorial State
  isOnboardingOpen: boolean;
  openOnboarding: () => void;
  closeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);

  // Armazena temporariamente o nome informado durante o cadastro para evitar que o onAuthStateChanged sobrescreva
  const pendingRegistrationNameRef = useRef<string | null>(null);

  // Modals
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<AuthMode>('login');
  const [isVisitorPromptOpen, setIsVisitorPromptOpen] = useState(false);
  const [visitorPromptExplanation, setVisitorPromptExplanation] = useState('');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(() => !hasCompletedOnboarding());

  const clearAuthError = useCallback(() => setAuthError(null), []);

  const openAuthModal = useCallback((mode: AuthMode = 'login') => {
    setAuthModalMode(mode);
    setAuthError(null);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
    setAuthError(null);
  }, []);

  const openVisitorPrompt = useCallback((explanation?: string) => {
    setVisitorPromptExplanation(
      explanation || 'Crie uma conta gratuita ou entre para salvar seu histórico, acompanhar o progresso nas 4 habilidades e sincronizar em qualquer dispositivo.'
    );
    setIsVisitorPromptOpen(true);
  }, []);

  const closeVisitorPrompt = useCallback(() => {
    setIsVisitorPromptOpen(false);
  }, []);

  const openOnboarding = useCallback(() => {
    setIsOnboardingOpen(true);
  }, []);

  const closeOnboarding = useCallback(() => {
    setIsOnboardingOpen(false);
  }, []);

  // Monitora o ciclo de vida da sessão no Firebase
  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        try {
          const regName = pendingRegistrationNameRef.current;
          const userProf = await createOrUpdateProfile(
            firebaseUser,
            regName || firebaseUser.displayName || undefined
          );
          setProfile(userProf);



          // Dispara o onboarding guiado se for a primeira entrada
          if (!userProf.onboardingCompleted) {
            setIsOnboardingOpen(true);
          }
        } catch (err) {
          console.error('Erro ao sincronizar dados pós-autenticação:', err);
        }
      } else {
        setProfile(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    setAuthError(null);
    try {
      const loggedUser = await apiSignInWithEmail(email, pass);
      const userProf = await createOrUpdateProfile(loggedUser);
      setProfile(userProf);
      closeAuthModal();
    } catch (err) {
      const msg = formatAuthError(err);
      setAuthError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async (email: string, pass: string, displayName: string) => {
    setLoading(true);
    setAuthError(null);
    const cleanName = displayName.trim();
    pendingRegistrationNameRef.current = cleanName;
    try {
      const newUser = await apiSignUpWithEmail(email, pass, cleanName);
      const userProf = await createOrUpdateProfile(newUser, cleanName);
      setProfile(userProf);
      closeAuthModal();
      // Abre onboarding após cadastro
      setIsOnboardingOpen(true);
    } catch (err) {
      const msg = formatAuthError(err);
      setAuthError(msg);
      throw new Error(msg);
    } finally {
      pendingRegistrationNameRef.current = null;
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    setAuthError(null);
    try {
      const loggedUser = await apiSignInWithGoogle();
      const userProf = await createOrUpdateProfile(loggedUser);
      setProfile(userProf);
      closeAuthModal();
      if (!userProf.onboardingCompleted) {
        setIsOnboardingOpen(true);
      }
    } catch (err) {
      const msg = formatAuthError(err);
      setAuthError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await apiSignOutUser();
      setUser(null);
      setProfile(null);
    } catch (err) {
      console.error('Erro ao encerrar sessão:', err);
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordReset = async (email: string) => {
    setLoading(true);
    setAuthError(null);
    try {
      await apiSendPasswordReset(email);
    } catch (err) {
      const msg = formatAuthError(err);
      setAuthError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  const updateProfileData = async (data: Partial<UserProfile>) => {
    if (!user) return;
    await updateUserProfile(user.uid, data);
    if (data.displayName && auth?.currentUser) {
      try {
        await updateProfile(auth.currentUser, { displayName: data.displayName.trim() });
      } catch (err) {
        console.warn('Erro ao sincronizar nome com Firebase Auth:', err);
      }
    }
    const updated = await getUserProfile(user.uid);
    if (updated) {
      setProfile(updated);
    } else {
      setProfile((prev) => (prev ? { ...prev, ...data } : null));
    }
  };

  const completeOnboarding = async () => {
    setLocalOnboardingCompleted(true);
    if (user) {
      await completeUserOnboarding(user.uid);
      setProfile((prev) => (prev ? { ...prev, onboardingCompleted: true } : null));
    }
    closeOnboarding();
  };

  const [visitorAvatar, setVisitorAvatar] = useState<string>(() => getStoredVisitorAvatar());

  const avatarId = user
    ? (profile?.avatarId || visitorAvatar || DEFAULT_AVATAR_ID)
    : (visitorAvatar || DEFAULT_AVATAR_ID);

  const updateAvatar = useCallback(async (newAvatarId: string) => {
    setStoredVisitorAvatar(newAvatarId);
    setVisitorAvatar(newAvatarId);
    if (user) {
      await updateProfileData({ avatarId: newAvatarId });
    }
  }, [user, updateProfileData]);

  const isVisitor = !user;

  const value: AuthContextType = {
    user,
    profile,
    loading,
    isVisitor,
    isConfigured: isFirebaseConfigured,
    authError,
    clearAuthError,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signOut,
    sendPasswordReset,
    updateProfileData,
    avatarId,
    updateAvatar,
    completeOnboarding,
    isAuthModalOpen,
    authModalMode,
    openAuthModal,
    closeAuthModal,
    isVisitorPromptOpen,
    visitorPromptExplanation,
    openVisitorPrompt,
    closeVisitorPrompt,
    isOnboardingOpen,
    openOnboarding,
    closeOnboarding
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const defaultAuthContext: AuthContextType = {
  user: null,
  profile: null,
  loading: false,
  isVisitor: true,
  isConfigured: isFirebaseConfigured,
  authError: null,
  clearAuthError: () => {},
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
  sendPasswordReset: async () => {},
  updateProfileData: async () => {},
  avatarId: DEFAULT_AVATAR_ID,
  updateAvatar: async () => {},
  completeOnboarding: async () => {},
  isAuthModalOpen: false,
  authModalMode: 'login',
  openAuthModal: () => {},
  closeAuthModal: () => {},
  isVisitorPromptOpen: false,
  visitorPromptExplanation: '',
  openVisitorPrompt: () => {},
  closeVisitorPrompt: () => {},
  isOnboardingOpen: false,
  openOnboarding: () => {},
  closeOnboarding: () => {}
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  return context || defaultAuthContext;
};

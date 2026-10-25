/**
 * Tipos de Autenticação e Perfil de Usuário do Word Pocket
 */

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string | null;
  createdAt: string; // ISO 8601 string
  lastLoginAt: string; // ISO 8601 string
  onboardingCompleted: boolean;
  preferences?: {
    audioRate?: number;
    preferredVoice?: string;
  };
}

export type AuthMode = 'login' | 'signup' | 'reset';

export interface AuthErrorState {
  code: string;
  message: string;
}

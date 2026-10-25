import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile,
  User
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from './firebase';

/**
 * Traduz erros do Firebase Auth para mensagens amigáveis em português
 */
export function formatAuthError(error: unknown): string {
  if (!error || typeof error !== 'object') {
    return 'Ocorreu um erro inesperado. Tente novamente.';
  }

  const err = error as { code?: string; message?: string };
  const code = err.code || '';

  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'E-mail ou senha incorretos. Verifique suas credenciais.';
    case 'auth/email-already-in-use':
      return 'Este endereço de e-mail já está cadastrado. Tente entrar ou recupere sua senha.';
    case 'auth/weak-password':
      return 'A senha deve conter no mínimo 6 caracteres.';
    case 'auth/invalid-email':
      return 'Por favor, insira um endereço de e-mail válido.';
    case 'auth/popup-closed-by-user':
      return 'A janela de autenticação do Google foi fechada antes da conclusão.';
    case 'auth/network-request-failed':
      return 'Falha de conexão com a rede. Verifique sua internet.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas consecutivas. Aguarde alguns instantes antes de tentar novamente.';
    case 'auth/popup-blocked':
      return 'O navegador bloqueou a janela pop-up do Google. Permita pop-ups para entrar.';
    default:
      if (err.message && err.message.includes('Firebase: Error')) {
        return 'Falha na autenticação. Verifique os dados digitados e tente novamente.';
      }
      return err.message || 'Erro ao processar autenticação. Tente novamente.';
  }
}

/**
 * Cadastro de novo usuário com e-mail e senha
 */
export async function signUpWithEmail(
  email: string,
  pass: string,
  displayName: string
): Promise<User> {
  if (!isFirebaseConfigured || !auth) {
    throw new Error('O Firebase não está configurado. Verifique o arquivo .env.');
  }

  const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), pass);
  const user = userCredential.user;

  if (displayName.trim()) {
    await updateProfile(user, { displayName: displayName.trim() });
  }

  return user;
}

/**
 * Login com e-mail e senha
 */
export async function signInWithEmail(email: string, pass: string): Promise<User> {
  if (!isFirebaseConfigured || !auth) {
    throw new Error('O Firebase não está configurado. Verifique o arquivo .env.');
  }

  const userCredential = await signInWithEmailAndPassword(auth, email.trim(), pass);
  return userCredential.user;
}

/**
 * Autenticação via Google Popup
 */
export async function signInWithGoogle(): Promise<User> {
  if (!isFirebaseConfigured || !auth || !googleProvider) {
    throw new Error('O Firebase não está configurado. Verifique o arquivo .env.');
  }

  const userCredential = await signInWithPopup(auth, googleProvider);
  return userCredential.user;
}

/**
 * Encerra a sessão do usuário atual
 */
export async function signOutUser(): Promise<void> {
  if (!auth) return;
  await signOut(auth);
}

/**
 * Envia e-mail para recuperação de senha
 */
export async function sendPasswordReset(email: string): Promise<void> {
  if (!isFirebaseConfigured || !auth) {
    throw new Error('O Firebase não está configurado. Verifique o arquivo .env.');
  }

  await sendPasswordResetEmail(auth, email.trim());
}

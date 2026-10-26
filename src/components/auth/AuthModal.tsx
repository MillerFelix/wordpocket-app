import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { WordPocketLogo } from '../brand/WordPocketLogo';
import { LoadingIndicator } from '../shared/LoadingIndicator';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalMode,
    openAuthModal,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    sendPasswordReset,
    authError,
    clearAuthError,
    isConfigured
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSwitchMode = (mode: 'login' | 'signup' | 'reset') => {
    clearAuthError();
    setValidationError(null);
    setResetSuccess(false);
    openAuthModal(mode);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearAuthError();
    setValidationError(null);
    setResetSuccess(false);

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setValidationError('Por favor, informe seu endereço de e-mail.');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setValidationError('Por favor, insira um endereço de e-mail válido (ex: seuemail@exemplo.com).');
      return;
    }

    if (authModalMode === 'signup' && !displayName.trim()) {
      setValidationError('Por favor, informe seu nome completo.');
      return;
    }

    if (authModalMode !== 'reset' && !password) {
      setValidationError('Por favor, informe sua senha.');
      return;
    }

    setSubmitting(true);
    try {
      if (authModalMode === 'login') {
        await signInWithEmail(trimmedEmail, password);
      } else if (authModalMode === 'signup') {
        await signUpWithEmail(trimmedEmail, password, displayName);
      } else if (authModalMode === 'reset') {
        await sendPasswordReset(trimmedEmail);
        setResetSuccess(true);
      }
    } catch {
      // Erro gerenciado no AuthContext e exposto em authError
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleClick = async () => {
    clearAuthError();
    setValidationError(null);
    setSubmitting(true);
    try {
      await signInWithGoogle();
    } catch {
      // Erro gerenciado no contexto
    } finally {
      setSubmitting(false);
    }
  };

  const activeError = validationError || authError;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand pointer-events-none" />

        {/* Back button for reset mode */}
        {authModalMode === 'reset' && (
          <button
            type="button"
            onClick={() => handleSwitchMode('login')}
            className="absolute top-4 left-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition flex items-center gap-1 text-xs font-bold cursor-pointer"
            aria-label="Voltar para a tela de login"
          >
            <span>← Voltar</span>
          </button>
        )}

        {/* Close button */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Fechar janela de autenticação"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand & Titles */}
        <div className="text-center space-y-2 pt-2">
          <div className="flex justify-center mb-1">
            <WordPocketLogo variant="icon" size="md" />
          </div>

          <h2 id="auth-modal-title" className="text-xl sm:text-2xl font-black text-[#160F2E] tracking-tight">
            {authModalMode === 'login' && 'Entrar no Word Pocket'}
            {authModalMode === 'signup' && 'Criar Conta Gratuita'}
            {authModalMode === 'reset' && 'Recuperar Senha'}
          </h2>

          <p className="text-xs text-[#52456F] font-medium max-w-xs mx-auto">
            {authModalMode === 'login' && 'Acesse seu perfil e continue seus estudos de onde você parou.'}
            {authModalMode === 'signup' && 'Comece a desenvolver suas 4 habilidades e sincronize seu progresso.'}
            {authModalMode === 'reset' && 'Informe seu endereço de e-mail para enviarmos as instruções de redefinição.'}
          </p>
        </div>

        {/* Missing Firebase warning if not configured */}
        {!isConfigured && (
          <div className="mt-4 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
            <span>Chaves do Firebase não configuradas no ambiente local.</span>
          </div>
        )}

        {/* Error message banner */}
        {activeError && (
          <div className="mt-4 p-3.5 rounded-2xl bg-[#FDE8F1] border border-[#FFD0E5] text-[#F52E91] text-xs font-bold flex items-start gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">{activeError}</div>
          </div>
        )}

        {/* Reset success banner - Neutral confirmation message */}
        {resetSuccess && (
          <div className="mt-4 p-4 rounded-2xl bg-[#DCF8F1] border border-[#B6F5E8] text-[#0A9B80] text-xs font-bold space-y-2 animate-in fade-in">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#0A9B80]" />
              <div className="flex-1 leading-relaxed">
                Se o endereço de e-mail informado estiver cadastrado, enviamos um link com as instruções para redefinição da sua senha. Verifique sua caixa de entrada e a pasta de spam.
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleSwitchMode('login')}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-white border border-[#B6F5E8] text-[#0A9B80] font-extrabold text-xs hover:bg-[#F2FBF8] transition cursor-pointer"
            >
              Voltar para o Login
            </button>
          </div>
        )}

        {/* Google Authentication Button */}
        {authModalMode !== 'reset' && (
          <div className="mt-6 space-y-4">
            <button
              type="button"
              onClick={handleGoogleClick}
              disabled={submitting || !isConfigured}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs font-bold text-xs sm:text-sm text-[#160F2E] transition active:scale-[0.99] disabled:opacity-60 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{authModalMode === 'login' ? 'Entrar com Google' : 'Cadastrar com Google'}</span>
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-[11px] font-semibold text-[#52456F] uppercase tracking-wider relative">
                ou com e-mail
              </span>
            </div>
          </div>
        )}

        {/* Email & Password Form */}
        {!resetSuccess ? (
          <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3.5">
            {authModalMode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-[#160F2E] mb-1">
                  Seu Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    disabled={submitting}
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Ex: Lucas Silva"
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-[#160F2E] focus:outline-none focus:ring-2 focus:ring-[#176BFF]/30 focus:border-[#176BFF] transition disabled:opacity-60"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#160F2E] mb-1">
                Endereço de E-mail
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  disabled={submitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-[#160F2E] focus:outline-none focus:ring-2 focus:ring-[#176BFF]/30 focus:border-[#176BFF] transition disabled:opacity-60"
                />
              </div>
            </div>

            {authModalMode !== 'reset' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-[#160F2E]">
                    Senha
                  </label>
                  {authModalMode === 'login' && (
                    <button
                      type="button"
                      onClick={() => handleSwitchMode('reset')}
                      className="text-[11px] font-semibold text-[#176BFF] hover:underline cursor-pointer"
                    >
                      Esqueci minha senha?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    disabled={submitting}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-[#160F2E] focus:outline-none focus:ring-2 focus:ring-[#176BFF]/30 focus:border-[#176BFF] transition disabled:opacity-60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    aria-label={showPassword ? 'Ocultar senha' : 'Ver senha'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition active:scale-[0.99] disabled:opacity-60 cursor-pointer"
            >
              {submitting ? (
                <LoadingIndicator size="sm" variant="white" label="Processando..." labelPosition="right" />
              ) : (
                <>
                  <span>
                    {authModalMode === 'login' && 'Entrar na Conta'}
                    {authModalMode === 'signup' && 'Concluir Cadastro Gratuito'}
                    {authModalMode === 'reset' && 'Enviar Link de Redefinição'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setResetSuccess(false);
                setEmail('');
              }}
              className="text-xs font-semibold text-[#176BFF] hover:underline cursor-pointer"
            >
              Informar outro endereço de e-mail
            </button>
          </div>
        )}

        {/* Footer switch between Login / Signup */}
        <div className="mt-5 pt-4 border-t border-slate-100 text-center text-xs text-[#52456F]">
          {authModalMode === 'login' && (
            <p>
              Ainda não tem uma conta?{' '}
              <button
                type="button"
                onClick={() => handleSwitchMode('signup')}
                className="font-bold text-[#176BFF] hover:underline cursor-pointer"
              >
                Cadastre-se gratuitamente
              </button>
            </p>
          )}

          {authModalMode === 'signup' && (
            <p>
              Já possui uma conta?{' '}
              <button
                type="button"
                onClick={() => handleSwitchMode('login')}
                className="font-bold text-[#176BFF] hover:underline cursor-pointer"
              >
                Fazer login
              </button>
            </p>
          )}

          {authModalMode === 'reset' && (
            <p>
              Lembrou sua senha?{' '}
              <button
                type="button"
                onClick={() => handleSwitchMode('login')}
                className="font-bold text-[#176BFF] hover:underline cursor-pointer"
              >
                Voltar para o login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

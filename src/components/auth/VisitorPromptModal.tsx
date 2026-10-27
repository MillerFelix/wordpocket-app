import React from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface VisitorPromptModalProps {
  onContinueAsGuest?: () => void;
}

export const VisitorPromptModal: React.FC<VisitorPromptModalProps> = ({ onContinueAsGuest }) => {
  const { isVisitorPromptOpen, closeVisitorPrompt, openAuthModal, visitorPromptExplanation } = useAuth();

  if (!isVisitorPromptOpen) return null;

  const handleAuthClick = () => {
    closeVisitorPrompt();
    openAuthModal('signup');
  };

  const handleGuestClick = () => {
    closeVisitorPrompt();
    if (onContinueAsGuest) {
      onContinueAsGuest();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="visitor-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80 overflow-hidden space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={closeVisitorPrompt}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1ECFC] text-[#176BFF] text-xs font-bold border border-[#BED7FA]">
            <Sparkles className="w-3.5 h-3.5 text-[#26D9FF]" />
            <span>Registro de Progresso</span>
          </div>

          <h2 id="visitor-modal-title" className="text-xl sm:text-2xl font-black text-[#160F2E] tracking-tight">
            Pratique e salve sua evolução!
          </h2>

          <p className="text-xs text-[#52456F] font-medium leading-relaxed">
            {visitorPromptExplanation || 'Você pode realizar as atividades como visitante ou criar uma conta para registrar sua evolução.'}
          </p>
        </div>

        {/* Account Benefits List */}
        <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0A9B80] shrink-0 mt-0.5" />
            <span className="text-[#160F2E] font-medium">
              <strong>Histórico de tentativas:</strong> suas notas e tempo de prática são salvos na nuvem.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#176BFF] shrink-0 mt-0.5" />
            <span className="text-[#160F2E] font-medium">
              <strong>4 Habilidades integradas:</strong> veja seu nível subir em Listening, Speaking, Reading e Writing.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#6545F5] shrink-0 mt-0.5" />
            <span className="text-[#160F2E] font-medium">
              <strong>Sincronização contínua:</strong> acesse seu histórico e progresso no celular, tablet e computador.
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={handleAuthClick}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition active:scale-[0.99] cursor-pointer"
          >
            <span>Criar Conta ou Entrar</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleGuestClick}
            className="w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-[#52456F] font-bold text-xs transition border border-transparent hover:border-slate-200 cursor-pointer"
          >
            Continuar praticando sem salvar
          </button>
        </div>
      </div>
    </div>
  );
};

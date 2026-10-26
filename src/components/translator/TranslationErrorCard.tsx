import React from 'react';
import { AlertCircle, RotateCcw, ExternalLink } from 'lucide-react';

interface TranslationErrorCardProps {
  error: string;
  onRetry: () => void;
  onOpenGoogleTranslate: () => void;
}

export const TranslationErrorCard: React.FC<TranslationErrorCardProps> = ({
  error,
  onRetry,
  onOpenGoogleTranslate,
}) => {
  return (
    <div className="bg-[#FFF0F6]/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-[#FFD0E5] shadow-soft-card space-y-3 animate-in fade-in duration-200">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#F52E91] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="text-sm font-extrabold text-[#160F2E]">
            Não foi possível traduzir o termo
          </h3>
          <p className="text-xs text-[#52456F] leading-relaxed">
            {error}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-1 pl-8">
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#F52E91] text-xs font-bold border border-[#FFD0E5] shadow-2xs hover:bg-[#FFF0F6] transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Tentar novamente</span>
        </button>

        <button
          type="button"
          onClick={onOpenGoogleTranslate}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#52456F] text-xs font-bold border border-white/90 shadow-2xs hover:text-[#160F2E] transition"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Abrir no Google Tradutor</span>
        </button>
      </div>
    </div>
  );
};

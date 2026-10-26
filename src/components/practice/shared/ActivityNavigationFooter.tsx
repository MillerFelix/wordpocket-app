import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ActivityNavigationFooterProps {
  isFirst: boolean;
  isLast: boolean;
  submitting?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  finishButtonClass?: string;
  finishLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  containerClass?: string;
}

export const ActivityNavigationFooter: React.FC<ActivityNavigationFooterProps> = ({
  isFirst,
  isLast,
  submitting = false,
  onPrev,
  onNext,
  onFinish,
  finishButtonClass = 'bg-gradient-to-r from-[#FF5B26] to-[#E04D1B] shadow-colored-tangerine',
  finishLabel = 'Concluir e Ver Nota',
  previousLabel = 'Anterior',
  nextLabel = 'Próxima Questão',
  containerClass = 'pt-4 border-t border-slate-100 flex items-center justify-between gap-3'
}) => {
  return (
    <div className={containerClass}>
      <button
        type="button"
        disabled={isFirst}
        onClick={onPrev}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#160F2E] font-bold text-xs transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{previousLabel}</span>
      </button>

      <div className="flex items-center gap-2">
        {!isLast ? (
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition cursor-pointer"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            disabled={submitting}
            onClick={onFinish}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl ${finishButtonClass} text-white font-black text-xs sm:text-sm hover:opacity-95 transition active:scale-95 cursor-pointer disabled:opacity-50`}
          >
            {submitting ? (
              <span>Calculando nota...</span>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>{finishLabel}</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

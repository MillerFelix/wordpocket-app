import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { FindFixErrorQuestion } from '../../../types/activity';

interface FindFixErrorQuestionViewProps {
  question: FindFixErrorQuestion;
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const FindFixErrorQuestionView: React.FC<FindFixErrorQuestionViewProps> = ({
  question,
  value,
  onChange,
  disabled = false
}) => {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E04D1B]">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Corrija o Erro</span>
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-[#160F2E]">
          {question.prompt}
        </h3>
      </div>

      {/* Frase com o erro em destaque */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF2ED] border border-[#FFD2C2] space-y-2 shadow-2xs">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E04D1B] block">
          Frase com erro:
        </span>
        <p className="text-sm sm:text-base font-semibold text-[#160F2E] leading-relaxed">
          "{question.sentenceWithError}"
        </p>
      </div>

      {/* Campo de correção */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-[#160F2E]">
          Sua correção (digite a forma correta):
        </label>
        <div className="relative">
          <input
            type="text"
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Digite a palavra ou correção..."
            className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white text-[#160F2E] font-bold text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-[#FF5B26]/20 focus:border-[#FF5B26] transition shadow-2xs placeholder:text-slate-400 placeholder:font-normal"
            autoFocus
          />
        </div>
      </div>

      {/* Dica da regra */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-[#52456F] font-medium flex items-start gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-[#0A9B80] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Atenção:</strong> {question.explanationPt}
        </p>
      </div>
    </div>
  );
};

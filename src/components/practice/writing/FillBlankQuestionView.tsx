import React from 'react';
import { Lightbulb, Edit3 } from 'lucide-react';
import { FillBlankQuestion } from '../../../types/activity';

interface FillBlankQuestionViewProps {
  question: FillBlankQuestion;
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const FillBlankQuestionView: React.FC<FillBlankQuestionViewProps> = ({
  question,
  value,
  onChange,
  disabled = false
}) => {
  // Substitui '___' na frase pelo input ou indicador
  const parts = question.sentenceWithBlank.split('___');

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E04D1B]">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Complete a Frase</span>
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-[#160F2E]">
          {question.prompt}
        </h3>
      </div>

      {/* Frase com lacuna em destaque */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFF5F1] to-white border border-[#FFD2C2] text-sm sm:text-base font-semibold text-[#160F2E] leading-loose shadow-2xs">
        {parts[0]}
        <span className="inline-block mx-1.5 align-middle">
          <input
            type="text"
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            placeholder="digite aqui..."
            className="px-3 py-1.5 rounded-xl border-2 border-[#FF5B26] bg-white text-[#160F2E] font-extrabold text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-[#FF5B26]/20 transition w-36 sm:w-44 text-center placeholder:text-slate-400 placeholder:font-normal shadow-2xs"
            autoFocus
          />
        </span>
        {parts[1] || ''}
      </div>

      {/* Dica opcional */}
      {question.hint && (
        <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
          <span><strong>Dica:</strong> {question.hint}</span>
        </div>
      )}
    </div>
  );
};

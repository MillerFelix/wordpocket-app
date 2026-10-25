import React from 'react';
import { HelpCircle, Check } from 'lucide-react';
import { ReadingQuestion } from '../../../types/activity';

interface MultipleChoiceQuestionViewProps {
  question: ReadingQuestion;
  selectedOptionId: string;
  onSelectOption: (optionId: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const MultipleChoiceQuestionView: React.FC<MultipleChoiceQuestionViewProps> = ({
  question,
  selectedOptionId,
  onSelectOption,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div className="space-y-5">
      {/* Question Header & Prompt */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[#176BFF]">
          <HelpCircle className="w-4 h-4 text-[#176BFF]" />
          <span>Pergunta {questionNumber} de {totalQuestions}</span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-[#160F2E] leading-snug">
          {question.questionText}
        </h3>

        {question.instruction && (
          <p className="text-xs text-[#52456F] font-medium">
            {question.instruction}
          </p>
        )}
      </div>

      {/* Options Radio List */}
      <div 
        role="radiogroup" 
        aria-label={question.questionText}
        className="space-y-2.5"
      >
        {question.options.map((option) => {
          const isSelected = selectedOptionId.toUpperCase() === option.id.toUpperCase();

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectOption(option.id)}
              className={`w-full p-4 rounded-2xl text-left transition-all duration-150 border flex items-center justify-between gap-3 cursor-pointer group ${
                isSelected
                  ? 'bg-white border-[#176BFF] ring-2 ring-[#176BFF]/25 shadow-sm'
                  : 'bg-white/70 hover:bg-white border-slate-200/90 text-[#160F2E]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Option Letter Circle (A, B, C, D) */}
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#176BFF] text-white shadow-xs'
                      : 'bg-slate-100 group-hover:bg-[#E1ECFC] text-[#52456F] group-hover:text-[#176BFF]'
                  }`}
                >
                  {option.id}
                </span>

                {/* Option Text */}
                <span
                  className={`text-xs sm:text-sm font-semibold leading-snug ${
                    isSelected ? 'text-[#160F2E] font-bold' : 'text-[#362D59]'
                  }`}
                >
                  {option.text}
                </span>
              </div>

              {/* Selection Checkmark Indicator */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  isSelected
                    ? 'bg-[#176BFF] border-[#176BFF] text-white'
                    : 'border-slate-300 bg-white group-hover:border-slate-400'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

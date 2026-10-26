import React, { useState } from 'react';
import { Volume2, Check, Ear } from 'lucide-react';
import { MultipleChoiceOption } from '../../../types/activity';
import { speakEnglish, stopSpeech } from '../../../utils/speech';

interface PerceptionQuestionBoxProps {
  questionText: string;
  options: MultipleChoiceOption[];
  audioText: string;
  selectedOptionId: string;
  onSelectOption: (id: string) => void;
}

export const PerceptionQuestionBox: React.FC<PerceptionQuestionBoxProps> = ({
  questionText,
  options,
  audioText,
  selectedOptionId,
  onSelectOption
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayAudio = () => {
    stopSpeech();
    setIsPlaying(true);
    speakEnglish(audioText, {
      rate: 0.85,
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false)
    });
  };

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white/95 border border-white/90 shadow-soft-card space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2 text-xs font-bold text-[#176BFF]">
          <Ear className="w-4 h-4 text-[#176BFF]" />
          <span>Etapa 1: Percepção Auditiva do Som</span>
        </div>

        <button
          type="button"
          onClick={handlePlayAudio}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#E1ECFC] text-[#176BFF] hover:bg-[#cde0fa] font-bold text-xs transition cursor-pointer self-start sm:self-auto"
        >
          <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse' : ''}`} />
          <span>{isPlaying ? 'Ouvindo Som...' : 'Ouvir Som da Questão'}</span>
        </button>
      </div>

      <h4 className="text-sm font-extrabold text-[#160F2E] leading-snug">
        {questionText}
      </h4>

      <div role="radiogroup" aria-label={questionText} className="space-y-2">
        {options.map((opt) => {
          const isSelected = selectedOptionId.toUpperCase() === opt.id.toUpperCase();
          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectOption(opt.id)}
              className={`w-full p-3.5 rounded-2xl text-left transition-all duration-150 border flex items-center justify-between gap-3 cursor-pointer group ${
                isSelected
                  ? 'bg-white border-[#176BFF] ring-2 ring-[#176BFF]/25 shadow-xs'
                  : 'bg-white/70 hover:bg-white border-slate-200/90 text-[#160F2E]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#176BFF] text-white'
                      : 'bg-slate-100 group-hover:bg-[#E1ECFC] text-[#52456F] group-hover:text-[#176BFF]'
                  }`}
                >
                  {opt.id}
                </span>

                <span
                  className={`text-xs sm:text-sm font-semibold leading-snug ${
                    isSelected ? 'text-[#160F2E] font-bold' : 'text-[#362D59]'
                  }`}
                >
                  {opt.text}
                </span>
              </div>

              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  isSelected
                    ? 'bg-[#176BFF] border-[#176BFF] text-white'
                    : 'border-slate-300 bg-white'
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

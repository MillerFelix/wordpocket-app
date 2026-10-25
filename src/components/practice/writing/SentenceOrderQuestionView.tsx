import React, { useState, useEffect } from 'react';
import { Layers, RotateCcw } from 'lucide-react';
import { SentenceOrderQuestion } from '../../../types/activity';

interface SentenceOrderQuestionViewProps {
  question: SentenceOrderQuestion;
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const SentenceOrderQuestionView: React.FC<SentenceOrderQuestionViewProps> = ({
  question,
  value,
  onChange,
  disabled = false
}) => {
  // Mantém os índices dos itens selecionados para preservar a ordem e suportar palavras repetidas
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  // Sincroniza estado inicial caso o valor já exista
  useEffect(() => {
    if (!value) {
      setSelectedIndices([]);
    }
  }, [question.id, value]);

  const handleSelectWord = (index: number) => {
    if (disabled || selectedIndices.includes(index)) return;
    const next = [...selectedIndices, index];
    setSelectedIndices(next);
    const assembled = next.map((i) => question.scrambledWords[i]).join(' ');
    onChange(assembled);
  };

  const handleRemoveWord = (index: number) => {
    if (disabled) return;
    const next = selectedIndices.filter((i) => i !== index);
    setSelectedIndices(next);
    const assembled = next.map((i) => question.scrambledWords[i]).join(' ');
    onChange(assembled);
  };

  const handleClear = () => {
    if (disabled) return;
    setSelectedIndices([]);
    onChange('');
  };

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E04D1B]">
          <Layers className="w-3.5 h-3.5" />
          <span>Organize as Palavras</span>
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-[#160F2E]">
          {question.prompt}
        </h3>
      </div>

      {/* Área da frase em montagem */}
      <div className="min-h-[72px] p-4 rounded-2xl bg-white border-2 border-dashed border-[#FFD2C2] flex flex-wrap items-center gap-2 relative shadow-2xs">
        {selectedIndices.length === 0 ? (
          <span className="text-xs sm:text-sm text-slate-400 font-medium italic select-none">
            Clique nas palavras abaixo para ordenar a frase...
          </span>
        ) : (
          selectedIndices.map((wordIdx) => (
            <button
              key={wordIdx}
              type="button"
              disabled={disabled}
              onClick={() => handleRemoveWord(wordIdx)}
              className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF5B26] to-[#FF7A4D] text-white font-bold text-xs sm:text-sm shadow-xs hover:scale-95 transition-transform cursor-pointer"
              title="Clique para remover"
            >
              <span>{question.scrambledWords[wordIdx]}</span>
            </button>
          ))
        )}

        {selectedIndices.length > 0 && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-3 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition text-xs font-semibold flex items-center gap-1 cursor-pointer"
            title="Reiniciar ordem"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Limpar</span>
          </button>
        )}
      </div>

      {/* Banco de palavras disponíveis */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#52456F] uppercase tracking-wider block">
          Palavras disponíveis:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {question.scrambledWords.map((word, idx) => {
            const isUsed = selectedIndices.includes(idx);
            return (
              <button
                key={idx}
                type="button"
                disabled={disabled || isUsed}
                onClick={() => handleSelectWord(idx)}
                className={`px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-150 border select-none ${
                  isUsed
                    ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-40 cursor-default'
                    : 'bg-white hover:bg-[#FFEAE1] hover:border-[#FF5B26] text-[#160F2E] border-slate-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer'
                }`}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

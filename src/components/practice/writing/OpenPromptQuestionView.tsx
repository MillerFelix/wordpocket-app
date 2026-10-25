import React from 'react';
import { PenTool, Sparkles, MessageSquare } from 'lucide-react';
import { OpenPromptQuestion } from '../../../types/activity';

interface OpenPromptQuestionViewProps {
  question: OpenPromptQuestion;
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const OpenPromptQuestionView: React.FC<OpenPromptQuestionViewProps> = ({
  question,
  value,
  onChange,
  disabled = false
}) => {
  const words = (value || '').trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const minWords = question.minWords || 5;

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-[#E04D1B]">
          <PenTool className="w-3.5 h-3.5" />
          <span>Escreva sua Resposta</span>
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-[#160F2E]">
          {question.promptQuestion}
        </h3>
      </div>

      {/* Cenário Contextual */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#E6D9FB]/30 via-[#FFEAE1]/50 to-white border border-[#FFD2C2] space-y-1.5 shadow-2xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#6545F5]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Situação do Dia a Dia</span>
        </div>
        <p className="text-xs sm:text-sm text-[#160F2E] font-medium leading-relaxed">
          {question.contextScenario}
        </p>
      </div>

      {/* Sugestões de Vocabulário / Palavras-chave */}
      {question.suggestedKeywords && question.suggestedKeywords.length > 0 && (
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-[#52456F] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#FFD447]" />
            <span>Sugestões úteis para incluir:</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {question.suggestedKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-[#160F2E]"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Área de escrita livre */}
      <div className="space-y-2">
        <div className="relative">
          <textarea
            rows={4}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Escreva sua resposta completa em inglês aqui..."
            className="w-full p-4 rounded-2xl border-2 border-slate-200 bg-white text-[#160F2E] font-medium text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#FF5B26]/20 focus:border-[#FF5B26] transition shadow-2xs resize-none placeholder:text-slate-400 leading-relaxed"
            autoFocus
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#52456F] font-semibold px-1">
          <span>
            {wordCount >= minWords ? (
              <span className="text-[#0A9B80] font-bold">✓ {wordCount} palavras escritas</span>
            ) : (
              <span>{wordCount} / {minWords} palavras mínimas sugeridas</span>
            )}
          </span>
          <span className="italic text-slate-400">
            A correção avalia clareza e contexto, sem exigir resposta idêntica ao modelo.
          </span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BookOpen, Clock, Tag, HelpCircle, Eye, EyeOff } from 'lucide-react';
import { ReadingPassage } from '../../../types/activity';

interface ReadingPassageViewProps {
  passage: ReadingPassage;
  activityTitle: string;
}

export const ReadingPassageView: React.FC<ReadingPassageViewProps> = ({
  passage,
  activityTitle
}) => {
  const [showFullTranslation, setShowFullTranslation] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border border-white/90 shadow-soft-card space-y-4">
      {/* Passage Header Bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#E1ECFC] text-[#176BFF] flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#176BFF] block">
              Texto de Leitura
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-[#160F2E] leading-snug">
              {passage.title || activityTitle}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {passage.genre && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#52456F] bg-slate-100 px-2.5 py-1 rounded-full">
              <Tag className="w-3 h-3 text-[#52456F]" />
              <span>{passage.genre}</span>
            </span>
          )}

          {passage.estimatedReadTimeMinutes && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#52456F] bg-slate-100 px-2.5 py-1 rounded-full">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>~{passage.estimatedReadTimeMinutes} min</span>
            </span>
          )}
        </div>
      </div>

      {/* Main English Text Content */}
      <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50/80 to-white border border-slate-200/80">
        <div className="text-sm sm:text-base text-[#160F2E] font-medium leading-relaxed sm:leading-loose whitespace-pre-line select-text">
          {passage.content}
        </div>
      </div>

      {/* Reading Assistance Actions: Informative Glossary & Excerpt Translation */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {/* Glossary Toggle Button */}
          {passage.glossary && passage.glossary.length > 0 && (
            <button
              type="button"
              onClick={() => setShowGlossary((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                showGlossary
                  ? 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
                  : 'bg-white hover:bg-slate-50 text-[#52456F] border-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#176BFF]" />
              <span>Glossário & Dicas ({passage.glossary.length})</span>
            </button>
          )}

          {/* Full Translation Optional Toggle */}
          {passage.passageTranslation && (
            <button
              type="button"
              onClick={() => setShowFullTranslation((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#52456F] hover:text-[#160F2E] bg-white hover:bg-slate-50 border border-slate-200 transition cursor-pointer"
            >
              {showFullTranslation ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ocultar Tradução</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-[#176BFF]" />
                  <span>Consultar Tradução de Apoio</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Informative Glossary Drawer (Exclusively Informative, No Clickable Terms) */}
        {showGlossary && passage.glossary && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/50 border border-blue-200/80 space-y-2.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#176BFF]">
                💡 Vocabulário & Dicas do Texto:
              </span>
              <span className="text-[11px] text-[#52456F] font-semibold">
                {passage.glossary.length} termos explicados
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {passage.glossary.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs bg-white/95 border border-blue-200/80 text-[#160F2E] shadow-2xs inline-flex items-center gap-1.5 select-text"
                >
                  <span className="font-extrabold text-[#160F2E]">{item.word}</span>
                  <span className="text-[#52456F] font-normal">• {item.translation}</span>
                  {item.context && (
                    <span className="text-[11px] text-slate-400 font-normal italic">
                      ({item.context})
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Translation Modal/Accordion */}
        {showFullTranslation && passage.passageTranslation && (
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1.5 text-xs text-amber-950 font-medium leading-relaxed animate-in fade-in duration-200">
            <div className="flex items-center gap-1.5 text-amber-800 font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Tradução de Apoio (Português):</span>
            </div>
            <p className="whitespace-pre-line text-slate-700">
              {passage.passageTranslation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

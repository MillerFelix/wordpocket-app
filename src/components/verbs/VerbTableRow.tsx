import React from 'react';
import { ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { IrregularVerb } from '../../types';
import { PronounceButton } from '../PronounceButton';

interface VerbTableRowProps {
  verb: IrregularVerb;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
}

export const VerbTableRow: React.FC<VerbTableRowProps> = ({
  verb,
  isExpanded,
  onToggleExpand,
}) => {
  return (
    <>
      <tr
        onClick={() => onToggleExpand(verb.id)}
        onKeyDown={(e) => {
          if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onToggleExpand(verb.id);
          }
        }}
        tabIndex={0}
        aria-expanded={isExpanded}
        className={`group cursor-pointer transition-colors duration-150 border-b border-white/80 focus-visible:outline-none focus-visible:bg-[#F3EDFD] ${
          isExpanded ? 'bg-[#F3EDFD]' : 'hover:bg-white/90'
        }`}
      >
        {/* Forma 1: Forma base (fixa na rolagem horizontal em telas móveis) */}
        <td
          className={`py-2 sm:py-3.5 px-2 sm:px-5 border-r border-white/80 sticky left-0 z-10 transition-colors ${
            isExpanded ? 'bg-[#F2ECFD]' : 'bg-white/95 group-hover:bg-white'
          } shadow-[2px_0_6px_rgba(0,0,0,0.03)] w-[28%] sm:w-[24%] min-w-[130px] sm:min-w-[160px]`}
        >
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <span className="font-extrabold text-[#160F2E] capitalize text-xs sm:text-[15px] truncate">
              {verb.infinitive}
            </span>
            <div className="shrink-0 flex items-center gap-1">
              <PronounceButton text={verb.infinitive} size="xs" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleExpand(verb.id);
                }}
                aria-label={
                  isExpanded
                    ? `Recolher exemplo de ${verb.infinitive}`
                    : `Ver exemplo de ${verb.infinitive}`
                }
                aria-expanded={isExpanded}
                className="p-1 -mr-1 rounded-lg text-[#52456F] hover:text-[#6938F5] hover:bg-[#EAE1FD] transition sm:hidden inline-flex items-center justify-center cursor-pointer"
              >
                {isExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#6938F5]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </td>

        {/* Forma 2: Passado simples */}
        <td className="py-2 sm:py-3.5 px-2 sm:px-5 border-r border-white/80 whitespace-nowrap w-[20%] sm:w-[22%] min-w-[100px] sm:min-w-[130px]">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <span className="font-mono font-bold text-[#0A9B80] text-xs sm:text-[14px] truncate">
              {verb.pastSimple}
            </span>
            <div className="shrink-0">
              <PronounceButton text={verb.pastSimple} size="xs" />
            </div>
          </div>
        </td>

        {/* Forma 3: Particípio passado */}
        <td className="py-2 sm:py-3.5 px-2 sm:px-5 border-r border-white/80 whitespace-nowrap w-[20%] sm:w-[22%] min-w-[100px] sm:min-w-[130px]">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <span className="font-mono font-bold text-[#E04D1B] text-xs sm:text-[14px] truncate">
              {verb.pastParticiple}
            </span>
            <div className="shrink-0">
              <PronounceButton text={verb.pastParticiple} size="xs" />
            </div>
          </div>
        </td>

        {/* Tradução e variantes */}
        <td className="py-2 sm:py-3.5 px-2 sm:px-5 text-[#160F2E] font-medium border-r border-white/80 text-xs sm:text-sm min-w-[110px]">
          <span className="block leading-snug">{verb.translation}</span>
          {verb.variants && (
            <span className="block text-[10px] sm:text-[11px] font-semibold text-[#FF6534] mt-0.5 leading-tight">
              {verb.variants}
            </span>
          )}
        </td>

        {/* Ações: alternar expansão */}
        <td className="py-2 sm:py-3.5 px-1 sm:px-4 text-center w-9 sm:w-16 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand(verb.id);
            }}
            aria-label={
              isExpanded
                ? `Recolher exemplo de ${verb.infinitive}`
                : `Ver exemplo de ${verb.infinitive}`
            }
            aria-expanded={isExpanded}
            className="p-1 rounded-lg text-[#52456F] hover:text-[#6938F5] hover:bg-[#EAE1FD] transition inline-flex items-center justify-center cursor-pointer"
          >
            {isExpanded ? (
              <ChevronUp className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#6938F5]" />
            ) : (
              <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            )}
          </button>
        </td>
      </tr>

      {/* Linha expandida com exemplo contextual de uso */}
      {isExpanded && (
        <tr className="bg-gradient-to-r from-[#F6F1FF] to-[#EFF7FE] border-b border-[#E2D7F8]">
          <td colSpan={5} className="p-0 sm:py-2.5 sm:px-6">
            <div className="sticky left-0 w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] sm:w-full sm:max-w-none p-2.5 sm:p-0 box-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/90 shadow-2xs">
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#6938F5] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD447]" />
                    Exemplo de uso natural em inglês
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#160F2E] italic leading-snug break-words">
                    "{verb.example}"
                  </p>
                </div>
                <div className="shrink-0 pt-0.5 self-end sm:self-center">
                  <PronounceButton text={verb.example} size="sm" showLabel />
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

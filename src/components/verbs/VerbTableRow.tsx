import React from 'react';
import { Star, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { IrregularVerb } from '../../types';
import { PronounceButton } from '../PronounceButton';

interface VerbTableRowProps {
  verb: IrregularVerb;
  isExpanded: boolean;
  isFavorite: boolean;
  onToggleExpand: (id: string) => void;
  onToggleFavorite: (infinitive: string, e: React.MouseEvent) => void;
}

export const VerbTableRow: React.FC<VerbTableRowProps> = ({
  verb,
  isExpanded,
  isFavorite,
  onToggleExpand,
  onToggleFavorite
}) => {
  return (
    <>
      <tr
        onClick={() => onToggleExpand(verb.id)}
        className={`group cursor-pointer transition-colors duration-150 border-b border-white/80 ${
          isExpanded ? 'bg-[#F3EDFD]' : 'hover:bg-white/90'
        }`}
      >
        {/* Form 1: Base Form (Sticky pinned on mobile so it stays visible during horizontal scroll) */}
        <td
          className={`py-2 sm:py-3.5 px-2.5 sm:px-5 border-r border-white/80 sticky left-0 z-10 transition-colors ${
            isExpanded ? 'bg-[#F2ECFD]' : 'bg-white/95 group-hover:bg-white'
          } shadow-[2px_0_6px_rgba(0,0,0,0.03)] w-[26%] sm:w-[24%] min-w-[130px] sm:min-w-[160px]`}
        >
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
              <button
                type="button"
                onClick={(e) => onToggleFavorite(verb.infinitive, e)}
                className="text-[#52456F] hover:text-[#F52E91] transition p-0.5 shrink-0"
                title={isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
              >
                <Star
                  className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${
                    isFavorite ? 'fill-[#F52E91] text-[#F52E91]' : 'stroke-[1.8]'
                  }`}
                />
              </button>
              <span className="font-extrabold text-[#160F2E] capitalize text-xs sm:text-[15px] truncate">
                {verb.infinitive}
              </span>
            </div>
            <div className="shrink-0">
              <PronounceButton text={verb.infinitive} size="xs" />
            </div>
          </div>
        </td>

        {/* Form 2: Simple Past (Fresh Mint column) */}
        <td className="py-2 sm:py-3.5 px-2.5 sm:px-5 border-r border-white/80 whitespace-nowrap w-[20%] sm:w-[22%] min-w-[105px] sm:min-w-[130px]">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <span className="font-mono font-bold text-[#0A9B80] text-xs sm:text-[14px] truncate">
              {verb.pastSimple}
            </span>
            <div className="shrink-0">
              <PronounceButton text={verb.pastSimple} size="xs" />
            </div>
          </div>
        </td>

        {/* Form 3: Past Participle (Tangerine column) */}
        <td className="py-2 sm:py-3.5 px-2.5 sm:px-5 border-r border-white/80 whitespace-nowrap w-[20%] sm:w-[22%] min-w-[105px] sm:min-w-[130px]">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <span className="font-mono font-bold text-[#E04D1B] text-xs sm:text-[14px] truncate">
              {verb.pastParticiple}
            </span>
            <div className="shrink-0">
              <PronounceButton text={verb.pastParticiple} size="xs" />
            </div>
          </div>
        </td>

        {/* Translation & Variant Tag */}
        <td className="py-2 sm:py-3.5 px-2.5 sm:px-5 text-[#160F2E] font-medium border-r border-white/80 text-xs sm:text-sm min-w-[120px]">
          <span className="block leading-snug">{verb.translation}</span>
          {verb.variants && (
            <span className="block text-[10px] sm:text-[11px] font-semibold text-[#FF6534] mt-0.5 leading-tight">
              {verb.variants}
            </span>
          )}
        </td>

        {/* Actions (Expand toggle) */}
        <td className="py-2 sm:py-3.5 px-1.5 sm:px-4 text-center w-10 sm:w-16 shrink-0">
          <button
            type="button"
            aria-label={`Ver exemplo de ${verb.infinitive}`}
            className="p-1 rounded-lg text-[#52456F] hover:text-[#6938F5] hover:bg-[#EAE1FD] transition inline-flex items-center justify-center"
          >
            {isExpanded ? (
              <ChevronUp className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            ) : (
              <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            )}
          </button>
        </td>
      </tr>

      {/* Expanded Contextual Example Row */}
      {isExpanded && (
        <tr className="bg-gradient-to-r from-[#F6F1FF] to-[#EFF7FE] border-b border-[#E2D7F8]">
          <td colSpan={5} className="py-2.5 sm:py-3 px-3 sm:px-6">
            <div className="flex items-start justify-between gap-3 sm:gap-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/90 shadow-2xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#6938F5] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD447]" />
                  Exemplo de uso natural em inglês
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#160F2E] italic leading-snug">
                  "{verb.example}"
                </p>
              </div>
              <PronounceButton text={verb.example} size="sm" showLabel />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

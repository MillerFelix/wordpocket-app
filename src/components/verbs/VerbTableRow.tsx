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
        className={`cursor-pointer transition-colors duration-150 ${
          isExpanded ? 'bg-[#EAE1FD]/60' : 'hover:bg-white/90'
        }`}
      >
        {/* Base Form: With Favorite Star */}
        <td className="py-3.5 px-5 border-r border-white/80">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={(e) => onToggleFavorite(verb.infinitive, e)}
                className="text-[#52456F] hover:text-[#F52E91] transition"
                title={isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
              >
                <Star
                  className={`w-4 h-4 ${
                    isFavorite ? 'fill-[#F52E91] text-[#F52E91]' : 'stroke-[1.8]'
                  }`}
                />
              </button>
              <span className="font-extrabold text-[#160F2E] capitalize text-[15px]">
                {verb.infinitive}
              </span>
            </div>
            <PronounceButton text={verb.infinitive} size="xs" />
          </div>
        </td>

        {/* Simple Past */}
        <td className="py-3.5 px-5 border-r border-white/80">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono font-bold text-[#0A9B80] text-[14px]">
              {verb.pastSimple}
            </span>
            <PronounceButton text={verb.pastSimple.replace(/\([^)]*\)/g, '')} size="xs" />
          </div>
        </td>

        {/* Past Participle */}
        <td className="py-3.5 px-5 border-r border-white/80">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono font-bold text-[#E04D1B] text-[14px]">
              {verb.pastParticiple}
            </span>
            <PronounceButton text={verb.pastParticiple.replace(/\([^)]*\)/g, '')} size="xs" />
          </div>
        </td>

        {/* Translation & Variant Tag */}
        <td className="py-3.5 px-5 text-[#160F2E] font-medium border-r border-white/80">
          <span>{verb.translation}</span>
          {verb.variants && (
            <span className="block text-[11px] font-semibold text-[#FF6534] mt-0.5">
              {verb.variants}
            </span>
          )}
        </td>

        {/* Expand icon */}
        <td className="py-3.5 px-4 text-center">
          <button
            type="button"
            aria-label={`Ver exemplo de ${verb.infinitive}`}
            className="p-1 rounded-lg text-[#52456F] hover:text-[#6938F5] hover:bg-[#EAE1FD] transition"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </td>
      </tr>

      {/* Expanded Example Row */}
      {isExpanded && (
        <tr className="bg-gradient-to-r from-[#F6F1FF] to-[#EFF7FE] border-b border-[#E2D7F8]">
          <td colSpan={5} className="py-3 px-6">
            <div className="flex items-start justify-between gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/90 shadow-2xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#6938F5] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD447]" />
                  Exemplo de uso natural em inglês
                </span>
                <p className="text-sm font-semibold text-[#160F2E] italic">
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

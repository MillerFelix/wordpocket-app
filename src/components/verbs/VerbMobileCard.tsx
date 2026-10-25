import React from 'react';
import { Star, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { IrregularVerb } from '../../types';
import { PronounceButton } from '../PronounceButton';

interface VerbMobileCardProps {
  verb: IrregularVerb;
  isExpanded: boolean;
  isFavorite: boolean;
  onToggleExpand: (id: string) => void;
  onToggleFavorite: (infinitive: string, e: React.MouseEvent) => void;
}

export const VerbMobileCard: React.FC<VerbMobileCardProps> = ({
  verb,
  isExpanded,
  isFavorite,
  onToggleExpand,
  onToggleFavorite
}) => {
  return (
    <div
      onClick={() => onToggleExpand(verb.id)}
      className={`bg-white/80 backdrop-blur-xl rounded-3xl border transition-all duration-150 p-4 shadow-soft-card cursor-pointer ${
        isExpanded ? 'border-[#6938F5] ring-2 ring-[#6938F5]/15' : 'border-white/90'
      }`}
    >
      {/* Header: Infinitive + Translation + Star */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => onToggleFavorite(verb.infinitive, e)}
            className="text-[#52456F] hover:text-[#F52E91] transition p-0.5"
            title={isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
          >
            <Star
              className={`w-4 h-4 ${
                isFavorite ? 'fill-[#F52E91] text-[#F52E91]' : 'stroke-[1.8]'
              }`}
            />
          </button>
          <h3 className="text-lg font-extrabold text-[#160F2E] capitalize">
            {verb.infinitive}
          </h3>
          <PronounceButton text={verb.infinitive} size="xs" />
        </div>
        <span className="text-xs text-[#160F2E] bg-white/85 border border-white/90 px-2.5 py-1 rounded-xl font-bold max-w-[160px] truncate shadow-2xs">
          {verb.translation}
        </span>
      </div>

      {/* Two Column Semantic Grid for Past & Participle */}
      <div className="grid grid-cols-2 gap-2 mt-3">
        {/* Simple Past: Fresh Mint */}
        <div className="bg-[#DCF8F1] border border-[#B6F5E8] rounded-2xl p-2.5">
          <div className="flex items-center justify-between text-[10px] uppercase font-extrabold text-[#0A9B80]">
            <span>Simple Past</span>
            <PronounceButton text={verb.pastSimple.replace(/\([^)]*\)/g, '')} size="xs" />
          </div>
          <p className="text-xs font-mono font-bold text-[#0A9B80] mt-1">
            {verb.pastSimple}
          </p>
        </div>

        {/* Past Participle: Tangerine */}
        <div className="bg-[#FFEAE1] border border-[#FFD9CA] rounded-2xl p-2.5">
          <div className="flex items-center justify-between text-[10px] uppercase font-extrabold text-[#E04D1B]">
            <span>Past Participle</span>
            <PronounceButton text={verb.pastParticiple.replace(/\([^)]*\)/g, '')} size="xs" />
          </div>
          <p className="text-xs font-mono font-bold text-[#E04D1B] mt-1">
            {verb.pastParticiple}
          </p>
        </div>
      </div>

      {/* Variant Tag */}
      {verb.variants && (
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-[#52456F] bg-white/80 border border-white/90 px-3 py-1 rounded-xl font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD447] shrink-0" />
          <span>{verb.variants}</span>
        </div>
      )}

      {/* Collapsed Example Hint */}
      <div className="mt-3 pt-2 border-t border-[#E2D7F8] flex items-center justify-between text-xs text-[#52456F] font-semibold">
        <span>Exemplo em contexto</span>
        {isExpanded ? (
          <ChevronUp className="w-3.5 h-3.5 text-[#6938F5]" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5" />
        )}
      </div>

      {isExpanded && (
        <div className="mt-2 p-3 rounded-2xl bg-white/90 border border-white/90 space-y-1.5 animate-in fade-in shadow-2xs">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs italic font-bold text-[#160F2E]">
              "{verb.example}"
            </p>
            <PronounceButton text={verb.example} size="xs" />
          </div>
        </div>
      )}
    </div>
  );
};

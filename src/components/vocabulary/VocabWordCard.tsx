import React from 'react';
import { BookA, Star } from 'lucide-react';
import { VocabWord } from '../../types';
import { PronounceButton } from '../PronounceButton';

interface VocabWordCardProps {
  item: VocabWord;
  isFavorite: boolean;
  onToggleFavorite: (word: string, e: React.MouseEvent) => void;
}

export const VocabWordCard: React.FC<VocabWordCardProps> = ({
  item,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <article className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 hover:border-white hover:bg-white/90 shadow-soft-card hover:shadow-soft-hover transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between group">
      <div>
        {/* Word Header: Term, Phonetics, Category Badges & Audio & Favorite */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-extrabold text-[#160F2E] group-hover:text-[#0A9B80] transition-colors">
                {item.word}
              </h3>
              {item.phonetic && (
                <span className="text-xs font-mono font-medium text-[#6938F5] bg-white/80 px-2 py-0.5 rounded-lg border border-white/90 shadow-2xs">
                  {item.phonetic}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#EAE1FD] text-[#6938F5] px-2 py-0.5 rounded-md border border-white/90">
                {item.partOfSpeech}
              </span>
              <span className="text-[10px] font-semibold text-[#0A9B80] bg-[#DCF8F1] px-2 py-0.5 rounded-md border border-[#B6F5E8]">
                {item.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <PronounceButton text={item.word} size="md" />
            <button
              type="button"
              onClick={(e) => onToggleFavorite(item.word, e)}
              className="p-1.5 rounded-xl text-[#52456F] hover:text-[#F52E91] hover:bg-[#FFF0F6] transition"
              title={isFavorite ? 'Remover dos favoritos' : 'Favoritar palavra'}
            >
              <Star
                className={`w-4 h-4 ${
                  isFavorite ? 'fill-[#F52E91] text-[#F52E91]' : 'stroke-[1.8]'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Primary Translation & Definition */}
        <div className="mt-4 space-y-1.5">
          <p className="text-base font-extrabold text-[#160F2E]">
            {item.translation}
          </p>
          <p className="text-xs text-[#52456F] leading-relaxed">
            {item.meaning}
          </p>
        </div>

        {/* Senses / Multiple Meanings */}
        {item.senses && item.senses.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[#E2D7F8] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#52456F] flex items-center gap-1">
              <BookA className="w-3 h-3 text-[#19D9B4]" />
              Outros sentidos contextuais:
            </span>
            <ol className="space-y-1.5 text-xs">
              {item.senses.map((sense, sIdx) => (
                <li
                  key={sIdx}
                  className="bg-white/70 p-2.5 rounded-xl border border-white/80 leading-relaxed"
                >
                  <span className="font-bold text-[#160F2E]">
                    {sIdx + 1}. {sense.translation}:
                  </span>{' '}
                  <span className="text-[#52456F]">{sense.meaning}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Synonyms Tags */}
        {item.synonyms && item.synonyms.length > 0 && (
          <div className="mt-3.5 flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold text-[#52456F]">Sinônimos:</span>
            {item.synonyms.map((syn, synIdx) => (
              <span
                key={synIdx}
                className="text-[11px] font-semibold text-[#160F2E] bg-white/80 hover:bg-[#DCF8F1] hover:text-[#0A9B80] px-2 py-0.5 rounded-md border border-white/90 transition shadow-2xs"
              >
                {syn}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Contextual Sentence Example Footer */}
      <div className="mt-5 pt-3.5 border-t border-white/80 bg-gradient-to-r from-[#DCF8F1]/80 to-[#E6F3FE]/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 sm:p-5 rounded-b-3xl space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs font-bold text-[#160F2E] italic leading-snug">
            "{item.exampleEn}"
          </p>
          <PronounceButton text={item.exampleEn} size="xs" />
        </div>
        <p className="text-[11px] text-[#52456F] font-medium">
          {item.examplePt}
        </p>
      </div>
    </article>
  );
};

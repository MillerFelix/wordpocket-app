import React, { useState } from 'react';
import { Star, BookOpen, BookA, ArrowRight, Trash2 } from 'lucide-react';
import { TabType } from '../types';
import { irregularVerbs } from '../data/irregularVerbs';
import { vocabularyData } from '../data/vocabulary';
import { PronounceButton } from './PronounceButton';

interface FavoritesViewProps {
  onNavigate: (tab: TabType, term?: string) => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({ onNavigate }) => {
  const [favVerbs, setFavVerbs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wordpocket_fav_verbs') || localStorage.getItem('upword_fav_verbs');
      return saved ? JSON.parse(saved) : ['go', 'be', 'begin'];
    } catch {
      return ['go', 'be', 'begin'];
    }
  });

  const [favVocab, setFavVocab] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wordpocket_fav_vocab') || localStorage.getItem('upword_fav_vocab');
      return saved ? JSON.parse(saved) : ['resilient', 'beautiful'];
    } catch {
      return ['resilient', 'beautiful'];
    }
  });

  const removeVerb = (infinitive: string) => {
    const next = favVerbs.filter((v) => v !== infinitive);
    setFavVerbs(next);
    localStorage.setItem('wordpocket_fav_verbs', JSON.stringify(next));
  };

  const removeVocab = (word: string) => {
    const next = favVocab.filter((w) => w !== word);
    setFavVocab(next);
    localStorage.setItem('wordpocket_fav_vocab', JSON.stringify(next));
  };

  const verbsList = irregularVerbs.filter((v) => favVerbs.includes(v.infinitive));
  const vocabList = vocabularyData.filter((w) => favVocab.includes(w.word));

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-start gap-3.5 pb-1">
        <div className="w-11 h-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-colored-violet shrink-0 ring-4 ring-white/80">
          <Star className="w-5 h-5 stroke-[2.3] fill-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F52E91]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F52E91]">
              Coleção Pessoal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
            Seus Favoritos
          </h1>
          <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-1">
            Palavras e verbos marcados com estrela para revisão rápida e fixação de vocabulário no Word Pocket.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Verbos Favoritos */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2D7F8]">
            <div className="flex items-center gap-2 text-sm font-extrabold text-[#160F2E]">
              <BookOpen className="w-4 h-4 text-[#6938F5]" />
              <span>Verbos Salvos ({verbsList.length})</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('verbs')}
              className="text-xs font-bold text-[#6938F5] hover:underline flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {verbsList.length === 0 ? (
            <p className="text-xs text-[#52456F] py-4 text-center">
              Nenhum verbo favoritado ainda. Clique na estrela na tabela para salvar verbos aqui.
            </p>
          ) : (
            <div className="space-y-2">
              {verbsList.map((verb) => (
                <div
                  key={verb.id}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/70 border border-white/80 hover:bg-white hover:border-[#6938F5]/40 transition group shadow-2xs"
                >
                  <div
                    onClick={() => onNavigate('verbs', verb.infinitive)}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-[#160F2E] group-hover:text-[#6938F5] transition">
                        {verb.infinitive}
                      </span>
                      <span className="text-xs font-mono text-[#52456F]">
                        ({verb.pastSimple} • {verb.pastParticiple})
                      </span>
                    </div>
                    <p className="text-xs text-[#52456F] mt-0.5">
                      {verb.translation}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 pl-2">
                    <PronounceButton text={verb.infinitive} size="xs" />
                    <button
                      type="button"
                      onClick={() => removeVerb(verb.infinitive)}
                      className="p-1 rounded-lg text-[#52456F] hover:text-[#F52E91] transition"
                      title="Remover dos favoritos"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Vocabulário Favorito */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#B6F5E8]">
            <div className="flex items-center gap-2 text-sm font-extrabold text-[#160F2E]">
              <BookA className="w-4 h-4 text-[#0A9B80]" />
              <span>Vocabulário Salvo ({vocabList.length})</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('vocab')}
              className="text-xs font-bold text-[#0A9B80] hover:underline flex items-center gap-1"
            >
              <span>Ver dicionário</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {vocabList.length === 0 ? (
            <p className="text-xs text-[#52456F] py-4 text-center">
              Nenhuma palavra favoritada ainda. Clique na estrela em qualquer card do dicionário.
            </p>
          ) : (
            <div className="space-y-2">
              {vocabList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/70 border border-white/80 hover:bg-white hover:border-[#19D9B4] transition group shadow-2xs"
                >
                  <div
                    onClick={() => onNavigate('vocab', item.word)}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-[#160F2E] group-hover:text-[#0A9B80] transition">
                        {item.word}
                      </span>
                      {item.phonetic && (
                        <span className="text-xs font-mono text-[#52456F]">
                          {item.phonetic}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#52456F] mt-0.5 truncate max-w-[200px]">
                      {item.translation}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 pl-2">
                    <PronounceButton text={item.word} size="xs" />
                    <button
                      type="button"
                      onClick={() => removeVocab(item.word)}
                      className="p-1 rounded-lg text-[#52456F] hover:text-[#F52E91] transition"
                      title="Remover dos favoritos"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

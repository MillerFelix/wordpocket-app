import React, { useState, useMemo } from 'react';
import { Star, BookOpen, ArrowRight, Trash2, Search } from 'lucide-react';
import { TabType } from '../types';
import { verbsService } from '../services/verbsService';
import { PronounceButton } from './PronounceButton';
import { useFavorites } from '../hooks/useFavorites';

interface FavoritesViewProps {
  onNavigate: (tab: TabType, term?: string) => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({ onNavigate }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const { favorites: favVerbsSet, removeFavorite: removeVerb } = useFavorites(
    'wordpocket_fav_verbs',
    ['go', 'be', 'begin'],
    'upword_fav_verbs'
  );

  const verbsList = useMemo(() => {
    return verbsService.getAll().filter((v) => favVerbsSet.has(v.infinitive));
  }, [favVerbsSet]);

  const filteredList = useMemo(() => {
    const q = filterQuery.trim().toLowerCase();
    if (!q) return verbsList;
    return verbsList.filter(
      (v) =>
        v.infinitive.toLowerCase().includes(q) ||
        v.pastSimple.toLowerCase().includes(q) ||
        v.pastParticiple.toLowerCase().includes(q) ||
        v.translation.toLowerCase().includes(q)
    );
  }, [verbsList, filterQuery]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div className="flex items-start gap-3.5">
          <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-2xl bg-gradient-verbs text-white flex items-center justify-center shadow-colored-violet shrink-0 ring-4 ring-white/80">
            <Star className="w-5 sm:w-6 h-5 sm:h-6 stroke-[2.3] fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6545F5]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6545F5]">
                Coleção Pessoal
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
              Verbos Favoritos
            </h1>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-1">
              Verbos irregulares marcados com estrela para revisão rápida, fixação e pronúncia.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('verbs')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 hover:bg-white text-[#6545F5] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition self-start sm:self-auto group cursor-pointer"
        >
          <span>Tabela completa ({verbsService.getCount()})</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border border-white/90 shadow-soft-card space-y-5">
        {/* Sub-header with search inside favorites */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E2D7F8]">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#160F2E]">
            <BookOpen className="w-4 h-4 text-[#6545F5]" />
            <span>
              {verbsList.length} {verbsList.length === 1 ? 'verbo salvo' : 'verbos salvos'}
            </span>
          </div>

          {verbsList.length > 3 && (
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#52456F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filtrar nesta lista..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/90 border border-white/90 text-xs text-[#160F2E] placeholder-[#52456F] focus:outline-none focus:ring-2 focus:ring-[#6545F5]/30 shadow-2xs"
              />
            </div>
          )}
        </div>

        {/* Empty State */}
        {verbsList.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE8FD] text-[#6545F5] flex items-center justify-center mx-auto shadow-2xs">
              <Star className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-base font-extrabold text-[#160F2E]">
              Nenhum verbo favoritado ainda
            </h3>
            <p className="text-xs text-[#52456F] max-w-sm mx-auto leading-relaxed">
              Na tabela de verbos irregulares, clique no ícone de estrela de qualquer verbo para fixá-lo aqui na sua coleção de revisão rápida.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('verbs')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-verbs text-white font-bold text-xs shadow-xs hover:opacity-95 transition"
              >
                <span>Explorar verbos irregulares</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="py-8 text-center text-xs text-[#52456F]">
            Nenhum verbo corresponde a "{filterQuery}".
          </div>
        ) : (
          /* Grid of Favorite Verbs */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {filteredList.map((verb) => (
              <div
                key={verb.id}
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-white/90 hover:bg-white hover:border-[#6545F5]/40 transition group shadow-2xs"
              >
                <div
                  onClick={() => onNavigate('verbs', verb.infinitive)}
                  className="flex-1 cursor-pointer min-w-0 pr-3"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-sm sm:text-base text-[#160F2E] group-hover:text-[#6545F5] transition">
                      {verb.infinitive}
                    </span>
                    <span className="text-xs font-mono text-[#52456F] bg-white/80 px-2 py-0.5 rounded-md border border-white/80">
                      {verb.pastSimple} • {verb.pastParticiple}
                    </span>
                  </div>
                  <p className="text-xs text-[#52456F] mt-1 font-medium truncate">
                    {verb.translation}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <PronounceButton text={verb.infinitive} size="xs" />
                  <button
                    type="button"
                    onClick={() => removeVerb(verb.infinitive)}
                    className="p-1.5 rounded-xl text-[#52456F] hover:text-[#F52E91] hover:bg-[#FFF0F6] transition"
                    title="Remover dos favoritos"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

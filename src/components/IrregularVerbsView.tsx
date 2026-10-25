import React, { useMemo, useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  Filter, 
  Sparkles, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Info, 
  HelpCircle,
  Star
} from 'lucide-react';
import { irregularVerbs } from '../data/irregularVerbs';
import { VerbGroup } from '../types';
import { PronounceButton } from './PronounceButton';

interface IrregularVerbsViewProps {
  initialSearch?: string;
}

export const IrregularVerbsView: React.FC<IrregularVerbsViewProps> = ({ initialSearch = '' }) => {
  const [search, setSearch] = useState(initialSearch);
  const [selectedGroup, setSelectedGroup] = useState<VerbGroup | 'all'>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [showCoverageInfo, setShowCoverageInfo] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('wordpocket_fav_verbs') || localStorage.getItem('upword_fav_verbs');
      return saved ? new Set(JSON.parse(saved)) : new Set(['go', 'be', 'begin']);
    } catch {
      return new Set(['go', 'be', 'begin']);
    }
  });

  useEffect(() => {
    if (initialSearch) {
      setSearch(initialSearch);
    }
  }, [initialSearch]);

  const toggleFavorite = (infinitive: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(infinitive)) {
        next.delete(infinitive);
      } else {
        next.add(infinitive);
      }
      try {
        localStorage.setItem('wordpocket_fav_verbs', JSON.stringify(Array.from(next)));
      } catch {
        // Fallback for storage quota
      }
      return next;
    });
  };

  const filterOptions: { id: VerbGroup | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos os Verbos' },
    { id: 'identical', label: '3 Formas Iguais (hit / cut)' },
    { id: 'en-ending', label: 'Particípio em -en/-n (broken)' },
    { id: 'vowel-change', label: 'Mudança Vocálica (drank / drunk)' },
    { id: 'past-same', label: 'Passado = Particípio (bought)' }
  ];

  const alphabetLetters = useMemo(() => {
    const letters = new Set<string>();
    irregularVerbs.forEach((v) => {
      letters.add(v.infinitive.charAt(0).toUpperCase());
    });
    return Array.from(letters).sort();
  }, []);

  const filteredVerbs = useMemo(() => {
    const q = search.trim().toLowerCase();

    return irregularVerbs
      .filter((verb) => {
        if (selectedGroup !== 'all' && verb.group !== selectedGroup) {
          return false;
        }

        if (selectedLetter !== 'all' && !verb.infinitive.toUpperCase().startsWith(selectedLetter)) {
          return false;
        }

        if (!q) return true;
        return (
          verb.infinitive.toLowerCase().includes(q) ||
          verb.pastSimple.toLowerCase().includes(q) ||
          verb.pastParticiple.toLowerCase().includes(q) ||
          verb.translation.toLowerCase().includes(q) ||
          (verb.variants && verb.variants.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        const comp = a.infinitive.localeCompare(b.infinitive);
        return sortOrder === 'asc' ? comp : -comp;
      });
  }, [search, selectedGroup, selectedLetter, sortOrder]);

  const toggleExpand = (id: string) => {
    setExpandedRowId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header matching reference */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-verbs text-white flex items-center justify-center shadow-colored-violet shrink-0 ring-4 ring-white/80">
            <BookOpen className="w-5 h-5 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6938F5]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#6938F5]">
                Módulo de Verbos
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
              Verbos Irregulares
            </h1>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-1">
              Todas as formas verbais, organizadas para consulta rápida com destaque cromático.
            </p>
          </div>
        </div>

        {/* Legend pills on large screen */}
        <div className="hidden xl:flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/90 shadow-2xs text-xs font-bold">
          <span className="flex items-center gap-1.5 text-[#6938F5]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6938F5]" />
            1. Base Form
          </span>
          <span className="text-[#E2D7F8]">•</span>
          <span className="flex items-center gap-1.5 text-[#0A9B80]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#19D9B4]" />
            2. Simple Past
          </span>
          <span className="text-[#E2D7F8]">•</span>
          <span className="flex items-center gap-1.5 text-[#E04D1B]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6534]" />
            3. Past Participle
          </span>
        </div>
      </div>

      {/* Search & Filter Toolbar with Cozy Tinted Surface */}
      <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6938F5]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar verbo em inglês ou tradução (ex: go, went, speak, quebrar)..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-white/85 backdrop-blur-md hover:border-[#6938F5]/40 focus:border-[#6938F5] focus:bg-white focus:ring-4 focus:ring-[#6938F5]/10 rounded-2xl border border-white/90 shadow-2xs outline-none transition text-[#160F2E] placeholder:text-[#645A82] font-medium"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#52456F] hover:text-[#160F2E] rounded-lg"
                title="Limpar pesquisa"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Action buttons: Methodology info & Sort Order */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => setShowCoverageInfo(!showCoverageInfo)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold rounded-2xl border transition active:scale-95 shadow-2xs ${
                showCoverageInfo
                  ? 'bg-[#EAE1FD] text-[#6938F5] border-white/90'
                  : 'bg-white/80 hover:bg-white text-[#160F2E] border-white/90'
              }`}
            >
              <Info className="w-3.5 h-3.5 text-[#6938F5]" />
              <span>Metodologia & Fontes</span>
            </button>

            <button
              type="button"
              onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
              className="px-3.5 py-2.5 text-xs font-bold rounded-2xl border border-white/90 bg-white/80 hover:bg-white text-[#160F2E] transition active:scale-95 shadow-2xs"
              title="Alternar ordenação alfabética"
            >
              {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
            </button>
          </div>
        </div>

        {/* Morphological Pattern Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[#52456F] flex items-center gap-1.5 pr-1 font-bold shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#6938F5]" />
            Padrão:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedGroup(opt.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl font-bold transition active:scale-95 text-xs ${
                selectedGroup === opt.id
                  ? 'bg-gradient-verbs text-white shadow-xs'
                  : 'bg-[#EAE1FD]/80 hover:bg-[#DFD4FA] text-[#423363] hover:text-[#160F2E] border border-white/70'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Alphabet Jump Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pt-2 border-t border-[#E2D7F8] pb-0.5 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedLetter('all')}
            className={`text-xs px-3 py-1.5 rounded-xl font-bold shrink-0 transition ${
              selectedLetter === 'all'
                ? 'bg-[#160F2E] text-white shadow-2xs'
                : 'text-[#52456F] hover:bg-white/80'
            }`}
          >
            Todas
          </button>
          {alphabetLetters.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 flex items-center justify-center text-xs font-mono rounded-lg shrink-0 transition ${
                selectedLetter === letter
                  ? 'bg-[#6938F5] text-white font-bold shadow-2xs'
                  : 'text-[#52456F] hover:bg-white/80 font-semibold'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Coverage / Methodology Info Card */}
      {showCoverageInfo && (
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl border border-white/90 p-5 sm:p-6 shadow-soft-card text-xs text-[#160F2E] space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-[#160F2E] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#6938F5]" />
              Critérios Linguísticos e Fontes da Base
            </h4>
            <button
              type="button"
              onClick={() => setShowCoverageInfo(false)}
              className="text-[#52456F] hover:text-[#160F2E] p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[#52456F] leading-relaxed">
            Esta tabela foi elaborada a partir das fontes linguísticas de referência internacional (Oxford, Cambridge e Merriam-Webster). Ela abrange os verbos irregulares canônicos essenciais da língua inglesa moderna, que respondem por praticamente a totalidade das ocorrências do dia a dia, ambiente profissional e acadêmico.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="bg-white/70 p-3.5 rounded-2xl border border-white/80 space-y-1">
              <strong className="text-[#160F2E] block font-bold">Variantes Britânicas vs. Americanas:</strong>
              <p className="text-[#52456F]">
                Alternâncias consagradas são explicitadas em notas (ex: <em>burned/burnt</em>, <em>learned/learnt</em> e <em>got/gotten</em>).
              </p>
            </div>
            <div className="bg-white/70 p-3.5 rounded-2xl border border-white/80 space-y-1">
              <strong className="text-[#160F2E] block font-bold">Identidade Visual Semântica:</strong>
              <p className="text-[#52456F]">
                <span className="text-[#6938F5] font-bold">Electric Violet</span> (Base Form), <span className="text-[#0A9B80] font-bold">Fresh Mint</span> (Simple Past) e <span className="text-[#E04D1B] font-bold">Tangerine</span> (Past Participle).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results Counter Bar */}
      <div className="flex items-center justify-between px-1 text-xs text-[#52456F] font-semibold">
        <span>
          Exibindo <strong className="text-[#160F2E]">{filteredVerbs.length}</strong> {filteredVerbs.length === 1 ? 'verbo irregular' : 'verbos irregulares'}
        </span>
        <span className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#6938F5]" />
          Clique em qualquer linha ou card para ver o exemplo em contexto
        </span>
      </div>

      {/* Empty State */}
      {filteredVerbs.length === 0 && (
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl border border-dashed border-[#E2D7F8] p-10 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#EAE1FD] text-[#6938F5] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-base font-bold text-[#160F2E]">Nenhum verbo corresponde à busca</p>
          <p className="text-xs text-[#52456F] max-w-sm mx-auto">
            Experimente pesquisar com outro termo ou redefinir os filtros aplicados.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedGroup('all');
              setSelectedLetter('all');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-brand px-4 py-2 rounded-xl shadow-xs"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}

      {/* DESKTOP TABLE: Matching Reference "Verbos Irregulares (exemplo)" */}
      <div className="hidden md:block bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 shadow-soft-card overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E2D7F8] text-xs font-black uppercase tracking-wider">
              {/* Form 1 Header: Solid Electric Violet */}
              <th className="py-3.5 px-5 text-white bg-gradient-verbs border-r border-white/20 w-[24%]">
                <div className="flex items-center gap-2">
                  <span>Verbo base</span>
                </div>
              </th>
              {/* Form 2 Header: Fresh Mint */}
              <th className="py-3.5 px-5 text-[#0A9B80] bg-[#DCF8F1] border-r border-white/80 w-[22%]">
                Simple Past
              </th>
              {/* Form 3 Header: Tangerine */}
              <th className="py-3.5 px-5 text-[#E04D1B] bg-[#FFEAE1] border-r border-white/80 w-[22%]">
                Past Participle
              </th>
              {/* Translation: Soft Violet */}
              <th className="py-3.5 px-5 text-[#6938F5] bg-[#EAE1FD] border-r border-white/80">
                Tradução
              </th>
              <th className="py-3.5 px-4 text-center w-16 bg-white/60 text-[#52456F]">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/80 text-sm">
            {filteredVerbs.map((verb) => {
              const isExpanded = expandedRowId === verb.id;
              const isFav = favorites.has(verb.infinitive);
              return (
                <React.Fragment key={verb.id}>
                  <tr
                    onClick={() => toggleExpand(verb.id)}
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
                            onClick={(e) => toggleFavorite(verb.infinitive, e)}
                            className="text-[#52456F] hover:text-[#F52E91] transition"
                            title={isFav ? 'Remover dos favoritos' : 'Favoritar'}
                          >
                            <Star className={`w-4 h-4 ${isFav ? 'fill-[#F52E91] text-[#F52E91]' : 'stroke-[1.8]'}`} />
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
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MOBILE & COMPACT VIEW: Semantic Form Badges on Cards */}
      <div className="md:hidden space-y-3">
        {filteredVerbs.map((verb) => {
          const isExpanded = expandedRowId === verb.id;
          const isFav = favorites.has(verb.infinitive);
          return (
            <div
              key={verb.id}
              onClick={() => toggleExpand(verb.id)}
              className={`bg-white/80 backdrop-blur-xl rounded-3xl border transition-all duration-150 p-4 shadow-soft-card cursor-pointer ${
                isExpanded ? 'border-[#6938F5] ring-2 ring-[#6938F5]/15' : 'border-white/90'
              }`}
            >
              {/* Header: Infinitive + Translation + Star */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(verb.infinitive, e)}
                    className="text-[#52456F] hover:text-[#F52E91] transition p-0.5"
                    title={isFav ? 'Remover dos favoritos' : 'Favoritar'}
                  >
                    <Star className={`w-4 h-4 ${isFav ? 'fill-[#F52E91] text-[#F52E91]' : 'stroke-[1.8]'}`} />
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
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#6938F5]" /> : <ChevronDown className="w-3.5 h-3.5" />}
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
        })}
      </div>
    </div>
  );
};

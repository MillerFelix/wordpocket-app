import React, { useMemo, useState, useEffect } from 'react';
import { Search, BookOpen, HelpCircle } from 'lucide-react';
import { irregularVerbs } from '../data/irregularVerbs';
import { VerbGroup } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import { VerbFilterBar } from './verbs/VerbFilterBar';
import { VerbCoverageModal } from './verbs/VerbCoverageModal';
import { VerbTableRow } from './verbs/VerbTableRow';
import { VerbPagination } from './verbs/VerbPagination';

interface IrregularVerbsViewProps {
  initialSearch?: string;
}

const ITEMS_PER_PAGE = 25;

const FILTER_OPTIONS: { id: VerbGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos os Verbos' },
  { id: 'identical', label: '3 Formas Iguais (hit / cut)' },
  { id: 'en-ending', label: 'Particípio em -en/-n (broken)' },
  { id: 'vowel-change', label: 'Mudança Vocálica (drank / drunk)' },
  { id: 'past-same', label: 'Passado = Particípio (bought)' }
];

export const IrregularVerbsView: React.FC<IrregularVerbsViewProps> = ({ initialSearch = '' }) => {
  const [search, setSearch] = useState(initialSearch);
  const [selectedGroup, setSelectedGroup] = useState<VerbGroup | 'all'>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [showCoverageInfo, setShowCoverageInfo] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { isFavorite, toggleFavorite } = useFavorites(
    'wordpocket_fav_verbs',
    ['go', 'be', 'begin'],
    'upword_fav_verbs'
  );

  useEffect(() => {
    if (initialSearch) {
      setSearch(initialSearch);
    }
  }, [initialSearch]);

  // Reset pagination to page 1 whenever search query, filters, or sorting change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedGroup, selectedLetter, sortOrder]);

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

  // Pagination calculation
  const totalItems = filteredVerbs.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const paginatedVerbs = filteredVerbs.slice(startIndex, endIndex);

  const toggleExpand = (id: string) => {
    setExpandedRowId((prev) => (prev === id ? null : id));
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedGroup('all');
    setSelectedLetter('all');
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    const clamped = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(clamped);
  };

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div className="flex items-start gap-3.5">
          <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-gradient-verbs text-white flex items-center justify-center shadow-colored-violet shrink-0 ring-4 ring-white/80">
            <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6938F5]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6938F5]">
                Módulo de Verbos
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
              Verbos Irregulares
            </h1>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-0.5 sm:mt-1">
              Catálogo completo com 200 verbos irregulares, paginação e visualização compacta.
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

      {/* Search & Filter Toolbar */}
      <VerbFilterBar
        search={search}
        onSearchChange={setSearch}
        showCoverageInfo={showCoverageInfo}
        onToggleCoverageInfo={() => setShowCoverageInfo((prev) => !prev)}
        sortOrder={sortOrder}
        onToggleSortOrder={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
        selectedGroup={selectedGroup}
        onSelectGroup={setSelectedGroup}
        filterOptions={FILTER_OPTIONS}
        selectedLetter={selectedLetter}
        onSelectLetter={setSelectedLetter}
        alphabetLetters={alphabetLetters}
      />

      {/* Coverage / Methodology Info Card */}
      <VerbCoverageModal
        isOpen={showCoverageInfo}
        onClose={() => setShowCoverageInfo(false)}
      />

      {/* Results Counter Bar with mobile swipe hint */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 px-1 text-xs text-[#52456F] font-semibold">
        <div className="flex items-center justify-between sm:justify-start gap-3">
          <span>
            Exibindo{' '}
            {totalItems > 0 ? (
              <>
                <strong className="text-[#160F2E]">
                  {startIndex + 1}–{endIndex}
                </strong>{' '}
                de <strong className="text-[#160F2E]">{totalItems}</strong>{' '}
                {totalItems === 1 ? 'verbo irregular' : 'verbos irregulares'}
              </>
            ) : (
              <strong className="text-[#160F2E]">0 verbos irregulares</strong>
            )}
          </span>
          <span className="sm:hidden text-[10px] font-bold text-[#6938F5] bg-[#EAE1FD] px-2 py-0.5 rounded-full border border-white/90">
            ↔ Deslize para ver
          </span>
        </div>
        <span className="hidden sm:flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#6938F5]" />
          Clique em qualquer linha para ver o exemplo em contexto
        </span>
      </div>

      {/* Empty State */}
      {totalItems === 0 && (
        <div className="bg-white/85 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-dashed border-[#E2D7F8] p-8 sm:p-10 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#EAE1FD] text-[#6938F5] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-base font-bold text-[#160F2E]">Nenhum verbo corresponde à busca</p>
          <p className="text-xs text-[#52456F] max-w-sm mx-auto">
            Experimente pesquisar com outro termo ou redefinir os filtros aplicados.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-brand px-4 py-2 rounded-xl shadow-xs"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}

      {/* RESPONSIVE COMPACT TABLE: Consistent on mobile, tablet & desktop */}
      {totalItems > 0 && (
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/90 shadow-soft-card overflow-hidden">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[540px] sm:min-w-[640px] md:min-w-full">
              <thead>
                <tr className="border-b border-[#E2D7F8] text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  {/* Form 1 Header: Solid Electric Violet with Sticky left */}
                  <th className="py-2.5 sm:py-3.5 px-2.5 sm:px-5 text-white bg-gradient-verbs border-r border-white/20 sticky left-0 z-20 shadow-[2px_0_6px_rgba(0,0,0,0.06)] w-[26%] sm:w-[24%] min-w-[130px] sm:min-w-[160px]">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span>Verbo base</span>
                    </div>
                  </th>
                  {/* Form 2 Header: Fresh Mint */}
                  <th className="py-2.5 sm:py-3.5 px-2.5 sm:px-5 text-[#0A9B80] bg-[#DCF8F1] border-r border-white/80 w-[20%] sm:w-[22%] min-w-[105px] sm:min-w-[130px]">
                    Simple Past
                  </th>
                  {/* Form 3 Header: Tangerine */}
                  <th className="py-2.5 sm:py-3.5 px-2.5 sm:px-5 text-[#E04D1B] bg-[#FFEAE1] border-r border-white/80 w-[20%] sm:w-[22%] min-w-[105px] sm:min-w-[130px]">
                    Past Participle
                  </th>
                  {/* Translation: Soft Violet */}
                  <th className="py-2.5 sm:py-3.5 px-2.5 sm:px-5 text-[#6938F5] bg-[#EAE1FD] border-r border-white/80 min-w-[120px]">
                    Tradução
                  </th>
                  <th className="py-2.5 sm:py-3.5 px-1.5 sm:px-4 text-center w-10 sm:w-16 bg-white/60 text-[#52456F]">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/80 text-sm">
                {paginatedVerbs.map((verb) => (
                  <VerbTableRow
                    key={verb.id}
                    verb={verb}
                    isExpanded={expandedRowId === verb.id}
                    isFavorite={isFavorite(verb.infinitive)}
                    onToggleExpand={toggleExpand}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {totalItems > 0 && totalPages > 1 && (
        <VerbPagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

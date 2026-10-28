import React, { useMemo, useState, useEffect } from 'react';
import { Search, BookOpen, HelpCircle } from 'lucide-react';
import { verbsService } from '../services/verbsService';
import { VerbGroup } from '../types';
import { VerbFilterBar } from './verbs/VerbFilterBar';
import { VerbTable } from './verbs/VerbTable';
import { VerbPagination } from './verbs/VerbPagination';
import { recordRecentAccess } from '../services/recentAccessService';

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
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (initialSearch) {
      setSearch(initialSearch);
      const matched = verbsService.findByAnyForm(initialSearch);
      if (matched) {
        setExpandedRowId(matched.verb.id);
      }
    }
  }, [initialSearch]);

  // Retorna à primeira página quando a busca ou filtros são alterados
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedGroup, selectedLetter]);

  const alphabetLetters = useMemo(() => {
    return verbsService.getAlphabetLetters();
  }, []);

  const filteredVerbs = useMemo(() => {
    return verbsService.filter({
      search,
      group: selectedGroup,
      letter: selectedLetter
    });
  }, [search, selectedGroup, selectedLetter]);

  // Cálculo da paginação
  const totalItems = filteredVerbs.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const paginatedVerbs = filteredVerbs.slice(startIndex, endIndex);

  const toggleExpand = (id: string) => {
    setExpandedRowId((prev) => {
      const next = prev === id ? null : id;
      if (next) {
        const found = verbsService.getAll().find((v) => v.id === id);
        if (found) {
          recordRecentAccess({
            id: `verb:${found.infinitive}`,
            title: found.infinitive,
            typeLabel: 'Verbos Irregulares',
            subtitle: `${found.pastSimple} • ${found.pastParticiple} • ${found.translation}`,
            targetTab: 'verbs',
            targetParam: found.infinitive
          });
        }
      }
      return next;
    });
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
      {/* Cabeçalho */}
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

        {/* Legenda de formas verbais */}
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

      {/* Barra de pesquisa e filtros */}
      <VerbFilterBar
        search={search}
        onSearchChange={setSearch}
        selectedGroup={selectedGroup}
        onSelectGroup={setSelectedGroup}
        filterOptions={FILTER_OPTIONS}
        selectedLetter={selectedLetter}
        onSelectLetter={setSelectedLetter}
        alphabetLetters={alphabetLetters}
      />

      {/* Contador de resultados */}
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

      {/* Estado vazio */}
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

      {/* Tabela compacta e responsiva */}
      {totalItems > 0 && (
        <VerbTable
          verbs={paginatedVerbs}
          expandedRowId={expandedRowId}
          onToggleExpand={toggleExpand}
        />
      )}

      {/* Controles de paginação */}
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

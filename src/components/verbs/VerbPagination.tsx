import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface VerbPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
}

export const VerbPagination: React.FC<VerbPaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange
}) => {
  if (totalItems === 0) return null;

  // Generate page list with smart ellipsis
  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      aria-label="Paginação de verbos irregulares"
      className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 p-4 sm:p-5 shadow-soft-card flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      {/* Range and total summary */}
      <div className="text-xs text-[#52456F] font-semibold text-center sm:text-left">
        <span>
          Mostrando{' '}
          <strong className="text-[#160F2E]">
            {startIndex + 1}–{endIndex}
          </strong>{' '}
          de <strong className="text-[#160F2E]">{totalItems}</strong> verbos (Página{' '}
          <strong className="text-[#6938F5]">{currentPage}</strong> de{' '}
          <strong className="text-[#160F2E]">{totalPages}</strong>)
        </span>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        {/* First page button */}
        <button
          type="button"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="Primeira página"
          title="Primeira página"
          className="p-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white enabled:hover:text-[#6938F5] enabled:active:scale-95 text-[#52456F] bg-white/70 shadow-2xs"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        {/* Previous page button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          title="Página anterior"
          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white enabled:hover:text-[#6938F5] enabled:active:scale-95 text-[#52456F] bg-white/70 shadow-2xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        {/* Page number buttons */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="w-8 h-8 flex items-center justify-center text-xs font-bold text-[#52456F]"
                >
                  …
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => onPageChange(pageNum)}
                aria-label={`Ir para a página ${pageNum}`}
                aria-current={isActive ? 'page' : undefined}
                className={`w-8 h-8 rounded-xl text-xs font-bold transition active:scale-95 flex items-center justify-center shadow-2xs ${
                  isActive
                    ? 'bg-gradient-verbs text-white shadow-colored-violet ring-2 ring-[#6938F5]/30'
                    : 'bg-white/75 hover:bg-white text-[#160F2E] hover:text-[#6938F5] border border-white/90'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next page button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
          title="Próxima página"
          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white enabled:hover:text-[#6938F5] enabled:active:scale-95 text-[#52456F] bg-white/70 shadow-2xs"
        >
          <span className="hidden sm:inline">Próxima</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Last page button */}
        <button
          type="button"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Última página"
          title="Última página"
          className="p-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white enabled:hover:text-[#6938F5] enabled:active:scale-95 text-[#52456F] bg-white/70 shadow-2xs"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  itemLabel?: string;
  ariaLabel?: string;
  accentColor?: 'brand' | 'blue' | 'purple' | 'orange' | 'emerald';
  className?: string;
}

const ACCENT_STYLES: Record<NonNullable<PaginationProps['accentColor']>, string> = {
  brand: 'bg-gradient-brand text-white shadow-colored-blue ring-2 ring-[#176BFF]/30',
  blue: 'bg-gradient-verbs text-white shadow-colored-blue ring-2 ring-[#176BFF]/30',
  purple: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-soft-card ring-2 ring-purple-500/30',
  orange: 'bg-gradient-to-r from-[#FF5B26] to-[#FF7A4D] text-white shadow-colored-tangerine ring-2 ring-[#FF5B26]/30',
  emerald: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white ring-2 ring-emerald-500/30'
};

const ACCENT_HOVER_TEXT: Record<NonNullable<PaginationProps['accentColor']>, string> = {
  brand: 'enabled:hover:text-[#176BFF]',
  blue: 'enabled:hover:text-[#176BFF]',
  purple: 'enabled:hover:text-purple-600',
  orange: 'enabled:hover:text-[#FF5B26]',
  emerald: 'enabled:hover:text-emerald-600'
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
  itemLabel = 'itens',
  ariaLabel = 'Navegação por páginas',
  accentColor = 'brand',
  className = ''
}) => {
  if (totalItems === 0) return null;

  const activeStyle = ACCENT_STYLES[accentColor] || ACCENT_STYLES.brand;
  const hoverText = ACCENT_HOVER_TEXT[accentColor] || ACCENT_HOVER_TEXT.brand;

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
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <nav
      aria-label={ariaLabel}
      className={`bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 p-4 sm:p-5 shadow-soft-card flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}
    >
      {/* Range and total summary */}
      <div className="text-xs text-[#52456F] font-semibold text-center sm:text-left">
        <span>
          Mostrando{' '}
          <strong className="text-[#160F2E]">
            {totalItems > 0 ? startIndex + 1 : 0}–{endIndex}
          </strong>{' '}
          de <strong className="text-[#160F2E]">{totalItems}</strong> {itemLabel} (Página{' '}
          <strong className="text-[#176BFF]">{currentPage}</strong> de{' '}
          <strong className="text-[#160F2E]">{totalPages}</strong>)
        </span>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        {/* First page button */}
        <button
          type="button"
          onClick={() => onPageChange(1)}
          disabled={isFirstPage}
          aria-label="Primeira página"
          title="Primeira página"
          className={`p-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white ${hoverText} enabled:active:scale-95 text-[#52456F] bg-white/70 shadow-2xs cursor-pointer disabled:cursor-not-allowed`}
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        {/* Previous page button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Página anterior"
          title="Página anterior"
          className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white ${hoverText} enabled:active:scale-95 text-[#52456F] bg-white/70 shadow-2xs cursor-pointer disabled:cursor-not-allowed`}
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
                className={`w-8 h-8 rounded-xl text-xs font-bold transition active:scale-95 flex items-center justify-center shadow-2xs cursor-pointer ${
                  isActive
                    ? activeStyle
                    : 'bg-white/75 hover:bg-white text-[#160F2E] hover:text-[#176BFF] border border-white/90'
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
          disabled={isLastPage}
          aria-label="Próxima página"
          title="Próxima página"
          className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white ${hoverText} enabled:active:scale-95 text-[#2446C8] bg-white/70 shadow-2xs cursor-pointer disabled:cursor-not-allowed`}
        >
          <span className="hidden sm:inline">Próxima</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Last page button */}
        <button
          type="button"
          onClick={() => onPageChange(totalPages)}
          disabled={isLastPage}
          aria-label="Última página"
          title="Última página"
          className={`p-2 rounded-xl text-xs font-bold transition border border-white/90 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white ${hoverText} enabled:active:scale-95 text-[#52456F] bg-white/70 shadow-2xs cursor-pointer disabled:cursor-not-allowed`}
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

import React from 'react';
import { Search, X, Filter, Info } from 'lucide-react';
import { VerbGroup } from '../../types';

interface VerbFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  showCoverageInfo: boolean;
  onToggleCoverageInfo: () => void;
  selectedGroup: VerbGroup | 'all';
  onSelectGroup: (group: VerbGroup | 'all') => void;
  filterOptions: { id: VerbGroup | 'all'; label: string }[];
  selectedLetter: string;
  onSelectLetter: (letter: string) => void;
  alphabetLetters: string[];
}

export const VerbFilterBar: React.FC<VerbFilterBarProps> = ({
  search,
  onSearchChange,
  showCoverageInfo,
  onToggleCoverageInfo,
  selectedGroup,
  onSelectGroup,
  filterOptions,
  selectedLetter,
  onSelectLetter,
  alphabetLetters
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Main Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#176BFF]" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar verbo em inglês..."
            className="w-full pl-11 pr-10 py-3 text-sm bg-white/85 backdrop-blur-md hover:border-[#176BFF]/40 focus:border-[#176BFF] focus:bg-white focus:ring-4 focus:ring-[#176BFF]/10 rounded-2xl border border-white/90 shadow-2xs outline-none transition text-[#160F2E] placeholder:text-[#645A82] font-medium"
          />
          {search && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#2446C8] hover:text-[#160F2E] rounded-lg"
              title="Limpar pesquisa"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action button: Methodology info */}
        <div className="flex items-center shrink-0 self-end sm:self-auto">
          <button
            type="button"
            onClick={onToggleCoverageInfo}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold rounded-2xl border transition active:scale-95 shadow-2xs ${
              showCoverageInfo
                ? 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
                : 'bg-white/80 hover:bg-white text-[#160F2E] border-white/90'
            }`}
          >
            <Info className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>Metodologia & Fontes</span>
          </button>
        </div>
      </div>

      {/* Morphological Pattern Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        <span className="text-[#2446C8] flex items-center gap-1.5 pr-1 font-bold shrink-0">
          <Filter className="w-3.5 h-3.5 text-[#176BFF]" />
          Padrão:
        </span>
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelectGroup(opt.id)}
            className={`shrink-0 px-3.5 py-2 rounded-xl font-bold transition active:scale-95 text-xs ${
              selectedGroup === opt.id
                ? 'bg-gradient-verbs text-white shadow-xs'
                : 'bg-[#E1ECFC]/80 hover:bg-[#D4E5FE] text-[#160F2E] border border-white/70'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Alphabet Jump Bar */}
      <div className="flex items-center gap-1 overflow-x-auto pt-2 border-t border-[#BED7FA] pb-0.5 scrollbar-none">
        <button
          type="button"
          onClick={() => onSelectLetter('all')}
          className={`text-xs px-3 py-1.5 rounded-xl font-bold shrink-0 transition ${
            selectedLetter === 'all'
              ? 'bg-[#160F2E] text-white shadow-2xs'
              : 'text-[#2446C8] hover:bg-white/80'
          }`}
        >
          Todas
        </button>
        {alphabetLetters.map((letter) => (
          <button
            key={letter}
            type="button"
            onClick={() => onSelectLetter(letter)}
            className={`w-7 h-7 flex items-center justify-center text-xs font-mono rounded-lg shrink-0 transition ${
              selectedLetter === letter
                ? 'bg-[#176BFF] text-white font-bold shadow-2xs'
                : 'text-[#2446C8] hover:bg-white/80 font-semibold'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

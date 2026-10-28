import React from 'react';
import { Filter } from 'lucide-react';
import { VerbGroup } from '../../types';
import { SearchInput } from '../shared/SearchInput';

interface VerbFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
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
  selectedGroup,
  onSelectGroup,
  filterOptions,
  selectedLetter,
  onSelectLetter,
  alphabetLetters
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
      {/* Campo principal de busca */}
      <div className="relative w-full">
        <SearchInput
          value={search}
          onChange={onSearchChange}
          placeholder="Buscar verbo em inglês..."
          ariaLabel="Buscar verbo em inglês"
          variant="default"
        />
      </div>

      {/* Filtros de padrões morfológicos */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#2446C8] px-0.5">
          <span className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>Padrão morfológico:</span>
          </span>
          {selectedGroup !== 'all' && (
            <button
              type="button"
              onClick={() => onSelectGroup('all')}
              className="text-[#176BFF] hover:underline cursor-pointer font-semibold text-[11px]"
            >
              Ver todos os verbos
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 text-xs scrollbar-none">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectGroup(opt.id)}
              className={`whitespace-nowrap px-3.5 py-2 rounded-xl font-bold transition active:scale-95 text-xs cursor-pointer shrink-0 min-h-[38px] ${
                selectedGroup === opt.id
                  ? 'bg-gradient-verbs text-white shadow-xs'
                  : 'bg-[#E1ECFC]/80 hover:bg-[#D4E5FE] text-[#160F2E] border border-white/70'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Barra de atalhos do alfabeto */}
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

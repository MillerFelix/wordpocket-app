import React from 'react';
import { Search, X, Filter, Tag } from 'lucide-react';
import { WordCategory, PartOfSpeech } from '../../types';

export interface CategoryOption {
  id: WordCategory | 'all';
  label: string;
  icon: React.ElementType;
}

export interface PartOfSpeechOption {
  id: PartOfSpeech | 'all';
  label: string;
}

interface VocabFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: WordCategory | 'all';
  onSelectCategory: (cat: WordCategory | 'all') => void;
  categories: CategoryOption[];
  selectedPos: PartOfSpeech | 'all';
  onSelectPos: (pos: PartOfSpeech | 'all') => void;
  partsOfSpeech: PartOfSpeechOption[];
}

export const VocabFilterBar: React.FC<VocabFilterBarProps> = ({
  search,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  categories,
  selectedPos,
  onSelectPos,
  partsOfSpeech
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A9B80]" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Consultar dicionário por termo em inglês ou tradução (ex: resilient, insightful, escala)..."
          className="w-full pl-12 pr-10 py-3.5 text-base bg-white/85 backdrop-blur-md hover:border-[#19D9B4]/50 focus:bg-white rounded-2xl border border-white/90 focus:border-[#0FAF91] focus:ring-4 focus:ring-[#19D9B4]/10 outline-none transition text-[#160F2E] placeholder:text-[#645A82] font-medium shadow-2xs"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 text-[#52456F] hover:text-[#160F2E] rounded-xl hover:bg-[#EAE1FD]"
            title="Limpar pesquisa"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Categories Chips with Warm Neon Candy Mint Tint */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        <span className="text-[#52456F] flex items-center gap-1.5 pr-1 font-bold shrink-0">
          <Filter className="w-3.5 h-3.5 text-[#19D9B4]" />
          Tema:
        </span>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-2 shrink-0 px-3.5 py-2 rounded-xl font-bold transition active:scale-95 text-xs ${
                isSelected
                  ? 'bg-[#0FAF91] text-white shadow-xs'
                  : 'bg-[#DCF8F1]/80 hover:bg-[#CBF6EC] text-[#1B6D5E] hover:text-[#160F2E] border border-white/70'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Part of Speech Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-[#E2D7F8] pb-0.5 scrollbar-none text-xs">
        <span className="text-[#52456F] flex items-center gap-1.5 pr-1 font-bold shrink-0">
          <Tag className="w-3.5 h-3.5 text-[#6938F5]" />
          Classe:
        </span>
        {partsOfSpeech.map((pos) => (
          <button
            key={pos.id}
            type="button"
            onClick={() => onSelectPos(pos.id)}
            className={`shrink-0 px-3 py-1.5 rounded-xl font-bold transition text-xs ${
              selectedPos === pos.id
                ? 'bg-[#160F2E] text-white shadow-2xs'
                : 'bg-[#EAE1FD]/70 hover:bg-[#DFD4FA] text-[#423363] hover:text-[#160F2E] border border-white/70'
            }`}
          >
            {pos.label}
          </button>
        ))}
      </div>
    </div>
  );
};

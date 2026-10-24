import React, { useMemo, useState } from 'react';
import { Search, X, Tag, Filter } from 'lucide-react';
import { vocabularyData } from '../data/vocabulary';
import { VocabWord, WordCategory, PartOfSpeech } from '../types';
import { PronounceButton } from './PronounceButton';

export const VocabularyView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');

  const categories: { id: WordCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos os Temas' },
    { id: 'trabalho', label: '💼 Trabalho & Negócios' },
    { id: 'cotidiano', label: '☕ Cotidiano' },
    { id: 'viagem', label: '✈️ Viagem' },
    { id: 'tecnologia', label: '💻 Tecnologia' },
    { id: 'expressoes', label: '💬 Expressões' }
  ];

  const partsOfSpeech: { id: PartOfSpeech | 'all'; label: string }[] = [
    { id: 'all', label: 'Todas as Classes' },
    { id: 'substantivo', label: 'Substantivo' },
    { id: 'verbo', label: 'Verbo' },
    { id: 'adjetivo', label: 'Adjetivo' },
    { id: 'expressao', label: 'Expressão' }
  ];

  const filteredVocab = useMemo(() => {
    const q = search.trim().toLowerCase();

    return vocabularyData.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Part of speech filter
      if (selectedPos !== 'all' && item.partOfSpeech !== selectedPos) {
        return false;
      }

      // Search filter
      if (!q) return true;
      return (
        item.word.toLowerCase().includes(q) ||
        item.translation.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.exampleEn.toLowerCase().includes(q) ||
        item.examplePt.toLowerCase().includes(q)
      );
    });
  }, [search, selectedCategory, selectedPos]);

  return (
    <div className="space-y-4">
      {/* Search & Filters Card */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por termo em inglês ou tradução (ex: reliable, mala)..."
            className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-slate-800 placeholder:text-slate-400"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
              title="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 flex items-center gap-1 pr-1 font-medium shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Tema:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-2.5 py-1 rounded-lg font-medium transition ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Part of Speech Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-xs border-t border-slate-100 pt-2.5">
          <span className="text-slate-400 flex items-center gap-1 pr-1 font-medium shrink-0">
            <Tag className="w-3.5 h-3.5" />
            Classe:
          </span>
          {partsOfSpeech.map((pos) => (
            <button
              key={pos.id}
              onClick={() => setSelectedPos(pos.id)}
              className={`shrink-0 px-2.5 py-0.5 rounded-md font-medium text-[11px] transition ${
                selectedPos === pos.id
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-500'
              }`}
            >
              {pos.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Indicator */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <span>
          Mostrando <strong className="text-slate-800">{filteredVocab.length}</strong> {filteredVocab.length === 1 ? 'termo' : 'termos'}
        </span>
      </div>

      {/* Empty State */}
      {filteredVocab.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-2">
          <p className="text-slate-700 font-medium">Nenhum termo encontrado</p>
          <p className="text-xs text-slate-500">
            Tente pesquisar com outro termo ou ajuste os filtros.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
              setSelectedPos('all');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 pt-2"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}

      {/* Vocabulary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredVocab.map((item: VocabWord) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-xs p-4 flex flex-col justify-between transition hover:shadow-sm"
            >
              <div>
                {/* Header: Word + Badges */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {item.word}
                    </h3>
                    <PronounceButton text={item.word} size="sm" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {item.partOfSpeech}
                    </span>
                  </div>
                </div>

                {/* Translation & Meaning */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-indigo-600">
                    {item.translation}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              </div>

              {/* Natural Example in Context */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 bg-slate-50/70 -mx-4 -mb-4 p-3.5 rounded-b-2xl space-y-1">
                <div className="flex items-start justify-between gap-1.5">
                  <p className="text-xs font-medium text-slate-800 italic">
                    "{item.exampleEn}"
                  </p>
                  <PronounceButton text={item.exampleEn} size="sm" />
                </div>
                <p className="text-[11px] text-slate-500">
                  {item.examplePt}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

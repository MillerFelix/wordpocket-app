import React, { useMemo, useState, useEffect } from 'react';
import { Search, BookA, Volume2, Briefcase, Coffee, Plane, Cpu, MessageSquare, GraduationCap } from 'lucide-react';
import { vocabularyData } from '../data/vocabulary';
import { VocabWord, WordCategory, PartOfSpeech } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import { VocabFilterBar, CategoryOption, PartOfSpeechOption } from './vocabulary/VocabFilterBar';
import { VocabWordCard } from './vocabulary/VocabWordCard';

interface VocabularyViewProps {
  initialSearch?: string;
}

const CATEGORIES: CategoryOption[] = [
  { id: 'all', label: 'Todos os Temas', icon: BookA },
  { id: 'cotidiano', label: 'Cotidiano', icon: Coffee },
  { id: 'trabalho', label: 'Trabalho & Negócios', icon: Briefcase },
  { id: 'viagem', label: 'Viagem & Turismo', icon: Plane },
  { id: 'tecnologia', label: 'Tecnologia & Dev', icon: Cpu },
  { id: 'expressoes', label: 'Expressões & Idioms', icon: MessageSquare },
  { id: 'academico', label: 'Acadêmico & Formal', icon: GraduationCap }
];

const PARTS_OF_SPEECH: PartOfSpeechOption[] = [
  { id: 'all', label: 'Todas as Classes' },
  { id: 'substantivo', label: 'Substantivo' },
  { id: 'verbo', label: 'Verbo' },
  { id: 'adjetivo', label: 'Adjetivo' },
  { id: 'adverbio', label: 'Advérbio' },
  { id: 'phrasal-verb', label: 'Phrasal Verb' },
  { id: 'expressao', label: 'Expressão' }
];

export const VocabularyView: React.FC<VocabularyViewProps> = ({ initialSearch = '' }) => {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | 'all'>('all');
  const [selectedPos, setSelectedPos] = useState<PartOfSpeech | 'all'>('all');

  const { isFavorite, toggleFavorite } = useFavorites(
    'wordpocket_fav_vocab',
    ['resilient', 'beautiful'],
    'upword_fav_vocab'
  );

  useEffect(() => {
    if (initialSearch) {
      setSearch(initialSearch);
    }
  }, [initialSearch]);

  const filteredWords = useMemo(() => {
    const q = search.trim().toLowerCase();

    return vocabularyData.filter((item: VocabWord) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      if (selectedPos !== 'all' && item.partOfSpeech !== selectedPos) {
        return false;
      }

      if (!q) return true;

      const matchesMain =
        item.word.toLowerCase().includes(q) ||
        item.translation.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.exampleEn.toLowerCase().includes(q) ||
        item.examplePt.toLowerCase().includes(q);

      const matchesSynonyms = item.synonyms?.some((s) => s.toLowerCase().includes(q));

      const matchesSenses = item.senses?.some(
        (sense) =>
          sense.meaning.toLowerCase().includes(q) ||
          sense.translation.toLowerCase().includes(q) ||
          (sense.exampleEn && sense.exampleEn.toLowerCase().includes(q))
      );

      return matchesMain || matchesSynonyms || matchesSenses;
    });
  }, [search, selectedCategory, selectedPos]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCategory('all');
    setSelectedPos('all');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-vocab text-white flex items-center justify-center shadow-colored-mint shrink-0 ring-4 ring-white/80">
            <BookA className="w-5 h-5 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#19D9B4]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A9B80]">
                Módulo de Vocabulário
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
              Vocabulário
            </h1>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-1">
              Significados, pronúncia, exemplos contextuais e traduções em inglês moderno.
            </p>
          </div>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs text-xs font-bold text-[#0A9B80]">
          <Volume2 className="w-4 h-4 text-[#19D9B4]" />
          <span>Pronúncia nativa em 1 clique</span>
        </div>
      </div>

      {/* Central Prominent Search Bar & Filters */}
      <VocabFilterBar
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categories={CATEGORIES}
        selectedPos={selectedPos}
        onSelectPos={setSelectedPos}
        partsOfSpeech={PARTS_OF_SPEECH}
      />

      {/* Results Header Info */}
      <div className="flex items-center justify-between px-1 text-xs text-[#52456F] font-semibold">
        <span>
          Encontrados <strong className="text-[#160F2E]">{filteredWords.length}</strong>{' '}
          {filteredWords.length === 1 ? 'verbete' : 'verbetes'}
        </span>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[#0A9B80] font-bold">
          <Volume2 className="w-3.5 h-3.5" />
          Pronúncia em inglês via Web Speech API
        </span>
      </div>

      {/* Empty State */}
      {filteredWords.length === 0 && (
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl border border-dashed border-[#B6F5E8] p-10 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#DCF8F1] text-[#0A9B80] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-base font-bold text-[#160F2E]">Nenhum termo encontrado no dicionário</p>
          <p className="text-xs text-[#52456F] max-w-sm mx-auto">
            Tente pesquisar com outro termo ou ajuste os filtros de tema e classe gramatical.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-brand px-4 py-2 rounded-xl shadow-xs"
          >
            Redefinir busca e filtros
          </button>
        </div>
      )}

      {/* DICTIONARY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredWords.map((item: VocabWord) => (
          <VocabWordCard
            key={item.id}
            item={item}
            isFavorite={isFavorite(item.word)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

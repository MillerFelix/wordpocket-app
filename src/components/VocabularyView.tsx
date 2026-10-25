import React, { useMemo, useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  Filter, 
  Tag, 
  BookA, 
  Volume2, 
  Briefcase, 
  Coffee, 
  Plane, 
  Cpu, 
  MessageSquare, 
  GraduationCap, 
  Star 
} from 'lucide-react';
import { vocabularyData } from '../data/vocabulary';
import { VocabWord, WordCategory, PartOfSpeech } from '../types';
import { PronounceButton } from './PronounceButton';

interface VocabularyViewProps {
  initialSearch?: string;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({ initialSearch = '' }) => {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | 'all'>('all');
  const [selectedPos, setSelectedPos] = useState<PartOfSpeech | 'all'>('all');
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('wordpocket_fav_vocab') || localStorage.getItem('upword_fav_vocab');
      return saved ? new Set(JSON.parse(saved)) : new Set(['resilient', 'beautiful']);
    } catch {
      return new Set(['resilient', 'beautiful']);
    }
  });

  useEffect(() => {
    if (initialSearch) {
      setSearch(initialSearch);
    }
  }, [initialSearch]);

  const toggleFavorite = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(word)) {
        next.delete(word);
      } else {
        next.add(word);
      }
      try {
        localStorage.setItem('wordpocket_fav_vocab', JSON.stringify(Array.from(next)));
      } catch {
        // Fallback
      }
      return next;
    });
  };

  const categories: { id: WordCategory | 'all'; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'Todos os Temas', icon: BookA },
    { id: 'cotidiano', label: 'Cotidiano', icon: Coffee },
    { id: 'trabalho', label: 'Trabalho & Negócios', icon: Briefcase },
    { id: 'viagem', label: 'Viagem & Turismo', icon: Plane },
    { id: 'tecnologia', label: 'Tecnologia & Dev', icon: Cpu },
    { id: 'expressoes', label: 'Expressões & Idioms', icon: MessageSquare },
    { id: 'academico', label: 'Acadêmico & Formal', icon: GraduationCap }
  ];

  const partsOfSpeech: { id: PartOfSpeech | 'all'; label: string }[] = [
    { id: 'all', label: 'Todas as Classes' },
    { id: 'substantivo', label: 'Substantivo' },
    { id: 'verbo', label: 'Verbo' },
    { id: 'adjetivo', label: 'Adjetivo' },
    { id: 'adverbio', label: 'Advérbio' },
    { id: 'phrasal-verb', label: 'Phrasal Verb' },
    { id: 'expressao', label: 'Expressão' }
  ];

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

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header matching reference */}
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

      {/* Central Prominent Search Bar & Filters with Soft Mint Tinted Surface */}
      <div className="bg-white/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A9B80]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Consultar dicionário por termo em inglês ou tradução (ex: resilient, insightful, escala)..."
            className="w-full pl-12 pr-10 py-3.5 text-base bg-white/85 backdrop-blur-md hover:border-[#19D9B4]/50 focus:bg-white rounded-2xl border border-white/90 focus:border-[#0FAF91] focus:ring-4 focus:ring-[#19D9B4]/10 outline-none transition text-[#160F2E] placeholder:text-[#645A82] font-medium shadow-2xs"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
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
                onClick={() => setSelectedCategory(cat.id)}
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
              onClick={() => setSelectedPos(pos.id)}
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

      {/* Results Header Info */}
      <div className="flex items-center justify-between px-1 text-xs text-[#52456F] font-semibold">
        <span>
          Encontrados <strong className="text-[#160F2E]">{filteredWords.length}</strong> {filteredWords.length === 1 ? 'verbete' : 'verbetes'}
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
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
              setSelectedPos('all');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-brand px-4 py-2 rounded-xl shadow-xs"
          >
            Redefinir busca e filtros
          </button>
        </div>
      )}

      {/* DICTIONARY GRID: Responsive Cards Layout with Soft Tinted Pastel Surfaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredWords.map((item: VocabWord) => {
          const isFav = favorites.has(item.word);
          return (
            <article
              key={item.id}
              className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 hover:border-white hover:bg-white/90 shadow-soft-card hover:shadow-soft-hover transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Word Header: Term, Phonetics, Category Badges & Audio & Favorite */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-extrabold text-[#160F2E] group-hover:text-[#0A9B80] transition-colors">
                        {item.word}
                      </h3>
                      {item.phonetic && (
                        <span className="text-xs font-mono font-medium text-[#6938F5] bg-white/80 px-2 py-0.5 rounded-lg border border-white/90 shadow-2xs">
                          {item.phonetic}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#EAE1FD] text-[#6938F5] px-2 py-0.5 rounded-md border border-white/90">
                        {item.partOfSpeech}
                      </span>
                      <span className="text-[10px] font-semibold text-[#0A9B80] bg-[#DCF8F1] px-2 py-0.5 rounded-md border border-[#B6F5E8]">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <PronounceButton text={item.word} size="md" />
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(item.word, e)}
                      className="p-1.5 rounded-xl text-[#52456F] hover:text-[#F52E91] hover:bg-[#FFF0F6] transition"
                      title={isFav ? 'Remover dos favoritos' : 'Favoritar palavra'}
                    >
                      <Star className={`w-4 h-4 ${isFav ? 'fill-[#F52E91] text-[#F52E91]' : 'stroke-[1.8]'}`} />
                    </button>
                  </div>
                </div>

                {/* Primary Translation & Definition */}
                <div className="mt-4 space-y-1.5">
                  <p className="text-base font-extrabold text-[#160F2E]">
                    {item.translation}
                  </p>
                  <p className="text-xs text-[#52456F] leading-relaxed">
                    {item.meaning}
                  </p>
                </div>

                {/* Senses / Multiple Meanings */}
                {item.senses && item.senses.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#E2D7F8] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#52456F] flex items-center gap-1">
                      <BookA className="w-3 h-3 text-[#19D9B4]" />
                      Outros sentidos contextuais:
                    </span>
                    <ol className="space-y-1.5 text-xs">
                      {item.senses.map((sense, sIdx) => (
                        <li key={sIdx} className="bg-white/70 p-2.5 rounded-xl border border-white/80 leading-relaxed">
                          <span className="font-bold text-[#160F2E]">
                            {sIdx + 1}. {sense.translation}:
                          </span>{' '}
                          <span className="text-[#52456F]">{sense.meaning}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Synonyms Tags */}
                {item.synonyms && item.synonyms.length > 0 && (
                  <div className="mt-3.5 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold text-[#52456F]">Sinônimos:</span>
                    {item.synonyms.map((syn, synIdx) => (
                      <span
                        key={synIdx}
                        className="text-[11px] font-semibold text-[#160F2E] bg-white/80 hover:bg-[#DCF8F1] hover:text-[#0A9B80] px-2 py-0.5 rounded-md border border-white/90 transition shadow-2xs"
                      >
                        {syn}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Contextual Sentence Example Footer */}
              <div className="mt-5 pt-3.5 border-t border-white/80 bg-gradient-to-r from-[#DCF8F1]/80 to-[#E6F3FE]/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 sm:p-5 rounded-b-3xl space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-bold text-[#160F2E] italic leading-snug">
                    "{item.exampleEn}"
                  </p>
                  <PronounceButton text={item.exampleEn} size="xs" />
                </div>
                <p className="text-[11px] text-[#52456F] font-medium">
                  {item.examplePt}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

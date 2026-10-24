import React, { useMemo, useState } from 'react';
import { Search, X, Filter, Tag, BookOpen, Volume2 } from 'lucide-react';
import { vocabularyData } from '../data/vocabulary';
import { VocabWord, WordCategory, PartOfSpeech } from '../types';
import { PronounceButton } from './PronounceButton';

export const VocabularyView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | 'all'>('all');
  const [selectedPos, setSelectedPos] = useState<PartOfSpeech | 'all'>('all');

  const categories: { id: WordCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos os Temas' },
    { id: 'trabalho', label: '💼 Trabalho & Negócios' },
    { id: 'cotidiano', label: '☕ Cotidiano' },
    { id: 'viagem', label: '✈️ Viagem & Turismo' },
    { id: 'tecnologia', label: '💻 Tecnologia & Software' },
    { id: 'expressoes', label: '💬 Idioms & Expressões' },
    { id: 'academico', label: '🎓 Acadêmico & Formal' }
  ];

  const partsOfSpeech: { id: PartOfSpeech | 'all'; label: string }[] = [
    { id: 'all', label: 'Todas as Classes' },
    { id: 'substantivo', label: 'Substantivo (noun)' },
    { id: 'verbo', label: 'Verbo (verb)' },
    { id: 'adjetivo', label: 'Adjetivo (adj)' },
    { id: 'adverbio', label: 'Advérbio (adv)' },
    { id: 'phrasal-verb', label: 'Phrasal Verb' },
    { id: 'expressao', label: 'Expressão / Idiom' }
  ];

  const filteredWords = useMemo(() => {
    const q = search.trim().toLowerCase();

    return vocabularyData.filter((item: VocabWord) => {
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
    <div className="space-y-4">
      {/* Search & Dictionary Filter Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-3.5">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Consultar dicionário por termo em inglês ou tradução (ex: resilient, escala, deploy)..."
            className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white rounded-xl border border-slate-200/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-slate-800 placeholder:text-slate-400"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
              title="Limpar pesquisa"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category / Theme Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 flex items-center gap-1 pr-1 font-semibold shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Tema:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3 py-1.5 rounded-xl font-medium transition active:scale-95 ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grammatical Class Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-100 pb-0.5 scrollbar-none text-xs">
          <span className="text-slate-400 flex items-center gap-1 pr-1 font-semibold shrink-0">
            <Tag className="w-3.5 h-3.5" />
            Classe:
          </span>
          {partsOfSpeech.map((pos) => (
            <button
              key={pos.id}
              onClick={() => setSelectedPos(pos.id)}
              className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                selectedPos === pos.id
                  ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
              }`}
            >
              {pos.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Info */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <span>
          Encontrados <strong className="text-slate-800">{filteredWords.length}</strong> {filteredWords.length === 1 ? 'verbete' : 'verbetes'}
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
          <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
          Pronúncia com síntese nativa em inglês (Web Speech API)
        </span>
      </div>

      {/* Empty State */}
      {filteredWords.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-2">
          <p className="text-slate-800 font-semibold">Nenhum verbete encontrado no dicionário</p>
          <p className="text-xs text-slate-500">
            Experimente buscar com outra grafia ou ajustar os filtros de tema e classe gramatical.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
              setSelectedPos('all');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 pt-2"
          >
            Redefinir busca e filtros
          </button>
        </div>
      )}

      {/* DICTIONARY GRID: Responsive multi-column layout on Desktop/Tablet & Cards on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredWords.map((item: VocabWord) => {
          return (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between group"
            >
              <div>
                {/* Word Header: Term, Phonetics & Pronounce */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-900 transition-colors">
                        {item.word}
                      </h3>
                      {item.phonetic && (
                        <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                          {item.phonetic}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-100/70">
                        {item.partOfSpeech}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <PronounceButton text={item.word} size="md" />
                </div>

                {/* Primary Translation & Definition */}
                <div className="mt-3.5 space-y-1">
                  <p className="text-sm font-bold text-indigo-700">
                    {item.translation}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.meaning}
                  </p>
                </div>

                {/* Senses / Multiple Meanings if available */}
                {item.senses && item.senses.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      Outros sentidos contextuais:
                    </span>
                    <ol className="space-y-1.5 text-xs">
                      {item.senses.map((sense, sIdx) => (
                        <li key={sIdx} className="bg-slate-50 p-2 rounded-lg border border-slate-100/80">
                          <span className="font-semibold text-slate-800">
                            {sIdx + 1}. {sense.translation}:
                          </span>{' '}
                          <span className="text-slate-600">{sense.meaning}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Synonyms Tags */}
                {item.synonyms && item.synonyms.length > 0 && (
                  <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-semibold text-slate-400">Sinônimos:</span>
                    {item.synonyms.map((syn, synIdx) => (
                      <span
                        key={synIdx}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100/80 hover:bg-indigo-50 hover:text-indigo-700 px-2 py-0.5 rounded-md transition"
                      >
                        {syn}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Natural Sentence Example Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50/80 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3.5 sm:p-4 rounded-b-2xl space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-semibold text-slate-800 italic leading-snug">
                    "{item.exampleEn}"
                  </p>
                  <PronounceButton text={item.exampleEn} size="xs" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
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

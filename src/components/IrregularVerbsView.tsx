import React, { useMemo, useState } from 'react';
import { Search, X, ChevronDown, ChevronUp, Sparkles, Filter } from 'lucide-react';
import { irregularVerbs } from '../data/irregularVerbs';
import { IrregularVerb } from '../types';
import { PronounceButton } from './PronounceButton';

export const IrregularVerbsView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterOptions = [
    { id: 'all', label: 'Todos' },
    { id: 'identical', label: '3 Formas Iguais (hit/cut)' },
    { id: 'en-ending', label: 'Terminação -en (spoken/written)' },
    { id: 'vowel-change', label: 'Mudança Vocálica (began/begun)' },
    { id: 'general', label: 'Outros Padrões' }
  ];

  const filteredVerbs = useMemo(() => {
    const q = search.trim().toLowerCase();

    return irregularVerbs
      .filter((verb) => {
        // Group filter
        if (selectedGroup !== 'all' && verb.group !== selectedGroup) {
          return false;
        }

        // Search filter
        if (!q) return true;
        return (
          verb.infinitive.toLowerCase().includes(q) ||
          verb.pastSimple.toLowerCase().includes(q) ||
          verb.pastParticiple.toLowerCase().includes(q) ||
          verb.translation.toLowerCase().includes(q) ||
          (verb.variants && verb.variants.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        const compare = a.infinitive.localeCompare(b.infinitive);
        return sortOrder === 'asc' ? compare : -compare;
      });
  }, [search, selectedGroup, sortOrder]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {/* Search & Action Bar */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por verbo em inglês ou tradução (ex: bring, trouxe)..."
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

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 flex items-center gap-1 pr-1 font-medium shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Filtro:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedGroup(opt.id)}
              className={`shrink-0 px-2.5 py-1 rounded-lg font-medium transition ${
                selectedGroup === opt.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header info */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <span>
          Mostrando <strong className="text-slate-800">{filteredVerbs.length}</strong> {filteredVerbs.length === 1 ? 'verbo' : 'verbos'}
        </span>
        <button
          onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
          className="hover:text-indigo-600 transition flex items-center gap-1"
        >
          Ordem: {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
        </button>
      </div>

      {/* Empty State */}
      {filteredVerbs.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-2">
          <p className="text-slate-700 font-medium">Nenhum verbo irregular encontrado</p>
          <p className="text-xs text-slate-500">
            Tente pesquisar com outro termo ou redefinir os filtros aplicados.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedGroup('all');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 pt-2"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}

      {/* Verbs List (Card on mobile, Table/Rich Cards on larger screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredVerbs.map((verb: IrregularVerb) => {
          const isExpanded = expandedId === verb.id;

          return (
            <div
              key={verb.id}
              className={`bg-white rounded-2xl border transition-all duration-150 ${
                isExpanded
                  ? 'border-indigo-300 shadow-md ring-2 ring-indigo-50'
                  : 'border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
              } p-4 flex flex-col justify-between`}
            >
              <div>
                {/* Header: Infinitive + Pronounce + Translation */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 capitalize">
                      {verb.infinitive}
                    </h3>
                    <PronounceButton text={verb.infinitive} size="sm" />
                  </div>
                  <span className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium text-right max-w-[150px] truncate">
                    {verb.translation}
                  </span>
                </div>

                {/* Forms Pills: Past Simple and Past Participle */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-semibold text-slate-400">
                        Past Simple
                      </span>
                      <PronounceButton text={verb.pastSimple.replace(/\([^)]*\)/g, '')} size="sm" />
                    </div>
                    <p className="text-xs font-mono font-medium text-indigo-700 mt-0.5">
                      {verb.pastSimple}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-semibold text-slate-400">
                        Past Participle
                      </span>
                      <PronounceButton text={verb.pastParticiple.replace(/\([^)]*\)/g, '')} size="sm" />
                    </div>
                    <p className="text-xs font-mono font-medium text-emerald-700 mt-0.5">
                      {verb.pastParticiple}
                    </p>
                  </div>
                </div>

                {/* Regional Variants Note */}
                {verb.variants && (
                  <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-700 bg-amber-50/70 border border-amber-200/60 px-2.5 py-1 rounded-lg">
                    <Sparkles className="w-3 h-3 shrink-0 text-amber-600" />
                    <span>{verb.variants}</span>
                  </div>
                )}
              </div>

              {/* Collapsible Example Sentence */}
              <div className="mt-3 pt-2.5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => toggleExpand(verb.id)}
                  className="w-full flex items-center justify-between text-xs text-slate-500 hover:text-indigo-600 font-medium py-0.5"
                >
                  <span>Exemplo em contexto</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isExpanded && (
                  <div className="mt-2 p-2.5 rounded-xl bg-indigo-50/50 border border-indigo-100/60 text-xs text-slate-700 space-y-1">
                    <div className="flex items-start justify-between gap-1.5">
                      <p className="italic text-slate-800 font-medium">"{verb.example}"</p>
                      <PronounceButton text={verb.example} size="sm" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

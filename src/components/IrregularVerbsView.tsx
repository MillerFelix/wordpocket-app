import React, { useMemo, useState } from 'react';
import { Search, X, Filter, Sparkles, BookOpen, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { irregularVerbs } from '../data/irregularVerbs';
import { VerbGroup } from '../types';
import { PronounceButton } from './PronounceButton';

export const IrregularVerbsView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<VerbGroup | 'all'>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [showCoverageInfo, setShowCoverageInfo] = useState<boolean>(false);

  const filterOptions: { id: VerbGroup | 'all'; label: string; count?: number }[] = [
    { id: 'all', label: 'Todos os Verbos' },
    { id: 'identical', label: '3 Formas Iguais' },
    { id: 'en-ending', label: 'Particípio em -en/-n' },
    { id: 'vowel-change', label: 'Mudança Vocálica (i/a/u)' },
    { id: 'past-same', label: 'Passado = Particípio' }
  ];

  // Available initial letters from the dataset
  const alphabetLetters = useMemo(() => {
    const letters = new Set<string>();
    irregularVerbs.forEach((v) => {
      letters.add(v.infinitive.charAt(0).toUpperCase());
    });
    return Array.from(letters).sort();
  }, []);

  const filteredVerbs = useMemo(() => {
    const q = search.trim().toLowerCase();

    return irregularVerbs
      .filter((verb) => {
        // Pattern filter
        if (selectedGroup !== 'all' && verb.group !== selectedGroup) {
          return false;
        }

        // Letter filter
        if (selectedLetter !== 'all' && !verb.infinitive.toUpperCase().startsWith(selectedLetter)) {
          return false;
        }

        // Search query filter (matches infinitive, past, participle, translation, or variants)
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
        const comp = a.infinitive.localeCompare(b.infinitive);
        return sortOrder === 'asc' ? comp : -comp;
      });
  }, [search, selectedGroup, selectedLetter, sortOrder]);

  const toggleExpand = (id: string) => {
    setExpandedRowId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3.5">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar verbo em inglês ou tradução (ex: speak, spoke, falar, trazer)..."
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

          {/* Action buttons: Documentation Modal toggle & Sort Order */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setShowCoverageInfo(!showCoverageInfo)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition ${
                showCoverageInfo
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200/90 hover:bg-slate-50'
              }`}
              title="Informações sobre cobertura e metodologia"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Cobertura & Fontes</span>
            </button>

            <button
              type="button"
              onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
              className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 transition"
              title="Inverter ordenação"
            >
              {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
            </button>
          </div>
        </div>

        {/* Morphological Pattern Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 flex items-center gap-1 pr-1 font-semibold shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Padrão:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedGroup(opt.id)}
              className={`shrink-0 px-3 py-1.5 rounded-xl font-medium transition active:scale-95 ${
                selectedGroup === opt.id
                  ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Alphabet Jump Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pt-2 border-t border-slate-100 pb-0.5 scrollbar-none">
          <button
            onClick={() => setSelectedLetter('all')}
            className={`text-xs px-2.5 py-1 rounded-lg font-semibold shrink-0 transition ${
              selectedLetter === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            Todas
          </button>
          {alphabetLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 flex items-center justify-center text-xs font-mono rounded-lg shrink-0 transition ${
                selectedLetter === letter
                  ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100 font-medium'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Coverage / Methodology Info Card */}
      {showCoverageInfo && (
        <div className="bg-indigo-50/70 rounded-2xl border border-indigo-200/80 p-4 sm:p-5 text-xs text-slate-700 space-y-2.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-indigo-950 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Metodologia de Curadoria dos Verbos Irregulares
            </h4>
            <button
              onClick={() => setShowCoverageInfo(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="leading-relaxed">
            Esta tabela foi elaborada a partir de fontes linguísticas de referência internacional (Oxford, Cambridge e Merriam-Webster). Ela abrange os verbos irregulares canônicos essenciais da língua inglesa moderna, que respondem por praticamente a totalidade das ocorrências do dia a dia, ambiente profissional e acadêmico.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-medium text-slate-800">
            <div className="bg-white/80 p-2.5 rounded-xl border border-indigo-100">
              <strong>Variantes UK vs. US registradas:</strong> Inclui alternâncias consagradas como <em>burned/burnt</em>, <em>learned/learnt</em> e <em>got/gotten</em>.
            </div>
            <div className="bg-white/80 p-2.5 rounded-xl border border-indigo-100">
              <strong>Formas arcaicas deliberadamente excluídas:</strong> Formas obsoletas ou raras (ex: <em>beseech/besought</em>) foram omitidas para manter o foco na comunicação real.
            </div>
          </div>
        </div>
      )}

      {/* Counter bar */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <span>
          Exibindo <strong className="text-slate-800">{filteredVerbs.length}</strong> {filteredVerbs.length === 1 ? 'verbo' : 'verbos'}
        </span>
        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
            Infinitive
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            Simple Past
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
            Past Participle
          </span>
        </div>
      </div>

      {/* Empty State */}
      {filteredVerbs.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-2">
          <p className="text-slate-800 font-semibold">Nenhum verbo corresponde à busca</p>
          <p className="text-xs text-slate-500">
            Tente pesquisar por outra palavra ou limpe os filtros de padrão e letra.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedGroup('all');
              setSelectedLetter('all');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 pt-2"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}

      {/* DESKTOP & TABLET VIEW: High-end responsive table with distinct column color harmonies */}
      <div className="hidden md:block bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-50/80">
              <th className="py-3.5 px-4 bg-indigo-50/50 text-indigo-900 border-r border-slate-200/60">
                1. Base Form (Infinitive)
              </th>
              <th className="py-3.5 px-4 bg-amber-50/50 text-amber-900 border-r border-slate-200/60">
                2. Simple Past
              </th>
              <th className="py-3.5 px-4 bg-emerald-50/50 text-emerald-900 border-r border-slate-200/60">
                3. Past Participle
              </th>
              <th className="py-3.5 px-4 text-slate-800">
                Tradução (PT-BR)
              </th>
              <th className="py-3.5 px-4 text-center w-24">
                Detalhes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredVerbs.map((verb) => {
              const isExpanded = expandedRowId === verb.id;
              return (
                <React.Fragment key={verb.id}>
                  <tr
                    onClick={() => toggleExpand(verb.id)}
                    className={`cursor-pointer transition-colors ${
                      isExpanded ? 'bg-indigo-50/40' : 'hover:bg-slate-50/70'
                    }`}
                  >
                    {/* Base Form Column (Indigo Tint) */}
                    <td className="py-3 px-4 font-bold text-indigo-950 bg-indigo-50/20 border-r border-slate-100">
                      <div className="flex items-center justify-between gap-1">
                        <span className="capitalize">{verb.infinitive}</span>
                        <PronounceButton text={verb.infinitive} size="xs" />
                      </div>
                    </td>

                    {/* Simple Past Column (Amber Tint) */}
                    <td className="py-3 px-4 font-mono font-semibold text-amber-900 bg-amber-50/20 border-r border-slate-100">
                      <div className="flex items-center justify-between gap-1">
                        <span>{verb.pastSimple}</span>
                        <PronounceButton text={verb.pastSimple.replace(/\([^)]*\)/g, '')} size="xs" />
                      </div>
                    </td>

                    {/* Past Participle Column (Emerald Tint) */}
                    <td className="py-3 px-4 font-mono font-semibold text-emerald-900 bg-emerald-50/20 border-r border-slate-100">
                      <div className="flex items-center justify-between gap-1">
                        <span>{verb.pastParticiple}</span>
                        <PronounceButton text={verb.pastParticiple.replace(/\([^)]*\)/g, '')} size="xs" />
                      </div>
                    </td>

                    {/* Translation Column */}
                    <td className="py-3 px-4 text-slate-700 font-medium">
                      {verb.translation}
                      {verb.variants && (
                        <span className="block text-[11px] text-amber-700 font-normal mt-0.5">
                          {verb.variants}
                        </span>
                      )}
                    </td>

                    {/* Expand Trigger Button */}
                    <td className="py-3 px-4 text-center">
                      <button
                        type="button"
                        aria-label={`Expandir detalhes de ${verb.infinitive}`}
                        className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Row with Sentence Example */}
                  {isExpanded && (
                    <tr className="bg-slate-50/90 border-b border-indigo-100/70">
                      <td colSpan={5} className="py-3 px-5">
                        <div className="flex items-start justify-between gap-3 bg-white p-3.5 rounded-xl border border-indigo-100 shadow-2xs">
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600">
                              Exemplo de uso natural em inglês
                            </span>
                            <p className="text-sm font-medium text-slate-800 italic">
                              "{verb.example}"
                            </p>
                          </div>
                          <PronounceButton text={verb.example} size="sm" showLabel />
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW: Visual Cards with 3 Distinct Color Badges */}
      <div className="md:hidden space-y-3">
        {filteredVerbs.map((verb) => {
          const isExpanded = expandedRowId === verb.id;
          return (
            <div
              key={verb.id}
              className={`bg-white rounded-2xl border transition-all duration-150 p-4 ${
                isExpanded
                  ? 'border-indigo-300 shadow-md ring-2 ring-indigo-50'
                  : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Header: Infinitive & Translation */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900 capitalize">
                    {verb.infinitive}
                  </h3>
                  <PronounceButton text={verb.infinitive} size="sm" />
                </div>
                <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg font-semibold max-w-[150px] truncate">
                  {verb.translation}
                </span>
              </div>

              {/* Three Verbal Forms Pills with Distinct Color Harmonies */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                {/* Past Simple */}
                <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-2.5">
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold text-amber-800">
                    <span>Simple Past</span>
                    <PronounceButton text={verb.pastSimple.replace(/\([^)]*\)/g, '')} size="xs" />
                  </div>
                  <p className="text-xs font-mono font-bold text-amber-950 mt-1">
                    {verb.pastSimple}
                  </p>
                </div>

                {/* Past Participle */}
                <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-xl p-2.5">
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold text-emerald-800">
                    <span>Past Participle</span>
                    <PronounceButton text={verb.pastParticiple.replace(/\([^)]*\)/g, '')} size="xs" />
                  </div>
                  <p className="text-xs font-mono font-bold text-emerald-950 mt-1">
                    {verb.pastParticiple}
                  </p>
                </div>
              </div>

              {/* Regional Variant Badge */}
              {verb.variants && (
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-800 bg-amber-50/80 border border-amber-200 px-2.5 py-1 rounded-lg">
                  <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                  <span>{verb.variants}</span>
                </div>
              )}

              {/* Example Expand Section */}
              <div className="mt-3 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => toggleExpand(verb.id)}
                  className="w-full flex items-center justify-between text-xs text-slate-500 hover:text-indigo-600 font-semibold py-0.5"
                >
                  <span>Exemplo em contexto</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isExpanded && (
                  <div className="mt-2 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs italic font-medium text-slate-800">
                        "{verb.example}"
                      </p>
                      <PronounceButton text={verb.example} size="xs" />
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

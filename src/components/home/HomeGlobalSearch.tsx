import React from 'react';
import { Search, X } from 'lucide-react';
import { TabType, IrregularVerb, VocabWord } from '../../types';

interface SearchResultsData {
  verbs: IrregularVerb[];
  vocab: VocabWord[];
  totalCount: number;
}

interface HomeGlobalSearchProps {
  globalSearch: string;
  onSearchChange: (val: string) => void;
  searchResults: SearchResultsData | null;
  onNavigate: (tab: TabType, searchQuery?: string) => void;
}

export const HomeGlobalSearch: React.FC<HomeGlobalSearchProps> = ({
  globalSearch,
  onSearchChange,
  searchResults,
  onNavigate
}) => {
  return (
    <div className="relative z-20">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6938F5]" />
        <input
          type="text"
          value={globalSearch}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar palavra, verbo ou tradução..."
          className="w-full pl-11 pr-10 py-3.5 text-sm bg-white/85 backdrop-blur-md hover:border-[#6938F5]/40 focus:border-[#6938F5] focus:bg-white focus:ring-4 focus:ring-[#6938F5]/10 rounded-2xl border border-white/90 shadow-soft-card outline-none transition text-[#160F2E] placeholder:text-[#645A82] font-medium"
        />
        {globalSearch && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#52456F] hover:text-[#160F2E] rounded-lg transition"
            title="Limpar busca"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Global Live Search Results Dropdown */}
      {searchResults && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-soft-hover p-4 z-50 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2D7F8]">
            <span className="text-xs font-bold text-[#52456F]">
              {searchResults.totalCount} resultados encontrados
            </span>
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="text-xs font-semibold text-[#6938F5] hover:underline"
            >
              Fechar
            </button>
          </div>

          {/* Verbs Results */}
          {searchResults.verbs.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6938F5] px-1">
                Verbos Irregulares
              </span>
              <div className="space-y-1 mt-1">
                {searchResults.verbs.map((verb) => (
                  <button
                    key={verb.id}
                    type="button"
                    onClick={() => {
                      onNavigate('verbs', verb.infinitive);
                      onSearchChange('');
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EAE1FD] text-left transition group"
                  >
                    <div>
                      <span className="text-sm font-bold text-[#160F2E] group-hover:text-[#6938F5] transition">
                        {verb.infinitive}
                      </span>
                      <span className="text-xs text-[#52456F] ml-2 font-mono">
                        ({verb.pastSimple} • {verb.pastParticiple})
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#52456F] truncate max-w-[150px]">
                      {verb.translation}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Vocabulary Results */}
          {searchResults.vocab.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A9B80] px-1">
                Dicionário & Vocabulário
              </span>
              <div className="space-y-1 mt-1">
                {searchResults.vocab.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onNavigate('vocab', item.word);
                      onSearchChange('');
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#DCF8F1] text-left transition group"
                  >
                    <div>
                      <span className="text-sm font-bold text-[#160F2E] group-hover:text-[#0A9B80] transition">
                        {item.word}
                      </span>
                      {item.phonetic && (
                        <span className="text-xs text-[#52456F] ml-2 font-mono">
                          {item.phonetic}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-[#52456F] truncate max-w-[150px]">
                      {item.translation}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchResults.totalCount === 0 && (
            <div className="py-4 text-center text-xs text-[#52456F]">
              Nenhum verbo ou palavra encontrado para "{globalSearch}".
            </div>
          )}
        </div>
      )}
    </div>
  );
};

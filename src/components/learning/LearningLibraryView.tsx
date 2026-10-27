import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Layers, 
  ArrowLeft, 
  ArrowRight,
  Zap,
  BookCheck,
  Compass,
  Bookmark,
  Sparkles,
  HelpCircle,
  Search,
  Filter
} from 'lucide-react';
import { LearningCategoryId, CEFRLevel } from '../../types/learning';
import { 
  learningService, 
  LEARNING_CATEGORIES,
  getCategoryById 
} from '../../data/learning';
import { ArticleCard } from './ArticleCard';
import { ArticleView } from './ArticleView';
import { SearchInput } from '../shared/SearchInput';
import { Pagination } from '../shared/Pagination';

interface LearningLibraryViewProps {
  initialArticleId?: string;
  initialSearch?: string;
  initialCategoryId?: LearningCategoryId | 'all';
}

const ALL_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const ITEMS_PER_PAGE = 12;

const CATEGORY_CARDS: {
  id: LearningCategoryId;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos',
    description: 'Bases essenciais, verbo to be e pronomes',
    icon: Zap,
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#176BFF]'
  },
  {
    id: 'gramatica',
    title: 'Gramática',
    description: 'Tempos verbais e estruturas fundamentais',
    icon: BookCheck,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 'formacao-frases',
    title: 'Formação de Frases',
    description: 'Ordem das palavras, perguntas e negativas',
    icon: Compass,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    id: 'vocabulario',
    title: 'Vocabulário',
    description: 'Expressões do dia a dia e falsos cognatos',
    icon: Bookmark,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    id: 'situacoes-reais',
    title: 'Situações Reais',
    description: 'Viagens, rotina, compras e diálogos',
    icon: Sparkles,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
  {
    id: 'revisao',
    title: 'Revisão',
    description: 'Erros comuns de brasileiros e macetes',
    icon: HelpCircle,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
];

export const LearningLibraryView: React.FC<LearningLibraryViewProps> = ({
  initialArticleId,
  initialSearch = '',
  initialCategoryId
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(initialArticleId || null);
  const [selectedCategory, setSelectedCategory] = useState<LearningCategoryId | 'all' | null>(
    initialCategoryId || null
  );
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'all'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Selected article object if one is open
  const currentArticle = useMemo(() => {
    if (!selectedArticleId) return null;
    return learningService.getById(selectedArticleId) || null;
  }, [selectedArticleId]);

  // Current category metadata
  const currentCategoryObj = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'all') return null;
    return getCategoryById(selectedCategory);
  }, [selectedCategory]);

  // Articles filtered by current category, search and level
  const filteredArticles = useMemo(() => {
    return learningService.search(
      searchQuery,
      selectedCategory || undefined,
      selectedLevel
    );
  }, [searchQuery, selectedCategory, selectedLevel]);

  // Available levels inside current selection
  const availableLevels = useMemo(() => {
    const rawArticles = selectedCategory && selectedCategory !== 'all'
      ? learningService.getByCategory(selectedCategory)
      : learningService.getAll();
    const set = new Set<CEFRLevel>();
    rawArticles.forEach((a) => set.add(a.level));
    return ALL_LEVELS.filter((lvl) => set.has(lvl));
  }, [selectedCategory]);

  // Reset to first page when search, category or level changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedLevel]);

  const totalCount = learningService.getCount();
  const isSearching = searchQuery.trim().length > 0;

  // Pagination calculation
  const totalItems = filteredArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    const clamped = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(clamped);
  };

  // State 1: Reading an article
  if (currentArticle) {
    return (
      <ArticleView
        article={currentArticle}
        onBack={() => setSelectedArticleId(null)}
        onSelectArticle={(id) => setSelectedArticleId(id)}
      />
    );
  }

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-200">
      {/* Cabeçalho Minimalista e Leve */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div className="flex items-start gap-3.5">
          <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-gradient-to-br from-[#00BFA5] to-[#0A9B80] text-white flex items-center justify-center shadow-colored-teal shrink-0 ring-4 ring-white/80">
            <Compass className="w-5 sm:w-6 h-5 sm:h-6 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00BFA5]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#009688]">
                Biblioteca de Conhecimento • 37 Artigos
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
              Aprender Inglês
            </h1>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-0.5 sm:mt-1">
              Consulte regras explicadas sem complicação, entenda os fundamentos e tire dúvidas com exemplos práticos.
            </p>
          </div>
        </div>

        <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs text-xs font-bold text-[#0A9B80]">
          <Compass className="w-4 h-4 text-[#00BFA5]" />
          <span>37 Artigos & 6 Categorias</span>
        </div>
      </div>

      {/* Campo de Busca Discreto e Acessível */}
      <div className="bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-3xl border border-white/90 shadow-soft-card">
        <SearchInput
          ref={searchInputRef}
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Buscar por assunto, regra, palavra, dúvida ou exemplo..."
          ariaLabel="Buscar artigos de aprendizagem"
          variant="default"
        />
      </div>

      {/* State 2: Resultados de Busca */}
      {isSearching ? (
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176BFF] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Limpar busca e voltar</span>
              </button>
            </div>
            <span className="text-xs font-semibold text-[#52456F]">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="p-8 rounded-3xl bg-white/90 border border-slate-200/80 text-center space-y-3 shadow-soft-card max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F7F4] text-[#00BFA5] flex items-center justify-center mx-auto shadow-2xs">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#160F2E]">Nenhum artigo encontrado</h3>
                <p className="text-xs text-[#52456F] mt-1 leading-relaxed">
                  Não encontramos resultados para &ldquo;{searchQuery}&rdquo;. Tente buscar por outros termos como &ldquo;to be&rdquo;, &ldquo;do&rdquo;, &ldquo;passado&rdquo; ou &ldquo;preposições&rdquo;.
                </p>
              </div>
              <button
                type="button"
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-brand text-white font-extrabold text-xs shadow-colored-blue cursor-pointer"
              >
                <span>Ver todos os {totalCount} artigos</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {paginatedArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelect={(id) => setSelectedArticleId(id)}
                />
              ))}

              {totalPages > 1 && (
                <Pagination
                  currentPage={safeCurrentPage}
                  totalPages={totalPages}
                  totalItems={totalItems}
                  startIndex={startIndex}
                  endIndex={endIndex}
                  onPageChange={handlePageChange}
                  itemLabel="artigos"
                  ariaLabel="Navegação por páginas dos artigos"
                  accentColor="brand"
                />
              )}
            </div>
          )}
        </section>
      ) : selectedCategory ? (
        /* State 3: Área Dedicada da Categoria Selecionada ou Biblioteca Completa */
        <section className="space-y-4">
          {/* Botão de retorno e seletor rápido */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedLevel('all');
                setCurrentPage(1);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 hover:bg-white text-[#160F2E] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-[#00BFA5] group-hover:-translate-x-0.5 transition-transform" />
              <span>Voltar para categorias</span>
            </button>

            {/* Alternância rápida entre categorias */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1 text-xs">
              <span className="text-[#52456F] text-[11px] font-semibold mr-1 shrink-0">Ver outra:</span>
              <button
                type="button"
                onClick={() => { setSelectedCategory('all'); setSelectedLevel('all'); setCurrentPage(1); }}
                className={`px-2 py-0.5 rounded-lg font-bold text-[11px] transition cursor-pointer shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-[#176BFF] text-white shadow-2xs'
                    : 'bg-white hover:bg-slate-100 text-[#52456F] border border-slate-200'
                }`}
              >
                Todas
              </button>
              {LEARNING_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => { setSelectedCategory(cat.id); setSelectedLevel('all'); setCurrentPage(1); }}
                  className={`px-2 py-0.5 rounded-lg font-bold text-[11px] transition cursor-pointer shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-[#176BFF] text-white shadow-2xs'
                      : 'bg-white hover:bg-slate-100 text-[#52456F] border border-slate-200'
                  }`}
                >
                  {cat.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Cabeçalho da Área Dedicada */}
          <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/90 shadow-soft-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                  {selectedCategory === 'all' ? 'Biblioteca Completa' : 'Categoria'}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-[#52456F]">
                  {filteredArticles.length} {filteredArticles.length === 1 ? 'artigo disponível' : 'artigos disponíveis'}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-[#160F2E] tracking-tight">
                {selectedCategory === 'all' ? 'Todos os Artigos da Biblioteca' : currentCategoryObj?.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#52456F] font-medium max-w-xl">
                {selectedCategory === 'all'
                  ? 'Catálogo didático completo organizado por fundamentos, estruturas, vocabulário e situações reais.'
                  : currentCategoryObj?.description}
              </p>
            </div>

            {/* Filtro Discreto de Nível CEFR */}
            {availableLevels.length > 1 && (
              <div className="flex items-center gap-1.5 flex-wrap self-start sm:self-auto bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/60 text-xs shrink-0">
                <span className="text-[11px] font-bold text-[#52456F] flex items-center gap-1 px-1">
                  <Filter className="w-3 h-3 text-[#176BFF]" />
                  <span>Nível:</span>
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedLevel('all')}
                  className={`px-2 py-0.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                    selectedLevel === 'all'
                      ? 'bg-[#176BFF] text-white shadow-2xs'
                      : 'bg-white text-[#52456F] hover:bg-slate-100'
                  }`}
                >
                  Todos
                </button>
                {availableLevels.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-2 py-0.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                      selectedLevel === lvl
                        ? 'bg-[#176BFF] text-white shadow-2xs'
                        : 'bg-white text-[#52456F] hover:bg-slate-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Lista Simples de Artigos */}
          <div className="space-y-2.5">
            {paginatedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={(id) => setSelectedArticleId(id)}
                hideCategory={selectedCategory !== 'all'}
              />
            ))}

            {/* Paginação */}
            {totalPages > 1 && (
              <Pagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                startIndex={startIndex}
                endIndex={endIndex}
                onPageChange={handlePageChange}
                itemLabel="artigos"
                ariaLabel="Navegação por páginas dos artigos"
                accentColor="brand"
              />
            )}
          </div>
        </section>
      ) : (
        /* State 4: Página Inicial Minimalista, Convidativa e Organizada por Categorias */
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#52456F]">
                Categorias de Aprendizagem
              </h2>
              <p className="text-xs text-[#52456F]/80 font-medium mt-0.5">
                Escolha uma área para consultar artigos explicados de forma simples e direta
              </p>
            </div>
            <span className="text-xs font-semibold text-[#176BFF]">
              37 de 37 artigos
            </span>
          </div>

          {/* Grade Compacta de 6 Categorias Bem Organizadas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CATEGORY_CARDS.map((cat) => {
              const Icon = cat.icon;
              const count = learningService.getByCategory(cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedLevel('all');
                    setCurrentPage(1);
                  }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 hover:border-[#176BFF]/40 shadow-2xs hover:shadow-soft-card transition-all duration-200 cursor-pointer flex flex-col justify-between text-left group active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176BFF]/25"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg}`}>
                      <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#52456F]">
                      {count} artigos
                    </span>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-base font-bold text-[#160F2E] group-hover:text-[#176BFF] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#52456F] font-normal mt-1 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#176BFF]">
                    <span className="group-hover:underline">Explorar artigos</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Acesso à Biblioteca Completa */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
                setCurrentPage(1);
              }}
              className="w-full p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-purple-50/70 hover:from-blue-100/60 hover:to-purple-100/60 border border-[#BED7FA] text-[#160F2E] transition-all cursor-pointer flex items-center justify-between gap-3 group shadow-2xs active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white text-[#176BFF] shadow-2xs flex items-center justify-center shrink-0">
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#160F2E] group-hover:text-[#176BFF] transition-colors">
                    Todas as Categorias
                  </div>
                  <div className="text-xs text-[#52456F]">
                    Consulte o catálogo completo com 37 de 37 artigos organizados
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#176BFF] group-hover:translate-x-1 transition-transform shrink-0">
                <span>Ver biblioteca completa</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </span>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

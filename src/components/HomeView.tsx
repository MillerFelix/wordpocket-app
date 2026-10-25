import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  BookA, 
  Languages, 
  ArrowRight, 
  Search, 
  SlidersHorizontal, 
  X, 
  Sparkles, 
  Lightbulb, 
  ChevronRight,
  Clock
} from 'lucide-react';
import { TabType } from '../types';
import { irregularVerbs } from '../data/irregularVerbs';
import { vocabularyData } from '../data/vocabulary';

interface HomeViewProps {
  onNavigate: (tab: TabType, searchQuery?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [globalSearch, setGlobalSearch] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Global search filtering across both verbs and vocabulary
  const searchResults = useMemo(() => {
    const q = globalSearch.trim().toLowerCase();
    if (!q) return null;

    const matchedVerbs = irregularVerbs
      .filter((v) => 
        v.infinitive.toLowerCase().includes(q) ||
        v.pastSimple.toLowerCase().includes(q) ||
        v.pastParticiple.toLowerCase().includes(q) ||
        v.translation.toLowerCase().includes(q)
      )
      .slice(0, 4);

    const matchedVocab = vocabularyData
      .filter((w) =>
        w.word.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q)
      )
      .slice(0, 4);

    return {
      verbs: matchedVerbs,
      vocab: matchedVocab,
      totalCount: matchedVerbs.length + matchedVocab.length
    };
  }, [globalSearch]);

  const recentItems = [
    {
      term: 'go',
      type: 'Verbos Irregulares',
      sub: 'went • gone • ir',
      targetTab: 'verbs' as TabType,
      color: 'bg-[#6938F5]',
      itemBg: 'bg-[#EAE1FD]/80 hover:bg-[#DFD4FA] border-white/80'
    },
    {
      term: 'beautiful',
      type: 'Vocabulário',
      sub: '/ˈbjuːtɪfəl/ • bonito(a)',
      targetTab: 'vocab' as TabType,
      color: 'bg-[#19D9B4]',
      itemBg: 'bg-[#DCF8F1]/80 hover:bg-[#CBF6EC] border-white/80'
    },
    {
      term: 'good morning',
      type: 'Tradutor',
      sub: 'Português ⇄ Inglês',
      targetTab: 'translator' as TabType,
      color: 'bg-[#FF6534]',
      itemBg: 'bg-[#FFEAE1]/80 hover:bg-[#FEDBD0] border-white/80'
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Mobile Top Greeting Card with Rocket Illustration (Neon Candy Vibrant) */}
      <div className="md:hidden relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DDD0FB] via-[#EAE1FD] to-[#D5E5FE] p-5 border border-white/90 shadow-soft-card">
        <div className="relative z-10 max-w-[70%]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 text-[#6938F5] text-[11px] font-bold mb-2 shadow-2xs border border-white/90">
            <Sparkles className="w-3 h-3 text-[#FFD447]" />
            <span>Bem-vindo ao Word Pocket</span>
          </div>
          <h1 className="text-xl font-extrabold text-[#160F2E] tracking-tight">
            Olá, Lucas! 👋
          </h1>
          <p className="text-xs font-semibold text-[#52456F] mt-1 leading-snug">
            Que bom te ver por aqui! Seu inglês te leva mais longe.
          </p>
        </div>

        {/* Decorative Floating Rocket SVG Illustration */}
        <div className="absolute right-2 -bottom-1 pointer-events-none w-28 h-28 opacity-95">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
            {/* Soft Pastel Clouds */}
            <ellipse cx="60" cy="100" rx="36" ry="12" fill="#E2D7F8" />
            <ellipse cx="40" cy="98" rx="20" ry="10" fill="#EDE5FC" />
            <ellipse cx="80" cy="98" rx="22" ry="10" fill="#EDE5FC" />
            
            {/* Rocket Body */}
            <g transform="rotate(-35 60 55)">
              {/* Rocket Thruster Flame */}
              <path d="M54 85 Q60 102 66 85 Z" fill="url(#flameGrad)" />
              <path d="M57 85 Q60 94 63 85 Z" fill="#FFE5F0" />
              
              {/* Wings */}
              <path d="M42 66 C42 66 38 78 48 80 L52 70 Z" fill="#19D9B4" />
              <path d="M78 66 C78 66 82 78 72 80 L68 70 Z" fill="#19D9B4" />
              
              {/* Main Fuselage */}
              <path d="M50 38 C50 24 60 16 60 16 C60 16 70 24 70 38 L70 76 C70 79 66 82 60 82 C54 82 50 79 50 76 Z" fill="url(#rocketGrad)" />
              
              {/* Window */}
              <circle cx="60" cy="44" r="7" fill="white" stroke="#6938F5" strokeWidth="2.5" />
              <circle cx="60" cy="44" r="4.5" fill="#19D9B4" />
              <circle cx="58" cy="42" r="1.5" fill="white" />
              
              {/* Decorative stripes */}
              <path d="M50 64 L70 64" stroke="#F52E91" strokeWidth="2.5" />
            </g>

            {/* Sparkles / Stars */}
            <circle cx="95" cy="25" r="2.5" fill="#FFD447" />
            <path d="M22 45 L25 48 L22 51 L19 48 Z" fill="#6938F5" />
            <circle cx="28" cy="20" r="1.5" fill="#19D9B4" />

            <defs>
              <linearGradient id="rocketGrad" x1="50" y1="16" x2="70" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6938F5" />
                <stop offset="1" stopColor="#A78BFA" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="54" y1="85" x2="66" y2="102" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF6534" />
                <stop offset="1" stopColor="#F52E91" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Desktop / Tablet Header Greeting Banner (Neon Candy Vibrant Landscape) */}
      <div className="hidden md:block relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#DDD0FB] via-[#EAE1FD] to-[#D5E5FE] p-7 border border-white/90 shadow-soft-card">
        <div className="flex items-center justify-between">
          <div className="max-w-xl space-y-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-[#6938F5] text-xs font-bold border border-white/90 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD447]" />
              <span>Painel de Aprendizagem Ativa</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#160F2E] tracking-tight">
              Olá, Lucas! 👋
            </h1>
            <p className="text-sm text-[#52456F] font-medium leading-relaxed">
              Aprenda, explore e evolua no seu ritmo. Seu inglês te leva mais longe a cada consulta no Word Pocket.
            </p>
          </div>

          {/* Badge Sticker & Landscape SVG Art */}
          <div className="flex items-center gap-4 z-10">
            <div className="hidden lg:flex flex-col items-center justify-center bg-white/95 px-4 py-2.5 rounded-2xl border border-white/90 shadow-sm transform rotate-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6938F5]">Better English</span>
              <span className="text-xs font-black text-[#160F2E]">Bigger Dreams ✨</span>
            </div>
          </div>
        </div>

        {/* Ambient Neon Candy Landscape SVG Background */}
        <div className="absolute right-0 bottom-0 pointer-events-none w-80 h-32 opacity-75">
          <svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M120 120 C160 50 220 70 270 120 Z" fill="#B6F5E8" />
            <path d="M180 120 C220 40 280 60 330 120 Z" fill="#EDE6FA" />
            <path d="M240 120 C270 65 310 75 340 120 Z" fill="#FFE5F0" opacity="0.8" />
            <circle cx="280" cy="35" r="14" fill="#FFD447" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="relative z-20">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6938F5]" />
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Buscar palavra, verbo ou tradução..."
              className="w-full pl-11 pr-10 py-3.5 text-sm bg-white/85 backdrop-blur-md hover:border-[#6938F5]/40 focus:border-[#6938F5] focus:bg-white focus:ring-4 focus:ring-[#6938F5]/10 rounded-2xl border border-white/90 shadow-soft-card outline-none transition text-[#160F2E] placeholder:text-[#645A82] font-medium"
            />
            {globalSearch && (
              <button
                type="button"
                onClick={() => setGlobalSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#52456F] hover:text-[#160F2E] rounded-lg transition"
                title="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowFilterModal(!showFilterModal)}
            className="p-3.5 bg-white/85 hover:bg-white text-[#160F2E] hover:text-[#6938F5] rounded-2xl border border-white/90 shadow-soft-card transition active:scale-95"
            title="Opções de busca e filtros"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
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
                onClick={() => setGlobalSearch('')}
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
                      onClick={() => onNavigate('verbs', verb.infinitive)}
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
                      onClick={() => onNavigate('vocab', item.word)}
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

      {/* 3 Main Feature Cards (Neon Candy Vibrant Hero Cards) */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#645A82]">
            Acessos Principais
          </h2>
          <span className="text-[11px] font-semibold text-[#6938F5]">
            3 Módulos Integrados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Card 1: Verbos Irregulares (Electric Violet / Lavender Gradient) */}
          <div
            onClick={() => onNavigate('verbs')}
            className="group relative overflow-hidden rounded-3xl p-6 bg-gradient-verbs text-white shadow-soft-card hover:shadow-colored-violet ring-1 ring-white/30 transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[160px] active:scale-[0.99]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate('verbs')}
          >
            {/* Ambient Background Wave SVG */}
            <div className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" />
              </svg>
            </div>

            <div className="space-y-3 z-10">
              {/* Icon Box & Module Tag */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30 shadow-inner">
                  <BookOpen className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white/95 backdrop-blur-sm">
                  Morfologia
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white leading-tight">
                  Verbos Irregulares
                </h3>
                <p className="text-xs text-white/85 mt-1 leading-relaxed font-medium">
                  Consulte todas as formas verbais da língua inglesa, com exemplos e traduções.
                </p>
              </div>
            </div>

            {/* Bottom Arrow Indicator */}
            <div className="flex justify-end pt-3 z-10">
              <div className="w-9 h-9 rounded-full bg-white text-[#6938F5] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 2: Vocabulário (Fresh Mint / Electric Blue Gradient) */}
          <div
            onClick={() => onNavigate('vocab')}
            className="group relative overflow-hidden rounded-3xl p-6 bg-gradient-vocab text-white shadow-soft-card hover:shadow-colored-mint ring-1 ring-white/30 transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[160px] active:scale-[0.99]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate('vocab')}
          >
            {/* Ambient Background Wave SVG */}
            <div className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" />
              </svg>
            </div>

            <div className="space-y-3 z-10">
              {/* Icon Box & Module Tag */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30 shadow-inner">
                  <BookA className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white/95 backdrop-blur-sm">
                  Dicionário
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white leading-tight">
                  Vocabulário
                </h3>
                <p className="text-xs text-white/85 mt-1 leading-relaxed font-medium">
                  Encontre o significado, pronúncia, exemplos e traduções de milhares de palavras.
                </p>
              </div>
            </div>

            {/* Bottom Arrow Indicator */}
            <div className="flex justify-end pt-3 z-10">
              <div className="w-9 h-9 rounded-full bg-white text-[#0FAF91] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 3: Tradutor (Tangerine / Neon Pink Gradient) */}
          <div
            onClick={() => onNavigate('translator')}
            className="group relative overflow-hidden rounded-3xl p-6 bg-gradient-translator text-white shadow-soft-card hover:shadow-colored-tangerine ring-1 ring-white/30 transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[160px] active:scale-[0.99]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate('translator')}
          >
            {/* Ambient Background Wave SVG */}
            <div className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" />
              </svg>
            </div>

            <div className="space-y-3 z-10">
              {/* Icon Box & Module Tag */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30 shadow-inner">
                  <Languages className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white/95 backdrop-blur-sm">
                  Instantâneo
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white leading-tight">
                  Tradutor
                </h3>
                <p className="text-xs text-white/85 mt-1 leading-relaxed font-medium">
                  Traduza textos e frases entre inglês e português de forma rápida e prática.
                </p>
              </div>
            </div>

            {/* Bottom Arrow Indicator */}
            <div className="flex justify-end pt-3 z-10">
              <div className="w-9 h-9 rounded-full bg-white text-[#FF6534] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acesso rápido (Pills com cores Neon Candy Vibrant) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F]">
            Acesso rápido
          </h2>
          <button
            type="button"
            onClick={() => onNavigate('verbs')}
            className="text-xs font-bold text-[#6938F5] hover:underline flex items-center gap-1"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => onNavigate('verbs')}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#EAE1FD] hover:bg-[#DFD4FA] text-[#6938F5] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group"
          >
            <div className="w-6 h-6 rounded-lg bg-white/90 text-[#6938F5] flex items-center justify-center group-hover:bg-[#6938F5] group-hover:text-white transition shadow-2xs">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span>Verbos</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('vocab')}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#DCF8F1] hover:bg-[#CBF6EC] text-[#0A9B80] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group"
          >
            <div className="w-6 h-6 rounded-lg bg-white/90 text-[#0A9B80] flex items-center justify-center group-hover:bg-[#19D9B4] group-hover:text-white transition shadow-2xs">
              <BookA className="w-3.5 h-3.5" />
            </div>
            <span>Vocabulário</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('translator')}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#FFEAE1] hover:bg-[#FEDBD0] text-[#E04D1B] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group"
          >
            <div className="w-6 h-6 rounded-lg bg-white/90 text-[#E04D1B] flex items-center justify-center group-hover:bg-[#FF6534] group-hover:text-white transition shadow-2xs">
              <Languages className="w-3.5 h-3.5" />
            </div>
            <span>Tradutor</span>
          </button>
        </div>
      </div>

      {/* Desktop / Tablet Grid: Recently Accessed + Study Motivation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Recently Accessed Items (7 cols) - Soft Tinted Frosted Glass */}
        <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#6938F5]" />
              <h2 className="text-sm font-extrabold text-[#160F2E]">
                Recentemente acessados
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('verbs')}
              className="text-xs font-bold text-[#6938F5] hover:underline flex items-center gap-1"
            >
              <span>Ver histórico</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-2.5">
            {recentItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(item.targetTab, item.term)}
                className={`flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border ${item.itemBg} transition cursor-pointer group shadow-2xs`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.targetTab, item.term)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${item.color} text-white flex items-center justify-center font-bold text-xs shadow-xs`}>
                    {item.term.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#160F2E] group-hover:text-[#6938F5] transition">
                      {item.term}
                    </p>
                    <p className="text-xs text-[#52456F] font-medium">
                      {item.type} • {item.sub}
                    </p>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-[#52456F] group-hover:text-[#6938F5] group-hover:translate-x-0.5 transition" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Motivational Card (5 cols) - Luminous Candy Mesh */}
        <div className="lg:col-span-5 rounded-3xl p-6 bg-gradient-to-br from-[#E6D9FB] via-[#FCE4F0] to-[#DCF7EF] border border-white/90 shadow-soft-card flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-2.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#6938F5] text-xs font-bold shadow-2xs border border-white/90">
              <Lightbulb className="w-3.5 h-3.5 text-[#FFD447]" />
              <span>Dica do dia</span>
            </span>
            <h3 className="text-base font-extrabold text-[#160F2E]">
              "Practice makes progress"
            </h3>
            <p className="text-xs text-[#52456F] leading-relaxed font-medium">
              A prática constante e consultas breves ao longo do dia trazem mais resultados duradouros do que longas sessões exaustivas.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between z-10">
            <span className="text-[11px] font-bold text-[#6938F5]">
              Estudo no seu ritmo
            </span>
            <button
              type="button"
              onClick={() => onNavigate('vocab')}
              className="text-xs font-bold text-white bg-gradient-brand px-3.5 py-1.5 rounded-xl shadow-xs hover:opacity-95 transition"
            >
              Explorar vocabulário
            </button>
          </div>

          {/* Decorative books vector illustration */}
          <div className="absolute right-2 -bottom-2 pointer-events-none opacity-25 w-32 h-32">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="30" width="60" height="15" rx="3" fill="#6938F5" />
              <rect x="25" y="48" width="55" height="15" rx="3" fill="#19D9B4" />
              <rect x="18" y="66" width="65" height="16" rx="3" fill="#FF6534" />
            </svg>
          </div>
        </div>
      </div>

      {/* Motivational Bottom Banner (Small Steps Big Dreams) */}
      <div className="relative overflow-hidden rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-[#FFEAE1] via-[#FDE4EE] to-[#E6D9FB] border border-white/90 shadow-soft-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 relative">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-white/90 text-[#6938F5] flex items-center justify-center shadow-xs shrink-0 border border-white/90">
              <Sparkles className="w-5 h-5 text-[#FFD447]" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#160F2E]">
                Pequenos passos, grandes conquistas!
              </h4>
              <p className="text-xs text-[#52456F] font-medium">
                Seu futuro bilíngue começa agora. O próximo nível está mais perto do que você imagina.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('verbs')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-[#6938F5] hover:text-[#6938F5] border border-white/90 font-bold text-xs shadow-2xs transition self-start sm:self-auto shrink-0"
          >
            <span>Continuar praticando</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

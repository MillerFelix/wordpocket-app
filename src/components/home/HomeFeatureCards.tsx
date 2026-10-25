import React from 'react';
import { BookOpen, BookA, Languages, ArrowRight } from 'lucide-react';
import { TabType } from '../../types';

interface HomeFeatureCardsProps {
  onNavigate: (tab: TabType) => void;
}

export const HomeFeatureCards: React.FC<HomeFeatureCardsProps> = ({ onNavigate }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F]">
          Acessos Principais
        </h2>
        <span className="text-[11px] font-semibold text-[#176BFF]">
          3 Módulos Integrados
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {/* Card 1: Verbos Irregulares (Violeta / Roxo Pillar) */}
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
              <p className="text-xs text-white/90 mt-1 leading-relaxed font-medium">
                Consulte todas as formas verbais da língua inglesa, com exemplos e traduções.
              </p>
            </div>
          </div>

          {/* Bottom Arrow Indicator */}
          <div className="flex justify-end pt-3 z-10">
            <div className="w-9 h-9 rounded-full bg-white text-[#6545F5] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
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
            <div className="w-9 h-9 rounded-full bg-white text-[#0A9B80] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* Card 3: Tradutor (Laranja / Tangerine Pillar) */}
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
              <p className="text-xs text-white/90 mt-1 leading-relaxed font-medium">
                Traduza textos e frases entre inglês e português de forma rápida e prática.
              </p>
            </div>
          </div>

          {/* Bottom Arrow Indicator */}
          <div className="flex justify-end pt-3 z-10">
            <div className="w-9 h-9 rounded-full bg-white text-[#E04D1B] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

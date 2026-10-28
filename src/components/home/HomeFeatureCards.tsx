import React from 'react';
import { BookOpen, GraduationCap, Languages, ArrowRight, Compass } from 'lucide-react';
import { TabType } from '../../types';

interface FeatureCardConfig {
  id: TabType;
  title: string;
  description: string;
  shortDesc: string;
  tag: string;
  icon: React.ElementType;
  gradientClass: string;
  shadowClass: string;
  arrowColorClass: string;
}

const FEATURE_CARDS: FeatureCardConfig[] = [
  {
    id: 'learn',
    title: 'Aprender',
    description: 'Biblioteca completa de consultas, explicações e fundamentos essenciais.',
    shortDesc: 'Biblioteca & regras',
    tag: 'Biblioteca',
    icon: Compass,
    gradientClass: 'bg-gradient-to-br from-[#00BFA5] to-[#10B981]',
    shadowClass: 'shadow-soft-card',
    arrowColorClass: 'text-[#00BFA5]'
  },
  {
    id: 'practice',
    title: 'Praticar',
    description: 'Listening, Speaking, Reading e Writing para desenvolver sua fluência no seu próprio ritmo.',
    shortDesc: '4 Habilidades',
    tag: '4 Habilidades',
    icon: GraduationCap,
    gradientClass: 'bg-gradient-brand',
    shadowClass: 'shadow-soft-card hover:shadow-colored-blue',
    arrowColorClass: 'text-[#176BFF]'
  },
  {
    id: 'verbs',
    title: 'Verbos Irregulares',
    description: 'Consulte todas as formas verbais da língua inglesa, com exemplos e traduções.',
    shortDesc: '200 Verbos',
    tag: 'Morfologia',
    icon: BookOpen,
    gradientClass: 'bg-gradient-verbs',
    shadowClass: 'shadow-soft-card hover:shadow-colored-violet',
    arrowColorClass: 'text-[#6545F5]'
  },
  {
    id: 'translator',
    title: 'Tradutor',
    description: 'Traduza textos e frases entre inglês e português de forma rápida e prática.',
    shortDesc: 'Inglês & Português',
    tag: 'Instantâneo',
    icon: Languages,
    gradientClass: 'bg-gradient-translator',
    shadowClass: 'shadow-soft-card hover:shadow-colored-tangerine',
    arrowColorClass: 'text-[#E04D1B]'
  }
];

interface HomeFeatureCardsProps {
  onNavigate: (tab: TabType) => void;
}

export const HomeFeatureCards: React.FC<HomeFeatureCardsProps> = ({ onNavigate }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
        <h2 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#52456F]">
          Acessos Principais
        </h2>
        <span className="text-[10px] sm:text-[11px] font-semibold text-[#176BFF]">
          4 Módulos Integrados
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
        {FEATURE_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 ${card.gradientClass} text-white ${card.shadowClass} ring-1 ring-white/30 transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[105px] sm:min-h-[160px] active:scale-[0.98] select-none`}
              role="button"
              tabIndex={0}
              aria-label={`Acessar ${card.title}`}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate(card.id)}
            >
              <div className="absolute -right-3 -bottom-3 sm:-right-4 sm:-bottom-6 w-20 h-20 sm:w-32 sm:h-32 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" />
                </svg>
              </div>

              <div className="space-y-1.5 sm:space-y-3 z-10">
                <div className="flex items-center justify-between gap-1.5">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30 shadow-inner shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.3]" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 text-white/95 backdrop-blur-sm truncate">
                    {card.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs sm:text-lg font-black tracking-tight text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="sm:hidden text-[10px] text-white/85 mt-0.5 font-medium line-clamp-1 leading-tight">
                    {card.shortDesc}
                  </p>
                  <p className="hidden sm:block text-xs text-white/90 mt-1 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex justify-end pt-3 z-10">
                <div className={`w-9 h-9 rounded-full bg-white ${card.arrowColorClass} flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform`}>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

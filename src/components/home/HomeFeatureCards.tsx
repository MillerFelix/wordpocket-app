import React from 'react';
import { BookOpen, GraduationCap, Languages, ArrowRight, Compass } from 'lucide-react';
import { TabType } from '../../types';

interface FeatureCardConfig {
  id: TabType;
  title: string;
  description: string;
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
    tag: 'Biblioteca',
    icon: Compass,
    gradientClass: 'bg-gradient-to-br from-[#00BFA5] to-[#10B981]',
    shadowClass: 'shadow-soft-card',
    arrowColorClass: 'text-[#00BFA5]'
  },
  {
    id: 'verbs',
    title: 'Verbos Irregulares',
    description: 'Consulte todas as formas verbais da língua inglesa, com exemplos e traduções.',
    tag: 'Morfologia',
    icon: BookOpen,
    gradientClass: 'bg-gradient-verbs',
    shadowClass: 'shadow-soft-card hover:shadow-colored-violet',
    arrowColorClass: 'text-[#6545F5]'
  },
  {
    id: 'practice',
    title: 'Praticar',
    description: 'Listening, Speaking, Reading e Writing para desenvolver sua fluência no seu próprio ritmo.',
    tag: '4 Habilidades',
    icon: GraduationCap,
    gradientClass: 'bg-gradient-brand',
    shadowClass: 'shadow-soft-card hover:shadow-colored-blue',
    arrowColorClass: 'text-[#176BFF]'
  },
  {
    id: 'translator',
    title: 'Tradutor',
    description: 'Traduza textos e frases entre inglês e português de forma rápida e prática.',
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
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F]">
          Acessos Principais
        </h2>
        <span className="text-[11px] font-semibold text-[#176BFF]">
          4 Módulos Integrados
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {FEATURE_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className={`group relative overflow-hidden rounded-3xl p-6 ${card.gradientClass} text-white ${card.shadowClass} ring-1 ring-white/30 transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[160px] active:scale-[0.99]`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate(card.id)}
            >
              <div className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" />
                </svg>
              </div>

              <div className="space-y-3 z-10">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30 shadow-inner">
                    <Icon className="w-5 h-5 stroke-[2.3]" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white/95 backdrop-blur-sm">
                    {card.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/90 mt-1 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-3 z-10">
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

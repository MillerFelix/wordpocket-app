import React, { useMemo } from 'react';
import { Lightbulb, BookMarked, ArrowRight } from 'lucide-react';
import { TabType } from '../../types';
import { getDailyTip } from '../../data/englishTips';

interface HomeNavigationProps {
  onNavigate: (tab: TabType) => void;
}

export const HomeTipCard: React.FC<HomeNavigationProps> = ({ onNavigate }) => {
  const tip = useMemo(() => getDailyTip(), []);

  return (
    <div className="w-full rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#E6D9FB] via-[#FCE4F0] to-[#DCF7EF] border border-white/90 shadow-soft-card flex flex-col justify-between relative overflow-hidden">
      <div className="space-y-2.5 z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 text-[#6938F5] text-[11px] font-bold shadow-2xs border border-white/90">
            <Lightbulb className="w-3.5 h-3.5 text-[#FFD447]" />
            <span>Dica do dia</span>
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6938F5] bg-white/70 px-2 py-0.5 rounded-full border border-white/80 shadow-2xs">
            {tip.topic}
          </span>
        </div>

        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-[#160F2E]">
            {tip.title}
          </h3>
          <p className="text-xs text-[#52456F] leading-relaxed font-medium mt-0.5">
            {tip.explanation}
          </p>
        </div>

        {/* Exemplo contextualizado com tradução */}
        <div className="p-2.5 rounded-2xl bg-white/85 border border-white/90 shadow-2xs space-y-0.5 text-xs">
          <p className="font-bold text-[#160F2E] text-xs leading-tight">
            <span className="text-[10px] font-black uppercase text-[#176BFF] mr-1.5">EN</span>
            {tip.exampleEn}
          </p>
          <p className="text-[#52456F] text-[11px] leading-tight">
            <span className="text-[10px] font-black uppercase text-[#0A9B80] mr-1.5">PT</span>
            {tip.examplePt}
          </p>
        </div>
      </div>

      <div className="pt-3 flex items-center justify-between z-10">
        <span className="text-[11px] font-bold text-[#6938F5]">
          Aperfeiçoe suas habilidades
        </span>
        <button
          type="button"
          onClick={() => onNavigate('practice')}
          className="text-xs font-bold text-white bg-gradient-brand px-3.5 py-1.5 rounded-xl shadow-xs hover:opacity-95 transition active:scale-95 cursor-pointer"
        >
          Praticar
        </button>
      </div>

      <div className="absolute right-2 -bottom-2 pointer-events-none opacity-15 w-24 h-24">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="15" rx="3" fill="#6938F5" />
          <rect x="25" y="48" width="55" height="15" rx="3" fill="#19D9B4" />
          <rect x="18" y="66" width="65" height="16" rx="3" fill="#FF6534" />
        </svg>
      </div>
    </div>
  );
};

export const HomeNotesShortcut: React.FC<HomeNavigationProps> = ({ onNavigate }) => {
  return (
    <button
      type="button"
      onClick={() => onNavigate('notes')}
      className="w-full text-left rounded-3xl p-4 sm:p-5 bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 shadow-soft-card hover:shadow-colored-blue transition-all duration-200 active:scale-[0.99] flex items-center justify-between gap-4 group cursor-pointer select-none"
      title="Acessar seu Caderno de Anotações"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-colored-blue shrink-0 group-hover:scale-105 transition-transform ring-4 ring-white/80">
          <BookMarked className="w-5 h-5 stroke-[2.3]" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#176BFF]">
              Caderno de Estudos
            </span>
          </div>
          <h4 className="text-sm sm:text-base font-extrabold text-[#160F2E] mt-0.5 truncate">
            Anotações
          </h4>
          <p className="text-xs text-[#52456F] font-medium truncate mt-0.5">
            Seu caderno pessoal
          </p>
        </div>
      </div>

      <div className="w-8 h-8 rounded-xl bg-[#E1ECFC] text-[#176BFF] group-hover:bg-[#176BFF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-2xs">
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </button>
  );
};

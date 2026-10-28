import React, { useMemo } from 'react';
import { Lightbulb } from 'lucide-react';
import { TabType } from '../../types';
import { getDailyTip } from '../../data/englishTips';

interface HomeNavigationProps {
  onNavigate: (tab: TabType) => void;
}

export const HomeTipCard: React.FC<HomeNavigationProps> = ({ onNavigate }) => {
  const tip = useMemo(() => getDailyTip(), []);

  return (
    <div className="lg:col-span-5 rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#E6D9FB] via-[#FCE4F0] to-[#DCF7EF] border border-white/90 shadow-soft-card flex flex-col justify-between relative overflow-hidden">
      <div className="space-y-3 z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#6938F5] text-xs font-bold shadow-2xs border border-white/90">
            <Lightbulb className="w-3.5 h-3.5 text-[#FFD447]" />
            <span>Dica do dia</span>
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6938F5] bg-white/70 px-2.5 py-0.5 rounded-full border border-white/80 shadow-2xs">
            {tip.topic}
          </span>
        </div>

        <div>
          <h3 className="text-base font-extrabold text-[#160F2E]">
            {tip.title}
          </h3>
          <p className="text-xs text-[#52456F] leading-relaxed font-medium mt-1">
            {tip.explanation}
          </p>
        </div>

        {/* Exemplo contextualizado com tradução */}
        <div className="p-3 rounded-2xl bg-white/80 border border-white/90 shadow-2xs space-y-1 text-xs">
          <p className="font-bold text-[#160F2E] leading-relaxed">
            <span className="text-[10px] font-black uppercase text-[#176BFF] mr-1.5">EN</span>
            {tip.exampleEn}
          </p>
          <p className="text-[#52456F] text-[11px] leading-relaxed">
            <span className="text-[10px] font-black uppercase text-[#0A9B80] mr-1.5">PT</span>
            {tip.examplePt}
          </p>
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between z-10">
        <span className="text-[11px] font-bold text-[#6938F5]">
          Aperfeiçoe suas habilidades
        </span>
        <button
          type="button"
          onClick={() => onNavigate('practice')}
          className="text-xs font-bold text-white bg-gradient-brand px-3.5 py-1.5 rounded-xl shadow-xs hover:opacity-95 transition active:scale-95"
        >
          Praticar
        </button>
      </div>

      <div className="absolute right-2 -bottom-2 pointer-events-none opacity-20 w-32 h-32">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="15" rx="3" fill="#6938F5" />
          <rect x="25" y="48" width="55" height="15" rx="3" fill="#19D9B4" />
          <rect x="18" y="66" width="65" height="16" rx="3" fill="#FF6534" />
        </svg>
      </div>
    </div>
  );
};

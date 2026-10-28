import React from 'react';
import { Lightbulb } from 'lucide-react';
import { TabType } from '../../types';

interface HomeNavigationProps {
  onNavigate: (tab: TabType) => void;
}

export const HomeTipCard: React.FC<HomeNavigationProps> = ({ onNavigate }) => {
  return (
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
          onClick={() => onNavigate('practice')}
          className="text-xs font-bold text-white bg-gradient-brand px-3.5 py-1.5 rounded-xl shadow-xs hover:opacity-95 transition"
        >
          Praticar
        </button>
      </div>

      <div className="absolute right-2 -bottom-2 pointer-events-none opacity-25 w-32 h-32">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="15" rx="3" fill="#6938F5" />
          <rect x="25" y="48" width="55" height="15" rx="3" fill="#19D9B4" />
          <rect x="18" y="66" width="65" height="16" rx="3" fill="#FF6534" />
        </svg>
      </div>
    </div>
  );
};

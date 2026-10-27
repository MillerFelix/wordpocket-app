import React from 'react';
import { Headphones, Mic, BookOpen, PenTool, ArrowRight } from 'lucide-react';
import { PracticeSkillConfig, PracticeSkillId } from '../../types';

interface PracticeSkillCardProps {
  skill: PracticeSkillConfig;
  onSelect: (skillId: PracticeSkillId) => void;
}

const SKILL_ICONS: Record<PracticeSkillId, React.ElementType> = {
  listening: Headphones,
  speaking: Mic,
  reading: BookOpen,
  writing: PenTool
};

export const PracticeSkillCard: React.FC<PracticeSkillCardProps> = ({ skill, onSelect }) => {
  const Icon = SKILL_ICONS[skill.id];

  return (
    <div
      onClick={() => onSelect(skill.id)}
      role="button"
      tabIndex={0}
      aria-label={`Acessar área de prática de ${skill.nameEn}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(skill.id)}
      className={`group relative overflow-hidden rounded-3xl p-6 ${skill.gradientClass} text-white shadow-soft-card hover:${skill.shadowClass} ring-1 ring-white/30 transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[200px] active:scale-[0.99] select-none`}
    >
      {/* Ambient Decorative Radial Shape */}
      <div className="absolute -right-6 -bottom-8 w-40 h-40 opacity-15 pointer-events-none group-hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="46" />
        </svg>
      </div>

      <div className="space-y-4 z-10">
        {/* Top Header: Icon & Activity Tag */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30 shadow-inner group-hover:scale-105 transition-transform">
            <Icon className="w-6 h-6 stroke-[2.3]" />
          </div>

          <span className="text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/25">
            {skill.activitiesTag}
          </span>
        </div>

        {/* Title, Portuguese Subtitle & Objective */}
        <div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl font-black tracking-tight text-white leading-tight">
              {skill.nameEn}
            </h3>
            <span className="text-sm font-bold text-white/85">
              • {skill.namePt}
            </span>
          </div>

          <p className="text-xs text-white/90 mt-1.5 leading-relaxed font-medium">
            {skill.objective}
          </p>
        </div>

        {/* Highlight of activities */}
        <div className="pt-1.5 border-t border-white/20 space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-white/85 block">
            Atividades práticas disponíveis:
          </span>
          <p className="text-xs text-white/95 leading-snug line-clamp-2">
            {skill.futureActivities.join(' • ')}
          </p>
        </div>
      </div>

      {/* Bottom CTA Arrow Indicator */}
      <div className="flex items-center justify-between pt-4 z-10">
        <span className="text-xs font-bold text-white/90 group-hover:text-white transition">
          Acessar área de {skill.namePt}
        </span>
        <div className="w-9 h-9 rounded-full bg-white text-[#160F2E] flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-4 h-4 stroke-[2.5]" style={{ color: skill.accentColor }} />
        </div>
      </div>
    </div>
  );
};

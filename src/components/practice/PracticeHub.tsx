import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  Headphones, 
  Mic, 
  BookOpen, 
  PenTool 
} from 'lucide-react';
import { PracticeSkillId } from '../../types';
import { practiceService } from '../../services/practiceService';
import { PracticeSkillCard } from './PracticeSkillCard';
import { useAuth } from '../../contexts/AuthContext';
import { getUserSkillProgress } from '../../services/progressService';
import { SkillProgress } from '../../types/progress';

interface PracticeHubProps {
  onSelectSkill: (skillId: PracticeSkillId) => void;
}

const SKILL_ICONS_SMALL: Record<PracticeSkillId, React.ElementType> = {
  listening: Headphones,
  speaking: Mic,
  reading: BookOpen,
  writing: PenTool
};

export const PracticeHub: React.FC<PracticeHubProps> = ({ onSelectSkill }) => {
  const { user } = useAuth();
  const [skillProgress, setSkillProgress] = React.useState<Record<PracticeSkillId, SkillProgress> | null>(null);

  React.useEffect(() => {
    if (user) {
      getUserSkillProgress(user.uid).then(setSkillProgress).catch(() => {});
    }
  }, [user]);
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div className="flex items-start gap-3.5">
          <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-colored-blue shrink-0 ring-4 ring-white/80">
            <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#176BFF]">
                Centro de Aprendizagem
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
              Praticar Inglês
            </h1>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-1 max-w-2xl leading-relaxed">
              Desenvolva as quatro habilidades essenciais do idioma no seu próprio ritmo, com foco prático em escuta, pronúncia, leitura e construção de frases.
            </p>
          </div>
        </div>

        <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs text-xs font-bold text-[#176BFF]">
          <Sparkles className="w-4 h-4 text-[#26D9FF]" />
          <span>4 Habilidades Integradas</span>
        </div>
      </div>

      {/* 4 Main Skill Cards Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>Escolha uma habilidade para praticar</span>
          </h2>
          <span className="text-xs font-semibold text-[#52456F]">
            4 Áreas Disponíveis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {practiceService.getAllSkills().map((skill) => (
            <PracticeSkillCard
              key={skill.id}
              skill={skill}
              onSelect={onSelectSkill}
            />
          ))}
        </div>
      </div>

      {/* Discreet Overall Progress Area (Prepared for future real data, without fake stats) */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#176BFF]" />
            <h3 className="text-sm font-extrabold text-[#160F2E]">
              Progresso Geral das Habilidades
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-[#52456F]">
            Registro local no dispositivo
          </span>
        </div>

        {/* 4 Skill Status Chips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {practiceService.getAllSkills().map((skill) => {
            const Icon = SKILL_ICONS_SMALL[skill.id];
            return (
              <div
                key={skill.id}
                onClick={() => onSelectSkill(skill.id)}
                className="p-3 rounded-2xl bg-white/70 border border-white/80 hover:bg-white transition cursor-pointer group shadow-2xs space-y-1.5"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectSkill(skill.id)}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: skill.accentColor }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-[#52456F]">
                    {skillProgress?.[skill.id]?.completedActivitiesCount
                      ? `${skillProgress[skill.id].completedActivitiesCount} feitas`
                      : 'Pronto'}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#160F2E] group-hover:text-[#176BFF] transition leading-tight">
                    {skill.nameEn}
                  </p>
                  <p className="text-[11px] text-[#52456F] font-medium">
                    {skill.namePt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-[#52456F] font-medium leading-relaxed">
          💡 Seu histórico e evolução serão computados à medida que você completar sessões de prática nas quatro habilidades.
        </p>
      </div>
    </div>
  );
};

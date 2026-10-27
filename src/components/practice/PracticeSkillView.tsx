import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Headphones, 
  Mic, 
  BookOpen, 
  PenTool, 
  ArrowRight
} from 'lucide-react';
import { PracticeSkillConfig, PracticeSkillId } from '../../types';
import { Activity, ActivityLevel } from '../../types/activity';
import { practiceService } from '../../services/practiceService';

import { WritingActivitiesHub } from './writing/WritingActivitiesHub';
import { WritingActivityRunner } from './writing/WritingActivityRunner';
import { ReadingActivitiesHub } from './reading/ReadingActivitiesHub';
import { ReadingActivityRunner } from './reading/ReadingActivityRunner';
import { ListeningActivitiesHub } from './listening/ListeningActivitiesHub';
import { ListeningActivityRunner } from './listening/ListeningActivityRunner';
import { SpeakingActivitiesHub } from './speaking/SpeakingActivitiesHub';
import { SpeakingActivityRunner } from './speaking/SpeakingActivityRunner';
import { ReadingQuestion, ListeningQuestion, SpeakingQuestion } from '../../types/activity';
import { useAuth } from '../../contexts/AuthContext';

interface PracticeSkillViewProps {
  skill: PracticeSkillConfig;
  onBack: () => void;
  onSelectOtherSkill: (skillId: PracticeSkillId) => void;
}

const SKILL_ICONS: Record<PracticeSkillId, React.ElementType> = {
  listening: Headphones,
  speaking: Mic,
  reading: BookOpen,
  writing: PenTool
};

export const PracticeSkillView: React.FC<PracticeSkillViewProps> = ({
  skill,
  onBack,
  onSelectOtherSkill
}) => {
  const [activeWritingActivity, setActiveWritingActivity] = useState<Activity | null>(null);
  const [writingLevel, setWritingLevel] = useState<ActivityLevel | 'all'>('all');
  const [activeReadingActivity, setActiveReadingActivity] = useState<Activity<ReadingQuestion> | null>(null);
  const [readingLevel, setReadingLevel] = useState<ActivityLevel | 'all'>('all');
  const [activeListeningActivity, setActiveListeningActivity] = useState<Activity<ListeningQuestion> | null>(null);
  const [listeningLevel, setListeningLevel] = useState<ActivityLevel | 'all'>('all');
  const [activeSpeakingActivity, setActiveSpeakingActivity] = useState<Activity<SpeakingQuestion> | null>(null);
  const [speakingLevel, setSpeakingLevel] = useState<ActivityLevel | 'all'>('all');
  const { isVisitor, openVisitorPrompt } = useAuth();
  const Icon = SKILL_ICONS[skill.id];
  const otherSkills = practiceService.getAllSkills().filter((s) => s.id !== skill.id);

  if (skill.id === 'writing' && activeWritingActivity) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <WritingActivityRunner
          activity={activeWritingActivity}
          onExit={() => setActiveWritingActivity(null)}
        />
      </div>
    );
  }

  if (skill.id === 'reading' && activeReadingActivity) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <ReadingActivityRunner
          activity={activeReadingActivity}
          onExit={() => setActiveReadingActivity(null)}
        />
      </div>
    );
  }

  if (skill.id === 'listening' && activeListeningActivity) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <ListeningActivityRunner
          activity={activeListeningActivity}
          onExit={() => setActiveListeningActivity(null)}
        />
      </div>
    );
  }

  if (skill.id === 'speaking' && activeSpeakingActivity) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <SpeakingActivityRunner
          activity={activeSpeakingActivity}
          onExit={() => setActiveSpeakingActivity(null)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      {/* Top Navigation Bar: Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 hover:bg-white text-[#160F2E] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#176BFF] group-hover:-translate-x-0.5 transition-transform" />
          <span>Voltar para Praticar Inglês</span>
        </button>

        <span className="hidden sm:inline-block text-xs text-[#52456F] font-semibold">
          Praticar Inglês • <strong className="text-[#160F2E]">{skill.nameEn}</strong>
        </span>
      </div>

      {/* Hero Header Card with Skill Identity Color */}
      <div className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-7 ${skill.gradientClass} text-white shadow-soft-card ring-1 ring-white/30`}>
        {/* Background Radial Shape */}
        <div className="absolute -right-6 -bottom-10 w-48 h-48 opacity-15 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="48" />
          </svg>
        </div>

        <div className="max-w-2xl space-y-2.5 z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm border border-white/25">
            <Icon className="w-3.5 h-3.5" />
            <span>Habilidade de {skill.namePt}</span>
          </div>

          <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white leading-tight">
            {skill.nameEn} — {skill.namePt}
          </h1>

          <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed max-w-xl">
            {skill.objective}
          </p>
        </div>
      </div>

      {skill.id === 'writing' ? (
        <WritingActivitiesHub
          selectedLevel={writingLevel}
          onLevelChange={setWritingLevel}
          onSelectActivity={(activity) => {
            if (isVisitor) {
              openVisitorPrompt(
                'Você está prestes a iniciar uma atividade de Writing. Entre ou crie uma conta para salvar suas notas no seu perfil, ou continue sem salvar.'
              );
            }
            setActiveWritingActivity(activity);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : skill.id === 'reading' ? (
        <ReadingActivitiesHub
          selectedLevel={readingLevel}
          onLevelChange={setReadingLevel}
          onSelectActivity={(activity) => {
            if (isVisitor) {
              openVisitorPrompt(
                'Você está prestes a iniciar uma atividade de Reading. Entre ou crie uma conta para salvar suas notas no seu perfil, ou continue sem salvar.'
              );
            }
            setActiveReadingActivity(activity);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : skill.id === 'listening' ? (
        <ListeningActivitiesHub
          selectedLevel={listeningLevel}
          onLevelChange={setListeningLevel}
          onSelectActivity={(activity) => {
            if (isVisitor) {
              openVisitorPrompt(
                'Você está prestes a iniciar uma atividade de Listening. Entre ou crie uma conta para salvar suas notas no seu perfil, ou continue sem salvar.'
              );
            }
            setActiveListeningActivity(activity);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <SpeakingActivitiesHub
          selectedLevel={speakingLevel}
          onLevelChange={setSpeakingLevel}
          onSelectActivity={(activity) => {
            if (isVisitor) {
              openVisitorPrompt(
                'Você está prestes a iniciar uma atividade de Speaking. Entre ou crie uma conta para salvar suas notas no seu perfil, ou continue sem salvar.'
              );
            }
            setActiveSpeakingActivity(activity);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Switch to Other Skills */}
      <div className="space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F] px-1">
          Explorar outras habilidades
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {otherSkills.map((other) => {
            const OtherIcon = SKILL_ICONS[other.id];
            return (
              <button
                key={other.id}
                type="button"
                onClick={() => onSelectOtherSkill(other.id)}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 hover:border-[#176BFF]/40 shadow-2xs hover:shadow-soft-card transition-all duration-150 group flex items-center justify-between text-left cursor-pointer active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: other.accentColor }}
                  >
                    <OtherIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#160F2E] group-hover:text-[#176BFF] transition leading-tight">
                      {other.nameEn}
                    </p>
                    <p className="text-[11px] text-[#52456F] font-medium">
                      {other.namePt}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-[#52456F] group-hover:translate-x-1 group-hover:text-[#176BFF] transition" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

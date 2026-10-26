import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Headphones, 
  Mic, 
  BookOpen, 
  PenTool, 
  CheckCircle, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PracticeDifficulty, PracticeSkillConfig, PracticeSkillId } from '../../types';
import { Activity, ActivityLevel } from '../../types/activity';
import { practiceService } from '../../services/practiceService';
import { PronounceButton } from '../PronounceButton';

import { PracticeExerciseRunner } from './PracticeExerciseRunner';
import { WritingActivitiesHub } from './writing/WritingActivitiesHub';
import { WritingActivityRunner } from './writing/WritingActivityRunner';
import { ReadingActivitiesHub } from './reading/ReadingActivitiesHub';
import { ReadingActivityRunner } from './reading/ReadingActivityRunner';
import { ListeningActivitiesHub } from './listening/ListeningActivitiesHub';
import { ListeningActivityRunner } from './listening/ListeningActivityRunner';
import { ReadingQuestion, ListeningQuestion } from '../../types/activity';
import { Play } from 'lucide-react';
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
  const [difficulty, setDifficulty] = useState<PracticeDifficulty>('easy');
  const [isPracticing, setIsPracticing] = useState(false);
  const [activeWritingActivity, setActiveWritingActivity] = useState<Activity | null>(null);
  const [writingLevel, setWritingLevel] = useState<ActivityLevel | 'all'>('all');
  const [activeReadingActivity, setActiveReadingActivity] = useState<Activity<ReadingQuestion> | null>(null);
  const [readingLevel, setReadingLevel] = useState<ActivityLevel | 'all'>('all');
  const [activeListeningActivity, setActiveListeningActivity] = useState<Activity<ListeningQuestion> | null>(null);
  const [listeningLevel, setListeningLevel] = useState<ActivityLevel | 'all'>('all');
  const { isVisitor, openVisitorPrompt } = useAuth();
  const Icon = SKILL_ICONS[skill.id];
  const otherSkills = practiceService.getAllSkills().filter((s) => s.id !== skill.id);

  const handleStartPractice = () => {
    if (isVisitor) {
      openVisitorPrompt(
        `Você está prestes a iniciar uma atividade de ${skill.namePt}. Entre ou crie uma conta para salvar suas notas e acompanhar sua evolução, ou continue sem salvar.`
      );
    }
    setIsPracticing(true);
  };

  const difficultyLevels: { id: PracticeDifficulty; title: string; badge: string }[] = [
    { id: 'easy', title: 'Fácil', badge: 'Iniciante (A1–A2)' },
    { id: 'medium', title: 'Médio', badge: 'Intermediário (B1–B2)' },
    { id: 'hard', title: 'Difícil', badge: 'Avançado (C1–C2)' }
  ];

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

  if (isPracticing) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <button
          type="button"
          onClick={() => setIsPracticing(false)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/80 hover:bg-white text-[#160F2E] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#176BFF]" />
          <span>Voltar para Trilha de {skill.namePt}</span>
        </button>

        <PracticeExerciseRunner
          skill={skill}
          difficulty={difficulty}
          onFinish={() => setIsPracticing(false)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Top Navigation Bar: Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/80 hover:bg-white text-[#160F2E] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group"
        >
          <ArrowLeft className="w-4 h-4 text-[#176BFF] group-hover:-translate-x-0.5 transition-transform" />
          <span>Voltar para Praticar Inglês</span>
        </button>

        <span className="hidden sm:inline-block text-xs text-[#52456F] font-semibold">
          Praticar Inglês • <strong className="text-[#160F2E]">{skill.nameEn}</strong>
        </span>
      </div>

      {/* Hero Header Card with Skill Identity Color */}
      <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 ${skill.gradientClass} text-white shadow-soft-card ring-1 ring-white/30`}>
        {/* Background Radial Shape */}
        <div className="absolute -right-6 -bottom-10 w-48 h-48 opacity-15 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="48" />
          </svg>
        </div>

        <div className="max-w-2xl space-y-3 z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm border border-white/25">
            <Icon className="w-3.5 h-3.5" />
            <span>Habilidade de {skill.namePt}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {skill.nameEn} — {skill.namePt}
          </h1>

          <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
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
        <>
          {/* Difficulty Selection Section */}
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-3.5">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#176BFF]" />
                <h2 className="text-sm font-extrabold text-[#160F2E]">
                  Nível de Dificuldade
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#52456F]">
                Selecione o nível de desafio
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {difficultyLevels.map((lvl) => {
                const isSelected = difficulty === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setDifficulty(lvl.id)}
                    aria-pressed={isSelected}
                    aria-label={`Nível ${lvl.title}`}
                    className={`p-3.5 rounded-2xl text-left transition-all duration-150 border flex flex-col justify-between space-y-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#176BFF] ring-2 ring-[#176BFF]/20 shadow-xs'
                        : 'bg-white/60 hover:bg-white border-white/80 text-[#52456F]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${isSelected ? 'text-[#160F2E]' : 'text-[#52456F]'}`}>
                        {lvl.title}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-[#E1ECFC] text-[#176BFF]'
                            : 'bg-slate-100 text-[#52456F]'
                        }`}
                      >
                        {lvl.badge}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#52456F] leading-tight font-medium">
                      {skill.difficultyInfo[lvl.id].desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Activity Workspace: Well-designed, appropriate initial state */}
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-6">
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFD447]" />
                  <h2 className="text-base font-extrabold text-[#160F2E]">
                    Trilha de Atividades de {skill.namePt}
                  </h2>
                </div>
                <p className="text-xs text-[#52456F] font-medium mt-1">
                  Atividades focadas no nível {difficultyLevels.find((d) => d.id === difficulty)?.title} ({skill.difficultyInfo[difficulty].label}).
                </p>
              </div>

              <span className="text-[11px] font-bold text-[#176BFF] bg-[#E1ECFC] px-3 py-1 rounded-full border border-[#BED7FA] shrink-0">
                {skill.activitiesTag}
              </span>
            </div>

            {/* 3 Future Activity Types Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skill.futureActivities.map((activity, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/70 border border-white/80 shadow-2xs space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-xl bg-slate-100 text-[#160F2E] flex items-center justify-center font-extrabold text-xs">
                      {idx + 1}
                    </div>
                    <h3 className="text-xs font-bold text-[#160F2E] leading-snug">
                      {activity}
                    </h3>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#52456F] font-medium border-t border-slate-100">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0A9B80]" />
                    <span>Atividade disponível</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Practice Launch Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
                  <strong className="text-sm font-extrabold text-[#160F2E]">
                    Sessão de Prática Avaliada — {skill.namePt}
                  </strong>
                </div>
                <p className="text-xs text-[#52456F] font-medium">
                  Responda a questões objetivas no nível {difficultyLevels.find((d) => d.id === difficulty)?.title} com áudio nativo e feedback instantâneo.
                </p>
              </div>

              <button
                type="button"
                onClick={handleStartPractice}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition active:scale-[0.99] shrink-0 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Iniciar Prática</span>
              </button>
            </div>

            {/* Interactive Audio Demonstration for Speaking */}
            {skill.id === 'speaking' && (
              <div className="p-4 rounded-2xl bg-[#E1ECFC]/60 border border-[#BED7FA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#52456F]">
                <div className="space-y-0.5">
                  <strong className="text-[#160F2E] font-bold block">
                    Teste o sintetizador nativo de áudio (en-US):
                  </strong>
                  <span>
                    "Language learning is a journey of daily progress and curiosity."
                  </span>
                </div>

                <PronounceButton
                  text="Language learning is a journey of daily progress and curiosity."
                  showLabel
                  size="md"
                  className="bg-white border border-[#BED7FA] text-[#176BFF] hover:bg-[#E1ECFC] shrink-0"
                />
              </div>
            )}

            {/* Helpful Tips Card for the current skill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200/60 space-y-2">
              <h4 className="text-xs font-extrabold text-[#160F2E]">
                💡 Como desenvolver sua {skill.namePt.toLowerCase()} no dia a dia:
              </h4>
              <p className="text-xs text-[#52456F] leading-relaxed">
                Dedique de 5 a 10 minutos diários com foco exclusivo nesta habilidade. Pequenas sessões consistentes consolidam sinapses e desenvolvem a resposta intuitiva mais rápido do que sessões longas e esporádicas.
              </p>
            </div>
          </div>
        </>
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
                className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-white/90 shadow-2xs transition group flex items-center justify-between text-left cursor-pointer"
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
                    <p className="text-[11px] text-[#52456F]">
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

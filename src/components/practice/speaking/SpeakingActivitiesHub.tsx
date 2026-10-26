import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Volume2, 
  Sparkles, 
  Zap, 
  MessageSquare, 
  ArrowRight,
  Trophy,
  Filter
} from 'lucide-react';
import { Activity, ActivityLevel, SpeakingActivityType, SpeakingQuestion, UserActivityResult } from '../../../types/activity';
import { speakingService } from '../../../services/speakingService';
import { useAuth } from '../../../contexts/AuthContext';
import { Pagination } from '../../shared/Pagination';

const ITEMS_PER_PAGE = 8;

interface SpeakingActivitiesHubProps {
  onSelectActivity: (activity: Activity<SpeakingQuestion>) => void;
  selectedLevel?: ActivityLevel | 'all';
  onLevelChange?: (level: ActivityLevel | 'all') => void;
}

const FORMAT_CONFIG: Record<
  SpeakingActivityType, 
  { label: string; icon: React.ElementType; badgeBg: string; textCol: string; borderCol: string }
> = {
  listen_repeat: {
    label: 'Ouça e Imite',
    icon: Volume2,
    badgeBg: 'bg-[#E1ECFC]',
    textCol: 'text-[#176BFF]',
    borderCol: 'border-[#BED7FA]'
  },
  sound_training: {
    label: 'Treino de Sons',
    icon: Sparkles,
    badgeBg: 'bg-purple-50',
    textCol: 'text-purple-700',
    borderCol: 'border-purple-200'
  },
  rapid_response: {
    label: 'Respostas Rápidas',
    icon: Zap,
    badgeBg: 'bg-amber-50',
    textCol: 'text-amber-800',
    borderCol: 'border-amber-200'
  },
  roleplay_situation: {
    label: 'Situações Reais',
    icon: MessageSquare,
    badgeBg: 'bg-emerald-50',
    textCol: 'text-emerald-700',
    borderCol: 'border-emerald-200'
  }
};

export const SpeakingActivitiesHub: React.FC<SpeakingActivitiesHubProps> = ({
  onSelectActivity,
  selectedLevel: controlledLevel,
  onLevelChange
}) => {
  const { user } = useAuth();
  const [internalLevel, setInternalLevel] = useState<ActivityLevel | 'all'>('all');
  const selectedLevel = controlledLevel !== undefined ? controlledLevel : internalLevel;

  const handleLevelChange = (lvl: ActivityLevel | 'all') => {
    if (onLevelChange) {
      onLevelChange(lvl);
    } else {
      setInternalLevel(lvl);
    }
  };

  const [selectedFormat, setSelectedFormat] = useState<SpeakingActivityType | 'all'>('all');
  const [latestResults, setLatestResults] = useState<Record<string, UserActivityResult>>({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let isMounted = true;
    const fetchResults = async () => {
      try {
        const local = speakingService.getLocalResults(user?.uid);
        if (isMounted) setLatestResults(local);

        const remote = await speakingService.getLatestResults(user?.uid);
        if (isMounted) setLatestResults(remote);
      } catch {
        // Fallback silencioso
      }
    };
    fetchResults();
    return () => {
      isMounted = false;
    };
  }, [user?.uid]);

  // Retorna à primeira página ao trocar de nível ou formato
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel, selectedFormat]);

  const activities = speakingService.getActivities(selectedLevel, selectedFormat);

  // Cálculo da paginação
  const totalItems = activities.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const displayedActivities = activities.slice(startIndex, endIndex);

  const levelTabs: { id: ActivityLevel | 'all'; title: string; subtitle: string }[] = [
    { id: 'all', title: 'Todas', subtitle: 'Todos os níveis' },
    { id: 'a1', title: 'A1 — Iniciante', subtitle: 'Sons Básicos & Saudações' },
    { id: 'a2', title: 'A2 — Básico', subtitle: 'Diálogos & Informações' },
    { id: 'b1', title: 'B1 — Intermediário', subtitle: 'Opiniões & Carreira' }
  ];

  const formatFilters: { id: SpeakingActivityType | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos os formatos' },
    { id: 'listen_repeat', label: 'Ouça e Imite' },
    { id: 'sound_training', label: 'Treino de Sons' },
    { id: 'rapid_response', label: 'Respostas Rápidas' },
    { id: 'roleplay_situation', label: 'Situações Reais' }
  ];

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls Card */}
      <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-[#176BFF]" />
            <h2 className="text-sm font-extrabold text-[#160F2E]">
              Atividades de Fala (Speaking)
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#52456F]">
            {activities.length} atividades disponíveis
          </span>
        </div>

        {/* Level Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {levelTabs.map((lvl) => {
            const isSelected = selectedLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => handleLevelChange(lvl.id)}
                className={`p-3 rounded-2xl text-left transition-all duration-150 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#176BFF] ring-2 ring-[#176BFF]/20 shadow-xs'
                    : 'bg-white/60 hover:bg-white border-white/80 text-[#52456F]'
                }`}
              >
                <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[#160F2E]' : 'text-[#52456F]'}`}>
                  {lvl.title}
                </span>
                <span className="text-[10px] text-[#52456F] font-medium hidden sm:inline">
                  {lvl.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Format Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1 mr-1" />
          {formatFilters.map((fmt) => {
            const isSelected = selectedFormat === fmt.id;
            return (
              <button
                key={fmt.id}
                type="button"
                onClick={() => setSelectedFormat(fmt.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-[#176BFF] text-white border-[#176BFF] shadow-xs'
                    : 'bg-white/80 hover:bg-white text-[#52456F] border-slate-200/80'
                }`}
              >
                {fmt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedActivities.map((activity) => {
          const cfg = FORMAT_CONFIG[activity.type as SpeakingActivityType] || FORMAT_CONFIG.listen_repeat;
          const FormatIcon = cfg.icon;
          const lastResult = latestResults[activity.id];

          return (
            <div
              key={activity.id}
              onClick={() => onSelectActivity(activity)}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card hover:shadow-colored-blue hover:border-[#BED7FA] transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Badges Bar: Format, Level, Scenario */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${cfg.badgeBg} ${cfg.textCol} ${cfg.borderCol} border`}>
                    <FormatIcon className="w-3.5 h-3.5" />
                    <span>{cfg.label}</span>
                  </span>

                  <div className="flex items-center gap-1.5">
                    {activity.speakingInfo?.scenario && (
                      <span className="text-[10px] font-bold text-[#52456F] bg-slate-100 px-2.5 py-0.5 rounded-full truncate max-w-[140px]">
                        {activity.speakingInfo.scenario}
                      </span>
                    )}

                    <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-[#52456F]">
                      {activity.level.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Title & Topic */}
                <div>
                  <span className="text-[11px] font-semibold text-[#52456F] uppercase tracking-wider block">
                    {activity.topic}
                  </span>
                  <h3 className="text-base font-extrabold text-[#160F2E] group-hover:text-[#176BFF] transition leading-snug">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-[#52456F] font-medium mt-1 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Turns, Focus Sound, Latest Score, CTA */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#52456F]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold flex items-center gap-1">
                    <Mic className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activity.questions.length} turnos</span>
                  </span>

                  {activity.speakingInfo?.focusSound && (
                    <span className="hidden sm:inline-flex items-center gap-1 font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {activity.speakingInfo.focusSound.split(' ')[0]}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {lastResult && (
                    <span
                      title="Resultado da sua última tentativa"
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${
                        lastResult.score >= 60
                          ? 'bg-[#DCF8F1] text-[#0A9B80] border-[#B6F5E8]'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      <Trophy className="w-3 h-3" />
                      <span>{lastResult.score}%</span>
                    </span>
                  )}

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-brand text-white font-extrabold text-xs shadow-xs group-hover:opacity-95 transition"
                  >
                    <span>{lastResult ? 'Refazer' : 'Iniciar'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalItems > 0 && (
        <Pagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
          itemLabel="lições"
          ariaLabel="Paginação das atividades de fala"
          accentColor="blue"
        />
      )}

      {activities.length === 0 && (
        <div className="p-8 rounded-3xl bg-white/80 border border-slate-200/80 text-center space-y-2">
          <Mic className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="text-sm font-bold text-[#160F2E]">Nenhuma atividade encontrada</h4>
          <p className="text-xs text-[#52456F]">
            Tente selecionar outro nível ou formato de fala nos filtros acima.
          </p>
        </div>
      )}
    </div>
  );
};

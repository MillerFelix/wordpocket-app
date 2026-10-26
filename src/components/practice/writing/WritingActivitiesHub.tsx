import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Layers, 
  AlertCircle, 
  Edit3, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { Activity, ActivityLevel, UserActivityResult, WritingActivityType } from '../../../types/activity';
import { writingService } from '../../../services/writingService';
import { useAuth } from '../../../contexts/AuthContext';
import { Pagination } from '../../shared/Pagination';

const ITEMS_PER_PAGE = 8;

interface WritingActivitiesHubProps {
  onSelectActivity: (activity: Activity) => void;
  selectedLevel: ActivityLevel | 'all';
  onLevelChange: (level: ActivityLevel | 'all') => void;
}

const TYPE_CONFIG: Record<WritingActivityType, { label: string; icon: React.ElementType; color: string; bg: string }> = {
  fill_blank: {
    label: 'Complete a frase',
    icon: Edit3,
    color: 'text-[#E04D1B]',
    bg: 'bg-[#FFEAE1]'
  },
  sentence_order: {
    label: 'Organize as palavras',
    icon: Layers,
    color: 'text-[#6545F5]',
    bg: 'bg-[#EDE8FD]'
  },
  find_fix_error: {
    label: 'Corrija o erro',
    icon: AlertCircle,
    color: 'text-[#176BFF]',
    bg: 'bg-[#E1ECFC]'
  },
  open_prompt: {
    label: 'Escreva sua resposta',
    icon: PenTool,
    color: 'text-[#0A9B80]',
    bg: 'bg-[#DCF8F1]'
  }
};

export const WritingActivitiesHub: React.FC<WritingActivitiesHubProps> = ({
  onSelectActivity,
  selectedLevel,
  onLevelChange
}) => {
  const { user } = useAuth();
  const [selectedFormat, setSelectedFormat] = useState<WritingActivityType | 'all'>('all');
  const [latestResults, setLatestResults] = useState<Record<string, UserActivityResult>>({});
  const [loadingResults, setLoadingResults] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Carrega imediatamente cache local e depois sincroniza resultados remotos
  useEffect(() => {
    let isMounted = true;
    const fetchResults = async () => {
      try {
        const local = writingService.getLocalResults(user?.uid);
        if (isMounted) {
          setLatestResults(local);
          setLoadingResults(false);
        }

        const remote = await writingService.getLatestResults(user?.uid);
        if (isMounted) {
          setLatestResults(remote);
          setLoadingResults(false);
        }
      } catch {
        if (isMounted) setLoadingResults(false);
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

  const activities = writingService.getActivities(selectedLevel, selectedFormat);

  // Cálculo da paginação
  const totalItems = activities.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const displayedActivities = activities.slice(startIndex, endIndex);

  const levelTabs: { id: ActivityLevel | 'all'; title: string; subtitle: string }[] = [
    { id: 'all', title: 'Todas', subtitle: 'Todos os níveis' },
    { id: 'a1', title: 'A1 — Iniciante', subtitle: 'Apresentações & Rotina' },
    { id: 'a2', title: 'A2 — Básico', subtitle: 'Passado & Viagens' },
    { id: 'b1', title: 'B1 — Intermediário', subtitle: 'Trabalho & Condicionais' }
  ];

  const formatFilters: { id: WritingActivityType | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos os formatos' },
    { id: 'fill_blank', label: 'Complete a frase' },
    { id: 'sentence_order', label: 'Organize as palavras' },
    { id: 'find_fix_error', label: 'Corrija o erro' },
    { id: 'open_prompt', label: 'Escreva sua resposta' }
  ];

  return (
    <div className="space-y-6">
      {/* Level & Format Filters Bar */}
      <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF5B26]" />
            <h2 className="text-sm font-extrabold text-[#160F2E]">
              Atividades de Escrita (Writing)
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#52456F]">
            {activities.length} atividades disponíveis
          </span>
        </div>

        {/* Level Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {levelTabs.map((tab) => {
            const isSelected = selectedLevel === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onLevelChange(tab.id)}
                className={`p-3 rounded-2xl text-left transition-all duration-150 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#FF5B26] ring-2 ring-[#FF5B26]/20 shadow-xs'
                    : 'bg-white/60 hover:bg-white border-white/80 text-[#52456F]'
                }`}
              >
                <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[#160F2E]' : 'text-[#52456F]'}`}>
                  {tab.title}
                </span>
                <span className="text-[10px] text-[#52456F] font-medium hidden sm:inline">
                  {tab.subtitle}
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
                    ? 'bg-[#FF5B26] text-white border-[#FF5B26] shadow-xs'
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
          const typeMeta = TYPE_CONFIG[activity.type as WritingActivityType] || TYPE_CONFIG.fill_blank;
          const TypeIcon = typeMeta.icon;
          const lastAttempt = latestResults[activity.id];
          const hasAttempted = Boolean(lastAttempt);
          const lastScore = lastAttempt?.score ?? 0;

          return (
            <div
              key={activity.id}
              onClick={() => onSelectActivity(activity)}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card hover:shadow-colored-tangerine hover:border-[#FFD2C2] transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Header: Type Badge & Level Pill */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${typeMeta.bg} ${typeMeta.color}`}>
                    <TypeIcon className="w-3.5 h-3.5" />
                    <span>{typeMeta.label}</span>
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[#160F2E] font-bold text-[10px] uppercase tracking-wider">
                      {activity.level.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-[#52456F] font-semibold">
                      {activity.questions.length} questões
                    </span>
                  </div>
                </div>

                {/* Title & Topic */}
                <div>
                  <span className="text-[11px] font-bold text-[#E04D1B] block">
                    {activity.topic}
                  </span>
                  <h3 className="text-base font-extrabold text-[#160F2E] tracking-tight group-hover:text-[#FF5B26] transition">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-[#52456F] font-medium mt-1 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Footer: Latest Result & Action Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  {loadingResults ? (
                    <span className="text-[11px] text-slate-400">Carregando...</span>
                  ) : hasAttempted ? (
                    <div className="flex items-center gap-1.5">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        lastScore >= 60
                          ? 'bg-[#DCF8F1] text-[#0A9B80]'
                          : 'bg-[#FFEAE1] text-[#E04D1B]'
                      }`}>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Última tentativa: {lastScore}%</span>
                      </span>
                    </div>
                  ) : (
                    <span className="text-[11px] text-[#52456F] font-medium">
                      Não realizada
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF5B26] to-[#FF7A4D] text-white font-extrabold text-xs shadow-xs group-hover:opacity-95 transition"
                >
                  {hasAttempted ? (
                    <>
                      <RotateCcw className="w-3 h-3" />
                      <span>Refazer</span>
                    </>
                  ) : (
                    <>
                      <span>Iniciar</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
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
          ariaLabel="Paginação das atividades de escrita"
          accentColor="orange"
        />
      )}

      {activities.length === 0 && (
        <div className="p-8 rounded-3xl bg-white/80 border border-slate-200/80 text-center space-y-2">
          <PenTool className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="text-sm font-bold text-[#160F2E]">Nenhuma atividade encontrada</h4>
          <p className="text-xs text-[#52456F]">
            Tente selecionar outro nível ou formato de escrita nos filtros acima.
          </p>
        </div>
      )}
    </div>
  );
};

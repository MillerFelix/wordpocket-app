import React from 'react';
import { 
  Trophy, 
  Sparkles, 
  RotateCcw, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Info 
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

interface ResultScoreSummaryCardProps {
  level: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  durationSeconds: number;
  skillNamePt: string;
  badgeSubtitle?: string;
  backToListLabel?: string;
  perfectTitle?: string;
  passedTitle?: string;
  failedTitle?: string;
  iconGradientClass?: string;
  onRetry: () => void;
  onBackToList: () => void;
  children?: React.ReactNode;
}

export const ResultScoreSummaryCard: React.FC<ResultScoreSummaryCardProps> = ({
  level,
  score,
  correctCount,
  totalQuestions,
  durationSeconds,
  skillNamePt,
  badgeSubtitle,
  backToListLabel = 'Voltar para Atividades',
  perfectTitle = 'Pontuação Perfeita! 🎉',
  passedTitle = 'Muito Bem! Atividade Concluída 👏',
  failedTitle = 'Bom Treino! Continue Praticando 💪',
  iconGradientClass = 'bg-gradient-to-tr from-[#19D9B4] to-[#0A9B80]',
  onRetry,
  onBackToList,
  children
}) => {
  const { isVisitor, openVisitorPrompt } = useAuth();
  const passed = score >= 60;
  const perfect = score === 100;

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card text-center space-y-5">
      {/* Top Icon Trophy or Sparkles */}
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mx-auto shadow-sm ${
          perfect
            ? `${iconGradientClass} text-white`
            : passed
            ? 'bg-[#DCF8F1] text-[#0A9B80]'
            : 'bg-[#FFEAE1] text-[#E04D1B]'
        }`}
      >
        {perfect ? <Trophy className="w-9 h-9" /> : <Sparkles className="w-9 h-9" />}
      </div>

      <div className="space-y-1.5">
        <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#52456F]">
          {badgeSubtitle || `Resultado • ${skillNamePt} • Nível ${level.toUpperCase()}`}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#160F2E] tracking-tight">
          {perfect ? perfectTitle : passed ? passedTitle : failedTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#52456F] font-medium max-w-md mx-auto">
          Você acertou <strong>{correctCount}</strong> de <strong>{totalQuestions}</strong> questões, atingindo <strong>{score}%</strong> de aproveitamento.
        </p>
      </div>

      {/* Philosophy of the latest completed attempt */}
      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-[#52456F] font-medium flex items-center justify-center gap-2 max-w-lg mx-auto">
        <Info className="w-3.5 h-3.5 text-[#176BFF] shrink-0" />
        <span>
          O resultado principal registrado no seu perfil corresponde sempre à sua <strong>última tentativa concluída</strong>.
        </span>
      </div>

      {/* Sync Status Banner */}
      {!isVisitor ? (
        <div className="p-3.5 rounded-2xl bg-[#DCF8F1] border border-[#B6F5E8] text-[#0A9B80] text-xs font-bold flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Resultado salvo e sincronizado na sua conta!</span>
        </div>
      ) : (
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium space-y-1.5">
          <p>
            💡 Como visitante, este resultado foi salvo no seu navegador. Entre ou crie uma conta para sincronizar na nuvem.
          </p>
          <button
            type="button"
            onClick={() => openVisitorPrompt(`Crie uma conta gratuita para registrar suas notas de ${skillNamePt} permanentemente na nuvem.`)}
            className="font-bold text-[#176BFF] hover:underline cursor-pointer"
          >
            Criar conta gratuita
          </button>
        </div>
      )}

      {/* Dedicated time info */}
      <div className="flex items-center justify-center gap-4 text-xs text-[#52456F] font-semibold">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Tempo de dedicação: {durationSeconds}s</span>
        </span>
      </div>

      {/* Optional Children slot (e.g. self-evaluation checklist in Speaking) */}
      {children}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={onRetry}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#160F2E] font-bold text-xs sm:text-sm transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Refazer Atividade</span>
        </button>

        <button
          type="button"
          onClick={onBackToList}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{backToListLabel}</span>
        </button>
      </div>
    </div>
  );
};

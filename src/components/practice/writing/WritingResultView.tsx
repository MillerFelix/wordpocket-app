import React from 'react';
import { 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Info 
} from 'lucide-react';
import { ActivityGradingResult, Activity } from '../../../types/activity';
import { useAuth } from '../../../contexts/AuthContext';

interface WritingResultViewProps {
  activity: Activity;
  result: ActivityGradingResult;
  durationSeconds: number;
  onRetry: () => void;
  onBackToList: () => void;
}

export const WritingResultView: React.FC<WritingResultViewProps> = ({
  activity,
  result,
  durationSeconds,
  onRetry,
  onBackToList
}) => {
  const { isVisitor, openVisitorPrompt } = useAuth();
  const passed = result.score >= 60;
  const perfect = result.score === 100;

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-300">
      {/* Top Card: Score Summary */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card text-center space-y-5">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mx-auto shadow-sm ${
          perfect
            ? 'bg-gradient-to-tr from-[#19D9B4] to-[#0A9B80] text-white'
            : passed
            ? 'bg-[#DCF8F1] text-[#0A9B80]'
            : 'bg-[#FFEAE1] text-[#E04D1B]'
        }`}>
          {perfect ? <Trophy className="w-9 h-9" /> : <Sparkles className="w-9 h-9" />}
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#52456F]">
            Resultado da Atividade • {activity.level.toUpperCase()}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#160F2E] tracking-tight">
            {perfect
              ? 'Pontuação Perfeita! 🎉'
              : passed
              ? 'Muito Bem! Atividade Concluída 👏'
              : 'Bom Treino! Continue Praticando 💪'}
          </h2>
          <p className="text-xs sm:text-sm text-[#52456F] font-medium max-w-md mx-auto">
            Você acertou <strong>{result.correctCount}</strong> de <strong>{result.totalQuestions}</strong> questões, atingindo <strong>{result.score}%</strong> de aproveitamento.
          </p>
        </div>

        {/* Informação sobre a filosofia da última tentativa */}
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
              onClick={() => openVisitorPrompt('Crie uma conta gratuita para registrar suas notas de Writing permanentemente na nuvem.')}
              className="font-bold text-[#176BFF] hover:underline cursor-pointer"
            >
              Criar conta gratuita
            </button>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 text-xs text-[#52456F] font-semibold">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Tempo de dedicação: {durationSeconds}s</span>
          </span>
        </div>

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
            <span>Voltar para Atividades</span>
          </button>
        </div>
      </div>

      {/* Question by Question Detailed Feedback */}
      <div className="space-y-3.5">
        <h3 className="text-sm font-extrabold text-[#160F2E] px-1">
          Revisão Detalhada das Respostas ({result.questionsGrading.length} questões)
        </h3>

        <div className="space-y-3">
          {result.questionsGrading.map((item, idx) => {
            const originalQuestion = activity.questions.find((q) => q.id === item.questionId);

            return (
              <div
                key={item.questionId}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-5 border border-white/90 shadow-soft-card space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-[#160F2E] font-extrabold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <strong className="text-xs font-bold text-[#160F2E]">
                      {originalQuestion?.prompt}
                    </strong>
                  </div>

                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                    item.isCorrect
                      ? 'bg-[#DCF8F1] text-[#0A9B80] border border-[#B6F5E8]'
                      : 'bg-[#FFEAE1] text-[#E04D1B] border border-[#FFD2C2]'
                  }`}>
                    {item.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Correto (+{item.scorePercent}%)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Incorreto ({item.scorePercent}%)</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Resposta do usuário vs Esperada */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Sua resposta:
                    </span>
                    <p className={`font-bold ${item.isCorrect ? 'text-[#0A9B80]' : 'text-[#E04D1B]'}`}>
                      {item.userAnswer || <em className="text-slate-400">Em branco</em>}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#DCF8F1]/50 border border-[#B6F5E8] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#0A9B80] block">
                      Resposta esperada / modelo:
                    </span>
                    <p className="font-bold text-[#160F2E]">
                      {item.expectedAnswer}
                    </p>
                  </div>
                </div>

                {/* Explicação pedagógica */}
                <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-xs text-[#52456F] space-y-1">
                  <strong className="text-[#160F2E] font-bold block">
                    Por que isso importa:
                  </strong>
                  <p className="leading-relaxed">
                    {item.explanation || item.feedback}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

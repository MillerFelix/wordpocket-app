import React from 'react';
import { 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';
import { ActivityGradingResult, Activity } from '../../../types/activity';
import { ResultScoreSummaryCard } from '../shared/ResultScoreSummaryCard';

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
  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-300">
      {/* Top Card: Score Summary */}
      <ResultScoreSummaryCard
        level={activity.level}
        score={result.score}
        correctCount={result.correctCount}
        totalQuestions={result.totalQuestions}
        durationSeconds={durationSeconds}
        skillNamePt="Writing"
        badgeSubtitle={`Resultado da Atividade • Writing • Nível ${activity.level.toUpperCase()}`}
        iconGradientClass="bg-gradient-to-tr from-[#19D9B4] to-[#0A9B80]"
        onRetry={onRetry}
        onBackToList={onBackToList}
      />

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

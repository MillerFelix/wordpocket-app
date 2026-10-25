import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  BookOpen
} from 'lucide-react';
import { Activity, ActivityGradingResult, ReadingQuestion } from '../../../types/activity';
import { ReadingPassageView } from './ReadingPassageView';
import { MultipleChoiceQuestionView } from './MultipleChoiceQuestionView';
import { ReadingResultView } from './ReadingResultView';
import { readingService } from '../../../services/readingService';
import { useAuth } from '../../../contexts/AuthContext';

interface ReadingActivityRunnerProps {
  activity: Activity<ReadingQuestion>;
  onExit: () => void;
}

export const ReadingActivityRunner: React.FC<ReadingActivityRunnerProps> = ({
  activity,
  onExit
}) => {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [completedResult, setCompletedResult] = useState<ActivityGradingResult | null>(null);
  const [startTime] = useState<number>(Date.now());
  const [finalDuration, setFinalDuration] = useState(0);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [isPassageCollapsed, setIsPassageCollapsed] = useState(false);

  const totalQuestions = activity.questions.length;
  const currentQuestion = activity.questions[currentIndex];
  const isLast = currentIndex === totalQuestions - 1;
  const isFirst = currentIndex === 0;

  const currentAnswer = answers[currentQuestion.id] || '';

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinish = async () => {
    setSubmitting(true);
    const duration = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    setFinalDuration(duration);

    try {
      const { grading } = await readingService.completeActivity(
        activity.id,
        answers,
        duration,
        user?.uid
      );
      setCompletedResult(grading);
    } catch (err) {
      console.error('Erro ao processar atividade de leitura:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setCompletedResult(null);
  };

  if (completedResult) {
    return (
      <ReadingResultView
        activity={activity}
        result={completedResult}
        durationSeconds={finalDuration}
        onRetry={handleRestart}
        onBackToList={onExit}
      />
    );
  }

  const answeredCount = Object.values(answers).filter((a) => a.trim().length > 0).length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-300">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setShowExitConfirm(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 hover:bg-white text-[#52456F] hover:text-[#160F2E] border border-white/90 text-xs font-bold transition shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#176BFF]" />
          <span>Sair da Leitura</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E1ECFC] text-[#176BFF] border border-[#BED7FA]">
            Nível {activity.level.toUpperCase()}
          </span>
          <span className="text-xs text-[#52456F] font-semibold hidden sm:inline">
            • {activity.topic}
          </span>
        </div>
      </div>

      {/* Confirmation Modal when exiting midway */}
      {showExitConfirm && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium space-y-3 animate-in fade-in">
          <div className="flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold text-sm block">Deseja realmente sair?</strong>
              <p>
                Tentativas incompletas <strong>não sobrescrevem</strong> seu último resultado válido salvo. Suas respostas atuais não serão registradas.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowExitConfirm(false)}
              className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 font-bold text-xs text-amber-900 hover:bg-amber-100 transition cursor-pointer"
            >
              Continuar Leitura
            </button>
            <button
              type="button"
              onClick={onExit}
              className="px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition cursor-pointer"
            >
              Confirmar Saída
            </button>
          </div>
        </div>
      )}

      {/* Reading Passage Area (with collapse toggle) */}
      {activity.readingPassage && (
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-[#52456F] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#176BFF]" />
              <span>Texto Base para Consulta</span>
            </span>

            <button
              type="button"
              onClick={() => setIsPassageCollapsed((prev) => !prev)}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#176BFF] hover:underline cursor-pointer"
            >
              <span>{isPassageCollapsed ? 'Expandir Texto' : 'Recolher Texto'}</span>
              {isPassageCollapsed ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronUp className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {!isPassageCollapsed && (
            <ReadingPassageView
              passage={activity.readingPassage}
              activityTitle={activity.title}
            />
          )}
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-6">
        {/* Activity Title Banner */}
        <div className="space-y-1 pb-3 border-b border-slate-100">
          <h2 className="text-base sm:text-lg font-black text-[#160F2E]">
            {activity.title}
          </h2>
          <p className="text-xs text-[#52456F] font-medium leading-relaxed">
            {activity.instructions}
          </p>
        </div>

        {/* Progress and Question Counter */}
        <div className="space-y-2 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-[#176BFF] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#176BFF]" />
              <span>Questão {currentIndex + 1} de {totalQuestions}</span>
            </span>
            <span className="text-[#52456F]">
              {answeredCount} de {totalQuestions} respondidas
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#176BFF] to-[#362D59] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Active Question View */}
        <div className="min-h-[220px]">
          <MultipleChoiceQuestionView
            question={currentQuestion}
            selectedOptionId={currentAnswer}
            onSelectOption={handleSelectOption}
            questionNumber={currentIndex + 1}
            totalQuestions={totalQuestions}
          />
        </div>

        {/* Bottom Actions: Previous / Next / Complete */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirst}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#160F2E] font-bold text-xs transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Anterior</span>
          </button>

          <div className="flex items-center gap-2">
            {!isLast ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition cursor-pointer"
              >
                <span>Próxima Questão</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-brand text-white font-black text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{submitting ? 'Avaliando...' : 'Concluir e Ver Nota'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  ArrowLeft, 
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
import { ActivityExitConfirmModal } from '../shared/ActivityExitConfirmModal';
import { ActivityProgressBar } from '../shared/ActivityProgressBar';
import { ActivityNavigationFooter } from '../shared/ActivityNavigationFooter';

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
      <ActivityExitConfirmModal
        isOpen={showExitConfirm}
        onCancel={() => setShowExitConfirm(false)}
        onConfirm={onExit}
        continueLabel="Continuar Leitura"
      />

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
        <ActivityProgressBar
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          answeredCount={answeredCount}
        />

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
        <ActivityNavigationFooter
          isFirst={isFirst}
          isLast={isLast}
          submitting={submitting}
          onPrev={handlePrev}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      </div>
    </div>
  );
};

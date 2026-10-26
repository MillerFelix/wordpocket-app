import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Headphones
} from 'lucide-react';
import { Activity, ActivityGradingResult, ListeningQuestion } from '../../../types/activity';
import { AudioPlayerCard } from './AudioPlayerCard';
import { MultipleChoiceQuestionView } from '../reading/MultipleChoiceQuestionView';
import { ListeningResultView } from './ListeningResultView';
import { listeningService } from '../../../services/listeningService';
import { useAuth } from '../../../contexts/AuthContext';
import { stopSpeech } from '../../../utils/speech';
import { ActivityExitConfirmModal } from '../shared/ActivityExitConfirmModal';
import { ActivityProgressBar } from '../shared/ActivityProgressBar';
import { ActivityNavigationFooter } from '../shared/ActivityNavigationFooter';

interface ListeningActivityRunnerProps {
  activity: Activity<ListeningQuestion>;
  onExit: () => void;
}

export const ListeningActivityRunner: React.FC<ListeningActivityRunnerProps> = ({
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
    stopSpeech();
    setSubmitting(true);
    const duration = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    setFinalDuration(duration);

    try {
      const { grading } = await listeningService.completeActivity(
        activity.id,
        answers,
        duration,
        user?.uid
      );
      setCompletedResult(grading);
    } catch (err) {
      console.error('Erro ao processar atividade de escuta:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRestart = () => {
    stopSpeech();
    setAnswers({});
    setCurrentIndex(0);
    setCompletedResult(null);
  };

  const handleExitCleanly = () => {
    stopSpeech();
    onExit();
  };

  if (completedResult) {
    return (
      <ListeningResultView
        activity={activity}
        result={completedResult}
        durationSeconds={finalDuration}
        onRetry={handleRestart}
        onBackToList={handleExitCleanly}
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
          <span>Sair da Escuta</span>
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
        onConfirm={handleExitCleanly}
        continueLabel="Continuar Escuta"
      />

      {/* Audio Player Component */}
      {activity.listeningTrack && (
        <AudioPlayerCard
          track={activity.listeningTrack}
          activityTitle={activity.title}
        />
      )}

      {/* Main Question Card */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-6">
        {/* Activity Title Banner */}
        <div className="space-y-1 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-[#176BFF]" />
            <h2 className="text-base sm:text-lg font-black text-[#160F2E]">
              {activity.title}
            </h2>
          </div>
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

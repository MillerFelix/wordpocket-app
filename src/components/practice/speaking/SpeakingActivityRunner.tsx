import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles,
  Mic
} from 'lucide-react';
import { Activity, ActivityGradingResult, SpeakingQuestion } from '../../../types/activity';
import { VoiceRecorderCard } from './VoiceRecorderCard';
import { PerceptionQuestionBox } from './PerceptionQuestionBox';
import { SpeakingResultView } from './SpeakingResultView';
import { speakingService } from '../../../services/speakingService';
import { useAuth } from '../../../contexts/AuthContext';
import { stopSpeech } from '../../../utils/speech';
import { audioRecorder } from '../../../utils/audioRecorder';
import { ActivityExitConfirmModal } from '../shared/ActivityExitConfirmModal';
import { ActivityNavigationFooter } from '../shared/ActivityNavigationFooter';

interface SpeakingActivityRunnerProps {
  activity: Activity<SpeakingQuestion>;
  onExit: () => void;
}

export const SpeakingActivityRunner: React.FC<SpeakingActivityRunnerProps> = ({
  activity,
  onExit
}) => {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recordedAudios, setRecordedAudios] = useState<Record<string, string>>({});
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
  const currentAudio = recordedAudios[currentQuestion.id] || null;

  const handleSelectPerceptionOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleRecordingComplete = (audioUrl: string, recognizedText?: string) => {
    setRecordedAudios((prev) => ({
      ...prev,
      [currentQuestion.id]: audioUrl
    }));

    // Se a questão não tiver questionário de percepção separado, a resposta registrada é a confirmação do turno de fala
    if (!currentQuestion.perceptionQuestion) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: `recorded:${recognizedText || 'completed'}`
      }));
    }
  };

  const handleClearRecording = () => {
    if (currentAudio) {
      audioRecorder.revokeUrl(currentAudio);
    }
    setRecordedAudios((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
    if (!currentQuestion.perceptionQuestion) {
      setAnswers((prev) => {
        const next = { ...prev };
        delete next[currentQuestion.id];
        return next;
      });
    }
  };

  const handleNext = () => {
    stopSpeech();
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    stopSpeech();
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
      const { grading } = await speakingService.completeActivity(
        activity.id,
        answers,
        duration,
        user?.uid
      );
      setCompletedResult(grading);
    } catch (err) {
      console.error('Erro ao processar atividade de fala:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRestart = () => {
    stopSpeech();
    setAnswers({});
    setRecordedAudios({});
    setCurrentIndex(0);
    setCompletedResult(null);
  };

  const handleExitCleanly = () => {
    stopSpeech();
    // Limpa gravações temporárias da memória
    Object.values(recordedAudios).forEach((url) => audioRecorder.revokeUrl(url));
    onExit();
  };

  if (completedResult) {
    return (
      <SpeakingResultView
        activity={activity}
        result={completedResult}
        durationSeconds={finalDuration}
        onRetry={handleRestart}
        onBackToList={handleExitCleanly}
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
          <span>Sair da Fala</span>
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
        continueLabel="Continuar Treino"
        warningDescription="Tentativas incompletas não sobrescrevem seu último resultado válido salvo. Suas gravações atuais não serão registradas."
      />

      {/* Activity Context & Turn Banner */}
      <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-[#176BFF]" />
            <h2 className="text-sm sm:text-base font-black text-[#160F2E]">
              {activity.title}
            </h2>
          </div>

          <span className="text-xs font-bold text-[#176BFF] bg-[#E1ECFC] px-2.5 py-0.5 rounded-full border border-[#BED7FA]">
            Turno {currentIndex + 1} de {totalQuestions}
          </span>
        </div>

        <p className="text-xs text-[#52456F] font-medium leading-relaxed">
          {activity.instructions}
        </p>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] font-bold text-[#52456F]">
            <span className="text-[#176BFF] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#176BFF]" />
              <span>Progresso</span>
            </span>
            <span>{answeredCount} de {totalQuestions} turnos praticados</span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#176BFF] to-[#362D59] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Perception Question (if sound training has an objective check) */}
      {currentQuestion.perceptionQuestion && (
        <PerceptionQuestionBox
          questionText={currentQuestion.perceptionQuestion.questionText}
          options={currentQuestion.perceptionQuestion.options}
          audioText={currentQuestion.perceptionQuestion.audioText}
          selectedOptionId={currentAnswer}
          onSelectOption={handleSelectPerceptionOption}
        />
      )}

      {/* Main Voice Recording Card */}
      <VoiceRecorderCard
        question={currentQuestion}
        onRecordingComplete={handleRecordingComplete}
        recordedAudioUrl={currentAudio}
        onClearRecording={handleClearRecording}
      />

      {/* Bottom Actions: Previous / Next / Finish */}
      {/* Bottom Actions: Previous / Next / Finish */}
      <ActivityNavigationFooter
        isFirst={isFirst}
        isLast={isLast}
        submitting={submitting}
        onPrev={handlePrev}
        onNext={handleNext}
        onFinish={handleFinish}
        previousLabel="Turno Anterior"
        nextLabel="Próximo Turno"
        finishLabel="Concluir e Ver Resumo"
        finishButtonClass="bg-gradient-brand shadow-colored-blue"
        containerClass="bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-white/90 shadow-soft-card flex items-center justify-between gap-3"
      />
    </div>
  );
};

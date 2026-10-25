import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  Trophy, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { PracticeDifficulty, PracticeSkillConfig } from '../../types';
import { practiceService } from '../../services/practiceService';
import { PronounceButton } from '../PronounceButton';
import { useAuth } from '../../contexts/AuthContext';
import { saveActivityAttempt } from '../../services/progressService';

interface PracticeExerciseRunnerProps {
  skill: PracticeSkillConfig;
  difficulty: PracticeDifficulty;
  onFinish: () => void;
}

export const PracticeExerciseRunner: React.FC<PracticeExerciseRunnerProps> = ({
  skill,
  difficulty,
  onFinish
}) => {
  const { user, isVisitor, openVisitorPrompt } = useAuth();
  const exercise = practiceService.getExercise(skill.id, difficulty);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [savedToCloud, setSavedToCloud] = useState(false);
  const [startTime] = useState<number>(Date.now());
  const [durationSeconds, setDurationSeconds] = useState(0);

  const currentQuestion = exercise.questions[currentIndex];
  const isLastQuestion = currentIndex === exercise.questions.length - 1;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQuestion.correctIndex) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      const finalDuration = Math.max(1, Math.round((Date.now() - startTime) / 1000));
      setDurationSeconds(finalDuration);
      setIsFinished(true);

      const finalCorrect = selectedOption === currentQuestion.correctIndex ? correctCount : correctCount;
      const calculatedScore = Math.round((finalCorrect / exercise.questions.length) * 100);

      if (user) {
        try {
          await saveActivityAttempt(user.uid, {
            userId: user.uid,
            skillId: skill.id,
            difficulty,
            activityId: exercise.id,
            activityTitle: exercise.title,
            score: calculatedScore,
            totalQuestions: exercise.questions.length,
            correctAnswers: finalCorrect,
            durationSeconds: finalDuration
          });
          setSavedToCloud(true);
        } catch {
          setSavedToCloud(false);
        }
      }
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setIsFinished(false);
    setSavedToCloud(false);
  };

  if (isFinished) {
    const finalScore = Math.round((correctCount / exercise.questions.length) * 100);
    const passed = finalScore >= 60;

    return (
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card max-w-xl mx-auto text-center space-y-6 animate-in fade-in">
        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto shadow-sm ${
          passed ? 'bg-[#DCF8F1] text-[#0A9B80]' : 'bg-[#FFEAE1] text-[#E04D1B]'
        }`}>
          {passed ? <Trophy className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
        </div>

        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#52456F]">
            Sessão Concluída • {skill.namePt}
          </span>
          <h2 className="text-2xl font-black text-[#160F2E]">
            {passed ? 'Excelente desempenho!' : 'Bom treino! Continue praticando'}
          </h2>
          <p className="text-xs text-[#52456F]">
            Você acertou <strong>{correctCount}</strong> de <strong>{exercise.questions.length}</strong> questões ({finalScore}%).
          </p>
        </div>

        {/* Cloud Sync Status Notification */}
        {savedToCloud ? (
          <div className="p-3.5 rounded-2xl bg-[#DCF8F1] border border-[#B6F5E8] text-[#0A9B80] text-xs font-bold flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Resultado salvo e sincronizado na sua conta!</span>
          </div>
        ) : isVisitor ? (
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#52456F] text-xs font-medium space-y-2">
            <p>
              💡 Como visitante, seus dados não foram registrados na nuvem.
            </p>
            <button
              type="button"
              onClick={() => openVisitorPrompt()}
              className="text-xs font-bold text-[#176BFF] hover:underline block mx-auto cursor-pointer"
            >
              Criar conta gratuita para salvar resultados
            </button>
          </div>
        ) : null}

        <div className="flex items-center justify-center gap-4 text-xs text-[#52456F] font-semibold">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Tempo: {durationSeconds}s</span>
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#160F2E] font-bold text-xs transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Repetir Exercício</span>
          </button>

          <button
            type="button"
            onClick={onFinish}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs shadow-colored-blue hover:opacity-95 transition cursor-pointer"
          >
            <span>Voltar à Trilha</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-6 max-w-2xl mx-auto">
        {/* Progress Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#176BFF]">
              Questão {currentIndex + 1} de {exercise.questions.length}
            </span>
          </div>

          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#52456F]">
            Nível: {difficulty === 'easy' ? 'Fácil' : difficulty === 'medium' ? 'Médio' : 'Difícil'}
          </span>
        </div>

        {/* Instruction & Prompt */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-extrabold text-[#160F2E] whitespace-pre-line leading-relaxed">
            {currentQuestion.prompt}
          </h3>

          {/* Audio Prompt if available */}
          {currentQuestion.audioText && (
            <div className="p-3.5 rounded-2xl bg-[#E1ECFC]/70 border border-[#BED7FA] flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-[#160F2E]">
                Clique para escutar o áudio nativo:
              </span>
              <PronounceButton
                text={currentQuestion.audioText}
                showLabel
                size="sm"
                className="bg-white text-[#176BFF] border border-[#BED7FA] shadow-xs"
              />
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctIndex;

            let optionStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-[#160F2E]';

            if (isAnswered) {
              if (isCorrect) {
                optionStyle = 'bg-[#DCF8F1] border-[#0A9B80] text-[#0A9B80] font-bold shadow-xs';
              } else if (isSelected) {
                optionStyle = 'bg-[#FFEAE1] border-[#E04D1B] text-[#E04D1B] font-bold';
              } else {
                optionStyle = 'bg-slate-50 border-slate-100 text-slate-400 opacity-60';
              }
            } else if (isSelected) {
              optionStyle = 'bg-white border-[#176BFF] ring-2 ring-[#176BFF]/20 text-[#176BFF] font-bold';
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-2xl text-left border transition-all duration-150 flex items-center justify-between gap-3 text-xs sm:text-sm select-none cursor-pointer ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isSelected ? 'bg-[#176BFF] text-white' : 'bg-slate-100 text-[#52456F]'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-[#0A9B80] shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-[#E04D1B] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation & Next Button */}
        {isAnswered && (
          <div className="space-y-4 pt-2 animate-in fade-in">
            <div className={`p-4 rounded-2xl text-xs space-y-1 ${
              selectedOption === currentQuestion.correctIndex
                ? 'bg-[#DCF8F1]/70 border border-[#B6F5E8] text-[#0A9B80]'
                : 'bg-amber-50 border border-amber-200 text-amber-900'
            }`}>
              <strong className="block font-bold">Explicação:</strong>
              <p className="leading-relaxed">{currentQuestion.explanation}</p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition active:scale-[0.99] cursor-pointer"
              >
                <span>{isLastQuestion ? 'Finalizar e Ver Resultado' : 'Próxima Questão'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
  );
};

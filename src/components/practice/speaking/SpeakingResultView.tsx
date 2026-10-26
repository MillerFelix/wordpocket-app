import React, { useState } from 'react';
import { 
  Volume2,
  Mic,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { Activity, ActivityGradingResult, SpeakingQuestion } from '../../../types/activity';
import { speakEnglish, stopSpeech } from '../../../utils/speech';
import { ResultScoreSummaryCard } from '../shared/ResultScoreSummaryCard';

interface SpeakingResultViewProps {
  activity: Activity<SpeakingQuestion>;
  result: ActivityGradingResult;
  durationSeconds: number;
  onRetry: () => void;
  onBackToList: () => void;
}

export const SpeakingResultView: React.FC<SpeakingResultViewProps> = ({
  activity,
  result,
  durationSeconds,
  onRetry,
  onBackToList
}) => {
  const [playingItemId, setPlayingItemId] = useState<string | null>(null);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({
    clarity: true,
    stress: true,
    rhythm: true
  });

  const defaultChecklist = [
    { id: 'clarity', label: 'Clareza e articulação dos sons individuais' },
    { id: 'stress', label: 'Sílaba tônica e ênfase nas palavras-chave' },
    { id: 'rhythm', label: 'Ritmo, entonação e pausas naturais' }
  ];

  const handlePlayModel = (text: string, itemId: string) => {
    stopSpeech();
    if (playingItemId === itemId) {
      setPlayingItemId(null);
      return;
    }

    setPlayingItemId(itemId);
    speakEnglish(text, {
      rate: 0.9,
      onStart: () => setPlayingItemId(itemId),
      onEnd: () => setPlayingItemId(null),
      onError: () => setPlayingItemId(null)
    });
  };

  const toggleCheck = (id: string) => {
    setChecklistState((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-300">
      {/* Top Card: Score Summary */}
      <ResultScoreSummaryCard
        level={activity.level}
        score={result.score}
        correctCount={result.correctCount}
        totalQuestions={result.totalQuestions}
        durationSeconds={durationSeconds}
        skillNamePt="Speaking"
        badgeSubtitle={`Resultado do Speaking • Nível ${activity.level.toUpperCase()}`}
        backToListLabel="Voltar para Atividades de Fala"
        perfectTitle="Prática Oral Concluída com Sucesso! 🎉"
        passedTitle="Muito Bem! Treino de Fala Finalizado 👏"
        failedTitle="Bom Treino! Continue Falando e Praticando 💪"
        iconGradientClass="bg-gradient-to-tr from-[#176BFF] to-[#362D59]"
        onRetry={onRetry}
        onBackToList={onBackToList}
      />

      {/* Self-Evaluation Checklist Card */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/90 shadow-soft-card space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#176BFF]" />
            <h3 className="text-sm font-extrabold text-[#160F2E]">
              Lista de Autoavaliação da Produção Oral
            </h3>
          </div>
          <span className="text-[11px] font-bold text-[#52456F] bg-slate-100 px-2.5 py-0.5 rounded-full">
            Reflexão Honesta
          </span>
        </div>

        <p className="text-xs text-[#52456F] font-medium leading-relaxed">
          Para desenvolver uma fala natural, compare a sua gravação com o modelo nativo considerando estes três pilares:
        </p>

        <div className="space-y-2 pt-1">
          {defaultChecklist.map((item) => {
            const isChecked = checklistState[item.id] ?? false;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleCheck(item.id)}
                className={`w-full p-3.5 rounded-2xl text-left border flex items-center justify-between gap-3 transition cursor-pointer ${
                  isChecked
                    ? 'bg-[#DCF8F1]/60 border-[#B6F5E8] text-[#0A9B80]'
                    : 'bg-slate-50 border-slate-200/80 text-[#52456F]'
                }`}
              >
                <span className="text-xs font-bold leading-snug">
                  {item.label}
                </span>

                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition ${
                    isChecked
                      ? 'bg-[#0A9B80] border-[#0A9B80] text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Turn Review Section */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-[#176BFF]" />
            <h3 className="text-sm font-extrabold text-[#160F2E]">
              Gabarito e Orientações de Pronúncia
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#52456F]">
            {result.correctCount} de {result.totalQuestions} turnos
          </span>
        </div>

        <div className="space-y-4">
          {result.questionsGrading.map((item, idx) => {
            const originalQuestion = activity.questions.find((q) => q.id === item.questionId);
            const isPlayingThis = playingItemId === item.questionId;

            return (
              <div
                key={item.questionId}
                className={`p-4 sm:p-5 rounded-2xl border space-y-3 transition ${
                  item.isCorrect
                    ? 'bg-emerald-50/50 border-emerald-200/80'
                    : 'bg-rose-50/50 border-rose-200/80'
                }`}
              >
                {/* Turn Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#52456F]">
                      Turno {idx + 1} • {originalQuestion?.itemTitle || `Item ${idx + 1}`}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#160F2E] leading-snug">
                      {originalQuestion?.contextScenario || originalQuestion?.targetPhrase}
                    </h4>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold shrink-0 ${
                      item.isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {item.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Concluído</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Pendente</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Target / Model Phrase with Play button */}
                {originalQuestion && (
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-extrabold uppercase text-[#52456F]">
                        Frase / Resposta Modelo:
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-[#160F2E]">
                        "{originalQuestion.targetPhrase || originalQuestion.modelAudioText}"
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handlePlayModel(originalQuestion.modelAudioText, item.questionId)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#E1ECFC] text-[#176BFF] hover:bg-[#cde0fa] font-bold text-xs shrink-0 transition cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isPlayingThis ? 'Pausar' : 'Ouvir'}</span>
                    </button>
                  </div>
                )}

                {/* Perception Check comparison if present */}
                {originalQuestion?.perceptionQuestion && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80 space-y-0.5">
                      <span className="text-[10px] font-extrabold text-[#52456F] uppercase">
                        Sua Escolha de Percepção:
                      </span>
                      <p className={`font-semibold ${item.isCorrect ? 'text-emerald-800' : 'text-rose-700'}`}>
                        {item.userAnswer}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80 space-y-0.5">
                      <span className="text-[10px] font-extrabold text-emerald-700 uppercase">
                        Palavra Correta:
                      </span>
                      <p className="font-semibold text-emerald-900">
                        {item.expectedAnswer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Pronunciation Advice */}
                {item.explanation && (
                  <div className="p-3 rounded-xl bg-white/70 border border-slate-200/60 text-xs text-[#52456F] font-medium leading-relaxed space-y-1">
                    <strong className="text-[#160F2E] font-bold block">
                      💡 Orientação Fonética e Articulação:
                    </strong>
                    <p>{item.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

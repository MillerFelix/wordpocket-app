import React, { useState } from 'react';
import { 
  Trophy, 
  Sparkles, 
  RotateCcw, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Info,
  Volume2,
  Mic,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { Activity, ActivityGradingResult, SpeakingQuestion } from '../../../types/activity';
import { useAuth } from '../../../contexts/AuthContext';
import { speakEnglish, stopSpeech } from '../../../utils/speech';

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
  const { isVisitor, openVisitorPrompt } = useAuth();
  const [playingItemId, setPlayingItemId] = useState<string | null>(null);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({
    clarity: true,
    stress: true,
    rhythm: true
  });

  const passed = result.score >= 60;
  const perfect = result.score === 100;

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
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card text-center space-y-5">
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mx-auto shadow-sm ${
            perfect
              ? 'bg-gradient-to-tr from-[#176BFF] to-[#362D59] text-white'
              : passed
              ? 'bg-[#E1ECFC] text-[#176BFF]'
              : 'bg-amber-100 text-amber-800'
          }`}
        >
          {perfect ? <Trophy className="w-9 h-9" /> : <Sparkles className="w-9 h-9" />}
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#52456F]">
            Resultado do Speaking • Nível {activity.level.toUpperCase()}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#160F2E] tracking-tight">
            {perfect
              ? 'Prática Oral Concluída com Sucesso! 🎉'
              : passed
              ? 'Muito Bem! Treino de Fala Finalizado 👏'
              : 'Bom Treino! Continue Falando e Praticando 💪'}
          </h2>
          <p className="text-xs sm:text-sm text-[#52456F] font-medium max-w-md mx-auto">
            Você completou <strong>{result.correctCount}</strong> de <strong>{result.totalQuestions}</strong> turnos e questões da atividade, atingindo <strong>{result.score}%</strong> de aproveitamento.
          </p>
        </div>

        {/* Filosofia da última tentativa */}
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
              onClick={() => openVisitorPrompt('Crie uma conta gratuita para registrar suas notas de Speaking permanentemente na nuvem.')}
              className="font-bold text-[#176BFF] hover:underline cursor-pointer"
            >
              Criar conta gratuita
            </button>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 text-xs text-[#52456F] font-semibold">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Tempo de prática: {durationSeconds}s</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onRetry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#176BFF] hover:bg-[#1258d4] text-white font-extrabold text-xs sm:text-sm shadow-colored-blue transition active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refazer Atividade</span>
          </button>

          <button
            type="button"
            onClick={onBackToList}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-[#160F2E] font-bold text-xs sm:text-sm border border-slate-200 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Atividades de Fala</span>
          </button>
        </div>
      </div>

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

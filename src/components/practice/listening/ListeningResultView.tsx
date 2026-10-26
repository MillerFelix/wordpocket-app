import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  FileText, 
  Languages,
  Headphones
} from 'lucide-react';
import { ActivityGradingResult, Activity, ListeningQuestion } from '../../../types/activity';
import { speakEnglish, stopSpeech } from '../../../utils/speech';
import { ResultScoreSummaryCard } from '../shared/ResultScoreSummaryCard';

interface ListeningResultViewProps {
  activity: Activity<ListeningQuestion>;
  result: ActivityGradingResult;
  durationSeconds: number;
  onRetry: () => void;
  onBackToList: () => void;
}

export const ListeningResultView: React.FC<ListeningResultViewProps> = ({
  activity,
  result,
  durationSeconds,
  onRetry,
  onBackToList
}) => {
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const track = activity.listeningTrack;

  const handlePlayAudio = () => {
    if (!track) return;
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    const res = speakEnglish(track.spokenText, {
      rate: track.speechRate ?? 0.9,
      onStart: () => setIsPlayingAudio(true),
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });

    if (res.success) {
      setIsPlayingAudio(true);
    }
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
        skillNamePt="Listening"
        badgeSubtitle={`Resultado do Listening • Nível ${activity.level.toUpperCase()}`}
        passedTitle="Muito Bem! Escuta Concluída 👏"
        failedTitle="Bom Treino! Continue Escutando e Praticando 💪"
        iconGradientClass="bg-gradient-to-tr from-[#176BFF] to-[#362D59]"
        onRetry={onRetry}
        onBackToList={onBackToList}
      />

      {/* Transcript and Audio Review Section */}
      {track && (
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/90 shadow-soft-card space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#176BFF]" />
              <h3 className="text-sm font-extrabold text-[#160F2E]">
                Transcrição Completa Revelada
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePlayAudio}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#E1ECFC] text-[#176BFF] hover:bg-[#cde0fa] transition cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isPlayingAudio ? 'Parar Áudio' : 'Ouvir Novamente'}</span>
              </button>

              {track.transcriptTranslation && (
                <button
                  type="button"
                  onClick={() => setShowTranslation((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-[#52456F] hover:bg-slate-200 transition cursor-pointer"
                >
                  <Languages className="w-3.5 h-3.5 text-[#176BFF]" />
                  <span>{showTranslation ? 'Ocultar Tradução' : 'Ver Tradução'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Dialogue or Spoken Text Layout */}
          {track.dialogueLines && track.dialogueLines.length > 0 ? (
            <div className="space-y-2.5">
              {track.dialogueLines.map((line, i) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#176BFF] block">
                    {line.speaker}:
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#160F2E] leading-relaxed">
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-medium text-[#160F2E] leading-relaxed whitespace-pre-line">
              {track.transcript || track.spokenText}
            </div>
          )}

          {/* Translation in Portuguese */}
          {showTranslation && track.transcriptTranslation && (
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-[#362D59] font-medium leading-relaxed whitespace-pre-line space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 block">
                Tradução de Apoio:
              </span>
              <p>{track.transcriptTranslation}</p>
            </div>
          )}
        </div>
      )}

      {/* Detailed Question Review Section */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-[#176BFF]" />
            <h3 className="text-sm font-extrabold text-[#160F2E]">
              Gabarito e Explicações Detalhadas
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#52456F]">
            {result.correctCount} acertos de {result.totalQuestions}
          </span>
        </div>

        <div className="space-y-4">
          {result.questionsGrading.map((item, idx) => {
            const originalQuestion = activity.questions.find((q) => q.id === item.questionId);

            return (
              <div
                key={item.questionId}
                className={`p-4 sm:p-5 rounded-2xl border space-y-3 transition ${
                  item.isCorrect
                    ? 'bg-emerald-50/50 border-emerald-200/80'
                    : 'bg-rose-50/50 border-rose-200/80'
                }`}
              >
                {/* Question Header & Status */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#52456F]">
                      Questão {idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#160F2E] leading-snug">
                      {originalQuestion?.questionText || `Questão ${idx + 1}`}
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
                        <span>Correto (+{Math.round(100 / result.totalQuestions)}%)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Incorreto</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Answers Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80 space-y-0.5">
                    <span className="text-[10px] font-extrabold text-[#52456F] uppercase">
                      Sua Escolha:
                    </span>
                    <p className={`font-semibold ${item.isCorrect ? 'text-emerald-800' : 'text-rose-700'}`}>
                      {item.userAnswer || '(Sem resposta)'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80 space-y-0.5">
                    <span className="text-[10px] font-extrabold text-emerald-700 uppercase">
                      Resposta Correta:
                    </span>
                    <p className="font-semibold text-emerald-900">
                      {item.expectedAnswer}
                    </p>
                  </div>
                </div>

                {/* Pedagogical Explanation */}
                {item.explanation && (
                  <div className="p-3 rounded-xl bg-white/70 border border-slate-200/60 text-xs text-[#52456F] font-medium leading-relaxed">
                    <strong className="text-[#160F2E] font-bold block mb-0.5">
                      💡 Por que esta alternativa é a correta?
                    </strong>
                    <span>{item.explanation}</span>
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

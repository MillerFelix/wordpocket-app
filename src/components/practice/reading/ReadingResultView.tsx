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
  Info,
  BookOpen
} from 'lucide-react';
import { ActivityGradingResult, Activity, ReadingQuestion } from '../../../types/activity';
import { useAuth } from '../../../contexts/AuthContext';

interface ReadingResultViewProps {
  activity: Activity<ReadingQuestion>;
  result: ActivityGradingResult;
  durationSeconds: number;
  onRetry: () => void;
  onBackToList: () => void;
}

export const ReadingResultView: React.FC<ReadingResultViewProps> = ({
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
            Resultado da Leitura • Nível {activity.level.toUpperCase()}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#160F2E] tracking-tight">
            {perfect
              ? 'Pontuação Perfeita! 🎉'
              : passed
              ? 'Muito Bem! Compreensão Concluída 👏'
              : 'Bom Treino! Continue Lendo e Praticando 💪'}
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
              onClick={() => openVisitorPrompt('Crie uma conta gratuita para registrar suas notas de Reading permanentemente na nuvem.')}
              className="font-bold text-[#176BFF] hover:underline cursor-pointer"
            >
              Criar conta gratuita
            </button>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 text-xs text-[#52456F] font-semibold">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Tempo de leitura e respostas: {durationSeconds}s</span>
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
            <span>Voltar para Atividades de Leitura</span>
          </button>
        </div>
      </div>

      {/* Detailed Review Section */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#176BFF]" />
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

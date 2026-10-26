import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  Square, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  Radio
} from 'lucide-react';
import { SpeakingQuestion } from '../../../types/activity';
import { speakEnglish, stopSpeech, isSpeechSupported } from '../../../utils/speech';
import { audioRecorder, isMediaRecorderSupported } from '../../../utils/audioRecorder';

interface VoiceRecorderCardProps {
  question: SpeakingQuestion;
  onRecordingComplete: (audioUrl: string, recognizedText?: string) => void;
  recordedAudioUrl?: string | null;
  onClearRecording?: () => void;
}

export const VoiceRecorderCard: React.FC<VoiceRecorderCardProps> = ({
  question,
  onRecordingComplete,
  recordedAudioUrl,
  onClearRecording
}) => {
  const [isPlayingModel, setIsPlayingModel] = useState<boolean>(false);
  const [modelSpeed, setModelSpeed] = useState<number>(1.0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordSeconds, setRecordSeconds] = useState<number>(0);
  const [isPlayingOwn, setIsPlayingOwn] = useState<boolean>(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

  const ownAudioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      stopSpeech();
      if (timerRef.current) clearInterval(timerRef.current);
      if (isRecording) {
        audioRecorder.cancel();
      }
    };
  }, [isRecording]);

  // Limpa estados ao trocar de questão
  useEffect(() => {
    stopSpeech();
    setIsPlayingModel(false);
    setIsRecording(false);
    setIsPlayingOwn(false);
    setRecordSeconds(0);
    setMicError(null);
    setRecognizedText(null);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [question.id]);

  // Reproduzir áudio modelo (nativo, velocidade ajustável)
  const handlePlayModel = () => {
    setMicError(null);
    if (isPlayingModel) {
      stopSpeech();
      setIsPlayingModel(false);
      return;
    }

    if (!isSpeechSupported()) {
      setMicError('A síntese de áudio modelo não está disponível neste navegador.');
      return;
    }

    const baseRate = question.speechRate ?? 0.9;
    const finalRate = Math.min(1.5, Math.max(0.6, baseRate * modelSpeed));

    const result = speakEnglish(question.modelAudioText, {
      rate: finalRate,
      onStart: () => {
        if (isMountedRef.current) setIsPlayingModel(true);
      },
      onEnd: () => {
        if (isMountedRef.current) setIsPlayingModel(false);
      },
      onError: () => {
        if (isMountedRef.current) setIsPlayingModel(false);
      }
    });

    if (result.success) {
      setIsPlayingModel(true);
    } else {
      setIsPlayingModel(false);
      setMicError(result.message || 'Erro ao reproduzir modelo.');
    }
  };

  // Iniciar gravação de voz
  const handleStartRecording = async () => {
    setMicError(null);
    stopSpeech();
    setIsPlayingModel(false);

    if (!isMediaRecorderSupported()) {
      setMicError('A gravação de áudio pelo microfone não é suportada neste navegador.');
      return;
    }

    try {
      await audioRecorder.start({ enableSpeechRecognition: true });
      setIsRecording(true);
      setRecordSeconds(0);

      timerRef.current = setInterval(() => {
        setRecordSeconds((prev) => prev + 1);
      }, 1000);
    } catch (err: unknown) {
      setIsRecording(false);
      const message = err instanceof Error ? err.message : 'Erro ao acessar o microfone.';
      setMicError(message);
    }
  };

  // Parar gravação de voz
  const handleStopRecording = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRecording(false);

    try {
      const result = await audioRecorder.stop();
      if (result.recognizedText) {
        setRecognizedText(result.recognizedText);
      }
      onRecordingComplete(result.audioUrl, result.recognizedText);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro ao finalizar a gravação.';
      setMicError(message);
    }
  };

  // Reproduzir própria voz
  const handlePlayOwnVoice = () => {
    if (!recordedAudioUrl) return;

    if (isPlayingOwn) {
      if (ownAudioRef.current) {
        ownAudioRef.current.pause();
        ownAudioRef.current.currentTime = 0;
      }
      setIsPlayingOwn(false);
      return;
    }

    stopSpeech();
    setIsPlayingModel(false);

    if (!ownAudioRef.current) {
      ownAudioRef.current = new Audio(recordedAudioUrl);
      ownAudioRef.current.onended = () => {
        if (isMountedRef.current) setIsPlayingOwn(false);
      };
      ownAudioRef.current.onerror = () => {
        if (isMountedRef.current) setIsPlayingOwn(false);
      };
    } else {
      ownAudioRef.current.src = recordedAudioUrl;
    }

    ownAudioRef.current.play().then(() => {
      setIsPlayingOwn(true);
    }).catch(() => {
      setIsPlayingOwn(false);
    });
  };

  const handleRedo = () => {
    if (isPlayingOwn && ownAudioRef.current) {
      ownAudioRef.current.pause();
    }
    setIsPlayingOwn(false);
    setRecognizedText(null);
    if (onClearRecording) {
      onClearRecording();
    }
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border border-white/90 shadow-soft-card space-y-6">
      {/* Model Audio Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#52456F] flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>Áudio Modelo em Inglês</span>
          </span>

          {/* Speed selector for model */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            {[
              { label: '0.8x', val: 0.8 },
              { label: '1.0x', val: 1.0 },
              { label: '1.2x', val: 1.2 }
            ].map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setModelSpeed(s.val)}
                className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                  modelSpeed === s.val
                    ? 'bg-[#176BFF] text-white shadow-xs'
                    : 'text-[#52456F] hover:text-[#160F2E]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Listen Model Button Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-[#160F2E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-slate-300 block">
              {isPlayingModel ? 'Reproduzindo pronúncia modelo...' : 'Ouça a pronúncia de referência:'}
            </span>
            <p className="text-sm font-semibold text-white/95 italic">
              "{question.modelAudioText}"
            </p>
          </div>

          <button
            type="button"
            onClick={handlePlayModel}
            aria-label={isPlayingModel ? 'Pausar áudio modelo' : 'Ouvir áudio modelo'}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#176BFF] hover:bg-[#1258d4] text-white font-extrabold text-xs sm:text-sm shadow-colored-blue transition active:scale-95 shrink-0 cursor-pointer"
          >
            {isPlayingModel ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>Ouvir Modelo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Voice Recording Interaction Area */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#52456F] flex items-center gap-1.5">
            <Mic className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>Sua Vez de Falar</span>
          </span>

          {recordedAudioUrl && (
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0A9B80] bg-[#DCF8F1] px-2.5 py-0.5 rounded-full border border-[#B6F5E8]">
              <CheckCircle2 className="w-3 h-3" />
              <span>Gravação salva</span>
            </span>
          )}
        </div>

        {/* Recording Controls Box */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-4">
          {/* Active Recording State */}
          {isRecording ? (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex items-center justify-center gap-2 text-rose-600 font-extrabold text-sm">
                <span className="w-3 h-3 rounded-full bg-rose-600 animate-ping" />
                <span>Gravando sua voz: {formatTimer(recordSeconds)}</span>
              </div>

              {/* Animated wave bars */}
              <div className="flex items-center justify-center gap-1.5 h-8">
                {[60, 95, 45, 100, 70, 85, 40, 90, 65, 80].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 rounded-full bg-rose-500 animate-pulse"
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleStopRecording}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-current" />
                <span>Parar Gravação</span>
              </button>
            </div>
          ) : !recordedAudioUrl ? (
            /* Idle: Ready to Record */
            <div className="space-y-3">
              <p className="text-xs text-[#52456F] font-medium max-w-sm mx-auto">
                Quando estiver pronto, clique no botão abaixo para gravar sua fala pelo microfone.
              </p>

              <button
                type="button"
                onClick={handleStartRecording}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-brand text-white font-black text-sm shadow-colored-blue hover:opacity-95 transition active:scale-95 cursor-pointer"
              >
                <Mic className="w-5 h-5" />
                <span>Gravar Minha Voz</span>
              </button>
            </div>
          ) : (
            /* Completed Recording: Comparison & Playback */
            <div className="space-y-4 animate-in fade-in">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#160F2E]">
                <Radio className="w-4 h-4 text-[#176BFF]" />
                <span>Gravação pronta para comparação:</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {/* Play Own Voice */}
                <button
                  type="button"
                  onClick={handlePlayOwnVoice}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer border ${
                    isPlayingOwn
                      ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                      : 'bg-white text-[#160F2E] border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isPlayingOwn ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlayingOwn ? 'Pausar Minha Voz' : 'Ouvir Minha Gravação'}</span>
                </button>

                {/* Replay Model Audio */}
                <button
                  type="button"
                  onClick={handlePlayModel}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E1ECFC] text-[#176BFF] hover:bg-[#cde0fa] font-bold text-xs sm:text-sm transition cursor-pointer border border-[#BED7FA]"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Ouvir Modelo Novamente</span>
                </button>

                {/* Re-record button */}
                <button
                  type="button"
                  onClick={handleRedo}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-[#52456F] font-bold text-xs transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Regravar</span>
                </button>
              </div>

              {/* Optional Recognized Speech Transcript */}
              {recognizedText && (
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-[#52456F] font-medium max-w-md mx-auto text-left space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#176BFF]">
                    <Sparkles className="w-3 h-3 text-[#176BFF]" />
                    <span>Reconhecimento aproximado de texto:</span>
                  </div>
                  <p className="font-semibold text-[#160F2E]">"{recognizedText}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Error Banner with Graceful Guidance */}
      {micError && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium space-y-2">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold">Aviso sobre o microfone:</strong>
              <p>{micError}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleStartRecording}
              className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 font-bold text-xs text-amber-900 hover:bg-amber-100 transition cursor-pointer"
            >
              Tentar Novamente
            </button>
            <button
              type="button"
              onClick={() => {
                onRecordingComplete('unrecorded:fallback');
                setMicError(null);
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition cursor-pointer"
            >
              Praticar em voz alta sem gravação
            </button>
          </div>
        </div>
      )}

      {/* Target Phrase & Pronunciation Advice Box */}
      <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/90 text-xs space-y-2">
        <div className="flex items-center justify-between">
          <strong className="text-indigo-950 font-extrabold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Frase de Treino e Orientações</span>
          </strong>
          {question.phoneticFocus && (
            <span className="text-[10px] font-bold bg-white text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-200">
              {question.phoneticFocus}
            </span>
          )}
        </div>

        <p className="text-sm font-black text-[#160F2E] leading-snug">
          "{question.targetPhrase || question.modelAudioText}"
        </p>

        {question.pronunciationTip && (
          <p className="text-[#362D59] font-medium leading-relaxed">
            💡 <strong>Dica de pronúncia:</strong> {question.pronunciationTip}
          </p>
        )}

        {question.translation && (
          <p className="text-[#52456F] text-[11px] pt-1 border-t border-indigo-100">
            <strong>Tradução:</strong> {question.translation}
          </p>
        )}
      </div>
    </div>
  );
};

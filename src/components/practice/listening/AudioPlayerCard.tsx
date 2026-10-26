import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Lock, 
  Sparkles, 
  Headphones,
  Users,
  Mic,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { ListeningTrack } from '../../../types/activity';
import { 
  speakEnglish, 
  stopSpeech, 
  pauseSpeech, 
  resumeSpeech, 
  isSpeechSupported,
  playDialogueSequence,
  speakDialogueLine,
  getDialogueVoicesCapability,
  inferSpeakerGender,
  DialoguePlaybackController
} from '../../../utils/speech';

interface AudioPlayerCardProps {
  track: ListeningTrack;
  activityTitle: string;
}

export const AudioPlayerCard: React.FC<AudioPlayerCardProps> = ({
  track,
  activityTitle
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [playCount, setPlayCount] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Estados específicos para diálogos multi-voz
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);
  const [playingSingleLineIndex, setPlayingSingleLineIndex] = useState<number | null>(null);
  const [showIndividualLines, setShowIndividualLines] = useState<boolean>(false);
  const [audioCapability, setAudioCapability] = useState(() => getDialogueVoicesCapability());

  const isMountedRef = useRef<boolean>(true);
  const dialogueControllerRef = useRef<DialoguePlaybackController | null>(null);

  const isDialogue = Boolean(track.dialogueLines && track.dialogueLines.length > 0);
  const dialogueLines = track.dialogueLines || [];

  // Mapeia os interlocutores únicos com gênero associado
  const interlocutors = useMemo(() => {
    if (!dialogueLines.length) return [];
    const map = new Map<string, { speaker: string; gender: 'male' | 'female' }>();
    dialogueLines.forEach((l) => {
      if (!map.has(l.speaker)) {
        map.set(l.speaker, {
          speaker: l.speaker,
          gender: inferSpeakerGender(l.speaker, l.gender)
        });
      }
    });
    return Array.from(map.values());
  }, [dialogueLines]);

  useEffect(() => {
    isMountedRef.current = true;
    
    // Atualiza capacidades caso vozes sejam carregadas assincronamente pelo navegador
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const updateCap = () => {
        if (isMountedRef.current) {
          setAudioCapability(getDialogueVoicesCapability());
        }
      };
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateCap;
      }
    }

    return () => {
      isMountedRef.current = false;
      stopSpeech();
    };
  }, []);

  // Para o áudio ao mudar de atividade
  useEffect(() => {
    stopSpeech();
    dialogueControllerRef.current = null;
    setIsPlaying(false);
    setIsPaused(false);
    setActiveLineIndex(null);
    setActiveSpeaker(null);
    setPlayingSingleLineIndex(null);
    setPlayCount(0);
    setErrorMessage(null);
  }, [track.spokenText]);

  const handlePlayOrResume = () => {
    setErrorMessage(null);

    if (!isSpeechSupported()) {
      setErrorMessage('A reprodução de áudio nativa não está disponível neste navegador.');
      return;
    }

    // Se estiver pausado, retoma
    if (isPaused) {
      if (isDialogue && dialogueControllerRef.current) {
        dialogueControllerRef.current.resume();
      } else {
        resumeSpeech();
      }
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // Se já havia fala isolada tocando, para
    if (playingSingleLineIndex !== null) {
      stopSpeech();
      setPlayingSingleLineIndex(null);
    }

    if (isDialogue) {
      // Reprodução sequencial do diálogo multi-voz com vozes atribuídas consistentemente
      dialogueControllerRef.current = playDialogueSequence(dialogueLines, {
        speedMultiplier: playbackSpeed,
        onLineStart: (index, line) => {
          if (!isMountedRef.current) return;
          setActiveLineIndex(index);
          setActiveSpeaker(line.speaker);
          setIsPlaying(true);
          setIsPaused(false);
        },
        onLineEnd: () => {
          if (!isMountedRef.current) return;
        },
        onComplete: () => {
          if (!isMountedRef.current) return;
          setIsPlaying(false);
          setIsPaused(false);
          setActiveLineIndex(null);
          setActiveSpeaker(null);
          dialogueControllerRef.current = null;
        },
        onError: (err: any) => {
          if (!isMountedRef.current) return;
          setIsPlaying(false);
          setIsPaused(false);
          setActiveLineIndex(null);
          setActiveSpeaker(null);
          dialogueControllerRef.current = null;
          if (err && err.error !== 'interrupted' && err.error !== 'canceled') {
            setErrorMessage('Não foi possível concluir o áudio do diálogo. Tente novamente.');
          }
        }
      });

      setIsPlaying(true);
      setIsPaused(false);
      setPlayCount((prev) => prev + 1);
    } else {
      // Reprodução de áudio monólogo/narração
      const baseRate = track.speechRate ?? 0.9;
      const finalRate = Math.min(1.5, Math.max(0.6, baseRate * playbackSpeed));

      const result = speakEnglish(track.spokenText, {
        rate: finalRate,
        onStart: () => {
          if (!isMountedRef.current) return;
          setIsPlaying(true);
          setIsPaused(false);
        },
        onEnd: () => {
          if (!isMountedRef.current) return;
          setIsPlaying(false);
          setIsPaused(false);
        },
        onError: (err) => {
          if (!isMountedRef.current) return;
          setIsPlaying(false);
          setIsPaused(false);
          if (err && err.error !== 'interrupted' && err.error !== 'canceled') {
            setErrorMessage('Não foi possível concluir o áudio. Tente novamente.');
          }
        }
      });

      if (result.success) {
        setIsPlaying(true);
        setIsPaused(false);
        setPlayCount((prev) => prev + 1);
      } else {
        setIsPlaying(false);
        setIsPaused(false);
        setErrorMessage(result.message || 'Erro ao iniciar áudio.');
      }
    }
  };

  const handlePause = () => {
    if (isDialogue && dialogueControllerRef.current) {
      dialogueControllerRef.current.pause();
    } else {
      pauseSpeech();
    }
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleRestart = () => {
    stopSpeech();
    dialogueControllerRef.current = null;
    setIsPaused(false);
    setIsPlaying(false);
    setActiveLineIndex(null);
    setActiveSpeaker(null);
    setPlayingSingleLineIndex(null);

    // Timeout para o sintetizador do navegador reiniciar completamente
    setTimeout(() => {
      if (!isMountedRef.current) return;
      handlePlayOrResume();
    }, 90);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    // Se estiver tocando, reinicia com a nova velocidade
    if (isPlaying) {
      stopSpeech();
      dialogueControllerRef.current = null;
      setIsPaused(false);
      setIsPlaying(false);
      setActiveLineIndex(null);
      setActiveSpeaker(null);
      setTimeout(() => {
        if (!isMountedRef.current) return;
        handlePlayOrResume();
      }, 90);
    }
  };

  // Reproduz uma fala individual do diálogo sob demanda
  const handlePlaySingleLine = (index: number) => {
    const line = dialogueLines[index];
    if (!line) return;

    // Se esta mesma fala já está tocando, para
    if (playingSingleLineIndex === index) {
      stopSpeech();
      setPlayingSingleLineIndex(null);
      return;
    }

    // Para áudio geral se estiver tocando
    if (isPlaying) {
      stopSpeech();
      dialogueControllerRef.current = null;
      setIsPlaying(false);
      setIsPaused(false);
      setActiveLineIndex(null);
      setActiveSpeaker(null);
    }

    setPlayingSingleLineIndex(index);

    const result = speakDialogueLine(line, undefined, {
      rate: playbackSpeed,
      onStart: () => {
        if (!isMountedRef.current) return;
        setPlayingSingleLineIndex(index);
      },
      onEnd: () => {
        if (!isMountedRef.current) return;
        setPlayingSingleLineIndex(null);
      },
      onError: () => {
        if (!isMountedRef.current) return;
        setPlayingSingleLineIndex(null);
      }
    });

    if (!result.success) {
      setPlayingSingleLineIndex(null);
      setErrorMessage(result.message || 'Não foi possível reproduzir a fala individual.');
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/90 shadow-soft-card space-y-6">
      {/* Header & Scenario */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[#E1ECFC] text-[#176BFF] flex items-center justify-center shrink-0">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#52456F] block">
              {isDialogue ? 'Diálogo com Vozes Distintas' : 'Áudio da Atividade'}
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#160F2E] leading-tight">
              {track.title || activityTitle}
            </h2>
          </div>
        </div>

        {track.scenario && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#52456F] border border-slate-200/80 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>{track.scenario}</span>
          </span>
        )}
      </div>

      {/* Interlocutors Banner (When dialogue) */}
      {isDialogue && interlocutors.length > 0 && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#160F2E]">
              <Users className="w-4 h-4 text-[#176BFF]" />
              <span>Interlocutores do Diálogo</span>
            </div>
            <span className="text-[11px] text-[#52456F] font-medium">
              Voz consistente por personagem
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {interlocutors.map((inter) => {
              const isSpeakingThis = isPlaying && activeSpeaker === inter.speaker;
              return (
                <div
                  key={inter.speaker}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSpeakingThis
                      ? 'bg-[#176BFF] text-white shadow-md ring-2 ring-[#176BFF]/40 scale-105'
                      : 'bg-white text-[#160F2E] border border-slate-200 shadow-xs'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSpeakingThis ? 'bg-amber-300 animate-ping' : inter.gender === 'female' ? 'bg-pink-400' : 'bg-blue-400'}`} />
                  <span>{inter.speaker}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                    isSpeakingThis ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#52456F]'
                  }`}>
                    {inter.gender === 'female' ? 'Voz Feminina' : 'Voz Masculina'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Central Audio Playback Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#160F2E] text-white space-y-5 shadow-inner">
        {/* Animated Wave / Status */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Volume2 className={`w-5 h-5 shrink-0 ${isPlaying ? 'text-[#176BFF] animate-pulse' : 'text-slate-400'}`} />
            <div className="min-w-0">
              <span className="text-xs font-bold text-slate-200 block truncate">
                {isPlaying ? (
                  activeSpeaker ? (
                    <span className="flex items-center gap-1.5 text-amber-300">
                      <Mic className="w-3.5 h-3.5 animate-bounce" />
                      <span>{activeSpeaker} falando agora {activeLineIndex !== null ? `(fala ${activeLineIndex + 1} de ${dialogueLines.length})` : ''}</span>
                    </span>
                  ) : (
                    'Reproduzindo áudio em inglês...'
                  )
                ) : isPaused ? (
                  'Áudio pausado'
                ) : (
                  'Pronto para ouvir o áudio'
                )}
              </span>
            </div>
          </div>

          {/* Waveform Bars Animation */}
          <div className="flex items-center gap-1 h-5 px-2 shrink-0">
            {[40, 75, 55, 95, 60, 85, 45, 90].map((h, i) => (
              <span
                key={i}
                style={{
                  height: isPlaying ? `${h}%` : '20%',
                  transition: 'height 0.18s ease'
                }}
                className={`w-1 rounded-full transition-all ${
                  isPlaying ? 'bg-[#176BFF]' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Play / Pause / Replay Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-1">
          {/* Main Play / Pause Button */}
          {isPlaying ? (
            <button
              type="button"
              onClick={handlePause}
              aria-label="Pausar áudio"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-lg transition active:scale-95 cursor-pointer"
            >
              <Pause className="w-5 h-5 fill-current" />
              <span>Pausar</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePlayOrResume}
              aria-label="Reproduzir áudio em inglês"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#176BFF] hover:bg-[#1258d4] text-white font-black text-sm shadow-colored-blue transition active:scale-95 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>
                {isPaused 
                  ? 'Continuar' 
                  : playCount > 0 
                  ? 'Ouvir Novamente' 
                  : isDialogue 
                  ? 'Ouvir Diálogo Completo' 
                  : 'Ouvir Áudio'}
              </span>
            </button>
          )}

          {/* Restart from beginning Button */}
          <button
            type="button"
            onClick={handleRestart}
            title="Recomeçar do início"
            aria-label="Recomeçar áudio do início"
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition active:scale-95 cursor-pointer border border-white/10"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Recomeçar</span>
          </button>
        </div>

        {/* Bottom meta: Counter & Speed Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-white/10 text-xs">
          {/* Play count */}
          <span className="text-slate-400 font-medium">
            {playCount === 0 ? (
              'Você ainda não ouviu este áudio'
            ) : (
              <span>
                Áudio escutado <strong className="text-white">{playCount} {playCount === 1 ? 'vez' : 'vezes'}</strong>
              </span>
            )}
          </span>

          {/* Speed selector */}
          <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/10">
            <span className="text-[10px] uppercase font-bold text-slate-400 px-1.5">
              Velocidade:
            </span>
            {[
              { label: '0.8x', value: 0.8 },
              { label: '1.0x', value: 1.0 },
              { label: '1.2x', value: 1.2 }
            ].map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => handleSpeedChange(s.value)}
                className={`px-2 py-0.5 rounded-lg text-xs font-bold transition ${
                  playbackSpeed === s.value
                    ? 'bg-[#176BFF] text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technical strategy note */}
        {isDialogue && (
          <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400">
            <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>
              Síntese nativa: {audioCapability.strategyDescription}
            </span>
          </div>
        )}
      </div>

      {/* Individual Line Playback Section (Dialogue only) */}
      {isDialogue && dialogueLines.length > 0 && (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/60">
          <button
            type="button"
            onClick={() => setShowIndividualLines((prev) => !prev)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-100/70 transition cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4 text-[#176BFF]" />
              <span className="text-xs font-bold text-[#160F2E]">
                Treinar Falas Individuais ({dialogueLines.length} falas)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#52456F]">
              <span>{showIndividualLines ? 'Ocultar' : 'Praticar cada fala'}</span>
              {showIndividualLines ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </button>

          {showIndividualLines && (
            <div className="p-4 pt-1 space-y-2 border-t border-slate-200/60">
              <p className="text-[11px] text-[#52456F] font-medium mb-2">
                Ouça novamente cada fala de forma isolada com a voz do personagem, sem revelar o texto escrito antes de responder:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dialogueLines.map((line, idx) => {
                  const isCurrentSingle = playingSingleLineIndex === idx;
                  const isLineInDialogue = isPlaying && activeLineIndex === idx;
                  const gender = inferSpeakerGender(line.speaker, line.gender);

                  return (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Ouvir fala ${idx + 1}: ${line.speaker}`}
                      onClick={() => handlePlaySingleLine(idx)}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-left border transition text-xs ${
                        isCurrentSingle || isLineInDialogue
                          ? 'bg-[#176BFF] text-white border-[#176BFF] shadow-xs'
                          : 'bg-white text-[#160F2E] border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[11px] ${
                          isCurrentSingle || isLineInDialogue ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#52456F]'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <span className="font-bold block">{line.speaker}</span>
                          <span className={`text-[10px] ${
                            isCurrentSingle || isLineInDialogue ? 'text-blue-100' : 'text-[#52456F]'
                          }`}>
                            {gender === 'female' ? 'Voz Feminina' : 'Voz Masculina'}
                          </span>
                        </div>
                      </div>

                      <div className={`p-1.5 rounded-lg ${
                        isCurrentSingle || isLineInDialogue ? 'bg-white/20' : 'bg-slate-100'
                      }`}>
                        {isCurrentSingle ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Error Banner */}
      {errorMessage && (
        <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
          <VolumeX className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Pedagogical Notice: Transcript Locked */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-[#52456F] font-medium flex items-start gap-2.5">
        <Lock className="w-4 h-4 text-[#176BFF] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="font-bold text-[#160F2E]">
            Transcrição oculta durante o exercício
          </p>
          <p>
            Para treinar sua habilidade de escuta real, o texto falado e a tradução completa serão revelados após você concluir a atividade.
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Lock, 
  Sparkles, 
  Headphones 
} from 'lucide-react';
import { ListeningTrack } from '../../../types/activity';
import { 
  speakEnglish, 
  stopSpeech, 
  pauseSpeech, 
  resumeSpeech, 
  isSpeechSupported 
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

  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      stopSpeech();
    };
  }, []);

  // Para a fala ao mudar de atividade
  useEffect(() => {
    stopSpeech();
    setIsPlaying(false);
    setIsPaused(false);
    setPlayCount(0);
    setErrorMessage(null);
  }, [track.spokenText]);

  const handlePlayOrResume = () => {
    setErrorMessage(null);

    if (!isSpeechSupported()) {
      setErrorMessage('A reprodução de áudio nativa não está disponível neste navegador.');
      return;
    }

    if (isPaused) {
      resumeSpeech();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // Inicia nova reprodução do início
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
  };

  const handlePause = () => {
    pauseSpeech();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleRestart = () => {
    stopSpeech();
    setIsPaused(false);
    setIsPlaying(false);

    // Pequeno timeout para o sintetizador resetar no navegador
    setTimeout(() => {
      if (!isMountedRef.current) return;
      handlePlayOrResume();
    }, 80);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    // Se estiver tocando, reinicia com a nova velocidade
    if (isPlaying) {
      stopSpeech();
      setIsPaused(false);
      setIsPlaying(false);
      setTimeout(() => {
        if (!isMountedRef.current) return;
        const baseRate = track.speechRate ?? 0.9;
        const finalRate = Math.min(1.5, Math.max(0.6, baseRate * speed));
        speakEnglish(track.spokenText, {
          rate: finalRate,
          onStart: () => setIsPlaying(true),
          onEnd: () => setIsPlaying(false),
          onError: () => setIsPlaying(false)
        });
        setIsPlaying(true);
      }, 80);
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
              Áudio da Atividade
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

      {/* Central Audio Playback Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#160F2E] text-white space-y-5 shadow-inner">
        {/* Animated Wave / Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className={`w-5 h-5 ${isPlaying ? 'text-[#176BFF] animate-pulse' : 'text-slate-400'}`} />
            <span className="text-xs font-bold text-slate-300">
              {isPlaying 
                ? 'Reproduzindo áudio em inglês...' 
                : isPaused 
                ? 'Áudio pausado' 
                : 'Pronto para ouvir'}
            </span>
          </div>

          {/* Waveform Bars Animation */}
          <div className="flex items-center gap-1 h-5 px-2">
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
              <span>{isPaused ? 'Continuar' : playCount > 0 ? 'Ouvir Novamente' : 'Ouvir Áudio'}</span>
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
      </div>

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

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speakText, isSpeechSupported, formatTextForSpeech, warmUpSpeech } from '../utils/speech';
import { LoadingIndicator } from './shared/LoadingIndicator';

interface PronounceButtonProps {
  text: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
  showLabel?: boolean;
  lang?: 'en' | 'pt';
}

export const PronounceButton: React.FC<PronounceButtonProps> = ({
  text,
  className = '',
  size = 'sm',
  showLabel = false,
  lang = 'en'
}) => {
  const [isPreparing, setIsPreparing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const safetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const supported = isSpeechSupported();
  const speechLabel = formatTextForSpeech(text);

  // Limpa timeouts ao desmontar
  useEffect(() => {
    return () => {
      if (safetyTimeoutRef.current) {
        clearTimeout(safetyTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!supported) {
      setErrorNotice('Áudio indisponível neste navegador');
      setTimeout(() => setErrorNotice(null), 2500);
      return;
    }

    // Feedback visual imediato antes da inicialização do áudio
    setIsPreparing(true);
    setIsPlaying(false);
    setErrorNotice(null);

    // Timeout de segurança para evitar que o botão fique preso se o navegador falhar
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    safetyTimeoutRef.current = setTimeout(() => {
      setIsPreparing(false);
      setIsPlaying(false);
    }, 6000);

    const result = speakText(text, lang, {
      onStart: () => {
        setIsPreparing(false);
        setIsPlaying(true);
      },
      onEnd: () => {
        setIsPreparing(false);
        setIsPlaying(false);
        if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      },
      onError: () => {
        setIsPreparing(false);
        setIsPlaying(false);
        if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
        setErrorNotice('Falha na reprodução');
        setTimeout(() => setErrorNotice(null), 2500);
      }
    });

    if (!result.success) {
      setIsPreparing(false);
      setIsPlaying(false);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      setErrorNotice(result.message || 'Falha na pronúncia');
      setTimeout(() => setErrorNotice(null), 2500);
    }
  };

  // Pré-aquece o sintetizador de voz ao aproximar o mouse ou iniciar toque
  const handlePreWarm = () => {
    warmUpSpeech();
  };

  // Classes dimensionais com garantia de que botões com texto "Ouvir" nunca truncam nem quebram
  const sizeClasses = showLabel
    ? {
        xs: 'h-7 px-2.5 py-1 text-xs gap-1.5 min-w-[68px]',
        sm: 'h-8 px-3 py-1.5 text-xs gap-1.5 min-w-[76px]',
        md: 'h-9 px-3.5 py-2 text-xs sm:text-sm gap-2 min-w-[86px]'
      }[size]
    : {
        xs: 'w-7 h-7 min-w-[28px] min-h-[28px] p-1 text-xs',
        sm: 'w-8 h-8 min-w-[32px] min-h-[32px] p-1.5 text-xs',
        md: 'w-9 h-9 min-w-[36px] min-h-[36px] p-2 text-sm'
      }[size];

  // Estado visual do botão
  let stateClasses = 'bg-white/85 text-[#2446C8] hover:text-[#176BFF] hover:bg-[#E1ECFC] border border-[#BED7FA]/70 hover:border-[#176BFF]/40 shadow-2xs';

  if (isPlaying) {
    stateClasses = 'bg-[#176BFF] text-white border-[#176BFF] shadow-colored-blue';
  } else if (isPreparing) {
    stateClasses = 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA] animate-pulse';
  } else if (errorNotice) {
    stateClasses = 'bg-[#FFF0F6] text-[#F52E91] border-[#FFD0E5]';
  }

  return (
    <div className="relative inline-flex items-center shrink-0">
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={handlePreWarm}
        onTouchStart={handlePreWarm}
        title={
          errorNotice
            ? errorNotice
            : !supported
            ? 'Síntese de voz não suportada'
            : isPlaying
            ? `Reproduzindo "${speechLabel}"...`
            : isPreparing
            ? 'Preparando áudio...'
            : `Ouvir pronúncia de "${speechLabel}"`
        }
        aria-label={
          isPlaying
            ? `Reproduzindo pronúncia de ${speechLabel}`
            : isPreparing
            ? `Preparando áudio de ${speechLabel}`
            : `Ouvir pronúncia de ${speechLabel}`
        }
        className={`inline-flex items-center justify-center rounded-xl font-bold transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176BFF] focus-visible:ring-offset-1 select-none whitespace-nowrap ${sizeClasses} ${stateClasses} ${className}`}
      >
        {!supported ? (
          <VolumeX className="w-3.5 h-3.5 opacity-40 text-[#645A82]" />
        ) : isPreparing ? (
          <LoadingIndicator size="xs" variant={isPlaying ? 'white' : 'brand'} />
        ) : (
          <Volume2
            className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
              isPlaying ? 'scale-110 text-white animate-pulse' : ''
            }`}
          />
        )}

        {showLabel && (
          <span className="font-bold text-xs leading-none shrink-0 truncate">
            {isPreparing ? 'Preparando...' : isPlaying ? 'Ouvindo...' : 'Ouvir'}
          </span>
        )}
      </button>

      {errorNotice && (
        <span
          role="status"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap bg-[#1E1538] text-white text-[11px] font-semibold px-2 py-1 rounded-md shadow-lg z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {errorNotice}
        </span>
      )}
    </div>
  );
};

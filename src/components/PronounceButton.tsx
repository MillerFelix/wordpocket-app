import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speakEnglish, isSpeechSupported, formatTextForSpeech } from '../utils/speech';

interface PronounceButtonProps {
  text: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
  showLabel?: boolean;
}

export const PronounceButton: React.FC<PronounceButtonProps> = ({
  text,
  className = '',
  size = 'sm',
  showLabel = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const supported = isSpeechSupported();
  const speechLabel = formatTextForSpeech(text);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!supported) {
      setErrorNotice('Áudio indisponível neste navegador');
      setTimeout(() => setErrorNotice(null), 2500);
      return;
    }

    const result = speakEnglish(text);
    if (!result.success) {
      setErrorNotice(result.message || 'Falha na pronúncia');
      setTimeout(() => setErrorNotice(null), 2500);
      return;
    }

    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 800);
  };

  const sizeClasses = {
    xs: 'w-6 h-6 p-1 text-xs',
    sm: 'w-7 h-7 p-1 text-xs',
    md: 'h-8 px-2.5 py-1 text-xs gap-1.5'
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleClick}
        title={
          errorNotice
            ? errorNotice
            : !supported
            ? 'Síntese de voz não suportada'
            : `Ouvir pronúncia de "${speechLabel}"`
        }
        aria-label={`Ouvir pronúncia de ${speechLabel}`}
        className={`inline-flex items-center justify-center rounded-xl font-medium transition-all duration-150 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176BFF]/40 select-none ${
          sizeClasses[size]
        } ${
          isPlaying
            ? 'bg-[#176BFF] text-white shadow-sm shadow-[#176BFF]/30 scale-105'
            : 'text-[#2446C8] hover:text-[#176BFF] hover:bg-[#E1ECFC] active:bg-[#BED7FA] border border-transparent hover:border-[#BED7FA]'
        } ${className}`}
      >
        {!supported ? (
          <VolumeX className="w-3.5 h-3.5 opacity-40 text-[#645A82]" />
        ) : (
          <Volume2 className={`w-3.5 h-3.5 transition-transform ${isPlaying ? 'scale-110' : ''}`} />
        )}
        {showLabel && <span className="font-semibold text-xs ml-1">Ouvir</span>}
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

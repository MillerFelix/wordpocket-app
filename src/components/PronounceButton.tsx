import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

interface PronounceButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const PronounceButton: React.FC<PronounceButtonProps> = ({
  text,
  className = '',
  size = 'sm'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
    speakEnglish(text);
    setTimeout(() => setIsPlaying(false), 900);
  };

  const isSmall = size === 'sm';

  return (
    <button
      type="button"
      onClick={handleClick}
      title={`Ouvir pronúncia de "${text}"`}
      aria-label={`Ouvir pronúncia de ${text}`}
      className={`inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition active:scale-90 ${
        isSmall ? 'w-7 h-7 p-1' : 'w-9 h-9 p-2'
      } ${isPlaying ? 'text-indigo-600 bg-indigo-50 scale-105' : ''} ${className}`}
    >
      <Volume2 className={isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
    </button>
  );
};

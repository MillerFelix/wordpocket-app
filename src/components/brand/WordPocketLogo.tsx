import React, { useId } from 'react';

export interface WordPocketLogoProps {
  /**
   * 'horizontal' renders symbol + 'Word Pocket' logotype
   * 'icon' renders symbol only
   */
  variant?: 'horizontal' | 'icon';
  /**
   * Preset sizing
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Optional subtitle/tagline under Word Pocket in horizontal layout
   */
  showSubtitle?: boolean;
  subtitleText?: string;
  /**
   * Optional badge displayed beside 'Pocket' (e.g. 'PWA')
   */
  badge?: string;
  /**
   * For dark backgrounds (inverts 'Word' to white)
   */
  inverted?: boolean;
  /**
   * Custom CSS wrapper classes
   */
  className?: string;
}

export const WordPocketLogo: React.FC<WordPocketLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showSubtitle = false,
  subtitleText = 'Estudo Inteligente de Inglês',
  badge,
  inverted = false,
  className = '',
}) => {
  // Generate unique ID per instance so gradient references never break across responsive breakpoints
  const rawId = useId();
  const gradientId = `wp-pulse-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  // Dimensions mapping
  const symbolSizeMap = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizeMap = {
    sm: 'text-sm sm:text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const subtitleSizeMap = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  // SVG Symbol: Blue Pulse Palette
  // Cyan: #26D9FF | Electric Blue: #176BFF | Intense Violet: #6545F5
  const symbolSvg = (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_3px_10px_rgba(23,107,255,0.35)] select-none shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="12%" y1="8%" x2="88%" y2="92%">
          <stop offset="0%" stopColor="#26D9FF" />
          <stop offset="46%" stopColor="#176BFF" />
          <stop offset="100%" stopColor="#6545F5" />
        </linearGradient>
      </defs>
      {/* Speech bubble silhouette */}
      <path
        d="M144 72 H368 C424 72 456 104 456 160 V288 C456 344 424 376 368 376 H224 L144 440 C132 448 116 440 116 424 V376 C76 372 56 348 56 304 V160 C56 104 88 72 144 72 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Open book / language study pages in negative space */}
      <path
        d="M168 188 C206 172 242 184 251 202 C253 206 253 306 253 306 C242 290 206 278 168 294 C158 298 148 290 148 280 V202 C148 192 158 184 168 188 Z"
        fill="#FFFFFF"
      />
      <path
        d="M344 188 C306 172 270 184 261 202 C259 206 259 306 259 306 C270 290 306 278 344 294 C354 298 364 290 364 280 V202 C364 192 354 184 344 188 Z"
        fill="#FFFFFF"
        fillOpacity="0.95"
      />
      {/* Language beacon / bookmark notch spark */}
      <circle cx="256" cy="164" r="16" fill="#FFFFFF" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${symbolSizeMap[size]} ${className}`}>
        {symbolSvg}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 shrink-0 select-none ${className}`}>
      {/* Brand Icon Mark */}
      <div className={`relative shrink-0 flex items-center justify-center ${symbolSizeMap[size]}`}>
        {symbolSvg}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
          <span
            className={`font-black tracking-tight ${
              inverted ? 'text-white' : 'text-[#160F2E]'
            } ${titleSizeMap[size]}`}
          >
            Word
          </span>
          <span
            className={`font-black bg-gradient-to-r from-[#176BFF] via-[#2446C8] to-[#6545F5] bg-clip-text text-transparent ${titleSizeMap[size]}`}
          >
            Pocket
          </span>
          {badge && (
            <span className="text-[9px] font-bold uppercase tracking-wider bg-white/90 text-[#176BFF] px-1.5 py-0.5 rounded-full border border-[#BED7FA] shadow-2xs">
              {badge}
            </span>
          )}
        </div>

        {showSubtitle && (
          <p
            className={`font-bold tracking-wide mt-0.5 hidden xs:block ${
              inverted ? 'text-[#C5BDE0]' : 'text-[#2446C8]'
            } ${subtitleSizeMap[size]}`}
          >
            {subtitleText}
          </p>
        )}
      </div>
    </div>
  );
};

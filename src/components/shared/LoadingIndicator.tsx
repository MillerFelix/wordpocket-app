import React from 'react';

export type LoadingIndicatorSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LoadingIndicatorVariant = 'brand' | 'white' | 'subtle';

export interface LoadingIndicatorProps {
  size?: LoadingIndicatorSize;
  variant?: LoadingIndicatorVariant;
  label?: string;
  labelPosition?: 'bottom' | 'right';
  className?: string;
  fullScreen?: boolean;
}

const sizeConfig: Record<LoadingIndicatorSize, { dim: string; stroke: number; text: string; dot: string }> = {
  xs: { dim: 'w-3.5 h-3.5', stroke: 3, text: 'text-[11px]', dot: 'w-1 h-1' },
  sm: { dim: 'w-4 h-4', stroke: 3, text: 'text-xs', dot: 'w-1 h-1' },
  md: { dim: 'w-6 h-6', stroke: 3.2, text: 'text-xs sm:text-sm', dot: 'w-1.5 h-1.5' },
  lg: { dim: 'w-9 h-9', stroke: 3.5, text: 'text-sm font-bold', dot: 'w-2 h-2' },
  xl: { dim: 'w-12 h-12', stroke: 3.8, text: 'text-base font-extrabold', dot: 'w-2.5 h-2.5' }
};

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'md',
  variant = 'brand',
  label,
  labelPosition = 'bottom',
  className = '',
  fullScreen = false
}) => {
  const current = sizeConfig[size];
  const isHorizontal = labelPosition === 'right';
  const showCenterDot = size === 'md' || size === 'lg' || size === 'xl';

  // Paleta de cores com base na identidade visual azul do Word Pocket
  const trackStroke =
    variant === 'white'
      ? 'stroke-white/20'
      : variant === 'subtle'
      ? 'stroke-slate-200'
      : 'stroke-[#176BFF]/15';

  const arcStroke =
    variant === 'white'
      ? 'stroke-white'
      : variant === 'subtle'
      ? 'stroke-[#52456F]'
      : 'stroke-[#176BFF]';

  const labelColor =
    variant === 'white'
      ? 'text-white'
      : variant === 'subtle'
      ? 'text-[#52456F]'
      : 'text-[#160F2E]';

  const dotColor =
    variant === 'white'
      ? 'bg-white'
      : variant === 'subtle'
      ? 'bg-[#52456F]'
      : 'bg-[#26D9FF] shadow-[0_0_8px_#176BFF]';

  const content = (
    <div
      role="status"
      aria-live="polite"
      className={`inline-flex items-center justify-center ${
        isHorizontal ? 'flex-row gap-2.5' : 'flex-col gap-2'
      } ${className}`}
    >
      <div className={`relative ${current.dim} flex items-center justify-center shrink-0`}>
        <svg
          className="w-full h-full animate-spin motion-reduce:animate-none"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Anel base suave */}
          <circle
            cx="16"
            cy="16"
            r="12"
            className={trackStroke}
            strokeWidth={current.stroke}
          />
          {/* Arco animado com bordas arredondadas e gradiente visual */}
          <path
            d="M16 4 A12 12 0 0 1 28 16"
            className={arcStroke}
            strokeWidth={current.stroke}
            strokeLinecap="round"
          />
        </svg>

        {/* Ponto luminoso central característico do Word Pocket em tamanhos médios e grandes */}
        {showCenterDot && (
          <span
            className={`absolute ${current.dot} rounded-full ${dotColor} animate-pulse motion-reduce:animate-none`}
            aria-hidden="true"
          />
        )}
      </div>

      {label ? (
        <span className={`${current.text} ${labelColor} font-semibold tracking-tight text-center select-none`}>
          {label}
        </span>
      ) : (
        <span className="sr-only">Carregando...</span>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
        <div className="bg-white/90 p-6 rounded-3xl border border-white/90 shadow-soft-card max-w-xs w-full text-center">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

// Exporta também com o nome alternativo WordPocketSpinner para flexibilidade semântica
export const WordPocketSpinner = LoadingIndicator;

import React from 'react';
import { Sparkles } from 'lucide-react';

interface ActivityProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  answeredCount?: number;
  label?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const ActivityProgressBar: React.FC<ActivityProgressBarProps> = ({
  currentIndex,
  totalQuestions,
  answeredCount,
  label,
  gradientFrom = '#FF7A4D',
  gradientTo = '#FF5B26'
}) => {
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="space-y-2 pb-4 border-b border-slate-100">
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="text-[#E04D1B] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5B26]" />
          <span>Questão {currentIndex + 1} de {totalQuestions}</span>
        </span>
        <span className="text-[#52456F]">
          {label ?? (answeredCount !== undefined ? `${answeredCount} de ${totalQuestions} respondidas` : `${progressPercent}% concluído`)}
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${progressPercent}%`,
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
          }}
        />
      </div>
    </div>
  );
};

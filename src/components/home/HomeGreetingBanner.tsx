import React from 'react';
import { Sparkles } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const HomeGreetingBanner: React.FC = () => {
  const { user, profile } = useAuth();
  const rawName = profile?.displayName || user?.displayName;
  const firstName = rawName ? rawName.split(' ')[0] : null;
  const greetingTitle = firstName ? `Olá, ${firstName}! 👋` : 'Olá! Bem-vindo ao Word Pocket 👋';

  return (
    <>
      {/* Mobile Top Greeting Card with Rocket Illustration (Blue Pulse Palette) */}
      <div className="md:hidden relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D4E5FE] via-[#E1ECFC] to-[#CFE2FE] p-5 border border-white/90 shadow-soft-card">
        <div className="relative z-10 max-w-[70%]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 text-[#176BFF] text-[11px] font-bold mb-2 shadow-2xs border border-[#BED7FA]">
            <Sparkles className="w-3.5 h-3.5 text-[#26D9FF]" />
            <span>Bem-vindo ao Word Pocket</span>
          </div>
          <h1 className="text-xl font-extrabold text-[#160F2E] tracking-tight">
            {greetingTitle}
          </h1>
          <p className="text-xs font-semibold text-[#52456F] mt-1 leading-snug">
            Que bom te ver por aqui! Seu inglês te leva mais longe.
          </p>
        </div>

        {/* Decorative Floating Rocket SVG Illustration */}
        <div className="absolute right-2 -bottom-1 pointer-events-none w-28 h-28 opacity-95">
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
          >
            {/* Soft Pastel Clouds */}
            <ellipse cx="60" cy="100" rx="36" ry="12" fill="#BED7FA" />
            <ellipse cx="40" cy="98" rx="20" ry="10" fill="#D4E5FE" />
            <ellipse cx="80" cy="98" rx="22" ry="10" fill="#D4E5FE" />

            {/* Rocket Body */}
            <g transform="rotate(-35 60 55)">
              {/* Rocket Thruster Flame */}
              <path d="M54 85 Q60 102 66 85 Z" fill="url(#flameGrad)" />
              <path d="M57 85 Q60 94 63 85 Z" fill="#FFE5F0" />

              {/* Wings */}
              <path d="M42 66 C42 66 38 78 48 80 L52 70 Z" fill="#26D9FF" />
              <path d="M78 66 C78 66 82 78 72 80 L68 70 Z" fill="#26D9FF" />

              {/* Main Fuselage */}
              <path
                d="M50 38 C50 24 60 16 60 16 C60 16 70 24 70 38 L70 76 C70 79 66 82 60 82 C54 82 50 79 50 76 Z"
                fill="url(#rocketGrad)"
              />

              {/* Window */}
              <circle cx="60" cy="44" r="7" fill="white" stroke="#176BFF" strokeWidth="2.5" />
              <circle cx="60" cy="44" r="4.5" fill="#26D9FF" />
              <circle cx="58" cy="42" r="1.5" fill="white" />

              {/* Decorative stripes */}
              <path d="M50 64 L70 64" stroke="#F52E91" strokeWidth="2.5" />
            </g>

            {/* Sparkles / Stars */}
            <circle cx="95" cy="25" r="2.5" fill="#26D9FF" />
            <path d="M22 45 L25 48 L22 51 L19 48 Z" fill="#176BFF" />
            <circle cx="28" cy="20" r="1.5" fill="#2446C8" />

            <defs>
              <linearGradient
                id="rocketGrad"
                x1="50"
                y1="16"
                x2="70"
                y2="82"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#176BFF" />
                <stop offset="1" stopColor="#26D9FF" />
              </linearGradient>
              <linearGradient
                id="flameGrad"
                x1="54"
                y1="85"
                x2="66"
                y2="102"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6534" />
                <stop offset="1" stopColor="#F52E91" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Desktop / Tablet Header Greeting Banner (Blue Pulse Landscape) */}
      <div className="hidden md:block relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#D4E5FE] via-[#E1ECFC] to-[#CFE2FE] p-7 border border-white/90 shadow-soft-card">
        <div className="flex items-center justify-between">
          <div className="max-w-xl space-y-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-[#176BFF] text-xs font-bold border border-[#BED7FA] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#26D9FF]" />
              <span>Painel de Aprendizagem Ativa</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#160F2E] tracking-tight">
              {greetingTitle}
            </h1>
            <p className="text-sm text-[#52456F] font-medium leading-relaxed">
              Aprenda, explore e evolua no seu ritmo. Seu inglês te leva mais longe a cada consulta no Word Pocket.
            </p>
          </div>

          {/* Badge Sticker & Landscape SVG Art */}
          <div className="flex items-center gap-4 z-10">
            <div className="hidden lg:flex flex-col items-center justify-center bg-white/95 px-4 py-2.5 rounded-2xl border border-white/90 shadow-sm transform rotate-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#176BFF]">
                Better English
              </span>
              <span className="text-xs font-black text-[#160F2E]">Bigger Dreams ✨</span>
            </div>
          </div>
        </div>

        {/* Ambient Neon Candy Landscape SVG Background */}
        <div className="absolute right-0 bottom-0 pointer-events-none w-80 h-32 opacity-75">
          <svg
            viewBox="0 0 320 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path d="M120 120 C160 50 220 70 270 120 Z" fill="#B6F5E8" />
            <path d="M180 120 C220 40 280 60 330 120 Z" fill="#EDE6FA" />
            <path d="M240 120 C270 65 310 75 340 120 Z" fill="#FFE5F0" opacity="0.8" />
            <circle cx="280" cy="35" r="14" fill="#FFD447" opacity="0.6" />
          </svg>
        </div>
      </div>
    </>
  );
};

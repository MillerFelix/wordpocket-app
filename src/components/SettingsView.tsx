import React from 'react';
import { Settings, ShieldCheck, Volume2, Smartphone, User as UserIcon, HelpCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const SettingsView: React.FC = () => {
  const { user, signOut, openAuthModal, openOnboarding } = useAuth();
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-start gap-3.5 pb-1">
        <div className="w-11 h-11 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-colored-blue shrink-0 ring-4 ring-white/80">
          <Settings className="w-5 h-5 stroke-[2.3]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#176BFF]">
              Preferências
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
            Configurações
          </h1>
          <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-1">
            Personalize sua experiência de estudo, áudio e funcionamento offline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
          <h2 className="text-sm font-extrabold text-[#160F2E] flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#176BFF]" />
            Síntese de Voz & Áudio
          </h2>
          <div className="space-y-3 text-xs text-[#52456F]">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/70 border border-white/80 shadow-2xs">
              <div>
                <strong className="text-[#160F2E] block font-bold">Voz padrão</strong>
                <span>Inglês Americano (en-US) nativo</span>
              </div>
              <span className="text-[11px] font-bold text-[#0A9B80] bg-[#DCF8F1] px-2 py-0.5 rounded-lg border border-[#B6F5E8]">
                Ativo
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/70 border border-white/80 shadow-2xs">
              <div>
                <strong className="text-[#160F2E] block font-bold">Velocidade de pronúncia</strong>
                <span>0.9x (Ideal para articulação e aprendizado)</span>
              </div>
              <span className="text-[11px] font-bold text-[#6938F5] bg-[#EAE1FD] px-2 py-0.5 rounded-lg border border-white/90">
                Otimizado
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
          <h2 className="text-sm font-extrabold text-[#160F2E] flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#19D9B4]" />
            PWA & Funcionamento Offline
          </h2>
          <div className="space-y-3 text-xs text-[#52456F]">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/70 border border-white/80 shadow-2xs">
              <div>
                <strong className="text-[#160F2E] block font-bold">Armazenamento local</strong>
                <span>Dados de verbos e dicionário carregados</span>
              </div>
              <span className="text-[11px] font-bold text-[#0A9B80] bg-[#DCF8F1] px-2 py-0.5 rounded-lg border border-[#B6F5E8]">
                100% Offline
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/70 border border-white/80 shadow-2xs">
              <div>
                <strong className="text-[#160F2E] block font-bold">Privacidade</strong>
                <span>Sem coleta de telemetria ou rastreamento</span>
              </div>
              <ShieldCheck className="w-4 h-4 text-[#0A9B80]" />
            </div>
          </div>
        </div>

        {/* Conta & Onboarding */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4 md:col-span-2">
          <h2 className="text-sm font-extrabold text-[#160F2E] flex items-center gap-2">
            <UserIcon className="w-4 h-4 text-[#176BFF]" />
            Conta & Guia Inicial
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#52456F]">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/70 border border-white/80 shadow-2xs">
              <div>
                <strong className="text-[#160F2E] block font-bold">Estado da sessão</strong>
                <span>{user ? `Conectado como ${user.email}` : 'Navegando no modo visitante'}</span>
              </div>
              {user ? (
                <button
                  type="button"
                  onClick={signOut}
                  className="text-xs font-bold text-[#F52E91] hover:underline cursor-pointer"
                >
                  Sair
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openAuthModal('login')}
                  className="text-xs font-bold text-[#176BFF] hover:underline cursor-pointer"
                >
                  Entrar
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={openOnboarding}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-white/80 shadow-2xs transition text-left cursor-pointer group"
            >
              <div>
                <strong className="text-[#160F2E] block font-bold">Tutorial de Boas-Vindas</strong>
                <span>Rever apresentação das 4 habilidades e do desenvolvedor</span>
              </div>
              <HelpCircle className="w-4 h-4 text-[#176BFF] group-hover:scale-110 transition-transform shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

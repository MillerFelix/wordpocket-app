import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Languages, 
  BookMarked, 
  Compass, 
  Download, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  ExternalLink, 
  CheckCircle2, 
  Wifi, 
  Laptop, 
  Smartphone,
  Apple
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { usePwaInstall } from '../../hooks/usePwaInstall';
import { WordPocketLogo } from '../brand/WordPocketLogo';

interface OnboardingStep {
  id: string;
  tabLabel: string;
  stepNumber: number;
  indicator: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.88a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

export const OnboardingModal: React.FC = () => {
  const { isOnboardingOpen, closeOnboarding, completeOnboarding } = useAuth();
  const { canInstall, isInstalled, isIOS, isAndroid, promptInstall } = usePwaInstall();
  const [currentStep, setCurrentStep] = useState(0);
  const [photoError, setPhotoError] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // Seleção de dispositivo na aba de instalação, priorizando o dispositivo atual
  const [selectedDevice, setSelectedDevice] = useState<'android' | 'ios' | 'desktop'>('desktop');

  // Ajusta o dispositivo padrão e reinicia para a primeira etapa sempre que o modal abrir
  useEffect(() => {
    if (isOnboardingOpen) {
      setCurrentStep(0);
      if (isIOS) {
        setSelectedDevice('ios');
      } else if (isAndroid) {
        setSelectedDevice('android');
      } else {
        setSelectedDevice('desktop');
      }
    }
  }, [isOnboardingOpen, isIOS, isAndroid]);

  if (!isOnboardingOpen) return null;

  const handleInstallClick = async () => {
    setIsInstalling(true);
    try {
      await promptInstall();
    } finally {
      setIsInstalling(false);
    }
  };

  const steps: OnboardingStep[] = [
    {
      /* ABA 1: CONHEÇA O APP */
      id: 'features',
      tabLabel: 'Conheça o app',
      stepNumber: 1,
      indicator: 'Etapa 1 de 3',
      tag: 'Conheça o app',
      title: 'Bem-vindo ao Word Pocket!',
      subtitle: 'Tudo o que você precisa para aprender, praticar e consultar inglês em um só lugar.',
      icon: Sparkles,
      iconBg: 'bg-gradient-brand',
      iconColor: 'text-white'
    },
    {
      /* ABA 2: INSTALAÇÃO */
      id: 'install',
      tabLabel: 'Instalação',
      stepNumber: 2,
      indicator: 'Etapa 2 de 3',
      tag: 'Instalação em Qualquer Dispositivo',
      title: 'Instale o Word Pocket',
      subtitle: 'Acesse direto pela tela inicial ou área de trabalho com a agilidade de um aplicativo.',
      icon: Download,
      iconBg: 'bg-gradient-brand',
      iconColor: 'text-white'
    },
    {
      /* ABA 3: DESENVOLVEDOR */
      id: 'developer',
      tabLabel: 'Desenvolvedor',
      stepNumber: 3,
      indicator: 'Etapa 3 de 3',
      tag: 'Sobre o Projeto',
      title: 'Apresentação do Desenvolvedor',
      subtitle: 'Conheça quem está por trás do Word Pocket e a proposta do projeto.',
      icon: Compass,
      iconBg: 'bg-slate-900',
      iconColor: 'text-white'
    }
  ];

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      completeOnboarding();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/50 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-xl sm:max-w-2xl bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/80 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior decorativa com gradiente da marca */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-brand pointer-events-none" />

        {/* Cabeçalho do Guia: Logo, Título, Abas Rápidas e Indicador */}
        <div className="space-y-3 pb-3 border-b border-slate-100 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <WordPocketLogo variant="icon" size="sm" />
              <div>
                <span className="text-xs font-black text-[#160F2E] tracking-tight block">
                  Guia do Word Pocket
                </span>
                <span className="text-[10px] text-[#176BFF] font-bold">
                  {step.indicator}
                </span>
              </div>
            </div>

            {/* Botão Fechar no cabeçalho */}
            <button
              type="button"
              onClick={closeOnboarding}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Fechar tutorial"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* As Três Abas Principais: Conheça o app, Instalação e Desenvolvedor */}
          <div 
            className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 -mx-1 px-1"
            role="tablist"
            aria-label="Abas do tutorial"
          >
            {steps.map((s, idx) => {
              const isActive = idx === currentStep;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCurrentStep(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#176BFF] text-white shadow-colored-blue scale-[1.02]'
                      : 'bg-slate-100 text-[#52456F] hover:bg-slate-200/80 hover:text-[#160F2E]'
                  }`}
                >
                  <span>{s.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Barra de progresso visual em 3 segmentos */}
          <div className="flex items-center gap-1.5 pt-0.5" aria-label="Progresso do tutorial">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  idx === currentStep
                    ? 'bg-gradient-brand shadow-2xs'
                    : idx < currentStep
                    ? 'bg-[#176BFF]/40'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Corpo do Conteúdo: Aba Ativa */}
        <div className="flex-1 overflow-y-auto py-3.5 space-y-3.5 pr-1">
          {/* Tag, Título e Subtítulo */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#176BFF]">
                {step.tag}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                • {step.indicator}
              </span>
            </div>
            <h2
              id="onboarding-modal-title"
              className="text-base sm:text-lg font-black text-[#160F2E] tracking-tight"
            >
              {step.title}
            </h2>
            <p className="text-xs text-[#52456F] font-medium leading-snug">
              {step.subtitle}
            </p>
          </div>

          {/* CONTEÚDO DA ABA 1: CONHEÇA O APP */}
          {currentStep === 0 && (
            <div className="space-y-2 pt-1">
              {/* 1. Aprender */}
              <div className="p-3 rounded-2xl bg-white/95 border border-slate-100 shadow-2xs hover:border-[#00BFA5]/30 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E0F7F4] text-[#00BFA5] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="min-w-0">
                  <strong className="text-xs font-bold text-[#160F2E] block">
                    Aprender
                  </strong>
                  <p className="text-xs text-[#52456F] font-medium leading-relaxed">
                    Artigos práticos com vocabulário contextualizado por níveis e temas do dia a dia para expandir seu inglês.
                  </p>
                </div>
              </div>

              {/* 2. Praticar */}
              <div className="p-3 rounded-2xl bg-white/95 border border-slate-100 shadow-2xs hover:border-[#176BFF]/30 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E1ECFC] text-[#176BFF] flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="min-w-0">
                  <strong className="text-xs font-bold text-[#160F2E] block">
                    Praticar
                  </strong>
                  <p className="text-xs text-[#52456F] font-medium leading-relaxed">
                    Atividades de leitura, escuta, escrita e desafios de fixação para testar seu conhecimento com feedback imediato.
                  </p>
                </div>
              </div>

              {/* 3. Traduzir */}
              <div className="p-3 rounded-2xl bg-white/95 border border-slate-100 shadow-2xs hover:border-[#FF6534]/30 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FFEAE1] text-[#E04D1B] flex items-center justify-center shrink-0 mt-0.5">
                  <Languages className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="min-w-0">
                  <strong className="text-xs font-bold text-[#160F2E] block">
                    Traduzir
                  </strong>
                  <p className="text-xs text-[#52456F] font-medium leading-relaxed">
                    Tradução rápida e bidirecional entre inglês e português, com áudio de pronúncia nativa e cópia em um clique.
                  </p>
                </div>
              </div>

              {/* 4. Verbos Irregulares */}
              <div className="p-3 rounded-2xl bg-white/95 border border-slate-100 shadow-2xs hover:border-[#6545F5]/30 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#EDE8FD] text-[#6938F5] flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="min-w-0">
                  <strong className="text-xs font-bold text-[#160F2E] block">
                    Verbos Irregulares
                  </strong>
                  <p className="text-xs text-[#52456F] font-medium leading-relaxed">
                    Consulta rápida de mais de 200 verbos com suas três formas completas, pronúncia em áudio e tradução.
                  </p>
                </div>
              </div>

              {/* 5. Anotações */}
              <div className="p-3 rounded-2xl bg-white/95 border border-slate-100 shadow-2xs hover:border-[#176BFF]/30 transition-colors flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E8F1FE] text-[#176BFF] flex items-center justify-center shrink-0 mt-0.5">
                  <BookMarked className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="min-w-0">
                  <strong className="text-xs font-bold text-[#160F2E] block">
                    Anotações
                  </strong>
                  <p className="text-xs text-[#52456F] font-medium leading-relaxed">
                    Seu caderno pessoal para registrar observações, regras gramaticais e termos de estudo para consultar sempre que precisar.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CONTEÚDO DA ABA 2: INSTALAÇÃO EM QUALQUER DISPOSITIVO */}
          {currentStep === 1 && (
            <div className="space-y-3 pt-1">
              {/* Confirmação quando já está instalado */}
              {isInstalled && (
                <div className="p-3.5 rounded-2xl bg-[#DCF8F1] border border-[#B6F5E8] flex items-center gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#0A9B80] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <strong className="text-xs font-bold text-[#160F2E] block">
                      Aplicativo já instalado no dispositivo
                    </strong>
                    <p className="text-[11px] text-[#52456F] leading-snug">
                      O Word Pocket já está disponível na sua tela de aplicativos para acesso imediato em tela cheia.
                    </p>
                  </div>
                </div>
              )}

              {/* Botão de instalação nativo quando suportado pelo navegador */}
              {!isInstalled && canInstall && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#E1ECFC] via-[#EAF2FD] to-[#D4E5FE] border border-white/90 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-[#176BFF]" />
                      <span className="text-xs font-bold text-[#160F2E]">Instalação automática disponível</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#176BFF] bg-white px-2 py-0.5 rounded-full shadow-2xs">
                      1 Toque
                    </span>
                  </div>
                  <p className="text-xs text-[#52456F]">
                    Seu navegador oferece suporte direto à instalação. Clique abaixo para adicionar o app à sua tela inicial:
                  </p>
                  <button
                    type="button"
                    onClick={handleInstallClick}
                    disabled={isInstalling}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition cursor-pointer active:scale-[0.99] disabled:opacity-70"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isInstalling ? 'Instalando...' : 'Instalar aplicativo'}</span>
                  </button>
                </div>
              )}

              {/* Seletor por dispositivo para instruções práticas */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#160F2E]">
                    Instruções práticas por dispositivo:
                  </span>
                  <span className="text-[10px] text-[#52456F] font-medium">
                    Selecione o seu:
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setSelectedDevice('android')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedDevice === 'android'
                        ? 'bg-white text-[#176BFF] shadow-2xs'
                        : 'text-[#52456F] hover:text-[#160F2E]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Android</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedDevice('ios')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedDevice === 'ios'
                        ? 'bg-white text-[#176BFF] shadow-2xs'
                        : 'text-[#52456F] hover:text-[#160F2E]'
                    }`}
                  >
                    <Apple className="w-3.5 h-3.5" />
                    <span>iPhone / iPad</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedDevice('desktop')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedDevice === 'desktop'
                        ? 'bg-white text-[#176BFF] shadow-2xs'
                        : 'text-[#52456F] hover:text-[#160F2E]'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Computador</span>
                  </button>
                </div>

                {/* Conteúdo do dispositivo selecionado */}
                <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-100 shadow-2xs space-y-2">
                  {selectedDevice === 'android' && (
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#160F2E]">
                        <Smartphone className="w-4 h-4 text-[#176BFF]" />
                        <span>Instalação no Android (Chrome ou Edge):</span>
                      </div>
                      <p className="text-xs text-[#52456F] leading-relaxed">
                        Toque no botão <strong>"Instalar aplicativo"</strong> acima quando estiver disponível, ou abra o menu do navegador (ícone <strong>⋮</strong> no canto superior direito) e toque em <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.
                      </p>
                    </div>
                  )}

                  {selectedDevice === 'ios' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#160F2E]">
                        <Apple className="w-4 h-4 text-[#176BFF]" />
                        <span>Instalação no iPhone e iPad (Safari):</span>
                      </div>
                      <ol className="text-xs text-[#52456F] space-y-1 list-decimal list-inside font-medium leading-relaxed">
                        <li>Abra o Word Pocket no navegador <strong>Safari</strong>.</li>
                        <li>Toque no botão <strong>Compartilhar</strong> (ícone do quadrado com seta para cima na barra).</li>
                        <li>Role as opções e toque em <strong>"Adicionar à Tela de Início"</strong>.</li>
                        <li>Confirme tocando em <strong>Adicionar</strong> no canto superior direito.</li>
                      </ol>
                    </div>
                  )}

                  {selectedDevice === 'desktop' && (
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#160F2E]">
                        <Laptop className="w-4 h-4 text-[#176BFF]" />
                        <span>Instalação no Computador (Windows, macOS ou Linux):</span>
                      </div>
                      <p className="text-xs text-[#52456F] leading-relaxed">
                        No <strong>Google Chrome</strong> ou <strong>Microsoft Edge</strong>, clique no ícone de instalação <strong>⊕</strong> na barra de endereços (ao lado dos favoritos) ou acesse o menu <strong>⋮</strong> e clique em <strong>"Instalar Word Pocket"</strong>.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Nota sobre funcionamento offline */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-[11px] text-[#52456F]">
                <Wifi className="w-3.5 h-3.5 text-[#176BFF] shrink-0" />
                <span>
                  <strong>Consulta offline:</strong> Verbos irregulares, vocabulário e anotações funcionam mesmo sem sinal de internet.
                </span>
              </div>
            </div>
          )}

          {/* CONTEÚDO DA ABA 3: APRESENTAÇÃO DO DESENVOLVEDOR */}
          {currentStep === 2 && (
            <div className="space-y-3 pt-1">
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] border border-white/90 shadow-soft-card space-y-3.5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
                  {/* Foto do Desenvolvedor */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-colored-blue ring-3 ring-white shrink-0 bg-[#E1ECFC]">
                    {!photoError ? (
                      <img
                        src="https://avatars.githubusercontent.com/u/108010987?v=4"
                        alt="Miller - Desenvolvedor de Software"
                        className="w-full h-full object-cover"
                        onError={() => setPhotoError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-brand text-white flex items-center justify-center font-black text-xl">
                        M
                      </div>
                    )}
                  </div>

                  {/* Nome, Função e Botão LinkedIn */}
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-[#160F2E] tracking-tight">
                          Miller
                        </h4>
                        <p className="text-xs font-bold text-[#176BFF]">
                          Desenvolvedor de Software
                        </p>
                        <span className="text-[11px] text-[#52456F] font-semibold block">
                          Criador do Word Pocket
                        </span>
                      </div>

                      <a
                        href="https://www.linkedin.com/in/miller-redigolo-felix-6a7a53253/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold shadow-xs transition-colors duration-150 cursor-pointer active:scale-95"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Texto de Motivação Exato */}
                <p className="text-xs text-[#52456F] leading-relaxed font-medium">
                  Sou o Miller, desenvolvedor de software e criador do Word Pocket. Desenvolvi o aplicativo para ajudar quem está fazendo cursos de inglês ou estudando por conta própria, oferecendo uma ferramenta de apoio para praticar, aprender, traduzir e consultar conteúdos durante os estudos.
                </p>
              </div>

              {/* Card sobre a evolução contínua */}
              <div className="p-3 rounded-2xl bg-white/90 border border-white/90 shadow-2xs space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#6938F5]">
                  O futuro do Word Pocket
                </span>
                <p className="text-xs text-[#52456F] leading-snug font-medium">
                  O Word Pocket segue em constante aprimoramento, focado em simplicidade, utilidade prática e na melhor experiência de consulta e aprendizado do inglês.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé: Controles de navegação sequencial */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#52456F] hover:text-[#160F2E] hover:bg-slate-100 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={closeOnboarding}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              Fechar
            </button>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-5 py-2 rounded-xl font-black text-xs transition-all cursor-pointer shadow-colored-blue bg-gradient-brand text-white hover:opacity-95"
            >
              <span>{isLastStep ? 'Concluir' : 'Próxima'}</span>
              {isLastStep ? (
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

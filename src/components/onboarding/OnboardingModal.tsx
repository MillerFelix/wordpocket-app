import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Languages, 
  Code2, 
  ArrowRight, 
  ArrowLeft, 
  Check 
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { WordPocketLogo } from '../brand/WordPocketLogo';

interface OnboardingStep {
  tag: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  content: React.ReactNode;
}

export const OnboardingModal: React.FC = () => {
  const { isOnboardingOpen, closeOnboarding, completeOnboarding } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOnboardingOpen) return null;

  const steps: OnboardingStep[] = [
    {
      tag: 'Boas-vindas',
      title: 'Bem-vindo ao Word Pocket!',
      subtitle: 'Seu guia moderno, rápido e inteligente para o aprendizado e prática de inglês.',
      icon: Sparkles,
      iconBg: 'bg-gradient-brand',
      iconColor: 'text-white',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#52456F] leading-relaxed">
          <p>
            O Word Pocket foi planejado para quem deseja aprender inglês com fluência real, eliminando distrações e oferecendo acesso imediato às ferramentas essenciais do idioma.
          </p>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 font-medium">
            <p className="text-[#160F2E] font-bold">✨ O que você encontra aqui:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>200 verbos irregulares completos com áudio de pronúncia nativa.</li>
              <li>Prática ativa das 4 habilidades: Escuta, Fala, Leitura e Escrita.</li>
              <li>Tradutor imediato focado em Inglês ⇄ Português.</li>
              <li>PWA com funcionamento offline e sincronização em nuvem.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      tag: 'Morfologia & Base',
      title: 'Verbos Irregulares Completos',
      subtitle: '200 verbos organizados com as três formas essenciais e pronúncia natural.',
      icon: BookOpen,
      iconBg: 'bg-gradient-verbs',
      iconColor: 'text-white',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#52456F] leading-relaxed">
          <p>
            Consulte a forma básica (Infinitive), o passado simples (Past Simple) e o particípio (Past Participle) com busca instantânea em tempo real e paginação fluida.
          </p>
          <div className="p-3 rounded-2xl bg-[#EDE8FD] border border-[#D9CEFC] text-xs space-y-1">
            <span className="font-bold text-[#6545F5] block">💡 Dica de estudo:</span>
            <span className="text-[#160F2E]">
              Use a estrela para favoritar os verbos mais desafiadores e revisá-los na sua coleção pessoal.
            </span>
          </div>
        </div>
      )
    },
    {
      tag: '4 Habilidades',
      title: 'Praticar Inglês',
      subtitle: 'Desenvolvimento integrado de Listening, Speaking, Reading e Writing.',
      icon: GraduationCap,
      iconBg: 'bg-gradient-brand',
      iconColor: 'text-white',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#52456F] leading-relaxed">
          <p>
            Cada habilidade possui identidade de cor própria e níveis de dificuldade (Fácil, Médio e Difícil).
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
            <div className="p-2.5 rounded-xl bg-[#E1ECFC] text-[#176BFF] border border-[#BED7FA]">
              🎧 Listening — Escuta
            </div>
            <div className="p-2.5 rounded-xl bg-[#EDE8FD] text-[#6545F5] border border-[#D9CEFC]">
              🎙️ Speaking — Fala
            </div>
            <div className="p-2.5 rounded-xl bg-[#DCF8F1] text-[#0A9B80] border border-[#B6F5E8]">
              📖 Reading — Leitura
            </div>
            <div className="p-2.5 rounded-xl bg-[#FFEAE1] text-[#E04D1B] border border-[#FFD2C2]">
              ✍️ Writing — Escrita
            </div>
          </div>
        </div>
      )
    },
    {
      tag: 'Tradução Instantânea',
      title: 'Tradutor Rápido',
      subtitle: 'Consulta imediata exclusivamente entre inglês e português.',
      icon: Languages,
      iconBg: 'bg-gradient-translator',
      iconColor: 'text-white',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#52456F] leading-relaxed">
          <p>
            Um mecanismo leve e direto para traduzir palavras e expressões sem sair do fluxo de estudos, com inversão rápida de idiomas em um único toque.
          </p>
          <div className="p-3 rounded-2xl bg-[#FFEAE1] border border-[#FFD2C2] text-xs text-[#160F2E]">
            <strong className="text-[#E04D1B] block font-bold mb-0.5">Inglês ⇄ Português</strong>
            Resultado rápido na mesma tela, com histórico de consultas para revisão.
          </div>
        </div>
      )
    },
    {
      tag: 'Sobre o Projeto',
      title: 'Apresentação do Desenvolvedor',
      subtitle: 'Conheça o criador e a visão por trás do Word Pocket.',
      icon: Code2,
      iconBg: 'bg-slate-900',
      iconColor: 'text-white',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[#52456F] leading-relaxed">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <p className="text-xs font-bold text-[#160F2E]">
              👋 Olá! Eu sou o desenvolvedor do Word Pocket.
            </p>
            <p className="text-xs text-[#52456F]">
              Criei este aplicativo como uma solução autônoma, moderna e agradável para quem quer dominar o inglês de verdade. Minha missão foi unir design limpo com paleta Neon Candy, síntese de áudio nativa, suporte PWA e uma central com as quatro habilidades do idioma.
            </p>
            <p className="text-xs text-[#176BFF] font-semibold pt-1">
              "Bons estudos e conte com o Word Pocket para levar seu inglês mais longe!"
            </p>
          </div>
        </div>
      )
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80 overflow-hidden space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={closeOnboarding}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Pular tutorial de introdução"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Brand & Step Indicator */}
        <div className="flex items-center justify-between pt-2">
          <WordPocketLogo variant="icon" size="sm" />
          <div className="flex items-center gap-1.5">
            {steps.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentStep
                    ? 'w-6 bg-[#176BFF]'
                    : idx < currentStep
                    ? 'w-2 bg-[#BED7FA]'
                    : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#160F2E] text-xs font-bold">
            <div className={`w-4 h-4 rounded-full ${step.iconBg} ${step.iconColor} flex items-center justify-center`}>
              <step.icon className="w-2.5 h-2.5 stroke-[2.5]" />
            </div>
            <span>{step.tag} • Etapa {currentStep + 1} de {steps.length}</span>
          </div>

          <h2 id="onboarding-modal-title" className="text-xl sm:text-2xl font-black text-[#160F2E] tracking-tight">
            {step.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#52456F] font-medium leading-relaxed">
            {step.subtitle}
          </p>
        </div>

        {/* Step Content */}
        <div className="min-h-[140px] flex flex-col justify-center">
          {step.content}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#52456F] hover:bg-slate-100 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={closeOnboarding}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              Pular introdução
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition active:scale-[0.99] cursor-pointer"
          >
            <span>{isLastStep ? 'Concluir e Começar' : 'Próximo'}</span>
            {isLastStep ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

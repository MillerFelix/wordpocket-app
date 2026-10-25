import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  ArrowRightLeft, 
  Sparkles, 
  ShieldCheck, 
  Clipboard, 
  CornerDownRight, 
  Plane, 
  Briefcase, 
  Coffee,
  Languages,
  ChevronDown
} from 'lucide-react';

interface QuickTranslatorViewProps {
  initialText?: string;
}

export const QuickTranslatorView: React.FC<QuickTranslatorViewProps> = ({ initialText = '' }) => {
  const [text, setText] = useState(initialText);
  const [direction, setDirection] = useState<'auto_pt' | 'en_pt' | 'pt_en'>('auto_pt');
  const [copiedNotice, setCopiedNotice] = useState(false);

  useEffect(() => {
    if (initialText) {
      setText(initialText);
    }
  }, [initialText]);

  const directionConfigs = {
    auto_pt: { sl: 'auto', tl: 'pt', label: 'Detectar idioma → Português', from: 'Detectar idioma', to: 'Português' },
    en_pt: { sl: 'en', tl: 'pt', label: 'Inglês → Português', from: 'Inglês', to: 'Português' },
    pt_en: { sl: 'pt', tl: 'en', label: 'Português → Inglês', from: 'Português', to: 'Inglês' }
  };

  const handleTranslate = () => {
    const config = directionConfigs[direction];
    const encoded = encodeURIComponent(text.trim());
    const url = `https://translate.google.com/?sl=${config.sl}&tl=${config.tl}&text=${encoded}&op=translate`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      if (clipboardText) {
        setText(clipboardText);
      }
    } catch {
      // Graceful fallback
    }
  };

  const handleSelectPhrase = (phraseText: string) => {
    setText(phraseText);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  const phraseCategories = [
    {
      group: 'Viagens & Aeroporto',
      icon: Plane,
      color: 'text-[#0FAF91]',
      badgeBg: 'bg-[#E8FCF7] text-[#0FAF91]',
      phrases: [
        { text: 'Where is the baggage claim area?', label: 'Onde fica a restituição de bagagem?' },
        { text: 'Could you please point me to gate 14B?', label: 'Onde fica o portão 14B?' },
        { text: 'Is there a direct bus to the city center?', label: 'Há ônibus direto para o centro?' }
      ]
    },
    {
      group: 'Trabalho & Reuniões',
      icon: Briefcase,
      color: 'text-[#6938F5]',
      badgeBg: 'bg-[#F3EFFF] text-[#6938F5]',
      phrases: [
        { text: 'Could we reschedule our sync for tomorrow morning?', label: 'Podemos remarcar a conversa?' },
        { text: 'Please find the revised summary attached.', label: 'Segue o resumo revisado em anexo.' },
        { text: 'I would like to clarify a couple of requirements.', label: 'Gostaria de esclarecer requisitos.' }
      ]
    },
    {
      group: 'Conversação Diária',
      icon: Coffee,
      color: 'text-[#FF6534]',
      badgeBg: 'bg-[#FFF2ED] text-[#FF6534]',
      phrases: [
        { text: 'Could you say that once more, please?', label: 'Poderia repetir mais uma vez?' },
        { text: 'How do native speakers typically express this?', label: 'Como nativos costumam dizer isso?' },
        { text: 'I am practicing my English every single day.', label: 'Estou praticando meu inglês todo dia.' }
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header matching reference */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-translator text-white flex items-center justify-center shadow-colored-tangerine shrink-0 ring-4 ring-white/80">
            <Languages className="w-5 h-5 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6534]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6534]">
                Módulo de Tradução
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#160F2E] mt-0.5">
              Tradutor Rápido
            </h1>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium mt-1">
              Traduza textos e frases com o Google Tradutor sem consumo de APIs pagas.
            </p>
          </div>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs text-xs font-bold text-[#FF6534]">
          <span>Oficial Google Tradutor</span>
        </div>
      </div>

      {/* Responsive 2-column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Translator Workspace with Tangerine Accent */}
        <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-white/90 shadow-soft-card space-y-5">
          {/* Header & Direction Switcher */}
          <div className="space-y-3 pb-3 border-b border-[#E2D7F8]">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-[#160F2E]">
                Texto para Tradução
              </h2>
              <span className="text-xs font-mono font-semibold text-[#52456F]">
                {text.length}/500
              </span>
            </div>

            {/* Language Selector Bar */}
            <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-[#FFEAE1] to-[#FDE8F1] p-2 rounded-2xl border border-white/90 shadow-2xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 font-bold text-xs text-[#160F2E] shadow-2xs border border-white/90">
                <span>{directionConfigs[direction].from}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#52456F]" />
              </div>

              <button
                type="button"
                onClick={() => {
                  setDirection((prev) =>
                    prev === 'en_pt' ? 'pt_en' : prev === 'pt_en' ? 'auto_pt' : 'en_pt'
                  );
                }}
                className="p-2 rounded-xl bg-white/90 hover:bg-white text-[#6938F5] border border-white/90 shadow-2xs transition active:scale-90"
                title="Alternar sentido do idioma"
              >
                <ArrowRightLeft className="w-4 h-4 stroke-[2.2]" />
              </button>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 font-bold text-xs text-[#160F2E] shadow-2xs border border-white/90">
                <span>{directionConfigs[direction].to}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#52456F]" />
              </div>
            </div>
          </div>

          {/* Text Input Area */}
          <div className="space-y-2">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 500))}
              placeholder="Digite ou cole qualquer palavra, frase ou parágrafo que deseja traduzir..."
              rows={6}
              className="w-full p-4 text-sm bg-white/90 backdrop-blur-md hover:border-[#FF6534]/50 focus:bg-white rounded-2xl border border-white/90 focus:border-[#FF6534] focus:ring-4 focus:ring-[#FF6534]/10 outline-none transition resize-none text-[#160F2E] placeholder:text-[#645A82] font-sans leading-relaxed shadow-2xs"
            />

            {/* Actions & Counter */}
            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePaste}
                  className="inline-flex items-center gap-1.5 text-[#160F2E] hover:text-[#6938F5] font-bold px-3 py-1.5 rounded-xl hover:bg-white/80 transition active:scale-95 border border-transparent hover:border-white/90"
                >
                  <Clipboard className="w-3.5 h-3.5" />
                  <span>Colar texto</span>
                </button>

                {text && (
                  <button
                    type="button"
                    onClick={() => setText('')}
                    className="text-[#52456F] hover:text-[#F52E91] font-semibold px-2 py-1 rounded-lg hover:bg-[#FFF0F6] transition"
                  >
                    Limpar
                  </button>
                )}
              </div>

              <span className="text-[#52456F] font-mono text-[11px] font-semibold">
                {text.length}/500
              </span>
            </div>
          </div>

          {/* Primary Action Button with Gradient: Tangerine to Neon Pink */}
          <div className="pt-2 space-y-2">
            <button
              type="button"
              onClick={handleTranslate}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-warm text-white font-extrabold text-sm px-6 py-4 rounded-2xl shadow-colored-tangerine hover:opacity-95 active:scale-[0.99] transition duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6534]/20"
            >
              <ExternalLink className="w-4 h-4 stroke-[2.3]" />
              <span>Abrir Tradução no Google Tradutor</span>
            </button>
            <p className="text-[11px] text-[#52456F] text-center font-medium">
              ⓘ O tradutor será aberto em uma nova aba oficial com o texto e o sentido pré-configurados.
            </p>
          </div>
        </div>

        {/* Companion Column (5 Cols on desktop): Quick Phrases & Privacy */}
        <div className="lg:col-span-5 space-y-5">
          {/* Quick Phrases Card with Warm Tangerine Accent */}
          <div className="bg-white/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#160F2E] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FFD447]" />
                Frases de Consulta Rápida
              </h3>
              {copiedNotice && (
                <span className="text-[11px] font-bold text-[#0A9B80] bg-[#DCF8F1] px-2 py-0.5 rounded-lg border border-[#B6F5E8] animate-in fade-in">
                  Inserido no campo!
                </span>
              )}
            </div>

            <div className="space-y-4">
              {phraseCategories.map((cat, cIdx) => {
                const CatIcon = cat.icon;
                return (
                  <div key={cIdx} className="space-y-2">
                    <span className="text-xs font-bold text-[#160F2E] flex items-center gap-1.5">
                      <CatIcon className={`w-3.5 h-3.5 ${cat.color}`} />
                      {cat.group}
                    </span>
                    <div className="space-y-1.5">
                      {cat.phrases.map((phrase, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => handleSelectPhrase(phrase.text)}
                          className="w-full text-left p-3 rounded-2xl bg-white/70 border border-white/80 hover:border-[#FF6534] hover:bg-[#FFEAE1] transition group flex items-start justify-between gap-2 shadow-2xs"
                        >
                          <div>
                            <p className="text-xs font-bold text-[#160F2E] group-hover:text-[#FF6534] transition">
                              "{phrase.text}"
                            </p>
                            <p className="text-[11px] text-[#52456F] mt-0.5">
                              {phrase.label}
                            </p>
                          </div>
                          <CornerDownRight className="w-3.5 h-3.5 text-[#FFD9CA] group-hover:text-[#FF6534] shrink-0 mt-0.5 transition" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy & No-Backend Guarantee */}
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#EAE1FD]/60 via-white/70 to-[#DCF8F1]/60 backdrop-blur-md rounded-3xl border border-white/90 text-xs text-[#52456F] shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-[#19D9B4] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-[#160F2E] block font-bold">
                Privacidade total e sem custos
              </strong>
              <p className="leading-relaxed">
                O Word Pocket não salva seus textos digitados em servidores remotos. A consulta completa é delegada diretamente para o Google Tradutor com rapidez e segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

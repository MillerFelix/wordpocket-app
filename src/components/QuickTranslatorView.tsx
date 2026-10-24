import React, { useState } from 'react';
import { ExternalLink, ArrowRightLeft, Sparkles, ShieldCheck, Clipboard, CornerDownRight } from 'lucide-react';

export const QuickTranslatorView: React.FC = () => {
  const [text, setText] = useState('');
  const [direction, setDirection] = useState<'auto_pt' | 'en_pt' | 'pt_en'>('auto_pt');
  const [copiedNotice, setCopiedNotice] = useState(false);

  const directionConfigs = {
    auto_pt: { sl: 'auto', tl: 'pt', label: 'Detectar idioma → Português' },
    en_pt: { sl: 'en', tl: 'pt', label: 'Inglês → Português' },
    pt_en: { sl: 'pt', tl: 'en', label: 'Português → Inglês' }
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
      // Graceful fallback if clipboard permission is denied
    }
  };

  const handleSelectPhrase = (phraseText: string) => {
    setText(phraseText);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  const phraseCategories = [
    {
      group: '✈️ Viagens & Aeroporto',
      phrases: [
        { text: 'Where is the baggage claim area?', label: 'Onde fica a restituição de bagagem?' },
        { text: 'Could you please point me to gate 14B?', label: 'Onde fica o portão 14B?' },
        { text: 'Is there a direct bus to the city center?', label: 'Há ônibus direto para o centro?' }
      ]
    },
    {
      group: '💼 Trabalho & Reuniões',
      phrases: [
        { text: 'Could we reschedule our sync for tomorrow morning?', label: 'Podemos remarcar a conversa?' },
        { text: 'Please find the revised summary attached.', label: 'Segue o resumo revisado em anexo.' },
        { text: 'I would like to clarify a couple of requirements.', label: 'Gostaria de esclarecer requisitos.' }
      ]
    },
    {
      group: '☕ Conversação Diária',
      phrases: [
        { text: 'Could you say that once more, please?', label: 'Poderia repetir mais uma vez?' },
        { text: 'How do native speakers typically express this?', label: 'Como nativos costumam dizer isso?' },
        { text: 'I am practicing my English every single day.', label: 'Estou praticando meu inglês todo dia.' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Responsive 2-column Grid on Desktop / Tablet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Translator Workspace (7 Cols on desktop) */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
          {/* Header & Direction Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Tradutor Rápido Oficial
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Redirecionamento direto e seguro para o Google Tradutor
              </p>
            </div>

            {/* Direction Selector */}
            <button
              type="button"
              onClick={() => {
                setDirection((prev) =>
                  prev === 'en_pt' ? 'pt_en' : prev === 'pt_en' ? 'auto_pt' : 'en_pt'
                );
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-2 rounded-xl border border-indigo-200/70 transition active:scale-95 self-start sm:self-auto"
              title="Clique para alternar o sentido da tradução"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-indigo-600" />
              <span>{directionConfigs[direction].label}</span>
            </button>
          </div>

          {/* Text Input Area */}
          <div className="space-y-2">
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite ou cole qualquer palavra, frase ou parágrafo que deseja traduzir..."
                rows={6}
                className="w-full p-4 text-sm bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-xl border border-slate-200/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition resize-none text-slate-800 placeholder:text-slate-400 font-sans leading-relaxed"
              />
            </div>

            {/* Quick Actions & Character Counter */}
            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePaste}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 font-medium px-2.5 py-1 rounded-lg hover:bg-slate-100 transition active:scale-95"
                >
                  <Clipboard className="w-3.5 h-3.5" />
                  <span>Colar texto</span>
                </button>

                {text && (
                  <button
                    type="button"
                    onClick={() => setText('')}
                    className="text-slate-400 hover:text-rose-600 font-medium px-2 py-1 rounded-lg hover:bg-rose-50 transition"
                  >
                    Limpar
                  </button>
                )}
              </div>

              <span className="text-slate-400 font-mono text-[11px]">
                {text.length} caracteres
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleTranslate}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 active:from-indigo-800 active:to-violet-800 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-md shadow-indigo-500/20 transition-all duration-150 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir Tradução no Google Tradutor</span>
            </button>
            <p className="text-[11px] text-slate-500 text-center mt-2.5">
              A consulta abre a página oficial em uma nova aba com o texto e o par de idiomas preenchidos.
            </p>
          </div>
        </div>

        {/* Companion Column (5 Cols on desktop): Quick Phrases & Privacy */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Phrases Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Frases de Consulta Rápida
              </h3>
              {copiedNotice && (
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded animate-in fade-in">
                  Inserido no campo!
                </span>
              )}
            </div>

            <div className="space-y-4">
              {phraseCategories.map((cat, cIdx) => (
                <div key={cIdx} className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 block">
                    {cat.group}
                  </span>
                  <div className="space-y-1">
                    {cat.phrases.map((phrase, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => handleSelectPhrase(phrase.text)}
                        className="w-full text-left p-2.5 rounded-xl border border-slate-200/70 hover:border-indigo-300 hover:bg-indigo-50/50 transition group flex items-start justify-between gap-2"
                      >
                        <div>
                          <p className="text-xs font-semibold text-slate-800 group-hover:text-indigo-700 transition">
                            "{phrase.text}"
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {phrase.label}
                          </p>
                        </div>
                        <CornerDownRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 shrink-0 mt-0.5 transition" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & No-Backend Guarantee */}
          <div className="flex items-start gap-3 p-4 bg-slate-100/80 rounded-2xl border border-slate-200/70 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-slate-800 block">
                Privacidade total e sem servidores proprietários
              </strong>
              <p className="leading-relaxed">
                O WordPocket não armazena suas consultas em bancos de dados remotos nem consome APIs pagas. Todas as traduções extensas são abertas diretamente no serviço oficial do Google Tradutor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

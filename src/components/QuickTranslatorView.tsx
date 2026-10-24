import React, { useState } from 'react';
import { ExternalLink, ArrowRightLeft, Sparkles, ShieldCheck, Clipboard } from 'lucide-react';

export const QuickTranslatorView: React.FC = () => {
  const [text, setText] = useState('');
  const [direction, setDirection] = useState<'auto_pt' | 'en_pt' | 'pt_en'>('auto_pt');

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

  const quickPhrases = [
    { text: 'Could you please repeat that more slowly?', label: 'Pedir repetição lenta' },
    { text: 'Where is the nearest subway station?', label: 'Perguntar localização' },
    { text: 'How do you say this in English?', label: 'Dúvida de vocabulário' },
    { text: 'I would like to confirm our meeting.', label: 'Confirmar reunião' }
  ];

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {/* Main Translation Card */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        {/* Header & Direction Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-sm font-bold text-slate-800">
              Consulta via Google Tradutor
            </h2>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <button
              onClick={() => {
                setDirection((prev) =>
                  prev === 'en_pt' ? 'pt_en' : prev === 'pt_en' ? 'auto_pt' : 'en_pt'
                );
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-2.5 py-1.5 rounded-lg border border-indigo-100 transition"
              title="Alternar sentido da tradução"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-indigo-600" />
              <span>{directionConfigs[direction].label}</span>
            </button>
          </div>
        </div>

        {/* Input Area */}
        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite ou cole qualquer texto ou frase para traduzir..."
            rows={4}
            className="w-full p-3.5 text-sm bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition resize-none text-slate-800 placeholder:text-slate-400"
          />

          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              onClick={handlePaste}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 font-medium px-2 py-1 rounded-md hover:bg-slate-100 transition"
            >
              <Clipboard className="w-3.5 h-3.5" />
              <span>Colar da área de transferência</span>
            </button>

            {text && (
              <button
                type="button"
                onClick={() => setText('')}
                className="text-xs text-slate-400 hover:text-slate-600 font-medium"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Primary Action Button */}
        <div>
          <button
            type="button"
            onClick={handleTranslate}
            className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-4 py-3 rounded-xl shadow-sm shadow-indigo-200 transition active:scale-[0.99]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Abrir no Google Tradutor</span>
          </button>
          <p className="text-[11px] text-slate-500 text-center mt-2">
            A tradução completa será aberta em uma nova aba com o texto pré-preenchido.
          </p>
        </div>
      </div>

      {/* Quick Phrases for instant translation */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Frases comuns para teste ou consulta rápida</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {quickPhrases.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => {
                setText(phrase.text);
              }}
              className="text-left p-2.5 rounded-xl border border-slate-200/70 hover:border-indigo-300 hover:bg-indigo-50/40 transition group"
            >
              <p className="text-xs font-medium text-slate-800 group-hover:text-indigo-700 transition">
                {phrase.text}
              </p>
              <span className="text-[10px] text-slate-400 font-medium">
                {phrase.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Privacy & No-Backend Guarantee */}
      <div className="flex items-start gap-3 p-3.5 bg-slate-100/70 rounded-2xl border border-slate-200/60 text-xs text-slate-600">
        <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-800 block mb-0.5">Sem custos e sem backend</strong>
          O Upword Pocket não envia seus dados para servidores proprietários e não depende de chaves de API pagas. Toda a consulta rápida é delegada de forma segura para o Google Tradutor oficial.
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRightLeft, 
  Languages, 
  Clipboard, 
  X, 
  Loader2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles,
  AlertCircle,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { translateText, TranslationDirection, TranslationResult } from '../utils/translator';
import { PronounceButton } from './PronounceButton';

interface QuickTranslatorViewProps {
  initialText?: string;
}

export const QuickTranslatorView: React.FC<QuickTranslatorViewProps> = ({ initialText = '' }) => {
  const [text, setText] = useState(initialText);
  const [direction, setDirection] = useState<TranslationDirection>('en_pt');
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sync initialText if passed from external navigation
  useEffect(() => {
    if (initialText) {
      setText(initialText);
    }
  }, [initialText]);

  // Execute translation
  const handleTranslate = async (textToTranslate?: string) => {
    const query = (textToTranslate ?? text).trim();
    if (!query) {
      textareaRef.current?.focus();
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await translateText(query, direction);
      setResult(res);
    } catch (err: unknown) {
      setResult(null);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Não foi possível concluir a tradução. Verifique sua conexão e tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Keyboard shortcut: Enter to submit translation, Shift+Enter for newline
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) {
        handleTranslate();
      }
    }
  };

  // Invert language direction without losing entered content
  const handleInvertDirection = () => {
    const nextDirection: TranslationDirection = direction === 'en_pt' ? 'pt_en' : 'en_pt';
    setDirection(nextDirection);

    // If there is already an active translation result, swap input with result seamlessly
    if (result && result.translatedText) {
      const previousResult = result.translatedText;
      const previousSource = result.sourceText;
      setText(previousResult);
      setResult({
        translatedText: previousSource,
        sourceText: previousResult,
        fromLang: nextDirection === 'en_pt' ? 'en' : 'pt',
        toLang: nextDirection === 'en_pt' ? 'pt' : 'en',
        source: result.source
      });
      setError(null);
    }
    // If no result yet, typed text is preserved in the input field!
  };

  const handleCopyResult = async () => {
    if (!result?.translatedText) return;
    try {
      await navigator.clipboard.writeText(result.translatedText);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 2000);
    } catch {
      // Graceful fallback
    }
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      if (clipboardText) {
        setText(clipboardText);
        textareaRef.current?.focus();
      }
    } catch {
      // Graceful fallback if clipboard access is denied
    }
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setError(null);
    textareaRef.current?.focus();
  };

  const handleOpenGoogleTranslate = () => {
    const from = direction === 'en_pt' ? 'en' : 'pt';
    const to = direction === 'en_pt' ? 'pt' : 'en';
    const encoded = encodeURIComponent(text.trim());
    const url = `https://translate.google.com/?sl=${from}&tl=${to}&text=${encoded}&op=translate`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const isEnToPt = direction === 'en_pt';

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
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
              Tradução direta entre inglês e português com síntese de voz e dicionário integrado.
            </p>
          </div>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs text-xs font-bold text-[#FF6534]">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6534]" />
          <span>Inglês ⇄ Português</span>
        </div>
      </div>

      {/* Centered, ergonomic workspace */}
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
        {/* Main Card: Language Selector & Input */}
        <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
          {/* Language Selector: Exclusively English <-> Portuguese */}
          <div className="flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#FFEAE1]/70 border border-[#FFD2C2] shadow-2xs">
            {/* Source Language Indicator */}
            <div className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/95 text-[#160F2E] font-extrabold text-xs sm:text-sm border border-white shadow-2xs select-none">
              <span className={`w-2 h-2 rounded-full ${isEnToPt ? 'bg-[#176BFF]' : 'bg-[#0A9B80]'}`} />
              <span>{isEnToPt ? 'Inglês' : 'Português'}</span>
            </div>

            {/* Central Invert Direction Button */}
            <button
              type="button"
              onClick={handleInvertDirection}
              className="p-2 sm:p-2.5 rounded-xl bg-white/95 hover:bg-white text-[#E04D1B] hover:text-[#FF6534] border border-[#FFD2C2] shadow-2xs transition active:scale-95 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6534]"
              title="Inverter direção da tradução (Inglês ⇄ Português)"
              aria-label="Inverter direção da tradução"
            >
              <ArrowRightLeft className="w-4 h-4 stroke-[2.4] group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Target Language Indicator */}
            <div className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/95 text-[#160F2E] font-extrabold text-xs sm:text-sm border border-white shadow-2xs select-none">
              <span className={`w-2 h-2 rounded-full ${isEnToPt ? 'bg-[#0A9B80]' : 'bg-[#176BFF]'}`} />
              <span>{isEnToPt ? 'Português' : 'Inglês'}</span>
            </div>
          </div>

          {/* Text Input Area */}
          <div className="space-y-2">
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, 1000))}
                onKeyDown={handleKeyDown}
                placeholder={
                  isEnToPt
                    ? "Digite ou cole a palavra ou frase em inglês (ex: 'achieve', 'how are you?')..."
                    : "Digite ou cole a palavra ou frase em português (ex: 'alcançar', 'como vai você?')..."
                }
                rows={4}
                className="w-full p-4 text-sm sm:text-base bg-white/90 backdrop-blur-md rounded-2xl border border-white/90 focus:border-[#FF6534] focus:bg-white focus:ring-4 focus:ring-[#FF6534]/10 outline-none transition resize-none text-[#160F2E] placeholder:text-[#645A82] font-sans leading-relaxed shadow-2xs"
              />
            </div>

            {/* Quick Actions Bar (Paste, Clear, Length) */}
            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePaste}
                  className="inline-flex items-center gap-1.5 text-[#52456F] hover:text-[#FF6534] font-bold px-2.5 py-1.5 rounded-xl hover:bg-white/80 transition active:scale-95 border border-transparent hover:border-white/90"
                  title="Colar da área de transferência"
                >
                  <Clipboard className="w-3.5 h-3.5" />
                  <span>Colar</span>
                </button>

                {text && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex items-center gap-1 text-[#52456F] hover:text-[#F52E91] font-semibold px-2 py-1 rounded-lg hover:bg-[#FFF0F6] transition"
                    title="Limpar campo"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Limpar</span>
                  </button>
                )}
              </div>

              <span className="text-[#52456F] font-mono text-[11px] font-semibold">
                {text.length}/1000
              </span>
            </div>
          </div>

          {/* Primary Action Button: Traduzir */}
          <div>
            <button
              type="button"
              onClick={() => handleTranslate()}
              disabled={isLoading || !text.trim()}
              className={`w-full inline-flex items-center justify-center gap-2.5 font-extrabold text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-2xl shadow-colored-tangerine transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6534]/20 select-none ${
                isLoading || !text.trim()
                  ? 'bg-[#FF6534]/60 text-white/90 cursor-not-allowed'
                  : 'bg-gradient-translator text-white hover:opacity-95 active:scale-[0.99] cursor-pointer'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  <span>Traduzindo...</span>
                </>
              ) : (
                <>
                  <Languages className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.3]" />
                  <span>Traduzir</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-[#52456F] text-center mt-2 font-medium">
              Dica: pressione <kbd className="px-1.5 py-0.5 rounded bg-white/80 border border-white/90 font-mono text-[10px] text-[#160F2E] font-bold">Enter</kbd> para traduzir imediatamente
            </p>
          </div>
        </div>

        {/* Translation Result Area — Visually distinct and on the same screen */}
        {isLoading && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-soft-card animate-pulse space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-4 w-36 bg-[#FFEAE1] rounded-full" />
              <div className="h-7 w-20 bg-white/90 rounded-xl" />
            </div>
            <div className="h-6 w-3/4 bg-slate-200/80 rounded-lg" />
            <div className="h-4 w-1/2 bg-slate-200/60 rounded-lg" />
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-[#FFF0F6]/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-[#FFD0E5] shadow-soft-card space-y-3 animate-in fade-in duration-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#F52E91] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold text-[#160F2E]">
                  Não foi possível traduzir o termo
                </h3>
                <p className="text-xs text-[#52456F] leading-relaxed">
                  {error}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 pl-8">
              <button
                type="button"
                onClick={() => handleTranslate()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#F52E91] text-xs font-bold border border-[#FFD0E5] shadow-2xs hover:bg-[#FFF0F6] transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tentar novamente</span>
              </button>

              <button
                type="button"
                onClick={handleOpenGoogleTranslate}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#52456F] text-xs font-bold border border-white/90 shadow-2xs hover:text-[#160F2E] transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir no Google Tradutor</span>
              </button>
            </div>
          </div>
        )}

        {/* Successful Result Card */}
        {result && !isLoading && (
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-[#FFD2C2] shadow-soft-card space-y-4 animate-in fade-in zoom-in-95 duration-200">
            {/* Result Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#FFEAE1]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A9B80]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A9B80]">
                  Tradução em {isEnToPt ? 'Português' : 'Inglês'}
                </span>
                {result.source !== 'google' && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DCF8F1] text-[#0A9B80] border border-[#B6F5E8]">
                    <BookOpen className="w-3 h-3" />
                    <span>Dicionário Local</span>
                  </span>
                )}
              </div>

              {/* Action buttons: Pronunciation and Copy */}
              <div className="flex items-center gap-1.5">
                <PronounceButton
                  text={result.translatedText}
                  lang={isEnToPt ? 'pt' : 'en'}
                  size="sm"
                  showLabel
                  className="bg-[#FFEAE1] text-[#E04D1B] hover:bg-[#FFD2C2] border border-[#FFD2C2]"
                />

                <button
                  type="button"
                  onClick={handleCopyResult}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white hover:bg-[#FFEAE1]/50 text-[#52456F] hover:text-[#E04D1B] border border-slate-200 text-xs font-bold shadow-2xs transition active:scale-95"
                  title="Copiar tradução"
                >
                  {copiedNotice ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#0A9B80]" />
                      <span className="text-[#0A9B80]">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Translated Output Text */}
            <div className="space-y-2">
              <p className="text-lg sm:text-2xl font-black text-[#160F2E] leading-relaxed break-words select-text">
                {result.translatedText}
              </p>

              {/* Extra Linguistic Note (if found in verbs or vocabulary) */}
              {result.extraInfo && (
                <div className="p-3 rounded-2xl bg-[#FFEAE1]/50 border border-[#FFD2C2] text-xs text-[#52456F] font-medium leading-relaxed">
                  💡 {result.extraInfo}
                </div>
              )}
            </div>

            {/* Footer with subtle link to official service */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#52456F]">
              <span className="text-[11px]">
                Original: <strong className="text-[#160F2E]">"{result.sourceText}"</strong>
              </span>

              <button
                type="button"
                onClick={handleOpenGoogleTranslate}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#52456F] hover:text-[#FF6534] transition hover:underline"
              >
                <span>Google Tradutor oficial</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Clean Empty Placeholder State */}
        {!result && !isLoading && !error && (
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/80 text-center space-y-2 select-none shadow-2xs">
            <div className="w-10 h-10 rounded-2xl bg-[#FFEAE1] text-[#FF6534] flex items-center justify-center mx-auto mb-3 shadow-2xs">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-[#160F2E]">
              Tradução instantânea Inglês ⇄ Português
            </h3>
            <p className="text-xs text-[#52456F] max-w-md mx-auto leading-relaxed">
              Digite uma palavra, verbo ou frase no campo acima e confirme para ver o resultado diretamente nesta tela, com áudio nativo e cópia rápida.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

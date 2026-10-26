import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRightLeft, 
  Languages, 
  Clipboard, 
  X, 
  Loader2, 
  Sparkles
} from 'lucide-react';
import { translateText, TranslationDirection, TranslationResult } from '../utils/translator';
import { TranslationResultCard } from './translator/TranslationResultCard';
import { TranslationErrorCard } from './translator/TranslationErrorCard';

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

  useEffect(() => {
    if (initialText) {
      setText(initialText);
    }
  }, [initialText]);

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

  // Enter traduz imediatamente; Shift+Enter permite quebra de linha
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) {
        handleTranslate();
      }
    }
  };

  // Inverte os idiomas e alterna o resultado existente com o texto de entrada
  const handleInvertDirection = () => {
    const nextDirection: TranslationDirection = direction === 'en_pt' ? 'pt_en' : 'en_pt';
    setDirection(nextDirection);

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
  };

  const handleCopyResult = async () => {
    if (!result?.translatedText) return;
    try {
      await navigator.clipboard.writeText(result.translatedText);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 2000);
    } catch {
      // Falha silenciosa caso a permissão do clipboard seja negada
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
      // Falha silenciosa caso o navegador restrinja leitura da área de transferência
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
      {/* Cabeçalho */}
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

      {/* Área de trabalho centralizada */}
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
        <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-white/90 shadow-soft-card space-y-4">
          {/* Seletor de direção: Inglês ⇄ Português */}
          <div className="flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#FFEAE1]/70 border border-[#FFD2C2] shadow-2xs">
            <div className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/95 text-[#160F2E] font-extrabold text-xs sm:text-sm border border-white shadow-2xs select-none">
              <span className={`w-2 h-2 rounded-full ${isEnToPt ? 'bg-[#176BFF]' : 'bg-[#0A9B80]'}`} />
              <span>{isEnToPt ? 'Inglês' : 'Português'}</span>
            </div>

            <button
              type="button"
              onClick={handleInvertDirection}
              className="p-2 sm:p-2.5 rounded-xl bg-white/95 hover:bg-white text-[#E04D1B] hover:text-[#FF6534] border border-[#FFD2C2] shadow-2xs transition active:scale-95 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6534]"
              title="Inverter direção da tradução (Inglês ⇄ Português)"
              aria-label="Inverter direção da tradução"
            >
              <ArrowRightLeft className="w-4 h-4 stroke-[2.4] group-hover:rotate-180 transition-transform duration-300" />
            </button>

            <div className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/95 text-[#160F2E] font-extrabold text-xs sm:text-sm border border-white shadow-2xs select-none">
              <span className={`w-2 h-2 rounded-full ${isEnToPt ? 'bg-[#0A9B80]' : 'bg-[#176BFF]'}`} />
              <span>{isEnToPt ? 'Português' : 'Inglês'}</span>
            </div>
          </div>

          {/* Campo de digitação */}
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

            {/* Ações rápidas (Colar, Limpar, Contador de caracteres) */}
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

          {/* Botão principal de tradução */}
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

        {/* Estado de carregamento */}
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

        {/* Card de erro */}
        {error && !isLoading && (
          <TranslationErrorCard
            error={error}
            onRetry={() => handleTranslate()}
            onOpenGoogleTranslate={handleOpenGoogleTranslate}
          />
        )}

        {/* Card com resultado traduzido */}
        {result && !isLoading && (
          <TranslationResultCard
            result={result}
            isEnToPt={isEnToPt}
            copiedNotice={copiedNotice}
            onCopyResult={handleCopyResult}
            onOpenGoogleTranslate={handleOpenGoogleTranslate}
          />
        )}

        {/* Estado inicial vazio */}
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

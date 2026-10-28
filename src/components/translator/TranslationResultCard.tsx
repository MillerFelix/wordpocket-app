import React from 'react';
import { BookOpen, Copy, Check, ExternalLink } from 'lucide-react';
import { TranslationResult } from '../../utils/translator';
import { PronounceButton } from '../PronounceButton';

interface TranslationResultCardProps {
  result: TranslationResult;
  isEnToPt: boolean;
  copiedNotice: boolean;
  onCopyResult: () => void;
  onOpenGoogleTranslate: () => void;
}

export const TranslationResultCard: React.FC<TranslationResultCardProps> = ({
  result,
  isEnToPt,
  copiedNotice,
  onCopyResult,
  onOpenGoogleTranslate,
}) => {
  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-[#FFD2C2] shadow-soft-card space-y-4 animate-in fade-in zoom-in-95 duration-200">
      {/* Cabeçalho do resultado com direção e indicação de fonte */}
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

        {/* Ações: Pronúncia e Cópia */}
        <div className="flex items-center gap-1.5">
          <PronounceButton
            text={result.translatedText}
            lang={isEnToPt ? 'pt' : 'en'}
            preferredGender="female"
            size="sm"
            showLabel
            className="bg-[#FFEAE1] text-[#E04D1B] hover:bg-[#FFD2C2] border border-[#FFD2C2]"
          />

          <button
            type="button"
            onClick={onCopyResult}
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

      {/* Texto traduzido */}
      <div className="space-y-2">
        <p className="text-lg sm:text-2xl font-black text-[#160F2E] leading-relaxed break-words select-text">
          {result.translatedText}
        </p>

        {/* Nota linguística contextual (caso exista para verbos ou expressões) */}
        {result.extraInfo && (
          <div className="p-3 rounded-2xl bg-[#FFEAE1]/50 border border-[#FFD2C2] text-xs text-[#52456F] font-medium leading-relaxed">
            💡 {result.extraInfo}
          </div>
        )}
      </div>

      {/* Rodapé com termo original e atalho para o serviço externo */}
      <div className="pt-2 flex items-center justify-between text-xs text-[#52456F]">
        <span className="text-[11px]">
          Original: <strong className="text-[#160F2E]">"{result.sourceText}"</strong>
        </span>

        <button
          type="button"
          onClick={onOpenGoogleTranslate}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#52456F] hover:text-[#FF6534] transition hover:underline"
        >
          <span>Google Tradutor</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

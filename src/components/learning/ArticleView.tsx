import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Check, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb, 
  Info, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { LearningArticle } from '../../types/learning';
import { getCategoryById, getRelatedArticles } from '../../data/learning';
import { PronounceButton } from '../PronounceButton';

interface ArticleViewProps {
  article: LearningArticle;
  onBack: () => void;
  onSelectArticle: (articleId: string) => void;
}

const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  A1: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  A2: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
  B1: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  B2: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  C1: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  C2: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' }
};

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle
}) => {
  const category = getCategoryById(article.categoryId);
  const relatedArticles = getRelatedArticles(article.id);
  const levelStyle = LEVEL_COLORS[article.level] || LEVEL_COLORS.A1;

  // Scroll to top when opening an article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200 pb-12 max-w-4xl mx-auto">
      {/* Top Navigation Bar: Back Button */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200/90 text-xs sm:text-sm font-bold text-[#160F2E] transition active:scale-95 shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#176BFF]" />
          <span>Voltar para a biblioteca</span>
        </button>

        <div className="flex items-center gap-2">
          {category && (
            <span
              className="text-xs font-extrabold px-3 py-1 rounded-full border shadow-2xs"
              style={{
                backgroundColor: category.bgLight,
                borderColor: category.borderLight,
                color: category.accentColor
              }}
            >
              {category.title}
            </span>
          )}
        </div>
      </div>

      {/* Article Header Card */}
      <header className="relative overflow-hidden bg-white rounded-3xl p-6 sm:p-8 border border-white/90 shadow-soft-card space-y-4">
        {/* Ambient Top Glow Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand" 
          aria-hidden="true" 
        />

        {/* Badges line */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <span className={`text-xs font-black px-2.5 py-0.5 rounded-lg border ${levelStyle.bg} ${levelStyle.text} ${levelStyle.border}`}>
            Nível {article.level}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52456F] bg-slate-100 px-3 py-0.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-[#52456F]/80" />
            <span>{article.readingTimeMinutes} min de leitura</span>
          </span>
          {article.isEssential && (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>Conceito Essencial</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#160F2E] tracking-tight leading-tight">
          {article.title}
        </h1>

        {/* Description / Summary Lead */}
        <p className="text-sm sm:text-base text-[#52456F] font-medium leading-relaxed border-l-4 border-[#176BFF] pl-4 py-0.5">
          {article.description}
        </p>

        {/* Keywords */}
        <div className="flex items-center gap-1.5 flex-wrap pt-2">
          {article.keywords.map((kw) => (
            <span
              key={kw}
              className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md"
            >
              #{kw}
            </span>
          ))}
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="space-y-6 sm:space-y-7">
        {article.sections.map((section, idx) => (
          <section
            key={idx}
            className="bg-white/95 rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-soft-card space-y-4"
          >
            {/* Section Title */}
            {section.title && (
              <h2 className="text-lg sm:text-xl font-black text-[#160F2E] tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
                <span>{section.title}</span>
              </h2>
            )}

            {/* Paragraph Content */}
            <p className="text-sm sm:text-base text-[#160F2E]/90 leading-relaxed font-normal whitespace-pre-line">
              {section.content}
            </p>

            {/* Bullets */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 pt-1 pl-2">
                {section.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#160F2E]/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#176BFF] mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Callout Alert */}
            {section.callout && (
              <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                section.callout.type === 'warning'
                  ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                  : section.callout.type === 'tip'
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : 'bg-blue-50/80 border-blue-200 text-blue-900'
              }`}>
                <div className="shrink-0 mt-0.5">
                  {section.callout.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                  {section.callout.type === 'tip' && <Lightbulb className="w-5 h-5 text-emerald-600" />}
                  {section.callout.type === 'note' && <Info className="w-5 h-5 text-blue-600" />}
                </div>
                <div className="space-y-0.5">
                  {section.callout.title && (
                    <h3 className="text-xs sm:text-sm font-extrabold">
                      {section.callout.title}
                    </h3>
                  )}
                  <p className="text-xs sm:text-sm leading-relaxed font-medium">
                    {section.callout.text}
                  </p>
                </div>
              </div>
            )}

            {/* Rules Block */}
            {section.rules && section.rules.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {section.rules.map((rule, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#F0F6FF] to-white border border-[#BED7FA]/70 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
                      <h3 className="text-xs sm:text-sm font-black text-[#160F2E]">
                        {rule.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#52456F] font-medium leading-relaxed">
                      {rule.explanation}
                    </p>
                    {rule.formula && (
                      <div className="pt-1">
                        <code className="text-[11px] sm:text-xs font-mono font-bold px-2 py-1 rounded-lg bg-white border border-[#BED7FA] text-[#176BFF] inline-block">
                          {rule.formula}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Examples Block with Audio Pronunciation */}
            {section.examples && section.examples.length > 0 && (
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F]">
                  Exemplos Práticos & Pronúncia
                </h3>
                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50">
                  {section.examples.map((ex, eIdx) => (
                    <div
                      key={eIdx}
                      className="p-3 sm:p-3.5 flex items-start justify-between gap-3 bg-white hover:bg-slate-50/80 transition"
                    >
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-black text-[#160F2E] leading-snug">
                          {ex.en}
                        </p>
                        <p className="text-xs text-[#52456F] font-medium leading-snug">
                          {ex.pt}
                        </p>
                        {ex.note && (
                          <p className="text-[11px] text-slate-400 italic">
                            * {ex.note}
                          </p>
                        )}
                      </div>
                      <PronounceButton text={ex.en} size="xs" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comparisons Block (Lado a Lado) */}
            {section.comparisons && section.comparisons.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F]">
                  Comparação Direta
                </h3>
                <div className="space-y-3">
                  {section.comparisons.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 space-y-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1">
                          <span className="text-[10px] font-black uppercase text-blue-700 tracking-wider">
                            {comp.labelA}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-[#160F2E]">
                            {comp.exampleA}
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200 space-y-1">
                          <span className="text-[10px] font-black uppercase text-purple-700 tracking-wider">
                            {comp.labelB}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-[#160F2E]">
                            {comp.exampleB}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-[#52456F] font-medium leading-relaxed border-t border-slate-100 pt-2">
                        {comp.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Mistakes Block (❌ Errado vs ✅ Correto) */}
            {section.mistakes && section.mistakes.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#F52E91]">
                  Erros Comuns e Correções
                </h3>
                <div className="space-y-2.5">
                  {section.mistakes.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 p-2.5 rounded-xl bg-rose-50/70 border border-rose-200 text-rose-900">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-extrabold uppercase block text-rose-600">Evite</span>
                            <span className="line-through font-semibold">{m.wrong}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-extrabold uppercase block text-emerald-600">Forma Correta</span>
                            <span className="font-bold">{m.correct}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-[#52456F] font-medium leading-relaxed pl-1">
                        💡 <strong>Por quê?</strong> {m.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Takeaways Card (Pontos-Chave) */}
      {article.takeaways && article.takeaways.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#176BFF] via-[#2446C8] to-[#6545F5] text-white shadow-colored-blue space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Pontos-Chave para Lembrar
              </h2>
              <p className="text-xs text-white/80 font-medium">
                Síntese rápida para fixar o aprendizado deste artigo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 pt-1">
            {article.takeaways.map((point, pIdx) => (
              <div
                key={pIdx}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15"
              >
                <div className="w-5 h-5 rounded-full bg-[#19D9B4] text-[#160F2E] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-bold text-xs">
                  ✓
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white/95 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#176BFF]" />
              <h2 className="text-base sm:text-lg font-black text-[#160F2E]">
                Artigos Relacionados
              </h2>
            </div>
            <span className="text-xs text-[#52456F] font-semibold">
              Continue aprendendo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {relatedArticles.map((rel) => {
              const relCat = getCategoryById(rel.categoryId);
              return (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.id)}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectArticle(rel.id)}
                  role="button"
                  tabIndex={0}
                  className="group p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#176BFF]/40 shadow-soft-card hover:shadow-colored-blue transition cursor-pointer flex flex-col justify-between text-left active:scale-[0.99]"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                        style={{
                          backgroundColor: relCat?.bgLight,
                          borderColor: relCat?.borderLight,
                          color: relCat?.accentColor
                        }}
                      >
                        {relCat?.shortTitle}
                      </span>
                      <span className="text-[10px] font-semibold text-[#52456F]">
                        {rel.readingTimeMinutes} min
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-[#160F2E] group-hover:text-[#176BFF] transition-colors leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#52456F] line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-end text-xs font-extrabold text-[#176BFF] group-hover:translate-x-1 transition-transform">
                    <span>Ler este artigo</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-4 flex justify-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-sm font-bold text-[#160F2E] transition active:scale-95 shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#176BFF]" />
          <span>Voltar para todos os artigos</span>
        </button>
      </div>
    </div>
  );
};

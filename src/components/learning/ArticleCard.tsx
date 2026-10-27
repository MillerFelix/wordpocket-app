import React from 'react';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { LearningArticle, CEFR_LEVEL_BADGE_STYLES } from '../../types/learning';
import { getCategoryById } from '../../data/learning';

interface ArticleCardProps {
  article: LearningArticle;
  onSelect: (articleId: string) => void;
  hideCategory?: boolean;
  hideEssential?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  hideCategory = false,
  hideEssential = false
}) => {
  const category = getCategoryById(article.categoryId);
  const levelStyle = CEFR_LEVEL_BADGE_STYLES[article.level] || CEFR_LEVEL_BADGE_STYLES.A1;

  return (
    <article
      onClick={() => onSelect(article.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(article.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ler artigo: ${article.title}`}
      className="group relative bg-white/90 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 hover:border-[#176BFF]/40 shadow-2xs hover:shadow-soft-card transition-all duration-150 cursor-pointer flex items-center justify-between gap-3 text-left active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176BFF]/25"
    >
      <div className="space-y-1 min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border ${levelStyle.bg} ${levelStyle.text} ${levelStyle.border}`}
          >
            {article.level}
          </span>

          {!hideCategory && category && (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${category.bgLight || 'bg-slate-100'} ${category.borderLight || 'border-slate-200'}`}
              style={{ color: category.accentColor }}
            >
              {category.shortTitle}
            </span>
          )}

          {article.isEssential && !hideEssential && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80">
              <Sparkles className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
              <span>Essencial</span>
            </span>
          )}

          <div className="flex items-center gap-1 text-[11px] font-medium text-[#52456F]/70 shrink-0">
            <Clock className="w-3 h-3 text-[#52456F]/50" />
            <span>{article.readingTimeMinutes} min</span>
          </div>
        </div>

        {/* Title and Short Description */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-[#160F2E] group-hover:text-[#176BFF] transition-colors leading-snug tracking-tight">
            {article.title}
          </h3>
          <p className="text-xs text-[#52456F] font-normal line-clamp-1 leading-relaxed mt-0.5">
            {article.description}
          </p>
        </div>
      </div>

      {/* Action Arrow */}
      <div className="flex items-center gap-1 text-xs font-bold text-[#176BFF] group-hover:translate-x-1 transition-transform shrink-0 pl-1">
        <span className="hidden sm:inline">Ler</span>
        <ArrowRight className="w-4 h-4 stroke-[2.2]" />
      </div>
    </article>
  );
};

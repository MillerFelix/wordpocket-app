import { forwardRef } from 'react';
import { Search, X } from 'lucide-react';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  ariaLabel?: string;
  id?: string;
  variant?: 'default' | 'banner';
  className?: string;
  inputClassName?: string;
  autoFocus?: boolean;
  disabled?: boolean;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value,
      onChange,
      onClear,
      placeholder = 'Buscar...',
      ariaLabel = 'Campo de busca',
      id,
      variant = 'default',
      className = '',
      inputClassName = '',
      autoFocus = false,
      disabled = false
    },
    ref
  ) => {
    const handleClear = () => {
      if (onClear) {
        onClear();
      } else {
        onChange('');
      }
    };

    const variantStyles =
      variant === 'banner'
        ? 'bg-white text-[#160F2E] placeholder:text-slate-400 font-semibold border-white shadow-md focus:ring-4 focus:ring-white/40 focus:border-white'
        : 'bg-white/85 backdrop-blur-md text-[#160F2E] placeholder:text-[#645A82] font-medium border-white/90 shadow-2xs hover:border-[#176BFF]/40 focus:border-[#176BFF] focus:bg-white focus:ring-4 focus:ring-[#176BFF]/10';

    return (
      <div className={`relative flex items-center w-full ${className}`}>
        <Search
          className="w-4 h-4 text-[#176BFF] absolute left-4 pointer-events-none select-none shrink-0"
          aria-hidden="true"
        />
        <input
          ref={ref}
          id={id}
          type="text"
          role="searchbox"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={ariaLabel}
          autoFocus={autoFocus}
          disabled={disabled}
          className={`w-full pl-11 pr-10 py-3 text-xs sm:text-sm rounded-2xl border outline-none transition duration-150 ${variantStyles} ${inputClassName}`}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Limpar pesquisa"
            title="Limpar pesquisa"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176BFF]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

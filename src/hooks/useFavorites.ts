import { useState, useCallback } from 'react';

export interface UseFavoritesResult {
  favorites: Set<string>;
  favoritesList: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string, e?: React.MouseEvent) => void;
  removeFavorite: (id: string) => void;
}

/**
 * Hook to manage persistent favorites saved in localStorage with fallback support and exception safety.
 */
export function useFavorites(
  storageKey: string,
  defaultItems: string[] = [],
  fallbackKey?: string
): UseFavoritesResult {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved =
        localStorage.getItem(storageKey) ||
        (fallbackKey ? localStorage.getItem(fallbackKey) : null);
      return saved ? new Set(JSON.parse(saved)) : new Set(defaultItems);
    } catch {
      return new Set(defaultItems);
    }
  });

  const persist = useCallback(
    (nextSet: Set<string>) => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(Array.from(nextSet)));
      } catch {
        // Fallback for storage quota or privacy mode limitations
      }
    },
    [storageKey]
  );

  const toggleFavorite = useCallback(
    (id: string, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const removeFavorite = useCallback(
    (id: string) => {
      setFavorites((prev) => {
        const next = new Set(prev);
        next.delete(id);
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const isFavorite = useCallback(
    (id: string) => favorites.has(id),
    [favorites]
  );

  return {
    favorites,
    favoritesList: Array.from(favorites),
    isFavorite,
    toggleFavorite,
    removeFavorite
  };
}

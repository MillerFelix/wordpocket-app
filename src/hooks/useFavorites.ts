import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { updateRemoteFavoritesByType } from '../services/favoritesSyncService';

export interface UseFavoritesResult {
  favorites: Set<string>;
  favoritesList: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string, e?: React.MouseEvent) => void;
  removeFavorite: (id: string) => void;
}

/**
 * Hook para gerenciar favoritos persistidos no localStorage com fallback e segurança contra exceções.
 * Quando o usuário está autenticado, sincroniza alterações com o Firestore em segundo plano.
 */
export function useFavorites(
  storageKey: string,
  defaultItems: string[] = [],
  fallbackKey?: string
): UseFavoritesResult {
  const { user } = useAuth();
  const favoriteType: 'verbs' | 'vocab' = storageKey.includes('verbs') ? 'verbs' : 'vocab';

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

  // Re-sincroniza estado quando ocorre merge de favoritos no login
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleSyncUpdate = () => {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          setFavorites(new Set(JSON.parse(saved)));
        }
      } catch {
        // Ignora
      }
    };
    window.addEventListener('wordpocket-favorites-updated', handleSyncUpdate);
    return () => {
      window.removeEventListener('wordpocket-favorites-updated', handleSyncUpdate);
    };
  }, [storageKey]);

  const persist = useCallback(
    (nextSet: Set<string>) => {
      const itemsList = Array.from(nextSet);
      try {
        localStorage.setItem(storageKey, JSON.stringify(itemsList));
      } catch {
        // Falha silenciosa caso o armazenamento local esteja bloqueado ou sem espaço
      }

      // Se autenticado, sincroniza com o Firestore em background sem bloquear a UI
      if (user?.uid) {
        updateRemoteFavoritesByType(user.uid, favoriteType, itemsList).catch(() => {
          // Fallback silencioso (já enfileirado no IndexedDB pelo Firestore)
        });
      }
    },
    [storageKey, user?.uid, favoriteType]
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

  const favoritesList = useMemo(() => Array.from(favorites), [favorites]);

  return {
    favorites,
    favoritesList,
    isFavorite,
    toggleFavorite,
    removeFavorite
  };
}

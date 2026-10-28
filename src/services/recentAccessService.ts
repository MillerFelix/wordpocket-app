import { TabType } from '../types';

export interface RecentAccessItem {
  id: string;
  title: string;
  typeLabel: string;
  subtitle?: string;
  targetTab: TabType;
  targetParam?: string;
  timestamp: number;
}

const STORAGE_KEY = 'wordpocket_recent_access';
const MAX_STORED = 15;

/**
 * Retorna a lista de conteúdos recentemente acessados, ordenados do mais recente ao mais antigo.
 */
export function getRecentAccesses(): RecentAccessItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  } catch {
    return [];
  }
}

/**
 * Registra um acesso a conteúdo relevante, evitando duplicatas e posicionando no início.
 */
export function recordRecentAccess(item: Omit<RecentAccessItem, 'timestamp'>): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getRecentAccesses();

    // Remove item pré-existente com mesmo ID ou mesmo targetTab + targetParam
    const filtered = current.filter(
      (existing) =>
        existing.id !== item.id &&
        !(existing.targetTab === item.targetTab && existing.targetParam === item.targetParam)
    );

    const newItem: RecentAccessItem = {
      ...item,
      timestamp: Date.now()
    };

    const updated = [newItem, ...filtered].slice(0, MAX_STORED);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Notifica componentes ouvintes para atualização reativa
    window.dispatchEvent(new Event('wordpocket-recent-access-updated'));
  } catch {
    // Falha silenciosa em caso de restrições de localStorage
  }
}

/**
 * Limpa todos os acessos recentes registrados.
 */
export function clearRecentAccesses(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('wordpocket-recent-access-updated'));
  } catch {
    // Falha silenciosa
  }
}

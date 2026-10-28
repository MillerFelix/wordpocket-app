import { useState, useEffect, useCallback } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export interface UsePwaInstallResult {
  canInstall: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isDesktop: boolean;
  promptInstall: () => Promise<boolean>;
}

// Armazena em nível de módulo para não perder o evento caso seja disparado antes da montagem do componente
let globalInstallPrompt: BeforeInstallPromptEvent | null = null;

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    globalInstallPrompt = e as BeforeInstallPromptEvent;
  });
}

function checkIsInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  const isStandaloneMedia =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(display-mode: standalone)').matches;
  const isNavStandalone =
    Boolean((window.navigator as unknown as { standalone?: boolean })?.standalone);
  const isReferrerAndroid =
    typeof document !== 'undefined' &&
    typeof document.referrer === 'string' &&
    document.referrer.includes('android-app://');

  return Boolean(isStandaloneMedia || isNavStandalone || isReferrerAndroid);
}

function detectPlatform() {
  if (typeof window === 'undefined') {
    return { isIOS: false, isAndroid: false, isDesktop: true };
  }

  const userAgent = window.navigator.userAgent || '';
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(userAgent);
  const isDesktop = !isIOS && !isAndroid;

  return { isIOS, isAndroid, isDesktop };
}

/**
 * Hook para gerenciar o ciclo de instalação do PWA e fornecer instruções contextualizadas por dispositivo.
 */
export function usePwaInstall(): UsePwaInstallResult {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(() => globalInstallPrompt);
  const [isInstalled, setIsInstalled] = useState<boolean>(() => checkIsInstalled());
  const [{ isIOS, isAndroid, isDesktop }] = useState(() => detectPlatform());

  useEffect(() => {
    // Atualiza estado de instalado se a janela mudar para modo standalone
    const mediaQuery =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(display-mode: standalone)')
        : null;

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsInstalled(true);
      }
    };

    if (mediaQuery && typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleMediaChange);
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      globalInstallPrompt = e as BeforeInstallPromptEvent;
      setInstallPrompt(globalInstallPrompt);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      globalInstallPrompt = null;
      setInstallPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      if (mediaQuery && typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleMediaChange);
      }
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async (): Promise<boolean> => {
    const promptEvent = installPrompt || globalInstallPrompt;
    if (!promptEvent) return false;

    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
        globalInstallPrompt = null;
        setInstallPrompt(null);
        return true;
      }
      return false;
    } catch (err) {
      console.warn('Erro ao disparar prompt de instalação PWA:', err);
      return false;
    } finally {
      globalInstallPrompt = null;
      setInstallPrompt(null);
    }
  }, [installPrompt]);

  return {
    canInstall: Boolean(installPrompt || globalInstallPrompt) && !isInstalled,
    isInstalled,
    isIOS,
    isAndroid,
    isDesktop,
    promptInstall
  };
}

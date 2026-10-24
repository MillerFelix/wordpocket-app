import React, { useEffect, useState } from 'react';
import { BookMarked, Download, Wifi, WifiOff } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const Header: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setIsInstalled(true);
    }
    setInstallPrompt(null);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 ring-2 ring-indigo-50">
            <BookMarked className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Word<span className="text-indigo-600">Pocket</span>
              </span>
              <span className="hidden xs:inline-flex text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                PWA
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Guia Prático e Dicionário de Inglês
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
              isOnline
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80 shadow-2xs'
                : 'bg-amber-50 text-amber-700 border-amber-300/80 shadow-2xs'
            }`}
            title={isOnline ? 'Conexão ativa com a internet' : 'Modo Offline: dados locais disponíveis'}
          >
            {isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline">Online</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-600" />
                <span>Offline</span>
              </>
            )}
          </div>

          {/* PWA Install Button */}
          {installPrompt && !isInstalled && (
            <button
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-medium px-3.5 py-1.5 rounded-xl shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              aria-label="Instalar WordPocket no computador ou celular"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Instalar App</span>
              <span className="xs:hidden">Instalar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

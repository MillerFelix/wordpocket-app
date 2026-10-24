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
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-3 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-none">
                Upword Pocket
              </h1>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100">
                MVP
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Guia Rápido de Inglês
            </p>
          </div>
        </div>

        {/* Right actions: Offline badge & Install button */}
        <div className="flex items-center gap-2">
          {/* Status badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
              isOnline
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
                : 'bg-amber-50 text-amber-700 border-amber-200/60'
            }`}
            title={isOnline ? 'Conexão ativa' : 'Modo offline — dados salvos no dispositivo'}
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
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm transition active:scale-95"
              aria-label="Instalar aplicativo"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Instalar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

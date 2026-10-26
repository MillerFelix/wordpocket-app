import React, { useState } from 'react';
import { X, Check, Sparkles, AlertCircle } from 'lucide-react';
import { AVATARS, AvatarItem, getAvatarById } from '../../data/avatars';

interface AvatarPickerModalProps {
  isOpen: boolean;
  currentAvatarId: string;
  onConfirm: (avatarId: string) => Promise<void> | void;
  onClose: () => void;
}

export const AvatarPickerModal: React.FC<AvatarPickerModalProps> = ({
  isOpen,
  currentAvatarId,
  onConfirm,
  onClose
}) => {
  const [selectedId, setSelectedId] = useState<string>(currentAvatarId);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentAvatar: AvatarItem = getAvatarById(selectedId);

  const handleConfirm = async () => {
    setSaving(true);
    setErrorMsg(null);
    try {
      await onConfirm(selectedId);
      onClose();
    } catch (err) {
      console.error('Erro ao salvar avatar:', err);
      setErrorMsg('Não foi possível salvar o avatar no momento. Tente novamente.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="avatar-picker-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/80 overflow-hidden space-y-5 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 pt-1">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E1ECFC] text-[#176BFF] text-xs font-bold border border-[#BED7FA]">
              <Sparkles className="w-3.5 h-3.5 text-[#26D9FF]" />
              <span>Coleção Exclusiva de Animais</span>
            </div>
            <h2 id="avatar-picker-title" className="text-xl sm:text-2xl font-black text-[#160F2E] tracking-tight">
              Escolha seu Avatar
            </h2>
            <p className="text-xs sm:text-sm text-[#52456F] font-medium">
              Selecione entre os 20 personagens ilustrados do Word Pocket para representar sua jornada.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-2xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer shrink-0"
            aria-label="Fechar galeria"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Preview of Currently Selected Avatar */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#F0F6FF] via-[#EDE8FD]/50 to-white border border-[#BED7FA]/60 flex items-center gap-4 shrink-0 shadow-xs">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md ring-3 ring-white shrink-0 bg-slate-100">
            <img
              src={currentAvatar.image}
              alt={currentAvatar.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-black text-[#160F2E] truncate">
                {currentAvatar.name}
              </h3>
              <span
                className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-white shadow-2xs"
                style={{ backgroundColor: currentAvatar.accentColor }}
              >
                {currentAvatar.badge}
              </span>
            </div>
            <p className="text-xs text-[#52456F] font-medium leading-relaxed line-clamp-2">
              {currentAvatar.description}
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* 20 Avatars Grid */}
        <div className="flex-1 overflow-y-auto pr-1 -mr-1 space-y-2">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 sm:gap-3.5 pb-2">
            {AVATARS.map((avatar) => {
              const isSelected = selectedId === avatar.id;
              return (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => setSelectedId(avatar.id)}
                  className={`group relative rounded-2xl p-1.5 sm:p-2 transition-all duration-150 cursor-pointer text-center flex flex-col items-center gap-1.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#176BFF]/30 ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#176BFF]/15 to-[#6545F5]/10 ring-2 ring-[#176BFF] shadow-sm scale-102'
                      : 'bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                  }`}
                  aria-label={`Selecionar ${avatar.name}`}
                  aria-pressed={isSelected}
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-2xs group-hover:scale-103 transition-transform">
                    <img
                      src={avatar.image}
                      alt={avatar.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#176BFF]/20 flex items-center justify-center">
                        <span className="w-6 h-6 rounded-full bg-[#176BFF] text-white flex items-center justify-center shadow-md ring-2 ring-white">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      </div>
                    )}
                  </div>
                  <span className={`text-[11px] sm:text-xs font-bold leading-tight line-clamp-1 w-full text-center ${
                    isSelected ? 'text-[#176BFF]' : 'text-[#160F2E]'
                  }`}>
                    {avatar.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-[#52456F] hover:bg-slate-100 transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs sm:text-sm shadow-colored-blue hover:opacity-95 transition cursor-pointer active:scale-95 disabled:opacity-50"
          >
            {saving ? (
              <span>Salvando avatar...</span>
            ) : (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Confirmar Escolha</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

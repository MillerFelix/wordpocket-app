import React from 'react';
import { HelpCircle } from 'lucide-react';

interface ActivityExitConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  continueLabel?: string;
  warningDescription?: string;
}

export const ActivityExitConfirmModal: React.FC<ActivityExitConfirmModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
  continueLabel = 'Continuar Atividade',
  warningDescription
}) => {
  if (!isOpen) return null;

  return (
    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium space-y-3 animate-in fade-in">
      <div className="flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-bold text-sm block">Deseja realmente sair?</strong>
          <p>
            {warningDescription || (
              <>
                Tentativas incompletas <strong>não sobrescrevem</strong> seu último resultado válido salvo. Suas respostas atuais não serão registradas.
              </>
            )}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2 pt-1">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1.5 rounded-xl bg-white border border-amber-200 font-bold text-xs text-amber-900 hover:bg-amber-100 transition cursor-pointer"
        >
          {continueLabel}
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition cursor-pointer"
        >
          Confirmar Saída
        </button>
      </div>
    </div>
  );
};

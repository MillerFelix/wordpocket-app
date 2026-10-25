import React from 'react';
import { BookOpen, X } from 'lucide-react';

interface VerbCoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerbCoverageModal: React.FC<VerbCoverageModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-white/85 backdrop-blur-xl rounded-3xl border border-white/90 p-5 sm:p-6 shadow-soft-card text-xs text-[#160F2E] space-y-3 animate-in fade-in duration-200">
      <div className="flex items-center justify-between">
        <h4 className="font-extrabold text-sm text-[#160F2E] flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#6938F5]" />
          Critérios Linguísticos e Fontes da Base
        </h4>
        <button
          type="button"
          onClick={onClose}
          className="text-[#52456F] hover:text-[#160F2E] p-1 rounded-lg"
          aria-label="Fechar informações de metodologia"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[#52456F] leading-relaxed">
        Esta tabela foi elaborada a partir das fontes linguísticas de referência internacional (Oxford, Cambridge e Merriam-Webster). Ela abrange os verbos irregulares canônicos essenciais da língua inglesa moderna, que respondem por praticamente a totalidade das ocorrências do dia a dia, ambiente profissional e acadêmico.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <div className="bg-white/70 p-3.5 rounded-2xl border border-white/80 space-y-1">
          <strong className="text-[#160F2E] block font-bold">Variantes Britânicas vs. Americanas:</strong>
          <p className="text-[#52456F]">
            Alternâncias consagradas são explicitadas em notas (ex: <em>burned/burnt</em>, <em>learned/learnt</em> e <em>got/gotten</em>).
          </p>
        </div>
        <div className="bg-white/70 p-3.5 rounded-2xl border border-white/80 space-y-1">
          <strong className="text-[#160F2E] block font-bold">Identidade Visual Semântica:</strong>
          <p className="text-[#52456F]">
            <span className="text-[#6938F5] font-bold">Electric Violet</span> (Base Form), <span className="text-[#0A9B80] font-bold">Fresh Mint</span> (Simple Past) e <span className="text-[#E04D1B] font-bold">Tangerine</span> (Past Participle).
          </p>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { IrregularVerb } from '../../types';
import { VerbTableRow } from './VerbTableRow';

interface VerbTableProps {
  verbs: IrregularVerb[];
  expandedRowId: string | null;
  onToggleExpand: (id: string) => void;
}

export const VerbTable: React.FC<VerbTableProps> = ({
  verbs,
  expandedRowId,
  onToggleExpand,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/90 shadow-soft-card overflow-hidden">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-left border-collapse min-w-[490px] sm:min-w-[640px] md:min-w-full">
          <thead>
            <tr className="border-b border-[#E2D7F8] text-[11px] sm:text-xs font-black uppercase tracking-wider">
              {/* Coluna 1: Base Form (Fixa à esquerda no scroll horizontal em telas menores) */}
              <th className="py-2.5 sm:py-3.5 px-2 sm:px-5 text-white bg-gradient-verbs border-r border-white/20 sticky left-0 z-20 shadow-[2px_0_6px_rgba(0,0,0,0.06)] w-[28%] sm:w-[24%] min-w-[130px] sm:min-w-[160px]">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span>Verbo base</span>
                </div>
              </th>
              {/* Coluna 2: Simple Past */}
              <th className="py-2.5 sm:py-3.5 px-2 sm:px-5 text-[#0A9B80] bg-[#DCF8F1] border-r border-white/80 w-[20%] sm:w-[22%] min-w-[100px] sm:min-w-[130px]">
                Simple Past
              </th>
              {/* Coluna 3: Past Participle */}
              <th className="py-2.5 sm:py-3.5 px-2 sm:px-5 text-[#E04D1B] bg-[#FFEAE1] border-r border-white/80 w-[20%] sm:w-[22%] min-w-[100px] sm:min-w-[130px]">
                Past Participle
              </th>
              {/* Coluna 4: Tradução */}
              <th className="py-2.5 sm:py-3.5 px-2 sm:px-5 text-[#6938F5] bg-[#EAE1FD] border-r border-white/80 min-w-[110px]">
                Tradução
              </th>
              {/* Coluna 5: Ações */}
              <th className="py-2.5 sm:py-3.5 px-1 sm:px-4 text-center w-9 sm:w-16 bg-white/60 text-[#52456F]">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/80 text-sm">
            {verbs.map((verb) => (
              <VerbTableRow
                key={verb.id}
                verb={verb}
                isExpanded={expandedRowId === verb.id}
                onToggleExpand={onToggleExpand}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

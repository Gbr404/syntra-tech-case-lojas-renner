import React from 'react';
import { Building2, Target, Eye, Heart } from 'lucide-react';
import syntraLogo from '../../assets/Syntra White.png';

interface HeaderProps {
  onGoToAbout: () => void;
}

const values = [
  'Segurança: conformidade com a LGPD',
  'Personalização',
  'Foco no cliente',
  'IA orientada por dados',
];

export const Header: React.FC<HeaderProps> = ({ onGoToAbout }) => {
  return (
    <header className="w-full bg-[#F4F7FB] border-b border-[#DCE4EF] text-[#0A1C36]">
      <div className="bg-[#0A1C36] text-white px-4 py-2 flex items-center justify-between text-xs font-medium">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#E78224] animate-pulse"></span>
          <span className="font-semibold tracking-wide text-amber-200">CASE LOJAS RENNER</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-300 hidden sm:inline">Instituto Percorre</span>
        </div>
        <button
          onClick={onGoToAbout}
          className="flex items-center space-x-1.5 bg-[#E78224] hover:bg-[#d67215] text-white px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer shadow-sm"
          title="Conheça a Syntra Tech"
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Conheça a Syntra Tech</span>
        </button>
      </div>

      <div className="px-4 py-3">
        {/* Marca */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-10 h-10 rounded-xl bg-[#0A1C36] flex items-center justify-center shadow-md border border-amber-500/20">
              <img src={syntraLogo} alt="Logo Syntra Tech" className="w-11 h-11 object-contain" />
            </div>
            <div>
              <h1 className="font-extrabold text-2xl tracking-tight text-[#0A1C36] font-['Space_Grotesk',sans-serif]">
                SYNTRA<span className="text-[#E78224]">.TECH</span>
              </h1>
              <p className="text-xs font-semibold text-slate-500 italic">
                &ldquo;Sob medida, em escala&rdquo;
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-xs font-medium text-slate-600 block">
              Solução de Hiperpersonalização para
            </span>
            <span className="font-bold text-sm text-[#0A1C36] flex items-center justify-center sm:justify-end gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Lojas Renner S.A.
            </span>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        {/* Missão, Visão e Valores */}
       <div className="mt-2 pt-2 border-t border-[#DCE4EF] grid grid-cols-1 sm:grid-cols-3 gap-2.5">
       <div className="bg-white p-3 rounded-xl border border-[#DCE4EF]">
        <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1">
       <Target className="w-3.5 h-3.5 text-[#E78224]" />
      Missão
       </h4>
       <p className="text-[11px] text-slate-700 leading-snug">
      Impulsionar a eficiência com soluções tecnológicas personalizadas que transformam dados em resultados.
        </p>
       </div>

      <div className="bg-white p-3 rounded-xl border border-[#DCE4EF]">
       <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1">
      <Eye className="w-3.5 h-3.5 text-[#E78224]" />
      Visão
      </h4>
       <p className="text-[11px] text-slate-700 leading-snug">
      Ser referência em consultoria digital, impulsionando empresas com soluções escaláveis, inovadoras e preparadas para o futuro.
      </p>
      </div>

       <div className="bg-white p-3 rounded-xl border border-[#DCE4EF]">
      <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1">
      <Heart className="w-3.5 h-3.5 text-[#E78224]" />
      Valores
       </h4>
       <ul className="space-y-0.5">
      {values.map((value) => (
        <li key={value} className="text-[11px] text-slate-700 leading-snug flex items-start gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#E78224] mt-1.5 flex-shrink-0"></span>
          {value}
        </li>
      ))}
    </ul>
  </div>
</div>
      </div>
    </header>
  );
};
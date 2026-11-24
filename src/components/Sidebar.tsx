import React from 'react';
import { BarChart3, ShoppingBag, Building2 } from 'lucide-react';

export type Screen = 'perfis' | 'experimentar' | 'sobre';

interface SidebarProps {
  active: Screen;
  onChange: (screen: Screen) => void;
}

const items: {
  id: Screen;
  label: string;
  hint: string;
  dot: string;
  Icon: React.ElementType;
}[] = [
  { id: 'perfis', label: 'Homepage', hint: 'Dashboard e recomendações', dot: 'bg-purple-500', Icon: BarChart3 },
  { id: 'experimentar', label: 'Experimentar IA', hint: 'Escolha suas peças', dot: 'bg-emerald-500', Icon: ShoppingBag },
  { id: 'sobre', label: 'Syntra & Equipe', hint: 'Quem somos e a Renner', dot: 'bg-[#E78224]', Icon: Building2 },
];

export const Sidebar: React.FC<SidebarProps> = ({ active, onChange }) => {
  return (
    <aside className="w-16 md:w-60 flex-shrink-0 bg-[#0A1C36] text-white flex flex-col border-r border-slate-800">
      <div className="px-4 py-5 border-b border-white/10">
        <span className="hidden md:block font-extrabold text-lg tracking-tight font-['Syne',sans-serif]">
          SYNTRA<span className="text-[#E78224]">.TECH</span>
        </span>
        <span className="md:hidden block text-center font-extrabold text-[#E78224]">S</span>
        <span className="hidden md:block text-[10px] text-slate-400 mt-0.5 italic">
          Sob medida, em escala
        </span>
      </div>

      <nav className="flex-1 py-4 space-y-1">
        {items.map(({ id, label, hint, dot, Icon }) => {
          const isActive = id === active;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              title={label}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left border-l-4 transition-colors cursor-pointer ${
                isActive
                  ? 'bg-white/10 border-[#E78224] text-white'
                  : 'border-transparent text-slate-300 hover:bg-white/5'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <div className="hidden md:block min-w-0">
                <span className="flex items-center gap-2 text-sm font-bold">
                  <span className={`w-2 h-2 rounded-full ${dot}`}></span>
                  {label}
                </span>
                <span className="block text-[10px] text-slate-400 truncate">{hint}</span>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="hidden md:block px-4 py-3 text-[10px] text-slate-500 border-t border-white/10">
        Case Lojas Renner
      </div>
    </aside>
  );
};
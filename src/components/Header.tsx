import React, { useState } from 'react';
import { Linkedin, Sparkles, Edit3, Check, Users, ExternalLink, Building2 } from 'lucide-react';import { TeamMember } from '../types';
import syntraLogo from '../../assets/Syntra White.png';

interface HeaderProps {
  team: TeamMember[];
  onUpdateTeam: (updated: TeamMember[]) => void;
  onOpenPitchGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ team, onUpdateTeam, onOpenPitchGuide }) => {
  const [isEditingTeam, setIsEditingTeam] = useState(false);
  const [tempTeam, setTempTeam] = useState<TeamMember[]>(team);

  const handleSaveTeam = () => {
    onUpdateTeam(tempTeam);
    setIsEditingTeam(false);
  };

  const handleMemberChange = (id: string, field: keyof TeamMember, value: string) => {
    setTempTeam((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  return (
    <header className="w-full bg-[#FAF7F2] border-b border-[#EADFCB] text-[#0A1C36] transition-all">
      {/* Top Banner Accent: Instituto Percorre + Pitch Guide Button */}
      <div className="bg-[#0A1C36] text-white px-4 py-2 flex items-center justify-between text-xs font-medium">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#E78224] animate-pulse"></span>
          <span className="font-semibold tracking-wide text-amber-200">CASE LOJAS RENNER</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-300 hidden sm:inline">Instituto Percorre</span>
        </div>
        <button
          onClick={onOpenPitchGuide}
          className="flex items-center space-x-1.5 bg-[#E78224] hover:bg-[#d67215] text-white px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer shadow-sm"
          title="Conheça a Syntra Tech"
        >
          <Building2 className="w-3.5 h-3.5" />
           <span>Conheça a Syntra Tech</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-5">
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            {/* Syntra Tech Logo Graphic */}
            <div className="relative w-12 h-12 rounded-xl bg-[#0A1C36] flex items-center justify-center shadow-md border border-amber-500/20">
              <img
               src={syntraLogo}
               alt="Logo Syntra Tech"
               className="w-11 h-11 object-contain"
               />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-extrabold text-2xl tracking-tight text-[#0A1C36] font-['Syne',sans-serif]">
                  SYNTRA<span className="text-[#E78224]">.TECH</span>
                </h1>
              
              </div>
              <p className="text-xs font-semibold text-slate-500 italic">
                &ldquo;Sob medida, em escala&rdquo;
              </p>
            </div>
          </div>

          {/* Case description pill */}
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

        {/* Pitch Problem Statement Card */}
        <div className="mt-4 p-3.5 bg-white/80 backdrop-blur-sm rounded-xl border border-[#EADFCB] shadow-sm">
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 bg-amber-500/10 text-[#E78224] rounded-lg mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                O Problema que Estamos Resolvendo na Renner
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                A Renner tem milhões de dados de compra parados, mas envia o mesmo e-mail genérico para a jovem de 18 anos e para a executiva de 45. A Syntra Tech desenvolveu uma camada de IA que clusteriza clientes em microssegmentos em tempo real e gera vitrines, e-mails e posts sob medida instantaneamente.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Section (Fotos dos Participantes + LinkedIn) */}
        <div className="mt-4 pt-3 border-t border-[#E8DFC9]">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-slate-600" />
              <h3 className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                Equipe Syntra Tech (Participantes)
              </h3>
            </div>
            <button
              onClick={() => setIsEditingTeam(!isEditingTeam)}
              className="text-[11px] font-medium text-[#E78224] hover:text-[#C46108] flex items-center space-x-1 cursor-pointer transition-colors"
            >
              {isEditingTeam ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Cancelar</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3 h-3" />
                  <span>Editar Nomes & Links</span>
                </>
              )}
            </button>
          </div>

          {/* Member Edit Mode */}
          {isEditingTeam ? (
            <div className="bg-white p-3 rounded-xl border border-amber-300 shadow-sm space-y-3 mb-3">
              <p className="text-xs text-slate-600 font-medium">
                Personalize os dados reais do seu grupo para a apresentação:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tempTeam.map((member) => (
                  <div key={member.id} className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <input
                      type="text"
                      aria-label={`Nome do integrante ${member.id}`}
                      placeholder="Nome do integrante"
                      value={member.name}
                      onChange={(e) => handleMemberChange(member.id, 'name', e.target.value)}
                      className="w-full font-bold text-slate-800 bg-white border border-slate-300 rounded px-2 py-1 mb-1"
                    />
                    <input
                      type="text"
                      aria-label={`Função do integrante ${member.id}`}
                      placeholder="Cargo / Papel no projeto"
                      value={member.role}
                      onChange={(e) => handleMemberChange(member.id, 'role', e.target.value)}
                      className="w-full text-slate-600 bg-white border border-slate-300 rounded px-2 py-1 mb-1 text-[11px]"
                    />
                    <input
                      type="text"
                      aria-label={`URL do LinkedIn do integrante ${member.id}`}
                      placeholder="URL do LinkedIn (ex: https://linkedin.com/in/...)"
                      value={member.linkedinUrl}
                      onChange={(e) => handleMemberChange(member.id, 'linkedinUrl', e.target.value)}
                      className="w-full text-slate-600 bg-white border border-slate-300 rounded px-2 py-1 text-[11px]"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handleSaveTeam}
                className="w-full bg-[#0A1C36] hover:bg-[#122b52] text-white py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Salvar Dados do Grupo
              </button>
            </div>
          ) : (
            /* Team cards list */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-white/90 p-2.5 rounded-xl border border-[#E8DFC9] flex flex-col items-center text-center shadow-xs hover:shadow-sm transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#E78224] shadow-xs"
                      onError={(e) => {
                        // Fallback initials avatar
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}&background=0A1C36&color=FAF7F2`;
                      }}
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border border-white"></span>
                  </div>
                  <h4 className="font-bold text-xs text-[#0A1C36] mt-1.5 leading-snug line-clamp-1">
                    {member.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mb-2 font-medium">
                    {member.role}
                  </p>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full inline-flex items-center justify-center space-x-1 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] px-2 py-1 rounded-md text-[10px] font-bold transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

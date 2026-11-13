import React, { useRef, useEffect } from 'react';
import { PieChart } from './PieChart';
import { ThreeBlueBoxes } from './ThreeBlueBoxes';
import { SegmentData, SegmentProfile } from '../types';
import { Sparkles, TrendingUp, Layers, ChevronDown, CheckCircle2, UserCheck, Flame } from 'lucide-react';

interface SegmentSectionProps {
  segments: SegmentData[];
  profiles: SegmentProfile[];
  activeProfileId: string;
  selectedSegmentId: string | null;
  customProfile: SegmentProfile | null;
  onSelectSegment: (segmentId: string) => void;
  onSelectProfile: (profileId: string) => void;
}

export const SegmentSection: React.FC<SegmentSectionProps> = ({
  segments,
  profiles,
  activeProfileId,
  selectedSegmentId,
  customProfile,
  onSelectSegment,
  onSelectProfile,
}) => {
  const detailRef = useRef<HTMLDivElement>(null);

  // Combine regular profiles with custom 5th profile if present
  const allProfiles = customProfile ? [...profiles, customProfile] : profiles;
  const currentActiveProfile =
    allProfiles.find((p) => p.id === activeProfileId) || allProfiles[0];

  useEffect(() => {
    // If user clicked a profile or new profile was generated, gently focus
    if (activeProfileId === 'prof-custom-user' && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeProfileId]);

  return (
    <section id="sessao-segmentos" className="w-full bg-[#F5F0E8] border-b border-[#E3D6C2] py-7 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3D6C2] pb-3">
          <div className="flex items-center space-x-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-purple-700 ring-4 ring-purple-200"></span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900 block">
                Sessão Roxa • Inteligência & Segmentação
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#0A1C36]">
                Gráfico Dinâmico & Perfis de Segmento
              </h2>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-white/70 px-3 py-1 rounded-full border border-purple-200 self-start sm:self-auto">
            Toque nas fatias ou nos perfis abaixo
          </span>
        </div>

        {/* Dynamic Metric Comparison Card (The Pitch Killer Metric) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">
              Disparo Genérico Renner
            </span>
            <span className="text-lg font-extrabold text-slate-400">14%</span>
            <span className="block text-[10px] text-red-500 font-semibold mt-0.5">
              Taxa de Abertura em queda
            </span>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-3 rounded-xl border border-purple-400/40 shadow-xs">
            <span className="text-[10px] text-purple-200 font-bold uppercase block">
              Com IA Syntra Tech
            </span>
            <span className="text-lg font-extrabold text-amber-300">38%</span>
            <span className="block text-[10px] text-emerald-300 font-semibold mt-0.5">
              +171% Abertura Média
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">
              Descadastramentos
            </span>
            <span className="text-lg font-extrabold text-emerald-600">-62%</span>
            <span className="block text-[10px] text-slate-500 font-semibold mt-0.5">
              Menos rejeição de e-mail
            </span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">
              Taxa de Conversão
            </span>
            <span className="text-lg font-extrabold text-[#E78224]">+3.4x</span>
            <span className="block text-[10px] text-slate-500 font-semibold mt-0.5">
              Relevância por estilo
            </span>
          </div>
        </div>

        {/* Gráfico Pizza Dinâmico */}
        <div className="bg-white p-5 rounded-2xl border border-[#E0D3BE] shadow-xs">
          <div className="text-center sm:text-left mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-center sm:justify-start gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-purple-700" />
              Distribuição da Base Ativa da Renner por Tendência
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Selecione uma fatia para filtrar o comportamento do segmento:
            </p>
          </div>

          <PieChart
            segments={segments}
            selectedSegmentId={selectedSegmentId}
            onSelectSegment={(segId) => {
              onSelectSegment(segId);
              // auto select matching profile
              const match = profiles.find((p) => p.segmentId === segId);
              if (match) onSelectProfile(match.id);
            }}
          />
        </div>

        {/* Mini Sessão de Perfis de Segmento (Caixas Roxas + 5º Perfil em Verde/Dourado) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-purple-800" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Perfis de Segmento (Selecione um perfil para explorar as recomendações.)
              </h3>
            </div>
            {customProfile && (
              <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full shadow-2xs">
                <Sparkles className="w-3 h-3 animate-spin" />
                5º Perfil Ativo!
              </span>
            )}
          </div>

          {/* Grid de Perfis (Caixas Roxas da Imagem) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {allProfiles.map((prof) => {
              const isActive = prof.id === activeProfileId;
              const isCustom = prof.isCustomGenerated;

              return (
                <button
                  key={prof.id}
                  onClick={() => onSelectProfile(prof.id)}
                  className={`p-3 rounded-2xl text-left transition-all border relative flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? isCustom
                        ? 'bg-gradient-to-b from-emerald-900 to-teal-950 text-white border-emerald-400 shadow-md ring-2 ring-emerald-400/50'
                        : 'bg-[#311852] text-white border-purple-400 shadow-md ring-2 ring-purple-400/40'
                      : isCustom
                      ? 'bg-emerald-50 hover:bg-emerald-100/70 border-emerald-300 text-emerald-950 shadow-xs'
                      : 'bg-white hover:bg-purple-50/50 border-purple-200 text-slate-800 shadow-2xs'
                  }`}
                >
                  {isCustom && (
                    <span className="absolute -top-2 -right-1 bg-amber-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
                      <Flame className="w-2.5 h-2.5" /> IA
                    </span>
                  )}

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <img
                        src={prof.avatarUrl}
                        alt={prof.personaName}
                        className={`w-9 h-9 rounded-full object-cover border-2 ${
                          isCustom ? 'border-emerald-400' : 'border-purple-300'
                        }`}
                      />
                      <div className="overflow-hidden">
                        <h4 className="font-bold text-xs truncate">
                          {prof.personaName}
                        </h4>
                        <span className="text-[10px] opacity-75 block truncate">
                          {prof.personaAge} anos • {prof.dominantStyle}
                        </span>
                      </div>
                    </div>

                    <p className={`text-[11px] line-clamp-2 leading-relaxed ${
                      isActive ? 'text-slate-200' : 'text-slate-600'
                    }`}>
                      {prof.personaBio}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-current/15 flex items-center justify-between text-[10px] font-bold">
                    <span>{isCustom ? '★ Seu Perfil' : prof.title.split(':')[0]}</span>
                    <span className="opacity-90">Ver 3 Azuis →</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 RETÂNGULOS AZUIS RENDERIZADOS PARA O PERFIL ATIVO */}
        <div ref={detailRef} className="pt-2">
          <ThreeBlueBoxes profile={currentActiveProfile} />
        </div>
      </div>
    </section>
  );
};

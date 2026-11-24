import React, { useRef, useEffect } from 'react';
import { Header } from './Header';
import { PieChart } from './PieChart';
import { ThreeBlueBoxes } from './ThreeBlueBoxes';
import { SegmentData, SegmentProfile } from '../types';
import { Sparkles, TrendingUp, Layers, Flame } from 'lucide-react';

interface SegmentSectionProps {
  segments: SegmentData[];
  profiles: SegmentProfile[];
  activeProfileId: string;
  selectedSegmentId: string | null;
  customProfile: SegmentProfile | null;
  onSelectSegment: (segmentId: string) => void;
  onSelectProfile: (profileId: string) => void;
  onGoToAbout: () => void;
}

// Nome curto de cada segmento, usado nos cards e na etiqueta da persona
const segmentLabels: Record<string, string> = {
  executivo: 'Executivo',
  jovem: 'Jovem & Festa',
  casual: 'Casual Chic',
  athleisure: 'Athleisure',
};

export const SegmentSection: React.FC<SegmentSectionProps> = ({
  segments,
  profiles,
  activeProfileId,
  selectedSegmentId,
  customProfile,
  onSelectSegment,
  onSelectProfile,
  onGoToAbout,
}) => {
  const panelRef = useRef<HTMLElement>(null);

  // Perfis pré-criados + perfil personalizado, se existir
  const allProfiles = customProfile ? [...profiles, customProfile] : profiles;
  const currentActiveProfile =
    allProfiles.find((p) => p.id === activeProfileId) || allProfiles[0];

  useEffect(() => {
    // Ao trocar de perfil, o painel azul volta ao topo
    panelRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    // Perfil gerado por IA: foca o painel (útil quando o layout está empilhado)
    if (activeProfileId === 'prof-custom-user') {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeProfileId]);

  return (
    <section
      id="sessao-segmentos"
      className="w-full bg-[#F4F7FB] xl:h-screen xl:flex xl:overflow-hidden"
    >
      {/* COLUNA ESQUERDA: header, MVV, métricas, gráfico e perfis */}
      <div className="flex-1 min-w-0 xl:overflow-y-auto">
        <Header onGoToAbout={onGoToAbout} />

        <div className="px-4 py-4 space-y-3">
          {/* Cabeçalho da seção */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DCE4EF] pb-2">
            <div className="flex items-center space-x-2.5">
              <span className="w-3 h-3 rounded-full bg-purple-700 ring-4 ring-purple-200"></span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900 block">
                  Inteligência & Segmentação
                </span>
                <h2 className="text-base font-bold text-[#0A1C36]">
                  Base de Clientes & Perfis de Segmento
                </h2>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-600 bg-white/70 px-3 py-1 rounded-full border border-purple-200 self-start sm:self-auto whitespace-nowrap">
              Clique nas fatias ou nos perfis abaixo
            </span>
          </div>

          {/* Métricas principais: genérico vs IA */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white px-3 py-2.5 rounded-xl border border-[#DCE4EF] shadow-2xs">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">
                  Disparo Genérico Renner
                </span>
                <span className="text-xl font-extrabold text-slate-400">14%</span>
                <span className="block text-[11px] text-red-500 font-semibold">
                  Taxa de abertura em queda
                </span>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white px-3 py-2.5 rounded-xl border border-purple-400/40 shadow-xs">
                <span className="text-[10px] text-purple-200 font-bold uppercase block">
                  Com IA Syntra Tech
                </span>
                <span className="text-xl font-extrabold text-amber-300">38%</span>
                <span className="block text-[11px] text-emerald-300 font-semibold">
                  +171% de abertura média
                </span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 text-right mt-1">
              * Valores de simulação para fins de demonstração
            </p>
          </div>

          {/* Gráfico */}
          <div className="bg-white p-4 rounded-2xl border border-[#DCE4EF] shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-purple-700" />
              Distribuição da Base Ativa da Renner
            </h3>

            <PieChart
              segments={segments}
              selectedSegmentId={selectedSegmentId}
              onSelectSegment={(segId) => {
                onSelectSegment(segId);
                // seleciona automaticamente o perfil do segmento
                const match = profiles.find((p) => p.segmentId === segId);
                if (match) onSelectProfile(match.id);
              }}
            />
          </div>

          {/* Perfis de Segmento */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-purple-800" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Perfis de Segmento
                </h3>
              </div>
              {customProfile && (
                <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full shadow-2xs">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  Perfil personalizado ativo
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {allProfiles.map((prof) => {
                const isActive = prof.id === activeProfileId;
                const isCustom = prof.isCustomGenerated;

                return (
                  <button
                    key={prof.id}
                    onClick={() => onSelectProfile(prof.id)}
                    className={`flex-1 min-w-[96px] p-2.5 rounded-xl text-center transition-all border relative cursor-pointer flex flex-col items-center ${
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

                    <img
                      src={prof.avatarUrl}
                      alt={prof.personaName}
                      className={`w-9 h-9 rounded-full object-cover border-2 ${
                        isCustom ? 'border-emerald-400' : 'border-purple-300'
                      }`}
                    />
                    <h4 className="mt-1.5 w-full font-bold text-[11px] truncate">
                      {prof.personaName}
                    </h4>
                    <span className="w-full text-[10px] opacity-75 truncate">
                      {prof.personaAge} anos
                    </span>
                    <span className="mt-1 w-full text-[9px] font-bold opacity-70 truncate">
                      {isCustom
                        ? '★ Seu perfil'
                        : `Segmento ${segmentLabels[prof.dominantStyle] ?? prof.dominantStyle}`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Descrição do perfil ativo */}
            <div className="mt-2 bg-white border border-[#DCE4EF] rounded-xl px-3 py-2">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-purple-800 mb-0.5">
                {currentActiveProfile.isCustomGenerated
                  ? 'Perfil personalizado • gerado por IA'
                  : `Persona representativa • Segmento ${
                      segmentLabels[currentActiveProfile.dominantStyle] ??
                      currentActiveProfile.dominantStyle
                    }`}
              </span>
              <p className="text-[11px] text-slate-600 leading-snug">
                <strong className="text-[#0A1C36]">{currentActiveProfile.personaName}</strong>
                {' — '}
                {currentActiveProfile.personaBio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COLUNA DIREITA: painel azul com rolagem própria */}
      <aside
        ref={panelRef}
        className="w-full xl:w-[440px] xl:flex-shrink-0 xl:overflow-y-auto border-t xl:border-t-0 xl:border-l border-[#DCE4EF] bg-[#E8EEF7] px-4 py-3"
      >
        <ThreeBlueBoxes profile={currentActiveProfile} />
      </aside>
    </section>
  );
};
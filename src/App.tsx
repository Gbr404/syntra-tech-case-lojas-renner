import React, { useState } from 'react';
import { Sidebar, Screen } from './components/Sidebar';
import { SegmentSection } from './components/SegmentSection';
import { TasteInteraction } from './components/TasteInteraction';
import { teamMembers, segmentsData, catalogProducts, defaultProfiles } from './data/mockData';
import { Product, SegmentProfile } from './types';
import { generateCustomProfileFromSelections } from './utils/aiRecommender';
import { Sparkles, Database, Lightbulb, Users, Linkedin, ExternalLink } from 'lucide-react';

const MAX_SELECTED = 4;

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('perfis');

  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>('executivo');
  const [activeProfileId, setActiveProfileId] = useState<string>('prof-executivo');

  const [customProfile, setCustomProfile] = useState<SegmentProfile | null>(() => {
    const saved = localStorage.getItem('syntra_custom_profile');
    return saved ? JSON.parse(saved) : null;
  });

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleToggleProduct = (product: Product) => {
    const exists = selectedProducts.some((p) => p.id === product.id);

    if (exists) {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
      return;
    }

    if (selectedProducts.length >= MAX_SELECTED) {
      showToast('Máximo de 4 peças. Remova uma para trocar.');
      return;
    }

    setSelectedProducts((prev) => [...prev, product]);
  };

  const handleClearSelection = () => {
    setSelectedProducts([]);
    showToast('Seleção reiniciada.');
  };

  const handleGenerateProfile = (guestName: string) => {
    if (selectedProducts.length < 3) {
      showToast('Selecione pelo menos 3 produtos.');
      return;
    }

    try {
      const newProfile = generateCustomProfileFromSelections(selectedProducts, guestName);
      setCustomProfile(newProfile);
      setActiveProfileId(newProfile.id);
      localStorage.setItem('syntra_custom_profile', JSON.stringify(newProfile));

      showToast(`✨ Perfil IA gerado com sucesso para ${newProfile.personaName}!`);

      // Provisório: leva para a tela 1, onde o 5º perfil ainda aparece.
      // No passo da tela 2 isso muda (o resultado fica ao lado, na própria tela).
      setActiveScreen('perfis');
    } catch (err) {
      console.error(err);
      showToast('Erro ao processar recomendações.');
    }
  };

  return (
    <div className="flex h-screen bg-[#F4F7FB] text-[#0A1C36] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#E78224] selection:text-white">
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0A1C36] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-amber-400 flex items-center space-x-2 text-xs font-bold animate-fadeIn">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <Sidebar active={activeScreen} onChange={setActiveScreen} />

      {/* key faz a rolagem voltar ao topo a cada troca de tela */}
      <main key={activeScreen} className="flex-1 overflow-y-auto">
        {/* TELA 1 */}
        {activeScreen === 'perfis' && (
          <SegmentSection
            segments={segmentsData}
            profiles={defaultProfiles}
            activeProfileId={activeProfileId}
            selectedSegmentId={selectedSegmentId}
            customProfile={customProfile}
            onSelectSegment={(segId) => setSelectedSegmentId(segId)}
            onSelectProfile={(profId) => setActiveProfileId(profId)}
            onGoToAbout={() => setActiveScreen('sobre')}
          />
        )}

        {/* TELA 2 */}
        {activeScreen === 'experimentar' && (
          <TasteInteraction
            products={catalogProducts}
            selectedProducts={selectedProducts}
            onToggleProduct={handleToggleProduct}
            onClearSelection={handleClearSelection}
            onGenerateProfile={handleGenerateProfile}
          />
        )}

        {/* TELA 3: equipe, sobre a Syntra e rodapé */}
        {activeScreen === 'sobre' && (
          <div className="min-h-full flex flex-col">
            <section className="flex-1 w-full bg-[#F4F7FB] py-6 px-4">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Equipe */}
                <div>
                  <div className="flex items-center space-x-1.5 mb-2.5">
                    <Users className="w-3.5 h-3.5 text-slate-600" />
                    <h3 className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                      Equipe Syntra Tech (Participantes)
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="bg-white/90 p-2.5 rounded-xl border border-[#DCE4EF] flex flex-col items-center text-center shadow-xs hover:shadow-sm transition-shadow"
                      >
                        <div className="relative">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#E78224] shadow-xs"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                member.name
                              )}&background=0A1C36&color=F4F7FB`;
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
                </div>

                {/* Sobre a Syntra e a parceria com a Renner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded-2xl border border-[#DCE4EF]">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#E78224]" />
                      <h4 className="font-bold text-slate-900 text-sm">O que é a Syntra Tech?</h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      A Syntra Tech é a proposta de uma solução tecnológica que utiliza inteligência
                      artificial e análise de comportamento para transformar dados em experiências de
                      compra mais relevantes e personalizadas.
                    </p>
                  </div>

                  <div className="bg-[#0A1C36] p-4 rounded-2xl text-white">
                    <h4 className="font-bold text-sm flex items-center gap-2 mb-2">
                      <Database className="w-4 h-4 text-[#E78224]" />
                      Nossa proposta para a Renner
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Utilizar inteligência artificial para identificar microssegmentos de consumidores
                      e gerar recomendações, vitrines, e-mails e conteúdos personalizados de acordo com
                      os interesses de cada público.
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-700">
                      <p className="text-amber-400 font-bold italic text-[11px]">Sob medida, em escala.</p>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <Lightbulb className="w-4 h-4 text-[#E78224] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      Tecnologia faz a diferença quando transforma dados em experiências que realmente
                      fazem sentido para as pessoas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rodapé compacto */}
            <footer className="w-full bg-[#0A1C36] text-white py-4 px-4 border-t border-slate-800 text-center">
              <div className="max-w-4xl mx-auto space-y-1">
                <div className="flex items-center justify-center space-x-2 text-xs">
                  <span className="font-extrabold tracking-tight font-['Syne',sans-serif]">
                    SYNTRA<span className="text-[#E78224]">.TECH</span>
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300 font-medium">Instituto Percorre</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-amber-400 font-bold">Lojas Renner Case</span>
                </div>
                <p className="text-slate-400 text-[10px]">
                  Protótipo desenvolvido para demonstração prática de hiperpersonalização com Inteligência Artificial em escala.
                </p>
                <p className="text-[9px] text-slate-500 font-mono">
                  &copy; {new Date().getFullYear()} Syntra Tech. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}
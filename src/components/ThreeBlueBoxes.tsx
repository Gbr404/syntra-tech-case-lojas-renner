import React, { useState } from 'react';
import { Mail, Instagram, ShoppingBag, Copy, Check, ArrowRight } from 'lucide-react';
import { Product, SegmentProfile } from '../types';
import rennerLogo from '../../assets/Renner_Logo.png';

interface ThreeBlueBoxesProps {
  profile: SegmentProfile;
  onLikeProduct?: (product: Product) => void;
}

export const ThreeBlueBoxes: React.FC<ThreeBlueBoxesProps> = ({ profile }) => {
  const [copiedType, setCopiedType] = useState<'email' | 'social' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'social') => {
    navigator.clipboard?.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="space-y-4 pt-2 animate-fadeIn">
      {/* Faixa de contexto */}
      <div className="flex items-center bg-blue-50/80 border border-blue-200 px-3.5 py-2 rounded-xl text-blue-900 text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse flex-shrink-0"></span>
          <span className="font-bold">
            Recomendações Geradas por IA para: {profile.personaName} ({profile.personaAge} anos)
          </span>
        </div>
      </div>

      {/* RECOMENDAÇÃO 1: Vitrine de Produtos */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-4 rounded-2xl border border-blue-400/30 shadow-md">
        <div className="flex items-center justify-between mb-3 border-b border-blue-500/20 pb-2">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-blue-500/20 text-blue-300 rounded-lg">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-blue-300 uppercase block">
                Recomendação 1 de 3 • E-commerce Renner
              </span>
              <h4 className="text-sm font-extrabold text-white">
                Vitrine de Produtos Recomendados por IA
              </h4>
            </div>
          </div>
          <span className="text-[10px] bg-blue-500/30 text-blue-200 font-bold px-2 py-0.5 rounded-full">
            {profile.recommendedProducts.length} Peças Selecionadas
          </span>
        </div>

        <p className="text-xs text-blue-200/90 mb-3 leading-relaxed">
          Algoritmo de recomendação baseado no histórico de navegação e na afinidade de estilo do perfil.
        </p>

        {/* Lista de produtos: cabe no painel estreito com 3 ou 4 peças */}
        <div className="space-y-2">
          {profile.recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 rounded-xl p-2 transition-all"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[9px] font-bold text-amber-300 uppercase truncate">
                  {product.tag}
                </span>
                <h5 className="text-xs font-bold text-white line-clamp-1">{product.name}</h5>
                <p className="text-[10px] text-blue-200 line-clamp-1 mb-1">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-300">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[9px] text-slate-300 bg-white/10 px-1.5 py-0.5 rounded">
                    Score IA 98%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMENDAÇÃO 2: E-mail Marketing */}
      <div className="bg-gradient-to-br from-[#0F284E] to-[#1E3A8A] text-white p-4 rounded-2xl border border-blue-400/30 shadow-md">
        <div className="flex items-center justify-between mb-3 border-b border-blue-500/20 pb-2">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-blue-500/20 text-blue-300 rounded-lg">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-blue-300 uppercase block">
                Recomendação 2 de 3 • CRM & E-mail Marketing
              </span>
              <h4 className="text-sm font-extrabold text-white">
                Texto de E-mail Personalizado por IA
              </h4>
            </div>
          </div>
          <button
            onClick={() =>
              handleCopy(
                `Assunto: ${profile.emailMarketing.subject}\n\n${profile.emailMarketing.body}`,
                'email'
              )
            }
            className="flex items-center space-x-1 text-[10px] font-bold bg-white/10 hover:bg-white/20 text-blue-200 px-2 py-1 rounded-md transition-colors cursor-pointer"
          >
            {copiedType === 'email' ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-300">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copiar texto</span>
              </>
            )}
          </button>
        </div>

        {/* Mock do e-mail */}
        <div className="bg-white text-slate-800 rounded-xl p-3.5 shadow-inner text-xs space-y-2">
          <div className="border-b border-slate-100 pb-2">
            <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-slate-500 mb-1">
              <span>
                <strong>De:</strong> Lojas Renner &lt;novidades@lojasrenner.com.br&gt;
              </span>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                Segmento: {profile.dominantStyle.toUpperCase()}
              </span>
            </div>
            <p className="font-bold text-slate-900 text-xs">
              <strong>Assunto:</strong> {profile.emailMarketing.subject}
            </p>
            <p className="text-[11px] text-slate-500 italic mt-0.5">
              <strong>Prévia:</strong> {profile.emailMarketing.preheader}
            </p>
          </div>

          <div className="pt-1 text-slate-700 leading-relaxed text-xs">
            {profile.emailMarketing.body}
          </div>

          <div className="pt-2 text-center">
            <button className="bg-[#E78224] hover:bg-[#d67215] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all inline-flex items-center gap-1.5">
              <span>{profile.emailMarketing.callToAction}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* RECOMENDAÇÃO 3: Redes Sociais */}
      <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white p-4 rounded-2xl border border-blue-400/30 shadow-md">
        <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-2">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-pink-500/20 text-pink-300 rounded-lg">
              <Instagram className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-pink-300 uppercase block">
                Recomendação 3 de 3 • Social Media & Criativos
              </span>
              <h4 className="text-sm font-extrabold text-white">
                Sugestão de Legenda & Copy para Redes Sociais (IA)
              </h4>
            </div>
          </div>
          <button
            onClick={() =>
              handleCopy(
                `${profile.socialMediaPost.caption}\n\n${profile.socialMediaPost.hashtags.join(' ')}`,
                'social'
              )
            }
            className="flex items-center space-x-1 text-[10px] font-bold bg-white/10 hover:bg-white/20 text-pink-200 px-2 py-1 rounded-md transition-colors cursor-pointer"
          >
            {copiedType === 'social' ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-300">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copiar Post</span>
              </>
            )}
          </button>
        </div>

        {/* Mock do post */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-[1.5px]">
              <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={rennerLogo}
                  alt="Logo Lojas Renner"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
            </div>
            <div>
              <span className="font-bold text-xs text-white">lojasrenner</span>
              <span className="text-[10px] text-slate-400 ml-1.5">
                • {profile.socialMediaPost.platform}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed">
            {profile.socialMediaPost.caption}
          </p>

          <div className="flex flex-wrap gap-1 pt-1">
            {profile.socialMediaPost.hashtags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] text-blue-400 font-medium hover:underline cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>CTA: {profile.socialMediaPost.callToAction}</span>
            <span className="text-amber-400 font-bold text-[10px]">
              IA Syntra Engine
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
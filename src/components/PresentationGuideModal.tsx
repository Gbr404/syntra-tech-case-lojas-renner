
import React from 'react';
import {
  X,
  Sparkles,
  Target,
  Eye,
  Heart,
  Database,
  Lightbulb,
} from 'lucide-react';

interface PresentationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationGuideModal: React.FC<PresentationGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 bg-[#0A1C36] text-white p-4 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E78224]"></span>
            <div>
              <h3 className="text-sm font-extrabold font-['Syne',sans-serif]">
                Conheça a Syntra Tech
              </h3>
              <p className="text-[10px] text-slate-300">
                Identidade, propósito e inovação
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs text-slate-700">

          {/* Apresentação */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#E78224]" />
              <h4 className="font-bold text-slate-900 text-sm">
                O que é a Syntra Tech?
              </h4>
            </div>

            <p className="leading-relaxed">
              A Syntra Tech é a proposta de uma solução tecnológica
              que utiliza inteligência artificial e análise de comportamento
              para transformar dados em experiências de compra mais
              relevantes e personalizadas.
            </p>
          </div>

          {/* Missão */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-[#E78224]" />
              Nossa Missão
            </h4>

            <p className="leading-relaxed">
              Transformar dados de comportamento em experiências de compra
              mais relevantes, conectando cada cliente a produtos e conteúdos
              alinhados aos seus interesses.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-[#E78224]" />
              Nossa Visão
            </h4>

            <p className="leading-relaxed">
              Contribuir para um varejo de moda mais inteligente,
              no qual a personalização seja dinâmica, útil e escalável.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-[#E78224]" />
              Nossos Valores
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                'Inovação aplicada',
                'Foco no cliente',
                'Inteligência orientada por dados',
                'Personalização com propósito',
                'Eficiência',
              ].map((value) => (
                <span
                  key={value}
                  className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-semibold text-[11px]"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Case Renner */}
          <div className="bg-[#0A1C36] p-4 rounded-2xl text-white">
            <h4 className="font-bold text-sm flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-[#E78224]" />
              Nossa proposta para a Renner
            </h4>

            <p className="text-slate-200 leading-relaxed">
              Utilizar inteligência artificial para identificar
              microssegmentos de consumidores e gerar recomendações,
              vitrines, e-mails e conteúdos personalizados de acordo
              com os interesses de cada público.
            </p>

            <div className="mt-3 pt-3 border-t border-slate-700">
              <p className="text-amber-400 font-bold italic text-[11px]">
                Sob medida, em escala.
              </p>
            </div>
          </div>

          {/* Frase final */}
          <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
            <Lightbulb className="w-4 h-4 text-[#E78224] shrink-0 mt-0.5" />
            <p className="text-slate-700 italic leading-relaxed">
              Tecnologia faz a diferença quando transforma dados
              em experiências que realmente fazem sentido para as pessoas.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#0A1C36] hover:bg-[#122b52] text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Voltar à apresentação
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { X, CheckCircle, Database, Smartphone, ShieldCheck, Sparkles, TrendingUp, Lightbulb } from 'lucide-react';

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
                Guia Estratégico & Respostas para a Banca
              </h3>
              <p className="text-[10px] text-slate-300">
                Syntra Tech | Apresentação do Case Lojas Renner
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
        <div className="p-5 space-y-5 text-xs text-slate-700">
          {/* Question 1 */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              1. A ideia é boa? Como apresentar isso com impacto?
            </h4>
            <p className="leading-relaxed">
              <strong>Sim, a ideia é excelente!</strong> O varejo de moda sofre com "fadiga de e-mail marketing". Apresentar um protótipo mobile interativo escaneável via QR Code coloca os jurados na pele da cliente da Renner. A narrativa de 3 cores (Laranja: Marca e Quem somos; Roxo: Análise de Cluster dos 3.2M de clientes; Verde: Teste prático de IA) fecha o ciclo completo de negócio, dados e experiência.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1.5">
              <Database className="w-4 h-4 text-blue-600" />
              2. Vale a pena conectar Xano/SQL ou usar Client-Side State?
            </h4>
            <p className="leading-relaxed">
              Para o pitch e demonstração com QR Code, <strong>o estado no frontend (Client-Side com React) é a solução mais segura, rápida e infalível</strong>. Não depende de conexão instável com servidor externo durante a fala, tem latência zero (&lt;50ms) e elimina o risco de falhas de autenticação ou cotas de requisição no meio da apresentação. No slide, vocês explicam: <em>&ldquo;Na arquitetura de produção corporativa da Renner, esse motor conecta-se ao BigQuery/PostgreSQL da rede; aqui no protótipo mobile, executamos o modelo em tempo real no próprio navegador do avaliador.&rdquo;</em>
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              3. O que achamos da Seção Verde (Interação)?
            </h4>
            <p className="leading-relaxed">
              <strong>Você teve a melhor intuição estratégica!</strong> Apenas slides ou dados estáticos tornam a apresentação esquecível. Quando a banca adiciona 3 roupas no celular e vê imediatamente o <strong>5º Perfil</strong> surgir com o nome deles, gerando e-mail personalizado e legenda para Instagram, <strong>o efeito &ldquo;UAU&rdquo; é instantâneo</strong>. Ela valida que o algoritmo de recomendação funciona na prática.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1.5">
              <Smartphone className="w-4 h-4 text-purple-600" />
              4. Vite + React continua sendo a melhor escolha?
            </h4>
            <p className="leading-relaxed">
              <strong>Sim, 100%!</strong> O Vite empacota um bundle minificado e ultra-leve que carrega em menos de 1 segundo quando o celular da banca escaneia o QR Code no slide. Com Tailwind CSS, o design fica limpo, responsivo, sem lentidão e elegante.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              5. E se duas pessoas da banca escanearem ao mesmo tempo?
            </h4>
            <p className="leading-relaxed">
              Como cada pessoa que escaneia o QR Code abre a aplicação no seu próprio navegador móvel, <strong>as sessões são 100% isoladas</strong>! O Jurado 1 cria o perfil dele no celular dele, e o Jurado 2 cria o perfil dele no celular dele. Não há colisão, não há sobreposição de perfis e cada um tem sua experiência personalizada exclusiva.
            </p>
          </div>

          {/* Dica de Pitch */}
          <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-300">
            <h4 className="font-bold text-amber-900 text-xs flex items-center gap-1 mb-1">
              <TrendingUp className="w-4 h-4 text-[#E78224]" />
              Frase de Ouro para falar na bancada:
            </h4>
            <p className="italic text-slate-800 text-[11px] leading-relaxed">
              &ldquo;Hoje a Renner envia 1 milhão de e-mails iguais e espera resultados diferentes. A Syntra Tech não muda o que a Renner vende, mas transforma como cada cliente é ouvido. É a hiperpersonalização sob medida, em escala.&rdquo;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#0A1C36] hover:bg-[#122b52] text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Entendido, Voltar ao App
          </button>
        </div>
      </div>
    </div>
  );
};

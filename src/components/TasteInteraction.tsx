import React, { useState } from 'react';
import { Heart, ShoppingBag, Sparkles, Check, RefreshCw, ArrowUp, Zap, HelpCircle } from 'lucide-react';
import { Product } from '../types';

interface TasteInteractionProps {
  products: Product[];
  selectedProducts: Product[];
  onToggleProduct: (product: Product) => void;
  onClearSelection: () => void;
  onGenerateProfile: (name: string) => void;
}

export const TasteInteraction: React.FC<TasteInteractionProps> = ({
  products,
  selectedProducts,
  onToggleProduct,
  onClearSelection,
  onGenerateProfile,
}) => {
  const [userName, setUserName] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todos');

  const selectedCount = selectedProducts.length;
  const isReady = selectedCount >= 3;

  const categories = [
    { id: 'todos', label: 'Todos os Estilos' },
    { id: 'executivo', label: 'Executivo' },
    { id: 'jovem', label: 'Jovem & Festa' },
    { id: 'casual', label: 'Casual Chic' },
    { id: 'athleisure', label: 'Athleisure' },
  ];

  const filteredProducts =
    activeCategoryFilter === 'todos'
      ? products
      : products.filter((p) => p.style === activeCategoryFilter);

  const handleGenerate = () => {
    if (!isReady) return;
    onGenerateProfile(userName.trim() || 'Avaliador da Banca');
  };

  return (
    <section id="sessao-interacao" className="w-full bg-[#EBF6EE] border-t border-emerald-200 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-5">
        {/* Section Header (Sessão Verde) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200 pb-3">
          <div className="flex items-center space-x-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-emerald-200"></span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Experimente a IA
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#0A1C36]">
                Simulação de Navegação & Carrinho Renner
              </h2>
            </div>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-300 self-start sm:self-auto">
            Interação Individual no seu Celular
          </span>
        </div>

        {/* Instructions banner */}
        <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-3">
          <div className="flex items-start gap-2.5">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">
                Como Funciona na Apresentação:
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Adicione <strong>3 ou 4 peças</strong> que combinam com seu estilo ao carrinho abaixo. A IA da Syntra processará seu comportamento de navegação instantaneamente e criará o <strong>5º Perfil</strong> na Sessão Roxa com e-mail e posts personalizados com seu nome!
              </p>
            </div>
          </div>

          {/* Action Row: Counter + Name Input + Generate Button */}
          <div className="pt-2 border-t border-emerald-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="flex-1">
              <label htmlFor="user-name-input" className="text-[11px] font-bold text-slate-700 block mb-1">
                Seu Nome para o Teste (opcional):
              </label>
              <input
                id="user-name-input"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ex: Beatriz, Andressa, João..."
                className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="text-center px-3 py-1.5 bg-emerald-100/70 border border-emerald-300 rounded-lg">
                <span className="text-[10px] text-emerald-900 font-bold uppercase block">
                  Selecionados
                </span>
                <span className="text-sm font-black text-emerald-800">
                {selectedCount} / 4 <span className="text-[10px] font-bold">(mín. 3)</span>
                 </span>
              </div>

              {selectedCount > 0 && (
                <button
                  onClick={onClearSelection}
                  className="px-2.5 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer"
                  title="Limpar seleção"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={handleGenerate}
                disabled={!isReady}
                className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  isReady
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md ring-2 ring-emerald-400 hover:scale-[1.02]'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {isReady
                    ? '⚡ Gerar Perfil IA na Sessão Roxa'
                    : `Escolha mais ${3 - selectedCount} peça${3 - selectedCount > 1 ? 's' : ''}`}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-full font-bold transition-colors whitespace-nowrap cursor-pointer text-[11px] ${
                activeCategoryFilter === cat.id
                  ? 'bg-[#0A1C36] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-emerald-100/50 border border-emerald-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de 12 Produtos da Renner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredProducts.map((product) => {
            const isSelected = selectedProducts.some((p) => p.id === product.id);

            return (
              <div
                key={product.id}
                onClick={() => onToggleProduct(product)}
                className={`bg-white rounded-2xl overflow-hidden border transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-emerald-500 shadow-md ring-3 ring-emerald-400/40 bg-emerald-50/30'
                    : 'border-slate-200 hover:border-emerald-300 shadow-2xs'
                }`}
              >
                {/* Product Image + Tag + Selection Badge */}
                <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#0A1C36]/80 backdrop-blur-xs text-[9px] font-bold text-white px-2 py-0.5 rounded-full">
                    {product.tag}
                  </span>

                  {/* Like / Add Button */}
                  <div
                    className={`absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isSelected
                        ? 'bg-emerald-600 text-white scale-110 shadow-sm'
                        : 'bg-white/90 text-slate-700 hover:scale-110 shadow-xs'
                    }`}
                  >
                    {isSelected ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-2.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 block">
                    {product.style}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mb-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
                    <span className="text-xs font-extrabold text-[#0A1C36]">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isSelected ? 'No Carrinho ✓' : '+ Adicionar'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating helper when products are selected */}
        {selectedCount >= 3 && (
          <div className="sticky bottom-4 z-30 bg-[#0A1C36] text-white p-3 rounded-2xl shadow-xl border border-emerald-400 flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold text-emerald-300">
                {selectedCount} peças no carrinho!
              </span>
            </div>
            <button
              onClick={handleGenerate}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-md transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Gerar Perfil 05 na Sessão Roxa</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

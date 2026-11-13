import { catalogProducts } from '../data/mockData';
import { Product, SegmentProfile, StyleCategory } from '../types';

const MIN_RECOMMENDED = 3;
const MAX_RECOMMENDED = 4;

export interface StyleScore {
  style: StyleCategory;
  count: number;
}

export function calculateDominantStyles(selectedProducts: Product[]): {
  primary: StyleCategory;
  secondary?: StyleCategory;
  distribution: Record<StyleCategory, number>;
} {
  const distribution: Record<StyleCategory, number> = {
    executivo: 0,
    jovem: 0,
    casual: 0,
    athleisure: 0,
  };

  selectedProducts.forEach((p) => {
    distribution[p.style] = (distribution[p.style] || 0) + 1;
  });

  const sorted = (Object.keys(distribution) as StyleCategory[])
    .map((style) => ({ style, count: distribution[style] }))
    .sort((a, b) => b.count - a.count);

  return {
    primary: sorted[0]?.style || 'casual',
    secondary: sorted[1]?.count > 0 ? sorted[1].style : undefined,
    distribution,
  };
}

export function generateCustomProfileFromSelections(
  selectedProducts: Product[],
  guestName = 'Convidado da Apresentação'
): SegmentProfile {
  if (selectedProducts.length === 0) {
    throw new Error('Pelo menos um produto deve ser selecionado');
  }

  const { primary, secondary } = calculateDominantStyles(selectedProducts);

  // Generate dynamic title and persona bio
  let styleTitle = 'Estilo Sob Medida';
  let personaBio = 'Perfil híbrido com escolhas refinadas.';
  let personaAge = 28;

  if (primary === 'executivo') {
    if (secondary === 'casual') {
      styleTitle = 'Perfil Smart Business & Casual Chic';
      personaBio = 'Combina sofisticação corporativa com toques descontraídos e conforto para a transição entre trabalho e vida social.';
      personaAge = 35;
    } else if (secondary === 'jovem') {
      styleTitle = 'Perfil Executivo Contemporâneo';
      personaBio = 'Aprecia a imponência de cortes de alfaiataria mesclados a tendências jovens de moda e atitude.';
      personaAge = 29;
    } else {
      styleTitle = 'Perfil Alfaiataria & Autoridade Corporativa';
      personaBio = 'Foco em peças nobres, presença marcante, pontualidade e caimento impecável para negócios.';
      personaAge = 39;
    }
  } else if (primary === 'jovem') {
    if (secondary === 'athleisure') {
      styleTitle = 'Perfil Street-Clubber & Festival';
      personaBio = 'Alta conexão com redes sociais, tendências instantâneas, conforto urbano e peças marcantes para a noite.';
      personaAge = 22;
    } else {
      styleTitle = 'Perfil Trendsetter & Noite Vibrante';
      personaBio = 'Busca designs autênticos, tecidos modernos, cut-outs e silhuetas que se destacam em festas e eventos sociais.';
      personaAge = 23;
    }
  } else if (primary === 'casual') {
    styleTitle = 'Perfil Minimalista Orgânico & Bem-Estar';
    personaBio = 'Prioriza tecidos de fibras naturais, durabilidade, caimento fluido e paletas suaves para o cotidiano descomplicado.';
    personaAge = 32;
  } else {
    styleTitle = 'Perfil Performance Urbana & Athleisure';
    personaBio = 'Valoriza tecnologia de tecidos leves, estética utilitária moderna e flexibilidade para transitar pelo ritmo acelerado da cidade.';
    personaAge = 26;
  }

  // Find 3 curated recommendations: pick user's liked items first, then add complementary catalog items
  const selectedIds = new Set(selectedProducts.map((p) => p.id));
  const recommended: Product[] = selectedProducts.slice(0, MAX_RECOMMENDED);


  // Fill up to 3 with items matching the primary or secondary style
  if (recommended.length < MIN_RECOMMENDED) {
  const complements = catalogProducts.filter(
    (p) => !selectedIds.has(p.id) && (p.style === primary || p.style === secondary)
  );
  recommended.push(...complements.slice(0, MIN_RECOMMENDED - recommended.length));
  }

  // Dynamic AI Email copywriting
  const emailMarketing = generateCustomEmailCopy(guestName, primary, secondary, recommended);

  // Dynamic AI Social Media caption
  const socialMediaPost = generateCustomSocialCopy(primary, secondary);

  return {
    id: 'prof-custom-user',
    segmentId: `custom-${primary}`,
    title: `Perfil 05: ${styleTitle} (Gerado por IA)`,
    personaName: `${guestName}`,
    personaAge,
    personaBio,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    dominantStyle: primary,
    recommendedProducts: recommended,
    emailMarketing,
    socialMediaPost,
    isCustomGenerated: true,
  };
}

function generateCustomEmailCopy(
  name: string,
  primary: StyleCategory,
  secondary: StyleCategory | undefined,
  products: Product[]
) {
  const prodNames = products.map((p) => p.name).slice(0, 2).join(' e ');

  let subject = '';
  let preheader = '';
  let body = '';

  if (primary === 'executivo') {
    subject = `${name}, criamos sua cápsula sob medida baseada nas suas escolhas ✨`;
    preheader = 'Sua alfaiataria personalizada na Renner com caimento perfeito para sua rotina.';
    body = `Olá, ${name}! Analisamos em tempo real suas preferências por peças de corte estruturado. A IA Syntra combinou suas escolhas (${prodNames}) para criar uma composição sofisticada e funcional. Seu look exclusivo te espera com 15% OFF na primeira compra.`;
  } else if (primary === 'jovem') {
    subject = `${name}, o match perfeito com seu estilo tá aqui no seu app Renner 🔥`;
    preheader = 'Suas escolhas no showcase viraram uma curadoria exclusiva para o seu próximo rolê.';
    body = `E aí, ${name}! Seu radar de tendências foi mapeado pelo nosso algoritmo. Juntamos suas peças favoritas (${prodNames}) com dicas de styling exclusivas para você brilhar onde for. Garanta já com entrega express!`;
  } else if (primary === 'casual') {
    subject = `${name}, seu armário inteligente com o conforto que você valoriza 🍃`;
    preheader = 'Fibras nobres, cortes atemporais e leveza para os seus melhores dias.';
    body = `Olá, ${name}! A partir das peças que você escolheu na nossa vitrine, a IA Syntra desenhou um mix leve e versátil destacando ${prodNames}. Roupas pensadas para viver com elegância sem esforço.`;
  } else {
    subject = `${name}, atitude e tecnologia têxtil feitas para o seu movimento ⚡`;
    preheader = 'Conexão entre estilo streetwear e a máxima mobilidade urbana.';
    body = `Fala, ${name}! Seu perfil selecionou o que há de mais moderno em design funcional na Renner. Separamos ${prodNames} com tecnologia respirável para acompanhar o seu dia sem desacelerar.`;
  }

  return {
    subject,
    preheader,
    body,
    callToAction: 'Ver Meu Look Hiperpersonalizado',
  };
}

function generateCustomSocialCopy(primary: StyleCategory, secondary: StyleCategory | undefined) {
  if (primary === 'executivo') {
    return {
      platform: 'Instagram' as const,
      caption: 'A elegância contemporânea não precisa ser engessada. 💼✨ Quando a alfaiataria encontra o conforto do seu ritmo, o resultado é poder em cada detalhe. Conheça a seleção personalizada da Renner feita pela IA da Syntra.',
      hashtags: ['#RennerAlfaiataria', '#SmartBusiness', '#EstiloSobMedida', '#SyntraTech'],
      callToAction: 'Toque na sacola para garantir suas peças favoritas',
    };
  } else if (primary === 'jovem') {
    return {
      platform: 'TikTok' as const,
      caption: 'Quando a IA acerta em cheio o styling da sua sexta-feira 🖤⛓️ Montamos um combo dos sonhos com as peças que estão bombando no app da Renner. Conta nos comentários: qual foi sua favorita?',
      hashtags: ['#RennerDrop', '#LookDaNoite', '#TrendAlert', '#FYPFashion'],
      callToAction: 'Arrasta pra cima e aproveite frete grátis hoje',
    };
  } else if (primary === 'casual') {
    return {
      platform: 'Instagram' as const,
      caption: 'Texturas naturais, caimento solto e a paz de um look que te abraça. 🌾 A Renner traz o conceito de guarda-roupa inteligente para o seu dia a dia. Menos excesso, muito mais identidade.',
      hashtags: ['#RennerCasual', '#MinimalismoChic', '#FibrasNaturais', '#ViverComEstilo'],
      callToAction: 'Confira a coleção no link da bio',
    };
  } else {
    return {
      platform: 'Instagram' as const,
      caption: 'A cidade é a nossa passarela e o movimento não para. 🏙️👟 Tecidos inteligentes + silhueta streetwear para quem vive em alta velocidade com conforto real.',
      hashtags: ['#RennerStreet', '#TechwearBrasil', '#AthleisureStyle', '#ModaUrbana'],
      callToAction: 'Veja as novidades na vitrine interativa',
    };
  }
}

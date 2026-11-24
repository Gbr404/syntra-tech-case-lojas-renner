import { Product, SegmentData, SegmentProfile, TeamMember } from '../types';
import linhoImg from '../../assets/produtos/linho.webp';
import cutoutImg from '../../assets/produtos/cutout.jpg';
import windbreakerImg from '../../assets/produtos/windbreaker.avif';
import SaiaCargoImg from '../../assets/produtos/saiacargo.jpg';

export const teamMembers: TeamMember[] = [
  {
    id: 'm1',
    name: 'Gabriel Sá Bortelli',
    role: 'Tech Lead & IA Strategy',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    id: 'm2',
    name: 'Miriã Fernanda',
    role: 'Product & Data Analyst',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    id: 'm3',
    name: 'Gabriel Mariano',
    role: 'Fashion & Marketing Specialist',
    avatar: 'https://www.linkedin.com/in/gabrielmarianodourado/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQpXWaNyDSLuPKPVeixTY%2Bg%3D%3D',
    linkedinUrl: 'https://www.linkedin.com/in/gabrielmarianodourado/',
  },
  {
    id: 'm4',
    name: 'Julia Neves',
    role: 'Full Stack Engineer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    id: 'm5',
    name: 'Isaac Cunha',
    role: 'Full Stack Engineer',
    avatar: 'Uhttps://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://www.linkedin.com',
  },
];

export const segmentsData: SegmentData[] = [
  {
    id: 'executivo',
    name: 'Moda Executiva & Alfaiataria',
    percentage: 28,
    color: '#0A2540', // Deep Navy
    description: 'Clientes de 30-55 anos com alta recorrência buscando sofisticação, cortes estruturados e peças versáteis para o trabalho.',
    audienceShare: '890.000 clientes',
    estimatedGrowth: '+24% em ticket médio',
  },
  {
    id: 'jovem',
    name: 'Moda Jovem, Festas & Trends',
    percentage: 34,
    color: '#F08C2E', // Syntra Ochre Orange
    description: 'Clientes de 18-26 anos orientados por tendências do TikTok, festivais e saídas noturnas com alta sensibilidade a novidades.',
    audienceShare: '1.080.000 clientes',
    estimatedGrowth: '+42% em taxa de clique',
  },
  {
    id: 'casual',
    name: 'Casual Chic & Básico Premium',
    percentage: 22,
    color: '#3B82F6', // Tech Blue
    description: 'Clientes de 25-45 anos que priorizam conforto premium, linho, algodão nobre e looks descomplicados para o dia a dia.',
    audienceShare: '700.000 clientes',
    estimatedGrowth: '+18% de conversão',
  },
  {
    id: 'athleisure',
    name: 'Athleisure & Streetwear',
    percentage: 16,
    color: '#10B981', // Emerald
    description: 'Público dinâmico focado em tecnologia têxtil, estética urbana, tênis casuais e roupas transição academia-rua.',
    audienceShare: '510.000 clientes',
    estimatedGrowth: '+31% em recompras',
  },
];

export const catalogProducts: Product[] = [
  // Executivo
  {
    id: 'p1',
    name: 'Blazer Estruturado em Crepe Alfaiataria',
    category: 'Casacos & Blazers',
    style: 'executivo',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=80',
    tag: 'Mais Vendido Executivo',
    description: 'Modelagem impecável com ombreiras leves e fechamento com botão forrado.',
  },
  {
    id: 'p2',
    name: 'Calça Cenoura Alfaiataria com Cinto Fivela',
    category: 'Calças',
    style: 'executivo',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&auto=format&fit=crop&q=80',
    tag: 'Elegância Minimalista',
    description: 'Cintura alta com caimento impecável para reuniões e dias de escritório.',
  },
  {
    id: 'p3',
    name: 'Camisa Feminina em Cetim Acetinado',
    category: 'Camisas',
    style: 'executivo',
    price: 179.90,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&auto=format&fit=crop&q=80',
    tag: 'Toque de Seda',
    description: 'Brilho discreto, gola clássica e punhos estruturados.',
  },

  // Jovem / Festas
  {
    id: 'p4',
    name: 'Vestido Curto Cut-Out Metalizado',
    category: 'Vestidos',
    style: 'jovem',
    price: 219.90,
    image: cutoutImg,
    tag: 'Trending TikTok',
    description: 'Recortes laterais modernos e tecido com acabamento acetinado de impacto.',
  },
  {
    id: 'p5',
    name: 'Top Corset Estruturado em Vinil',
    category: 'Croppeds & Tops',
    style: 'jovem',
    price: 139.90,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80',
    tag: 'Noite & Balada',
    description: 'Decote coração marcante para composições noturnas ousadas.',
  },
  {
    id: 'p6',
    name: 'Saia Midi Cargo com Fenda Frontal',
    category: 'Saias',
    style: 'jovem',
    price: 169.90,
    image: SaiaCargoImg,
    tag: 'Y2K Fever',
    description: 'Bolsos utilitários e tecido tecnológico leve em modelagem reta.',
  },

  // Casual Chic
  {
    id: 'p7',
    name: 'Camisa 100% Linho Puro Areia Natural',
    category: 'Camisas & Tops',
    style: 'casual',
    price: 239.90,
    image: linhoImg,
    tag: 'Fibra Natural Sustentável',
    description: 'Respirabilidade superior e visual clean para dias ensolarados.',
  },
  {
    id: 'p8',
    name: 'Calça Wide Leg Jeans 100% Algodão Eco',
    category: 'Jeanswear',
    style: 'casual',
    price: 219.90,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80',
    tag: 'Denim Conforto',
    description: 'Lavagem clara sustentável com corte reto amplo de caimento fluido.',
  },
  {
    id: 'p9',
    name: 'Vestido Midi Fluido com Amarração',
    category: 'Vestidos',
    style: 'casual',
    price: 259.90,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&auto=format&fit=crop&q=80',
    tag: 'Almoço de Domingo',
    description: 'Estampa botânica suave e cintura ajustável com faixa.',
  },

  // Athleisure & Streetwear
  {
    id: 'p10',
    name: 'Jaqueta Windbreaker Oversized Neon Accent',
    category: 'Streetwear',
    style: 'athleisure',
    price: 279.90,
    image: windbreakerImg,
    tag: 'Corta Vento Dry',
    description: 'Proteção contra vento e chuva leve com bolsos ocultos e capuz embutido.',
  },
  {
    id: 'p11',
    name: 'Calça Jogger Techwear com Ajuste no Tornozelo',
    category: 'Calças Casuais',
    style: 'athleisure',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&auto=format&fit=crop&q=80',
    tag: 'Treino & Rua',
    description: 'Tecido com elastano quadridirecional e acabamento repelente a poeira.',
  },
  {
    id: 'p12',
    name: 'Tênis Casual Runner Solado Chunky',
    category: 'Calçados',
    style: 'athleisure',
    price: 329.90,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80',
    tag: 'Ultraleve 240g',
    description: 'Amortecimento com espuma responsiva e cabedal em knit respirável.',
  },
];

export const defaultProfiles: SegmentProfile[] = [
  {
    id: 'prof-executivo',
    segmentId: 'executivo',
    title: 'Perfil 01: Moda Executiva & Alfaiataria',
    personaName: 'Helena Martins',
    personaAge: 42,
    personaBio: 'Representa clientes com agenda intensa de reuniões e viagens, que buscam peças que transmitam autoridade sem abrir mão do conforto prático.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    dominantStyle: 'executivo',
    recommendedProducts: [
      catalogProducts[0], // Blazer
      catalogProducts[1], // Calça Cenoura
      catalogProducts[2], // Camisa Cetim
    ],
    emailMarketing: {
      subject: 'Helena, sua seleção de alfaiataria premium Renner está pronta 👔',
      preheader: 'Cortes estruturados e caimento impecável para seus compromissos mais importantes da semana.',
      body: 'Olá, Helena! Sabemos que sua rotina executiva pede peças funcionais com visual sofisticado. Nossa inteligência selecionou para o seu armário cápsula o Blazer Crepe Estruturado e a Calça Cenoura com detalhes em fivela. Aproveite frete expresso para renovar seu look corporativo.',
      callToAction: 'Explorar Cápsula Executiva Renner',
    },
    socialMediaPost: {
      platform: 'Instagram',
      caption: 'Do café de alinhamento à apresentação executiva: o poder do corte perfeito. ✨ Descubra a nova linha de alfaiataria Renner pensada para mulheres que lideram seu próprio tempo. Qual seu combo indispensável de blazer + calça?',
      hashtags: ['#RennerExecutiva', '#MulheresQueLideram', '#AlfaiatariaContemporanea', '#LookDeTrabalho'],
      callToAction: 'Toque na sacolinha para conferir a coleção',
    },
  },
  {
    id: 'prof-jovem',
    segmentId: 'jovem',
    title: 'Perfil 02: Moda Jovem & Noite',
    personaName: 'Sofia Albuquerque',
    personaAge: 20,
    personaBio: 'Representa clientes jovens, muito ativas nas redes sociais, que frequentam festivais e noites na cidade e adotam rápido as tendências do TikTok.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    dominantStyle: 'jovem',
    recommendedProducts: [
      catalogProducts[3], // Vestido Cut Out
      catalogProducts[4], // Top Corset
      catalogProducts[5], // Saia Cargo
    ],
    emailMarketing: {
      subject: 'Sofia, o drop de sexta que viralizou no seu feed acabou de chegar 🔥',
      preheader: 'Cut-outs, corset vinil e estética Y2K com desconto exclusivo no app.',
      body: 'Oie, Sofia! O fim de semana tá batendo na porta e você não vai com a mesma roupa de sempre, né? Mapeamos as tendências que você andou curtindo e separamos o Vestido Metalizado Cut-out e o Top Corset. Pede agora no app com entrega no mesmo dia!',
      callToAction: 'Garantir Meu Look de Sexta',
    },
    socialMediaPost: {
      platform: 'TikTok',
      caption: 'POV: você achou o outfit perfeito na Renner pra arrasar no rolê de hoje 🖤 Vestido com recorte metalizado ou saia cargo com corset? Comenta aqui qual vibe você vai servir!',
      hashtags: ['#RennerTrends', '#GRLPWR', '#OOTDNight', '#ViralFashion', '#FestivalLook'],
      callToAction: 'Link na bio para garantir com cupom VIP',
    },
  },
  {
    id: 'prof-casual',
    segmentId: 'casual',
    title: 'Perfil 03: Casual Chic & Básico Premium',
    personaName: 'Camila Duarte',
    personaAge: 34,
    personaBio: 'Representa clientes que valorizam conforto, momentos ao ar livre e tecidos naturais sustentáveis, em looks versáteis para a rotina.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    dominantStyle: 'casual',
    recommendedProducts: [
      catalogProducts[6], // Camisa Linho
      catalogProducts[7], // Wide Leg
      catalogProducts[8], // Vestido Fluido
    ],
    emailMarketing: {
      subject: 'Camila, a leveza do linho puro te esperando para dias mais calmos 🌿',
      preheader: 'Peças em fibras nobres e caimento solto para acompanhar o seu ritmo.',
      body: 'Olá, Camila! Elegância real é sentir-se à vontade na própria pele. Nossa IA identificou seu carinho por peças atemporais em tons naturais e separou a nova Camisa 100% Linho e o Vestido Fluido Botânico. Feitos para durar estações.',
      callToAction: 'Ver Coleção Linho & Conforto',
    },
    socialMediaPost: {
      platform: 'Instagram',
      caption: 'Café da manhã sem pressa e a brisa leve com nossa linha 100% Linho Puro. 🌾 Quando o básico encontra a máxima sofisticação. Salve este post para se inspirar na sua próxima composição minimalista.',
      hashtags: ['#RennerSustentavel', '#LinhoPuro', '#MinimalismoElegante', '#EstiloSemEsforco'],
      callToAction: 'Toque para ver os detalhes da composição',
    },
  },
  {
    id: 'prof-athleisure',
    segmentId: 'athleisure',
    title: 'Perfil 04: Athleisure & Streetwear',
    personaName: 'Mateus Castro',
    personaAge: 27,
    personaBio: 'Representa clientes que combinam trabalho, treino e vida urbana e querem roupas que transitem entre esses ambientes sem perder o estilo.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    dominantStyle: 'athleisure',
    recommendedProducts: [
      catalogProducts[9],  // Windbreaker
      catalogProducts[10], // Calça Jogger
      catalogProducts[11], // Tênis Runner
    ],
    emailMarketing: {
      subject: 'Mateus, performance máxima da esteira ao happy hour ⚡',
      preheader: 'Tecidos térmicos inteligentes e silhueta urbana pronta para o seu dia.',
      body: 'Fala, Mateus! Sua rotina não para e suas roupas precisam acompanhar sua velocidade. A IA Syntra recomendou a Jaqueta Corta Vento Tech e o novo Runner Ultraleve. Liberdade de movimento garantida com frete grátis!',
      callToAction: 'Conhecer Linha Techwear Renner',
    },
    socialMediaPost: {
      platform: 'Instagram',
      caption: 'Do treino matinal ao rolê urbano: performance e conforto em cada detalhe. 🏃‍♂️💨 Quem disse que roupa técnica não tem atitude? Confira as novas joggers com tecido quadridirecional na Renner.',
      hashtags: ['#RennerMove', '#StreetwearBrasil', '#Techwear', '#EstiloEmMovimento'],
      callToAction: 'Descubra a coleção Renner Move no link da bio',
    },
  },
];
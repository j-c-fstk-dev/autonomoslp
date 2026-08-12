import { ProfessionalProfile } from './types';

// Import our beautiful generated images
// Note: We use the exact filenames generated in the prior step
export const masonryImage = "/src/assets/images/premium_masonry_work_1782535395548.jpg";
export const lightingImage = "/src/assets/images/premium_lighting_work_1782535408620.jpg";
export const plumbingImage = "/src/assets/images/premium_plumbing_work_1782535420806.jpg";

export const profiles: Record<'pedreiro' | 'eletricista' | 'encanador', ProfessionalProfile> = {
  pedreiro: {
    id: 'pedreiro',
    roleName: 'Pedreiro de Acabamento & Alvenaria',
    defaultName: 'Carlos Andrade',
    tagline: 'Pisos, Revestimentos & Reformas',
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=256&h=256&crop=faces',
    heroImage: 'https://imgs.search.brave.com/Bi4TXkY5HFUirs9G4CoMgG6L5n5TgmFoK2hjVwXvXog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/MjA2MTkwL3B0L2Zv/dG8vdHJhYmFsaGFk/b3ItcGVkcmVpcm8t/Y29uc3RydSVDMyVB/NyVDMyVBM28uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTdo/QnRNU2xQYWZnSlo0/Y0dmLVRXYjJNdTNH/d2RVZ1RUYWxmTVAx/NHFpWms9',
    heroHeadline: 'Construção e acabamento com o capricho que sua casa merece.',
    heroSubheadline: 'Especialista em assentamento de porcelanato, revestimentos decorativos e reformas completas. Trabalho limpo, no prazo e sem surpresas.',
    aboutTitle: 'Trabalho feito com honestidade, capricho e pontualidade.',
    aboutText: 'Trabalho há mais de 12 anos reformando e construindo lares. Meu compromisso é simples e direto: assentar seu piso ou porcelanato perfeitamente alinhado, respeitar o prazo combinado e deixar o canteiro de obras limpo e organizado todos os dias.',
    experienceYears: 12,
    skills: [
      'Nivelamento & Prumo Perfeitos',
      'Corte de Meia Esquadria (45°)',
      'Organização & Limpeza Diária',
      'Leitura de Projetos de Arquitetura',
      'Ferramentas a Laser de Alta Precisão'
    ],
    accentColor: 'text-amber-700 bg-amber-50 border-amber-200',
    accentBg: 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white',
    accentBorder: 'border-amber-500',
    services: [
      {
        id: 'porcelanato',
        name: 'Assentamento de Porcelanato',
        description: 'Instalação de pisos e porcelanatos de todos os tamanhos. Juntas perfeitas, cortes precisos em meia esquadria (45 graus) e nivelamento rigoroso.',
        basePrice: 120,
        unit: 'm²',
        icon: 'Grid',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'revestimento-pedra',
        name: 'Revestimentos Decorativos',
        description: 'Aplicação de pedras naturais, tijolinhos aparentes e azulejos decorativos para valorizar salas, cozinhas e fachadas.',
        basePrice: 150,
        unit: 'm²',
        icon: 'Layers',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'alvenaria',
        name: 'Paredes & Divisórias de Alvenaria',
        description: 'Construção de novas paredes de tijolo ou bloco com alinhamento perfeito, prumo exato e preparadas para o reboco.',
        basePrice: 90,
        unit: 'm²',
        icon: 'Hammer',
        image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'reforma-banheiro',
        name: 'Reforma de Banheiro Completa',
        description: 'Fazemos tudo do início ao fim: impermeabilização contra infiltrações, nivelamento de paredes, assentamento de pisos e instalação de louças e metais.',
        basePrice: 2800,
        unit: 'unidade',
        icon: 'LayoutGrid',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
      }
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'Porcelanato Integrado em Sala e Cozinha',
        description: 'Assentamento de porcelanato com paginação contínua em toda a área social, garantindo sensação de espaço amplo e juntas impecáveis.',
        image: masonryImage,
        stats: '64m² • 6 dias de obra',
        category: 'Piso Interno'
      },
      {
        id: 'p2',
        title: 'Parede Decorativa de Tijolinho Aparente',
        description: 'Assentamento caprichado de revestimento rústico estilo tijolinho em parede de destaque com acabamento frisado.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        stats: '22m² • 3 dias de obra',
        category: 'Parede Interna'
      },
      {
        id: 'p3',
        title: 'Bancada e Cuba Esculpida em Porcelanato',
        description: 'Instalação técnica de nichos embutidos e assentamento de revestimento imitando mármore em lavabo moderno.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
        stats: '1 Lavabo • 2 dias',
        category: 'Banheiro'
      }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Roberto Silveira',
        role: 'Engenheiro Civil',
        text: 'O Carlos é o profissional de acabamento mais qualificado e caprichoso que contratei para as minhas obras. Ele lê a planta, tira as medidas certas e não desperdiça material. Indico de olhos fechados.',
        rating: 5,
        date: 'Há 1 mês'
      },
      {
        id: 'r2',
        author: 'Mariana Azevedo',
        role: 'Dona de Casa',
        text: 'O que mais gostei no Carlos, além do piso ter ficado perfeito, foi a limpeza. Ao final de cada dia ele varria o local e organizava tudo. Muito educado e profissional.',
        rating: 5,
        date: 'Há 2 semanas'
      }
    ],
    whatsappPitch: 'Olá! Vi seu portfólio "Mão na Massa" e gostaria de conversar sobre uma obra.'
  },
  eletricista: {
    id: 'eletricista',
    roleName: 'Eletricista Residencial & Comercial',
    defaultName: 'Marcos Silva',
    tagline: 'Eletricidade Segura & Iluminação Moderna',
    avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=256&h=256&crop=faces',
    heroHeadline: 'Sua casa segura com fiação organizada e iluminação impecável.',
    heroSubheadline: 'Instalações elétricas seguras dentro das normas, montagem de quadros de disjuntores organizados e instalação de luminárias e fitas de LED.',
    aboutTitle: 'Segurança absoluta para sua família e eficiência energética.',
    aboutText: 'Sou eletricista formado pelo SENAI com mais de 9 anos de experiência prática. Meu foco de trabalho é a sua segurança: executo fiação perfeitamente dimensionada para evitar curtos e quedas de disjuntor, organizo quadros elétricos antigos de forma limpa e instalo iluminação moderna de alta qualidade.',
    experienceYears: 9,
    skills: [
      'Fiação Segura (Normas NBR 5410)',
      'Quadros de Distribuição Limpos',
      'Instalação de Fitas de LED e Perfis',
      'Divisão Correta de Disjuntores',
      'Uso de Equipamentos de Teste Modernos'
    ],
    accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
    accentBg: 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-900 font-semibold',
    accentBorder: 'border-amber-400',
    services: [
      {
        id: 'iluminacao',
        name: 'Instalação de Iluminação & Fitas de LED',
        description: 'Montagem de fitas de LED em sancas, instalação de perfis modernos, lustres, pendentes e luminárias com ótimo acabamento visual.',
        basePrice: 45,
        unit: 'ponto',
        icon: 'Lightbulb',
        image: 'https://images.unsplash.com/photo-1565538810844-1e119411121f?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'automacao',
        name: 'Instalação de Interruptores Inteligentes',
        description: 'Substituição de interruptores comuns por models Wi-Fi inteligentes (para controle por celular ou Alexa/Google Home).',
        basePrice: 180,
        unit: 'dispositivo',
        icon: 'Cpu',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'quadro-eletrico',
        name: 'Substituição & Organização de Quadro de Luz',
        description: 'Troca de disjuntores antigos, separação correta dos circuitos do chuveiro, tomadas e luzes, garantindo proteção contra choques e curtos.',
        basePrice: 850,
        unit: 'serviço',
        icon: 'Sliders',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'redes',
        name: 'Tomadas Extras & Rede de Internet',
        description: 'Passagem de fios para novas tomadas, instalação técnica de cabos de rede de internet RJ45 e fiação para caixas de som.',
        basePrice: 60,
        unit: 'ponto',
        icon: 'Wifi',
        image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=800'
      }
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'Instalação de Iluminação em Gesso',
        description: 'Colocação de spots embutidos e perfis de LED paralelos em teto de gesso rebaixado, criando uma iluminação bonita e aconchegante.',
        image: lightingImage,
        stats: '24 Pontos • Acabamento Limpo',
        category: 'Iluminação'
      },
      {
        id: 'p2',
        title: 'Automação de Iluminação por Aplicativo',
        description: 'Instalação de interruptores Wi-Fi integrados na caixinha de parede de forma segura, permitindo o controle das luzes de casa por voz.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
        stats: '1 Residência • Wi-Fi Inteligente',
        category: 'Casa Inteligente'
      },
      {
        id: 'p3',
        title: 'Reforma Completa de Quadro de Disjuntores',
        description: 'Organização geral de fiação interna do quadro de luz, adicionando barramento pente isolado e disjuntor de segurança IDR para evitar choques.',
        image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=800',
        stats: '36 Disjuntores DIN • Organizado',
        category: 'Quadro de Luz'
      }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Juliana Portela',
        role: 'Arquiteta de Interiores',
        text: 'O Marcos é o meu eletricista de confiança. Ele trabalha de forma muito organizada, segue o projeto luminotécnico à risca e sempre testa tudo antes de entregar o serviço.',
        rating: 5,
        date: 'Há 3 semanas'
      },
      {
        id: 'r2',
        author: 'Felipe Mendes',
        role: 'Dono de Casa',
        text: 'Serviço excelente. Minha energia vivia caindo quando ligava o chuveiro e o forno elétrico juntos. O Marcos refez a divisão do quadro de luz e resolveu o problema de vez. Recomendo!',
        rating: 5,
        date: 'Há 1 mês'
      }
    ],
    whatsappPitch: 'Olá! Vi seu portfólio "Mão na Massa" e gostaria de um orçamento para instalação de iluminação ou reforma elétrica.'
  },
  encanador: {
    id: 'encanador',
    roleName: 'Encanador & Técnico Hidráulico',
    defaultName: 'Sandro Moreira',
    tagline: 'Instalações Hidráulicas sem Dor de Cabeça',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256&crop=faces',
    heroHeadline: 'Soluções hidráulicas seguras, sem vazamentos e sem quebra-quebra.',
    heroSubheadline: 'Localização de vazamentos ocultos de forma precisa, instalação de misturadores de água quente/fria e encanamentos novos em PPR ou PEX.',
    aboutTitle: 'Água correndo com segurança na sua casa.',
    aboutText: 'Trabalho há mais de 10 anos focado na montagem e manutenção de sistemas hidráulicos residenciais. Domino as tubulações modernas de PPR e PEX que reduzem as chances de vazamento a zero, instalo metais sanitários e resolvo vazamentos de forma ágil e limpa.',
    experienceYears: 10,
    skills: [
      'Fusão Térmica de PPR (Água Quente)',
      'Sistemas Modernos de Mangueiras PEX',
      'Testes de Pressão contra Vazamento',
      'Instalação Cuidadosa de Metais de Luxo',
      'Detecção de Vazamentos Ocultos'
    ],
    accentColor: 'text-sky-700 bg-sky-50 border-sky-200',
    accentBg: 'bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white',
    accentBorder: 'border-sky-500',
    services: [
      {
        id: 'instalacao-metais',
        name: 'Instalação de Torneiras & Chuveiros',
        description: 'Instalação perfeita de monocomandos, chuveiros de teto ou parede, registros de gaveta e metais sanitários em geral sem arranhar as peças.',
        basePrice: 90,
        unit: 'unidade',
        icon: 'Droplet',
        image: 'https://images.unsplash.com/photo-1585418641121-678940a5f4a2?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'ppr-pex',
        name: 'Tubulações Novas (Água Fria e Quente)',
        description: 'Instalação completa de encanamento usando termofusão de PPR ou encanamentos flexíveis PEX, eliminando emendas dentro da parede.',
        basePrice: 160,
        unit: 'metro',
        icon: 'GitBranch',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'pressurizacao',
        name: 'Instalação de Pressurizadores de Água',
        description: 'Instalação de bombas pressurizadoras para dar mais pressão a chuveiros fracos, e montagem de aquecedores de água a gás de forma segura.',
        basePrice: 480,
        unit: 'instalação',
        icon: 'Compass',
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'caca-vazamento',
        name: 'Localização de Vazamentos',
        description: 'Uso de câmera térmica ou geofone para localizar canos vazando dentro da parede sem precisar quebrar azulejos desnecessários.',
        basePrice: 250,
        unit: 'ponto',
        icon: 'Search',
        image: 'https://images.unsplash.com/photo-1613214149579-90994e77b4cc?auto=format&fit=crop&q=80&w=800'
      }
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'Instalação de Chuveiro de Teto e Banheira',
        description: 'Instalação de encanamento embutido para chuveiro de teto moderno e conexão de escoamento para banheira de imersão de forma perfeita.',
        image: plumbingImage,
        stats: '1 Banheiro • Testado contra Vazamento',
        category: 'Metais Sanitários'
      },
      {
        id: 'p2',
        title: 'Rede de Água Quente em PPR Termofundido',
        description: 'Instalação de prumada hidráulica para água quente utilizando tubos soldados a calor, garantindo vedação permanente.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
        stats: '4 Banheiros • Pressão Garantida',
        category: 'Tubulação'
      },
      {
        id: 'p3',
        title: 'Reforma de Encanamento de Cozinha',
        description: 'Substituição geral de canos de PVC antigos de escoamento e água, com instalação de misturador monocomando gourmet moderno na bancada.',
        image: 'https://images.unsplash.com/photo-1585418641121-678940a5f4a2?auto=format&fit=crop&q=80&w=800',
        stats: '1 Cozinha • 2 dias',
        category: 'Cozinha'
      }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Daniela Gouveia',
        role: 'Designer de Interiores',
        text: 'O Sandro resolveu a pressão fraca dos chuveiros em uma obra minha instalando um pressurizador super silencioso. Ele realmente domina o assunto e explica tudo de forma muito simples.',
        rating: 5,
        date: 'Há 2 semanas'
      },
      {
        id: 'r2',
        author: 'Eduardo Ramos',
        role: 'Síndico de Condomínio',
        text: 'Excelente profissional. Ele localizou o vazamento na parede do hall usando câmera térmica sem precisar quebrar nada além de um azulejo. Muito limpo e competente.',
        rating: 5,
        date: 'Há 3 dias'
      }
    ],
    whatsappPitch: 'Olá! Vi seu portfólio "Mão na Massa" e gostaria de solicitar um orçamento hidráulico.'
  }
};

export const pedreiroMeteredServices = [
  { id: 'porcelanato', name: 'Assentamento de porcelanato', description: 'Pisos de grandes formatos, alinhamento, nivelamento e recortes de acabamento.', basePrice: 120 },
  { id: 'piso-ceramico', name: 'Assentamento de piso cerâmico', description: 'Aplicação em áreas internas e externas, respeitando caimento e juntas.', basePrice: 75 },
  { id: 'revestimento-parede', name: 'Revestimento de paredes', description: 'Cozinhas, banheiros, lavabos e áreas de serviço com acabamento preciso.', basePrice: 95 },
  { id: 'contrapiso', name: 'Contrapiso e regularização', description: 'Preparação da base para receber o acabamento, com nível e caimento adequados.', basePrice: 55 }
];

export const pedreiroFixedServices = [
  { id: 'alvenaria', name: 'Paredes e divisórias de alvenaria', description: 'Execução de paredes, fechamentos e adequações de ambientes.' },
  { id: 'banheiro', name: 'Reforma de banheiro', description: 'Demolição, preparação, impermeabilização e acabamento coordenados conforme a necessidade.' },
  { id: 'impermeabilizacao', name: 'Impermeabilização de áreas molhadas', description: 'Banheiros, varandas e áreas de serviço, com avaliação do sistema adequado.' },
  { id: 'reparos', name: 'Reparos e pequenos acabamentos', description: 'Correções de revestimento, rejunte, soleiras, nichos e ajustes pós-obra.' }
];

export const commonFAQs = [
  {
    question: 'Como funciona o processo de contratação?',
    answer: 'É simples: você escolhe o serviço no portfólio ou preenche o formulário com os detalhes do seu projeto. O formulário gerará uma mensagem formatada que abre diretamente no meu WhatsApp. A partir daí, combinamos uma visita técnica (se necessário) para tirar medidas exatas e fechamos a proposta.'
  },
  {
    question: 'Vocês cobram pela visita de orçamento?',
    answer: 'Para estimativas gerais baseadas em fotos e plantas pelo WhatsApp, o orçamento é totalmente gratuito. Visitas técnicas no local para avaliações estruturais complexas podem ter uma pequena taxa de deslocamento que é totalmente abatida do valor final caso o serviço seja contratado.'
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Aceitamos Pix (com desconto especial), parcelamento no cartão de crédito em até 12x (consulte taxas), e faturamento de sinal + parcelas de acordo com a entrega de etapas pré-definidas da obra.'
  },
  {
    question: 'Os serviços têm garantia?',
    answer: 'Sim, absolutamente. Todos os nossos serviços estruturais e de acabamento possuem garantia de execução de 1 ano para instalações de acabamento e até 5 anos para infraestrutura oculta (como tubulações e fiação), desde que não haja modificações de terceiros.'
  }
];

export const pedreiroFAQs = [
  {
    question: 'Como funciona o processo de contratação?',
    answer: 'Você chama diretamente pelo WhatsApp, conta um pouco sobre a obra e, se possível, envia fotos, medidas ou a planta do ambiente. A partir daí, combinamos os próximos passos e, quando necessário, agendamos uma visita técnica para avaliar o serviço.'
  },
  {
    question: 'Vocês cobram pela visita de orçamento?',
    answer: 'Para uma primeira conversa e avaliação por fotos ou planta no WhatsApp, não há custo. Quando a obra exigir vistoria técnica presencial, as condições de deslocamento são combinadas antes do agendamento.'
  },
  ...commonFAQs.slice(2)
];

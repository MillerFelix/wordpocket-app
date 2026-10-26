import { Activity, ReadingQuestion } from '../../types/activity';

export const READING_B1: Activity<ReadingQuestion>[] = [
  // 1. Leia e compreenda (B1) - Existente
  {
    id: 'reading-b1-read-remote',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b1',
    topic: 'Trabalho & Tecnologia',
    title: 'A Cultura do Trabalho Remoto na Tecnologia',
    description: 'Compreenda uma análise detalhada sobre a dinâmica de trabalho assíncrono e equilíbrio pessoal.',
    objective: 'Identificar causas, consequências e soluções em um texto analítico de ambiente corporativo.',
    instructions: 'Leia o artigo e responda às questões sobre a gestão de equipes distribuídas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Asynchronous Collaboration in Remote Teams',
      genre: 'Artigo Corporativo & Análise',
      estimatedReadTimeMinutes: 2,
      content: `The global transition toward remote and hybrid work has fundamentally reshaped corporate culture, especially within the software industry. Instead of relying on real-time discussions, distributed teams increasingly adopt asynchronous communication. This methodology emphasizes comprehensive written documentation, clear project tickets, and recorded video walkthroughs over back-to-back virtual meetings.

Proponents argue that asynchronous workflows grant professionals deep autonomy, allowing them to schedule focused blocks of uninterrupted coding or writing during their peak productive hours. However, this flexibility introduces subtle challenges. Without physical boundaries, employees frequently struggle to disconnect at the end of the day, leading to digital fatigue. Successful remote companies address this by establishing explicit norms: discouraging late-night messages and respecting regional time zones.`,
      glossary: [
        { word: 'asynchronous', translation: 'assíncrono (que não acontece ao mesmo tempo)' },
        { word: 'back-to-back', translation: 'consecutivas / uma atrás da outra' },
        { word: 'uninterrupted', translation: 'sem interrupções' },
        { word: 'digital fatigue', translation: 'cansaço / esgotamento digital' }
      ],
      passageTranslation: 'A transição global para o trabalho remoto e híbrido transformou fundamentalmente a cultura corporativa, especialmente na indústria de software. Em vez de depender de discussões em tempo real, equipes distribuídas adotam comunicação assíncrona. Esse método prioriza documentação escrita detalhada, tarefas claras e vídeos gravados em vez de reuniões virtuais consecutivas. Defensores argumentam que fluxos assíncronos concedem autonomia, permitindo que profissionais programem blocos de trabalho sem interrupção em seus horários mais produtivos. No entanto, sem fronteiras físicas, colaboradores têm dificuldade para se desconectar no fim do dia, gerando fadiga digital. Empresas de sucesso estabelecem normas claras: desestimular mensagens noturnas e respeitar fusos horários.'
    },
    questions: [
      {
        id: 'r-b1-rc-1',
        type: 'multiple_choice',
        questionText: 'What is a core characteristic of asynchronous communication according to the text?',
        options: [
          { id: 'A', text: 'Scheduling back-to-back video meetings every morning' },
          { id: 'B', text: 'Prioritizing comprehensive written documentation over real-time calls' },
          { id: 'C', text: 'Requiring all team members to work in the exact same time zone' },
          { id: 'D', text: 'Eliminating computers from the workspace' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto destaca: "This methodology emphasizes comprehensive written documentation, clear project tickets, and recorded video walkthroughs over back-to-back virtual meetings".'
      },
      {
        id: 'r-b1-rc-2',
        type: 'multiple_choice',
        questionText: 'What major challenge does the article associate with working remotely?',
        options: [
          { id: 'A', text: 'The lack of high-speed internet connections' },
          { id: 'B', text: 'Difficulty in disconnecting from work at the end of the day' },
          { id: 'C', text: 'An inability to record video demonstrations' },
          { id: 'D', text: 'High transportation costs' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta: "Without physical boundaries, employees frequently struggle to disconnect at the end of the day, leading to digital fatigue".'
      }
    ]
  },

  // 2. Leia e compreenda (B1) - Novo
  {
    id: 'reading-b1-read-slow-travel',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b1',
    topic: 'Turismo & Sustentabilidade',
    title: 'A Filosofia do "Slow Travel" pela Europa',
    description: 'Compreenda um ensaio sobre desacelerar o ritmo de viagem para mergulhar na cultura local.',
    objective: 'Analisar argumentos que contrapõem o turismo frenético à imersão cultural sustentável.',
    instructions: 'Leia o texto com atenção e responda às questões sobre a proposta do slow travel.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Embracing the Art of Slow Travel',
      genre: 'Ensaio de Viagem & Cultura',
      estimatedReadTimeMinutes: 2,
      content: `In an era dominated by weekend city breaks and whirlwind ten-city vacations, a growing counter-cultural movement known as "slow travel" encourages explorers to decelerate. Rather than treating travel as an aggressive checklist of famous monuments to photograph, slow travelers choose to stay in a single region for weeks or even months.

By renting an apartment in a quiet residential district, frequenting the local bakery every morning, and learning basic conversational phrases, visitors forge genuine connections with residents. Furthermore, prioritizing overland train journeys instead of short-haul flights drastically reduces individual carbon emissions while revealing picturesque countryside landscapes that air travelers completely miss. Slow travel transforms tourism from superficial consumption into an authentic cultural exchange.`,
      glossary: [
        { word: 'whirlwind', translation: 'vertiginoso / frenético' },
        { word: 'decelerate', translation: 'desacelerar / reduzir o ritmo' },
        { word: 'forge', translation: 'construir / forjar laços' },
        { word: 'short-haul', translation: 'de curta distância / voos rápidos' }
      ],
      passageTranslation: 'Em uma época dominada por viagens curtas e férias frenéticas por dez cidades, um crescente movimento contracultural conhecido como "slow travel" encoraja viajantes a desacelerar. Em vez de tratar a viagem como uma lista agressiva de monumentos para fotografar, viajantes adeptos do slow travel escolhem ficar em uma única região por semanas ou meses. Ao alugar um apartamento em um bairro tranquilo, frequentar a padaria local todas as manhãs e aprender frases cotidianas, visitantes constroem conexões autênticas com os moradores. Além disso, priorizar viagens de trem em vez de voos curtos reduz drasticamente as emissões de carbono e revela paisagens campestres pitorescas. O slow travel transforma o turismo de consumo superficial em uma troca cultural autêntica.'
    },
    questions: [
      {
        id: 'r-b1-st-1',
        type: 'multiple_choice',
        questionText: 'What is the core principle of the "slow travel" movement?',
        options: [
          { id: 'A', text: 'Visiting as many countries as possible in one single week' },
          { id: 'B', text: 'Staying longer in a single region to connect with local culture and people' },
          { id: 'C', text: 'Traveling only by foot without any motorized transport' },
          { id: 'D', text: 'Staying exclusively in five-star hotel resorts' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto explica que slow travel significa desacelerar e "stay in a single region for weeks or even months" forjando conexões com a comunidade.'
      },
      {
        id: 'r-b1-st-2',
        type: 'multiple_choice',
        questionText: 'According to the author, what environmental advantage comes from choosing trains over flights?',
        options: [
          { id: 'A', text: 'It completely eliminates all travel expenses.' },
          { id: 'B', text: 'It drastically reduces individual carbon emissions.' },
          { id: 'C', text: 'It makes luggage inspections faster.' },
          { id: 'D', text: 'It allows travelers to avoid buying tickets.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta expressamente: "prioritizing overland train journeys instead of short-haul flights drastically reduces individual carbon emissions".'
      }
    ]
  },

  // 3. Leia e compreenda (B1) - Novo
  {
    id: 'reading-b1-read-coffee-culture',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b1',
    topic: 'Alimentação & Comércio Justo',
    title: 'A Revolução dos Cafés Especiais',
    description: 'Compreenda a evolução da cadeia do café, do grão à xícara, valorizando pequenos produtores.',
    objective: 'Identificar a diferença entre commodities comerciais e grãos especiais com rastreabilidade.',
    instructions: 'Leia a análise sobre o movimento de café especial e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Third Wave of Specialty Coffee',
      genre: 'Artigo Informativo & Tendências',
      estimatedReadTimeMinutes: 2,
      content: `Over the past two decades, the global coffee market has undergone a profound transformation commonly termed the "Third Wave of Coffee." Unlike earlier generations that viewed coffee merely as a dark, bitter caffeine boost, modern specialty roasters treat coffee with the same artisanal reverence historically reserved for fine wine.

This approach emphasizes single-origin beans, transparent ethical sourcing, and precise roasting profiles that highlight delicate floral, citrus, or chocolate notes. Crucially, direct-trade relationships enable roasters to purchase harvested cherries directly from smallholder farmers in regions like Colombia, Ethiopia, and Brazil at prices well above standard market commodity rates. Consequently, farmers can reinvest in sustainable agricultural practices and provide higher wages for local pickers.`,
      glossary: [
        { word: 'roasters', translation: 'torrefações / mestres de torra' },
        { word: 'single-origin', translation: 'de origem única (de uma fazenda ou microlote específico)' },
        { word: 'smallholder', translation: 'pequeno produtor / agricultor familiar' },
        { word: 'commodity rates', translation: 'cotações do mercado de commodities convencionais' }
      ],
      passageTranslation: 'Nas últimas duas décadas, o mercado global de café passou por uma transformação profunda chamada de "Terceira Onda do Café". Ao contrário das gerações anteriores que viam o café apenas como um estimulante escuro e amargo, mestres de torra modernos tratam o café com a mesma reverência artesanal reservada a bons vinhos. Essa abordagem valoriza grãos de origem única, comércio ético transparente e torras precisas que destacam notas florais, cítricas ou de chocolate. Mais importante ainda, relações de comércio direto permitem comprar grãos diretamente de pequenos agricultores em países como Colômbia, Etiópia e Brasil a preços muito superiores aos das commodities. Assim, produtores reinvestem em agricultura sustentável e pagam salários melhores.'
    },
    questions: [
      {
        id: 'r-b1-cf-1',
        type: 'multiple_choice',
        questionText: 'How does the Third Wave of Coffee view coffee compared to previous generations?',
        options: [
          { id: 'A', text: 'As an instant powdered beverage for quick consumption' },
          { id: 'B', text: 'With artisanal reverence highlighting origin, ethical trade, and flavor notes' },
          { id: 'C', text: 'Exclusively as an ingredient in sweet desserts' },
          { id: 'D', text: 'As a medication for blood pressure' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto contrasta a visão anterior de mero estimulante com o tratamento artesanal moderno: "treat coffee with the same artisanal reverence historically reserved for fine wine".'
      },
      {
        id: 'r-b1-cf-2',
        type: 'multiple_choice',
        questionText: 'How do direct-trade relationships benefit smallholder coffee farmers?',
        options: [
          { id: 'A', text: 'They eliminate the need to harvest crops.' },
          { id: 'B', text: 'They pay prices well above commodity rates, enabling sustainable reinvestment.' },
          { id: 'C', text: 'They force farmers to abandon farming for tourism.' },
          { id: 'D', text: 'They replace human labor with robots.' }
        ],
        correctOptionId: 'B',
        explanation: 'O segundo parágrafo explica: "purchase harvested cherries directly... at prices well above standard market commodity rates", permitindo reinvestimento em sustentabilidade e salários.'
      }
    ]
  },

  // 4. Leia e compreenda (B1) - Novo
  {
    id: 'reading-b1-read-podcast-boom',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b1',
    topic: 'Mídia & Comunicação',
    title: 'A Era de Ouro dos Podcasts',
    description: 'Compreenda a ascensão dos podcasts narrativos e educativos como mídia de conexão profunda.',
    objective: 'Identificar as razões que tornaram o formato de áudio sob demanda tão popular e intimista.',
    instructions: 'Leia a análise sobre o consumo de mídia em áudio e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Narrative Power of Audio Podcasts',
      genre: 'Artigo Cultural & Mídia',
      estimatedReadTimeMinutes: 2,
      content: `The meteoric rise of audio podcasting has revolutionized how millions of people consume information, entertainment, and investigative journalism. Unlike short video clips designed to capture fleeting seconds of screen attention, podcasts encourage long-form, immersive storytelling that listeners can enjoy while commuting, jogging, or doing household chores.

Media psychologists attribute the medium’s unique appeal to its intimacy: hearing a host’s unscripted voice directly through headphones creates a simulated one-on-one conversation. Whether exploring complex historical events, uncovering scientific mysteries, or learning foreign languages, audio narratives allow audiences to learn passively while keeping their hands free and their eyes away from illuminated screens.`,
      glossary: [
        { word: 'meteoric rise', translation: 'ascensão meteórica / crescimento rápido' },
        { word: 'fleeting', translation: 'fugaz / passageiro' },
        { word: 'chores', translation: 'tarefas domésticas' },
        { word: 'unscripted', translation: 'espontânea / sem roteiro engessado' }
      ],
      passageTranslation: 'A ascensão meteórica dos podcasts em áudio revolucionou como milhões de pessoas consomem informação, entretenimento e jornalismo investigativo. Ao contrário de vídeos curtos feitos para capturar segundos fugazes de atenção na tela, podcasts incentivam narrativas imersivas e longas que os ouvintes aproveitam no trajeto, correndo ou fazendo tarefas de casa. Psicólogos da mídia atribuem o apelo do formato à sua intimidade: ouvir a voz espontânea de um apresentador diretamente nos fones cria uma conversa simulada individual. Seja explorando história, ciência ou idiomas, narrativas em áudio permitem aprender mantendo as mãos livres e os olhos longe das telas.'
    },
    questions: [
      {
        id: 'r-b1-pb-1',
        type: 'multiple_choice',
        questionText: 'What distinguishes podcasts from short video clips according to the text?',
        options: [
          { id: 'A', text: 'Podcasts are only available on radio broadcast stations.' },
          { id: 'B', text: 'Podcasts offer long-form immersive storytelling rather than fleeting seconds of attention.' },
          { id: 'C', text: 'Podcasts require specialized audio studio hardware to listen to.' },
          { id: 'D', text: 'Podcasts are produced only by university professors.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto compara: "Unlike short video clips designed to capture fleeting seconds of screen attention, podcasts encourage long-form, immersive storytelling".'
      },
      {
        id: 'r-b1-pb-2',
        type: 'multiple_choice',
        questionText: 'Why do media psychologists consider audio podcasts uniquely intimate?',
        options: [
          { id: 'A', text: 'Because hearing a voice through headphones simulates a personal one-on-one conversation.' },
          { id: 'B', text: 'Because podcasts cannot be listened to in public spaces.' },
          { id: 'C', text: 'Because listeners are required to answer questions aloud.' },
          { id: 'D', text: 'Because they are always recorded in whispers.' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto aponta: "hearing a host’s unscripted voice directly through headphones creates a simulated one-on-one conversation".'
      }
    ]
  },

  // 5. Descubra pelo contexto (B1) - Existente
  {
    id: 'reading-b1-context-deadline',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b1',
    topic: 'Negócios & Gestão',
    title: 'Negociando Prazos de Projetos',
    description: 'Deduzir o sentido de expressões idiomáticas e termos do jargão de projetos em inglês.',
    objective: 'Inferir nuances de expressões corporativas frequentes em conversas profissionais.',
    instructions: 'Examine a situação e descubra o significado exato das expressões em foco.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Managing Client Expectations',
      genre: 'Diálogo Profissional',
      estimatedReadTimeMinutes: 2,
      content: `During the quarterly review, the product manager highlighted that the upcoming mobile release had an extremely tight deadline. The team was already working at maximum capacity, but the marketing division kept requesting new auxiliary features that were not part of the original agreement.

"We are experiencing severe scope creep," warned the lead engineer. "If we continue adding unsolicited features, our release date will slip. Instead of stretching ourselves thin, we should streamline the application: polish the core navigation, postpone secondary tools to next quarter, and deliver a rock-solid version next Friday."`,
      glossary: [
        { word: 'tight deadline', translation: 'prazo apertado / exíguo' },
        { word: 'scope creep', translation: 'expansão descontrolada do escopo de um projeto' },
        { word: 'stretch thin', translation: 'sobrecarregar-se / dividir recursos além da capacidade' },
        { word: 'streamline', translation: 'simplificar / otimizar processos eliminando excessos' }
      ],
      passageTranslation: 'Durante a reunião trimestral, a gerente de produto destacou que o lançamento do aplicativo tinha um prazo extremamente apertado. A equipe já operava em capacidade máxima, mas o marketing continuava solicitando novos recursos que não faziam parte do acordo original. "Estamos sofrendo com uma expansão descontrolada do escopo (scope creep)", alertou o engenheiro-chefe. "Se continuarmos adicionando itens não solicitados, nosso lançamento vai atrasar. Em vez de nos sobrecarregarmos, devemos enxugar o aplicativo: aperfeiçoar a navegação principal, adiar ferramentas secundárias e entregar uma versão sólida na próxima sexta-feira."'
    },
    questions: [
      {
        id: 'r-b1-cc-1',
        type: 'multiple_choice',
        questionText: 'What does the term "scope creep" mean in project management?',
        options: [
          { id: 'A', text: 'Hiring new employees who work slowly' },
          { id: 'B', text: 'The uncontrolled expansion of project requirements beyond original goals' },
          { id: 'C', text: 'A sudden price discount given to customers' },
          { id: 'D', text: 'A computer virus attacking software servers' }
        ],
        correctOptionId: 'B',
        explanation: 'O engenheiro descreve que a equipe estava com prazos apertados e que adicionar recursos contínuos fora do acordo original caracterizava "scope creep".'
      },
      {
        id: 'r-b1-cc-2',
        type: 'multiple_choice',
        questionText: 'What does the lead engineer mean by proposing to "streamline" the application?',
        options: [
          { id: 'A', text: 'To translate the code into another programming language' },
          { id: 'B', text: 'To simplify and focus only on essential features to ensure quality' },
          { id: 'C', text: 'To cancel the mobile project completely' },
          { id: 'D', text: 'To launch without testing' }
        ],
        correctOptionId: 'B',
        explanation: '"Streamline" no contexto é focar no núcleo essencial ("polish the core navigation"), deixando recursos secundários para depois.'
      }
    ]
  },

  // 6. Descubra pelo contexto (B1) - Novo
  {
    id: 'reading-b1-context-financial-literacy',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b1',
    topic: 'Finanças Pessoais & Poupança',
    title: 'Planejamento Financeiro e Fundo de Emergência',
    description: 'Deduzir o sentido de expressões financeiras como "nest egg", "emergency cushion" e "compound interest".',
    objective: 'Reconhecer termos de orçamento pessoal e investimentos a partir do contexto.',
    instructions: 'Leia a análise sobre finanças e determine o significado dos termos em destaque.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Building Financial Resilience',
      genre: 'Artigo de Finanças Pessoais',
      estimatedReadTimeMinutes: 2,
      content: `Financial advisors consistently emphasize that the cornerstone of personal security is maintaining a dedicated emergency cushion. Before dabbling in speculative stock market investments, individuals should accumulate three to six months of essential living expenses in an easily accessible, liquid savings account.

This protective safety net prevents you from falling into predatory, high-interest debt when unexpected setbacks arise, such as sudden medical bills or car breakdowns. Once your emergency buffer is intact, you can systematically allocate discretionary income toward long-term retirement funds, allowing compound interest to steadily multiply your savings over decades.`,
      glossary: [
        { word: 'cornerstone', translation: 'pedra fundamental / pilar central' },
        { word: 'liquid', translation: 'líquido (fácil e rápido de resgatar em dinheiro)' },
        { word: 'discretionary', translation: 'discricionária / disponível após despesas básicas' },
        { word: 'compound interest', translation: 'juros compostos' }
      ],
      passageTranslation: 'Consultores financeiros enfatizam constantemente que o pilar da segurança pessoal é manter uma reserva de emergência dedicada. Antes de se aventurar em investimentos especulativos na bolsa, as pessoas devem acumular de três a seis meses de despesas básicas em uma conta poupança líquida e acessível. Essa rede de proteção evita dívidas predatórias com juros altos quando imprevistos acontecem, como emergências médicas ou panes no carro. Uma vez que esse colchão financeiro esteja intacto, você pode destinar a renda discricionária para fundos de aposentadoria, permitindo que os juros compostos multipliquem suas economias ao longo das décadas.'
    },
    questions: [
      {
        id: 'r-b1-fl-1',
        type: 'multiple_choice',
        questionText: 'What does "liquid savings account" mean in personal finance?',
        options: [
          { id: 'A', text: 'An account used to pay water utility bills' },
          { id: 'B', text: 'An account where funds can be accessed and converted to cash quickly without penalty' },
          { id: 'C', text: 'An account invested entirely in foreign currency' },
          { id: 'D', text: 'A frozen bank account with locked deposits' }
        ],
        correctOptionId: 'B',
        explanation: 'Ativos ou contas "liquid" são aqueles facilmente conversíveis em dinheiro vivo a qualquer momento para emergências.'
      },
      {
        id: 'r-b1-fl-2',
        type: 'multiple_choice',
        questionText: 'What is the primary role of an "emergency cushion" according to the author?',
        options: [
          { id: 'A', text: 'To fund luxury annual vacations abroad' },
          { id: 'B', text: 'To protect against high-interest debt during unforeseen hardships' },
          { id: 'C', text: 'To speculate on cryptocurrency markets' },
          { id: 'D', text: 'To pay off neighbors\' debts' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta: "prevents you from falling into predatory, high-interest debt when unexpected setbacks arise".'
      }
    ]
  },

  // 7. Descubra pelo contexto (B1) - Novo
  {
    id: 'reading-b1-context-eco-tourism',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b1',
    topic: 'Meio Ambiente & Ecoturismo',
    title: 'Ecoturismo Responsável e Conservação',
    description: 'Deduzir termos ambientais e de preservação (biodiversity, footprint, fragile ecosystem).',
    objective: 'Compreender terminologia de sustentabilidade e turismo regenerativo em inglês.',
    instructions: 'Leia o texto e selecione o significado apropriado para cada conceito.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Treading Lightly in Fragile Ecosystems',
      genre: 'Artigo Ambiental',
      estimatedReadTimeMinutes: 2,
      content: `True ecotourism involves far more than simply sleeping in a bamboo lodge or posting wildlife photos online. At its heart, authentic eco-travel focuses on minimizing the traveler’s ecological footprint while actively generating revenue for local conservation initiatives.

In delicate biomes like Costa Rica’s cloud forests or the Galapagos Archipelago, irresponsible mass tourism can easily degrade sensitive wildlife habitats. Therefore, accredited tour operators enforce strict guidelines: keeping to designated trail paths, using biodegradable toiletries, and caping visitor numbers so local animal species can feed and nest without constant human disturbance.`,
      glossary: [
        { word: 'ecological footprint', translation: 'pegada ecológica / impacto ambiental gerado' },
        { word: 'revenue', translation: 'receita / renda gerada' },
        { word: 'degrade', translation: 'degradar / deteriorar' },
        { word: 'caping (capping)', translation: 'limitar / estabelecer teto máximo' }
      ],
      passageTranslation: 'O verdadeiro ecoturismo envolve muito mais do que apenas dormir em um chalé de bambu ou postar fotos de animais na internet. Em sua essência, o turismo ecológico autêntico foca em minimizar a pegada ecológica do viajante, gerando receita ativa para iniciativas locais de conservação. Em biomas delicados como as florestas de névoa da Costa Rica ou Galápagos, o turismo de massa irresponsável pode facilmente degradar habitats sensíveis. Por isso, operadoras credenciadas aplicam regras rígidas: manter-se nas trilhas demarcadas, usar cosméticos biodegradáveis e limitar o número de visitantes para que espécies locais possam se alimentar e nidificar sem perturbação humana contínua.'
    },
    questions: [
      {
        id: 'r-b1-et-1',
        type: 'multiple_choice',
        questionText: 'In environmental science, what does "ecological footprint" refer to?',
        options: [
          { id: 'A', text: 'The size of hiking shoes worn on mountain paths' },
          { id: 'B', text: 'The total impact of a person or activity on the environment and natural resources' },
          { id: 'C', text: 'The number of trees planted in a park' },
          { id: 'D', text: 'A map of animal footprints' }
        ],
        correctOptionId: 'B',
        explanation: 'A "pegada ecológica" mede o volume de recursos e impacto gerado pelas atividades humanas no meio ambiente.'
      },
      {
        id: 'r-b1-et-2',
        type: 'multiple_choice',
        questionText: 'Why do accredited operators "cap visitor numbers" in delicate biomes?',
        options: [
          { id: 'A', text: 'To artificially increase ticket prices' },
          { id: 'B', text: 'To prevent human disturbance of wildlife feeding and nesting habits' },
          { id: 'C', text: 'Because there are no tour guides available' },
          { id: 'D', text: 'To close national parks on weekends' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto explica que limitar o número de turistas serve para que "local animal species can feed and nest without constant human disturbance".'
      }
    ]
  },

  // 8. Descubra pelo contexto (B1) - Novo
  {
    id: 'reading-b1-context-negotiation',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b1',
    topic: 'Comunicação Interpessoal',
    title: 'Comunicação Não-Violenta e Mediação',
    description: 'Deduzir o sentido de expressões diplomáticas (empathy, defuse tension, common ground).',
    objective: 'Reconhecer vocabulário de resolução pacífica de conflitos em ambientes de trabalho e convivência.',
    instructions: 'Leia a situação de mediação e identifique o significado dos termos.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Resolving Interpersonal Workplace Disputes',
      genre: 'Artigo de Gestão de Conflitos',
      estimatedReadTimeMinutes: 2,
      content: `When team members clash over competing design philosophies or divergent schedules, constructive mediators strive to defuse tension before personal resentment sets in. Rather than assigning blame or pointing fingers, effective communicators employ active listening techniques.

By validating the emotional concerns of both parties and acknowledging legitimate grievances, a skilled facilitator helps opponents identify common ground. The objective is not winning a verbal argument, but collaborating on a mutually advantageous compromise where both individuals feel heard, respected, and invested in the outcome.`,
      glossary: [
        { word: 'clash', translation: 'entram em choque / divergem bruscamente' },
        { word: 'defuse', translation: 'desarmar / apaziguar' },
        { word: 'grievances', translation: 'queixas / reclamações legítimas' },
        { word: 'common ground', translation: 'pontos em comum / consenso compartilhado' }
      ],
      passageTranslation: 'Quando membros de uma equipe entram em choque por filosofias divergentes ou prazos concorrentes, mediadores construtivos esforçam-se para desarmar a tensão antes que o ressentimento pessoal se instale. Em vez de apontar culpados, comunicadores eficazes usam técnicas de escuta ativa. Ao validar as preocupações emocionais de ambas as partes e reconhecer queixas legítimas, um facilitador ajuda os oponentes a identificar pontos em comum. O objetivo não é vencer uma discussão verbal, mas colaborar em um acordo mutuamente vantajoso onde ambos se sintam ouvidos, respeitados e comprometidos.'
    },
    questions: [
      {
        id: 'r-b1-cn-1',
        type: 'multiple_choice',
        questionText: 'What does the metaphor "to defuse tension" mean in conflict resolution?',
        options: [
          { id: 'A', text: 'To shout loudly to intimidate the other person' },
          { id: 'B', text: 'To de-escalate anger and reduce conflict like disarming a bomb (apaziguar)' },
          { id: 'C', text: 'To fire employees who disagree' },
          { id: 'D', text: 'To write a legal penalty letter' }
        ],
        correctOptionId: 'B',
        explanation: '"Defuse tension" (metaforicamente desarmar uma bomba) significa apaziguar os ânimos e reduzir a intensidade emocional de um conflito.'
      },
      {
        id: 'r-b1-cn-2',
        type: 'multiple_choice',
        questionText: 'What is the meaning of finding "common ground" between opposing colleagues?',
        options: [
          { id: 'A', text: 'Buying a piece of real estate together' },
          { id: 'B', text: 'Identifying shared interests, values, or goals they both agree on' },
          { id: 'C', text: 'Finding an empty meeting room' },
          { id: 'D', text: 'Voting to see who has more authority' }
        ],
        correctOptionId: 'B',
        explanation: '"Common ground" é uma expressão chave que denota valores, interesses ou objetivos compartilhados em que ambas as partes concordam.'
      }
    ]
  },

  // 9. Interprete a mensagem (B1) - Existente
  {
    id: 'reading-b1-msg-summary',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b1',
    topic: 'E-mails Corporativos & Reuniões',
    title: 'Ata e Alinhamento de Reunião com Clientes',
    description: 'Interprete responsabilidades, prazos e decisões formalizadas em um sumário de reunião.',
    objective: 'Identificar acordos de trabalho, papéis e prazos de entrega em comunicações formais.',
    instructions: 'Leia a ata enviada após a conferência e responda às questões sobre os combinados.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Action Items & Meeting Summary: Project Orion',
      genre: 'Ata de Reunião Corporativa',
      estimatedReadTimeMinutes: 2,
      content: `To: Stakeholders & Project Orion Team
From: Beatrice Vance, Project Coordinator
Subject: Post-Meeting Summary & Action Items — Oct 24th

Thank you all for your active participation in today's alignment session with Global Retail Partners. Below is a recap of the key decisions reached and subsequent deadlines:

1. Architecture Migration: The cloud infrastructure will be migrated to the EU region to comply with local data protection regulations. (Owner: DevOps Team | Deadline: Nov 5th)
2. User Testing Feedback: The design team will revise the checkout flow based on the 15 usability interviews conducted last week. (Owner: UX Research | Deadline: Oct 30th)
3. Budget Approval: The client signed off on the revised security audit budget, meaning third-party penetration testing can begin immediately.

Our next weekly sprint checkpoint will take place this Thursday at 10:00 AM CET. Please update your Jira boards beforehand.`,
      glossary: [
        { word: 'recap', translation: 'resumo / síntese' },
        { word: 'comply with', translation: 'estar em conformidade / respeitar normas' },
        { word: 'signed off on', translation: 'aprovou formalmente / autorizou' },
        { word: 'beforehand', translation: 'com antecedência / previamente' }
      ],
      passageTranslation: 'Obrigada a todos pela participação ativa na sessão de alinhamento de hoje com a Global Retail Partners. Abaixo segue um resumo das principais decisões tomadas e prazos subsequentes: 1. Migração de Arquitetura: A infraestrutura em nuvem será migrada para a região da UE para cumprir as regulamentações de proteção de dados. (Responsável: DevOps | Prazo: 5 de nov). 2. Feedback de Testes com Usuários: A equipe de design revisará o fluxo de checkout com base em 15 entrevistas de usabilidade realizadas na semana passada. (Responsável: UX Research | Prazo: 30 de out). 3. Aprovação de Orçamento: O cliente aprovou o orçamento revisado de auditoria de segurança, permitindo o início imediato dos testes. Nosso próximo ponto de controle semanal será nesta quinta às 10h CET. Atualizem seus quadros previamente.'
    },
    questions: [
      {
        id: 'r-b1-mi-1',
        type: 'multiple_choice',
        questionText: 'Why will the cloud infrastructure be migrated to the EU region?',
        options: [
          { id: 'A', text: 'To reduce electricity costs' },
          { id: 'B', text: 'To comply with local data protection regulations' },
          { id: 'C', text: 'Because the US servers were physically damaged' },
          { id: 'D', text: 'To enable faster video streaming' }
        ],
        correctOptionId: 'B',
        explanation: 'O item 1 da ata afirma: "The cloud infrastructure will be migrated to the EU region to comply with local data protection regulations".'
      },
      {
        id: 'r-b1-mi-2',
        type: 'multiple_choice',
        questionText: 'What is the UX Research team responsible for delivering by October 30th?',
        options: [
          { id: 'A', text: 'A completely new marketing brochure' },
          { id: 'B', text: 'A revised checkout flow incorporating user usability feedback' },
          { id: 'C', text: 'A cloud security audit report' },
          { id: 'D', text: 'A financial invoice for the client' }
        ],
        correctOptionId: 'B',
        explanation: 'O item 2 define: "The design team will revise the checkout flow based on the 15 usability interviews... (Deadline: Oct 30th)".'
      }
    ]
  },

  // 10. Interprete a mensagem (B1) - Novo
  {
    id: 'reading-b1-msg-conference-invitation',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b1',
    topic: 'Eventos Profissionais & Carreira',
    title: 'Convite Formal para Painel de Palestrantes',
    description: 'Interprete um convite profissional para palestrar em um simpósio internacional sobre sustentabilidade.',
    objective: 'Identificar benefícios para palestrantes (honorarium, travel stipend), prazos de confirmação e tema do painel.',
    instructions: 'Leia a carta-convite formal e responda às perguntas sobre os termos propostos.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Speaker Invitation: International EcoDesign Forum',
      genre: 'Carta Formal de Convite',
      estimatedReadTimeMinutes: 2,
      content: `Dear Dr. Patricia Vance,

On behalf of the organizing committee for the 2026 International EcoDesign Forum, it is our distinct privilege to invite you as a keynote panelist for our opening symposium on "Renewable Materials in Consumer Electronics," scheduled for September 18th in Zurich, Switzerland.

Given your pioneering research on biodegradable polymers, we believe your perspective will provide invaluable insight to our audience of engineers and policymakers. The forum covers economy round-trip airfare, three nights at the Hotel Bellevue, and provides an honorarium of $1,200.

Kindly confirm your availability by June 15th by replying to this email with your preferred travel itinerary and an updated biography.

With warmest regards,
Henrik Lindqvist — Program Chair`,
      glossary: [
        { word: 'distinct privilege', translation: 'distinto privilégio / grande honra' },
        { word: 'policymakers', translation: 'formuladores de políticas públicas' },
        { word: 'honorarium', translation: 'honorários / remuneração por palestra' },
        { word: 'itinerary', translation: 'itinerário de viagem' }
      ],
      passageTranslation: 'Prezada Dra. Patricia Vance, Em nome do comitê organizador do Fórum Internacional EcoDesign 2026, é um privilégio convidá-la como debatedora principal no simpósio de abertura sobre "Materiais Renováveis em Eletrônicos", agendado para 18 de setembro em Zurique. Dada sua pesquisa pioneira em polímeros biodegradáveis, sua perspectiva trará contribuições valiosas. O fórum cobre passagens aéreas de ida e volta, três noites de hospedagem e honorários de $1.200. Confirme sua disponibilidade até 15 de junho respondendo a este e-mail com seu itinerário preferido e biografia atualizada.'
    },
    questions: [
      {
        id: 'r-b1-ci-1',
        type: 'multiple_choice',
        questionText: 'What expenses does the conference organizing committee cover for Dr. Vance?',
        options: [
          { id: 'A', text: 'Only a digital conference pass' },
          { id: 'B', text: 'Round-trip airfare, 3 nights at Hotel Bellevue, and a $1,200 honorarium' },
          { id: 'C', text: 'Her permanent relocation expenses to Zurich' },
          { id: 'D', text: 'New laboratory equipment for her university' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto estipula: "covers economy round-trip airfare, three nights at the Hotel Bellevue, and provides an honorarium of $1,200".'
      },
      {
        id: 'r-b1-ci-2',
        type: 'multiple_choice',
        questionText: 'By what deadline must Dr. Vance confirm her participation?',
        options: [
          { id: 'A', text: 'By September 18th' },
          { id: 'B', text: 'By June 15th' },
          { id: 'C', text: 'Within 24 hours' },
          { id: 'D', text: 'By the end of the year' }
        ],
        correctOptionId: 'B',
        explanation: 'A carta especifica: "Kindly confirm your availability by June 15th".'
      }
    ]
  },

  // 11. Interprete a mensagem (B1) - Novo
  {
    id: 'reading-b1-msg-landlord-renovation',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b1',
    topic: 'Condomínio & Sustentabilidade',
    title: 'Comunicado de Obras de Eficiência Energética',
    description: 'Interprete um memorando oficial da administração predial sobre instalação de painéis solares e isolamento acústico.',
    objective: 'Identificar cronograma de obras, interrupções temporárias de serviços e benefícios a longo prazo.',
    instructions: 'Leia o comunicado do condomínio e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Building Modernization Notice: Solar Retrofit',
      genre: 'Memorando Condominial Oficial',
      estimatedReadTimeMinutes: 2,
      content: `To: All Residents of Aurora Towers
From: Property Management Board
Date: May 4th
Subject: Rooftop Solar Installation & Window Weatherproofing

Please be advised that our scheduled building sustainability upgrade will commence on Monday, May 12th, and will conclude on Friday, May 23rd. 

Contractors will install high-efficiency photovoltaic solar arrays on the rooftop and replace outdated hallway double-pane window seals. During this period, the rooftop terrace and service elevator will be closed to residents between 8:30 AM and 5:00 PM on weekdays. No disruption to residential electricity or domestic hot water is expected. 

Once operational, this modernization is projected to reduce overall common-area utility expenses by twenty-five percent. We appreciate your cooperation.`,
      glossary: [
        { word: 'retrofit / upgrade', translation: 'modernização / reforma estrutural' },
        { word: 'photovoltaic solar arrays', translation: 'conjuntos de painéis solares fotovoltaicos' },
        { word: 'disruption', translation: 'interrupção / corte de serviço' },
        { word: 'projected', translation: 'projetada / estimada' }
      ],
      passageTranslation: 'Para: Todos os moradores da Aurora Towers. Comunicamos que a reforma de sustentabilidade começará na segunda, 12 de maio, e terminará na sexta, 23 de maio. Prestadores instalarão painéis solares no terraço e trocarão as vedações das janelas dos corredores. O terraço e o elevador de serviço ficarão fechados das 8h30 às 17h em dias úteis. Não haverá interrupção de energia ou água quente nas unidades. Quando estiver operacional, a modernização deve reduzir as despesas de condomínio das áreas comuns em 25%. Agradecemos a cooperação.'
    },
    questions: [
      {
        id: 'r-b1-lr-1',
        type: 'multiple_choice',
        questionText: 'What facilities will be temporarily closed to residents during weekday working hours?',
        options: [
          { id: 'A', text: 'The underground car parking garage' },
          { id: 'B', text: 'The rooftop terrace and service elevator (8:30 AM to 5:00 PM)' },
          { id: 'C', text: 'The front entrance lobby' },
          { id: 'D', text: 'The waste recycling room' }
        ],
        correctOptionId: 'B',
        explanation: 'O comunicado diz: "the rooftop terrace and service elevator will be closed to residents between 8:30 AM and 5:00 PM on weekdays".'
      },
      {
        id: 'r-b1-lr-2',
        type: 'multiple_choice',
        questionText: 'Will residents experience cuts to electricity or domestic hot water during the work?',
        options: [
          { id: 'A', text: 'Yes, both will be shut off for two weeks.' },
          { id: 'B', text: 'No, no disruption to electricity or hot water is anticipated.' },
          { id: 'C', text: 'Only hot water will be interrupted.' },
          { id: 'D', text: 'Power will only work on weekends.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto tranquiliza os moradores: "No disruption to residential electricity or domestic hot water is expected".'
      }
    ]
  },

  // 12. Interprete a mensagem (B1) - Novo
  {
    id: 'reading-b1-msg-volunteer-orientation',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b1',
    topic: 'Voluntariado & Sociedade',
    title: 'Manual de Boas-Vindas para Voluntários da ONG',
    description: 'Interprete diretrizes e código de conduta para voluntários de um banco de alimentos comunitário.',
    objective: 'Compreender responsabilidades operacionais, normas de higiene e política de pontualidade.',
    instructions: 'Leia as orientações para voluntários e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Community Food Bank Volunteer Guidelines',
      genre: 'Manual de Orientação de ONG',
      estimatedReadTimeMinutes: 2,
      content: `Welcome to the City Harvest Volunteer Team! 🥫
Your commitment allows us to distribute over four thousand nutritious meal boxes each week. To ensure an efficient and safe environment, please observe these core guidelines:

1. Dress Code: Closed-toe sturdy shoes and hair coverings (caps or hairnets) are mandatory inside the dry food sorting warehouse. No dangling jewelry.
2. Attendance & Punctuality: Each shift begins with a ten-minute safety briefing at 8:00 AM sharp. If you anticipate arriving late or cannot attend your scheduled shift, notify your coordinator via WhatsApp at least three hours in advance.
3. Hygiene Protocols: Wash hands thoroughly for twenty seconds before handling unpackaged fresh fruits or vegetables. Gloves must be changed every two hours.`,
      glossary: [
        { word: 'closed-toe sturdy shoes', translation: 'calçados fechados e resistentes' },
        { word: 'briefing', translation: 'orientação inicial / instruções rápidas' },
        { word: 'in advance', translation: 'de antecedência' },
        { word: 'thoroughly', translation: 'minuciosamente / com atenção' }
      ],
      passageTranslation: 'Bem-vindos à Equipe de Voluntários da City Harvest! Seu compromisso nos permite distribuir mais de 4.000 cestas de alimentos nutritivos toda semana. Para garantir segurança e eficiência: 1. Vestimenta: Calçados fechados resistentes e proteção de cabelo (bonés ou toucas) são obrigatórios no depósito de triagem. Proibido bijuterias soltas. 2. Pontualidade: Cada turno começa com instruções de segurança às 8h em ponto. Se previr atraso ou ausência, avise o coordenador com pelo menos 3 horas de antecedência. 3. Higiene: Lave as mãos por 20 segundos antes de manipular frutas ou verduras. Luvas devem ser trocadas a cada 2 horas.'
    },
    questions: [
      {
        id: 'r-b1-vo-1',
        type: 'multiple_choice',
        questionText: 'What footwear is strictly mandatory in the sorting warehouse?',
        options: [
          { id: 'A', text: 'Comfortable rubber sandals' },
          { id: 'B', text: 'Closed-toe sturdy shoes' },
          { id: 'C', text: 'Bare feet with socks' },
          { id: 'D', text: 'Running shoes with open mesh' }
        ],
        correctOptionId: 'B',
        explanation: 'O item 1 estabelece: "Closed-toe sturdy shoes and hair coverings... are mandatory inside the dry food sorting warehouse".'
      },
      {
        id: 'r-b1-vo-2',
        type: 'multiple_choice',
        questionText: 'How much advance notice is required if a volunteer cannot attend their scheduled shift?',
        options: [
          { id: 'A', text: 'At least three hours in advance' },
          { id: 'B', text: 'Twenty-four hours beforehand' },
          { id: 'C', text: 'No notice is needed' },
          { id: 'D', text: 'After the shift ends' }
        ],
        correctOptionId: 'A',
        explanation: 'A regra de assiduidade instrui: "notify your coordinator via WhatsApp at least three hours in advance".'
      }
    ]
  },

  // 13. Identifique a ideia principal (B1) - Existente
  {
    id: 'reading-b1-idea-transport',
    pillar: 'reading',
    type: 'main_idea',
    level: 'b1',
    topic: 'Sustentabilidade & Urbanismo',
    title: 'Mobilidade Urbana Sustentável nas Metrópoles',
    description: 'Analise a tese e a conclusão sobre como a reformulação do transporte público transforma as cidades.',
    objective: 'Identificar a ideia central, argumentos sustentadores e conclusões em artigos argumentativos.',
    instructions: 'Leia o ensaio e determine a ideia principal que sintetiza o texto.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Rethinking Urban Mobility in European Cities',
      genre: 'Ensaio Argumentativo',
      estimatedReadTimeMinutes: 2,
      content: `Over the past two decades, several European capitals have systematically redesigned their urban architecture to prioritize human well-being over private automobiles. Cities such as Copenhagen, Paris, and Amsterdam have transformed multi-lane avenues into protected bicycle highways and expanded emission-free tram networks. 

Critics initially cautioned that reducing car lanes would paralyze commercial commerce and frustrate suburban commuters. Yet, comprehensive studies demonstrate the exact opposite: pedestrianized zones experience higher retail sales, significantly cleaner air quality, and measurable decreases in acoustic pollution. Transforming urban transport is ultimately not about banning vehicles, but about designing healthier, quieter, and more inclusive living spaces for future generations.`,
      glossary: [
        { word: 'multi-lane avenues', translation: 'avenidas com múltiplas faixas' },
        { word: 'tram networks', translation: 'redes de bondes / veículos leves sobre trilhos' },
        { word: 'paralyze', translation: 'paralisar' },
        { word: 'pedestrianized zones', translation: 'áreas exclusivas para pedestres / calçadões' }
      ],
      passageTranslation: 'Nas últimas duas décadas, várias capitais europeias redesenharam sistematicamente sua arquitetura urbana para priorizar o bem-estar humano em detrimento dos automóveis particulares. Cidades como Copenhague, Paris e Amsterdã transformaram avenidas de múltiplas faixas em ciclovias protegidas e expandiram redes de bondes livres de emissões. Críticos alertavam inicialmente que reduzir faixas de carros paralisaria o comércio. No entanto, estudos comprovam o oposto: áreas para pedestres têm vendas no varejo mais altas, ar significativamente mais limpo e quedas expressivas na poluição sonora. Transformar o transporte urbano não se trata de proibir veículos, mas de conceber espaços mais saudáveis, silenciosos e inclusivos.'
    },
    questions: [
      {
        id: 'r-b1-id-1',
        type: 'multiple_choice',
        questionText: 'What is the main thesis defended by the author?',
        options: [
          { id: 'A', text: 'Private cars should be completely outlawed in every town.' },
          { id: 'B', text: 'Prioritizing bicycles and pedestrians over cars creates healthier, more prosperous cities.' },
          { id: 'C', text: 'Retail sales are declining rapidly in European capitals.' },
          { id: 'D', text: 'Bicycle lanes cause acoustic pollution.' }
        ],
        correctOptionId: 'B',
        explanation: 'A tese central conclui que priorizar pedestres, bicicletas e transporte limpo gera cidades com melhor qualidade de vida, ar limpo e maior vitalidade comercial.'
      },
      {
        id: 'r-b1-id-2',
        type: 'multiple_choice',
        questionText: 'How did actual studies contradict the initial critics’ concerns?',
        options: [
          { id: 'A', text: 'Pedestrian zones actually saw increased retail sales and cleaner air.' },
          { id: 'B', text: 'Commuters stopped traveling to city centers altogether.' },
          { id: 'C', text: 'Car manufacturing costs doubled.' },
          { id: 'D', text: 'Trams proved too expensive to operate.' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto esclarece: "pedestrianized zones experience higher retail sales, significantly cleaner air quality, and measurable decreases in acoustic pollution".'
      }
    ]
  },

  // 14. Identifique a ideia principal (B1) - Novo
  {
    id: 'reading-b1-idea-digital-detox',
    pillar: 'reading',
    type: 'main_idea',
    level: 'b1',
    topic: 'Saúde Mental & Tecnologia',
    title: 'Desintoxicação Digital na Era das Notificações',
    description: 'Determine a tese de um artigo sobre o impacto da atenção fragmentada por smartphones e a recuperação do foco.',
    objective: 'Identificar a ideia central sobre presença mental e limites tecnológicos intencionais.',
    instructions: 'Leia o texto e escolha a opção que melhor expressa o argumento principal.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Reclaiming Mental Space from Digital Overload',
      genre: 'Ensaio de Psicologia e Bem-Estar',
      estimatedReadTimeMinutes: 2,
      content: `In the contemporary digital landscape, our smartphones operate as sophisticated attention-capture machines. By engineered design, push notifications and algorithmic feeds fragment our mental bandwidth, keeping our nervous systems in a perpetual state of low-grade anticipation.

Cognitive psychologists emphasize that true rest cannot occur while mindlessly consuming algorithmically curated content during leisure hours. Implementing intentional boundaries—such as maintaining phone-free dining tables, turning off non-essential alerts, and establishing thirty minutes of morning offline solitude—is not anti-technology. Rather, it is a necessary self-defense mechanism to protect deep contemplation, genuine human connection, and psychological well-being.`,
      glossary: [
        { word: 'bandwidth', translation: 'capacidade mental / largura de banda' },
        { word: 'perpetual', translation: 'constante / perpétuo' },
        { word: 'mindlessly', translation: 'sem pensar / no piloto automático' },
        { word: 'self-defense', translation: 'autodefesa / preservação' }
      ],
      passageTranslation: 'No cenário digital contemporâneo, smartphones operam como máquinas sofisticadas de captura de atenção. Notificações e feeds fragmentam nossa mente, mantendo o sistema nervoso em estado constante de alerta. Psicólogos cognitivos enfatizam que o descanso genuíno não acontece enquanto consumimos conteúdo algorítmico no piloto automático nas horas de lazer. Estabelecer limites intencionais — como refeições sem celular, desativar alertas não essenciais e ter 30 minutos matinais offline — não é ser contra a tecnologia. Pelo contrário: é um mecanismo de preservação da reflexão profunda, da conexão humana e do bem-estar psicológico.'
    },
    questions: [
      {
        id: 'r-b1-dd-1',
        type: 'multiple_choice',
        questionText: 'What is the primary message of this essay?',
        options: [
          { id: 'A', text: 'Smartphones must be completely banned from modern life.' },
          { id: 'B', text: 'Setting intentional boundaries with digital devices is necessary to protect deep focus and mental well-being.' },
          { id: 'C', text: 'Push notifications improve human productivity.' },
          { id: 'D', text: 'Social media algorithms reduce stress.' }
        ],
        correctOptionId: 'B',
        explanation: 'A tese central argumenta que limites intencionais (refeições sem telas, desativar alertas) protegem a saúde mental e o foco profundo contra a sobrecarga digital.'
      },
      {
        id: 'r-b1-dd-2',
        type: 'multiple_choice',
        questionText: 'According to psychologists in the text, why is mindless scrolling NOT restful?',
        options: [
          { id: 'A', text: 'Because phone screens use too much battery.' },
          { id: 'B', text: 'Because it keeps the nervous system in a perpetual state of anticipation rather than true relaxation.' },
          { id: 'C', text: 'Because books are physically heavier.' },
          { id: 'D', text: 'Because internet speeds are too slow.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta que o consumo algorítmico fragmenta a mente e mantém o sistema nervoso "in a perpetual state of low-grade anticipation", impedindo o descanso autêntico.'
      }
    ]
  },

  // 15. Identifique a ideia principal (B1) - Novo
  {
    id: 'reading-b1-idea-circular-economy',
    pillar: 'reading',
    type: 'main_idea',
    level: 'b1',
    topic: 'Economia & Sustentabilidade',
    title: 'A Mudança para a Economia Circular',
    description: 'Analise a tese econômica sobre a substituição do modelo de descarte pela reutilização regenerativa.',
    objective: 'Identificar a ideia central que contrapõe o modelo linear "extrair-produzir-descartar" ao modelo circular.',
    instructions: 'Leia o texto e determine o ponto de vista central defendido pelo autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Rethinking Consumption: The Circular Economy Model',
      genre: 'Artigo Econômico & Ambiental',
      estimatedReadTimeMinutes: 2,
      content: `For over a century, the industrialized world has operated on a linear economic paradigm colloquially summarized as "take, make, and dispose." Raw materials are extracted from the Earth, transformed into consumer goods, and discarded into overflowing landfills once their short lifespans conclude.

In sharp contrast, the circular economy proposes a regenerative framework designed to eliminate waste entirely from product conception. By engineering electronics with modular, repairable components, encouraging leasing over outright ownership, and recycling base metals continuously into new manufacturing cycles, societies decouple economic growth from finite resource depletion. Embracing circularity is no longer an idealistic ecological luxury, but an urgent industrial necessity for long-term survival.`,
      glossary: [
        { word: 'landfills', translation: 'lixões / aterros sanitários' },
        { word: 'regenerative', translation: 'regenerativo / renovável' },
        { word: 'decouple', translation: 'desvincular / dissociar' },
        { word: 'depletion', translation: 'esgotamento / exaustão de recursos' }
      ],
      passageTranslation: 'Por mais de um século, o mundo industrial operou em um modelo linear sintetizado como "extrair, produzir e descartar". Recursos são retirados da Terra, transformados em bens e descartados em aterros ao fim de sua vida útil curta. Em nítido contraste, a economia circular propõe uma estrutura regenerativa concebida para eliminar o desperdício desde o projeto do produto. Ao projetar eletrônicos com peças modulares e consertáveis, estimular o aluguel em vez da posse e reciclar metais continuamente, a sociedade desvincula o crescimento econômico do esgotamento de recursos finitos. Adotar a circularidade tornou-se uma necessidade industrial urgente.'
    },
    questions: [
      {
        id: 'r-b1-ce-1',
        type: 'multiple_choice',
        questionText: 'What is the main thesis defended by the author regarding the circular economy?',
        options: [
          { id: 'A', text: 'Industrial manufacturing should be completely abandoned.' },
          { id: 'B', text: 'Shifting from linear disposal to a regenerative circular model is an urgent industrial necessity to preserve resources.' },
          { id: 'C', text: 'Landfills are the most efficient way to manage waste.' },
          { id: 'D', text: 'Recycling metals is too expensive for modern factories.' }
        ],
        correctOptionId: 'B',
        explanation: 'A ideia central defende que substituir o modelo de descarte por uma economia regenerativa e modular desacopla o crescimento do esgotamento ambiental e é uma necessidade urgente.'
      },
      {
        id: 'r-b1-ce-2',
        type: 'multiple_choice',
        questionText: 'How does the circular economy aim to eliminate waste from the beginning?',
        options: [
          { id: 'A', text: 'By designing products with modular, repairable parts and closed-loop recycling.' },
          { id: 'B', text: 'By exporting all waste to foreign oceans.' },
          { id: 'C', text: 'By encouraging consumers to purchase new products every week.' },
          { id: 'D', text: 'By closing consumer electronics stores.' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto explica que a circularidade elimina o lixo "By engineering electronics with modular, repairable components... and recycling base metals continuously".'
      }
    ]
  }
];

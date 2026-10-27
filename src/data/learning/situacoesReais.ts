import { LearningArticle } from '../../types/learning';

export const SITUACOES_REAIS_ARTICLES: LearningArticle[] = [
  {
    id: 'apresentacoes-pessoais',
    title: 'Apresentações Pessoais: Como Falar de Si com Confiança',
    description: 'Aprenda o roteiro perfeito para se apresentar em reuniões, entrevistas ou eventos sociais sem timidez nem hesitação.',
    categoryId: 'situacoes-reais',
    level: 'A1',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['apresentacao', 'self introduction', 'nice to meet you', 'apresentar-se', 'primeiras impressoes'],
    relatedArticleIds: ['conversas-cotidianas', 'rotina-diaria'],
    sections: [
      {
        title: 'O Roteiro em 4 Etapas Rápidas',
        content: 'Uma apresentação pessoal cativante e natural contém apenas 4 ingredientes bem conectados:',
        rules: [
          { title: '1. Saudação + Nome', explanation: 'Hi, I\'m [Nome] ou Hello, my name is [Nome].' },
          { title: '2. De onde você é / onde mora', explanation: 'I\'m from Brazil, but I currently live in Curitiba.' },
          { title: '3. O que você faz profissionalmente', explanation: 'I work as a software engineer at [Empresa] / I study marketing.' },
          { title: '4. Cortesia de encerramento', explanation: 'It\'s a pleasure to meet you all / Great to be here today.' }
        ],
        examples: [
          { en: 'Hi everyone! I\'m Lucas. I\'m from Belo Horizonte and I\'ve been working in tech for four years.', pt: 'Olá pessoal! Sou o Lucas. Sou de Belo Horizonte e trabalho com tecnologia há quatro anos.' },
          { en: 'Nice to meet you! My name is Camila. I work in product design.', pt: 'Prazer em conhecê-lo! Meu nome é Camila. Eu trabalho com design de produto.' }
        ]
      },
      {
        title: 'Diferença entre "Nice to meet you" e "Nice to see you"',
        content: 'Não cometa esta gafe social comum:',
        comparisons: [
          {
            labelA: 'Nice to meet you (1ª vez na vida)',
            exampleA: 'Nice to meet you, John!',
            labelB: 'Nice to see you (Alguém que você já conhece)',
            exampleB: 'Great to see you again, John!',
            explanation: '"Meet" só se usa no primeiro encontro da vida. Para reencontros, use "see".'
          }
        ]
      }
    ],
    takeaways: [
      'Siga o roteiro: Saudação -> Nome -> Origem/Local -> Profissão -> Cortesia.',
      'Diga "Nice to meet you" apenas na PRIMEIRA vez que conhece alguém.',
      'Para rever amigos ou conhecidos, diga "Great to see you again!".'
    ]
  },
  {
    id: 'rotina-diaria',
    title: 'Rotina Diária em Inglês: Descrevendo Seu Dia do Início ao Fim',
    description: 'Aprenda os verbos de rotina, conectores temporais e advérbios de frequência para falar sobre o seu cotidiano com fluidez.',
    categoryId: 'situacoes-reais',
    level: 'A1',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['rotina', 'daily routine', 'wake up', 'adverbios de frequencia', 'always', 'usually', 'sometimes'],
    relatedArticleIds: ['simple-present', 'conectivos-basicos'],
    sections: [
      {
        title: 'A Linha do Tempo de um Dia Típico',
        content: 'Veja a sequência dos principais verbos de rotina em ordem cronológica:',
        rules: [
          { title: 'Manhã', explanation: 'Wake up (acordar) -> Get up (levantar da cama) -> Brush my teeth (escovar os dentes) -> Take a shower (tomar banho) -> Have breakfast (tomar café da manhã) -> Commute to work (deslocar-se ao trabalho).' },
          { title: 'Tarde', explanation: 'Start work (iniciar o trabalho) -> Have lunch (almoçar) -> Answer emails (responder e-mails) -> Have a meeting (ter reunião).' },
          { title: 'Noite', explanation: 'Finish work / get home (chegar em casa) -> Have dinner (jantar) -> Unwind / relax (desconectar) -> Go to bed (ir dormir).' }
        ]
      },
      {
        title: 'Advérbios de Frequência e Sua Posição na Frase',
        content: 'Os advérbios de frequência (always, usually, often, sometimes, rarely, never) ficam SEMPRE antes do verbo principal, exceto com o verbo to be (onde ficam depois):',
        examples: [
          { en: 'I always drink black coffee before 8 AM.', pt: 'Eu sempre bebo café preto antes das 8h (antes do verbo drink).' },
          { en: 'She is usually very punctual.', pt: 'Ela é geralmente muito pontual (depois do verbo is).' },
          { en: 'We rarely eat fast food during the week.', pt: 'Nós raramente comemos fast food durante a semana.' }
        ]
      }
    ],
    takeaways: [
      'Refeições usam o verbo "have": have breakfast, have lunch, have dinner (não use drink/eat).',
      'Wake up = abrir os olhos; Get up = levantar fisicamente da cama.',
      'Advérbios de frequência vêm ANTES de verbos comuns ("I always study") e DEPOIS do verbo to be ("I am always ready").'
    ]
  },
  {
    id: 'compras-restaurantes',
    title: 'Inglês para Restaurantes e Compras: Pedidos sem Estresse',
    description: 'Frases práticas e educadas para pedir mesas, escolher pratos, perguntar preços, tirar dúvidas e pedir a conta com elegância.',
    categoryId: 'situacoes-reais',
    level: 'A2',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['restaurante', 'compras', 'fazer pedidos', 'would like', 'pedir a conta', 'quanto custa'],
    relatedArticleIds: ['expressoes-frequentes-cotidiano', 'pedir-informacoes-direcoes'],
    sections: [
      {
        title: 'No Restaurante: Como Fazer Pedidos com Polidez',
        content: 'Nunca diga "I want" ao garçom (soa mandão e indelicado em inglês). O padrão internacional de cortesia é:',
        rules: [
          { title: 'Ao Chegar', explanation: 'A table for two, please. (Uma mesa para dois, por favor).' },
          { title: 'Ao Pedir', explanation: 'I\'d like [prato/bebida] / Can I have [prato/bebida], please? / I\'ll go with [opção].' },
          { title: 'Restrições Alimentares', explanation: 'Is this gluten-free? / Does this dish contain nuts or dairy?' },
          { title: 'A Conta', explanation: 'Could we get the check (US) / the bill (UK), please?' }
        ],
        examples: [
          { en: 'Hello! Can I have a glass of sparkling water and the salmon salad, please?', pt: 'Olá! Posso pedir um copo de água com gás e a salada de salmão, por favor?' },
          { en: 'Could we get the check, please? Do you take credit cards?', pt: 'Poderia nos trazer a conta, por favor? Vocês aceitam cartão de crédito?' }
        ]
      },
      {
        title: 'Fazendo Compras no Varejo',
        content: 'Frases essenciais para lojas e centros comerciais:',
        examples: [
          { en: 'I\'m just looking, thank you. (Quando o vendedor pergunta "Can I help you?").', pt: 'Estou apenas olhando, obrigado.' },
          { en: 'How much is this shirt?', pt: 'Quanto custa esta camisa?' },
          { en: 'Do you have this in a medium / in black?', pt: 'Você tem esta peça no tamanho M / na cor preta?' },
          { en: 'Where are the fitting rooms?', pt: 'Onde ficam os provadores?' }
        ]
      }
    ],
    takeaways: [
      'Substitua "I want" por "I\'d like..." ou "Can I have..., please?".',
      'Conta do restaurante: "the check" (EUA) ou "the bill" (Reino Unido).',
      'Para dispensar um vendedor educadamente, diga: "I\'m just browsing/looking, thanks!".',
      'Tamanhos de roupa: Small (P), Medium (M), Large (G), Extra Large (GG).'
    ]
  },
  {
    id: 'pedir-informacoes-direcoes',
    title: 'Pedindo Informações e Direções na Cidade',
    description: 'Saiba como abordar pessoas na rua, pedir direções para pontos turísticos e compreender as orientações de volta.',
    categoryId: 'situacoes-reais',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['direcoes', 'directions', 'pedir informacoes', 'turn left', 'go straight', 'where is'],
    relatedArticleIds: ['preposicoes-tempo-lugar', 'ingles-para-viagens'],
    sections: [
      {
        title: 'Como Abordar Alguém com Educação',
        content: 'Antes de disparar uma pergunta, sempre comece com um cumprimento amigável:',
        examples: [
          { en: 'Excuse me, could you help me, please?', pt: 'Com licença, você poderia me ajudar, por favor?' },
          { en: 'Excuse me, do you know where the nearest subway station is?', pt: 'Com licença, você sabe onde fica a estação de metrô mais próxima?' },
          { en: 'How do I get to Central Park from here?', pt: 'Como eu chego ao Central Park a partir daqui?' }
        ]
      },
      {
        title: 'Vocabulário de Direções',
        content: 'As palavras-chave que você vai ouvir nas respostas:',
        rules: [
          { title: 'Go straight ahead', explanation: 'Siga em frente / continue reto.' },
          { title: 'Turn left / Turn right', explanation: 'Vire à esquerda / vire à direita.' },
          { title: 'Take the second street on your left', explanation: 'Pegue a segunda rua à sua esquerda.' },
          { title: 'It\'s on the corner of...', explanation: 'Fica na esquina de...' },
          { title: 'Walk two blocks', explanation: 'Caminhe dois quarteirões.' },
          { title: 'Cross the street', explanation: 'Atravesse a rua.' }
        ],
        examples: [
          { en: 'Go straight for two blocks, then turn right at the pharmacy. It\'s on your left.', pt: 'Siga reto por dois quarteirões, depois vire à direita na farmácia. Fica à sua esquerda.' }
        ]
      }
    ],
    takeaways: [
      'Sempre inicie com "Excuse me" para soar educado e amigável.',
      'A pergunta padrão é: "How do I get to [lugar]?" ou "Where is the nearest [serviço]?".',
      'Memorize: go straight (siga reto), turn left/right (vire à esq/dir), block (quarteirão).'
    ]
  },
  {
    id: 'ingles-para-viagens',
    title: 'Inglês para Viagens: Aeroporto, Imigração e Hotel',
    description: 'Guia completo de sobrevivência internacional: check-in, esteira de bagagens, controle de passaporte e hospedagem.',
    categoryId: 'situacoes-reais',
    level: 'A2',
    readingTimeMinutes: 7,
    isEssential: true,
    keywords: ['viagens', 'aeroporto', 'imigracao', 'hotel', 'boarding pass', 'baggage claim'],
    relatedArticleIds: ['pedir-informacoes-direcoes', 'compras-restaurantes'],
    sections: [
      {
        title: 'No Aeroporto: Check-in e Embarque',
        content: 'Frases que você usará e ouvirá no balcão e no portão de embarque:',
        rules: [
          { title: 'Checking in', explanation: 'I\'d like to check in for flight 204 to Miami. Here is my passport.' },
          { title: 'Bagagem', explanation: 'I have one carry-on bag (mala de mão) and one checked bag (mala despachada).' },
          { title: 'Portão e Cartão', explanation: 'Boarding pass (cartão de embarque), Boarding gate (portão de embarque).' }
        ]
      },
      {
        title: 'Na Imigração: As Perguntas Obrigatórias',
        content: 'Oficiais de imigração fazem quase sempre as mesmas 4 perguntas:',
        examples: [
          { en: 'Officer: What is the purpose of your visit? — Traveler: Tourism / Business / Vacation.', pt: 'Oficial: Qual é o propósito da sua visita? — Turista: Turismo / Negócios / Férias.' },
          { en: 'Officer: How long do you plan to stay? — Traveler: I\'ll be staying for two weeks.', pt: 'Oficial: Quanto tempo pretende ficar? — Turista: Ficarei por duas semanas.' },
          { en: 'Officer: Where will you be staying? — Traveler: At the Marriott Hotel in downtown.', pt: 'Oficial: Onde você vai se hospedar? — Turista: No Marriott Hotel no centro.' }
        ]
      },
      {
        title: 'No Hotel: Check-in e Serviços',
        content: 'Como resolver sua estadia com rapidez:',
        examples: [
          { en: 'I have a reservation under the name Lucas Silva.', pt: 'Tenho uma reserva em nome de Lucas Silva.' },
          { en: 'What time is breakfast served? And what is the Wi-Fi password?', pt: 'A que horas o café da manhã é servido? E qual é a senha do Wi-Fi?' },
          { en: 'Could we leave our luggage here until our afternoon flight?', pt: 'Poderíamos deixar nossas malas aqui até o nosso voo da tarde?' }
        ]
      }
    ],
    takeaways: [
      'No aeroporto: carry-on bag (mala de mão) vs checked bag (mala despachada).',
      'Na imigração: responda com clareza, brevidade e apresente suas passagens e reservas impressas ou no celular.',
      'No hotel: reserve under the name of... e pergunte sobre Wi-Fi e horário do café da manhã.'
    ]
  },
  {
    id: 'conversas-cotidianas',
    title: 'Small Talk e Conversas Cotidianas: Quebrando o Gelo',
    description: 'Aprenda a puxar assunto sobre clima, fim de semana e hobbies, e saiba como se despedir educadamente sem parecer abrupto.',
    categoryId: 'situacoes-reais',
    level: 'B1',
    readingTimeMinutes: 5,
    isEssential: false,
    keywords: ['small talk', 'conversas cotidianas', 'quebrar o gelo', 'clima', 'despedidas'],
    relatedArticleIds: ['apresentacoes-pessoais', 'expressoes-frequentes-cotidiano'],
    sections: [
      {
        title: 'O que é Small Talk?',
        content: 'Small talk é a breve conversa casual e informal usada para quebrar o gelo em elevadores, salas de espera ou no início de reuniões. Em países de língua inglesa, ela é fundamental para criar rapport e conexões humanas acolhedoras.'
      },
      {
        title: 'Tópicos Seguros para Puxar Assunto',
        content: 'Os três temas mais universais e neutros:',
        rules: [
          { title: '1. O Clima (The Weather)', explanation: 'Lovely day today, isn\'t it? / Looks like it might rain later.' },
          { title: '2. Fim de Semana (The Weekend)', explanation: 'Do you have any plans for the weekend? / How was your weekend?' },
          { title: '3. Acontecimentos Neutros', explanation: 'How has your week been so far? / Busy day at the office today?' }
        ]
      },
      {
        title: 'Como Encerrar a Conversa com Elegância',
        content: 'Evite sair abruptamente; use uma ponte de transição amigável:',
        examples: [
          { en: 'Well, it was really nice chatting with you! I should get back to work.', pt: 'Bem, foi muito bom conversar com você! Preciso voltar ao trabalho.' },
          { en: 'I have to run now, but let\'s catch up soon. Have a great day!', pt: 'Preciso correr agora, mas vamos nos falar em breve. Tenha um ótimo dia!' }
        ]
      }
    ],
    takeaways: [
      'Small talk é essencial para a etiqueta social no trabalho e em eventos.',
      'Clima e planos de fim de semana são os assuntos mais seguros e naturais.',
      'Sempre anuncie a saída de forma suave ("Well, I should get going...") antes de se despedir.'
    ]
  }
];

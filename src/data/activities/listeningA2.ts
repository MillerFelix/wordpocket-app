import { Activity, ListeningQuestion } from '../../types/activity';

export const LISTENING_A2: Activity<ListeningQuestion>[] = [
  // 1. Ouça e identifique (A2) - Existente
  {
    id: 'listening-a2-id-numbers-prices',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a2',
    topic: 'Números, Preços & Horários',
    title: 'Distinção Numérica: -teen vs -ty',
    description: 'Diferencie com precisão as terminações sonoras que mais causam confusão em inglês.',
    objective: 'Identificar a diferença de ênfase silábica entre números como thirteen/thirty e fifteen/fifty.',
    instructions: 'Ouça as frases com informações numéricas e selecione o dado exato que foi falado.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Numbers and Stress Patterns',
      scenario: 'Informações de preços e números de voo',
      spokenText: 'Item one: Your total comes to fifteen dollars, not fifty. Item two: The train to Boston departs from platform thirteen at three thirty. Item three: There are seventeen students in the morning seminar.',
      speechRate: 0.92,
      estimatedDurationSeconds: 19,
      transcript: 'Item 1: Your total comes to fifteen dollars, not fifty.\nItem 2: The train to Boston departs from platform thirteen at three thirty.\nItem 3: There are seventeen students in the morning seminar.',
      transcriptTranslation: 'Item 1: Seu total dá quinze dólares, não cinquenta.\nItem 2: O trem para Boston sai da plataforma treze às três e meia.\nItem 3: Há dezessete alunos no seminário matutino.'
    },
    questions: [
      {
        id: 'l-a2-np-1',
        type: 'multiple_choice',
        questionText: 'No item 1, qual é o valor correto que o cliente deve pagar?',
        options: [
          { id: 'A', text: '$50.00 (fifty)' },
          { id: 'B', text: '$15.00 (fifteen)' },
          { id: 'C', text: '$55.00 (fifty-five)' },
          { id: 'D', text: '$5.00 (five)' }
        ],
        correctOptionId: 'B',
        explanation: 'O locutor enfatiza: "fifteen dollars, not fifty" ($15, não $50).'
      },
      {
        id: 'l-a2-np-2',
        type: 'multiple_choice',
        questionText: 'No item 2, em qual plataforma o trem para Boston vai partir?',
        options: [
          { id: 'A', text: 'Plataforma 30 (thirty)' },
          { id: 'B', text: 'Plataforma 3 (three)' },
          { id: 'C', text: 'Plataforma 13 (thirteen)' },
          { id: 'D', text: 'Plataforma 14 (fourteen)' }
        ],
        correctOptionId: 'C',
        explanation: 'O áudio diz expressamente "platform thirteen" (plataforma 13) e o horário às 3h30 ("three thirty").'
      },
      {
        id: 'l-a2-np-3',
        type: 'multiple_choice',
        questionText: 'No item 3, quantos alunos estão matriculados no seminário?',
        options: [
          { id: 'A', text: '70 estudantes (seventy)' },
          { id: 'B', text: '17 estudantes (seventeen)' },
          { id: 'C', text: '7 estudantes (seven)' },
          { id: 'D', text: '27 estudantes (twenty-seven)' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase diz "seventeen students" (17 alunos), com a tônica no sufixo -teen.'
      }
    ]
  },

  // 2. Ouça e identifique (A2) - Novo
  {
    id: 'listening-a2-id-past-verbs',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a2',
    topic: 'Verbos no Passado & Ações',
    title: 'Distinguindo Presente e Passado Simples',
    description: 'Diferencie verbos regulares e irregulares falados no presente e no passado em relatos rápidos.',
    objective: 'Reconhecer formas verbais temporais como bought vs buy, went vs go e arrived vs arrive.',
    instructions: 'Ouça atentamente as frases e identifique o tempo verbal e a ação praticada.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Past vs Present Verbs in Speech',
      scenario: 'Pequenos relatos de acontecimentos recentes',
      spokenText: 'Number one: Yesterday afternoon, Maria bought two tickets for the concert. Number two: We went to the new museum on Fifth Avenue last Saturday. Number three: The delivery package arrived while we were having breakfast.',
      speechRate: 0.9,
      estimatedDurationSeconds: 18,
      transcript: 'Number 1: Yesterday afternoon, Maria bought two tickets for the concert.\nNumber 2: We went to the new museum on Fifth Avenue last Saturday.\nNumber 3: The delivery package arrived while we were having breakfast.',
      transcriptTranslation: 'Número 1: Ontem à tarde, Maria comprou dois ingressos para o show.\nNúmero 2: Nós fomos ao novo museu na Quinta Avenida no último sábado.\nNúmero 3: O pacote da encomenda chegou enquanto estávamos tomando café da manhã.'
    },
    questions: [
      {
        id: 'l-a2-pv-1',
        type: 'multiple_choice',
        questionText: 'Na primeira frase, qual verbo no passado foi utilizado por Maria?',
        options: [
          { id: 'A', text: 'Brought (trouxe)' },
          { id: 'B', text: 'Bought (comprou)' },
          { id: 'C', text: 'Build (constrói)' },
          { id: 'D', text: 'Borrow (pede emprestado)' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase diz "Maria bought two tickets" (Maria comprou dois ingressos, passado de buy).'
      },
      {
        id: 'l-a2-pv-2',
        type: 'multiple_choice',
        questionText: 'Onde o grupo foi no último sábado?',
        options: [
          { id: 'A', text: 'Ao cinema central' },
          { id: 'B', text: 'Ao novo museu na Quinta Avenida (went to the new museum)' },
          { id: 'C', text: 'A um restaurante italiano' },
          { id: 'D', text: 'À praia' }
        ],
        correctOptionId: 'B',
        explanation: 'O locutor afirma: "We went to the new museum on Fifth Avenue last Saturday".'
      },
      {
        id: 'l-a2-pv-3',
        type: 'multiple_choice',
        questionText: 'O que aconteceu enquanto eles tomavam café da manhã?',
        options: [
          { id: 'A', text: 'O pacote da entrega chegou (arrived)' },
          { id: 'B', text: 'O telefone tocou três vezes' },
          { id: 'C', text: 'O cachorro fugiu' },
          { id: 'D', text: 'Começou a chover' }
        ],
        correctOptionId: 'A',
        explanation: 'A frase relata: "The delivery package arrived while we were having breakfast".'
      }
    ]
  },

  // 3. Ouça e identifique (A2) - Novo
  {
    id: 'listening-a2-id-prepositions-place',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a2',
    topic: 'Preposições de Lugar & Espaço',
    title: 'Localizando Objetos e Lugares na Cidade',
    description: 'Identifique com precisão as posições relativas (next to, across from, between, behind).',
    objective: 'Distinguir preposições espaciais do inglês em instruções de localização.',
    instructions: 'Ouça o áudio e selecione a posição exata indicada para cada item.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Spatial Prepositions in Daily Life',
      scenario: 'Descrevendo onde ficam estabelecimentos e pertences',
      spokenText: 'Item one: The post office is located across from the central train station. Item two: Your car keys are right behind the microwave in the kitchen. Item three: The bookstore is between the coffee shop and the flower market.',
      speechRate: 0.9,
      estimatedDurationSeconds: 18,
      transcript: 'Item 1: The post office is located across from the central train station.\nItem 2: Your car keys are right behind the microwave in the kitchen.\nItem 3: The bookstore is between the coffee shop and the flower market.',
      transcriptTranslation: 'Item 1: A agência dos correios fica do outro lado da rua em frente à estação central de trem.\nItem 2: As chaves do seu carro estão bem atrás do micro-ondas na cozinha.\nItem 3: A livraria fica entre a cafeteria e o mercado de flores.'
    },
    questions: [
      {
        id: 'l-a2-pp-1',
        type: 'multiple_choice',
        questionText: 'Onde fica a agência dos correios (post office)?',
        options: [
          { id: 'A', text: 'Atrás da estação central' },
          { id: 'B', text: 'Do outro lado da rua, em frente à estação (across from the station)' },
          { id: 'C', text: 'Dentro da estação de trem' },
          { id: 'D', text: 'Ao lado do hospital' }
        ],
        correctOptionId: 'B',
        explanation: '"Across from" significa do outro lado da rua em frente a algo.'
      },
      {
        id: 'l-a2-pp-2',
        type: 'multiple_choice',
        questionText: 'Onde foram encontradas as chaves do carro no item dois?',
        options: [
          { id: 'A', text: 'Dentro do micro-ondas' },
          { id: 'B', text: 'Em cima da geladeira' },
          { id: 'C', text: 'Bem atrás do micro-ondas (behind the microwave)' },
          { id: 'D', text: 'Embaixo da mesa de jantar' }
        ],
        correctOptionId: 'C',
        explanation: 'A frase diz: "right behind the microwave in the kitchen".'
      },
      {
        id: 'l-a2-pp-3',
        type: 'multiple_choice',
        questionText: 'Entre quais dois estabelecimentos fica a livraria?',
        options: [
          { id: 'A', text: 'Entre o banco e a padaria' },
          { id: 'B', text: 'Entre o cinema e a farmácia' },
          { id: 'C', text: 'Entre a cafeteria e o mercado de flores (coffee shop and flower market)' },
          { id: 'D', text: 'Entre a escola e o parque' }
        ],
        correctOptionId: 'C',
        explanation: 'O áudio aponta: "between the coffee shop and the flower market".'
      }
    ]
  },

  // 4. Ouça e identifique (A2) - Novo
  {
    id: 'listening-a2-id-comparatives',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a2',
    topic: 'Comparativos & Preferências',
    title: 'Comparações de Transporte, Preço e Clima',
    description: 'Ouça frases que comparam opções cotidianas com adjetivos curtos e longos (faster, cheaper, more convenient).',
    objective: 'Reconhecer estruturas comparativas sonoras e suas implicações práticas.',
    instructions: 'Ouça as frases e escolha a alternativa que reflete a comparação correta.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Everyday Comparisons',
      scenario: 'Ponderando escolhas de transporte e hospedagem',
      spokenText: 'Sentence one: Taking the subway is much faster than driving during rush hour. Sentence two: The small boutique hotel is quieter and cheaper than the resort. Sentence three: Today is significantly warmer and sunnier than yesterday.',
      speechRate: 0.9,
      estimatedDurationSeconds: 17,
      transcript: 'Sentence 1: Taking the subway is much faster than driving during rush hour.\nSentence 2: The small boutique hotel is quieter and cheaper than the resort.\nSentence 3: Today is significantly warmer and sunnier than yesterday.',
      transcriptTranslation: 'Frase 1: Pegar o metrô é muito mais rápido do que dirigir no horário de pico.\nFrase 2: O pequeno hotel boutique é mais silencioso e mais barato do que o resort.\nFrase 3: Hoje está significativamente mais quente e ensolarado do que ontem.'
    },
    questions: [
      {
        id: 'l-a2-cp-1',
        type: 'multiple_choice',
        questionText: 'Qual vantagem do metrô é destacada no horário de pico?',
        options: [
          { id: 'A', text: 'É mais confortável' },
          { id: 'B', text: 'É muito mais rápido que dirigir (much faster than driving)' },
          { id: 'C', text: 'É de graça' },
          { id: 'D', text: 'Tem vista panorâmica' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase diz: "Taking the subway is much faster than driving during rush hour".'
      },
      {
        id: 'l-a2-cp-2',
        type: 'multiple_choice',
        questionText: 'Quais são as características do hotel boutique comparado ao resort?',
        options: [
          { id: 'A', text: 'Mais silencioso e mais barato (quieter and cheaper)' },
          { id: 'B', text: 'Maior e mais luxuoso' },
          { id: 'C', text: 'Mais barulhento e perto da praia' },
          { id: 'D', text: 'Mais antigo e caro' }
        ],
        correctOptionId: 'A',
        explanation: 'O locutor usa os comparativos "quieter and cheaper than the resort".'
      },
      {
        id: 'l-a2-cp-3',
        type: 'multiple_choice',
        questionText: 'Como está o clima de hoje comparado com o de ontem?',
        options: [
          { id: 'A', text: 'Mais frio e com vento' },
          { id: 'B', text: 'Mais nublado e chuvoso' },
          { id: 'C', text: 'Mais quente e ensolarado (warmer and sunnier)' },
          { id: 'D', text: 'Exatamente igual' }
        ],
        correctOptionId: 'C',
        explanation: 'A frase afirma: "Today is significantly warmer and sunnier than yesterday".'
      }
    ]
  },

  // 5. Compreenda o diálogo (A2) - Existente
  {
    id: 'listening-a2-dial-travel',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a2',
    topic: 'Viagens & Hospedagem',
    title: 'Planejando a Viagem a Trabalho',
    description: 'Dois colegas decidem a melhor opção de hotel e transporte para uma conferência.',
    objective: 'Identificar justificativas, vantagens comparativas e consenso final entre interlocutores.',
    instructions: 'Acompanhe a conversa entre Daniel e Rachel e preste atenção às razões das escolhas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Business Trip Arrangements',
      scenario: 'Planejamento de viagem entre colegas no escritório',
      spokenText: 'Rachel, have you looked at hotel options for the Seattle conference? Yes! The Grand Palace is two blocks from the convention center, but it is two hundred dollars a night. The Harbor View is only one hundred and twenty dollars, but we would need to take the light rail. I think the Grand Palace is worth the extra price because we can walk to the venue and save time on commuting. You are right. Time is crucial since our presentation starts at eight thirty in the morning. Let us book the Grand Palace. Sounds like a plan. I will take care of the booking.',
      dialogueLines: [
        { speaker: 'Daniel', gender: 'male', text: 'Rachel, have you looked at hotel options for the Seattle conference?', translation: 'Rachel, você olhou as opções de hotel para a conferência em Seattle?' },
        { speaker: 'Rachel', gender: 'female', text: 'Yes! The Grand Palace is two blocks from the convention center, but it is two hundred dollars a night. The Harbor View is only one hundred and twenty dollars, but we would need to take the light rail.', translation: 'Sim! O Grand Palace fica a duas quadras do centro de convenções, mas custa duzentos dólares por noite. O Harbor View custa apenas cento e vinte dólares, mas precisaríamos pegar o veículo leve sobre trilhos.' },
        { speaker: 'Daniel', gender: 'male', text: 'I think the Grand Palace is worth the extra price because we can walk to the venue and save time on commuting.', translation: 'Acho que o Grand Palace vale o preço a mais porque poderemos caminhar até o evento e economizar tempo no deslocamento.' },
        { speaker: 'Rachel', gender: 'female', text: 'You are right. Time is crucial since our presentation starts at eight thirty in the morning. Let us book the Grand Palace.', translation: 'Tem razão. Tempo é fundamental, já que nossa apresentação começa às oito e meia da manhã. Vamos reservar o Grand Palace.' },
        { speaker: 'Daniel', gender: 'male', text: 'Sounds like a plan. I will take care of the booking.', translation: 'Combinado! Vou cuidar da reserva agora mesmo.' }
      ],
      speechRate: 0.94,
      estimatedDurationSeconds: 28,
      transcript: 'Daniel: Rachel, have you looked at hotel options for the Seattle conference?\nRachel: Yes! The Grand Palace is two blocks from the convention center, but it is two hundred dollars a night. The Harbor View is only one hundred and twenty dollars, but we would need to take the light rail.\nDaniel: I think the Grand Palace is worth the extra price because we can walk to the venue and save time on commuting.\nRachel: You are right. Time is crucial since our presentation starts at eight thirty in the morning. Let us book the Grand Palace.\nDaniel: Sounds like a plan. I will take care of the booking.',
      transcriptTranslation: 'Daniel: Rachel, você olhou as opções de hotel para a conferência em Seattle?\nRachel: Sim! O Grand Palace fica a duas quadras do centro de convenções, mas custa duzentos dólares por noite. O Harbor View custa apenas cento e vinte dólares, mas precisaríamos pegar o veículo leve sobre trilhos.\nDaniel: Acho que o Grand Palace vale o preço a mais porque poderemos caminhar até o evento e economizar tempo no deslocamento.\nRachel: Tem razão. Tempo é fundamental, já que nossa apresentação começa às oito e meia da manhã. Vamos reservar o Grand Palace.\nDaniel: Combinado! Vou cuidar da reserva agora mesmo.'
    },
    questions: [
      {
        id: 'l-a2-dt-1',
        type: 'multiple_choice',
        questionText: 'Qual é a principal desvantagem do hotel Harbor View?',
        options: [
          { id: 'A', text: 'Ele custa muito mais caro do que o Grand Palace.' },
          { id: 'B', text: 'Exigiria pegar transporte sobre trilhos (light rail) até o evento.' },
          { id: 'C', text: 'Não oferece café da manhã incluso.' },
          { id: 'D', text: 'Está sem quartos disponíveis para a data.' }
        ],
        correctOptionId: 'B',
        explanation: 'Rachel explica que, embora seja mais barato ($120), "we would need to take the light rail".'
      },
      {
        id: 'l-a2-dt-2',
        type: 'multiple_choice',
        questionText: 'Por que Daniel e Rachel decidem pagar mais pelo Grand Palace?',
        options: [
          { id: 'A', text: 'Porque a empresa deles tem desconto de 50% lá.' },
          { id: 'B', text: 'Porque eles querem economizar tempo de deslocamento caminhando até o local.' },
          { id: 'C', text: 'Porque a piscina do hotel é aquecida.' },
          { id: 'D', text: 'Porque o outro hotel foi cancelado.' }
        ],
        correctOptionId: 'B',
        explanation: 'Daniel argumenta: "we can walk to the venue and save time on commuting", e Rachel concorda pela proximidade com a apresentação às 8h30.'
      },
      {
        id: 'l-a2-dt-3',
        type: 'multiple_choice',
        questionText: 'A que horas começará a apresentação de Daniel e Rachel?',
        options: [
          { id: 'A', text: 'Às 7h00 da manhã' },
          { id: 'B', text: 'Às 8h30 da manhã' },
          { id: 'C', text: 'Às 9h15 da manhã' },
          { id: 'D', text: 'Ao meio-dia' }
        ],
        correctOptionId: 'B',
        explanation: 'Rachel afirma: "our presentation starts at eight thirty in the morning".'
      }
    ]
  },

  // 6. Compreenda o diálogo (A2) - Novo
  {
    id: 'listening-a2-dial-birthday-gift',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a2',
    topic: 'Presentes & Família',
    title: 'Escolhendo um Presente para a Mãe',
    description: 'Chloe e Sam discutem opções de presentes de aniversário para a mãe deles.',
    objective: 'Identificar gostos de terceiros, orçamentos compartilhados e acordos.',
    instructions: 'Ouça o diálogo entre os irmãos e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Choosing a Birthday Present',
      scenario: 'Dois irmãos conversando na sala de estar',
      spokenText: 'Sam, have you thought about Mom birthday gift yet? Her birthday is next Saturday. I was thinking about getting her a hardcover gardening book, because she loves planting herbs on the balcony. That is a thoughtful idea! But what if we also buy her a set of high-quality stainless steel garden tools? She mentioned her old shears broke last week. Perfect! The book is twenty-five dollars, and the tool set is thirty-five. If we split the cost, it will be thirty dollars each. That sounds like a wonderful plan! Let us order it today so it arrives by Thursday.',
      dialogueLines: [
        { speaker: 'Chloe', gender: 'female', text: 'Sam, have you thought about Mom birthday gift yet? Her birthday is next Saturday.', translation: 'Sam, você já pensou no presente de aniversário da mamãe? O aniversário dela é no próximo sábado.' },
        { speaker: 'Sam', gender: 'male', text: 'I was thinking about getting her a hardcover gardening book, because she loves planting herbs on the balcony.', translation: 'Eu estava pensando em comprar um livro de capa dura sobre jardinagem, porque ela adora plantar ervas na varanda.' },
        { speaker: 'Chloe', gender: 'female', text: 'That is a thoughtful idea! But what if we also buy her a set of high-quality stainless steel garden tools? She mentioned her old shears broke last week.', translation: 'Essa é uma ideia muito carinhosa! Mas e se também comprarmos um conjunto de ferramentas de jardim em aço inox? Ela comentou que a tesoura velha dela quebrou na semana passada.' },
        { speaker: 'Sam', gender: 'male', text: 'Perfect! The book is twenty-five dollars, and the tool set is thirty-five. If we split the cost, it will be thirty dollars each.', translation: 'Perfeito! O livro custa vinte e cinco dólares e o conjunto de ferramentas trinta e cinco. Se dividirmos o custo, fica trinta dólares para cada um.' },
        { speaker: 'Chloe', gender: 'female', text: 'That sounds like a wonderful plan! Let us order it today so it arrives by Thursday.', translation: 'Parece um plano maravilhoso! Vamos pedir hoje para que chegue até quinta-feira.' }
      ],
      speechRate: 0.92,
      estimatedDurationSeconds: 29,
      transcript: 'Chloe: Sam, have you thought about Mom\'s birthday gift yet? Her birthday is next Saturday.\nSam: I was thinking about getting her a hardcover gardening book, because she loves planting herbs on the balcony.\nChloe: That is a thoughtful idea! But what if we also buy her a set of high-quality garden tools? She mentioned her old shears broke last week.\nSam: Perfect! The book is $25, and the tool set is $35. If we split the cost, it will be $30 each.\nChloe: That sounds like a wonderful plan! Let us order it today so it arrives by Thursday.',
      transcriptTranslation: 'Chloe: Sam, você já pensou no presente de aniversário da mamãe? O aniversário dela é no próximo sábado.\nSam: Eu estava pensando em comprar um livro de capa dura sobre jardinagem, porque ela adora plantar ervas na varanda.\nChloe: Essa é uma ideia carinhosa! Mas e se também comprarmos um conjunto de ferramentas de jardim? Ela comentou que a tesoura velha quebrou na semana passada.\nSam: Perfeito! O livro custa $25 e as ferramentas $35. Se dividirmos, fica $30 para cada um.\nChloe: Parece um plano maravilhoso! Vamos pedir hoje para chegar até quinta-feira.'
    },
    questions: [
      {
        id: 'l-a2-bg-1',
        type: 'multiple_choice',
        questionText: 'Por que Sam sugere um livro de jardinagem?',
        options: [
          { id: 'A', text: 'Porque ela é professora de botânica' },
          { id: 'B', text: 'Porque ela adora plantar ervas na varanda (planting herbs on the balcony)' },
          { id: 'C', text: 'Porque o livro estava com 80% de desconto' },
          { id: 'D', text: 'Porque ela quer aprender a cozinhar' }
        ],
        correctOptionId: 'B',
        explanation: 'Sam explica: "because she loves planting herbs on the balcony".'
      },
      {
        id: 'l-a2-bg-2',
        type: 'multiple_choice',
        questionText: 'O que aconteceu com a tesoura de jardinagem antiga da mãe?',
        options: [
          { id: 'A', text: 'Ela foi perdida na mudança' },
          { id: 'B', text: 'Quebrou na semana passada (broke last week)' },
          { id: 'C', text: 'Ficou enferrujada na chuva' },
          { id: 'D', text: 'Ela deu de presente para uma vizinha' }
        ],
        correctOptionId: 'B',
        explanation: 'Chloe lembra: "She mentioned her old shears broke last week".'
      },
      {
        id: 'l-a2-bg-3',
        type: 'multiple_choice',
        questionText: 'Quanto cada um vai pagar ao dividir o presente total?',
        options: [
          { id: 'A', text: '$25' },
          { id: 'B', text: '$30 cada um (thirty dollars each)' },
          { id: 'C', text: '$35' },
          { id: 'D', text: '$60' }
        ],
        correctOptionId: 'B',
        explanation: 'O total de $25 + $35 = $60 dividido por 2 dá $30 para cada um.'
      }
    ]
  },

  // 7. Compreenda o diálogo (A2) - Novo
  {
    id: 'listening-a2-dial-weekend-roadtrip',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a2',
    topic: 'Viagens & Natureza',
    title: 'Planejando um Bate-e-Volta na Montanha',
    description: 'Mateo e Elena combinam um passeio de sábado para fazer trilha nas montanhas.',
    objective: 'Compreender planejamento logístico, horários de partida e itens a levar.',
    instructions: 'Ouça a conversa entre Mateo e Elena e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Planning a Mountain Day Trip',
      scenario: 'Dois amigos organizando uma viagem rápida',
      spokenText: 'Elena, what time should we leave for Blue Mountain trail on Saturday? Since the drive takes around two hours, I think leaving at seven in the morning is best. That way we can beat the heat and avoid traffic. Good thinking. Should we pack lunch or eat at a restaurant near the peak? Packing sandwiches and fresh fruit is much cheaper and more convenient. We can have a picnic at the scenic viewpoint. Awesome! I will bring water bottles and energy bars. Can you prepare the turkey sandwiches? Absolutely! I will make them on Friday evening.',
      dialogueLines: [
        { speaker: 'Mateo', gender: 'male', text: 'Elena, what time should we leave for Blue Mountain trail on Saturday?', translation: 'Elena, a que horas devemos sair para a trilha de Blue Mountain no sábado?' },
        { speaker: 'Elena', gender: 'female', text: 'Since the drive takes around two hours, I think leaving at seven in the morning is best. That way we can beat the heat and avoid traffic.', translation: 'Como a viagem leva cerca de duas horas, acho que sair às sete da manhã é o melhor. Assim fugimos do calor e evitamos o trânsito.' },
        { speaker: 'Mateo', gender: 'male', text: 'Good thinking. Should we pack lunch or eat at a restaurant near the peak?', translation: 'Bem pensado. Devemos levar lanche ou comer em um restaurante perto do pico?' },
        { speaker: 'Elena', gender: 'female', text: 'Packing sandwiches and fresh fruit is much cheaper and more convenient. We can have a picnic at the scenic viewpoint.', translation: 'Levar sanduíches e frutas frescas é bem mais barato e conveniente. Podemos fazer um piquenique no mirante.' },
        { speaker: 'Mateo', gender: 'male', text: 'Awesome! I will bring water bottles and energy bars. Can you prepare the turkey sandwiches?', translation: 'Demais! Eu levo garrafas de água e barras de cereal. Você pode preparar os sanduíches de peru?' },
        { speaker: 'Elena', gender: 'female', text: 'Absolutely! I will make them on Friday evening.', translation: 'Com certeza! Vou prepará-los na sexta-feira à noite.' }
      ],
      speechRate: 0.92,
      estimatedDurationSeconds: 28,
      transcript: 'Mateo: Elena, what time should we leave for Blue Mountain trail on Saturday?\nElena: Since the drive takes around two hours, I think leaving at seven in the morning is best. That way we can beat the heat and avoid traffic.\nMateo: Good thinking. Should we pack lunch or eat at a restaurant near the peak?\nElena: Packing sandwiches and fresh fruit is much cheaper and more convenient. We can have a picnic at the scenic viewpoint.\nMateo: Awesome! I will bring water bottles and energy bars. Can you prepare the turkey sandwiches?\nElena: Absolutely! I will make them on Friday evening.',
      transcriptTranslation: 'Mateo: Elena, a que horas devemos sair para a trilha no sábado?\nElena: Como a viagem leva cerca de duas horas, sair às 7h da manhã é o melhor para evitar calor e trânsito.\nMateo: Bem pensado. Levamos lanche ou comemos em restaurante?\nElena: Levar sanduíches e frutas é mais barato e conveniente. Podemos fazer piquenique no mirante.\nMateo: Demais! Eu levo água e barras energéticas. Você faz os sanduíches de peru?\nElena: Com certeza! Vou prepará-los na sexta à noite.'
    },
    questions: [
      {
        id: 'l-a2-mr-1',
        type: 'multiple_choice',
        questionText: 'Por que Elena quer sair às 7h da manhã?',
        options: [
          { id: 'A', text: 'Para assistir ao nascer do sol' },
          { id: 'B', text: 'Para fugir do calor e evitar o trânsito (beat the heat and avoid traffic)' },
          { id: 'C', text: 'Porque o parque fecha ao meio-dia' },
          { id: 'D', text: 'Porque o carro precisa de manutenção cedo' }
        ],
        correctOptionId: 'B',
        explanation: 'Elena explica: "leaving at seven in the morning is best. That way we can beat the heat and avoid traffic".'
      },
      {
        id: 'l-a2-mr-2',
        type: 'multiple_choice',
        questionText: 'Onde eles decidem almoçar?',
        options: [
          { id: 'A', text: 'Em um restaurante luxuoso no topo' },
          { id: 'B', text: 'Em uma lanchonete de posto na estrada' },
          { id: 'C', text: 'Piquenique no mirante com sanduíches e frutas (scenic viewpoint)' },
          { id: 'D', text: 'Eles decidem jejuar até voltar' }
        ],
        correctOptionId: 'C',
        explanation: 'Elena sugere: "We can have a picnic at the scenic viewpoint".'
      },
      {
        id: 'l-a2-mr-3',
        type: 'multiple_choice',
        questionText: 'Quando Elena vai preparar os sanduíches de peru?',
        options: [
          { id: 'A', text: 'Na sexta-feira à noite (Friday evening)' },
          { id: 'B', text: 'No sábado às 6h da manhã' },
          { id: 'C', text: 'Durante a viagem de carro' },
          { id: 'D', text: 'No domingo anterior' }
        ],
        correctOptionId: 'A',
        explanation: 'Elena responde: "I will make them on Friday evening".'
      }
    ]
  },

  // 8. Compreenda o diálogo (A2) - Novo
  {
    id: 'listening-a2-dial-renting-bike',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a2',
    topic: 'Lazer & Esporte',
    title: 'Alugando Bicicletas no Parque',
    description: 'Noah e Mia conversam no quiosque de aluguel de bicicletas sobre capacetes, tempo e custos.',
    objective: 'Compreender termos de locação, regras de segurança e estimativa de tempo.',
    instructions: 'Acompanhe a conversa e responda às perguntas sobre as condições de aluguel.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Renting Bicycles at the Park',
      scenario: 'Quiosque de locação ao lado da ciclovia',
      spokenText: 'Mia, look at those tandem bikes! Do you want to rent a tandem or two separate bicycles? Two separate hybrid bikes will definitely be easier to ride on the hill sections. How long should we rent them for? The attendant said it is ten dollars an hour, or twenty-five dollars for the whole afternoon. Since the trail around the lake takes about three hours, the afternoon pass is a much better deal. Agreed! Do the rentals include helmets and bike locks? Yes, helmets and locks are complimentary with every rental. Great, let us get our helmets and start pedaling!',
      dialogueLines: [
        { speaker: 'Noah', gender: 'male', text: 'Mia, look at those tandem bikes! Do you want to rent a tandem or two separate bicycles?', translation: 'Mia, olha aquelas bicicletas de dois lugares (tandem)! Você quer alugar uma tandem ou duas bicicletas separadas?' },
        { speaker: 'Mia', gender: 'female', text: 'Two separate hybrid bikes will definitely be easier to ride on the hill sections.', translation: 'Duas bicicletas híbridas separadas com certeza serão mais fáceis de pedalar nas subidas.' },
        { speaker: 'Noah', gender: 'male', text: 'How long should we rent them for?', translation: 'Por quanto tempo devemos alugá-las?' },
        { speaker: 'Mia', gender: 'female', text: 'The attendant said it is ten dollars an hour, or twenty-five dollars for the whole afternoon. Since the trail around the lake takes about three hours, the afternoon pass is a much better deal.', translation: 'O atendente disse que custa dez dólares por hora ou vinte e cinco dólares para a tarde toda. Como a trilha em volta do lago leva umas três horas, o passe para a tarde toda vale muito mais a pena.' },
        { speaker: 'Noah', gender: 'male', text: 'Agreed! Do the rentals include helmets and bike locks?', translation: 'Concordo! O aluguel inclui capacetes e travas de segurança?' },
        { speaker: 'Mia', gender: 'female', text: 'Yes, helmets and locks are complimentary with every rental.', translation: 'Sim, capacetes e travas são cortesia com qualquer aluguel.' },
        { speaker: 'Noah', gender: 'male', text: 'Great, let us get our helmets and start pedaling!', translation: 'Ótimo, vamos pegar nossos capacetes e começar a pedalar!' }
      ],
      speechRate: 0.92,
      estimatedDurationSeconds: 27,
      transcript: 'Noah: Mia, look at those tandem bikes! Do you want to rent a tandem or two separate bicycles?\nMia: Two separate hybrid bikes will definitely be easier to ride on the hill sections.\nNoah: How long should we rent them for?\nMia: The attendant said it is $10 an hour, or $25 for the whole afternoon. Since the trail around the lake takes about 3 hours, the afternoon pass is a much better deal.\nNoah: Agreed! Do the rentals include helmets and bike locks?\nMia: Yes, helmets and locks are complimentary with every rental.\nNoah: Great, let us get our helmets and start pedaling!',
      transcriptTranslation: 'Noah: Mia, olha aquelas bicicletas tandem! Você quer alugar uma de dois lugares ou duas separadas?\nMia: Duas híbridas separadas serão mais fáceis nas subidas.\nNoah: Por quanto tempo devemos alugar?\nMia: Custa $10 por hora ou $25 a tarde toda. Como a trilha do lago leva 3 horas, o passe da tarde compensa mais.\nNoah: Fechado! Inclui capacetes e travas?\nMia: Sim, são cortesia em qualquer aluguel.\nNoah: Ótimo, vamos pegar os capacetes e pedalar!'
    },
    questions: [
      {
        id: 'l-a2-rb-1',
        type: 'multiple_choice',
        questionText: 'Por que Mia prefere duas bicicletas separadas em vez da bicicleta tandem?',
        options: [
          { id: 'A', text: 'Porque as tandens são mais caras' },
          { id: 'B', text: 'Porque bicicletas separadas são mais fáceis nas subidas (hill sections)' },
          { id: 'C', text: 'Porque ela não sabe pedalar em dupla' },
          { id: 'D', text: 'Porque a cor da tandem era feia' }
        ],
        correctOptionId: 'B',
        explanation: 'Mia afirma: "Two separate hybrid bikes will definitely be easier to ride on the hill sections".'
      },
      {
        id: 'l-a2-rb-2',
        type: 'multiple_choice',
        questionText: 'Por que o passe para a tarde inteira ($25) compensa mais para eles?',
        options: [
          { id: 'A', text: 'Porque eles têm cupom de desconto' },
          { id: 'B', text: 'Porque a trilha do lago leva cerca de 3 horas, saindo mais barato que pagar por hora' },
          { id: 'C', text: 'Porque dá direito a lanche' },
          { id: 'D', text: 'Porque inclui uma aula de ciclismo' }
        ],
        correctOptionId: 'B',
        explanation: 'Pagar 3 horas avulsas custaria $30 ($10/h), enquanto o passe da tarde custa $25.'
      },
      {
        id: 'l-a2-rb-3',
        type: 'multiple_choice',
        questionText: 'O que o atendente informa sobre os capacetes e travas de segurança?',
        options: [
          { id: 'A', text: 'Eles custam 5 dólares a mais cada' },
          { id: 'B', text: 'Estão esgotados' },
          { id: 'C', text: 'São cortesias gratuitas inclusas em qualquer aluguel (complimentary)' },
          { id: 'D', text: 'Não são permitidos na trilha' }
        ],
        correctOptionId: 'C',
        explanation: 'Mia diz: "Yes, helmets and locks are complimentary with every rental" (gratuitos/cortesia).'
      }
    ]
  },

  // 9. Situações da vida real (A2) - Existente
  {
    id: 'listening-a2-sit-pharmacy',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a2',
    topic: 'Saúde & Farmácia',
    title: 'Consultando o Farmacêutico',
    description: 'Entenda instruções médicas e recomendações sobre uso de medicamentos em uma farmácia.',
    objective: 'Captar sintomas descritos, posologia recomendada e efeitos colaterais informados.',
    instructions: 'Ouça o cliente explicando o que sente e as instruções dadas pelo farmacêutico.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'At the Pharmacy',
      scenario: 'Balcão de uma farmácia comunitária',
      spokenText: 'Hello there, how can I assist you today? Hi. I have had a bad headache and a sore throat since yesterday evening. I see. Do you also have a fever or allergies to medications? No fever, and no known allergies. In that case, take these pain relief tablets. Take one tablet every six hours with water, preferably after a meal. Do not exceed four tablets in twenty-four hours. Got it. Does this medicine cause drowsiness? No, this one is non-drowsy, so you can safely drive and work. That is wonderful news. Thank you very much! You are very welcome. Get well soon!',
      dialogueLines: [
        { speaker: 'Pharmacist', gender: 'female', text: 'Hello there, how can I assist you today?', translation: 'Olá, como posso ajudar você hoje?' },
        { speaker: 'Customer', gender: 'male', text: 'Hi. I have had a bad headache and a sore throat since yesterday evening.', translation: 'Oi. Estou com uma forte dor de cabeça e garganta inflamada desde ontem à noite.' },
        { speaker: 'Pharmacist', gender: 'female', text: 'I see. Do you also have a fever or allergies to medications?', translation: 'Entendo. Você também tem febre ou alguma alergia a medicamentos?' },
        { speaker: 'Customer', gender: 'male', text: 'No fever, and no known allergies.', translation: 'Sem febre e sem alergias conhecidas.' },
        { speaker: 'Pharmacist', gender: 'female', text: 'In that case, take these pain relief tablets. Take one tablet every six hours with water, preferably after a meal. Do not exceed four tablets in twenty-four hours.', translation: 'Nesse caso, tome estes comprimidos para alívio da dor. Tome um comprimido a cada seis horas com água, de preferência após uma refeição. Não ultrapasse quatro comprimidos em vinte e quatro horas.' },
        { speaker: 'Customer', gender: 'male', text: 'Got it. Does this medicine cause drowsiness?', translation: 'Entendido. Este remédio causa sonolência?' },
        { speaker: 'Pharmacist', gender: 'female', text: 'No, this one is non-drowsy, so you can safely drive and work.', translation: 'Não, este é sem sonolência, então você pode dirigir e trabalhar com segurança.' },
        { speaker: 'Customer', gender: 'male', text: 'That is wonderful news. Thank you very much!', translation: 'Essa é uma ótima notícia. Muito obrigado!' },
        { speaker: 'Pharmacist', gender: 'female', text: 'You are very welcome. Get well soon!', translation: 'De nada! Melhoras para você!' }
      ],
      speechRate: 0.92,
      estimatedDurationSeconds: 30,
      transcript: 'Pharmacist: Hello there, how can I assist you today?\nCustomer: Hi. I have had a bad headache and a sore throat since yesterday evening.\nPharmacist: I see. Do you also have a fever or allergies to medications?\nCustomer: No fever, and no known allergies.\nPharmacist: In that case, take these pain relief tablets. Take one tablet every six hours with water, preferably after a meal. Do not exceed four tablets in twenty-four hours.\nCustomer: Got it. Does this medicine cause drowsiness?\nPharmacist: No, this one is non-drowsy, so you can safely drive and work.\nCustomer: That is wonderful news. Thank you very much!\nPharmacist: You are very welcome. Get well soon!',
      transcriptTranslation: 'Farmacêutico: Olá, como posso ajudar você hoje?\nCliente: Oi. Estou com uma forte dor de cabeça e garganta inflamada desde ontem à noite.\nFarmacêutico: Entendo. Você também tem febre ou alguma alergia a medicamentos?\nCliente: Sem febre e sem alergias conhecidas.\nFarmacêutico: Nesse caso, tome estes comprimidos para alívio da dor. Tome um comprimido a cada seis horas com água, de preferência após uma refeição. Não ultrapasse quatro comprimidos em vinte e quatro horas.\nCliente: Entendido. Este remédio causa sonolência?\nFarmacêutico: Não, este é sem sonolência, então você pode dirigir e trabalhar com segurança.\nCliente: Essa é uma ótima notícia. Muito obrigado!\nFarmacêutico: De nada! Melhoras para você!'
    },
    questions: [
      {
        id: 'l-a2-sp-1',
        type: 'multiple_choice',
        questionText: 'Quais sintomas o cliente relata ao farmacêutico?',
        options: [
          { id: 'A', text: 'Dor de cabeça forte e garganta inflamada' },
          { id: 'B', text: 'Febre alta e tosse seca' },
          { id: 'C', text: 'Dor no joelho e tontura' },
          { id: 'D', text: 'Enjoo após o almoço' }
        ],
        correctOptionId: 'A',
        explanation: 'O cliente detalha: "I have had a bad headache and a sore throat since yesterday evening".'
      },
      {
        id: 'l-a2-sp-2',
        type: 'multiple_choice',
        questionText: 'Qual é a posologia indicada para o medicamento?',
        options: [
          { id: 'A', text: 'Dois comprimidos antes de dormir' },
          { id: 'B', text: 'Um comprimido a cada seis horas, de preferência após a refeição' },
          { id: 'C', text: 'Um comprimido por dia em jejum' },
          { id: 'D', text: 'Três comprimidos de manhã e três à noite' }
        ],
        correctOptionId: 'B',
        explanation: 'O farmacêutico recomenda: "Take one tablet every six hours with water, preferably after a meal".'
      },
      {
        id: 'l-a2-sp-3',
        type: 'multiple_choice',
        questionText: 'O que o farmacêutico garante sobre a sonolência (drowsiness)?',
        options: [
          { id: 'A', text: 'O remédio causa sono forte e não se deve dirigir.' },
          { id: 'B', text: 'O remédio não causa sono (non-drowsy), permitindo dirigir e trabalhar.' },
          { id: 'C', text: 'O remédio só causa sono se tomado com leite.' },
          { id: 'D', text: 'O paciente precisa repousar na cama por dois dias.' }
        ],
        correctOptionId: 'B',
        explanation: 'O profissional esclarece: "No, this one is non-drowsy, so you can safely drive and work".'
      }
    ]
  },

  // 10. Situações da vida real (A2) - Novo
  {
    id: 'listening-a2-sit-hotel-checkin',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a2',
    topic: 'Hotel & Turismo',
    title: 'Check-in e Informações de Estadia no Hotel',
    description: 'Ouça o processo de check-in na recepção com orientações sobre Wi-Fi, elevador e café da manhã.',
    objective: 'Reconhecer informações de quarto, horários de refeição e regras de hospedagem.',
    instructions: 'Ouça o recepcionista passando os dados da estadia ao hóspede.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Checking In at Riverside Inn',
      scenario: 'Recepção de um hotel elegante',
      spokenText: 'Good afternoon, sir! Welcome to Riverside Inn. Do you have a reservation with us? Yes, my name is David Miller. I booked a double room for three nights. Welcome, Mr. Miller! We have your room ready on the fourth floor, room 412. Here are your keycards. Breakfast is served in the main dining room from seven to ten in the morning, and the Wi-Fi password is on the back of the key sleeve. Is there an elevator nearby? Yes, right behind you past the lobby fountain. Enjoy your stay!',
      dialogueLines: [
        { speaker: 'Receptionist', gender: 'female', text: 'Good afternoon, sir! Welcome to Riverside Inn. Do you have a reservation with us?', translation: 'Boa tarde, senhor! Bem-vindo ao Riverside Inn. O senhor tem uma reserva conosco?' },
        { speaker: 'Guest', gender: 'male', text: 'Yes, my name is David Miller. I booked a double room for three nights.', translation: 'Sim, meu nome é David Miller. Reservei um quarto duplo por três noites.' },
        { speaker: 'Receptionist', gender: 'female', text: 'Welcome, Mr. Miller! We have your room ready on the fourth floor, room 412. Here are your keycards.', translation: 'Bem-vindo, Sr. Miller! Seu quarto está pronto no quarto andar, quarto 412. Aqui estão seus cartões-chave.' },
        { speaker: 'Receptionist', gender: 'female', text: 'Breakfast is served in the main dining room from seven to ten in the morning, and the Wi-Fi password is on the back of the key sleeve.', translation: 'O café da manhã é servido no salão principal das sete às dez da manhã, e a senha do Wi-Fi está no verso da capinha do cartão.' },
        { speaker: 'Guest', gender: 'male', text: 'Is there an elevator nearby?', translation: 'Tem um elevador por perto?' },
        { speaker: 'Receptionist', gender: 'female', text: 'Yes, right behind you past the lobby fountain. Enjoy your stay!', translation: 'Sim, bem atrás de você, passando a fonte do saguão. Tenha uma excelente estadia!' }
      ],
      speechRate: 0.92,
      estimatedDurationSeconds: 28,
      transcript: 'Receptionist: Good afternoon, sir! Welcome to Riverside Inn. Do you have a reservation with us?\nGuest: Yes, my name is David Miller. I booked a double room for three nights.\nReceptionist: Welcome, Mr. Miller! Your room is 412 on the fourth floor. Here are your keycards.\nReceptionist: Breakfast is served from 7 to 10 AM, and the Wi-Fi password is on the back of the key sleeve.\nGuest: Is there an elevator nearby?\nReceptionist: Yes, right behind you past the lobby fountain. Enjoy your stay!',
      transcriptTranslation: 'Recepcionista: Boa tarde, senhor! Tem reserva conosco?\nHóspede: Sim, meu nome é David Miller. Reservei quarto duplo por 3 noites.\nRecepcionista: Bem-vindo! Seu quarto é o 412 no 4º andar. Aqui estão os cartões.\nRecepcionista: Café das 7h às 10h, senha do Wi-Fi atrás da capinha.\nHóspede: Tem elevador por perto?\nRecepcionista: Sim, logo atrás do senhor, após a fonte. Boa estadia!'
    },
    questions: [
      {
        id: 'l-a2-shc-1',
        type: 'multiple_choice',
        questionText: 'Em qual andar e quarto David Miller vai se hospedar?',
        options: [
          { id: 'A', text: 'No 2º andar, quarto 204' },
          { id: 'B', text: 'No 4º andar, quarto 412 (fourth floor, room 412)' },
          { id: 'C', text: 'No 3º andar, quarto 312' },
          { id: 'D', text: 'No térreo, quarto 102' }
        ],
        correctOptionId: 'B',
        explanation: 'A recepcionista informa: "on the fourth floor, room 412".'
      },
      {
        id: 'l-a2-shc-2',
        type: 'multiple_choice',
        questionText: 'Qual é o horário em que o café da manhã é servido?',
        options: [
          { id: 'A', text: 'Das 6h às 9h' },
          { id: 'B', text: 'Das 7h às 10h da manhã (seven to ten)' },
          { id: 'C', text: 'Das 8h às 11h' },
          { id: 'D', text: 'Apenas após o meio-dia' }
        ],
        correctOptionId: 'B',
        explanation: 'Ela especifica: "from seven to ten in the morning".'
      },
      {
        id: 'l-a2-shc-3',
        type: 'multiple_choice',
        questionText: 'Onde o hóspede encontra a senha do Wi-Fi?',
        options: [
          { id: 'A', text: 'Na televisão do quarto' },
          { id: 'B', text: 'No verso da capinha do cartão-chave (back of the key sleeve)' },
          { id: 'C', text: 'Em um quadro na entrada do elevador' },
          { id: 'D', text: 'Ele precisa ligar para o suporte' }
        ],
        correctOptionId: 'B',
        explanation: 'O áudio diz: "the Wi-Fi password is on the back of the key sleeve".'
      }
    ]
  },

  // 11. Situações da vida real (A2) - Novo
  {
    id: 'listening-a2-sit-restaurant-order',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a2',
    topic: 'Restaurante & Alimentação',
    title: 'Jantando em um Restaurante Italiano',
    description: 'Ouça o diálogo entre um casal e o garçom fazendo o pedido de pratos principais e bebidas.',
    objective: 'Compreender pedidos de menu, pratos especiais do dia e preferências dietéticas.',
    instructions: 'Ouça as opções oferecidas pelo garçom e as escolhas feitas pelos clientes.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Ordering Dinner at Trattoria Bella',
      scenario: 'Mesa de um restaurante à noite',
      spokenText: 'Good evening! Are you ready to order, or do you need a few more minutes with the menu? We are ready! To start, could we share the bruschetta with tomatoes and garlic? Absolutely. And for your main courses? I will have the mushroom risotto, please. And for the gentleman? I would like the grilled salmon with roast vegetables. Would you like still or sparkling water to drink? Still water with lemon, please. Excellent choices. I will place your order with the kitchen.',
      dialogueLines: [
        { speaker: 'Waiter', gender: 'male', text: 'Good evening! Are you ready to order, or do you need a few more minutes with the menu?', translation: 'Boa noite! Vocês estão prontos para pedir ou precisam de mais alguns minutos com o cardápio?' },
        { speaker: 'Guest A', gender: 'female', text: 'We are ready! To start, could we share the bruschetta with tomatoes and garlic?', translation: 'Estamos prontos! Para começar, poderíamos compartilhar a bruschetta com tomate e alho?' },
        { speaker: 'Waiter', gender: 'male', text: 'Absolutely. And for your main courses?', translation: 'Com certeza. E para os pratos principais?' },
        { speaker: 'Guest A', gender: 'female', text: 'I will have the mushroom risotto, please.', translation: 'Eu vou querer o risoto de cogumelos, por favor.' },
        { speaker: 'Guest B', gender: 'male', text: 'And for me, I would like the grilled salmon with roast vegetables.', translation: 'E para mim, gostaria do salmão grelhado com legumes assados.' },
        { speaker: 'Waiter', gender: 'male', text: 'Would you like still or sparkling water to drink?', translation: 'Vocês gostariam de água sem gás ou com gás para beber?' },
        { speaker: 'Guest A', gender: 'female', text: 'Still water with lemon, please.', translation: 'Água sem gás com limão, por favor.' },
        { speaker: 'Waiter', gender: 'male', text: 'Excellent choices. I will place your order with the kitchen.', translation: 'Excelentes escolhas. Já vou registrar o pedido na cozinha.' }
      ],
      speechRate: 0.92,
      estimatedDurationSeconds: 28,
      transcript: 'Waiter: Good evening! Are you ready to order?\nGuest A: We are ready! To start, could we share the bruschetta with tomatoes and garlic?\nWaiter: Absolutely. And for your main courses?\nGuest A: I will have the mushroom risotto, please.\nGuest B: I would like the grilled salmon with roast vegetables.\nWaiter: Still or sparkling water to drink?\nGuest A: Still water with lemon, please.\nWaiter: Excellent choices. I will place your order with the kitchen.',
      transcriptTranslation: 'Garçom: Boa noite! Prontos para pedir?\nCliente A: Sim! De entrada, bruschetta para compartilhar.\nGarçom: Perfeito. E os pratos principais?\nCliente A: Risoto de cogumelos, por favor.\nCliente B: Salmão grelhado com legumes assados.\nGarçom: Água sem gás ou com gás?\nCliente A: Sem gás com limão, por favor.\nGarçom: Excelentes escolhas. Já envio para a cozinha.'
    },
    questions: [
      {
        id: 'l-a2-sro-1',
        type: 'multiple_choice',
        questionText: 'Qual prato de entrada (starter) os clientes pedem para compartilhar?',
        options: [
          { id: 'A', text: 'Salada caprese com queijo' },
          { id: 'B', text: 'Bruschetta com tomates e alho (bruschetta with tomatoes and garlic)' },
          { id: 'C', text: 'Batatas rústicas com queijo' },
          { id: 'D', text: 'Sopa de cebola' }
        ],
        correctOptionId: 'B',
        explanation: 'A cliente pede: "could we share the bruschetta with tomatoes and garlic?".'
      },
      {
        id: 'l-a2-sro-2',
        type: 'multiple_choice',
        questionText: 'Qual prato principal o cliente homem escolhe?',
        options: [
          { id: 'A', text: 'Lasanha de carne' },
          { id: 'B', text: 'Salmão grelhado com legumes assados (grilled salmon with roast vegetables)' },
          { id: 'C', text: 'Bife com fritas' },
          { id: 'D', text: 'Espaguete ao molho pesto' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele escolhe: "I would like the grilled salmon with roast vegetables".'
      },
      {
        id: 'l-a2-sro-3',
        type: 'multiple_choice',
        questionText: 'Que tipo de água eles pedem para acompanhar a refeição?',
        options: [
          { id: 'A', text: 'Água com gás gelada (sparkling)' },
          { id: 'B', text: 'Água sem gás com limão (still water with lemon)' },
          { id: 'C', text: 'Água morna com mel' },
          { id: 'D', text: 'Eles preferem refrigerante' }
        ],
        correctOptionId: 'B',
        explanation: '"Still water" significa água sem gás em inglês.'
      }
    ]
  },

  // 12. Situações da vida real (A2) - Novo
  {
    id: 'listening-a2-sit-train-ticket',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a2',
    topic: 'Trem & Estação',
    title: 'Comprando Passagem de Trem no Guichê',
    description: 'Ouça um passageiro comprando passagens de ida e volta para Oxford no guichê da estação.',
    objective: 'Reconhecer termos de bilheteria como round-trip, one-way, off-peak e horário de plataforma.',
    instructions: 'Acompanhe o áudio do guichê e responda às perguntas sobre a compra da passagem.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Buying Train Tickets at the Station Counter',
      scenario: 'Guichê da estação ferroviária de Paddington',
      spokenText: 'Hello! I need two return tickets to Oxford for this afternoon, please. Off-peak or anytime tickets? What is the difference in price? Off-peak return is twenty-two pounds per person, and anytime return is thirty-four. If you travel after nine thirty AM, you can use the off-peak tickets. Off-peak is perfect for us! That will be forty-four pounds altogether. Here is my contactless card. Approved! Your train departs from platform seven in twenty minutes. Keep your tickets handy for the gate.',
      dialogueLines: [
        { speaker: 'Clerk', gender: 'female', text: 'Hello! How can I help you?', translation: 'Olá! Como posso ajudar você?' },
        { speaker: 'Traveler', gender: 'male', text: 'Hello! I need two return tickets to Oxford for this afternoon, please.', translation: 'Olá! Preciso de duas passagens de ida e volta para Oxford para esta tarde, por favor.' },
        { speaker: 'Clerk', gender: 'female', text: 'Off-peak or anytime tickets?', translation: 'Passagens fora do horário de pico (off-peak) ou para qualquer horário?' },
        { speaker: 'Traveler', gender: 'male', text: 'What is the difference in price?', translation: 'Qual é a diferença de preço?' },
        { speaker: 'Clerk', gender: 'female', text: 'Off-peak return is twenty-two pounds per person, and anytime return is thirty-four. If you travel after nine thirty AM, you can use the off-peak tickets.', translation: 'A ida e volta fora de pico custa vinte e duas libras por pessoa, e a qualquer hora trinta e quatro. Se você viajar após as 9h30, pode usar os bilhetes fora de pico.' },
        { speaker: 'Traveler', gender: 'male', text: 'Off-peak is perfect for us!', translation: 'Fora de pico é perfeito para nós!' },
        { speaker: 'Clerk', gender: 'female', text: 'That will be forty-four pounds altogether. Your train departs from platform seven in twenty minutes.', translation: 'Fica em quarenta e quatro libras no total. Seu trem parte da plataforma sete em vinte minutos.' }
      ],
      speechRate: 0.92,
      estimatedDurationSeconds: 29,
      transcript: 'Traveler: Hello! I need two return tickets to Oxford for this afternoon, please.\nClerk: Off-peak or anytime tickets?\nTraveler: What is the difference in price?\nClerk: Off-peak return is £22 per person, and anytime return is £34. If you travel after 9:30 AM, you can use off-peak.\nTraveler: Off-peak is perfect for us!\nClerk: That will be £44 altogether. Your train departs from platform 7 in twenty minutes.',
      transcriptTranslation: 'Passageiro: Olá! Preciso de duas passagens de ida e volta para Oxford esta tarde.\nAtendente: Fora de pico ou para qualquer horário?\nPassageiro: Qual a diferença de preço?\nAtendente: Fora de pico é £22 por pessoa; qualquer hora é £34. Após as 9h30 pode usar fora de pico.\nPassageiro: Fora de pico é perfeito!\nAtendente: Fica em £44 no total. O trem sai da plataforma 7 em 20 minutos.'
    },
    questions: [
      {
        id: 'l-a2-stt-1',
        type: 'multiple_choice',
        questionText: 'Qual é a vantagem do bilhete "off-peak" (fora de pico)?',
        options: [
          { id: 'A', text: 'Ele inclui almoço no vagão restaurante' },
          { id: 'B', text: 'É bem mais barato (£22 contra £34 do horário livre)' },
          { id: 'C', text: 'Dá direito a viajar na primeira classe' },
          { id: 'D', text: 'É válido por um mês inteiro' }
        ],
        correctOptionId: 'B',
        explanation: 'A atendente explica que a tarifa off-peak custa £22 por pessoa, contra £34 do bilhete anytime.'
      },
      {
        id: 'l-a2-stt-2',
        type: 'multiple_choice',
        questionText: 'Qual foi o valor total pago pelas duas passagens?',
        options: [
          { id: 'A', text: '34 libras' },
          { id: 'B', text: '44 libras (forty-four pounds)' },
          { id: 'C', text: '68 libras' },
          { id: 'D', text: '22 libras' }
        ],
        correctOptionId: 'B',
        explanation: 'Duas passagens de £22 totalizam £44.'
      },
      {
        id: 'l-a2-stt-3',
        type: 'multiple_choice',
        questionText: 'De qual plataforma e em quanto tempo o trem vai partir?',
        options: [
          { id: 'A', text: 'Plataforma 1 em 5 minutos' },
          { id: 'B', text: 'Plataforma 7 em vinte minutos (platform seven in twenty minutes)' },
          { id: 'C', text: 'Plataforma 11 em uma hora' },
          { id: 'D', text: 'Plataforma 3 em quarenta minutos' }
        ],
        correctOptionId: 'B',
        explanation: 'A funcionária informa: "Your train departs from platform seven in twenty minutes".'
      }
    ]
  },

  // 13. Entenda o inglês natural (A2) - Existente
  {
    id: 'listening-a2-nat-hobbies',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'a2',
    topic: 'Estilo de Vida & Rotina',
    title: 'Desconectando no Fim de Semana',
    description: 'Ouça um relato pessoal com ritmo autêntico, contrações cotidianas e expressões de preferência.',
    objective: 'Identificar formas conectadas como "I wanna", "I gotta" e "kind of" em fala expressiva.',
    instructions: 'Ouça o áudio e responda às perguntas sobre os hábitos e sentimentos descritos.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Unwinding on Weekends',
      scenario: 'Monólogo sobre equilíbrio entre trabalho e descanso',
      spokenText: 'During the work week, I usually gotta wake up at six sharp and spend hours answering urgent emails. It gets pretty exhausting. So when Saturday comes, I kinda just wanna unplug completely. I do not look at my laptop at all. Instead, I put on some chill music, cook a fresh meal, or ride my bicycle along the river path. That is how I recharge my battery for Monday.',
      speechRate: 0.95,
      estimatedDurationSeconds: 23,
      transcript: 'During the work week, I usually gotta wake up at six sharp and spend hours answering urgent emails. It gets pretty exhausting. So when Saturday comes, I kinda just wanna unplug completely. I don\'t look at my laptop at all. Instead, I put on some chill music, cook a fresh meal, or ride my bicycle along the river path. That\'s how I recharge my battery for Monday.',
      transcriptTranslation: 'Durante a semana de trabalho, eu geralmente tenho que acordar às seis em ponto e passar horas respondendo e-mails urgentes. Fica bem exaustivo. Por isso, quando o sábado chega, eu meio que só quero desconectar completamente. Não olho meu notebook de jeito nenhum. Em vez disso, coloco uma música tranquila, cozinho uma comida fresca ou ando de bicicleta na trilha do rio. É assim que recarrego a bateria para a segunda-feira.'
    },
    questions: [
      {
        id: 'l-a2-nh-1',
        type: 'multiple_choice',
        questionText: 'O que o falante faz com o notebook dele no sábado?',
        options: [
          { id: 'A', text: 'Ele passa o dia jogando videogame.' },
          { id: 'B', text: 'Ele não olha o notebook de jeito nenhum para desconectar.' },
          { id: 'C', text: 'Ele aproveita para adiantar tarefas da semana.' },
          { id: 'D', text: 'Ele formata o aparelho.' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele diz claramente: "I kinda just wanna unplug completely. I do not look at my laptop at all".'
      },
      {
        id: 'l-a2-nh-2',
        type: 'multiple_choice',
        questionText: 'Quais atividades prazerosas o falante prefere nos sábados?',
        options: [
          { id: 'A', text: 'Ir a festas noturnas e shoppings lotados' },
          { id: 'B', text: 'Música tranquila, cozinhar uma refeição fresca ou andar de bicicleta' },
          { id: 'C', text: 'Fazer compras online e responder telefonemas' },
          { id: 'D', text: 'Estudar para exames até tarde' }
        ],
        correctOptionId: 'B',
        explanation: 'O áudio menciona: "put on some chill music, cook a fresh meal, or ride my bicycle along the river path".'
      },
      {
        id: 'l-a2-nh-3',
        type: 'multiple_choice',
        questionText: 'Qual é o objetivo principal do falante com essa rotina de sábado?',
        options: [
          { id: 'A', text: 'Guardar dinheiro para viajar' },
          { id: 'B', text: 'Recarregar as energias para a segunda-feira ("recharge my battery")' },
          { id: 'C', text: 'Treinar para uma competição esportiva' },
          { id: 'D', text: 'Aprender a cozinhar profissionalmente' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase final destaca: "That is how I recharge my battery for Monday".'
      }
    ]
  },

  // 14. Entenda o inglês natural (A2) - Novo
  {
    id: 'listening-a2-nat-cooking-memories',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'a2',
    topic: 'Culinária & Família',
    title: 'Memórias de Infância e o Molho de Tomate da Vó',
    description: 'Ouça um relato nostálgico e afetuoso sobre tradições culinárias familiares de domingo.',
    objective: 'Compreender expressões de hábito passado e conexões afetivas narradas com naturalidade.',
    instructions: 'Ouça o áudio e responda às perguntas sobre as lembranças do falante.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Grandma Homemade Tomato Sauce',
      scenario: 'Monólogo intimista de lembrança familiar',
      spokenText: 'Whenever I smell fresh basil and simmering garlic, I immediately travel back in time to my grandmother kitchen on Sunday mornings. She used to wake up at dawn to make her secret marinara sauce from scratch. She never wrote down any recipe. Instead, she tasted the sauce with a wooden spoon and added a pinch of salt or fresh oregano until it felt just right. Today, whenever I prepare pasta at home, I try to recreate that same warmth and love.',
      speechRate: 0.92,
      estimatedDurationSeconds: 27,
      transcript: 'Whenever I smell fresh basil and simmering garlic, I immediately travel back in time to my grandmother\'s kitchen on Sunday mornings. She used to wake up at dawn to make her secret marinara sauce from scratch. She never wrote down any recipe. Instead, she tasted the sauce with a wooden spoon and added a pinch of salt or fresh oregano until it felt just right. Today, whenever I prepare pasta at home, I try to recreate that same warmth and love.',
      transcriptTranslation: 'Sempre que sinto o cheiro de manjericão fresco e alho refogando, viajo no tempo para a cozinha da minha avó nas manhãs de domingo. Ela costumava acordar ao amanhecer para fazer seu molho de tomate caseiro do zero. Nunca anotava nenhuma receita; provava com uma colher de pau e adicionava uma pitada de sal ou orégano até ficar perfeito. Hoje, sempre que cozinho em casa, tento recriar esse mesmo carinho.'
    },
    questions: [
      {
        id: 'l-a2-ncm-1',
        type: 'multiple_choice',
        questionText: 'Quais aromas ativam as memórias de infância do narrador?',
        options: [
          { id: 'A', text: 'Café torrado e canela' },
          { id: 'B', text: 'Manjericão fresco e alho refogando (fresh basil and simmering garlic)' },
          { id: 'C', text: 'Bolo de chocolate no forno' },
          { id: 'D', text: 'Pão caseiro com queijo' }
        ],
        correctOptionId: 'B',
        explanation: 'A narrativa começa com: "Whenever I smell fresh basil and simmering garlic".'
      },
      {
        id: 'l-a2-ncm-2',
        type: 'multiple_choice',
        questionText: 'Como a avó media os temperos do molho?',
        options: [
          { id: 'A', text: 'Pesando tudo com balança digital' },
          { id: 'B', text: 'Seguindo um livro antigo de culinária' },
          { id: 'C', text: 'Provando na colher de pau e ajustando no paladar (tasted with a wooden spoon)' },
          { id: 'D', text: 'Pedindo para o avô experimentar' }
        ],
        correctOptionId: 'C',
        explanation: 'O texto aponta: "She never wrote down any recipe. Instead, she tasted the sauce with a wooden spoon...".'
      },
      {
        id: 'l-a2-ncm-3',
        type: 'multiple_choice',
        questionText: 'O que o narrador busca recriar hoje ao cozinhar?',
        options: [
          { id: 'A', text: 'Abrir um restaurante italiano' },
          { id: 'B', text: 'O mesmo carinho, calor e afeto da avó (that same warmth and love)' },
          { id: 'C', text: 'Vender o molho congelado para amigos' },
          { id: 'D', text: 'Ganhar seguidores nas redes sociais' }
        ],
        correctOptionId: 'B',
        explanation: 'A conclusão expressa: "I try to recreate that same warmth and love".'
      }
    ]
  },

  // 15. Entenda o inglês natural (A2) - Novo
  {
    id: 'listening-a2-nat-gardening-hobby',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'a2',
    topic: 'Natureza & Bem-Estar',
    title: 'Cuidando de Plantas na Varanda',
    description: 'Ouça um relato sobre como montar uma pequena horta urbana ajudou a diminuir o estresse.',
    objective: 'Identificar vocabulário de jardinagem (herbs, pots, watering) e benefícios emocionais relatados.',
    instructions: 'Ouça o áudio e responda às perguntas sobre o hobby do falante.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Urban Gardening on the Balcony',
      scenario: 'Depoimento pessoal sobre um novo hobby',
      spokenText: 'A couple of months ago, I decided to turn my tiny apartment balcony into a mini green garden. I bought a few ceramic pots, rich soil, and planted mint, rosemary, and cherry tomatoes. Honestly, checking the leaves every morning and watering them with a little kettle has become my favorite morning meditation. Seeing a little green sprout grow into a healthy plant gives you a surprising sense of peace after a busy day on the computer.',
      speechRate: 0.92,
      estimatedDurationSeconds: 27,
      transcript: 'A couple of months ago, I decided to turn my tiny apartment balcony into a mini green garden. I bought a few ceramic pots, rich soil, and planted mint, rosemary, and cherry tomatoes. Honestly, checking the leaves every morning and watering them with a little kettle has become my favorite morning meditation. Seeing a little green sprout grow into a healthy plant gives you a surprising sense of peace after a busy day on the computer.',
      transcriptTranslation: 'Há uns dois meses, decidi transformar a pequena varanda do meu apartamento em um mini jardim verde. Comprei alguns vasos de cerâmica, terra boa e plantei hortelã, alecrim e tomates-cereja. Honestamente, checar as folhas todas as manhãs e regá-las virou minha meditação matinal favorita. Ver um pequeno broto verde crescer até se tornar uma planta saudável traz uma surpreendente sensação de paz depois de um dia agitado no computador.'
    },
    questions: [
      {
        id: 'l-a2-ngh-1',
        type: 'multiple_choice',
        questionText: 'Quais plantas o narrador plantou em sua varanda?',
        options: [
          { id: 'A', text: 'Orquídeas e rosas' },
          { id: 'B', text: 'Hortelã, alecrim e tomates-cereja (mint, rosemary, and cherry tomatoes)' },
          { id: 'C', text: 'Cactos e suculentas' },
          { id: 'D', text: 'Árvores frutíferas grandes' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele relata: "planted mint, rosemary, and cherry tomatoes".'
      },
      {
        id: 'l-a2-ngh-2',
        type: 'multiple_choice',
        questionText: 'Como regar as plantas funciona para o narrador?',
        options: [
          { id: 'A', text: 'Como uma obrigação chata' },
          { id: 'B', text: 'Como sua meditação matinal favorita (favorite morning meditation)' },
          { id: 'C', text: 'Como um trabalho profissional remunerado' },
          { id: 'D', text: 'Como um exercício físico pesado' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele declara: "has become my favorite morning meditation".'
      },
      {
        id: 'l-a2-ngh-3',
        type: 'multiple_choice',
        questionText: 'Qual sensação esse contato com a natureza proporciona após o trabalho no computador?',
        options: [
          { id: 'A', text: 'Vontade de mudar para uma fazenda' },
          { id: 'B', text: 'Cansaço físico' },
          { id: 'C', text: 'Uma surpreendente sensação de paz (surprising sense of peace)' },
          { id: 'D', text: 'Ansiedade com pragas' }
        ],
        correctOptionId: 'C',
        explanation: 'A frase final diz: "gives you a surprising sense of peace after a busy day on the computer".'
      }
    ]
  }
];

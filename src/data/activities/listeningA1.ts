import { Activity, ListeningQuestion } from '../../types/activity';

export const LISTENING_A1: Activity<ListeningQuestion>[] = [
  // 1. Ouça e identifique (A1) - Existente
  {
    id: 'listening-a1-id-minimal-pairs',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a1',
    topic: 'Pronúncia & Pares Mínimos',
    title: 'Distinção de Sons: Vogais Curtas e Longas',
    description: 'Escute atentamente as frases curtas e identifique a palavra correta baseada no contraste fonético.',
    objective: 'Diferenciar pares fonéticos fundamentais do inglês como ship/sheep, sit/seat e pen/pan.',
    instructions: 'Ouça o áudio quantas vezes precisar. Preste atenção ao som e comprimento da vogal para escolher a alternativa correta.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Short and Long Vowel Contrasts',
      scenario: 'Prática de Pronúncia e Sons Básicos',
      spokenText: 'Number one: Please sit on that chair. Number two: Look at that big sheep in the green field. Number three: Can you lend me a blue pen for a minute?',
      speechRate: 0.85,
      estimatedDurationSeconds: 15,
      transcript: 'Number 1: Please sit on that chair.\nNumber 2: Look at that big sheep in the green field.\nNumber 3: Can you lend me a blue pen for a minute?',
      transcriptTranslation: 'Número 1: Por favor sente-se naquela cadeira.\nNúmero 2: Olhe aquela grande ovelha no campo verde.\nNúmero 3: Pode me emprestar uma caneta azul por um minuto?'
    },
    questions: [
      {
        id: 'l-a1-mp-1',
        type: 'multiple_choice',
        questionText: 'Na primeira frase, qual palavra foi dita referente à ação na cadeira?',
        options: [
          { id: 'A', text: 'Seat (assento / vogal longa /iː/)' },
          { id: 'B', text: 'Sit (sentar / vogal curta /ɪ/)' },
          { id: 'C', text: 'Set (conjunto / vogal /e/)' },
          { id: 'D', text: 'Sight (visão / ditongo /aɪ/)' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase falada foi "Please sit on that chair", utilizando o verbo "sit" com vogal curta (/ɪ/), e não o substantivo "seat" (/iː/).'
      },
      {
        id: 'l-a1-mp-2',
        type: 'multiple_choice',
        questionText: 'Na segunda frase, qual animal foi mencionado no campo verde?',
        options: [
          { id: 'A', text: 'Ship (navio)' },
          { id: 'B', text: 'Shop (loja)' },
          { id: 'C', text: 'Sheep (ovelha)' },
          { id: 'D', text: 'Shape (forma)' }
        ],
        correctOptionId: 'C',
        explanation: 'O locutor diz "Look at that big sheep in the green field". O som de "sheep" (/ʃiːp/) possui a vogal longa /iː/ e significa ovelha.'
      },
      {
        id: 'l-a1-mp-3',
        type: 'multiple_choice',
        questionText: 'Na terceira frase, qual objeto o falante pede emprestado?',
        options: [
          { id: 'A', text: 'A blue pen (uma caneta azul)' },
          { id: 'B', text: 'A cooking pan (uma frigideira)' },
          { id: 'C', text: 'A wooden pin (um alfinete)' },
          { id: 'D', text: 'A road map (um mapa)' }
        ],
        correctOptionId: 'A',
        explanation: 'O áudio pronuncia claramente "blue pen" (/pen/), com som de /e/, referindo-se a uma caneta.'
      }
    ]
  },

  // 2. Ouça e identifique (A1) - Novo
  {
    id: 'listening-a1-id-numbers-time',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a1',
    topic: 'Horários & Números Básicos',
    title: 'Horários e Compromissos do Dia',
    description: 'Ouça pequenos avisos sobre horários de ônibus, aulas e encontros entre amigos.',
    objective: 'Reconhecer horas cheias e frações de horas em frases orais simples.',
    instructions: 'Ouça atentamente os horários mencionados e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Daily Schedules and Times',
      scenario: 'Avisos curtos de horários no dia a dia',
      spokenText: 'Number one: The morning English class begins at eight fifteen. Number two: Our bus arrives at the station at ten thirty. Number three: Let us meet for coffee at a quarter to four.',
      speechRate: 0.85,
      estimatedDurationSeconds: 16,
      transcript: 'Number 1: The morning English class begins at 8:15.\nNumber 2: Our bus arrives at the station at 10:30.\nNumber 3: Let us meet for coffee at a quarter to four (3:45).',
      transcriptTranslation: 'Número 1: A aula de inglês da manhã começa às 8h15.\nNúmero 2: Nosso ônibus chega à estação às 10h30.\nNúmero 3: Vamos nos encontrar para um café às quinze para as quatro (3h45).'
    },
    questions: [
      {
        id: 'l-a1-nt-1',
        type: 'multiple_choice',
        questionText: 'A que horas começa a aula matinal de inglês?',
        options: [
          { id: 'A', text: 'Às 8h50' },
          { id: 'B', text: 'Às 8h15' },
          { id: 'C', text: 'Às 7h45' },
          { id: 'D', text: 'Às 8h30' }
        ],
        correctOptionId: 'B',
        explanation: 'O áudio menciona "eight fifteen" (8:15).'
      },
      {
        id: 'l-a1-nt-2',
        type: 'multiple_choice',
        questionText: 'Em qual horário o ônibus chega à estação?',
        options: [
          { id: 'A', text: 'Às 10h13' },
          { id: 'B', text: 'Às 11h30' },
          { id: 'C', text: 'Às 10h30' },
          { id: 'D', text: 'Às 9h30' }
        ],
        correctOptionId: 'C',
        explanation: 'O locutor declara "at ten thirty" (10h30).'
      },
      {
        id: 'l-a1-nt-3',
        type: 'multiple_choice',
        questionText: 'A que horas eles combinam de tomar café?',
        options: [
          { id: 'A', text: 'Às 3h45 (a quarter to four)' },
          { id: 'B', text: 'Às 4h15' },
          { id: 'C', text: 'Às 4h45' },
          { id: 'D', text: 'Às 3h15' }
        ],
        correctOptionId: 'A',
        explanation: '"A quarter to four" significa quinze minutos para as quatro horas, ou seja, 3h45.'
      }
    ]
  },

  // 3. Ouça e identifique (A1) - Novo
  {
    id: 'listening-a1-id-colors-clothes',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a1',
    topic: 'Cores, Roupas & Objetos',
    title: 'Descrevendo Peças e Acessórios',
    description: 'Identifique peças de vestuário e cores descritas em situações simples do dia a dia.',
    objective: 'Reconhecer vocabulário de roupas (jacket, shoes, shirt) e cores primárias em descrições orais.',
    instructions: 'Ouça o áudio e selecione a peça e cor correspondente a cada declaração.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Describing Clothes and Colors',
      scenario: 'Identificando pertences em casa e na mala',
      spokenText: 'Sentence one: Daniel is wearing a warm black jacket today. Sentence two: Where did I put my yellow umbrella? Sentence three: Maria has new brown shoes for work.',
      speechRate: 0.85,
      estimatedDurationSeconds: 15,
      transcript: 'Sentence 1: Daniel is wearing a warm black jacket today.\nSentence 2: Where did I put my yellow umbrella?\nSentence 3: Maria has new brown shoes for work.',
      transcriptTranslation: 'Frase 1: Daniel está vestindo uma jaqueta preta quentinha hoje.\nFrase 2: Onde eu coloquei meu guarda-chuva amarelo?\nFrase 3: Maria tem sapatos marrons novos para o trabalho.'
    },
    questions: [
      {
        id: 'l-a1-cc-1',
        type: 'multiple_choice',
        questionText: 'Qual peça de roupa Daniel está usando hoje?',
        options: [
          { id: 'A', text: 'Uma camisa azul' },
          { id: 'B', text: 'Uma jaqueta preta (black jacket)' },
          { id: 'C', text: 'Um casaco vermelho' },
          { id: 'D', text: 'Um chapéu cinza' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase diz claramente: "Daniel is wearing a warm black jacket today".'
      },
      {
        id: 'l-a1-cc-2',
        type: 'multiple_choice',
        questionText: 'De que cor é o guarda-chuva procurado na segunda frase?',
        options: [
          { id: 'A', text: 'Verde' },
          { id: 'B', text: 'Azul' },
          { id: 'C', text: 'Amarelo (yellow)' },
          { id: 'D', text: 'Preto' }
        ],
        correctOptionId: 'C',
        explanation: 'A pessoa pergunta: "Where did I put my yellow umbrella?".'
      },
      {
        id: 'l-a1-cc-3',
        type: 'multiple_choice',
        questionText: 'O que Maria tem de novo para trabalhar?',
        options: [
          { id: 'A', text: 'Sapatos marrons (brown shoes)' },
          { id: 'B', text: 'Uma bolsa branca' },
          { id: 'C', text: 'Uma calça preta' },
          { id: 'D', text: 'Um vestido azul' }
        ],
        correctOptionId: 'A',
        explanation: 'O áudio informa: "Maria has new brown shoes for work".'
      }
    ]
  },

  // 4. Ouça e identifique (A1) - Novo
  {
    id: 'listening-a1-id-days-routine',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'a1',
    topic: 'Dias da Semana & Rotina',
    title: 'Compromissos Semanais de Ana',
    description: 'Ouça frases curtas informando o que Ana faz em dias específicos da semana.',
    objective: 'Distinguir os dias da semana em inglês (Monday, Wednesday, Friday, Sunday) e ações básicas.',
    instructions: 'Ouça o áudio e associe cada atividade ao dia correto da semana.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Weekly Routine Schedule',
      scenario: 'Organizando a agenda semanal',
      spokenText: 'Part one: On Monday, I go to the gym after work. Part two: On Wednesday evening, I study English with my friends. Part three: On Sunday, my family cooks dinner together.',
      speechRate: 0.85,
      estimatedDurationSeconds: 16,
      transcript: 'Part 1: On Monday, I go to the gym after work.\nPart 2: On Wednesday evening, I study English with my friends.\nPart 3: On Sunday, my family cooks dinner together.',
      transcriptTranslation: 'Parte 1: Na segunda-feira, vou à academia depois do trabalho.\nParte 2: Na quarta-feira à noite, estudo inglês com meus amigos.\nParte 3: No domingo, minha família cozinha o jantar junta.'
    },
    questions: [
      {
        id: 'l-a1-dr-1',
        type: 'multiple_choice',
        questionText: 'O que Ana faz na segunda-feira (Monday) após o trabalho?',
        options: [
          { id: 'A', text: 'Vai ao supermercado' },
          { id: 'B', text: 'Vai à academia (gym)' },
          { id: 'C', text: 'Visita os pais' },
          { id: 'D', text: 'Assiste a um filme' }
        ],
        correctOptionId: 'B',
        explanation: 'Ela diz: "On Monday, I go to the gym after work".'
      },
      {
        id: 'l-a1-dr-2',
        type: 'multiple_choice',
        questionText: 'Em qual dia da semana Ana estuda inglês com amigos?',
        options: [
          { id: 'A', text: 'Na terça-feira (Tuesday)' },
          { id: 'B', text: 'Na quinta-feira (Thursday)' },
          { id: 'C', text: 'Na quarta-feira (Wednesday)' },
          { id: 'D', text: 'No sábado (Saturday)' }
        ],
        correctOptionId: 'C',
        explanation: 'A frase declara: "On Wednesday evening, I study English with my friends".'
      },
      {
        id: 'l-a1-dr-3',
        type: 'multiple_choice',
        questionText: 'Qual atividade acontece no domingo (Sunday)?',
        options: [
          { id: 'A', text: 'A família cozinha o jantar junta' },
          { id: 'B', text: 'Eles viajam para outra cidade' },
          { id: 'C', text: 'Ana trabalha até tarde' },
          { id: 'D', text: 'Eles limpam o jardim' }
        ],
        correctOptionId: 'A',
        explanation: 'O áudio afirma: "On Sunday, my family cooks dinner together".'
      }
    ]
  },

  // 5. Compreenda o diálogo (A1) - Existente
  {
    id: 'listening-a1-dial-weekend',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a1',
    topic: 'Cotidiano & Planos',
    title: 'Planos para o Fim de Semana',
    description: 'Acompanhe a conversa entre Sarah e Mark sobre o que pretendem fazer no sábado e domingo.',
    objective: 'Compreender preferências, horários e atividades de lazer em um diálogo direto.',
    instructions: 'Ouça o diálogo entre Sarah e Mark. Identifique as decisões e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Weekend Plans with Sarah and Mark',
      scenario: 'Dois amigos conversando sobre o fim de semana',
      spokenText: 'Hey Mark, do you have any plans for this Saturday? Hi Sarah! Yes, on Saturday morning I usually clean my apartment. But in the afternoon, I am going to the city park with my dog. How about you? I am visiting my grandmother on Saturday morning. But on Sunday, I want to watch a new movie at the cinema. Sounds great! Why not watch the movie together on Sunday evening? I would love that! Let us meet at six. Perfect, see you then!',
      dialogueLines: [
        { speaker: 'Sarah', gender: 'female', text: 'Hey Mark, do you have any plans for this Saturday?', translation: 'Ei Mark, você tem planos para este sábado?' },
        { speaker: 'Mark', gender: 'male', text: 'Hi Sarah! Yes, on Saturday morning I usually clean my apartment. But in the afternoon, I am going to the city park with my dog. How about you?', translation: 'Oi Sarah! Sim, no sábado de manhã eu costumo limpar meu apartamento. Mas à tarde, vou ao parque da cidade com meu cachorro. E você?' },
        { speaker: 'Sarah', gender: 'female', text: 'I am visiting my grandmother on Saturday morning. But on Sunday, I want to watch a new movie at the cinema.', translation: 'Vou visitar minha avó no sábado de manhã. Mas no domingo, quero assistir a um filme novo no cinema.' },
        { speaker: 'Mark', gender: 'male', text: 'Sounds great! Why not watch the movie together on Sunday evening?', translation: 'Parece ótimo! Por que não assistimos ao filme juntos no domingo à noite?' },
        { speaker: 'Sarah', gender: 'female', text: 'I would love that! Let us meet at the cinema at six.', translation: 'Eu adoraria! Vamos nos encontrar no cinema às seis.' },
        { speaker: 'Mark', gender: 'male', text: 'Perfect, see you then!', translation: 'Perfeito, até lá!' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 24,
      transcript: 'Sarah: Hey Mark, do you have any plans for this Saturday?\nMark: Hi Sarah! Yes, on Saturday morning I usually clean my apartment. But in the afternoon, I am going to the city park with my dog. How about you?\nSarah: I am visiting my grandmother on Saturday morning. But on Sunday, I want to watch a new movie at the cinema.\nMark: Sounds great! Why not watch the movie together on Sunday evening?\nSarah: I would love that! Let us meet at the cinema at six.\nMark: Perfect, see you then!',
      transcriptTranslation: 'Sarah: Ei Mark, você tem planos para este sábado?\nMark: Oi Sarah! Sim, no sábado de manhã eu costumo limpar meu apartamento. Mas à tarde, vou ao parque da cidade com meu cachorro. E você?\nSarah: Vou visitar minha avó no sábado de manhã. Mas no domingo, quero assistir a um filme novo no cinema.\nMark: Parece ótimo! Por que não assistimos ao filme juntos no domingo à noite?\nSarah: Eu adoraria! Vamos nos encontrar no cinema às seis.\nMark: Perfeito, até lá!'
    },
    questions: [
      {
        id: 'l-a1-dw-1',
        type: 'multiple_choice',
        questionText: 'O que Mark faz no sábado de manhã?',
        options: [
          { id: 'A', text: 'Ele vai ao cinema.' },
          { id: 'B', text: 'Ele limpa o apartamento dele.' },
          { id: 'C', text: 'Ele visita a avó da Sarah.' },
          { id: 'D', text: 'Ele estuda inglês na biblioteca.' }
        ],
        correctOptionId: 'B',
        explanation: 'Mark diz expressamente: "on Saturday morning I usually clean my apartment".'
      },
      {
        id: 'l-a1-dw-2',
        type: 'multiple_choice',
        questionText: 'Quem Mark leva ao parque da cidade no sábado à tarde?',
        options: [
          { id: 'A', text: 'A avó dele' },
          { id: 'B', text: 'A Sarah' },
          { id: 'C', text: 'O cachorro dele' },
          { id: 'D', text: 'O colega de trabalho' }
        ],
        correctOptionId: 'C',
        explanation: 'Mark declara: "in the afternoon, I am going to the city park with my dog".'
      },
      {
        id: 'l-a1-dw-3',
        type: 'multiple_choice',
        questionText: 'Qual atividade Sarah e Mark combinam de fazer juntos no domingo à noite?',
        options: [
          { id: 'A', text: 'Caminhar no parque' },
          { id: 'B', text: 'Jantar em um restaurante italiano' },
          { id: 'C', text: 'Assistir a um filme no cinema' },
          { id: 'D', text: 'Comprar comida no supermercado' }
        ],
        correctOptionId: 'C',
        explanation: 'Eles combinam: "Let us watch the movie together on Sunday evening".'
      }
    ]
  },

  // 6. Compreenda o diálogo (A1) - Novo
  {
    id: 'listening-a1-dial-groceries',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a1',
    topic: 'Compras & Casa',
    title: 'A Lista de Compras do Mercado',
    description: 'Acompanhe Emma e Liam verificando o que está faltando na geladeira antes de irem às compras.',
    objective: 'Identificar itens de comida, quantidades e produtos que precisam ser comprados.',
    instructions: 'Ouça o diálogo e responda às perguntas sobre os itens da lista de compras.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Making a Grocery List',
      scenario: 'Dois colegas de casa checando a cozinha',
      spokenText: 'Liam, do we have any milk in the fridge? Let me check. No, the carton is completely empty. We also need eggs and butter. Okay, I will write those down. Do we have enough fruit for breakfast? We have three green apples, but we do not have any bananas or oranges. Got it: milk, eggs, butter, bananas and oranges. Should we get some bread too? Yes, a loaf of white bread, please!',
      dialogueLines: [
        { speaker: 'Emma', gender: 'female', text: 'Liam, do we have any milk in the fridge?', translation: 'Liam, nós temos leite na geladeira?' },
        { speaker: 'Liam', gender: 'male', text: 'Let me check. No, the carton is completely empty. We also need eggs and butter.', translation: 'Deixa eu ver. Não, a caixa está completamente vazia. Também precisamos de ovos e manteiga.' },
        { speaker: 'Emma', gender: 'female', text: 'Okay, I will write those down. Do we have enough fruit for breakfast?', translation: 'Ok, vou anotar esses. Temos fruta suficiente para o café da manhã?' },
        { speaker: 'Liam', gender: 'male', text: 'We have three green apples, but we do not have any bananas or oranges.', translation: 'Temos três maçãs verdes, mas não temos nenhuma banana ou laranja.' },
        { speaker: 'Emma', gender: 'female', text: 'Got it: milk, eggs, butter, bananas and oranges. Should we get some bread too?', translation: 'Entendi: leite, ovos, manteiga, bananas e laranjas. Devemos comprar pão também?' },
        { speaker: 'Liam', gender: 'male', text: 'Yes, a loaf of white bread, please!', translation: 'Sim, um pão de forma branco, por favor!' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 25,
      transcript: 'Emma: Liam, do we have any milk in the fridge?\nLiam: Let me check. No, the carton is completely empty. We also need eggs and butter.\nEmma: Okay, I will write those down. Do we have enough fruit for breakfast?\nLiam: We have three green apples, but we do not have any bananas or oranges.\nEmma: Got it: milk, eggs, butter, bananas and oranges. Should we get some bread too?\nLiam: Yes, a loaf of white bread, please!',
      transcriptTranslation: 'Emma: Liam, nós temos leite na geladeira?\nLiam: Deixa eu ver. Não, a caixa está completamente vazia. Também precisamos de ovos e manteiga.\nEmma: Ok, vou anotar esses. Temos fruta suficiente para o café da manhã?\nLiam: Temos três maçãs verdes, mas não temos nenhuma banana ou laranja.\nEmma: Entendi: leite, ovos, manteiga, bananas e laranjas. Devemos comprar pão também?\nLiam: Sim, um pão de forma branco, por favor!'
    },
    questions: [
      {
        id: 'l-a1-dg-1',
        type: 'multiple_choice',
        questionText: 'Qual item da geladeira está completamente vazio?',
        options: [
          { id: 'A', text: 'A garrafa de suco' },
          { id: 'B', text: 'A caixa de leite (milk)' },
          { id: 'C', text: 'O pote de iogurte' },
          { id: 'D', text: 'O pote de geleia' }
        ],
        correctOptionId: 'B',
        explanation: 'Liam diz: "No, the carton is completely empty" ao responder sobre o leite.'
      },
      {
        id: 'l-a1-dg-2',
        type: 'multiple_choice',
        questionText: 'Quais frutas eles JÁ têm em casa?',
        options: [
          { id: 'A', text: 'Bananas maduras' },
          { id: 'B', text: 'Três maçãs verdes (three green apples)' },
          { id: 'C', text: 'Laranjas doces' },
          { id: 'D', text: 'Morangos frescos' }
        ],
        correctOptionId: 'B',
        explanation: 'Liam informa que já têm "three green apples", mas precisam comprar bananas e laranjas.'
      },
      {
        id: 'l-a1-dg-3',
        type: 'multiple_choice',
        questionText: 'Que tipo de pão Liam pede para comprar?',
        options: [
          { id: 'A', text: 'Pão de queijo' },
          { id: 'B', text: 'Pão integral' },
          { id: 'C', text: 'Pão de forma branco (white bread)' },
          { id: 'D', text: 'Torradas prontas' }
        ],
        correctOptionId: 'C',
        explanation: 'Liam pede especificamente: "a loaf of white bread, please!".'
      }
    ]
  },

  // 7. Compreenda o diálogo (A1) - Novo
  {
    id: 'listening-a1-dial-meeting-neighbor',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a1',
    topic: 'Vizinhança & Boas-Vindas',
    title: 'Conhecendo o Novo Vizinho',
    description: 'Carlos encontra Julia no corredor do prédio e se apresenta como novo morador.',
    objective: 'Compreender saudações formais e informais, profissões e números de apartamento.',
    instructions: 'Ouça a conversa amigável entre os vizinhos e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Meeting the New Neighbor',
      scenario: 'Corredor de um prédio residencial',
      spokenText: 'Hello! Are you the new neighbor in apartment 4B? Yes, hi! My name is Carlos. I moved in yesterday. Nice to meet you, Carlos! I am Julia, from apartment 4A right next door. Welcome to the building! Thank you so much, Julia. Everyone here seems very friendly. Do you work nearby? Yes, I teach mathematics at the high school down the road. What about you? I work as a graphic designer from my home office. That is exciting! If you ever need help or coffee sugar, just knock on my door!',
      dialogueLines: [
        { speaker: 'Julia', gender: 'female', text: 'Hello! Are you the new neighbor in apartment 4B?', translation: 'Olá! Você é o novo vizinho do apartamento 4B?' },
        { speaker: 'Carlos', gender: 'male', text: 'Yes, hi! My name is Carlos. I moved in yesterday.', translation: 'Sim, oi! Meu nome é Carlos. Me mudei ontem.' },
        { speaker: 'Julia', gender: 'female', text: 'Nice to meet you, Carlos! I am Julia, from apartment 4A right next door. Welcome to the building!', translation: 'Prazer em te conhecer, Carlos! Sou a Julia, do apartamento 4A logo ao lado. Seja bem-vindo ao prédio!' },
        { speaker: 'Carlos', gender: 'male', text: 'Thank you so much, Julia. Everyone here seems very friendly. Do you work nearby?', translation: 'Muito obrigado, Julia. Todo mundo aqui parece muito simpático. Você trabalha por aqui?' },
        { speaker: 'Julia', gender: 'female', text: 'Yes, I teach mathematics at the high school down the road. What about you?', translation: 'Sim, ensino matemática na escola secundária no final da rua. E você?' },
        { speaker: 'Carlos', gender: 'male', text: 'I work as a graphic designer from my home office.', translation: 'Eu trabalho como designer gráfico em home office.' },
        { speaker: 'Julia', gender: 'female', text: 'That is exciting! If you ever need help or coffee sugar, just knock on my door!', translation: 'Que legal! Se você precisar de ajuda ou açúcar para o café, é só bater na minha porta!' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 27,
      transcript: 'Julia: Hello! Are you the new neighbor in apartment 4B?\nCarlos: Yes, hi! My name is Carlos. I moved in yesterday.\nJulia: Nice to meet you, Carlos! I am Julia, from apartment 4A right next door. Welcome to the building!\nCarlos: Thank you so much, Julia. Everyone here seems very friendly. Do you work nearby?\nJulia: Yes, I teach mathematics at the high school down the road. What about you?\nCarlos: I work as a graphic designer from my home office.\nJulia: That is exciting! If you ever need help or coffee sugar, just knock on my door!',
      transcriptTranslation: 'Julia: Olá! Você é o novo vizinho do apartamento 4B?\nCarlos: Sim, oi! Meu nome é Carlos. Me mudei ontem.\nJulia: Prazer em te conhecer, Carlos! Sou a Julia, do apartamento 4A logo ao lado. Seja bem-vindo ao prédio!\nCarlos: Muito obrigado, Julia. Todo mundo aqui parece muito simpático. Você trabalha por aqui?\nJulia: Sim, ensino matemática na escola secundária no final da rua. E você?\nCarlos: Eu trabalho como designer gráfico em home office.\nJulia: Que legal! Se você precisar de ajuda ou açúcar para o café, é só bater na minha porta!'
    },
    questions: [
      {
        id: 'l-a1-mn-1',
        type: 'multiple_choice',
        questionText: 'Em qual apartamento Carlos se mudou?',
        options: [
          { id: 'A', text: 'Apartamento 4A' },
          { id: 'B', text: 'Apartamento 4B' },
          { id: 'C', text: 'Apartamento 3B' },
          { id: 'D', text: 'Apartamento 5C' }
        ],
        correctOptionId: 'B',
        explanation: 'Julia pergunta se ele é o novo vizinho do "apartment 4B" e ele confirma.'
      },
      {
        id: 'l-a1-mn-2',
        type: 'multiple_choice',
        questionText: 'Qual é a profissão de Julia?',
        options: [
          { id: 'A', text: 'Professora de matemática' },
          { id: 'B', text: 'Designer gráfica' },
          { id: 'C', text: 'Médica no hospital' },
          { id: 'D', text: 'Gerente de banco' }
        ],
        correctOptionId: 'A',
        explanation: 'Julia declara: "I teach mathematics at the high school down the road".'
      },
      {
        id: 'l-a1-mn-3',
        type: 'multiple_choice',
        questionText: 'Onde Carlos trabalha no dia a dia?',
        options: [
          { id: 'A', text: 'Em uma agência no centro da cidade' },
          { id: 'B', text: 'Na mesma escola de Julia' },
          { id: 'C', text: 'Em casa, em seu escritório (home office)' },
          { id: 'D', text: 'Em um estúdio de fotografia' }
        ],
        correctOptionId: 'C',
        explanation: 'Carlos responde: "I work as a graphic designer from my home office".'
      }
    ]
  },

  // 8. Compreenda o diálogo (A1) - Novo
  {
    id: 'listening-a1-dial-cooking-dinner',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'a1',
    topic: 'Alimentação & Amizade',
    title: 'Decidindo o Jantar entre Amigos',
    description: 'Lucas e Sofia conversam sobre o que cozinhar para o jantar de sexta-feira.',
    objective: 'Identificar receitas, preferências alimentares e divisões de tarefas.',
    instructions: 'Ouça o diálogo entre Lucas e Sofia e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Deciding on Dinner',
      scenario: 'Cozinha de um apartamento no início da noite',
      spokenText: 'Sofia, what should we make for dinner tonight? How about homemade pasta with tomato sauce and basil? That sounds delicious! Do we have garlic and olive oil? Yes, we have plenty of both. But we need to grate some cheese. I can grate the parmesan cheese while you boil the water. Great teamwork! Dinner will be ready in twenty minutes.',
      dialogueLines: [
        { speaker: 'Lucas', gender: 'male', text: 'Sofia, what should we make for dinner tonight?', translation: 'Sofia, o que devemos fazer para o jantar hoje à noite?' },
        { speaker: 'Sofia', gender: 'female', text: 'How about homemade pasta with tomato sauce and basil?', translation: 'Que tal macarrão caseiro com molho de tomate e manjericão?' },
        { speaker: 'Lucas', gender: 'male', text: 'That sounds delicious! Do we have garlic and olive oil?', translation: 'Parece delicioso! Nós temos alho e azeite?' },
        { speaker: 'Sofia', gender: 'female', text: 'Yes, we have plenty of both. But we need to grate some cheese.', translation: 'Sim, temos bastante dos dois. Mas precisamos ralar queijo.' },
        { speaker: 'Lucas', gender: 'male', text: 'I can grate the parmesan cheese while you boil the water.', translation: 'Eu posso ralar o queijo parmesão enquanto você ferve a água.' },
        { speaker: 'Sofia', gender: 'female', text: 'Great teamwork! Dinner will be ready in twenty minutes.', translation: 'Ótimo trabalho em equipe! O jantar vai ficar pronto em vinte minutos.' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 22,
      transcript: 'Lucas: Sofia, what should we make for dinner tonight?\nSofia: How about homemade pasta with tomato sauce and basil?\nLucas: That sounds delicious! Do we have garlic and olive oil?\nSofia: Yes, we have plenty of both. But we need to grate some cheese.\nLucas: I can grate the parmesan cheese while you boil the water.\nSofia: Great teamwork! Dinner will be ready in twenty minutes.',
      transcriptTranslation: 'Lucas: Sofia, o que devemos fazer para o jantar hoje à noite?\nSofia: Que tal macarrão caseiro com molho de tomate e manjericão?\nLucas: Parece delicioso! Nós temos alho e azeite?\nSofia: Sim, temos bastante dos dois. Mas precisamos ralar queijo.\nLucas: Eu posso ralar o queijo parmesão enquanto você ferve a água.\nSofia: Ótimo trabalho em equipe! O jantar vai ficar pronto em vinte minutos.'
    },
    questions: [
      {
        id: 'l-a1-cd-1',
        type: 'multiple_choice',
        questionText: 'Qual prato Sofia sugere para o jantar?',
        options: [
          { id: 'A', text: 'Pizza de queijo e cogumelos' },
          { id: 'B', text: 'Macarrão caseiro com molho de tomate e manjericão' },
          { id: 'C', text: 'Sopa de legumes com arroz' },
          { id: 'D', text: 'Hambúrguer com batata frita' }
        ],
        correctOptionId: 'B',
        explanation: 'Sofia sugere: "homemade pasta with tomato sauce and basil".'
      },
      {
        id: 'l-a1-cd-2',
        type: 'multiple_choice',
        questionText: 'Qual tarefa Lucas assume na cozinha?',
        options: [
          { id: 'A', text: 'Comprar azeite no mercado' },
          { id: 'B', text: 'Ferver a água da panela' },
          { id: 'C', text: 'Ralar o queijo parmesão (grate the parmesan cheese)' },
          { id: 'D', text: 'Lavar os pratos' }
        ],
        correctOptionId: 'C',
        explanation: 'Lucas diz: "I can grate the parmesan cheese while you boil the water".'
      },
      {
        id: 'l-a1-cd-3',
        type: 'multiple_choice',
        questionText: 'Em quanto tempo o jantar ficará pronto?',
        options: [
          { id: 'A', text: 'Em 20 minutos' },
          { id: 'B', text: 'Em 45 minutos' },
          { id: 'C', text: 'Em 10 minutos' },
          { id: 'D', text: 'Em 1 hora' }
        ],
        correctOptionId: 'A',
        explanation: 'Sofia afirma: "Dinner will be ready in twenty minutes".'
      }
    ]
  },

  // 9. Situações da vida real (A1) - Existente
  {
    id: 'listening-a1-sit-cafe',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a1',
    topic: 'Alimentação & Pedidos',
    title: 'Fazendo um Pedido na Cafeteria',
    description: 'Ouça uma interação real entre um barista e um cliente pedindo café e lanche.',
    objective: 'Reconhecer vocabulário de bebidas, tamanhos e valores financeiros em inglês.',
    instructions: 'Ouça o atendente e o cliente fazendo o pedido e observe o total a pagar.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Ordering at the Coffee Shop',
      scenario: 'Balcão de uma cafeteria em Londres',
      spokenText: 'Good morning! Welcome to Central Brew. What can I get started for you today? Hello! Could I please have a medium latte with oat milk? Sure thing! Would you like anything to eat with that? Yes, please. A blueberry muffin sounds great. Perfect choice. That will be six dollars and fifty cents altogether. Are you paying with card? Yes, by card. Here you go! Thank you! We will have that ready in a moment.',
      dialogueLines: [
        { speaker: 'Barista', gender: 'male', text: 'Good morning! Welcome to Central Brew. What can I get started for you today?', translation: 'Bom dia! Bem-vindo ao Central Brew. O que posso preparar para você hoje?' },
        { speaker: 'Customer', gender: 'female', text: 'Hello! Could I please have a medium latte with oat milk?', translation: 'Olá! Poderia me ver um latte médio com leite de aveia, por favor?' },
        { speaker: 'Barista', gender: 'male', text: 'Sure thing! Would you like anything to eat with that?', translation: 'Com certeza! Gostaria de algo para comer acompanhando?' },
        { speaker: 'Customer', gender: 'female', text: 'Yes, please. A blueberry muffin sounds great.', translation: 'Sim, por favor. Um muffin de mirtilo parece ótimo.' },
        { speaker: 'Barista', gender: 'male', text: 'Perfect choice. That will be six dollars and fifty cents altogether. Are you paying with card?', translation: 'Ótima escolha. Fica em seis dólares e cinquenta no total. Vai pagar no cartão?' },
        { speaker: 'Customer', gender: 'female', text: 'Yes, by card. Here you go!', translation: 'Sim, no cartão. Aqui está!' },
        { speaker: 'Barista', gender: 'male', text: 'Thank you! We will have that ready in a moment.', translation: 'Obrigado! Já vai estar pronto em um minuto.' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 26,
      transcript: 'Barista: Good morning! Welcome to Central Brew. What can I get started for you today?\nCustomer: Hello! Could I please have a medium latte with oat milk?\nBarista: Sure thing! Would you like anything to eat with that?\nCustomer: Yes, please. A blueberry muffin sounds great.\nBarista: Perfect choice. That will be six dollars and fifty cents altogether. Are you paying with card?\nCustomer: Yes, by card. Here you go!\nBarista: Thank you! We will have that ready in a moment.',
      transcriptTranslation: 'Barista: Bom dia! Bem-vindo ao Central Brew. O que posso preparar para você hoje?\nCliente: Olá! Poderia me ver um latte médio com leite de aveia, por favor?\nBarista: Com certeza! Gostaria de algo para comer acompanhando?\nCliente: Sim, por favor. Um muffin de mirtilo parece ótimo.\nBarista: Ótima escolha. Fica em seis dólares e cinquenta no total. Vai pagar no cartão?\nCliente: Sim, no cartão. Aqui está!\nBarista: Obrigado! Já vai estar pronto em um minuto.'
    },
    questions: [
      {
        id: 'l-a1-sc-1',
        type: 'multiple_choice',
        questionText: 'Qual tipo de leite o cliente escolhe para o café dele?',
        options: [
          { id: 'A', text: 'Almond milk (leite de amêndoas)' },
          { id: 'B', text: 'Oat milk (leite de aveia)' },
          { id: 'C', text: 'Regular whole milk (leite integral comum)' },
          { id: 'D', text: 'Soy milk (leite de soja)' }
        ],
        correctOptionId: 'B',
        explanation: 'O cliente pede especificamente: "Could I please have a medium latte with oat milk?".'
      },
      {
        id: 'l-a1-sc-2',
        type: 'multiple_choice',
        questionText: 'Qual comida o cliente adiciona ao pedido?',
        options: [
          { id: 'A', text: 'A chocolate croissant' },
          { id: 'B', text: 'A slice of carrot cake' },
          { id: 'C', text: 'A blueberry muffin' },
          { id: 'D', text: 'A cheese sandwich' }
        ],
        correctOptionId: 'C',
        explanation: 'O cliente escolhe: "Yes, a blueberry muffin, please".'
      },
      {
        id: 'l-a1-sc-3',
        type: 'multiple_choice',
        questionText: 'Qual foi o valor total cobrado pelo atendente?',
        options: [
          { id: 'A', text: '$4.50' },
          { id: 'B', text: '$6.50' },
          { id: 'C', text: '$7.15' },
          { id: 'D', text: '$5.00' }
        ],
        correctOptionId: 'B',
        explanation: 'O atendente diz: "That will be six dollars and fifty cents altogether ($6.50)".'
      }
    ]
  },

  // 10. Situações da vida real (A1) - Novo
  {
    id: 'listening-a1-sit-bakery',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a1',
    topic: 'Padaria & Compras',
    title: 'Comprando Pão Fresco na Padaria',
    description: 'Ouça o diálogo entre um cliente e o atendente em uma padaria artesanal.',
    objective: 'Compreender pedidos de produtos de panificação, preços e agradecimentos.',
    instructions: 'Ouça o áudio com atenção e responda às perguntas sobre o pedido.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'At the Corner Bakery',
      scenario: 'Balcão de uma padaria de bairro',
      spokenText: 'Good morning! How may I help you today? Hello! I would like two warm croissants and one loaf of sourdough bread, please. Certainly! Would you like the bread sliced? Yes, please slice it. Anything else for you? No, that is all. How much is that? That will be eight dollars in total. Cash or card? Cash, please. Here is a ten-dollar bill. Thank you, and here is two dollars in change. Have a lovely day!',
      dialogueLines: [
        { speaker: 'Baker', gender: 'female', text: 'Good morning! How may I help you today?', translation: 'Bom dia! Como posso te ajudar hoje?' },
        { speaker: 'Customer', gender: 'male', text: 'Hello! I would like two warm croissants and one loaf of sourdough bread, please.', translation: 'Olá! Eu gostaria de dois croissants quentinhos e um pão de fermentação natural, por favor.' },
        { speaker: 'Baker', gender: 'female', text: 'Certainly! Would you like the bread sliced?', translation: 'Com certeza! Gostaria do pão fatiado?' },
        { speaker: 'Customer', gender: 'male', text: 'Yes, please slice it. Anything else for you? No, that is all. How much is that?', translation: 'Sim, por favor fatie. Mais alguma coisa? Não, só isso. Quanto deu?' },
        { speaker: 'Baker', gender: 'female', text: 'That will be eight dollars in total. Cash or card?', translation: 'Fica em oito dólares no total. Dinheiro ou cartão?' },
        { speaker: 'Customer', gender: 'male', text: 'Cash, please. Here is a ten-dollar bill.', translation: 'Dinheiro, por favor. Aqui está uma nota de dez dólares.' },
        { speaker: 'Baker', gender: 'female', text: 'Thank you, and here is two dollars in change. Have a lovely day!', translation: 'Obrigada, e aqui está dois dólares de troco. Tenha um ótimo dia!' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 27,
      transcript: 'Baker: Good morning! How may I help you today?\nCustomer: Hello! I would like two warm croissants and one loaf of sourdough bread, please.\nBaker: Certainly! Would you like the bread sliced?\nCustomer: Yes, please slice it. That is all. How much is that?\nBaker: That will be eight dollars in total. Cash or card?\nCustomer: Cash, please. Here is a ten-dollar bill.\nBaker: Thank you, and here is two dollars in change. Have a lovely day!',
      transcriptTranslation: 'Padeira: Bom dia! Como posso te ajudar hoje?\nCliente: Olá! Gostaria de dois croissants quentinhos e um pão de fermentação natural, por favor.\nPadeira: Com certeza! Gostaria do pão fatiado?\nCliente: Sim, fatiado por favor. É só isso. Quanto deu?\nPadeira: Fica em oito dólares no total. Dinheiro ou cartão?\nCliente: Dinheiro, por favor. Aqui está uma nota de dez dólares.\nPadeira: Obrigada, e aqui estão dois dólares de troco. Tenha um ótimo dia!'
    },
    questions: [
      {
        id: 'l-a1-sb-1',
        type: 'multiple_choice',
        questionText: 'Quantos croissants o cliente compra?',
        options: [
          { id: 'A', text: 'Um croissant' },
          { id: 'B', text: 'Dois croissants (two croissants)' },
          { id: 'C', text: 'Três croissants' },
          { id: 'D', text: 'Quatro croissants' }
        ],
        correctOptionId: 'B',
        explanation: 'O cliente pede: "two warm croissants and one loaf of sourdough bread".'
      },
      {
        id: 'l-a1-sb-2',
        type: 'multiple_choice',
        questionText: 'O que o cliente pede para fazer com o pão?',
        options: [
          { id: 'A', text: 'Esquentar no forno' },
          { id: 'B', text: 'Fatiar (slice it)' },
          { id: 'C', text: 'Embalar para viagem em saco de pano' },
          { id: 'D', text: 'Passar manteiga' }
        ],
        correctOptionId: 'B',
        explanation: 'A atendente pergunta se ele quer o pão fatiado ("sliced") e ele responde: "Yes, please slice it".'
      },
      {
        id: 'l-a1-sb-3',
        type: 'multiple_choice',
        questionText: 'Quanto o cliente recebe de troco (change)?',
        options: [
          { id: 'A', text: 'Dois dólares ($2.00)' },
          { id: 'B', text: 'Cinco dólares ($5.00)' },
          { id: 'C', text: 'Três dólares ($3.00)' },
          { id: 'D', text: 'Nenhum troco' }
        ],
        correctOptionId: 'A',
        explanation: 'A compra foi $8, ele pagou com uma nota de $10 e recebeu $2 de troco.'
      }
    ]
  },

  // 11. Situações da vida real (A1) - Novo
  {
    id: 'listening-a1-sit-bus-stop',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a1',
    topic: 'Transporte & Cidade',
    title: 'Informações no Ponto de Ônibus',
    description: 'Um passageiro pede orientações sobre rotas e horários para outra pessoa no ponto de ônibus.',
    objective: 'Compreender perguntas sobre linhas de transporte, tempo de espera e destinos.',
    instructions: 'Ouça o áudio e responda às perguntas sobre o trajeto do ônibus.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Asking for Directions at the Bus Stop',
      scenario: 'Ponto de ônibus em uma avenida movimentada',
      spokenText: 'Excuse me, does bus number fourteen go to the city library? Yes, it stops right in front of the library building! How frequently does it come? It runs every ten minutes during the day. Look, here it comes right now! Thank you very much for your help. You are welcome, have a safe trip!',
      dialogueLines: [
        { speaker: 'Passenger', gender: 'male', text: 'Excuse me, does bus number fourteen go to the city library?', translation: 'Com licença, o ônibus número 14 vai até a biblioteca da cidade?' },
        { speaker: 'Local Resident', gender: 'female', text: 'Yes, it stops right in front of the library building!', translation: 'Sim, ele para bem em frente ao prédio da biblioteca!' },
        { speaker: 'Passenger', gender: 'male', text: 'How frequently does it come?', translation: 'Com que frequência ele passa?' },
        { speaker: 'Local Resident', gender: 'female', text: 'It runs every ten minutes during the day. Look, here it comes right now!', translation: 'Ele passa a cada dez minutos durante o dia. Olha, lá vem ele agora mesmo!' },
        { speaker: 'Passenger', gender: 'male', text: 'Thank you very much for your help.', translation: 'Muito obrigado pela sua ajuda.' },
        { speaker: 'Local Resident', gender: 'female', text: 'You are welcome, have a safe trip!', translation: 'De nada, tenha uma boa viagem!' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 22,
      transcript: 'Passenger: Excuse me, does bus number fourteen go to the city library?\nResident: Yes, it stops right in front of the library building!\nPassenger: How frequently does it come?\nResident: It runs every ten minutes during the day. Look, here it comes right now!\nPassenger: Thank you very much for your help.\nResident: You are welcome, have a safe trip!',
      transcriptTranslation: 'Passageiro: Com licença, o ônibus número 14 vai até a biblioteca da cidade?\nMoradora: Sim, ele para bem em frente ao prédio da biblioteca!\nPassageiro: Com que frequência ele passa?\nMoradora: Ele passa a cada dez minutos durante o dia. Olha, lá vem ele agora mesmo!\nPassageiro: Muito obrigado pela sua ajuda.\nMoradora: De nada, tenha uma boa viagem!'
    },
    questions: [
      {
        id: 'l-a1-st-1',
        type: 'multiple_choice',
        questionText: 'Qual é o número do ônibus perguntado pelo passageiro?',
        options: [
          { id: 'A', text: 'Ônibus 40' },
          { id: 'B', text: 'Ônibus 14 (bus number fourteen)' },
          { id: 'C', text: 'Ônibus 4' },
          { id: 'D', text: 'Ônibus 24' }
        ],
        correctOptionId: 'B',
        explanation: 'O passageiro pergunta sobre o "bus number fourteen" (número 14).'
      },
      {
        id: 'l-a1-st-2',
        type: 'multiple_choice',
        questionText: 'Onde o ônibus para em relação à biblioteca?',
        options: [
          { id: 'A', text: 'A três quadras de distância' },
          { id: 'B', text: 'Bem em frente ao prédio (right in front)' },
          { id: 'C', text: 'Apenas no terminal central' },
          { id: 'D', text: 'Ele não para na biblioteca' }
        ],
        correctOptionId: 'B',
        explanation: 'A moradora responde: "it stops right in front of the library building!".'
      },
      {
        id: 'l-a1-st-3',
        type: 'multiple_choice',
        questionText: 'Com que frequência esse ônibus passa durante o dia?',
        options: [
          { id: 'A', text: 'A cada 30 minutos' },
          { id: 'B', text: 'Apenas uma vez por hora' },
          { id: 'C', text: 'A cada 10 minutos (every ten minutes)' },
          { id: 'D', text: 'A cada 5 minutos' }
        ],
        correctOptionId: 'C',
        explanation: 'Ela diz: "It runs every ten minutes during the day".'
      }
    ]
  },

  // 12. Situações da vida real (A1) - Novo
  {
    id: 'listening-a1-sit-clothing-store',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'a1',
    topic: 'Compras & Vestuário',
    title: 'Experimentando Roupas na Loja',
    description: 'Ouça uma cliente conversando com a vendedora sobre o tamanho de uma camisa e o provador.',
    objective: 'Compreender pedidos de tamanhos (small, medium, large), cores e localização do provador.',
    instructions: 'Acompanhe o áudio entre a cliente e a vendedora e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Trying on Clothes at the Shop',
      scenario: 'Loja de roupas no shopping',
      spokenText: 'Excuse me! Do you have this blue cotton shirt in a medium size? Let me check the rack for you. Yes, here is a medium in navy blue. Can I try it on? Of course! The fitting rooms are in the back, right next to the mirrors. Thank you so much! Let me know if you need another size.',
      dialogueLines: [
        { speaker: 'Customer', gender: 'female', text: 'Excuse me! Do you have this blue cotton shirt in a medium size?', translation: 'Com licença! Vocês têm essa camisa azul de algodão no tamanho médio?' },
        { speaker: 'Clerk', gender: 'female', text: 'Let me check the rack for you. Yes, here is a medium in navy blue.', translation: 'Deixe-me conferir a arara para você. Sim, aqui está uma média em azul-marinho.' },
        { speaker: 'Customer', gender: 'female', text: 'Can I try it on?', translation: 'Posso experimentar?' },
        { speaker: 'Clerk', gender: 'female', text: 'Of course! The fitting rooms are in the back, right next to the mirrors.', translation: 'Claro! Os provadores ficam no fundo, bem ao lado dos espelhos.' },
        { speaker: 'Customer', gender: 'female', text: 'Thank you so much!', translation: 'Muito obrigada!' },
        { speaker: 'Clerk', gender: 'female', text: 'Let me know if you need another size.', translation: 'Me avise se precisar de outro tamanho.' }
      ],
      speechRate: 0.88,
      estimatedDurationSeconds: 23,
      transcript: 'Customer: Excuse me! Do you have this blue cotton shirt in a medium size?\nClerk: Let me check the rack for you. Yes, here is a medium in navy blue.\nCustomer: Can I try it on?\nClerk: Of course! The fitting rooms are in the back, right next to the mirrors.\nCustomer: Thank you so much!\nClerk: Let me know if you need another size.',
      transcriptTranslation: 'Cliente: Com licença! Vocês têm essa camisa azul de algodão no tamanho médio?\nVendedora: Deixe-me conferir a arara para você. Sim, aqui está uma média em azul-marinho.\nCliente: Posso experimentar?\nVendedora: Claro! Os provadores ficam no fundo, bem ao lado dos espelhos.\nCliente: Muito obrigada!\nVendedora: Me avise se precisar de outro tamanho.'
    },
    questions: [
      {
        id: 'l-a1-scs-1',
        type: 'multiple_choice',
        questionText: 'Qual tamanho de camisa a cliente procura?',
        options: [
          { id: 'A', text: 'Tamanho pequeno (small)' },
          { id: 'B', text: 'Tamanho médio (medium size)' },
          { id: 'C', text: 'Tamanho grande (large)' },
          { id: 'D', text: 'Tamanho extra grande (extra large)' }
        ],
        correctOptionId: 'B',
        explanation: 'A cliente pergunta especificamente: "in a medium size?".'
      },
      {
        id: 'l-a1-scs-2',
        type: 'multiple_choice',
        questionText: 'O que significa a pergunta "Can I try it on?"?',
        options: [
          { id: 'A', text: 'Posso pagar parcelado?' },
          { id: 'B', text: 'Posso experimentar a roupa?' },
          { id: 'C', text: 'Posso levar de presente?' },
          { id: 'D', text: 'Posso trocar por outro modelo?' }
        ],
        correctOptionId: 'B',
        explanation: '"Try on" é o phrasal verb para experimentar roupas ou calçados.'
      },
      {
        id: 'l-a1-scs-3',
        type: 'multiple_choice',
        questionText: 'Onde ficam os provadores (fitting rooms)?',
        options: [
          { id: 'A', text: 'No andar de cima' },
          { id: 'B', text: 'Ao lado da porta de entrada' },
          { id: 'C', text: 'No fundo da loja, ao lado dos espelhos' },
          { id: 'D', text: 'Atrás do caixa principal' }
        ],
        correctOptionId: 'C',
        explanation: 'A atendente orienta: "in the back, right next to the mirrors".'
      }
    ]
  },

  // 13. Entenda o inglês natural (A1) - Existente
  {
    id: 'listening-a1-nat-morning',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'a1',
    topic: 'Comunicação Cotidiana',
    title: 'Mensagem de Áudio: Atraso Amigável',
    description: 'Compreenda uma mensagem de voz curta e espontânea deixada no aplicativo de mensagens.',
    objective: 'Reconhecer contrações cotidianas leves como "I\'m gonna" e "I\'ll be" no ritmo natural.',
    instructions: 'Ouça o áudio deixado por Lucas e descubra por que ele vai se atrasar e o que pede à amiga.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Voice Note from Lucas',
      scenario: 'Mensagem de voz rápida no celular',
      spokenText: 'Hey Emma! Just a quick heads-up. Traffic on Main Street is pretty heavy this morning because of some road work. So I am gonna be about ten minutes late for our meeting. Could you grab a table near the window? I will see you very soon!',
      speechRate: 0.9,
      estimatedDurationSeconds: 18,
      transcript: 'Hey Emma! Just a quick heads-up. Traffic on Main Street is pretty heavy this morning because of some road work. So I\'m gonna be about ten minutes late for our meeting. Could you grab a table near the window? I\'ll see you very soon!',
      transcriptTranslation: 'Ei Emma! Só um aviso rápido. O trânsito na Main Street está bem pesado esta manhã por causa de obras na pista. Então vou me atrasar uns dez minutos para a nossa reunião. Você poderia pegar uma mesa perto da janela? Te vejo daqui a pouquinho!'
    },
    questions: [
      {
        id: 'l-a1-nm-1',
        type: 'multiple_choice',
        questionText: 'Por que o trânsito está pesado esta manhã segundo Lucas?',
        options: [
          { id: 'A', text: 'Por causa de chuva forte e vento' },
          { id: 'B', text: 'Por causa de obras na pista (road work)' },
          { id: 'C', text: 'Houve um jogo de futebol no estádio' },
          { id: 'D', text: 'O sinal de trânsito quebrou' }
        ],
        correctOptionId: 'B',
        explanation: 'Lucas explica: "Traffic on Main Street is pretty heavy this morning because of some road work".'
      },
      {
        id: 'l-a1-nm-2',
        type: 'multiple_choice',
        questionText: 'De quanto tempo será o atraso estimado de Lucas?',
        options: [
          { id: 'A', text: 'Cerca de 10 minutos' },
          { id: 'B', text: 'Cerca de 30 minutos' },
          { id: 'C', text: 'Mais de uma hora' },
          { id: 'D', text: 'Apenas 2 minutos' }
        ],
        correctOptionId: 'A',
        explanation: 'Ele diz: "So I am gonna be about ten minutes late for our meeting".'
      },
      {
        id: 'l-a1-nm-3',
        type: 'multiple_choice',
        questionText: 'O que Lucas pede para Emma fazer enquanto o espera?',
        options: [
          { id: 'A', text: 'Pedir um café forte para ele' },
          { id: 'B', text: 'Guardar um lugar no estacionamento' },
          { id: 'C', text: 'Pegar uma mesa perto da janela' },
          { id: 'D', text: 'Adiar a reunião para amanhã' }
        ],
        correctOptionId: 'C',
        explanation: 'Lucas pede gentilmente: "Could you grab a table near the window?".'
      }
    ]
  },

  // 14. Entenda o inglês natural (A1) - Novo
  {
    id: 'listening-a1-nat-lost-keys',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'a1',
    topic: 'Pequenos Imprevistos',
    title: 'Mensagem de Voz: As Chaves Esquecidas',
    description: 'Ouça uma mensagem descontraída de áudio de uma amiga que esqueceu as chaves em casa.',
    objective: 'Identificar a situação-problema e o pedido prático em uma fala coloquial espontânea.',
    instructions: 'Ouça o áudio deixado por Clara e responda o que ela precisa.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Clara Forgot Her House Keys',
      scenario: 'Recado de voz no celular',
      spokenText: 'Hey Alex, it is Clara! Guess what? I am already in front of our building, but I left my apartment keys on the kitchen table this morning. Are you still at work, or are you on your way home? Let me know, otherwise I will just wait at the coffee shop across the street. Talk to you soon!',
      speechRate: 0.9,
      estimatedDurationSeconds: 19,
      transcript: 'Hey Alex, it\'s Clara! Guess what? I\'m already in front of our building, but I left my apartment keys on the kitchen table this morning. Are you still at work, or are you on your way home? Let me know, otherwise I\'ll just wait at the coffee shop across the street. Talk to you soon!',
      transcriptTranslation: 'Ei Alex, é a Clara! Adivinha só? Já estou na frente do nosso prédio, mas esqueci as chaves do apartamento na mesa da cozinha esta manhã. Você ainda está no trabalho ou a caminho de casa? Me avisa, senão vou ficar esperando no café do outro lado da rua. Falo com você logo!'
    },
    questions: [
      {
        id: 'l-a1-nlk-1',
        type: 'multiple_choice',
        questionText: 'Qual imprevisto aconteceu com Clara?',
        options: [
          { id: 'A', text: 'Ela perdeu o celular no ônibus' },
          { id: 'B', text: 'Ela esqueceu as chaves do apartamento na mesa da cozinha' },
          { id: 'C', text: 'Ela errou o endereço do prédio' },
          { id: 'D', text: 'O elevador do prédio estragou' }
        ],
        correctOptionId: 'B',
        explanation: 'Clara diz: "I left my apartment keys on the kitchen table this morning".'
      },
      {
        id: 'l-a1-nlk-2',
        type: 'multiple_choice',
        questionText: 'Onde Clara está no momento em que grava o áudio?',
        options: [
          { id: 'A', text: 'No trabalho' },
          { id: 'B', text: 'Dentro do metrô' },
          { id: 'C', text: 'Em frente ao prédio (in front of our building)' },
          { id: 'D', text: 'No supermercado' }
        ],
        correctOptionId: 'C',
        explanation: 'Ela informa: "I am already in front of our building".'
      },
      {
        id: 'l-a1-nlk-3',
        type: 'multiple_choice',
        questionText: 'Onde Clara planeja esperar se Alex ainda demorar?',
        options: [
          { id: 'A', text: 'Na cafeteria do outro lado da rua' },
          { id: 'B', text: 'Na casa da mãe dela' },
          { id: 'C', text: 'Na portaria do prédio' },
          { id: 'D', text: 'No banco da praça' }
        ],
        correctOptionId: 'A',
        explanation: 'Clara diz: "otherwise I will just wait at the coffee shop across the street".'
      }
    ]
  },

  // 15. Entenda o inglês natural (A1) - Novo
  {
    id: 'listening-a1-nat-weather-walk',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'a1',
    topic: 'Clima & Lazer',
    title: 'Convite Espontâneo: Caminhada no Parque',
    description: 'Ouça uma mensagem animada sobre o clima ensolarado e um convite para passear ao ar livre.',
    objective: 'Reconhecer descrições meteorológicas cotidianas (sunny, warm, breeze) e convites informais.',
    instructions: 'Ouça o áudio e responda às perguntas sobre os planos ao ar livre.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Sunny Afternoon Walk Invitation',
      scenario: 'Mensagem de voz amigável de fim de tarde',
      spokenText: 'Hey Felipe! The sun is finally out and the weather is so nice and warm today! A light breeze, blue sky... it is just perfect. I am going for a walk around the lake at four o clock. Do you wanna come with me? We can grab an ice cream on the way back. Let me know before four!',
      speechRate: 0.9,
      estimatedDurationSeconds: 19,
      transcript: 'Hey Felipe! The sun is finally out and the weather is so nice and warm today! A light breeze, blue sky... it\'s just perfect. I\'m going for a walk around the lake at 4 o\'clock. Do you wanna come with me? We can grab an ice cream on the way back. Let me know before four!',
      transcriptTranslation: 'Ei Felipe! O sol finalmente apareceu e o tempo está tão gostoso e quente hoje! Uma brisa leve, céu azul... está simplesmente perfeito. Vou dar uma volta ao redor do lago às quatro horas. Quer vir comigo? Podemos pegar um sorvete no caminho de volta. Me avisa antes das quatro!'
    },
    questions: [
      {
        id: 'l-a1-nww-1',
        type: 'multiple_choice',
        questionText: 'Como está o clima de acordo com a mensagem de voz?',
        options: [
          { id: 'A', text: 'Chuvoso e com muito vento' },
          { id: 'B', text: 'Ensolarado, agradável e com céu azul' },
          { id: 'C', text: 'Muito frio e nublado' },
          { id: 'D', text: 'Nevando com neblina' }
        ],
        correctOptionId: 'B',
        explanation: 'A fala destaca: "The sun is finally out and the weather is so nice and warm today! A light breeze, blue sky".'
      },
      {
        id: 'l-a1-nww-2',
        type: 'multiple_choice',
        questionText: 'A que horas a pessoa vai caminhar ao redor do lago?',
        options: [
          { id: 'A', text: 'Às 2h00' },
          { id: 'B', text: 'Às 4h00 (four o\'clock)' },
          { id: 'C', text: 'Às 5h30' },
          { id: 'D', text: 'Ao meio-dia' }
        ],
        correctOptionId: 'B',
        explanation: 'Ela diz: "I am going for a walk around the lake at four o clock".'
      },
      {
        id: 'l-a1-nww-3',
        type: 'multiple_choice',
        questionText: 'O que eles podem fazer no caminho de volta?',
        options: [
          { id: 'A', text: 'Pegar um sorvete (grab an ice cream)' },
          { id: 'B', text: 'Jantar em uma pizzaria' },
          { id: 'C', text: 'Visitar uma galeria de arte' },
          { id: 'D', text: 'Fazer compras no shopping' }
        ],
        correctOptionId: 'A',
        explanation: 'A pessoa sugere: "We can grab an ice cream on the way back".'
      }
    ]
  }
];

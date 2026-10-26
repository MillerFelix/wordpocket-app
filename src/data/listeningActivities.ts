import { Activity, ListeningQuestion } from '../types/activity';

export const LISTENING_ACTIVITIES: Activity<ListeningQuestion>[] = [
  // ==========================================
  // NÍVEL A1 — INICIANTE
  // ==========================================

  // 1. Ouça e identifique (A1)
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

  // 2. Compreenda o diálogo (A1)
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

  // 3. Situações da vida real (A1)
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

  // 4. Entenda o inglês natural (A1)
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

  // ==========================================
  // NÍVEL A2 — BÁSICO
  // ==========================================

  // 5. Ouça e identifique (A2)
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

  // 6. Compreenda o diálogo (A2)
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

  // 7. Situações da vida real (A2)
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

  // 8. Entenda o inglês natural (A2)
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

  // ==========================================
  // NÍVEL B1 — INTERMEDIÁRIO
  // ==========================================

  // 9. Ouça e identifique (B1)
  {
    id: 'listening-b1-id-reductions',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b1',
    topic: 'Fala Conectada & Reduções',
    title: 'Reduções Modais: Would have, Could have, Should have',
    description: 'Identifique modais no passado reduzidos foneticamente na fala espontânea de falantes nativos.',
    objective: 'Reconhecer formas conectadas como "would\'ve" (/wʊdəv/), "could\'ve" e "shouldn\'t have" em frases rápidas.',
    instructions: 'Ouça atentamente as três frases e identifique o modal no passado empregado em cada uma.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Modal Past Reductions in Rapid Speech',
      scenario: 'Análise de áudio com reduções de modais compostos',
      spokenText: 'Sentence A: I would have called you earlier, but my phone battery died completely. Sentence B: You should have seen his surprised face when we entered the room. Sentence C: We could not have finished the client presentation without your help.',
      speechRate: 0.98,
      estimatedDurationSeconds: 19,
      transcript: 'Sentence A: I would\'ve called you earlier, but my phone battery died completely.\nSentence B: You should\'ve seen his surprised face when we entered the room.\nSentence C: We couldn\'t have finished the client presentation without your help.',
      transcriptTranslation: 'Frase A: Eu teria ligado para você mais cedo, mas a bateria do meu celular acabou completamente.\nFrase B: Você deveria ter visto a cara de surpresa dele quando entramos na sala.\nFrase C: Nós não teríamos conseguido terminar a apresentação do cliente sem a sua ajuda.'
    },
    questions: [
      {
        id: 'l-b1-mr-1',
        type: 'multiple_choice',
        questionText: 'Na Frase A, qual estrutura verbal expressa uma intenção não realizada no passado?',
        options: [
          { id: 'A', text: 'I will call (futuro simples)' },
          { id: 'B', text: 'I would have called (teria ligado / would\'ve)' },
          { id: 'C', text: 'I must call (obrigação presente)' },
          { id: 'D', text: 'I used to call (hábito passado)' }
        ],
        correctOptionId: 'B',
        explanation: 'O locutor diz "I would have called you earlier" (/aɪ wʊdəv kɔːld/), expressando algo que teria feito se o celular não tivesse descarregado.'
      },
      {
        id: 'l-b1-mr-2',
        type: 'multiple_choice',
        questionText: 'Na Frase B, o que o falante expressa com "You should have seen"?',
        options: [
          { id: 'A', text: 'Uma advertência médica formal' },
          { id: 'B', text: 'Uma recomendação enfática sobre algo marcante do passado ("deveria ter visto")' },
          { id: 'C', text: 'Uma dúvida sobre a visão do colega' },
          { id: 'D', text: 'Um pedido para não entrar na sala' }
        ],
        correctOptionId: 'B',
        explanation: '"You should\'ve seen" (/ʃʊdəv siːn/) é uma expressão idiomática clássica em inglês para enfatizar quão memorável ou engraçada foi uma reação passada.'
      },
      {
        id: 'l-b1-mr-3',
        type: 'multiple_choice',
        questionText: 'Na Frase C, qual é o significado da declaração para a equipe?',
        options: [
          { id: 'A', text: 'A ajuda da pessoa foi desnecessária.' },
          { id: 'B', text: 'Não teriam conseguido terminar o projeto sem o apoio dela ("could not have finished").' },
          { id: 'C', text: 'A apresentação foi cancelada pelo cliente.' },
          { id: 'D', text: 'A equipe se recusou a trabalhar junto.' }
        ],
        correctOptionId: 'B',
        explanation: '"We couldn\'t have finished without your help" reconhece que o sucesso dependeu crucialmente da colaboração recebida.'
      }
    ]
  },

  // 10. Compreenda o diálogo (B1)
  {
    id: 'listening-b1-dial-job-interview',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b1',
    topic: 'Carreira & Negócios',
    title: 'Alinhamento de Projeto e Metas',
    description: 'Acompanhe uma reunião entre gerente e especialista sobre cronograma, riscos e prioridades.',
    objective: 'Compreender negociação de prazos, distribuição de tarefas e soluções para imprevistos.',
    instructions: 'Ouça o diálogo profissional entre Kevin e Laura e avalie as decisões tomadas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Project Timeline and Risk Management',
      scenario: 'Reunião de alinhamento em uma empresa de tecnologia',
      spokenText: 'Laura, how are we looking regarding the mobile application launch deadline next Friday? To be completely transparent, the core features are solid, but our QA team discovered an unexpected memory issue during high-load tests yesterday. That sounds concerning. Can we deploy a hotfix without delaying the entire release? If we reassign two developers from the reporting module to assist with debugging, we can fix it by Tuesday and conduct regression testing on Wednesday. That is a sensible tradeoff. Let us shift those resources immediately so we do not jeopardize our launch date. I will coordinate with engineering right away.',
      dialogueLines: [
        { speaker: 'Kevin', gender: 'male', text: 'Laura, how are we looking regarding the mobile application launch deadline next Friday?', translation: 'Laura, como estamos em relação ao prazo de lançamento do aplicativo móvel na próxima sexta-feira?' },
        { speaker: 'Laura', gender: 'female', text: 'To be completely transparent, the core features are solid, but our QA team discovered an unexpected memory issue during high-load tests yesterday.', translation: 'Para ser totalmente transparente, os recursos principais estão sólidos, mas nossa equipe de QA descobriu um problema inesperado de memória durante testes de alta carga ontem.' },
        { speaker: 'Kevin', gender: 'male', text: 'That sounds concerning. Can we deploy a hotfix without delaying the entire release?', translation: 'Isso parece preocupante. Conseguimos aplicar uma correção rápida sem adiar o lançamento todo?' },
        { speaker: 'Laura', gender: 'female', text: 'If we reassign two developers from the reporting module to assist with debugging, we can fix it by Tuesday and conduct regression testing on Wednesday.', translation: 'Se realocarmos dois desenvolvedores do módulo de relatórios para ajudar no debugging, podemos corrigir até terça-feira e rodar testes de regressão na quarta.' },
        { speaker: 'Kevin', gender: 'male', text: 'That is a sensible tradeoff. Let us shift those resources immediately so we do not jeopardize our launch date.', translation: 'Essa é uma concessão sensata. Vamos transferir esses recursos imediatamente para não colocar em risco a data de lançamento.' },
        { speaker: 'Laura', gender: 'female', text: 'I will coordinate with engineering right away.', translation: 'Vou coordenar com a equipe de engenharia imediatamente.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 34,
      transcript: 'Kevin: Laura, how are we looking regarding the mobile application launch deadline next Friday?\nLaura: To be completely transparent, the core features are solid, but our QA team discovered an unexpected memory issue during high-load tests yesterday.\nKevin: That sounds concerning. Can we deploy a hotfix without delaying the entire release?\nLaura: If we reassign two developers from the reporting module to assist with debugging, we can fix it by Tuesday and conduct regression testing on Wednesday.\nKevin: That\'s a sensible tradeoff. Let\'s shift those resources immediately so we don\'t jeopardize our launch date.\nLaura: I will coordinate with engineering right away.',
      transcriptTranslation: 'Kevin: Laura, como estamos em relação ao prazo de lançamento do aplicativo móvel na próxima sexta-feira?\nLaura: Para ser totalmente transparente, os recursos principais estão sólidos, mas nossa equipe de QA descobriu um problema inesperado de memória durante testes de alta carga ontem.\nKevin: Isso parece preocupante. Conseguimos aplicar uma correção rápida sem adiar o lançamento todo?\nLaura: Se realocarmos dois desenvolvedores do módulo de relatórios para ajudar no debugging, podemos corrigir até terça-feira e rodar testes de regressão na quarta.\nKevin: Essa é uma concessão sensata. Vamos transferir esses recursos imediatamente para não colocar em risco a data de lançamento.\nLaura: Vou coordenar com a equipe de engenharia imediatamente.'
    },
    questions: [
      {
        id: 'l-b1-dj-1',
        type: 'multiple_choice',
        questionText: 'Qual problema foi detectado pela equipe de QA nos testes do aplicativo?',
        options: [
          { id: 'A', text: 'O design visual foi rejeitado pelo cliente.' },
          { id: 'B', text: 'Um problema inesperado de memória sob alta carga.' },
          { id: 'C', text: 'Falta de servidores em nuvem disponíveis.' },
          { id: 'D', text: 'Problemas no processamento de pagamentos com cartão.' }
        ],
        correctOptionId: 'B',
        explanation: 'Laura relata: "our QA team discovered an unexpected memory issue during high-load tests yesterday".'
      },
      {
        id: 'l-b1-dj-2',
        type: 'multiple_choice',
        questionText: 'Qual foi a estratégia proposta por Laura para solucionar o problema a tempo?',
        options: [
          { id: 'A', text: 'Cancelar os testes de qualidade e lançar na sexta sem mudanças.' },
          { id: 'B', text: 'Contratar uma consultoria externa de emergência.' },
          { id: 'C', text: 'Realocar temporariamente dois desenvolvedores do módulo de relatórios para o conserto.' },
          { id: 'D', text: 'Adiar o lançamento por dois meses.' }
        ],
        correctOptionId: 'C',
        explanation: 'Ela sugere: "reassign two developers from the reporting module to assist with debugging".'
      },
      {
        id: 'l-b1-dj-3',
        type: 'multiple_choice',
        questionText: 'Qual é o cronograma de correção alinhado entre Kevin e Laura?',
        options: [
          { id: 'A', text: 'Correção até terça-feira e testes de regressão na quarta-feira.' },
          { id: 'B', text: 'Correção no próprio dia do lançamento na sexta.' },
          { id: 'C', text: 'Trabalho no final de semana seguinte.' },
          { id: 'D', text: 'Reunião apenas na próxima quinta-feira.' }
        ],
        correctOptionId: 'A',
        explanation: 'Laura diz: "we can fix it by Tuesday and conduct regression testing on Wednesday", mantendo o lançamento para sexta-feira.'
      }
    ]
  },

  // 11. Situações da vida real (B1)
  {
    id: 'listening-b1-sit-airport-delay',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b1',
    topic: 'Aeroportos & Viagens Globais',
    title: 'Anúncio de Aeroporto Internacional',
    description: 'Compreenda comunicados oficiais do sistema de som de um aeroporto com informações urgentes.',
    objective: 'Identificar instruções sobre atrasos meteorológicos, alteração de portão e benefícios oferecidos.',
    instructions: 'Ouça o aviso do alto-falante do aeroporto e identifique os procedimentos para os passageiros.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Airport Gate and Delay Announcement',
      scenario: 'Sistema de alto-falantes de um aeroporto internacional',
      spokenText: 'Attention all passengers booked on flight UA 482 with nonstop service to Chicago O Hare. Due to severe thunderstorm activity over the midwest corridor, air traffic control has temporarily grounded incoming aircraft. As a consequence, your departure has been rescheduled from two fifteen PM to three forty-five PM. Furthermore, please note that the departure gate has been relocated from B12 to C28. Passengers requiring special mobility assistance may proceed directly to the new gate for priority boarding. Meal vouchers are currently accessible through our mobile application. We apologize for the inconvenience and appreciate your patience.',
      speechRate: 0.96,
      estimatedDurationSeconds: 35,
      transcript: 'Attention all passengers booked on flight UA 482 with nonstop service to Chicago O\'Hare. Due to severe thunderstorm activity over the midwest corridor, air traffic control has temporarily grounded incoming aircraft. As a consequence, your departure has been rescheduled from 2:15 PM to 3:45 PM. Furthermore, please note that the departure gate has been relocated from B12 to C28. Passengers requiring special mobility assistance may proceed directly to the new gate for priority boarding. Meal vouchers are currently accessible through our mobile application. We apologize for the inconvenience and appreciate your patience.',
      transcriptTranslation: 'Atenção todos os passageiros com reserva no voo UA 482, serviço direto para Chicago O\'Hare. Devido a fortes tempestades sobre o corredor do centro-oeste, o controle de tráfego aéreo suspendeu temporariamente as aeronaves em aproximação. Como consequência, sua partida foi remarcada das 14h15 para as 15h45. Além disso, observem que o portão de embarque foi transferido do B12 para o C28. Passageiros que necessitem de assistência especial de mobilidade podem se dirigir diretamente ao novo portão para embarque prioritário. Vales-refeição já estão acessíveis através do nosso aplicativo móvel. Pedimos desculpas pelo inconveniente e agradecemos pela paciência.'
    },
    questions: [
      {
        id: 'l-b1-sa-1',
        type: 'multiple_choice',
        questionText: 'Qual foi o motivo meteorológico do atraso do voo UA 482?',
        options: [
          { id: 'A', text: 'Nevasca severa nas montanhas' },
          { id: 'B', text: 'Fortes tempestades com trovões (thunderstorm activity)' },
          { id: 'C', text: 'Neblina espessa na pista local' },
          { id: 'D', text: 'Temperaturas extremamente elevadas' }
        ],
        correctOptionId: 'B',
        explanation: 'O anúncio especifica: "Due to severe thunderstorm activity over the midwest corridor".'
      },
      {
        id: 'l-b1-sa-2',
        type: 'multiple_choice',
        questionText: 'Para qual novo horário e portão o voo foi remanejado?',
        options: [
          { id: 'A', text: 'Partida às 15h45 no Portão C28' },
          { id: 'B', text: 'Partida às 14h15 no Portão B12' },
          { id: 'C', text: 'Partida às 17h00 no Portão A04' },
          { id: 'D', text: 'Partida às 16h30 no Portão D19' }
        ],
        correctOptionId: 'A',
        explanation: 'O aviso informa: "rescheduled from 2:15 PM to 3:45 PM" e "gate has been relocated from B12 to C28".'
      },
      {
        id: 'l-b1-sa-3',
        type: 'multiple_choice',
        questionText: 'Como os passageiros podem obter seus vales-refeição (meal vouchers)?',
        options: [
          { id: 'A', text: 'Na fila de atendimento ao cliente no balcão principal' },
          { id: 'B', text: 'Diretamente pelo aplicativo móvel da companhia aérea' },
          { id: 'C', text: 'Apresentando o cartão de crédito em qualquer restaurante' },
          { id: 'D', text: 'Somente após desembarcarem em Chicago' }
        ],
        correctOptionId: 'B',
        explanation: 'O comunicado diz: "Meal vouchers are currently accessible through our mobile application".'
      }
    ]
  },

  // 12. Entenda o inglês natural (B1)
  {
    id: 'listening-b1-nat-remote-work',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'b1',
    topic: 'Cultura & Sociedade',
    title: 'Trabalho Remoto e Produtividade Saudável',
    description: 'Trecho falado em velocidade nativa natural, com expressões idiomáticas e ideias complexas.',
    objective: 'Captar argumentos sutis, ponderações e a conclusão do interlocutor sem suporte textual prévio.',
    instructions: 'Ouça o áudio completo antes de responder. Analise os prós e contras defendidos pelo palestrante.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Navigating Remote Work Dynamics',
      scenario: 'Monólogo de podcast sobre novos modelos de trabalho',
      spokenText: 'A lot of folks assume that working from home is an effortless walk in the park. But in all honesty, drawing clear boundaries between professional duties and private life turns out to be surprisingly tricky. At first, you think: great, I will never have to sit in bumper-to-bumper traffic again, and I can grab lunch whenever I feel like it. However, after several months, you catch yourself checking work messages at nine PM while dinner is still on the stove. What really makes a difference is deliberately creating physical separation and establishing a consistent shutdown ritual at the end of the day. Without intentional boundaries, flexibility quietly turns into burnout.',
      speechRate: 1.0,
      estimatedDurationSeconds: 38,
      transcript: 'A lot of folks assume that working from home is an effortless walk in the park. But in all honesty, drawing clear boundaries between professional duties and private life turns out to be surprisingly tricky. At first, you think: great, I\'ll never have to sit in bumper-to-bumper traffic again, and I can grab lunch whenever I feel like it. However, after several months, you catch yourself checking work messages at 9 PM while dinner is still on the stove. What really makes a difference is deliberately creating physical separation and establishing a consistent shutdown ritual at the end of the day. Without intentional boundaries, flexibility quietly turns into burnout.',
      transcriptTranslation: 'Muita gente presume que trabalhar de casa é moleza ("a walk in the park"). Mas, honestamente, estabelecer limites claros entre deveres profissionais e vida pessoal se mostra surpreendentemente difícil. No começo, você pensa: ótimo, nunca mais vou ter que enfrentar trânsito para-e-anda, e posso almoçar quando der na telha. Contudo, após alguns meses, você se pega checando mensagens do trabalho às 21h enquanto o jantar ainda está no fogão. O que realmente faz a diferença é criar deliberadamente uma separação física e estabelecer um ritual de encerramento consistente no final do dia. Sem limites intencionais, a flexibilidade discretamente se transforma em esgotamento (burnout).'
    },
    questions: [
      {
        id: 'l-b1-nr-1',
        type: 'multiple_choice',
        questionText: 'O que significa a expressão idiomática "walk in the park" no início da fala?',
        options: [
          { id: 'A', text: 'Um passeio obrigatório na natureza' },
          { id: 'B', text: 'Algo fácil, simples e sem esforço ("moleza")' },
          { id: 'C', text: 'Um exercício físico recomendado por médicos' },
          { id: 'D', text: 'Um trabalho ao ar livre' }
        ],
        correctOptionId: 'B',
        explanation: '"A walk in the park" é uma expressão que denota algo fácil e descomplicado. O falante diz que muitos acham que home office é fácil assim, mas na realidade não é.'
      },
      {
        id: 'l-b1-nr-2',
        type: 'multiple_choice',
        questionText: 'Qual comportamento negativo ilustra a perda de limites no trabalho remoto?',
        options: [
          { id: 'A', text: 'Faltar a reuniões com clientes' },
          { id: 'B', text: 'Checar mensagens de trabalho às 21h enquanto prepara o jantar' },
          { id: 'C', text: 'Gastar muito dinheiro com compras online' },
          { id: 'D', text: 'Dormir durante o horário de expediente' }
        ],
        correctOptionId: 'B',
        explanation: 'O palestrante relata: "you catch yourself checking work messages at 9 PM while dinner is still on the stove".'
      },
      {
        id: 'l-b1-nr-3',
        type: 'multiple_choice',
        questionText: 'Qual é a solução prática e preventiva defendida pelo falante contra o burnout?',
        options: [
          { id: 'A', text: 'Voltar obrigatoriamente ao escritório presencial todos os dias' },
          { id: 'B', text: 'Criar separação física e instituir um ritual consistente de encerramento do expediente' },
          { id: 'C', text: 'Desligar o telefone por completo durante a semana inteira' },
          { id: 'D', text: 'Trabalhar apenas pela manhã' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele aconselha: "deliberately creating physical separation and establishing a consistent shutdown ritual at the end of the day. Without intentional boundaries, flexibility quietly turns into burnout".'
      }
    ]
  }
];

export function getListeningActivities(level?: string, type?: string): Activity<ListeningQuestion>[] {
  return LISTENING_ACTIVITIES.filter((act) => {
    const matchesLevel = !level || level.toLowerCase() === 'all' || act.level.toLowerCase() === level.toLowerCase();
    const matchesType = !type || type.toLowerCase() === 'all' || act.type.toLowerCase() === type.toLowerCase();
    return matchesLevel && matchesType;
  });
}

export function getListeningActivityById(id: string): Activity<ListeningQuestion> | undefined {
  return LISTENING_ACTIVITIES.find((a) => a.id === id);
}

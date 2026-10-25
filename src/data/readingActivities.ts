import { Activity, ReadingQuestion } from '../types/activity';

export const READING_ACTIVITIES: Activity<ReadingQuestion>[] = [
  // ==========================================
  // NÍVEL A1 — INICIANTE
  // ==========================================

  // 1. Leia e compreenda (A1)
  {
    id: 'reading-a1-read-morning',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a1',
    topic: 'Rotina & Cotidiano',
    title: 'A Rotina Matinal de David',
    description: 'Leia um texto simples sobre o começo do dia de um estudante e responda a perguntas sobre informações explícitas.',
    objective: 'Identificar informações pontuais como horários, refeições e meios de transporte no presente simples.',
    instructions: 'Leia o texto com atenção. Em seguida, escolha a melhor alternativa para cada pergunta.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: "David's Morning Routine",
      genre: 'Texto Descritivo',
      estimatedReadTimeMinutes: 1,
      content: `David is twenty years old and lives in Chicago. Every weekday, he wakes up at 6:30 AM. First, he washes his face and brushes his teeth. Then, he prepares a simple breakfast: toast with peanut butter and a cup of black coffee. 

At 7:15 AM, David packs his backpack with his laptop and notebooks. He does not take the bus because his college is near his apartment. Instead, he walks for fifteen minutes and arrives at campus at 7:30 AM. He usually meets his friend Maria in front of the library before their first English lecture starts at 8:00 AM.`,
      glossary: [
        { word: 'weekday', translation: 'dia útil (de segunda a sexta)' },
        { word: 'peanut butter', translation: 'pasta de amendoim' },
        { word: 'backpack', translation: 'mochila' },
        { word: 'lecture', translation: 'aula universitária / palestra' }
      ],
      passageTranslation: 'David tem vinte anos e mora em Chicago. Todos os dias úteis, ele acorda às 6h30. Primeiro, lava o rosto e escova os dentes. Depois, prepara um café da manhã simples: torrada com pasta de amendoim e uma xícara de café preto. Às 7h15, David arruma sua mochila com o notebook e cadernos. Ele não pega ônibus porque a faculdade é perto do apartamento. Em vez disso, caminha quinze minutos e chega ao campus às 7h30. Ele costuma encontrar sua amiga Maria em frente à biblioteca antes da primeira aula começar às 8h.'
    },
    questions: [
      {
        id: 'r-a1-rc-1',
        type: 'multiple_choice',
        questionText: 'What time does David wake up every weekday?',
        options: [
          { id: 'A', text: 'At 6:00 AM' },
          { id: 'B', text: 'At 6:30 AM' },
          { id: 'C', text: 'At 7:15 AM' },
          { id: 'D', text: 'At 8:00 AM' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto afirma expressamente: "Every weekday, he wakes up at 6:30 AM".'
      },
      {
        id: 'r-a1-rc-2',
        type: 'multiple_choice',
        questionText: 'How does David travel to his college campus?',
        options: [
          { id: 'A', text: 'He rides a bicycle.' },
          { id: 'B', text: 'He takes the city bus.' },
          { id: 'C', text: 'He walks for fifteen minutes.' },
          { id: 'D', text: 'He drives his car.' }
        ],
        correctOptionId: 'C',
        explanation: 'O texto diz: "He does not take the bus... Instead, he walks for fifteen minutes".'
      },
      {
        id: 'r-a1-rc-3',
        type: 'multiple_choice',
        questionText: 'Where does David meet his friend Maria?',
        options: [
          { id: 'A', text: 'In front of the library' },
          { id: 'B', text: 'At the coffee shop' },
          { id: 'C', text: 'Inside the subway station' },
          { id: 'D', text: 'At the cafeteria' }
        ],
        correctOptionId: 'A',
        explanation: 'De acordo com o texto: "He usually meets his friend Maria in front of the library".'
      }
    ]
  },

  // 2. Descubra pelo contexto (A1)
  {
    id: 'reading-a1-context-market',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a1',
    topic: 'Compras & Alimentação',
    title: 'No Supermercado do Bairro',
    description: 'Deduzir o significado de termos do dia a dia a partir das pistas presentes no parágrafo.',
    objective: 'Desenvolver a habilidade de inferir palavras desconhecidas observando as frases ao redor.',
    instructions: 'Leia a situação e descubra o que a palavra em destaque significa no contexto.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'A Quick Grocery Trip',
      genre: 'Situação Cotidiana',
      estimatedReadTimeMinutes: 1,
      content: `On Saturday mornings, Sarah visits the local grocery store. She takes a red cart at the entrance because she needs to buy many heavy items for the week.

First, she goes to the bakery aisle to pick fresh bread that just came out of the oven. Next, she looks for ripe bananas and sweet red apples in the produce section. Before paying at the checkout register, she checks her shopping list to make sure nothing is missing. The friendly cashier smiles and hands her the receipt.`,
      glossary: [
        { word: 'cart', translation: 'carrinho de compras' },
        { word: 'aisle', translation: 'corredor do supermercado' },
        { word: 'produce section', translation: 'seção de hortifrúti (frutas e verduras)' },
        { word: 'cashier', translation: 'operador de caixa' }
      ],
      passageTranslation: 'Nas manhãs de sábado, Sarah visita o mercado local. Ela pega um carrinho vermelho na entrada porque precisa comprar muitos itens pesados para a semana. Primeiro, vai ao corredor da padaria para escolher pão fresco saído do forno. Em seguida, procura bananas maduras e maçãs vermelhas doces na seção de hortifrúti. Antes de pagar no caixa, confere sua lista de compras para ter certeza de que não falta nada. O caixa simpático sorri e entrega o recibo.'
    },
    questions: [
      {
        id: 'r-a1-cc-1',
        type: 'multiple_choice',
        questionText: 'In the sentence "she looks for ripe bananas and sweet red apples", what does "ripe" mean?',
        options: [
          { id: 'A', text: 'Frozen or cold' },
          { id: 'B', text: 'Ready to be eaten (maduras)' },
          { id: 'C', text: 'Expensive and rare' },
          { id: 'D', text: 'Green and sour' }
        ],
        correctOptionId: 'B',
        explanation: 'Pelo contexto de escolher frutas prontas para o consumo com maçãs doces, "ripe" significa madura, pronta para comer.'
      },
      {
        id: 'r-a1-cc-2',
        type: 'multiple_choice',
        questionText: 'What does the word "cart" refer to in the first paragraph?',
        options: [
          { id: 'A', text: 'A small plastic credit card' },
          { id: 'B', text: 'A paper bag for vegetables' },
          { id: 'C', text: 'A wheeled basket for carrying heavy items' },
          { id: 'D', text: 'A car parking spot' }
        ],
        correctOptionId: 'C',
        explanation: 'Sarah pega o "cart" na entrada porque precisa transportar "many heavy items", indicando o carrinho de compras sobre rodas.'
      }
    ]
  },

  // 3. Interprete a mensagem (A1)
  {
    id: 'reading-a1-msg-party',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a1',
    topic: 'Comunicação Pessoal',
    title: 'Convite para Aniversário no Chat',
    description: 'Analise uma mensagem informal de convite e identifique o remetente, horário e solicitações.',
    objective: 'Compreender datas, horários e pedidos em comunicações pessoais digitais.',
    instructions: 'Leia a mensagem de texto e responda às questões sobre as informações práticas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'WhatsApp Message from Lucas',
      genre: 'Mensagem de Texto (Chat)',
      estimatedReadTimeMinutes: 1,
      content: `From: Lucas Mendes
To: Friends Group
Date: Friday, 3:45 PM

"Hey everyone! 🎉 
Tomorrow is my birthday and I am hosting a small barbecue at my house. 
When: Saturday at 5:00 PM. 
Where: 142 Maple Street (near the central park). 

I will prepare hamburgers and lemonade. Please bring your favorite snacks or drinks if you can. Also, let me know by 9:00 PM tonight if you can come so I know how much food to buy! Hope to see you all tomorrow!"`,
      glossary: [
        { word: 'hosting', translation: 'organizando / dando uma festa' },
        { word: 'barbecue', translation: 'churrasco' },
        { word: 'snacks', translation: 'petiscos / lanches' },
        { word: 'let me know', translation: 'me avise / me informe' }
      ],
      passageTranslation: 'Oi pessoal! 🎉 Amanhã é meu aniversário e vou fazer um pequeno churrasco na minha casa. Quando: Sábado às 17h. Onde: Maple Street, 142 (perto do parque central). Vou preparar hambúrgueres e limonada. Por favor, tragam seus petiscos ou bebidas favoritos se puderem. Além disso, me avisem até as 21h de hoje se puderem vir para eu saber quanta comida comprar! Espero ver todos amanhã!'
    },
    questions: [
      {
        id: 'r-a1-mi-1',
        type: 'multiple_choice',
        questionText: 'What is the main purpose of Lucas’s message?',
        options: [
          { id: 'A', text: 'To cancel a dinner reservation' },
          { id: 'B', text: 'To invite his friends to his birthday barbecue' },
          { id: 'C', text: 'To ask for homework help' },
          { id: 'D', text: 'To sell hamburgers and lemonade' }
        ],
        correctOptionId: 'B',
        explanation: 'Lucas escreve: "Tomorrow is my birthday and I am hosting a small barbecue... Hope to see you all tomorrow!".'
      },
      {
        id: 'r-a1-mi-2',
        type: 'multiple_choice',
        questionText: 'What does Lucas ask his guests to do by 9:00 PM tonight?',
        options: [
          { id: 'A', text: 'Arrive at Maple Street' },
          { id: 'B', text: 'Buy the hamburgers' },
          { id: 'C', text: 'Confirm whether they can attend' },
          { id: 'D', text: 'Send him a birthday gift' }
        ],
        correctOptionId: 'C',
        explanation: 'A mensagem pede: "let me know by 9:00 PM tonight if you can come so I know how much food to buy!".'
      }
    ]
  },

  // 4. Identifique a ideia principal (A1)
  {
    id: 'reading-a1-idea-sleep',
    pillar: 'reading',
    type: 'main_idea',
    level: 'a1',
    topic: 'Saúde & Hábitos',
    title: 'A Importância de uma Boa Noite de Sono',
    description: 'Identifique o tema central e o argumento principal de um parágrafo bem estruturado.',
    objective: 'Distinguir a ideia central de detalhes de suporte em textos curtos.',
    instructions: 'Leia o texto e selecione a alternativa que expressa o tema central.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Why Good Sleep Matters',
      genre: 'Artigo Educativo Curto',
      estimatedReadTimeMinutes: 1,
      content: `Getting enough sleep every night is essential for your body and mind. When you sleep seven to eight hours, your brain organizes memories and your muscles recover energy. Students who sleep well usually have better focus in class and make fewer mistakes on tests. In contrast, people who stay up very late often feel tired, stressed, and have trouble remembering new vocabulary words. Therefore, good sleep habits are just as important as healthy food and exercise.`,
      glossary: [
        { word: 'recover', translation: 'recuperar' },
        { word: 'stay up late', translation: 'ficar acordado até tarde' },
        { word: 'trouble', translation: 'dificuldade' },
        { word: 'therefore', translation: 'portanto / por isso' }
      ],
      passageTranslation: 'Dormir o suficiente todas as noites é essencial para seu corpo e mente. Quando você dorme de sete a oito horas, seu cérebro organiza memórias e seus músculos recuperam energia. Alunos que dormem bem costumam ter mais foco na aula e erram menos em provas. Em contrapartida, pessoas que vão dormir muito tarde sentem-se cansadas, estressadas e têm dificuldade para memorizar vocabulário novo. Portanto, bons hábitos de sono são tão importantes quanto alimentação saudável e exercícios.'
    },
    questions: [
      {
        id: 'r-a1-id-1',
        type: 'multiple_choice',
        questionText: 'What is the main idea of this paragraph?',
        options: [
          { id: 'A', text: 'Vocabulary tests are difficult for students.' },
          { id: 'B', text: 'Good sleep is essential for physical and mental performance.' },
          { id: 'C', text: 'Healthy food is more important than exercise.' },
          { id: 'D', text: 'Students should study only during the night.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto gira em torno de como o sono de 7 a 8 horas é essencial para o corpo, cérebro, energia e foco nos estudos.'
      },
      {
        id: 'r-a1-id-2',
        type: 'multiple_choice',
        questionText: 'According to the text, what happens when students sleep well?',
        options: [
          { id: 'A', text: 'They feel stressed in class.' },
          { id: 'B', text: 'They have better concentration and make fewer errors.' },
          { id: 'C', text: 'They forget vocabulary words quickly.' },
          { id: 'D', text: 'They do not need to study anymore.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto destaca: "Students who sleep well usually have better focus in class and make fewer mistakes on tests".'
      }
    ]
  },

  // ==========================================
  // NÍVEL A2 — BÁSICO
  // ==========================================

  // 5. Leia e compreenda (A2)
  {
    id: 'reading-a2-read-vancouver',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a2',
    topic: 'Viagens & Turismo',
    title: 'Uma Semana em Vancouver',
    description: 'Compreenda a narrativa de uma viagem no passado simples e contínuo com detalhes culturais.',
    objective: 'Extrair informações explícitas e cronológicas de um relato de viagem em inglês.',
    instructions: 'Leia o relato de férias e responda às perguntas sobre as atividades realizadas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'My Trip to Vancouver',
      genre: 'Diário de Viagem',
      estimatedReadTimeMinutes: 2,
      content: `Last October, Laura spent six days in Vancouver, Canada. It was her first time visiting North America. The weather was cooler than in her hometown, with occasional autumn rain, but the colorful orange and red maple trees across the city were breathtaking.

On Tuesday, Laura rented a bicycle and rode around the famous Stanley Park seawall. The view of the Pacific Ocean on one side and tall green trees on the other made it her favorite morning. On Thursday, she visited Granville Island Market, where she tasted fresh Canadian salmon chowder and bought handmade souvenirs for her family. She did not take a boat tour because the fog was too dense on Saturday morning. Overall, Laura loved the clean streets and friendly people in the city.`,
      glossary: [
        { word: 'breathtaking', translation: 'de tirar o fôlego / impressionante' },
        { word: 'seawall', translation: 'calçadão marítimo / dique' },
        { word: 'chowder', translation: 'sopa cremosa tradicional' },
        { word: 'fog', translation: 'neblina / nevoeiro' }
      ],
      passageTranslation: 'Em outubro passado, Laura passou seis dias em Vancouver, no Canadá. Foi sua primeira vez visitando a América do Norte. O clima estava mais frio do que em sua cidade natal, com chuvas ocasionais de outono, mas os bordos alaranjados e vermelhos por toda a cidade eram deslumbrantes. Na terça-feira, Laura alugou uma bicicleta e pedalou pelo calçadão do Stanley Park. A vista do Oceano Pacífico de um lado e árvores verdes altas do outro tornou essa a sua manhã favorita. Na quinta-feira, visitou o mercado de Granville Island, onde provou a sopa de salmão e comprou lembrancinhas feitas à mão. Ela não fez o passeio de barco porque a neblina estava densa no sábado de manhã. No geral, Laura adorou as ruas limpas e as pessoas amigáveis da cidade.'
    },
    questions: [
      {
        id: 'r-a2-rc-1',
        type: 'multiple_choice',
        questionText: 'What did Laura do on Tuesday morning in Vancouver?',
        options: [
          { id: 'A', text: 'She visited Granville Island Market.' },
          { id: 'B', text: 'She rode a rented bicycle around Stanley Park.' },
          { id: 'C', text: 'She took a scenic boat tour on the ocean.' },
          { id: 'D', text: 'She stayed inside her hotel due to rain.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto informa: "On Tuesday, Laura rented a bicycle and rode around the famous Stanley Park seawall".'
      },
      {
        id: 'r-a2-rc-2',
        type: 'multiple_choice',
        questionText: 'Why did Laura NOT take a boat tour on Saturday?',
        options: [
          { id: 'A', text: 'She had no more Canadian dollars.' },
          { id: 'B', text: 'The tickets were completely sold out.' },
          { id: 'C', text: 'The fog was too dense on Saturday morning.' },
          { id: 'D', text: 'Her bicycle was broken.' }
        ],
        correctOptionId: 'C',
        explanation: 'O texto aponta claramente: "She did not take a boat tour because the fog was too dense on Saturday morning".'
      },
      {
        id: 'r-a2-rc-3',
        type: 'multiple_choice',
        questionText: 'What season of the year was it when Laura visited Canada?',
        options: [
          { id: 'A', text: 'Winter' },
          { id: 'B', text: 'Autumn / Fall' },
          { id: 'C', text: 'Summer' },
          { id: 'D', text: 'Spring' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto cita "Last October" e "autumn rain, but the colorful orange and red maple trees", indicando o outono.'
      }
    ]
  },

  // 6. Descubra pelo contexto (A2)
  {
    id: 'reading-a2-context-airport',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a2',
    topic: 'Aeroporto & Viagens',
    title: 'Conexão no Aeroporto Internacional',
    description: 'Interprete expressões e vocabulário aeroportuário observando as circunstâncias descritas.',
    objective: 'Reconhecer termos de aviação e trânsito internacional por meio do contexto.',
    instructions: 'Leia o texto e deduza o significado das palavras destacadas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Navigating the Terminal',
      genre: 'Situação Real de Viagem',
      estimatedReadTimeMinutes: 1,
      content: `Carlos had a two-hour layover at Frankfurt Airport on his journey to Rome. When he stepped off the airplane, he looked up at the large departures monitor to locate his connecting gate. 

To his relief, the screen showed that his flight was on time and not delayed. However, because the airport was massive, he had to take a shuttle train between Terminal 1 and Terminal 2. At the security checkpoint, an officer asked travelers to place their electronic devices into separate plastic bins. Carlos followed the signs calmly and reached Gate B24 with thirty minutes to spare.`,
      glossary: [
        { word: 'layover', translation: 'escala / conexão entre voos' },
        { word: 'delayed', translation: 'atrasado' },
        { word: 'shuttle train', translation: 'trem interno de transporte entre terminais' },
        { word: 'bins', translation: 'bandejas plásticas de inspeção' }
      ],
      passageTranslation: 'Carlos tinha uma conexão de duas horas no Aeroporto de Frankfurt em sua viagem para Roma. Ao descer do avião, olhou para o grande monitor de partidas para localizar seu portão de conexão. Para seu alívio, a tela mostrava que seu voo estava no horário e não atrasado. No entanto, como o aeroporto era enorme, ele teve que pegar um trem interno entre os Terminais 1 e 2. No controle de segurança, um agente pediu aos viajantes que colocassem seus aparelhos eletrônicos em bandejas plásticas separadas. Carlos seguiu as placas calmamente e chegou ao Portão B24 com trinta minutos de folga.'
    },
    questions: [
      {
        id: 'r-a2-cc-1',
        type: 'multiple_choice',
        questionText: 'What does the word "layover" mean in the first sentence?',
        options: [
          { id: 'A', text: 'A lost baggage incident' },
          { id: 'B', text: 'A short stop between parts of a journey (conexão)' },
          { id: 'C', text: 'A medical emergency during flight' },
          { id: 'D', text: 'A ticket refund procedure' }
        ],
        correctOptionId: 'B',
        explanation: 'Carlos tinha duas horas entre o voo em que chegou e o voo seguinte para Roma, caracterizando uma conexão ("layover").'
      },
      {
        id: 'r-a2-cc-2',
        type: 'multiple_choice',
        questionText: 'In the sentence "the airport was massive", what is the meaning of "massive"?',
        options: [
          { id: 'A', text: 'Extremely large and spacious' },
          { id: 'B', text: 'Very old and dirty' },
          { id: 'C', text: 'Crowded and dangerous' },
          { id: 'D', text: 'Closed for renovation' }
        ],
        correctOptionId: 'A',
        explanation: 'O fato de precisar de um "shuttle train" entre terminais confirma que o aeroporto era gigantesco ("massive" = extremamente grande).'
      }
    ]
  },

  // 7. Interprete a mensagem (A2)
  {
    id: 'reading-a2-msg-flight',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a2',
    topic: 'Comunicação Oficial & Serviços',
    title: 'Aviso da Companhia Aérea',
    description: 'Interprete um comunicado formal sobre remarcação de voo e direitos do passageiro.',
    objective: 'Identificar instruções, horários de reagendamento e benefícios concedidos em um e-mail de serviço.',
    instructions: 'Leia a notificação formal enviada aos passageiros e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Urgent Flight Update: FL-482',
      genre: 'E-mail Formal de Companhia Aérea',
      estimatedReadTimeMinutes: 2,
      content: `Dear Passenger,

We regret to inform you that flight FL-482 from Miami (MIA) to Boston (BOS), originally scheduled for departure at 4:30 PM today, has been rescheduled due to technical maintenance on the aircraft.

Your new departure time is 7:15 PM today from Gate D12. Your assigned seats remain the same, and your checked baggage will be automatically transferred to the new aircraft.

To compensate for the inconvenience, you are entitled to a $15 meal voucher. You can redeem this voucher directly by scanning your boarding pass at any restaurant inside Concourse D. If this new time does not suit your schedule, you may change your flight online at no extra charge.

Sincerely,
Customer Care Team — Atlantic Sky Airlines`,
      glossary: [
        { word: 'scheduled', translation: 'agendado / programado' },
        { word: 'aircraft', translation: 'aeronave / avião' },
        { word: 'entitled to', translation: 'com direito a' },
        { word: 'redeem', translation: 'resgatar / utilizar' }
      ],
      passageTranslation: 'Prezado Passageiro, Lamentamos informar que o voo FL-482 de Miami para Boston, originalmente programado para partir às 16h30 de hoje, foi remarcado devido a manutenção técnica na aeronave. Seu novo horário de partida é às 19h15 hoje, a partir do Portão D12. Seus assentos continuam os mesmos e sua bagagem despachada será transferida automaticamente. Para compensar o transtorno, você tem direito a um voucher de alimentação de $15, que pode ser resgatado escaneando seu cartão de embarque nos restaurantes do saguão D. Se o novo horário não for conveniente, você pode alterar o voo online sem custo adicional.'
    },
    questions: [
      {
        id: 'r-a2-mi-1',
        type: 'multiple_choice',
        questionText: 'Why was the original flight rescheduled?',
        options: [
          { id: 'A', text: 'Because of severe snowstorms in Boston' },
          { id: 'B', text: 'Due to technical maintenance on the aircraft' },
          { id: 'C', text: 'Because the pilot arrived late' },
          { id: 'D', text: 'Due to airport security closure' }
        ],
        correctOptionId: 'B',
        explanation: 'O e-mail declara explicitamente: "has been rescheduled due to technical maintenance on the aircraft".'
      },
      {
        id: 'r-a2-mi-2',
        type: 'multiple_choice',
        questionText: 'How can passengers use the $15 meal voucher?',
        options: [
          { id: 'A', text: 'By scanning their boarding pass at Concourse D restaurants' },
          { id: 'B', text: 'By requesting cash at the check-in desk' },
          { id: 'C', text: 'By filling out a paper form after landing' },
          { id: 'D', text: 'By calling customer care on the phone' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto explica: "You can redeem this voucher directly by scanning your boarding pass at any restaurant inside Concourse D".'
      }
    ]
  },

  // 8. Identifique a ideia principal (A2)
  {
    id: 'reading-a2-idea-bilingual',
    pillar: 'reading',
    type: 'main_idea',
    level: 'a2',
    topic: 'Educação & Aprendizado',
    title: 'Os Benefícios de Aprender Outro Idioma',
    description: 'Determine a tese principal de um texto que apresenta vantagens cognitivas e profissionais.',
    objective: 'Identificar o propósito e a ideia central de um artigo de desenvolvimento pessoal.',
    instructions: 'Leia o texto e escolha a afirmação que melhor resume o ponto de vista do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Opening Doors with a Second Language',
      genre: 'Artigo de Desenvolvimento Pessoal',
      estimatedReadTimeMinutes: 2,
      content: `Learning a second language does much more than help you order food while traveling. Modern research shows that multilingual people often develop stronger problem-solving skills and better memory retention because their brains constantly practice switching between two different vocabulary and grammar systems.

In addition to cognitive advantages, knowing English creates practical professional opportunities. International companies actively look for candidates who can communicate with global teams, participate in videoconferences, and read technical manuals. Ultimately, practicing a language daily is an investment in both your intellectual agility and your future career.`,
      glossary: [
        { word: 'multilingual', translation: 'que fala vários idiomas' },
        { word: 'retention', translation: 'retenção / capacidade de memorização' },
        { word: 'switching', translation: 'alternar / trocar' },
        { word: 'agility', translation: 'agilidade / flexibilidade mental' }
      ],
      passageTranslation: 'Aprender um segundo idioma faz muito mais do que apenas ajudar você a pedir comida quando viaja. Pesquisas modernas mostram que pessoas que falam múltiplos idiomas frequentemente desenvolvem habilidades superiores de resolução de problemas e melhor memória, pois o cérebro exercita constantemente a alternância entre dois sistemas linguísticos. Além das vantagens cognitivas, saber inglês cria oportunidades profissionais práticas. No fim das contas, praticar um idioma diariamente é um investimento na sua mente e na sua carreira.'
    },
    questions: [
      {
        id: 'r-a2-id-1',
        type: 'multiple_choice',
        questionText: 'What is the primary message of the author in this text?',
        options: [
          { id: 'A', text: 'Traveling abroad is the only way to become fluent.' },
          { id: 'B', text: 'Learning another language strengthens your brain and boosts your career.' },
          { id: 'C', text: 'Grammar rules are more important than speaking practice.' },
          { id: 'D', text: 'Videoconferences are replacing traditional offices.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto estrutura dois argumentos centrais: benefícios cognitivos para o cérebro e oportunidades reais para a carreira profissional.'
      },
      {
        id: 'r-a2-id-2',
        type: 'multiple_choice',
        questionText: 'According to the author, why do multilingual brains have better memory?',
        options: [
          { id: 'A', text: 'Because they practice switching between two linguistic systems.' },
          { id: 'B', text: 'Because they read fewer technical books.' },
          { id: 'C', text: 'Because they do not need sleep.' },
          { id: 'D', text: 'Because they only study during childhood.' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto aponta: "because their brains constantly practice switching between two different vocabulary and grammar systems".'
      }
    ]
  },

  // ==========================================
  // NÍVEL B1 — INTERMEDIÁRIO
  // ==========================================

  // 9. Leia e compreenda (B1)
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

  // 10. Descubra pelo contexto (B1)
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

  // 11. Interprete a mensagem (B1)
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

  // 12. Identifique a ideia principal (B1)
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
  }
];

export function getReadingActivities(level?: string, type?: string): Activity<ReadingQuestion>[] {
  return READING_ACTIVITIES.filter((act) => {
    const matchesLevel = !level || level.toLowerCase() === 'all' || act.level.toLowerCase() === level.toLowerCase();
    const matchesType = !type || type.toLowerCase() === 'all' || act.type.toLowerCase() === type.toLowerCase();
    return matchesLevel && matchesType;
  });
}

export function getReadingActivityById(id: string): Activity<ReadingQuestion> | undefined {
  return READING_ACTIVITIES.find((a) => a.id === id);
}

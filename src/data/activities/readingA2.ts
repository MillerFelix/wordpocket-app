import { Activity, ReadingQuestion } from '../../types/activity';

export const READING_A2: Activity<ReadingQuestion>[] = [
  // 1. Leia e compreenda (A2) - Existente
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

  // 2. Leia e compreenda (A2) - Novo
  {
    id: 'reading-a2-read-bookclub',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a2',
    topic: 'Comunidade & Leitura',
    title: 'O Clube do Livro da Vizinhança',
    description: 'Compreenda um relato sobre encontros mensais de leitura entre moradores de um bairro residencial.',
    objective: 'Identificar dinâmicas de grupo, escolhas de livros e convivência comunitária.',
    instructions: 'Leia a narrativa e responda às perguntas sobre o funcionamento do clube.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Our Monthly Neighborhood Book Club',
      genre: 'Crônica Pessoal',
      estimatedReadTimeMinutes: 2,
      content: `Every third Thursday of the month, eight neighbors gather in someone's living room for our community book club. Each month, a different member hosts the session and chooses the novel we will read.

Last month, we met at Clara’s apartment to discuss a fascinating mystery novel set in the Scottish Highlands. Clara baked cinnamon scones and served hot Earl Grey tea. While some members loved the unexpected ending, others argued that the main detective acted too slowly. Even when our opinions differed, everyone listened respectfully. Next month, our group will read a collection of short travel essays chosen by Marco.`,
      glossary: [
        { word: 'gather', translation: 'reúnem-se / juntam-se' },
        { word: 'hosts', translation: 'recebe os convidados / sedia' },
        { word: 'scones', translation: 'pãezinhos tradicionais britânicos' },
        { word: 'differed', translation: 'divergiam / eram diferentes' }
      ],
      passageTranslation: 'Toda terceira quinta-feira do mês, oito vizinhos se reúnem na sala de alguém para nosso clube do livro comunitário. A cada mês, um membro diferente recebe o grupo e escolhe o romance que leremos. No mês passado, nos encontramos no apartamento de Clara para discutir um mistério fascinante ambientado nas Highlands escocesas. Clara assou scones de canela e serviu chá Earl Grey quente. Enquanto alguns adoraram o final inesperado, outros argumentaram que o detetive agiu devagar demais. Mesmo quando as opiniões divergiam, todos ouviam com respeito. No mês que vem, nosso grupo lerá uma coletânea de crônicas de viagem escolhida por Marco.'
    },
    questions: [
      {
        id: 'r-a2-bc-1',
        type: 'multiple_choice',
        questionText: 'How often does the neighborhood book club meet?',
        options: [
          { id: 'A', text: 'Every Monday evening' },
          { id: 'B', text: 'Every third Thursday of the month' },
          { id: 'C', text: 'Once a year during summer' },
          { id: 'D', text: 'Every two weeks on Saturday' }
        ],
        correctOptionId: 'B',
        explanation: 'A primeira frase informa: "Every third Thursday of the month, eight neighbors gather".'
      },
      {
        id: 'r-a2-bc-2',
        type: 'multiple_choice',
        questionText: 'What did Clara prepare for the members when hosting at her apartment?',
        options: [
          { id: 'A', text: 'Pizza and lemonade' },
          { id: 'B', text: 'Cinnamon scones and hot Earl Grey tea' },
          { id: 'C', text: 'Chocolate cake and coffee' },
          { id: 'D', text: 'Sandwiches and fruit salad' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta: "Clara baked cinnamon scones and served hot Earl Grey tea".'
      },
      {
        id: 'r-a2-bc-3',
        type: 'multiple_choice',
        questionText: 'What genre of book will the group read next month?',
        options: [
          { id: 'A', text: 'A science fiction novel' },
          { id: 'B', text: 'A collection of travel essays' },
          { id: 'C', text: 'A romantic poetry book' },
          { id: 'D', text: 'A cookbook' }
        ],
        correctOptionId: 'B',
        explanation: 'O final do texto diz: "Next month, our group will read a collection of short travel essays chosen by Marco".'
      }
    ]
  },

  // 3. Leia e compreenda (A2) - Novo
  {
    id: 'reading-a2-read-cooking-class',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a2',
    topic: 'Culinária & Aprendizado',
    title: 'A Primeira Aula de Culinária Tailandesa',
    description: 'Acompanhe a experiência prática de Felipe ao aprender a preparar Pad Thai e sopa de capim-limão.',
    objective: 'Compreender vocabulário de ingredientes, utensílios de cozinha e etapas de preparo.',
    instructions: 'Leia a narrativa e responda às perguntas sobre as etapas da receita.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Felipe First Thai Cooking Class',
      genre: 'Relato Pessoal',
      estimatedReadTimeMinutes: 2,
      content: `Last Saturday, Felipe joined a weekend cooking workshop taught by Chef Somchai at the downtown culinary institute. Felipe had always enjoyed eating Thai cuisine, but he had never tried cooking it himself.

The workshop began with an introduction to foundational herbs: lemongrass, galangal ginger, and kaffir lime leaves. Chef Somchai demonstrated how to crush the lemongrass with the side of a heavy kitchen knife to release its fragrant oils. Then, each student received their own wok pan to cook classic chicken Pad Thai. Felipe carefully stir-fried rice noodles with tofu, bean sprouts, and crushed peanuts. By one o'clock, the class sat together to taste their dishes. Felipe was thrilled that his meal tasted just like his favorite restaurant.`,
      glossary: [
        { word: 'foundational', translation: 'fundamentais / de base' },
        { word: 'crush', translation: 'amassar / esmagar' },
        { word: 'wok pan', translation: 'panela wok (redonda e funda)' },
        { word: 'stir-fried', translation: 'salteou rapidamente em fogo alto' }
      ],
      passageTranslation: 'No último sábado, Felipe participou de uma oficina de culinária com o Chef Somchai no instituto gastronômico do centro. Felipe sempre adorou comida tailandesa, mas nunca tinha tentado cozinhar sozinho. A aula começou com ervas fundamentais: capim-limão, gengibre galanga e folhas de lima kafir. O chef demonstrou como amassar o capim-limão com a lâmina de uma faca pesada para soltar os óleos aromáticos. Em seguida, cada aluno recebeu sua própria panela wok para preparar Pad Thai de frango. Felipe salteou macarrão de arroz com tofu, broto de feijão e amendoim triturado. Às treze horas, a turma se sentou junta para provar os pratos. Felipe ficou radiante porque sua comida ficou igualzinha à do restaurante favorito.'
    },
    questions: [
      {
        id: 'r-a2-cc-a1',
        type: 'multiple_choice',
        questionText: 'Why did Chef Somchai crush the lemongrass with a knife?',
        options: [
          { id: 'A', text: 'To cut it into tiny circular pieces' },
          { id: 'B', text: 'To release its fragrant natural oils' },
          { id: 'C', text: 'To remove the green outer skin' },
          { id: 'D', text: 'To soften the wooden cutting board' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto explica: "crush the lemongrass with the side of a heavy kitchen knife to release its fragrant oils".'
      },
      {
        id: 'r-a2-cc-a2',
        type: 'multiple_choice',
        questionText: 'Which dish did the students cook in their own wok pans?',
        options: [
          { id: 'A', text: 'Green chicken curry with jasmine rice' },
          { id: 'B', text: 'Classic chicken Pad Thai with noodles and peanuts' },
          { id: 'C', text: 'Steamed fish with chili paste' },
          { id: 'D', text: 'Vegetable spring rolls' }
        ],
        correctOptionId: 'B',
        explanation: 'O parágrafo afirma: "to cook classic chicken Pad Thai... stir-fried rice noodles with tofu, bean sprouts, and crushed peanuts".'
      },
      {
        id: 'r-a2-cc-a3',
        type: 'multiple_choice',
        questionText: 'How did Felipe feel about the final taste of his dish?',
        options: [
          { id: 'A', text: 'He thought it was far too spicy to eat.' },
          { id: 'B', text: 'He was disappointed by the burnt noodles.' },
          { id: 'C', text: 'He was thrilled that it tasted just like his favorite restaurant.' },
          { id: 'D', text: 'He forgot to add salt and peanuts.' }
        ],
        correctOptionId: 'C',
        explanation: 'A frase final destaca: "Felipe was thrilled that his meal tasted just like his favorite restaurant".'
      }
    ]
  },

  // 4. Leia e compreenda (A2) - Novo
  {
    id: 'reading-a2-read-train-journey',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a2',
    topic: 'Viagens & Paisagens',
    title: 'Viagem Cênica de Trem pelas Highlands',
    description: 'Leia o relato de uma viagem de trem histórica pelas montanhas e lagos da Escócia.',
    objective: 'Identificar marcos geográficos, paradas da rota e impressões visuais.',
    instructions: 'Leia a narrativa de viagem e responda às perguntas sobre o percurso.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'A Scenic Train Journey Through the Highlands',
      genre: 'Artigo de Viagem',
      estimatedReadTimeMinutes: 2,
      content: `Traveling by train through the Scottish Highlands offers some of the most memorable scenery in Europe. Last spring, Diego boarded the West Highland Line in Glasgow on a bright Tuesday morning.

As the locomotive left the city suburbs, modern buildings gave way to rolling green valleys, crystal-clear lochs, and misty mountain ridges. The most thrilling moment occurred when the train crossed the Glenfinnan Viaduct, curving gently along twenty-one stone arches high above the valley floor. Passengers leaned toward the wide windows with cameras ready. Diego spent four hours admiring the wild beauty of nature before reaching the coastal fishing town of Mallaig.`,
      glossary: [
        { word: 'scenery', translation: 'cenário / paisagem' },
        { word: 'lochs', translation: 'lagos (palavra escocesa para lake)' },
        { word: 'arches', translation: 'arcos de sustentação' },
        { word: 'coastal', translation: 'litorânea / costeira' }
      ],
      passageTranslation: 'Viajar de trem pelas Highlands escocesas oferece algumas das paisagens mais memoráveis da Europa. Na primavera passada, Diego embarcou na linha West Highland em Glasgow em uma manhã clara de terça-feira. Conforme a locomotiva deixava os subúrbios, prédios deram lugar a vales verdes ondulantes, lagos cristalinos e montanhas enevoadas. O momento mais emocionante ocorreu quando o trem cruzou o Viaduto de Glenfinnan, curvando suavemente ao longo de vinte e um arcos de pedra no alto do vale. Os passageiros se inclinaram nas janelas com câmeras a postos. Diego passou quatro horas admirando a natureza até chegar à vila costeira de Mallaig.'
    },
    questions: [
      {
        id: 'r-a2-tj-1',
        type: 'multiple_choice',
        questionText: 'Where did Diego begin his scenic train journey?',
        options: [
          { id: 'A', text: 'In London' },
          { id: 'B', text: 'In Glasgow' },
          { id: 'C', text: 'In Edinburgh' },
          { id: 'D', text: 'In Mallaig' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto afirma: "Diego boarded the West Highland Line in Glasgow on a bright Tuesday morning".'
      },
      {
        id: 'r-a2-tj-2',
        type: 'multiple_choice',
        questionText: 'What was the most thrilling moment of the train trip?',
        options: [
          { id: 'A', text: 'Crossing the Glenfinnan Viaduct along twenty-one stone arches' },
          { id: 'B', text: 'Stopping at an underground tunnel' },
          { id: 'C', text: 'Having breakfast in the dining car' },
          { id: 'D', text: 'Seeing wild deer in the city streets' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto aponta: "The most thrilling moment occurred when the train crossed the Glenfinnan Viaduct, curving gently along twenty-one stone arches".'
      },
      {
        id: 'r-a2-tj-3',
        type: 'multiple_choice',
        questionText: 'What kind of town was Diego’s final destination, Mallaig?',
        options: [
          { id: 'A', text: 'An industrial manufacturing hub' },
          { id: 'B', text: 'A coastal fishing town' },
          { id: 'C', text: 'A crowded ski resort' },
          { id: 'D', text: 'An ancient capital fortress' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase final descreve Mallaig como: "the coastal fishing town of Mallaig".'
      }
    ]
  },

  // 5. Descubra pelo contexto (A2) - Existente
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

  // 6. Descubra pelo contexto (A2) - Novo
  {
    id: 'reading-a2-context-hardware-store',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a2',
    topic: 'Casa & Reparos',
    title: 'Consertando a Torneira da Cozinha',
    description: 'Deduzir o sentido de palavras ligadas a manutenção doméstica e ferramentas.',
    objective: 'Inferir o significado de "leak" e "tighten" a partir do contexto de um reparo na pia.',
    instructions: 'Leia a situação e identifique o significado dos termos em foco.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'A Saturday DIY Plumbing Fix',
      genre: 'Situação Doméstica Prática',
      estimatedReadTimeMinutes: 1,
      content: `Early Saturday morning, Oliver noticed an annoying leak under his kitchen sink. Water was slowly dripping onto the wooden cabinet floor and forming a small puddle. 

Instead of calling an expensive professional plumber, Oliver watched a short tutorial video. He took an adjustable wrench from his toolbox to tighten the loose pipe connection. After turning the metal nut firmly clockwise, the dripping stopped completely. Oliver wiped the floor dry with a towel, feeling proud of his quick fix.`,
      glossary: [
        { word: 'leak', translation: 'vazamento' },
        { word: 'dripping', translation: 'pingando / gotejando' },
        { word: 'wrench', translation: 'chave inglesa / chave de boca' },
        { word: 'tighten', translation: 'apertar' }
      ],
      passageTranslation: 'No início da manhã de sábado, Oliver notou um vazamento chato embaixo da pia da cozinha. A água estava pingando aos poucos no chão do armário de madeira, formando uma pequena poça. Em vez de chamar um encanador caro, Oliver assistiu a um vídeo tutorial curto. Ele pegou uma chave inglesa de sua caixa de ferramentas para apertar a conexão frouxa do cano. Depois de girar a porca com firmeza no sentido horário, o gotejamento parou por completo. Oliver secou o chão com uma toalha, orgulhoso do conserto rápido.'
    },
    questions: [
      {
        id: 'r-a2-hs-1',
        type: 'multiple_choice',
        questionText: 'What does the word "leak" refer to in the first paragraph?',
        options: [
          { id: 'A', text: 'A broken electric lamp' },
          { id: 'B', text: 'An accidental escape of liquid through a crack or loose pipe (vazamento)' },
          { id: 'C', text: 'A dirty dish on the counter' },
          { id: 'D', text: 'A mouse hole in the wall' }
        ],
        correctOptionId: 'B',
        explanation: 'A água pingando no armário e formando uma poça confirma que "leak" significa vazamento de líquido.'
      },
      {
        id: 'r-a2-hs-2',
        type: 'multiple_choice',
        questionText: 'In the sentence "to tighten the loose pipe connection", what does "tighten" mean?',
        options: [
          { id: 'A', text: 'To cut the pipe into two parts' },
          { id: 'B', text: 'To fasten or make firmer so it does not move (apertar)' },
          { id: 'C', text: 'To paint with waterproof varnish' },
          { id: 'D', text: 'To replace with a plastic hose' }
        ],
        correctOptionId: 'B',
        explanation: 'O cano estava frouxo ("loose"), portanto a ação de girar com a chave foi para apertar ("tighten") e conter a água.'
      }
    ]
  },

  // 7. Descubra pelo contexto (A2) - Novo
  {
    id: 'reading-a2-context-veterinary',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a2',
    topic: 'Animais & Saúde',
    title: 'Consulta de Rotina na Clínica Veterinária',
    description: 'Deduzir termos de cuidados animais e exames a partir do contexto de uma consulta.',
    objective: 'Reconhecer vocabulário de vacinação, pesagem e cuidados preventivos com pets.',
    instructions: 'Leia a situação e determine o significado dos termos sublinhados.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Rusty Annual Vet Checkup',
      genre: 'Situação Cotidiana',
      estimatedReadTimeMinutes: 1,
      content: `Yesterday, Marina took her golden retriever, Rusty, to the animal clinic for his annual examination. As soon as they entered the waiting area, Rusty wagged his tail happily at the receptionist.

First, the veterinary technician placed Rusty on a digital scale to check his weight. Rusty weighed thirty kilograms, which was considered ideal for his breed. Next, Dr. Watson examined Rusty’s ears, listened to his heartbeat with a stethoscope, and administered his yearly rabies vaccine. The doctor smiled and confirmed that Rusty was in top condition.`,
      glossary: [
        { word: 'scale', translation: 'balança' },
        { word: 'breed', translation: 'raça animal' },
        { word: 'heartbeat', translation: 'batimento cardíaco' },
        { word: 'rabies vaccine', translation: 'vacina antirrábica' }
      ],
      passageTranslation: 'Ontem, Marina levou seu golden retriever, Rusty, à clínica veterinária para o exame anual. Assim que entraram na sala de espera, Rusty abanou o rabo alegremente para a recepcionista. Primeiro, o assistente colocou Rusty em uma balança digital para checar o peso. Rusty pesava trinta quilos, considerado ideal para sua raça. Em seguida, o Dr. Watson examinou as orelhas de Rusty, escutou o coração com um estetoscópio e aplicou a vacina antirrábica anual. O veterinário sorriu e confirmou que Rusty estava em excelente forma.'
    },
    questions: [
      {
        id: 'r-a2-vt-1',
        type: 'multiple_choice',
        questionText: 'What is a "digital scale" used for at the veterinary clinic?',
        options: [
          { id: 'A', text: 'To measure body temperature' },
          { id: 'B', text: 'To measure how heavy an animal is (pesagem)' },
          { id: 'C', text: 'To clean teeth' },
          { id: 'D', text: 'To take X-ray photographs' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta que colocaram o cão na "scale to check his weight", mostrando que "scale" é balança.'
      },
      {
        id: 'r-a2-vt-2',
        type: 'multiple_choice',
        questionText: 'What does "in top condition" mean at the end of the checkup?',
        options: [
          { id: 'A', text: 'Sick and needing urgent surgery' },
          { id: 'B', text: 'In very good health and physical state (excelente forma)' },
          { id: 'C', text: 'Asleep on the floor' },
          { id: 'D', text: 'Too aggressive to touch' }
        ],
        correctOptionId: 'B',
        explanation: 'Com peso ideal, coração saudável e vacinas em dia, "in top condition" significa estar em ótima saúde.'
      }
    ]
  },

  // 8. Descubra pelo contexto (A2) - Novo
  {
    id: 'reading-a2-context-farmers-market',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a2',
    topic: 'Alimentação Orgânica & Sustentabilidade',
    title: 'Escolhendo Produtos Orgânicos',
    description: 'Deduzir o sentido de termos de cultivo ecológico e sustentabilidade através de dicas contextuais.',
    objective: 'Reconhecer o significado de termos como "organic" e "pesticides" no contexto alimentar.',
    instructions: 'Leia o texto e selecione a melhor definição para cada termo.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Shopping for Clean Produce',
      genre: 'Artigo Curto de Consumo',
      estimatedReadTimeMinutes: 1,
      content: `At the green market, more shoppers are choosing organic strawberries and spinach over conventional fruits. Because these crops are grown without synthetic pesticides or chemical fertilizers, their soil remains fertile and natural.

Customers frequently notice that these seasonal berries taste sweeter and juicier. Even though organic produce often carries a slightly higher price tag due to labor-intensive harvesting methods, buyers believe the nutritional benefits and environmental care make it well worth the expense.`,
      glossary: [
        { word: 'crops', translation: 'plantações / colheitas' },
        { word: 'pesticides', translation: 'agrotóxicos / defensivos agrícolas' },
        { word: 'harvesting', translation: 'colheita' },
        { word: 'worth the expense', translation: 'que vale o investimento' }
      ],
      passageTranslation: 'No mercado verde, mais consumidores escolhem morangos e espinafre orgânicos em vez de frutas convencionais. Como essas plantações são cultivadas sem agrotóxicos sintéticos ou fertilizantes químicos, o solo permanece fértil e natural. Os clientes frequentemente notam que essas frutas da estação são mais doces e suculentas. Embora produtos orgânicos tenham preço ligeiramente superior devido à colheita manual, compradores acreditam que os benefícios nutricionais e o cuidado ambiental fazem valer a pena.'
    },
    questions: [
      {
        id: 'r-a2-fm-1',
        type: 'multiple_choice',
        questionText: 'According to the context, what does "organic" mean regarding food production?',
        options: [
          { id: 'A', text: 'Food imported from frozen factories' },
          { id: 'B', text: 'Food grown naturally without synthetic chemicals or artificial pesticides' },
          { id: 'C', text: 'Food made entirely of laboratory chemicals' },
          { id: 'D', text: 'Food that never spoils' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto define "organic" como colheitas cultivadas "without synthetic pesticides or chemical fertilizers".'
      },
      {
        id: 'r-a2-fm-2',
        type: 'multiple_choice',
        questionText: 'What does "pesticides" mean in farming?',
        options: [
          { id: 'A', text: 'Chemical substances used to kill insects that destroy crops (agrotóxicos)' },
          { id: 'B', text: 'Wooden crates for transport' },
          { id: 'C', text: 'Sweet syrups added to fruit' },
          { id: 'D', text: 'Seeds planted in winter' }
        ],
        correctOptionId: 'A',
        explanation: '"Pesticides" são defensivos químicos utilizados na agricultura convencional para controlar pragas e insetos.'
      }
    ]
  },

  // 9. Interprete a mensagem (A2) - Existente
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

  // 10. Interprete a mensagem (A2) - Novo
  {
    id: 'reading-a2-msg-hotel-confirmation',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a2',
    topic: 'Turismo & Hospedagem',
    title: 'Confirmação de Reserva de Hotel',
    description: 'Interprete um e-mail com confirmação de reserva, horários de check-in/out e regras de cancelamento.',
    objective: 'Identificar prazos de cancelamento sem multa, horário limite de check-in e comodidades inclusas.',
    instructions: 'Leia a confirmação de reserva do hotel e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Booking Confirmation: Pine Valley Lodge',
      genre: 'E-mail de Confirmação Hoteleira',
      estimatedReadTimeMinutes: 2,
      content: `Dear Guest (Rodrigo Lima),
Thank you for booking your stay with Pine Valley Lodge. Your reservation details are summarized below:

- Check-in: Friday, Nov 14th from 3:00 PM
- Check-out: Sunday, Nov 16th by 11:00 AM
- Room Type: Deluxe King with Mountain View
- Total Paid: $240.00 (All taxes included)

Complimentary amenities: Free high-speed Wi-Fi throughout the lodge and daily hot buffet breakfast from 7:00 AM to 10:00 AM.
Cancellation policy: You may cancel your reservation free of charge up to 48 hours prior to check-in. Cancellations within 48 hours will incur a one-night room charge.`,
      glossary: [
        { word: 'summarized', translation: 'resumidos / sintetizados' },
        { word: 'prior to', translation: 'antes de' },
        { word: 'incur', translation: 'incorrer em / acarretar cobrança' },
        { word: 'charge', translation: 'cobrança / taxa' }
      ],
      passageTranslation: 'Prezado Hóspede Rodrigo Lima, Obrigado por reservar sua estadia conosco. Detalhes: Check-in: sexta 14 de nov a partir das 15h; Check-out: domingo 16 de nov até as 11h. Quarto King Luxo com Vista para Montanha. Total pago: $240. Comodidades inclusas: Wi-Fi gratuito e buffet de café da manhã das 7h às 10h. Política de cancelamento: Cancelamento gratuito até 48 horas antes do check-in. Cancelamentos dentro das 48 horas acarretarão cobrança de uma diária.'
    },
    questions: [
      {
        id: 'r-a2-hc-1',
        type: 'multiple_choice',
        questionText: 'By what time must Rodrigo complete check-out on Sunday?',
        options: [
          { id: 'A', text: 'By 3:00 PM' },
          { id: 'B', text: 'By 11:00 AM' },
          { id: 'C', text: 'At midnight' },
          { id: 'D', text: 'By 1:30 PM' }
        ],
        correctOptionId: 'B',
        explanation: 'O e-mail diz: "Check-out: Sunday, Nov 16th by 11:00 AM".'
      },
      {
        id: 'r-a2-hc-2',
        type: 'multiple_choice',
        questionText: 'Under what condition is cancellation completely free of charge?',
        options: [
          { id: 'A', text: 'If cancelled within 24 hours of arrival' },
          { id: 'B', text: 'If cancelled at least 48 hours prior to check-in' },
          { id: 'C', text: 'Only in case of documented medical emergencies' },
          { id: 'D', text: 'Cancellations are never refunded' }
        ],
        correctOptionId: 'B',
        explanation: 'A política informa: "You may cancel your reservation free of charge up to 48 hours prior to check-in".'
      }
    ]
  },

  // 11. Interprete a mensagem (A2) - Novo
  {
    id: 'reading-a2-msg-community-event',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a2',
    topic: 'Cultura & Vizinhança',
    title: 'Feira Comunitária de Troca de Livros',
    description: 'Interprete o cartaz digital de um evento de troca gratuita de livros na praça do bairro.',
    objective: 'Reconhecer instruções sobre doação, troca, regras e horários de eventos locais.',
    instructions: 'Leia o boletim do evento comunitário e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Community Book Swap & Coffee Morning',
      genre: 'Boletim de Bairro',
      estimatedReadTimeMinutes: 1,
      content: `Attention Riverdale Residents! 📚
Join us this Saturday from 10:00 AM to 2:00 PM at the Community Center Courtyard for our Annual Book Swap!

How it works:
- Bring up to five gently used books (fiction, non-fiction, or children’s stories).
- For each book you bring, you will receive a token that can be exchanged for any book on the tables.
- All remaining books at 2:00 PM will be donated to the local children’s hospital library.

Free organic herbal tea and homemade biscuits will be served by neighborhood volunteers. Admission is free for everyone!`,
      glossary: [
        { word: 'gently used', translation: 'em bom estado de conservação' },
        { word: 'token', translation: 'ficha de troca / vale' },
        { word: 'remaining', translation: 'remanescentes / que sobrarem' },
        { word: 'admission', translation: 'entrada / acesso' }
      ],
      passageTranslation: 'Atenção Moradores de Riverdale! Juntem-se a nós neste sábado das 10h às 14h no pátio do Centro Comunitário para nossa Feira Anual de Troca de Livros! Como funciona: Traga até 5 livros em bom estado (ficção, não-ficção ou infantis). Para cada livro trazido, você recebe uma ficha que pode ser trocada por qualquer livro das mesas. Todos os livros que sobrarem às 14h serão doados à biblioteca do hospital infantil local. Chá de ervas e biscoitos caseiros serão servidos gratuitamente. Entrada franca para todos!'
    },
    questions: [
      {
        id: 'r-a2-bs-1',
        type: 'multiple_choice',
        questionText: 'How many used books can each participant bring to exchange?',
        options: [
          { id: 'A', text: 'Only one book' },
          { id: 'B', text: 'Up to five gently used books' },
          { id: 'C', text: 'An unlimited number' },
          { id: 'D', text: 'At least twenty books' }
        ],
        correctOptionId: 'B',
        explanation: 'O boletim estipula: "Bring up to five gently used books".'
      },
      {
        id: 'r-a2-bs-2',
        type: 'multiple_choice',
        questionText: 'What will happen to the remaining books at 2:00 PM?',
        options: [
          { id: 'A', text: 'They will be sold to secondhand bookstores.' },
          { id: 'B', text: 'They will be donated to the local children’s hospital library.' },
          { id: 'C', text: 'They will be returned to the original owners.' },
          { id: 'D', text: 'They will be recycled as paper.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto garante: "All remaining books at 2:00 PM will be donated to the local children’s hospital library".'
      }
    ]
  },

  // 12. Interprete a mensagem (A2) - Novo
  {
    id: 'reading-a2-msg-doctor-guidelines',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a2',
    topic: 'Saúde & Orientações Médicas',
    title: 'Instruções Pós-Consulta Médica por E-mail',
    description: 'Compreenda um e-mail de acompanhamento com orientações médicas e receitas pós-atendimento.',
    objective: 'Identificar dosagens, frequência de medicamentos e sinais de alerta.',
    instructions: 'Leia as orientações enviadas pelo médico e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'After-Visit Summary: Dr. Henderson Clinic',
      genre: 'Orientações Médicas por E-mail',
      estimatedReadTimeMinutes: 2,
      content: `Dear Patient (Lucas Ferreira),
Thank you for visiting our clinic today regarding your mild throat infection. Below are your post-consultation recovery instructions:

1. Medication: Take one amoxicillin capsule (500mg) twice daily with food for seven full days. Complete the entire course even if your symptoms disappear early.
2. Hydration: Drink plenty of warm liquids such as herbal tea with honey and clear broths. Avoid very cold drinks.
3. Rest: Refrain from strenuous physical exercise until Monday.

If your fever exceeds 38.5°C or you experience breathing difficulty, contact our urgent line immediately at (555) 998-1122.`,
      glossary: [
        { word: 'mild', translation: 'leve / moderado' },
        { word: 'course', translation: 'ciclo completo de tratamento' },
        { word: 'refrain from', translation: 'abster-se de / evitar' },
        { word: 'strenuous', translation: 'intenso / vigoroso' }
      ],
      passageTranslation: 'Prezado Paciente Lucas Ferreira, Obrigado pela consulta hoje referente à infecção leve na garganta. Abaixo estão as instruções: 1. Medicamento: Tomar uma cápsula de amoxicilina (500mg) duas vezes ao dia com alimentos por 7 dias completos. Termine todo o ciclo mesmo se os sintomas sumirem antes. 2. Hidratação: Beba bastante líquido morno (chás com mel e caldos). Evite bebidas muito geladas. 3. Repouso: Evite exercícios físicos intensos até segunda-feira. Se a febre passar de 38,5°C ou tiver falta de ar, contate a emergência imediatamente.'
    },
    questions: [
      {
        id: 'r-a2-mg-1',
        type: 'multiple_choice',
        questionText: 'Why must Lucas finish the entire seven-day antibiotic course?',
        options: [
          { id: 'A', text: 'To avoid paying extra pharmacy fees' },
          { id: 'B', text: 'To ensure complete recovery, even if symptoms vanish early' },
          { id: 'C', text: 'Because the doctor called him to check' },
          { id: 'D', text: 'Only if he has a fever' }
        ],
        correctOptionId: 'B',
        explanation: 'A instrução ressalta: "Complete the entire course even if your symptoms disappear early".'
      },
      {
        id: 'r-a2-mg-2',
        type: 'multiple_choice',
        questionText: 'What type of drinks does the doctor advise Lucas to avoid?',
        options: [
          { id: 'A', text: 'Hot herbal teas' },
          { id: 'B', text: 'Very cold drinks' },
          { id: 'C', text: 'Warm water with lemon' },
          { id: 'D', text: 'Vegetable broths' }
        ],
        correctOptionId: 'B',
        explanation: 'O item 2 indica: "Drink plenty of warm liquids... Avoid very cold drinks".'
      }
    ]
  },

  // 13. Identifique a ideia principal (A2) - Existente
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

  // 14. Identifique a ideia principal (A2) - Novo
  {
    id: 'reading-a2-idea-cooking-at-home',
    pillar: 'reading',
    type: 'main_idea',
    level: 'a2',
    topic: 'Alimentação & Finanças',
    title: 'Por Que Cozinhar em Casa Vale a Pena',
    description: 'Identifique o tema central de um texto sobre economia financeira e controle nutricional ao cozinhar em casa.',
    objective: 'Determinar o argumento principal que une saúde, finanças e criatividade pessoal.',
    instructions: 'Leia o texto e escolha a alternativa que resume a ideia principal.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Joys and Savings of Home Cooking',
      genre: 'Artigo de Estilo de Vida',
      estimatedReadTimeMinutes: 2,
      content: `While ordering takeout on food delivery apps seems effortless after a tiring workday, preparing meals in your own kitchen brings substantial financial and physical advantages. Cooking at home allows you to control exactly how much sodium, sugar, and saturated fat enters your food, resulting in lighter digestion and higher sustained energy.

Equally important is the financial benefit. Preparing a nutritious dinner of roasted vegetables, rice, and chicken costs roughly one-third of what a restaurant charges for the same meal. Furthermore, cooking can become a therapeutic ritual where you disconnect from digital screens and create delicious dishes with your own hands.`,
      glossary: [
        { word: 'takeout', translation: 'comida para viagem / delivery' },
        { word: 'substantial', translation: 'significativas / substanciais' },
        { word: 'sustained', translation: 'duradoura / sustentada' },
        { word: 'roughly', translation: 'aproximadamente / cerca de' }
      ],
      passageTranslation: 'Embora pedir delivery pareça fácil após um dia exaustivo, preparar refeições na própria cozinha traz vantagens financeiras e físicas substanciais. Cozinhar em casa permite controlar o sódio, açúcar e gordura saturada, gerando digestão mais leve e mais energia. Igualmente importante é a economia: preparar um jantar nutritivo caseiro custa cerca de um terço do valor cobrado por restaurantes. Além disso, cozinhar pode se tornar um ritual terapêutico para desconectar de telas e criar algo com as próprias mãos.'
    },
    questions: [
      {
        id: 'r-a2-ch-1',
        type: 'multiple_choice',
        questionText: 'What is the main thesis defended by the author?',
        options: [
          { id: 'A', text: 'Fast-food restaurants should be prohibited by law.' },
          { id: 'B', text: 'Cooking at home provides significant health, financial, and personal well-being benefits.' },
          { id: 'C', text: 'Vegetables are too expensive to cook regularly.' },
          { id: 'D', text: 'Digital screens are useful in the kitchen.' }
        ],
        correctOptionId: 'B',
        explanation: 'A ideia central integra saúde (controle de sal/gordura), economia financeira (um terço do preço de delivery) e relaxamento mental.'
      },
      {
        id: 'r-a2-ch-2',
        type: 'multiple_choice',
        questionText: 'How much does a home-cooked meal typically cost compared to restaurant delivery?',
        options: [
          { id: 'A', text: 'Twice as much' },
          { id: 'B', text: 'About one-third of the restaurant price' },
          { id: 'C', text: 'Exactly the same amount' },
          { id: 'D', text: 'Ten percent more' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto cita: "costs roughly one-third of what a restaurant charges for the same meal".'
      }
    ]
  },

  // 15. Identifique a ideia principal (A2) - Novo
  {
    id: 'reading-a2-idea-reading-habits',
    pillar: 'reading',
    type: 'main_idea',
    level: 'a2',
    topic: 'Hábitos & Desenvolvimento Pessoal',
    title: 'O Poder de Ler 15 Minutos Todos os Dias',
    description: 'Compreenda a ideia central sobre como o hábito constante de leitura diária transforma a linguagem e o foco.',
    objective: 'Identificar como a consistência a longo prazo supera grandes esforços esporádicos.',
    instructions: 'Leia o texto e selecione a tese que resume o artigo.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Fifteen Minutes of Daily Reading',
      genre: 'Artigo Educativo',
      estimatedReadTimeMinutes: 2,
      content: `Many people believe that building a strong reading habit requires hours of uninterrupted silence every weekend. In reality, modern psychology shows that consistency is far more powerful than intensity. Reading a book for just fifteen minutes every morning or before bedtime exposes you to over one million words per year.

This micro-habit gradually broadens your vocabulary, sharpens your attention span, and reduces anxiety by slowing down your breathing. Instead of scrolling on social media feeds during your daily commute or right before sleeping, picking up a novel or informative article trains your mind to concentrate deeply in an era of constant notifications.`,
      glossary: [
        { word: 'consistency', translation: 'consistência / regularidade' },
        { word: 'broadens', translation: 'amplia / expande' },
        { word: 'attention span', translation: 'tempo / capacidade de concentração' },
        { word: 'scrolling', translation: 'rolar a tela do celular' }
      ],
      passageTranslation: 'Muitos acreditam que criar o hábito da leitura exige horas de silêncio ininterrupto nos fins de semana. Na realidade, a psicologia moderna mostra que a consistência é muito mais poderosa do que a intensidade. Ler apenas 15 minutos por manhã ou antes de dormir expõe você a mais de um milhão de palavras por ano. Esse micro-hábito expande gradualmente seu vocabulário, melhora a concentração e reduz a ansiedade ao desacelerar a respiração. Em vez de rolar redes sociais no trajeto diário ou antes de dormir, pegar um livro treina a mente para focar profundamente.'
    },
    questions: [
      {
        id: 'r-a2-rh-1',
        type: 'multiple_choice',
        questionText: 'What is the primary message of this article?',
        options: [
          { id: 'A', text: 'Social media apps are better than printed books.' },
          { id: 'B', text: 'Small, consistent daily reading builds vocabulary and deep mental focus.' },
          { id: 'C', text: 'You should only read books on weekend afternoons.' },
          { id: 'D', text: 'Only fast readers can benefit from books.' }
        ],
        correctOptionId: 'B',
        explanation: 'O argumento principal defende que 15 minutos diários regulares são mais eficazes do que ler muito esporadicamente, expandindo vocabulário e foco.'
      },
      {
        id: 'r-a2-rh-2',
        type: 'multiple_choice',
        questionText: 'Approximately how many words are readers exposed to by reading 15 minutes a day for a year?',
        options: [
          { id: 'A', text: 'Fewer than ten thousand words' },
          { id: 'B', text: 'Over one million words' },
          { id: 'C', text: 'Exactly one hundred words' },
          { id: 'D', text: 'Fifty thousand words' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta expressamente: "exposes you to over one million words per year".'
      }
    ]
  }
];

import { Activity, ReadingQuestion } from '../../types/activity';

export const READING_A1: Activity<ReadingQuestion>[] = [
  // 1. Leia e compreenda (A1) - Existente
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

  // 2. Leia e compreenda (A1) - Novo
  {
    id: 'reading-a1-read-park-picnic',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a1',
    topic: 'Família & Lazer',
    title: 'Um Piquenique de Domingo no Parque',
    description: 'Leia uma narrativa simples sobre uma tarde ensolarada em família com piquenique e brincadeiras.',
    objective: 'Identificar participantes, comidas e atividades ao ar livre em linguagem básica.',
    instructions: 'Leia a história e responda às perguntas sobre os fatos relatados.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Sunday Picnic in Sunny Park',
      genre: 'Narrativa Curta',
      estimatedReadTimeMinutes: 1,
      content: `Last Sunday was warm and clear. Elena and her younger brother Tom went to Oakwood Park with their parents. They found a quiet spot under a tall oak tree and spread a large red blanket on the green grass.

Elena’s mother prepared tuna sandwiches, sliced watermelon, and cold lemonade. After eating lunch, Tom played soccer with other children near the fountain, while Elena sat on the blanket and read her favorite comic book. At four o'clock in the afternoon, they packed their basket and walked home happily.`,
      glossary: [
        { word: 'spot', translation: 'lugar / ponto' },
        { word: 'blanket', translation: 'toalha / cobertor' },
        { word: 'sliced', translation: 'fatiada / cortada' },
        { word: 'fountain', translation: 'chafariz / fonte' }
      ],
      passageTranslation: 'No domingo passado o clima estava quente e límpido. Elena e seu irmão mais novo Tom foram ao Oakwood Park com os pais. Encontraram um lugar tranquilo embaixo de um carvalho alto e estenderam uma toalha vermelha grande na grama verde. A mãe de Elena preparou sanduíches de atum, melancia fatiada e limonada gelada. Depois de almoçar, Tom jogou futebol com outras crianças perto do chafariz, enquanto Elena sentou na toalha e leu seu gibi favorito. Às quatro da tarde, guardaram a cesta e caminharam para casa felizes.'
    },
    questions: [
      {
        id: 'r-a1-pp-1',
        type: 'multiple_choice',
        questionText: 'Where did the family spread their red blanket?',
        options: [
          { id: 'A', text: 'Next to the parking lot' },
          { id: 'B', text: 'Under a tall oak tree on the grass' },
          { id: 'C', text: 'Inside the park cafe' },
          { id: 'D', text: 'On a wooden bench by the river' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto descreve: "They found a quiet spot under a tall oak tree and spread a large red blanket on the green grass".'
      },
      {
        id: 'r-a1-pp-2',
        type: 'multiple_choice',
        questionText: 'What did Tom do after lunch?',
        options: [
          { id: 'A', text: 'He played soccer near the fountain.' },
          { id: 'B', text: 'He swam in the lake.' },
          { id: 'C', text: 'He went to sleep on the grass.' },
          { id: 'D', text: 'He rode his bicycle home.' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto informa: "Tom played soccer with other children near the fountain".'
      },
      {
        id: 'r-a1-pp-3',
        type: 'multiple_choice',
        questionText: 'What time did the family pack their basket and walk home?',
        options: [
          { id: 'A', text: 'At two o\'clock' },
          { id: 'B', text: 'At midday' },
          { id: 'C', text: 'At four o\'clock in the afternoon' },
          { id: 'D', text: 'At seven in the evening' }
        ],
        correctOptionId: 'C',
        explanation: 'O parágrafo final confirma: "At four o\'clock in the afternoon, they packed their basket and walked home happily".'
      }
    ]
  },

  // 3. Leia e compreenda (A1) - Novo
  {
    id: 'reading-a1-read-cat-milo',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a1',
    topic: 'Animais de Estimação & Casa',
    title: 'O Gato Milo e a Tarde Chuvosa',
    description: 'Acompanhe os hábitos preguiçosos e curiosos de um gato em um dia de chuva.',
    objective: 'Compreender descrições simples de comportamento animal e ambientes domésticos.',
    instructions: 'Leia com atenção e selecione a resposta correta para cada pergunta.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Milo the Cat on a Rainy Day',
      genre: 'Narrativa Simples',
      estimatedReadTimeMinutes: 1,
      content: `Milo is a friendly orange cat with bright green eyes. He lives in a cozy apartment with his owner, Clara. When it rains outside, Milo does not like to stay near the open balcony because he dislikes wet paws.

Instead, his favorite spot on rainy afternoons is the soft yellow cushion next to the radiator. He curls into a small ball and purrs gently. Whenever Clara enters the kitchen to pour a glass of milk, Milo wakes up immediately and runs toward his silver bowl, waiting for his afternoon treat.`,
      glossary: [
        { word: 'cozy', translation: 'aconchegante' },
        { word: 'paws', translation: 'patas de animal' },
        { word: 'cushion', translation: 'almofada' },
        { word: 'purrs', translation: 'ronrona (som de gato feliz)' }
      ],
      passageTranslation: 'Milo é um gato laranja amigável com olhos verdes brilhantes. Ele mora em um apartamento aconchegante com sua dona, Clara. Quando chove lá fora, Milo não gosta de ficar perto da varanda aberta porque detesta patas molhadas. Em vez disso, seu lugar favorito nas tardes chuvosas é a almofada amarela macia ao lado do aquecedor. Ele se enrola em uma bolinha e ronrona suavemente. Sempre que Clara entra na cozinha para colocar um copo de leite, Milo acorda na hora e corre em direção à sua tigela prateada, esperando seu petisco da tarde.'
    },
    questions: [
      {
        id: 'r-a1-cm-1',
        type: 'multiple_choice',
        questionText: 'What color is Milo’s fur and eyes?',
        options: [
          { id: 'A', text: 'Black fur and brown eyes' },
          { id: 'B', text: 'Orange fur and green eyes' },
          { id: 'C', text: 'White fur and blue eyes' },
          { id: 'D', text: 'Grey fur and yellow eyes' }
        ],
        correctOptionId: 'B',
        explanation: 'A primeira frase diz: "Milo is a friendly orange cat with bright green eyes".'
      },
      {
        id: 'r-a1-cm-2',
        type: 'multiple_choice',
        questionText: 'Where is Milo’s favorite resting spot when it rains?',
        options: [
          { id: 'A', text: 'On top of Clara\'s laptop keyboard' },
          { id: 'B', text: 'Inside the bathroom bathtub' },
          { id: 'C', text: 'On the soft yellow cushion next to the radiator' },
          { id: 'D', text: 'Underneath the kitchen stove' }
        ],
        correctOptionId: 'C',
        explanation: 'O texto aponta: "his favorite spot on rainy afternoons is the soft yellow cushion next to the radiator".'
      },
      {
        id: 'r-a1-cm-3',
        type: 'multiple_choice',
        questionText: 'What does Milo do when Clara goes to the kitchen?',
        options: [
          { id: 'A', text: 'He hides under the bed.' },
          { id: 'B', text: 'He wakes up and runs to his silver bowl.' },
          { id: 'C', text: 'He continues sleeping without moving.' },
          { id: 'D', text: 'He jumps out of the window.' }
        ],
        correctOptionId: 'B',
        explanation: 'De acordo com o texto: "Milo wakes up immediately and runs toward his silver bowl".'
      }
    ]
  },

  // 4. Leia e compreenda (A1) - Novo
  {
    id: 'reading-a1-read-saturday-market',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'a1',
    topic: 'Alimentação & Bairro',
    title: 'Manhã de Sábado na Feira de Rua',
    description: 'Descubra a atmosfera da feira livre matinal com frutas frescas, flores e música de rua.',
    objective: 'Reconhecer vocabulário de compras, alimentos frescos e ambientes urbanos.',
    instructions: 'Leia a descrição do mercado e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Saturday Morning at the Farmers Market',
      genre: 'Texto Descritivo',
      estimatedReadTimeMinutes: 1,
      content: `Every Saturday morning, the town square turns into a bustling farmers market. Local growers arrive before sunrise to set up colorful wooden stalls filled with fresh carrots, crisp apples, and fragrant purple lavender.

At nine o'clock, neighbors start arriving with canvas bags. Mr. Alvarez always buys fresh eggs and whole wheat bread from the baker. A street musician plays acoustic guitar near the fountain, filling the morning air with cheerful melodies. People smile, chat about the weather, and enjoy a warm cup of coffee before heading home.`,
      glossary: [
        { word: 'bustling', translation: 'movimentado / agitado' },
        { word: 'stalls', translation: 'barracas de feira' },
        { word: 'canvas bags', translation: 'sacolas ecológicas de pano' },
        { word: 'cheerful', translation: 'alegre / animado' }
      ],
      passageTranslation: 'Todo sábado de manhã, a praça da cidade se transforma em uma feira de produtores movimentada. Produtores locais chegam antes do nascer do sol para montar barracas coloridas de madeira cheias de cenouras frescas, maçãs crocantes e lavanda roxa perfumada. Às nove horas, os vizinhos começam a chegar com sacolas de pano. O Sr. Alvarez sempre compra ovos frescos e pão integral do padeiro. Um músico de rua toca violão perto da fonte, enchendo o ar da manhã com melodias alegres. As pessoas sorriem, conversam sobre o tempo e tomam um café quente antes de ir para casa.'
    },
    questions: [
      {
        id: 'r-a1-sm-1',
        type: 'multiple_choice',
        questionText: 'When does the farmers market take place?',
        options: [
          { id: 'A', text: 'Every Monday evening' },
          { id: 'B', text: 'Every Saturday morning' },
          { id: 'C', text: 'Only on holiday weekends' },
          { id: 'D', text: 'Every Wednesday afternoon' }
        ],
        correctOptionId: 'B',
        explanation: 'A primeira frase afirma: "Every Saturday morning, the town square turns into a bustling farmers market".'
      },
      {
        id: 'r-a1-sm-2',
        type: 'multiple_choice',
        questionText: 'What does Mr. Alvarez always buy at the market?',
        options: [
          { id: 'A', text: 'Fresh eggs and whole wheat bread' },
          { id: 'B', text: 'Purple lavender flowers and honey' },
          { id: 'C', text: 'Apples and chocolate cake' },
          { id: 'D', text: 'Coffee beans and milk' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto relata: "Mr. Alvarez always buys fresh eggs and whole wheat bread from the baker".'
      },
      {
        id: 'r-a1-sm-3',
        type: 'multiple_choice',
        questionText: 'What instrument does the street musician play near the fountain?',
        options: [
          { id: 'A', text: 'Violin' },
          { id: 'B', text: 'Acoustic guitar' },
          { id: 'C', text: 'Piano' },
          { id: 'D', text: 'Flute' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto menciona: "A street musician plays acoustic guitar near the fountain".'
      }
    ]
  },

  // 5. Descubra pelo contexto (A1) - Existente
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

  // 6. Descubra pelo contexto (A1) - Novo
  {
    id: 'reading-a1-context-library',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a1',
    topic: 'Educação & Estudo',
    title: 'Tarde Silenciosa na Biblioteca',
    description: 'Descubra o significado de palavras relacionadas a leitura e ambientes de estudo pelas pistas do texto.',
    objective: 'Inferir o significado de termos como "borrow" e "whisper" através do contexto da narrativa.',
    instructions: 'Leia com atenção e deduza o significado dos termos em foco.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Studying at the Community Library',
      genre: 'Situação de Estudo',
      estimatedReadTimeMinutes: 1,
      content: `Leo goes to the community library every Wednesday after school. The main hall is very quiet because visitors are asked to whisper when they speak so they do not disturb others.

Leo walks through rows of tall bookshelves until he finds two history books for his school project. Because students can borrow up to four books for two weeks with their library card, Leo takes them to the front desk. The librarian stamps the return date inside each cover.`,
      glossary: [
        { word: 'whisper', translation: 'sussurrar / falar bem baixinho' },
        { word: 'bookshelves', translation: 'estantes de livros' },
        { word: 'borrow', translation: 'pegar emprestado' },
        { word: 'stamps', translation: 'carimba' }
      ],
      passageTranslation: 'Leo vai à biblioteca comunitária toda quarta-feira depois da escola. O salão principal é muito silencioso porque os visitantes devem sussurrar ao falar para não incomodar os outros. Leo caminha pelas fileiras de estantes altas até encontrar dois livros de história para seu trabalho escolar. Como os estudantes podem pegar emprestado até quatro livros por duas semanas com a carteirinha, Leo os leva ao balcão. A bibliotecária carimba a data de devolução dentro de cada capa.'
    },
    questions: [
      {
        id: 'r-a1-cl-1',
        type: 'multiple_choice',
        questionText: 'In the sentence "visitors are asked to whisper... so they do not disturb others", what does "whisper" mean?',
        options: [
          { id: 'A', text: 'To shout loudly across the room' },
          { id: 'B', text: 'To speak very softly and quietly' },
          { id: 'C', text: 'To sing popular songs' },
          { id: 'D', text: 'To laugh without stopping' }
        ],
        correctOptionId: 'B',
        explanation: 'Como o objetivo é manter o silêncio para não atrapalhar os outros, "whisper" significa sussurrar, falar em voz bem baixa.'
      },
      {
        id: 'r-a1-cl-2',
        type: 'multiple_choice',
        questionText: 'What does the verb "borrow" mean when using a library card?',
        options: [
          { id: 'A', text: 'To buy a book permanently with cash' },
          { id: 'B', text: 'To take something with permission to return it later (pegar emprestado)' },
          { id: 'C', text: 'To write your own story inside' },
          { id: 'D', text: 'To give a present to a teacher' }
        ],
        correctOptionId: 'B',
        explanation: '"Borrow" em bibliotecas significa levar o livro temporariamente com autorização, devolvendo-o na data estipulada.'
      }
    ]
  },

  // 7. Descubra pelo contexto (A1) - Novo
  {
    id: 'reading-a1-context-bakery-smell',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a1',
    topic: 'Culinária & Sensações',
    title: 'Aromas Matinais na Padaria',
    description: 'Deduzir o sentido de adjetivos sensoriais (warm, delicious, crispy) a partir de frases contextuais.',
    objective: 'Reconhecer palavras descritivas de textura, temperatura e sabor em inglês.',
    instructions: 'Leia o texto e responda o que a palavra em destaque representa.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Fresh Bread at Sunrise',
      genre: 'Texto Sensorial',
      estimatedReadTimeMinutes: 1,
      content: `At six in the morning, the village bakery opens its doors. A wonderful aroma of fresh cinnamon and vanilla fills the entire street. 

Customers line up to buy freshly baked baguettes that have a crispy brown crust on the outside and a soft, fluffy inside. The baker takes the steaming loaves directly out of the stone oven with long wooden paddles.`,
      glossary: [
        { word: 'aroma', translation: 'aroma / cheiro agradável' },
        { word: 'crispy', translation: 'crocante' },
        { word: 'fluffy', translation: 'fofinho / macio' },
        { word: 'steaming', translation: 'fumegante / saindo fumaça' }
      ],
      passageTranslation: 'Às seis da manhã, a padaria da vila abre as portas. Um aroma maravilhoso de canela fresca e baunilha toma conta da rua toda. Os clientes fazem fila para comprar baguetes fresquinhas que têm uma casca marrom crocante por fora e um miolo macio e fofinho por dentro. O padeiro retira os pães fumegantes direto do forno de pedra com pás compridas de madeira.'
    },
    questions: [
      {
        id: 'r-a1-cb-1',
        type: 'multiple_choice',
        questionText: 'In the phrase "a crispy brown crust on the outside", what does "crispy" describe?',
        options: [
          { id: 'A', text: 'Hard, crunchy, and pleasantly breakable (crocante)' },
          { id: 'B', text: 'Wet and cold like water' },
          { id: 'C', text: 'Sweet like sugar' },
          { id: 'D', text: 'Burned completely black' }
        ],
        correctOptionId: 'A',
        explanation: 'O contraste entre a casca "crispy" por fora e o miolo "soft" por dentro indica textura crocante.'
      },
      {
        id: 'r-a1-cb-2',
        type: 'multiple_choice',
        questionText: 'What does "steaming" mean in "steaming loaves directly out of the stone oven"?',
        options: [
          { id: 'A', text: 'Very cold from the freezer' },
          { id: 'B', text: 'Hot and producing visible vapor (fumegantes)' },
          { id: 'C', text: 'Cut into tiny pieces' },
          { id: 'D', text: 'Wrapped in paper' }
        ],
        correctOptionId: 'B',
        explanation: 'Pães que acabaram de sair do forno de pedra estão quentes e soltando vapor de calor ("steaming").'
      }
    ]
  },

  // 8. Descubra pelo contexto (A1) - Novo
  {
    id: 'reading-a1-context-rainy-afternoon',
    pillar: 'reading',
    type: 'context_clue',
    level: 'a1',
    topic: 'Clima & Casa',
    title: 'Uma Tarde Aconchegante de Chuva',
    description: 'Descubra o significado de adjetivos sobre conforto e clima pelo contexto.',
    objective: 'Identificar adjetivos como "chilly" e "cozy" através das ações dos personagens.',
    instructions: 'Leia a cena e deduza o significado das palavras destacadas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Staying Warm Indoors',
      genre: 'Cena Cotidiana',
      estimatedReadTimeMinutes: 1,
      content: `Outside, the autumn wind was chilly, making people pull their coats tight and walk quickly. Inside the living room, however, it felt warm and cozy. 

Maya lit a scented candle on the coffee table, put on thick wool socks, and settled into the armchair with a hot cup of chamomile tea. Listening to the raindrops against the glass window made her feel peaceful and relaxed.`,
      glossary: [
        { word: 'chilly', translation: 'frio / gelado' },
        { word: 'cozy', translation: 'aconchegante / acolhedor' },
        { word: 'scented', translation: 'perfumada' },
        { word: 'armchair', translation: 'poltrona' }
      ],
      passageTranslation: 'Lá fora, o vento de outono estava gelado, fazendo as pessoas fecharem bem os casacos e caminharem depressa. Dentro da sala de estar, no entanto, o ambiente estava quente e aconchegante. Maya acendeu uma vela perfumada na mesa de centro, calçou meias grossas de lã e acomodou-se na poltrona com uma xícara quente de chá de camomila. Ouvir os pingos de chuva no vidro da janela a fazia se sentir em paz e relaxada.'
    },
    questions: [
      {
        id: 'r-a1-cr-1',
        type: 'multiple_choice',
        questionText: 'What does the word "chilly" mean in the first sentence?',
        options: [
          { id: 'A', text: 'Warm and sunny' },
          { id: 'B', text: 'Cold and crisp (gelado/friozinho)' },
          { id: 'C', text: 'Extremely loud' },
          { id: 'D', text: 'Dirty and dusty' }
        ],
        correctOptionId: 'B',
        explanation: 'O fato de as pessoas fecharem os casacos e andarem depressa por causa do vento de outono mostra que "chilly" significa frio.'
      },
      {
        id: 'r-a1-cr-2',
        type: 'multiple_choice',
        questionText: 'In the sentence "it felt warm and cozy", what does "cozy" mean?',
        options: [
          { id: 'A', text: 'Crowded and dangerous' },
          { id: 'B', text: 'Comfortable, pleasant, and warm (aconchegante)' },
          { id: 'C', text: 'Dark and scary' },
          { id: 'D', text: 'Messy and untidy' }
        ],
        correctOptionId: 'B',
        explanation: 'Com a vela acesa, meias quentinhas e chá, "cozy" indica uma atmosfera de acolhimento e conforto.'
      }
    ]
  },

  // 9. Interprete a mensagem (A1) - Existente
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

  // 10. Interprete a mensagem (A1) - Novo
  {
    id: 'reading-a1-msg-dentist',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a1',
    topic: 'Saúde & Compromissos',
    title: 'Lembrete de Consulta Odontológica por SMS',
    description: 'Interprete uma mensagem de texto curta enviada por uma clínica odontológica.',
    objective: 'Identificar data, horário, orientações prévias e como reagendar consultas.',
    instructions: 'Leia a notificação por SMS e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Automated SMS from Smile Dental Care',
      genre: 'Mensagem de Texto (SMS Automático)',
      estimatedReadTimeMinutes: 1,
      content: `From: Smile Dental Care
To: Mariana Souza
Date: Wednesday, 10:00 AM

"Hello Mariana! This is a reminder of your routine dental checkup tomorrow, Thursday, at 2:30 PM with Dr. Roberts. 

Please arrive 10 minutes early to update your patient information. If you need to cancel or reschedule, please reply 'CHANGE' or call us at (555) 234-5678 at least 2 hours before your appointment. See you tomorrow!"`,
      glossary: [
        { word: 'checkup', translation: 'consulta de rotina / revisão' },
        { word: 'appointment', translation: 'consulta agendada / compromisso' },
        { word: 'reschedule', translation: 'reagendar / mudar a data' },
        { word: 'at least', translation: 'pelo menos / no mínimo' }
      ],
      passageTranslation: 'Olá Mariana! Este é um lembrete da sua consulta dentária de rotina amanhã, quinta-feira, às 14h30 com o Dr. Roberts. Por favor chegue 10 minutos mais cedo para atualizar seus dados de paciente. Se precisar cancelar ou reagendar, responda "CHANGE" ou ligue para (555) 234-5678 pelo menos 2 horas antes da consulta. Até amanhã!'
    },
    questions: [
      {
        id: 'r-a1-md-1',
        type: 'multiple_choice',
        questionText: 'When is Mariana’s dental checkup scheduled?',
        options: [
          { id: 'A', text: 'Wednesday at 10:00 AM' },
          { id: 'B', text: 'Thursday at 2:30 PM' },
          { id: 'C', text: 'Friday at 2:30 PM' },
          { id: 'D', text: 'Thursday at 10:00 AM' }
        ],
        correctOptionId: 'B',
        explanation: 'A mensagem informa: "tomorrow, Thursday, at 2:30 PM with Dr. Roberts".'
      },
      {
        id: 'r-a1-md-2',
        type: 'multiple_choice',
        questionText: 'What should Mariana do if she cannot attend the appointment?',
        options: [
          { id: 'A', text: 'Ignore the message' },
          { id: 'B', text: 'Reply "CHANGE" or call the clinic at least 2 hours before' },
          { id: 'C', text: 'Send an email after the weekend' },
          { id: 'D', text: 'Pay a penalty fee online' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto orienta: "If you need to cancel or reschedule, please reply \'CHANGE\' or call us... at least 2 hours before".'
      }
    ]
  },

  // 11. Interprete a mensagem (A1) - Novo
  {
    id: 'reading-a1-msg-lunch-invite',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a1',
    topic: 'Trabalho & Social',
    title: 'Convite para Almoço no Chat do Trabalho',
    description: 'Compreenda uma mensagem informal de um colega de equipe combinando almoço fora do escritório.',
    objective: 'Identificar restaurante escolhido, horário de encontro e cardápio sugerido.',
    instructions: 'Leia a mensagem do chat interno e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Slack Message from Gabriel',
      genre: 'Chat Interno de Trabalho',
      estimatedReadTimeMinutes: 1,
      content: `From: Gabriel Lima
To: Team Chat
Date: Tuesday, 11:30 AM

"Hey team! A new Mexican taco restaurant just opened on Green Street, two blocks from our building. They have a $10 lunch special with two tacos, guacamole, and a drink. 

A few of us are walking there at 12:15 PM today. Let me know if you would like to join us so we can grab a big table together!"`,
      glossary: [
        { word: 'blocks', translation: 'quadras / quarteirões' },
        { word: 'lunch special', translation: 'prato executivo / combo especial de almoço' },
        { word: 'join us', translation: 'juntar-se a nós / ir junto' }
      ],
      passageTranslation: 'Oi equipe! Um restaurante mexicano novo acabou de abrir na Green Street, a duas quadras do nosso prédio. Eles têm um combo de almoço de $10 com dois tacos, guacamole e bebida. Alguns de nós vão a pé para lá às 12h15 hoje. Me avisem se quiserem vir junto para pegarmos uma mesa grande!'
    },
    questions: [
      {
        id: 'r-a1-ml-1',
        type: 'multiple_choice',
        questionText: 'What kind of food does the new restaurant serve?',
        options: [
          { id: 'A', text: 'Italian pizza' },
          { id: 'B', text: 'Japanese sushi' },
          { id: 'C', text: 'Mexican tacos and guacamole' },
          { id: 'D', text: 'Hamburgers and french fries' }
        ],
        correctOptionId: 'C',
        explanation: 'Gabriel escreve: "A new Mexican taco restaurant just opened... with two tacos, guacamole, and a drink".'
      },
      {
        id: 'r-a1-ml-2',
        type: 'multiple_choice',
        questionText: 'What time is the group leaving the office to walk there?',
        options: [
          { id: 'A', text: 'At 11:30 AM' },
          { id: 'B', text: 'At 12:15 PM' },
          { id: 'C', text: 'At 1:00 PM' },
          { id: 'D', text: 'At 12:45 PM' }
        ],
        correctOptionId: 'B',
        explanation: 'A mensagem avisa: "A few of us are walking there at 12:15 PM today".'
      }
    ]
  },

  // 12. Interprete a mensagem (A1) - Novo
  {
    id: 'reading-a1-msg-package-delivery',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'a1',
    topic: 'Serviços & Encomendas',
    title: 'Aviso de Encomenda na Portaria do Prédio',
    description: 'Interprete um aviso enviado pela administração do condomínio sobre um pacote entregue.',
    objective: 'Compreender instruções de retirada de encomendas, horários e documentos exigidos.',
    instructions: 'Leia o comunicado do condomínio e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Building Front Desk Notification',
      genre: 'Aviso de Condomínio',
      estimatedReadTimeMinutes: 1,
      content: `To: Resident — Apt 304 (Julia Ramos)
From: Front Desk Concierge
Subject: Package Delivery Notice

"Dear Resident,
A courier delivery package from BookStore Online arrived for you today at 2:00 PM. The box is stored securely in the parcel room.

You can pick up your package at the front desk any time between 8:00 AM and 10:00 PM. Please present your apartment key or photo ID when collecting it. Thank you!"`,
      glossary: [
        { word: 'concierge', translation: 'porteiro / recepcionista do prédio' },
        { word: 'parcel room', translation: 'sala de encomendas' },
        { word: 'pick up / collecting', translation: 'retirar / pegar' }
      ],
      passageTranslation: 'Prezada Moradora, Um pacote de entrega da BookStore Online chegou para você hoje às 14h. A caixa está guardada em segurança na sala de encomendas. Você pode retirar seu pacote na portaria a qualquer momento entre 8h e 22h. Por favor apresente a chave do apartamento ou documento com foto ao retirar. Obrigado!'
    },
    questions: [
      {
        id: 'r-a1-mpd-1',
        type: 'multiple_choice',
        questionText: 'What arrived for Julia at the building front desk?',
        options: [
          { id: 'A', text: 'A letter from the bank' },
          { id: 'B', text: 'A package from BookStore Online' },
          { id: 'C', text: 'Grocery shopping bags' },
          { id: 'D', text: 'A monthly utility bill' }
        ],
        correctOptionId: 'B',
        explanation: 'O aviso informa: "A courier delivery package from BookStore Online arrived for you today".'
      },
      {
        id: 'r-a1-mpd-2',
        type: 'multiple_choice',
        questionText: 'What does Julia need to show to collect her package?',
        options: [
          { id: 'A', text: 'A cash payment receipt' },
          { id: 'B', text: 'Her apartment key or a photo ID' },
          { id: 'C', text: 'A signed letter from her landlord' },
          { id: 'D', text: 'The original order invoice' }
        ],
        correctOptionId: 'B',
        explanation: 'A instrução afirma: "Please present your apartment key or photo ID when collecting it".'
      }
    ]
  },

  // 13. Identifique a ideia principal (A1) - Existente
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

  // 14. Identifique a ideia principal (A1) - Novo
  {
    id: 'reading-a1-idea-drinking-water',
    pillar: 'reading',
    type: 'main_idea',
    level: 'a1',
    topic: 'Saúde & Bem-Estar',
    title: 'Por Que Beber Água é Vital no Dia a Dia',
    description: 'Identifique o argumento central sobre a importância da hidratação diária para o organismo.',
    objective: 'Reconhecer a ideia central e diferenciar dos exemplos de suporte em textos informativos.',
    instructions: 'Leia o texto informativo e identifique a mensagem principal.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Simple Habit of Drinking Water',
      genre: 'Artigo de Saúde Curto',
      estimatedReadTimeMinutes: 1,
      content: `Drinking enough water throughout the day is one of the easiest ways to keep your body healthy. Water helps your organs work properly, keeps your skin clear, and prevents headaches caused by dehydration. 

Many people feel sluggish or tired in the afternoon simply because they forgot to drink water after lunch. Keeping a reusable bottle at your desk reminds you to sip regularly. Making hydration a daily priority boosts both your energy and concentration.`,
      glossary: [
        { word: 'throughout', translation: 'ao longo de / durante todo' },
        { word: 'sluggish', translation: 'lento / sem energia' },
        { word: 'sip', translation: 'dar pequenos goles' },
        { word: 'boosts', translation: 'aumenta / impulsiona' }
      ],
      passageTranslation: 'Beber água suficiente ao longo do dia é uma das maneiras mais fáceis de manter o corpo saudável. A água ajuda os órgãos a funcionarem bem, mantém a pele limpa e previne dores de cabeça causadas por desidratação. Muitas pessoas sentem-se indispostas ou cansadas à tarde simplesmente porque esqueceram de beber água após o almoço. Manter uma garrafinha na mesa ajuda a dar pequenos goles com frequência. Fazer da hidratação uma prioridade aumenta sua energia e concentração.'
    },
    questions: [
      {
        id: 'r-a1-dw-1',
        type: 'multiple_choice',
        questionText: 'What is the main message of this article?',
        options: [
          { id: 'A', text: 'Afternoon tiredness is impossible to avoid.' },
          { id: 'B', text: 'Drinking water regularly is essential for body health and energy.' },
          { id: 'C', text: 'Reusable water bottles are very expensive.' },
          { id: 'D', text: 'People should drink water only in the morning.' }
        ],
        correctOptionId: 'B',
        explanation: 'O parágrafo defende que a hidratação diária previne dores de cabeça, melhora a energia e a saúde do corpo.'
      },
      {
        id: 'r-a1-dw-2',
        type: 'multiple_choice',
        questionText: 'According to the text, why do many people feel tired in the afternoon?',
        options: [
          { id: 'A', text: 'Because they ate too much salad' },
          { id: 'B', text: 'Because they forgot to hydrate and drink water' },
          { id: 'C', text: 'Because the weather is too cold' },
          { id: 'D', text: 'Because they worked without chairs' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta: "Many people feel sluggish or tired in the afternoon simply because they forgot to drink water after lunch".'
      }
    ]
  },

  // 15. Identifique a ideia principal (A1) - Novo
  {
    id: 'reading-a1-idea-daily-walking',
    pillar: 'reading',
    type: 'main_idea',
    level: 'a1',
    topic: 'Exercício & Rotina',
    title: 'Caminhadas Diárias: Exercício Acessível',
    description: 'Compreenda a ideia central de um texto sobre como caminhar 20 minutos por dia transforma a qualidade de vida.',
    objective: 'Identificar a tese principal de que pequenos hábitos saudáveis são acessíveis e eficazes.',
    instructions: 'Leia o texto e escolha a afirmação que resume o ponto de vista do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Walking for Daily Fitness',
      genre: 'Artigo de Estilo de Vida',
      estimatedReadTimeMinutes: 1,
      content: `You do not need expensive gym equipment or complicated training programs to stay in shape. A simple twenty-minute walk each day provides incredible benefits for people of all ages. 

Walking in a park or around your neighborhood strengthens your heart, improves blood circulation, and lowers daily stress levels. Furthermore, getting outside into the fresh air gives you time to clear your mind after sitting at a desk. Starting with a short daily walk is a realistic and enjoyable step toward a healthier lifestyle.`,
      glossary: [
        { word: 'gym equipment', translation: 'aparelhos de academia' },
        { word: 'strengthens', translation: 'fortalece' },
        { word: 'lowers', translation: 'diminui / reduz' },
        { word: 'clear your mind', translation: 'arejar / clarear a mente' }
      ],
      passageTranslation: 'Você não precisa de aparelhos caros de academia nem de programas complicados de treino para ficar em forma. Uma simples caminhada de vinte minutos por dia traz benefícios incríveis para pessoas de todas as idades. Caminhar em um parque ou no seu bairro fortalece o coração, melhora a circulação e reduz os níveis de estresse. Além disso, sair ao ar livre dá tempo para arejar a mente depois de passar o dia sentado. Começar com uma caminhada diária curta é um passo realista e agradável para um estilo de vida mais saudável.'
    },
    questions: [
      {
        id: 'r-a1-wk-1',
        type: 'multiple_choice',
        questionText: 'What is the primary thesis of the text?',
        options: [
          { id: 'A', text: 'Gym memberships are mandatory to be healthy.' },
          { id: 'B', text: 'A simple daily walk is an accessible and effective way to improve health.' },
          { id: 'C', text: 'Running marathons is better than walking.' },
          { id: 'D', text: 'People should avoid walking in city neighborhoods.' }
        ],
        correctOptionId: 'B',
        explanation: 'A ideia central defendida é que caminhar 20 minutos diariamente é acessível, não exige equipamentos caros e melhora muito a saúde física e mental.'
      },
      {
        id: 'r-a1-wk-2',
        type: 'multiple_choice',
        questionText: 'What mental benefit of walking outside is mentioned in the text?',
        options: [
          { id: 'A', text: 'It helps you memorize numbers faster.' },
          { id: 'B', text: 'It gives you time to clear your mind and lower stress.' },
          { id: 'C', text: 'It makes you forget your homework.' },
          { id: 'D', text: 'It eliminates the need for sleep.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto cita: "lowers daily stress levels... gives you time to clear your mind after sitting at a desk".'
      }
    ]
  }
];

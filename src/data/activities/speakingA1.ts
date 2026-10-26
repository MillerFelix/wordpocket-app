import { Activity, SpeakingQuestion } from '../../types/activity';

export const SPEAKING_A1: Activity<SpeakingQuestion>[] = [
  // 1. Ouça e imite (A1) - Existente [Index 0]
  {
    id: 'speaking-a1-shadow-greetings',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a1',
    topic: 'Saudações & Boas Maneiras',
    title: 'Cumprimentos e Cortesia no Dia a Dia',
    description: 'Ouça o áudio modelo em inglês com fala pausada e clara, grave sua própria voz e compare a entonação.',
    objective: 'Praticar pronúncia, sílaba tônica e entonação amigável em saudações cotidianas.',
    instructions: 'Ouça o modelo, preste atenção no ritmo e grave sua voz repetindo a frase com naturalidade.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Encontros casuais e cumprimentos corteses',
      checklist: [
        'Articulação clara de cada palavra',
        'Entonação amigável e ascendente nas perguntas',
        'Pausa adequada entre as orações'
      ]
    },
    questions: [
      {
        id: 's-a1-g-1',
        type: 'speaking_item',
        itemTitle: 'Cumprimento Matinal',
        contextScenario: 'Diga bom dia a um colega de classe com energia e simpatia.',
        modelAudioText: 'Good morning! How are you doing today?',
        speechRate: 0.85,
        targetPhrase: 'Good morning! How are you doing today?',
        phoneticFocus: 'Ênfase em "Good" e "toDAY", com ligação suave em "How are you".',
        pronunciationTip: 'Evite enfatizar o "ing" com força. O ritmo soa como "How-ya doing to-DAY?".',
        translation: 'Bom dia! Como você está hoje?',
        explanation: 'Cumprimento clássico em inglês. A entonação sobe suavemente ao final da pergunta.'
      },
      {
        id: 's-a1-g-2',
        type: 'speaking_item',
        itemTitle: 'Pedindo Ajuda com Educação',
        contextScenario: 'Chame a atenção de alguém educadamente para pedir auxílio.',
        modelAudioText: 'Excuse me, could you help me please?',
        speechRate: 0.85,
        targetPhrase: 'Excuse me, could you help me please?',
        phoneticFocus: 'Articulação de "ex-CUSE me" com "c" suave e /z/ sonoro.',
        pronunciationTip: 'Em "could you", o "d" e o "y" se conectam naturalmente, soando quase como "could-ju".',
        translation: 'Com licença, você poderia me ajudar, por favor?',
        explanation: 'Fórmula de cortesia universal. "Could you" é mais gentil e natural do que "can you".'
      },
      {
        id: 's-a1-g-3',
        type: 'speaking_item',
        itemTitle: 'Agradecimento e Despedida',
        contextScenario: 'Agradeça pelo suporte recebido e deseje um ótimo dia.',
        modelAudioText: 'Thank you very much. Have a wonderful day!',
        speechRate: 0.88,
        targetPhrase: 'Thank you very much. Have a wonderful day!',
        phoneticFocus: 'Som do "TH" desvozeado (/θ/) com a ponta da língua levemente entre os dentes.',
        pronunciationTip: 'Conecte "Have a" como "ha-va". A palavra "wonderful" tem a tônica na primeira sílaba: "WON-der-ful".',
        translation: 'Muito obrigado. Tenha um dia maravilhoso!',
        explanation: 'Expressão amigável e simpática para encerrar interações com atendentes ou amigos.'
      }
    ]
  },

  // 2. Treino de sons (A1) - Existente [Index 1]
  {
    id: 'speaking-a1-sound-vowels',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a1',
    topic: 'Pares Mínimos & Sons Básicos',
    title: 'Distinção de Vogais: /iː/ vs /ɪ/ (sheep vs ship)',
    description: 'Treine a percepção auditiva da diferença entre vogais longas e curtas, e pronuncie cada palavra em voz alta.',
    objective: 'Superar a dificuldade clássica de falantes de português em diferenciar sons de "i" longo e relaxado.',
    instructions: 'Ouça o áudio, identifique a palavra falada no teste de percepção e em seguida grave a frase modelo.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Laboratório de pronúncia de vogais fundamentais',
      focusSound: '/iː/ (longo, lábios esticados em sorriso) vs /ɪ/ (curto, músculos relaxados)',
      checklist: [
        'Diferenciação clara entre som longo e curto',
        'Posição correta dos lábios (abertura relaxada para /ɪ/)',
        'Repetição firme da frase de treino'
      ]
    },
    questions: [
      {
        id: 's-a1-v-1',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo 1: Sit vs Seat',
        contextScenario: 'Diferença entre o verbo "sentar" (sit) e o substantivo "assento" (seat).',
        modelAudioText: 'Please sit in that seat.',
        speechRate: 0.85,
        targetPhrase: 'Please sit in that seat.',
        phoneticFocus: '/sɪt/ (curto, relaxado) vs /siːt/ (longo, sorriso)',
        pronunciationTip: 'Em português só temos o "i" longo de "seat". Para falar "sit", relaxe a língua e o maxilar, aproximando o som de um "ê" fechado.',
        translation: 'Por favor, sente-se naquele assento.',
        explanation: '"Sit" (/sɪt/) tem vogal curta; "seat" (/siːt/) tem vogal longa.',
        perceptionQuestion: {
          questionText: 'Ouça o áudio da palavra isolada e marque qual foi dita: "seat" (/siːt/) ou "sit" (/sɪt/)?',
          audioText: 'seat',
          options: [
            { id: 'A', text: 'Seat (vogal longa /iː/)' },
            { id: 'B', text: 'Sit (vogal curta /ɪ/)' },
            { id: 'C', text: 'Set (vogal aberta /e/)' },
            { id: 'D', text: 'Sat (vogal /æ/)' }
          ],
          correctOptionId: 'A',
          explanation: 'O áudio pronunciou "seat" com som longo /siːt/ e lábios em sorriso.'
        }
      },
      {
        id: 's-a1-v-2',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo 2: Ship vs Sheep',
        contextScenario: 'Diferença entre navio (ship) e ovelha (sheep).',
        modelAudioText: 'The big ship carried white sheep.',
        speechRate: 0.85,
        targetPhrase: 'The big ship carried white sheep.',
        phoneticFocus: '/ʃɪp/ (navio, curto) vs /ʃiːp/ (ovelha, longo)',
        pronunciationTip: 'Alterne conscientemente: em "ship" a vogal é rápida e relaxada; em "sheep" sustente o som de "i" por mais tempo.',
        translation: 'O grande navio transportou ovelhas brancas.',
        explanation: '"Ship" tem /ɪ/ e "sheep" tem /iː/. Essa distinção evita mal-entendidos fundamentais.',
        perceptionQuestion: {
          questionText: 'Qual das duas palavras tem o som de vogal curta e relaxada (/ɪ/)?',
          audioText: 'ship',
          options: [
            { id: 'A', text: 'Sheep (ovelha)' },
            { id: 'B', text: 'Ship (navio)' },
            { id: 'C', text: 'Shape (forma)' },
            { id: 'D', text: 'Shop (loja)' }
          ],
          correctOptionId: 'B',
          explanation: '"Ship" (/ʃɪp/) possui a vogal curta e relaxada, enquanto "sheep" (/ʃiːp/) tem a vogal longa.'
        }
      },
      {
        id: 's-a1-v-3',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo 3: Live vs Leave',
        contextScenario: 'Diferença entre morar/viver (live) e partir/sair (leave).',
        modelAudioText: 'I live in Boston, but I leave tomorrow.',
        speechRate: 0.88,
        targetPhrase: 'I live in Boston, but I leave tomorrow.',
        phoneticFocus: '/lɪv/ (morar) vs /liːv/ (partir)',
        pronunciationTip: 'Cuidado: o verbo "live" tem som curto (/lɪv/). Já "leave" tem som longo (/liːv/).',
        translation: 'Eu moro em Boston, mas parto amanhã.',
        explanation: 'Confundir "live" e "leave" é comum entre iniciantes. Praticar a frase inteira automatiza o contraste.',
        perceptionQuestion: {
          questionText: 'Na frase "Where do you live?", qual é o som correto da vogal do verbo?',
          audioText: 'live',
          options: [
            { id: 'A', text: 'Vogal longa /iː/ como em "leave"' },
            { id: 'B', text: 'Vogal curta /ɪ/ como em "live"' },
            { id: 'C', text: 'Ditongo /aɪ/ como em "alive"' },
            { id: 'D', text: 'Vogal neutra schwa /ə/' }
          ],
          correctOptionId: 'B',
          explanation: 'O verbo morar/viver pronuncia-se /lɪv/ com a vogal curta /ɪ/.'
        }
      }
    ]
  },

  // 3. Respostas rápidas (A1) - Existente [Index 2]
  {
    id: 'speaking-a1-rapid-intro',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a1',
    topic: 'Perguntas Rápidas do Cotidiano',
    title: 'Apresentação Pessoal e Origem',
    description: 'Ouça perguntas espontâneas de apresentação pessoal e responda oralmente sem traduzir mentalmente.',
    objective: 'Desenvolver a velocidade de resposta oral para perguntas básicas de interação social.',
    instructions: 'Ouça a pergunta em inglês, grave sua resposta de forma ágil e compare com os modelos sugeridos.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Conhecendo uma nova pessoa em um evento ou viagem',
      checklist: [
        'Resposta imediata sem pausas prolongadas',
        'Uso de frase completa com sujeito e verbo',
        'Pronúncia natural de contrações ("I\'m", "I live")'
      ]
    },
    questions: [
      {
        id: 's-a1-r-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Nome e Origem',
        contextScenario: 'Alguém pergunta quem você é e de onde você vem.',
        modelAudioText: 'Hi! What is your name, and where are you from?',
        speechRate: 0.88,
        targetPhrase: "Hi! My name is Lucas and I'm from Brazil.",
        sampleResponses: [
          "Hi! My name is Lucas and I'm from Brazil.",
          "Hello! I am Ana, and I come from São Paulo.",
          "Hey! I'm Carlos, from Rio de Janeiro."
        ],
        pronunciationTip: 'Use a contração "I\'m" em vez de "I am" para soar mais natural e dinâmico.',
        translation: 'Oi! Qual é o seu nome e de onde você é?',
        explanation: 'Responda com seu nome e nacionalidade ou cidade. Frases simples e diretas transmitem confiança.'
      },
      {
        id: 's-a1-r-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Atividades de Lazer',
        contextScenario: 'Alguém pergunta o que você gosta de fazer no fim de semana.',
        modelAudioText: 'What do you like to do on the weekend?',
        speechRate: 0.88,
        targetPhrase: 'I like to listen to music and spend time with my friends.',
        sampleResponses: [
          'I like to listen to music and spend time with my friends.',
          'I usually watch movies and ride my bicycle in the park.',
          'I love cooking fresh food and reading books at home.'
        ],
        pronunciationTip: 'Ligue o som: "like to" soa como "lai-tu". Não pronuncie o "e" mudo de "like".',
        translation: 'O que você gosta de fazer no final de semana?',
        explanation: 'Fale sobre 1 ou 2 hobbies simples usando o presente simples com "I like to..." ou "I love...".'
      },
      {
        id: 's-a1-r-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Prática de Idioma',
        contextScenario: 'Alguém pergunta se você estuda inglês com frequência.',
        modelAudioText: 'Do you practice English every day?',
        speechRate: 0.88,
        targetPhrase: 'Yes, I practice for fifteen minutes every day.',
        sampleResponses: [
          'Yes, I practice for fifteen minutes every day.',
          'Yes, I do! I practice on my phone every morning.',
          'I try to practice a little bit every day.'
        ],
        pronunciationTip: 'Enfatize "every day" no final. Diga "Yes, I do" para dar uma resposta mais expressiva.',
        translation: 'Você pratica inglês todos os dias?',
        explanation: 'Perguntas com "Do you...?" pedem confirmação com "Yes, I do" ou frases com frequência ("every day", "always").'
      }
    ]
  },

  // 4. Fale em situações reais (A1) - Existente [Index 3]
  {
    id: 'speaking-a1-roleplay-cafe',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'a1',
    topic: 'Cafeteria & Pedidos',
    title: 'Simulação: Fazendo um Pedido na Cafeteria',
    description: 'Participe de um diálogo interativo com o atendente de uma cafeteria, respondendo a cada turno em inglês.',
    objective: 'Simular uma compra real de bebida e lanche em inglês com pedidos, escolhas e pagamento.',
    instructions: 'Ouça o que o atendente diz, grave sua resposta oral para o objetivo indicado e avance pelos turnos.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Balcão de uma cafeteria em Londres',
      partnerRole: 'Barista / Atendente',
      userRole: 'Cliente',
      checklist: [
        'Uso de pedidos educados ("Could I have...", "I would like...")',
        'Compreensão das opções de leite e tamanho',
        'Confirmação da forma de pagamento'
      ]
    },
    questions: [
      {
        id: 's-a1-rp-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Fazendo o Pedido Principal',
        contextScenario: 'O atendente te cumprimenta. Peça um café latte médio e um muffin.',
        modelAudioText: 'Good morning! Welcome to Central Cafe. What can I get for you today?',
        speechRate: 0.88,
        targetPhrase: 'Hello! Could I please have a medium latte and a blueberry muffin?',
        sampleResponses: [
          'Hello! Could I please have a medium latte and a blueberry muffin?',
          "Hi! I'd like a medium latte and a muffin, please.",
          'Good morning. A medium latte and one muffin for me, please.'
        ],
        pronunciationTip: '"Could I please have" soa muito mais educado e nativo do que "I want". Ligue "Could I" como "cu-dai".',
        translation: 'Bom dia! Bem-vindo ao Central Cafe. O que posso preparar para você hoje?',
        explanation: 'Fazer pedidos com "Could I please have..." é a forma padrão e polida no mundo anglófono.'
      },
      {
        id: 's-a1-rp-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Escolhendo o Leite',
        contextScenario: 'O atendente pergunta a preferência de leite. Responda que prefere leite de aveia (oat milk).',
        modelAudioText: 'Sure thing! What kind of milk would you like in your latte? Whole milk or oat milk?',
        speechRate: 0.88,
        targetPhrase: 'Oat milk, please. Thank you!',
        sampleResponses: [
          'Oat milk, please. Thank you!',
          'Could you make it with oat milk, please?',
          "I'd prefer oat milk, thanks."
        ],
        pronunciationTip: 'A palavra "oat" tem som de "ôut" (/oʊt/). Não pronuncie o "a" separado.',
        translation: 'Com certeza! Que tipo de leite você prefere no seu latte? Integral ou de aveia?',
        explanation: 'Respostas simples e diretas com "please" são ideais no balcão de um café movimentado.'
      },
      {
        id: 's-a1-rp-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Pagamento',
        contextScenario: 'O atendente informa o valor ($6.50) e pergunta como você vai pagar. Responda que vai pagar com cartão.',
        modelAudioText: 'Perfect. Your total is six dollars and fifty cents. Will that be cash or card today?',
        speechRate: 0.88,
        targetPhrase: 'By card, please. Here you go!',
        sampleResponses: [
          'By card, please. Here you go!',
          "I'll pay with card, please.",
          'Card, please. Thank you!'
        ],
        pronunciationTip: '"Here you go" é a expressão natural dita ao aproximar o cartão ou entregá-lo ao atendente.',
        translation: 'Perfeito. Seu total é seis dólares e cinquenta centavos. Vai ser em dinheiro ou no cartão hoje?',
        explanation: '"By card" ou "I will pay with card" encerra a transação com segurança e naturalidade.'
      }
    ]
  },

  // 5. Ouça e imite (A1) - Novo
  {
    id: 'speaking-a1-shadow-asking-prices',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a1',
    topic: 'Compras & Preços',
    title: 'Perguntando Preços e Valores',
    description: 'Pratique a entonação correta de perguntas sobre custos e preços de produtos.',
    objective: 'Articular "How much is this?" e responder valores em dólares com clareza.',
    instructions: 'Ouça a frase modelo e repita prestando atenção na melodia da pergunta.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Perguntando preços em lojas e quiosques',
      checklist: [
        'Entonação correta em perguntas com "How much"',
        'Pronúncia clara dos valores numéricos',
        'Uso educado de "please"'
      ]
    },
    questions: [
      {
        id: 's-a1-ap-1',
        type: 'speaking_item',
        itemTitle: 'Perguntando o Preço de um Item',
        contextScenario: 'Aponte para uma garrafa de água ou lanche e pergunte o valor ao atendente.',
        modelAudioText: 'Excuse me, how much is this bottle of water, please?',
        speechRate: 0.85,
        targetPhrase: 'Excuse me, how much is this bottle of water, please?',
        phoneticFocus: 'Ligue "how much is" como uma unidade contínua: "how-mu-chis".',
        pronunciationTip: 'Em inglês americano, a palavra "bottle" soa suave como "bó-del" com flap T.',
        translation: 'Com licença, quanto custa esta garrafa de água, por favor?',
        explanation: 'Fórmula essencial em qualquer viagem para perguntar o valor de produtos.'
      },
      {
        id: 's-a1-ap-2',
        type: 'speaking_item',
        itemTitle: 'Pagamento e Troco',
        contextScenario: 'Diga que vai pagar com uma nota de vinte dólares.',
        modelAudioText: 'Here is a twenty-dollar bill. Keep the change, please.',
        speechRate: 0.88,
        targetPhrase: 'Here is a twenty-dollar bill. Keep the change, please.',
        phoneticFocus: 'Ênfase em "twenty-dollar" e "keep the change".',
        pronunciationTip: '"Keep the change" (fique com o troco) é uma frase de cortesia comum em cafés e táxis.',
        translation: 'Aqui está uma nota de vinte dólares. Fique com o troco, por favor.',
        explanation: 'Demonstra naturalidade e boa educação ao lidar com pequenas quantias em dinheiro.'
      },
      {
        id: 's-a1-ap-3',
        type: 'speaking_item',
        itemTitle: 'Confirmando o Recibo',
        contextScenario: 'Peça a nota ou recibo fiscal da compra.',
        modelAudioText: 'Could I please have the receipt as well?',
        speechRate: 0.88,
        targetPhrase: 'Could I please have the receipt as well?',
        phoneticFocus: 'Lembre-se do "p" mudo em "receipt" (/rɪˈsiːt/).',
        pronunciationTip: '"as well" é uma forma elegante de dizer "também" no fim da frase.',
        translation: 'Eu poderia receber o recibo também, por favor?',
        explanation: 'Pedir comprovantes é uma prática comum de organização em compras e viagens.'
      }
    ]
  },

  // 6. Ouça e imite (A1) - Novo
  {
    id: 'speaking-a1-shadow-ordering-food',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a1',
    topic: 'Alimentação & Lanchonete',
    title: 'Fazendo Pedidos Simples na Lanchonete',
    description: 'Aprenda a pedir comida e bebidas de forma natural sem soar excessivamente formal ou rude.',
    objective: 'Praticar o padrão "I would like [item], please" e "Can I have [item]?".',
    instructions: 'Ouça o áudio do pedido e grave sua repetição com ritmo fluido.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Balcão de lanches e bebidas',
      checklist: [
        'Ligação sonora suave em "I would like"',
        'Tom cortês sem hesitação prolongada',
        'Uso natural de "please" no final'
      ]
    },
    questions: [
      {
        id: 's-a1-of-1',
        type: 'speaking_item',
        itemTitle: 'Pedindo Suco e Sanduíche',
        contextScenario: 'Faça o pedido de um sanduíche de queijo e um suco de laranja natural.',
        modelAudioText: 'I would like a cheese sandwich and an orange juice, please.',
        speechRate: 0.85,
        targetPhrase: 'I would like a cheese sandwich and an orange juice, please.',
        phoneticFocus: 'Ligue "an orange" como "an-norange".',
        pronunciationTip: 'A contração "I\'d like" é muito comum e soa mais rápida que "I would like".',
        translation: 'Eu gostaria de um sanduíche de queijo e um suco de laranja, por favor.',
        explanation: '"I would like" é a forma padrão de pedir refeições de maneira respeitosa.'
      },
      {
        id: 's-a1-of-2',
        type: 'speaking_item',
        itemTitle: 'Pedindo a Conta',
        contextScenario: 'Peça a conta educadamente ao terminar seu lanche.',
        modelAudioText: 'Could we have the bill, please? Thank you!',
        speechRate: 0.85,
        targetPhrase: 'Could we have the bill, please? Thank you!',
        phoneticFocus: 'Ligue "Could we" como "cu-dwi". Termine com entonação ascendente amigável.',
        pronunciationTip: 'No Reino Unido usa-se "bill"; nos Estados Unidos é muito comum "check". Ambos são corretos.',
        translation: 'Poderia trazer a conta, por favor? Obrigado!',
        explanation: 'Forma prática e universal de pedir a conta ao garçom ou atendente.'
      },
      {
        id: 's-a1-of-3',
        type: 'speaking_item',
        itemTitle: 'Agradecendo pela Refeição',
        contextScenario: 'Elogie o lanche e agradeça ao funcionário antes de sair.',
        modelAudioText: 'Everything was delicious, thank you very much!',
        speechRate: 0.88,
        targetPhrase: 'Everything was delicious, thank you very much!',
        phoneticFocus: '"delicious" (/dɪˈlɪʃəs/) com tônica no meio.',
        pronunciationTip: 'Diga "Everything was" de forma conectada e expressiva.',
        translation: 'Tudo estava delicioso, muito obrigado!',
        explanation: 'Elogiar a refeição demonstra simpatia e excelente educação em qualquer restaurante.'
      }
    ]
  },

  // 7. Ouça e imite (A1) - Novo
  {
    id: 'speaking-a1-shadow-family-intro',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a1',
    topic: 'Família & Apresentações',
    title: 'Apresentando Membros da Família',
    description: 'Apresente amigos e familiares dizendo quem são e de onde vêm.',
    objective: 'Praticar o uso de "This is...", "He is my...", "She is my..." com boa articulação.',
    instructions: 'Ouça a apresentação e repita as frases com simpatia.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Apresentando um parente para colegas de classe',
      checklist: [
        'Pronúncia clara do "th" em "This is"',
        'Ênfase no nome da pessoa e parentesco',
        'Tom caloroso de boas-vindas'
      ]
    },
    questions: [
      {
        id: 's-a1-fi-1',
        type: 'speaking_item',
        itemTitle: 'Apresentando a Irmã',
        contextScenario: 'Apresente sua irmã para o grupo de amigos.',
        modelAudioText: 'This is my sister Ana. She is visiting from Brazil.',
        speechRate: 0.85,
        targetPhrase: 'This is my sister Ana. She is visiting from Brazil.',
        phoneticFocus: 'Ligue "This is" como "thi-siz".',
        pronunciationTip: 'Em "sister", a primeira sílaba é tônica: "SIS-ter". Não alongue o "e" final.',
        translation: 'Esta é minha irmã Ana. Ela está nos visitando do Brasil.',
        explanation: '"This is [nome]" é a fórmula mais comum para apresentar alguém pessoalmente.'
      },
      {
        id: 's-a1-fi-2',
        type: 'speaking_item',
        itemTitle: 'Prazer em Conhecer',
        contextScenario: 'Responda à apresentação cumprimentando calorosamente.',
        modelAudioText: 'Nice to meet you, Ana! Welcome to our city.',
        speechRate: 0.88,
        targetPhrase: 'Nice to meet you, Ana! Welcome to our city.',
        phoneticFocus: '"Nice to meet you" soa como "Nais-tu-mee-chu".',
        pronunciationTip: 'O "t" de "meet" e o "y" de "you" se fundem naturalmente no som de "ch" (/tʃ/).',
        translation: 'Prazer em te conhecer, Ana! Seja bem-vinda à nossa cidade.',
        explanation: 'Fórmula acolhedora indispensável para criar empatia em novos contatos.'
      },
      {
        id: 's-a1-fi-3',
        type: 'speaking_item',
        itemTitle: 'Apresentando o Irmão Mais Novo',
        contextScenario: 'Apresente seu irmão dizendo a idade dele.',
        modelAudioText: 'And this is my younger brother Pedro. He is nineteen years old.',
        speechRate: 0.88,
        targetPhrase: 'And this is my younger brother Pedro. He is nineteen years old.',
        phoneticFocus: '"younger brother" (/ˈjʌŋɡər ˈbrʌðər/) com "th" suave.',
        pronunciationTip: 'Ligue "nineteen years old" mantendo o ritmo sem pausas artificiais.',
        translation: 'E este é meu irmão mais novo, Pedro. Ele tem dezenove anos.',
        explanation: 'Apresentar a idade com "He is [número] years old" é a estrutura correta em inglês.'
      }
    ]
  },

  // 8. Treino de sons (A1) - Novo
  {
    id: 'speaking-a1-sound-b-v',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a1',
    topic: 'Consoantes: /b/ vs /v/',
    title: 'Distinção de /b/ e /v/ (boat vs vote)',
    description: 'Treine a articulação dos lábios fechados (/b/) versus os dentes superiores no lábio inferior (/v/).',
    objective: 'Diferenciar o som bilabial /b/ e labiodental /v/ sem misturar as posições.',
    instructions: 'Ouça a palavra teste, responda à questão de percepção e grave a sentença com clareza.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Treinamento de posições labiais e labiodentais',
      focusSound: '/b/ (dois lábios se tocam) vs /v/ (dentes de cima tocam o lábio de baixo)',
      checklist: [
        'Lábios fechados para /b/',
        'Vibração labiodental audível para /v/',
        'Contraste nítido entre os pares'
      ]
    },
    questions: [
      {
        id: 's-a1-bv-1',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Boat vs Vote',
        contextScenario: 'Contraste entre barco (boat) e voto (vote).',
        modelAudioText: 'We took the white boat across the bay.',
        speechRate: 0.85,
        targetPhrase: 'We took the white boat across the bay.',
        phoneticFocus: '/boʊt/ inicia com os dois lábios juntos.',
        pronunciationTip: 'Toque firme lábio com lábio para o som de /b/.',
        translation: 'Nós pegamos o barco branco pela baía.',
        explanation: '"Boat" começa com som de /b/ bilabial.',
        perceptionQuestion: {
          questionText: 'Qual das palavras inicia com o som bilabial /b/?',
          audioText: 'boat',
          options: [
            { id: 'A', text: 'Boat (/boʊt/ - barco)' },
            { id: 'B', text: 'Vote (/voʊt/ - voto)' },
            { id: 'C', text: 'Coat (/koʊt/ - casaco)' },
            { id: 'D', text: 'Goat (/ɡoʊt/ - cabra)' }
          ],
          correctOptionId: 'A',
          explanation: '"Boat" inicia com o som bilabial /b/.'
        }
      },
      {
        id: 's-a1-bv-2',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Berry vs Very',
        contextScenario: 'Contraste entre fruta vermelha (berry) e muito (very).',
        modelAudioText: 'This fresh berry is very delicious.',
        speechRate: 0.88,
        targetPhrase: 'This fresh berry is very delicious.',
        phoneticFocus: '/ˈberi/ (lábio com lábio) vs /ˈveri/ (dentes no lábio inferior).',
        pronunciationTip: 'Em "very", sinta os dentes da frente vibrarem no lábio de baixo.',
        translation: 'Esta fruta fresca é muito deliciosa.',
        explanation: 'Praticar "berry" e "very" na mesma oração treina a agilidade labiodental.',
        perceptionQuestion: {
          questionText: 'Qual palavra foi pronunciada com dentes no lábio inferior (/v/)?',
          audioText: 'very',
          options: [
            { id: 'A', text: 'Berry (com som /b/)' },
            { id: 'B', text: 'Very (com som /v/)' },
            { id: 'C', text: 'Bury (com som /b/)' },
            { id: 'D', text: 'Ferry (com som /f/)' }
          ],
          correctOptionId: 'B',
          explanation: '"Very" é pronunciado com o som labiodental sonoro /v/.'
        }
      },
      {
        id: 's-a1-bv-3',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Best vs Vest',
        contextScenario: 'Contraste entre o melhor (best) e colete (vest).',
        modelAudioText: 'He wore his best warm vest today.',
        speechRate: 0.88,
        targetPhrase: 'He wore his best warm vest today.',
        phoneticFocus: '/best/ (bilabial) vs /vest/ (labiodental).',
        pronunciationTip: 'Solte a explosão bilabial de "best" e posicione os dentes para o "v" de "vest".',
        translation: 'Ele vestiu seu melhor colete quente hoje.',
        explanation: 'Essa alternância rápida garante clareza articulatória no dia a dia.',
        perceptionQuestion: {
          questionText: 'Qual palavra significa colete e começa com o fonema /v/?',
          audioText: 'vest',
          options: [
            { id: 'A', text: 'Best (melhor)' },
            { id: 'B', text: 'Vest (colete)' },
            { id: 'C', text: 'Rest (descanso)' },
            { id: 'D', text: 'Pest (praga)' }
          ],
          correctOptionId: 'B',
          explanation: '"Vest" (/vest/) significa colete e começa com a fricativa labiodental sonora /v/.'
        }
      }
    ]
  },

  // 9. Treino de sons (A1) - Novo
  {
    id: 'speaking-a1-sound-short-e-ae',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a1',
    topic: 'Vogais Abertas: /e/ vs /æ/',
    title: 'Distinção de /e/ e /æ/ (pen vs pan)',
    description: 'Aprenda a abrir mais a mandíbula para o som de /æ/ (cat, pan, apple) comparado ao /e/ (pen, red).',
    objective: 'Reconhecer e produzir a vogal aberta anterior /æ/ característica do inglês.',
    instructions: 'Ouça as diferenças nos testes de percepção e grave as frases exercitando a abertura mandibular.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Laboratório de abertura vocálica para vogais abertas',
      focusSound: '/e/ (médio, lábios semiabertos) vs /æ/ (maxilar bem aberto, língua rebaixada)',
      checklist: [
        'Abertura generosa da mandíbula para /æ/',
        'Contraste audível entre pen e pan',
        'Vocalização firme e límpida'
      ]
    },
    questions: [
      {
        id: 's-a1-ea-1',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Pen vs Pan',
        contextScenario: 'Diferença entre caneta (pen) e frigideira (pan).',
        modelAudioText: 'I left the blue pen next to the frying pan.',
        speechRate: 0.85,
        targetPhrase: 'I left the blue pen next to the frying pan.',
        phoneticFocus: '/pen/ (abertura média) vs /pæn/ (abertura ampla da boca).',
        pronunciationTip: 'Para falar "pan", abra a boca como se fosse dar uma mordida em uma maçã.',
        translation: 'Deixei a caneta azul ao lado da frigideira.',
        explanation: '"Pen" tem o som /e/ fechado; "pan" tem o som /æ/ bem aberto.',
        perceptionQuestion: {
          questionText: 'Qual das duas palavras tem a vogal com a boca bem aberta (/æ/)?',
          audioText: 'pan',
          options: [
            { id: 'A', text: 'Pen (/pen/ - caneta)' },
            { id: 'B', text: 'Pan (/pæn/ - frigideira)' },
            { id: 'C', text: 'Pin (/pɪn/ - alfinete)' },
            { id: 'D', text: 'Pun (/pʌn/ - trocadilho)' }
          ],
          correctOptionId: 'B',
          explanation: '"Pan" (/pæn/) tem a vogal aberta anterior /æ/.'
        }
      },
      {
        id: 's-a1-ea-2',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Men vs Man',
        contextScenario: 'Diferença entre homens no plural (men) e homem no singular (man).',
        modelAudioText: 'One man was talking to three young men.',
        speechRate: 0.85,
        targetPhrase: 'One man was talking to three young men.',
        phoneticFocus: '/mæn/ (singular, boca aberta) vs /men/ (plural, boca semiaberta).',
        pronunciationTip: 'Abra bem a boca em "man" (singular) e feche ligeiramente para "men" (plural).',
        translation: 'Um homem estava conversando com três rapazes.',
        explanation: 'A distinção entre "man" e "men" é puramente fonética na fala.',
        perceptionQuestion: {
          questionText: 'Qual palavra corresponde ao singular homem (/mæn/)?',
          audioText: 'man',
          options: [
            { id: 'A', text: 'Men (plural)' },
            { id: 'B', text: 'Man (singular com som /æ/)' },
            { id: 'C', text: 'Main (principal)' },
            { id: 'D', text: 'Mean (mau)' }
          ],
          correctOptionId: 'B',
          explanation: '"Man" (/mæn/) é o singular com a vogal aberta /æ/.'
        }
      },
      {
        id: 's-a1-ea-3',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Bed vs Bad',
        contextScenario: 'Diferença entre cama (bed) e ruim/mau (bad).',
        modelAudioText: 'Sleeping on a bad bed hurts your back.',
        speechRate: 0.88,
        targetPhrase: 'Sleeping on a bad bed hurts your back.',
        phoneticFocus: '/bæd/ (abertura ampla) vs /bed/ (abertura moderada).',
        pronunciationTip: 'Alterne nitidamente: "bad" tem boca bem aberta; "bed" é mais relaxado.',
        translation: 'Dormir em uma cama ruim machuca as costas.',
        explanation: 'Confundir "bad" e "bed" é clássico entre falantes de português; o contraste sistemático resolve o vício.',
        perceptionQuestion: {
          questionText: 'Qual das palavras significa cama com o som /e/?',
          audioText: 'bed',
          options: [
            { id: 'A', text: 'Bad (ruim)' },
            { id: 'B', text: 'Bed (cama)' },
            { id: 'C', text: 'Bid (lance / oferta)' },
            { id: 'D', text: 'Bud (botão de flor)' }
          ],
          correctOptionId: 'B',
          explanation: '"Bed" (/bed/) significa cama e tem a vogal média anterior /e/.'
        }
      }
    ]
  },

  // 10. Treino de sons (A1) - Novo
  {
    id: 'speaking-a1-sound-initial-s',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a1',
    topic: 'Encontros Consonantais com S',
    title: 'O Som de "S" Puro no Início de Palavras',
    description: 'Elimine o hábito de adicionar um "i" ou "e" imaginário antes de palavras como speak, study e street.',
    objective: 'Iniciar palavras como speak, school e student com sibilo contínuo /s/ sem dizer "ispeak" ou "escola".',
    instructions: 'Ouça o modelo, responda ao teste e grave a sentença mantendo o "S" limpo e puro.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica de articulação de encontros consonantais sibilantes',
      focusSound: '/s/ puro inicial (como o chiar de uma cobra, sem nenhuma vogal de apoio antes)',
      checklist: [
        'Sem som de "i" ou "e" antes do S',
        'Sibilo claro e contínuo',
        'Transição suave para a consoante seguinte'
      ]
    },
    questions: [
      {
        id: 's-a1-is-1',
        type: 'speaking_item',
        itemTitle: 'S Puro em "Speak" e "Spanish"',
        contextScenario: 'Frase de treino com verbos e idiomas iniciados por S.',
        modelAudioText: 'She can speak Spanish very well.',
        speechRate: 0.85,
        targetPhrase: 'She can speak Spanish very well.',
        phoneticFocus: 'Inicie com /s/ seco sem colocar "i" antes: "/spiːk/".',
        pronunciationTip: 'Comece com um chiado suave como "sss" antes de juntar o "peak": "sss-peak".',
        translation: 'Ela sabe falar espanhol muito bem.',
        explanation: 'Adicionar "i" antes de "speak" ("ispeak") é um dos erros mais comuns de iniciantes.',
        perceptionQuestion: {
          questionText: 'Qual pronúncia de "speak" está correta?',
          audioText: 'speak',
          options: [
            { id: 'A', text: 'Começando com /s/ puro (/spiːk/)' },
            { id: 'B', text: 'Com som de "i" inicial (/ɪspiːk/)' },
            { id: 'C', text: 'Com som de "e" inicial (/espiːk/)' },
            { id: 'D', text: 'Sem pronunciar o S' }
          ],
          correctOptionId: 'A',
          explanation: 'Em inglês, o "s" no início de palavras é puro, sem vogal de apoio anterior.'
        }
      },
      {
        id: 's-a1-is-2',
        type: 'speaking_item',
        itemTitle: 'S Puro em "Student" e "Study"',
        contextScenario: 'Frase com substantivo e verbo iniciados por "st-".',
        modelAudioText: 'The student loves to study in the library.',
        speechRate: 0.88,
        targetPhrase: 'The student loves to study in the library.',
        phoneticFocus: '/ˈstjuːdnt/ e /ˈstʌdi/ iniciam direto no chiado /s/.',
        pronunciationTip: 'Toque a língua atrás dos dentes superiores e solte o ar: "sss-tudent".',
        translation: 'O estudante adora estudar na biblioteca.',
        explanation: 'Dominar o S puro no início de palavras confere imediatamente uma pronúncia muito mais natural.',
        perceptionQuestion: {
          questionText: 'Na palavra "study", qual som deve ser emitido primeiro?',
          audioText: 'study',
          options: [
            { id: 'A', text: 'O som fricativo /s/ puro sem vogal antes' },
            { id: 'B', text: 'A vogal "i" relaxada' },
            { id: 'C', text: 'A vogal "e" aberta' },
            { id: 'D', text: 'Um som oclusivo de T' }
          ],
          correctOptionId: 'A',
          explanation: 'O fonema inicial de "study" é o som sibilante puro /s/.'
        }
      },
      {
        id: 's-a1-is-3',
        type: 'speaking_item',
        itemTitle: 'S Puro em "Street" e "Small"',
        contextScenario: 'Frase com encontros consonantais "str-" e "sm-".',
        modelAudioText: 'There is a small bakery on that quiet street.',
        speechRate: 0.88,
        targetPhrase: 'There is a small bakery on that quiet street.',
        phoneticFocus: '"small" (/smɔːl/) e "street" (/striːt/) sem vogal de apoio.',
        pronunciationTip: 'Sussurre o "s" e emende imediatamente no "m" de "small" e no "tr" de "street".',
        translation: 'Há uma pequena padaria naquela rua tranquila.',
        explanation: 'Praticar diferentes encontros com S desenvolve a agilidade motora da boca.',
        perceptionQuestion: {
          questionText: 'Qual destas palavras inicia com o encontro consonantal /sm/ puro?',
          audioText: 'small',
          options: [
            { id: 'A', text: 'Small (/smɔːl/)' },
            { id: 'B', text: 'Ismall (com som de vogal inicial)' },
            { id: 'C', text: 'Esmall (com som de e)' },
            { id: 'D', text: 'Mall (sem S)' }
          ],
          correctOptionId: 'A',
          explanation: '"Small" inicia diretamente na consoante fricativa pura /s/ seguida de /m/.'
        }
      }
    ]
  },

  // 11. Respostas rápidas (A1) - Novo
  {
    id: 'speaking-a1-rapid-food-preferences',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a1',
    topic: 'Alimentação & Bebidas',
    title: 'Perguntas sobre Comidas e Bebidas',
    description: 'Responda com naturalidade a perguntas sobre o que você costuma comer e beber.',
    objective: 'Treinar respostas rápidas usando "I usually have...", "I prefer...", "I like...".',
    instructions: 'Ouça a pergunta e grave sua resposta espontânea em inglês.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Conversa no intervalo de um curso ou café',
      checklist: [
        'Resposta direta em menos de 3 segundos',
        'Uso de vocabulário básico de alimentos',
        'Entonação amigável e descontraída'
      ]
    },
    questions: [
      {
        id: 's-a1-rf-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Café ou Chá?',
        contextScenario: 'Alguém te oferece uma bebida quente pela manhã.',
        modelAudioText: 'Do you prefer to drink coffee or tea in the morning?',
        speechRate: 0.88,
        targetPhrase: 'I prefer hot black coffee with a little milk, please.',
        sampleResponses: [
          'I prefer hot black coffee with a little milk, please.',
          'I always drink green tea in the morning.',
          'I like both, but coffee is my favorite!'
        ],
        pronunciationTip: 'Diga "I prefer" com ênfase na segunda sílaba: "I pre-FER".',
        translation: 'Você prefere tomar café ou chá de manhã?',
        explanation: 'Fale sua preferência simples usando "I prefer [bebida]".'
      },
      {
        id: 's-a1-rf-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Fome no Meio da Tarde',
        contextScenario: 'Um colega pergunta o que você costuma lanchar à tarde.',
        modelAudioText: 'What is your favorite afternoon snack?',
        speechRate: 0.88,
        targetPhrase: 'I usually eat an apple or some fresh nuts.',
        sampleResponses: [
          'I usually eat an apple or some fresh nuts.',
          'I like to have a toast and a cup of tea.',
          'Usually a banana or some biscuits.'
        ],
        pronunciationTip: '"usually" pronuncia-se "YOU-zhoo-uh-lee" (/ˈjuːʒuəli/).',
        translation: 'Qual é o seu lanche da tarde favorito?',
        explanation: 'Usar "I usually eat..." é a forma ideal de descrever hábitos alimentares.'
      },
      {
        id: 's-a1-rf-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Sobremesa Favorita',
        contextScenario: 'Perguntam se você prefere sorvete ou bolo de sobremesa.',
        modelAudioText: 'Would you like some ice cream or chocolate cake for dessert?',
        speechRate: 0.88,
        targetPhrase: 'Chocolate cake sounds wonderful, thank you so much!',
        sampleResponses: [
          'Chocolate cake sounds wonderful, thank you so much!',
          'A scoop of vanilla ice cream would be great, please.',
          'Neither for me, thank you. Just some water is fine!'
        ],
        pronunciationTip: '"Dessert" pronuncia-se /dɪˈzɜːrt/ com tônica na segunda sílaba (diferente de desert, deserto).',
        translation: 'Você gostaria de um sorvete ou bolo de chocolate de sobremesa?',
        explanation: '"[Opção] sounds wonderful, thank you" é uma resposta muito calorosa e natural.'
      }
    ]
  },

  // 12. Respostas rápidas (A1) - Novo
  {
    id: 'speaking-a1-rapid-daily-habits',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a1',
    topic: 'Rotina & Horários',
    title: 'Perguntas sobre Horários do Dia a Dia',
    description: 'Responda oralmente sobre a hora que você acorda, almoça e vai dormir.',
    objective: 'Praticar o uso de preposições de tempo (at seven, around noon) em respostas curtas.',
    instructions: 'Ouça a pergunta sobre seu dia e responda dizendo o horário correspondente.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Conversa informal sobre estilo de vida com amigos',
      checklist: [
        'Uso correto de "at" antes das horas',
        'Pronúncia clara dos números',
        'Ritmo contínuo sem hesitação longa'
      ]
    },
    questions: [
      {
        id: 's-a1-rd-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Horário de Acordar',
        contextScenario: 'Perguntam a que horas você costuma levantar nos dias de semana.',
        modelAudioText: 'What time do you usually wake up on weekdays?',
        speechRate: 0.88,
        targetPhrase: 'I usually wake up at seven o’clock in the morning.',
        sampleResponses: [
          'I usually wake up at seven o’clock in the morning.',
          'I get up around six thirty AM every day.',
          'Usually at seven thirty, then I take a shower.'
        ],
        pronunciationTip: 'Ligue "wake up at" em uma única cadeia sonora: "wai-ka-pat".',
        translation: 'A que horas você costuma acordar nos dias de semana?',
        explanation: 'A resposta clássica é "I usually wake up at [hora]".'
      },
      {
        id: 's-a1-rd-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Horário de Almoço',
        contextScenario: 'Perguntam a que horas você costuma almoçar.',
        modelAudioText: 'What time do you normally have lunch?',
        speechRate: 0.88,
        targetPhrase: 'I normally have lunch around twelve thirty.',
        sampleResponses: [
          'I normally have lunch around twelve thirty.',
          'I eat lunch at one PM with my family.',
          'Usually around noon at my office.'
        ],
        pronunciationTip: '"Noon" significa exatamente 12h do meio-dia.',
        translation: 'A que horas você normalmente almoça?',
        explanation: 'Usar "around" indica horário aproximado de forma muito natural.'
      },
      {
        id: 's-a1-rd-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Hora de Dormir',
        contextScenario: 'Perguntam se você costuma ir para a cama cedo ou tarde.',
        modelAudioText: 'Do you go to bed early or stay up late at night?',
        speechRate: 0.88,
        targetPhrase: 'I usually go to bed around eleven PM so I can get eight hours of sleep.',
        sampleResponses: [
          'I usually go to bed around eleven PM so I can get eight hours of sleep.',
          'I am an early bird, so I sleep at ten PM.',
          'I usually stay up late until midnight reading books.'
        ],
        pronunciationTip: '"go to bed" conecta-se como "gou-tu-bed".',
        translation: 'Você vai dormir cedo ou fica acordado até tarde da noite?',
        explanation: 'Falar de hábitos noturnos consolida o vocabulário de bem-estar e sono.'
      }
    ]
  },

  // 13. Respostas rápidas (A1) - Novo
  {
    id: 'speaking-a1-rapid-simple-weather',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a1',
    topic: 'Clima & Roupas',
    title: 'Comentando sobre o Clima de Hoje',
    description: 'Responda sobre o tempo hoje: se está quente, frio, ensolarado ou chuvoso.',
    objective: 'Usar adjetivos meteorológicos básicos (sunny, rainy, cold, warm) com agilidade.',
    instructions: 'Ouça a pergunta sobre o tempo lá fora e dê sua resposta observando a janela.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Pequena conversa ao encontrar alguém no elevador',
      checklist: [
        'Uso correto de "It is [adjetivo]" para o clima',
        'Pronúncia natural de "warm", "sunny", "cold"',
        'Resposta rápida e descontraída'
      ]
    },
    questions: [
      {
        id: 's-a1-rw-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Como está o clima lá fora?',
        contextScenario: 'Alguém pergunta se está quente ou frio hoje.',
        modelAudioText: 'How is the weather outside today? Is it warm?',
        speechRate: 0.88,
        targetPhrase: 'It is very sunny and warm today! A wonderful day.',
        sampleResponses: [
          'It is very sunny and warm today! A wonderful day.',
          'It is a bit cold and cloudy, but not raining.',
          'It is quite pleasant and windy this afternoon.'
        ],
        pronunciationTip: '"warm" tem som de "wórm" (/wɔːrm/), diferente de "worm" (minhoca).',
        translation: 'Como está o tempo lá fora hoje? Está calor?',
        explanation: 'A forma padrão para o clima é sempre "It is [adjetivo] today".'
      },
      {
        id: 's-a1-rw-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Está chovendo?',
        contextScenario: 'Perguntam se é necessário levar um guarda-chuva hoje.',
        modelAudioText: 'Do I need to take an umbrella with me right now?',
        speechRate: 0.88,
        targetPhrase: 'No, the sky is completely clear and blue.',
        sampleResponses: [
          'No, the sky is completely clear and blue.',
          'Yes, take one because it looks like it might rain.',
          'No need! It is sunny all day.'
        ],
        pronunciationTip: '"umbrella" tem a tônica na segunda sílaba: "um-BREL-la" (/ʌmˈbrelə/).',
        translation: 'Preciso levar um guarda-chuva comigo agora?',
        explanation: 'Responder se precisa de guarda-chuva é o teste prático de conversação cotidiana.'
      },
      {
        id: 's-a1-rw-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Sua Estação do Ano Favorita',
        contextScenario: 'Perguntam qual época do ano você mais gosta: verão, inverno, outono ou primavera.',
        modelAudioText: 'Which season of the year is your favorite?',
        speechRate: 0.88,
        targetPhrase: 'I love spring because the flowers bloom and the weather is mild.',
        sampleResponses: [
          'I love spring because the flowers bloom and the weather is mild.',
          'Summer is my favorite season because I love going to the beach.',
          'I prefer autumn because the cooler weather is very cozy.'
        ],
        pronunciationTip: '"autumn" (/ˈɔːtəm/) tem o "n" final completamente mudo.',
        translation: 'Qual estação do ano é a sua favorita?',
        explanation: 'Falar de estações (spring, summer, autumn, winter) enriquece conversas casuais.'
      }
    ]
  },

  // 14. Fale em situações reais (A1) - Novo
  {
    id: 'speaking-a1-roleplay-grocery',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'a1',
    topic: 'Supermercado & Caixa',
    title: 'Simulação: Pagando as Compras no Supermercado',
    description: 'Converse com o operador de caixa de um supermercado, respondendo sobre sacolas, pagamento e recibo.',
    objective: 'Simular o diálogo de caixa de supermercado com naturalidade e vocabulário correto.',
    instructions: 'Ouça o que o caixa diz e grave sua fala para cada turno indicado.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Caixa de supermercado em Toronto',
      partnerRole: 'Operador de Caixa',
      userRole: 'Cliente',
      checklist: [
        'Responder se precisa de sacolas plásticas',
        'Confirmar pagamento por aproximação ou dinheiro',
        'Pedir ou recusar o recibo educadamente'
      ]
    },
    questions: [
      {
        id: 's-a1-rpg-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Sacolas de Compras',
        contextScenario: 'O caixa te cumprimenta e pergunta se você precisa de sacolas plásticas. Responda que você já trouxe suas próprias sacolas de pano.',
        modelAudioText: 'Hi there! Did you find everything okay? Do you need any paper or plastic bags today?',
        speechRate: 0.88,
        targetPhrase: 'Hello! Yes, everything was great. I brought my own bags, thank you!',
        sampleResponses: [
          'Hello! Yes, everything was great. I brought my own bags, thank you!',
          'Hi! I have my own canvas bags with me, thanks.',
          'No bags needed, thank you, I have a backpack.'
        ],
        pronunciationTip: '"I brought my own bags" (trouxe minhas próprias sacolas) é uma frase muito comum e prática.',
        translation: 'Olá! Encontrou tudo certinho? Precisa de sacolas de papel ou plástico hoje?',
        explanation: 'Demonstra autonomia ao responder que já tem sacolas ecológicas.'
      },
      {
        id: 's-a1-rpg-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Total e Pagamento',
        contextScenario: 'O caixa passa os produtos, diz o total ($18.40) e pergunta a forma de pagamento. Responda que vai pagar com cartão por aproximação.',
        modelAudioText: 'Your total comes to eighteen dollars and forty cents. How would you like to pay?',
        speechRate: 0.88,
        targetPhrase: 'With contactless card, please. Can I tap it right here?',
        sampleResponses: [
          'With contactless card, please. Can I tap it right here?',
          'By card, please. Here you go!',
          'I will pay with card, thanks.'
        ],
        pronunciationTip: '"Tap" é o verbo usado para encostar ou aproximar o cartão ou celular na maquininha.',
        translation: 'Seu total dá dezoito dólares e quarenta centavos. Como gostaria de pagar?',
        explanation: 'Expressões como "Can I tap it here?" são perfeitamente naturais no varejo moderno.'
      },
      {
        id: 's-a1-rpg-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Recibo e Despedida',
        contextScenario: 'O caixa pergunta se você quer o comprovante impresso. Diga que sim, por favor, agradeça e deseje bom dia.',
        modelAudioText: 'Payment approved! Would you like your receipt printed, or in the bag?',
        speechRate: 0.88,
        targetPhrase: 'In the bag, please. Thank you and have a great day!',
        sampleResponses: [
          'In the bag, please. Thank you and have a great day!',
          'Yes, please, print the receipt. Thanks so much!',
          'No receipt needed. Have a good one!'
        ],
        pronunciationTip: '"Receipt" tem o P mudo: pronuncia-se "ri-SEET" (/rɪˈsiːt/). Nunca fale o "p".',
        translation: 'Pagamento aprovado! Gostaria do recibo impresso ou colocado na sacola?',
        explanation: 'Encerrar a transação com agradecimento e simpatia é parte da cultura em países anglófonos.'
      }
    ]
  },

  // 15. Fale em situações reais (A1) - Novo
  {
    id: 'speaking-a1-roleplay-asking-street',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'a1',
    topic: 'Cidade & Pedindo Informação',
    title: 'Simulação: Pedindo Informação na Rua',
    description: 'Pergunte educadamente a um pedestre onde fica o ponto de ônibus ou a farmácia mais próxima.',
    objective: 'Praticar abordagem cortês na rua com fórmulas de desculpas e perguntas de direção.',
    instructions: 'Ouça o pedestre e grave suas falas correspondentes a cada turno da conversa.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Calçada de uma rua movimentada na cidade',
      partnerRole: 'Pedestre Local',
      userRole: 'Viajante / Morador Novo',
      checklist: [
        'Abordagem educada com "Excuse me"',
        'Pergunta de localização clara',
        'Agradecimento sincero pelas instruções'
      ]
    },
    questions: [
      {
        id: 's-a1-rps-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Abordando com Educação',
        contextScenario: 'Pare um pedestre educadamente e pergunte onde fica a estação de metrô mais próxima.',
        modelAudioText: 'Hello there, can I help you with something?',
        speechRate: 0.88,
        targetPhrase: 'Excuse me! Could you please tell me where the nearest subway station is?',
        sampleResponses: [
          'Excuse me! Could you please tell me where the nearest subway station is?',
          'Hi! Where is the nearest subway station, please?',
          'Excuse me, is there a subway station near here?'
        ],
        pronunciationTip: 'Comece com "Excuse me" suave. Enfatize "subway station".',
        translation: 'Olá, posso te ajudar com alguma coisa?',
        explanation: 'A fórmula mais polida para pedir orientação na rua é "Could you please tell me where [lugar] is?".'
      },
      {
        id: 's-a1-rps-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Confirmando a Distância',
        contextScenario: 'O pedestre explica que fica a duas quadras e virar à direita. Pergunte se dá para ir a pé.',
        modelAudioText: 'Sure! Just walk straight for two blocks and turn right at the traffic lights. It is right there.',
        speechRate: 0.88,
        targetPhrase: 'Is it within walking distance? How many minutes does it take?',
        sampleResponses: [
          'Is it within walking distance? How many minutes does it take?',
          'Can I walk there in five minutes?',
          'Great! Is it very far to walk?'
        ],
        pronunciationTip: '"Within walking distance" é uma expressão idiomática que significa "dá para ir a pé".',
        translation: 'Claro! Siga em frente por duas quadras e vire à direita no semáforo. Fica bem ali.',
        explanation: 'Confirmar a distância e tempo a pé evita surpresas no deslocamento.'
      },
      {
        id: 's-a1-rps-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Agradecendo a Ajuda',
        contextScenario: 'O pedestre confirma que leva apenas três minutos a pé. Agradeça calorosamente e despeça-se.',
        modelAudioText: 'Yes, it is only a three-minute walk from here! Very easy to find.',
        speechRate: 0.88,
        targetPhrase: 'That is wonderful! Thank you so much for your help. Have a great day!',
        sampleResponses: [
          'That is wonderful! Thank you so much for your help. Have a great day!',
          'Perfect! Thanks a lot for the directions. Bye!',
          'Thank you very much, I appreciate it! Have a good one!'
        ],
        pronunciationTip: 'Fale com energia amigável: "Thank you so much for your help!".',
        translation: 'Sim, fica a apenas três minutos a pé daqui! Muito fácil de achar.',
        explanation: 'Agradecer gentilmente encerra a interação com excelente impressão social.'
      }
    ]
  }
];

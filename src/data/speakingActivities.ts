import { Activity, SpeakingQuestion } from '../types/activity';

export const SPEAKING_ACTIVITIES: Activity<SpeakingQuestion>[] = [
  // ==========================================
  // NÍVEL A1 — INICIANTE
  // ==========================================

  // 1. Ouça e imite (A1)
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

  // 2. Treino de sons (A1)
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

  // 3. Respostas rápidas (A1)
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

  // 4. Fale em situações reais (A1)
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

  // ==========================================
  // NÍVEL A2 — BÁSICO
  // ==========================================

  // 5. Ouça e imite (A2)
  {
    id: 'speaking-a2-shadow-connected',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a2',
    topic: 'Ritmo, Wanna & Gonna',
    title: 'Conexão de Palavras e Contrações Naturais',
    description: 'Aprenda a falar com ritmo fluido e conecte palavras como falantes nativos do dia a dia.',
    objective: 'Reconhecer e produzir contrações informais frequentes (gonna, wanna, gotta) sem perder clareza.',
    instructions: 'Ouça a frase em velocidade moderada, observe como as palavras se conectam e repita com ritmo.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Conversa informal com amigos e colegas de trabalho',
      checklist: [
        'Ligação natural entre consoantes e vogais',
        'Uso correto de "wanna" e "gonna" em contexto informal',
        'Ritmo dinâmico sem pausas robóticas entre cada palavra'
      ]
    },
    questions: [
      {
        id: 's-a2-c-1',
        type: 'speaking_item',
        itemTitle: 'Convite para o Almoço',
        contextScenario: 'Convide um colega de equipe para almoçar com você.',
        modelAudioText: "I'm gonna grab some lunch at the corner cafe. Do you wanna come along?",
        speechRate: 0.92,
        targetPhrase: "I'm gonna grab some lunch at the corner cafe. Do you wanna come along?",
        phoneticFocus: '"going to" -> "gonna" (/ˈɡənə/) e "want to" -> "wanna" (/ˈwɑːnə/).',
        pronunciationTip: 'Conecte "grab some" como uma unidade rítmica. Em "come along", o "m" se liga à vogal seguinte: "co-ma-long".',
        translation: 'Eu vou pegar um almoço no café da esquina. Você quer vir junto?',
        explanation: '"Gonna" e "wanna" são amplamente usadas no inglês falado informal em situações cotidianas.'
      },
      {
        id: 's-a2-c-2',
        type: 'speaking_item',
        itemTitle: 'Compromisso com Prazo',
        contextScenario: 'Diga que você precisa enviar um relatório antes do final do expediente.',
        modelAudioText: "We've gotta finish this report before five o'clock.",
        speechRate: 0.92,
        targetPhrase: "We've gotta finish this report before five o'clock.",
        phoneticFocus: '"got to" -> "gotta" (/ˈɡɑːtə/).',
        pronunciationTip: 'O "t" duplo em "gotta" no inglês americano soa como um flap "r" brando em português (como em "caro").',
        translation: 'Nós temos que terminar este relatório antes das cinco horas.',
        explanation: '"Gotta" substitui "have got to" em conversas informais de trabalho para expressar necessidade.'
      },
      {
        id: 's-a2-c-3',
        type: 'speaking_item',
        itemTitle: 'Planos para a Noite',
        contextScenario: 'Pergunte o que o seu amigo pretende fazer depois do trabalho hoje.',
        modelAudioText: 'What are you gonna do after work tonight?',
        speechRate: 0.92,
        targetPhrase: 'What are you gonna do after work tonight?',
        phoneticFocus: '"What are you" soa frequentemente como "Whatcha" ou "Wha-der-you".',
        pronunciationTip: 'Mantenha o ritmo ágil: "What-are-you gonna DO after WORK to-NIGHT?". As tônicas estão nos verbos e horários.',
        translation: 'O que você vai fazer depois do trabalho hoje à noite?',
        explanation: 'Pergunta clássica para iniciar conversas de lazer no final da tarde.'
      }
    ]
  },

  // 6. Treino de sons (A2)
  {
    id: 'speaking-a2-sound-th',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a2',
    topic: 'Fonética: /θ/ (think) e /ð/ (this)',
    title: 'O som do "TH" Desvozeado e Vozeado',
    description: 'Domine a posição correta da língua para articular os dois sons de "TH" sem substituir por S, T ou D.',
    objective: 'Identificar e produzir /θ/ (sem vibração vocal) e /ð/ (com vibração das cordas vocais).',
    instructions: 'Responda à questão de percepção sonora e em seguida grave a frase de treino articulando a língua entre os dentes.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Oficina prática de articulação do dígrafo "TH"',
      focusSound: '/θ/ (aspirado, sem cordas vocais: think) vs /ð/ (sonoro, com vibração: this/that)',
      checklist: [
        'Ponta da língua levemente entre os dentes incisivos',
        'Passagem de ar contínua sem interrupção brusca (diferente de /t/)',
        'Não substituir por som de "s" ou "f"'
      ]
    },
    questions: [
      {
        id: 's-a2-th-1',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Think vs Sink',
        contextScenario: 'Diferença entre o verbo "pensar" (think) e "afundar/pia" (sink).',
        modelAudioText: 'I think the boat will sink.',
        speechRate: 0.88,
        targetPhrase: 'I think the boat will sink.',
        phoneticFocus: '/θɪŋk/ (com língua entre os dentes) vs /sɪŋk/ (língua atrás dos dentes).',
        pronunciationTip: 'Em "think", toque a ponta da língua nos dentes da frente e solte o ar suavemente. Não aperte.',
        translation: 'Eu acho que o barco vai afundar.',
        explanation: 'Substituir /θ/ por /s/ transforma "think" em "sink". A prática consciente treina a memória muscular.',
        perceptionQuestion: {
          questionText: 'Na frase falada: "Can you ___ about this?", qual verbo foi pronunciado com som de /θ/?',
          audioText: 'think',
          options: [
            { id: 'A', text: 'Think (pensar com som /θ/)' },
            { id: 'B', text: 'Sink (afundar com som /s/)' },
            { id: 'C', text: 'Fink (gíria com som /f/)' },
            { id: 'D', text: 'Tink (som oclusivo /t/)' }
          ],
          correctOptionId: 'A',
          explanation: 'O áudio pronunciou "think" com o som interdental /θ/ característico.'
        }
      },
      {
        id: 's-a2-th-2',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Three vs Tree',
        contextScenario: 'Diferença entre o número "três" (three) e "árvore" (tree).',
        modelAudioText: 'There are three green trees in the yard.',
        speechRate: 0.88,
        targetPhrase: 'There are three green trees in the yard.',
        phoneticFocus: '/θriː/ (três) vs /triː/ (árvore).',
        pronunciationTip: 'Em "three", sinta o ar passar pela língua antes de recolhê-la para o "r". Em "tree", o "t" toca o céu da boca.',
        translation: 'Há três árvores verdes no quintal.',
        explanation: '"Three" e "tree" têm significados totalmente distintos. Este é um dos pares mais importantes do inglês básico.',
        perceptionQuestion: {
          questionText: 'Qual das opções corresponde ao número 3 com som de /θ/?',
          audioText: 'three',
          options: [
            { id: 'A', text: 'Tree (árvore)' },
            { id: 'B', text: 'Three (número 3)' },
            { id: 'C', text: 'Free (livre / grátis)' },
            { id: 'D', text: 'Tray (bandeja)' }
          ],
          correctOptionId: 'B',
          explanation: '"Three" (/θriː/) é o número três, com som interdental fricativo.'
        }
      },
      {
        id: 's-a2-th-3',
        type: 'speaking_item',
        itemTitle: 'O TH Sonoro: This, That and There',
        contextScenario: 'Frase de contraste demonstrativo com o som vozeado /ð/.',
        modelAudioText: 'This is better than that over there.',
        speechRate: 0.9,
        targetPhrase: 'This is better than that over there.',
        phoneticFocus: '/ðɪs/, /ðæn/, /ðeər/ (as cordas vocais vibram ativamente).',
        pronunciationTip: 'Coloque os dedos na garganta: em "this", "that" e "there", você deve sentir uma leve vibração ao pronunciar o "th".',
        translation: 'Isto é melhor do que aquilo logo ali.',
        explanation: 'Os pronomes e artigos em inglês (the, this, that, they, there) utilizam o TH sonoro (/ð/).',
        perceptionQuestion: {
          questionText: 'Em qual destas palavras a língua entre os dentes produz o som de TH sonoro /ð/?',
          audioText: 'this',
          options: [
            { id: 'A', text: 'This (com cordas vocais vibrando /ð/)' },
            { id: 'B', text: 'Dis (som de /d/ sem a língua entre os dentes)' },
            { id: 'C', text: 'Sis (som de /s/)' },
            { id: 'D', text: 'Zis (som de /z/)' }
          ],
          correctOptionId: 'A',
          explanation: '"This" (/ðɪs/) tem o TH sonoro, no qual a língua toca os dentes com vibração das cordas vocais.'
        }
      }
    ]
  },

  // 7. Respostas rápidas (A2)
  {
    id: 'speaking-a2-rapid-directions',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a2',
    topic: 'Orientação Urbana & Serviços',
    title: 'Pedindo e Dando Informações na Cidade',
    description: 'Responda oralmente a perguntas reais sobre localização, preços e horários com fluidez.',
    objective: 'Articular referências de direção, distâncias e valores sem hesitação excessiva.',
    instructions: 'Ouça o turista ou morador perguntar uma informação e grave sua resposta orientando-o.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Interações na rua, metrô e comércio da cidade',
      checklist: [
        'Uso correto de preposições de lugar (across from, next to, turn left)',
        'Pronúncia clara de números e distâncias',
        'Tom prestativo e natural'
      ]
    },
    questions: [
      {
        id: 's-a2-rd-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Estação de Metrô Próxima',
        contextScenario: 'Um pedestre te para na calçada e pergunta onde fica a estação mais próxima.',
        modelAudioText: 'Excuse me! Could you tell me where the nearest subway station is?',
        speechRate: 0.9,
        targetPhrase: 'Sure! Just walk straight for two blocks and turn left at the traffic light.',
        sampleResponses: [
          'Sure! Just walk straight for two blocks and turn left at the traffic light.',
          "It's very close! Go straight ahead, and you will see the station on your right.",
          'Walk down this street for five minutes. The entrance is right next to the supermarket.'
        ],
        pronunciationTip: 'Enfatize as palavras de direção: "walk STRAIGHT", "turn LEFT". Mantenha o ritmo calmo e nítido.',
        translation: 'Com licença! Você poderia me dizer onde fica a estação de metrô mais próxima?',
        explanation: 'Orientações urbanas requerem verbos no imperativo positivo ("walk", "turn", "cross").'
      },
      {
        id: 's-a2-rd-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Horário de Fechamento',
        contextScenario: 'Um cliente te pergunta se a loja ainda está aberta e a que horas fecha.',
        modelAudioText: 'Excuse me, do you know what time the supermarket closes tonight?',
        speechRate: 0.9,
        targetPhrase: 'I think it closes at ten PM, but on Sundays it closes earlier at eight.',
        sampleResponses: [
          'I think it closes at ten PM, but on Sundays it closes earlier at eight.',
          'It stays open until ten o’clock tonight.',
          'It closes at nine thirty PM, so you still have plenty of time.'
        ],
        pronunciationTip: 'Diga "at ten PM" com clareza. Note a ligação "closes at" -> "closes-at".',
        translation: 'Com licença, você sabe a que horas o supermercado fecha hoje à noite?',
        explanation: 'Expressões como "I think it closes at..." ou "It stays open until..." são perfeitas para essa situação.'
      },
      {
        id: 's-a2-rd-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Preço do Ingresso de Trem',
        contextScenario: 'Perguntam no guichê quanto custa a passagem de ida para o aeroporto.',
        modelAudioText: 'How much does a single train ticket to the international airport cost?',
        speechRate: 0.92,
        targetPhrase: 'A single ticket is twelve dollars and fifty cents, or twenty dollars round-trip.',
        sampleResponses: [
          'A single ticket is twelve dollars and fifty cents, or twenty dollars round-trip.',
          "It costs twelve fifty for one way.",
          'It is twelve dollars, and trains depart every fifteen minutes.'
        ],
        pronunciationTip: 'Ligue "twelve fifty" sem precisar falar a palavra "dollars" duas vezes, como nativos fazem.',
        translation: 'Quanto custa uma passagem só de ida de trem para o aeroporto internacional?',
        explanation: 'Dominar preços com dólares e centavos garante segurança em transações de viagem.'
      }
    ]
  },

  // 8. Fale em situações reais (A2)
  {
    id: 'speaking-a2-roleplay-hotel',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'a2',
    topic: 'Hospedagem & Viagens',
    title: 'Simulação: Check-in no Hotel',
    description: 'Faça o check-in completo na recepção de um hotel, confirmando sua reserva e tirando dúvidas.',
    objective: 'Desenvolver a fala em diálogos formais de atendimento hoteleiro com turnos conversacionais.',
    instructions: 'Ouça o recepcionista, grave sua fala correspondente ao objetivo de cada turno e finalize o check-in.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Recepção do Grand Central Hotel em Nova York',
      partnerRole: 'Recepcionista do Hotel',
      userRole: 'Hóspede',
      checklist: [
        'Apresentação clara da reserva em seu nome',
        'Confirmação de documentos e detalhes de estadia',
        'Pergunta educada sobre comodidades (Wi-Fi e café da manhã)'
      ]
    },
    questions: [
      {
        id: 's-a2-hp-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Apresentando sua Reserva',
        contextScenario: 'O recepcionista te dá as boas-vindas. Diga que você tem uma reserva para três noites no nome de Silva.',
        modelAudioText: 'Good evening! Welcome to the Grand Central Hotel. Are you checking in tonight?',
        speechRate: 0.92,
        targetPhrase: 'Yes, good evening! I have a reservation under the name of Silva for three nights.',
        sampleResponses: [
          'Yes, good evening! I have a reservation under the name of Silva for three nights.',
          "Hi! Yes, I'm checking in. The reservation is under Silva.",
          'Good evening! Yes, my name is Silva and I booked a room for three nights.'
        ],
        pronunciationTip: '"Under the name of" é a expressão idiomática padrão de reservas em hotéis e restaurantes.',
        translation: 'Boa noite! Bem-vindo ao Grand Central Hotel. Você vai fazer check-in esta noite?',
        explanation: 'Informar o nome da reserva com antecedência agiliza a localização no sistema pelo recepcionista.'
      },
      {
        id: 's-a2-hp-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Entregando Documentos',
        contextScenario: 'O recepcionista localiza sua reserva e pede seu passaporte e cartão de crédito. Responda confirmando a entrega.',
        modelAudioText: 'Found it, Mr. Silva! A deluxe queen room. Could you please show me your passport and a credit card for the deposit?',
        speechRate: 0.92,
        targetPhrase: 'Certainly! Here is my passport and my credit card.',
        sampleResponses: [
          'Certainly! Here is my passport and my credit card.',
          'Sure thing, here you go: my passport and card.',
          'Of course! Here are both documents.'
        ],
        pronunciationTip: '"Certainly" (/ˈsɜːrtnli/) soa profissional e elegante. Conecte "Here is my" suavemente.',
        translation: 'Encontrei, Sr. Silva! Um quarto queen luxo. Poderia por favor me mostrar seu passaporte e um cartão de crédito para o caução?',
        explanation: 'Responda com cortesia e prontidão usando "Certainly" ou "Of course".'
      },
      {
        id: 's-a2-hp-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Chave e Pergunta sobre Wi-Fi',
        contextScenario: 'O recepcionista entrega sua chave no 4º andar. Agradeça e pergunte qual é a senha do Wi-Fi.',
        modelAudioText: 'All set! You are in room 408 on the fourth floor. Breakfast is included from seven to ten AM. Any questions?',
        speechRate: 0.92,
        targetPhrase: 'Thank you very much! Could you also tell me the Wi-Fi password, please?',
        sampleResponses: [
          'Thank you very much! Could you also tell me the Wi-Fi password, please?',
          'Thanks so much! What is the password for the hotel Wi-Fi?',
          'Great, thank you! Could you please tell me how to connect to the Wi-Fi?'
        ],
        pronunciationTip: 'Wi-Fi pronuncia-se "uai-fai" (/ˈwaɪ faɪ/). Enfatize a palavra "password".',
        translation: 'Tudo pronto! Seu quarto é o 408 no quarto andar. O café da manhã está incluso das sete às dez da manhã. Alguma pergunta?',
        explanation: 'Agradecer e tirar dúvidas sobre serviços básicos é essencial em qualquer estadia.'
      }
    ]
  },

  // ==========================================
  // NÍVEL B1 — INTERMEDIÁRIO
  // ==========================================

  // 9. Ouça e imite (B1)
  {
    id: 'speaking-b1-shadow-opinion',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b1',
    topic: 'Debate & Argumentação',
    title: 'Entonação e Ênfase ao Expressar Opiniões',
    description: 'Aprenda a modular a voz para expressar concordância, divergência diplomática e convicção.',
    objective: 'Praticar pausas estratégicas, ritmo maduro e entonação em reuniões e conversas formais.',
    instructions: 'Ouça o modelo, preste atenção na curva de entonação (onde a voz sobe e desce) e grave sua versão.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Reunião de alinhamento e apresentação profissional',
      checklist: [
        'Pausa deliberada após marcadores discursivos ("To be completely honest,")',
        'Ênfase na palavra de maior impacto da frase',
        'Tom maduro e equilibrado sem aceleração nervosa'
      ]
    },
    questions: [
      {
        id: 's-b1-op-1',
        type: 'speaking_item',
        itemTitle: 'Divergência Construtiva',
        contextScenario: 'Discorde educadamente de uma proposta em uma reunião corporativa.',
        modelAudioText: 'To be completely honest, I think we should reconsider our current strategy before spending more budget.',
        speechRate: 0.95,
        targetPhrase: 'To be completely honest, I think we should reconsider our current strategy before spending more budget.',
        phoneticFocus: 'Pausa breve após "honest," e ênfase em "reconsider" e "current strategy".',
        pronunciationTip: 'Não apresse o início: "To be completely HON-est...". A pausa confere autoridade e credibilidade à sua fala.',
        translation: 'Para ser completamente honesto, acho que deveríamos reconsiderar nossa estratégia atual antes de gastar mais orçamento.',
        explanation: 'Marcadores discursivos como "To be completely honest" suavizam divergências em ambientes profissionais.'
      },
      {
        id: 's-b1-op-2',
        type: 'speaking_item',
        itemTitle: 'Ponderação Diplomática',
        contextScenario: 'Valide o ponto de vista de um colega enquanto aponta um risco relevante.',
        modelAudioText: 'That is an interesting perspective, but have you considered the potential impact on customer satisfaction?',
        speechRate: 0.96,
        targetPhrase: 'That is an interesting perspective, but have you considered the potential impact on customer satisfaction?',
        phoneticFocus: 'Entonação ascendente na pergunta após "considered".',
        pronunciationTip: 'A palavra "perspective" tem a tônica na segunda sílaba: "per-SPEC-tive". Conecte "impact on" como "impact-on".',
        translation: 'Essa é uma perspectiva interessante, mas você considerou o potencial impacto na satisfação do cliente?',
        explanation: 'Reconhecer o ponto do outro antes de contrapor ("That is an interesting perspective, but...") demonstra maturidade comunicativa.'
      },
      {
        id: 's-b1-op-3',
        type: 'speaking_item',
        itemTitle: 'Conclusão Confiante',
        contextScenario: 'Transmita confiança na capacidade da equipe de entregar o projeto no prazo.',
        modelAudioText: 'I really appreciate everyone’s dedication, and I am confident we can meet the deadline successfully.',
        speechRate: 0.95,
        targetPhrase: 'I really appreciate everyone’s dedication, and I am confident we can meet the deadline successfully.',
        phoneticFocus: 'Ênfase em "really appreciate", "confident" e "deadline".',
        pronunciationTip: 'Em "appreciate", o som do meio é /ʃi/: "a-PREE-she-ate". Diga "confident" com firmeza na primeira sílaba.',
        translation: 'Eu realmente aprecio a dedicação de todos e estou confiante de que podemos cumprir o prazo com sucesso.',
        explanation: 'Finalizar falas profissionais com agradecimento e convicção inspira a equipe e consolida liderança.'
      }
    ]
  },

  // 10. Treino de sons (B1)
  {
    id: 'speaking-b1-sound-ed-endings',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b1',
    topic: 'Morfologia & Sons: /t/, /d/, /ɪd/',
    title: 'As Três Pronúncias do -ED nos Verbos Regulares',
    description: 'Elimine de vez o vício de falar "ed" com som de sílaba extra quando não deve.',
    objective: 'Diferenciar e aplicar as 3 pronúncias do passado regular: /t/ (worked), /d/ (played) e /ɪd/ (wanted).',
    instructions: 'Identifique o som correto do -ED no questionário auditivo e grave a frase completa em voz alta.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Laboratório de fonologia avançada do passado simples',
      focusSound: 'Regra de ouro: o som /ɪd/ só existe após sons de T ou D (wanted, decided). Em todos os outros casos, é /t/ ou /d/ sem sílaba extra!',
      checklist: [
        'Não pronunciar a letra "e" em verbos como worked, stopped, played',
        'Aplicar som /t/ após consoantes surdas (k, p, s, sh, ch)',
        'Reservar o /ɪd/ exclusivamente após sons de T e D'
      ]
    },
    questions: [
      {
        id: 's-b1-ed-1',
        type: 'speaking_item',
        itemTitle: 'Som de /t/: Verbos Terminados em Sons Surdos',
        contextScenario: 'Frase com verbos regulares no passado terminados em /t/ (worked, talked, stopped).',
        modelAudioText: 'She worked late and finished the client presentation.',
        speechRate: 0.92,
        targetPhrase: 'She worked late and finished the client presentation.',
        phoneticFocus: '"worked" soa como /wɜːrkt/ e "finished" soa como /ˈfɪnɪʃt/.',
        pronunciationTip: 'Nunca diga "uórk-ed" com duas sílabas! Diga "work" e termine num estalo de "t": "wórkt".',
        translation: 'Ela trabalhou até tarde e finalizou a apresentação do cliente.',
        explanation: 'Após sons mudos como /k/ e /ʃ/, o sufixo -ED se converte foneticamente em /t/.',
        perceptionQuestion: {
          questionText: 'Como se pronuncia corretamente o verbo "worked" no passado?',
          audioText: 'worked',
          options: [
            { id: 'A', text: 'Com som final de /t/ em uma única sílaba (/wɜːrkt/)' },
            { id: 'B', text: 'Com duas sílabas terminando em "-ed" (/wɜːrk-ed/)' },
            { id: 'C', text: 'Com som final de /d/ suave' },
            { id: 'D', text: 'Com som de /ɪd/ como em wanted' }
          ],
          correctOptionId: 'A',
          explanation: '"Worked" é pronunciado em apenas uma sílaba terminando em /t/: /wɜːrkt/.'
        }
      },
      {
        id: 's-b1-ed-2',
        type: 'speaking_item',
        itemTitle: 'Som de /d/: Verbos com Sons Sonoros',
        contextScenario: 'Frase com verbos terminados em vogais ou consoantes sonoras (played, cleaned, lived).',
        modelAudioText: 'They played tennis and enjoyed the sunny afternoon.',
        speechRate: 0.94,
        targetPhrase: 'They played tennis and enjoyed the sunny afternoon.',
        phoneticFocus: '"played" soa como /pleɪd/ e "enjoyed" soa como /ɪnˈdʒɔɪd/.',
        pronunciationTip: 'Após vogais, o -ED soa como um simples "d" vocalizado colado na palavra: "pleid".',
        translation: 'Eles jogaram tênis e aproveitaram a tarde ensolarada.',
        explanation: 'Sons sonoros transferem a vibração para o /d/ sem adicionar nenhuma sílaba nova.',
        perceptionQuestion: {
          questionText: 'Em qual destes verbos o -ED tem pronúncia de /d/ suave sem criar nova sílaba?',
          audioText: 'played',
          options: [
            { id: 'A', text: 'Played (/pleɪd/)' },
            { id: 'B', text: 'Waited (/ˈweɪtɪd/)' },
            { id: 'C', text: 'Needed (/ˈniːdɪd/)' },
            { id: 'D', text: 'Invited (/ɪnˈvaɪtɪd/)' }
          ],
          correctOptionId: 'A',
          explanation: '"Played" termina em som /d/ em uma única sílaba. Os outros três terminam em /t/ ou /d/ e recebem /ɪd/.'
        }
      },
      {
        id: 's-b1-ed-3',
        type: 'speaking_item',
        itemTitle: 'Som de /ɪd/: Apenas Após T ou D',
        contextScenario: 'Frase onde o -ED adiciona uma nova sílaba obrigatoriamente (decided, started, needed).',
        modelAudioText: 'We decided to hire two developers and started interviews yesterday.',
        speechRate: 0.94,
        targetPhrase: 'We decided to hire two developers and started interviews yesterday.',
        phoneticFocus: '"decided" (/dɪˈsaɪdɪd/) e "started" (/ˈstɑːrtɪd/).',
        pronunciationTip: 'Como "decide" já termina com som de /d/, e "start" termina em /t/, é fisicamente impossível colar outro d/t sem criar a sílaba extra "-id".',
        translation: 'Nós decidimos contratar dois desenvolvedores e começamos as entrevistas ontem.',
        explanation: 'Apenas raízes terminadas no som /t/ ou /d/ ganham a sílaba /ɪd/ (ex: de-ci-did, star-tid).',
        perceptionQuestion: {
          questionText: 'Qual destes verbos no passado adiciona uma nova sílaba com som /ɪd/?',
          audioText: 'decided',
          options: [
            { id: 'A', text: 'Decided (três sílabas /dɪˈsaɪdɪd/)' },
            { id: 'B', text: 'Worked (uma sílaba /wɜːrkt/)' },
            { id: 'C', text: 'Played (uma sílaba /pleɪd/)' },
            { id: 'D', text: 'Called (uma sílaba /kɔːld/)' }
          ],
          correctOptionId: 'A',
          explanation: 'Como a raiz termina em som de /d/, o sufixo -ED ganha a sílaba extra /ɪd/: "de-ci-ded".'
        }
      }
    ]
  },

  // 11. Respostas rápidas (B1)
  {
    id: 'speaking-b1-rapid-workplace',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b1',
    topic: 'Ambiente Corporativo',
    title: 'Situações Profissionais e Negociação',
    description: 'Responda oralmente com precisão e diplomacia a imprevistos e perguntas complexas de trabalho.',
    objective: 'Desenvolver raciocínio rápido em inglês profissional sem hesitação ou tradução literal.',
    instructions: 'Ouça a pergunta do cliente ou gestor, grave sua resposta justificada e compare com os modelos.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Reunião ágil com clientes e coordenadores de equipe',
      checklist: [
        'Estrutura clara: resposta direta + justificativa + próximo passo',
        'Uso de vocabulário profissional sem rodeios excessivos',
        'Tom construtivo e propositivo'
      ]
    },
    questions: [
      {
        id: 's-b1-rw-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Remarcação de Reunião com Cliente',
        contextScenario: 'Um cliente importante pede para remarcar a reunião de alinhamento para amanhã à tarde.',
        modelAudioText: 'Could we possibly reschedule our status call to tomorrow at three PM instead of today?',
        speechRate: 0.94,
        targetPhrase: 'Yes, that works perfectly for me. I will update the calendar invite right away.',
        sampleResponses: [
          'Yes, that works perfectly for me. I will update the calendar invite right away.',
          'Tomorrow at three PM sounds great. Let me send you a revised invitation.',
          'Sure, no problem at all. I have that slot open and look forward to speaking tomorrow.'
        ],
        pronunciationTip: 'Responda com naturalidade: "that WORKS PER-fectly for me". Não hesite.',
        translation: 'Poderíamos possivelmente remarcar nossa ligação de status para amanhã às 15h em vez de hoje?',
        explanation: 'Confirmar disponibilidade com "that works for me" e prometer a atualização de convite é a melhor prática.'
      },
      {
        id: 's-b1-rw-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Priorização de Recursos',
        contextScenario: 'Seu gerente pergunta como você pretende lidar com uma nova tarefa urgente.',
        modelAudioText: 'How are you planning to handle the new urgent task without delaying our main deliverable?',
        speechRate: 0.94,
        targetPhrase: 'I will delegate the reporting tasks to Lucas so I can focus entirely on the urgent hotfix.',
        sampleResponses: [
          'I will delegate the reporting tasks to Lucas so I can focus entirely on the urgent hotfix.',
          'I plan to reprioritize my backlog and address the urgent task first thing tomorrow morning.',
          'By reallocating secondary tasks, we can keep the primary project on track while handling this priority.'
        ],
        pronunciationTip: 'A palavra "delegate" pronuncia-se /ˈdelɪɡeɪt/. Enfatize "entirely" e "urgent hotfix".',
        translation: 'Como você planeja lidar com a nova tarefa urgente sem atrasar nossa entrega principal?',
        explanation: 'Demonstrar proatividade propondo delegação ou repriorização transmite maturidade executiva.'
      },
      {
        id: 's-b1-rw-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Feedback Construtivo',
        contextScenario: 'Um colega pede sua opinião sobre os resultados parciais da campanha de marketing.',
        modelAudioText: 'What are your main thoughts on our initial campaign numbers so far?',
        speechRate: 0.95,
        targetPhrase: 'The engagement rate is promising, but we definitely need to optimize our conversion funnel.',
        sampleResponses: [
          'The engagement rate is promising, but we definitely need to optimize our conversion funnel.',
          'Overall results are solid, though I believe we should adjust our targeting for better ROI.',
          'Initial feedback is positive, but we should closely monitor retention over the next week.'
        ],
        pronunciationTip: '"Engagement" tem som inicial de "en-GAGE-ment". Em "promising", a tônica é na primeira sílaba.',
        translation: 'Quais são suas principais impressões sobre os números iniciais da nossa campanha até agora?',
        explanation: 'Equilibrar um ponto forte com uma oportunidade de melhoria é a fórmula ideal de análise profissional.'
      }
    ]
  },

  // 12. Fale em situações reais (B1)
  {
    id: 'speaking-b1-roleplay-airport',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'b1',
    topic: 'Companhia Aérea & Remarcação',
    title: 'Simulação: Resolvendo um Voo Atrasado no Aeroporto',
    description: 'Converse com o agente da companhia aérea para resolver a perda de uma conexão internacional.',
    objective: 'Negociar opções de voos, benefícios de hospedagem e realocação de bagagem em inglês fluido.',
    instructions: 'Acompanhe a conversa com o agente de atendimento, grave suas falas para cada turno e conclua a negociação.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Balcão de atendimento ao cliente em um aeroporto internacional',
      partnerRole: 'Agente da Companhia Aérea',
      userRole: 'Passageiro em Trânsito',
      checklist: [
        'Explicação calma e precisa do problema (conexão perdida)',
        'Escolha justificada entre opções alternativas de voo',
        'Confirmação clara sobre vouchers e bagagem despachada'
      ]
    },
    questions: [
      {
        id: 's-b1-ap-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Relatando a Conexão Perdida',
        contextScenario: 'Seu primeiro voo atrasou e você perdeu a conexão para Chicago. Explique a situação e peça a próxima alternativa.',
        modelAudioText: 'Good evening. I see you just arrived from Miami. How can I help you today?',
        speechRate: 0.95,
        targetPhrase: 'Hi. My incoming flight was delayed by two hours, so I missed my connection to Chicago. What are my options?',
        sampleResponses: [
          'Hi. My incoming flight was delayed by two hours, so I missed my connection to Chicago. What are my options?',
          'Good evening. Unfortunately, our flight was delayed and I missed the connecting flight. Could you please check the next flight out?',
          'Hello. Because of the weather delay, I missed my flight to Chicago. Can you rebook me on the earliest flight available?'
        ],
        pronunciationTip: '"Delayed" pronuncia-se /dɪˈleɪd/ com som de "d" suave no final. Mantenha um tom calmo e assertivo.',
        translation: 'Boa noite. Vejo que você acabou de chegar de Miami. Como posso te ajudar hoje?',
        explanation: 'Explicar a causa ("incoming flight was delayed") e a consequência ("missed my connection") orienta o atendente imediatamente.'
      },
      {
        id: 's-b1-ap-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Escolhendo a Melhor Opção de Reacomodação',
        contextScenario: 'O atendente oferece um voo hoje às 22h com escala ou um voo direto amanhã cedo com hotel pago. Escolha a opção de amanhã cedo.',
        modelAudioText: 'I have two options: a flight tonight at ten PM with a layover in Dallas, or a nonstop flight tomorrow at eight AM with a complimentary hotel stay. Which do you prefer?',
        speechRate: 0.96,
        targetPhrase: 'I would prefer the nonstop flight tomorrow morning, along with the hotel voucher, please.',
        sampleResponses: [
          'I would prefer the nonstop flight tomorrow morning, along with the hotel voucher, please.',
          'The morning direct flight sounds much better. Could you issue the hotel voucher for tonight?',
          "I'd rather take the nonstop flight tomorrow at eight and stay at the hotel tonight."
        ],
        pronunciationTip: '"Nonstop" (/ˌnɑːnˈstɑːp/) e "complimentary hotel" (hotel cortesia). Conecte "prefer the" suavemente.',
        translation: 'Tenho duas opções: um voo hoje às 22h com escala em Dallas, ou um voo direto amanhã às 8h com hospedagem em hotel por cortesia. Qual você prefere?',
        explanation: 'Fazer a escolha clara ("I would prefer...") poupa tempo e assegura os direitos de acomodação oferecidos.'
      },
      {
        id: 's-b1-ap-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Verificando Bagagem Despachada',
        contextScenario: 'O atendente emite seu novo cartão de embarque e voucher de hotel. Pergunte se sua mala será transferida automaticamente.',
        modelAudioText: 'Here is your new boarding pass for tomorrow at 8 AM and your hotel shuttle voucher. Anything else I can do for you?',
        speechRate: 0.95,
        targetPhrase: 'Thank you very much. Will my checked luggage be transferred automatically to tomorrow’s flight?',
        sampleResponses: [
          'Thank you very much. Will my checked luggage be transferred automatically to tomorrow’s flight?',
          'Thanks a lot. Do I need to collect my bags tonight, or will they go straight to Chicago?',
          'Thank you for your help. Could you just confirm what happens with my checked bags?'
        ],
        pronunciationTip: '"Checked luggage" pronuncia-se /tʃekt ˈlʌɡɪdʒ/. "Automatically" tem a tônica em "MAT": /ˌɔːtəˈmætɪkli/.',
        translation: 'Aqui está seu novo cartão de embarque para amanhã às 8h e o voucher para o transporte do hotel. Algo mais que posso fazer por você?',
        explanation: 'Esclarecer o destino das malas despachadas é fundamental antes de deixar a área segura do aeroporto.'
      }
    ]
  }
];

export function getSpeakingActivities(level?: string, type?: string): Activity<SpeakingQuestion>[] {
  return SPEAKING_ACTIVITIES.filter((act) => {
    const matchesLevel = !level || level.toLowerCase() === 'all' || act.level.toLowerCase() === level.toLowerCase();
    const matchesType = !type || type.toLowerCase() === 'all' || act.type.toLowerCase() === type.toLowerCase();
    return matchesLevel && matchesType;
  });
}

export function getSpeakingActivityById(id: string): Activity<SpeakingQuestion> | undefined {
  return SPEAKING_ACTIVITIES.find((a) => a.id === id);
}

import { Activity, SpeakingQuestion } from '../../types/activity';

export const SPEAKING_A2: Activity<SpeakingQuestion>[] = [
  // 1. Ouça e imite (A2) - Existente
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

  // 2. Treino de sons (A2) - Existente
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

  // 3. Respostas rápidas (A2) - Existente
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

  // 4. Fale em situações reais (A2) - Existente
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

  // 5. Ouça e imite (A2) - Novo
  {
    id: 'speaking-a2-shadow-travel-plans',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a2',
    topic: 'Viagens & Passado Simples',
    title: 'Falando de Viagens e Experiências Passadas',
    description: 'Pratique a entonação de relatos no passado, destacando verbos e detalhes de roteiro com naturalidade.',
    objective: 'Articular sentenças no passado simples com ritmo contínuo e pronúncia correta de conectivos.',
    instructions: 'Ouça as frases narrativas sobre viagens e repita imitando a melodia e as pausas do falante.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Compartilhando histórias de férias com amigos',
      checklist: [
        'Destaque dos verbos de ação no passado',
        'Pausa leve nas vírgulas e conectores temporais',
        'Entonação conclusiva ao fim de cada declaração'
      ]
    },
    questions: [
      {
        id: 's-a2-tp-1',
        type: 'speaking_item',
        itemTitle: 'Partida e Viagem de Carro',
        contextScenario: 'Relate que vocês saíram cedo e viajaram pelo litoral.',
        modelAudioText: 'We left early in the morning and drove along the coast.',
        speechRate: 0.9,
        targetPhrase: 'We left early in the morning and drove along the coast.',
        phoneticFocus: 'Ligue "left early" como "lef-tearly". Pronúncia de "coast" com ditongo /oʊst/.',
        pronunciationTip: 'Mantenha a vogal aberta em "morning" e não coloque vogal no final de "coast".',
        translation: 'Nós saímos de manhã cedo e dirigimos ao longo do litoral.',
        explanation: 'O passado irregular "left" e "drove" ganha fluidez quando conectado às palavras seguintes.'
      },
      {
        id: 's-a2-tp-2',
        type: 'speaking_item',
        itemTitle: 'Visita à Cidade Antiga',
        contextScenario: 'Conte que vocês visitaram um museu pequeno e almoçaram numa praça.',
        modelAudioText: 'We visited a small museum and had lunch in the central square.',
        speechRate: 0.9,
        targetPhrase: 'We visited a small museum and had lunch in the central square.',
        phoneticFocus: '"visited" tem três sílabas (/ˈvɪzɪtɪd/). "museum" tem tônica na segunda: /mjuːˈziːəm/.',
        pronunciationTip: 'Em "had lunch", solte o "d" suavemente antes do "l".',
        translation: 'Visitamos um pequeno museu e almoçamos na praça central.',
        explanation: 'Expressar relatos em sequência com "and" exige manter a frase ritmada até o ponto final.'
      },
      {
        id: 's-a2-tp-3',
        type: 'speaking_item',
        itemTitle: 'Sensação ao Voltar para Casa',
        contextScenario: 'Diga que a viagem foi cansativa, mas valeu cada minuto.',
        modelAudioText: 'The trip was quite tiring, but we really enjoyed every single moment.',
        speechRate: 0.9,
        targetPhrase: 'The trip was quite tiring, but we really enjoyed every single moment.',
        phoneticFocus: '"tiring" (/ˈtaɪərɪŋ/) e "enjoyed" (/ɪnˈdʒɔɪd/ - uma sílaba sonora sem "ed" falado).',
        pronunciationTip: 'Dê ênfase em "really enjoyed" para demonstrar entusiasmo genuíno.',
        translation: 'A viagem foi bem cansativa, mas realmente aproveitamos cada momento.',
        explanation: 'Contrastar cansaço e satisfação com "but" é uma estrutura comunicativa muito comum em A2.'
      }
    ]
  },

  // 6. Ouça e imite (A2) - Novo
  {
    id: 'speaking-a2-shadow-polite-requests',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a2',
    topic: 'Pedidos Corteses & Modais',
    title: 'Pedidos Gentis com Would e Could',
    description: 'Treine a entonação suave e respeitosa ao pedir favores, informações e serviços.',
    objective: 'Produzir perguntas de cortesia com entonação amigável e elisão suave de consoantes.',
    instructions: 'Ouça as solicitações formais e repita modulando o tom para transmitir cordialidade.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Ambientes públicos, escritórios e atendimento ao cliente',
      checklist: [
        'Curva melódica suave sem tom áspero ou impositivo',
        'Ligação natural de "Would you" e "Could you"',
        'Palavra "please" ao final com tom ameno'
      ]
    },
    questions: [
      {
        id: 's-a2-pr-1',
        type: 'speaking_item',
        itemTitle: 'Pedindo para Repetir',
        contextScenario: 'Peça educadamente para o atendente repetir a última frase.',
        modelAudioText: 'Could you please repeat that a little more slowly?',
        speechRate: 0.9,
        targetPhrase: 'Could you please repeat that a little more slowly?',
        phoneticFocus: '"Could you" (/kʊdʒuː/) com fusão suave.',
        pronunciationTip: 'Em "more slowly", termine a frase com uma curva levemente ascendente de cortesia.',
        translation: 'Você poderia por favor repetir isso um pouco mais devagar?',
        explanation: 'Frase indispensável para todo estudante de inglês em viagens e trabalho.'
      },
      {
        id: 's-a2-pr-2',
        type: 'speaking_item',
        itemTitle: 'Verificando a Janela',
        contextScenario: 'Pergunte se a outra pessoa se importaria se você abrisse a janela.',
        modelAudioText: 'Would you mind if I opened the window for a few minutes?',
        speechRate: 0.9,
        targetPhrase: 'Would you mind if I opened the window for a few minutes?',
        phoneticFocus: '"Would you mind" (/wʊdʒuː maɪnd/) e ligação "if I" (/ɪfaɪ/).',
        pronunciationTip: 'Não fale o "d" de "opened" como sílaba separada; é apenas um /d/ colado.',
        translation: 'Você se importaria se eu abrisse a janela por alguns minutos?',
        explanation: '"Would you mind if..." demonstra respeito pelo espaço alheio em transporte ou escritório.'
      },
      {
        id: 's-a2-pr-3',
        type: 'speaking_item',
        itemTitle: 'Solicitando a Conta',
        contextScenario: 'Peça ao garçom a conta quando todos terminaram a refeição.',
        modelAudioText: 'Whenever you have a moment, could we have the bill, please?',
        speechRate: 0.9,
        targetPhrase: 'Whenever you have a moment, could we have the bill, please?',
        phoneticFocus: '"Whenever you" (/wenˈevər ju/) e "have the bill" (/hæv ðə bɪl/).',
        pronunciationTip: 'A expressão introdutória "Whenever you have a moment" adiciona simpatia e elegância.',
        translation: 'Quando tiver um momento, poderia nos trazer a conta, por favor?',
        explanation: 'Uma maneira atenciosa de pedir a conta sem parecer apressado ou exigente.'
      }
    ]
  },

  // 7. Ouça e imite (A2) - Novo
  {
    id: 'speaking-a2-shadow-weekend-weather',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'a2',
    topic: 'Previsão do Tempo & Planos',
    title: 'Falando sobre o Tempo e Planos de Fim de Semana',
    description: 'Pratique frases sobre clima e atividades ao ar livre com adjetivos descritivos.',
    objective: 'Usar vocabulário de previsão meteorológica com ritmo fluente e pausas naturais.',
    instructions: 'Ouça as frases e grave sua repetição com foco no ritmo das palavras de conteúdo.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Conversa no elevador ou pausa do café com vizinhos',
      checklist: [
        'Articulação nítida de adjetivos de clima (sunny, windy, cloudy)',
        'Uso correto de "going to" para previsões',
        'Tom relaxado de conversa casual'
      ]
    },
    questions: [
      {
        id: 's-a2-ww-1',
        type: 'speaking_item',
        itemTitle: 'Previsão Ensolarada',
        contextScenario: 'Comente que o sábado vai estar ensolarado e perfeito para um piquenique.',
        modelAudioText: 'The forecast says Saturday will be warm and sunny all day.',
        speechRate: 0.9,
        targetPhrase: 'The forecast says Saturday will be warm and sunny all day.',
        phoneticFocus: '"forecast" (/ˈfɔːrkæst/) com tônica na primeira sílaba.',
        pronunciationTip: 'Ligue "warm and" como "war-mand". O "all day" recebe ênfase final.',
        translation: 'A previsão diz que sábado será quente e ensolarado o dia todo.',
        explanation: 'Falar do tempo é o tema universal de abertura de conversas em países de língua inglesa.'
      },
      {
        id: 's-a2-ww-2',
        type: 'speaking_item',
        itemTitle: 'Possibilidade de Chuva',
        contextScenario: 'Alerte que pode chover no domingo à tarde, então é melhor levar guarda-chuva.',
        modelAudioText: 'It might rain on Sunday afternoon, so take an umbrella just in case.',
        speechRate: 0.9,
        targetPhrase: 'It might rain on Sunday afternoon, so take an umbrella just in case.',
        phoneticFocus: '"might rain" (/maɪt reɪn/) e "just in case" (/dʒʌst ɪn keɪs/).',
        pronunciationTip: '"Just in case" forma um único bloco sonoro ritmado.',
        translation: 'Pode ser que chova no domingo à tarde, então leve um guarda-chuva por via das dúvidas.',
        explanation: '"Might" expressa probabilidade moderada e "just in case" é uma expressão essencial do dia a dia.'
      },
      {
        id: 's-a2-ww-3',
        type: 'speaking_item',
        itemTitle: 'Mudança de Planos',
        contextScenario: 'Sugira ir ao cinema se o tempo esfriar muito.',
        modelAudioText: 'If it gets too chilly outside, we can stay indoors and watch a movie.',
        speechRate: 0.9,
        targetPhrase: 'If it gets too chilly outside, we can stay indoors and watch a movie.',
        phoneticFocus: '"chilly" (/ˈtʃɪli/) e "indoors" (/ˌɪnˈdɔːrz/).',
        pronunciationTip: 'Faça uma pequena pausa na vírgula após "outside" antes da consequência "we can stay".',
        translation: 'Se esfriar demais lá fora, podemos ficar em um lugar fechado e ver um filme.',
        explanation: 'Primeira condicional simplificada com "If it gets... we can..." no nível A2.'
      }
    ]
  },

  // 8. Treino de sons (A2) - Novo
  {
    id: 'speaking-a2-sound-final-consonants',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a2',
    topic: 'Consoantes Finais: /t/, /d/, /k/',
    title: 'Articulação de Consoantes Finais sem Vogal de Apoio',
    description: 'Evite adicionar som de "i" ao final de palavras inglesas terminadas em consoante oclusiva.',
    objective: 'Produzir paradas consonantais limpas em palavras como cat, bad, look sem dizer "cati" ou "badi".',
    instructions: 'Identifique no teste qual som fecha a palavra e pratique a gravação sem vogal residual.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica de pronúncia para neutralizar o hábito da vogal epentética',
      focusSound: 'Cessar a expiração exatamente ao fechar os dentes ou lábios na consoante final.',
      checklist: [
        'Final limpo sem som de vogal extra',
        'Contraste nítido entre consoante surda e sonora',
        'Gravação firme e audível'
      ]
    },
    questions: [
      {
        id: 's-a2-fc-1',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Hat vs Had',
        contextScenario: 'Diferença entre chapéu (hat - som /t/) e o passado de ter (had - som /d/).',
        modelAudioText: 'He wore a dark hat that he had bought.',
        speechRate: 0.88,
        targetPhrase: 'He wore a dark hat that he had bought.',
        phoneticFocus: '/hæt/ (interrompe o ar de repente) vs /hæd/ (vibra brevemente sem soltar vogal).',
        pronunciationTip: 'Trave a língua no céu da boca para o /t/ de "hat" sem soltar nenhum "chiado" ou "i".',
        translation: 'Ele usava um chapéu escuro que havia comprado.',
        explanation: 'Falantes de português tendem a dizer "hatchi" ou "hedi". A consoante final deve ser seca.',
        perceptionQuestion: {
          questionText: 'Qual das palavras termina no som mudo e seco de /t/?',
          audioText: 'hat',
          options: [
            { id: 'A', text: 'Hat (termina em /t/ seco)' },
            { id: 'B', text: 'Had (termina em /d/ vozeado)' },
            { id: 'C', text: 'Has (termina em /z/ fricativo)' },
            { id: 'D', text: 'Have (termina em /v/)' }
          ],
          correctOptionId: 'A',
          explanation: '"Hat" fecha a boca com o som seco da consoante /t/ sem vibração vocal.'
        }
      },
      {
        id: 's-a2-fc-2',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Back vs Bag',
        contextScenario: 'Diferença entre costas/voltar (back - som /k/) e bolsa/sacola (bag - som /ɡ/).',
        modelAudioText: 'Put the heavy bag on your back.',
        speechRate: 0.88,
        targetPhrase: 'Put the heavy bag on your back.',
        phoneticFocus: '/bæk/ (som surdo velar) vs /bæɡ/ (som sonoro velar).',
        pronunciationTip: 'Não diga "begui" ou "béqui". Interrompa o fluxo de ar na garganta.',
        translation: 'Coloque a bolsa pesada nas suas costas.',
        explanation: 'A distinção entre /k/ e /ɡ/ no fim da palavra depende da vibração das cordas vocais.',
        perceptionQuestion: {
          questionText: 'Qual palavra termina na consoante oclusiva surda /k/?',
          audioText: 'back',
          options: [
            { id: 'A', text: 'Bag (termina em /ɡ/)' },
            { id: 'B', text: 'Back (termina em /k/)' },
            { id: 'C', text: 'Bat (termina em /t/)' },
            { id: 'D', text: 'Bad (termina em /d/)' }
          ],
          correctOptionId: 'B',
          explanation: '"Back" (/bæk/) termina com o estalo surdo do fonema /k/.'
        }
      },
      {
        id: 's-a2-fc-3',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Right vs Ride',
        contextScenario: 'Diferença entre certo/direita (right) e passeio/andar de carro (ride).',
        modelAudioText: 'Take the right road for a quiet ride.',
        speechRate: 0.9,
        targetPhrase: 'Take the right road for a quiet ride.',
        phoneticFocus: '/raɪt/ (vogal mais curta antes de som surdo) vs /raɪd/ (vogal mais longa antes de som sonoro).',
        pronunciationTip: 'A vogal de "ride" dura um pouco mais que a de "right" antes da parada final.',
        translation: 'Pegue a estrada certa para um passeio tranquilo.',
        explanation: 'Em inglês, a vogal que precede uma consoante sonora (/d/) é naturalmente mais longa.',
        perceptionQuestion: {
          questionText: 'Na audição, qual palavra tem a consoante final sonora /d/?',
          audioText: 'ride',
          options: [
            { id: 'A', text: 'Right (termina em /t/)' },
            { id: 'B', text: 'Ride (termina em /d/ com vogal prolongada)' },
            { id: 'C', text: 'Write (termina em /t/)' },
            { id: 'D', text: 'Ripe (termina em /p/)' }
          ],
          correctOptionId: 'B',
          explanation: '"Ride" (/raɪd/) termina com o som sonoro /d/ e tem a vogal ligeiramente mais longa.'
        }
      }
    ]
  },

  // 9. Treino de sons (A2) - Novo
  {
    id: 'speaking-a2-sound-w-vs-r',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a2',
    topic: 'Semivogais: /w/ vs /r/',
    title: 'Distinção entre /w/ e /r/ (West vs Rest)',
    description: 'Treine a posição dos lábios e da língua para não confundir palavras que começam com W e R.',
    objective: 'Arredondar os lábios para /w/ e recolher a língua no palato sem tocar para /r/.',
    instructions: 'Ouça as diferenças nos pares mínimos e grave a frase modelo com articulação precisa.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Treino articulatório de lábios e língua',
      focusSound: '/w/ (bico nos lábios) vs /r/ (língua curva para trás, sem tocar no céu da boca)',
      checklist: [
        'Lábios em formato de "u" para o som /w/',
        'Língua curvada para trás sem vibrar para o /r/ americano',
        'Contraste claro no par mínimo'
      ]
    },
    questions: [
      {
        id: 's-a2-wr-1',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Wait vs Rate',
        contextScenario: 'Diferença entre esperar (wait) e taxa/avaliar (rate).',
        modelAudioText: 'Please wait until we check the exchange rate.',
        speechRate: 0.88,
        targetPhrase: 'Please wait until we check the exchange rate.',
        phoneticFocus: '/weɪt/ (lábios arredondados) vs /reɪt/ (língua retraída).',
        pronunciationTip: 'Para "wait", faça um pequeno bico com os lábios como quem vai assobiar.',
        translation: 'Por favor, aguarde até verificarmos a taxa de câmbio.',
        explanation: 'Confundir W e R pode comprometer a compreensão de verbos cruciais em conversas cotidianas.',
        perceptionQuestion: {
          questionText: 'Qual palavra começa com o som semivocálico arredondado /w/?',
          audioText: 'wait',
          options: [
            { id: 'A', text: 'Wait (som /w/)' },
            { id: 'B', text: 'Rate (som /r/)' },
            { id: 'C', text: 'Late (som /l/)' },
            { id: 'D', text: 'Bait (som /b/)' }
          ],
          correctOptionId: 'A',
          explanation: '"Wait" inicia com a semivogal labializada /w/.'
        }
      },
      {
        id: 's-a2-wr-2',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: West vs Rest',
        contextScenario: 'Diferença entre o ponto cardeal oeste (west) e descanso (rest).',
        modelAudioText: 'Travel to the west and take a good rest.',
        speechRate: 0.9,
        targetPhrase: 'Travel to the west and take a good rest.',
        phoneticFocus: '/west/ vs /rest/.',
        pronunciationTip: 'Em "rest", puxe o corpo da língua para trás em direção à garganta sem tocar o céu da boca.',
        translation: 'Viaje para o oeste e descanse bastante.',
        explanation: 'A clareza entre /w/ e /r/ transmite segurança imediata na fala em inglês.',
        perceptionQuestion: {
          questionText: 'Qual das opções foi pronunciada com a consoante líquida /r/?',
          audioText: 'rest',
          options: [
            { id: 'A', text: 'West (oeste)' },
            { id: 'B', text: 'Rest (descanso)' },
            { id: 'C', text: 'Nest (ninho)' },
            { id: 'D', text: 'Best (melhor)' }
          ],
          correctOptionId: 'B',
          explanation: '"Rest" (/rest/) começa com o som retroflexo do R.'
        }
      },
      {
        id: 's-a2-wr-3',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Week vs Reek',
        contextScenario: 'Diferença entre semana (week) e cheirar forte (reek).',
        modelAudioText: 'We spent the whole week painting the room.',
        speechRate: 0.9,
        targetPhrase: 'We spent the whole week painting the room.',
        phoneticFocus: '/wiːk/ (bico fechado inicial) seguido de vogal longa /iː/.',
        pronunciationTip: 'Focalize a transição suave de "week" para "painting".',
        translation: 'Passamos a semana inteira pintando o quarto.',
        explanation: '"Week" é uma das palavras de tempo mais frequentes no idioma.',
        perceptionQuestion: {
          questionText: 'Qual termo corresponde à palavra que significa semana?',
          audioText: 'week',
          options: [
            { id: 'A', text: 'Week (semana, com som /w/)' },
            { id: 'B', text: 'Reek (cheiro forte, com som /r/)' },
            { id: 'C', text: 'Leek (alho-poró, com som /l/)' },
            { id: 'D', text: 'Peak (pico, com som /p/)' }
          ],
          correctOptionId: 'A',
          explanation: '"Week" (/wiːk/) significa semana e inicia com o fonema /w/.'
        }
      }
    ]
  },

  // 10. Treino de sons (A2) - Novo
  {
    id: 'speaking-a2-sound-b-vs-v',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'a2',
    topic: 'Consoantes: /b/ vs /v/',
    title: 'Distinção entre Bilabial /b/ e Labiodental /v/',
    description: 'Evite a confusão entre encostar os dois lábios (/b/) ou apoiar os dentes no lábio inferior (/v/).',
    objective: 'Dominar o ponto de articulação exato de B e V para falar com máxima clareza.',
    instructions: 'Responda ao teste auditivo e grave a sentença mantendo o ponto de articulação correto.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Ajuste de articulação labial e labiodental',
      focusSound: '/b/ (dois lábios se tocam e se soltam) vs /v/ (dentes superiores no lábio inferior)',
      checklist: [
        'Toque bilabial limpo em B',
        'Fricção com vibração sonora contínua em V',
        'Contraste nítido em pares mínimos'
      ]
    },
    questions: [
      {
        id: 's-a2-bv-1',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Berry vs Very',
        contextScenario: 'Diferença entre fruta vermelha (berry) e o intensificador muito (very).',
        modelAudioText: 'This fresh berry is very sweet.',
        speechRate: 0.9,
        targetPhrase: 'This fresh berry is very sweet.',
        phoneticFocus: '/ˈberi/ (lábio contra lábio) vs /ˈveri/ (dentes no lábio inferior).',
        pronunciationTip: 'Para "very", deixe o ar vibrar entre os dentes de cima e o lábio de baixo como um pequeno zumbido.',
        translation: 'Esta fruta fresca é muito doce.',
        explanation: 'Dizer "berry" no lugar de "very" soa estranho para ouvintes nativos.',
        perceptionQuestion: {
          questionText: 'Qual das palavras foi pronunciada com o som labiodental /v/?',
          audioText: 'very',
          options: [
            { id: 'A', text: 'Berry (com /b/ bilabial)' },
            { id: 'B', text: 'Very (com /v/ labiodental)' },
            { id: 'C', text: 'Bury (com /b/ bilabial)' },
            { id: 'D', text: 'Ferry (com /f/ surdo)' }
          ],
          correctOptionId: 'B',
          explanation: '"Very" (/ˈveri/) é produzida com os dentes superiores apoiados no lábio inferior e vibração sonora.'
        }
      },
      {
        id: 's-a2-bv-2',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Best vs Vest',
        contextScenario: 'Diferença entre melhor (best) e colete (vest).',
        modelAudioText: 'He wore his best warm vest on the hike.',
        speechRate: 0.9,
        targetPhrase: 'He wore his best warm vest on the hike.',
        phoneticFocus: '/best/ vs /vest/.',
        pronunciationTip: 'Solte a explosão bilabial de "best" e logo em seguida posicione os dentes para o "v" de "vest".',
        translation: 'Ele usou seu melhor colete quente na caminhada.',
        explanation: 'Essa alternância rápida desenvolve agilidade muscular na fala.',
        perceptionQuestion: {
          questionText: 'Qual palavra corresponde ao substantivo colete?',
          audioText: 'vest',
          options: [
            { id: 'A', text: 'Best (melhor)' },
            { id: 'B', text: 'Vest (colete)' },
            { id: 'C', text: 'Pest (praga)' },
            { id: 'D', text: 'Rest (descanso)' }
          ],
          correctOptionId: 'B',
          explanation: '"Vest" (/vest/) significa colete e começa com a fricativa sonora /v/.'
        }
      },
      {
        id: 's-a2-bv-3',
        type: 'speaking_item',
        itemTitle: 'Par Mínimo: Boat vs Vote',
        contextScenario: 'Diferença entre barco (boat) e voto/votar (vote).',
        modelAudioText: 'Everyone on the boat decided to vote.',
        speechRate: 0.9,
        targetPhrase: 'Everyone on the boat decided to vote.',
        phoneticFocus: '/boʊt/ vs /voʊt/.',
        pronunciationTip: 'O ditongo /oʊ/ é idêntico em ambas; o que muda é unicamente a consoante inicial.',
        translation: 'Todos no barco decidiram votar.',
        explanation: 'Dominar esse par mínimo elimina ambiguidades comuns em conversas casuais.',
        perceptionQuestion: {
          questionText: 'Qual palavra foi pronunciada com os dois lábios se tocando no início?',
          audioText: 'boat',
          options: [
            { id: 'A', text: 'Vote (voto, som /v/)' },
            { id: 'B', text: 'Boat (barco, som /b/)' },
            { id: 'C', text: 'Coat (casaco, som /k/)' },
            { id: 'D', text: 'Goat (cabra, som /ɡ/)' }
          ],
          correctOptionId: 'B',
          explanation: '"Boat" (/boʊt/) inicia com a oclusiva bilabial /b/.'
        }
      }
    ]
  },

  // 11. Respostas rápidas (A2) - Novo
  {
    id: 'speaking-a2-rapid-shopping-store',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a2',
    topic: 'Compras & Vestuário',
    title: 'Perguntas Rápidas na Loja de Roupas',
    description: 'Responda com agilidade a dúvidas de atendentes sobre tamanhos, cores e formas de pagamento.',
    objective: 'Expressar preferências de compra e ajustes de produto com respostas diretas e completas.',
    instructions: 'Ouça a pergunta do vendedor e grave sua resposta oral sem pausar para traduzir mentalmente.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Provador e balcão de uma loja de roupas',
      checklist: [
        'Uso de vocabulário de tamanhos (medium, large, fit)',
        'Respostas objetivas com gentileza',
        'Pronúncia natural de expressões de preferência'
      ]
    },
    questions: [
      {
        id: 's-a2-rs-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Tamanho no Provador',
        contextScenario: 'A atendente pergunta se o casaco serviu ou se você prefere outro tamanho.',
        modelAudioText: 'How did that jacket fit you? Would you like to try a larger size?',
        speechRate: 0.9,
        targetPhrase: 'It is a bit too tight in the shoulders. Do you have this in large?',
        sampleResponses: [
          'It is a bit too tight in the shoulders. Do you have this in large?',
          'Actually, it is a little small. Could I try one size up, please?',
          'It is slightly tight. Do you have a medium or large available?'
        ],
        pronunciationTip: 'Diga "a bit too tight" com fluidez sem separar cada sílaba mecanicamente.',
        translation: 'Como ficou essa jaqueta em você? Gostaria de provar um tamanho maior?',
        explanation: 'Explicar o ajuste ("a bit too tight") e pedir o tamanho ("in large") é a conduta padrão.'
      },
      {
        id: 's-a2-rs-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Preferência de Cor',
        contextScenario: 'O vendedor pergunta se você prefere a camiseta em azul-marinho ou cinza.',
        modelAudioText: 'We also have this t-shirt in navy blue and heather grey. Which one do you prefer?',
        speechRate: 0.9,
        targetPhrase: 'I really like the navy blue one. It goes better with my jeans.',
        sampleResponses: [
          'I really like the navy blue one. It goes better with my jeans.',
          'The navy blue looks great. I will take that one, please.',
          'I prefer the grey one, thank you. It looks very comfortable.'
        ],
        pronunciationTip: '"Navy blue one": use "one" para não repetir a palavra camiseta.',
        translation: 'Nós também temos esta camiseta em azul-marinho e cinza mescla. Qual você prefere?',
        explanation: 'Usar "the [adjetivo] one" evita redundância e soa muito natural em inglês.'
      },
      {
        id: 's-a2-rs-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Nota Fiscal e Recibo de Troca',
        contextScenario: 'No caixa, perguntam se você gostaria do recibo por e-mail ou impresso na sacola.',
        modelAudioText: 'Would you prefer your receipt printed in the bag or sent to your email?',
        speechRate: 0.92,
        targetPhrase: 'Printed in the bag is fine, thank you so much.',
        sampleResponses: [
          'Printed in the bag is fine, thank you so much.',
          'Could you please print it and put it in the bag?',
          'To my email, please. I can type the address on the screen.'
        ],
        pronunciationTip: 'Ligue "Printed in the bag is fine" com ritmo calmo e conclusivo.',
        translation: 'Você prefere o seu recibo impresso na sacola ou enviado para o seu e-mail?',
        explanation: 'Responder escolhas com "[Opção] is fine, thank you" é uma das fórmulas mais educadas.'
      }
    ]
  },

  // 12. Respostas rápidas (A2) - Novo
  {
    id: 'speaking-a2-rapid-restaurant-preferences',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a2',
    topic: 'Alimentação & Restrições',
    title: 'Preferências e Restrições no Restaurante',
    description: 'Responda prontamente a perguntas de garçons sobre acompanhamentos, ponto da carne e alergias.',
    objective: 'Comunicar preferências alimentares com clareza para garantir uma refeição adequada.',
    instructions: 'Ouça o atendente do restaurante e grave sua resposta espontânea e objetiva.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Mesa de jantar em um restaurante bistrô',
      checklist: [
        'Vocabulário culinário básico (dressing on the side, well-done, allergy)',
        'Uso polido de "I would like" ou "I prefer"',
        'Pronúncia clara dos ingredientes'
      ]
    },
    questions: [
      {
        id: 's-a2-rr-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Escolha do Acompanhamento',
        contextScenario: 'O garçom pergunta se você prefere salada da casa ou batatas assadas.',
        modelAudioText: 'Your main dish comes with one side. Would you prefer a house salad or roasted potatoes?',
        speechRate: 0.9,
        targetPhrase: 'I would prefer roasted potatoes, please. Could you bring them without butter?',
        sampleResponses: [
          'I would prefer roasted potatoes, please. Could you bring them without butter?',
          'The house salad, please, with dressing on the side.',
          'Roasted potatoes sound great, thank you!'
        ],
        pronunciationTip: '"Roasted potatoes" tem tônica em "ROAS-ted po-TA-toes".',
        translation: 'Seu prato principal vem com um acompanhamento. Você prefere salada da casa ou batatas assadas?',
        explanation: 'Fazer pedidos especiais simples com "without..." ou "with dressing on the side" é muito comum.'
      },
      {
        id: 's-a2-rr-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Verificando Alergias',
        contextScenario: 'O garçom pergunta se alguém na mesa tem alguma restrição ou alergia alimentar.',
        modelAudioText: 'Does anyone at the table have any food allergies we should be aware of?',
        speechRate: 0.9,
        targetPhrase: 'Yes, I am allergic to peanuts, so please make sure there are no nuts in my dish.',
        sampleResponses: [
          'Yes, I am allergic to peanuts, so please make sure there are no nuts in my dish.',
          'No allergies for us, thank you for checking!',
          'I cannot eat dairy products, so please avoid cream or cheese.'
        ],
        pronunciationTip: '"Allergic" pronuncia-se /əˈlɜːrdʒɪk/ com tônica no meio.',
        translation: 'Alguém na mesa tem alguma alergia alimentar da qual devamos estar cientes?',
        explanation: 'Saber comunicar alergias com segurança em inglês é crucial para a saúde e tranquilidade.'
      },
      {
        id: 's-a2-rr-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Bebidas com a Refeição',
        contextScenario: 'O atendente pergunta se você gostaria de água mineral com ou sem gás.',
        modelAudioText: 'Can I get some water started for you? Still or sparkling?',
        speechRate: 0.92,
        targetPhrase: 'Still water with ice and a slice of lemon, please.',
        sampleResponses: [
          'Still water with ice and a slice of lemon, please.',
          'Sparkling water with lime, please, thank you.',
          'Just regular tap water is great, thanks.'
        ],
        pronunciationTip: '"Still water" (sem gás) e "sparkling" (com gás). Ligue "slice of lemon" suavemente.',
        translation: 'Posso providenciar uma água para vocês? Sem gás ou com gás?',
        explanation: '"Still" e "sparkling" são os termos internacionais padrão para água mineral.'
      }
    ]
  },

  // 13. Respostas rápidas (A2) - Novo
  {
    id: 'speaking-a2-rapid-daily-schedule',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'a2',
    topic: 'Compromissos & Agenda',
    title: 'Agendamento e Horários de Compromissos',
    description: 'Responda oralmente a propostas de horários para consultas, treinos ou reuniões casuais.',
    objective: 'Confirmar, ajustar ou recusar horários com clareza e cortesia.',
    instructions: 'Ouça o assistente ou colega propor um horário e grave sua confirmação ou contraproposta.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Ligação para agendamento de consulta ou encontro',
      checklist: [
        'Uso correto de preposições de tempo (at, on, around)',
        'Confirmação clara de dia da semana e hora',
        'Alternativa educada caso não possa no horário proposto'
      ]
    },
    questions: [
      {
        id: 's-a2-rsch-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Agendamento no Dentista',
        contextScenario: 'A recepcionista pergunta se terça-feira às 14h é conveniente para você.',
        modelAudioText: 'We have an opening next Tuesday at two o’clock in the afternoon. Does that work for you?',
        speechRate: 0.9,
        targetPhrase: 'Tuesday at two PM works perfectly for me. Please book that slot.',
        sampleResponses: [
          'Tuesday at two PM works perfectly for me. Please book that slot.',
          'Yes, that time is great! Thank you so much.',
          'Actually, could we do Wednesday morning instead? Tuesday is busy for me.'
        ],
        pronunciationTip: '"Tuesday" pronuncia-se /ˈtjuːzdeɪ/ ou /ˈtuːzdeɪ/. Diga "works perfectly" com firmeza.',
        translation: 'Temos uma vaga na próxima terça-feira às duas horas da tarde. Esse horário funciona para você?',
        explanation: '"That works for me" é a expressão mais natural para confirmar horários em inglês.'
      },
      {
        id: 's-a2-rsch-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Treino na Academia',
        contextScenario: 'Um instrutor pergunta a que horas você prefere fazer a aula experimental.',
        modelAudioText: 'What time would you like to schedule your first workout session this week?',
        speechRate: 0.9,
        targetPhrase: 'I would like to come on Thursday evening around six thirty, if possible.',
        sampleResponses: [
          'I would like to come on Thursday evening around six thirty, if possible.',
          'Early morning around seven AM would be ideal for my routine.',
          'Friday afternoon after four PM is best for me.'
        ],
        pronunciationTip: 'Use "around" para indicar horários aproximados de forma flexível.',
        translation: 'A que horas você gostaria de agendar sua primeira sessão de treino esta semana?',
        explanation: 'Combinar dia ("on Thursday") com horário ("around six thirty") é a fórmula completa de agendamento.'
      },
      {
        id: 's-a2-rsch-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Adiantando um Encontro',
        contextScenario: 'Um amigo pergunta se vocês podem se encontrar trinta minutos mais cedo do que o planejado.',
        modelAudioText: 'Hey, traffic looks light today. Could we meet thirty minutes earlier at the cafe?',
        speechRate: 0.92,
        targetPhrase: 'No problem at all! I will leave now and see you there in fifteen minutes.',
        sampleResponses: [
          'No problem at all! I will leave now and see you there in fifteen minutes.',
          'Sure, thirty minutes earlier is totally fine with me.',
          'I might be just five minutes late, but I will be there as soon as I can!'
        ],
        pronunciationTip: 'Conecte "No problem at all" como "No pro-blem-a-tall".',
        translation: 'Ei, o trânsito parece tranquilo hoje. Poderíamos nos encontrar trinta minutos mais cedo no café?',
        explanation: '"No problem at all" demonstra cooperação amigável em reagendamentos de rotina.'
      }
    ]
  },

  // 14. Fale em situações reais (A2) - Novo
  {
    id: 'speaking-a2-roleplay-clothing-exchange',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'a2',
    topic: 'Atendimento & Trocas',
    title: 'Simulação: Trocando uma Peça de Roupa na Loja',
    description: 'Faça a troca amigável de uma peça comprada que veio com defeito ou no tamanho errado.',
    objective: 'Interagir com o atendente de pós-venda, apresentar o comprovante e escolher a peça substituta.',
    instructions: 'Acompanhe as falas do vendedor, grave suas réplicas para cada objetivo e conclua a troca.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Balcão de trocas e devoluções de uma loja de departamentos',
      partnerRole: 'Atendente de Atendimento ao Cliente',
      userRole: 'Cliente',
      checklist: [
        'Explicação calma do motivo da troca',
        'Apresentação do cupom fiscal e etiquetas intactas',
        'Confirmação da nova peça sem cobrança extra'
      ]
    },
    questions: [
      {
        id: 's-a2-ce-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Explicando a Necessidade da Troca',
        contextScenario: 'O atendente pergunta como pode ajudar. Explique que comprou este suéter ontem, mas o zíper está quebrado.',
        modelAudioText: 'Hello! How can I help you at the customer service desk today?',
        speechRate: 0.9,
        targetPhrase: 'Hi! I bought this sweater yesterday, but the zipper is stuck and won’t close properly.',
        sampleResponses: [
          'Hi! I bought this sweater yesterday, but the zipper is stuck and won’t close properly.',
          'Good morning. I would like to exchange this sweater because the zipper seems damaged.',
          'Hello. I purchased this yesterday, but unfortunately the zipper does not work.'
        ],
        pronunciationTip: '"Zipper is stuck" (/ˈzɪpər ɪz stʌk/). Não use tom agressivo, apenas descritivo.',
        translation: 'Olá! Como posso ajudar você no balcão de atendimento ao cliente hoje?',
        explanation: 'Declarar o item e o defeito objetivo de forma cortês agiliza a autorização da troca.'
      },
      {
        id: 's-a2-ce-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Entregando o Cupom Fiscal',
        contextScenario: 'O funcionário pede para ver o comprovante de compra e a etiqueta. Confirme que tem ambos.',
        modelAudioText: 'I am sorry about that! Do you have the original receipt and the price tag attached?',
        speechRate: 0.9,
        targetPhrase: 'Yes, here is the receipt, and the tags are still on the sleeve.',
        sampleResponses: [
          'Yes, here is the receipt, and the tags are still on the sleeve.',
          'Certainly! I kept the receipt and all original tags right here.',
          'Here you go. The receipt is in the bag with the tags intact.'
        ],
        pronunciationTip: 'A letra "p" em "receipt" é muda: pronuncia-se /rɪˈsiːt/.',
        translation: 'Sinto muito por isso! Você tem o cupom fiscal original e a etiqueta de preço afixada?',
        explanation: 'Lembrar que o "p" de "receipt" não se pronuncia é essencial para falar corretamente.'
      },
      {
        id: 's-a2-ce-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Escolhendo a Nova Peça',
        contextScenario: 'O atendente diz que você pode pegar outra idêntica na arara. Agradeça e confirme o tamanho.',
        modelAudioText: 'You can go ahead and grab another sweater from aisle three, and I will scan the replacement.',
        speechRate: 0.92,
        targetPhrase: 'Thank you very much! I will get a medium size and bring it right back here.',
        sampleResponses: [
          'Thank you very much! I will get a medium size and bring it right back here.',
          'Thanks so much! I will be right back with the new one.',
          'Great, appreciate your help. I will grab the same color in medium.'
        ],
        pronunciationTip: 'Conecte "bring it right back" em um fluxo rítmico natural.',
        translation: 'Você pode ir até o corredor três e pegar outro suéter, que eu escaneio a substituição.',
        explanation: 'Encerrar com agradecimento e confirmação clara da ação demonstra excelente polidez comunicativa.'
      }
    ]
  },

  // 15. Fale em situações reais (A2) - Novo
  {
    id: 'speaking-a2-roleplay-pharmacy-symptoms',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'a2',
    topic: 'Saúde & Farmácia',
    title: 'Simulação: Pedindo Remédio para Resfriado na Farmácia',
    description: 'Converse com o farmacêutico para explicar sintomas leves e comprar o medicamento correto.',
    objective: 'Descrever sintomas cotidianos de saúde e compreender instruções simples de dosagem.',
    instructions: 'Ouça o farmacêutico, responda às perguntas clínicas básicas e confirme como tomar o remédio.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Balcão de atendimento em uma farmácia de bairro',
      partnerRole: 'Farmacêutico',
      userRole: 'Cliente',
      checklist: [
        'Descrição de sintomas comuns (sore throat, mild fever, cough)',
        'Esclarecimento sobre alergias ou remédios em uso',
        'Confirmação da posologia (quantas vezes ao dia)'
      ]
    },
    questions: [
      {
        id: 's-a2-ph-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Descrevendo os Sintomas',
        contextScenario: 'O farmacêutico te cumprimenta. Diga que está com dor de garganta e tosse seca desde ontem.',
        modelAudioText: 'Hello there. How can I help you find what you need today?',
        speechRate: 0.9,
        targetPhrase: 'Hello. I have had a sore throat and a dry cough since yesterday morning.',
        sampleResponses: [
          'Hello. I have had a sore throat and a dry cough since yesterday morning.',
          'Hi! I woke up with a bad sore throat and a cough. Do you have something for that?',
          'Good morning. I feel like I am catching a cold with a throat ache and coughing.'
        ],
        pronunciationTip: '"Sore throat" pronuncia-se /sɔːr θroʊt/ com o som de "th" interdental.',
        translation: 'Olá. Como posso ajudar você a encontrar o que precisa hoje?',
        explanation: 'Descrever os sintomas principais e o tempo de duração orienta a indicação do farmacêutico.'
      },
      {
        id: 's-a2-ph-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Respondendo sobre Alergias e Sono',
        contextScenario: 'Ele pergunta se você tem febre e se prefere um remédio que não cause sonolência durante o dia.',
        modelAudioText: 'Do you also have a fever? And would you prefer a daytime medicine that will not make you drowsy?',
        speechRate: 0.9,
        targetPhrase: 'No fever so far, and yes, please give me non-drowsy medicine because I need to work.',
        sampleResponses: [
          'No fever so far, and yes, please give me non-drowsy medicine because I need to work.',
          'Just a slight temperature, but I definitely need something non-drowsy for daytime.',
          'No fever, thank goodness. A non-drowsy syrup or tablets would be perfect.'
        ],
        pronunciationTip: '"Non-drowsy" (/nɑːn ˈdraʊzi/) significa que não dá sono. Enfatize "work".',
        translation: 'Você também está com febre? E prefere um remédio para o dia que não cause sonolência?',
        explanation: '"Non-drowsy" é o termo fundamental em embalagens de remédios para gripe nos EUA e Reino Unido.'
      },
      {
        id: 's-a2-ph-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Confirmando as Instruções de Uso',
        contextScenario: 'O farmacêutico entrega uma caixa de pastilhas e xarope. Pergunte como e quando deve tomar.',
        modelAudioText: 'Here is a non-drowsy cough syrup and soothing throat lozenges. Anything else you need to know?',
        speechRate: 0.9,
        targetPhrase: 'Thank you! How many times a day should I take the syrup, and before or after meals?',
        sampleResponses: [
          'Thank you! How many times a day should I take the syrup, and before or after meals?',
          'Thanks! How often should I take this syrup during the day?',
          'Thank you so much. Should I take one spoon every six hours?'
        ],
        pronunciationTip: '"How many times a day" conecta-se como uma melodia contínua sem quebras.',
        translation: 'Aqui está um xarope para tosse que não dá sono e pastilhas calmantes para a garganta. Algo mais que precisa saber?',
        explanation: 'Perguntar a frequência e a relação com as refeições garante o uso seguro do medicamento.'
      }
    ]
  }
];

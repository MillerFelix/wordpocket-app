import { Activity, SpeakingQuestion } from '../../types/activity';

export const SPEAKING_B1: Activity<SpeakingQuestion>[] = [
  // 1. Ouça e imite (B1) - Existente
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

  // 2. Treino de sons (B1) - Existente
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

  // 3. Respostas rápidas (B1) - Existente
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

  // 4. Fale em situações reais (B1) - Existente
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
  },

  // 5. Ouça e imite (B1) - Novo
  {
    id: 'speaking-b1-shadow-negotiation-diplomacy',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b1',
    topic: 'Negociação & Diplomacia',
    title: 'Negociação Construtiva e Acordos Mútuos',
    description: 'Desenvolva a arte de fazer concessões inteligentes e propor soluções viáveis com entonação respeitosa.',
    objective: 'Usar fórmulas de negociação ("If you can... we could...") com modulação vocal assertiva e amigável.',
    instructions: 'Ouça o modelo, preste atenção no equilíbrio de ênfase entre a proposta e a condição, e grave sua repetição.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Reunião comercial ou de alinhamento entre departamentos',
      checklist: [
        'Uso maduro de frases condicionais polidas',
        'Entonação firme sem rigidez ou agressividade',
        'Pausa deliberada entre a premissa e a contraproposta'
      ]
    },
    questions: [
      {
        id: 's-b1-nd-1',
        type: 'speaking_item',
        itemTitle: 'Proposta de Compromisso Mútuo',
        contextScenario: 'Proponha estender o prazo de entrega em troca de uma revisão aprofundada da qualidade.',
        modelAudioText: 'If we can extend the delivery date by three days, we can guarantee thorough quality testing.',
        speechRate: 0.94,
        targetPhrase: 'If we can extend the delivery date by three days, we can guarantee thorough quality testing.',
        phoneticFocus: 'Pausa nítida após "three days," e ênfase em "guarantee" (/ˌɡærənˈtiː/).',
        pronunciationTip: '"delivery date": articule com precisão sem engolir o /t/ de date.',
        translation: 'Se pudermos estender a data de entrega em três dias, podemos garantir um teste de qualidade minucioso.',
        explanation: 'Condicionais cooperativas são a espinha dorsal de alinhamentos profissionais bem-sucedidos.'
      },
      {
        id: 's-b1-nd-2',
        type: 'speaking_item',
        itemTitle: 'Buscando Meio-Termo',
        contextScenario: 'Sugira um ponto de equilíbrio para atender a ambas as partes do projeto.',
        modelAudioText: 'I understand your budget constraints, so perhaps we could explore a phased rollout instead.',
        speechRate: 0.95,
        targetPhrase: 'I understand your budget constraints, so perhaps we could explore a phased rollout instead.',
        phoneticFocus: '"budget constraints" (/ˈbʌdʒɪt kənˈstreɪnts/) e "phased rollout" (/feɪzd ˈroʊlaʊt/).',
        pronunciationTip: 'Diga "perhaps we could" com modulação gentil para apresentar uma sugestão convidativa.',
        translation: 'Compreendo suas restrições orçamentárias, portanto talvez pudéssemos considerar uma implantação em fases.',
        explanation: 'Validar a restrição alheia antes de propor a solução demonstra alto nível de inteligência interpessoal.'
      },
      {
        id: 's-b1-nd-3',
        type: 'speaking_item',
        itemTitle: 'Formalizando a Próxima Etapa',
        contextScenario: 'Resuma o que foi acordado e oriente os próximos passos do plano de ação.',
        modelAudioText: 'Based on this understanding, I will draft a formal summary and circulate it by noon tomorrow.',
        speechRate: 0.94,
        targetPhrase: 'Based on this understanding, I will draft a formal summary and circulate it by noon tomorrow.',
        phoneticFocus: '"draft" (/dræft/) e "circulate it" (/ˈsɜːrkjəleɪt ɪt/).',
        pronunciationTip: 'Ligue "circulate it" como "circulate-it" e encerre com tom assertivo descendente.',
        translation: 'Com base nesse entendimento, vou redigir um resumo formal e compartilhá-lo até o meio-dia de amanhã.',
        explanation: 'Definir responsável e horário ("by noon tomorrow") transmite confiança e liderança.'
      }
    ]
  },

  // 6. Ouça e imite (B1) - Novo
  {
    id: 'speaking-b1-shadow-storytelling-emphasis',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b1',
    topic: 'Storytelling & Expressividade',
    title: 'Narrativa Pessoal e Ênfase Dramática',
    description: 'Aprenda a prender a atenção do ouvinte usando pausas dramáticas, ritmo variado e expressividade.',
    objective: 'Variar a velocidade e a modulação emocional da fala para contar experiências memoráveis.',
    instructions: 'Ouça o trecho narrativo e reproduza o ritmo expressivo, destacando os momentos de clímax.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Jantar descontraído ou conversa entre amigos narrando um imprevisto de viagem',
      checklist: [
        'Variação de velocidade para criar expectativa',
        'Pausas antes de revelações surpreendentes',
        'Tom caloroso e expressivo'
      ]
    },
    questions: [
      {
        id: 's-b1-se-1',
        type: 'speaking_item',
        itemTitle: 'Criando Expectativa',
        contextScenario: 'Comece a história narrando o momento em que algo inesperado aconteceu.',
        modelAudioText: 'Everything seemed completely normal, until we suddenly heard an unusual noise behind the cabin.',
        speechRate: 0.92,
        targetPhrase: 'Everything seemed completely normal, until we suddenly heard an unusual noise behind the cabin.',
        phoneticFocus: 'Pausa breve antes de "until" e ênfase repentina em "suddenly heard".',
        pronunciationTip: 'Fale a primeira parte em tom calmo e mude a energia ao dizer "suddenly heard".',
        translation: 'Tudo parecia completamente normal, até que subitamente ouvimos um barulho incomum atrás do chalé.',
        explanation: 'Contraste de ritmo é a técnica narrativa básica para prender a atenção do ouvinte.'
      },
      {
        id: 's-b1-se-2',
        type: 'speaking_item',
        itemTitle: 'O Clímax Cômico',
        contextScenario: 'Revele que não era nada perigoso, apenas um guaxinim curioso revirando caixas.',
        modelAudioText: 'We turned on our flashlights nervously, only to discover a tiny raccoon eating marshmallows.',
        speechRate: 0.94,
        targetPhrase: 'We turned on our flashlights nervously, only to discover a tiny raccoon eating marshmallows.',
        phoneticFocus: '"flashlights nervously" e "raccoon" (/ræˈkuːn/) com tônica na segunda sílaba.',
        pronunciationTip: '"only to discover": use tom de riso leve ou surpresa divertida na voz.',
        translation: 'Ligamos as lanternas apreensivos, apenas para descobrir um pequeno guaxinim comendo marshmallows.',
        explanation: 'A expressão "only to discover..." sinaliza uma quebra de expectativa divertida.'
      },
      {
        id: 's-b1-se-3',
        type: 'speaking_item',
        itemTitle: 'Conclusão Memorável',
        contextScenario: 'Encerre dizendo que foi o momento mais engraçado de todas as férias.',
        modelAudioText: 'It turned out to be the most hilarious memory from our entire hiking trip.',
        speechRate: 0.94,
        targetPhrase: 'It turned out to be the most hilarious memory from our entire hiking trip.',
        phoneticFocus: '"hilarious" (/hɪˈleriəs/ - tônica na segunda sílaba) e "entire" (/ɪnˈtaɪər/).',
        pronunciationTip: 'Enfatize "most hilarious" com entusiasmo genuíno.',
        translation: 'Acabou se tornando a lembrança mais hilária de toda a nossa viagem de trilha.',
        explanation: 'Expressões como "It turned out to be..." concluem histórias pessoais com elegância.'
      }
    ]
  },

  // 7. Ouça e imite (B1) - Novo
  {
    id: 'speaking-b1-shadow-academic-discussion',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b1',
    topic: 'Apresentação & Análise Crítica',
    title: 'Apresentação de Dados e Análise Comparativa',
    description: 'Pratique a fala formal e estruturada usada em apresentações, seminários e análises comparativas.',
    objective: 'Sustentar frases compostas longas mantendo ritmo respiratório controlado e clareza analítica.',
    instructions: 'Ouça o trecho explicativo e grave com dicção firme e postura vocal profissional.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Apresentação de estudo de caso em conferência ou reunião de equipe',
      checklist: [
        'Respiração pausada antes de orações longas',
        'Articulação límpida de numerais e porcentagens',
        'Modulação neutra e confiável de quem apresenta fatos'
      ]
    },
    questions: [
      {
        id: 's-b1-ad-1',
        type: 'speaking_item',
        itemTitle: 'Introduzindo a Comparação',
        contextScenario: 'Apresente a comparação entre os dois trimestres do levantamento de dados.',
        modelAudioText: 'When comparing the preliminary survey results with our historical averages, a distinct trend emerges.',
        speechRate: 0.94,
        targetPhrase: 'When comparing the preliminary survey results with our historical averages, a distinct trend emerges.',
        phoneticFocus: '"preliminary" (/prɪˈlɪmɪneri/) e "historical averages" (/hɪˈstɔːrɪkl ˈævrɪdʒɪz/).',
        pronunciationTip: 'Faça uma pausa clara na vírgula antes de "a distinct trend emerges".',
        translation: 'Ao comparar os resultados preliminares da pesquisa com nossas médias históricas, surge uma tendência distinta.',
        explanation: 'Frases introduzidas por gerúndio temporal exigem controle rítmico apurado.'
      },
      {
        id: 's-b1-ad-2',
        type: 'speaking_item',
        itemTitle: 'Destacando a Evidência Principal',
        contextScenario: 'Destaque que a maioria dos participantes prefere o modelo híbrido de trabalho.',
        modelAudioText: 'Specifically, nearly seventy percent of participants expressed a strong preference for hybrid collaboration.',
        speechRate: 0.94,
        targetPhrase: 'Specifically, nearly seventy percent of participants expressed a strong preference for hybrid collaboration.',
        phoneticFocus: '"Specifically" (/spəˈsɪfɪkli/) e "hybrid collaboration" (/ˈhaɪbrɪd kəˌlæbəˈreɪʃn/).',
        pronunciationTip: 'Diga "Specifically" com nitidez na primeira sílaba e pause levemente antes de "nearly".',
        translation: 'Especificamente, quase setenta por cento dos participantes manifestaram forte preferência pela colaboração híbrida.',
        explanation: 'Advérbios de especificação conduzem o raciocínio da audiência para o número essencial.'
      },
      {
        id: 's-b1-ad-3',
        type: 'speaking_item',
        itemTitle: 'Implicação Estratégica',
        contextScenario: 'Conclua sugerindo que as políticas internas devem refletir essas descobertas.',
        modelAudioText: 'Consequently, aligning our policies with these expectations will be critical for retaining top talent.',
        speechRate: 0.94,
        targetPhrase: 'Consequently, aligning our policies with these expectations will be critical for retaining top talent.',
        phoneticFocus: '"Consequently" (/ˈkɑːnsəkwentli/) e "retaining" (/rɪˈteɪnɪŋ/).',
        pronunciationTip: 'Mantenha o tom conclusivo firme em "critical for retaining top talent".',
        translation: 'Consequentemente, alinhar nossas políticas com essas expectativas será crucial para reter grandes talentos.',
        explanation: 'Fechamentos analíticos com "Consequently" estabelecem relação lógica indiscutível.'
      }
    ]
  },

  // 8. Treino de sons (B1) - Novo
  {
    id: 'speaking-b1-sound-schwa-unstressed',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b1',
    topic: 'Fonologia: O Schwa /ə/ em Sílabas Átonas',
    title: 'O Som do Schwa /ə/ em Sílabas Átonas',
    description: 'Aprenda a relaxar a boca no som mais comum do inglês e evite pronunciar cada vogal escrita com peso igual.',
    objective: 'Reconhecer e produzir o som /ə/ em palavras como banana, police, about e problem sem sobrecarregar a sílaba fraca.',
    instructions: 'Responda ao teste auditivo identificando a sílaba átona com schwa e grave a frase modelo com o ritmo correto.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica de redução vocálica e ritmo acentual do inglês (stress-timed language)',
      focusSound: 'O schwa (/ə/) é curto, central e completamente desprovido de esforço muscular.',
      checklist: [
        'Não tentar falar "o" ou "a" puro em sílabas não tônicas',
        'Contraste nítido entre a sílaba forte e a sílaba reduzida',
        'Fluidez rítmica sem falar de forma silábica e truncada'
      ]
    },
    questions: [
      {
        id: 's-b1-sc-1',
        type: 'speaking_item',
        itemTitle: 'Redução Vocálica Inicial: About vs Around',
        contextScenario: 'Frase com palavras comuns cuja primeira sílaba é o schwa neutro.',
        modelAudioText: 'She was about to look around the quiet museum.',
        speechRate: 0.92,
        targetPhrase: 'She was about to look around the quiet museum.',
        phoneticFocus: '"about" (/əˈbaʊt/) e "around" (/əˈraʊnd/) começam em /ə/.',
        pronunciationTip: 'Não diga "abaut" com "a" aberto. O início é um som preguiçoso e rápido: "uh-baʊt".',
        translation: 'Ela estava prestes a olhar ao redor do museu silencioso.',
        explanation: 'Reduzir as vogais átonas ao schwa é o maior segredo para soar natural em inglês.',
        perceptionQuestion: {
          questionText: 'Na palavra "about", qual som representa a primeira letra "a"?',
          audioText: 'about',
          options: [
            { id: 'A', text: 'O som neutro schwa /ə/ (curto e relaxado)' },
            { id: 'B', text: 'Um som de "a" aberto como em "cat" (/æ/)' },
            { id: 'C', text: 'Um som longo de "ah" (/ɑː/)' },
            { id: 'D', text: 'Um ditongo /eɪ/' }
          ],
          correctOptionId: 'A',
          explanation: 'A primeira sílaba de "about" é átona e reduz-se foneticamente ao schwa /ə/.'
        }
      },
      {
        id: 's-b1-sc-2',
        type: 'speaking_item',
        itemTitle: 'Redução em Substantivos: Police vs Problem',
        contextScenario: 'Frase contrastando palavras com o som /ə/ no início ou no meio.',
        modelAudioText: 'The local police solved the delicate problem yesterday.',
        speechRate: 0.92,
        targetPhrase: 'The local police solved the delicate problem yesterday.',
        phoneticFocus: '"police" (/pəˈliːs/) tem schwa na primeira sílaba; "problem" (/ˈprɑːbləm/) na segunda.',
        pronunciationTip: 'Nunca diga "pólice" com tônica no início. A tônica de police é na segunda: "poh-LEECE".',
        translation: 'A polícia local resolveu o problema delicado ontem.',
        explanation: '"Police" tem a primeira sílaba fraca (/pə/) e a segunda forte (/liːs/).',
        perceptionQuestion: {
          questionText: 'Onde está a sílaba tônica forte na palavra "police"?',
          audioText: 'police',
          options: [
            { id: 'A', text: 'Na segunda sílaba: /pəˈliːs/' },
            { id: 'B', text: 'Na primeira sílaba: /ˈpoʊliːs/' },
            { id: 'C', text: 'Em ambas com o mesmo peso' },
            { id: 'D', text: 'Não há sílaba tônica' }
          ],
          correctOptionId: 'A',
          explanation: '"Police" tem tônica na segunda sílaba; a primeira vira schwa /pəˈliːs/.'
        }
      },
      {
        id: 's-b1-sc-3',
        type: 'speaking_item',
        itemTitle: 'Schwa Múltiplo: Banana e Fotografia',
        contextScenario: 'Frase famosa pela alternância entre vogais tônicas e schwas relaxados.',
        modelAudioText: 'A ripe banana makes an incredible morning snack.',
        speechRate: 0.94,
        targetPhrase: 'A ripe banana makes an incredible morning snack.',
        phoneticFocus: '"banana" pronuncia-se /bəˈnænə/ (dois schwas em volta da sílaba tônica central).',
        pronunciationTip: 'Apenas o "na" do meio é forte: "buh-NAN-uh". O primeiro e o último "a" são sons neutros.',
        translation: 'Uma banana madura é um lanche matinal incrível.',
        explanation: 'A palavra "banana" exemplifica com perfeição o padrão acentual do inglês falado.',
        perceptionQuestion: {
          questionText: 'Quantos sons de schwa (/ə/) existem na pronúncia padrão de "banana" (/bəˈnænə/)?',
          audioText: 'banana',
          options: [
            { id: 'A', text: 'Dois: no primeiro e no terceiro "a"' },
            { id: 'B', text: 'Nenhum, todos os "a" são abertos' },
            { id: 'C', text: 'Apenas um no final' },
            { id: 'D', text: 'Três, todos viram schwa' }
          ],
          correctOptionId: 'A',
          explanation: 'Em "banana" (/bəˈnænə/), tanto o primeiro quanto o último "a" são reduzidos a schwa.'
        }
      }
    ]
  },

  // 9. Treino de sons (B1) - Novo
  {
    id: 'speaking-b1-sound-connected-linking',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b1',
    topic: 'Connected Speech: Conexões Consonânticas',
    title: 'Ligação Fluida entre Palavras (Consonante + Vogal)',
    description: 'Elimine os solavancos entre palavras e fale orações inteiras como uma cadeia sonora unificada.',
    objective: 'Conectar a consoante final de uma palavra à vogal inicial da próxima (linking) naturalmente.',
    instructions: 'Identifique onde ocorre a junção sonora e grave a sentença mantendo a corrente de ar contínua.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Treinamento de fluxo e cadência da fala conectada',
      focusSound: 'Catenation: /C + V/ (ex: "turn off" soa como "tur-noff", "hold on" como "hol-don")',
      checklist: [
        'Não fazer pausa artificial entre palavras adjacentes',
        'Ligar a consoante final diretamente na vogal seguinte',
        'Respiração contínua sem quebras abruptas'
      ]
    },
    questions: [
      {
        id: 's-b1-cl-1',
        type: 'speaking_item',
        itemTitle: 'Ligação com Consoante Oclusiva: Pick it up',
        contextScenario: 'Frase que conecta três palavras em uma única emissão contínua.',
        modelAudioText: 'Could you please pick it up and hand it to me?',
        speechRate: 0.94,
        targetPhrase: 'Could you please pick it up and hand it to me?',
        phoneticFocus: '"pick it up" conecta-se como /pɪ-kɪ-tʌp/ e "hand it" como /hæn-dɪt/.',
        pronunciationTip: 'Imagine que "pickitup" é uma palavra única de três sílabas. O som flui perfeitamente.',
        translation: 'Você poderia por favor pegar isso e me entregar?',
        explanation: 'Falantes nativos nunca pronunciam "pick... it... up" separadamente; o fluxo é contínuo.',
        perceptionQuestion: {
          questionText: 'Como a sequência "pick it up" é percebida na fala natural conectada?',
          audioText: 'pick it up',
          options: [
            { id: 'A', text: 'Como um bloco contínuo: "pi-ki-tup"' },
            { id: 'B', text: 'Com pausas secas entre cada palavra' },
            { id: 'C', text: 'Sem pronunciar as letras "k" e "t"' },
            { id: 'D', text: 'Com a letra "t" silenciosa' }
          ],
          correctOptionId: 'A',
          explanation: 'Na fala conectada, a consoante final liga-se à vogal seguinte formando "pi-ki-tup".'
        }
      },
      {
        id: 's-b1-cl-2',
        type: 'speaking_item',
        itemTitle: 'Ligação com Fricativa: Turn off the lights',
        contextScenario: 'Frase conectando o verbo frasal com a preposição.',
        modelAudioText: 'Remember to turn off all the appliances before leaving.',
        speechRate: 0.94,
        targetPhrase: 'Remember to turn off all the appliances before leaving.',
        phoneticFocus: '"turn off all" conecta-se como /tɜːrn-ɔː-fɔːl/.',
        pronunciationTip: 'O "n" de turn vai para o "off" e o "ff" vai para o "all": "tur-no-fall".',
        translation: 'Lembre-se de desligar todos os aparelhos antes de sair.',
        explanation: 'Múltiplas ligações consecutivas garantem a velocidade e musicalidade do idioma.',
        perceptionQuestion: {
          questionText: 'Em "turn off all", como os fonemas consonânticos se comportam?',
          audioText: 'turn off all',
          options: [
            { id: 'A', text: 'Ligam-se às vogais seguintes formando sílabas contínuas' },
            { id: 'B', text: 'São cancelados e não se pronunciam' },
            { id: 'C', text: 'Adicionam um som de "i" entre as palavras' },
            { id: 'D', text: 'Tornam-se consoantes aspiradas' }
          ],
          correctOptionId: 'A',
          explanation: 'O "n" e o "f" ligam-se às vogais seguintes, criando um fluxo ininterrupto de fala.'
        }
      },
      {
        id: 's-b1-cl-3',
        type: 'speaking_item',
        itemTitle: 'Ligação com Nasal: Clean it out',
        contextScenario: 'Frase que une a consoante nasal à vogal da preposição.',
        modelAudioText: 'We need to clean out our storage closet this weekend.',
        speechRate: 0.94,
        targetPhrase: 'We need to clean out our storage closet this weekend.',
        phoneticFocus: '"clean out our" liga-se como /kliː-naʊ-taʊər/.',
        pronunciationTip: 'Mantenha a língua em movimento contínuo sem interromper a voz.',
        translation: 'Precisamos esvaziar e limpar nosso armário de depósito este fim de semana.',
        explanation: 'Dominar o linking poupa esforço muscular e melhora radicalmente a compreensão auditiva.',
        perceptionQuestion: {
          questionText: 'Qual é o efeito do linking ao ouvir nativos em velocidade natural?',
          audioText: 'clean out',
          options: [
            { id: 'A', text: 'As palavras soam unidas como se fossem um único vocábulo' },
            { id: 'B', text: 'Ocorre uma desaceleração no meio da frase' },
            { id: 'C', text: 'A frase ganha sotaque britânico arcaico' },
            { id: 'D', text: 'As palavras tornam-se ininteligíveis' }
          ],
          correctOptionId: 'A',
          explanation: 'O linking agrupa palavras vizinhas em unidades sonoras fluidas e rítmicas.'
        }
      }
    ]
  },

  // 10. Treino de sons (B1) - Novo
  {
    id: 'speaking-b1-sound-sentence-stress',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b1',
    topic: 'Acentuação Contrastiva & Significado',
    title: 'Mudança de Significado pelo Acento Tônico',
    description: 'Perceba e aplique a regra dos pares substantivo-verbo em que a mudança da sílaba tônica altera o sentido.',
    objective: 'Diferenciar substantivos (tônica na 1ª sílaba: RECord, PREsent) de verbos (tônica na 2ª: reCORD, preSENT).',
    instructions: 'Identifique se a palavra falada é substantivo ou verbo pela acentuação e grave o par contrastante.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Estudo de acentuação lexical contrastiva em pares idênticos na escrita',
      focusSound: 'Substantivo = Sílaba 1 forte (PRO-ject) | Verbo = Sílaba 2 forte (pro-JECT)',
      checklist: [
        'Posicionar a força vocal exatamente na sílaba correspondente',
        'Reduzir a outra sílaba a schwa quando átona',
        'Contraste evidente entre substantivo e verbo na mesma oração'
      ]
    },
    questions: [
      {
        id: 's-b1-ss-1',
        type: 'speaking_item',
        itemTitle: 'Par Contrastante: Record (substantivo) vs Record (verbo)',
        contextScenario: 'Frase que contém as duas formas: o substantivo disco/registro e o verbo gravar.',
        modelAudioText: 'The band holds the record, and they will record a new album soon.',
        speechRate: 0.94,
        targetPhrase: 'The band holds the record, and they will record a new album soon.',
        phoneticFocus: 'Substantivo: /ˈrekərd/ vs Verbo: /rɪˈkɔːrd/.',
        pronunciationTip: 'No primeiro ("the RE-cord"), enfatize a primeira sílaba. No segundo ("will re-CORD"), enfatize a segunda.',
        translation: 'A banda detém o recorde e eles vão gravar um novo álbum em breve.',
        explanation: 'Centenas de palavras em inglês seguem a regra: substantivos na 1ª sílaba, verbos na 2ª.',
        perceptionQuestion: {
          questionText: 'Na audição da palavra isolada, onde caiu a tônica: no início ou no fim?',
          audioText: 'record',
          options: [
            { id: 'A', text: 'Na primeira sílaba: /ˈrekərd/ (substantivo recorde/disco)' },
            { id: 'B', text: 'Na segunda sílaba: /rɪˈkɔːrd/ (verbo registrar/gravar)' },
            { id: 'C', text: 'Em nenhuma das duas' },
            { id: 'D', text: 'Com som de "e" longo em ambas' }
          ],
          correctOptionId: 'A',
          explanation: 'O áudio pronunciou /ˈrekərd/ com a tônica na primeira sílaba, indicando o substantivo.'
        }
      },
      {
        id: 's-b1-ss-2',
        type: 'speaking_item',
        itemTitle: 'Par Contrastante: Present (substantivo) vs Present (verbo)',
        contextScenario: 'Frase contendo o substantivo presente e o verbo apresentar.',
        modelAudioText: 'She gave him a birthday present, and then went to present her project.',
        speechRate: 0.94,
        targetPhrase: 'She gave him a birthday present, and then went to present her project.',
        phoneticFocus: 'Substantivo: /ˈpreznt/ vs Verbo: /prɪˈzent/.',
        pronunciationTip: 'Diga "birthday PRE-sent" e logo depois "to pre-ZENT". Sinta a diferença do ponto de força.',
        translation: 'Ela deu a ele um presente de aniversário e depois foi apresentar seu projeto.',
        explanation: 'Errar a tônica pode fazer com que um verbo seja entendido como um substantivo.',
        perceptionQuestion: {
          questionText: 'Qual das opções representa o verbo "apresentar" com tônica na segunda sílaba?',
          audioText: 'present',
          options: [
            { id: 'A', text: 'To present (/prɪˈzent/ - verbo)' },
            { id: 'B', text: 'A present (/ˈpreznt/ - substantivo presente)' },
            { id: 'C', text: 'Presently (advérbio)' },
            { id: 'D', text: 'Presentation (substantivo)' }
          ],
          correctOptionId: 'A',
          explanation: '"To present" tem a sílaba tônica final /prɪˈzent/ por se tratar de um verbo.'
        }
      },
      {
        id: 's-b1-ss-3',
        type: 'speaking_item',
        itemTitle: 'Par Contrastante: Increase (substantivo) vs Increase (verbo)',
        contextScenario: 'Frase com aumento (substantivo) e aumentar (verbo).',
        modelAudioText: 'We noticed a steady increase in sales as prices began to increase.',
        speechRate: 0.94,
        targetPhrase: 'We noticed a steady increase in sales as prices began to increase.',
        phoneticFocus: 'Substantivo: /ˈɪnkriːs/ vs Verbo: /ɪnˈkriːs/.',
        pronunciationTip: 'Pratique pronunciar os dois em sequência: "an IN-crease" versus "to in-CREASE".',
        translation: 'Notamos um aumento constante nas vendas à medida que os preços começaram a aumentar.',
        explanation: 'Dominar essa acentuação confere um nível impressionante de precisão linguística em B1.',
        perceptionQuestion: {
          questionText: 'Qual é o padrão típico para a maioria das palavras dissílabas que funcionam como substantivo e verbo em inglês?',
          audioText: 'increase',
          options: [
            { id: 'A', text: 'Substantivo tônica na 1ª sílaba; verbo tônica na 2ª sílaba' },
            { id: 'B', text: 'Substantivo tônica na 2ª sílaba; verbo tônica na 1ª sílaba' },
            { id: 'C', text: 'Ambos sempre na 1ª sílaba' },
            { id: 'D', text: 'Ambos sempre na 2ª sílaba' }
          ],
          correctOptionId: 'A',
          explanation: 'A regra clássica do inglês é: substantivos têm tônica na primeira sílaba; verbos, na segunda.'
        }
      }
    ]
  },

  // 11. Respostas rápidas (B1) - Novo
  {
    id: 'speaking-b1-rapid-interview-experience',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b1',
    topic: 'Carreira & Entrevistas',
    title: 'Perguntas Comuns em Entrevistas de Emprego',
    description: 'Responda com convicção e clareza a perguntas comportamentais clássicas de processos seletivos.',
    objective: 'Organizar ideias rapidamente seguindo o método STAR (Situação, Ação, Resultado) de forma sucinta.',
    instructions: 'Ouça a pergunta do entrevistador e grave sua resposta articulada e profissional.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Entrevista virtual para uma vaga em equipe multicultural',
      checklist: [
        'Abertura direta sem hesitação prolongada',
        'Exemplo concreto com verbos no passado',
        'Conexão com aprendizado ou resultado positivo'
      ]
    },
    questions: [
      {
        id: 's-b1-ie-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Lidando com Prazos Curtos',
        contextScenario: 'O recrutador pergunta como você reage quando se depara com um prazo inesperadamente apertado.',
        modelAudioText: 'Can you tell me about a time you had to meet a very tight deadline under pressure?',
        speechRate: 0.95,
        targetPhrase: 'In my last role, I broke down the major deliverable into daily milestones and kept stakeholders updated.',
        sampleResponses: [
          'In my last role, I broke down the major deliverable into daily milestones and kept stakeholders updated.',
          'When deadlines tighten, I focus on the essential requirements first and communicate proactively with the team.',
          'I prioritize critical tasks immediately, delegate non-essential items, and ensure we deliver the core solution on time.'
        ],
        pronunciationTip: '"broke down into daily milestones": fale com firmeza e ritmo seguro.',
        translation: 'Você pode me contar sobre uma ocasião em que teve que cumprir um prazo muito apertado sob pressão?',
        explanation: 'Demonstrar método (dividir em metas diárias e manter a comunicação) impressiona entrevistadores.'
      },
      {
        id: 's-b1-ie-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Principal Ponto Forte',
        contextScenario: 'O entrevistador pergunta qual habilidade pessoal você considera seu maior diferencial.',
        modelAudioText: 'What would you say is your greatest professional strength in a team setting?',
        speechRate: 0.95,
        targetPhrase: 'My biggest strength is active listening and finding pragmatic compromises that keep projects moving forward.',
        sampleResponses: [
          'My biggest strength is active listening and finding pragmatic compromises that keep projects moving forward.',
          'I am very good at breaking complex problems into manageable steps and collaborating across different departments.',
          'I would highlight my adaptability and ability to stay calm and constructive during unexpected changes.'
        ],
        pronunciationTip: '"pragmatic compromises" (/præɡˈmætɪk ˈkɑːmprəmaɪzɪz/).',
        translation: 'Qual você diria que é sua maior força profissional em um ambiente de equipe?',
        explanation: 'Citar habilidades práticas combinadas com inteligência interpessoal soa maduro e atrativo.'
      },
      {
        id: 's-b1-ie-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Motivação para a Vaga',
        contextScenario: 'O recrutador quer saber por que você está interessado nesta oportunidade específica.',
        modelAudioText: 'Why are you interested in joining our company at this stage of your career?',
        speechRate: 0.95,
        targetPhrase: 'I admire your commitment to user experience and want to contribute my skills to your international projects.',
        sampleResponses: [
          'I admire your commitment to user experience and want to contribute my skills to your international projects.',
          'Your team culture and recent expansion in global markets really align with where I want to grow professionally.',
          'This position matches my background in customer solutions, and I am excited about your company vision.'
        ],
        pronunciationTip: '"commitment to" (/kəˈmɪtmənt tuː/) e "international projects" (/ˌɪntərˈnæʃnəl/).',
        translation: 'Por que você tem interesse em se juntar à nossa empresa neste momento da sua carreira?',
        explanation: 'Alinhar seus valores à missão da empresa mostra preparo e interesse genuíno.'
      }
    ]
  },

  // 12. Respostas rápidas (B1) - Novo
  {
    id: 'speaking-b1-rapid-client-problem-solving',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b1',
    topic: 'Atendimento & Solução de Problemas',
    title: 'Mediação de Conflitos e Gestão de Expectativas',
    description: 'Responda oralmente a clientes insatisfeitos com profissionalismo, empatia e soluções concretas.',
    objective: 'Acolher a preocupação do cliente sem adotar postura defensiva e estabelecer prazos realistas.',
    instructions: 'Ouça o relato frustrado do cliente e grave sua resposta tranquilizadora e assertiva.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Chamada de alinhamento com cliente corporativo descontente com um atraso',
      checklist: [
        'Acolhimento empático imediato ("I completely understand your frustration")',
        'Assunção de responsabilidade pelo plano de ação',
        'Compromisso com um horário específico de retorno'
      ]
    },
    questions: [
      {
        id: 's-b1-cp-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Notificação de Entrega com Atraso',
        contextScenario: 'O cliente reclama que o arquivo prometido ainda não chegou à sua caixa de entrada.',
        modelAudioText: 'We were expecting the finalized contract two hours ago, and this delay is holding up our legal team.',
        speechRate: 0.95,
        targetPhrase: 'I sincerely apologize for the delay. I will personally review the final draft and send it within twenty minutes.',
        sampleResponses: [
          'I sincerely apologize for the delay. I will personally review the final draft and send it within twenty minutes.',
          'I completely understand your concern. Let me double-check with legal and forward the document immediately.',
          'My apologies for the inconvenience. I am on it right now and you will have the file in your inbox shortly.'
        ],
        pronunciationTip: '"sincerely apologize" (/sɪnˈsɪərli əˈpɑːlədʒaɪz/). Não se justifique excessivamente; ofereça a ação imediata.',
        translation: 'Estávamos esperando o contrato finalizado há duas horas e esse atraso está travando nossa equipe jurídica.',
        explanation: 'Pedir desculpas com sinceridade e dar um prazo curto e factível desarma a tensão instantaneamente.'
      },
      {
        id: 's-b1-cp-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Inconsistência na Cobrança',
        contextScenario: 'O cliente aponta uma cobrança duplicada na fatura mensal do serviço contratado.',
        modelAudioText: 'There is an extra recurring fee on our invoice that we never authorized. How did this happen?',
        speechRate: 0.95,
        targetPhrase: 'Thank you for bringing this to my attention. I will issue an immediate credit and correct next month’s invoice.',
        sampleResponses: [
          'Thank you for bringing this to my attention. I will issue an immediate credit and correct next month’s invoice.',
          'Let me inspect the billing logs right away, reverse that charge, and send you an updated statement.',
          'I understand your frustration. I am already processing the refund and will make sure it does not happen again.'
        ],
        pronunciationTip: '"bringing this to my attention" é uma fórmula clássica de atendimento de alto nível.',
        translation: 'Há uma taxa recorrente extra em nossa fatura que nunca autorizamos. Como isso aconteceu?',
        explanation: 'Agradecer o apontamento e aplicar o crédito imediatamente demonstra integridade e eficácia.'
      },
      {
        id: 's-b1-cp-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Pedido de Desconto Emergencial',
        contextScenario: 'O cliente pede um desconto excepcional para renovar o contrato anual de serviços.',
        modelAudioText: 'If you want us to renew for another full year, what kind of incentive can you offer us today?',
        speechRate: 0.95,
        targetPhrase: 'While our standard rates are fixed, I can offer two months of premium onboarding support at no extra cost.',
        sampleResponses: [
          'While our standard rates are fixed, I can offer two months of premium onboarding support at no extra cost.',
          'We can include the advanced analytics module for free if you sign the annual renewal by Friday.',
          'I would be happy to discuss a five percent loyalty discount if we commit to a twelve-month agreement.'
        ],
        pronunciationTip: '"at no extra cost" (/æt noʊ ˈekstrə kɔːst/) soa muito atraente e profissional.',
        translation: 'Se você quer que renovemos por mais um ano inteiro, que tipo de incentivo você pode nos oferecer hoje?',
        explanation: 'Oferecer valor agregado em vez de simplesmente baixar o preço preserva a margem e fecha acordos.'
      }
    ]
  },

  // 13. Respostas rápidas (B1) - Novo
  {
    id: 'speaking-b1-rapid-travel-disruptions',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b1',
    topic: 'Viagens & Imprevistos',
    title: 'Imprevistos de Viagem e Reivindicação de Direitos',
    description: 'Responda oralmente a situações de cancelamento de reservas, overbooking e extravio temporário de bagagem.',
    objective: 'Articular direitos como passageiro e consumidor de forma assertiva, firme e educada.',
    instructions: 'Ouça o funcionário do serviço de transporte ou turismo e grave sua resposta exigindo resolução.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Balcão de companhia de trem ou agência turística na Europa',
      checklist: [
        'Uso de fórmulas de direitos do passageiro ("Under your policy...", "Could you provide...")',
        'Tom firme sem perder a cortesia',
        'Solicitação de documentação escrita ou comprovante'
      ]
    },
    questions: [
      {
        id: 's-b1-td-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta 1: Cancelamento de Trem Noturno',
        contextScenario: 'O agente informa que o trem noturno foi cancelado devido a problemas técnicos na via.',
        modelAudioText: 'I regret to inform you that tonight’s sleeper train has been canceled due to track maintenance.',
        speechRate: 0.95,
        targetPhrase: 'I understand, but could you please arrange alternative travel tonight or provide a hotel voucher?',
        sampleResponses: [
          'I understand, but could you please arrange alternative travel tonight or provide a hotel voucher?',
          'Since the cancellation is on your end, what accommodation options are you offering affected passengers?',
          'Could you endorse my ticket for the high-speed line tomorrow morning and cover tonight’s lodging?'
        ],
        pronunciationTip: '"alternative travel" (/ɔːlˈtɜːrnətɪv ˈtrævl/) e "hotel voucher" (/voʊtʃər/).',
        translation: 'Lamento informar que o trem noturno com leito desta noite foi cancelado devido à manutenção da via.',
        explanation: 'Saber cobrar alternativas de transporte ou acomodação de forma respeitosa é essencial em viagens internacionais.'
      },
      {
        id: 's-b1-td-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta 2: Mala Não Encontrada na Esteira',
        contextScenario: 'O atendente do setor de bagagens pergunta a descrição da sua mala que não apareceu no carrossel.',
        modelAudioText: 'Could you give me a description of your missing suitcase and confirmation of your local delivery address?',
        speechRate: 0.95,
        targetPhrase: 'It is a dark navy hard-shell suitcase with a yellow ribbon, and here is my hotel address for delivery.',
        sampleResponses: [
          'It is a dark navy hard-shell suitcase with a yellow ribbon, and here is my hotel address for delivery.',
          'It is a medium black bag with four spinner wheels and my name tag clearly attached to the handle.',
          'Here is my claim sticker. It is a large grey suitcase, and I will be staying at the Marriott downtown.'
        ],
        pronunciationTip: '"hard-shell suitcase" (/hɑːrd ʃel ˈsuːtkeɪs/). Descreva detalhes distintivos com precisão.',
        translation: 'Você poderia me dar uma descrição da sua mala extraviada e a confirmação do seu endereço local para entrega?',
        explanation: 'Fornecer sinais claros (cor, material, fitas) agiliza a localização da bagagem perdida.'
      },
      {
        id: 's-b1-td-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta 3: Cobrança Indevida no Checkout do Hotel',
        contextScenario: 'A recepcionista inclui taxas de frigobar que você não consumiu durante a estadia.',
        modelAudioText: 'Your final bill includes thirty-five dollars for minibar items from yesterday afternoon.',
        speechRate: 0.95,
        targetPhrase: 'Excuse me, but there must be an error because I did not access the minibar during my stay.',
        sampleResponses: [
          'Excuse me, but there must be an error because I did not access the minibar during my stay.',
          'I believe that charge is mistaken. We never opened the minibar, so please remove that line item.',
          'Could you please remove that charge? We did not use any minibar products yesterday.'
        ],
        pronunciationTip: '"there must be an error" soa muito mais gentil do que "you made a mistake".',
        translation: 'Sua conta final inclui trinta e cinco dólares referentes a itens do frigobar de ontem à tarde.',
        explanation: 'Atribuir a cobrança a um erro impessoal ("there must be an error") resolve a questão sem constrangimentos.'
      }
    ]
  },

  // 14. Fale em situações reais (B1) - Novo
  {
    id: 'speaking-b1-roleplay-car-rental-dispute',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'b1',
    topic: 'Locação & Reivindicação',
    title: 'Simulação: Esclarecendo Cobranças Indevidas na Devolução do Carro',
    description: 'Converse com o supervisor da locadora de veículos para remover uma cobrança indevida de combustível e arranhões.',
    objective: 'Defender sua posição com evidências fotográficas e termos do contrato de locação com firmeza diplomática.',
    instructions: 'Acompanhe as observações do atendente, apresente seus comprovantes em cada turno e zere a taxa contestada.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Pátio de devolução de veículos de um aeroporto internacional',
      partnerRole: 'Supervisor da Locadora',
      userRole: 'Cliente / Motorista',
      checklist: [
        'Apresentação calma das fotos tiradas na retirada',
        'Comprovante do abastecimento feito a menos de 5 km do pátio',
        'Confirmação do recibo final com saldo zerado'
      ]
    },
    questions: [
      {
        id: 's-b1-cr-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Contestando a Taxa de Combustível',
        contextScenario: 'O atendente diz que o medidor de combustível marca um oitavo abaixo do tanque cheio e vai cobrar $50.',
        modelAudioText: 'I just scanned the dashboard and the fuel level is slightly below full, so there will be a fifty-dollar refueling fee.',
        speechRate: 0.95,
        targetPhrase: 'Actually, I just filled the tank completely two miles away. Here is my gas receipt showing the exact time.',
        sampleResponses: [
          'Actually, I just filled the tank completely two miles away. Here is my gas receipt showing the exact time.',
          'I topped off the tank right before arriving. Here is the receipt from the station on Airport Road.',
          'Excuse me, but I filled it to the maximum five minutes ago. You can see the timestamp on this receipt.'
        ],
        pronunciationTip: '"topped off the tank" é a expressão nativa para abastecer até o limite da trava da bomba.',
        translation: 'Acabei de escanear o painel e o nível de combustível está ligeiramente abaixo de cheio, então haverá uma taxa de reabastecimento de cinquenta dólares.',
        explanation: 'Apresentar o comprovante da bomba com horário ("gas receipt showing the exact time") encerra a dúvida.'
      },
      {
        id: 's-b1-cr-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Verificando o Arranhão Pré-Existente',
        contextScenario: 'Ele aponta um pequeno arranhão na porta traseira. Mostre a foto tirada antes de sair no primeiro dia.',
        modelAudioText: 'Alright, I can waive the fuel fee. However, there is a small scratch on the rear right door that was not on the original sheet.',
        speechRate: 0.95,
        targetPhrase: 'I took timestamped photos during the walkaround inspection before leaving. That scratch was already there.',
        sampleResponses: [
          'I took timestamped photos during the walkaround inspection before leaving. That scratch was already there.',
          'If you look at this photo from my pickup morning, the scratch was documented before I drove off.',
          'I made sure to photograph every mark at pickup. Here is the clear picture showing this pre-existing scratch.'
        ],
        pronunciationTip: '"walkaround inspection" (/ˈwɔːkəraʊnd ɪnˈspekʃn/) e "timestamped" (/ˈtaɪmstæmpt/).',
        translation: 'Tudo bem, posso cancelar a taxa de combustível. Contudo, há um pequeno arranhão na porta traseira direita que não estava na ficha original.',
        explanation: 'Fotos no momento da retirada ("walkaround inspection") são a melhor proteção contra cobranças indevidas.'
      },
      {
        id: 's-b1-cr-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Solicitando a Fatura Final Corrigida',
        contextScenario: 'O atendente concorda que a foto comprova o dano antigo. Peça a fatura corrigida e o comprovante de liberação do caução.',
        modelAudioText: 'You are completely right, the photo clearly shows it. I have removed both charges. Anything else?',
        speechRate: 0.95,
        targetPhrase: 'Thank you very much. Could you please print or email me the updated zero-balance receipt now?',
        sampleResponses: [
          'Thank you very much. Could you please print or email me the updated zero-balance receipt now?',
          'I appreciate your understanding. Please email me the confirmation showing zero additional charges.',
          'Thanks for sorting that out so quickly. Could I have the final copy showing my deposit has been released?'
        ],
        pronunciationTip: '"zero-balance receipt" (/ˈzɪroʊ ˈbæləns rɪˈsiːt/). Lembre-se do "p" mudo em receipt.',
        translation: 'Você tem toda razão, a foto mostra claramente. Removi ambas as cobranças. Algo mais?',
        explanation: 'Exigir o comprovante com saldo zerado ("zero-balance receipt") evita surpresas posteriores no cartão de crédito.'
      }
    ]
  },

  // 15. Fale em situações reais (B1) - Novo
  {
    id: 'speaking-b1-roleplay-landlord-repairs',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'b1',
    topic: 'Moradia & Reparos',
    title: 'Simulação: Negociando Reparo Emergencial com o Proprietário',
    description: 'Converse com o locador do imóvel para solucionar com urgência um vazamento na cozinha e negociar abatimento.',
    objective: 'Descrever problemas estruturais de moradia, exigir prazos de manutenção e acordar ressarcimentos.',
    instructions: 'Acompanhe as ponderações do proprietário, argumente com firmeza e chegue a um plano de conserto acordado.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Ligação telefônica para o proprietário do apartamento alugado',
      partnerRole: 'Proprietário do Imóvel (Landlord)',
      userRole: 'Inquilino (Tenant)',
      checklist: [
        'Descrição clara do vazamento e risco de dano ao piso',
        'Acordo para envio de encanador profissional nas próximas 24h',
        'Registro de ressarcimento de despesas eventuais'
      ]
    },
    questions: [
      {
        id: 's-b1-lr-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Notificando o Vazamento Urgente',
        contextScenario: 'O locador atende o telefone. Explique que o cano sob a pia da cozinha começou a vazar intensamente hoje cedo.',
        modelAudioText: 'Hi Lucas, good afternoon. Is everything okay with the apartment?',
        speechRate: 0.95,
        targetPhrase: 'Hi Mr. Jenkins. Unfortunately, the pipe under the kitchen sink started leaking heavily this morning, and it might damage the floor.',
        sampleResponses: [
          'Hi Mr. Jenkins. Unfortunately, the pipe under the kitchen sink started leaking heavily this morning, and it might damage the floor.',
          'Good afternoon. We have an urgent issue: the pipe beneath the kitchen sink is leaking water all over the cabinet.',
          'Hello Mr. Jenkins. I am calling because there is a serious water leak under the kitchen sink that requires immediate attention.'
        ],
        pronunciationTip: '"pipe under the kitchen sink" (/paɪp ˈʌndər ðə ˈkɪtʃɪn sɪŋk/). Enfatize "heavily".',
        translation: 'Oi Lucas, boa tarde. Tudo bem com o apartamento?',
        explanation: 'Destacar o risco de dano ao patrimônio ("might damage the floor") mobiliza o locador a agir rápido.'
      },
      {
        id: 's-b1-lr-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Agilizando a Visita do Encanador',
        contextScenario: 'O locador diz que só tem um técnico disponível daqui a três dias. Explique que o problema não pode esperar e sugira chamar um encanador local hoje.',
        modelAudioText: 'I understand, but my regular maintenance guy cannot make it until Thursday. Can you put a bucket underneath?',
        speechRate: 0.95,
        targetPhrase: 'I already placed a bucket, but it fills up every hour. Could I call an emergency plumber today and deduct the cost from next month’s rent?',
        sampleResponses: [
          'I already placed a bucket, but it fills up every hour. Could I call an emergency plumber today and deduct the cost from next month’s rent?',
          'A bucket is not enough, unfortunately. With your permission, I can hire a licensed plumber and forward you the invoice.',
          'Thursday is too late because the water is seeping into the wooden floor. May I arrange a local repair today on your behalf?'
        ],
        pronunciationTip: '"emergency plumber" (/ɪˈmɜːrdʒənsi ˈplʌmər/ - note que o "b" de plumber é mudo!).',
        translation: 'Compreendo, mas meu técnico de costume só pode ir na quinta-feira. Você pode colocar um balde embaixo?',
        explanation: 'Lembrar que o "b" de "plumber" não se pronuncia (/ˈplʌmər/) é fundamental. Propor dedução do aluguel com nota fiscal é a prática padrão.'
      },
      {
        id: 's-b1-lr-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Confirmando a Autorização e Próximos Passos',
        contextScenario: 'O proprietário concorda com a contratação de urgência. Confirme que vai enviar o orçamento antes de autorizar o serviço.',
        modelAudioText: 'That sounds fair. Go ahead and call a licensed plumber, but please text me their price estimate before they start the work.',
        speechRate: 0.95,
        targetPhrase: 'Absolutely! I will message you the estimate as soon as the plumber inspects it, and keep all receipts. Thank you!',
        sampleResponses: [
          'Absolutely! I will message you the estimate as soon as the plumber inspects it, and keep all receipts. Thank you!',
          'Perfect, I will text you the quote right away before authorizing the repair. Appreciate your quick response.',
          'Will do, Mr. Jenkins. I will send you the cost breakdown before work begins and attach the final receipt later.'
        ],
        pronunciationTip: '"price estimate" (/praɪs ˈestɪmət/ como substantivo tem som de "ət", não "eit").',
        translation: 'Parece justo. Vá em frente e chame um encanador credenciado, mas por favor me mande uma mensagem com a estimativa de preço antes de começarem o serviço.',
        explanation: 'Confirmar o envio prévio do orçamento gera segurança jurídica e mantém a confiança mútua entre inquilino e proprietário.'
      }
    ]
  }
];

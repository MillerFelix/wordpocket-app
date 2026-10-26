import { Activity, ListeningQuestion } from '../../types/activity';

export const LISTENING_B1: Activity<ListeningQuestion>[] = [
  // 1. Ouça e identifique (B1) - Existente
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

  // 2. Ouça e identifique (B1) - Novo
  {
    id: 'listening-b1-id-intonation-attitude',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b1',
    topic: 'Entonação, Tom & Atitude',
    title: 'Identificando Certeza, Ironia e Hesitação',
    description: 'Ouça frases com entonações distintas para decifrar a intenção implícita do falante além das palavras literais.',
    objective: 'Reconhecer sarcasmo sutil, concordância relutante e convicção através da curva melódica da voz.',
    instructions: 'Ouça o tom de voz e identifique a verdadeira atitude do interlocutor em cada declaração.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Deciphering Speaker Tone and Attitude',
      scenario: 'Percepção de atitudes e sentimentos na fala',
      spokenText: 'Speaker one: Oh wonderful, another two-hour flight delay just what I needed today. Speaker two: I suppose we could try that restaurant, though I am not entirely convinced about the reviews. Speaker three: Without any shadow of a doubt, this is the most innovative proposal we have seen this year.',
      speechRate: 0.94,
      estimatedDurationSeconds: 22,
      transcript: 'Speaker 1: Oh wonderful, another two-hour flight delay... just what I needed today.\nSpeaker 2: I suppose we could try that restaurant, though I\'m not entirely convinced about the reviews.\nSpeaker 3: Without any shadow of a doubt, this is the most innovative proposal we\'ve seen this year.',
      transcriptTranslation: 'Falante 1: Ah, maravilhoso, outro atraso de duas horas no voo... bem o que eu precisava hoje.\nFalante 2: Acho que poderíamos tentar aquele restaurante, embora eu não esteja totalmente convencido das avaliações.\nFalante 3: Sem sombra de dúvida, esta é a proposta mais inovadora que vimos este ano.'
    },
    questions: [
      {
        id: 'l-b1-ia-1',
        type: 'multiple_choice',
        questionText: 'Qual é o verdadeiro tom do Falante 1 ao dizer "Oh wonderful, another flight delay"?',
        options: [
          { id: 'A', text: 'Alegria genuína e entusiasmo' },
          { id: 'B', text: 'Ironia e frustração (sarcasm/frustration)' },
          { id: 'C', text: 'Alívio por poder descansar no aeroporto' },
          { id: 'D', text: 'Curiosidade sobre o motivo' }
        ],
        correctOptionId: 'B',
        explanation: 'Dizer que um atraso de voo é "wonderful" e "just what I needed" com tom seco é um clássico uso de ironia sarcástica para expressar frustração.'
      },
      {
        id: 'l-b1-ia-2',
        type: 'multiple_choice',
        questionText: 'Qual sentimento predomina na fala do Falante 2?',
        options: [
          { id: 'A', text: 'Hesitação e ceticismo moderado' },
          { id: 'B', text: 'Fome desesperada' },
          { id: 'C', text: 'Certeza absoluta de que a comida é ruim' },
          { id: 'D', text: 'Raiva contra o garçom' }
        ],
        correctOptionId: 'A',
        explanation: '"I suppose we could try... though I am not entirely convinced" demonstra relutância e hesitação.'
      },
      {
        id: 'l-b1-ia-3',
        type: 'multiple_choice',
        questionText: 'O que o Falante 3 demonstra na terceira frase?',
        options: [
          { id: 'A', text: 'Total convicção e aprovação ("without any shadow of a doubt")' },
          { id: 'B', text: 'Dúvida se a proposta é viável' },
          { id: 'C', text: 'Preocupação com custos' },
          { id: 'D', text: 'Desinteresse no projeto' }
        ],
        correctOptionId: 'A',
        explanation: 'A expressão "Without any shadow of a doubt" expressa certeza plena e forte entusiasmo.'
      }
    ]
  },

  // 3. Ouça e identifique (B1) - Novo
  {
    id: 'listening-b1-id-phrasal-verbs',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b1',
    topic: 'Phrasal Verbs em Contexto',
    title: 'Compreendendo Phrasal Verbs em Situações Cotidianas',
    description: 'Ouça falantes usando expressões verbais idiomáticas como put off, call off, figure out e run into.',
    objective: 'Deduzir o sentido exato de phrasal verbs comuns a partir do contexto sonoro.',
    instructions: 'Ouça o áudio e identifique a ação que está sendo realizada ou decidida.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Phrasal Verbs in Natural Conversation',
      scenario: 'Comentários sobre compromissos e tarefas',
      spokenText: 'Part one: Due to the incoming blizzard, the festival organizers had to call off the outdoor concerts. Part two: We need to figure out how to transport the heavy furniture across town. Part three: You will never believe who I ran into while browsing the local farmers market yesterday!',
      speechRate: 0.94,
      estimatedDurationSeconds: 21,
      transcript: 'Part 1: Due to the incoming blizzard, the festival organizers had to call off the outdoor concerts.\nPart 2: We need to figure out how to transport the heavy furniture across town.\nPart 3: You will never believe who I ran into while browsing the local farmers market yesterday!',
      transcriptTranslation: 'Parte 1: Devido à nevasca iminente, os organizadores do festival tiveram que cancelar os shows ao ar livre.\nParte 2: Nós precisamos descobrir como transportar os móveis pesados pela cidade.\nParte 3: Você nunca vai acreditar em quem eu esbarrei enquanto olhava a feira de produtores locais ontem!'
    },
    questions: [
      {
        id: 'l-b1-pv-1',
        type: 'multiple_choice',
        questionText: 'O que significa o phrasal verb "call off" na Parte 1?',
        options: [
          { id: 'A', text: 'Adiar para a semana seguinte' },
          { id: 'B', text: 'Cancelar permanentemente o evento (cancel)' },
          { id: 'C', text: 'Mudar o local para um ginásio coberto' },
          { id: 'D', text: 'Transmitir ao vivo pela internet' }
        ],
        correctOptionId: 'B',
        explanation: '"Call off" significa cancelar um evento previamente marcado.'
      },
      {
        id: 'l-b1-pv-2',
        type: 'multiple_choice',
        questionText: 'O que os falantes precisam fazer com a mobília na Parte 2 ("figure out")?',
        options: [
          { id: 'A', text: 'Vender os móveis para vizinhos' },
          { id: 'B', text: 'Descobrir/encontrar uma solução para transportar os móveis' },
          { id: 'C', text: 'Jogar fora a mobília quebrada' },
          { id: 'D', text: 'Desmontar as mesas' }
        ],
        correctOptionId: 'B',
        explanation: '"Figure out" significa encontrar uma solução, deduzir ou resolver um problema.'
      },
      {
        id: 'l-b1-pv-3',
        type: 'multiple_choice',
        questionText: 'O que aconteceu na feira de produtores locais na Parte 3 ("ran into")?',
        options: [
          { id: 'A', text: 'O falante bateu o carro em uma barraca' },
          { id: 'B', text: 'O falante encontrou alguém por acaso/esbarrou com um conhecido' },
          { id: 'C', text: 'O falante perdeu a carteira na feira' },
          { id: 'D', text: 'O falante correu para não perder as compras' }
        ],
        correctOptionId: 'B',
        explanation: '"Run into someone" significa encontrar alguém inesperadamente por coincidência.'
      }
    ]
  },

  // 4. Ouça e identifique (B1) - Novo
  {
    id: 'listening-b1-id-passive-voice',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b1',
    topic: 'Voz Passiva & Notícias',
    title: 'Identificando Voz Passiva em Comunicados e Notícias',
    description: 'Compreenda comunicados institucionais com verbos na voz passiva (was chosen, were informed, has been rescheduled).',
    objective: 'Reconhecer estruturas passivas formais do inglês e identificar o foco da mensagem.',
    instructions: 'Ouça as frases e selecione o significado correto de cada anúncio.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Passive Structures in Broadcasts',
      scenario: 'Anúncios oficiais de utilidade pública',
      spokenText: 'Notice A: All museum visitors are kindly reminded that photography is strictly prohibited inside the historical archives. Notice B: The old suspension bridge has been temporarily closed for structural reinforcement. Notice C: Five community volunteers were honored at city hall for their environmental initiatives.',
      speechRate: 0.94,
      estimatedDurationSeconds: 22,
      transcript: 'Notice A: All museum visitors are kindly reminded that photography is strictly prohibited inside the historical archives.\nNotice B: The old suspension bridge has been temporarily closed for structural reinforcement.\nNotice C: Five community volunteers were honored at city hall for their environmental initiatives.',
      transcriptTranslation: 'Aviso A: Todos os visitantes do museu são gentilmente lembrados de que fotografias são estritamente proibidas dentro dos arquivos históricos.\nAviso B: A antiga ponte pênsil foi temporariamente fechada para reforço estrutural.\nAviso C: Cinco voluntários da comunidade foram homenageados na prefeitura por suas iniciativas ambientais.'
    },
    questions: [
      {
        id: 'l-b1-pv-a1',
        type: 'multiple_choice',
        questionText: 'O que é proibido aos visitantes no Aviso A?',
        options: [
          { id: 'A', text: 'Comer nos bancos do jardim' },
          { id: 'B', text: 'Tirar fotografias dentro dos arquivos históricos (photography is strictly prohibited)' },
          { id: 'C', text: 'Falar ao celular na entrada' },
          { id: 'D', text: 'Entrar com mochilas grandes' }
        ],
        correctOptionId: 'B',
        explanation: 'O aviso passivo diz: "photography is strictly prohibited inside the historical archives".'
      },
      {
        id: 'l-b1-pv-a2',
        type: 'multiple_choice',
        questionText: 'Por que a ponte pênsil foi fechada no Aviso B?',
        options: [
          { id: 'A', text: 'Para a passagem de navios de carga' },
          { id: 'B', text: 'Para reforço estrutural (structural reinforcement)' },
          { id: 'C', text: 'Por causa de uma corrida de rua' },
          { id: 'D', text: 'Para filmagem de um filme' }
        ],
        correctOptionId: 'B',
        explanation: 'A estrutura diz: "has been temporarily closed for structural reinforcement".'
      },
      {
        id: 'l-b1-pv-a3',
        type: 'multiple_choice',
        questionText: 'O que aconteceu com os voluntários da comunidade no Aviso C?',
        options: [
          { id: 'A', text: 'Foram multados pela prefeitura' },
          { id: 'B', text: 'Foram contratados como funcionários públicos' },
          { id: 'C', text: 'Foram homenageados na prefeitura por suas ações ambientais (were honored)' },
          { id: 'D', text: 'Foram transferidos para outro bairro' }
        ],
        correctOptionId: 'C',
        explanation: '"Five community volunteers were honored at city hall for their environmental initiatives".'
      }
    ]
  },

  // 5. Compreenda o diálogo (B1) - Existente
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

  // 6. Compreenda o diálogo (B1) - Novo
  {
    id: 'listening-b1-dial-apartment-lease',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b1',
    topic: 'Moradia & Contratos',
    title: 'Negociando o Contrato de Locação de um Imóvel',
    description: 'Arthur conversa com o proprietário de um apartamento sobre cláusulas de pets, caução e prazo mínimo de estadia.',
    objective: 'Compreender negociação contratual, condições de garantia locatícia e regras condominiais.',
    instructions: 'Acompanhe a conversa entre Arthur e o proprietário e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Discussing the Apartment Lease Terms',
      scenario: 'Reunião entre inquilino e proprietário no imóvel',
      spokenText: 'Arthur, thank you for coming by today. I reviewed your rental application, and your references look excellent. That is great to hear, Mr. Jenkins! I really love the natural light and the location. Before signing the contract, could we clarify two points? Of course, what questions do you have? First, regarding the lease duration, is a twelve-month agreement strictly required, or would you consider a six-month lease with an option to renew? Since you have dependable employment, I would be open to nine months. And secondly? Are quiet pets allowed? I have a well-trained domestic cat. As long as we include an additional pet security deposit of three hundred dollars, a cat is completely fine with me.',
      dialogueLines: [
        { speaker: 'Mr. Jenkins', gender: 'male', text: 'Arthur, thank you for coming by today. I reviewed your rental application, and your references look excellent.', translation: 'Arthur, obrigado por vir hoje. Analisei sua ficha de locação e suas referências parecem excelentes.' },
        { speaker: 'Arthur', gender: 'male', text: 'That is great to hear, Mr. Jenkins! I really love the natural light and the location. Before signing the contract, could we clarify two points?', translation: 'Fico feliz em ouvir isso, Sr. Jenkins! Adorei a luz natural e a localização. Antes de assinar o contrato, poderíamos esclarecer dois pontos?' },
        { speaker: 'Mr. Jenkins', gender: 'male', text: 'Of course, what questions do you have?', translation: 'Claro, quais dúvidas você tem?' },
        { speaker: 'Arthur', gender: 'male', text: 'First, regarding the lease duration, is a twelve-month agreement strictly required, or would you consider a six-month lease with an option to renew?', translation: 'Primeiro, em relação à duração do aluguel: um contrato de 12 meses é estritamente obrigatório ou você consideraria 6 meses com opção de renovação?' },
        { speaker: 'Mr. Jenkins', gender: 'male', text: 'Since you have dependable employment, I would be open to nine months. And secondly?', translation: 'Como você tem um emprego confiável, eu estaria aberto a nove meses. E em segundo lugar?' },
        { speaker: 'Arthur', gender: 'male', text: 'Are quiet pets allowed? I have a well-trained domestic cat.', translation: 'Animais de estimação tranquilos são permitidos? Tenho um gato doméstico bem educado.' },
        { speaker: 'Mr. Jenkins', gender: 'male', text: 'As long as we include an additional pet security deposit of three hundred dollars, a cat is completely fine with me.', translation: 'Desde que incluamos um depósito caução adicional para animais de trezentos dólares, um gato não tem nenhum problema para mim.' }
      ],
      speechRate: 0.95,
      estimatedDurationSeconds: 32,
      transcript: 'Mr. Jenkins: Arthur, your rental application and references look excellent.\nArthur: That is great to hear! Before signing, could we clarify two points?\nMr. Jenkins: Of course, what questions do you have?\nArthur: Is a 12-month agreement strictly required, or would you consider 6 months with an option to renew?\nMr. Jenkins: Since you have dependable employment, I would be open to 9 months. And secondly?\nArthur: Are quiet pets allowed? I have a well-trained domestic cat.\nMr. Jenkins: As long as we include an additional pet security deposit of $300, a cat is fine with me.',
      transcriptTranslation: 'Sr. Jenkins: Arthur, sua ficha e referências estão excelentes.\nArthur: Ótimo! Antes de assinar, podemos esclarecer dois pontos?\nSr. Jenkins: Claro!\nArthur: Contrato de 12 meses é obrigatório ou você aceitaria 6 meses com renovação?\nSr. Jenkins: Como seu emprego é sólido, topo 9 meses. E a segunda dúvida?\nArthur: Pets tranquilos são permitidos? Tenho um gato educado.\nSr. Jenkins: Desde que haja caução adicional de $300 para o pet, por mim está tudo bem.'
    },
    questions: [
      {
        id: 'l-b1-al-1',
        type: 'multiple_choice',
        questionText: 'Qual prazo de contrato intermediário o proprietário propõe para Arthur?',
        options: [
          { id: 'A', text: '6 meses' },
          { id: 'B', text: '9 meses (nine months)' },
          { id: 'C', text: '12 meses rígidos' },
          { id: 'D', text: '24 meses' }
        ],
        correctOptionId: 'B',
        explanation: 'Mr. Jenkins propõe um meio-termo: "I would be open to nine months".'
      },
      {
        id: 'l-b1-al-2',
        type: 'multiple_choice',
        questionText: 'Qual animal de estimação Arthur tem?',
        options: [
          { id: 'A', text: 'Um cachorro grande' },
          { id: 'B', text: 'Dois pássaros' },
          { id: 'C', text: 'Um gato doméstico bem educado (well-trained domestic cat)' },
          { id: 'D', text: 'Um aquário de peixes' }
        ],
        correctOptionId: 'C',
        explanation: 'Arthur informa: "I have a well-trained domestic cat".'
      },
      {
        id: 'l-b1-al-3',
        type: 'multiple_choice',
        questionText: 'Qual condição o proprietário estabelece para aceitar o gato no imóvel?',
        options: [
          { id: 'A', text: 'Aumento permanente de 20% no aluguel' },
          { id: 'B', text: 'Um depósito caução adicional de $300 para animais (pet security deposit)' },
          { id: 'C', text: 'Manter o gato apenas na varanda' },
          { id: 'D', text: 'Uma autorização por escrito dos vizinhos' }
        ],
        correctOptionId: 'B',
        explanation: 'O locador impõe: "an additional pet security deposit of three hundred dollars ($300)".'
      }
    ]
  },

  // 7. Compreenda o diálogo (B1) - Novo
  {
    id: 'listening-b1-dial-event-planning',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b1',
    topic: 'Cultura & Eventos',
    title: 'Organizando um Festival de Cinema Comunitário',
    description: 'Vanessa e Julian discutem a seleção de local, projeção audiovisual e patrocinadores para um evento cultural.',
    objective: 'Captar ponderações de custo, capacidade de público e contingência em caso de mau tempo.',
    instructions: 'Ouça o diálogo e responda às perguntas sobre as decisões da comissão organizadora.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Planning a Community Film Showcase',
      scenario: 'Reunião de produção de evento cultural',
      spokenText: 'Julian, we need to finalize the venue for our upcoming documentary showcase next month. Have you heard back from the civic theater? Yes, but their rental fee increased by forty percent this year, which would blow our entire budget. What is our alternative? The botanical garden pavilion. It accommodates up to two hundred people, features better acoustics, and the rental costs half as much. What happens if it rains on the opening night? The pavilion has retractable transparent roofs, so weather will not be an obstacle. That solves our dilemma! Let us secure the botanical pavilion and reallocate the surplus budget toward local filmmaker prizes.',
      dialogueLines: [
        { speaker: 'Vanessa', gender: 'female', text: 'Julian, we need to finalize the venue for our upcoming documentary showcase next month. Have you heard back from the civic theater?', translation: 'Julian, precisamos definir o local para nossa mostra de documentários no mês que vem. Você teve resposta do teatro municipal?' },
        { speaker: 'Julian', gender: 'male', text: 'Yes, but their rental fee increased by forty percent this year, which would blow our entire budget. What is our alternative?', translation: 'Sim, mas a taxa de locação deles aumentou quarenta por cento este ano, o que estouraria todo o nosso orçamento. Qual é a nossa alternativa?' },
        { speaker: 'Vanessa', gender: 'female', text: 'The botanical garden pavilion. It accommodates up to two hundred people, features better acoustics, and the rental costs half as much.', translation: 'O pavilhão do jardim botânico. Ele acomoda até duzentas pessoas, tem melhor acústica e o aluguel custa metade.' },
        { speaker: 'Julian', gender: 'male', text: 'What happens if it rains on the opening night?', translation: 'O que acontece se chover na noite de abertura?' },
        { speaker: 'Vanessa', gender: 'female', text: 'The pavilion has retractable transparent roofs, so weather will not be an obstacle.', translation: 'O pavilhão possui teto retrátil transparente, então o clima não será um obstáculo.' },
        { speaker: 'Julian', gender: 'male', text: 'That solves our dilemma! Let us secure the botanical pavilion and reallocate the surplus budget toward local filmmaker prizes.', translation: 'Isso resolve nosso dilema! Vamos garantir o pavilhão botânico e realocar o orçamento excedente para os prêmios dos cineastas locais.' }
      ],
      speechRate: 0.95,
      estimatedDurationSeconds: 31,
      transcript: 'Vanessa: Julian, we need to finalize the venue for our documentary showcase. Any news from the civic theater?\nJulian: Yes, but their fee increased by 40%, which would blow our budget.\nVanessa: The botanical garden pavilion accommodates 200 people, has better acoustics, and costs half as much.\nJulian: What happens if it rains?\nVanessa: It has retractable transparent roofs, so weather won\'t be an obstacle.\nJulian: Let\'s secure the botanical pavilion and reallocate the surplus toward filmmaker prizes.',
      transcriptTranslation: 'Vanessa: Precisamos fechar o local da mostra. Teve notícias do teatro municipal?\nJulian: A taxa aumentou 40%, o que estouraria nosso orçamento.\nVanessa: O pavilhão do jardim botânico comporta 200 pessoas, tem acústica melhor e custa metade.\nJulian: E se chover?\nVanessa: Tem teto retrátil transparente, o tempo não atrapalha.\nJulian: Vamos fechar o pavilhão botânico e usar o que sobrar nos prêmios dos cineastas.'
    },
    questions: [
      {
        id: 'l-b1-ep-1',
        type: 'multiple_choice',
        questionText: 'Por que o teatro municipal (civic theater) foi descartado?',
        options: [
          { id: 'A', text: 'O prédio foi interditado para reformas' },
          { id: 'B', text: 'A taxa de aluguel subiu 40%, estourando o orçamento (fee increased by 40%)' },
          { id: 'C', text: 'A capacidade de público era muito pequena' },
          { id: 'D', text: 'Não havia projetor de cinema disponível' }
        ],
        correctOptionId: 'B',
        explanation: 'Julian explica: "their rental fee increased by forty percent this year, which would blow our entire budget".'
      },
      {
        id: 'l-b1-ep-2',
        type: 'multiple_choice',
        questionText: 'Como o pavilhão do jardim botânico lida com a possibilidade de chuva?',
        options: [
          { id: 'A', text: 'Cancelando a sessão' },
          { id: 'B', text: 'Distribuindo guarda-chuvas para o público' },
          { id: 'C', text: 'Possui teto retrátil transparente (retractable transparent roofs)' },
          { id: 'D', text: 'Movendo o evento para uma tenda de lona' }
        ],
        correctOptionId: 'C',
        explanation: 'Vanessa esclarece: "The pavilion has retractable transparent roofs, so weather will not be an obstacle".'
      },
      {
        id: 'l-b1-ep-3',
        type: 'multiple_choice',
        questionText: 'O que eles decidem fazer com o dinheiro economizado na locação?',
        options: [
          { id: 'A', text: 'Guardar para o ano que vem' },
          { id: 'B', text: 'Pagar bônus aos organizadores' },
          { id: 'C', text: 'Destinar aos prêmios dos cineastas locais (local filmmaker prizes)' },
          { id: 'D', text: 'Contratar um serviço de bufê caro' }
        ],
        correctOptionId: 'C',
        explanation: 'Julian propõe: "reallocate the surplus budget toward local filmmaker prizes".'
      }
    ]
  },

  // 8. Compreenda o diálogo (B1) - Novo
  {
    id: 'listening-b1-dial-travel-mishap',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b1',
    topic: 'Viagens & Imprevistos',
    title: 'Resolvendo Bagagem Extraviada no Aeroporto',
    description: 'Claire conversa com o agente de bagagem após sua mala não aparecer na esteira de desembarque.',
    objective: 'Compreender descrição de pertences, protocolo de rastreamento e prazos de entrega em domicílio.',
    instructions: 'Ouça o diálogo entre passageira e atendente e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Reporting Delayed Baggage at the Airport',
      scenario: 'Balcão de bagagens extraviadas no terminal',
      spokenText: 'Good evening. I have been waiting at carousel four for over forty minutes, but my large silver suitcase never came out. I am sorry for the inconvenience, ma am. May I scan your baggage claim receipt? Here is my boarding pass with the sticker attached. Thank you. According to the tracking system, your bag was inadvertently held back during the tight layover in Atlanta. It has already been loaded onto flight DL 814 and is expected to land here at eleven tonight. What happens next? We will arrange complimentary door-to-door courier delivery directly to your hotel by tomorrow morning. Please fill out this delivery form with your hotel address and phone number.',
      dialogueLines: [
        { speaker: 'Claire', gender: 'female', text: 'Good evening. I have been waiting at carousel four for over forty minutes, but my large silver suitcase never came out.', translation: 'Boa noite. Estou esperando na esteira quatro há mais de quarenta minutos, mas minha mala grande prateada não saiu.' },
        { speaker: 'Agent', gender: 'male', text: 'I am sorry for the inconvenience, ma am. May I scan your baggage claim receipt?', translation: 'Lamento pelo inconveniente, senhora. Posso escanear o comprovante de despacho de bagagem?' },
        { speaker: 'Claire', gender: 'female', text: 'Here is my boarding pass with the sticker attached.', translation: 'Aqui está meu cartão de embarque com o adesivo anexado.' },
        { speaker: 'Agent', gender: 'male', text: 'Thank you. According to the tracking system, your bag was inadvertently held back during the tight layover in Atlanta. It has already been loaded onto flight DL 814 and is expected to land here at eleven tonight.', translation: 'Obrigado. De acordo com o sistema de rastreamento, sua mala ficou retida sem intenção durante a conexão apertada em Atlanta. Ela já foi embarcada no voo DL 814 e deve pousar aqui às 23h de hoje.' },
        { speaker: 'Claire', gender: 'female', text: 'What happens next?', translation: 'O que acontece em seguida?' },
        { speaker: 'Agent', gender: 'male', text: 'We will arrange complimentary door-to-door courier delivery directly to your hotel by tomorrow morning. Please fill out this delivery form with your hotel address and phone number.', translation: 'Providenciaremos entrega gratuita por motoboy diretamente no seu hotel até amanhã de manhã. Por favor, preencha este formulário de entrega com o endereço do seu hotel e telefone.' }
      ],
      speechRate: 0.95,
      estimatedDurationSeconds: 32,
      transcript: 'Claire: I\'ve been waiting at carousel 4 for 40 minutes, but my silver suitcase never came out.\nAgent: May I scan your baggage claim receipt?\nClaire: Here is my boarding pass with the sticker.\nAgent: Your bag was held back during the tight layover in Atlanta. It was loaded onto flight DL 814 and lands here at 11 PM.\nClaire: What happens next?\nAgent: We will arrange complimentary courier delivery directly to your hotel by tomorrow morning. Please fill out this form.',
      transcriptTranslation: 'Claire: Espero na esteira 4 há 40 minutos e minha mala prateada não apareceu.\nAgente: Posso escanear o comprovante?\nClaire: Aqui está o adesivo.\nAgente: A mala ficou na conexão apertada em Atlanta. Ela vem no voo DL 814 e pousa às 23h.\nClaire: E agora?\nAgente: Faremos entrega gratuita por entregador no seu hotel até amanhã de manhã. Preencha este formulário.'
    },
    questions: [
      {
        id: 'l-b1-tm-1',
        type: 'multiple_choice',
        questionText: 'Por que a mala de Claire não chegou no mesmo voo?',
        options: [
          { id: 'A', text: 'A mala foi rasgada na triagem' },
          { id: 'B', text: 'Ficou retida durante uma conexão apertada em Atlanta (held back during tight layover)' },
          { id: 'C', text: 'Foi enviada por engano para a Europa' },
          { id: 'D', text: 'Claire esqueceu de despachar' }
        ],
        correctOptionId: 'B',
        explanation: 'O agente explica: "your bag was inadvertently held back during the tight layover in Atlanta".'
      },
      {
        id: 'l-b1-tm-2',
        type: 'multiple_choice',
        questionText: 'Quando a mala deve pousar no aeroporto local?',
        options: [
          { id: 'A', text: 'Às 23h de hoje (eleven tonight)' },
          { id: 'B', text: 'Apenas depois de amanhã' },
          { id: 'C', text: 'Às 18h de hoje' },
          { id: 'D', text: 'Ao meio-dia de amanhã' }
        ],
        correctOptionId: 'A',
        explanation: 'O agente informa: "is expected to land here at eleven tonight (11 PM)".'
      },
      {
        id: 'l-b1-tm-3',
        type: 'multiple_choice',
        questionText: 'Como Claire receberá a mala?',
        options: [
          { id: 'A', text: 'Ela deve voltar ao aeroporto de madrugada para buscar' },
          { id: 'B', text: 'Entrega cortesia diretamente em seu hotel até amanhã de manhã (complimentary courier delivery)' },
          { id: 'C', text: 'Ela terá que pagar uma taxa de entrega de $50' },
          { id: 'D', text: 'Pelos correios em 5 dias úteis' }
        ],
        correctOptionId: 'B',
        explanation: 'O funcionário garante: "complimentary door-to-door courier delivery directly to your hotel by tomorrow morning".'
      }
    ]
  },

  // 9. Situações da vida real (B1) - Existente
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

  // 10. Situações da vida real (B1) - Novo
  {
    id: 'listening-b1-sit-bank-account',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b1',
    topic: 'Finanças & Cidadania',
    title: 'Abrindo Conta Corrente no Exterior',
    description: 'Ouça uma conversa com o gerente de uma agência bancária em Londres para abertura de conta para recém-chegados.',
    objective: 'Identificar documentação exigida (proof of address, passport), tarifas mensais e cartões de débito.',
    instructions: 'Acompanhe as instruções do gerente bancário e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Opening a Bank Account Abroad',
      scenario: 'Mesa de atendimento em uma agência bancária',
      spokenText: 'Welcome to Apex Bank. How may I help you today? Hello! I recently moved here on a work visa, and I would like to open a checking account for my salary. Wonderful! We have our Standard Everyday Account, which has no monthly maintenance fee provided you maintain a minimum balance of five hundred dollars or set up direct deposit. What documents are necessary? We will need your valid passport with the work visa stamp, a signed residential lease agreement as proof of address, and your employment offer letter. Once verified, your contactless debit card will arrive in five business days, and mobile banking is activated immediately.',
      dialogueLines: [
        { speaker: 'Bank Officer', gender: 'female', text: 'Welcome to Apex Bank. How may I help you today?', translation: 'Bem-vindo ao Apex Bank. Como posso te ajudar hoje?' },
        { speaker: 'Customer', gender: 'male', text: 'Hello! I recently moved here on a work visa, and I would like to open a checking account for my salary.', translation: 'Olá! Mudei-me recentemente para cá com visto de trabalho e gostaria de abrir uma conta corrente para receber meu salário.' },
        { speaker: 'Bank Officer', gender: 'female', text: 'Wonderful! We have our Standard Everyday Account, which has no monthly maintenance fee provided you maintain a minimum balance of five hundred dollars or set up direct deposit.', translation: 'Excelente! Temos nossa conta Standard Everyday, que é isenta de taxa de manutenção mensal desde que mantenha saldo mínimo de quinhentos dólares ou cadastre depósito direto.' },
        { speaker: 'Customer', gender: 'male', text: 'What documents are necessary?', translation: 'Quais documentos são necessários?' },
        { speaker: 'Bank Officer', gender: 'female', text: 'We will need your valid passport with the work visa stamp, a signed residential lease agreement as proof of address, and your employment offer letter.', translation: 'Precisaremos de seu passaporte válido com o carimbo do visto, contrato de aluguel assinado como comprovante de endereço e carta de oferta de emprego.' },
        { speaker: 'Bank Officer', gender: 'female', text: 'Once verified, your contactless debit card will arrive in five business days, and mobile banking is activated immediately.', translation: 'Após a verificação, seu cartão de débito por aproximação chegará em cinco dias úteis e o internet banking no celular fica ativo na hora.' }
      ],
      speechRate: 0.95,
      estimatedDurationSeconds: 32,
      transcript: 'Customer: I moved here on a work visa and want to open a checking account for my salary.\nOfficer: Our Everyday Account has no monthly fee with a $500 balance or direct deposit.\nCustomer: What documents are necessary?\nOfficer: Valid passport with visa stamp, signed lease agreement as proof of address, and employment offer letter.\nOfficer: Your debit card arrives in 5 business days, and mobile banking activates immediately.',
      transcriptTranslation: 'Cliente: Mudei com visto de trabalho e quero abrir conta corrente para receber salário.\nGerente: A conta não tem taxa com saldo de $500 ou depósito direto de salário.\nCliente: Quais documentos precisa?\nGerente: Passaporte com visto, contrato de aluguel como comprovante de endereço e carta de emprego.\nGerente: O cartão de débito chega em 5 dias úteis e o app ativa imediatamente.'
    },
    questions: [
      {
        id: 'l-b1-ba-1',
        type: 'multiple_choice',
        questionText: 'Qual condição isenta a taxa de manutenção mensal da conta?',
        options: [
          { id: 'A', text: 'Pagar $20 adiantados' },
          { id: 'B', text: 'Manter saldo mínimo de $500 ou cadastrar depósito de salário (direct deposit)' },
          { id: 'C', text: 'Contratar seguro de vida' },
          { id: 'D', text: 'Apresentar 3 fiadores' }
        ],
        correctOptionId: 'B',
        explanation: 'A gerente afirma: "no monthly maintenance fee provided you maintain a minimum balance of five hundred dollars or set up direct deposit".'
      },
      {
        id: 'l-b1-ba-2',
        type: 'multiple_choice',
        questionText: 'O que é aceito pela gerente como comprovante de endereço (proof of address)?',
        options: [
          { id: 'A', text: 'Uma conta de telefone do país de origem' },
          { id: 'B', text: 'Contrato residencial de locação assinado (signed residential lease agreement)' },
          { id: 'C', text: 'Apenas a reserva do hotel' },
          { id: 'D', text: 'O extrato de outro banco' }
        ],
        correctOptionId: 'B',
        explanation: 'Ela lista expressamente: "a signed residential lease agreement as proof of address".'
      },
      {
        id: 'l-b1-ba-3',
        type: 'multiple_choice',
        questionText: 'Em quanto tempo o cartão de débito por aproximação chegará?',
        options: [
          { id: 'A', text: 'Na hora' },
          { id: 'B', text: 'Em cinco dias úteis (five business days)' },
          { id: 'C', text: 'Em duas semanas' },
          { id: 'D', text: 'Apenas após um mês de uso' }
        ],
        correctOptionId: 'B',
        explanation: 'A funcionária afirma: "your contactless debit card will arrive in five business days".'
      }
    ]
  },

  // 11. Situações da vida real (B1) - Novo
  {
    id: 'listening-b1-sit-car-rental',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b1',
    topic: 'Locação & Trânsito',
    title: 'Alugando um Carro no Aeroporto',
    description: 'Ouça o processo de locação de veículo, com opções de seguro total (CDW), pedágios e política de combustível.',
    objective: 'Compreender vocabulário de locação veicular (collision damage waiver, toll transponder, full-to-full).',
    instructions: 'Acompanhe a conversa entre cliente e atendente e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Hiring a Rental Car at the Airport',
      scenario: 'Balcão de locadora de automóveis',
      spokenText: 'Good morning! I have a reservation for an intermediate SUV under the name of Rebecca Torres. Welcome Ms. Torres! We have a hybrid SUV ready for you. Your rental is for seven days with unlimited mileage. Would you like to add comprehensive Collision Damage Waiver with zero deductible? How much does that add to the daily rate? It is fifteen dollars per day and protects you against any scratches or glass damage. Let us add that for peace of mind. Also, our fuel policy is full-to-full, so return it with a full tank of unleaded petrol to avoid refueling surcharges. Understood! Here is your vehicle key and parking bay slip.',
      dialogueLines: [
        { speaker: 'Rebecca', gender: 'female', text: 'Good morning! I have a reservation for an intermediate SUV under the name of Rebecca Torres.', translation: 'Bom dia! Tenho uma reserva de um SUV intermediário no nome de Rebecca Torres.' },
        { speaker: 'Rental Agent', gender: 'male', text: 'Welcome Ms. Torres! We have a hybrid SUV ready for you. Your rental is for seven days with unlimited mileage.', translation: 'Bem-vinda, Sra. Torres! Temos um SUV híbrido pronto para você. Seu aluguel é de sete dias com quilometragem ilimitada.' },
        { speaker: 'Rental Agent', gender: 'male', text: 'Would you like to add comprehensive Collision Damage Waiver with zero deductible?', translation: 'Você gostaria de adicionar cobertura de colisão abrangente (CDW) com franquia zero?' },
        { speaker: 'Rebecca', gender: 'female', text: 'How much does that add to the daily rate?', translation: 'Quanto isso adiciona à diária?' },
        { speaker: 'Rental Agent', gender: 'male', text: 'It is fifteen dollars per day and protects you against any scratches or glass damage.', translation: 'São quinze dólares por dia e protege você contra qualquer arranhão ou dano nos vidros.' },
        { speaker: 'Rebecca', gender: 'female', text: 'Let us add that for peace of mind.', translation: 'Vamos adicionar isso para termos tranquilidade.' },
        { speaker: 'Rental Agent', gender: 'male', text: 'Also, our fuel policy is full-to-full, so return it with a full tank of unleaded petrol to avoid refueling surcharges.', translation: 'Além disso, nossa política de combustível é tanque cheio para tanque cheio, então devolva com tanque cheio para evitar sobretaxas de reabastecimento.' }
      ],
      speechRate: 0.95,
      estimatedDurationSeconds: 31,
      transcript: 'Rebecca: I have a reservation for an intermediate SUV under Rebecca Torres.\nAgent: We have a hybrid SUV with unlimited mileage for 7 days.\nAgent: Would you like Collision Damage Waiver with zero deductible for $15/day?\nRebecca: Let\'s add that for peace of mind.\nAgent: Our fuel policy is full-to-full: return it with a full tank to avoid surcharges.',
      transcriptTranslation: 'Rebecca: Tenho reserva de SUV intermediário no nome Rebecca Torres.\nAgente: Temos um SUV híbrido com km ilimitada por 7 dias.\nAgente: Gostaria do seguro total com franquia zero por $15/dia?\nRebecca: Vamos adicionar pela tranquilidade.\nAgente: A política é tanque cheio por tanque cheio: devolva cheio para evitar sobretaxas.'
    },
    questions: [
      {
        id: 'l-b1-cr-1',
        type: 'multiple_choice',
        questionText: 'Por quanto tempo e com que limite de quilometragem Rebecca aluga o SUV?',
        options: [
          { id: 'A', text: 'Por 3 dias com limite de 500 km' },
          { id: 'B', text: 'Por sete dias com quilometragem ilimitada (seven days, unlimited mileage)' },
          { id: 'C', text: 'Por um mês com franquia de 1000 km' },
          { id: 'D', text: 'Apenas para o final de semana' }
        ],
        correctOptionId: 'B',
        explanation: 'O agente confirma: "Your rental is for seven days with unlimited mileage".'
      },
      {
        id: 'l-b1-cr-2',
        type: 'multiple_choice',
        questionText: 'Qual é o valor do seguro com franquia zero (zero deductible)?',
        options: [
          { id: 'A', text: '$15 por dia (fifteen dollars per day)' },
          { id: 'B', text: '$50 por semana' },
          { id: 'C', text: 'É gratuito' },
          { id: 'D', text: '$100 caução único' }
        ],
        correctOptionId: 'A',
        explanation: 'O funcionário responde: "It is fifteen dollars per day and protects you against any scratches or glass damage".'
      },
      {
        id: 'l-b1-cr-3',
        type: 'multiple_choice',
        questionText: 'O que significa a regra de combustível "full-to-full"?',
        options: [
          { id: 'A', text: 'O cliente deve devolver o carro totalmente sem gasolina' },
          { id: 'B', text: 'O cliente recebe o carro de tanque cheio e deve devolvê-lo com tanque cheio' },
          { id: 'C', text: 'A locadora cobra o combustível antecipadamente sem reembolso' },
          { id: 'D', text: 'O carro funciona exclusivamente com eletricidade' }
        ],
        correctOptionId: 'B',
        explanation: '"Full-to-full" significa que você pega com o tanque cheio e deve devolver cheio para não pagar taxa extra de abastecimento.'
      }
    ]
  },

  // 12. Situações da vida real (B1) - Novo
  {
    id: 'listening-b1-sit-doctor-consultation',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b1',
    topic: 'Saúde & Consulta Médica',
    title: 'Consulta na Clínica Médica',
    description: 'Ouça um diálogo entre médico e paciente sobre dor persistente no tornozelo após prática esportiva.',
    objective: 'Compreender descrição de sintomas, histórico de lesão e recomendações de repouso e fisioterapia.',
    instructions: 'Acompanhe a consulta médica e responda às perguntas sobre o diagnóstico e cuidados recomendados.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Consultation at the Medical Clinic',
      scenario: 'Consultório médico',
      spokenText: 'Good morning, Mr. Santos. What brings you in today? Well, Doctor, while playing basketball four days ago, I landed awkwardly and twisted my right ankle. I felt a sharp pain immediately. Has the swelling improved since then? Some of the swelling went down because I kept it elevated and applied ice packs, but putting weight on it when walking is still quite painful. Let me examine the joint. There is tenderness along the outer ligament, but your mobility suggests no bone fracture. I will prescribe an anti-inflammatory gel and refer you for light physical therapy. Avoid running for two weeks.',
      dialogueLines: [
        { speaker: 'Doctor', gender: 'female', text: 'Good morning, Mr. Santos. What brings you in today?', translation: 'Bom dia, Sr. Santos. O que o traz aqui hoje?' },
        { speaker: 'Mr. Santos', gender: 'male', text: 'Well, Doctor, while playing basketball four days ago, I landed awkwardly and twisted my right ankle. I felt a sharp pain immediately.', translation: 'Bem, doutora, enquanto jogava basquete quatro dias atrás, aterrissei de mau jeito e torci meu tornozelo direito. Senti uma dor aguda na hora.' },
        { speaker: 'Doctor', gender: 'female', text: 'Has the swelling improved since then?', translation: 'O inchaço melhorou desde então?' },
        { speaker: 'Mr. Santos', gender: 'male', text: 'Some of the swelling went down because I kept it elevated and applied ice packs, but putting weight on it when walking is still quite painful.', translation: 'Parte do inchaço diminuiu porque mantive elevado e apliquei bolsas de gelo, mas colocar o peso do corpo ao caminhar ainda é bem doloroso.' },
        { speaker: 'Doctor', gender: 'female', text: 'Let me examine the joint. There is tenderness along the outer ligament, but your mobility suggests no bone fracture.', translation: 'Deixe-me examinar a articulação. Há sensibilidade ao longo do ligamento externo, mas sua mobilidade sugere que não há fratura óssea.' },
        { speaker: 'Doctor', gender: 'female', text: 'I will prescribe an anti-inflammatory gel and refer you for light physical therapy. Avoid running for two weeks.', translation: 'Vou prescrever um gel anti-inflamatório e encaminhá-lo para fisioterapia leve. Evite correr por duas semanas.' }
      ],
      speechRate: 0.94,
      estimatedDurationSeconds: 31,
      transcript: 'Doctor: What brings you in today, Mr. Santos?\nMr. Santos: Four days ago I twisted my right ankle playing basketball. Sharp pain immediately.\nDoctor: Has swelling improved?\nMr. Santos: Ice and elevation helped, but walking is still quite painful.\nDoctor: Tenderness along the ligament, but no bone fracture. I\'ll prescribe anti-inflammatory gel and physical therapy. Avoid running for 2 weeks.',
      transcriptTranslation: 'Médica: O que o traz aqui hoje?\nPaciente: Torci o tornozelo direito há 4 dias jogando basquete. Dor aguda.\nMédica: O inchaço melhorou?\nPaciente: Gelo e elevação ajudaram, mas pisar ainda dói.\nMédica: Sensibilidade no ligamento, mas sem fratura. Vou receitar gel anti-inflamatório e fisioterapia. Evite correr por 2 semanas.'
    },
    questions: [
      {
        id: 'l-b1-dc-1',
        type: 'multiple_choice',
        questionText: 'Como ocorreu a lesão de Mr. Santos?',
        options: [
          { id: 'A', text: 'Ele caiu de bicicleta no trânsito' },
          { id: 'B', text: 'Torceu o tornozelo direito jogando basquete ao aterrissar de mau jeito (twisted ankle playing basketball)' },
          { id: 'C', text: 'Tropeçou em casa no tapete' },
          { id: 'D', text: 'Sofreu uma pancada em um jogo de futebol' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele relata: "while playing basketball four days ago, I landed awkwardly and twisted my right ankle".'
      },
      {
        id: 'l-b1-dc-2',
        type: 'multiple_choice',
        questionText: 'Qual é a constatação da médica após examinar a articulação?',
        options: [
          { id: 'A', text: 'Há uma fratura grave que exige cirurgia imediata' },
          { id: 'B', text: 'Não há fratura óssea, mas há sensibilidade no ligamento externo (no bone fracture)' },
          { id: 'C', text: 'O tornozelo está completamente curado' },
          { id: 'D', text: 'O paciente precisa engessar a perna toda' }
        ],
        correctOptionId: 'B',
        explanation: 'A médica afirma: "There is tenderness along the outer ligament, but your mobility suggests no bone fracture".'
      },
      {
        id: 'l-b1-dc-3',
        type: 'multiple_choice',
        questionText: 'Qual restrição física a médica determina para o paciente?',
        options: [
          { id: 'A', text: 'Ficar acamado por um mês' },
          { id: 'B', text: 'Evitar correr por duas semanas (avoid running for two weeks)' },
          { id: 'C', text: 'Não dirigir por seis meses' },
          { id: 'D', text: 'Usar cadeira de rodas' }
        ],
        correctOptionId: 'B',
        explanation: 'A médica orienta: "Avoid running for two weeks" (evitar corrida por 2 semanas).'
      }
    ]
  },

  // 13. Entenda o inglês natural (B1) - Existente
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
  },

  // 14. Entenda o inglês natural (B1) - Novo
  {
    id: 'listening-b1-nat-cultural-adaptation',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'b1',
    topic: 'Cultura & Vivência Internacional',
    title: 'Vivendo no Exterior e o Choque Cultural',
    description: 'Ouça um depoimento espontâneo sobre os estágios emocionais de mudar de país e se adaptar a um novo idioma.',
    objective: 'Compreender reflexões pessoais complexas, metáforas sobre aculturação e superação do medo de errar.',
    instructions: 'Ouça o áudio e responda às perguntas sobre as fases da adaptação internacional.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Overcoming Culture Shock Abroad',
      scenario: 'Episódio de podcast sobre intercâmbio e vivência global',
      spokenText: 'When you first land in a foreign country, everything feels thrilling, almost like a colorful postcard. Locals call this the honeymoon phase. But fast forward three months, and suddenly simple daily hurdles like buying medicine or booking a dentist appointment become mentally draining. You find yourself overthinking every single preposition. The breakthrough came when I realized that local people do not expect perfection. They genuinely appreciate your effort to connect. Once you drop the fear of looking foolish and embrace your accent, you stop merely surviving and start truly belonging.',
      speechRate: 0.96,
      estimatedDurationSeconds: 33,
      transcript: 'When you first land in a foreign country, everything feels thrilling, almost like a postcard. Locals call this the honeymoon phase. But fast forward three months, and suddenly simple hurdles like buying medicine or booking a dentist become mentally draining. You overthink every preposition. The breakthrough came when I realized people don\'t expect perfection. Once you drop the fear of looking foolish, you stop surviving and start belonging.',
      transcriptTranslation: 'Quando você desembarca num país estrangeiro, tudo parece empolgante, como um cartão-postal. Chamam isso de fase de lua de mel. Mas avance três meses e, de repente, tarefas simples como comprar remédio viram um desgaste mental. A grande virada aconteceu quando percebi que as pessoas não esperam perfeição. Quando você abandona o medo de parecer bobo, você para de apenas sobreviver e passa a realmente pertencer.'
    },
    questions: [
      {
        id: 'l-b1-ca-1',
        type: 'multiple_choice',
        questionText: 'O que caracteriza a chamada "fase de lua de mel" (honeymoon phase) segundo o áudio?',
        options: [
          { id: 'A', text: 'Uma viagem de casamento em um hotel luxuoso' },
          { id: 'B', text: 'O período inicial onde tudo parece empolgante e bonito como um cartão-postal' },
          { id: 'C', text: 'A saudade intensa de parentes e amigos' },
          { id: 'D', text: 'A busca por emprego formal' }
        ],
        correctOptionId: 'B',
        explanation: 'O narrador descreve: "everything feels thrilling, almost like a colorful postcard. Locals call this the honeymoon phase".'
      },
      {
        id: 'l-b1-ca-2',
        type: 'multiple_choice',
        questionText: 'Qual foi a virada de chave mental (breakthrough) do narrador?',
        options: [
          { id: 'A', text: 'Contratar um professor particular nativo' },
          { id: 'B', text: 'Perceber que as pessoas locais não exigem perfeição e valorizam o esforço de conexão' },
          { id: 'C', text: 'Voltar a morar em sua cidade natal' },
          { id: 'D', text: 'Evitar falar com estranhos' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele reflete: "The breakthrough came when I realized that local people do not expect perfection. They genuinely appreciate your effort to connect".'
      },
      {
        id: 'l-b1-ca-3',
        type: 'multiple_choice',
        questionText: 'O que acontece quando você perde o medo de errar ("drop the fear of looking foolish")?',
        options: [
          { id: 'A', text: 'Você passa a errar mais' },
          { id: 'B', text: 'Você para de apenas sobreviver e passa a pertencer de verdade (start truly belonging)' },
          { id: 'C', text: 'Você perde o sotaque em uma semana' },
          { id: 'D', text: 'Você consegue cidadania automática' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase final ressalta: "Once you drop the fear of looking foolish... you stop merely surviving and start truly belonging".'
      }
    ]
  },

  // 15. Entenda o inglês natural (B1) - Novo
  {
    id: 'listening-b1-nat-sustainable-living',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'b1',
    topic: 'Sustentabilidade & Hábitos',
    title: 'Consumo Consciente e Pequenas Mudanças Diárias',
    description: 'Ouça uma reflexão sobre como escolhas de consumo mais simples transformam a rotina e o meio ambiente.',
    objective: 'Compreender argumentos sobre sustentabilidade prática, desperdício zero e compras conscientes.',
    instructions: 'Ouça o áudio e analise a visão do narrador sobre sustentabilidade no dia a dia.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Everyday Practical Sustainability',
      scenario: 'Monólogo sobre consumo consciente e estilo de vida',
      spokenText: 'Many people mistakenly think living sustainably means completely overhauling your entire lifestyle overnight or buying expensive eco-friendly gadgets. In reality, it is much simpler and far more grounded. It starts with small, deliberate choices: taking reusable cloth bags to the market, planning meals so fresh produce does not spoil in the vegetable drawer, and repairing clothes instead of instantly ordering cheap fast-fashion replacements. When you slow down and buy only what genuinely brings value to your life, you not only reduce plastic waste, but you also save money and live with much less clutter.',
      speechRate: 0.96,
      estimatedDurationSeconds: 32,
      transcript: 'Many people think living sustainably means overhauling your lifestyle overnight. In reality, it\'s much simpler. It starts with small deliberate choices: reusable bags, meal planning so produce doesn\'t spoil, and repairing clothes instead of ordering fast fashion. When you buy only what brings value, you reduce waste, save money, and live with less clutter.',
      transcriptTranslation: 'Muitos acham que viver de forma sustentável significa mudar a vida inteira do dia para a noite. Na verdade, é bem mais simples. Começa com pequenas escolhas intencionais: sacolas reutilizáveis, planejar refeições para não estragar vegetais e consertar roupas em vez de comprar fast-fashion. Comprando só o que agrega valor, você reduz lixo, poupa dinheiro e vive com menos acúmulo.'
    },
    questions: [
      {
        id: 'l-b1-sl-1',
        type: 'multiple_choice',
        questionText: 'Qual é o equívoco comum que as pessoas têm sobre vida sustentável?',
        options: [
          { id: 'A', text: 'Achar que é proibido usar computadores' },
          { id: 'B', text: 'Achar que exige reformular toda a vida da noite para o dia ou comprar aparelhos caros' },
          { id: 'C', text: 'Achar que é apenas para pessoas idosas' },
          { id: 'D', text: 'Achar que reciclar não funciona' }
        ],
        correctOptionId: 'B',
        explanation: 'O áudio aponta: "think living sustainably means completely overhauling your entire lifestyle overnight or buying expensive eco-friendly gadgets".'
      },
      {
        id: 'l-b1-sl-2',
        type: 'multiple_choice',
        questionText: 'Quais pequenas atitudes práticas são mencionadas como exemplos positivos?',
        options: [
          { id: 'A', text: 'Comprar comida pronta todos os dias' },
          { id: 'B', text: 'Sacolas reutilizáveis, planejar refeições e consertar roupas (reusable bags, meal planning, repairing)' },
          { id: 'C', text: 'Trocar de carro anualmente' },
          { id: 'D', text: 'Fazer compras em lojas de departamento caras' }
        ],
        correctOptionId: 'B',
        explanation: 'O locutor exemplifica: "reusable cloth bags, planning meals... and repairing clothes instead of instantly ordering cheap fast-fashion replacements".'
      },
      {
        id: 'l-b1-sl-3',
        type: 'multiple_choice',
        questionText: 'Quais são os benefícios secundários do consumo consciente além de reduzir o lixo?',
        options: [
          { id: 'A', text: 'Economizar dinheiro e viver com menos acúmulo/bagunça (save money and less clutter)' },
          { id: 'B', text: 'Ficar famoso na vizinhança' },
          { id: 'C', text: 'Trabalhar menos horas por dia' },
          { id: 'D', text: 'Pagar menos impostos prediais' }
        ],
        correctOptionId: 'A',
        explanation: 'A conclusão enfatiza: "you not only reduce plastic waste, but you also save money and live with much less clutter".'
      }
    ]
  }
];

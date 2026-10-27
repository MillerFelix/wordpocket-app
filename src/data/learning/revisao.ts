import { LearningArticle } from '../../types/learning';

export const REVISAO_ARTICLES: LearningArticle[] = [
  {
    id: 'erros-comuns-brasileiros',
    title: 'Top 7 Erros Mais Comuns de Brasileiros em Inglês',
    description: 'Descubra os vícios de tradução literal mais frequentes — como usar "have" para existir ou "lose the bus" — e aprenda a corrigi-los hoje.',
    categoryId: 'revisao',
    level: 'B1',
    readingTimeMinutes: 7,
    isEssential: true,
    keywords: ['erros comuns', 'vicios de linguagem', 'there is there are', 'miss the bus', 'have vs exist', 'idade'],
    relatedArticleIds: ['falsos-cognatos-comuns', 'confusoes-tempos-verbais', 'estruturas-confundidas'],
    sections: [
      {
        title: 'Por que cometemos esses erros?',
        content: 'A esmagadora maioria dos desvios gramaticais de brasileiros não decorre de falta de vocabulário, mas sim da transferência automática das estruturas do português para o inglês. Conhecer esses padrões resolve 80% das falhas de comunicação.'
      },
      {
        title: 'Os 7 Desvios Mais Frequentes e Suas Correções',
        content: 'Veja a lista negra e a solução nativa:',
        mistakes: [
          {
            wrong: 'Have many people here.',
            correct: 'There are many people here.',
            explanation: 'Em português dizemos "tem muita gente", mas o verbo "to have" indica POSSE de alguém. Para o sentido de "existir / haver", use SEMPRE There is (singular) ou There are (plural).'
          },
          {
            wrong: 'I have 28 years old.',
            correct: 'I am 28 years old. / I am 28.',
            explanation: 'Idade em inglês é um estado do ser com o verbo TO BE, não uma posse com "have".'
          },
          {
            wrong: 'I lost the bus this morning.',
            correct: 'I missed the bus this morning.',
            explanation: '"Lose" é perder objetos físicos por descuido (perder a carteira, as chaves). Para transportes, oportunidades e saudades de pessoas, use o verbo "MISS" (miss the bus, miss the flight, miss a deadline).'
          },
          {
            wrong: 'I am agree with you.',
            correct: 'I agree with you.',
            explanation: '"Agree" é um verbo pleno em inglês. Não use "am" junto.'
          },
          {
            wrong: 'She explained me the problem.',
            correct: 'She explained the problem to me.',
            explanation: 'O verbo "explain" exige a preposição "to" antes da pessoa receptora: explain something TO someone.'
          },
          {
            wrong: 'I need to make a question.',
            correct: 'I need to ask a question.',
            explanation: 'Perguntas são feitas com o verbo "ASK" (ask a question), nunca com "make".'
          },
          {
            wrong: 'I didn\'t saw anything.',
            correct: 'I didn\'t see anything.',
            explanation: 'Como o auxiliar "didn\'t" já indica o passado, o verbo principal deve ficar obrigatoriamente no infinitivo (see).'
          }
        ]
      }
    ],
    takeaways: [
      'Para existir/haver: use THERE IS / THERE ARE, nunca o verbo HAVE.',
      'Para transportes e compromissos perdidos: use MISS (miss the bus, miss the train).',
      'Idade sempre usa o verbo TO BE (I am 25 years old).',
      'Para tirar uma dúvida: diga "ask a question", nunca "make a question".'
    ]
  },
  {
    id: 'confusoes-tempos-verbais',
    title: 'Confusões Frequentes entre Tempos Verbais',
    description: 'Entenda a diferença real entre Simple Past vs Present Perfect, Simple Present vs Continuous, e Will vs Going to.',
    categoryId: 'revisao',
    level: 'B1',
    readingTimeMinutes: 7,
    isEssential: true,
    keywords: ['tempos verbais', 'present perfect vs simple past', 'will vs going to', 'simple present vs continuous'],
    relatedArticleIds: ['simple-present', 'simple-past', 'quando-usar-nao-usar-auxiliares'],
    sections: [
      {
        title: '1. Simple Past vs Present Perfect (O Grande Dilema)',
        content: 'Este é o tópico que mais confunde falantes de português:',
        comparisons: [
          {
            labelA: 'Simple Past (Ação Concluída com Tempo Definido)',
            exampleA: 'I lost my keys yesterday.',
            labelB: 'Present Perfect (Ação com Efeito no Presente / Tempo Indefinido)',
            exampleB: 'I have lost my keys (I can\'t open the door now!).',
            explanation: 'Se você cita QUANDO aconteceu (yesterday, in 2020, two hours ago), use Simple Past. Se a hora exata não importa e o resultado afeta o agora, use Present Perfect.'
          },
          {
            labelA: 'Experiência de Vida (Present Perfect)',
            exampleA: 'Have you ever been to Japan?',
            labelB: 'Momento Específico (Simple Past)',
            exampleB: 'Did you go to Japan last year?',
            explanation: 'Para perguntar se você já fez algo na vida, use "Have you ever...".'
          }
        ]
      },
      {
        title: '2. Simple Present vs Present Continuous',
        content: 'Rotina habitual vs o que está acontecendo agora:',
        comparisons: [
          {
            labelA: 'Simple Present (Hábito/Rotina)',
            exampleA: 'I drink water every day.',
            labelB: 'Present Continuous (Acontecendo Agora)',
            exampleB: 'I am drinking a glass of water right now.',
            explanation: 'Simple present = permanente/regular. Present continuous = temporário em progresso.'
          }
        ]
      },
      {
        title: '3. Will vs Going To (O Futuro)',
        content: 'Decisão espontânea na hora vs plano previamente traçado:',
        comparisons: [
          {
            labelA: 'Going to (Plano / Decisão prévia / Evidência visível)',
            exampleA: 'I am going to visit my sister next Saturday.',
            labelB: 'Will (Decisão imediata na hora / Promessa / Palpite)',
            exampleB: 'The phone is ringing. I\'ll answer it!',
            explanation: 'Going to já estava planejado. Will foi decidido no segundo em que você falou.'
          }
        ]
      }
    ],
    takeaways: [
      'Simple Past exige tempo definido no passado (yesterday, last week).',
      'Present Perfect conecta o passado com o presente ou fala de experiências de vida sem data exata.',
      'Going to expressa planos decididos com antecedência; Will expressa decisões no calor do momento.',
      'Simple Present é para o que você costuma fazer; Continuous é para o que você está fazendo agora.'
    ]
  },
  {
    id: 'quando-usar-nao-usar-auxiliares',
    title: 'Quando Usar e Quando NÃO Usar Auxiliares',
    description: 'Domine as exceções que pegam até alunos avançados: perguntas de sujeito (Who called you?), frases com To Be e verbos modais.',
    categoryId: 'revisao',
    level: 'B2',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['subject questions', 'perguntas de sujeito', 'who called', 'quando nao usar do', 'regras avancadas'],
    relatedArticleIds: ['como-formular-perguntas', 'como-usar-auxiliares'],
    sections: [
      {
        title: 'A Regra Geral que Já Conhecemos',
        content: 'A regra geral manda usar DO, DOES ou DID em perguntas do Simple Present e Simple Past. Porém, existem DUAS situações fundamentais em que o uso de auxiliares é estritamente PROIBIDO.'
      },
      {
        title: 'Exceção 1: Perguntas de Sujeito (Subject Questions)',
        content: 'Quando a palavra interrogativa (WHO ou WHAT) é ela própria o SUJEITO da ação (isto é, você quer saber QUEM FEZ a ação), você NÃO USA o auxiliar "did" ou "do". A frase segue a ordem afirmativa direta:',
        comparisons: [
          {
            labelA: 'Pergunta de Objeto (Usa auxiliar DID)',
            exampleA: 'Who did you call yesterday?',
            labelB: 'Pergunta de Sujeito (NÃO usa auxiliar)',
            exampleB: 'Who called you yesterday?',
            explanation: 'Na primeira, "you" é o sujeito que ligou (usa did). Na segunda, você quer descobrir QUEM ligou (Who é o sujeito, sem did).'
          },
          {
            labelA: 'Pergunta de Objeto',
            exampleA: 'What did you see?',
            labelB: 'Pergunta de Sujeito',
            exampleB: 'What happened here?',
            explanation: 'Diga sempre "What happened?", nunca "What did happen?".'
          }
        ]
      },
      {
        title: 'Exceção 2: Verbos Modais e Verbo To Be',
        content: 'Verbos modais (Can, Could, Should, Must, May, Might, Would) e o verbo To Be (Am, Is, Are, Was, Were) são autossuficientes e jamais aceitam do/does/did:',
        mistakes: [
          {
            wrong: 'Do you can swim?',
            correct: 'Can you swim?',
            explanation: 'Modais não aceitam auxiliares. Inverta o próprio "can" para a frente do sujeito.'
          },
          {
            wrong: 'Did you was at school?',
            correct: 'Were you at school?',
            explanation: 'O verbo to be usa "were" no passado, sem "did".'
          }
        ]
      }
    ],
    takeaways: [
      'Em perguntas de sujeito ("Who called you?"), o auxiliar não é usado e o verbo vai direto para o passado.',
      'Em perguntas de objeto ("Who did you call?"), o auxiliar did é obrigatório.',
      'O verbo To Be e os verbos modais (can, should, must) nunca aceitam do, does ou did.',
      'Diga "What happened?" (o que aconteceu?), e nunca "What did happen?".'
    ]
  },
  {
    id: 'revisao-fundamentos-essenciais',
    title: 'Guia Rápido dos Fundamentos Essenciais do Inglês',
    description: 'Um resumo de consulta rápida com as 7 regras fundamentais que sustentam toda a língua inglesa para revisar em 5 minutos.',
    categoryId: 'revisao',
    level: 'A1',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['revisao geral', 'fundamentos essenciais', 'cheat sheet', 'guia de consulta', 'principais regras'],
    relatedArticleIds: ['pronomes-pessoais', 'verbo-to-be-presente', 'ordem-palavras-ingles'],
    sections: [
      {
        title: 'Os 7 Mandamentos do Inglês Básico',
        content: 'Mantenha este guia sempre em mãos para consultas imediatas:',
        rules: [
          { title: '1. O Sujeito Nunca é Oculto', explanation: 'Toda oração exige um sujeito explícito. Use "it" para clima e frases impessoais ("It is cold").' },
          { title: '2. Adjetivo Antes do Nome', explanation: 'A característica sempre antecede o substantivo e nunca tem plural ("a big house", "big houses").' },
          { title: '3. He/She/It Ganha -S na Afirmativa', explanation: 'No presente simples afirmativo: "He works", "She speaks".' },
          { title: '4. Auxiliar Rouba a Conjugação', explanation: 'Se houver does, doesn\'t, did ou didn\'t, o verbo principal volta à sua forma base ("Does he work?").' },
          { title: '5. To Be é Autossuficiente', explanation: 'Am, is e are não aceitam do/does nem did para negar ou perguntar ("Are you okay?").' },
          { title: '6. Não Há Dupla Negativa', explanation: 'Use apenas uma palavra negativa por oração ("I didn\'t see anything", nunca "didn\'t see nothing").' },
          { title: '7. Haver/Existir é There Is / There Are', explanation: 'Nunca use o verbo HAVE para dizer que algo existe em um lugar ("There is a problem").' }
        ]
      }
    ],
    takeaways: [
      'Sujeito sempre explícito.',
      'Adjetivos antes dos substantivos e sem plural.',
      'He/She/It com -s na afirmativa do presente simples.',
      'There is / There are para o verbo haver/existir.',
      'Apenas uma negativa por frase.'
    ]
  },
  {
    id: 'estruturas-confundidas',
    title: 'Estruturas Frequentemente Confundidas: Used to, Stop e Remember',
    description: 'Aprenda a diferença sutil entre "used to do" e "be used to doing", e como o sentido de verbos como "stop" e "remember" muda com gerúndio ou infinitivo.',
    categoryId: 'revisao',
    level: 'B2',
    readingTimeMinutes: 6,
    isEssential: false,
    keywords: ['used to', 'be used to', 'stop to do vs stop doing', 'remember doing', 'estruturas confusas'],
    relatedArticleIds: ['confusoes-tempos-verbais', 'erros-comuns-brasileiros'],
    sections: [
      {
        title: '1. "Used to do" vs "Be used to doing"',
        content: 'Duas estruturas que parecem iguais, mas têm sentidos totalmente diferentes:',
        comparisons: [
          {
            labelA: 'Used to + Verbo Base (Costumava no passado)',
            exampleA: 'I used to play tennis when I was a teenager.',
            labelB: 'Be used to + ING (Estar acostumado a algo)',
            exampleB: 'I am used to waking up early every day.',
            explanation: '"Used to play" = hábito do passado que não existe mais. "Am used to waking" = hábito atual ao qual você já se adaptou.'
          }
        ]
      },
      {
        title: '2. Stop to do vs Stop doing',
        content: 'O significado do verbo STOP inverte dependendo da forma que o segue:',
        comparisons: [
          {
            labelA: 'Stop TO DO (Parar para fazer outra coisa)',
            exampleA: 'He was driving and stopped to buy coffee.',
            labelB: 'Stop DOING (Parar de fazer uma atividade / cessar)',
            exampleB: 'He stopped drinking coffee because of his health.',
            explanation: '"Stopped to buy" = fez uma pausa para comprar. "Stopped drinking" = abandonou o consumo de café.'
          }
        ]
      },
      {
        title: '3. Remember to do vs Remember doing',
        content: 'A ordem cronológica entre a lembrança e a ação:',
        comparisons: [
          {
            labelA: 'Remember TO DO (Lembrar de fazer uma tarefa futura)',
            exampleA: 'Please remember to lock the door.',
            labelB: 'Remember DOING (Lembrar-se de uma memória passada)',
            exampleB: 'I clearly remember locking the door this morning.',
            explanation: 'Remember to = obrigação a cumprir. Remember doing = filme na memória do passado.'
          }
        ]
      }
    ],
    takeaways: [
      'Used to + verbo puro = hábito passado encerrado ("I used to live in Rio").',
      'Be used to + verbo-ing = estar acostumado/adaptado a algo ("I\'m used to working late").',
      'Stop to do = parar para fazer algo novo; Stop doing = encerrar/abandonar um hábito.',
      'Remember to = lembrar-se de cumprir uma tarefa; Remember doing = lembrar-se de uma lembrança já vivida.'
    ]
  }
];

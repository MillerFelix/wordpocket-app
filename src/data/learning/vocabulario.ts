import { LearningArticle } from '../../types/learning';

export const VOCABULARIO_ARTICLES: LearningArticle[] = [
  {
    id: 'expressoes-frequentes-cotidiano',
    title: 'Expressões Mais Frequentes do Cotidiano em Inglês',
    description: 'Frases curtas, naturais e práticas que nativos usam o tempo todo em bate-papos, trabalho e situações casuais.',
    categoryId: 'vocabulario',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['expressoes cotidianas', 'daily expressions', 'by the way', 'up to you', 'make sense', 'never mind'],
    relatedArticleIds: ['conversas-cotidianas', 'collocations-combinacoes-naturais'],
    sections: [
      {
        title: 'Por que aprender blocos de palavras (Chunks)?',
        content: 'Falar inglês com naturalidade não significa traduzir palavras soltas da sua cabeça. Nativos comunicam-se por meio de expressões prontas que transmitem ideias completas de forma polida e instantânea.'
      },
      {
        title: 'As 10 Expressões Mais Ouvidas no Dia a Dia',
        content: 'Domine estas expressões de uso diário:',
        rules: [
          { title: 'It\'s up to you', explanation: 'Você decide / Tanto faz para mim / Fica a seu critério.' },
          { title: 'Does that make sense?', explanation: 'Isso faz sentido? / Deu para entender?' },
          { title: 'By the way', explanation: 'A propósito / Por falar nisso / Mudando de assunto rapidinho.' },
          { title: 'Never mind', explanation: 'Deixa para lá / Não se preocupe / Esquece o que eu disse.' },
          { title: 'Take your time', explanation: 'Sem pressa / Leve o tempo que precisar.' },
          { title: 'Fingers crossed!', explanation: 'Dedos cruzados! / Torcendo por você!' },
          { title: 'I have no clue', explanation: 'Não faço a menor ideia.' },
          { title: 'So far, so good', explanation: 'Até agora, tudo bem.' },
          { title: 'Take it easy', explanation: 'Vá com calma / Fique tranquilo / Até logo (despedida informal).' },
          { title: 'Call it a day', explanation: 'Encerrar o expediente por hoje / Parar o trabalho.' }
        ],
        examples: [
          { en: 'Where should we have lunch? — It\'s totally up to you!', pt: 'Onde devemos almoçar? — Você decide!' },
          { en: 'By the way, did you receive my email this morning?', pt: 'A propósito, você recebeu meu e-mail esta manhã?' },
          { en: 'We\'ve finished the primary phase. Let\'s call it a day!', pt: 'Terminamos a fase principal. Vamos encerrar por hoje!' }
        ]
      }
    ],
    takeaways: [
      'Aprenda expressões em blocos inteiros, sem tentar traduzir cada palavra isoladamente.',
      '"It\'s up to you" e "Take your time" são indispensáveis para conversas casuais e profissionais.',
      '"Never mind" significa amigavelmente "deixa para lá", sem conotação agressiva.'
    ]
  },
  {
    id: 'falsos-cognatos-comuns',
    title: 'Falsos Cognatos Perigosos para Brasileiros (False Friends)',
    description: 'Evite constrangimentos e mal-entendidos conhecendo as palavras em inglês que parecem com o português mas têm sentido bem diferente.',
    categoryId: 'vocabulario',
    level: 'B1',
    readingTimeMinutes: 7,
    isEssential: true,
    keywords: ['falsos cognatos', 'false friends', 'actually', 'pretend', 'push pull', 'attend', 'realize'],
    relatedArticleIds: ['erros-comuns-brasileiros', 'palavras-parecidas-diferencas'],
    sections: [
      {
        title: 'O que são Falsos Amigos?',
        content: 'Falsos amigos (false friends ou false cognates) são termos com grafia ou pronúncia parecida entre inglês e português, mas cujos significados reais são totalmente divergentes. Confundi-los pode gerar situações embaraçosas ou mal-entendidos sérios no trabalho.'
      },
      {
        title: 'Os 8 Falsos Cognatos Mais Críticos',
        content: 'Veja a verdade sobre cada um deles:',
        comparisons: [
          {
            labelA: 'Actually (Na verdade / Realmente)',
            exampleA: 'Actually, I don\'t live here.',
            labelB: 'Currently (Atualmente)',
            exampleB: 'I am currently unemployed.',
            explanation: '"Actually" NÃO é atualmente! Para atualmente, use "currently" ou "nowadays".'
          },
          {
            labelA: 'Pretend (Fingir)',
            exampleA: 'He pretended to be asleep.',
            labelB: 'Intend (Pretender / Ter intenção)',
            exampleB: 'I intend to travel in July.',
            explanation: '"Pretend" é fingir teatralmente. "Pretender" é "intend".'
          },
          {
            labelA: 'Attend (Assistir / Frequentar / Comparecer)',
            exampleA: 'I attended the conference.',
            labelB: 'Assist (Ajudar / Dar suporte)',
            exampleB: 'Can I assist you with that?',
            explanation: '"Attend a meeting" significa comparecer à reunião. "Assist" significa prestar ajuda.'
          },
          {
            labelA: 'Realize (Perceber / Dar-se conta)',
            exampleA: 'I suddenly realized my mistake.',
            labelB: 'Make / Accomplish (Realizar um sonho)',
            exampleB: 'She accomplished all her goals.',
            explanation: '"Realize" é notar na mente. Para realizar sonhos, use "fulfill" ou "accomplish".'
          },
          {
            labelA: 'Push (Empurrar)',
            exampleA: 'Push the door to enter.',
            labelB: 'Pull (Puxar)',
            exampleB: 'Pull the handle to open.',
            explanation: 'Lembre-se sempre: PUSH parece puxar, mas é EMPURRAR!'
          },
          {
            labelA: 'Sensible (Sensato / Prudente)',
            exampleA: 'That is a sensible decision.',
            labelB: 'Sensitive (Sensível / Emotivo)',
            exampleB: 'She has very sensitive skin.',
            explanation: '"Sensible" é ter bom senso; "Sensitive" é ser sensível.'
          }
        ]
      }
    ],
    takeaways: [
      'Actually = na verdade (atualmente = currently).',
      'Pretend = fingir (pretender = intend).',
      'Attend = comparecer / frequentar (ajudar = assist).',
      'Push = empurrar! Pull = puxar.',
      'Sensible = sensato / ajuizado. Sensitive = emotivo / sensível.'
    ]
  },
  {
    id: 'palavras-parecidas-diferencas',
    title: 'Diferenças Cruciais: Say, Tell, Speak e Talk / Look, See e Watch',
    description: 'Descubra a regra exata para escolher os verbos de comunicação e percepção que geram dúvidas em 9 de cada 10 estudantes.',
    categoryId: 'vocabulario',
    level: 'B1',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['say vs tell', 'speak vs talk', 'look see watch', 'hear listen', 'borrow lend', 'diferencas'],
    relatedArticleIds: ['falsos-cognatos-comuns', 'collocations-combinacoes-naturais'],
    sections: [
      {
        title: 'Verbos de Comunicação: Say vs Tell',
        content: 'A regra que resolve a dúvida definitivamente:',
        rules: [
          { title: 'SAY (Focar nas palavras ditas)', explanation: 'Não exige quem ouviu logo após. Se quiser citar a pessoa, use "to": "Say something to me".', formula: 'Say + words | Say that...' },
          { title: 'TELL (Focar na pessoa que recebe a informação)', explanation: 'Exige obrigatoriamente a pessoa a quem se fala logo após, sem preposição.', formula: 'Tell + PERSON + something' }
        ],
        examples: [
          { en: 'She said that she was happy. (Correto)', pt: 'Ela disse que estava feliz.' },
          { en: 'She told me that she was happy. (Correto)', pt: 'Ela me disse que estava feliz.' },
          { en: 'She said me that she was happy. (Incorreto!)', pt: 'Nunca use "said me"; diga "told me".' }
        ]
      },
      {
        title: 'Speak vs Talk',
        content: 'Duas formas de falar com nuances de formalidade:',
        comparisons: [
          {
            labelA: 'SPEAK (Mais formal, palestras, idiomas)',
            exampleA: 'Do you speak English? / The director spoke at the conference.',
            labelB: 'TALK (Conversação informal e interativa)',
            exampleB: 'Can we talk for a minute? / We talked about music.',
            explanation: 'Idiomas sempre usam speak ("speak French"). Bate-papo amigável usa talk.'
          }
        ]
      },
      {
        title: 'Percepção Visual: Look, See e Watch',
        content: 'Cada verbo descreve uma intenção diferente do olhar:',
        rules: [
          { title: 'SEE (Involuntário)', explanation: 'Seus olhos estão abertos e captam a imagem automaticamente. Ex: I saw a bird in the garden.' },
          { title: 'LOOK AT (Direcionar o olhar com foco)', explanation: 'Você foca deliberadamente em um objeto estático. Ex: Look at this photo!' },
          { title: 'WATCH (Acompanhar algo em movimento por um tempo)', explanation: 'Você observa algo dinâmico. Ex: Watch a movie, watch a match, watch TV.' }
        ]
      },
      {
        title: 'Borrow vs Lend (Pegar Emprestado vs Emprestar)',
        content: 'Não confunda a direção do empréstimo:',
        comparisons: [
          {
            labelA: 'BORROW (Pegar emprestado - entra para você)',
            exampleA: 'Can I borrow your pen?',
            labelB: 'LEND (Emprestar - sai de você para o outro)',
            exampleB: 'Can you lend me your pen?',
            explanation: 'Borrow = take in. Lend = give out.'
          }
        ]
      }
    ],
    takeaways: [
      'Tell exige a pessoa receptora logo em seguida (Tell me, tell him). Say não aceita a pessoa sem "to".',
      'Idiomas usam "speak" (I speak English). Bate-papo casual usa "talk" (Let\'s talk).',
      'See = ver involuntariamente. Look at = olhar fixamente. Watch = assistir coisas em movimento (filmes, jogos).',
      'Borrow = pegar emprestado. Lend = conceder emprestado.'
    ]
  },
  {
    id: 'collocations-combinacoes-naturais',
    title: 'Collocations: As Combinações Naturais de Palavras em Inglês',
    description: 'Entenda por que dizemos "make a mistake" e não "do a mistake", e como soar nativo combinando palavras certas.',
    categoryId: 'vocabulario',
    level: 'B1',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['collocations', 'combinacoes de palavras', 'do vs make', 'pay attention', 'heavy rain'],
    relatedArticleIds: ['expressoes-frequentes-cotidiano', 'falsos-cognatos-comuns'],
    sections: [
      {
        title: 'O que são Collocations?',
        content: 'Collocations são parcerias naturais entre palavras que nativos sempre usam juntos. Embora outras palavras possam ter significado parecido no dicionário, apenas uma combinação específica soa correta e fluida aos ouvidos de quem fala inglês.'
      },
      {
        title: 'A Batalha Clássica: DO vs MAKE',
        content: 'Ambos se traduzem como "fazer", mas têm áreas de atuação distintas:',
        rules: [
          {
            title: 'DO (Tarefas, obrigações, atividades genéricas)',
            explanation: 'Do homework, do the dishes, do business, do a favor, do your best, do exercise.',
            formula: 'Do + Task / Action'
          },
          {
            title: 'MAKE (Criação, produção física, resultados, decisões)',
            explanation: 'Make coffee, make a decision, make a mistake, make money, make friends, make an appointment, make noise.',
            formula: 'Make + Creation / Outcome'
          }
        ],
        examples: [
          { en: 'I made a serious mistake on the test. (Correto)', pt: 'Eu cometi um erro grave na prova (nunca "did a mistake").' },
          { en: 'Could you do me a quick favor? (Correto)', pt: 'Você poderia me fazer um favor rápido?' }
        ]
      },
      {
        title: 'Outras Collocations Essenciais do Cotidiano',
        content: 'Memorize estas combinações consagradas:',
        rules: [
          { title: 'Verbo + Substantivo', explanation: 'Take a shower (tomar banho), Catch a cold (pegar resfriado), Pay attention (prestar atenção), Have a seat (sentar-se).' },
          { title: 'Adjetivo + Substantivo', explanation: 'Heavy rain (chuva forte, não "strong rain"), Fast food (comida rápida, não "quick food"), Deep sleep (sono profundo).' }
        ]
      }
    ],
    takeaways: [
      'Collocations são as combinações de palavras consagradas pela comunidade falante de inglês.',
      'DO é para tarefas e deveres (do homework, do the laundry, do a favor).',
      'MAKE é para criação, decisões e erros (make coffee, make a decision, make a mistake).',
      'Para chuva forte, diga "heavy rain" (não "strong rain"); para trânsito pesado, diga "heavy traffic".'
    ]
  },
  {
    id: 'expressoes-idiomaticas-nao-literais',
    title: 'Expressões Idiomáticas que Nunca Devem Ser Traduzidas ao Pé da Letra',
    description: 'Conheça idioms consagrados do inglês como piece of cake, under the weather e break a leg com seus significados culturais.',
    categoryId: 'vocabulario',
    level: 'B2',
    readingTimeMinutes: 5,
    isEssential: false,
    keywords: ['idioms', 'expressoes idiomaticas', 'piece of cake', 'break a leg', 'under the weather', 'figuras de linguagem'],
    relatedArticleIds: ['expressoes-frequentes-cotidiano', 'falsos-cognatos-comuns'],
    sections: [
      {
        title: 'Por que a Tradução Literal Falha?',
        content: 'Expressões idiomáticas são frases cujo significado global não pode ser deduzido somando o significado literal das palavras individuais. Tentar traduzi-las palavra por palavra resulta em confusão total ou frases sem nexo.'
      },
      {
        title: 'Os Idioms Mais Populares do Idioma',
        content: 'Veja os significados reais de cada expressão:',
        rules: [
          { title: 'A piece of cake', explanation: 'Literal: "um pedaço de bolo". Significado real: algo muito fácil, mamão com açúcar.' },
          { title: 'Under the weather', explanation: 'Literal: "sob o tempo". Significado real: indisposto, levemente doente ou gripado.' },
          { title: 'Break a leg!', explanation: 'Literal: "quebre uma perna!". Significado real: boa sorte! (tradicionalmente usado no teatro e apresentações).' },
          { title: 'Cost an arm and a leg', explanation: 'Literal: "custar um braço e uma perna". Significado real: custar os olhos da cara, ser caríssimo.' },
          { title: 'Bite the bullet', explanation: 'Literal: "morder a bala". Significado real: encarar uma situação difícil com coragem, engolir o choro.' },
          { title: 'Once in a blue moon', explanation: 'Literal: "uma vez na lua azul". Significado real: algo muito raro de acontecer, uma vez na vida e outra na morte.' }
        ],
        examples: [
          { en: 'Don\'t worry about the driving test, it\'s a piece of cake!', pt: 'Não se preocupe com o teste de direção, é moleza!' },
          { en: 'I won\'t go to the gym today because I\'m feeling under the weather.', pt: 'Não irei à academia hoje porque estou me sentindo indisposto.' },
          { en: 'You\'re going to give a great speech. Break a leg!', pt: 'Você fará um excelente discurso. Boa sorte!' }
        ]
      }
    ],
    takeaways: [
      'Idioms possuem sentido figurado e cultural, nunca literal.',
      'Use "under the weather" quando estiver choco ou levemente resfriado.',
      '"Break a leg" é uma forma afetuosa e consagrada de desejar sucesso antes de um desafio.',
      '"A piece of cake" descreve tarefas descomplicadas e fáceis.'
    ]
  }
];

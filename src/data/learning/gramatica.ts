import { LearningArticle } from '../../types/learning';

export const GRAMATICA_ARTICLES: LearningArticle[] = [
  {
    id: 'simple-present',
    title: 'Simple Present: Rotinas, Fatos e a Regra do -S',
    description: 'Aprenda a falar sobre hábitos, rotinas e verdades universais em inglês, dominando a terminação do he, she e it.',
    categoryId: 'gramatica',
    level: 'A1',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['simple present', 'presente simples', 'rotina', 'habito', 'he she it', 'regra do s'],
    relatedArticleIds: ['uso-do-does', 'rotina-diaria', 'confusoes-tempos-verbais'],
    sections: [
      {
        title: 'Quando Usar o Simple Present?',
        content: 'O Simple Present NÃO é usado para o que está acontecendo exatamente agora (para isso usamos o Present Continuous: "I am eating"). O Simple Present serve para: rotinas ("I wake up at 7"), hábitos ("He drinks tea"), verdades gerais ("Water boils at 100°C") e gostos/opiniões ("They love jazz").',
        examples: [
          { en: 'I drink coffee every morning.', pt: 'Eu bebo café todas as manhãs (rotina).' },
          { en: 'The sun rises in the east.', pt: 'O sol nasce no leste (fato natural).' },
          { en: 'They work at a bank.', pt: 'Eles trabalham em um banco (estado estável).' }
        ]
      },
      {
        title: 'A Regra de Ouro: He, She e It Ganham -S',
        content: 'Em inglês, para I, you, we e they, o verbo fica idêntico ao infinitivo sem to. Mas para a 3ª pessoa do singular (He, She, It), o verbo SEMPRE recebe uma terminação:',
        rules: [
          { title: 'Regra Geral', explanation: 'Acrescenta-se apenas -s ao final do verbo.', formula: 'work -> works | live -> lives | play -> plays' },
          { title: 'Verbos terminados em -ch, -sh, -ss, -x, -z, -o', explanation: 'Acrescenta-se -es.', formula: 'watch -> watches | go -> goes | wash -> washes' },
          { title: 'Consoante + Y', explanation: 'Substitui o -y por -ies.', formula: 'study -> studies | fly -> flies (mas vowel+y: play -> plays)' }
        ],
        examples: [
          { en: 'He speaks fluent English and French.', pt: 'Ele fala inglês e francês fluentes.' },
          { en: 'She watches the news every evening.', pt: 'Ela assiste às notícias todas as noites.' },
          { en: 'Lucas studies computer science at university.', pt: 'Lucas estuda ciência da computação na universidade.' }
        ]
      },
      {
        title: 'Erros Muito Frequentes',
        content: 'Observe os desvios mais comuns e como corrigi-los:',
        mistakes: [
          {
            wrong: 'He live in London.',
            correct: 'He lives in London.',
            explanation: 'Sempre que o sujeito for he, she ou it (ou o nome de uma pessoa/coisa no singular), coloque o "-s" no verbo.'
          },
          {
            wrong: 'She does likes pizza.',
            correct: 'She likes pizza.',
            explanation: 'Na afirmativa simples não se usa o auxiliar "does", apenas o verbo principal com -s.'
          }
        ]
      }
    ],
    takeaways: [
      'Simple Present expressa rotinas diárias, fatos universais e preferências duradouras.',
      'Para I, you, we e they: o verbo não sofre nenhuma alteração.',
      'Para he, she e it: adicione -s, -es ou -ies na forma afirmativa.',
      'Ações que acontecem agora usam o formato contínuo (to be + -ing), não o Simple Present.'
    ]
  },
  {
    id: 'uso-do-does',
    title: 'O Uso de Do e Does: Auxiliares do Presente sem Segredos',
    description: 'Entenda para que servem Do e Does, por que eles não têm tradução direta como auxiliares e como usá-los com perfeição.',
    categoryId: 'gramatica',
    level: 'A1',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['do', 'does', 'don\'t', 'doesn\'t', 'auxiliar', 'perguntas', 'negativas'],
    relatedArticleIds: ['simple-present', 'como-formar-negativas', 'como-formular-perguntas'],
    sections: [
      {
        title: 'O que é um Verbo Auxiliar?',
        content: 'Em português, mudamos a terminação do próprio verbo para perguntar ou negar ("Você trabalha?" / "Ele não trabalha"). Em inglês, os verbos comuns não conseguem fazer isso sozinhos. Eles contratam um "ajudante": o auxiliar DO (ou DOES para he/she/it). Quando atua como auxiliar, DO não tem tradução: sua função é apenas sinalizar o tempo verbal e a pessoa.',
        rules: [
          { title: 'Quando usar DO', explanation: 'Com os pronomes I, You, We e They.', formula: 'Do I/you/we/they...?' },
          { title: 'Quando usar DOES', explanation: 'Com os pronomes He, She e It.', formula: 'Does he/she/it...?' }
        ]
      },
      {
        title: 'A Regra do "S Roubado"',
        content: 'Esta é uma das regras mais libertadoras do inglês: quando o auxiliar DOES (ou DOESN\'T) entra na frase, ele já carrega a marca da 3ª pessoa ("-es"). Por isso, o verbo principal volta imediatamente à sua forma base (sem -s)!',
        comparisons: [
          {
            labelA: 'Afirmativa (Sem auxiliar -> Verbo leva -S)',
            exampleA: 'She works downtown.',
            labelB: 'Negativa (Com auxiliar -> Verbo volta ao normal)',
            exampleB: 'She doesn\'t work downtown.',
            explanation: 'O "s" foi para o "doesn\'t", então o verbo fica puro: "work".'
          },
          {
            labelA: 'Afirmativa',
            exampleA: 'He likes soccer.',
            labelB: 'Pergunta (Com auxiliar)',
            exampleB: 'Does he like soccer?',
            explanation: 'Diga "Does he like", nunca "Does he likes".'
          }
        ]
      },
      {
        title: 'Do como Verbo Principal vs Do como Auxiliar',
        content: 'A palavra "do" pode desempenhar dois papéis na mesma frase: o de auxiliar gramatical e o de verbo de ação ("fazer"). Isso gera frases perfeitamente naturais como:',
        examples: [
          { en: 'What do you do?', pt: 'O que você faz? / Qual é a sua profissão? (O 1º do é auxiliar; o 2º é o verbo fazer).' },
          { en: 'Does she do her homework every day?', pt: 'Ela faz o dever de casa todos os dias? (Does é auxiliar; do é o verbo principal).' }
        ]
      }
    ],
    takeaways: [
      'Do é usado com I, You, We e They. Does é usado com He, She e It.',
      'Na presença de Does ou Doesn\'t, o verbo principal nunca recebe -s.',
      'Em perguntas, Do/Does vem antes do sujeito: "Do you know...?" / "Does he know...?".',
      'Em negativas, usamos Don\'t (do not) e Doesn\'t (does not).'
    ]
  },
  {
    id: 'simple-past',
    title: 'Simple Past: Verbos Regulares, Irregulares e Fatos Concluídos',
    description: 'Domine a formação do passado simples em inglês para contar histórias, relatar acontecimentos e falar sobre sua trajetória.',
    categoryId: 'gramatica',
    level: 'A2',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['simple past', 'passado simples', 'verbos regulares', 'verbos irregulares', '-ed'],
    relatedArticleIds: ['uso-did', 'confusoes-tempos-verbais'],
    sections: [
      {
        title: 'Quando Usar o Simple Past?',
        content: 'Usamos o Simple Past para ações que começaram e foram totalmente concluídas no passado em um tempo definido (ontem, semana passada, em 2020, quando eu era criança). Ele geralmente vem acompanhado de marcadores temporais como yesterday, last night, two years ago, in 1999.',
        examples: [
          { en: 'I visited my grandparents yesterday.', pt: 'Eu visitei meus avós ontem.' },
          { en: 'We moved to Curitiba in 2021.', pt: 'Nós nos mudamos para Curitiba em 2021.' },
          { en: 'She graduated two months ago.', pt: 'Ela se formou dois meses atrás.' }
        ]
      },
      {
        title: 'Verbos Regulares: A Terminação -ED',
        content: 'Para os verbos regulares, basta acrescentar "-ed" ao verbo base para todas as pessoas gramaticais (não há variação para he/she/it no passado!):',
        rules: [
          { title: 'Regra Geral', explanation: 'Acrescenta -ed.', formula: 'play -> played | watch -> watched | start -> started' },
          { title: 'Verbo termina em -e', explanation: 'Acrescenta apenas -d.', formula: 'live -> lived | decide -> decided' },
          { title: 'Consoante + Vogal + Consoante (CVC tônico)', explanation: 'Dobra a última consoante antes do -ed.', formula: 'stop -> stopped | plan -> planned' },
          { title: 'Consoante + Y', explanation: 'Troca -y por -ied.', formula: 'study -> studied | try -> tried' }
        ]
      },
      {
        title: 'Verbos Irregulares: Formas Próprias',
        content: 'Os verbos irregulares não seguem a terminação -ed e possuem formatos próprios que devem ser consultados e memorizados com a prática (use a aba de Verbos Irregulares do Word Pocket para treinar as 3 formas!):',
        examples: [
          { en: 'Go -> Went: I went to the supermarket.', pt: 'Eu fui ao supermercado.' },
          { en: 'Have -> Had: They had a wonderful dinner.', pt: 'Eles tiveram um jantar maravilhoso.' },
          { en: 'See -> Saw: She saw a great movie last night.', pt: 'Ela viu um ótimo filme ontem à noite.' },
          { en: 'Buy -> Bought: We bought new tickets.', pt: 'Nós compramos novos ingressos.' }
        ]
      }
    ],
    takeaways: [
      'Simple Past expressa ações concluídas no passado com tempo explícito ou implícito.',
      'No passado, a conjugação é a mesma para todas as pessoas: he, she, they, I usam a mesma forma.',
      'Verbos regulares ganham -ed; verbos irregulares têm formas próprias (go -> went, have -> had).',
      'Marcadores temporais comuns: yesterday, last week, ago, in + ano.'
    ]
  },
  {
    id: 'uso-did',
    title: 'O Uso de Did: O Auxiliar Universal do Passado',
    description: 'Descubra como o auxiliar Did simplifica perguntas e negativas no passado e por que o verbo principal nunca fica no passado com ele.',
    categoryId: 'gramatica',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['did', 'didn\'t', 'auxiliar do passado', 'perguntas no passado', 'passado simples'],
    relatedArticleIds: ['simple-past', 'uso-do-does', 'como-formar-negativas'],
    sections: [
      {
        title: 'Did: O Auxiliar Único para Todas as Pessoas',
        content: 'Diferente do presente (que divide entre do e does), o passado simplifica tudo: DID é o único auxiliar do Simple Past, usado para I, you, he, she, it, we e they sem qualquer exceção.',
        rules: [
          { title: 'Fórmula da Negativa', explanation: 'Sujeito + didn\'t (did not) + verbo principal na forma base.', formula: 'Subject + didn\'t + Base Verb' },
          { title: 'Fórmula da Pergunta', explanation: 'Did + sujeito + verbo principal na forma base?', formula: 'Did + Subject + Base Verb?' }
        ]
      },
      {
        title: 'A Regra de Ouro: Não Duplique o Passado!',
        content: 'O erro mais comum ao falar inglês no passado é conjugar o verbo principal quando o "did" ou "didn\'t" já está presente na frase. Como o "did" já carrega o passado, o verbo principal deve ficar obrigatoriamente no infinitivo puro:',
        comparisons: [
          {
            labelA: 'Afirmativa (Sem auxiliar -> Verbo no passado)',
            exampleA: 'She watched the film. / He went home.',
            labelB: 'Negativa (Com didn\'t -> Verbo no presente puro)',
            exampleB: 'She didn\'t watch the film. / He didn\'t go home.',
            explanation: 'Diga "didn\'t watch" e "didn\'t go", nunca "didn\'t watched" ou "didn\'t went".'
          },
          {
            labelA: 'Afirmativa',
            exampleA: 'You bought the book.',
            labelB: 'Pergunta (Com did -> Verbo no presente puro)',
            exampleB: 'Did you buy the book?',
            explanation: 'Diga "Did you buy", nunca "Did you bought".'
          }
        ]
      },
      {
        title: 'Exceção Importante: O Verbo To Be no Passado',
        content: 'Assim como no presente, o verbo to be NÃO usa o auxiliar did. No passado ele utiliza suas próprias formas: WAS (I, he, she, it) e WERE (you, we, they):',
        examples: [
          { en: 'Were you at the office yesterday? (Correto)', pt: 'Você estava no escritório ontem?' },
          { en: 'Did you be at the office yesterday? (Incorreto!)', pt: 'Nunca use Did com o verbo To Be.' }
        ]
      }
    ],
    takeaways: [
      'DID é o auxiliar universal do passado para todas as pessoas gramaticais.',
      'Quando DID ou DIDN\'T entra na frase, o verbo principal volta à sua forma base.',
      'Nunca diga "I didn\'t saw" ou "Did you went". O correto é "I didn\'t see" e "Did you go".',
      'O verbo To Be usa Was e Were, nunca aceitando o auxiliar Did.'
    ]
  },
  {
    id: 'artigos-a-an-the',
    title: 'Artigos em Inglês: A, An e The sem Dúvidas',
    description: 'Entenda quando usar o artigo indefinido (a/an) pelo som vocálico e quando usar ou omitir o artigo definido (the).',
    categoryId: 'gramatica',
    level: 'A1',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['artigos', 'a', 'an', 'the', 'indefinite article', 'definite article', 'pronuncia'],
    relatedArticleIds: ['contaveis-incontaveis', 'erros-comuns-brasileiros'],
    sections: [
      {
        title: 'A vs An: A Regra do Som, Não da Letra',
        content: 'Muitos estudantes acreditam que usamos "an" antes de qualquer vogal escrita. Mas a regra real depende do SOM da palavra seguinte, e não da letra gráfica:',
        rules: [
          { title: 'Use A antes de som de consoante', explanation: 'A car, a dog, a house, a university (o "u" tem som de /juː/, que é semivogal consonantal).' },
          { title: 'Use AN antes de som de vogal', explanation: 'An apple, an egg, an idea, an hour (o "h" é mudo, o primeiro som ouvido é a vogal /aʊ/).' }
        ],
        examples: [
          { en: 'I have a university degree and an MBA.', pt: 'Eu tenho um diploma universitário e um MBA (MBA soa como /ɛm-biː-eɪ/).' },
          { en: 'We waited for an hour in a hotel lobby.', pt: 'Nós esperamos por uma hora (hour som de vogal) no saguão de um hotel (hotel som de consoante).' }
        ]
      },
      {
        title: 'The: O Artigo Definido',
        content: '"The" equivale a o, a, os, as. Ele é usado quando o falante e o ouvinte sabem exatamente a qual item específico estão se referindo:',
        examples: [
          { en: 'Can you pass me the salt?', pt: 'Você pode me passar o sal? (o sal específico daquela mesa).' },
          { en: 'The book I bought is fascinating.', pt: 'O livro que comprei é fascinante (aquele específico).' }
        ]
      },
      {
        title: 'Onde Brasileiros Mais Erram: Colocar "The" Onde Não Deve',
        content: 'Em português dizemos "A vida é bela" ou "Os carros são caros". Em inglês, quando falamos de coisas em geral ou conceitos abstratos, NÃO usamos "the":',
        mistakes: [
          {
            wrong: 'The life is beautiful.',
            correct: 'Life is beautiful.',
            explanation: 'Conceitos em geral não usam artigo em inglês.'
          },
          {
            wrong: 'The dogs are faithful animals.',
            correct: 'Dogs are faithful animals.',
            explanation: 'Espécies ou categorias no plural falando de forma genérica não recebem "the".'
          },
          {
            wrong: 'I like the Brazilian music.',
            correct: 'I like Brazilian music.',
            explanation: 'Gêneros musicais ou comidas em geral não usam "the".'
          }
        ]
      }
    ],
    takeaways: [
      'A e An significam "um" ou "uma" e só são usados com substantivos contáveis no singular.',
      'A escolha entre A e An é decidida pelo som inicial: an hour (som de vogal), a university (som de consoante).',
      'The refere-se a itens específicos conhecidos por ambos os interlocutores.',
      'Não use The para falar de coisas, pessoas ou conceitos em sentido geral no plural.'
    ]
  },
  {
    id: 'contaveis-incontaveis',
    title: 'Substantivos Contáveis e Incontáveis (Countable & Uncountable)',
    description: 'Saiba por que palavras como money, advice e information não têm plural em inglês e aprenda a quantificá-las corretamente.',
    categoryId: 'gramatica',
    level: 'A2',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['countable', 'uncountable', 'substantivos contaveis', 'incontaveis', 'quantificadores', 'information', 'advice'],
    relatedArticleIds: ['diferenca-much-many', 'uso-some-any'],
    sections: [
      {
        title: 'A Diferença Básica',
        content: 'Substantivos contáveis são itens que você pode enumerar (1 maçã, 2 maçãs). Eles aceitam plural com -s e artigos a/an. Substantivos incontáveis são vistos como uma massa contínua, líquido, substância ou conceito abstrato: não possuem plural e nunca aceitam "a" ou "an" diretamente.',
        examples: [
          { en: 'Contáveis: book -> books, chair -> chairs, idea -> ideas.', pt: 'Itens que podem ser contados individualmente.' },
          { en: 'Incontáveis: water, air, bread, luggage, information.', pt: 'Conceitos ou substâncias contínuas sem forma individual.' }
        ]
      },
      {
        title: 'Palavras Incontáveis que Surpreendem Brasileiros',
        content: 'Muitas palavras que têm plural em português são estritamente incontáveis no inglês:',
        rules: [
          { title: 'Information (Informação)', explanation: 'Nunca diga "informations". Diga "information" ou "a piece of information".' },
          { title: 'Advice (Conselho)', explanation: 'Nunca diga "an advice" ou "advices". Diga "some advice" ou "a piece of advice".' },
          { title: 'News (Notícia / Notícias)', explanation: 'Embora termine com -s, é uma palavra singular incontável: "The news is good" (não "are").' },
          { title: 'Luggage / Baggage (Bagagem)', explanation: 'Não tem plural. Diga "two bags" ou "two pieces of luggage".' },
          { title: 'Bread (Pão)', explanation: 'Incontável. Peça "a piece of bread" ou "two slices of bread", nunca "two breads".' }
        ]
      },
      {
        title: 'Como Quantificar Substantivos Incontáveis?',
        content: 'Para indicar quantidades exatas de itens incontáveis, usamos unidades de medida ou partitivos (container / measure words):',
        examples: [
          { en: 'A bottle of water / two bottles of water', pt: 'Uma garrafa de água / duas garrafas de água' },
          { en: 'A cup of coffee / three cups of coffee', pt: 'Uma xícara de café / três xícaras de café' },
          { en: 'A slice of pizza / a loaf of bread', pt: 'Uma fatia de pizza / um pão inteiro (forma)' },
          { en: 'A piece of advice / two pieces of advice', pt: 'Um conselho / dois conselhos' }
        ]
      }
    ],
    takeaways: [
      'Substantivos contáveis têm singular e plural e aceitam "a/an" (a chair, two chairs).',
      'Substantivos incontáveis nunca vão para o plural e nunca aceitam "a/an" sozinhos.',
      'Information, advice, furniture, luggage e money são 100% incontáveis.',
      'Para contar coisas incontáveis, use medidas como piece of, cup of, bottle of ou slice of.'
    ]
  },
  {
    id: 'diferenca-much-many',
    title: 'Diferença entre Much, Many e A Lot Of',
    description: 'Aprenda quando usar much para incontáveis, many para contáveis e por que nativos preferem a lot of em frases afirmativas.',
    categoryId: 'gramatica',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['much', 'many', 'a lot of', 'quantificadores', 'muito', 'muitos'],
    relatedArticleIds: ['contaveis-incontaveis', 'uso-some-any'],
    sections: [
      {
        title: 'A Regra Principal: Contável vs Incontável',
        content: 'Tanto much quanto many significam "muito(a)" ou "muitos(as)", mas cada um opera exclusivamente com um tipo de substantivo:',
        rules: [
          { title: 'MANY (+ Substantivos Contáveis no Plural)', explanation: 'Muitos / muitas. Ex: many books, many friends, many cars, many hours.', formula: 'Many + Plural Countable Noun' },
          { title: 'MUCH (+ Substantivos Incontáveis no Singular)', explanation: 'Muito / muita. Ex: much time, much money, much water, much patience.', formula: 'Much + Singular Uncountable Noun' }
        ],
        examples: [
          { en: 'How many brothers do you have?', pt: 'Quantos irmãos você tem? (irmãos são contáveis).' },
          { en: 'How much time do we have left?', pt: 'Quanto tempo nos resta? (tempo é incontável).' }
        ]
      },
      {
        title: 'O Segredo dos Nativos: "A Lot Of"',
        content: 'Na fala casual, nativos raramente usam "much" em frases afirmativas (soa antiquado ou muito formal dizer "I have much money"). Em afirmativas, o coringa universal é **a lot of** (ou **lots of**), que funciona com AMBOS os tipos:',
        comparisons: [
          {
            labelA: 'Frase Afirmativa Natural',
            exampleA: 'I have a lot of work to do today.',
            labelB: 'Frase Afirmativa Soando Rígida',
            exampleB: 'I have much work to do today.',
            explanation: 'Prefira "a lot of" em afirmativas para soar mais fluido e moderno.'
          }
        ]
      },
      {
        title: 'Onde Usar Much com Toda a Certeza?',
        content: 'Use "much" sem hesitação em duas situações principais:',
        rules: [
          { title: '1. Perguntas de quantidade (How much...?)', explanation: 'How much does this jacket cost? (Quanto custa esta jaqueta?)' },
          { title: '2. Frases negativas (Not much)', explanation: 'I don\'t have much time right now. (Não tenho muito tempo agora).' }
        ]
      }
    ],
    takeaways: [
      'Many é usado com substantivos contáveis no plural (many people, many ideas).',
      'Much é usado com substantivos incontáveis no singular (much noise, much milk).',
      'How much pergunta preço e quantidade incontável; How many pergunta quantidade contável.',
      'Em frases afirmativas, use "a lot of" como coringa natural para contáveis e incontáveis.'
    ]
  },
  {
    id: 'uso-some-any',
    title: 'Uso de Some e Any: Quantidades Indefinidas',
    description: 'Entenda a regra básica de afirmativas, negativas e perguntas, e conheça a exceção mais elegante para pedidos e ofertas de cortesia.',
    categoryId: 'gramatica',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: false,
    keywords: ['some', 'any', 'algum', 'nenhum', 'pedidos', 'ofertas'],
    relatedArticleIds: ['diferenca-much-many', 'contaveis-incontaveis'],
    sections: [
      {
        title: 'A Regra Geral das Três Caixas',
        content: 'Some e Any expressam quantidades indeterminadas ("algum", "alguma", "alguns", "um pouco de"):',
        rules: [
          { title: 'SOME em frases Afirmativas', explanation: 'Usado para indicar que há uma quantidade existente.', formula: 'I have some questions.' },
          { title: 'ANY em frases Negativas', explanation: 'Equivale a "nenhum" ou "nada de".', formula: 'I don\'t have any money.' },
          { title: 'ANY em Perguntas Gerais', explanation: 'Quando você não sabe se existe ou não o item pesquisado.', formula: 'Do you have any pets?' }
        ],
        examples: [
          { en: 'We need some fresh vegetables for dinner.', pt: 'Nós precisamos de alguns vegetais frescos para o jantar.' },
          { en: 'There aren\'t any seats available on this flight.', pt: 'Não há nenhum assento disponível neste voo.' },
          { en: 'Do you have any doubt about the topic?', pt: 'Você tem alguma dúvida sobre o assunto?' }
        ]
      },
      {
        title: 'A Grande Exceção: Quando Usar SOME em Perguntas?',
        content: 'Esta é uma das perguntas mais comuns de exames e conversação: usamos SOME em perguntas em dois momentos especiais de polidez:',
        rules: [
          { title: '1. Ofertas (Oferecer algo com cortesia)', explanation: 'Would you like some coffee? (Você gostaria de um pouco de café?)' },
          { title: '2. Pedidos (Solicitar algo esperando resposta positiva)', explanation: 'Can I have some water, please? (Você pode me dar um pouco de água, por favor?)' }
        ]
      },
      {
        title: 'Compostos com Some e Any',
        content: 'A mesmíssima lógica aplica-se às palavras derivadas:',
        examples: [
          { en: 'Someone / Somebody (alguém) vs Anyone / Anybody (alguém em perguntas, ninguém em negativas)', pt: 'Someone called you. / Did anyone call me?' },
          { en: 'Something (algo) vs Anything (nada em negativas, qualquer coisa)', pt: 'I bought something. / I didn\'t buy anything.' },
          { en: 'Somewhere (algum lugar) vs Anywhere (em qualquer lugar / nenhum lugar)', pt: 'Let\'s go somewhere quiet.' }
        ]
      }
    ],
    takeaways: [
      'Use SOME para afirmativas ("I need some help").',
      'Use ANY para negativas ("I don\'t need any help") e perguntas normais ("Do you need any help?").',
      'Use SOME em perguntas quando for uma oferta cortês ("Would you like some tea?") ou pedido ("Can I get some water?").',
      'As palavras compostas (someone/anyone, something/anything) seguem exatamente as mesmas regras.'
    ]
  },
  {
    id: 'preposicoes-tempo-lugar',
    title: 'Preposições de Tempo e Lugar: O Segredo de IN, ON e AT',
    description: 'Aprenda a pirâmide visual que vai do mais amplo ao mais específico para nunca mais errar as preposições mais usadas do inglês.',
    categoryId: 'gramatica',
    level: 'A2',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['preposicoes', 'in', 'on', 'at', 'tempo', 'lugar', 'piramide'],
    relatedArticleIds: ['erros-comuns-brasileiros', 'pedir-informacoes-direcoes'],
    sections: [
      {
        title: 'A Pirâmide das Preposições',
        content: 'Tanto para Tempo quanto para Lugar, a regra de ouro é pensar em uma pirâmide invertida: IN no topo (o mais amplo e geral), ON no meio (especificidade intermediária) e AT na base (o ponto exato e específico).',
        callout: {
          type: 'tip',
          title: 'Regra de ouro visual',
          text: 'IN = Grande e geral | ON = Médio, linhas e superfícies | AT = Ponto exato'
        }
      },
      {
        title: 'Preposições de Tempo',
        content: 'Veja como aplicar o critério de especificidade cronológica:',
        rules: [
          { title: 'IN (Períodos longos e gerais)', explanation: 'Séculos, anos, meses, estações do ano e partes do dia.', formula: 'In 2024, in July, in summer, in the morning' },
          { title: 'ON (Dias e datas comemorativas específicas)', explanation: 'Dias da semana e datas completas.', formula: 'On Monday, on July 4th, on my birthday' },
          { title: 'AT (Horários precisos e momentos exatos)', explanation: 'Horas no relógio, momentos exatos.', formula: 'At 8:30 PM, at noon, at midnight, at the weekend (UK)' }
        ],
        examples: [
          { en: 'The party is in December, on a Saturday, at 9:00 PM.', pt: 'A festa é em dezembro (in), em um sábado (on), às 21h (at).' },
          { en: 'I was born in 1995 on March 15th.', pt: 'Eu nasci em 1995 (ano = in) no dia 15 de março (data com dia = on).' }
        ]
      },
      {
        title: 'Preposições de Lugar',
        content: 'Aplicando a mesma pirâmide ao espaço geográfico e físico:',
        rules: [
          { title: 'IN (Áreas delimitadas, cidades, países, dentro de)', explanation: 'In Brazil, in São Paulo, in the kitchen, in a room.' },
          { title: 'ON (Superfícies e ruas)', explanation: 'On the table, on the wall, on Paulista Avenue, on the floor.' },
          { title: 'AT (Endereços com número e pontos específicos de encontro)', explanation: 'At 45 Main Street, at the bus stop, at the airport, at work.' }
        ],
        examples: [
          { en: 'He lives in Brazil, on Oxford Street, at number 42.', pt: 'Ele mora no Brasil (país: in), na Oxford Street (rua: on), no número 42 (endereço completo: at).' },
          { en: 'The keys are on the kitchen table.', pt: 'As chaves estão sobre a mesa da cozinha (superfície: on).' }
        ]
      }
    ],
    takeaways: [
      'Pense sempre na pirâmide: IN (amplo/geral) -> ON (médio/dias/ruas) -> AT (específico/horas/endereço exato).',
      'Tempo: in July (mês), on July 10th (dia específico com data), at 7 o\'clock (hora exata).',
      'Lugar: in Paris (cidade), on Fifth Avenue (rua), at the library / at 120 Fifth Avenue (ponto exato).',
      'Exceções famosas: at night (à noite), in the morning/afternoon (de manhã/à tarde).'
    ]
  },
  {
    id: 'pronomes-adjetivos-possessivos',
    title: 'Possessivos: A Diferença entre My e Mine, Your e Yours',
    description: 'Aprenda quando usar os possessive adjectives antes do substantivo e quando usar os possessive pronouns sozinhos no fim da frase.',
    categoryId: 'gramatica',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['possessivos', 'my', 'mine', 'your', 'yours', 'his', 'her', 'hers', 'their', 'theirs'],
    relatedArticleIds: ['pronomes-pessoais', 'erros-comuns-brasileiros'],
    sections: [
      {
        title: 'Os Dois Tipos de Possessivos em Inglês',
        content: 'Em português dizemos "meu carro" e "o carro é meu" usando a mesma palavra ("meu"). Em inglês existem dois grupos distintos:',
        rules: [
          { title: 'Possessive Adjectives (Acompanham o substantivo)', explanation: 'My, your, his, her, its, our, their. Devem SEMPRE vir antes de um substantivo.', formula: 'My + car | Your + bag | Her + job' },
          { title: 'Possessive Pronouns (Substituem o substantivo)', explanation: 'Mine, yours, his, hers, ours, theirs. Ficam sozinhos na frase, evitando repetições.', formula: 'The car is mine. | The choice is yours.' }
        ]
      },
      {
        title: 'Tabela Completa de Correspondência',
        content: 'Observe como cada pessoa gramatical possui os dois formatos:',
        comparisons: [
          {
            labelA: 'Com Substantivo (Possessive Adjective)',
            exampleA: 'This is my passport.',
            labelB: 'Sem Substantivo (Possessive Pronoun)',
            exampleB: 'This passport is mine.',
            explanation: 'Mine nunca vem antes de um substantivo; my nunca fica sozinho sem um substantivo.'
          },
          {
            labelA: 'Your (Seu)',
            exampleA: 'Is that your jacket?',
            labelB: 'Yours (Seu/Sua)',
            exampleB: 'Is that jacket yours?',
            explanation: 'Yours já contém a ideia do substantivo implícito.'
          },
          {
            labelA: 'Their (Deles/Delas)',
            exampleA: 'Their house is spacious.',
            labelB: 'Theirs (O deles/A delas)',
            exampleB: 'The large house is theirs.',
            explanation: 'Theirs encerra a frase sem precisar repetir "house".'
          }
        ]
      },
      {
        title: 'Dica Importante: Não Use Artigo Antes de Possessivos',
        content: 'Em português é natural dizer "o meu amigo" ou "a minha casa". Em inglês, NUNCA use "the" antes de possessivos:',
        mistakes: [
          {
            wrong: 'The my car is outside.',
            correct: 'My car is outside.',
            explanation: 'Diga apenas "My car", sem o artigo "the".'
          },
          {
            wrong: 'Give me the your phone.',
            correct: 'Give me your phone.',
            explanation: 'Artigos definidos não coexistem com possessivos em inglês.'
          }
        ]
      }
    ],
    takeaways: [
      'Possessive Adjectives (my, your, his, her, our, their) exigem um substantivo logo após.',
      'Possessive Pronouns (mine, yours, his, hers, ours, theirs) substituem o substantivo e ficam sozinhos.',
      'Nunca diga "the my car" ou "the your friend". Em inglês não se usa "the" antes de possessivos.',
      'Note que "his" tem o mesmo formato para ambos os papéis (his phone / the phone is his).'
    ]
  }
];

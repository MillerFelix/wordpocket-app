import { LearningArticle } from '../../types/learning';

export const FORMACAO_FRASES_ARTICLES: LearningArticle[] = [
  {
    id: 'ordem-palavras-ingles',
    title: 'A Ordem das Palavras em Inglês: Sintaxe e Posição do Adjetivo',
    description: 'Entenda por que o inglês posiciona o adjetivo antes do substantivo e como ordenar modo, lugar e tempo ao final das frases.',
    categoryId: 'formacao-frases',
    level: 'A2',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['ordem das palavras', 'word order', 'adjetivos antes do substantivo', 'sintaxe', 'lugar e tempo'],
    relatedArticleIds: ['construcao-frases-fundamentos', 'construir-frases-longas'],
    sections: [
      {
        title: 'A Regra do Adjetivo: Característica Primeiro',
        content: 'Em português, colocamos o adjetivo depois do substantivo na maioria das vezes ("carro vermelho", "reunião importante"). Em inglês, a regra padrão é rigorosamente inversa: o adjetivo vem SEMPRE antes do substantivo que ele qualifica.',
        examples: [
          { en: 'A red car', pt: 'Um carro vermelho (adjetivo red antes de car).' },
          { en: 'An important meeting', pt: 'Uma reunião importante (important antes de meeting).' },
          { en: 'A delicious traditional Italian meal', pt: 'Uma refeição italiana tradicional e deliciosa.' }
        ],
        callout: {
          type: 'tip',
          title: 'Adjetivos não têm plural em inglês',
          text: 'Adjetivos em inglês nunca recebem "-s": diga "expensive cars", nunca "expensives cars".'
        }
      },
      {
        title: 'Ordem dos Complementos no Fim da Frase (M-L-T)',
        content: 'Quando uma frase contém informações de modo (como), lugar (onde) e tempo (quando), a ordem natural do inglês falado e escrito é:',
        rules: [
          { title: '1. Modo (Manner)', explanation: 'Como a ação foi feita (quickly, happily, by car).' },
          { title: '2. Lugar (Place)', explanation: 'Onde ocorreu (at the office, in London, home).' },
          { title: '3. Tempo (Time)', explanation: 'Quando ocorreu (yesterday, every Friday, at 8 AM).' }
        ],
        examples: [
          { en: 'She worked hard (modo) at the office (lugar) yesterday (tempo).', pt: 'Ela trabalhou duro no escritório ontem.' },
          { en: 'They arrived safely (modo) in Madrid (lugar) last night (tempo).', pt: 'Eles chegaram em segurança a Madri ontem à noite.' }
        ]
      },
      {
        title: 'Erros Muito Frequentes',
        content: 'Observe os erros de quem pensa em português antes de falar:',
        mistakes: [
          {
            wrong: 'I have a computer very fast.',
            correct: 'I have a very fast computer.',
            explanation: 'O adjetivo e seu intensificador devem vir antes do substantivo.'
          },
          {
            wrong: 'She speaks very well English.',
            correct: 'She speaks English very well.',
            explanation: 'Nunca separe o verbo ("speaks") do seu objeto direto ("English"). O advérbio ("very well") vai para o final.'
          }
        ]
      }
    ],
    takeaways: [
      'Adjetivos vêm antes do substantivo que qualificam (a black jacket, an easy question).',
      'Adjetivos são invariáveis em gênero e número (não têm plural).',
      'A ordem natural dos detalhes no fim da oração é: Modo -> Lugar -> Tempo.',
      'Não separe o verbo de seu objeto direto com advérbios no meio.'
    ]
  },
  {
    id: 'como-formular-perguntas',
    title: 'Como Formular Perguntas: A Fórmula Q-A-S-V',
    description: 'Aprenda o método prático Qu-A-S-V para estruturar qualquer tipo de pergunta em inglês com segurança imediata.',
    categoryId: 'formacao-frases',
    level: 'A2',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['perguntas', 'questions', 'wh- questions', 'yes no questions', 'qasv', 'auxiliares'],
    relatedArticleIds: ['uso-do-does', 'uso-did', 'como-usar-auxiliares'],
    sections: [
      {
        title: 'A Fórmula Mágica das Perguntas (Q-A-S-V)',
        content: 'Quase todas as perguntas do idioma inglês seguem a mesma sequência de 4 elementos. Memorizar a sigla Q-A-S-V tornará a formulação automática:',
        rules: [
          { title: 'Q - Question Word', explanation: 'Palavra interrogativa: What, Where, When, Why, Who, Which, How (opcional em perguntas de sim/não).' },
          { title: 'A - Auxiliary Verb', explanation: 'Verbo auxiliar do tempo verbal: Do, Does, Did, Will, Is, Are, Have, Can, Should.' },
          { title: 'S - Subject', explanation: 'Sujeito da frase: you, he, she, the flight, your parents.' },
          { title: 'V - Verb (Main)', explanation: 'Verbo principal na forma base.' }
        ],
        examples: [
          { en: 'Where (Q) do (A) you (S) live (V)?', pt: 'Onde você mora?' },
          { en: 'What (Q) did (A) she (S) say (V)?', pt: 'O que ela disse?' },
          { en: 'Why (Q) are (A) they (S) waiting (V)?', pt: 'Por que eles estão esperando?' },
          { en: 'When (Q) will (A) you (S) arrive (V)?', pt: 'Quando você vai chegar?' }
        ]
      },
      {
        title: 'Perguntas de Sim ou Não (Yes/No Questions)',
        content: 'Quando a pergunta não precisa de "What", "Where", etc., basta aplicar a mesma fórmula pulando o Q: começa direto no A-S-V:',
        examples: [
          { en: 'Do (A) you (S) understand (V)? -> Yes, I do. / No, I don\'t.', pt: 'Você compreende? -> Sim, compreendo. / Não, não compreendo.' },
          { en: 'Did (A) they (S) call (V) you? -> Yes, they did.', pt: 'Eles te ligaram? -> Sim, ligaram.' },
          { en: 'Can (A) we (S) start (V) now? -> Yes, we can.', pt: 'Podemos começar agora? -> Sim, podemos.' }
        ]
      },
      {
        title: 'O Erro da Intonação sem Inversão',
        content: 'Em português, transformamos uma afirmação em pergunta apenas elevando o tom da voz no final ("Você mora aqui?"). Em inglês, a simples entonação não basta na norma padrão: a inversão do auxiliar é obrigatória:',
        mistakes: [
          {
            wrong: 'You live here?',
            correct: 'Do you live here?',
            explanation: 'Na gramática padrão inglesa, o auxiliar "Do" é mandatório no início da pergunta.'
          },
          {
            wrong: 'Where you went yesterday?',
            correct: 'Where did you go yesterday?',
            explanation: 'Siga a fórmula Q-A-S-V: Where (Q) + did (A) + you (S) + go (V).'
          }
        ]
      }
    ],
    takeaways: [
      'A sequência mestra de perguntas em inglês é Q-A-S-V (Question Word + Auxiliar + Sujeito + Verbo).',
      'Para perguntas de Sim/Não, basta iniciar no A-S-V (Auxiliar + Sujeito + Verbo).',
      'Não confie apenas na entonação: o inglês exige o auxiliar na frente do sujeito.',
      'O verbo principal sempre permanece na sua forma base na presença do auxiliar.'
    ]
  },
  {
    id: 'como-formar-negativas',
    title: 'Como Formar Frases Negativas e Evitar a Dupla Negativa',
    description: 'Entenda a partícula NOT com auxiliares e saiba por que o inglês proíbe a dupla negativa comum do português.',
    categoryId: 'formacao-frases',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['negativas', 'double negative', 'dupla negativa', 'not', 'never', 'nobody', 'nothing'],
    relatedArticleIds: ['como-formular-perguntas', 'uso-some-any', 'erros-comuns-brasileiros'],
    sections: [
      {
        title: 'A Estrutura da Negativa em Inglês',
        content: 'Para negar em inglês, a partícula NOT sempre se acopla a um verbo auxiliar ou modal (don\'t, doesn\'t, didn\'t, won\'t, can\'t, shouldn\'t, isn\'t, aren\'t). Nunca colocamos "not" ou "no" solto antes do verbo principal.',
        examples: [
          { en: 'I do not drink soda. / I don\'t drink soda.', pt: 'Eu não bebo refrigerante.' },
          { en: 'She cannot attend the meeting today.', pt: 'Ela não pode comparecer à reunião hoje.' },
          { en: 'We will not give up.', pt: 'Nós não vamos desistir.' }
        ]
      },
      {
        title: 'O Perigo da Dupla Negativa (Double Negative)',
        content: 'Em português é correto e enfático usar duas negativas na mesma frase: "Eu **não** vi **ninguém**" ou "Eu **não** quero **nada**". Em inglês, a matemática gramatical é rigorosa: duas negativas se anulam e viram uma afirmativa. Portanto, o inglês permite apenas UMA palavra negativa por oração!',
        comparisons: [
          {
            labelA: 'Forma Correta 1 (Auxiliar Negativo + Palavra Neutra Any)',
            exampleA: 'I don\'t know anybody here.',
            labelB: 'Forma Correta 2 (Verbo Afirmativo + Palavra Negativa No)',
            exampleB: 'I know nobody here.',
            explanation: 'Ambas significam "Eu não conheço ninguém aqui". Nunca junte don\'t + nobody.'
          },
          {
            labelA: 'Correto com Anything',
            exampleA: 'I didn\'t see anything.',
            labelB: 'Correto com Nothing',
            exampleB: 'I saw nothing.',
            explanation: 'Dizer "I didn\'t see nothing" é considerado um erro gramatical grave.'
          }
        ]
      },
      {
        title: 'Palavras com Sentido Negativo Embutido',
        content: 'Palavras como never (nunca), hardly (quase não), scarcely (raramente) já são negativas por si sós e exigem o verbo na forma afirmativa:',
        examples: [
          { en: 'I never eat meat. (Correto)', pt: 'Eu nunca como carne (e não "I don\'t never eat meat").' },
          { en: 'She hardly ever complains. (Correto)', pt: 'Ela quase nunca reclama (e não "She doesn\'t hardly ever").' }
        ]
      }
    ],
    takeaways: [
      'A partícula NOT sempre acompanha um verbo auxiliar ou to be.',
      'O inglês não aceita dupla negativa: use apenas um elemento negativo por oração.',
      'Escolha: ou usa "don\'t/didn\'t + anything/anybody", ou usa "verbo afirmativo + nothing/nobody".',
      'Never e hardly já são negativos e tornam auxiliares negativos desnecessários.'
    ]
  },
  {
    id: 'como-usar-auxiliares',
    title: 'O Papel dos Auxiliares: Perguntas, Respostas Curtas e Ênfase',
    description: 'Descubra como os auxiliares do, have, be e os verbos modais dão ritmo, polidez e precisão à conversação em inglês.',
    categoryId: 'formacao-frases',
    level: 'B1',
    readingTimeMinutes: 5,
    isEssential: false,
    keywords: ['auxiliares', 'short answers', 'respostas curtas', 'enfase', 'question tags'],
    relatedArticleIds: ['como-formular-perguntas', 'quando-usar-nao-usar-auxiliares'],
    sections: [
      {
        title: 'As Três Funções dos Auxiliares',
        content: 'Muitos estudantes acham que os verbos auxiliares só servem para criar perguntas e negativas. Na verdade, eles desempenham funções cruciais na conversação natural: respostas curtas elegantes, concordância de opiniões e ênfase enfática.'
      },
      {
        title: '1. Respostas Curtas (Short Answers)',
        content: 'Em inglês, responder a uma pergunta apenas com "Yes" ou "No" pode soar seco, ríspido ou descortês. O padrão amigável e natural é responder repetindo o auxiliar:',
        examples: [
          { en: 'Do you live in São Paulo? -> Yes, I do. / No, I don\'t.', pt: 'Você mora em SP? -> Sim, moro. / Não, não moro.' },
          { en: 'Can you drive? -> Yes, I can. / No, I can\'t.', pt: 'Você sabe dirigir? -> Sim, sei. / Não, não sei.' },
          { en: 'Have you seen this movie? -> Yes, I have. / No, I haven\'t.', pt: 'Você já viu esse filme? -> Sim, vi. / Não, não vi.' }
        ]
      },
      {
        title: '2. Auxiliar para Ênfase na Afirmativa',
        content: 'Na fala casual, quando você quer reforçar com convicção uma verdade que alguém duvidou, você pode colocar "do" ou "did" em uma frase afirmativa:',
        examples: [
          { en: 'I do want to help you!', pt: 'Eu realmente quero te ajudar! / Eu quero sim te ajudar!' },
          { en: 'She did call you yesterday.', pt: 'Ela ligou para você ontem sim!' }
        ]
      },
      {
        title: '3. Concordâncias: "So do I" e "Neither do I"',
        content: 'Para dizer "eu também" ou "nem eu", usamos o auxiliar correspondente:',
        rules: [
          { title: 'Concordar com Afirmativa', explanation: 'So + Auxiliar + Sujeito. Ex: "I love coffee." -> "So do I." (Eu também).' },
          { title: 'Concordar com Negativa', explanation: 'Neither + Auxiliar + Sujeito. Ex: "I don\'t like cold weather." -> "Neither do I." (Nem eu).' }
        ]
      }
    ],
    takeaways: [
      'Use o auxiliar para respostas curtas educadas ("Yes, I do" em vez de apenas "Yes").',
      'O auxiliar na afirmativa expressa forte ênfase ("I do love you!").',
      'Para concordar: use "So do I" para afirmativas e "Neither do I" para negativas.',
      'Identifique sempre o tempo da pergunta para devolver o auxiliar correspondente.'
    ]
  },
  {
    id: 'construir-frases-longas',
    title: 'Como Construir Frases Mais Longas e Conectar Ideias',
    description: 'Deixe de falar em frases telegráficas de três palavras e aprenda a construir períodos fluidos e articulados.',
    categoryId: 'formacao-frases',
    level: 'B1',
    readingTimeMinutes: 6,
    isEssential: false,
    keywords: ['frases complexas', 'conexoes', 'relative clauses', 'who which that', 'fluencia'],
    relatedArticleIds: ['conectivos-basicos', 'ordem-palavras-ingles'],
    sections: [
      {
        title: 'Superando o Estilo Telegráfico',
        content: 'Estudantes iniciantes costumam falar em blocos isolados: "I like coffee. Coffee is good. I drink coffee in the morning." Para alcançar a fluência intermediária e avançada, precisamos conectar essas ideias com pronomes relativos e conjunções subordinativas.'
      },
      {
        title: 'Pronomes Relativos: Who, Which e That',
        content: 'Eles funcionam como "que" em português, juntando duas frases sem repetir o sujeito:',
        rules: [
          { title: 'WHO (Para Pessoas)', explanation: 'The woman who interviewed me was very polite. (A mulher que me entrevistou...).' },
          { title: 'WHICH (Para Coisas e Animais)', explanation: 'The project which was approved yesterday starts now. (O projeto que foi aprovado...).' },
          { title: 'THAT (Coringa Informal para Pessoas e Coisas)', explanation: 'The car that I rented was excellent. / The friend that called me.' }
        ]
      },
      {
        title: 'Causas, Condições e Contrastes',
        content: 'Adicione nuances de raciocínio com conectores de subordinação:',
        examples: [
          { en: 'Even though it was raining heavily, we decided to go for a hike.', pt: 'Embora estivesse chovendo forte, nós decidimos fazer uma caminhada.' },
          { en: 'If we finish the report by 3 PM, we can attend the workshop.', pt: 'Se terminarmos o relatório até as 15h, poderemos participar do workshop.' },
          { en: 'Since you are already here, let\'s discuss the quarterly budget.', pt: 'Já que você já está aqui, vamos discutir o orçamento trimestral.' }
        ]
      }
    ],
    takeaways: [
      'Use pronomes relativos (who, which, that) para emendar informações sem repetir substantivos.',
      'Use conectores subordinativos (even though, because, since, if) no início ou meio da frase.',
      'Varie a pontuação: orações subordinadas que iniciam a frase pedem vírgula antes da principal.'
    ]
  },
  {
    id: 'conectivos-basicos',
    title: 'Conectivos Essenciais: And, But, Because, So e However',
    description: 'Guia definitivo dos conectivos fundamentais do inglês: contraste, causa, consequência, adição e como pontuar cada um.',
    categoryId: 'formacao-frases',
    level: 'A2',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['conectivos', 'linking words', 'and', 'but', 'because', 'so', 'however', 'although'],
    relatedArticleIds: ['construir-frases-longas', 'ordem-palavras-ingles'],
    sections: [
      {
        title: 'Os 5 Conectivos Básicos do Dia a Dia',
        content: 'Dominar estes cinco conectores cobre a imensa maioria das interações comunicativas cotidianas:',
        rules: [
          { title: 'AND (Adição)', explanation: 'Une ideias de mesma natureza. Ex: She likes music and art.' },
          { title: 'BUT (Contraste simples)', explanation: 'Contrapõe duas ideias. Ex: He studied hard, but he didn\'t pass.' },
          { title: 'BECAUSE (Causa / Motivo)', explanation: 'Explica o porquê de algo. Ex: I stayed home because it was storming.' },
          { title: 'SO (Consequência / Resultado)', explanation: 'Mostra o resultado natural de algo. Ex: It was storming, so I stayed home.' },
          { title: 'ALTHOUGH / EVEN THOUGH (Concessão)', explanation: 'Equivale a "embora / apesar de". Ex: Although she was tired, she kept working.' }
        ]
      },
      {
        title: 'Diferença entre BUT e HOWEVER',
        content: 'Muitos confundem a pontuação e formalidade entre but e however:',
        comparisons: [
          {
            labelA: 'BUT (Conjunção coordenativa)',
            exampleA: 'The hotel was expensive, but the service was great.',
            labelB: 'HOWEVER (Advérbio conectivo formal)',
            exampleB: 'The hotel was expensive. However, the service was great.',
            explanation: 'However inicia uma nova oração após ponto final ou ponto e vírgula, e deve ser seguido de vírgula.'
          }
        ]
      },
      {
        title: 'Because vs So: Causa vs Consequência',
        content: 'Não confunda a direção do raciocínio:',
        examples: [
          { en: 'I was hungry, so I cooked pasta. (Situação -> Consequência com SO).', pt: 'Eu estava com fome, por isso cozinhei macarrão.' },
          { en: 'I cooked pasta because I was hungry. (Ação -> Causa com BECAUSE).', pt: 'Eu cozinhei macarrão porque estava com fome.' }
        ]
      }
    ],
    takeaways: [
      'And adiciona informações, But introduz contraste.',
      'Because apresenta a causa (o motivo); So apresenta a consequência (o resultado).',
      'However é mais formal que But e geralmente vem após ponto final com vírgula.',
      'Evite iniciar frases com "And" ou "But" em redações formais; na fala casual é aceito.'
    ]
  }
];

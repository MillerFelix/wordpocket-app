import { Activity } from '../../types/activity';

export const WRITING_B2: Activity[] = [
  // --- 1. Complete a Frase (Fill in the Blank) - 4 Atividades ---
  {
    id: 'writing-b2-fill-conditionals',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b2',
    topic: 'Condicionais Avançadas & Hipóteses',
    title: 'Terceira Condicional e Situações Hipotéticas',
    description: 'Complete as orações com estruturas de terceira condicional para analisar situações passadas e consequências alternativas.',
    objective: 'Dominar o padrão if + past perfect, would have + past participle.',
    instructions: 'Digite a forma verbal correta para completar a oração condicional.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-fc-1',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "know" (saber/conhecer):',
        sentenceWithBlank: 'If we had ___ about the schedule changes earlier, we would have adjusted our travel plans.',
        expectedAnswers: ['known'],
        hint: 'Past participle de know (know - knew - ?)',
        explanation: 'Na oração subordinada com "if" na terceira condicional, usamos had + particípio passado: "If we had known".'
      },
      {
        id: 'w-b2-fc-2',
        type: 'fill_blank',
        prompt: 'Complete com o auxiliar modal no passado que indica probabilidade/capacidade ("teria sido"):',
        sentenceWithBlank: 'Without the emergency generator, the hospital ___ have lost all operational power during the storm.',
        expectedAnswers: ['would', 'could'],
        hint: 'Auxiliar usado com have + particípio para expressar o resultado hipotético.',
        explanation: '"Would have lost" (teria perdido) ou "could have lost" (poderia ter perdido) são adequados para expressar o desfecho hipotético evitado.'
      },
      {
        id: 'w-b2-fc-3',
        type: 'fill_blank',
        prompt: 'Complete a inversão condicional formal equivalente a "If you should need":',
        sentenceWithBlank: '___ you require any further assistance, please do not hesitate to contact our customer support team.',
        expectedAnswers: ['Should'],
        hint: 'Inversão elegante que substitui "If you should".',
        explanation: 'A inversão "Should you require..." é uma alternativa formal e comum no inglês B2/C1 para "If you require/should require".'
      }
    ]
  },
  {
    id: 'writing-b2-fill-passives',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b2',
    topic: 'Voz Passiva Impessoal & Relatos',
    title: 'Construções de Voz Passiva com Verbos de Relato',
    description: 'Pratique construções formais como "is expected to", "are reported to have" e estruturas impessoais.',
    objective: 'Empregar a voz passiva avançada para formular afirmações objetivas e jornalísticas.',
    instructions: 'Preencha a lacuna com a forma correta do verbo auxiliar ou do particípio.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-fp-1',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "expect" (esperar/prever):',
        sentenceWithBlank: 'The new regional train line is ___ to reduce commuting times by nearly thirty minutes.',
        expectedAnswers: ['expected'],
        hint: 'Estrutura passiva: is + particípio + to infinitive.',
        explanation: '"Is expected to reduce" expressa uma previsão generalizada de forma impessoal e objetiva.'
      },
      {
        id: 'w-b2-fp-2',
        type: 'fill_blank',
        prompt: 'Complete com a forma do verbo to be adequada ao sujeito plural "several ancient coins":',
        sentenceWithBlank: 'Several ancient coins were reported to ___ been discovered during the subway excavation.',
        expectedAnswers: ['have'],
        hint: 'Infinitivo perfeito passivo: to have been + particípio.',
        explanation: 'Usamos "to have been discovered" para indicar que a descoberta ocorreu em momento anterior ao relato.'
      },
      {
        id: 'w-b2-fp-3',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "believe" (acreditar):',
        sentenceWithBlank: 'Regular physical activity is widely ___ to strengthen cognitive resilience in older adults.',
        expectedAnswers: ['believed', 'thought', 'considered'],
        hint: 'Particípio passado de believe.',
        explanation: '"Is widely believed to strengthen" é a estrutura passiva consagrada para relatar consenso.'
      }
    ]
  },
  {
    id: 'writing-b2-fill-connectors',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b2',
    topic: 'Coesão Textual & Conectivos',
    title: 'Conectivos de Contraste e Concessão',
    description: 'Use conectivos como "whereas", "despite", "nonetheless" e "although" para dar fluidez e rigor ao texto.',
    objective: 'Diferenciar conectivos seguidos de oração completa daqueles seguidos de sintagma nominal.',
    instructions: 'Digite o conectivo adequado conforme o contexto e a regência da oração.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-fco-1',
        type: 'fill_blank',
        prompt: 'Complete com a preposição concessiva que antecede substantivo/gerúndio ("a despeito de"):',
        sentenceWithBlank: '___ the torrential rain, thousands of local residents attended the annual open-air festival.',
        expectedAnswers: ['Despite', 'In spite of'],
        hint: 'Não use "Although", pois aqui temos um sintagma nominal ("the torrential rain") sem verbo.',
        explanation: '"Despite" e "In spite of" são seguidos de substantivos ou gerúndios, diferentemente de "Although", que exige sujeito + verbo.'
      },
      {
        id: 'w-b2-fco-2',
        type: 'fill_blank',
        prompt: 'Complete com o conectivo de contraste direto entre duas realidades ("ao passo que / enquanto"):',
        sentenceWithBlank: 'Online shopping provides unmatched convenience, ___ visiting local markets fosters neighborhood community.',
        expectedAnswers: ['whereas', 'while'],
        hint: 'Conectivo de contraste que contrapõe duas ideias equilibradas.',
        explanation: '"Whereas" ou "while" expressam o contraste direto entre duas orações independentes.'
      },
      {
        id: 'w-b2-fco-3',
        type: 'fill_blank',
        prompt: 'Complete com a palavra que forma a locução prepositiva "In spite ___":',
        sentenceWithBlank: 'They finalized the partnership agreement in spite ___ several unresolved regulatory concerns.',
        expectedAnswers: ['of'],
        hint: 'Preposição que acompanha "in spite".',
        explanation: 'A locução prepositiva completa é "in spite of". Observe que "despite" não leva "of".'
      }
    ]
  },
  {
    id: 'writing-b2-fill-collocations',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b2',
    topic: 'Colocações Verbais e Nominais',
    title: 'Colocações Precisas do Cotidiano Profissional',
    description: 'Selecione os verbos e termos precisos em expressões consagradas da língua inglesa.',
    objective: 'Evitar traduções literais aplicando combinações naturais como make a decision, take responsibility e meet deadlines.',
    instructions: 'Complete a frase com o verbo ou substantivo que forma a colocação natural.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-fcl-1',
        type: 'fill_blank',
        prompt: 'Complete com o verbo correspondente a "cumprir prazos":',
        sentenceWithBlank: 'Our primary objective this quarter is to ___ our deadlines without compromising product safety.',
        expectedAnswers: ['meet'],
        hint: 'Verbo que se combina com deadlines (meet deadlines).',
        explanation: 'Em inglês, "cumprir prazos" é expresso pela colocação consagrada "to meet deadlines".'
      },
      {
        id: 'w-b2-fcl-2',
        type: 'fill_blank',
        prompt: 'Complete com o verbo que forma a colocação "tomar medidas / providências":',
        sentenceWithBlank: 'The city council must ___ immediate measures to reduce urban noise pollution near schools.',
        expectedAnswers: ['take'],
        hint: 'Colocação: to ___ measures.',
        explanation: 'Dizemos "to take measures" ou "to take steps" para indicar a adoção de providências.'
      },
      {
        id: 'w-b2-fcl-3',
        type: 'fill_blank',
        prompt: 'Complete com o verbo que expressa "fazer uma concessão / concessões mútuas":',
        sentenceWithBlank: 'Both sides agreed to ___ concessions in order to secure a long-term peaceful resolution.',
        expectedAnswers: ['make'],
        hint: 'Colocação com concessions (make concessions).',
        explanation: 'A combinação natural é "to make concessions" (fazer concessões).'
      }
    ]
  },

  // --- 2. Organize as Palavras (Sentence Order) - 4 Atividades ---
  {
    id: 'writing-b2-order-cleft',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b2',
    topic: 'Ênfase e Frases Clivadas',
    title: 'Estruturação de Frases com Ênfase (Cleft Sentences)',
    description: 'Ordene frases que utilizam "What we need is..." e "It was... that..." para destacar o ponto principal.',
    objective: 'Aprender a manipular o foco informacional da frase em inglês.',
    instructions: 'Clique nas palavras na ordem correta para produzir uma frase com ênfase.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-oc-1',
        type: 'sentence_order',
        prompt: 'Monte a frase com foco: "O que realmente precisamos agora é de uma comunicação transparente."',
        scrambledWords: ['transparent', 'What', 'is', 'communication', 'need', 'now', 'we', 'really'],
        expectedSentence: 'What we really need now is transparent communication',
        acceptedSentences: [
          'What we need now is really transparent communication',
          'What we really need is transparent communication now'
        ],
        explanation: 'A frase clivada com "What" posiciona o elemento enfático após a cópula "is": "What we really need now is transparent communication".'
      },
      {
        id: 'w-b2-oc-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Foi a paciência dela que salvou a negociação complexa."',
        scrambledWords: ['the', 'saved', 'patience', 'It', 'negotiation', 'her', 'complex', 'was', 'that'],
        expectedSentence: 'It was her patience that saved the complex negotiation',
        acceptedSentences: [
          'It was her patience that saved the complex negotiation.'
        ],
        explanation: 'A estrutura "It was [elemento enfático] that [verbo]" serve para destacar um sujeito ou agente causal específico.'
      },
      {
        id: 'w-b2-oc-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Tudo o que peço é uma oportunidade justa de explicar o ocorrido."',
        scrambledWords: ['explain', 'ask', 'All', 'opportunity', 'a', 'to', 'fair', 'I', 'is'],
        expectedSentence: 'All I ask is a fair opportunity to explain',
        acceptedSentences: [
          'All that I ask is a fair opportunity to explain'
        ],
        explanation: '"All I ask is..." é uma fórmula idiomática de clivagem de alta frequência no inglês B2.'
      }
    ]
  },
  {
    id: 'writing-b2-order-relative',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b2',
    topic: 'Orações Relativas Explicativas',
    title: 'Orações Relativas Não-Restritivas (Non-defining)',
    description: 'Ordene frases contendo orações intercaladas que acrescentam informações complementares com vírgulas.',
    objective: 'Praticar o uso de which, who e where em orações relativas explicativas.',
    instructions: 'Organize os blocos de palavras respeitando a posição das orações subordinadas.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-or-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "O arquiteto, que desenhou a biblioteca, recebeu um prêmio nacional."',
        scrambledWords: ['designed', 'architect', 'received', 'who', 'award', 'The', 'the', 'library', 'a', 'national'],
        expectedSentence: 'The architect who designed the library received a national award',
        acceptedSentences: [
          'The architect, who designed the library, received a national award'
        ],
        explanation: 'A oração relativa "who designed the library" qualifica "The architect" imediatamente antes do predicado principal.'
      },
      {
        id: 'w-b2-or-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Eles visitaram a cidade costeira onde o autor passou a infância."',
        scrambledWords: ['his', 'visited', 'the', 'childhood', 'coastal', 'where', 'spent', 'author', 'They', 'town', 'the'],
        expectedSentence: 'They visited the coastal town where the author spent his childhood',
        acceptedSentences: [
          'They visited the coastal town where the author spent his childhood.'
        ],
        explanation: 'O pronome relativo adverbial "where" introduz o complemento locativo da oração principal.'
      },
      {
        id: 'w-b2-or-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "A conferência foi adiada, o que surpreendeu a todos os participantes."',
        scrambledWords: ['was', 'postponed', 'conference', 'surprised', 'all', 'which', 'attendees', 'The'],
        expectedSentence: 'The conference was postponed which surprised all attendees',
        acceptedSentences: [
          'The conference was postponed, which surprised all attendees'
        ],
        explanation: 'O pronome "which" pode se referir à oração anterior inteira (o fato de a conferência ter sido adiada).'
      }
    ]
  },
  {
    id: 'writing-b2-order-participle',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b2',
    topic: 'Orações Reduzidas de Particípio',
    title: 'Orações Reduzidas de Particípio (Participle Clauses)',
    description: 'Ordene períodos que utilizam particípios presentes (-ing) e passados (-ed) para condensar ideias com elegância.',
    objective: 'Desenvolver a concisão sintática típica de textos informativos e ensaios.',
    instructions: 'Coloque as palavras na ordem correta para compor o período reduzido.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-op-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Tendo terminado o relatório final, eles enviaram os resultados à diretoria."',
        scrambledWords: ['the', 'board', 'Having', 'sent', 'finished', 'report', 'the', 'results', 'to', 'they', 'the'],
        expectedSentence: 'Having finished the report they sent the results to the board',
        acceptedSentences: [
          'Having finished the report, they sent the results to the board'
        ],
        explanation: '"Having finished..." é uma oração reduzida de particípio perfeito que expressa anterioridade em relação à oração principal.'
      },
      {
        id: 'w-b2-op-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Inspirada pela apresentação, ela decidiu iniciar sua própria pesquisa."',
        scrambledWords: ['presentation', 'by', 'decided', 'she', 'Inspired', 'the', 'own', 'to', 'research', 'start', 'her'],
        expectedSentence: 'Inspired by the presentation she decided to start her own research',
        acceptedSentences: [
          'Inspired by the presentation, she decided to start her own research'
        ],
        explanation: 'A oração reduzida com particípio passado "Inspired by the presentation" funciona como advérbio de causa para a decisão tomada.'
      },
      {
        id: 'w-b2-op-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Ao chegar ao aeroporto, percebemos que o voo estava atrasado."',
        scrambledWords: ['delayed', 'airport', 'the', 'arriving', 'flight', 'we', 'realized', 'On', 'was', 'the'],
        expectedSentence: 'On arriving at the airport we realized the flight was delayed',
        acceptedSentences: [
          'On arriving at the airport, we realized the flight was delayed',
          'Arriving at the airport we realized the flight was delayed'
        ],
        explanation: '"On arriving at the airport" (ou "Upon arriving...") expressa a concomitância temporal imediata.'
      }
    ]
  },
  {
    id: 'writing-b2-order-indirect-questions',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b2',
    topic: 'Perguntas Indiretas e Polidez',
    title: 'Perguntas Indiretas e Estruturas Polidas',
    description: 'Ordene frases que convertem perguntas diretas em formulações diplomáticas e indiretas.',
    objective: 'Preservar a ordem direta de sujeito + verbo em perguntas incorporadas.',
    instructions: 'Organize as palavras mantendo a ordem direta na oração subordinada.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-oiq-1',
        type: 'sentence_order',
        prompt: 'Monte a pergunta polida: "Você poderia me informar a que horas a recepção fecha?"',
        scrambledWords: ['closes', 'what', 'Could', 'reception', 'the', 'tell', 'time', 'me', 'you'],
        expectedSentence: 'Could you tell me what time the reception closes',
        acceptedSentences: [
          'Could you tell me what time the reception closes?'
        ],
        explanation: 'Em perguntas indiretas, a oração após "what time" não usa auxiliar de interrogação: "the reception closes", e não "does the reception close".'
      },
      {
        id: 'w-b2-oiq-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Gostaria de saber se o seminário está aberto ao público em geral."',
        scrambledWords: ['public', 'general', 'the', 'wonder', 'to', 'open', 'seminar', 'I', 'the', 'whether', 'is'],
        expectedSentence: 'I wonder whether the seminar is open to the general public',
        acceptedSentences: [
          'I wonder if the seminar is open to the general public'
        ],
        explanation: '"I wonder whether..." introduz uma pergunta indireta com ordem afirmativa (sujeito + verbo: the seminar is).'
      },
      {
        id: 'w-b2-oiq-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Não temos certeza de quanto tempo o procedimento de segurança levará."',
        scrambledWords: ['procedure', 'take', 'We', 'sure', 'how', 'long', 'are', 'not', 'security', 'will', 'the'],
        expectedSentence: 'We are not sure how long the security procedure will take',
        acceptedSentences: [
          'We are not sure how long the security procedure will take.'
        ],
        explanation: 'A oração substantiva mantém a ordem direta: "the security procedure will take".'
      }
    ]
  },

  // --- 3. Corrija o Erro (Find and Fix Error) - 4 Atividades ---
  {
    id: 'writing-b2-error-gerund-infinitive',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b2',
    topic: 'Gerúndios vs. Infinitivos com Mudança de Sentido',
    title: 'Regência Verbal: Stop, Remember e Forget',
    description: 'Identifique e corrija erros no uso de gerúndios e infinitivos após verbos cuja semântica se altera com a terminação.',
    objective: 'Distinguir ações futuras ou deveres (to do) de ações concluídas ou lembranças (doing).',
    instructions: 'Encontre o termo incorreto e digite a forma gramaticalmente precisa.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-eg-1',
        type: 'find_fix_error',
        prompt: 'A frase quer dizer que ela se lembrou de trancar a porta antes de sair de casa:',
        sentenceWithError: 'She remembered locking the front door before leaving, but she completely forgot to do it.',
        incorrectPart: 'locking',
        correctForm: 'to lock',
        explanation: '"Remember to lock" significa lembrar-se de executar uma tarefa; "remember locking" significa ter a memória visual de ter trancado.'
      },
      {
        id: 'w-b2-eg-2',
        type: 'find_fix_error',
        prompt: 'A frase quer dizer que eles pararam a caminhada a fim de beber água:',
        sentenceWithError: 'After two hours of intense hiking, the group stopped drinking water from the fountain.',
        incorrectPart: 'drinking',
        correctForm: 'to drink',
        explanation: '"Stop to drink" indica interromper uma ação para beber água; "stop drinking" significaria abandonar o hábito de beber água.'
      },
      {
        id: 'w-b2-eg-3',
        type: 'find_fix_error',
        prompt: 'A frase expressa lamentar informar uma má notícia agora:',
        sentenceWithError: 'We regret informing you that your application could not be approved at this time.',
        incorrectPart: 'informing',
        correctForm: 'to inform',
        explanation: 'No inglês formal de comunicados, usa-se "regret to inform" (lamento informar); "regret informing" indicaria arrependimento por ter contado no passado.'
      }
    ]
  },
  {
    id: 'writing-b2-error-subject-verb-agreement',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b2',
    topic: 'Concordância Sujeito-Verbo Complexa',
    title: 'Concordância com Substantivos Coletivos e Expressões Quantitativas',
    description: 'Corrija erros de concordância verbal com termos como "neither... nor", "the number of" e substantivos incontáveis.',
    objective: 'Garantir rigor gramatical em frases com sujeitos compostos ou quantificadores especiais.',
    instructions: 'Substitua a forma verbal incorreta pela flexão adequada ao sujeito.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-es-1',
        type: 'find_fix_error',
        prompt: 'Corrija a concordância com "The number of" (que é singular):',
        sentenceWithError: 'The number of electric vehicles registered in the capital have doubled over the past two years.',
        incorrectPart: 'have',
        correctForm: 'has',
        explanation: '"The number of" exige verbo no singular ("has doubled"), diferentemente de "A number of", que pede plural.'
      },
      {
        id: 'w-b2-es-2',
        type: 'find_fix_error',
        prompt: 'Corrija a concordância na estrutura correlativa "Neither... nor":',
        sentenceWithError: 'Neither the team manager nor the project analysts was aware of the sudden budget reduction.',
        incorrectPart: 'was',
        correctForm: 'were',
        explanation: 'Com "neither... nor", o verbo concorda com o sujeito mais próximo ("the project analysts" -> were).'
      },
      {
        id: 'w-b2-es-3',
        type: 'find_fix_error',
        prompt: 'Corrija a concordância com o substantivo incontável "information":',
        sentenceWithError: 'The statistical information provided in the introductory chapters are outdated.',
        incorrectPart: 'are',
        correctForm: 'is',
        explanation: '"Information" é um substantivo incontável em inglês e sempre rege verbo no singular ("is outdated").'
      }
    ]
  },
  {
    id: 'writing-b2-error-modifiers',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b2',
    topic: 'Modificadores Deslocados (Dangling Modifiers)',
    title: 'Posicionamento Correto de Modificadores e Advérbios',
    description: 'Corrija períodos em que a relação entre o advérbio/modificador e o termo modificado está incorreta ou ambígua.',
    objective: 'Produzir frases sem ambiguidade sintática.',
    instructions: 'Identifique o termo com uso inadequado e digite a correção apropriada.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-em-1',
        type: 'find_fix_error',
        prompt: 'Corrija o advérbio que indica escassez ("mal / quase não"):',
        sentenceWithError: 'The room was so noisy that she could hard hear what the presenter was saying.',
        incorrectPart: 'hard',
        correctForm: 'hardly',
        explanation: '"Hardly" significa "quase não / mal"; "hard" como advérbio significa "com esforço / intensamente" (ex: work hard).'
      },
      {
        id: 'w-b2-em-2',
        type: 'find_fix_error',
        prompt: 'Corrija o termo que confunde "economic" com "economical":',
        sentenceWithError: 'This compact car is very economic, consuming only four liters of fuel per hundred kilometers.',
        incorrectPart: 'economic',
        correctForm: 'economical',
        explanation: '"Economical" refere-se a algo que gera economia financeira ou poupança de recursos; "economic" diz respeito à economia como ciência ou sistema.'
      },
      {
        id: 'w-b2-em-3',
        type: 'find_fix_error',
        prompt: 'Corrija a comparação redundante:',
        sentenceWithError: 'The renovated train station is much more closer to the convention center than the old terminal.',
        incorrectPart: 'more closer',
        correctForm: 'closer',
        explanation: 'Não se usa "more" antes de comparativos curtos que já levam "-er": use "much closer", e não "much more closer".'
      }
    ]
  },
  {
    id: 'writing-b2-error-word-form',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b2',
    topic: 'Classes de Palavras e Derivação',
    title: 'Famílias de Palavras e Precisão Morfológica',
    description: 'Identifique palavras empregadas com a classe gramatical errada (substantivo no lugar de adjetivo, advérbio no lugar de particípio).',
    objective: 'Desenvolver precisão morfológica em textos analíticos.',
    instructions: 'Substitua a palavra pela forma da classe gramatical exigida pela sintaxe.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-ew-1',
        type: 'find_fix_error',
        prompt: 'Substitua o substantivo pelo adjetivo correto que qualifica "influence":',
        sentenceWithError: 'Digital media has had a profound and benefit influence on language learning worldwide.',
        incorrectPart: 'benefit',
        correctForm: 'beneficial',
        explanation: 'Para qualificar o substantivo "influence", precisamos do adjetivo correspondente: "beneficial" (benéfico).'
      },
      {
        id: 'w-b2-ew-2',
        type: 'find_fix_error',
        prompt: 'Substitua o adjetivo pelo advérbio que modifica o particípio "improved":',
        sentenceWithError: 'Patient recovery rates have substantial improved since the adoption of the modern protocol.',
        incorrectPart: 'substantial',
        correctForm: 'substantially',
        explanation: 'O particípio verbal "improved" deve ser modificado por um advérbio de modo: "substantially" (substancialmente).'
      },
      {
        id: 'w-b2-ew-3',
        type: 'find_fix_error',
        prompt: 'Substitua o termo que confunde "sensible" com "sensitive":',
        sentenceWithError: 'Her skin is extremely sensible to direct sunlight, so she always wears protective sunscreen.',
        incorrectPart: 'sensible',
        correctForm: 'sensitive',
        explanation: 'Em inglês, "sensitive" significa sensível; "sensible" é um falso amigo que significa sensato/razoável.'
      }
    ]
  },

  // --- 4. Escreva sua Resposta (Open Prompt) - 3 Atividades ---
  {
    id: 'writing-b2-open-formal-email',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'b2',
    topic: 'Comunicação Formal por E-mail',
    title: 'Redigindo um Pedido de Informação Formal',
    description: 'Escreva uma mensagem formal a uma instituição solicitando esclarecimentos sobre um curso ou serviço.',
    objective: 'Empregar saudações adequadas, tom cortês e fórmulas consagradas de abertura e encerramento.',
    instructions: 'Escreva uma resposta curta e coesa contendo saudação profissional, a solicitação explícita e o encerramento adequado.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-op-formal-1',
        type: 'open_prompt',
        prompt: 'Escreva uma frase de abertura profissional expressando que você escreve para pedir informações sobre o programa de intercâmbio:',
        modelAnswer: 'I am writing to inquire about the application deadlines and requirements for the upcoming exchange program.',
        acceptedAnswers: [
          'I am writing to inquire about the upcoming exchange program.',
          'I am writing to request more information regarding the exchange program.',
          'I am writing to inquire about the details of the exchange program.'
        ],
        hint: 'Use a fórmula clássica "I am writing to inquire about..."',
        explanation: '"I am writing to inquire about..." é a forma mais natural e respeitosa de abrir um e-mail de solicitação formal.'
      },
      {
        id: 'w-b2-op-formal-2',
        type: 'open_prompt',
        prompt: 'Escreva uma frase polida agradecendo antecipadamente pela assistência e indicando que aguarda o retorno:',
        modelAnswer: 'Thank you in advance for your assistance, and I look forward to hearing from you.',
        acceptedAnswers: [
          'Thank you in advance for your help, and I look forward to your reply.',
          'Thank you for your assistance, and I look forward to hearing from you soon.',
          'Thank you in advance, and I look forward to hearing from you.'
        ],
        hint: 'Combine "Thank you in advance..." com "I look forward to hearing from you."',
        explanation: 'A expressão "I look forward to hearing from you" encerra mensagens profissionais com cordialidade e polidez.'
      }
    ]
  },
  {
    id: 'writing-b2-open-opinion-paragraph',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'b2',
    topic: 'Parágrafo de Opinião Argumentativa',
    title: 'Defendendo um Ponto de Vista com Justificativa',
    description: 'Redija frases argumentativas sobre sustentabilidade e hábitos de consumo em centros urbanos.',
    objective: 'Articular afirmação principal (claim) seguida de evidência ou justificativa clara.',
    instructions: 'Responda com uma frase estruturada contendo sua tese e a razão que a sustenta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-op-arg-1',
        type: 'open_prompt',
        prompt: 'Defenda que as ciclovias urbanas trazem benefícios tanto ambientais quanto de saúde para as cidades:',
        modelAnswer: 'Investing in dedicated bike lanes not only reduces carbon emissions but also encourages a healthier lifestyle among citizens.',
        acceptedAnswers: [
          'Dedicated bike lanes reduce carbon emissions and encourage a healthier lifestyle for citizens.',
          'Investing in bike lanes reduces urban pollution and promotes healthier daily exercise.',
          'Bike lanes benefit the environment by cutting emissions and promote better physical health.'
        ],
        hint: 'Tente usar a estrutura correlativa "not only... but also..." ou conectivos de adição como "moreover".',
        explanation: 'Apresentar benefícios simultâneos demonstra maturidade discursiva no nível B2.'
      },
      {
        id: 'w-b2-op-arg-2',
        type: 'open_prompt',
        prompt: 'Conclua seu argumento sugerindo que governos locais deveriam priorizar o transporte sustentável:',
        modelAnswer: 'Therefore, local governments should prioritize green public transport as a practical long-term solution.',
        acceptedAnswers: [
          'In conclusion, municipalities must prioritize sustainable transport for a better future.',
          'Therefore, local authorities ought to invest more in eco-friendly public transportation.',
          'As a result, city planners should prioritize sustainable transport solutions.'
        ],
        hint: 'Comece com um marcador conclusivo como "Therefore," ou "In conclusion,".',
        explanation: 'Marcadores conclusivos como "Therefore" sinalizam o encerramento lógico do raciocínio.'
      }
    ]
  },
  {
    id: 'writing-b2-open-synthesis',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'b2',
    topic: 'Síntese de Ideias Contrastantes',
    title: 'Sintetizando Vantagens e Desvantagens',
    description: 'Escreva frases equilibradas que resumem os dois lados de uma discussão sobre tecnologia no ambiente de trabalho.',
    objective: 'Balancear aspectos positivos e negativos em uma única sentença harmoniosa.',
    instructions: 'Formule uma frase de síntese utilizando conectivos como while, although ou on the one hand.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b2-op-syn-1',
        type: 'open_prompt',
        prompt: 'Sintetize que a automação aumenta a produtividade, mas também exige constante requalificação profissional:',
        modelAnswer: 'While workplace automation significantly boosts productivity, it also requires continuous professional reskilling.',
        acceptedAnswers: [
          'Although automation increases overall productivity, workers must constantly develop new skills.',
          'While automation enhances efficiency, it demands ongoing professional training and adaptation.',
          'Even though automation improves productivity, it requires workers to acquire new skills continuously.'
        ],
        hint: 'Inicie com "While..." ou "Although..." para estabelecer a ponderação.',
        explanation: 'Orações subordinadas com "While" permitem apresentar concessões ponderadas sem tomar posições extremas.'
      }
    ]
  }
];

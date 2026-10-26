import { Activity } from '../../types/activity';

export const WRITING_C1: Activity[] = [
  // --- 1. Complete a Frase (Fill in the Blank) - 4 Atividades ---
  {
    id: 'writing-c1-fill-inversions',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c1',
    topic: 'Inversões com Advérbios Negativos',
    title: 'Inversão Enfática com Termos Negativos e Restritivos',
    description: 'Pratique a estrutura de inversão sintática iniciada por termos como "Rarely", "Hardly", "Seldom" e "Under no circumstances".',
    objective: 'Dominar o padrão: Advérbio Negativo + Verbo Auxiliar + Sujeito + Verbo Principal.',
    instructions: 'Digite o verbo auxiliar correto para completar a inversão formal.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-fi-1',
        type: 'fill_blank',
        prompt: 'Complete a inversão com o auxiliar no passado simples correspondente a "witness":',
        sentenceWithBlank: 'Rarely ___ the scientific community witnessed such rapid consensus on an environmental issue.',
        expectedAnswers: ['has', 'had'],
        hint: 'Auxiliar correspondente a "witnessed" no tempo perfeito.',
        explanation: 'Após "Rarely", invertemos o auxiliar antes do sujeito: "Rarely has/had the scientific community witnessed...".'
      },
      {
        id: 'w-c1-fi-2',
        type: 'fill_blank',
        prompt: 'Complete com o auxiliar modal de obrigação enfática na inversão:',
        sentenceWithBlank: 'Under no circumstances ___ confidential personal records be shared without explicit patient consent.',
        expectedAnswers: ['should', 'must', 'may'],
        hint: 'Modal de dever/permissão no contexto normativo.',
        explanation: '"Under no circumstances should/must confidential personal records be shared" é a fórmula de proibição enfática de alto registro.'
      },
      {
        id: 'w-c1-fi-3',
        type: 'fill_blank',
        prompt: 'Complete a correlação com "Hardly had they... ___":',
        sentenceWithBlank: 'Hardly had the keynote speaker concluded her opening remarks ___ the power in the hall flickered and went out.',
        expectedAnswers: ['when', 'before'],
        hint: 'Conjunção correlativa que acompanha "Hardly had...".',
        explanation: 'A correlação padrão para narrar fatos imediatamente sucessivos é "Hardly had... when..." (ou "No sooner had... than...").'
      }
    ]
  },
  {
    id: 'writing-c1-fill-subjunctive',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c1',
    topic: 'Subjuntivo Mandatório & Fórmulas Formais',
    title: 'O Subjuntivo Mandatório no Inglês Formal',
    description: 'Use a forma base do verbo (bare infinitive) em orações subordinadas após verbos e adjetivos de exigência, recomendação e urgência.',
    objective: 'Aplicar a regra do subjuntivo inglês: insist that he go, demand that the policy be reviewed.',
    instructions: 'Digite a forma verbal do subjuntivo adequada para a frase formal.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-fs-1',
        type: 'fill_blank',
        prompt: 'Complete com o verbo to be no subjuntivo mandatório (forma base invariável):',
        sentenceWithBlank: 'The ethics committee recommended that the clinical protocol ___ temporarily suspended pending further inquiry.',
        expectedAnswers: ['be'],
        hint: 'No subjuntivo com "that", usamos a forma base "be", independentemente do tempo verbal da oração principal.',
        explanation: 'O subjuntivo mandatório em inglês utiliza a forma base do verbo: "recommended that the clinical protocol be suspended".'
      },
      {
        id: 'w-c1-fs-2',
        type: 'fill_blank',
        prompt: 'Complete com a forma base de "take" (subjuntivo de terceira pessoa):',
        sentenceWithBlank: 'It is imperative that every department head ___ full accountability for the administrative audit.',
        expectedAnswers: ['take'],
        hint: 'Não adicione "-s" de terceira pessoa no subjuntivo.',
        explanation: 'Após "It is imperative that...", o verbo permanece na forma infinitiva sem "to" nem flexão de terceira pessoa: "take".'
      },
      {
        id: 'w-c1-fs-3',
        type: 'fill_blank',
        prompt: 'Complete com a forma negativa do subjuntivo de "disclose" ("não divulgar"):',
        sentenceWithBlank: 'The judge ordered that the defense attorney ___ disclose the witness list to the press.',
        expectedAnswers: ['not'],
        hint: 'A negação no subjuntivo é feita simplesmente com "not" antes da forma base, sem "do not" ou "does not".',
        explanation: 'No subjuntivo, a negação é formada simplesmente por "not" + verbo base: "that the defense attorney not disclose".'
      }
    ]
  },
  {
    id: 'writing-c1-fill-advanced-prepositions',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c1',
    topic: 'Regência Preposicional Avançada & Idiomatismos',
    title: 'Regência de Substantivos e Adjetivos Abstratos',
    description: 'Complete períodos com preposições exatas exigidas por substantivos conceituais e adjetivos de postura intelectual.',
    objective: 'Evitar interferências do português dominando regências como prone to, oblivious to e conducive to.',
    instructions: 'Digite a preposição correta requerida pela regência da palavra em destaque.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-fap-1',
        type: 'fill_blank',
        prompt: 'Complete com a preposição regida pelo adjetivo "conducive" ("propício a"):',
        sentenceWithBlank: 'An open and psychologically safe environment is highly conducive ___ collaborative innovation.',
        expectedAnswers: ['to'],
        hint: 'Regência: conducive ___.',
        explanation: 'O adjetivo "conducive" rege exclusivamente a preposição "to": "conducive to innovation" (propício à inovação).'
      },
      {
        id: 'w-c1-fap-2',
        type: 'fill_blank',
        prompt: 'Complete com a preposição regida por "incompatible" ("incompatível com"):',
        sentenceWithBlank: 'The current production quotas are fundamentally incompatible ___ our stated environmental objectives.',
        expectedAnswers: ['with'],
        hint: 'Regência: incompatible ___.',
        explanation: 'Em inglês, algo é "incompatible with" outra coisa (incompatível com).'
      },
      {
        id: 'w-c1-fap-3',
        type: 'fill_blank',
        prompt: 'Complete com a preposição que acompanha a expressão "in light ___" ("à luz de / considerando"):',
        sentenceWithBlank: 'In light ___ recent macroeconomic volatility, the treasury department revised its quarterly projections.',
        expectedAnswers: ['of'],
        hint: 'Locução prepositiva: in light ___.',
        explanation: 'A expressão formal consagrada é "in light of" (à luz de / em vista de).'
      }
    ]
  },
  {
    id: 'writing-c1-fill-nuance-verbs',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c1',
    topic: 'Verbos de Nuance e Postura Crítica',
    title: 'Precisão Lexical em Textos de Análise',
    description: 'Empregue verbos refinados como "undermine", "exacerbate", "corroborate" e "advocate".',
    objective: 'Substituir verbos genéricos (make worse, support, weaken) por termos de precisão ensaística.',
    instructions: 'Complete a oração com o verbo correto na flexão requerida pelo contexto.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-fnv-1',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "exacerbate" (piorar / agravar uma situação delicada):',
        sentenceWithBlank: 'The prolonged drought was further ___ by unseasonably high summer temperatures.',
        expectedAnswers: ['exacerbated'],
        hint: 'Particípio passado de exacerbate.',
        explanation: '"Exacerbated" é o termo preciso para descrever o agravamento de uma condição crítica existente.'
      },
      {
        id: 'w-c1-fnv-2',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "corroborate" (confirmar / corroborar com evidências):',
        sentenceWithBlank: 'The initial archaeological findings were later ___ by independent carbon dating laboratories.',
        expectedAnswers: ['corroborated'],
        hint: 'Particípio passado de corroborate.',
        explanation: '"Corroborated" significa respaldado ou confirmado por evidências externas independentes.'
      },
      {
        id: 'w-c1-fnv-3',
        type: 'fill_blank',
        prompt: 'Complete com o verbo na terceira pessoa do singular que significa "solapar / enfraquecer gradualmente":',
        sentenceWithBlank: 'Spreading unsubstantiated rumors directly ___ public trust in civic institutions.',
        expectedAnswers: ['undermines'],
        hint: 'Terceira pessoa do singular do verbo undermine.',
        explanation: '"Undermines" expressa com precisão o enfraquecimento gradual e corrosivo da confiança pública.'
      }
    ]
  },

  // --- 2. Organize as Palavras (Sentence Order) - 4 Atividades ---
  {
    id: 'writing-c1-order-conditional-inversion',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c1',
    topic: 'Inversões Condicionais Formais (Had / Were / Should)',
    title: 'Inversão Condicional Hipotética Sem "If"',
    description: 'Ordene períodos formais em que a conjunção "if" é omitida e o verbo auxiliar encabeça a oração condicional.',
    objective: 'Dominar formulações elegantes como "Had we known...", "Were it not for..." e "Should you wish...".',
    instructions: 'Organize os termos respeitando a sintaxe da inversão condicional.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-oci-1',
        type: 'sentence_order',
        prompt: 'Monte a frase formal: "Não fosse pela dedicação incansável da equipe, o projeto teria fracassado."',
        scrambledWords: ['team', 'for', 'failed', 'the', 'it', 'the', 'project', 'not', 'have', 'Were', 'would'],
        expectedSentence: 'Were it not for the team the project would have failed',
        acceptedSentences: [
          'Were it not for the team, the project would have failed',
          'The project would have failed were it not for the team'
        ],
        explanation: '"Were it not for..." é a fórmula erudita equivalente a "If it were not for..." (se não fosse por).'
      },
      {
        id: 'w-c1-oci-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Tivéssemos nós previsto o aumento na demanda, teríamos contratado mais funcionários."',
        scrambledWords: ['we', 'demand', 'in', 'staff', 'anticipated', 'more', 'hired', 'the', 'Had', 'would', 'have', 'surge', 'we'],
        expectedSentence: 'Had we anticipated the surge in demand we would have hired more staff',
        acceptedSentences: [
          'Had we anticipated the surge in demand, we would have hired more staff'
        ],
        explanation: '"Had we anticipated..." substitui "If we had anticipated..." com registro culto e direto.'
      },
      {
        id: 'w-c1-oci-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Caso você queira modificar os termos, entre em contato com nosso departamento jurídico."',
        scrambledWords: ['modify', 'contact', 'legal', 'wish', 'Should', 'our', 'terms', 'you', 'department', 'to', 'the'],
        expectedSentence: 'Should you wish to modify the terms contact our legal department',
        acceptedSentences: [
          'Should you wish to modify the terms, contact our legal department'
        ],
        explanation: '"Should you wish to..." é a alternativa protocolar clássica para "If you wish to...".'
      }
    ]
  },
  {
    id: 'writing-c1-order-fronting',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c1',
    topic: 'Fronting e Topicalização para Ritmo e Coesão',
    title: 'Topicalização de Complementos (Fronting)',
    description: 'Ordene frases que deslocam advérbios de lugar ou complementos preposicionais para o início a fim de criar fluidez discursiva.',
    objective: 'Controlar o ritmo e a progressão temática do texto através da antecipação de elementos sintáticos.',
    instructions: 'Coloque as palavras na ordem correta, posicionando o elemento antecipado no início.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-of-1',
        type: 'sentence_order',
        prompt: 'Monte a descrição topográfica com inversão de lugar: "No topo da colina ficava a antiga fortaleza de pedra."',
        scrambledWords: ['hill', 'fortress', 'stood', 'ancient', 'of', 'the', 'Atop', 'the', 'stone'],
        expectedSentence: 'Atop the hill stood the ancient stone fortress',
        acceptedSentences: [
          'Atop the hill, stood the ancient stone fortress',
          'The ancient stone fortress stood atop the hill'
        ],
        explanation: 'Com a antecipação de adjunto adverbial de lugar ("Atop the hill"), ocorre a inversão total verbo-sujeito ("stood the ancient stone fortress").'
      },
      {
        id: 'w-c1-of-2',
        type: 'sentence_order',
        prompt: 'Monte a oração que antecipa o adjetivo com "As": "Por mais talentoso que ele seja, precisa praticar diariamente."',
        scrambledWords: ['practice', 'he', 'daily', 'Talented', 'needs', 'is', 'as', 'he', 'to'],
        expectedSentence: 'Talented as he is he needs to practice daily',
        acceptedSentences: [
          'Talented as he is, he needs to practice daily',
          'Talented though he is he needs to practice daily'
        ],
        explanation: 'A estrutura "Adjetivo + as/though + sujeito + verbo" expressa concessão enfática: "Talented as he is..." (por mais talentoso que seja).'
      },
      {
        id: 'w-c1-of-3',
        type: 'sentence_order',
        prompt: 'Monte a frase de síntese: "Mais importante do que a velocidade é a precisão dos dados analisados."',
        scrambledWords: ['analyzed', 'is', 'data', 'the', 'accuracy', 'of', 'speed', 'important', 'than', 'the', 'More'],
        expectedSentence: 'More important than speed is the accuracy of the analyzed data',
        acceptedSentences: [
          'More important than speed is the accuracy of the analyzed data.'
        ],
        explanation: 'A antecipação comparativa "More important than speed is..." realça o núcleo do argumento.'
      }
    ]
  },
  {
    id: 'writing-c1-order-nominalization',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c1',
    topic: 'Nominalização e Densidade Lexical',
    title: 'Densidade Sintática Através da Nominalização',
    description: 'Estruture períodos que transformam verbos e orações completas em sintagmas nominais complexos e coesos.',
    objective: 'Desenvolver a densidade conceitual característica da escrita acadêmica e de ensaios.',
    instructions: 'Organize os blocos de palavras para formar a sentença nominalizada.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-on-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "A implementação rápida da política levou a um descontentamento generalizado."',
        scrambledWords: ['discontent', 'to', 'widespread', 'The', 'led', 'the', 'rapid', 'policy', 'implementation', 'of'],
        expectedSentence: 'The rapid implementation of the policy led to widespread discontent',
        acceptedSentences: [
          'The rapid implementation of the policy led to widespread discontent.'
        ],
        explanation: 'Em vez de "Because they implemented the policy rapidly, people became discontented", a nominalização cria uma estrutura compacta e madura.'
      },
      {
        id: 'w-c1-on-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "O reconhecimento das realizações dos estudantes aumentou sua motivação intrínseca."',
        scrambledWords: ['boosted', 'achievements', 'motivation', 'their', 'intrinsic', 'student', 'The', 'recognition', 'of'],
        expectedSentence: 'The recognition of student achievements boosted their intrinsic motivation',
        acceptedSentences: [
          'The recognition of student achievements boosted their intrinsic motivation.'
        ],
        explanation: 'A nominalização "The recognition of student achievements" posiciona o conceito complexo como sujeito temático.'
      },
      {
        id: 'w-c1-on-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Uma compreensão mais aprofundada dos ecossistemas locais orientará futuros projetos de restauração."',
        scrambledWords: ['restoration', 'future', 'will', 'understanding', 'local', 'guide', 'A', 'of', 'ecosystems', 'deeper', 'projects'],
        expectedSentence: 'A deeper understanding of local ecosystems will guide future restoration projects',
        acceptedSentences: [
          'A deeper understanding of local ecosystems will guide future restoration projects.'
        ],
        explanation: 'Sintagmas nominais ricos ("A deeper understanding of local ecosystems") conferem autoridade intelectual ao texto.'
      }
    ]
  },
  {
    id: 'writing-c1-order-discourse-markers',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c1',
    topic: 'Marcadores de Transição Discursiva',
    title: 'Transições Sofisticadas de Parágrafo',
    description: 'Ordene períodos que empregam conectivos oracionais como "Be that as it may", "By the same token" e "Notwithstanding".',
    objective: 'Garantir coesão entre parágrafos em textos de argumentação crítica.',
    instructions: 'Coloque as palavras na ordem correta, posicionando o marcador discursivo adequadamente.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-odm-1',
        type: 'sentence_order',
        prompt: 'Monte a frase com a fórmula de concessão: "Seja como for, os princípios éticos fundamentais devem ser preservados."',
        scrambledWords: ['preserved', 'Be', 'as', 'it', 'ethical', 'must', 'core', 'that', 'may', 'principles', 'be'],
        expectedSentence: 'Be that as it may core ethical principles must be preserved',
        acceptedSentences: [
          'Be that as it may, core ethical principles must be preserved'
        ],
        explanation: '"Be that as it may" é um marcador concessivo erudito que significa "seja como for / não obstante o que foi dito".'
      },
      {
        id: 'w-c1-odm-2',
        type: 'sentence_order',
        prompt: 'Monte a frase com o conectivo de equivalência: "Pela mesma razão, os direitos dos consumidores exigem proteção rigorosa."',
        scrambledWords: ['rights', 'token', 'the', 'By', 'consumer', 'require', 'protection', 'same', 'rigorous'],
        expectedSentence: 'By the same token consumer rights require rigorous protection',
        acceptedSentences: [
          'By the same token, consumer rights require rigorous protection'
        ],
        explanation: '"By the same token" conecta duas afirmações que compartilham da mesma lógica ou princípio.'
      },
      {
        id: 'w-c1-odm-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Não obstante as críticas iniciais, a iniciativa provou ser um sucesso notável."',
        scrambledWords: ['initiative', 'criticism', 'the', 'initial', 'remarkable', 'Notwithstanding', 'a', 'proved', 'success'],
        expectedSentence: 'Notwithstanding the initial criticism the initiative proved a remarkable success',
        acceptedSentences: [
          'Notwithstanding the initial criticism, the initiative proved a remarkable success',
          'Notwithstanding the initial criticism the initiative proved to be a remarkable success'
        ],
        explanation: '"Notwithstanding" funciona como preposição formal de concessão equivalente a "despite", com registro altamente formal.'
      }
    ]
  },

  // --- 3. Corrija o Erro (Find and Fix Error) - 4 Atividades ---
  {
    id: 'writing-c1-error-collocation-subtleties',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c1',
    topic: 'Colocações Avançadas e Combinações Fixas',
    title: 'Desvios de Colocação em Registro Formal',
    description: 'Identifique combinações de adjetivo + substantivo ou verbo + preposição que desviam do uso idiomático nativo.',
    objective: 'Apurar a sensibilidade para colocações consagradas em nível avançado.',
    instructions: 'Substitua a palavra que quebra a colocação natural pelo termo canônico.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-ecs-1',
        type: 'find_fix_error',
        prompt: 'A frase quer dizer que a nova evidência colocou dúvidas sobre o depoimento anterior (colocação: cast ___ on):',
        sentenceWithError: 'The newly discovered surveillance footage placed serious doubt on the initial witness testimony.',
        incorrectPart: 'placed',
        correctForm: 'cast',
        explanation: 'A colocação fixa em inglês é "to cast doubt on" (lançar dúvidas sobre), e não "to place doubt on".'
      },
      {
        id: 'w-c1-ecs-2',
        type: 'find_fix_error',
        prompt: 'Corrija a colocação que expressa oposição veemente (colocação: ___ opposed):',
        sentenceWithError: 'Local community leaders were strongly and strictly opposed to the proposed commercial rezoning.',
        incorrectPart: 'strictly',
        correctForm: 'vehemently',
        explanation: 'A colocação avançada de alto impacto é "vehemently opposed" (veementemente contrário) ou "adamantly opposed".'
      },
      {
        id: 'w-c1-ecs-3',
        type: 'find_fix_error',
        prompt: 'A frase quer dizer que a medida prepara o caminho / abre precedentes (colocação: pave the ___ for):',
        sentenceWithError: 'This landmark judicial ruling paves the road for comprehensive environmental accountability.',
        incorrectPart: 'road',
        correctForm: 'way',
        explanation: 'A expressão idiomática exata é "to pave the way for" (abrir caminho / pavimentar o caminho para).'
      }
    ]
  },
  {
    id: 'writing-c1-error-faulty-parallelism',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c1',
    topic: 'Paralelismo Sintático Complexo',
    title: 'Quebras de Paralelismo em Estruturas Coordenadas',
    description: 'Corrija períodos em que itens coordenados ou correlacionados não compartilham a mesma forma sintática.',
    objective: 'Garantir simetria formal em listas, comparações e correlações discursivas.',
    instructions: 'Substitua o elemento que quebra o paralelismo pela forma gramatical simétrica.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-efp-1',
        type: 'find_fix_error',
        prompt: 'Mantenha o paralelismo de gerúndios na coordenação:',
        sentenceWithError: 'The workshop curriculum emphasizes analyzing real case studies, formulating hypotheses, and to evaluate policy outcomes.',
        incorrectPart: 'to evaluate',
        correctForm: 'evaluating',
        explanation: 'Em uma série iniciada por gerúndios ("analyzing", "formulating"), o último item deve manter a mesma forma ("evaluating").'
      },
      {
        id: 'w-c1-efp-2',
        type: 'find_fix_error',
        prompt: 'Harmonize a correlação "not only... but also...":',
        sentenceWithError: 'The director sought not only to inspire the creative team but also motivating the external production crew.',
        incorrectPart: 'motivating',
        correctForm: 'to motivate',
        explanation: 'Após "not only to inspire", a simetria exige "but also to motivate" (ou "also motivate").'
      },
      {
        id: 'w-c1-efp-3',
        type: 'find_fix_error',
        prompt: 'Corrija o paralelismo entre infinitivos de propósito:',
        sentenceWithError: 'Our objective is both to preserve historical archives and providing universal digital access.',
        incorrectPart: 'providing',
        correctForm: 'to provide',
        explanation: 'Após "both to preserve", o paralelismo coordenado exige "and to provide" (ou "provide").'
      }
    ]
  },
  {
    id: 'writing-c1-error-register-mismatches',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c1',
    topic: 'Inadequação de Registro e Vocabulário Informal',
    title: 'Purificação do Registro Formal e Acadêmico',
    description: 'Identifique termos coloquiais ou gírias introduzidos indevidamente em relatórios, atas e textos formais.',
    objective: 'Manter a consistência de tom e registro em textos cultos.',
    instructions: 'Substitua a expressão informal pelo termo formal correspondente.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-erm-1',
        type: 'find_fix_error',
        prompt: 'Substitua o phrasal verb informal em um relatório técnico sobre investigações:',
        sentenceWithError: 'The oversight committee decided to look into the allegations before issuing a public declaration.',
        incorrectPart: 'look into',
        correctForm: 'investigate',
        explanation: 'Em registros formais de relatórios e artigos, "investigate" é muito mais apropriado do que o coloquial "look into".'
      },
      {
        id: 'w-c1-erm-2',
        type: 'find_fix_error',
        prompt: 'Substitua a expressão vaga e informal por termo culto de quantidade:',
        sentenceWithError: 'A lot of evidence was presented by the prosecution regarding the timeline of events.',
        incorrectPart: 'A lot of',
        correctForm: 'Substantial',
        explanation: '"Substantial evidence", "Extensive evidence" ou "Ample evidence" são adequados para contextos jurídicos e formais, enquanto "A lot of" é informal.'
      },
      {
        id: 'w-c1-erm-3',
        type: 'find_fix_error',
        prompt: 'Substitua a locução informal por conectivo conclusivo formal:',
        sentenceWithError: 'At the end of the day, regulatory compliance remains the sole responsibility of executive management.',
        incorrectPart: 'At the end of the day',
        correctForm: 'Ultimately',
        explanation: '"Ultimately" é a alternativa precisa para a expressão clichê e coloquial "At the end of the day".'
      }
    ]
  },
  {
    id: 'writing-c1-error-dangling-participles',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c1',
    topic: 'Particípios Órfãos e Sintaxe Desconectada',
    title: 'Eliminação de Particípios Órfãos (Dangling Participles)',
    description: 'Corrija frases em que o sujeito da oração reduzida de particípio não coincide com o sujeito da oração principal.',
    objective: 'Assegurar que o agente da oração subordinada reduzida seja o verdadeiro sujeito sintático da frase.',
    instructions: 'Substitua a construção incoerente pelo sujeito ou forma que reestabelece o nexo causal.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-edp-1',
        type: 'find_fix_error',
        prompt: 'Na frase abaixo, quem estava subindo as escadas era a pessoa, não as chaves. Corrija a oração principal:',
        sentenceWithError: 'Walking briskly up the historic stairs, the house keys fell from her unzipped coat pocket.',
        incorrectPart: 'the house keys fell',
        correctForm: 'she dropped the keys',
        explanation: 'Como quem caminhava era ela ("Walking briskly..."), o sujeito da oração principal precisa ser "she": "Walking briskly up the historic stairs, she dropped the keys...".'
      },
      {
        id: 'w-c1-edp-2',
        type: 'find_fix_error',
        prompt: 'Corrija a frase para que quem examinou a evidência seja o investigador, e não a conclusão:',
        sentenceWithError: 'Having thoroughly examined the forensic evidence, a clear conclusion was finally reached by the investigator.',
        incorrectPart: 'a clear conclusion was finally reached by the investigator',
        correctForm: 'the investigator finally reached a clear conclusion',
        explanation: 'O particípio "Having thoroughly examined..." deve ser seguido imediatamente pelo agente que realizou a análise: "the investigator finally reached a clear conclusion".'
      },
      {
        id: 'w-c1-edp-3',
        type: 'find_fix_error',
        prompt: 'Corrija a passiva imprópria para vincular o sujeito correto à ação de redigir o manifesto:',
        sentenceWithError: 'Drafting the foundational manifesto, several core principles were outlined by the founders.',
        incorrectPart: 'several core principles were outlined by the founders',
        correctForm: 'the founders outlined several core principles',
        explanation: 'Quem estava redigindo eram os fundadores ("the founders"), que devem figurar como sujeito da oração principal.'
      }
    ]
  },

  // --- 4. Escreva sua Resposta (Open Prompt) - 3 Atividades ---
  {
    id: 'writing-c1-open-executive-summary',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'c1',
    topic: 'Sumário Executivo e Síntese Estratégica',
    title: 'Redigindo um Sumário Executivo de Alto Impacto',
    description: 'Escreva sentenças concisas e densas que sintetizam os achados e recomendações de um projeto corporativo.',
    objective: 'Comunicar complexidade com economia vocabular e assertividade.',
    instructions: 'Escreva uma sentença equilibrada combinando diagnóstico e recomendação estratégica.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-op-exec-1',
        type: 'open_prompt',
        prompt: 'Sintetize em uma frase formal que a modernização da infraestrutura digital é indispensável para sustentar a competitividade futura da organização:',
        modelAnswer: 'Modernizing our core digital infrastructure is imperative if the organization is to sustain long-term competitive advantage.',
        acceptedAnswers: [
          'Upgrading digital infrastructure is essential for the organization to maintain its competitive advantage.',
          'Modernizing digital infrastructure is imperative to sustaining long-term organizational competitiveness.',
          'A comprehensive modernization of digital systems is vital to ensure ongoing market competitiveness.'
        ],
        hint: 'Use adjetivos formais como "imperative" ou "vital" e a estrutura condicional "if... is to...".',
        explanation: '"If the organization is to sustain..." é uma estrutura de alta sofisticação para expressar finalidade indispensável no nível C1.'
      }
    ]
  },
  {
    id: 'writing-c1-open-counter-argument',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'c1',
    topic: 'Refutação e Contra-argumentação Crítica',
    title: 'Articulação de Contra-argumento Diplomático',
    description: 'Formule uma refutação elegante que reconhece o mérito aparente da tese oposta antes de desconstruí-la com dados.',
    objective: 'Dominar a estrutura: Concessão preliminar + virada argumentativa + evidência contrastante.',
    instructions: 'Redija uma frase argumentativa contendo uma concessão inicial ("While it is often contended that...") seguida da posição crítica.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-op-ca-1',
        type: 'open_prompt',
        prompt: 'Contraponha a ideia de que o trabalho remoto diminui a lealdade institucional, apontando que pesquisas indicam maior retenção de talentos:',
        modelAnswer: 'While critics contend that remote work erodes institutional loyalty, empirical data suggests it significantly enhances talent retention.',
        acceptedAnswers: [
          'Although some argue that remote work weakens organizational loyalty, evidence demonstrates it increases employee retention.',
          'While it is often claimed that remote work undermines loyalty, empirical research indicates higher rates of talent retention.',
          'Even if remote work poses loyalty concerns, data proves that employee retention rates improve considerably.'
        ],
        hint: 'Abra com "While critics contend that..." e contraponha com "empirical data suggests...".',
        explanation: 'A alternância entre o verbo modal de alegação ("contend / claim") e a evidência concreta ("empirical data suggests") é marca registrada do ensaio C1.'
      }
    ]
  },
  {
    id: 'writing-c1-open-policy-critique',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'c1',
    topic: 'Crítica de Políticas Públicas e Ética',
    title: 'Encerramento Crítico de Ensaio Argumentativo',
    description: 'Escreva a sentença de fecho de um ensaio acadêmico ou editorial sobre ética no uso de algoritmos preditivos.',
    objective: 'Finalizar um texto com gravidade retórica, recomendação prudente e visão de longo prazo.',
    instructions: 'Escreva uma conclusão de encerramento em um período único, coeso e persuasivo.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c1-op-pc-1',
        type: 'open_prompt',
        prompt: 'Escreva a frase final de um ensaio defendendo que a tecnologia preditiva deve permanecer sempre subordinada ao escrutínio ético humano:',
        modelAnswer: 'Ultimately, predictive algorithms must remain accountable to human ethical oversight if technological progress is to serve the common good.',
        acceptedAnswers: [
          'Ultimately, algorithmic systems must be subject to rigorous human oversight to ensure equitable societal outcomes.',
          'In conclusion, predictive technology must remain subordinate to human ethical scrutiny to protect democratic values.',
          'Above all, automated decision-making must be guided by human ethical principles if it is to foster genuine social progress.'
        ],
        hint: 'Inicie com "Ultimately," e combine "accountable to human oversight" com "if... is to serve the common good".',
        explanation: 'Uma frase de fecho no nível C1 combina síntese temática, postura ética e rigor vocabular.'
      }
    ]
  }
];

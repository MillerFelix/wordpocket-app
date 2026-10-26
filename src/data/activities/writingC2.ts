import { Activity } from '../../types/activity';

export const WRITING_C2: Activity[] = [
  // --- 1. Complete a Frase (Fill in the Blank) - 4 Atividades ---
  {
    id: 'writing-c2-fill-idiomatic-nuance',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c2',
    topic: 'Expressões Idiomáticas Eruditas & Fórmulas Retóricas',
    title: 'Idiomatismos Eruditos em Textos de Ensaio',
    description: 'Complete períodos com expressões figuradas de alto nível estilístico como "cast aspersions", "weather the storm" e "brook no delay".',
    objective: 'Reconhecer e empregar idiomatismos refinados que denotam maestria quase nativa.',
    instructions: 'Digite a palavra exata que completa a locução idiomática ou colocação fixa.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-fin-1',
        type: 'fill_blank',
        prompt: 'Complete a locução que significa difamar / lançar calúnias ("cast ___ on"):',
        sentenceWithBlank: 'A respected statesman should never cast ___ on the personal integrity of his political adversaries.',
        expectedAnswers: ['aspersions'],
        hint: 'Substantivo plural da expressão: to cast aspersions on.',
        explanation: '"To cast aspersions on" é uma locução idiomática refinada que significa difamar ou insinuar desonestidade contra alguém.'
      },
      {
        id: 'w-c2-fin-2',
        type: 'fill_blank',
        prompt: 'Complete com o verbo arcaico/formal que significa "não tolerar / não admitir atrasos" (to ___ no delay):',
        sentenceWithBlank: 'The humanitarian crisis is escalating rapidly and will brook ___ delay from the international community.',
        expectedAnswers: ['no'],
        hint: 'A expressão consagrada é: "will brook no delay".',
        explanation: '"To brook no delay" (ou "brook no compromise") é uma fórmula de estilo clássico que significa "não tolerar demora".'
      },
      {
        id: 'w-c2-fin-3',
        type: 'fill_blank',
        prompt: 'Complete a expressão que significa ofender-se / melindrar-se ("take ___ at"):',
        sentenceWithBlank: 'Rather than engaging with the constructive critique, the novelist took ___ at the editorial recommendations.',
        expectedAnswers: ['umbrage'],
        hint: 'Substantivo formal na locução: to take ___ at.',
        explanation: '"To take umbrage at" significa ofender-se com algo ou sentir-se melindrado por uma observação.'
      }
    ]
  },
  {
    id: 'writing-c2-fill-epistemic-modality',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c2',
    topic: 'Modalidade Epistêmica & Atenuação Acadêmica (Hedging)',
    title: 'Atenuação Epistêmica e Modulação de Certeza',
    description: 'Pratique construções sutis com advérbios e modais compostos como "may well have", "could scarcely", e "stands to reason".',
    objective: 'Modular o grau de certeza de afirmações acadêmicas e intelectuais com precisão cirúrgica.',
    instructions: 'Preencha a lacuna com a partícula ou termo que expressa a modulação epistêmica exata.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-fem-1',
        type: 'fill_blank',
        prompt: 'Complete a expressão que indica forte plausibilidade ("é perfeitamente provável que"):',
        sentenceWithBlank: 'Given the sudden shift in consumer habits, the company may ___ have anticipated the quarterly revenue decline.',
        expectedAnswers: ['well'],
        hint: 'Advérbio que intensifica a probabilidade em "may ___ have".',
        explanation: '"May well have" indica que algo é muito provável de ter ocorrido (mais provável do que um simples "may have").'
      },
      {
        id: 'w-c2-fem-2',
        type: 'fill_blank',
        prompt: 'Complete o advérbio que expressa quase total impossibilidade ("dificilmente conseguiria"):',
        sentenceWithBlank: 'At that historical juncture, the young republic could ___ have survived a prolonged foreign blockade.',
        expectedAnswers: ['scarcely', 'hardly'],
        hint: 'Advérbio formal sinônimo de "barely" que combina com "could ___ have".',
        explanation: '"Could scarcely have survived" denota uma probabilidade residual quase nula de sobrevivência, com elegância estilística.'
      },
      {
        id: 'w-c2-fem-3',
        type: 'fill_blank',
        prompt: 'Complete a fórmula de dedução lógica ("é lógico e evidente que"):',
        sentenceWithBlank: 'It ___ to reason that sustained investment in early education yields lasting societal dividends.',
        expectedAnswers: ['stands'],
        hint: 'Verbo da locução fixa: it ___ to reason.',
        explanation: '"It stands to reason that..." é a fórmula consagrada em debates cultos para expressar que algo é dedutível pelo bom senso.'
      }
    ]
  },
  {
    id: 'writing-c2-fill-rhetorical-concession',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c2',
    topic: 'Concessões Retóricas de Alto Nível',
    title: 'Fórmulas Retóricas de Concessão e Salvaguarda',
    description: 'Complete orações com expressões como "Much as I...", "Far be it from me to...", e "Come what may".',
    objective: 'Expressar discordância sofisticada preservando total elegância retórica.',
    instructions: 'Digite o termo exato que compõe a fórmula retórica.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-frc-1',
        type: 'fill_blank',
        prompt: 'Complete a locução concessiva que substitui "Although I admire greatly":',
        sentenceWithBlank: '___ as I admire his artistic ambition, I cannot endorse the reckless mismanagement of the production budget.',
        expectedAnswers: ['Much'],
        hint: 'Palavra que inicia a estrutura "___ as I [verbo]" (concessão enfática).',
        explanation: '"Much as I admire..." é a fórmula clássica para conceder algo com entusiasmo antes de apresentar uma ressalva capital.'
      },
      {
        id: 'w-c2-frc-2',
        type: 'fill_blank',
        prompt: 'Complete a fórmula de distanciamento polido ("longe de mim querer criticar"):',
        sentenceWithBlank: 'Far ___ it from me to question your clinical judgment, but a second neurological opinion may be prudent.',
        expectedAnswers: ['be'],
        hint: 'Verbo to be no subjuntivo arcaico que integra a expressão "Far ___ it from me".',
        explanation: '"Far be it from me to..." é uma fórmula polida de alta sofisticação usada para introduzir uma intervenção delicada.'
      },
      {
        id: 'w-c2-frc-3',
        type: 'fill_blank',
        prompt: 'Complete a expressão que significa "aconteça o que acontecer / haja o que houver":',
        sentenceWithBlank: 'The diplomatic delegation resolved to remain at the negotiation table, come ___ may.',
        expectedAnswers: ['what'],
        hint: 'Pronome relativo da locução fixa: come ___ may.',
        explanation: '"Come what may" é a expressão idiomática clássica que denota determinação inabalável frente a quaisquer contingências.'
      }
    ]
  },
  {
    id: 'writing-c2-fill-lexical-precision',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'c2',
    topic: 'Precisão Lexical Máxima e Antônimos Cultos',
    title: 'O Vocabulário Exato para Matizes Psicológicos e Intelectuais',
    description: 'Selecione termos raros e cirúrgicos como "equivocal", "indefatigable", "specious" e "ephemeral".',
    objective: 'Eliminar paráfrases vagas substituindo-as pelo termo conceitual mais exato da língua inglesa.',
    instructions: 'Complete a frase com o adjetivo erudito correspondente ao significado entre parênteses.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-flp-1',
        type: 'fill_blank',
        prompt: 'Complete com o adjetivo que significa "aparentemente plausível, mas enganoso na essência":',
        sentenceWithBlank: 'Upon closer analytical inspection, the consultant’s proposal proved to be built on ___ reasoning.',
        expectedAnswers: ['specious'],
        hint: 'Adjetivo culto derivado do latim (specious = sedutor por fora, falso por dentro).',
        explanation: '"Specious reasoning" refere-se a argumentos que parecem corretos e atraentes à primeira vista, mas contêm falhas lógicas internas.'
      },
      {
        id: 'w-c2-flp-2',
        type: 'fill_blank',
        prompt: 'Complete com o adjetivo que significa "transitório / de curta duração":',
        sentenceWithBlank: 'Fame in the digital age is increasingly ___, vanishing as quickly as the latest trending algorithm.',
        expectedAnswers: ['ephemeral', 'evanescent'],
        hint: 'Termo erudito de origem grega sinônimo de "fleeting" ou "short-lived".',
        explanation: '"Ephemeral" é o termo clássico para fenômenos passageiros que se dissipam em curto espaço de tempo.'
      },
      {
        id: 'w-c2-flp-3',
        type: 'fill_blank',
        prompt: 'Complete com o termo que expressa clareza absoluta e ausência de dúvida ("inequívoco"):',
        sentenceWithBlank: 'The DNA evidence provided ___ confirmation of the defendant’s innocence.',
        expectedAnswers: ['unequivocal', 'unambiguous'],
        hint: 'Antônimo culto de equivocal (un- + equivocal).',
        explanation: '"Unequivocal" significa incontestável, explícito e desprovido de qualquer ambiguidade interpretativa.'
      }
    ]
  },

  // --- 2. Organize as Palavras (Sentence Order) - 4 Atividades ---
  {
    id: 'writing-c2-order-complex-inversion',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c2',
    topic: 'Inversões Duplas e Estruturas Retóricas',
    title: 'Inversão Estilística em Prosa Ensaística',
    description: 'Ordene sentenças em que a inversão oracional serve à harmonia do período e ao equilíbrio fonético da prosa.',
    objective: 'Dominar construções de estilo avançado sem soar mecânico ou artificial.',
    instructions: 'Organize os termos para produzir o período clássico com inversão retórica.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-oci-1',
        type: 'sentence_order',
        prompt: 'Monte a frase com a estrutura "Not only did... but...": "Não apenas o autor desafiou as convenções literárias, como também redefiniu o gênero."',
        scrambledWords: ['redefined', 'conventions', 'the', 'did', 'author', 'Not', 'literary', 'only', 'challenge', 'he', 'genre', 'the', 'also'],
        expectedSentence: 'Not only did the author challenge literary conventions he also redefined the genre',
        acceptedSentences: [
          'Not only did the author challenge literary conventions, he also redefined the genre',
          'Not only did the author challenge literary conventions but he also redefined the genre'
        ],
        explanation: 'A inversão "Not only did [sujeito] [verbo base]" seguida de "he also redefined" cria um período equilibrado e imponente.'
      },
      {
        id: 'w-c2-oci-2',
        type: 'sentence_order',
        prompt: 'Monte a frase com a estrutura "Little did... know...": "Mal sabiam os pioneiros que sua descoberta transformaria o mundo."',
        scrambledWords: ['would', 'know', 'Little', 'that', 'pioneers', 'the', 'discovery', 'did', 'transform', 'their', 'the', 'world'],
        expectedSentence: 'Little did the pioneers know that their discovery would transform the world',
        acceptedSentences: [
          'Little did the pioneers know that their discovery would transform the world.'
        ],
        explanation: '"Little did [sujeito] know..." é a clássica fórmula de suspense e ironia dramática em narrativas históricas e biografias.'
      },
      {
        id: 'w-c2-oci-3',
        type: 'sentence_order',
        prompt: 'Monte o período com a fórmula condicional arcaica: "Não fosse pela intervenção decisiva da diplomacia, a guerra teria sido inevitável."',
        scrambledWords: ['intervention', 'the', 'decisive', 'Had', 'it', 'inevitable', 'for', 'been', 'war', 'not', 'the', 'been', 'have', 'would'],
        expectedSentence: 'Had it not been for the decisive intervention the war would have been inevitable',
        acceptedSentences: [
          'Had it not been for the decisive intervention, the war would have been inevitable'
        ],
        explanation: '"Had it not been for..." é a inversão no Past Perfect equivalente a "If it had not been for...".'
      }
    ]
  },
  {
    id: 'writing-c2-order-periodic-sentence',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c2',
    topic: 'Sentença Periódica (Periodic Sentences)',
    title: 'A Sentença Periódica em Prosa Reflexiva',
    description: 'Ordene sentenças periódicas em que a oração principal é suspensa deliberadamente até o final do período para maximizar o impacto.',
    objective: 'Aprender a controlar o clímax da frase retendo a ideia central até o ponto final.',
    instructions: 'Coloque as palavras na ordem que preserva o suspense sintático até a oração principal.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-ops-1',
        type: 'sentence_order',
        prompt: 'Monte a sentença periódica: "Apesar de todos os obstáculos imprevistos e da oposição inicial, a ponte foi finalmente inaugurada."',
        scrambledWords: ['opposition', 'initial', 'obstacles', 'the', 'the', 'bridge', 'and', 'unforeseen', 'all', 'Despite', 'inaugurated', 'was', 'finally'],
        expectedSentence: 'Despite all unforeseen obstacles and initial opposition the bridge was finally inaugurated',
        acceptedSentences: [
          'Despite all unforeseen obstacles and initial opposition, the bridge was finally inaugurated'
        ],
        explanation: 'A oração principal ("the bridge was finally inaugurated") aparece no término da frase após os qualificadores, criando o clímax expressivo.'
      },
      {
        id: 'w-c2-ops-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Compreendendo tanto a magnitude da crise quanto a urgência da ação, o comitê votou por unanimidade."',
        scrambledWords: ['committee', 'urgency', 'crisis', 'the', 'action', 'Understanding', 'unanimously', 'the', 'both', 'voted', 'magnitude', 'and', 'the', 'of', 'the'],
        expectedSentence: 'Understanding both the magnitude of the crisis and the urgency of action the committee voted unanimously',
        acceptedSentences: [
          'Understanding both the magnitude of the crisis and the urgency of action, the committee voted unanimously'
        ],
        explanation: 'A longa oração participial introdutória prepara o terreno para a ação resolutiva final.'
      },
      {
        id: 'w-c2-ops-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Seja pela riqueza de sua prosa ou pela audácia de suas ideias, a obra permanece inesquecível."',
        scrambledWords: ['daring', 'its', 'unforgettable', 'of', 'Whether', 'richness', 'prose', 'or', 'the', 'its', 'the', 'ideas', 'of', 'by', 'work', 'remains', 'the'],
        expectedSentence: 'Whether by the richness of its prose or the daring of its ideas the work remains unforgettable',
        acceptedSentences: [
          'Whether by the richness of its prose or the daring of its ideas, the work remains unforgettable'
        ],
        explanation: 'A estrutura simétrica "Whether by X or by Y" introduz a conclusão categórica "the work remains unforgettable".'
      }
    ]
  },
  {
    id: 'writing-c2-order-chiasmus-parallelism',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c2',
    topic: 'Quiasmo e Simetria Retórica Avançada',
    title: 'Figuras de Estilo e Quiasmo em Ensaios',
    description: 'Ordene períodos construídos com inversão cruzada de termos (quiasmo) e paralelismo antitético.',
    objective: 'Apreciar e reproduzir recursos poéticos e retóricos em prosa argumentativa de nível de proficiência.',
    instructions: 'Organize as palavras reproduzindo a simetria cruzada da sentença.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-ocp-1',
        type: 'sentence_order',
        prompt: 'Monte o aforismo com antítese: "Devemos trabalhar para viver, e não viver exclusivamente para trabalhar."',
        scrambledWords: ['live', 'work', 'to', 'work', 'live', 'We', 'must', 'to', 'not', 'and'],
        expectedSentence: 'We must work to live and not live to work',
        acceptedSentences: [
          'We must work to live, and not live to work',
          'We must work to live and not live to work.'
        ],
        explanation: 'O quiasmo inverte a ordem dos termos (work to live -> live to work) para fixar a máxima ética com elegância memorável.'
      },
      {
        id: 'w-c2-ocp-2',
        type: 'sentence_order',
        prompt: 'Monte a reflexão crítica: "A verdadeira erudição consiste não em saber tudo, mas em reconhecer a extensão de nossa ignorância."',
        scrambledWords: ['knowing', 'everything', 'consists', 'our', 'True', 'not', 'in', 'scholarship', 'recognizing', 'in', 'ignorance', 'but', 'the', 'extent', 'of'],
        expectedSentence: 'True scholarship consists not in knowing everything but in recognizing the extent of our ignorance',
        acceptedSentences: [
          'True scholarship consists not in knowing everything, but in recognizing the extent of our ignorance'
        ],
        explanation: 'A construção "not in X but in Y" organiza a antítese filosófica com clareza impecável.'
      },
      {
        id: 'w-c2-ocp-3',
        type: 'sentence_order',
        prompt: 'Monte a máxima: "A simplicidade é a sofisticação máxima."',
        scrambledWords: ['is', 'ultimate', 'sophistication', 'Simplicity', 'the'],
        expectedSentence: 'Simplicity is the ultimate sophistication',
        acceptedSentences: [
          'Simplicity is the ultimate sophistication.'
        ],
        explanation: 'Uma sentença lapidar onde a brevidade gramatical transmite densidade conceitual sem ornamentos supérfluos.'
      }
    ]
  },
  {
    id: 'writing-c2-order-subtle-qualification',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'c2',
    topic: 'Qualificação Sutil e Matiz Interpretativo',
    title: 'Sentenças com Modulação e Nuance Semântica',
    description: 'Ordene sentenças que contêm restrições delicadas, salvaguardas de prudência e qualificações epistemológicas.',
    objective: 'Evitar dogmatismos através de ponderações sutis no nível C2.',
    instructions: 'Coloque as palavras na ordem correta, posicionando as expressões de atenuação com precisão.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-osq-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Isso não quer dizer que o modelo tradicional esteja desprovido de todo mérito."',
        scrambledWords: ['model', 'merit', 'say', 'is', 'not', 'This', 'the', 'traditional', 'devoid', 'to', 'that', 'all', 'of'],
        expectedSentence: 'This is not to say that the traditional model is devoid of all merit',
        acceptedSentences: [
          'This is not to say that the traditional model is devoid of all merit.'
        ],
        explanation: '"This is not to say that..." é uma das fórmulas de modulação mais refinadas do ensaio moderno em inglês.'
      },
      {
        id: 'w-c2-osq-2',
        type: 'sentence_order',
        prompt: 'Monte a ponderação: "Em nenhuma hipótese essa observação preliminar deve ser interpretada como um veredito definitivo."',
        scrambledWords: ['construed', 'be', 'verdict', 'as', 'observation', 'a', 'this', 'preliminary', 'By', 'means', 'definitive', 'no', 'should'],
        expectedSentence: 'By no means should this preliminary observation be construed as a definitive verdict',
        acceptedSentences: [
          'By no means should this preliminary observation be construed as a definitive verdict.'
        ],
        explanation: '"By no means should... be construed as..." combina inversão negativa com o verbo culto "construe" (interpretar/entender).'
      },
      {
        id: 'w-c2-osq-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Resta saber se a nova política atenderá às expectativas populares."',
        scrambledWords: ['popular', 'policy', 'will', 'It', 'to', 'remains', 'expectations', 'whether', 'seen', 'new', 'be', 'the', 'meet'],
        expectedSentence: 'It remains to be seen whether the new policy will meet popular expectations',
        acceptedSentences: [
          'It remains to be seen whether the new policy will meet popular expectations.'
        ],
        explanation: '"It remains to be seen whether..." expressa dúvida razoável com elegância atemporal.'
      }
    ]
  },

  // --- 3. Corrija o Erro (Find and Fix Error) - 4 Atividades ---
  {
    id: 'writing-c2-error-stylistic-redundancy',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c2',
    topic: 'Pleonasmos e Prolixidade Estilística',
    title: 'Poda de Pleonasmos e Redundâncias em Prosa Culta',
    description: 'Identifique e elimine redundâncias sutis que empobrecem o estilo (ex: "revert back", "close proximity", "advance forward").',
    objective: 'Alcançar concisão cirúrgica e rigor estilístico próprio do nível C2.',
    instructions: 'Substitua a expressão redundante pelo termo preciso e conciso.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-esr-1',
        type: 'find_fix_error',
        prompt: 'Elimine a redundância pleonástica com o verbo "revert":',
        sentenceWithError: 'If the experimental protocol fails to stabilize the system, we will revert back to our previous operational parameters.',
        incorrectPart: 'revert back',
        correctForm: 'revert',
        explanation: '"Revert" já traz o prefixo "re-" que significa retornar ou voltar atrás; "revert back" é um pleonasmo comum que deve ser podado para "revert".'
      },
      {
        id: 'w-c2-esr-2',
        type: 'find_fix_error',
        prompt: 'Elimine o pleonasmo na expressão de proximidade espacial:',
        sentenceWithError: 'The boutique hotel is situated in close proximity to the central botanical gardens.',
        incorrectPart: 'in close proximity to',
        correctForm: 'near',
        explanation: 'Embora "in close proximity to" seja usado burocraticamente, "near" ou "close to" é estilisticamente mais limpo e livre de redundância.'
      },
      {
        id: 'w-c2-esr-3',
        type: 'find_fix_error',
        prompt: 'Elimine o pleonasmo de consenso unânime:',
        sentenceWithError: 'The scientific assembly reached an unanimous consensus regarding the causal link between emissions and warming.',
        incorrectPart: 'unanimous consensus',
        correctForm: 'consensus',
        explanation: 'Por definição, "consensus" (consenso) já denota acordo geral; adjetivá-lo como "unanimous consensus" constitui redundância conceitual.'
      }
    ]
  },
  {
    id: 'writing-c2-error-idiom-corruption',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c2',
    topic: 'Corrupção de Expressões Idiomáticas Canônicas',
    title: 'Integridade Lexical de Expressões Idiomáticas Clássicas',
    description: 'Identifique termos alterados em expressões consagradas que desnaturam o sentido pretendido.',
    objective: 'Preservar a forma canônica de expressões inglesas de alto repertório.',
    instructions: 'Substitua a palavra corrompida pelo vocábulo original da expressão idiomática.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-eic-1',
        type: 'find_fix_error',
        prompt: 'Corrija a expressão que significa "restringir / frear excessos" (to keep a tight ___ on):',
        sentenceWithError: 'The treasury secretary insisted on keeping a tight rope on speculative municipal expenditures.',
        incorrectPart: 'rope',
        correctForm: 'rein',
        explanation: 'A metáfora hípica original é "to keep a tight rein on" (manter rédeas curtas em), e não "tight rope".'
      },
      {
        id: 'w-c2-eic-2',
        type: 'find_fix_error',
        prompt: 'Corrija a expressão que significa "uma questão de princípios / ponto de honra" (a point ___ honor):',
        sentenceWithError: 'The venerable scholar made it a point to honor to credit all archival assistants in the introduction.',
        incorrectPart: 'point to honor',
        correctForm: 'point of honor',
        explanation: 'A expressão canônica é "to make it a point of honor" (fazer questão de honra).'
      },
      {
        id: 'w-c2-eic-3',
        type: 'find_fix_error',
        prompt: 'Corrija a expressão que significa "jogar a cautela ao vento / arriscar-se" (throw caution to the ___):',
        sentenceWithError: 'In an unprecedented display of daring, the tech entrepreneur decided to throw caution to the air and fund the venture.',
        incorrectPart: 'air',
        correctForm: 'wind',
        explanation: 'A locução idiomática consolidada é "to throw caution to the wind" (jogar a cautela ao vento).'
      }
    ]
  },
  {
    id: 'writing-c2-error-dangling-absolutes',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c2',
    topic: 'Orações Absolutas e Concordância Sintática',
    title: 'Construção Correta de Orações Absolutas',
    description: 'Identifique e corrija orações absolutas malformadas ou com preposições intrusas que quebram a independência sintática.',
    objective: 'Dominar a oração absoluta (Nominative Absolute) sem introduzir preposições desnecessárias.',
    instructions: 'Remova ou substitua o termo que compromete a oração absoluta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-eda-1',
        type: 'find_fix_error',
        prompt: 'Corrija a oração absoluta removendo a preposição intrusa "With" antes de substantivo com particípio próprio:',
        sentenceWithError: 'With all matters considered, the board elected to proceed with the planned corporate restructuring.',
        incorrectPart: 'With all matters considered',
        correctForm: 'All matters considered',
        explanation: 'Em estilo elevado, a oração absoluta pura dispensa o coloquial "With": "All matters considered, the board elected to proceed...".'
      },
      {
        id: 'w-c2-eda-2',
        type: 'find_fix_error',
        prompt: 'Corrija a forma verbal da oração absoluta para a forma particípio que estabelece a condição causal:',
        sentenceWithError: 'The weather permit, the transatlantic voyage will commence at dawn tomorrow.',
        incorrectPart: 'permit',
        correctForm: 'permitting',
        explanation: 'A expressão absoluta padrão é "Weather permitting" (se o tempo permitir), com o particípio presente em "-ing".'
      },
      {
        id: 'w-c2-eda-3',
        type: 'find_fix_error',
        prompt: 'Corrija o pronome na oração absoluta iniciada pelo substantivo temático:',
        sentenceWithError: 'His duties having been completed, him was permitted to retire from active military service.',
        incorrectPart: 'him was permitted',
        correctForm: 'he was permitted',
        explanation: 'O sujeito da oração principal após a oração absoluta deve estar no caso reto: "he was permitted", nunca o oblíquo "him".'
      }
    ]
  },
  {
    id: 'writing-c2-error-stylistic-cliches',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'c2',
    topic: 'Substituição de Clichês por Expressões Autorais',
    title: 'Eliminação de Lugares-Comuns e Clichês',
    description: 'Identifique chavões desgastados pelo uso e substitua-os por formulações com densidade crítica autêntica.',
    objective: 'Elevar a autenticidade expressiva da escrita no ápice da proficiência linguística.',
    instructions: 'Substitua o clichê desgastado pelo termo sóbrio e reflexivo correspondente.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-esc-1',
        type: 'find_fix_error',
        prompt: 'Substitua o clichê jornalístico "the tip of the iceberg" por termo técnico e sóbrio em um relatório sobre fraude fiscal:',
        sentenceWithError: 'The unannounced audit revealed irregular transactions that represented merely the tip of the iceberg of systemic evasion.',
        incorrectPart: 'the tip of the iceberg of',
        correctForm: 'an initial indicator of',
        explanation: 'Expressões como "the tip of the iceberg" são clichês que enfraquecem a sobriedade de um relatório analítico; "an initial indicator of" ou "a fraction of" traz rigor.'
      },
      {
        id: 'w-c2-esc-2',
        type: 'find_fix_error',
        prompt: 'Substitua a expressão gasta "think outside the box" por formulação elegante:',
        sentenceWithError: 'The artistic director challenged the young composers to think outside the box when orchestrating the overture.',
        incorrectPart: 'think outside the box',
        correctForm: 'innovate boldly',
        explanation: '"Think outside the box" é um jargão corporativo desgastado; "innovate boldly", "depart from convention" ou "transcend established norms" reflete a maturidade C2.'
      },
      {
        id: 'w-c2-esc-3',
        type: 'find_fix_error',
        prompt: 'Substitua o chavão "a double-edged sword" por termo analítico preciso:',
        sentenceWithError: 'High-speed algorithmic trading has proven to be a double-edged sword for international capital markets.',
        incorrectPart: 'a double-edged sword',
        correctForm: 'fundamentally paradoxical',
        explanation: 'Substituir o clichê "double-edged sword" por "fundamentally paradoxical" ou "both an asset and a systemic liability" confere sofisticação ao diagnóstico.'
      }
    ]
  },

  // --- 4. Escreva sua Resposta (Open Prompt) - 3 Atividades ---
  {
    id: 'writing-c2-open-aphoristic-synthesis',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'c2',
    topic: 'Síntese Aforística e Densidade Retórica',
    title: 'Formulações Aforísticas e Pensamento Crítico',
    description: 'Redija uma máxima concisa e profunda sintetizando a relação entre memória histórica e identidade cultural.',
    objective: 'Produzir frases lapidares de alta densidade sem cair na afetação ou na obscuridade.',
    instructions: 'Escreva um período único que combine elegância rítmica, concisão e profundidade reflexiva.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-op-aph-1',
        type: 'open_prompt',
        prompt: 'Escreva uma reflexão lapidar afirmando que uma sociedade que esquece sua história condena sua imaginação de futuro:',
        modelAnswer: 'A society that severs its ties with the past inevitably impoverishes its capacity to imagine a meaningful future.',
        acceptedAnswers: [
          'A society that forgets its history inevitably impoverishes its future.',
          'To sever ties with one\'s history is to forfeit the capacity to envision the future.',
          'A culture detached from its historical memory cannot meaningfully chart its future course.'
        ],
        hint: 'Use verbos densos como "severs", "impoverishes" ou "forfeits".',
        explanation: 'No nível C2, a escolha lexical precisa ("severs", "impoverishes") substitui construções longas com extraordinário poder expressivo.'
      }
    ]
  },
  {
    id: 'writing-c2-open-diplomatic-rebuttal',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'c2',
    topic: 'Contraponto Diplomático e Ironia Fina',
    title: 'A Arte da Reserva Diplomática e Ironia Polida',
    description: 'Redija uma intervenção diplomática em que você discorda frontalmente da postura de uma instituição sem elevar o tom ou ferir a etiqueta.',
    objective: 'Demonstrar autoridade intelectual mediante o uso de atenuantes e ironia indireta perfeitamente controlada.',
    instructions: 'Escreva uma sentença cortês que expresse profundo ceticismo em relação a uma promessa corporativa grandiosa.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-op-dip-1',
        type: 'open_prompt',
        prompt: 'Expresse com ironia sutil e polidez impecável que as grandiosas promessas da empresa ainda carecem de comprovação prática:',
        modelAnswer: 'While the leadership’s eloquence is beyond question, the tangible manifestation of these commitments remains conspicuously absent.',
        acceptedAnswers: [
          'While the company\'s ambitious rhetoric is commendable, concrete evidence of progress remains conspicuously absent.',
          'Eloquent though the corporate declarations may be, practical implementation has yet to materialize.',
          'While we admire the lofty aspirations expressed today, empirical proof of their feasibility remains elusive.'
        ],
        hint: 'Combine um elogio aparente ("eloquence is beyond question") com o contraste sutil ("remains conspicuously absent").',
        explanation: '"Conspicuously absent" (conspicuamente ausente) é um clássico exemplo de polidez britânica/diplomática para indicar que algo simplesmente não existe.'
      }
    ]
  },
  {
    id: 'writing-c2-open-stylistic-pruning',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'c2',
    topic: 'Depuração Estilística e Clareza Cristalina',
    title: 'Depuração de Prosa Vulgarizada para Registro Cristalino',
    description: 'Reescreva uma frase prolixa e burocrática, convertendo-a em uma declaração límpida, firme e memorável.',
    objective: 'Exercer a suprema habilidade da escrita: dizer mais com menos palavras e com impacto estético superior.',
    instructions: 'Reescreva a ideia em uma única oração elegante, direta e de ritmo impecável.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-c2-op-prune-1',
        type: 'open_prompt',
        prompt: 'Reescreva a ideia "Due to the fact that people have fear, they frequently make bad decisions that they later regret" com elegância ensaística:',
        modelAnswer: 'Fear remains the swiftest architect of enduring regret.',
        acceptedAnswers: [
          'Decisions born of fear inevitably foster enduring regret.',
          'Fear is the parent of hasty choices and long regrets.',
          'Actions dictated by fear seldom fail to yield lasting remorse.'
        ],
        hint: 'Transforme o raciocínio em uma metáfora nominal condensada (ex: "Fear remains the swiftest architect of...").',
        explanation: 'A síntese poética e filosófica demonstra a liberdade criativa que coroa a proficiência C2.'
      }
    ]
  }
];

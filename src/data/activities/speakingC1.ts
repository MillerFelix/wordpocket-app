import { Activity, SpeakingQuestion } from '../../types/activity';

export const SPEAKING_C1: Activity<SpeakingQuestion>[] = [
  // --- 1. Ouça e Imite (Listen and Repeat) - 4 Atividades ---
  {
    id: 'speaking-c1-shadow-inverted-conditionals',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c1',
    topic: 'Gramática Formal & Oratória de Liderança',
    title: 'Condicionais Invertidas e Solenidade Institucional',
    description: 'Aprenda a entoar estruturas oratórias refinadas com inversão condicional (Should you require, Had we not acted, Were it not for).',
    objective: 'Articular orações condicionais sem "if" com a solenidade e o ritmo exigidos em discursos de alto escalão.',
    instructions: 'Ouça o modelo diplomático, observe as pausas e reproduza a frase com postura de liderança.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Pronunciamento oficial de liderança executiva em fórum global',
      checklist: [
        'Acento enfático no verbo auxiliar invertido no início da oração',
        'Pausa deliberada na cesura entre a condição e a oração principal',
        'Tom grave, seguro e destituído de hesitação'
      ]
    },
    questions: [
      {
        id: 's-c1-ic-1',
        type: 'speaking_item',
        itemTitle: 'Condicional Passada Invertida',
        contextScenario: 'Destaque que a intervenção tempestiva da equipe preveniu um colapso financeiro sistêmico.',
        modelAudioText: 'Had our compliance officers not identified the accounting anomaly immediately, the institutional fallout would have been catastrophic.',
        speechRate: 0.95,
        targetPhrase: 'Had our compliance officers not identified the accounting anomaly immediately, the institutional fallout would have been catastrophic.',
        phoneticFocus: 'Inversão enfática "Had our compliance officers not identified..." (/hæd ˈaʊər kəmˈplaɪəns/).',
        pronunciationTip: 'Inicie com "Had our" firme e rápido. Pause brevemente após "immediately" antes de projetar a oração conclusiva.',
        translation: 'Não tivessem nossos auditores de conformidade identificado a anomalia contábil imediatamente, o abalo institucional teria sido catastrófico.',
        explanation: 'A inversão "Had we not..." substitui "If we had not..." elevando imediatamente o registro a nível C1.'
      },
      {
        id: 's-c1-ic-2',
        type: 'speaking_item',
        itemTitle: 'Condicional Presente Invertida',
        contextScenario: 'Reconheça a dedicação de parceiros comunitários sem os quais o projeto teria fracassado.',
        modelAudioText: 'Were it not for the unflagging perseverance of our local community partners, this conservation milestone would remain unattainable.',
        speechRate: 0.95,
        targetPhrase: 'Were it not for the unflagging perseverance of our local community partners, this conservation milestone would remain unattainable.',
        phoneticFocus: '"Were it not for" (/wɜːr ɪt nɑːt fər/) e "unflagging perseverance" (/ʌnˈflæɡɪŋ ˌpɜːrsəˈvɪrəns/).',
        pronunciationTip: 'Conecte "Were-it-not-for" como um bloco fluido e melodicamente contínuo.',
        translation: 'Não fosse pela perseverança incansável dos nossos parceiros comunitários locais, este marco de conservação continuaria inalcançável.',
        explanation: '"Were it not for..." é a construção culta equivalente a "If it were not for...".'
      },
      {
        id: 's-c1-ic-3',
        type: 'speaking_item',
        itemTitle: 'Condicional Futura Invertida',
        contextScenario: 'Coloque a equipe jurídica à disposição para dirimir eventuais dúvidas de conformidade.',
        modelAudioText: 'Should any unforeseen ambiguities arise concerning the revised statutes, our legal counsel stands ready to provide immediate clarification.',
        speechRate: 0.95,
        targetPhrase: 'Should any unforeseen ambiguities arise concerning the revised statutes, our legal counsel stands ready to provide immediate clarification.',
        phoneticFocus: '"Should any unforeseen ambiguities arise" (/ʃʊd ˈeni ˌʌnfɔːrˈsiːn ˌæmbɪˈɡjuːətiz/).',
        pronunciationTip: '"Should any" confere sofisticação; termine com tom afirmativo descendente em "clarification".',
        translation: 'Caso surja qualquer ambiguidade imprevista referente aos estatutos revisados, nossa assessoria jurídica está pronta para prestar esclarecimentos imediatos.',
        explanation: '"Should any... arise" é o padrão por excelência de polidez corporativa internacional.'
      }
    ]
  },
  {
    id: 'speaking-c1-shadow-antithesis-cadence',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c1',
    topic: 'Retórica Avançada & Antítese',
    title: 'Cadência Rítmica e Antítese no Discurso Oratório',
    description: 'Domine o poder de construções antitéticas ("Not because it is easy, but because the alternative is unconscionable").',
    objective: 'Explorar a oposição de ideias com modulação simétrica de intensidade e ritmo vocal.',
    instructions: 'Ouça o discurso de alto impacto e reproduza o contraste retórico com autoridade.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Discurso de abertura em simpósio internacional sobre ética e sustentabilidade',
      checklist: [
        'Intensidade contida na primeira oração (a negação)',
        'Crescimento melódico e enfático na segunda oração (a afirmação)',
        'Precisão na articulação de termos conceituais densos'
      ]
    },
    questions: [
      {
        id: 's-c1-ac-1',
        type: 'speaking_item',
        itemTitle: 'Antítese de Propósito',
        contextScenario: 'Defenda uma reforma ambiental difícil demonstrando que a inação é moralmente inadmissível.',
        modelAudioText: 'We undertake this structural transformation not because it is politically convenient, but because moral inaction is simply unconscionable.',
        speechRate: 0.95,
        targetPhrase: 'We undertake this structural transformation not because it is politically convenient, but because moral inaction is simply unconscionable.',
        phoneticFocus: 'Contraste entre "politically convenient" e "moral inaction is simply unconscionable" (/ʌnˈkɑːnʃənəbl/).',
        pronunciationTip: 'Atenção à pronúncia de "unconscionable": /ʌn-KON-shun-uh-bl/. Dê peso à palavra.',
        translation: 'Assumimos esta transformação estrutural não porque seja politicamente conveniente, mas porque a inércia moral é simplesmente inadmissível.',
        explanation: 'A antítese "not because X, but because Y" é um dos recursos mais persuasivos da língua inglesa.'
      },
      {
        id: 's-c1-ac-2',
        type: 'speaking_item',
        itemTitle: 'Antítese de Valor',
        contextScenario: 'Destaque que a verdadeira riqueza de uma organização reside em seu capital humano e não em ativos materiais.',
        modelAudioText: 'The enduring vitality of an academic institution is measured not by the grandeur of its architecture, but by the intellectual integrity of its graduates.',
        speechRate: 0.95,
        targetPhrase: 'The enduring vitality of an academic institution is measured not by the grandeur of its architecture, but by the intellectual integrity of its graduates.',
        phoneticFocus: '"grandeur of its architecture" (/ˈɡrændʒər/) contraposto a "intellectual integrity".',
        pronunciationTip: '"grandeur" pronuncia-se /ˈɡrændʒər/ ou /ˈɡrændjʊər/. Evite pronunciar com sotaque francês artificial.',
        translation: 'A vitalidade duradoura de uma instituição acadêmica é medida não pela imponência de sua arquitetura, mas pela integridade intelectual de seus egressos.',
        explanation: 'Estruturas balanceadas com "not by... but by..." produzem ressonância memorável no ouvinte.'
      },
      {
        id: 's-c1-ac-3',
        type: 'speaking_item',
        itemTitle: 'Antítese de Liderança',
        contextScenario: 'Conclua definindo liderança autêntica como serviço coletivo e não como privilégio de autoridade.',
        modelAudioText: 'Genuine leadership consists not in shielding oneself from accountability, but in absorbing systemic uncertainty on behalf of the team.',
        speechRate: 0.95,
        targetPhrase: 'Genuine leadership consists not in shielding oneself from accountability, but in absorbing systemic uncertainty on behalf of the team.',
        phoneticFocus: '"shielding oneself from accountability" versus "absorbing systemic uncertainty".',
        pronunciationTip: 'Fale com convicção serena em "on behalf of the team".',
        translation: 'A liderança autêntica consiste não em blindar a si mesmo da responsabilidade, mas em absorver a incerteza sistêmica em nome da equipe.',
        explanation: 'Redefinir conceitos no encerramento de falas consolida autoridade ética perante o público.'
      }
    ]
  },
  {
    id: 'speaking-c1-shadow-regulatory-disclaimers',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c1',
    topic: 'Direito & Governança Corporativa',
    title: 'Ressalvas Legais e Salvaguardas Regulatórias',
    description: 'Treine a leitura e enunciação fluida de advertências jurídicas formais ("Without prejudice to...", "Notwithstanding prior assertions...").',
    objective: 'Emitir declarações jurídicas e financeiras complexas com dicção impecável e ritmo contínuo.',
    instructions: 'Ouça o pronunciamento técnico e reproduza a frase preservando a clareza jurídica.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Sessão solene de divulgação de parecer de auditoria e governança',
      checklist: [
        'Articulação límpida de fórmulas jurídicas fixas',
        'Controle respiratório em frases longas e subordinadas',
        'Imparcialidade e neutralidade emocional de tom'
      ]
    },
    questions: [
      {
        id: 's-c1-rd-1',
        type: 'speaking_item',
        itemTitle: 'Ressalva de Prejuízo Jurídico',
        contextScenario: 'Apresente uma proposta de acordo sem abrir mão de direitos litigiosos futuros.',
        modelAudioText: 'This exploratory memorandum is submitted strictly without prejudice to our client accrued statutory remedies.',
        speechRate: 0.95,
        targetPhrase: 'This exploratory memorandum is submitted strictly without prejudice to our client accrued statutory remedies.',
        phoneticFocus: '"strictly without prejudice to" (/ˈwɪðaʊt ˈpredʒədɪs tuː/) e "accrued statutory remedies" (/əˈkruːd ˈstætʃətɔːri/).',
        pronunciationTip: '"prejudice" tem a primeira sílaba forte: /ˈpredʒədɪs/. Não confunda com o falso cognato prejudicial.',
        translation: 'Este memorando exploratório é apresentado estritamente sem prejuízo dos direitos e recursos legais já adquiridos pelo nosso cliente.',
        explanation: '"Without prejudice" é a cláusula jurídica indispensável para proteger posições negociadoras.'
      },
      {
        id: 's-c1-rd-2',
        type: 'speaking_item',
        itemTitle: 'Conformidade Fiduciária',
        contextScenario: 'Declare a conformidade da empresa com padrões internacionais de transparência contábil.',
        modelAudioText: 'All forward-looking financial disclosures remain subject to external corroboration by our independent auditing committee.',
        speechRate: 0.95,
        targetPhrase: 'All forward-looking financial disclosures remain subject to external corroboration by our independent auditing committee.',
        phoneticFocus: '"forward-looking disclosures" (/dɪsˈkloʊʒərz/) e "corroboration" (/kəˌrɑːbəˈreɪʃn/).',
        pronunciationTip: 'Mantenha o fluxo em "remain subject to external corroboration".',
        translation: 'Todas as projeções financeiras prospectivas permanecem sujeitas a confirmação externa por nosso comitê de auditoria independente.',
        explanation: 'Fórmulas como "remain subject to..." mitigam responsabilidade legal sobre previsões de mercado.'
      },
      {
        id: 's-c1-rd-3',
        type: 'speaking_item',
        itemTitle: 'Ressalva de Não-Endosso',
        contextScenario: 'Esclareça que a menção a terceiros em um relatório não constitui vínculo institucional.',
        modelAudioText: 'Citation of supplementary empirical literature does not imply formal institutional endorsement of the authors underlying methodology.',
        speechRate: 0.95,
        targetPhrase: 'Citation of supplementary empirical literature does not imply formal institutional endorsement of the authors underlying methodology.',
        phoneticFocus: '"supplementary empirical literature" e "institutional endorsement" (/ˌɪnstɪˈtuːʃənl ɪnˈdɔːrsmənt/).',
        pronunciationTip: '"empirical" (/ɪmˈpɪrɪkl/). Dicção clara nos grupos consonantais de "underlying methodology".',
        translation: 'A citação de literatura empírica complementar não implica endosso institucional formal da metodologia adotada pelos autores.',
        explanation: 'Expressar isenção institucional com precisão protege a credibilidade acadêmica e legal.'
      }
    ]
  },
  {
    id: 'speaking-c1-shadow-paradoxical-framing',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c1',
    topic: 'Filosofia da Ciência & Paradoxo',
    title: 'Enquadramento Entonacional de Proposições Paradoxais',
    description: 'Aprenda a vocalizar ideias contraintuitivas ("Paradoxically, increasing autonomy accelerates compliance") com impacto.',
    objective: 'Sinalizar através da curva melódica que a conclusão subverterá a intuição comum do interlocutor.',
    instructions: 'Ouça a modulação sutil do paradoxo e grave sua repetição com clareza dialética.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Palestra em conferência de psicologia comportamental e teoria de sistemas',
      checklist: [
        'Entonação levemente suspensa no advérbio inicial ("Paradoxically,")',
        'Destaque no termo antagônico para evidenciar a contradição aparente',
        'Resolução firme que esclarece a coerência interna da ideia'
      ]
    },
    questions: [
      {
        id: 's-c1-pf-1',
        type: 'speaking_item',
        itemTitle: 'Paradoxo da Escolha',
        contextScenario: 'Explique que a proliferação excessiva de alternativas paralisa a decisão em vez de libertar o consumidor.',
        modelAudioText: 'Paradoxically, multiplying consumer options does not empower decision-making; it precipitates analytical paralysis.',
        speechRate: 0.95,
        targetPhrase: 'Paradoxically, multiplying consumer options does not empower decision-making; it precipitates analytical paralysis.',
        phoneticFocus: '"Paradoxically" (/ˌpærəˈdɑːksɪkli/) e "precipitates analytical paralysis" (/prɪˈsɪpɪteɪts/).',
        pronunciationTip: 'Abra a frase com curiosidade em "Paradoxically," e conclua com tom sóbrio em "paralysis".',
        translation: 'Paradoxalmente, multiplicar as opções do consumidor não fortalece a tomada de decisão; isso precipita a paralisia analítica.',
        explanation: 'Enunciar teses contraintuitivas exige modular a voz para capturar o fascínio intelectual da plateia.'
      },
      {
        id: 's-c1-pf-2',
        type: 'speaking_item',
        itemTitle: 'Paradoxo da Comunicação Digital',
        contextScenario: 'Aponte como a hiperconectividade tecnológica aprofundou o isolamento emocional coletivo.',
        modelAudioText: 'Counterintuitively, instantaneous global connectivity has fostered unprecedented social alienation rather than authentic communion.',
        speechRate: 0.95,
        targetPhrase: 'Counterintuitively, instantaneous global connectivity has fostered unprecedented social alienation rather than authentic communion.',
        phoneticFocus: '"Counterintuitively" (/ˌkaʊntərɪnˈtuːɪtɪvli/) e "unprecedented social alienation" (/ʌnˈpresɪdentɪd/).',
        pronunciationTip: '"Counterintuitively" é longo e sonoro: conecte as sílabas sem truncar.',
        translation: 'De forma contraintuitiva, a conectividade global instantânea fomentou uma alienação social sem precedentes em vez de comunhão autêntica.',
        explanation: 'Advérbios como "Counterintuitively" preparam o ouvinte para uma inversão de expectativas.'
      },
      {
        id: 's-c1-pf-3',
        type: 'speaking_item',
        itemTitle: 'Paradoxo da Eficiência Organizacional',
        contextScenario: 'Demonstre que a rigidez extrema em processos elimina a capacidade adaptativa em crises.',
        modelAudioText: 'Curiously enough, excessive procedural rigidity renders organizations brittle rather than resilient when unforeseen disruptions occur.',
        speechRate: 0.95,
        targetPhrase: 'Curiously enough, excessive procedural rigidity renders organizations brittle rather than resilient when unforeseen disruptions occur.',
        phoneticFocus: '"renders organizations brittle" (/ˈbrɪtl/) versus "resilient" (/rɪˈzɪliənt/).',
        pronunciationTip: 'Contraste nítido entre "brittle" (frágil/quebradiço) e "resilient" (flexível/resistente).',
        translation: 'Curiosamente, a rigidez procedimental excessiva torna as organizações quebradiças em vez de resilientes quando ocorrem imprevistos.',
        explanation: 'Construir oposições conceituais finas demonstra domínio absoluto da retórica de nível C1.'
      }
    ]
  },

  // --- 2. Treino de Sons (Sound Training) - 4 Atividades ---
  {
    id: 'speaking-c1-sound-polysyllabic-elision',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c1',
    topic: 'Fonologia Avançada: Elisão de Sílabas Átonas',
    title: 'Elisão e Síncope de Sílabas Intermediárias em Palavras Polissilábicas',
    description: 'Elimine sílabas escritas que nativos cultos omitem na fala fluida (comfortable -> /ˈkʌmftəbl/, temperature -> /ˈtemprətʃər/).',
    objective: 'Produzir a supressão natural de vogais átonas internas (síncope) sem soar artificialmente soletrado.',
    instructions: 'Identifique o número real de sílabas faladas no teste auditivo e grave a frase modelo com elisão nativa.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Laboratório de redução fonológica avançada para falantes de nível proficiente',
      focusSound: 'Em palavras como "comfortable", "temperature" e "vegetable", a vogal intermediária fraca é completamente suprimida na pronúncia padrão.',
      checklist: [
        'Pronunciar "comfortable" em 3 sílabas (/ˈkʌmftəbl/), não 4',
        'Pronunciar "temperature" em 3 sílabas (/ˈtemprətʃər/), não 4',
        'Manter o ritmo ágil e a tônica vigorosa na sílaba inicial'
      ]
    },
    questions: [
      {
        id: 's-c1-pe-1',
        type: 'speaking_item',
        itemTitle: 'Elisão: Comfortable',
        contextScenario: 'Frase cotidiana com o termo "comfortable" pronunciado com elegância britânica ou norte-americana.',
        modelAudioText: 'We found a comfortable armchair by the reading lamp.',
        speechRate: 0.92,
        targetPhrase: 'We found a comfortable armchair by the reading lamp.',
        phoneticFocus: '"comfortable" pronuncia-se /ˈkʌmftəbl/ (com 3 sílabas: cumf-ter-bl).',
        pronunciationTip: 'Nunca diga "com-for-ta-ble". O "or" e o "ta" se fundem: /ˈkʌmftəbl/.',
        translation: 'Encontramos uma poltrona confortável perto da lâmpada de leitura.',
        explanation: 'A síncope da vogal fraca em "comfortable" é um divisor de águas entre o intermediário e o avançado.',
        perceptionQuestion: {
          questionText: 'Quantas sílabas são pronunciadas na palavra "comfortable" na dicção nativa padrão?',
          audioText: 'comfortable',
          options: [
            { id: 'A', text: 'Três sílabas: /ˈkʌmf-tə-bl/' },
            { id: 'B', text: 'Quatro sílabas: /ˈkʌm-fər-tə-bl/' },
            { id: 'C', text: 'Cinco sílabas: /kɑːm-fɔːr-teɪ-bl-e/' },
            { id: 'D', text: 'Duas sílabas' }
          ],
          correctOptionId: 'A',
          explanation: 'Na pronúncia padrão culta, a vogal átona central é elidida, resultando em 3 sílabas: /ˈkʌmftəbl/.'
        }
      },
      {
        id: 's-c1-pe-2',
        type: 'speaking_item',
        itemTitle: 'Elisão: Temperature',
        contextScenario: 'Frase científica sobre a variação térmica de um ecossistema.',
        modelAudioText: 'The average temperature drops significantly during nocturnal hours.',
        speechRate: 0.92,
        targetPhrase: 'The average temperature drops significantly during nocturnal hours.',
        phoneticFocus: '"temperature" pronuncia-se /ˈtemprətʃər/ (com 3 sílabas: tem-pra-chur).',
        pronunciationTip: 'Passe direto do som de /p/ para o /r/: "tem-pruh-chur". Não tente falar "tem-pe-ra-tu-re".',
        translation: 'A temperatura média cai significativamente durante as horas noturnas.',
        explanation: 'Falar as quatro sílabas grafadas em "temperature" soa estrangeiro e truncado.',
        perceptionQuestion: {
          questionText: 'Como a palavra "temperature" é dividida silabicamente no áudio?',
          audioText: 'temperature',
          options: [
            { id: 'A', text: '/ˈtem-prə-tʃər/ (3 sílabas)' },
            { id: 'B', text: '/tem-pe-ra-tu-ra/ (5 sílabas)' },
            { id: 'C', text: '/tem-pe-re-chur/ (4 sílabas)' },
            { id: 'D', text: '/tem-chur/ (2 sílabas)' }
          ],
          correctOptionId: 'A',
          explanation: 'Ocorre síncope vocálica, reduzindo a palavra a três sílabas: /ˈtemprətʃər/.'
        }
      },
      {
        id: 's-c1-pe-3',
        type: 'speaking_item',
        itemTitle: 'Elisão: Vegetable and Beverage',
        contextScenario: 'Frase que reúne dois vocábulos com supressão de vogais internas fracas.',
        modelAudioText: 'A fresh vegetable soup is the ideal beverage for cold winter evenings.',
        speechRate: 0.92,
        targetPhrase: 'A fresh vegetable soup is the ideal beverage for cold winter evenings.',
        phoneticFocus: '"vegetable" (/ˈvedʒtəbl/ - 3 sílabas) e "beverage" (/ˈbevərɪdʒ/ ou /ˈbevrɪdʒ/).',
        pronunciationTip: '"vegetable" tem som de /dʒ/ logo seguido de /t/: "VEJ-tuh-bl". O segundo "e" não existe.',
        translation: 'Uma sopa de legumes frescos é o alimento reconfortante ideal para noites frias de inverno.',
        explanation: 'Omitir a vogal muda confere a fluidez esperada de um falante de nível C1.',
        perceptionQuestion: {
          questionText: 'Qual som é suprimido na pronúncia correta de "vegetable"?',
          audioText: 'vegetable',
          options: [
            { id: 'A', text: 'A segunda vogal "e", ligando o som /dʒ/ diretamente no /t/: /ˈvedʒtəbl/' },
            { id: 'B', text: 'O som da consoante inicial "v"' },
            { id: 'C', text: 'O som do "b" final' },
            { id: 'D', text: 'Nenhum som é suprimido' }
          ],
          correctOptionId: 'A',
          explanation: 'O segundo "e" é suprimido na fala: /ˈvedʒtəbl/.'
        }
      }
    ]
  },
  {
    id: 'speaking-c1-sound-compound-vs-phrase',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c1',
    topic: 'Prosódia & Acentuação Léxica Distintiva',
    title: 'Substantivo Composto vs Adjetivo + Substantivo (Acentuação Contrastiva)',
    description: 'Diferencie pelo ponto de força auditivo um composto (GREENhouse = estufa) de uma frase nominal (green HOUSE = casa verde).',
    objective: 'Aplicar a tônica na 1ª palavra para compostos lexicais e na 2ª palavra para descrições qualificativas.',
    instructions: 'Ouça o áudio, identifique onde caiu o ponto de acento e grave a sentença com o contraste rítmico correto.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica de prosódia distintiva para evitar distorções semânticas em inglês',
      focusSound: 'Substantivo Composto: foco na 1ª palavra (a BLACKboard = lousa escolar). Adjetivo + Substantivo: foco na 2ª palavra (a black BOARD = uma tábua preta).',
      checklist: [
        'Acento vigoroso no primeiro elemento ao designar um conceito unitário (GREENhouse)',
        'Acento transferido para o substantivo ao qualificar cor ou tamanho (green HOUSE)',
        'Controle melódico claro sem hesitação'
      ]
    },
    questions: [
      {
        id: 's-c1-cp-1',
        type: 'speaking_item',
        itemTitle: 'Contraste: Greenhouse vs Green House',
        contextScenario: 'Frase que reúne a estufa de plantas (greenhouse) e uma residência pintada de verde (green house).',
        modelAudioText: 'They grow rare orchids inside the GREENhouse, which sits behind their historic green HOUSE.',
        speechRate: 0.92,
        targetPhrase: 'They grow rare orchids inside the GREENhouse, which sits behind their historic green HOUSE.',
        phoneticFocus: 'Contraste prosódico: /ˈɡriːnhaʊs/ (estufa) vs /ˌɡriːn ˈhaʊs/ (casa verde).',
        pronunciationTip: 'Diga "GREEN-house" com força na cor para a estufa; diga "green HOUSE" com força na casa para a residência.',
        translation: 'Eles cultivam orquídeas raras dentro da estufa, que fica atrás de sua histórica casa verde.',
        explanation: 'A acentuação no primeiro elemento cria o significado institucional/unitário de estufa botânica.',
        perceptionQuestion: {
          questionText: 'No áudio da palavra isolada, o que foi pronunciado?',
          audioText: 'greenhouse',
          options: [
            { id: 'A', text: 'A greenhouse (/ˈɡriːnhaʊs/ - uma estufa de cultivo de plantas)' },
            { id: 'B', text: 'A green house (/ˌɡriːn ˈhaʊs/ - uma casa pintada de verde)' },
            { id: 'C', text: 'Green grass (grama verde)' },
            { id: 'D', text: 'A greenhouse effect' }
          ],
          correctOptionId: 'A',
          explanation: 'A tônica firme na primeira sílaba /ˈɡriːnhaʊs/ identifica o substantivo composto estufa.'
        }
      },
      {
        id: 's-c1-cp-2',
        type: 'speaking_item',
        itemTitle: 'Contraste: Blackbird vs Black Bird',
        contextScenario: 'Frase contrastando a espécie melro (blackbird) e qualquer pássaro genérico de cor preta (black bird).',
        modelAudioText: 'A solitary BLACKbird landed on the branch, followed by a large black BIRD of prey.',
        speechRate: 0.92,
        targetPhrase: 'A solitary BLACKbird landed on the branch, followed by a large black BIRD of prey.',
        phoneticFocus: 'Contraste: /ˈblækbɜːrd/ (espécie melro) vs /ˌblæk ˈbɜːrd/ (ave negra qualquer).',
        pronunciationTip: 'Destaque "BLACK-bird" no início e depois "black BIRD" no final.',
        translation: 'Um melro solitário pousou no galho, seguido por uma grande ave preta de rapina.',
        explanation: 'Dominar a acentuação em compostos é fundamental para precisão taxonômica e descritiva.',
        perceptionQuestion: {
          questionText: 'Onde recai a sílaba tônica quando nos referimos à espécie de pássaro "blackbird"?',
          audioText: 'blackbird',
          options: [
            { id: 'A', text: 'Na primeira palavra: /ˈblækbɜːrd/' },
            { id: 'B', text: 'Na segunda palavra: /blækˈbɜːrd/' },
            { id: 'C', text: 'Nas duas com o mesmo tom' },
            { id: 'D', text: 'Apenas no som final de /d/' }
          ],
          correctOptionId: 'A',
          explanation: 'Substantivos compostos unificados recebem o acento primário no primeiro componente: /ˈblækbɜːrd/.'
        }
      },
      {
        id: 's-c1-cp-3',
        type: 'speaking_item',
        itemTitle: 'Contraste: White House vs White House',
        contextScenario: 'Frase com a sede presidencial dos Estados Unidos (the White House) e uma casa branca comum de campo.',
        modelAudioText: 'The diplomat visited the WHITE House in Washington before returning to his humble white HOUSE.',
        speechRate: 0.92,
        targetPhrase: 'The diplomat visited the WHITE House in Washington before returning to his humble white HOUSE.',
        phoneticFocus: 'A residência oficial: /ðə ˈwaɪt haʊs/; a moradia comum: /ə ˌwaɪt ˈhaʊs/.',
        pronunciationTip: 'The "WHITE House" tem a tônica em White; "white HOUSE" tem a tônica em House.',
        translation: 'O diplomata visitou a Casa Branca em Washington antes de retornar à sua humilde casa branca.',
        explanation: 'Esse par demonstra o papel indispensável da prosódia na identificação de entidades políticas oficiais.',
        perceptionQuestion: {
          questionText: 'Qual opção representa a pronúncia oficial da sede do governo americano "the White House"?',
          audioText: 'the White House',
          options: [
            { id: 'A', text: 'The WHITE House (/ðə ˈwaɪt haʊs/ com tônica em White)' },
            { id: 'B', text: 'The white HOUSE (/ðə ˌwaɪt ˈhaʊs/ com tônica em House)' },
            { id: 'C', text: 'The white home' },
            { id: 'D', text: 'Sem acento tônico' }
          ],
          correctOptionId: 'A',
          explanation: 'Nomes próprios compostos como "The White House" acentuam a primeira palavra: /ðə ˈwaɪt haʊs/.'
        }
      }
    ]
  },
  {
    id: 'speaking-c1-sound-fall-rise-tone',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c1',
    topic: 'Entonação Avançada: O Tom Fall-Rise (/\\_/ em Nuances)',
    title: 'O Tom Complexo Queda-Elevação (Fall-Rise) para Ressalvas Sutis',
    description: 'Aprenda a modular o tom que desce e sobe suavemente na mesma palavra para sinalizar: "concordo com ressalvas".',
    objective: 'Empregar a curva tonal fall-rise (vocalic pitch glide) para transmitir hesitação diplomática e advertência cortês.',
    instructions: 'Identifique no teste auditivo a implicação da entonação e reproduza a frase preservando a curva melódica.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica de entonação britânica e internacional para negociação diplomática',
      focusSound: 'Fall-Rise: a voz cai na vogal tônica e imediatamente sobe no final da mesma sílaba ou na sílaba átona seguinte (sinalizando: "mas...").',
      checklist: [
        'Queda audível de tom seguida de elevação controlada na palavra-chave',
        'Expressão de polidez reflexiva sem parecer grosseiro ou evasivo',
        'Controle da respiração no final da curva melódica'
      ]
    },
    questions: [
      {
        id: 's-c1-fr-1',
        type: 'speaking_item',
        itemTitle: 'Fall-Rise em Acordo Parcial: Well...',
        contextScenario: 'Responda a uma proposta demonstrando que você aceita a ideia geral, mas possui reservas importantes.',
        modelAudioText: 'Well, the methodology is theoretically sound, but the implementation schedule is exceedingly ambitious.',
        speechRate: 0.94,
        targetPhrase: 'Well, the methodology is theoretically sound, but the implementation schedule is exceedingly ambitious.',
        phoneticFocus: 'Tom Fall-Rise na palavra "sound" (/saʊnd/) e em "Well".',
        pronunciationTip: 'Faça a voz descer e subir em "sound" (\\_/): isso insinua o "mas..." antes mesmo de você pronunciá-lo.',
        translation: 'Bem, a metodologia é teoricamente sólida, mas o cronograma de implementação é excessivamente ambicioso.',
        explanation: 'O tom fall-rise antecipa pragmaticamente que haverá uma ressalva ou restrição na segunda parte da frase.',
        perceptionQuestion: {
          questionText: 'O que a curva de entonação queda-elevação (fall-rise) na palavra "sound" transmite antes mesmo da palavra "but"?',
          audioText: 'the methodology is theoretically sound',
          options: [
            { id: 'A', text: 'Uma ressalva implícita: o falante concorda com a teoria, mas vai levantar um problema prático' },
            { id: 'B', text: 'Um entusiasmo eufórico e irrestrito com o projeto' },
            { id: 'C', text: 'Uma ordem para que a equipe seja demitida' },
            { id: 'D', text: 'Uma declaração de surdez do falante' }
          ],
          correctOptionId: 'A',
          explanation: 'O tom fall-rise é o código fonológico clássico em inglês para sinalizar "reserva mental" ou concessão provisória.'
        }
      },
      {
        id: 's-c1-fr-2',
        type: 'speaking_item',
        itemTitle: 'Fall-Rise em Advertência Cortês: Carefully...',
        contextScenario: 'Sugira que um colega reexamine um contrato com máxima prudência antes de assinar.',
        modelAudioText: 'I would recommend reviewing the indemnity clauses very carefully before signing.',
        speechRate: 0.94,
        targetPhrase: 'I would recommend reviewing the indemnity clauses very carefully before signing.',
        phoneticFocus: 'Tom Fall-Rise estendido em "carefully" (/ˈkerfəli/).',
        pronunciationTip: 'A voz desce em "care-" e sobe suavemente em "-fully". Transmite carinho e cautela profissional.',
        translation: 'Eu recomendaria revisar as cláusulas de indenização com muita cautela antes de assinar.',
        explanation: 'O tom fall-rise em advertências soa como um conselho maduro e prudente, nunca como uma ordem impositiva.',
        perceptionQuestion: {
          questionText: 'Qual é o efeito comunicativo do tom Fall-Rise na palavra "carefully"?',
          audioText: 'very carefully',
          options: [
            { id: 'A', text: 'Adverte o interlocutor com polidez e delicadeza diplomática' },
            { id: 'B', text: 'Grita de forma ameaçadora' },
            { id: 'C', text: 'Demonstra total indiferença ao contrato' },
            { id: 'D', text: 'Indica uma pergunta de sim ou não' }
          ],
          correctOptionId: 'A',
          explanation: 'A modulação fall-rise confere o tom de recomendação cautelosa e diplomática característica de C1.'
        }
      },
      {
        id: 's-c1-fr-3',
        type: 'speaking_item',
        itemTitle: 'Fall-Rise em Correção Polida: Actually...',
        contextScenario: 'Corrija um equívoco de data cometido por um parceiro de negócios sem constrangê-lo.',
        modelAudioText: 'Actually, the regional symposium was rescheduled for Wednesday, not Thursday.',
        speechRate: 0.94,
        targetPhrase: 'Actually, the regional symposium was rescheduled for Wednesday, not Thursday.',
        phoneticFocus: 'Curva Fall-Rise em "Actually" (/ˈæktʃuəli/).',
        pronunciationTip: 'Diga "Actually" com a voz descendo e subindo. Isso amacia a correção do erro.',
        translation: 'Na verdade, o simpósio regional foi remarcado para quarta-feira, e não quinta.',
        explanation: 'O fall-rise em "Actually" evita que uma correção factual soe arrogante ou agressiva.',
        perceptionQuestion: {
          questionText: 'Como a palavra "Actually" foi entoada no áudio?',
          audioText: 'Actually',
          options: [
            { id: 'A', text: 'Com curva fall-rise (desce e sobe suavemente), suavizando a correção' },
            { id: 'B', text: 'Com queda abrupta e agressiva de autoridade' },
            { id: 'C', text: 'Monótona sem nenhuma variação' },
            { id: 'D', text: 'Sussurrada' }
          ],
          correctOptionId: 'A',
          explanation: 'O tom fall-rise em "Actually" é o mecanismo padrão da língua para corrigir com gentileza e respeito.'
        }
      }
    ]
  },
  {
    id: 'speaking-c1-sound-glottal-reinforcement',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c1',
    topic: 'Fonologia Avançada: Oclusão Glotal e Glottal Stop (/ʔ/)',
    title: 'Reforço Glotal e Glottal Stop (/ʔ/) no Inglês Contemporâneo',
    description: 'Compreenda quando o /t/ antes de consoantes vira oclusão glotal legítima na fala rápida culta (network, Scotland, fitness).',
    objective: 'Reconhecer e aplicar o reforço glotal em palavras compostas e finais de sílaba sem comprometer a dicção clara.',
    instructions: 'Identifique o som glotal no teste auditivo e grave a frase modelo com a transição oclusiva natural.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica fonética sobre pronúncia nativa contemporânea (Received Pronunciation e General American modernos)',
      focusSound: 'O Glottal Stop (/ʔ/) ocorre quando o fluxo de ar é brevemente interrompido nas cordas vocais antes de consoantes (ex: net-work, fit-ness, treat-ment).',
      checklist: [
        'Interromper a corrente de ar na glote sem soltar ar aspirado em /t/ antes de /n/, /m/, /l/',
        'Não emitir o som de /t/ com sílaba extra ("neti-work")',
        'Diferenciar o glottal stop natural antes de consoantes da fala descuidada'
      ]
    },
    questions: [
      {
        id: 's-c1-gr-1',
        type: 'speaking_item',
        itemTitle: 'Glottal Stop antes de Nasal: Fitness vs Treatment',
        contextScenario: 'Frase de saúde corporativa contendo termos com /t/ antes de consoantes nasais.',
        modelAudioText: 'Our employee fitness program includes specialized treatment for joint strain.',
        speechRate: 0.92,
        targetPhrase: 'Our employee fitness program includes specialized treatment for joint strain.',
        phoneticFocus: '"fitness" (/ˈfɪʔnəs/) e "treatment" (/ˈtriːʔmənt/) com glottal stop antes de consoante.',
        pronunciationTip: 'Em "fit-ness", corte o ar na garganta na letra "t" antes de dizer "ness". Não solte ar nem adicione vogal.',
        translation: 'Nosso programa de condicionamento físico dos funcionários inclui tratamento especializado para lesões articulares.',
        explanation: 'O reforço glotal antes de /n/ e /m/ é amplamente aceito e esperado na fala culta contemporânea.',
        perceptionQuestion: {
          questionText: 'O que ocorre com a consoante "t" na palavra "treatment" quando falada por nativos em velocidade normal?',
          audioText: 'treatment',
          options: [
            { id: 'A', text: 'O ar é retido na garganta (glottal stop /ʔ/) antes da consoante "m", sem soltura de ar aspirado' },
            { id: 'B', text: 'O "t" é pronunciado como um "s"' },
            { id: 'C', text: 'Adiciona-se uma vogal "i" formando "treat-i-ment"' },
            { id: 'D', text: 'O "t" soa como "r" caipira' }
          ],
          correctOptionId: 'A',
          explanation: 'Em "treatment", a oclusiva /t/ antes de /m/ sofre glotalização: /ˈtriːʔmənt/.'
        }
      },
      {
        id: 's-c1-gr-2',
        type: 'speaking_item',
        itemTitle: 'Glottal Stop em Palavras Compostas: Network and Footprint',
        contextScenario: 'Frase técnica sobre infraestrutura e pegada ambiental.',
        modelAudioText: 'The decentralized network operates with a minimal ecological footprint.',
        speechRate: 0.92,
        targetPhrase: 'The decentralized network operates with a minimal ecological footprint.',
        phoneticFocus: '"network" (/ˈneʔwɜːrk/) e "footprint" (/ˈfʊʔprɪnt/).',
        pronunciationTip: 'Corte o ar no fim de "net" antes de pronunciar "work". A articulação fica limpa e ágil.',
        translation: 'A rede descentralizada opera com uma pegada ecológica mínima.',
        explanation: 'Em compostos cujo primeiro elemento termina em /t/, o glottal stop garante velocidade e naturalidade.',
        perceptionQuestion: {
          questionText: 'Como a palavra "network" é articulada no áudio?',
          audioText: 'network',
          options: [
            { id: 'A', text: 'Com retenção glotal suave no /t/: /ˈneʔwɜːrk/' },
            { id: 'B', text: 'Com explosão exagerada de ar aspirado "net-t-work"' },
            { id: 'C', text: 'Omitindo a letra "w"' },
            { id: 'D', text: 'Como "net-work-e"' }
          ],
          correctOptionId: 'A',
          explanation: 'Ocorre a oclusão glotal /ʔ/ na transição entre "net" e "work".'
        }
      },
      {
        id: 's-c1-gr-3',
        type: 'speaking_item',
        itemTitle: 'Glottal Stop Final em Scotland and Fountain',
        contextScenario: 'Frase descritiva combinando nomes geográficos com glotalização pré-consonântica.',
        modelAudioText: 'They traveled across Scotland and visited a historic stone fountain.',
        speechRate: 0.92,
        targetPhrase: 'They traveled across Scotland and visited a historic stone fountain.',
        phoneticFocus: '"Scotland" (/ˈskɑːʔlənd/) e "fountain" (/ˈfaʊnʔn̩/).',
        pronunciationTip: 'Em "Scotland", a ponta da língua não precisa explodir o ar antes do L.',
        translation: 'Eles viajaram pela Escócia e visitaram uma fonte histórica de pedra.',
        explanation: 'Dominar o fenômeno do glottal stop permite compreender e reproduzir sotaques avançados do Reino Unido e EUA.',
        perceptionQuestion: {
          questionText: 'Qual fonema é articulado na transição interna da palavra "Scotland"?',
          audioText: 'Scotland',
          options: [
            { id: 'A', text: 'O reforço glotal /ʔ/ antes do som líquido /l/' },
            { id: 'B', text: 'Um som de "ch"' },
            { id: 'C', text: 'Um som de "z"' },
            { id: 'D', text: 'Uma vogal longa' }
          ],
          correctOptionId: 'A',
          explanation: '"Scotland" é tradicionalmente pronunciada com reforço glotal na junção: /ˈskɑːʔlənd/.'
        }
      }
    ]
  },

  // --- 3. Respostas Rápidas (Rapid Response) - 4 Atividades ---
  {
    id: 'speaking-c1-rapid-thesis-defense',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c1',
    topic: 'Comunicação Acadêmica & Arguição Científica',
    title: 'Respondendo a Ceticismo Incisivo em Defesa Acadêmica',
    description: 'Responda com elegância intelectual e rigor metodológico a objeções desafiadoras de uma banca examinadora.',
    objective: 'Reconhecer o mérito da crítica, delimitar o escopo da pesquisa e defender premissas epistemológicas.',
    instructions: 'Ouça o questionamento incisivo do professor examinador e grave sua sustentação articulada.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Defesa de tese de pós-graduação perante banca de pesquisadores internacionais',
      checklist: [
        'Acolhimento da complexidade metodológica levantada',
        'Citação precisa de limitações controladas da amostra',
        'Reafirmação fundamentada da validade da inferência principal'
      ]
    },
    questions: [
      {
        id: 's-c1-td-1',
        type: 'speaking_item',
        itemTitle: 'Arguição: Generalização de Amostra Reduzida',
        contextScenario: 'O examinador questiona se os resultados de um estudo de caso com 20 participantes podem ser extrapolados.',
        modelAudioText: 'Given that your cohort was restricted to twenty qualitative subjects, how can you credibly generalize these findings to broader institutional populations?',
        speechRate: 0.95,
        targetPhrase: 'I appreciate the professor caveat; our objective was not statistical generalizability, but depth of phenomenological insight into institutional decision dynamics.',
        sampleResponses: [
          'I appreciate the professor caveat; our objective was not statistical generalizability, but depth of phenomenological insight into institutional decision dynamics.',
          'While empirical scalability is indeed constrained by cohort size, our qualitative rigor provides foundational conceptual hypotheses that warrant larger quantitative trials.',
          'That is a pertinent epistemological limitation; our findings are intended as an exploratory diagnostic framework rather than an exhaustive universal model.'
        ],
        pronunciationTip: '"phenomenological insight" (/fəˌnɑːmənəˈlɑːdʒɪkl ˈɪnsaɪt/).',
        translation: 'Considerando que seu grupo se limitou a vinte sujeitos qualitativos, como o senhor pode generalizar com credibilidade estas conclusões para populações institucionais mais amplas?',
        explanation: 'Distinguir validade estatística de profundidade fenomenológica refuta a crítica com alto gabarito acadêmico.'
      },
      {
        id: 's-c1-td-2',
        type: 'speaking_item',
        itemTitle: 'Arguição: Variáveis Confusas Omitidas',
        contextScenario: 'O membro da banca pergunta se variáveis econômicas externas não contaminaram os dados empíricos observados.',
        modelAudioText: 'Did your analytical framework account for macroeconomic fluctuations that coincided with your data collection window?',
        speechRate: 0.95,
        targetPhrase: 'Yes, we introduced longitudinal baseline controls precisely to insulate our intervention metrics from concurrent macroeconomic shifts.',
        sampleResponses: [
          'Yes, we introduced longitudinal baseline controls precisely to insulate our intervention metrics from concurrent macroeconomic shifts.',
          'We conducted a robust difference-in-differences regression analysis, which specifically isolates exogenous market shocks from our primary variables.',
          'To mitigate confounding macroeconomic trends, we matched our experimental subjects with an unaffected synthetic control group.'
        ],
        pronunciationTip: '"longitudinal baseline controls" (/ˌlɑːndʒəˈtuːdənl/).',
        translation: 'Sua estrutura analítica levou em consideração as flutuações macroeconômicas que coincidiram com a janela de coleta de dados?',
        explanation: 'Citar controles longitudinais e grupos de controle sintéticos demonstra solidez metodológica de alto padrão.'
      },
      {
        id: 's-c1-td-3',
        type: 'speaking_item',
        itemTitle: 'Arguição: Relevância Prática dos Resultados',
        contextScenario: 'O examinador pergunta qual é a aplicabilidade real de sua teoria para formulação de políticas públicas.',
        modelAudioText: 'Your theoretical apparatus is intellectually elegant, but what tangible policy interventions does it actually inform?',
        speechRate: 0.95,
        targetPhrase: 'Directly, it equips municipal regulators with diagnostic criteria to identify early algorithmic bias before automated credit scoring tools are deployed.',
        sampleResponses: [
          'Directly, it equips municipal regulators with diagnostic criteria to identify early algorithmic bias before automated credit scoring tools are deployed.',
          'Our framework translates directly into an audit rubric that public agencies can integrate into existing procurement guidelines.',
          'Beyond academic theory, it offers actionable governance benchmarks currently being piloted by two regional environmental commissions.'
        ],
        pronunciationTip: '"diagnostic criteria to identify algorithmic bias" (/daɪəɡˈnɑːstɪk kraɪˈtɪriə/).',
        translation: 'Seu aparato teórico é intelectualmente elegante, mas que intervenções políticas tangíveis ele de fato fundamenta na prática?',
        explanation: 'Apresentar a aplicação como uma ferramenta de auditoria ou diagnóstico concreto prova a relevância social da pesquisa.'
      }
    ]
  },
  {
    id: 'speaking-c1-rapid-boardroom-mediation',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c1',
    topic: 'Gestão Executiva & Governança de Conflitos',
    title: 'Desarmando Impasses em Reuniões de Conselho',
    description: 'Intervenha como moderador para desarmar conflitos acalorados entre diretores sobre orçamento e direção estratégica.',
    objective: 'Sintetizar posições divergentes, redirecionar o foco para metas comuns e restabelecer a calma com autoridade.',
    instructions: 'Ouça o confronto acalorado na sala de reunião e formule uma intervenção pacificadora e diretiva.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Reunião do conselho executivo com posições polarizadas sobre gastos de capital',
      checklist: [
        'Intervenção serena e firme para interromper o atrito verbal',
        'Reconhecimento das preocupações legítimas de ambos os lados',
        'Apresentação de um mecanismo estruturado de decisão compartilhada'
      ]
    },
    questions: [
      {
        id: 's-c1-bm-1',
        type: 'speaking_item',
        itemTitle: 'Impasse: Inovação vs Prudência Financeira',
        contextScenario: 'Dois diretores estão discutindo aos gritos sobre alocar recursos em inteligência artificial ou cortar despesas.',
        modelAudioText: 'If we do not invest in this infrastructure now, our company will be obsolete! / And if we spend that capital recklessly, we will face insolvency before next year!',
        speechRate: 0.95,
        targetPhrase: 'Colleagues, let us pause. Both perspectives reflect genuine stewardship: we cannot jeopardize solvency, nor can we allow technological obsolescence. Let us evaluate a phased investment gate.',
        sampleResponses: [
          'Colleagues, let us pause. Both perspectives reflect genuine stewardship: we cannot jeopardize solvency, nor can we allow technological obsolescence. Let us evaluate a phased investment gate.',
          'Let us step back from the emotional heat. The question is not whether to innovate, but how to calibrate our deployment timeline against verified cash flow milestones.',
          'I hear passionate arguments for survival and modernization. What if we condition initial capital release on reaching explicit third-quarter revenue benchmarks?'
        ],
        pronunciationTip: '"phased investment gate" (/feɪzd ɪnˈvestmənt ɡeɪt/). Mantenha a voz perfeitamente estável.',
        translation: 'Se não investirmos nessa infraestrutura agora, a empresa ficará obsoleta! / E se gastarmos esse capital inconsequentemente, enfrentaremos insolvência antes do ano que vem!',
        explanation: 'Validar ambas as intenções ("genuine stewardship") e sugerir liberação por etapas ("phased gates") restaura a racionalidade.'
      },
      {
        id: 's-c1-bm-2',
        type: 'speaking_item',
        itemTitle: 'Impasse: Centralização vs Autonomia Regional',
        contextScenario: 'Diretores regionais queixam-se de que as decisões globais da matriz ignoram especificidades culturais locais.',
        modelAudioText: 'Headquarters keeps imposing uniform marketing guidelines that completely alienate our Latin American and Asian consumer bases!',
        speechRate: 0.95,
        targetPhrase: 'That frustration is legitimate. While brand coherence requires global guardrails, regional leadership must retain creative latitude to adapt campaign messaging locally.',
        sampleResponses: [
          'That frustration is legitimate. While brand coherence requires global guardrails, regional leadership must retain creative latitude to adapt campaign messaging locally.',
          'We need not choose between corporate chaos and rigid uniformity; let us establish global compliance parameters while decentralizing cultural execution.',
          'I concur that local market resonance cannot be dictated from a distant headquarters. Let us codify regional autonomy for creative adaptations.'
        ],
        pronunciationTip: '"global guardrails... creative latitude" (/ˈɡɑːrdreɪlz/ ... /ˈlætɪtuːd/).',
        translation: 'A sede continua impondo diretrizes uniformes de marketing que alienam completamente nossas bases de consumidores na América Latina e Ásia!',
        explanation: 'Equilibrar "global guardrails" com "creative latitude" é o vocabulário executivo padrão para resolver dilemas de escala.'
      },
      {
        id: 's-c1-bm-3',
        type: 'speaking_item',
        itemTitle: 'Impasse: Prioridade de Contratação entre Áreas',
        contextScenario: 'Operações e Pesquisa disputam o número limitado de novas contratações autorizadas para o trimestre.',
        modelAudioText: 'Engineering cannot build next year roadmap without ten developers! / But customer operations will collapse next month without five support leads!',
        speechRate: 0.95,
        targetPhrase: 'Both demands are mission-critical. Let us authorize the immediate support hires to safeguard current revenue, while staggering engineering recruitment across two cohorts.',
        sampleResponses: [
          'Both demands are mission-critical. Let us authorize the immediate support hires to safeguard current revenue, while staggering engineering recruitment across two cohorts.',
          'We cannot sacrifice today customer retention to build tomorrow product. Let us prioritize immediate operational stability while approving engineering roles on a rolling basis.',
          'Let us adopt a balanced intake: three support specialists to stabilize client queues this week, alongside four technical leads starting next sprint.'
        ],
        pronunciationTip: '"staggering engineering recruitment across two cohorts" (/ˈstæɡərɪŋ/ ... /ˈkoʊhɔːrts/).',
        translation: 'A engenharia não consegue construir o plano do ano que vem sem dez desenvolvedores! / Mas as operações com clientes vão entrar em colapso mês que vem sem cinco líderes de atendimento!',
        explanation: 'Escalonar contratações ("staggering across cohorts") atende emergências presentes sem vetar o crescimento futuro.'
      }
    ]
  },
  {
    id: 'speaking-c1-rapid-ethical-dilemma',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c1',
    topic: 'Ética Profissional & Tomada de Decisão',
    title: 'Respondendo a Dilemas Éticos Hipotéticos em Entrevistas de Alta Liderança',
    description: 'Responda com integridade moral e lucidez jurídica a dilemas éticos complexos propostos por conselhos avaliadores.',
    objective: 'Articular princípios éticos não negociáveis, cumprimento de deveres fiduciários e transparência perante irregularidades.',
    instructions: 'Ouça o dilema ético apresentado e formule uma resposta baseada em princípios e governança.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Entrevista comitê de busca para cargo de Direção Geral / C-Level',
      checklist: [
        'Recusa categórica a conivência ou acobertamento de irregularidades',
        'Acionamento de canais de auditoria independente e denúncia anônima',
        'Preservação da transparência com órgãos reguladores e sociedade'
      ]
    },
    questions: [
      {
        id: 's-c1-ed-1',
        type: 'speaking_item',
        itemTitle: 'Dilema: Omissão de Falha em Auditoria Pré-Fusão',
        contextScenario: 'Você descobre uma vulnerabilidade de dados dias antes da assinatura da venda bilionária da empresa.',
        modelAudioText: 'Suppose you discover a severe data security vulnerability three days before closing a multi-billion-dollar merger. Disclosing it will likely derail the deal. What do you do?',
        speechRate: 0.95,
        targetPhrase: 'I would disclose the vulnerability immediately to the board and buyer; withholding material risks violates fiduciary duty and invites criminal liability.',
        sampleResponses: [
          'I would disclose the vulnerability immediately to the board and buyer; withholding material risks violates fiduciary duty and invites criminal liability.',
          'Short-term commercial convenience can never supersede statutory disclosure obligations. I would commission an immediate remediation plan and provide full transparency.',
          'A deal built on concealed liabilities is an existential legal trap. Immediate disclosure preserves our integrity and prevents catastrophic post-close litigation.'
        ],
        pronunciationTip: '"withholding material risks violates fiduciary duty" (/fɪˈduːʃieri ˈdjuːti/).',
        translation: 'Suponha que você descubra uma vulnerabilidade severa de segurança de dados três dias antes de fechar uma fusão multibilionária. Revelá-la provavelmente travará o negócio. O que você faz?',
        explanation: 'Para cargos de alta liderança, a única resposta aceitável é a divulgação imediata por imperativo ético e legal.'
      },
      {
        id: 's-c1-ed-2',
        type: 'speaking_item',
        itemTitle: 'Dilema: Pressão Política sobre Licenciamento Ambiental',
        contextScenario: 'Uma autoridade pública sugere acelerar a licença de sua fábrica se você patrocinar a campanha beneficente dela.',
        modelAudioText: 'A prominent municipal official hints that expediting your environmental factory permits depends on funding their foundation. How do you respond?',
        speechRate: 0.95,
        targetPhrase: 'I would unequivocally decline and document the interaction with our compliance officer; engaging in transactional favors crosses into statutory bribery.',
        sampleResponses: [
          'I would unequivocally decline and document the interaction with our compliance officer; engaging in transactional favors crosses into statutory bribery.',
          'I would politely inform the official that our philanthropic donations are strictly decoupled from operational permitting, and notify our legal counsel immediately.',
          'There is zero gray area here: our enterprise permits must succeed on regulatory merit alone. I would route all further communications through formal official channels.'
        ],
        pronunciationTip: '"unequivocally decline" (/ˌʌnɪˈkwɪvəkli dɪˈklaɪn/) e "statutory bribery" (/ˈbraɪbəri/).',
        translation: 'Uma autoridade municipal influente insinua que a liberação rápida das licenças da sua fábrica depende de uma doação para a fundação dela. Como você responde?',
        explanation: 'Recusa categórica e documentação formal demonstram maturidade de governança anticorrupção.'
      },
      {
        id: 's-c1-ed-3',
        type: 'speaking_item',
        itemTitle: 'Dilema: Conflito de Interesses de Fornecedor',
        contextScenario: 'Você descobre que a proposta mais competitiva para um grande contrato é de uma empresa fundada pelo filho do presidente do conselho.',
        modelAudioText: 'The top-rated vendor for a critical cloud contract happens to be owned by the board chairman’s daughter. What protocol do you follow?',
        speechRate: 0.95,
        targetPhrase: 'I would mandate that the chairman formally recuse himself from deliberations and subject the bids to independent third-party audit to ensure complete impartiality.',
        sampleResponses: [
          'I would mandate that the chairman formally recuse himself from deliberations and subject the bids to independent third-party audit to ensure complete impartiality.',
          'A transparent conflict of interest protocol must be enacted: recusal of interested board members and blinded evaluation by an external procurement auditor.',
          'To insulate the organization from allegations of nepotism, I would require documented blind evaluations and comprehensive audit trails for every competing vendor.'
        ],
        pronunciationTip: '"formally recuse himself" (/rɪˈkjuːz hɪmˈself/) e "nepotism" (/ˈnepətɪzəm/).',
        translation: 'O fornecedor com melhor avaliação para um contrato crítico de nuvem pertence à filha do presidente do conselho. Que protocolo você segue?',
        explanation: 'Exigir a abstenção (recusal) do interessado e auditoria independente cega protege a integridade corporativa.'
      }
    ]
  },
  {
    id: 'speaking-c1-rapid-restructuring-defense',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c1',
    topic: 'Comunicação Interna & Relações de Trabalho',
    title: 'Defendendo Reestruturações Dolorosas perante Delegados Sindicais',
    description: 'Comunique decisões operacionais difíceis com honestidade empática perante representantes de trabalhadores.',
    objective: 'Reconhecer o sofrimento humano com genuína empatia enquanto se sustenta a necessidade de solvência do negócio.',
    instructions: 'Ouça o questionamento indignado do delegado sindical e formule uma declaração equilibrada e respeitosa.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Mesa redonda formal de consulta trabalhista sobre fechamento de filial deficitária',
      checklist: [
        'Validação honesta da dor dos trabalhadores sem eufemismos corporativos',
        'Apresentação de pacotes de transição e requalificação profissional',
        'Explicação transparente da inviabilidade econômica que forçou a decisão'
      ]
    },
    questions: [
      {
        id: 's-c1-rd-work-1',
        type: 'speaking_item',
        itemTitle: 'Questionamento: Fechamento de Planta Fabril',
        contextScenario: 'O representante acusa a diretoria de trair os funcionários que trabalharam anos pela empresa.',
        modelAudioText: 'Our workers dedicated twenty years of loyal service, and now leadership is shuttering the plant to satisfy financial spreadsheets. How is that fair?',
        speechRate: 0.95,
        targetPhrase: 'I hear your profound hurt, and there is no sugarcoating how devastating this closure is. We exhausted all avenues, but continuous operational losses left no viable alternative to preserve the wider company.',
        sampleResponses: [
          'I hear your profound hurt, and there is no sugarcoating how devastating this closure is. We exhausted all avenues, but continuous operational losses left no viable alternative to preserve the wider company.',
          'You are right that our employees gave decades of dedication, and treating this as a mere spreadsheet line would be deeply disrespectful. We are here to negotiate fair severance and retraining.',
          'I will not insult your intelligence with corporate platitudes: this is a heartbreaking decision. Our solemn obligation now is ensuring transition support and pension protections for every impacted family.'
        ],
        pronunciationTip: '"there is no sugarcoating how devastating this closure is" (/ˈdevəsteɪtɪŋ/).',
        translation: 'Nossos operários dedicaram vinte anos de serviço leal e agora a diretoria está fechando a fábrica para agradar planilhas financeiras. Onde está a justiça nisso?',
        explanation: 'Reconhecer que não há como dourar a pílula ("no sugarcoating") desarma acusações de desumanidade.'
      },
      {
        id: 's-c1-rd-work-2',
        type: 'speaking_item',
        itemTitle: 'Questionamento: Pacote de Apoio à Requalificação',
        contextScenario: 'O delegado exige saber o que a empresa fará concretamente para que trabalhadores maduros encontrem novos empregos.',
        modelAudioText: 'Fifty-year-old technicians cannot simply switch into software overnight. What concrete safety net are you providing?',
        speechRate: 0.95,
        targetPhrase: 'We have funded a dedicated two-year outplacement program offering localized career coaching and full tuition subsidies for certified vocational reskilling.',
        sampleResponses: [
          'We have funded a dedicated two-year outplacement program offering localized career coaching and full tuition subsidies for certified vocational reskilling.',
          'We partnered with regional manufacturing consortiums to guarantee priority interviews, paired with a twelve-month healthcare extension for all families.',
          'Every affected worker will receive personalized transition counseling and vocational vouchers to ensure they acquire credentials for emerging regional industries.'
        ],
        pronunciationTip: '"certified vocational reskilling" (/vəʊˈkeɪʃənl ˌriːˈskɪlɪŋ/).',
        translation: 'Técnicos de cinquenta anos de idade não podem simplesmente migrar para software do dia para a noite. Que rede de proteção concreta vocês estão oferecendo?',
        explanation: 'Apresentar subsídios de requalificação técnica e continuidade de planos de saúde demonstra responsabilidade social autêntica.'
      },
      {
        id: 's-c1-rd-work-3',
        type: 'speaking_item',
        itemTitle: 'Questionamento: Sacrifício da Alta Gestão',
        contextScenario: 'O sindicato pergunta se a diretoria executiva também terá sua remuneração e bônus cortados durante a reestruturação.',
        modelAudioText: 'While workers lose their livelihoods, will executives continue collecting multi-million-dollar performance bonuses this year?',
        speechRate: 0.95,
        targetPhrase: 'No. The board of directors has enacted a mandatory freeze on all executive bonuses and reduced executive base salaries by twenty percent for the next eighteen months.',
        sampleResponses: [
          'No. The board of directors has enacted a mandatory freeze on all executive bonuses and reduced executive base salaries by twenty percent for the next eighteen months.',
          'To ensure equitable sacrifice, leadership compensation has been restructured: all executive incentives are frozen until the company achieves sustained operational recovery.',
          'Executives must share the burden: the board has suspended performance dividends and implemented significant executive salary reductions across the senior tier.'
        ],
        pronunciationTip: '"mandatory freeze on executive bonuses" (/ˈmændətɔːri friːz/).',
        translation: 'Enquanto os trabalhadores perdem seus empregos, os diretores continuarão recebendo bônus milionários este ano?',
        explanation: 'Comprovar que a alta gestão também teve bônus congelados e salários reduzidos estabelece legitimidade moral.'
      }
    ]
  },

  // --- 4. Fale em Situações Reais (Roleplay Situations) - 3 Atividades ---
  {
    id: 'speaking-c1-roleplay-ip-licensing',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'c1',
    topic: 'Direito Comercial & Propriedade Intelectual',
    title: 'Simulação: Negociando Cláusulas de Licenciamento de Patentes e Indenização',
    description: 'Atue como negociador jurídico alinhando royalties, limites de indenização e concessões de sublicenciamento com uma multinacional.',
    objective: 'Defender o patrimônio imaterial da empresa utilizando termos contratuais precisos (indemnity cap, cross-licensing).',
    instructions: 'Acompanhe as propostas do advogado da contraparte, defenda seus limites patrimoniais e firme a minuta de acordo.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Sala de videoconferência entre bancas jurídicas internacionais',
      partnerRole: 'Advogado Geral da Contraparte (Julian Vance)',
      userRole: 'Negociador de Propriedade Intelectual (Você)',
      checklist: [
        'Estabelecimento de limite máximo de indenização contratual (liability cap)',
        'Definição da fórmula de cálculo de royalties sobre vendas líquidas',
        'Exclusão de cessão de direitos sobre propriedade intelectual desenvolvida no futuro'
      ]
    },
    questions: [
      {
        id: 's-c1-ip-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Limitando a Cláusula de Indenização (Liability Cap)',
        contextScenario: 'Julian exige que sua empresa arque com indenização irrestrita contra quaisquer processos de terceiros.',
        modelAudioText: 'Our client board insists on uncapped indemnity against any potential third-party patent infringement claims arising from your algorithm.',
        speechRate: 0.95,
        targetPhrase: 'Uncapped liability is commercially unacceptable for our enterprise; we can, however, agree to a super-cap equivalent to two times the total annual contract value.',
        sampleResponses: [
          'Uncapped liability is commercially unacceptable for our enterprise; we can, however, agree to a super-cap equivalent to two times the total annual contract value.',
          'We cannot expose our balance sheet to unlimited liability; our standard practice is capping indemnity at twelve months of aggregate licensing fees.',
          'An uncapped indemnity structure is a non-starter. We are prepared to offer a robust indemnity cap tied to the trailing twelve months of licensing revenue.'
        ],
        pronunciationTip: '"Uncapped liability is commercially unacceptable" (/ʌnˈkæpt ˌlaɪəˈbɪləti/).',
        translation: 'O conselho do nosso cliente insiste em indenização irrestrita contra quaisquer eventuais ações judiciais de infração de patentes movidas por terceiros em relação ao seu algoritmo.',
        explanation: 'Rejeitar responsabilidade ilimitada e contrapor com um teto proporcional ("super-cap of 2x annual contract value") protege o patrimônio da empresa.'
      },
      {
        id: 's-c1-ip-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Definindo Direitos sobre Inovações Futuras (Grant-Backs)',
        contextScenario: 'Julian propõe que quaisquer melhorias criadas com seu algoritmo passem a ser propriedade exclusiva deles.',
        modelAudioText: 'We propose that any derivative algorithms or secondary patents developed during the integration window be assigned solely to our corporation.',
        speechRate: 0.95,
        targetPhrase: 'We must retain ownership over core architectural derivatives, but we can grant your corporation an irrevocable, non-exclusive license to exploit those enhancements.',
        sampleResponses: [
          'We must retain ownership over core architectural derivatives, but we can grant your corporation an irrevocable, non-exclusive license to exploit those enhancements.',
          'Assigning intellectual property outright is fundamentally off the table; however, we are willing to negotiate a worldwide, royalty-free cross-license for derivative works.',
          'Our underlying architecture must remain our proprietary property. We can accommodate your operational needs via an exclusive commercial exploitation rights covenant.'
        ],
        pronunciationTip: '"irrevocable, non-exclusive license" (/ɪˈrevəkəbl nɑːn ɪkˈskluːsɪv/).',
        translation: 'Propomos que quaisquer algoritmos derivados ou patentes secundárias desenvolvidas durante a janela de integração sejam cedidas com exclusividade à nossa corporação.',
        explanation: 'Oferecer licença irrevogável de uso sem abrir mão da titularidade da propriedade intelectual evita a apropriação indevida da tecnologia.'
      },
      {
        id: 's-c1-ip-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Fechando a Estrutura de Royalties',
        contextScenario: 'Julian aceita os termos e pergunta como calcular a porcentagem de royalties trimestrais.',
        modelAudioText: 'If we accept those intellectual property boundaries, what is your revised structure regarding quarterly royalty reconciliation?',
        speechRate: 0.95,
        targetPhrase: 'We propose a tier of four percent on net licensing revenues, verified by semiannual independent audit statements with thirty-day remittance terms.',
        sampleResponses: [
          'We propose a tier of four percent on net licensing revenues, verified by semiannual independent audit statements with thirty-day remittance terms.',
          'We can agree to a tiered royalty model: five percent on initial units scaling down to three percent as volume milestones are surpassed.',
          'Our proposed model is a four percent royalty calculated against net sales, backed by standard inspection rights for accredited third-party certified auditors.'
        ],
        pronunciationTip: '"semiannual independent audit statements" (/ˌsemiˈænjuəl ˌɪndɪˈpendənt ˈɔːdɪt/).',
        translation: 'Se aceitarmos esses limites de propriedade intelectual, qual é a sua estrutura revisada para a apuração trimestral de royalties?',
        explanation: 'Especificar royalties sobre a receita líquida ("net licensing revenues") auditada fecha o contrato com precisão cirúrgica.'
      }
    ]
  },
  {
    id: 'speaking-c1-roleplay-compliance-engineering',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'c1',
    topic: 'Governança & Engenharia de Sistemas',
    title: 'Simulação: Mediando Conflito entre Velocidade de Lançamento e Conformidade de Dados',
    description: 'Medie uma reunião tensa entre o diretor de engenharia (que quer lançar o app imediatamente) e a diretora de privacidade (que exige mais testes de segurança).',
    objective: 'Conciliar velocidade de go-to-market com cumprimento estrito de normas internacionais de proteção de dados.',
    instructions: 'Acompanhe as réplicas de ambos os lados e proponha uma arquitetura de liberação progressiva com salvaguardas verificadas.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Reunião de alinhamento estratégico de lançamento de produto',
      partnerRole: 'Diretor de Engenharia (Marcus)',
      userRole: 'Líder de Produto & Conformidade (Você)',
      checklist: [
        'Validação do imperativo comercial de cumprir a data de lançamento',
        'Exigência de correção imediata de brechas de criptografia de ponta',
        'Acordo para liberação progressiva com telemetria monitorada'
      ]
    },
    questions: [
      {
        id: 's-c1-ce-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Interrompendo a Disputa e Enquadrando o Risco',
        contextScenario: 'Marcus insiste em ignorar um relatório preliminar de privacidade para lançar o app na sexta-feira.',
        modelAudioText: 'If we delay launch by another two weeks to satisfy compliance paperwork, our competitors will capture forty percent of the mobile market!',
        speechRate: 0.95,
        targetPhrase: 'Marcus, capturing market share is vital, but launching with unpatched authentication vulnerabilities invites immediate regulatory embargoes that would destroy our brand.',
        sampleResponses: [
          'Marcus, capturing market share is vital, but launching with unpatched authentication vulnerabilities invites immediate regulatory embargoes that would destroy our brand.',
          'I understand the commercial pressure; however, shipping code that violates statutory encryption standards would trigger catastrophic fines within forty-eight hours.',
          'Speed to market is worthless if our first headline is a major data breach. We need a solution that protects user data without completely stalling deployment.'
        ],
        pronunciationTip: '"unpatched authentication vulnerabilities" (/ʌnˈpætʃt ɔːˌθentɪˈkeɪʃn ˌvʌlnərəˈbɪlətiz/).',
        translation: 'Se adiarmos o lançamento por mais duas semanas para preencher papelada de conformidade, nossos concorrentes vão capturar quarenta por cento do mercado móvel!',
        explanation: 'Equilibrar o objetivo comercial com o risco existencial de um embargo regulatório enquadra a discussão na realidade.'
      },
      {
        id: 's-c1-ce-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Propondo um Lançamento Modular Gradual (Canary Release)',
        contextScenario: 'Marcus pergunta como é possível lançar sem esperar a auditoria do sistema completo.',
        modelAudioText: 'So what are you proposing? Either we deploy the full build on Friday, or we postpone everything and miss our quarterly targets.',
        speechRate: 0.95,
        targetPhrase: 'We can decouple the application: deploy the core analytics features that passed audit on Friday, while gating the unverified payment module behind a staged beta.',
        sampleResponses: [
          'We can decouple the application: deploy the core analytics features that passed audit on Friday, while gating the unverified payment module behind a staged beta.',
          'There is a middle ground: we roll out a canary deployment restricted to five percent of users, allowing compliance to audit real-time telemetry before full release.',
          'Let us disable the unverified third-party data tracking integrations for launch and release the audited core product on schedule this Friday.'
        ],
        pronunciationTip: '"decouple the application... staged beta" (/diːˈkʌpl/).',
        translation: 'Então o que você propõe? Ou publicamos a versão completa na sexta-feira ou adiamos tudo e perdemos as metas do trimestre.',
        explanation: 'A abordagem de desacoplamento modular permite honrar o prazo comercial isolando os módulos ainda sob auditoria.'
      },
      {
        id: 's-c1-ce-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Alinhando a Auditoria Contínua com a Engenharia',
        contextScenario: 'Marcus concorda com a liberação modular se a equipe de privacidade trabalhar no fim de semana para auditar os módulos restantes.',
        modelAudioText: 'If we isolate the payment gateway, can compliance guarantee an expedited audit of the secondary modules by next Wednesday?',
        speechRate: 0.95,
        targetPhrase: 'Agreed. Our compliance engineers will embed directly with your sprint team starting tomorrow morning to clear the remaining security gates by Wednesday.',
        sampleResponses: [
          'Agreed. Our compliance engineers will embed directly with your sprint team starting tomorrow morning to clear the remaining security gates by Wednesday.',
          'Deal. We will assign dedicated penetration testers to work alongside your backend leads and sign off on the gateway before Wednesday afternoon.',
          'Fair compromise. We commit to a forty-eight-hour turnaround on the remaining audits provided engineering delivers the updated documentation by Monday.'
        ],
        pronunciationTip: '"embed directly with your sprint team" (/ɪmˈbed daɪˈrektli/).',
        translation: 'Se isolarmos o módulo de pagamentos, a equipe de conformidade garante uma auditoria acelerada dos recursos restantes até a próxima quarta-feira?',
        explanation: 'Integrar especialistas de conformidade diretamente no time de desenvolvimento ("embed directly") resolve impasses com colaboração.'
      }
    ]
  },
  {
    id: 'speaking-c1-roleplay-grant-pitch',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'c1',
    topic: 'Pesquisa Científica & Captação de Recursos',
    title: 'Simulação: Defendendo um Projeto de Pesquisa Interdisciplinar perante Comitê de Fomento',
    description: 'Apresente uma solicitação de financiamento para um consórcio internacional de pesquisa em restauração ecológica marinha.',
    objective: 'Demonstrar impacto social tangível, viabilidade financeira e excelência metodológica perante avaliadores rigorosos.',
    instructions: 'Acompanhe as indagações do presidente do comitê avaliador, sustente a robustez do projeto e garanta a recomendação de verba.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Banca examinadora da Fundação Internacional de Financiamento à Ciência',
      partnerRole: 'Presidente do Comitê de Avaliação (Dra. Aris Thorne)',
      userRole: 'Cientista Coordenador do Projeto (Você)',
      checklist: [
        'Articulação da inovação metodológica do consórcio',
        'Justificativa detalhada da alocação orçamentária',
        'Garantia de impacto comunitário e transferibilidade do modelo'
      ]
    },
    questions: [
      {
        id: 's-c1-gp-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Justificando o Caráter Interdisciplinar do Projeto',
        contextScenario: 'Dra. Thorne pergunta por que o projeto exige combinar biologia marinha com inteligência artificial e sociologia pesqueira.',
        modelAudioText: 'Your grant proposal requests five million euros for an extraordinarily broad consortium. Why cannot marine biologists conduct this reef restoration in isolation?',
        speechRate: 0.95,
        targetPhrase: 'Restoration projects historically fail when treating ecology in vacuum; combining autonomous acoustic sensors with coastal sociological mapping ensures biological recovery aligns with local livelihood needs.',
        sampleResponses: [
          'Restoration projects historically fail when treating ecology in vacuum; combining autonomous acoustic sensors with coastal sociological mapping ensures biological recovery aligns with local livelihood needs.',
          'Isolated biology only diagnoses reef decay; integrating machine learning telemetry predicts bleaching events, while community sociology guarantees long-term enforcement.',
          'True ecological resilience requires socio-technical synergy: automated sensors monitor biodiversity, and local fishing cooperatives provide participatory stewardship.'
        ],
        pronunciationTip: '"autonomous acoustic sensors... sociological mapping" (/ɔːˈtɑːnəməs əˈkuːstɪk ˈsensərz/).',
        translation: 'Sua proposta de financiamento solicita cinco milhões de euros para um consórcio extraordinariamente amplo. Por que biólogos marinhos não poderiam conduzir essa restauração sozinhos?',
        explanation: 'Explicar que projetos ecológicos isolados falham sem o componente social e tecnológico justifica a interdisciplinaridade.'
      },
      {
        id: 's-c1-gp-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Defendendo a Auditoria e Alocação dos Gastos de Capital',
        contextScenario: 'Dra. Thorne questiona os custos com embarcações autônomas não tripuladas em comparação com pesquisas de campo tradicionais.',
        modelAudioText: 'Nearly thirty percent of your capital budget is earmarked for uncrewed autonomous marine vessels. Is that expenditure justifiable when diver surveys cost less upfront?',
        speechRate: 0.95,
        targetPhrase: 'Diver surveys are weather-dependent and restricted to shallow depths; autonomous vessels provide round-the-clock bathymetric data across hundreds of nautical square miles, slashing long-term per-hectare monitoring costs.',
        sampleResponses: [
          'Diver surveys are weather-dependent and restricted to shallow depths; autonomous vessels provide round-the-clock bathymetric data across hundreds of nautical square miles, slashing long-term per-hectare monitoring costs.',
          'While diver surveys appear cheaper initially, their spatial coverage is microscopic compared to autonomous submersibles that operate continuously in deep oceanic trenches.',
          'The autonomous fleet drastically reduces human risk in extreme weather while gathering continuous environmental data that diver teams simply cannot obtain.'
        ],
        pronunciationTip: '"slashing long-term per-hectare monitoring costs" (/pɜːr ˈhekter/).',
        translation: 'Quase trinta por cento do seu orçamento de capital está destinado a embarcações marinhas autônomas não tripuladas. Esse gasto é justificável quando mergulhadores custam menos inicialmente?',
        explanation: 'Demonstrar a economia de escala ("slashing per-hectare costs") e a capacidade contínua dos robôs subaquáticos convence a banca de finanças.'
      },
      {
        id: 's-c1-gp-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Transferibilidade e Acesso Aberto aos Dados',
        contextScenario: 'Dra. Thorne pergunta como o projeto garantirá que as descobertas beneficiem outras regiões costeiras vulneráveis.',
        modelAudioText: 'How will you ensure that the scientific insights and restoration blueprints developed here do not remain trapped behind academic paywalls?',
        speechRate: 0.95,
        targetPhrase: 'All sensor telemetry, genetic sequencing algorithms, and restoration protocols will be published under diamond open-access licenses and deposited in global public repositories within ninety days of generation.',
        sampleResponses: [
          'All sensor telemetry, genetic sequencing algorithms, and restoration protocols will be published under diamond open-access licenses and deposited in global public repositories within ninety days of generation.',
          'We have instituted an open-science charter: every dataset will be accessible via our public cloud portal alongside localized field toolkits in four languages.',
          'Our consortium is legally bound by open-data covenants, ensuring international conservation bodies can replicate and adapt our coral nursery models freely worldwide.'
        ],
        pronunciationTip: '"diamond open-access licenses" (/ˈdaɪəmənd ˈoʊpən ˈækses ˈlaɪsnsɪz/).',
        translation: 'Como vocês garantirão que os avanços científicos e os modelos de restauração desenvolvidos aqui não fiquem trancados atrás de barreiras pagas acadêmicas?',
        explanation: 'O compromisso explícito com licenças abertas ("diamond open access") e repositórios públicos atende ao objetivo maior dos comitês de fomento.'
      }
    ]
  }
];

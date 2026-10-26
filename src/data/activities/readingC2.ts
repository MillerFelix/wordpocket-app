import { Activity, ReadingQuestion } from '../../types/activity';

export const READING_C2: Activity<ReadingQuestion>[] = [
  // --- 1. Leia e Compreenda (Read and Comprehend) - 4 Atividades ---
  {
    id: 'reading-c2-rc-silence-contemplation',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c2',
    topic: 'Filosofia & Vida Contemporânea',
    title: 'A Fenomenologia do Silêncio e a Hiperconectividade',
    description: 'Explore um ensaio filosófico profundo sobre o silêncio não como ausência sonora, mas como condição de possibilidade do pensamento.',
    objective: 'Analisar construções discursivas complexas, sutilezas metafóricas e raciocínio dialético em nível de maestria nativa.',
    instructions: 'Leia a meditação filosófica com rigor analítico e responda avaliando distinções conceituais finas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Auditory Commons: Silence as Epistemic Sanctuary',
      genre: 'Ensaio Filosófico e Fenomenológico',
      estimatedReadTimeMinutes: 3,
      content: `In an epoch thoroughly colonized by the auditory detritus of notifications, algorithmic churn, and ambient commercial hum, silence is predominantly conceived as a privative state—a mere hiatus or sensory vacuum awaiting replenishment. Such an interpretation, however, is a profound phenomenological error. Far from an inert void, authentic silence is an intentional, affirmative medium: the very acoustic clearing wherein consciousness gathers itself and genuine hermeneutic contemplation becomes possible.

When ambient noise is ubiquitously monetized, the systematic eradication of stillness ceases to be an incidental annoyance; it metamorphoses into a subtle form of epistemic enclosure. Without pockets of contemplative quietude, the capacity for sustained dialectical synthesis atrophies. In its stead, the mind defaults to fragmented vigilance—a twitchy, hyper-reactive responsiveness to immediate stimuli that mimics alertness while starving profound introspection.

To reclaim silence, therefore, is not an act of misanthropic retreat nor an indulgence in romantic asceticism. Rather, it represents an urgent ethical imperative: an assertion of cognitive sovereignty against the relentless encroachment of calculated distraction. Only within the acoustic threshold of deliberate quiet can thought disentangle itself from the clamor of external imperatives and discover its own authentic cadence.`,
      glossary: [
        { word: 'auditory detritus', translation: 'detritos / ruídos residuais sonoros' },
        { word: 'privative state', translation: 'estado privativo (definido apenas pela carência de algo)' },
        { word: 'hermeneutic', translation: 'hermenêutica (interpretação profunda de significados)' },
        { word: 'epistemic enclosure', translation: 'cercamento epistêmico (privatização do espaço mental de reflexão)' },
        { word: 'misanthropic', translation: 'misantrópico (que rejeita ou evita a convivência social)' }
      ],
      passageTranslation: 'Numa era dominada pelo ruído contínuo de notificações e propaganda, o silêncio é tido falsamente como mera ausência ou vazio. Trata-se de um equívoco: o silêncio autêntico é um espaço ativo e indispensável para a consciência e a reflexão interpretativa. Quando o ruído é monetizado, o sumiço da quietude vira um cercamento cognitivo. Sem silêncio, a capacidade de síntese profunda atrofia, gerando uma vigilância reativa superficial. Resgatar o silêncio não é isolamento misantrópico, mas ato de soberania mental contra a distração contínua.'
    },
    questions: [
      {
        id: 'r-c2-rc-1-q1',
        type: 'multiple_choice',
        questionText: 'What common misconception regarding silence does the author critique in the opening paragraph?',
        options: [
          { id: 'A', text: 'That silence can be mathematically quantified through acoustic decibel meters' },
          { id: 'B', text: 'That silence is merely an inert void or empty absence, rather than an affirmative cognitive condition' },
          { id: 'C', text: 'That silence is inherently harmful to auditory biological receptors' },
          { id: 'D', text: 'That urban environments are quieter today than in pre-industrial eras' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor refuta a ideia de que o silêncio seja um "privative state" ou mero vácuo sensorial, defendendo que é uma condição afirmativa necessária para a reunião da consciência.'
      },
      {
        id: 'r-c2-rc-1-q2',
        type: 'multiple_choice',
        questionText: 'According to the author, what is the profound intellectual danger of a society devoid of contemplative quietude?',
        options: [
          { id: 'A', text: 'It accelerates consumer spending on acoustic noise-canceling headphones.' },
          { id: 'B', text: 'It degrades deep deliberative synthesis into an anxious, reactive state of perpetual alertness.' },
          { id: 'C', text: 'It eliminates the financial viability of commercial telecommunications networks.' },
          { id: 'D', text: 'It leads to the total extinction of classical symphonic musical composition.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto adverte que sem quietude a síntese dialética atrofia e a mente adota uma "fragmented vigilance", uma reatividade nervosa aos estímulos que imita foco mas impede reflexão genuína.'
      }
    ]
  },
  {
    id: 'reading-c2-rc-translation-untranslatability',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c2',
    topic: 'Linguística & Literatura',
    title: 'A Tradução e a Ilusão da Equivalência Perfeita',
    description: 'Analise uma reflexão teórica sobre o ato de traduzir como negociação cultural e recriação poética.',
    objective: 'Decodificar distinções ontológicas e debates tradutológicos complexos formulados em prosa erudita.',
    instructions: 'Leia a tese linguística e responda às perguntas sobre as premissas e conclusões do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Babelian Paradox: Translation as Creative Transmutation',
      genre: 'Ensaio de Filosofia da Linguagem e Crítica Literária',
      estimatedReadTimeMinutes: 3,
      content: `The naive conception of translation presumes a mechanical fidelity: the bilateral transfer of static semantic tokens from a source code to a destination vernacular with zero loss of communicative payload. Such an instrumentalist premise collapses upon the briefest encounter with poetic cadence, idiomatic resonance, and historical cultural subtext. Language is not a transparent conduit conveying pre-linguistic thoughts; it is an organic, historically situated horizon that shapes what can be conceptualized and expressed.

Consequently, every rigorous translator operates within the shadow of what Walter Benjamin characterized as the fundamental kinship of languages—striving not for mimicry, but for resonance. Where superficial translators flatten linguistic idiosyncrasies into seamless, sanitized prose to spare the reader cognitive dissonance, master practitioners engage in deliberate foreignization. They permit the syntactical cadence of the original to exert a palpable gravitational tug upon the target language, expanding its expressive contours.

Far from being an admission of inadequacy, the recognition of essential untranslatability is the indispensable genesis of genuine intercultural dialogue. To translate is not to eradicate difference under an illusory veneer of equivalence, but to construct a precarious linguistic bridge across which distinct cultural worldviews can gaze into one another’s inherent alterity.`,
      glossary: [
        { word: 'bilateral transfer', translation: 'transferência mútua / bidirecional direta' },
        { word: 'instrumentalist premise', translation: 'premissa instrumental / visão puramente utilitária' },
        { word: 'foreignization', translation: 'estrangeirização (manter marcas culturais do texto de partida)' },
        { word: 'alterity', translation: 'alteridade (a condição do outro, a diferença intrínseca)' }
      ],
      passageTranslation: 'A visão ingênua da tradução supõe a troca mecânica de vocábulos entre idiomas sem perda de sentido. No entanto, a língua não é mero condutor transparente, mas um horizonte histórico vivo. Enquanto tradutores superficiais pasteurizam o texto para eliminar estranhezas, os mestres usam a estrangeirização consciente: deixam o ritmo e a sintaxe do original moldarem a língua de chegada. Reconhecer a intraduzibilidade essencial não é fraqueza, mas o ponto de partida para um diálogo intercultural autêntico que respeita a alteridade.'
    },
    questions: [
      {
        id: 'r-c2-rc-2-q1',
        type: 'multiple_choice',
        questionText: 'What practice distinguishes master translators from superficial translators according to the text?',
        options: [
          { id: 'A', text: 'Using automated algorithms to ensure exact mathematical word count parity' },
          { id: 'B', text: 'Engaging in intentional foreignization that allows the original’s cadence to expand the target language' },
          { id: 'C', text: 'Eliminating all historical archaisms in favor of contemporary internet vernacular' },
          { id: 'D', text: 'Refusing to publish translations without the original author’s notarized consent' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor contrapõe tradutores superficiais (que pasteurizam o texto) a mestres praticantes que praticam a "deliberate foreignization", permitindo que o original exerça atração e enriqueça a língua de chegada.'
      },
      {
        id: 'r-c2-rc-2-q2',
        type: 'multiple_choice',
        questionText: 'How does the author reframe the notion of "untranslatability"?',
        options: [
          { id: 'A', text: 'As an insurmountable barrier that renders international diplomacy futile' },
          { id: 'B', text: 'As the vital conceptual foundation for true intercultural dialogue that honors difference' },
          { id: 'C', text: 'As a commercial justification for inflating publishing royalties' },
          { id: 'D', text: 'As a temporary flaw in linguistic dictionaries that will soon be resolved' }
        ],
        correctOptionId: 'B',
        explanation: 'O último parágrafo conclui que reconhecer a intraduzibilidade "is the indispensable genesis of genuine intercultural dialogue", construindo pontes que respeitam a alteridade em vez de mascará-la.'
      }
    ]
  },
  {
    id: 'reading-c2-rc-memory-digital-archive',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c2',
    topic: 'História & Filosofia da Tecnologia',
    title: 'A Memória Coletiva e a Vertigem do Esquecimento Impossível',
    description: 'Investigue o paradoxo de viver em uma sociedade hipermnésica onde tudo é registrado, mas pouco é compreendido.',
    objective: 'Interpretar teses filosóficas sobre o papel do esquecimento como elemento estruturante da sabedoria humana.',
    instructions: 'Leia a crítica historiográfica e responda às questões sobre causalidade conceitual e implicações civilizatórias.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Curse of Borgesian Total Recall: Memory in the Cloud Age',
      genre: 'Ensaio Historiográfico e Epistemológico',
      estimatedReadTimeMinutes: 3,
      content: `Jorge Luis Borges’ canonical parable "Funes the Memorious" depicted an unfortunate youth condemned to remember every nuance of every cloud, leaf, and dream—a condition that paradoxically incapacitated him from abstract thought, for to generalize is, by definition, to disregard irrelevant particularities. Today, contemporary civilization has externalized Funes’ afflictive pathology into silicon architectures. We inhabit a hypermnesic culture in which digital sediment is inexorably compiled, indexed, and immortalized.

Historically, human memory functioned in harmonious synergy with forgetting. Oblivion was not an evolutionary defect, but a benevolent cognitive filter: it allowed grievances to dissolve, past indiscretions to fade, and societies to forge communal solidarity across generational divides. In contrast, the perpetual digital archive renders the past indelibly contemporary. Transgressions committed in adolescence linger as immutable reputational stains; provisional ideas aired decades prior are exhumed with instantaneous forensic precision.

This eradication of oblivion subverts the very morphology of human maturation. Growth presupposes the liberty to outgrow former iterations of the self without being endlessly confronted with their petrified digital remnants. In depriving humanity of the restorative grace of forgetfulness, the comprehensive archive risks breeding a timorous, paralyzed civilization terrified of spontaneous experimentation.`,
      glossary: [
        { word: 'hypermnesic', translation: 'hipermnésico (com capacidade anômala e excessiva de memorização)' },
        { word: 'oblivion', translation: 'esquecimento / apagamento do passado' },
        { word: 'exhumed', translation: 'exumadas / desenterradas' },
        { word: 'morphology', translation: 'morfologia / estrutura de desenvolvimento' },
        { word: 'timorous', translation: 'tímida / receosa / acovardada' }
      ],
      passageTranslation: 'No conto de Borges, Funes lembrava-se de tudo mas era incapaz de pensar abstratamente, pois pensar exige ignorar pormenores. Hoje, construímos uma cultura hipermnésica que registra tudo na nuvem. Historicamente, o esquecimento foi um filtro vital para dissolver rancores e amadurecer. O arquivo digital eterno torna o passado permanentemente presente, castigando erros juvenis e inibindo a evolução pessoal. Sem o esquecimento, arriscamos formar uma sociedade paralisada e com medo de experimentar.'
    },
    questions: [
      {
        id: 'r-c2-rc-3-q1',
        type: 'multiple_choice',
        questionText: 'What essential cognitive role does the author ascribe to "oblivion" in human history?',
        options: [
          { id: 'A', text: 'A catastrophic neurological impairment that delayed mathematical discoveries' },
          { id: 'B', text: 'A restorative filter enabling forgiveness, conceptual abstraction, and personal renewal' },
          { id: 'C', text: 'A tool utilized by medieval monarchs to rewrite civic legal codes' },
          { id: 'D', text: 'An accidental by-product of caloric scarcity in hunter-gatherer bands' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor postula que o esquecimento não era falha, mas um filtro benéfico ("benevolent cognitive filter") que permitia superar ressentimentos e abstrair ideias essenciais para amadurecer.'
      },
      {
        id: 'r-c2-rc-3-q2',
        type: 'multiple_choice',
        questionText: 'What broader civilizational hazard arises from the permanence of the digital archive?',
        options: [
          { id: 'A', text: 'A severe global shortage of silicon semiconductors for cloud data centers' },
          { id: 'B', text: 'A culture paralyzed by fear of social experimentation due to indelible past records' },
          { id: 'C', text: 'The mandatory replacement of academic degrees with algorithmic certifications' },
          { id: 'D', text: 'A rapid loss of interest in reading canonical Argentine literature' }
        ],
        correctOptionId: 'B',
        explanation: 'O parágrafo final alerta que a perda do esquecimento gera uma civilização receosa e paralisada ("timorous, paralyzed civilization"), com medo de ousar por temer o registro indelével de seus erros.'
      }
    ]
  },
  {
    id: 'reading-c2-rc-craft-automation',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c2',
    topic: 'Trabalho, Arte & Tecnologia',
    title: 'O Artesanato, a Imperfeição e a Prótese Algorítmica',
    description: 'Analise uma dissertação sobre a perda da sabedoria tátil frente à proliferação de modelos gerativos perfeitos.',
    objective: 'Compreender argumentos estéticos e ontológicos formulados com riqueza estilística e vocabulário erudito.',
    instructions: 'Leia a reflexão sobre maestria material e responda às questões de avaliação interpretativa.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Tactile Intimacy of Material Resistance',
      genre: 'Crítica Estética e Filosofia da Produção',
      estimatedReadTimeMinutes: 3,
      content: `The allure of generative automation lies in its seductive promise of frictionlessness: human ideation is converted instantaneously into synthetic output, skipping the arduous intermediaries of physical exertion, material recalcitrance, and physical fatigue. With a single prompt, flawless architectural renderings, symphonic variations, and poetic stanzas materialize with uncanny polish. Yet, in this triumphant banquet of effortless production, something elemental to the human condition is surreptitiously forfeited: the transformative friction of material dialogue.

Craftsmanship, as theorized by Richard Sennett, is not the mere technical execution of an idealized mental blueprint; it is an ongoing negotiation with the stubborn unpredictability of matter. The master luthier listens to the irregular grain of maple; the stonemason calibrates chisel strikes according to microscopic fissure lines. In grappling with material resistance, the artisan’s consciousness undergoes an internal alchemy—patience is forged, somatic intuition is cultivated, and humble deference to reality is inscribed into character.

Automated generation, by contrast, operates in a frictionless ether devoid of gravity. It delivers immaculate results without demanding internal cultivation. When the struggles of the making process are eradicated, the resulting artifact may exhibit cosmetic perfection, but it remains an alienated commodity—severed from the embodied human struggle that alone infuses craftsmanship with existential weight.`,
      glossary: [
        { word: 'material recalcitrance', translation: 'recalcitrância / resistência teimosa da matéria' },
        { word: 'surreptitiously forfeited', translation: 'sorrateiramente abandonado / perdido' },
        { word: 'luthier', translation: 'luthier (artesão que constrói instrumentos de corda)' },
        { word: 'somatic intuition', translation: 'intuição somática (sabedoria intuitiva corporal/tátil)' },
        { word: 'immaculate', translation: 'imaculado / sem falhas superficiais' }
      ],
      passageTranslation: 'A automação gerativa seduz pela ausência de atrito: ideias viram produtos instantâneos sem esforço físico nem cansaço. Contudo, perde-se algo essencial: o diálogo com a resistência da matéria. O artesanato autêntico não é execução mecânica de um plano, mas uma negociação viva com a madeira ou a pedra. Ao enfrentar essa resistência, o artesão lapida sua própria paciência e sabedoria corporal. A produção sem atrito gera resultados esteticamente impecáveis, mas vazios do peso existencial da luta humana.'
    },
    questions: [
      {
        id: 'r-c2-rc-4-q1',
        type: 'multiple_choice',
        questionText: 'According to the author, how does authentic craftsmanship transform the practitioner?',
        options: [
          { id: 'A', text: 'By guaranteeing maximum commercial revenue through rapid mass production' },
          { id: 'B', text: 'By fostering patience, somatic intuition, and humble deference through the struggle with material resistance' },
          { id: 'C', text: 'By enabling the complete elimination of physical hand tools in favor of laser precision' },
          { id: 'D', text: 'By insulating the artisan entirely from economic market forces' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor afirma que o embate com a resistência da matéria forja a paciência, lapida a intuição corporal e ensina humildade perante a realidade.'
      },
      {
        id: 'r-c2-rc-4-q2',
        type: 'multiple_choice',
        questionText: 'What deficiency does the author attribute to effortlessly generated synthetic outputs?',
        options: [
          { id: 'A', text: 'They consistently contain grammatical and structural errors that cannot be corrected.' },
          { id: 'B', text: 'They possess surface perfection while lacking the existential resonance derived from embodied human effort.' },
          { id: 'C', text: 'They are prohibitively expensive for municipal cultural centers to acquire.' },
          { id: 'D', text: 'They fail to adhere to basic mathematical acoustic harmonics.' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta que o produto sem atrito pode exibir perfeição cosmética, mas permanece alienado e sem o peso existencial fruto do esforço e corporificação humana.'
      }
    ]
  },

  // --- 2. Descubra pelo Contexto (Context Clue) - 4 Atividades ---
  {
    id: 'reading-c2-cc-recondite-veracity',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c2',
    topic: 'Crítica Epistemológica',
    title: 'Desvendando o Termo: "Recondite"',
    description: 'Decodifique vocabulário de alta erudição por meio de contrastes e estruturas sintáticas complexas.',
    objective: 'Identificar nuances de termos sofisticados em ensaios acadêmicos e dissertações teóricas.',
    instructions: 'Examine o trecho abaixo e determine o sentido preciso do adjetivo destacado.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Hermeneutics of Obscurity',
      genre: 'Ensaio Teórico Crítico',
      estimatedReadTimeMinutes: 2,
      content: `Rather than illuminating the foundational principles of jurisprudence for the lay public, the academic committee retreated into **recondite** scholastic disputations. By cloaking lucid concepts in dense, archaic Latinate jargon accessible only to an initiated cadre of doctrinal specialists, the jurists effectively alienated the very citizenry whose civil liberties they purported to champion.`,
      glossary: [
        { word: 'jurisprudence', translation: 'jurisprudência / teoria do direito' },
        { word: 'scholastic disputations', translation: 'disputas escolásticas / debates teóricos abstratos' },
        { word: 'cadre', translation: 'quadro restrito / grupo de iniciados' }
      ],
      passageTranslation: 'Em vez de esclarecer princípios do direito para o público geral, o comitê refugiou-se em discussões reconnditas ("recondite"). Ao mascarar ideias claras com jargões arcaicos acessíveis apenas a especialistas, afastaram os próprios cidadãos que diziam defender.'
    },
    questions: [
      {
        id: 'r-c2-cc-1-q1',
        type: 'multiple_choice',
        questionText: 'Within the context of the passage, "recondite" most accurately signifies:',
        options: [
          { id: 'A', text: 'Universally comprehensible and widely celebrated by ordinary people' },
          { id: 'B', text: 'Abstruse, obscure, and dealing with matters little known or difficult for normal comprehension' },
          { id: 'C', text: 'Extremely offensive and defamatory toward civic authorities' },
          { id: 'D', text: 'Economically ruinous and causing financial insolvency' }
        ],
        correctOptionId: 'B',
        explanation: 'O contraste com "illuminating for the lay public" e a menção a jargões acessíveis apenas a "an initiated cadre" demonstram que "recondite" significa obscuro, impenetrável ou de difícil compreensão.'
      }
    ]
  },
  {
    id: 'reading-c2-cc-meretricious-allure',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c2',
    topic: 'Crítica Cultural & Estética',
    title: 'Desvendando o Termo: "Meretricious"',
    description: 'Reconheça vocabulário valorativo refinado empregado na crítica de arte e arquitetura contemporânea.',
    objective: 'Discernir nuances morais e estéticas expressas por adjetivos de registro erudito.',
    instructions: 'Leia a apreciação estética e selecione a definição que captura com precisão o termo em destaque.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Gilded Facade of Consumer Spectacle',
      genre: 'Crítica de Arquitetura e Urbanismo',
      estimatedReadTimeMinutes: 2,
      content: `The newly inaugurated civic pavilion, hailed by corporate benefactors as an architectural milestone, struck discerning observers as thoroughly **meretricious**. Beneath its dazzling veneer of gold leaf and mirrored surfaces lay hollow drywall construction, superficial structural engineering, and an utter absence of enduring civic dignity. It offered a fleeting optical spectacle while lacking authentic substance.`,
      glossary: [
        { word: 'benefactors', translation: 'benfeitores / patrocinadores' },
        { word: 'veneer', translation: 'verniz superficial / revestimento externo' },
        { word: 'drywall', translation: 'gesso acartonado / divisória oca' }
      ],
      passageTranslation: 'O novo pavilhão público, aclamado por patrocinadores, pareceu aos críticos lúcidos inteiramente meretrício ("meretricious"). Sob a camada reluzente de folhas de ouro havia apenas gesso oco e engenharia frágil: um espetáculo óptico chamativo, porém vazio de substância autêntica.'
    },
    questions: [
      {
        id: 'r-c2-cc-2-q1',
        type: 'multiple_choice',
        questionText: 'In this critique, the adjective "meretricious" describes something that is:',
        options: [
          { id: 'A', text: 'Structurally unshakeable and capable of enduring centuries of environmental wear' },
          { id: 'B', text: 'Apparently attractive or showy but fundamentally lacking real integrity, depth, or value' },
          { id: 'C', text: 'Designed specifically for non-profit humanitarian aid distribution' },
          { id: 'D', text: 'Created entirely through ancient handcraft methods' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto descreve algo brilhante por fora ("dazzling veneer") mas oco por dentro ("utter absence of enduring civic dignity"), definindo perfeitamente "meretricious" como superficialmente chamativo, mas sem valor genuíno.'
      }
    ]
  },
  {
    id: 'reading-c2-cc-supercilious-hauteur',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c2',
    topic: 'Psicologia & Retratos Sociais',
    title: 'Desvendando o Termo: "Supercilious"',
    description: 'Analise a caracterização de condutas interpessoais em crônicas narrativas e descrições de elite.',
    objective: 'Inferir traços comportamentais e atitudes psicológicas codificadas em prosa literária.',
    instructions: 'Examine o perfil comportamental e selecione a correspondência exata do termo destacado.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Echoes in the Boardroom',
      genre: 'Retrato Narrativo Social',
      estimatedReadTimeMinutes: 2,
      content: `Whenever junior associates proposed procedural reforms, Senior Partner Cavendish greeted their presentations with a **supercilious** smirk. Resting his chin in his hand, he would glance disdainfully at his watch, offering curt, patronizing dismissals before colleagues could even conclude their foundational remarks, leaving no doubt regarding his supreme sense of condescending superiority.`,
      glossary: [
        { word: 'associates', translation: 'associados / profissionais juniores' },
        { word: 'disdainfully', translation: 'com desdém / com superioridade altiva' },
        { word: 'curt', translation: 'seco / ríspido e lacônico' }
      ],
      passageTranslation: 'Sempre que jovens associados propunham melhorias, o sócio sênior Cavendish reagia com um sorriso supercilioso ("supercilious"). Olhava para o relógio com desdém e emitia respostas paternalistas e ríspidas, evidenciando seu sentimento de arrogante superioridade.'
    },
    questions: [
      {
        id: 'r-c2-cc-3-q1',
        type: 'multiple_choice',
        questionText: 'What is the precise behavioral characterization indicated by "supercilious"?',
        options: [
          { id: 'A', text: 'Profoundly empathetic, listening attentively with warm generosity' },
          { id: 'B', text: 'Behaving or looking as though one thinks one is far superior to others; arrogantly haughty' },
          { id: 'C', text: 'Paralyzed by extreme stage fright and self-doubt' },
          { id: 'D', text: 'Physically exhausted due to prolonged manual exertion' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto associa o termo a gestos desdenhosos, respostas arrogantes ("patronizing dismissals") e "condescending superiority", demonstrando que "supercilious" significa altivo, soberbo e desdenhoso.'
      }
    ]
  },
  {
    id: 'reading-c2-cc-inimical-discord',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c2',
    topic: 'Ecologia & Teoria Organizacional',
    title: 'Desvendando o Termo: "Inimical"',
    description: 'Decodifique relações de antagonismo e incompatibilidade em tratados analíticos avançados.',
    objective: 'Identificar a polaridade e o impacto de relações ecossistêmicas descritas com precisão vocabular.',
    instructions: 'Leia a análise sobre ecologia de cooperação e escolha o significado do vocábulo em evidência.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Dynamics of Institutional Cohesion',
      genre: 'Ensaio de Sociologia Organizacional',
      estimatedReadTimeMinutes: 2,
      content: `The implementation of hyper-individualized bonus schemes proved directly **inimical** to departmental collaboration. Instead of incentivizing mutual assistance, the competitive metric pitted engineers against one another, generating pervasive mistrust, suppressing information sharing, and ultimately sabotaging collective productivity across the enterprise.`,
      glossary: [
        { word: 'hyper-individualized', translation: 'hiperindividualizado' },
        { word: 'pitted against', translation: 'jogou uns contra os outros / incitou rivalidade' },
        { word: 'pervasive mistrust', translation: 'desconfiança generalizada' }
      ],
      passageTranslation: 'A criação de bônus hiperindividualizados foi diretamente hostil/inimiga ("inimical") da colaboração entre setores. Em vez de apoio mútuo, a métrica instigou rivalidades, semeou desconfiança e sabotou a produtividade coletiva da empresa.'
    },
    questions: [
      {
        id: 'r-c2-cc-4-q1',
        type: 'multiple_choice',
        questionText: 'Within the excerpt, the word "inimical" means:',
        options: [
          { id: 'A', text: 'Remarkably favorable and harmoniously conducive' },
          { id: 'B', text: 'Hostile, adverse, destructive, or fundamentally contrary to something' },
          { id: 'C', text: 'Completely unrelated and existing in total mathematical isolation' },
          { id: 'D', text: 'Temporarily postponed pending further bureaucratic review' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto mostra que a medida provocou desconfiança, destruiu a colaboração e sabotou a produtividade, revelando que "inimical" significa adverso, hostil ou antagônico.'
      }
    ]
  },

  // --- 3. Interprete a Mensagem (Interpret the Message) - 4 Atividades ---
  {
    id: 'reading-c2-im-ambassadorial-communique',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c2',
    topic: 'Relações Internacionais & Diplomacia',
    title: 'A Retórica da Dissuasão Diplomática Velada',
    description: 'Decifre alertas estratégicos codificados sob linguagem protocolar impecável em um comunicado entre nações.',
    objective: 'Identificar ultimatos tácitos e implicações de advertência disfarçados sob cortesias diplomáticas.',
    instructions: 'Leia o pronunciamento e avalie o verdadeiro aviso geopolítico implícito no texto.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Joint Communiqué on Maritime Transit Protocols',
      genre: 'Declaração Diplomática Multilateral',
      estimatedReadTimeMinutes: 2,
      content: `The Ministry notes with profound appreciation the sustained bilateral commitment to peace and navigational stability along the shared littoral corridor. We remain steadfast in our conviction that historical treaties must continue to anchor regional prosperity.

It is precisely out of this dedication to mutual serenity that the Ministry views recent unilateral hydrographic deployments with genuine concern. While we do not question our neighbor’s benign characterization of these maneuvers as routine bathymetric research, prolonged failure to notify the joint oversight commission risks inviting unhelpful misinterpretations. Our naval logistics command has consequently been advised to maintain heightened radar readiness to assist, should any unexpected navigational difficulties arise in these delicate waters.`,
      glossary: [
        { word: 'littoral corridor', translation: 'corredor marítimo litorâneo' },
        { word: 'bathymetric', translation: 'batimétrico (medição de profundidade oceânica)' },
        { word: 'heightened radar readiness', translation: 'prontidão / alerta ampliado de radar' }
      ],
      passageTranslation: 'O Ministério reafirma o apreço pela paz e a estabilidade na navegação do corredor litorâneo compartilhado. Contudo, vê com preocupação o envio unilateral de embarcações de pesquisa sem notificação prévia à comissão conjunta. Embora o vizinho afirme tratar-se de pesquisa de rotina, a falta de aviso abre margem para equívocos indesejáveis. Por essa razão, instruímos nossa esquadra a manter alerta reforçado de radar para prevenir quaisquer intercorrências.'
    },
    questions: [
      {
        id: 'r-c2-im-1-q1',
        type: 'multiple_choice',
        questionText: 'What is the true diplomatic intent behind the Ministry’s measured communiqué?',
        options: [
          { id: 'A', text: 'To unconditionally surrender coastal fishing rights to the neighboring state' },
          { id: 'B', text: 'To deliver a veiled warning that unsanctioned maritime activity is being actively tracked by military naval forces' },
          { id: 'C', text: 'To sponsor an academic oceanic conference for student hydrographers' },
          { id: 'D', text: 'To express gratitude for historical maritime bathymetric discoveries' }
        ],
        correctOptionId: 'B',
        explanation: 'A linguagem cortês encobre um aviso nítido: a declaração de que a esquadra naval foi orientada a manter "heightened radar readiness" sinaliza prontidão militar diante de manobras não comunicadas.'
      },
      {
        id: 'r-c2-im-1-q2',
        type: 'multiple_choice',
        questionText: 'How does the Ministry politely express its skepticism regarding the neighbor’s stated motives?',
        options: [
          { id: 'A', text: 'By overtly denouncing the neighbor’s scientists as fraudulent spies' },
          { id: 'B', text: 'By acknowledging their "benign characterization" while immediately highlighting the risk of "unhelpful misinterpretations"' },
          { id: 'C', text: 'By demanding immediate financial compensation for radar electricity expenditures' },
          { id: 'D', text: 'By withdrawing all diplomatic staff from the embassy permanently' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase diplomática "While we do not question our neighbor’s benign characterization... risks inviting unhelpful misinterpretations" é a fórmula clássica para indicar ceticismo educado sem declarar hostilidade aberta.'
      }
    ]
  },
  {
    id: 'reading-c2-im-curatorial-polemic',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c2',
    topic: 'Estética & Curadoria',
    title: 'A Polêmica Curatorial e o Mercado da Arte',
    description: 'Interprete o subtexto polêmico e o tom desabusado de um manifesto curatorial desafiando o circuito comercial.',
    objective: 'Reconhecer sátira culta, posicionamento ideológico e alusões estéticas no discurso museológico.',
    instructions: 'Leia o texto de introdução do catálogo e analise a denúncia feita pelo curador.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Catalogue Introduction: Beyond the Speculative Mirror',
      genre: 'Manifesto Curatorial de Arte Contemporânea',
      estimatedReadTimeMinutes: 2,
      content: `This exhibition was not conceived to provide wealthy collectors with asset-class diversification disguised as spiritual enlightenment, nor was it curated to provide an aesthetically photogenic backdrop for social media influencers seeking cultural credibility.

In assembling these sculptural interventions, we have deliberately selected works that refuse to behave as compliant domestic decor. They do not flatter the collector’s vanity; they reek of raw tar, industrial slag, and unvarnished labor. If you enter these galleries seeking comfort, reassurance, or a reaffirmation of the prevailing financial consensus, you will leave profoundly disappointed. If, however, you possess the stomach to confront the raw contradictions of late-stage extractive capital, you may find something approaching honesty.`,
      glossary: [
        { word: 'asset-class diversification', translation: 'diversificação de classe de ativos financeiros' },
        { word: 'compliant domestic decor', translation: 'decoração doméstica obediente / dócil' },
        { word: 'industrial slag', translation: 'escória industrial / resíduo de fundição' }
      ],
      passageTranslation: 'Esta exposição não foi concebida para oferecer aos colecionadores milionários uma forma de diversificar investimentos travestida de elevação espiritual, nem como cenário fotogênico para redes sociais. As obras escolhidas recusam o papel de mobília decorativa: cheiram a alcatrão cru e trabalho pesado. Quem busca consolo sairá desapontado; quem tiver coragem de encarar as contradições do capital extrativo encontrará algo próximo à honestidade.'
    },
    questions: [
      {
        id: 'r-c2-im-2-q1',
        type: 'multiple_choice',
        questionText: 'What is the primary target of the curator’s caustic opening remarks?',
        options: [
          { id: 'A', text: 'The municipal government’s fire safety regulations inside exhibition galleries' },
          { id: 'B', text: 'The commercial commodification of art as speculative financial assets and vanity backdrops' },
          { id: 'C', text: 'The lack of sufficient natural lighting inside modern sculpture museums' },
          { id: 'D', text: 'The excessive cost of industrial raw materials like tar and concrete' }
        ],
        correctOptionId: 'B',
        explanation: 'O curador mira explicitamente no mercado financeiro de arte ("asset-class diversification disguised as spiritual enlightenment") e na vaidade das redes sociais, defendendo uma arte que desestabilize o público.'
      }
    ]
  },
  {
    id: 'reading-c2-im-resignation-epistle',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c2',
    topic: 'Ética Pública & Governança',
    title: 'A Carta de Renúncia e a Ética Institucional',
    description: 'Avalie uma carta pública de renúncia identificando o conflito irresolúvel de valores entre o signatário e a liderança.',
    objective: 'Decodificar acusações institucionais graves articuladas sob estrito comedimento formal.',
    instructions: 'Leia o comunicado de renúncia e identifique a essência da denúncia apresentada.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Formal Resignation from the Ethics Advisory Panel',
      genre: 'Carta Aberta Institucional',
      estimatedReadTimeMinutes: 2,
      content: `Dear Madam Chairperson,

It has been my honor to serve on the Environmental Ethics Council for the past seven years. During this tenure, our committee strived to ground regulatory recommendations in unyielding scientific veracity and transparent public dialogue.

Recent administrative restructuring, however, has made it abundantly clear that the Council’s continued existence is intended to function as an instrument of retrospective legitimation rather than proactive oversight. When rigorous epidemiological caveats are systematically redacted from public briefings to expedite industrial permitting, retaining my seat would signify complicity rather than service. I hereby tender my resignation, effective immediately, so that my silence may not be construed as assent.`,
      glossary: [
        { word: 'unyielding', translation: 'inflexível / intransigente' },
        { word: 'retrospective legitimation', translation: 'legitimação retroativa (dar aval forçado a decisões já tomadas)' },
        { word: 'redacted', translation: 'censuradas / suprimidas do documento' },
        { word: 'construed as assent', translation: 'interpretada como consentimento ou concordância' }
      ],
      passageTranslation: 'Prezada Presidente: Foi uma honra servir no Conselho de Ética Ambiental por sete anos. Contudo, recentes mudanças deixaram claro que o conselho passou a ser usado como chancela de fachada para decisões prévias, e não como órgão fiscalizador. Quando alertas epidemiológicos são censurados para acelerar licenças industriais, permanecer no cargo seria cumplicidade. Apresento minha renúncia imediata para que meu silêncio não seja tomado como concordância.'
    },
    questions: [
      {
        id: 'r-c2-im-3-q1',
        type: 'multiple_choice',
        questionText: 'What fundamental grievance compelled the author to resign from the Council?',
        options: [
          { id: 'A', text: 'The council members were denied salary increases during the fiscal year' },
          { id: 'B', text: 'The advisory body was being weaponized as a rubber stamp for predetermined decisions while scientific warnings were censored' },
          { id: 'C', text: 'The chairperson demanded that all meetings be held exclusively via video conferencing' },
          { id: 'D', text: 'The tenure limit had expired according to constitutional statutes' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor renuncia porque o conselho virou instrumento de fachada ("retrospective legitimation") e alertas epidemiológicos foram censurados ("systematically redacted from public briefings") para agilizar licenças.'
      }
    ]
  },
  {
    id: 'reading-c2-im-literary-critique-satire',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c2',
    topic: 'Crítica Literária & Mercado Editorial',
    title: 'A Desconstrução da Obra-Prima Instantânea',
    description: 'Analise uma resenha literária mordaz que disseca a fabricação mercadológica de autores celebrados.',
    objective: 'Reconhecer ironia cáustica e discernir o julgamento estético autêntico sob o elogio aparente.',
    instructions: 'Leia a crítica literária e identifique a avaliação substantiva que o resenhista faz da obra.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Review: The Anatomy of a Calculated Bestseller',
      genre: 'Resenha Crítica Cultural',
      estimatedReadTimeMinutes: 2,
      content: `The publisher’s publicity apparatus has spared no superlative in heralding Julian Crane’s latest novel as "the definitive generational epic of our fractured millennium." It is indeed a breathtaking achievement—if one defines literary mastery as the seamless assembly of every focus-group-tested trope currently circulating in creative writing workshops.

Crane exhibits an undeniably formidable talent for assembling sentences that sound profound until one pauses to consider their semantic freight. Characters weep with immaculate synchronization, deliver miniature sociological dissertations over cold brew coffee, and navigate their meticulously curated melancholies without ever risking the messiness of genuine human incoherence. It is fiction engineered not to challenge, but to be admired by individuals who enjoy feeling intellectually daring without ever being genuinely disturbed.`,
      glossary: [
        { word: 'heralding', translation: 'anunciando com grande alarde / proclamando' },
        { word: 'semantic freight', translation: 'peso / densidade de significado semântico' },
        { word: 'curated melancholies', translation: 'melancolias cuidadosamente encenadas / calculadas' }
      ],
      passageTranslation: 'O departamento de marketing não poupou superlativos ao aclamar o novo livro de Julian Crane como "o épico definitivo do milênio". É de fato um triunfo espantoso — caso se defina maestria literária como a colagem de clichês testados em pesquisas de mercado. As frases parecem profundas até serem pensadas; os personagens choram na hora exata e declamam tratados sociológicos tomando café, sem a incoerência da vida real. Uma ficção feita para quem gosta de parecer culto sem jamais ser incomodado.'
    },
    questions: [
      {
        id: 'r-c2-im-4-q1',
        type: 'multiple_choice',
        questionText: 'What is the reviewer’s definitive judgment regarding Julian Crane’s novel?',
        options: [
          { id: 'A', text: 'It is a groundbreaking stylistic triumph that redefines 21st-century narrative voice.' },
          { id: 'B', text: 'It is a calculated, emotionally artificial product engineered to flatter intellectual pretensions without authentic depth.' },
          { id: 'C', text: 'It should be immediately banned from national university literature curricula.' },
          { id: 'D', text: 'It suffered from poor typographical printing and translation errors.' }
        ],
        correctOptionId: 'B',
        explanation: 'Apesar da ironia de chamar o livro de "breathtaking achievement", o crítico demonstra que se trata de uma obra artificial ("focus-group-tested", "without ever risking the messiness of genuine human incoherence"), feita para afagar vaidades intelectuais.'
      }
    ]
  },

  // --- 4. Identifique a Ideia Principal (Main Idea) - 3 Atividades ---
  {
    id: 'reading-c2-mi-epistemic-humility',
    pillar: 'reading',
    type: 'main_idea',
    level: 'c2',
    topic: 'Filosofia da Ciência & Epistemologia',
    title: 'A Ideia Central: A Humildade Epistêmica no Método Científico',
    description: 'Sintetize a tese central de uma reflexão sobre a provisionalidade essencial do conhecimento científico.',
    objective: 'Extrair a proposição nuclear de um texto epistemológico denso sem se perder em digressões conceituais.',
    instructions: 'Leia a reflexão e selecione a alternativa que encapsula fielmente a tese mestra do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Architecture of Incompletion: Science as Ongoing Revision',
      genre: 'Ensaio Filosófico sobre Epistemologia Científica',
      estimatedReadTimeMinutes: 2,
      content: `Popular discourse frequently conflates scientific inquiry with the unassailable proclamation of dogmatic certitudes. When experimental paradigms are revised or public health recommendations recalibrated in light of emergent empirical evidence, dogmatic critics cynically proclaim the failure of science itself. Such cynicism betrays a catastrophic misunderstanding of what makes the scientific endeavor historically exceptional.

Science is not an accumulated reliquary of immutable dogmas; it is a rigorous method of organized fallibilism. Its intellectual nobility stems not from claiming infallible omniscience, but precisely from its institutionalized willingness to acknowledge provisionality, interrogate foundational premises, and discard cherished hypotheses when contradicted by rigorous empirical observation. To demand permanent, unalterable dogma from science is to demand that it abandon its very essence: epistemic humility in the face of an infinitely intricate cosmos.`,
      glossary: [
        { word: 'reliquary', translation: 'relicário (cofre onde se guardam relíquias sagradas imutáveis)' },
        { word: 'fallibilism', translation: 'falibilismo (princípio filosófico de que todo conhecimento é passível de revisão)' },
        { word: 'epistemic humility', translation: 'humildade epistêmica (reconhecimento dos limites do próprio saber)' }
      ],
      passageTranslation: 'O senso comum costuma confundir ciência com certezas dogmáticas inquestionáveis, e quando uma recomendação muda diante de novas evidências, acusam a ciência de fracasso. Trata-se de um erro grave: a ciência não é um museu de dogmas imutáveis, mas um método de falibilismo organizado. Sua grandeza reside justamente em admitir a provisionalidade do conhecimento e reformular hipóteses perante os fatos. Exigir dogmas eternos da ciência é destruir sua própria essência: a humildade epistêmica.'
    },
    questions: [
      {
        id: 'r-c2-mi-1-q1',
        type: 'multiple_choice',
        questionText: 'Which statement best articulates the primary thesis defended throughout the essay?',
        options: [
          { id: 'A', text: 'Scientific consensus must never be questioned once ratified by international councils.' },
          { id: 'B', text: 'The authentic strength and nobility of science reside in its systematic fallibilism and willingness to revise provisional knowledge, rather than in claims of absolute dogma.' },
          { id: 'C', text: 'Public health authorities should withhold emerging data from citizens to prevent confusion.' },
          { id: 'D', text: 'Empirical experimentation has become obsolete following advancements in quantum computing.' }
        ],
        correctOptionId: 'B',
        explanation: 'A tese mestra do ensaio é que a verdadeira grandeza da ciência não está em certezas dogmáticas, mas em seu falibilismo sistemático: sua capacidade metodológica de reconhecer a provisionalidade e revisar teorias diante de novos dados.'
      }
    ]
  },
  {
    id: 'reading-c2-mi-linguistic-biodiversity',
    pillar: 'reading',
    type: 'main_idea',
    level: 'c2',
    topic: 'Linguística & Antropologia Cultural',
    title: 'A Ideia Central: A Extinção de Línguas e a Perda de Mundos Cognitivos',
    description: 'Compreenda a tese ontológica de que a morte de um idioma representa o colapso de uma ecologia única de pensamento.',
    objective: 'Sintetizar o argumento holístico que une biodiversidade e diversidade linguística.',
    instructions: 'Identifique o resumo que expressa com exatidão a posição nuclear sustentada pelo autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Fading Lexicon: Linguistic Ecologies on the Precipice',
      genre: 'Ensaio Antropológico e Sociolinguístico',
      estimatedReadTimeMinutes: 2,
      content: `When a biological species undergoes extinction, conservationists mourn the irreparable severance of an evolutionary branch. Yet, the accelerating demise of indigenous tongues across the globe is frequently greeted with benign apathy, dismissed by market pragmatists as an inevitable, even convenient, consolidation toward global trade lingua francas.

This linguistic indifference ignores a vital reality: a language is not an interchangeable inventory of labels affixed to pre-existing universal objects; it is a distinct ontology—a unique architecture of perceiving, classifying, and inhabiting reality. Within the grammatical structures and botanical taxonomies of endangered indigenous idioms reside centuries of acute ecological knowledge, complex metaphysical cosmologies, and relational models with the biosphere that cannot be transposed into standardized global vernaculars without devastating semantic evisceration. When a language dies, it is not merely words that vanish, but an entire mode of human consciousness that becomes irrecoverable.`,
      glossary: [
        { word: 'lingua francas', translation: 'línguas francas (idiomas adotados para comunicação global)' },
        { word: 'distinct ontology', translation: 'ontologia distinta (concepção única da natureza da realidade e do ser)' },
        { word: 'semantic evisceration', translation: 'evisceração / esvaziamento semântico destrutivo' }
      ],
      passageTranslation: 'A extinção de uma espécie biológica comove a sociedade, mas o desaparecimento acelerado de idiomas indígenas é tratado com indiferença como mera comodidade econômica para o comércio global. Esse desdém ignora que uma língua não é apenas uma lista de palavras para coisas comuns, mas uma ontologia própria: uma forma única de perceber e habitar o mundo. Com a morte de um idioma, somem séculos de sabedoria ecológica e cosmologias singulares: perde-se uma dimensão irrepetível da consciência humana.'
    },
    questions: [
      {
        id: 'r-c2-mi-2-q1',
        type: 'multiple_choice',
        questionText: 'What is the central philosophical thesis advanced in the passage?',
        options: [
          { id: 'A', text: 'Global trade is impossible unless all nations speak identical dialects.' },
          { id: 'B', text: 'The extinction of a language represents the irreversible loss of a unique cognitive and ecological worldview, not merely a change in communicative vocabulary.' },
          { id: 'C', text: 'Biological species preservation should take absolute financial priority over indigenous cultural heritage.' },
          { id: 'D', text: 'Standardized global languages are grammatically superior to indigenous languages in recording botany.' }
        ],
        correctOptionId: 'B',
        explanation: 'O argumento central é que uma língua expressa uma forma singular de perceber e habitar a realidade ("a distinct ontology"); logo, sua extinção apaga um modo insubstituível de consciência humana e saber ecológico.'
      }
    ]
  },
  {
    id: 'reading-c2-mi-tragic-sense-of-progress',
    pillar: 'reading',
    type: 'main_idea',
    level: 'c2',
    topic: 'Filosofia da História',
    title: 'A Ideia Central: O Mito do Progresso Linear Unidirecional',
    description: 'Analise uma crítica à concepção iluminista do progresso ininterrupto à luz de crises ecológicas contemporâneas.',
    objective: 'Identificar a síntese dialética central sobre os custos civilizatórios e as ilusões teleológicas.',
    instructions: 'Leia o texto e selecione o enunciado que captura com integridade o argumento primordial.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Hubris of the Linear Arrow: Re-examining the Idea of Progress',
      genre: 'Ensaio de Filosofia da História',
      estimatedReadTimeMinutes: 2,
      content: `The defining secular gospel of modernity is the doctrine of inexorable upward progress: the unshakeable faith that temporal succession guarantees moral, social, and psychological elevation. Each decade, it is assumed, leaves human civilization demonstrably more enlightened, compassionate, and rational than the preceding one, with technology serving as the miraculous engine dragging humanity toward universal flourishing.

However, historical reality exposes this teleological narrative as a comforting myth. Technological acceleration does not automatically refine human moral wisdom; frequently, it merely amplifies the destructive magnitude of our ancestral vices—parochialism, territorial greed, and ecological predation. Genuine historical maturity begins when a civilization discards the naive belief that time itself cures human follies, recognizing that ethical progress is not an automatic cosmic trajectory, but a fragile, contingent achievement that must be vigilantly defended and reconstructed by every generation against constant gravitational pull toward regression.`,
      glossary: [
        { word: 'inexorable', translation: 'inexorável / implacável / inevitável' },
        { word: 'teleological narrative', translation: 'narrativa teleológica (que crê em um destino ou finalidade pré-determinada)' },
        { word: 'parochialism', translation: 'paroquialismo / provincianismo de horizontes estreitos' }
      ],
      passageTranslation: 'O dogma central da modernidade é a crença no progresso contínuo e ascendente: a ideia de que o tempo garante a evolução moral da humanidade, impulsionada pela tecnologia. Contudo, a história desmente essa visão: avanços técnicos não refinam automaticamente a sabedoria humana, podendo inclusive ampliar vícios arcaicos como ganância e predação ecológica. A maturidade civilizatória surge ao entender que o progresso ético não é um destino automático, mas uma conquista frágil que precisa ser defendida a cada geração contra a constante tentação regressiva.'
    },
    questions: [
      {
        id: 'r-c2-mi-3-q1',
        type: 'multiple_choice',
        questionText: 'What fundamental thesis does the author propose regarding human progress?',
        options: [
          { id: 'A', text: 'Technological invention will naturally eliminate all moral flaws within the next generation.' },
          { id: 'B', text: 'Ethical and civilizational progress is a fragile, non-automatic achievement that requires perpetual vigilance, rather than a guaranteed byproduct of time and technology.' },
          { id: 'C', text: 'Human history was completely perfected in the seventeenth century and has decayed ever since.' },
          { id: 'D', text: 'Civilizations should immediately destroy all mechanical tools to regain ethical purity.' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor argumenta que o progresso ético não é uma marcha automática ou garantida pela tecnologia, mas sim uma conquista contingente e frágil que demanda defesa e reconstrução vigilante constante a cada geração.'
      }
    ]
  }
];

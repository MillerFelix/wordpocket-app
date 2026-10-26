import { Activity, ReadingQuestion } from '../../types/activity';

export const READING_C1: Activity<ReadingQuestion>[] = [
  // --- 1. Leia e Compreenda (Read and Comprehend) - 4 Atividades ---
  {
    id: 'reading-c1-rc-choice-architecture',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c1',
    topic: 'Comportamento & Sociedade',
    title: 'Arquitetura de Escolhas e Comportamento Humano',
    description: 'Examine um ensaio sobre como pequenos ajustes ambientais influenciam decisões financeiras e de saúde sem coerção.',
    objective: 'Analisar argumentos intrincados, distinções conceituais sutis e implicações éticas em um texto de ciências sociais.',
    instructions: 'Leia a análise crítica e responda às perguntas avaliando premissas, evidências e ressalvas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Invisible Compass: Nuances of Behavioral Choice Architecture',
      genre: 'Ensaio de Economia Comportamental',
      estimatedReadTimeMinutes: 3,
      content: `In the discourse of modern public policy, the paradigm of "choice architecture"—colloquially termed nudging—has gained widespread institutional currency. Rooted in empirical behavioral economics, the approach posits that human rationality is systematically circumscribed by cognitive heuristics, status-quo biases, and information overload. Rather than mandating compliance through punitive legislation or prohibitive taxation, choice architects subtly alter the environments in which people deliberate, thereby steering individuals toward demonstrably beneficial outcomes without technically foreclosing alternative options.

A quintessential example lies in automatic enrollment retirement schemes. When participation requires active opt-in registration, default inertia routinely precipitates negligible adoption rates among younger employees. Conversely, designating enrollment as the default condition while preserving an unobstructed opt-out pathway catapults enrollment metrics across diverse socioeconomic demographics. 

Critics, however, contend that such paternalism, however benign in intent, risks infantilizing citizens and blurs the threshold between constructive guidance and clandestine manipulation. If the framing of an option dictates its uptake more powerfully than the option's intrinsic merits, deliberate manipulation of choice architecture by self-interested entities can undermine personal autonomy under the guise of public welfare.`,
      glossary: [
        { word: 'institutional currency', translation: 'aceitação / relevância institucional consolidada' },
        { word: 'circumscribed by', translation: 'limitada / delimitada por' },
        { word: 'status-quo bias', translation: 'viés de manutenção do estado atual' },
        { word: 'foreclosing', translation: 'excluindo / inviabilizando previamente' },
        { word: 'clandestine manipulation', translation: 'manipulação dissimulada ou velada' }
      ],
      passageTranslation: 'Na formulação de políticas públicas modernas, a arquitetura de escolhas ("nudging") ganhou forte relevância institucional. Baseada na economia comportamental, propõe que a racionalidade humana é limitada por vieses e sobrecarga de informação. Em vez de impor sanções, modifica-se sutilmente o contexto de escolha para incentivar decisões benéficas sem proibir alternativas. O exemplo clássico é a inscrição automática em planos de aposentadoria com opção de cancelamento. Críticos, contudo, apontam que tal paternalismo benevolente pode infantilizar os cidadãos e diluir a fronteira entre orientação construtiva e manipulação que compromete a autonomia pessoal.'
    },
    questions: [
      {
        id: 'r-c1-rc-1-q1',
        type: 'multiple_choice',
        questionText: 'What constitutes the defining mechanism of "choice architecture" according to the passage?',
        options: [
          { id: 'A', text: 'Imposing financial penalties on choices deemed counterproductive to societal well-being' },
          { id: 'B', text: 'Subtly reconfiguring situational contexts to favor beneficial options without restricting liberty of choice' },
          { id: 'C', text: 'Restricting access to complex financial products for vulnerable demographic groups' },
          { id: 'D', text: 'Relying exclusively on extensive public awareness campaigns to shift societal habits' }
        ],
        correctOptionId: 'B',
        explanation: 'O primeiro parágrafo afirma que a abordagem "subtly alters the environments in which people deliberate, thereby steering individuals toward demonstrably beneficial outcomes without technically foreclosing alternative options".'
      },
      {
        id: 'r-c1-rc-1-q2',
        type: 'multiple_choice',
        questionText: 'On what grounds do detractors voice ethical reservations regarding paternalistic nudging?',
        options: [
          { id: 'A', text: 'It fails to demonstrate any measurable impact on retirement plan participation rates.' },
          { id: 'B', text: 'It incurs excessive administrative expenses for municipal regulatory bodies.' },
          { id: 'C', text: 'It risks eroding individual autonomy when contextual framing overshadows deliberate conscious evaluation.' },
          { id: 'D', text: 'It requires immediate legislative ratification by judicial authorities before implementation.' }
        ],
        correctOptionId: 'C',
        explanation: 'O parágrafo final explica que os críticos temem que a técnica "risks infantilizing citizens and blurs the threshold between constructive guidance and clandestine manipulation" quando a moldura condiciona a decisão mais que o mérito intrínseco.'
      }
    ]
  },
  {
    id: 'reading-c1-rc-urban-rewilding',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c1',
    topic: 'Ecologia & Sustentabilidade',
    title: 'A Renaturalização Urbana e a Resiliência Climática',
    description: 'Analise um ensaio sobre a reintrodução de corredores ecológicos e florestas de bolso em megacidades.',
    objective: 'Identificar a linha argumentativa, correlações ecológicas e contrabalanços técnicos em um artigo avançado.',
    instructions: 'Leia o texto com olhar analítico e responda às questões sobre causalidade e justificativas do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Restoring the Ecological Tapestry: Urban Rewilding Initiatives',
      genre: 'Ensaio Científico de Ecologia Urbana',
      estimatedReadTimeMinutes: 3,
      content: `Historically, the expansion of the urban footprint has been characterized by systematic ecological homogenization: wetlands were culverted, indigenous flora supplanted by sterile turfgrass, and riparian corridors severed by concrete thoroughfares. In recent years, however, a mounting awareness of intensifying urban heat islands and flash flooding has catalyzed a paradigm shift toward "urban rewilding." Unlike traditional ornamental horticulture, which prioritizes aesthetic tidiness and non-native ornamentals, rewilding deliberately yields control back to ecological succession.

By establishing interconnected green corridors and densely planted micro-forests utilizing the Miyawaki methodology, municipal authorities can re-establish microclimatic homeostasis. Native vegetation boasts deep root architectures that enhance soil permeability, mitigating runoff during catastrophic precipitation events while providing microhabitats for native pollinators that conventional manicured parks persistently fail to support.

The primary impediment to broad-scale rewilding rarely stems from hydrological or biological feasibility; rather, it hinges upon entrenched socio-cultural perceptions of civic decency. For decades, unkempt grasses and decomposing leaf litter were conflated with municipal neglect and urban decay. Overcoming this aesthetic inertia necessitates intentional public education, demonstrating that biological vitality frequently defies manicured geometric symmetry.`,
      glossary: [
        { word: 'ecological homogenization', translation: 'homogeneização ecológica (perda de diversidade)' },
        { word: 'culverted', translation: 'canalizados / cobertos por galerias subterrâneas' },
        { word: 'riparian corridors', translation: 'corredores de vegetação ribeirinha / matas ciliares' },
        { word: 'homeostasis', translation: 'equilíbrio autorregulador de um sistema' },
        { word: 'aesthetic inertia', translation: 'resistência a mudanças por hábitos visuais consolidados' }
      ],
      passageTranslation: 'Historicamente, a expansão urbana promoveu homogeneização ecológica: áreas úmidas foram canalizadas e plantas nativas substituídas por grama estéril. Recentemente, ilhas de calor e inundações impulsionaram a renaturalização urbana ("urban rewilding"), que cede espaço aos processos naturais e espécies nativas. Microflorestas com raízes profundas restauram a permeabilidade do solo, contêm enxurradas e abrigam polinizadores. O principal obstáculo não é técnico, mas a percepção sociocultural que associa vegetação espontânea ao descuido urbano.'
    },
    questions: [
      {
        id: 'r-c1-rc-2-q1',
        type: 'multiple_choice',
        questionText: 'How does urban rewilding fundamentally diverge from conventional ornamental landscaping?',
        options: [
          { id: 'A', text: 'It relies on synthetic drainage grids rather than natural hydrological pathways.' },
          { id: 'B', text: 'It embraces natural succession and indigenous flora instead of imposing manicured order.' },
          { id: 'C', text: 'It exclusively targets peripheral rural agricultural zones rather than dense city centers.' },
          { id: 'D', text: 'It eradicates pollinator populations to maintain sterile residential public spaces.' }
        ],
        correctOptionId: 'B',
        explanation: 'O primeiro parágrafo pontua que, diferente da horticultura ornamental tradicional voltada à simetria artificial, "rewilding deliberately yields control back to ecological succession".'
      },
      {
        id: 'r-c1-rc-2-q2',
        type: 'multiple_choice',
        questionText: 'According to the author, what constitutes the primary bottleneck facing widespread rewilding projects?',
        options: [
          { id: 'A', text: 'Insufficient biological research into native root systems' },
          { id: 'B', text: 'Ingrained societal attitudes that mistakenly equate wild vegetation with municipal neglect' },
          { id: 'C', text: 'Severe legal prohibitions against planting trees near municipal thoroughfares' },
          { id: 'D', text: 'The complete absence of viable native pollinator species in urban regions' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto enfatiza que o principal entrave "hinges upon entrenched socio-cultural perceptions of civic decency", onde mato espontâneo era confundido com decadência urbana.'
      }
    ]
  },
  {
    id: 'reading-c1-rc-critical-thinking',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c1',
    topic: 'Educação & Psicologia',
    title: 'Episteme Digital: O Desafio da Alfabetização Crítica',
    description: 'Avalie uma reflexão sobre como algoritmos de recomendação impactam a retenção de atenção e o discernimento de evidências.',
    objective: 'Identificar teses implícitas, metáforas conceituais e nuances de registro acadêmico em um texto reflexivo.',
    instructions: 'Leia a tese apresentada e responda às questões sobre a interpretação conceitual e inferência de significados.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Algorithmic Epistemology and the Erosion of Nuance',
      genre: 'Artigo Crítico de Filosofia da Informação',
      estimatedReadTimeMinutes: 3,
      content: `The democratization of information heralded by the digital age brought with it an implicit promise: that unfettered access to human knowledge would inevitably nurture an enlightened, discerning populace. Decades into this technological transformation, however, empirical reality reflects a far more paradoxical outcome. The transition from scarce information to unmanageable abundance has rendered attention—rather than information itself—the primary scarce commodity.

In this hyper-mediated environment, attention economy platforms are structurally incentivized to maximize engagement metrics through content optimization algorithms. Because emotional provocation, ideological polarization, and sensationalist narratives elicit immediate neural arousal, algorithmic architectures routinely privilege visceral reactivity over dispassionate contemplation. Consequently, cognitive epistemic echo chambers flourish, where confirmation bias is systematically monetized.

Combating this epistemic fragmentation requires far more than rudimentary technical media literacy; it demands metacognitive vigilance. Individuals must be equipped to interrogate not merely the factual veracity of isolated claims, but the invisible algorithmic apparatus governing which assertions are curated into their perceptual horizon, alongside cultivating the cognitive stamina required for sustained dialectical deliberation.`,
      glossary: [
        { word: 'unfettered access', translation: 'acesso irrestrito / desimpedido' },
        { word: 'scarce commodity', translation: 'bem escasso / recurso limitado' },
        { word: 'visceral reactivity', translation: 'reação instintiva / visceral imediata' },
        { word: 'epistemic echo chambers', translation: 'bolhas de eco epistêmicas (onde apenas crenças semelhantes ecoam)' },
        { word: 'metacognitive vigilance', translation: 'vigilância metacognitiva (consciência sobre o próprio pensar)' }
      ],
      passageTranslation: 'A democratização da informação prometia uma cidadania mais esclarecida pelo livre acesso ao conhecimento. No entanto, a passagem da escassez para a superabundância transformou a atenção no recurso mais escasso. Plataformas digitais maximizam engajamento promovendo conteúdos que geram provocação emocional e polarização. Para enfrentar essa fragmentação, não basta a alfabetização digital básica; é necessária vigilância metacognitiva para questionar os algoritmos que filtram nossa percepção e cultivar disposição para reflexão aprofundada.'
    },
    questions: [
      {
        id: 'r-c1-rc-3-q1',
        type: 'multiple_choice',
        questionText: 'What central paradox does the author identify concerning the digital democratization of information?',
        options: [
          { id: 'A', text: 'Technological tools have become prohibitively expensive despite universal demand.' },
          { id: 'B', text: 'Limitless access to information has inadvertently degraded deliberative attention and fostered polarization.' },
          { id: 'C', text: 'Academic institutions have ceased producing peer-reviewed scientific literature.' },
          { id: 'D', text: 'Audiences exclusively consume lengthy philosophical treatises on mobile screens.' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor argumenta que o acesso irrestrito ao conhecimento gerou uma abundância que tornou a atenção escassa, estimulando a reatividade visceral em vez da contemplação ponderada.'
      },
      {
        id: 'r-c1-rc-3-q2',
        type: 'multiple_choice',
        questionText: 'What does the term "metacognitive vigilance" entail within the context of the final paragraph?',
        options: [
          { id: 'A', text: 'Installing commercial antivirus filters across all domestic smart devices' },
          { id: 'B', text: 'Reflecting consciously upon the unseen digital filtration systems that shape one’s own exposure to ideas' },
          { id: 'C', text: 'Boycotting digital telecommunications infrastructure entirely' },
          { id: 'D', text: 'Memorizing encyclopedic historical dates to avoid internet searches' }
        ],
        correctOptionId: 'B',
        explanation: 'A vigilância metacognitiva exige que a pessoa investigue os mecanismos algorítmicos invisíveis que filtram sua percepção e pratique uma deliberação crítica constante.'
      }
    ]
  },
  {
    id: 'reading-c1-rc-corporate-governance',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'c1',
    topic: 'Economia & Governança',
    title: 'Governança Corporativa e Sustentabilidade de Longo Prazo',
    description: 'Analise a transição do modelo de maximização do acionista para o modelo de partes interessadas (stakeholders).',
    objective: 'Distinguir posicionamentos estratégicos, contradições organizacionais e terminologias de governança empresarial.',
    instructions: 'Leia a análise de liderança e responda com base nas evidências fornecidas no texto.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Beyond Quarterly Horizons: Re-evaluating Stakeholder Governance',
      genre: 'Artigo de Análise Institucional e Estratégia',
      estimatedReadTimeMinutes: 3,
      content: `For nearly half a century, the doctrine of shareholder primacy—crystallized in mid-twentieth-century neoclassical economics—served as the undisputed orthodoxy of corporate governance. Under this doctrine, a board’s fiduciary obligation was defined narrowly and uncompromisingly: maximizing immediate equity value for investors. While this single-minded focus undeniably spurred capital liquidity and rapid entrepreneurial scaling, it increasingly incentivized chronic short-termism, frequently manifesting in delayed infrastructural maintenance, externalized environmental liabilities, and suppressed employee wage growth.

Over the past decade, however, an escalating consensus among institutional investors has begun championing stakeholder capitalism. This framework asserts that enduring profitability is inextricably bound to the well-being of a broader ecosystem: suppliers, front-line labor, local communities, and ecological stewardship. Proponents point out that organizations that proactively manage environmental, social, and governance (ESG) metrics demonstrate superior systemic resilience during macroeconomic shocks.

Nevertheless, institutional skepticism persists regarding the tangible implementation of these principles. Absent rigorous, standardized disclosure frameworks, corporations face legitimate accusations of "greenwashing"—cosmetically aligning public communications with progressive stakeholder ideals while maintaining executive remuneration structures tied strictly to quarterly earnings. Authentic transition requires re-engineering legal charters and holding management accountable to verified long-term metrics.`,
      glossary: [
        { word: 'shareholder primacy', translation: 'primazia dos acionistas (foco exclusivo nos investidores)' },
        { word: 'fiduciary obligation', translation: 'obrigação fiduciária (dever de zelo e lealdade financeira)' },
        { word: 'externalized liabilities', translation: 'passivos / custos transferidos à sociedade e ao meio ambiente' },
        { word: 'greenwashing', translation: 'propaganda enganosa de sustentabilidade' },
        { word: 'remuneration structures', translation: 'estruturas de remuneração executiva' }
      ],
      passageTranslation: 'Por meio século, a primazia do acionista foi o modelo dominante de governança, exigindo foco estrito na rentabilidade imediata do capital. Embora tenha impulsionado investimentos, fomentou o imediatismo, adiando manutenções e externalizando custos ambientais. Recentemente, o capitalismo de stakeholders ganha espaço, propondo que a rentabilidade perene depende de trabalhadores, fornecedores e sustentabilidade. Contudo, sem métricas auditáveis padronizadas, há risco de "greenwashing" (discurso ecológico sem mudanças reais), exigindo novas regras de remuneração e governança.'
    },
    questions: [
      {
        id: 'r-c1-rc-4-q1',
        type: 'multiple_choice',
        questionText: 'What adverse consequence of shareholder primacy is directly highlighted by the author?',
        options: [
          { id: 'A', text: 'A total collapse of capital liquidity in venture capital markets' },
          { id: 'B', text: 'Chronic short-termism resulting in neglected infrastructure and externalized environmental impacts' },
          { id: 'C', text: 'Excessive legislative protection granted to front-line laborers' },
          { id: 'D', text: 'The complete absence of entrepreneurial initiatives during the late 20th century' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto cita explicitamente que a primazia do acionista incentivou o imediatismo crônico, manifestando-se em manutenção negligenciada, custos ecológicos externalizados e salários estagnados.'
      },
      {
        id: 'r-c1-rc-4-q2',
        type: 'multiple_choice',
        questionText: 'Why do observers remain skeptical of corporate commitments to stakeholder capitalism?',
        options: [
          { id: 'A', text: 'Because long-term sustainability models have been proven completely unprofitable in every sector' },
          { id: 'B', text: 'Because executive compensation often remains tied to short-term profits without standardized accountability' },
          { id: 'C', text: 'Because institutional investors categorically refuse to hold shares in resilient companies' },
          { id: 'D', text: 'Because environmental stewardship requires dismantling corporate charters entirely' }
        ],
        correctOptionId: 'B',
        explanation: 'O parágrafo final pontua o risco de maquiagem verde quando a retórica de stakeholder não é acompanhada de prestação de contas nem altera bônus atrelados a lucros trimestrais.'
      }
    ]
  },

  // --- 2. Descubra pelo Contexto (Context Clue) - 4 Atividades ---
  {
    id: 'reading-c1-cc-ephemeral-resilience',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c1',
    topic: 'Psicologia & Trabalho',
    title: 'Desvendando o Termo: "Equanimous"',
    description: 'Infira o sentido de vocabulário acadêmico e literário por meio de contrastes e pistas de coesão textual.',
    objective: 'Inferir o significado de adjetivos e termos eruditos em contextos de gestão de crises e dinâmica de equipes.',
    instructions: 'Analise o parágrafo a seguir e determine o sentido exato do termo destacado com base nas pistas contextuais.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Leadership Under Duress',
      genre: 'Ensaio de Psicologia Organizacional',
      estimatedReadTimeMinutes: 2,
      content: `During unprecedented organizational turbulence, the most impactful leaders distinguish themselves not through flamboyant rhetoric, but through an **equanimous** demeanor. While reactionary executives succumb to panic, abruptly issuing contradictory directives and spreading anxiety across departments, an equanimous director absorbs distressing news with composed poise, deliberately deliberating before implementing calculated interventions.`,
      glossary: [
        { word: 'duress', translation: 'pressão extrema / adversidade' },
        { word: 'flamboyant rhetoric', translation: 'retórica espalhafatosa ou exibicionista' },
        { word: 'poise', translation: 'serenidade / equilíbrio sob pressão' }
      ],
      passageTranslation: 'Em momentos de turbulência organizacional, líderes marcantes destacam-se não por discursos espalhafatosos, mas por uma postura equânime ("equanimous"). Enquanto executivos reativos entram em pânico e espalham ansiedade, o diretor calmo recebe más notícias com serenidade, ponderando antes de agir.'
    },
    questions: [
      {
        id: 'r-c1-cc-1-q1',
        type: 'multiple_choice',
        questionText: 'Within the context of the passage, what does the word "equanimous" most closely mean?',
        options: [
          { id: 'A', text: 'Aggressively confrontational toward junior colleagues' },
          { id: 'B', text: 'Remarkably calm, composed, and mentally balanced under pressure' },
          { id: 'C', text: 'Indifferent to corporate profitability and strategic deadlines' },
          { id: 'D', text: 'Prone to sudden vacillation between optimistic and gloomy extremes' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto contrapõe quem "succumbs to panic" com aquele que possui "composed poise", indicando que "equanimous" significa sereno, calmo e equilibrado sob estresse.'
      }
    ]
  },
  {
    id: 'reading-c1-cc-lucid-discrepancy',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c1',
    topic: 'Metodologia Científica',
    title: 'Desvendando o Termo: "Spurious"',
    description: 'Identifique o significado de terminologias epistemológicas através de marcadores de refutação e evidências.',
    objective: 'Diferenciar correlações autênticas de associações enganosas no discurso analítico formal.',
    instructions: 'Leia o excerto sobre interpretação de dados estatísticos e selecione a acepção correta do vocábulo em evidência.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Pitfalls in Empirical Analytics',
      genre: 'Texto de Metodologia e Estatística',
      estimatedReadTimeMinutes: 2,
      content: `Researchers must remain acutely cautious when identifying mathematical correlations between disparate societal datasets. A statistically robust covariance between two trends does not establish causal dependency; more often than not, confounding variables produce a **spurious** relationship. Believing such deceptive alignments to be genuine causal links leads analysts to formulate deeply flawed policy interventions that fail upon real-world deployment.`,
      glossary: [
        { word: 'disparate', translation: 'díspares / heterogêneos / distintos' },
        { word: 'covariance', translation: 'covariância (variação simultânea de duas variáveis)' },
        { word: 'confounding variables', translation: 'variáveis de confusão / fatores intervenientes' }
      ],
      passageTranslation: 'Pesquisadores precisam ter cautela com correlações entre dados díspares. Covariância matemática não prova causalidade; muitas vezes fatores intervenientes geram uma relação espúria ("spurious"). Tomar tais coincidências enganosas como causas reais leva a políticas públicas falhas.'
    },
    questions: [
      {
        id: 'r-c1-cc-2-q1',
        type: 'multiple_choice',
        questionText: 'In this passage, the term "spurious" refers to something that is:',
        options: [
          { id: 'A', text: 'Internationally recognized and indisputably validated' },
          { id: 'B', text: 'Deceptive, false, or appearing valid on the surface but lacking genuine authenticity' },
          { id: 'C', text: 'Conducted under secretive conditions away from scientific oversight' },
          { id: 'D', text: 'Extremely lucrative from a venture capital perspective' }
        ],
        correctOptionId: 'B',
        explanation: 'O contexto compara a correlação com "deceptive alignments" geradas por variáveis de confusão, definindo "spurious" como falso, aparente ou artificial.'
      }
    ]
  },
  {
    id: 'reading-c1-cc-perfidious-obsolescence',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c1',
    topic: 'Historiografia & Tecnologia',
    title: 'Desvendando o Termo: "Anachronistic"',
    description: 'Compreenda adjetivos temporais complexos usados em análises de transformações sociais e infraestruturais.',
    objective: 'Inferir referências cronológicas e deslocamentos históricos através de pistas contextuais.',
    instructions: 'Leia a crítica institucional e identifique a definição precisa da palavra destacada.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Institutional Adaptation in the Silicon Era',
      genre: 'Artigo Crítico de Sociologia Tecnológica',
      estimatedReadTimeMinutes: 2,
      content: `Insisting that modern transnational software engineering teams adhere strictly to mid-twentieth-century industrial punch-card scheduling is patently **anachronistic**. By imposing timekeeping rituals conceived for physical assembly lines onto asynchronous knowledge work, legacy administrators reveal their inability to grasp the dynamic realities of contemporary collaborative production.`,
      glossary: [
        { word: 'patently', translation: 'manifestamente / evidentemente' },
        { word: 'punch-card scheduling', translation: 'registro de ponto mecânico por cartão' },
        { word: 'asynchronous', translation: 'assíncrono (não simultâneo no tempo)' }
      ],
      passageTranslation: 'Exigir que equipes modernas de engenharia de software sigam rígidos horários de cartão de ponto fabril do século XX é manifestamente anacrônico ("anachronistic"). Impor rituais da linha de montagem ao trabalho intelectual assíncrono expõe o descompasso com a colaboração contemporânea.'
    },
    questions: [
      {
        id: 'r-c1-cc-3-q1',
        type: 'multiple_choice',
        questionText: 'What is the exact connotation of "anachronistic" in the paragraph above?',
        options: [
          { id: 'A', text: 'Exceptionally innovative and ahead of its historical era' },
          { id: 'B', text: 'Chronologically misplaced, belonging to an obsolete past rather than the present context' },
          { id: 'C', text: 'Legally prohibited by international maritime conventions' },
          { id: 'D', text: 'Universally cost-effective across developing economies' }
        ],
        correctOptionId: 'B',
        explanation: '"Anachronistic" descreve algo deslocado no tempo, antigo ou ultrapassado, exemplificado pela insistência em usar métodos fabris do século XX em trabalho assíncrono digital moderno.'
      }
    ]
  },
  {
    id: 'reading-c1-cc-deleterious-friction',
    pillar: 'reading',
    type: 'context_clue',
    level: 'c1',
    topic: 'Saúde Pública & Ergonomia',
    title: 'Desvendando o Termo: "Deleterious"',
    description: 'Analise o impacto de vocabulário acadêmico formal em relatórios de bem-estar ocupacional.',
    objective: 'Determinar a gravidade e o sentido de adjetivos qualificadores em avaliações de risco sanitário.',
    instructions: 'Leia o boletim ergonômico e responda qual opção reflete com fidelidade o vocábulo destacado.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Sedentary Trajectories in Desk-Bound Occupations',
      genre: 'Relatório Científico de Saúde Preventiva',
      estimatedReadTimeMinutes: 2,
      content: `Protracted immobility produces demonstrably **deleterious** consequences for musculoskeletal integrity. While brief sedentary intervals cause minimal metabolic concern, maintaining uninterrupted static postures for eight continuous hours induces muscular atrophy, suppresses circulation, and exacerbates lumbar spine deterioration over time.`,
      glossary: [
        { word: 'protracted', translation: 'prolongada / extensa no tempo' },
        { word: 'musculoskeletal integrity', translation: 'integridade osteomuscular' },
        { word: 'atrophy', translation: 'atrofia / perda de massa e força' }
      ],
      passageTranslation: 'A imobilidade prolongada produz consequências manifestamente deletérias ("deleterious") para o sistema musculoesquelético. Ficar imóvel por oito horas consecutivas provoca atrofia, compromete a circulação e agrava o desgaste da coluna lombar ao longo do tempo.'
    },
    questions: [
      {
        id: 'r-c1-cc-4-q1',
        type: 'multiple_choice',
        questionText: 'Based on the passage, the adjective "deleterious" means:',
        options: [
          { id: 'A', text: 'Subtly rejuvenating and metabolically beneficial' },
          { id: 'B', text: 'Harmful, detrimental, or causing physical injury and degradation' },
          { id: 'C', text: 'Insignificant and easily reversed within seconds' },
          { id: 'D', text: 'Uniquely suited for high-performance athletic training' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto associa "deleterious" a atrofia muscular, circulação suprimida e deterioração lombar, provando que significa prejudicial, danoso ou nocivo.'
      }
    ]
  },

  // --- 3. Interprete a Mensagem (Interpret the Message) - 4 Atividades ---
  {
    id: 'reading-c1-im-subtle-diplomacy',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c1',
    topic: 'Comunicação & Negociação',
    title: 'Comunicação Diplomática e Ressalvas Deliberadas',
    description: 'Interprete subentendidos e linguagem comedida em um comunicado de negociação de parceria institucional.',
    objective: 'Identificar a intenção real, ressalvas veladas e o tom diplomático de uma correspondência formal.',
    instructions: 'Leia a carta formal de resposta e decodifique a postura autêntica da organização emissora.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Formal Clarification on Joint Initiative Proposal',
      genre: 'Correspondência Corporativa Diplomática',
      estimatedReadTimeMinutes: 2,
      content: `Dear Director Vance,

We have thoroughly scrutinized the comprehensive memorandum outlining the envisioned joint renewable infrastructure consortium. We commend your team’s ambitious timeline and acknowledge the unmistakable visionary merit of the proposed deployment schedule.

That being stated, our fiduciary committee feels that moving forward on the basis of the present capital allocation framework would be premature. While we remain receptive to conceptual alignment in principle, our continuing involvement is strictly conditional upon establishing independent auditing oversight and recalibrating the risk-sharing provisions to reflect equitable exposure. We look forward to evaluating your revised risk apportionment model at your earliest convenience.

Sincerely,
Elena Rostova
Head of Institutional Partnerships`,
      glossary: [
        { word: 'scrutinized', translation: 'examinamos minuciosamente' },
        { word: 'consortium', translation: 'consórcio / aliança empresarial conjunta' },
        { word: 'fiduciary committee', translation: 'comitê de responsabilidade fiduciária e governança' },
        { word: 'apportionment', translation: 'partilha / rateio proporcional de riscos' }
      ],
      passageTranslation: 'Prezado Diretor Vance: Examinamos o memorando sobre o consórcio de infraestrutura renovável e elogiamos a visão do projeto. Contudo, nosso comitê financeiro considera prematuro avançar com a divisão de capital atual. Nossa continuidade condiciona-se estritamente à criação de auditoria independente e à redistribuição equitativa de riscos. Aguardamos um modelo revisado. Atenciosamente, Elena Rostova.'
    },
    questions: [
      {
        id: 'r-c1-im-1-q1',
        type: 'multiple_choice',
        questionText: 'What is the genuine underlying stance conveyed by Elena Rostova’s letter?',
        options: [
          { id: 'A', text: 'An enthusiastic and unconditional endorsement of the project’s immediate execution' },
          { id: 'B', text: 'A firm refusal to participate until significant governance and financial liabilities are renegotiated' },
          { id: 'C', text: 'A complete and irrevocable termination of all future institutional dialogue' },
          { id: 'D', text: 'An expression of gratitude for having already received audited financial compensation' }
        ],
        correctOptionId: 'B',
        explanation: 'Apesar dos elogios diplomáticos iniciais, a carta estabelece condições rígidas: considera prematuro avançar nos termos atuais e exige auditoria independente e recalibração dos riscos antes de prosseguir.'
      },
      {
        id: 'r-c1-im-1-q2',
        type: 'multiple_choice',
        questionText: 'Which phrase in the letter signals an implicit critique of the current proposal’s financial design?',
        options: [
          { id: 'A', text: '"thoroughly scrutinized the comprehensive memorandum"' },
          { id: 'B', text: '"visionary merit of the proposed deployment schedule"' },
          { id: 'C', text: '"moving forward on the basis of the present capital allocation framework would be premature"' },
          { id: 'D', text: '"at your earliest convenience"' }
        ],
        correctOptionId: 'C',
        explanation: 'A expressão "moving forward... would be premature" é a fórmula cortês utilizada para indicar que os termos financeiros atuais são inaceitáveis na forma em que foram apresentados.'
      }
    ]
  },
  {
    id: 'reading-c1-im-editorial-irony',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c1',
    topic: 'Cultura & Mídia',
    title: 'Ironia Editorial e Comentário Social',
    description: 'Identifique ironia sofisticada, sátira velada e tom crítico em uma coluna sobre tendências de produtividade tóxica.',
    objective: 'Reconhecer recursos retóricos de ironia sutil e distanciamento crítico em ensaios de opinião contemporâneos.',
    instructions: 'Leia a crônica editorial e responda analisando a perspectiva e o tom satírico do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Gospel of Optimization',
      genre: 'Crônica de Opinião Cultural',
      estimatedReadTimeMinutes: 2,
      content: `How comforting it is to know that modern humanity has finally solved the age-old problem of existing: by reducing every waking moment to a quantifiable metric. We are assured by self-appointed lifestyle gurus that if one is not waking at 4:15 a.m., plunging into ice water, and listening to accelerated macroeconomic summaries while brewing scientifically engineered tea, one is fundamentally squandering the gift of consciousness.

One must admire the sheer audacity with which rest has been repackaged as an ethical failure. Leisure is no longer allowed to be an aimless, restorative stroll through autumn leaves; it must be rebranded as "deliberate cognitive decompression" calibrated to optimize Monday morning output. Heaven forbid anyone simply enjoys an afternoon doing nothing without logging the heart rate variability in an app to prove it was productive relaxation.`,
      glossary: [
        { word: 'quantifiable metric', translation: 'métrica quantificável / índice medido' },
        { word: 'squandering', translation: 'desperdiçando / esbanjando insensatamente' },
        { word: 'audacity', translation: 'audácia / desfaçatez' },
        { word: 'cognitive decompression', translation: 'descompressão cognitiva (jargão corporativo para descanso)' }
      ],
      passageTranslation: 'Como é reconfortante saber que a humanidade finalmente resolveu o enigma da existência: reduzindo cada momento acordado a uma métrica mensurável. Gurus nos asseguram que acordar depois das 4h15 ou tomar um chá comum significa desperdiçar a vida. É notável a audácia com que o descanso virou falha moral. O lazer não pode ser um passeio descompromissado; tem de ser rebatizado de "descompressão cognitiva" para turbinar o rendimento de segunda-feira.'
    },
    questions: [
      {
        id: 'r-c1-im-2-q1',
        type: 'multiple_choice',
        questionText: 'What rhetorical device does the author primarily employ in the opening sentence?',
        options: [
          { id: 'A', text: 'Literal scientific admiration for technological advancements' },
          { id: 'B', text: 'Dry sarcasm designed to mock obsessive productivity culture' },
          { id: 'C', text: 'Melancholic lamentation regarding the decay of religious values' },
          { id: 'D', text: 'Aggressive threats toward mobile app developers' }
        ],
        correctOptionId: 'B',
        explanation: 'A frase "How comforting it is to know that modern humanity has finally solved the age-old problem..." é sarcasticamente irônica, criticando a ilusão de reduzir a vida a planilhas de rendimento.'
      },
      {
        id: 'r-c1-im-2-q2',
        type: 'multiple_choice',
        questionText: 'What is the author’s primary lament regarding contemporary leisure?',
        options: [
          { id: 'A', text: 'That mobile applications are insufficiently accurate at tracking heart metrics' },
          { id: 'B', text: 'That spontaneous, unstructured human relaxation has been co-opted into a performance goal' },
          { id: 'C', text: 'That modern workers sleep too many hours during typical business weeks' },
          { id: 'D', text: 'That organic teas are excessively expensive in metropolitan grocery stores' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor critica o fato de o lazer ter perdido sua natureza livre e restauradora ("aimless, restorative stroll"), tendo sido cooptado como mais uma ferramenta utilitária para render no trabalho.'
      }
    ]
  },
  {
    id: 'reading-c1-im-tenancy-notice',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c1',
    topic: 'Direito & Sociedade',
    title: 'Comunicação Contratual e Implicações Jurídicas',
    description: 'Analise uma notificação formal de readequação predial identificando direitos, prazos e obrigações expressas e tácitas.',
    objective: 'Interpretar linguagem legal formal e reconhecer prerrogativas e deveres implícitos em comunicados formais.',
    instructions: 'Leia a notificação administrativa e avalie com precisão as consequências práticas para os moradores.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Notification of Mandatory Seismic Retrofitting',
      genre: 'Notificação Jurídico-Administrativa',
      estimatedReadTimeMinutes: 2,
      content: `Notice to All Proprietary Leaseholders:

Pursuant to Municipal Ordinance 402/B regarding seismic resilience standards, notice is hereby served that remedial structural reinforcement of the foundational substructure will commence on November 14th.

While the engineering team has formulated a staging strategy intended to minimize auditory disruption, access to subterranean parking facilities will be completely suspended for the anticipated eight-week construction window. Leaseholders requiring vehicular accommodations are directed to register with the concierge before October 28th to secure subsidized municipal garage passes.

Please be advised that failure to provide contractors with scheduled access to individual basement storage units on designated inspection dates will constitute an indemnifiable breach of Section 14 of the master tenancy covenant, rendering non-compliant leaseholders liable for subsequent project delay penalties.`,
      glossary: [
        { word: 'pursuant to', translation: 'em conformidade com / de acordo com' },
        { word: 'retrofitting', translation: 'reforma de modernização / reforço estrutural de engenharia' },
        { word: 'subterranean', translation: 'subterrâneo' },
        { word: 'indemnifiable breach', translation: 'quebra contratual sujeita a indenização e penalidades' }
      ],
      passageTranslation: 'Aviso aos Locatários e Condôminos: Em conformidade com a portaria municipal de resiliência sísmica, o reforço das fundações do edifício terá início em 14 de novembro. O estacionamento subterrâneo ficará totalmente interditado por cerca de oito semanas; moradores que precisarem de vagas devem procurar a portaria até 28 de outubro para obter passes com desconto em garagens credenciadas. Impedir o acesso de operários aos depósitos individuais na data estipulada acarretará quebra do contrato, com responsabilidade por custos de atraso das obras.'
    },
    questions: [
      {
        id: 'r-c1-im-3-q1',
        type: 'multiple_choice',
        questionText: 'What immediate procedural action must residents take by October 28th if they own vehicles?',
        options: [
          { id: 'A', text: 'Evacuate their residential apartments for the entire eight-week construction period' },
          { id: 'B', text: 'Register with building staff to secure discounted parking arrangements elsewhere' },
          { id: 'C', text: 'Pay an upfront assessment fee directly to the municipal ordinance office' },
          { id: 'D', text: 'Demolish their personal storage lockers in the basement' }
        ],
        correctOptionId: 'B',
        explanation: 'O aviso estipula que condôminos que precisarem de vagas de garagem devem se registrar com a portaria até 28 de outubro para garantir passes subsidiados em estacionamento municipal.'
      },
      {
        id: 'r-c1-im-3-q2',
        type: 'multiple_choice',
        questionText: 'What is the consequence of failing to grant workers access to personal basement storage units?',
        options: [
          { id: 'A', text: 'Immediate eviction within forty-eight hours without notice' },
          { id: 'B', text: 'Legal contractual violation that exposes the leaseholder to financial penalties for project delays' },
          { id: 'C', text: 'Revocation of the building’s municipal safety certificate' },
          { id: 'D', text: 'Compulsory conversion of private storage space into public property' }
        ],
        correctOptionId: 'B',
        explanation: 'O último parágrafo explicita que não permitir o acesso constitui "an indemnifiable breach... rendering non-compliant leaseholders liable for subsequent project delay penalties".'
      }
    ]
  },
  {
    id: 'reading-c1-im-philanthropic-caveat',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'c1',
    topic: 'Ética & Doações',
    title: 'Comunicação Filantrópica e Alocação de Recursos',
    description: 'Avalie uma carta de prestação de contas de uma fundação internacional, identificando critérios de transparência.',
    objective: 'Identificar justificativas gerenciais e mudanças de prioridade estratégica em relatórios institucionais.',
    instructions: 'Leia a mensagem aos doadores e interprete as decisões estratégicas de alocação de fundos.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Annual Grant Allocation Communiqué',
      genre: 'Prestação de Contas Institucional',
      estimatedReadTimeMinutes: 2,
      content: `To Our Global Benefactors,

In an era when humanitarian crises proliferate with bewildering speed, the instinct to disperse emergency aid across every emergent tragedy is understandable. However, broad dispersal often culminates in superficial intervention—providing transient relief while leaving chronic systemic vulnerabilities wholly unaddressed.

Following extensive programmatic evaluation, our board has resolved to concentrate 70% of unrestricted endowments into long-term agrarian water security across sub-Saharan pastoral communities. We recognize that this strategic consolidation will disappoint valued partners who had petitioned for arts residency grants and municipal conference sponsorships. Nevertheless, we remain convinced that catalytic philanthropy must prioritize enduring life-sustaining infrastructure over ephemeral prestige initiatives.`,
      glossary: [
        { word: 'proliferate', translation: 'multiplicam-se rapidamente' },
        { word: 'transient relief', translation: 'alívio passageiro / socorro temporário' },
        { word: 'endowments', translation: 'fundos patrimoniais de doações perpétuas' },
        { word: 'catalytic philanthropy', translation: 'filantropia catalítica (que gera transformações sistêmicas profundas)' }
      ],
      passageTranslation: 'Prezados Benfeitores: Diante de crises frequentes, a tentação de fragmentar recursos em cada emergência é grande, mas gera alívio passageiro sem resolver fragilidades estruturais. Após avaliação rigorosa, nosso conselho decidiu concentrar 70% das doações em segurança hídrica e agricultura sustentável. Sabemos que isso decepcionará parceiros de projetos artísticos ou simpósios, mas acreditamos que a filantropia transformadora deve priorizar infraestruturas de subsistência em vez de eventos de prestígio passageiro.'
    },
    questions: [
      {
        id: 'r-c1-im-4-q1',
        type: 'multiple_choice',
        questionText: 'What rationale does the foundation provide for declining smaller municipal and arts grants?',
        options: [
          { id: 'A', text: 'A catastrophic loss of total endowment funding due to global market crashes' },
          { id: 'B', text: 'A deliberate choice to achieve profound systemic resilience rather than fragmented temporary impacts' },
          { id: 'C', text: 'A legal prohibition imposed by local environmental ministries' },
          { id: 'D', text: 'A lack of qualified personnel capable of reviewing grant applications' }
        ],
        correctOptionId: 'B',
        explanation: 'A diretoria explica que espalhar verbas gera intervenções superficiais e que a filantropia deve priorizar infraestrutura vital duradoura ("enduring life-sustaining infrastructure over ephemeral prestige initiatives").'
      }
    ]
  },

  // --- 4. Identifique a Ideia Principal (Main Idea) - 3 Atividades ---
  {
    id: 'reading-c1-mi-neuroplasticity',
    pillar: 'reading',
    type: 'main_idea',
    level: 'c1',
    topic: 'Neurociência & Aprendizagem',
    title: 'A Ideia Central: Neuroplasticidade ao Longo da Vida',
    description: 'Sintetize a tese fundamental de um artigo de neurociência sobre adaptação cerebral na fase adulta.',
    objective: 'Distinguir a tese central de exemplos acessórios e detalhes metodológicos secundários.',
    instructions: 'Leia o texto e selecione o enunciado que melhor encapsula o argumento principal do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Malleable Architecture: Lifelong Neuroplasticity',
      genre: 'Artigo de Divulgação Científica Avançada',
      estimatedReadTimeMinutes: 2,
      content: `For decades, medical orthodoxy maintained that the structural development of the human brain reached absolute ossification by the culmination of adolescence. Once synaptic pruning concluded, it was asserted, neural pathways became immutable circuits, rendering cognitive rehabilitation after injury severely constrained and adult skill acquisition fundamentally inefficient.

Modern functional neuroimaging, however, has comprehensively invalidated this deterministic dogma. The discovery of adult neurogenesis and synaptic remodeling demonstrates that the brain retains profound structural malleability across the entire human lifespan. While acquiring complex domains—such as native phonetic mastery in second languages—undoubtedly requires greater deliberate cognitive effort in advanced age compared to early childhood, sustained intellectual rigor, novel motor challenges, and aerobic exercise persistently stimulate dendritic arborization and regional synaptic reorganization well into senectitude.`,
      glossary: [
        { word: 'ossification', translation: 'ossificação / rigidez irreversível' },
        { word: 'synaptic pruning', translation: 'poda sináptica (eliminação de conexões neurais não utilizadas)' },
        { word: 'deterministic dogma', translation: 'dogma determinista / crença rígida' },
        { word: 'dendritic arborization', translation: 'arborização dendrítica (crescimento de novas ramificações neurais)' }
      ],
      passageTranslation: 'Por décadas, acreditou-se que o cérebro humano se tornava imutável após a adolescência, limitando a reabilitação cognitiva na vida adulta. A neuroimagem moderna refutou esse dogma: o cérebro preserva notável plasticidade durante toda a existência. Embora aprender habilidades complexas na maturidade exija esforço consciente maior do que na infância, desafios intelectuais, atividades motoras e exercícios físicos continuam estimulando novas conexões sinápticas até a velhice avançada.'
    },
    questions: [
      {
        id: 'r-c1-mi-1-q1',
        type: 'multiple_choice',
        questionText: 'Which statement most accurately expresses the core thesis of the entire passage?',
        options: [
          { id: 'A', text: 'Adolescent synaptic pruning represents the final and unalterable peak of all intellectual development.' },
          { id: 'B', text: 'The adult brain preserves significant structural and functional malleability throughout life through purposeful cognitive and physical engagement.' },
          { id: 'C', text: 'Second-language acquisition is impossible after the age of eighteen due to irreversible neuronal death.' },
          { id: 'D', text: 'Cardiovascular exercise is superior to all academic training for childhood brain development.' }
        ],
        correctOptionId: 'B',
        explanation: 'A tese central é que, contrariando o dogma antigo, o cérebro preserva capacidade de reorganização e criação de sinapses durante toda a vida quando submetido a desafios intelectuais e físicos.'
      }
    ]
  },
  {
    id: 'reading-c1-mi-circular-economy',
    pillar: 'reading',
    type: 'main_idea',
    level: 'c1',
    topic: 'Economia & Recursos',
    title: 'A Ideia Central: Economia Circular vs. Reciclagem Cosmética',
    description: 'Compreenda a distinção estrutural entre mitigação de fim de tubo e reengenharia de ciclo fechado.',
    objective: 'Identificar a proposição primordial que unifica os argumentos econômicos e ecológicos apresentados.',
    instructions: 'Identifique qual das alternativas resume com precisão a tese global do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Rethinking Industrial Metabolism',
      genre: 'Ensaio de Economia Ecológica e Engenharia de Materiais',
      estimatedReadTimeMinutes: 2,
      content: `Conventional consumer discourse routinely treats recycling as the pinnacle of environmental virtue. Consumers sort disposable packaging into distinct receptacles, feeling an immediate sense of ethical absolution. Yet, from an industrial ecology perspective, downstream recycling is merely a palliative measure—an attempt to salvage degraded materials at the very end of an intrinsically extractive, linear pipeline of "take, make, and dispose."

A genuine circular economy demands a much more profound architectural paradigm shift: designing industrial metabolism so that waste is conceptually designed out from inception. Products must be engineered for disassemblability, modular refurbishment, and non-toxic biological return. True sustainability is not achieved by marginally downcycling single-use plastics into park benches; it requires abandoning the linear throughput model altogether in favor of regenerative closed-loop loops where materials retain high-order utility indefinitely.`,
      glossary: [
        { word: 'palliative measure', translation: 'medida paliativa / alívio superficial' },
        { word: 'downstream recycling', translation: 'reciclagem de fim de linha / pós-consumo' },
        { word: 'modular refurbishment', translation: 'reforma / restauração modular' },
        { word: 'downcycling', translation: 'subciclagem (transformação de material em item de menor qualidade e valor)' }
      ],
      passageTranslation: 'O discurso comum trata a reciclagem como o auge da responsabilidade ecológica, mas trata-se apenas de medida paliativa de fim de linha num modelo linear predatório ("extrair, produzir, descartar"). Uma economia circular autêntica exige mudar a concepção industrial na origem: projetar produtos para desmontagem, reutilização modular e reintegração biológica atóxica, substituindo o descarte linear por ciclos fechados e regenerativos.'
    },
    questions: [
      {
        id: 'r-c1-mi-2-q1',
        type: 'multiple_choice',
        questionText: 'What is the primary argument advanced by the author regarding sustainable manufacturing?',
        options: [
          { id: 'A', text: 'Current domestic sorting bins should be eliminated to reduce civic confusion.' },
          { id: 'B', text: 'True environmental sustainability requires redesigning production into regenerative closed-loop systems, rather than relying on end-of-pipe recycling.' },
          { id: 'C', text: 'Plastics must immediately be substituted with unrefined timber across all consumer packaging.' },
          { id: 'D', text: 'Industrial manufacturing should be halted worldwide to allow ecosystems to recover.' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor demonstra que reciclar pós-consumo é paliativo; o essencial é reestruturar os produtos desde a concepção em ciclos fechados regenerativos onde o desperdício é eliminado na origem.'
      }
    ]
  },
  {
    id: 'reading-c1-mi-preservation-authenticity',
    pillar: 'reading',
    type: 'main_idea',
    level: 'c1',
    topic: 'Arquitetura & Patrimônio',
    title: 'A Ideia Central: Autenticidade no Restauro Arquitetônico',
    description: 'Avalie o debate entre a reconstrução mimética e a intervenção contemporânea reversível em edifícios históricos.',
    objective: 'Sintetizar dilemas conceituais de preservação histórica e discernir o posicionamento principal do ensaio.',
    instructions: 'Leia a reflexão sobre restauração patrimonial e escolha a síntese conceitual correta.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Palimpsests in Stone: Authenticity in Heritage Conservation',
      genre: 'Ensaio Teórico sobre Patrimônio e Conservação',
      estimatedReadTimeMinutes: 2,
      content: `When a historic monument suffers severe degradation or catastrophic structural damage, the intuitive public reaction is almost universally restorative: reconstruct the lost facade to its exact prior appearance. While emotionally consoling, this pastiche approach risks producing a historical forgery—an idealized simulacrum that falsifies the passage of time and obfuscates the genuine history of destruction and survival.

Contemporary international conservation charters advocate for a far more nuanced dialectic between past and present. Interventions should prioritize structural stabilization and material consolidation, while new elements introduced for safety or accessibility ought to be legibly contemporary and fully reversible. Rather than fabricating a fictitious illusion of untouched antiquity, authentic conservation honors the building as a living palimpsest, allowing historical layers to dialogue honestly with the present without deceit.`,
      glossary: [
        { word: 'pastiche approach', translation: 'abordagem de imitação superficial / pastiche' },
        { word: 'simulacrum', translation: 'simulacro / cópia aparente sem a substância do original' },
        { word: 'obfuscates', translation: 'ofusca / oculta' },
        { word: 'palimpsest', translation: 'palimpsesto (documento ou estrutura com camadas sucessivas de história)' }
      ],
      passageTranslation: 'Quando um monumento histórico se deteriora, o anseio comum é reconstruí-lo tal como era. Contudo, essa imitação produz um simulacro que apaga a passagem do tempo e as marcas de sobrevivência. Cartas patrimoniais modernas defendem que restaurações devem consolidar o monumento original e marcar adições contemporâneas com clareza e reversibilidade, tratando a arquitetura como um palimpsesto vivo onde as camadas históricas dialogam honestamente com o presente.'
    },
    questions: [
      {
        id: 'r-c1-mi-3-q1',
        type: 'multiple_choice',
        questionText: 'What is the overriding conceptual stance defended throughout the passage?',
        options: [
          { id: 'A', text: 'Historic structures should be dismantled and replaced with ultra-modern high-rises to save costs.' },
          { id: 'B', text: 'Authentic conservation preserves genuine historic materials while making necessary modern additions transparent and reversible, rather than faking antiquity.' },
          { id: 'C', text: 'Exact mimicry is the only legally acceptable method for restoring ancient stone structures.' },
          { id: 'D', text: 'Public opinion should dictate every chemical formulation used by conservation teams.' }
        ],
        correctOptionId: 'B',
        explanation: 'O ensaio defende que a autêntica conservação preserva os materiais genuínos e trata adições contemporâneas com transparência e reversibilidade, sem fingir uma antiguidade intocada ilusória.'
      }
    ]
  }
];

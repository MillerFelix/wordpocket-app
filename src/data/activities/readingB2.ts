import { Activity, ReadingQuestion } from '../../types/activity';

export const READING_B2: Activity<ReadingQuestion>[] = [
  // --- 1. Leia e Compreenda (Read and Comprehend) - 4 Atividades ---
  {
    id: 'reading-b2-rc-urban-mobility',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b2',
    topic: 'Sustentabilidade & Urbanismo',
    title: 'A Transformação da Mobilidade Urbana Sustentável',
    description: 'Compreenda uma análise aprofundada sobre como metrópoles globais estão redesenhando espaços para pedestres e ciclistas.',
    objective: 'Identificar argumentos prós e contras, relações de causa e efeito e evidências em um texto de divulgação científica.',
    instructions: 'Leia o texto com atenção e responda às questões de compreensão detalhada.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Reclaiming the Streets: Urban Mobility in the 21st Century',
      genre: 'Artigo de Urbanismo & Meio Ambiente',
      estimatedReadTimeMinutes: 2,
      content: `Over the past two decades, major metropolitan areas have witnessed a decisive shift in urban planning philosophy. For much of the twentieth century, cities were engineered almost exclusively around the automobile, resulting in chronic traffic congestion, elevated air pollution, and fragmented civic communities. Today, an accelerating movement seeks to invert that paradigm by creating what urbanists term the "fifteen-minute city."
      
Under this model, essential daily destinations—schools, grocery stores, healthcare centers, and recreational parks—are situated within a brief walk or bicycle ride from residential neighborhoods. Proponents argue that prioritizing human-scale transit not only curtails carbon emissions dramatically, but also revitalizes local commerce and improves cardiovascular health across demographic groups.
      
Nevertheless, the transition is not without resistance. Business owners frequently express concern that eliminating curbside parking will deter suburban shoppers, while public transit agencies often struggle with the capital expenditure required to expand electric bus fleets. Successful municipalities overcome these hurdles through incremental implementation: piloting temporary car-free zones on weekends to demonstrate social vitality before enacting permanent infrastructural transformations.`,
      glossary: [
        { word: 'chronic congestion', translation: 'congestionamento crônico / contínuo' },
        { word: 'curtails', translation: 'reduz / restringe consideravelmente' },
        { word: 'human-scale transit', translation: 'mobilidade à escala humana (a pé ou bicicleta)' },
        { word: 'capital expenditure', translation: 'despesa de capital / investimento vultoso' }
      ],
      passageTranslation: 'Nas últimas duas décadas, grandes áreas metropolitanas testemunharam uma mudança decisiva na filosofia de planejamento urbano. Durante boa parte do século XX, as cidades foram projetadas quase exclusivamente para automóveis, resultando em congestionamentos crônicos, poluição e comunidades fragmentadas. Hoje, busca-se inverter esse paradigma com a "cidade de 15 minutos", onde serviços essenciais estão a uma curta caminhada de casa. Defensores destacam a redução de emissões e a revitalização do comércio local, enquanto comerciantes temem perda de vagas e agências enfrentam custos de frotas elétricas. O sucesso ocorre por implementação gradual, como zonas temporárias sem carros aos finais de semana.'
    },
    questions: [
      {
        id: 'r-b2-rc-1-q1',
        type: 'multiple_choice',
        questionText: 'According to the passage, what was the primary architectural focus of twentieth-century cities?',
        options: [
          { id: 'A', text: 'Preserving open-air public parks and waterways' },
          { id: 'B', text: 'Accommodating automobile transit above all other transportation modes' },
          { id: 'C', text: 'Encouraging pedestrian commerce in residential neighborhoods' },
          { id: 'D', text: 'Decentralizing essential public healthcare centers' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto afirma explicitamente: "For much of the twentieth century, cities were engineered almost exclusively around the automobile".'
      },
      {
        id: 'r-b2-rc-1-q2',
        type: 'multiple_choice',
        questionText: 'What strategy do successful cities employ to ease public apprehension regarding car-free zones?',
        options: [
          { id: 'A', text: 'Imposing financial penalties on suburban shoppers' },
          { id: 'B', text: 'Testing temporary weekend pedestrian areas prior to permanent structural changes' },
          { id: 'C', text: 'Canceling all electric bus expansion projects immediately' },
          { id: 'D', text: 'Relocating residential housing to the city perimeter' }
        ],
        correctOptionId: 'B',
        explanation: 'O parágrafo final explica que as prefeituras superam a resistência "piloting temporary car-free zones on weekends to demonstrate social vitality before enacting permanent infrastructural transformations".'
      }
    ]
  },
  {
    id: 'reading-b2-rc-psychology-habits',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b2',
    topic: 'Psicologia & Produtividade',
    title: 'A Mecânica Neurológica da Formação de Hábitos',
    description: 'Compreenda a tríade neurológica do gatilho, rotina e recompensa e como ela afeta o aprendizado e o foco.',
    objective: 'Interpretar textos científicos de divulgação sobre comportamento humano.',
    instructions: 'Leia a explicação científica e responda às questões sobre a formação de rotinas automáticas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Architecture of Automaticity: How Habits Shape Daily Life',
      genre: 'Divulgação Científica & Psicologia',
      estimatedReadTimeMinutes: 2,
      content: `Cognitive neuroscientists estimate that between forty and fifty percent of daily human decisions are governed not by conscious deliberation, but by automated behavioral loops known as habits. In evolutionary terms, this mechanism is remarkably efficient: by offloading repetitive tasks to the basal ganglia—the brain’s primitive control center—the prefrontal cortex conserves vital energy for complex problem-solving and immediate threats.
      
Every habit operates through an interconnected three-part loop: the cue, the routine, and the reward. The cue is an external trigger, such as a phone notification or a specific time of morning. The routine is the sequence of physical or cognitive actions that follows. Finally, the reward delivers a burst of dopamine, reinforcing the neurological pathway and ensuring that the brain will seek to replicate the sequence under similar conditions in the future.
      
Significantly, researchers emphasize that habits cannot be eradicated entirely; their neural pathways remain inscribed indefinitely. Instead, lasting behavioral change requires modifying the routine while keeping both the familiar cue and the satisfying reward intact. For instance, a professional who reaches for sugary snacks during afternoon slumps can substitute a brisk five-minute walk, satisfying the underlying need for a cognitive break without the metabolic drawback.`,
      glossary: [
        { word: 'deliberation', translation: 'reflexão consciente / deliberação' },
        { word: 'offloading', translation: 'descarregar / transferir tarefas' },
        { word: 'burst of dopamine', translation: 'descarga / pico de dopamina' },
        { word: 'slumps', translation: 'quedas de energia / desânimo da tarde' }
      ],
      passageTranslation: 'Neurocientistas estimam que cerca de metade das decisões diárias são hábitos automáticos. Esse mecanismo poupa energia do córtex pré-frontal ao transferir tarefas repetitivas aos gânglios basais. O ciclo de um hábito compreende três elementos: o gatilho (estímulo externo), a rotina (o comportamento) e a recompensa (pico de dopamina). Pesquisadores apontam que hábitos não são apagados, mas transformados: para mudá-los, substitui-se a rotina enquanto se mantém o gatilho e a recompensa subjacente.'
    },
    questions: [
      {
        id: 'r-b2-rc-2-q1',
        type: 'multiple_choice',
        questionText: 'What evolutionary advantage does habit automation provide according to researchers?',
        options: [
          { id: 'A', text: 'It completely eliminates dopamine production during the day' },
          { id: 'B', text: 'It frees cognitive energy in the prefrontal cortex for complex reasoning' },
          { id: 'C', text: 'It forces individuals to sleep longer hours each evening' },
          { id: 'D', text: 'It prevents the basal ganglia from functioning during emergency situations' }
        ],
        correctOptionId: 'B',
        explanation: 'O primeiro parágrafo explica que o mecanismo poupa recursos vitais: "the prefrontal cortex conserves vital energy for complex problem-solving and immediate threats".'
      },
      {
        id: 'r-b2-rc-2-q2',
        type: 'multiple_choice',
        questionText: 'What is the scientifically recommended approach for changing an established negative habit?',
        options: [
          { id: 'A', text: 'Eradicating the neurological pathway through sudden isolation' },
          { id: 'B', text: 'Preserving the original cue and reward while altering the intermediate routine' },
          { id: 'C', text: 'Avoiding all physical activity during periods of mental fatigue' },
          { id: 'D', text: 'Ignoring external triggers until the reward disappears naturally' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto salienta: "lasting behavioral change requires modifying the routine while keeping both the familiar cue and the satisfying reward intact".'
      }
    ]
  },
  {
    id: 'reading-b2-rc-circadian-rhythms',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b2',
    topic: 'Saúde & Fisiologia',
    title: 'Ritmos Circadianos e o Sono Moderno',
    description: 'Analise um artigo informativo sobre o impacto da iluminação artificial e das telas na regulação biológica do descanso.',
    objective: 'Reconhecer dados quantitativos, vocabulário biológico geral e argumentos médicos.',
    instructions: 'Leia o texto e responda às questões sobre a sincronização biológica do organismo.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Light and Rhythm: The Science of Restful Sleep',
      genre: 'Artigo de Saúde & Bem-Estar',
      estimatedReadTimeMinutes: 2,
      content: `Almost every living organism possesses an internal biological chronometer known as the circadian rhythm. Governed by a microscopic cluster of cells in the hypothalamus called the suprachiasmatic nucleus, this rhythm synchronizes hormone secretion, body temperature, and cellular repair across an approximate twenty-four-hour cycle. Natural daylight serves as the primary environmental anchor, signaling to the brain when to promote alertness and when to synthesize melatonin, the hormone responsible for initiating sleep.
      
In modern society, widespread exposure to short-wavelength blue light emitted by smartphones, computer monitors, and energy-efficient LED fixtures has dramatically disrupted this delicate hormonal cadence. By tricking the brain into perceiving nighttime as midday, digital screens suppress melatonin production by up to fifty percent, delaying sleep onset and fragmenting restorative rapid-eye-movement (REM) cycles.
      
Sleep specialists increasingly advocate for "circadian hygiene": dimming domestic lighting two hours before bed, establishing consistent wake-up times regardless of weekends, and obtaining fifteen minutes of direct sunlight exposure early in the morning to calibrate the biological clock.`,
      glossary: [
        { word: 'chronometer', translation: 'cronômetro biológico / relógio interno' },
        { word: 'cadence', translation: 'cadência / ritmo constante' },
        { word: 'sleep onset', translation: 'início / indução do sono' },
        { word: 'calibrate', translation: 'calibrar / ajustar com precisão' }
      ],
      passageTranslation: 'O ritmo circadiano é o relógio biológico que coordena temperatura, hormônios e sono ao longo de 24 horas. A luz natural é a âncora principal desse ritmo. Contudo, a luz azul de telas à noite engana o hipotálamo, reduzindo a melatonina em até 50% e prejudicando o sono REM. Especialistas recomendam luz suave à noite e luz solar direta pela manhã para recalibrar o organismo.'
    },
    questions: [
      {
        id: 'r-b2-rc-3-q1',
        type: 'multiple_choice',
        questionText: 'What physiological consequence does late-night blue light exposure trigger according to the text?',
        options: [
          { id: 'A', text: 'It doubles the duration of deep REM sleep cycles' },
          { id: 'B', text: 'It drastically suppresses the synthesis of melatonin' },
          { id: 'C', text: 'It permanently disables the hypothalamus chronometer' },
          { id: 'D', text: 'It lowers body temperature to dangerous levels' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta que telas noturnas "suppress melatonin production by up to fifty percent, delaying sleep onset".'
      },
      {
        id: 'r-b2-rc-3-q2',
        type: 'multiple_choice',
        questionText: 'Why do specialists recommend morning sunlight exposure?',
        options: [
          { id: 'A', text: 'To calibrate the biological clock and promote daytime alertness' },
          { id: 'B', text: 'To cure screen addiction within thirty days' },
          { id: 'C', text: 'To eliminate the need for weekend sleep' },
          { id: 'D', text: 'To replace cellular repair mechanisms completely' }
        ],
        correctOptionId: 'A',
        explanation: 'O trecho final explica que obter luz matinal serve para "calibrate the biological clock" e restabelecer a sincronia circadiana.'
      }
    ]
  },
  {
    id: 'reading-b2-rc-remote-team-culture',
    pillar: 'reading',
    type: 'read_comprehend',
    level: 'b2',
    topic: 'Carreira & Relações Humanas',
    title: 'A Construção de Confiança em Equipes Remotas',
    description: 'Compreenda os pilares da comunicação empática e da documentação transparente em organizações modernas.',
    objective: 'Identificar teses centrais e soluções propostas em um artigo de gestão corporativa.',
    instructions: 'Leia a análise sobre liderança à distância e responda às perguntas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Trust Over Surveillance: Managing Distributed Teams',
      genre: 'Artigo de Gestão & Liderança',
      estimatedReadTimeMinutes: 2,
      content: `The transition toward distributed teams has laid bare an enduring philosophical divide in organizational management: output-oriented trust versus activity-oriented surveillance. While archaic command-and-control models relied on physical presence as a proxy for diligence, forward-thinking organizations measure performance through tangible milestones and autonomous problem-solving.
      
Empirical studies demonstrate that intrusive monitoring software—tracking keystrokes and webcam activity—frequently backfires, generating pervasive anxiety and driving talented contributors to seek psychological safety elsewhere. Conversely, when managers establish transparent benchmarks, celebrate asynchronous communication, and encourage candid feedback, team accountability flourishes organically.
      
Ultimately, cultivating trust across digital borders demands intentionality. Effective remote leaders prioritize social cohesion by hosting virtual coffee chats, documenting institutional knowledge systematically, and modeling healthy boundaries between work obligations and personal renewal.`,
      glossary: [
        { word: 'laid bare', translation: 'revelou / expôs com clareza' },
        { word: 'proxy for diligence', translation: 'indicador superficial de dedicação' },
        { word: 'backfires', translation: 'tem efeito contrário ao esperado' },
        { word: 'flourishes organically', translation: 'prospera de forma natural e espontânea' }
      ],
      passageTranslation: 'O trabalho distribuído expôs a divisão entre confiança em resultados e vigilância invasiva. Softwares de monitoramento geram ansiedade e afastam talentos. Em contrapartida, metas claras, documentação e respeito aos limites pessoais cultivam compromisso autêntico e coesão social.'
    },
    questions: [
      {
        id: 'r-b2-rc-4-q1',
        type: 'multiple_choice',
        questionText: 'What outcome does the article associate with intrusive workplace monitoring software?',
        options: [
          { id: 'A', text: 'Immediate increases in employee loyalty and collaboration' },
          { id: 'B', text: 'Higher anxiety levels and the departure of talented professionals' },
          { id: 'C', text: 'The complete elimination of virtual meetings' },
          { id: 'D', text: 'Guaranteed improvements in keyboard typing speed' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor destaca que o monitoramento intrusivo "frequently backfires, generating pervasive anxiety and driving talented contributors to seek psychological safety elsewhere".'
      },
      {
        id: 'r-b2-rc-4-q2',
        type: 'multiple_choice',
        questionText: 'How do progressive remote organizations measure employee performance?',
        options: [
          { id: 'A', text: 'By the exact number of hours an employee remains logged into chat' },
          { id: 'B', text: 'Through tangible milestones and autonomous problem-solving' },
          { id: 'C', text: 'By requiring continuous webcam streaming throughout the day' },
          { id: 'D', text: 'Through physical attendance at headquarters once per week' }
        ],
        correctOptionId: 'B',
        explanation: 'O primeiro parágrafo explica: "forward-thinking organizations measure performance through tangible milestones and autonomous problem-solving".'
      }
    ]
  },

  // --- 2. Descubra pelo Contexto (Context Clues) - 4 Atividades ---
  {
    id: 'reading-b2-cc-mitigate',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b2',
    topic: 'Vocabulário Contextual B2',
    title: 'Deduzindo o Significado de "Mitigate"',
    description: 'Deduzir o sentido exato de palavras a partir das pistas contextuais de um relatório ambiental.',
    objective: 'Inferir significados sem depender de tradução imediata.',
    instructions: 'Leia o trecho e escolha o sentido mais exato da palavra destacada.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Flood Prevention in Coastal Communities',
      genre: 'Relatório Técnico & Engenharia',
      estimatedReadTimeMinutes: 1,
      content: `Rising sea levels present severe risks to coastal infrastructure. To mitigate the threat of catastrophic storm surges, civil engineers are restoring natural mangrove wetlands, constructing reinforced seawalls, and upgrading drainage pump stations across vulnerable shorelines.`,
      glossary: [
        { word: 'storm surges', translation: 'ressacas marítimas / ondas de tempestade' },
        { word: 'wetlands', translation: 'mangues / áreas úmidas naturais' }
      ],
      passageTranslation: 'O aumento do nível do mar ameaça cidades litorâneas. Para atenuar esse perigo, engenheiros restauram mangues e erguem barreiras de proteção.'
    },
    questions: [
      {
        id: 'r-b2-cc-1-q1',
        type: 'multiple_choice',
        questionText: 'In the passage, the word "mitigate" most nearly means:',
        options: [
          { id: 'A', text: 'To accelerate or encourage' },
          { id: 'B', text: 'To alleviate, lessen, or reduce the severity of' },
          { id: 'C', text: 'To completely ignore or disregard' },
          { id: 'D', text: 'To document photographically' }
        ],
        correctOptionId: 'B',
        explanation: 'As ações de restauração e reforço têm por finalidade diminuir e suavizar o perigo ("mitigate" = to lessen or reduce severity).'
      }
    ]
  },
  {
    id: 'reading-b2-cc-ubiquitous',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b2',
    topic: 'Vocabulário Contextual B2',
    title: 'Deduzindo o Significado de "Ubiquitous"',
    description: 'Descubra o significado do adjetivo em um ensaio sobre tecnologia e cotidiano.',
    objective: 'Identificar pistas de abundância e onipresença no texto.',
    instructions: 'Analise as pistas contextuais e determine o significado da palavra.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Silent Architecture of Connectivity',
      genre: 'Ensaio de Tecnologia',
      estimatedReadTimeMinutes: 1,
      content: `Smartphones, once considered expensive executive luxuries, have become truly ubiquitous over the last decade. Whether traveling through bustling Asian capitals, rural South American farming communities, or European transit hubs, one observes digital screens in the hands of people of every age and background.`,
      glossary: [
        { word: 'bustling', translation: 'agitadas / movimentadas' }
      ],
      passageTranslation: 'Smartphones, antes luxo executivo, tornaram-se onipresentes. Em qualquer lugar do mundo, veem-se telas nas mãos de pessoas de todas as idades.'
    },
    questions: [
      {
        id: 'r-b2-cc-2-q1',
        type: 'multiple_choice',
        questionText: 'Based on the context, what does "ubiquitous" mean?',
        options: [
          { id: 'A', text: 'Found everywhere; omnipresent and widespread' },
          { id: 'B', text: 'Fragile and susceptible to damage' },
          { id: 'C', text: 'Extremely secretive and confidential' },
          { id: 'D', text: 'Limited exclusively to wealthy consumers' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto ilustra a presença em capitais, áreas rurais e terminais de transporte, confirmando que "ubiquitous" significa presente em toda parte (omnipresent).'
      }
    ]
  },
  {
    id: 'reading-b2-cc-counterproductive',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b2',
    topic: 'Vocabulário Contextual B2',
    title: 'Deduzindo o Significado de "Counterproductive"',
    description: 'Analise o termo em um artigo sobre hábitos de estudo e sobrecarga mental.',
    objective: 'Diferenciar ações eficientes de estratégias que geram efeito adverso.',
    instructions: 'Selecione a definição mais precisa com base nas consequências descritas.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'The Myth of Cramming Before Exams',
      genre: 'Artigo Educacional',
      estimatedReadTimeMinutes: 1,
      content: `While pulling an all-nighter before a major examination might feel heroic, educational psychologists warn that the practice is fundamentally counterproductive. Rather than improving retention, sleep deprivation impairs memory recall, slows processing speed, and drastically increases error rates on analytical questions.`,
      glossary: [
        { word: 'all-nighter', translation: 'passar a noite em claro estudando' },
        { word: 'cramming', translation: 'estudo atropelado de última hora' }
      ],
      passageTranslation: 'Virar a noite estudando é contraproducente: em vez de ajudar, a falta de sono prejudica a memória e aumenta erros na prova.'
    },
    questions: [
      {
        id: 'r-b2-cc-3-q1',
        type: 'multiple_choice',
        questionText: 'In this context, "counterproductive" means:',
        options: [
          { id: 'A', text: 'Inexpensive and accessible' },
          { id: 'B', text: 'Producing the opposite of the desired result; detrimental' },
          { id: 'C', text: 'Remarkably innovative and creative' },
          { id: 'D', text: 'Strictly required by university guidelines' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto aponta que a intenção é melhorar as notas, mas o resultado é o oposto (piora de memória e aumento de erros).'
      }
    ]
  },
  {
    id: 'reading-b2-cc-resilient',
    pillar: 'reading',
    type: 'context_clue',
    level: 'b2',
    topic: 'Vocabulário Contextual B2',
    title: 'Deduzindo o Significado de "Resilient"',
    description: 'Examine o adjetivo em uma análise sobre ecossistemas florestais após queimadas.',
    objective: 'Reconhecer a capacidade de recuperação descrita no texto.',
    instructions: 'Identifique o significado do termo a partir da regeneração natural descrita.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Forest Rebirth in Temperate Climates',
      genre: 'Artigo de Ecologia',
      estimatedReadTimeMinutes: 1,
      content: `Despite the blackened landscape left by the wildfire, the temperate pine forest proved astonishingly resilient. Within six months of seasonal rainfall, dormant seeds had germinated, underground root networks sent up fresh saplings, and native bird species returned to nest in the recovering canopy.`,
      glossary: [
        { word: 'dormant seeds', translation: 'sementes dormentes' },
        { word: 'saplings', translation: 'mudas / brotos jovens de árvores' }
      ],
      passageTranslation: 'A floresta de pinheiros provou-se resiliente após o fogo: com as chuvas, sementes germinaram e a vida voltou a florescer.'
    },
    questions: [
      {
        id: 'r-b2-cc-4-q1',
        type: 'multiple_choice',
        questionText: 'What does "resilient" signify in this paragraph?',
        options: [
          { id: 'A', text: 'Able to recover quickly from difficult conditions or damage' },
          { id: 'B', text: 'Permanently scarred and unable to regenerate' },
          { id: 'C', text: 'Artificial and planted by human volunteers' },
          { id: 'D', text: 'Extremely vulnerable to minor weather variations' }
        ],
        correctOptionId: 'A',
        explanation: 'O texto narra como a floresta germinou e se recuperou em poucos meses após um desastre, demonstrando resiliência (capacidade de recuperação rápida).'
      }
    ]
  },

  // --- 3. Interprete a Mensagem (Message Interpretation) - 4 Atividades ---
  {
    id: 'reading-b2-mi-customer-policy',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b2',
    topic: 'Políticas de Atendimento & Termos',
    title: 'Interpretação de Termos de Cancelamento e Reembolso',
    description: 'Interprete as condições e prazos de uma política de devoluções de uma plataforma internacional de cursos.',
    objective: 'Extrair condições implícitas e regras contratuais em textos do cotidiano.',
    instructions: 'Leia a cláusula de serviço e responda sobre os direitos do usuário.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Subscription Cancellation and Refund Guidelines',
      genre: 'Termos de Serviço & Comunicado',
      estimatedReadTimeMinutes: 1,
      content: `Subscribers may cancel their recurring billing cycle at any point via account preferences. To qualify for a full refund on an annual plan, cancellation requests must be submitted within fourteen days of the initial transaction date, provided that less than twenty percent of certified course modules have been accessed. Monthly subscriptions are non-refundable once the billing period has commenced, though access will persist until the current monthly cycle concludes.`,
      glossary: [
        { word: 'recurring billing', translation: 'cobrança recorrente / renovação automática' },
        { word: 'provided that', translation: 'contanto que / desde que' }
      ],
      passageTranslation: 'Assinantes podem cancelar a renovação a qualquer momento. Para reembolso integral no plano anual, o pedido deve ser feito em até 14 dias da compra e menos de 20% do curso acessado. Mensalidades não são reembolsadas após iniciadas, mas o acesso segue até o fim do ciclo.'
    },
    questions: [
      {
        id: 'r-b2-mi-1-q1',
        type: 'multiple_choice',
        questionText: 'Under what specific conditions is an annual subscriber eligible for a complete refund?',
        options: [
          { id: 'A', text: 'They cancel within thirty days regardless of course progress' },
          { id: 'B', text: 'They request cancellation within fourteen days and have viewed under twenty percent of certified content' },
          { id: 'C', text: 'They switch immediately to an in-person campus course' },
          { id: 'D', text: 'They provide a notarized letter from an academic advisor' }
        ],
        correctOptionId: 'B',
        explanation: 'As duas condições simultâneas são: solicitação dentro de 14 dias e acesso inferior a 20% dos módulos do curso.'
      }
    ]
  },
  {
    id: 'reading-b2-mi-university-bulletin',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b2',
    topic: 'Vida Universitária & Intercâmbio',
    title: 'Comunicado sobre Prazos de Intercâmbio Acadêmico',
    description: 'Interprete instruções institucionais direcionadas a estudantes internacionais sobre bolsas e vistos.',
    objective: 'Identificar prazos fatais e responsabilidades documentais.',
    instructions: 'Leia o boletim e responda sobre a ação imediata exigida dos candidatos.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'International Student Exchange: Final Application Window',
      genre: 'Boletim Universitário Oficial',
      estimatedReadTimeMinutes: 1,
      content: `Notice to all prospective autumn exchange candidates: Official transcripts and certified language proficiency certificates must be uploaded to the portal by Friday, May 15, at 17:00 UTC. Incomplete dossiers will be disqualified automatically without administrative review. Students seeking university dormitory placement should note that accommodation is allocated strictly on a first-come, first-served basis following academic acceptance.`,
      glossary: [
        { word: 'transcripts', translation: 'históricos escolares oficiais' },
        { word: 'dossiers', translation: 'dossiês / conjuntos de documentos' }
      ],
      passageTranslation: 'Candidatos ao intercâmbio de outono devem enviar históricos e certificados até 15 de maio às 17h UTC. Documentação incompleta será desqualificada. Vagas nos dormitórios são preenchidas por ordem de chegada após aprovação acadêmica.'
    },
    questions: [
      {
        id: 'r-b2-mi-2-q1',
        type: 'multiple_choice',
        questionText: 'How is student dormitory housing assigned according to the bulletin?',
        options: [
          { id: 'A', text: 'By lottery on the first day of autumn classes' },
          { id: 'B', text: 'Strictly in the order applications are confirmed after academic approval' },
          { id: 'C', text: 'Based on the applicant’s highest language test score' },
          { id: 'D', text: 'Allocated exclusively to graduate researchers' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto especifica: "accommodation is allocated strictly on a first-come, first-served basis following academic acceptance".'
      }
    ]
  },
  {
    id: 'reading-b2-mi-safety-protocol',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b2',
    topic: 'Segurança & Ambiente de Trabalho',
    title: 'Protocolo de Evacuação e Segurança Predial',
    description: 'Compreenda regras de emergência predial e atribuições de líderes de evacuação.',
    objective: 'Reconhecer instruções imperativas e diretrizes de ação rápida.',
    instructions: 'Leia as diretrizes de segurança e responda sobre o procedimento padrão.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Facility Fire Alarm and Evacuation Directives',
      genre: 'Manual de Segurança Corporativa',
      estimatedReadTimeMinutes: 1,
      content: `Upon hearing the continuous audible alarm, all personnel must cease work immediately, secure hazardous equipment, and proceed via marked stairwells to the south parking assembly point. Elevators will lock automatically at ground level and are strictly prohibited during emergency egress. Floor marshals wearing fluorescent vests are authorized to direct orderly evacuation and verify that restrooms and conference suites are fully vacated.`,
      glossary: [
        { word: 'egress', translation: 'saída / evacuação' },
        { word: 'marshals', translation: 'brigadistas / fiscais de evacuação' }
      ],
      passageTranslation: 'Ao som do alarme contínuo, interrompa o trabalho e use as escadas até o estacionamento sul. Elevadores são proibidos durante a evacuação. Brigadistas com coletes fluorescentes orientam a saída ordenada.'
    },
    questions: [
      {
        id: 'r-b2-mi-3-q1',
        type: 'multiple_choice',
        questionText: 'What happens to elevators when the fire alarm sounds?',
        options: [
          { id: 'A', text: 'They operate at half speed for elderly occupants' },
          { id: 'B', text: 'They automatically lock at ground level and must not be used' },
          { id: 'C', text: 'They move exclusively between top floors' },
          { id: 'D', text: 'They require personal keycard activation from marshals' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto estabelece: "Elevators will lock automatically at ground level and are strictly prohibited during emergency egress".'
      }
    ]
  },
  {
    id: 'reading-b2-mi-community-memo',
    pillar: 'reading',
    type: 'message_interpret',
    level: 'b2',
    topic: 'Cidadania & Comunidade',
    title: 'Aviso sobre Obras de Revitalização Comunitária',
    description: 'Analise um aviso de conselho comunitário sobre interrupções temporárias de água e trânsito.',
    objective: 'Compreender impactos práticos e medidas de contingência para moradores.',
    instructions: 'Leia o comunicado comunitário e responda sobre as recomendações aos residentes.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Main Street Water Main Replacement: Phase 2',
      genre: 'Comunicado de Utilidade Pública',
      estimatedReadTimeMinutes: 1,
      content: `The Municipal Works Department will commence modernizing the subterranean water distribution mains along Main Street from Elm to Pine Avenue starting Tuesday, October 12. Water service will be paused intermittently between 09:00 and 15:00 on weekdays. Impacted households are advised to store potable water for daily cooking needs and anticipate temporary lane closures that may cause traffic delays during peak commuting hours.`,
      glossary: [
        { word: 'subterranean water mains', translation: 'tubulações / adutoras subterrâneas de água' },
        { word: 'intermittently', translation: 'de forma intermitente / com pausas periódicas' }
      ],
      passageTranslation: 'A prefeitura modernizará as tubulações de água na Main Street a partir de 12 de outubro. O abastecimento terá pausas entre 9h e 15h em dias úteis. Moradores devem reservar água potável e prever trânsito lento.'
    },
    questions: [
      {
        id: 'r-b2-mi-4-q1',
        type: 'multiple_choice',
        questionText: 'What precautionary measure should affected households take according to the memo?',
        options: [
          { id: 'A', text: 'Evacuate their properties until October 12' },
          { id: 'B', text: 'Store drinking and cooking water for the daytime service interruption hours' },
          { id: 'C', text: 'Permanently replace their interior plumbing fixtures' },
          { id: 'D', text: 'Avoid driving vehicles anywhere in the municipality' }
        ],
        correctOptionId: 'B',
        explanation: 'O comunicado recomenda explicitamente: "Impacted households are advised to store potable water for daily cooking needs".'
      }
    ]
  },

  // --- 4. Identifique a Ideia Principal (Main Idea) - 3 Atividades ---
  {
    id: 'reading-b2-main-digital-minimalism',
    pillar: 'reading',
    type: 'main_idea',
    level: 'b2',
    topic: 'Filosofia de Vida & Tecnologia',
    title: 'A Filosofia do Minimalismo Digital',
    description: 'Identifique a tese central de um ensaio sobre o uso deliberado de ferramentas tecnológicas.',
    objective: 'Diferenciar a mensagem principal do autor de detalhes secundários e anedotas.',
    instructions: 'Leia a reflexão e escolha a afirmação que melhor resume a ideia principal.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Digital Minimalism: Curating Focus in an Age of Distraction',
      genre: 'Ensaio Filosófico & Comportamental',
      estimatedReadTimeMinutes: 2,
      content: `Digital minimalism is frequently misunderstood as a luddite rejection of contemporary technology. In reality, it represents a philosophy of intentional curation: using a modest number of digital tools to support things you deeply value, while cheerfully missing out on the rest. Rather than reacting impulsively to every notification, the minimalist actively questions whether a given application serves their genuine life objectives or merely extracts their attentional capital for advertising revenue. True productivity stems not from owning every gadget, but from protecting uninterrupted concentration.`,
      glossary: [
        { word: 'curation', translation: 'curadoria / seleção consciente' },
        { word: 'attentional capital', translation: 'capital de atenção / foco cognitivo' }
      ],
      passageTranslation: 'O minimalismo digital não é aversão à tecnologia, mas escolha consciente: usar poucas ferramentas que realmente agregam valor aos seus objetivos, protegendo a concentração contra distrações superficiais.'
    },
    questions: [
      {
        id: 'r-b2-main-1-q1',
        type: 'multiple_choice',
        questionText: 'Which statement best encapsulates the central thesis of the text?',
        options: [
          { id: 'A', text: 'Modern professionals must discard all electronic smartphones to be productive' },
          { id: 'B', text: 'Digital minimalism is about intentionally selecting tools that align with core personal values rather than rejecting technology' },
          { id: 'C', text: 'Advertising revenue is the sole legitimate indicator of app usefulness' },
          { id: 'D', text: 'Responding immediately to notifications improves cognitive resilience' }
        ],
        correctOptionId: 'B',
        explanation: 'O autor define o minimalismo digital como uma curadoria consciente alinhada a valores profundos, desmistificando a ideia de que seria uma simples aversão a aparelhos.'
      }
    ]
  },
  {
    id: 'reading-b2-main-circular-economy',
    pillar: 'reading',
    type: 'main_idea',
    level: 'b2',
    topic: 'Economia & Inovação',
    title: 'O Paradigma da Economia Circular',
    description: 'Compreenda a transição do modelo industrial linear para sistemas regenerativos de ciclo fechado.',
    objective: 'Reconhecer o conceito definidor de economia circular.',
    instructions: 'Identifique a alternativa que sintetiza o modelo econômico apresentado.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'From Extraction to Regeneration: The Circular Economy',
      genre: 'Artigo de Economia & Sustentabilidade',
      estimatedReadTimeMinutes: 2,
      content: `The traditional industrial paradigm operates on a linear "take-make-waste" trajectory, depleting finite natural reserves and generating monumental landfills. In contrast, the circular economy conceives of waste as design failure. By engineering products for disassembly, extending material longevity through repair and refurbishment, and recycling biological nutrients back into the soil, circular systems decouple economic vitality from resource consumption.`,
      glossary: [
        { word: 'decouple', translation: 'desvincular / dissociar' },
        { word: 'refurbishment', translation: 'reforma / restauração de produtos' }
      ],
      passageTranslation: 'O modelo tradicional segue a lógica de extrair, produzir e descartar. A economia circular trata o lixo como erro de design: projeta produtos para desmontagem, reparo e reuso, dissociando crescimento econômico de esgotamento de recursos.'
    },
    questions: [
      {
        id: 'r-b2-main-2-q1',
        type: 'multiple_choice',
        questionText: 'What is the primary objective of the circular economic model described in the passage?',
        options: [
          { id: 'A', text: 'To accelerate the speed at which landfills are filled with single-use plastics' },
          { id: 'B', text: 'To decouple economic growth from finite resource consumption by designing waste out of the industrial cycle' },
          { id: 'C', text: 'To mandate that all consumer goods be manufactured exclusively from biological timber' },
          { id: 'D', text: 'To subsidize traditional extraction industries during economic recessions' }
        ],
        correctOptionId: 'B',
        explanation: 'A ideia central sintetizada no texto é dissociar a vitalidade econômica da extração destrutiva de recursos por meio de produtos reparáveis e ciclos fechados.'
      }
    ]
  },
  {
    id: 'reading-b2-main-lifelong-learning',
    pillar: 'reading',
    type: 'main_idea',
    level: 'b2',
    topic: 'Educação & Desenvolvimento',
    title: 'A Necessidade da Aprendizagem Contínua (Lifelong Learning)',
    description: 'Sintetize um texto sobre adaptabilidade profissional diante das transformações aceleradas do mercado de trabalho.',
    objective: 'Identificar a ideia unificadora de um texto sobre carreira contemporânea.',
    instructions: 'Escolha a opção que resume o argumento global do autor.',
    maxScore: 100,
    version: 1,
    readingPassage: {
      title: 'Lifelong Learning as a Survival Imperative',
      genre: 'Artigo de Educação & Tendências',
      estimatedReadTimeMinutes: 2,
      content: `In previous generations, university degrees or technical apprenticeships provided occupational security for an entire professional career. Today, the rapid obsolescence of technical skillsets driven by automation demands continuous self-education. Lifelong learning is no longer a luxury for the intellectually curious; it is an indispensable survival strategy. Cultivating cognitive adaptability and curiosity matters far more than accumulating static credentials that lose relevance within five years.`,
      glossary: [
        { word: 'obsolescence', translation: 'obsolescência / desatualização' },
        { word: 'apprenticeships', translation: 'estágios / programas de formação inicial' }
      ],
      passageTranslation: 'Antes, um diploma garantia uma carreira inteira. Hoje, a rápida obsolescência exige aprendizado constante ao longo da vida. A curiosidade e a capacidade de adaptação valem muito mais que diplomas estáticos.'
    },
    questions: [
      {
        id: 'r-b2-main-3-q1',
        type: 'multiple_choice',
        questionText: 'What is the central message conveyed by the author?',
        options: [
          { id: 'A', text: 'Higher education credentials remain sufficient for four decades of employment' },
          { id: 'B', text: 'Continuous learning and cognitive adaptability have become essential career necessities due to rapid skill obsolescence' },
          { id: 'C', text: 'All traditional apprenticeship programs should be abolished immediately' },
          { id: 'D', text: 'Automation has made human learning completely unnecessary' }
        ],
        correctOptionId: 'B',
        explanation: 'A tese central é que a aprendizagem contínua deixou de ser opcional e tornou-se imperativo de sobrevivência profissional diante da velocidade com que habilidades técnicas se tornam obsoletas.'
      }
    ]
  }
];

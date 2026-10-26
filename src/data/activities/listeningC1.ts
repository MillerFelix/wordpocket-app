import { Activity, ListeningQuestion } from '../../types/activity';

export const LISTENING_C1: Activity<ListeningQuestion>[] = [
  // --- 1. Ouça e Identifique (Listen and Identify) - 4 Atividades ---
  {
    id: 'listening-c1-id-subjunctive-mandative',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c1',
    topic: 'Gramática Formal & Subjuntivo Mandativo',
    title: 'O Subjuntivo Mandativo na Fala Institucional',
    description: 'Identifique o uso do subjuntivo formal (demand that he be, insist that she submit) em pronunciamentos institucionais.',
    objective: 'Reconhecer o verbo na forma base em orações subordinadas após verbos de exigência, recomendação ou urgência.',
    instructions: 'Ouça atentamente os três pronunciamentos formais e identifique a estrutura do subjuntivo mandativo.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Formal Mandative Subjunctive in Policy Briefings',
      scenario: 'Pronunciamentos deliberativos em sessões governamentais e corporativas',
      spokenText: 'Item one: The regulatory board demands that every financial institution remain fully capitalized throughout the restructuring period. Item two: It is absolutely imperative that the lead auditor be granted unrestricted access to encrypted ledger transactions. Item three: The ombudsman insisted that the municipal council disclose all environmental impact disclosures prior to the public hearing.',
      speechRate: 0.96,
      estimatedDurationSeconds: 25,
      transcript: 'Item 1: The regulatory board demands that every financial institution remain fully capitalized throughout the restructuring period.\nItem 2: It is absolutely imperative that the lead auditor be granted unrestricted access to encrypted ledger transactions.\nItem 3: The ombudsman insisted that the municipal council disclose all environmental impact disclosures prior to the public hearing.',
      transcriptTranslation: 'Item 1: A diretoria regulatória exige que todas as instituições financeiras permaneçam totalmente capitalizadas durante o período de reestruturação.\nItem 2: É absolutamente imperativo que o auditor-chefe receba acesso irrestrito às transações contábeis criptografadas.\nItem 3: O ouvidor insistiu que o conselho municipal divulgue todos os relatórios de impacto ambiental antes da audiência pública.'
    },
    questions: [
      {
        id: 'l-c1-sm-1',
        type: 'multiple_choice',
        questionText: 'No Item 1, por que o falante utiliza "remain" em vez de "remains" após "every financial institution"?',
        options: [
          { id: 'A', text: 'Trata-se de um erro comum de concordância no inglês falado' },
          { id: 'B', text: 'Porque o verbo de exigência "demands that" rege o subjuntivo mandativo, com o verbo na forma base sem o -s' },
          { id: 'C', text: 'Porque "financial institution" é um substantivo invariável no plural' },
          { id: 'D', text: 'Porque o tempo verbal da oração é o passado perfeito' }
        ],
        correctOptionId: 'B',
        explanation: 'No inglês formal de nível C1, verbos como "demand that", "insist that" e adjetivos como "imperative that" exigem a forma base do verbo (subjuntivo mandativo): "that every institution remain".'
      },
      {
        id: 'l-c1-sm-2',
        type: 'multiple_choice',
        questionText: 'No Item 2, qual construção do subjuntivo passivo é utilizada?',
        options: [
          { id: 'A', text: 'that the auditor is granted' },
          { id: 'B', text: 'that the lead auditor be granted unrestricted access' },
          { id: 'C', text: 'that the auditor will be granted' },
          { id: 'D', text: 'that the auditor has been granted' }
        ],
        correctOptionId: 'B',
        explanation: 'Após "It is absolutely imperative that...", emprega-se "be granted" (forma base do verbo to be + particípio), característica do registro formal.'
      }
    ]
  },
  {
    id: 'listening-c1-id-stress-pragmatics',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c1',
    topic: 'Fonologia Avançada & Entonação Pragmática',
    title: 'Acento Contrastivo e Implicação de Significado',
    description: 'Perceba como a mudança no acento tônico da frase altera radicalmente o significado implícito da mensagem.',
    objective: 'Identificar a palavra enfatizada pelo falante e decodificar a mensagem implícita por trás da entonação.',
    instructions: 'Ouça as variações da mesma frase e identifique a dedução lógica de cada pronúncia.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Pragmatic Shifts via Tonic Stress',
      scenario: 'Análise fonológica de ênfase contrastiva na comunicação',
      spokenText: 'Version Alpha: I did not say she stole the laboratory blueprints. Version Beta: I did not say SHE stole the laboratory blueprints. Version Gamma: I did not SAY she stole the laboratory blueprints.',
      speechRate: 0.95,
      estimatedDurationSeconds: 18,
      transcript: 'Version Alpha: I did not SAY she stole the laboratory blueprints.\nVersion Beta: I did not say SHE stole the laboratory blueprints.\nVersion Gamma: I did not say she STOLE the laboratory blueprints.',
      transcriptTranslation: 'Versão Alfa: Eu não DISSE que ela roubou as plantas do laboratório (posso ter sugerido por gestos ou escrito).\nVersão Beta: Eu não disse que ELA roubou as plantas (alguém roubou, mas não necessariamente ela).\nVersão Gama: Eu não disse que ela ROUBOU as plantas (ela pode ter pego emprestado ou esquecido).'
    },
    questions: [
      {
        id: 'l-c1-sp-1',
        type: 'multiple_choice',
        questionText: 'Na Versão Beta, o falante enfatiza fortemente o pronome "SHE". Qual é a implicação pragmática dessa entonação?',
        options: [
          { id: 'A', text: 'As plantas do laboratório nunca existiram' },
          { id: 'B', text: 'Alguém roubou os projetos, mas o falante acredita que tenha sido outra pessoa, não ela' },
          { id: 'C', text: 'O falante é o único culpado pelo sumiço' },
          { id: 'D', text: 'O laboratório foi demolido' }
        ],
        correctOptionId: 'B',
        explanation: 'O acento contrastivo em "SHE" ("I did not say SHE stole...") implica diretamente que outra pessoa pode ser a responsável pelo roubo.'
      },
      {
        id: 'l-c1-sp-2',
        type: 'multiple_choice',
        questionText: 'Se o falante coloca a ênfase máxima em "SAY", qual é a insinuação transmitida?',
        options: [
          { id: 'A', text: 'Ele confessou o crime perante a corte' },
          { id: 'B', text: 'Ele não verbalizou a acusação explicitamente, mas pode ter insinuado ou demonstrado por outros meios' },
          { id: 'C', text: 'Ele perdeu a capacidade da fala' },
          { id: 'D', text: 'Ele esqueceu o nome da pessoa' }
        ],
        correctOptionId: 'B',
        explanation: 'Enfatizar o verbo "SAY" ("I did not SAY...") denota que a pessoa talvez tenha sugerido, escrito ou indicado a suspeita, embora não a tenha verbalizado de maneira direta.'
      }
    ]
  },
  {
    id: 'listening-c1-id-cleft-structures',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c1',
    topic: 'Sintaxe & Foco Discursivo',
    title: 'Sentenças Clivadas e Pseudoclivadas (Cleft Sentences)',
    description: 'Identifique estruturas de clivagem (What struck me most was, It was not until... that) usadas para enfatizar argumentos.',
    objective: 'Reconhecer o mecanismo de focalização em orações clivadas na fala retórica de nível avançado.',
    instructions: 'Ouça as análises críticas e selecione o elemento que recebe o foco principal do falante.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Discourse Focus via Cleft Structures',
      scenario: 'Debates analíticos sobre gestão de crises e liderança',
      spokenText: 'Speaker one: What struck the investigative commission most was not the technical failure of the backup generators, but the systematic suppression of warning memos by middle management. Speaker two: It was only when community protests reached national headlines that municipal authorities finally agreed to allocate emergency drinking water infrastructure.',
      speechRate: 0.96,
      estimatedDurationSeconds: 24,
      transcript: 'Speaker 1: What struck the investigative commission most was not the technical failure of the backup generators, but the systematic suppression of warning memos by middle management.\nSpeaker 2: It was only when community protests reached national headlines that municipal authorities finally agreed to allocate emergency drinking water infrastructure.',
      transcriptTranslation: 'Falante 1: O que mais chocou a comissão investigadora não foi a falha técnica dos geradores, mas a supressão sistemática de alertas pela gerência média.\nFalante 2: Foi apenas quando os protestos da comunidade ganharam as manchetes nacionais que as autoridades municipais finalmente concordaram em providenciar infraestrutura emergencial de água potável.'
    },
    questions: [
      {
        id: 'l-c1-cs-1',
        type: 'multiple_choice',
        questionText: 'Pela estrutura clivada "What struck the commission most was...", qual elemento é apontado como a verdadeira causa do espanto?',
        options: [
          { id: 'A', text: 'O custo de compra dos geradores substitutos' },
          { id: 'B', text: 'A supressão deliberada de relatórios de alerta por parte da gerência intermediária' },
          { id: 'C', text: 'O mau tempo ocorrido no dia do acidente' },
          { id: 'D', text: 'A demissão em massa de operários' }
        ],
        correctOptionId: 'B',
        explanation: 'A pseudoclivada focaliza no contraste: o espanto não foi a falha mecânica, mas sim "the systematic suppression of warning memos by middle management".'
      },
      {
        id: 'l-c1-cs-2',
        type: 'multiple_choice',
        questionText: 'O que a clivada "It was only when... that..." no segundo trecho evidencia sobre a atitude das autoridades?',
        options: [
          { id: 'A', text: 'Que as autoridades agiram com extrema proatividade e rapidez' },
          { id: 'B', text: 'Que elas só tomaram providências após a pressão insustentável da repercussão nacional na mídia' },
          { id: 'C', text: 'Que elas já haviam instalado a água potável meses antes' },
          { id: 'D', text: 'Que os protestos foram completamente ignorados pela administração' }
        ],
        correctOptionId: 'B',
        explanation: 'A estrutura "It was only when... that..." demarca uma condição extrema e tardia para a ação: apenas sob o impacto das manchetes nacionais houve reação das autoridades.'
      }
    ]
  },
  {
    id: 'listening-c1-id-discourse-markers',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c1',
    topic: 'Coesão Avançada & Marcadores Discursivos',
    title: 'Marcadores de Concessão, Refutação e Síntese',
    description: 'Identifique a função discursiva de conectores avançados como "be that as it may", "notwithstanding" e "all things considered".',
    objective: 'Mapear a lógica argumentativa do interlocutor através de marcadores sofisticados de transição de ideias.',
    instructions: 'Ouça o discurso e determine o papel argumentativo dos conectores destacados.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Rhetorical Connectors in High-Level Deliberation',
      scenario: 'Pronunciamento em mesa redonda de políticas econômicas',
      spokenText: 'Admittedly, the initial capital outlay for modernizing the regional rail network appears daunting during a period of fiscal tightening. Be that as it may, postponing infrastructural renewal for another legislative cycle will compound maintenance costs exponentially. Notwithstanding the reservations voiced by the treasury representative, the long-term economic dividend far eclipses the immediate expenditure.',
      speechRate: 0.96,
      estimatedDurationSeconds: 26,
      transcript: 'Admittedly, the initial capital outlay appears daunting during fiscal tightening. Be that as it may, postponing renewal will compound maintenance costs exponentially. Notwithstanding reservations voiced by the treasury, the long-term dividend far eclipses immediate expenditure.',
      transcriptTranslation: 'É verdade que o desembolso inicial de capital parece intimidador em um momento de aperto fiscal. Seja como for, adiar a renovação por mais um ciclo legislativo multiplicará os custos de manutenção exponencialmente. Não obstante as reservas manifestadas pelo representante do tesouro, o retorno econômico de longo prazo eclipsa com folga os gastos imediatos.'
    },
    questions: [
      {
        id: 'l-c1-dm-1',
        type: 'multiple_choice',
        questionText: 'Qual é o papel retórico da expressão "Be that as it may" no meio do pronunciamento?',
        options: [
          { id: 'A', text: 'Encerrar a discussão definitivamente sem qualquer conclusão' },
          { id: 'B', text: 'Reconhecer um argumento adverso (o alto custo) mas reafirmar que o curso de ação segue indispensável' },
          { id: 'C', text: 'Pedir desculpas formais por um erro estatístico' },
          { id: 'D', text: 'Anunciar o cancelamento imediato de todas as obras' }
        ],
        correctOptionId: 'B',
        explanation: '"Be that as it may" equivale a "mesmo assim" ou "seja como for": concede que a premissa anterior é verdadeira, mas sustenta que a conclusão principal não é invalidada por ela.'
      },
      {
        id: 'l-c1-dm-2',
        type: 'multiple_choice',
        questionText: 'Como a preposição concessiva formal "Notwithstanding" introduz a oração final?',
        options: [
          { id: 'A', text: 'Como um agradecimento entusiasmado ao representante do tesouro' },
          { id: 'B', text: 'Como uma concessão ("apesar de" / "a despeito de"), demonstrando que as ressalvas do tesouro não impedem a viabilidade do projeto' },
          { id: 'C', text: 'Como uma comprovação matemática de que o tesouro estava correto' },
          { id: 'D', text: 'Como um pedido de demissão do palestrante' }
        ],
        correctOptionId: 'B',
        explanation: '"Notwithstanding" é um conector formal que introduz uma concessão ("apesar das reservas levantadas pelo tesouro"), enfatizando que o benefício supera o custo.'
      }
    ]
  },

  // --- 2. Compreenda o Diálogo (Listen to Dialogue) - 4 Atividades ---
  {
    id: 'listening-c1-dial-algorithmic-risk',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c1',
    topic: 'Tecnologia, Ética & Governança',
    title: 'Auditoria Ética de Modelos Algorítmicos',
    description: 'Helena e Julian debatem o risco de vieses em modelos de triagem automatizada de candidatos.',
    objective: 'Compreender trocas argumentativas de alto nível envolvendo salvaguardas éticas e conformidade regulatória.',
    instructions: 'Acompanhe a reunião executiva e analise as posições defendidas pelos interlocutores.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Algorithmic Risk Assessment in Human Resources',
      scenario: 'Reunião de comitê executivo de governança e ética em IA',
      spokenText: 'Julian, the engineering department is eager to roll out our predictive applicant screening model across all European subsidiaries next quarter. I understand the commercial appetite for efficiency, Helena. However, our preliminary fairness audit identified a statistically significant discrepancy: candidates from non-traditional educational backgrounds are being filtered out at disproportionate rates due to proxy variables in the training data. That is a serious compliance liability under the latest algorithmic accountability directives. Can we retrain the neural network with adversarial debiasing techniques before deployment? We can, but doing so requires re-annotating thousands of historical hiring records to curate a balanced benchmark. If we rush this out prematurely to satisfy quarterly recruitment quotas, we expose the firm to crippling reputational damage and multi-million-euro regulatory fines. I concur entirely, Julian. Let us halt deployment until the audit panel issues a clean certificate of compliance.',
      dialogueLines: [
        { speaker: 'Helena', gender: 'female', text: 'Julian, the engineering department is eager to roll out our predictive applicant screening model across all European subsidiaries next quarter.', translation: 'Julian, o departamento de engenharia está ansioso para implementar nosso modelo preditivo de triagem de candidatos em todas as subsidiárias europeias no próximo trimestre.' },
        { speaker: 'Julian', gender: 'male', text: 'I understand the commercial appetite for efficiency, Helena. However, our preliminary fairness audit identified a statistically significant discrepancy: candidates from non-traditional educational backgrounds are being filtered out at disproportionate rates due to proxy variables in the training data.', translation: 'Entendo o apetite comercial por eficiência, Helena. No entanto, nossa auditoria preliminar de conformidade identificou uma discrepância estatística relevante: candidatos de trajetórias educacionais não tradicionais estão sendo descartados em índices desproporcionais devido a variáveis de aproximação enviesadas nos dados de treino.' },
        { speaker: 'Helena', gender: 'female', text: 'That is a serious compliance liability under the latest algorithmic accountability directives. Can we retrain the neural network with adversarial debiasing techniques before deployment?', translation: 'Esse é um passivo de conformidade grave sob as novas diretrizes de responsabilidade algorítmica. Conseguimos retreinar a rede neural com técnicas de desenviesamento antes do lançamento?' },
        { speaker: 'Julian', gender: 'male', text: 'We can, but doing so requires re-annotating thousands of historical hiring records to curate a balanced benchmark. If we rush this out prematurely to satisfy quarterly recruitment quotas, we expose the firm to crippling reputational damage and multi-million-euro regulatory fines.', translation: 'Podemos, mas isso exige reanotar milhares de registros históricos de contratação para construir uma base equilibrada. Se nos precipitarmos para bater metas trimestrais de contratação, expomos a empresa a um dano reputacional gravíssimo e a multas regulatórias milionárias.' },
        { speaker: 'Helena', gender: 'female', text: 'I concur entirely, Julian. Let us halt deployment until the audit panel issues a clean certificate of compliance.', translation: 'Concordo plenamente, Julian. Vamos suspender a implementação até que o painel de auditoria emita um certificado limpo de conformidade.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 42,
      transcript: 'Helena: Engineering wants to roll out the predictive screening model across Europe next quarter.\nJulian: Our fairness audit identified a discrepancy: non-traditional candidates are filtered out disproportionately due to proxy variables.\nHelena: That\'s a compliance liability. Can we retrain with debiasing?\nJulian: Yes, but re-annotating records takes time. Rushing risks massive fines and reputational fallout.\nHelena: Agreed. Let\'s halt deployment until we obtain a clean compliance certificate.',
      transcriptTranslation: 'Helena: A engenharia quer implementar a triagem preditiva na Europa.\nJulian: A auditoria achou viés: candidatos não tradicionais são eliminados desproporcionalmente por dados históricos enviesados.\nHelena: Risco grave de conformidade. Dá para retreinar e tirar o viés?\nJulian: Sim, mas reanotar dados leva tempo. Apressar isso trará multas e dano à imagem.\nHelena: De acordo. Suspendemos até termos certificação completa.'
    },
    questions: [
      {
        id: 'l-c1-ar-1',
        type: 'multiple_choice',
        questionText: 'Qual falha ética foi detectada pela auditoria de Julian no modelo de triagem?',
        options: [
          { id: 'A', text: 'O software travava computadores dos candidatos durante o preenchimento de formulários' },
          { id: 'B', text: 'O modelo eliminava desproporcionalmente candidatos de formação não tradicional devido a variáveis de aproximação nos dados históricos' },
          { id: 'C', text: 'O sistema exigia pagamentos em criptomoedas para registrar currículos' },
          { id: 'D', text: 'O algoritmo contratava apenas pessoas que falavam cinco idiomas' }
        ],
        correctOptionId: 'B',
        explanation: 'Julian explica que candidatos de "non-traditional educational backgrounds are being filtered out at disproportionate rates due to proxy variables in the training data".'
      },
      {
        id: 'l-c1-ar-2',
        type: 'multiple_choice',
        questionText: 'Qual decisão unânime é tomada por Helena e Julian ao final da conversa?',
        options: [
          { id: 'A', text: 'Lançar o produto na semana seguinte sem alterações para atingir as metas trimestrais' },
          { id: 'B', text: 'Suspender a implementação do sistema até a reanotação dos dados e a emissão de um laudo de conformidade' },
          { id: 'C', text: 'Demitir toda a equipe de engenharia responsável' },
          { id: 'D', text: 'Vender o software para um concorrente asiático' }
        ],
        correctOptionId: 'B',
        explanation: 'Helena conclui expressamente: "Let us halt deployment until the audit panel issues a clean certificate of compliance".'
      }
    ]
  },
  {
    id: 'listening-c1-dial-architectural-jury',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c1',
    topic: 'Arquitetura & Espaço Público',
    title: 'Deliberação de Júri Arquitetônico',
    description: 'Arthur e Beatrice avaliam duas propostas finalistas para a revitalização de uma biblioteca pública centenária.',
    objective: 'Compreender a ponderação de valores conflitantes: ousadia formal contemporânea vs. funcionalidade cívica duradoura.',
    instructions: 'Acompanhe a deliberação dos jurados e identifique os critérios determinantes.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Architectural Competition Jury Deliberation',
      scenario: 'Debate confidencial de júri técnico de concurso público',
      spokenText: 'Arthur, I must concede that Proposal B is visually arresting. That cantilevered titanium canopy suspended over the historic brick facade makes an audacious sculptural statement. Visually compelling, yes, Beatrice, but architecturally self-indulgent. If you scrutinize the interior circulation blueprints, the atrium’s cavernous volume consumes nearly forty percent of the usable floor plate, relegating communal reading rooms to cramped subterranean annexes. An urban library is not a monument to an architect’s ego; it is an accessible sanctuary for intellectual democracy. Proposal A might appear sober by comparison, but its intuitive natural day-lighting strategy and flexible modular book stacks honor the original civic mission of the institution. You make a persuasive case, Arthur. Let us award the commission to Proposal A, provided they refine the southern pedestrian entrance.',
      dialogueLines: [
        { speaker: 'Beatrice', gender: 'female', text: 'Arthur, I must concede that Proposal B is visually arresting. That cantilevered titanium canopy suspended over the historic brick facade makes an audacious sculptural statement.', translation: 'Arthur, devo admitir que a Proposta B é visualmente impressionante. Aquela marquise de titânio em balanço suspensa sobre a fachada histórica de tijolos é uma declaração escultórica audaciosa.' },
        { speaker: 'Arthur', gender: 'male', text: 'Visually compelling, yes, Beatrice, but architecturally self-indulgent. If you scrutinize the interior circulation blueprints, the atrium’s cavernous volume consumes nearly forty percent of the usable floor plate, relegating communal reading rooms to cramped subterranean annexes.', translation: 'Visualmente atraente, sim, Beatrice, mas arquitetonicamente egocêntrica. Se você examinar a planta de circulação interna, o átrio cavernoso consome quase quarenta por cento da área útil, relegando as salas de leitura comunitárias a anexos subterrâneos apertados.' },
        { speaker: 'Arthur', gender: 'male', text: 'An urban library is not a monument to an architect’s ego; it is an accessible sanctuary for intellectual democracy. Proposal A might appear sober by comparison, but its intuitive natural day-lighting strategy and flexible modular book stacks honor the original civic mission of the institution.', translation: 'Uma biblioteca pública não é monumento ao ego de um arquiteto; é um santuário acessível de democracia intelectual. A Proposta A pode parecer sóbria em comparação, mas sua iluminação natural intuitiva e estantes modulares flexíveis honram a missão cívica da instituição.' },
        { speaker: 'Beatrice', gender: 'female', text: 'You make a persuasive case, Arthur. Let us award the commission to Proposal A, provided they refine the southern pedestrian entrance.', translation: 'Seus argumentos foram persuasivos, Arthur. Vamos conceder o contrato à Proposta A, desde que refinem o acesso de pedestres na face sul.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 40,
      transcript: 'Beatrice: Proposal B is visually arresting with its cantilevered titanium canopy.\nArthur: Visually compelling, but self-indulgent. The atrium consumes 40% of floor space, exiling reading rooms to cramped basements. A library must serve intellectual democracy.\nArthur: Proposal A is sober, but offers intuitive daylighting and modular stacks honoring the civic mission.\nBeatrice: Persuasive case. Let\'s award Proposal A, provided they refine the south entrance.',
      transcriptTranslation: 'Beatrice: A proposta B impressiona pela cobertura de titânio em balanço.\nArthur: Bonita, mas egocêntrica. O átrio consome 40% da área útil, jogando salas de leitura para subsolos apertados. Uma biblioteca deve servir à democracia cultural.\nArthur: A proposta A é sóbria, mas tem luz natural e estantes modulares que respeitam a função cívica.\nBeatrice: Convenceu. Ficamos com a A, exigindo melhoria na entrada sul.'
    },
    questions: [
      {
        id: 'l-c1-aj-1',
        type: 'multiple_choice',
        questionText: 'Qual crítica funcional Arthur faz ao projeto B apesar do apelo estético?',
        options: [
          { id: 'A', text: 'O prédio utilizava materiais tóxicos na fundação' },
          { id: 'B', text: 'O átrio gigantesco roubava 40% da área útil, jogando as salas de leitura para anexos subterrâneos acanhados' },
          { id: 'C', text: 'Não havia escadas de emergência previstas no projeto' },
          { id: 'D', text: 'O telhado de titânio era excessivamente pesado para os pilares' }
        ],
        correctOptionId: 'B',
        explanation: 'Arthur critica que "the atrium’s cavernous volume consumes nearly forty percent of the usable floor plate, relegating communal reading rooms to cramped subterranean annexes".'
      },
      {
        id: 'l-c1-aj-2',
        type: 'multiple_choice',
        questionText: 'Por que o júri decide selecionar a Proposta A?',
        options: [
          { id: 'A', text: 'Era a única que utilizava materiais inteiramente reciclados' },
          { id: 'B', text: 'Prioriza a iluminação natural, flexibilidade modular e a verdadeira missão democrática da biblioteca' },
          { id: 'C', text: 'Custava menos da metade do orçamento municipal previsto' },
          { id: 'D', text: 'Foi desenhada pelo parente de um dos jurados' }
        ],
        correctOptionId: 'B',
        explanation: 'Arthur convence Beatrice ressaltando que a proposta A possui iluminação natural e honra a missão cívica da biblioteca como espaço acessível a todos.'
      }
    ]
  },
  {
    id: 'listening-c1-dial-open-access',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c1',
    topic: 'Comunicação Científica & Acesso Aberto',
    title: 'Dilemas da Publicação Científica em Acesso Aberto',
    description: 'Dois pesquisadores debatem taxas de processamento de artigos (APCs) e a sustentabilidade de repositórios abertos.',
    objective: 'Compreender nuances de modelos econômicos na disseminação do conhecimento acadêmico.',
    instructions: 'Ouça o diálogo entre os professores universitários e compreenda as tensões do modelo.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'The Political Economy of Academic Publishing',
      scenario: 'Conversa entre professores titulares durante conferência internacional',
      spokenText: 'Dr. Al-Mansoor, our university senate is proposing that all faculty members publish exclusively in diamond open-access journals to dismantle publisher paywalls. While the ideological premise is unassailable, Sorenson, the practical execution presents severe inequities. Commercial open-access publishers have simply inverted the monetization apparatus: rather than charging readers exorbitant subscription fees, they levy astronomical article processing charges onto authors. This shift creates a perverse financial hierarchy where well-endowed Western institutions can easily bankroll publication fees, while scholars in developing nations find themselves effectively priced out of prestigious academic discourse. Precisely. That is why genuine democratization requires institutional backing for non-profit, scholar-led publishing consortia, rather than passively funneling public research grants into private publisher profit margins.',
      dialogueLines: [
        { speaker: 'Prof. Sorenson', gender: 'male', text: 'Dr. Al-Mansoor, our university senate is proposing that all faculty members publish exclusively in diamond open-access journals to dismantle publisher paywalls.', translation: 'Dr. Al-Mansoor, o conselho universitário propõe que todos os docentes publiquem exclusivamente em periódicos de acesso aberto diamante para derrubar as barreiras de acesso de editoras privadas.' },
        { speaker: 'Dr. Al-Mansoor', gender: 'female', text: 'While the ideological premise is unassailable, Sorenson, the practical execution presents severe inequities. Commercial open-access publishers have simply inverted the monetization apparatus: rather than charging readers exorbitant subscription fees, they levy astronomical article processing charges onto authors.', translation: 'Embora a premissa ideológica seja inquestionável, Sorenson, a execução prática gera profundas desigualdades. Editoras comerciais apenas inverteram a forma de cobrança: em vez de cobrar assinaturas exorbitantes dos leitores, cobram taxas astronômicas de processamento de artigo dos próprios autores.' },
        { speaker: 'Dr. Al-Mansoor', gender: 'female', text: 'This shift creates a perverse financial hierarchy where well-endowed Western institutions can easily bankroll publication fees, while scholars in developing nations find themselves effectively priced out of prestigious academic discourse.', translation: 'Isso cria uma hierarquia financeira perversa onde instituições ocidentais ricas pagam as taxas com facilidade, enquanto cientistas de países em desenvolvimento acabam excluídos do debate acadêmico prestigiado por falta de verba.' },
        { speaker: 'Prof. Sorenson', gender: 'male', text: 'Precisely. That is why genuine democratization requires institutional backing for non-profit, scholar-led publishing consortia, rather than passively funneling public research grants into private publisher profit margins.', translation: 'Exato. É por isso que a verdadeira democratização exige apoio institucional a consórcios editoriais sem fins lucrativos geridos pelos próprios pesquisadores, em vez de drenar verbas públicas de pesquisa para o lucro de editoras privadas.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 42,
      transcript: 'Sorenson: Senate wants faculty to publish solely in open access to break paywalls.\nAl-Mansoor: Good premise, but commercial publishers inverted monetization: instead of subscription fees, they charge astronomical author fees.\nAl-Mansoor: Wealthy universities can pay; researchers in developing countries are priced out.\nSorenson: True democratization needs non-profit scholar consortia, not public funds feeding private margins.',
      transcriptTranslation: 'Sorenson: O conselho quer acesso aberto exclusivo contra barreiras pagas.\nAl-Mansoor: Boa ideia, mas as editoras inverteram a cobrança: cobram taxas astronômicas dos autores.\nAl-Mansoor: Universidades ricas pagam; pesquisadores do Sul global são excluídos.\nSorenson: Democratização real exige consórcios sem fins lucrativos mantidos pela própria academia.'
    },
    questions: [
      {
        id: 'l-c1-oa-1',
        type: 'multiple_choice',
        questionText: 'Qual consequência perversa das taxas de processamento de artigos (APCs) é apontada pela Dra. Al-Mansoor?',
        options: [
          { id: 'A', text: 'Os artigos passam a conter mais erros ortográficos' },
          { id: 'B', text: 'Pesquisadores de países em desenvolvimento são excluídos por não poderem pagar as taxas exorbitantes de publicação' },
          { id: 'C', text: 'As bibliotecas universitárias fecham suas portas físicas' },
          { id: 'D', text: 'Nenhum estudante consegue ler os artigos publicados' }
        ],
        correctOptionId: 'B',
        explanation: 'A pesquisadora adverte que o modelo "creates a perverse financial hierarchy where... scholars in developing nations find themselves effectively priced out of prestigious academic discourse".'
      },
      {
        id: 'l-c1-oa-2',
        type: 'multiple_choice',
        questionText: 'Qual alternativa é defendida pelo Prof. Sorenson como caminho legítimo para o acesso aberto?',
        options: [
          { id: 'A', text: 'Encerrar todas as publicações científicas e usar redes sociais' },
          { id: 'B', text: 'Financiar consórcios de publicação acadêmica sem fins lucrativos geridos pelos próprios cientistas' },
          { id: 'C', text: 'Aumentar as mensalidades dos estudantes de graduação' },
          { id: 'D', text: 'Privatizar os departamentos de pesquisa das universidades' }
        ],
        correctOptionId: 'B',
        explanation: 'O professor conclui que a saída é o "institutional backing for non-profit, scholar-led publishing consortia, rather than passively funneling public research grants into private publisher profit margins".'
      }
    ]
  },
  {
    id: 'listening-c1-dial-talent-retention',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c1',
    topic: 'Gestão Organizacional & Cultura de Trabalho',
    title: 'Reestruturação Corporativa e Retenção de Talentos',
    description: 'Victoria e Nathan debatem como conduzir uma transição organizacional preservando a motivação e a confiança da equipe.',
    objective: 'Compreender sutilezas de gestão de clima organizacional e comunicação interna transparente sob incerteza.',
    instructions: 'Acompanhe a conversa entre os diretores e responda sobre a estratégia delineada.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Navigating Organizational Restructuring and Morale',
      scenario: 'Reunião estratégica entre diretora de operações e diretor de RH',
      spokenText: 'Nathan, the impending operational merger with Synapse Tech is triggering understandable apprehension across our research divisions. Rumors of redundant layoffs are already circulating on anonymous internal forums. That is precisely why our internal messaging must be characterized by unvarnished transparency, Victoria. If we retreat behind sanitized public relations platitudes like strategic synergy realignment, we will catalyze an immediate exodus of our most gifted senior researchers. I agree. Top talent rarely flees due to structural change itself; they depart when they sense condescending obfuscation from leadership. What is our concrete plan for tomorrow town hall? We will lay out the explicit criteria for department integration, guarantee severance packages well above statutory minimums for any eliminated roles, and delineate specific retention bonuses for core technical architects.',
      dialogueLines: [
        { speaker: 'Victoria', gender: 'female', text: 'Nathan, the impending operational merger with Synapse Tech is triggering understandable apprehension across our research divisions. Rumors of redundant layoffs are already circulating on anonymous internal forums.', translation: 'Nathan, a iminente fusão operacional com a Synapse Tech está provocando uma apreensão compreensível nas nossas divisões de pesquisa. Rumores de demissões já circulam em fóruns internos anônimos.' },
        { speaker: 'Nathan', gender: 'male', text: 'That is precisely why our internal messaging must be characterized by unvarnished transparency, Victoria. If we retreat behind sanitized public relations platitudes like strategic synergy realignment, we will catalyze an immediate exodus of our most gifted senior researchers.', translation: 'É exatamente por isso que nossa comunicação interna precisa ter transparência cristalina, Victoria. Se nos escondermos atrás de clichês corporativos vazios como realinhamento de sinergia, vamos provocar um êxodo imediato dos nossos melhores pesquisadores sêniores.' },
        { speaker: 'Victoria', gender: 'female', text: 'I agree. Top talent rarely flees due to structural change itself; they depart when they sense condescending obfuscation from leadership. What is our concrete plan for tomorrow town hall?', translation: 'Concordo. Talentos de ponta raramente fogem da mudança estrutural em si; vão embora quando sentem dissimulação condescendente da liderança. Qual é nosso plano concreto para a reunião geral de amanhã?' },
        { speaker: 'Nathan', gender: 'male', text: 'We will lay out the explicit criteria for department integration, guarantee severance packages well above statutory minimums for any eliminated roles, and delineate specific retention bonuses for core technical architects.', translation: 'Vamos expor com clareza os critérios de integração das áreas, garantir indenizações muito acima do mínimo legal para eventuais cortes e apresentar bônus específicos de retenção para os arquitetos técnicos centrais.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 41,
      transcript: 'Victoria: The upcoming merger is causing panic; layoff rumors are spreading.\nNathan: We need unvarnished transparency. Sanitized PR platitudes will spark an exodus of senior talent.\nVictoria: Talent leaves when leadership obfuscates. What\'s the plan for tomorrow\'s town hall?\nNathan: Present explicit integration criteria, above-statutory severance packages, and retention bonuses for key architects.',
      transcriptTranslation: 'Victoria: A fusão está gerando pânico e boatos de demissões.\nNathan: Precisamos de transparência crua. Frases corporativas prontas farão os talentos debandar.\nVictoria: Pessoas fogem de dissimulação. O que diremos na reunião geral amanhã?\nNathan: Critérios claros de integração, rescisões generosas se houver cortes e bônus de permanência para peças-chave.'
    },
    questions: [
      {
        id: 'l-c1-tr-1',
        type: 'multiple_choice',
        questionText: 'O que Nathan e Victoria concordam ser a causa real da perda de talentos em fusões empresariais?',
        options: [
          { id: 'A', text: 'A mudança de endereço físico do escritório' },
          { id: 'B', text: 'A falta de transparência e a sensação de dissimulação por parte da liderança ("condescending obfuscation")' },
          { id: 'C', text: 'A introdução de novos horários de almoço' },
          { id: 'D', text: 'O uso obrigatório de novos softwares de e-mail' }
        ],
        correctOptionId: 'B',
        explanation: 'Victoria enfatiza que "Top talent rarely flees due to structural change itself; they depart when they sense condescending obfuscation from leadership".'
      },
      {
        id: 'l-c1-tr-2',
        type: 'multiple_choice',
        questionText: 'Qual compromisso prático será anunciado na assembleia geral (town hall) para tranquilizar a equipe?',
        options: [
          { id: 'A', text: 'Congelamento de salários por cinco anos' },
          { id: 'B', text: 'Critérios claros de integração, pacotes rescisórios acima da lei e bônus de retenção para especialistas-chave' },
          { id: 'C', text: 'Cancelamento definitivo da fusão com a outra empresa' },
          { id: 'D', text: 'Substituição da equipe técnica por inteligência artificial' }
        ],
        correctOptionId: 'B',
        explanation: 'Nathan descreve as medidas objetivas: "explicit criteria for department integration, guarantee severance packages well above statutory minimums... and delineate specific retention bonuses".'
      }
    ]
  },

  // --- 3. Situações da Vida Real (Real-Life Situations) - 4 Atividades ---
  {
    id: 'listening-c1-sit-water-rationing',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c1',
    topic: 'Políticas Públicas & Gestão Hídrica',
    title: 'Pronunciamento Emergencial de Racionamento Hídrico',
    description: 'Ouça o pronunciamento da autoridade municipal sobre restrições graduadas de abastecimento diante de seca histórica.',
    objective: 'Identificar categorias de restrição, penalidades fiscais e medidas mitigatórias em discursos oficiais.',
    instructions: 'Ouça a coletiva de imprensa oficial e avalie o impacto das determinações sobre os diferentes setores.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Municipal Water Conservation Mandate Briefing',
      scenario: 'Coletiva de imprensa da comissária de recursos hídricos metropolitanos',
      spokenText: 'Good afternoon, members of the press. Following forty-five consecutive days of historic drought, reservoir levels across the northern watershed have plunged below nineteen percent of capacity. Under Municipal Directive 84, we are declaring an immediate Stage Three Water Emergency. Non-essential domestic consumption—including residential lawn irrigation, automated vehicle washing, and recreational pool filling—is prohibited under penalty of escalating administrative fines. Commercial and industrial manufacturing facilities must curb aggregate consumption by twenty-five percent compared to last year baseline. Essential healthcare infrastructure, food processing centers, and emergency services are categorically exempted from rationing quotas. Our enforcement inspectors will begin conducting nocturnal thermal drone surveys starting midnight to identify illicit irrigation.',
      speechRate: 0.96,
      estimatedDurationSeconds: 34,
      transcript: 'Commissioner: Following 45 days of historic drought, reservoir levels dropped below 19%. Under Directive 84, we declare a Stage 3 Water Emergency. Non-essential domestic uses (lawn watering, car washes, pool filling) are prohibited under escalating fines. Industrial users must curb consumption by 25%. Hospitals and food processors are exempted. Thermal drone inspections begin tonight.',
      transcriptTranslation: 'Comissária: Após 45 dias de seca histórica, os reservatórios caíram abaixo de 19%. Sob a Diretiva 84, declaramos Emergência Hídrica Estágio 3. Usos domésticos não essenciais (regar gramados, lavar carros, encher piscinas) estão proibidos sob multa progressiva. Indústrias devem cortar 25% do consumo. Hospitais e alimentos têm isenção total. Fiscalização noturna por drones começa hoje.'
    },
    questions: [
      {
        id: 'l-c1-wr-1',
        type: 'multiple_choice',
        questionText: 'Qual meta de redução é imposta às indústrias e fábricas sob a Diretiva 84?',
        options: [
          { id: 'A', text: 'Corte obrigatório de 25% no consumo agregado em relação ao ano anterior' },
          { id: 'B', text: 'Paralisação total e fechamento das linhas de produção' },
          { id: 'C', text: 'Corte de 5% apenas aos domingos' },
          { id: 'D', text: 'Nenhuma exigência para o setor industrial' }
        ],
        correctOptionId: 'A',
        explanation: 'A comissária detalha expressamente: "Commercial and industrial manufacturing facilities must curb aggregate consumption by twenty-five percent compared to last year baseline".'
      },
      {
        id: 'l-c1-wr-2',
        type: 'multiple_choice',
        questionText: 'Quais setores estão expressamente isentos das restrições de racionamento hídrico?',
        options: [
          { id: 'A', text: 'Clubes esportivos e campos de golfe' },
          { id: 'B', text: 'Infraestrutura hospitalar de saúde, processamento de alimentos e serviços de emergência' },
          { id: 'C', text: 'Fábricas de cerveja e bebidas açucaradas' },
          { id: 'D', text: 'Lava-rápidos automatizados' }
        ],
        correctOptionId: 'B',
        explanation: 'O comunicado ressalta: "Essential healthcare infrastructure, food processing centers, and emergency services are categorically exempted from rationing quotas".'
      }
    ]
  },
  {
    id: 'listening-c1-sit-commercial-arbitration',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c1',
    topic: 'Direito Comercial & Arbitragem',
    title: 'Sessão de Arbitragem em Quebra de Cadeia de Suprimentos',
    description: 'Ouça o árbitro internacional emitindo o laudo preliminar em uma disputa contratual sobre cláusula de força maior.',
    objective: 'Compreender terminologias jurídicas contratuais (force majeure, foreseeable contingencies, breach of covenant).',
    instructions: 'Acompanhe a leitura do parecer arbitral e identifique o fundamento legal da decisão.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Commercial Arbitration Hearing on Force Majeure Claims',
      scenario: 'Tribunal arbitral de comércio internacional',
      spokenText: 'Having evaluated the extensive evidentiary submissions from both claimant and respondent, the tribunal renders its preliminary finding regarding the invoked force majeure exemption. The respondent contends that unprecedented geopolitical trade blockades rendered the on-time delivery of specialized semiconductor components legally impossible. However, Section 22 of the master purchase agreement explicitly stipulates that supply chain disruptions attributable to foreseeable regulatory shifts do not constitute an exculpatory act of God. Given that trade sanctions were openly deliberated in international forums for six months prior to contract execution, the respondent bore a contractual obligation to secure secondary sourcing alternatives. Consequently, the defense of force majeure is rejected, and the respondent remains liable for liquidated delay damages.',
      speechRate: 0.97,
      estimatedDurationSeconds: 37,
      transcript: 'Arbitrator: The tribunal evaluates the invoked force majeure defense. Respondent claims geopolitical blockades made semiconductor delivery impossible. However, Section 22 explicitly states foreseeable regulatory shifts do not constitute exculpatory force majeure. Since sanctions were openly debated for six months beforehand, respondent bore an obligation to establish secondary sourcing. The force majeure claim is rejected; liability for damages stands.',
      transcriptTranslation: 'Árbitro: O tribunal avalia a alegação de força maior. A requerida sustenta que bloqueios geopolíticos impediram a entrega de semicondutores. Contudo, a Cláusula 22 estipula que oscilações regulatórias previsíveis não constituem força maior. Como sanções já eram debatidas publicamente meses antes do contrato, cabia à requerida garantir fontes alternativas. O pedido de força maior é rejeitado e as indenizações são devidas.'
    },
    questions: [
      {
        id: 'l-c1-ca-1',
        type: 'multiple_choice',
        questionText: 'Por que o tribunal arbitral rejeitou a alegação de força maior (force majeure)?',
        options: [
          { id: 'A', text: 'Porque o fornecedor entregou os componentes antes do prazo' },
          { id: 'B', text: 'Porque o risco geopolítico já era previsível e debatido meses antes, obrigando a empresa a ter plano de contingência contratual' },
          { id: 'C', text: 'Porque o contrato nunca foi assinado por nenhuma das partes' },
          { id: 'D', text: 'Porque o valor da carga era inferior a cem dólares' }
        ],
        correctOptionId: 'B',
        explanation: 'O árbitro fundamenta que as sanções eram previsíveis ("foreseeable regulatory shifts") e já eram debatidas há meses, de modo que a empresa tinha a obrigação contratual de garantir fontes alternativas de fornecimento.'
      },
      {
        id: 'l-c1-ca-2',
        type: 'multiple_choice',
        questionText: 'Qual consequência jurídica recai sobre a parte requerida (respondent)?',
        options: [
          { id: 'A', text: 'Ela foi declarada insolvente e teve bens leiloados imediatamente' },
          { id: 'B', text: 'Ela permanece legalmente responsável por indenizações contratuais por atraso ("liquidated delay damages")' },
          { id: 'C', text: 'Ela recebeu um prêmio por inovação em semicondutores' },
          { id: 'D', text: 'O processo foi arquivado sem qualquer penalidade' }
        ],
        correctOptionId: 'B',
        explanation: 'O laudo conclui: "the defense of force majeure is rejected, and the respondent remains liable for liquidated delay damages".'
      }
    ]
  },
  {
    id: 'listening-c1-sit-cognitive-lecture',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c1',
    topic: 'Psicologia Cognitiva & Vieses',
    title: 'Aula Magna: Heurísticas e a Ilusão de Causalidade',
    description: 'Acompanhe a exposição de um professor universitário sobre a heurística da disponibilidade e o viés de confirmação.',
    objective: 'Compreender palestras acadêmicas densas estruturadas com exemplos experimentais e conclusões epistemológicas.',
    instructions: 'Ouça o trecho da aula magistral e responda às questões sobre psicologia do julgamento.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'University Masterclass on Availability Heuristics',
      scenario: 'Auditório universitário em aula de pós-graduação em ciências cognitivas',
      spokenText: 'In our examination of human decision architecture, we must confront the sobering reality that human intuition is fundamentally narrative-driven rather than mathematically probabilistic. Consider the availability heuristic: when assessing the likelihood of an event, human agents do not compute objective statistical frequencies; rather, they rely on the ease with which vivid instances can be retrieved from episodic memory. A sensationalist aviation accident reported across global media networks commands disproportionate cognitive salience, leading individuals to overestimate aviation fatalities by several orders of magnitude while remaining blithely indifferent to mundane cardiovascular risks that are statistically ten thousand times more lethal. Our cognitive architecture evolved for immediate savanna survival, not for navigating actuarial risk tables.',
      speechRate: 0.98,
      estimatedDurationSeconds: 36,
      transcript: 'Professor: Human intuition is narrative-driven rather than probabilistic. Consider the availability heuristic: when estimating likelihood, people don\'t calculate frequencies; they rely on ease of retrieval from memory. A sensational plane crash creates cognitive salience, causing people to vastly overestimate aviation risks while ignoring mundane cardiovascular hazards that are 10,000 times more lethal. Our brain evolved for savanna survival, not actuarial tables.',
      transcriptTranslation: 'Professor: A intuição humana é guiada por narrativas, não por probabilidades matemáticas. Na heurística da disponibilidade, estimamos riscos não por dados estatísticos, mas pela facilidade de lembrar de exemplos vívidos. Um acidente aéreo espetacularizado ganha saliência mental absurda, fazendo superestimar mortes na aviação enquanto ignoramos riscos cardíacos comuns dez mil vezes mais letais. Nosso cérebro evoluiu na savana, não para tabelas atuariais.'
    },
    questions: [
      {
        id: 'l-c1-cl-1',
        type: 'multiple_choice',
        questionText: 'Segundo o professor, como opera a heurística da disponibilidade na mente humana?',
        options: [
          { id: 'A', text: 'Realizando cálculos probabilísticos matemáticos exatos em frações de segundo' },
          { id: 'B', text: 'Estimando a probabilidade de eventos com base na facilidade com que exemplos vívidos vêm à memória' },
          { id: 'C', text: 'Consultando bancos de dados governamentais na internet' },
          { id: 'D', text: 'Recusando-se a tomar qualquer decisão sob estresse' }
        ],
        correctOptionId: 'B',
        explanation: 'O professor define a heurística: "they rely on the ease with which vivid instances can be retrieved from episodic memory" em vez de cálculos estatísticos frios.'
      },
      {
        id: 'l-c1-cl-2',
        type: 'multiple_choice',
        questionText: 'Qual exemplo o professor utiliza para ilustrar a distorção do risco percebido?',
        options: [
          { id: 'A', text: 'A compra de bilhetes de loteria em datas comemorativas' },
          { id: 'B', text: 'O medo desmedido de acidentes aéreos amplificados pela mídia em contraste com a indiferença a doenças cardíacas muito mais comuns' },
          { id: 'C', text: 'O medo de animais venenosos em centros urbanos' },
          { id: 'D', text: 'O investimento financeiro em ações de tecnologia' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele compara o medo de desastres aéreos muito divulgados com a indiferença perante riscos cardiovasculares estatisticamente dez mil vezes mais mortais.'
      }
    ]
  },
  {
    id: 'listening-c1-sit-wind-farm-hearing',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c1',
    topic: 'Energia Renovável & Audiência Pública',
    title: 'Audiência Pública sobre Parque Eólico Offshore',
    description: 'Ouça as considerações de uma engenheira ambiental e as réplicas de pescadores locais sobre a instalação de turbinas marítimas.',
    objective: 'Compreender debates cívicos complexos onde interesses econômicos, conservacionistas e comunitários colidem.',
    instructions: 'Acompanhe a sessão pública municipal e avalie as propostas de conciliação.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Offshore Wind Farm Environmental Public Hearing',
      scenario: 'Audiência pública no plenário da câmara municipal litorânea',
      spokenText: 'Thank you, Madam Moderator. On behalf of the Coastal Energy Consortium, I wish to present the revised maritime footprint for the sixty-turbine offshore wind array. We have listened attentively to the deep concerns expressed by local artisanal fishing cooperatives regarding disruption to benthic habitats and seasonal lobster migration routes. In response, our marine engineering team has shifted the entire grid five nautical miles further seaward, completely beyond the traditional continental shelf lobster nurseries. Furthermore, the turbine pylons will utilize jacket foundations designed to mimic artificial reefs, which empirical studies have shown increase juvenile fish biomass within three years. To ensure economic continuity, the consortium is establishing a community fund providing subsidized acoustic sonar equipment for local fishing vessels.',
      speechRate: 0.97,
      estimatedDurationSeconds: 38,
      transcript: 'Engineer: Addressing artisanal fishers\' concerns about benthic habitats and lobster migration, we shifted the 60-turbine wind array 5 nautical miles seaward, beyond continental shelf nurseries. Pylon jacket foundations will act as artificial reefs, increasing juvenile fish biomass within 3 years. We also established a community fund providing subsidized sonar equipment for local fishing vessels.',
      transcriptTranslation: 'Engenheira: Respondendo às preocupações dos pescadores artesanais sobre habitats marinhos e rotas de lagostas, recuamos o parque de 60 turbinas em 5 milhas náuticas mar adentro, fora dos berçários naturais. As bases dos pilares funcionarão como recifes artificiais, elevando a biomassa de peixes em 3 anos. Criamos ainda um fundo comunitário para subsidiar sonares acústicos aos barcos pesqueiros.'
    },
    questions: [
      {
        id: 'l-c1-wh-1',
        type: 'multiple_choice',
        questionText: 'Qual alteração no projeto foi anunciada pela engenheira para proteger as lagostas?',
        options: [
          { id: 'A', text: 'Reduzir o número de turbinas de sessenta para cinco' },
          { id: 'B', text: 'Recuar todo o parque eólico em cinco milhas náuticas mar adentro, para além dos berçários da plataforma continental' },
          { id: 'C', text: 'Proibir permanentemente a pesca no litoral' },
          { id: 'D', text: 'Instalar as turbinas na areia da praia' }
        ],
        correctOptionId: 'B',
        explanation: 'A engenheira relata que o consórcio recuou as turbinas "five nautical miles further seaward, completely beyond the traditional continental shelf lobster nurseries".'
      },
      {
        id: 'l-c1-wh-2',
        type: 'multiple_choice',
        questionText: 'Qual benefício ecológico é projetado a partir das fundações metálicas das turbinas?',
        options: [
          { id: 'A', text: 'Elas funcionarão como recifes artificiais, estimulando a biomassa de peixes jovens em três anos' },
          { id: 'B', text: 'Aquecerão a água do mar para atrair baleias' },
          { id: 'C', text: 'Eliminarão algas marinhas das praias' },
          { id: 'D', text: 'Purificarão o sal marinho para consumo humano' }
        ],
        correctOptionId: 'A',
        explanation: 'As estruturas metálicas submersas atuarão como recifes artificiais ("mimic artificial reefs... increase juvenile fish biomass within three years").'
      }
    ]
  },

  // --- 4. Entenda o Inglês Natural (Natural Speech) - 3 Atividades ---
  {
    id: 'listening-c1-nat-digital-minimalism',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'c1',
    topic: 'Cultura & Psicologia Social',
    title: 'A Falácia do Minimalismo Digital Descontextualizado',
    description: 'Ouça uma reflexão ácida e espontânea sobre como conselhos de desconexão digital ignoram a realidade econômica moderna.',
    objective: 'Compreender ironia velada, gírias intelectuais e argumentos sociológicos em fala rápida nativa.',
    instructions: 'Acompanhe a crítica cultural e responda sobre a visão de classe defendida pelo orador.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Critique of Privileged Digital Detox Culture',
      scenario: 'Monólogo de ensaio em podcast cultural independente',
      spokenText: 'I get deeply irritated whenever privileged lifestyle columnists preach the gospel of going off the grid as if it were a simple moral virtue. They write these lyrical manifestos about leaving their smartphones in mahogany drawers and spending three months handwriting letters on handmade linen paper. Must be nice! But let us be painfully realistic: the ability to deliberately disconnect is the ultimate luxury good of the twenty-first century. If you are a freelance contractor, an on-demand driver, or an administrative coordinator juggling three shifts, turning off your notifications for forty-eight hours is not an enlightened spiritual retreat—it is economic suicide. True digital agency cannot be solved by personal asceticism; it requires structural workplace protections.',
      speechRate: 1.0,
      estimatedDurationSeconds: 32,
      transcript: 'I get irritated when privileged columnists preach going off the grid as a moral virtue. They write manifestos about locking phones in drawers for months. Must be nice! But disconnecting is the ultimate luxury good today. If you\'re a gig worker or freelance coordinator, turning off notifications for 48 hours is economic suicide, not spiritual retreat. True digital agency needs structural workplace protections, not asceticism.',
      transcriptTranslation: 'Fico profundamente irritado quando colunistas pregam desconexão total como virtude moral. Escrevem manifestos sobre guardar celulares em gavetas por meses. Que maravilha! Mas desconectar é hoje o maior artigo de luxo. Para trabalhadores autônomos ou de aplicativos, desligar notificações por 48 horas é suicídio econômico, não retiro espiritual. Autonomia digital real exige leis trabalhistas protetivas, não penitência individual.'
    },
    questions: [
      {
        id: 'l-c1-dm-nat-1',
        type: 'multiple_choice',
        questionText: 'Qual é o cerne da crítica feita pelo palestrante à cultura do "digital detox"?',
        options: [
          { id: 'A', text: 'Os smartphones modernos quebram com facilidade quando guardados em gavetas' },
          { id: 'B', text: 'Desconectar-se é um privilégio de classe inacessível para quem depende de trabalho digital sob demanda para sobreviver' },
          { id: 'C', text: 'As cartas escritas à mão são caras demais para o serviço postal' },
          { id: 'D', text: 'O sinal de internet nunca deve ser desligado por razões de defesa nacional' }
        ],
        correctOptionId: 'B',
        explanation: 'O palestrante argumenta com veemência que "the ability to deliberately disconnect is the ultimate luxury good", enquanto para trabalhadores da economia sob demanda trata-se de suicídio financeiro.'
      },
      {
        id: 'l-c1-dm-nat-2',
        type: 'multiple_choice',
        questionText: 'O que o autor propõe como verdadeira solução para a sobrecarga digital?',
        options: [
          { id: 'A', text: 'Excluir todas as contas de redes sociais permanentemente' },
          { id: 'B', text: 'Proteções trabalhistas estruturais, em vez de exigir penitência ou renúncia individual ("structural workplace protections")' },
          { id: 'C', text: 'Voltar a usar telefones públicos nas ruas' },
          { id: 'D', text: 'Trabalhar apenas quatro horas por mês' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele conclui expressamente: "True digital agency cannot be solved by personal asceticism; it requires structural workplace protections".'
      }
    ]
  },
  {
    id: 'listening-c1-nat-public-health-resilience',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'c1',
    topic: 'Saúde Pública & Gestão de Crises',
    title: 'Resiliência Sistêmica em Saúde Pública',
    description: 'Ouça uma explanação fluida sobre por que a eficiência excessiva (just-in-time) fragiliza sistemas hospitalares em crises.',
    objective: 'Captar raciocínio socioeconômico com metáforas operacionais na fala espontânea de um epidemiologista.',
    instructions: 'Acompanhe a reflexão e avalie a contradição entre eficiência contábil e resiliência biológica.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'The Fragility of Just-in-Time Healthcare Operations',
      scenario: 'Conferência de abertura em fórum de saúde coletiva',
      spokenText: 'For three decades, healthcare management was held hostage by management consultants preaching the absolute dogma of lean, just-in-time supply chains. Every hospital bed had to be occupied; every spare ventilator was viewed on quarterly balance sheets as wasteful idle capital. But a hospital is not a retail shoe warehouse. When you optimize a medical infrastructure strictly for maximum financial throughput during tranquil times, you systematically eliminate every ounce of redundant slack. And in epidemiology, redundant slack is not waste—it is the difference between systemic adaptation and catastrophic collapse when the unexpected epidemic strikes. Real resilience demands holding excess capacity precisely because you cannot predict when the storm arrives.',
      speechRate: 0.98,
      estimatedDurationSeconds: 34,
      transcript: 'For decades, healthcare was obsessed with lean, just-in-time supply chains. Empty beds or spare ventilators were seen as wasteful idle capital. But a hospital isn\'t a shoe warehouse. When you optimize medical systems strictly for financial throughput, you wipe out redundant slack. In epidemiology, redundant slack isn\'t waste—it\'s survival. Real resilience requires holding excess capacity for unforeseen shocks.',
      transcriptTranslation: 'Por décadas, a saúde foi refém do modelo enxuto "just-in-time". Leitos vazios ou respiradores reservas eram vistos como capital ocioso desperdiçado. Mas hospital não é depósito de sapatos. Ao otimizar a saúde para o lucro em tempos calmos, você destrói a margem de segurança. Na epidemiologia, capacidade ociosa é sobrevivência perante o imprevisto.'
    },
    questions: [
      {
        id: 'l-c1-ph-1',
        type: 'multiple_choice',
        questionText: 'Qual foi o erro fundamental da gestão hospitalar baseado no modelo "just-in-time"?',
        options: [
          { id: 'A', text: 'Contratar médicos que não sabiam usar computadores' },
          { id: 'B', text: 'Eliminar leitos e equipamentos reservas por considerá-los custos ociosos desnecessários' },
          { id: 'C', text: 'Comprar remédios em excesso que acabavam vencendo' },
          { id: 'D', text: 'Recusar doações de caridade' }
        ],
        correctOptionId: 'B',
        explanation: 'O especialista denuncia que o modelo enxuto considerava equipamentos e leitos reservas como "wasteful idle capital", deixando os hospitais sem margem de resiliência.'
      },
      {
        id: 'l-c1-ph-2',
        type: 'multiple_choice',
        questionText: 'Como o palestrante redefine o conceito de "redundant slack" (capacidade excedente) na medicina?',
        options: [
          { id: 'A', text: 'Como desperdício intolerável de dinheiro público' },
          { id: 'B', text: 'Como a margem essencial de sobrevivência que previne o colapso do sistema em emergências imprevistas' },
          { id: 'C', text: 'Como uma forma de diminuir o salário dos enfermeiros' },
          { id: 'D', text: 'Como um erro dos arquitetos hospitalares' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele define: "redundant slack is not waste—it is the difference between systemic adaptation and catastrophic collapse when the unexpected epidemic strikes".'
      }
    ]
  },
  {
    id: 'listening-c1-nat-editorial-ai-curation',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'c1',
    topic: 'Jornalismo & Inteligência Artificial',
    title: 'A Curadoria Editorial e o Risco da Homogeneização Estilística',
    description: 'Ouça uma reflexão de um experiente editor sobre a perda da singularidade autoral com ferramentas de escrita padronizada.',
    objective: 'Compreender digressões culturais sofisticadas com terminologia literária e crítica midiática.',
    instructions: 'Ouça o depoimento do editor e identifique sua preocupação central com o estilo literário.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Stylistic Atrophy in Algorithmic Prose',
      scenario: 'Depoimento em simpósio de crítica literária contemporânea',
      spokenText: 'I am not alarmed that generative text engines can produce grammatically spotless prose in five seconds. What genuinely unsettles me as a literary editor is the bland, frictionless uniformity settling over contemporary published writing. Every sentence generated by algorithmic autocomplete possesses this cheerful, corporate sheen—a syntactic beige where idiosyncratic rhythm, gritty sentence fragments, and provocative metaphors are smoothed away into statistical averageness. Great prose is defined precisely by its deliberate deviance from the mean—its stubborn idiosyncrasies and musical eccentricities. If we outsource writing to machines trained to optimize for the most probable next token, we will sleepwalk into a cultural landscape of perfectly polished sterility.',
      speechRate: 0.98,
      estimatedDurationSeconds: 35,
      transcript: 'I\'m not scared that AI writes spotless prose in seconds. What unsettles me as an editor is the bland uniformity settling over writing. Generated text has a corporate sheen—a syntactic beige where eccentric rhythms and bold metaphors are smoothed into statistical averages. Great prose is defined by deliberate deviance from the mean. Optimizing for the most probable word creates polished sterility.',
      transcriptTranslation: 'Não me assusta que a IA escreva textos perfeitos em segundos. O que me perturba é a pasteurização sem atrito que invade a escrita. Textos gerados têm um verniz corporativo bege, onde ritmos únicos e metáforas ousadas são alisados pela média estatística. A grande prosa vive justamente do desvio consciente da média. Otimizar para a palavra mais provável gera esterilidade estilística.'
    },
    questions: [
      {
        id: 'l-c1-ai-1',
        type: 'multiple_choice',
        questionText: 'O que o editor define metaforicamente como "syntactic beige" (bege sintático)?',
        options: [
          { id: 'A', text: 'A cor do papel reciclado utilizado em jornais antigos' },
          { id: 'B', text: 'A uniformidade monótona e pasteurizada de textos gerados por algoritmos que eliminam qualquer estilo único' },
          { id: 'C', text: 'A tinta utilizada nas gráficas industriais' },
          { id: 'D', text: 'Um novo padrão tipográfico digital' }
        ],
        correctOptionId: 'B',
        explanation: 'O editor usa a expressão "syntactic beige" para descrever a escrita algorítmica padronizada, previsível e sem graça, fruto da média estatística que apaga a originalidade.'
      },
      {
        id: 'l-c1-ai-2',
        type: 'multiple_choice',
        questionText: 'Segundo o editor, o que verdadeiramente define uma prosa literária de alto valor?',
        options: [
          { id: 'A', text: 'O uso estrito das palavras estatisticamente mais comuns do dicionário' },
          { id: 'B', text: 'O desvio consciente da média, com ritmos singulares e excentricidades estilísticas deliberadas' },
          { id: 'C', text: 'A velocidade com que os parágrafos podem ser lidos' },
          { id: 'D', text: 'A ausência total de figuras de linguagem' }
        ],
        correctOptionId: 'B',
        explanation: 'O texto afirma com clareza: "Great prose is defined precisely by its deliberate deviance from the mean—its stubborn idiosyncrasies and musical eccentricities".'
      }
    ]
  }
];

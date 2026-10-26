import { Activity, ListeningQuestion } from '../../types/activity';

export const LISTENING_B2: Activity<ListeningQuestion>[] = [
  // --- 1. Ouça e Identifique (Listen and Identify) - 4 Atividades ---
  {
    id: 'listening-b2-id-inversions',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b2',
    topic: 'Gramática Avançada & Inversões',
    title: 'Inversões com Advérbios Negativos e Restritivos',
    description: 'Identifique estruturas enfáticas invertidas (Rarely have I seen, Under no circumstances should you) na fala formal.',
    objective: 'Reconhecer a inversão sujeito-auxiliar após advérbios restritivos e compreender seu efeito enfático.',
    instructions: 'Ouça as frases e identifique a estrutura enfática e o significado pretendido pelo falante.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Emphatic Negative Inversions in Speech',
      scenario: 'Declarações formais com inversão de ênfase',
      spokenText: 'Statement one: Rarely have we witnessed such remarkable community solidarity during an environmental emergency. Statement two: Under no circumstances should confidential financial records be transmitted via unsecured personal email accounts. Statement three: Not only did the renovation finish two weeks ahead of schedule, but it also remained well within the allocated municipal budget.',
      speechRate: 0.98,
      estimatedDurationSeconds: 24,
      transcript: 'Statement 1: Rarely have we witnessed such remarkable community solidarity during an environmental emergency.\nStatement 2: Under no circumstances should confidential financial records be transmitted via unsecured personal email accounts.\nStatement 3: Not only did the renovation finish two weeks ahead of schedule, but it also remained well within the allocated municipal budget.',
      transcriptTranslation: 'Declaração 1: Raramente presenciamos tamanha solidariedade comunitária durante uma emergência ambiental.\nDeclaração 2: Sob hipótese alguma registros financeiros confidenciais devem ser transmitidos por e-mails pessoais desprotegidos.\nDeclaração 3: Não apenas a reforma terminou duas semanas antes do prazo, como também permaneceu bem dentro do orçamento municipal.'
    },
    questions: [
      {
        id: 'l-b2-inv-1',
        type: 'multiple_choice',
        questionText: 'Na Declaração 1, o que a inversão "Rarely have we witnessed" enfatiza?',
        options: [
          { id: 'A', text: 'Que a solidariedade presenciada foi um fato extraordinário e pouco frequente' },
          { id: 'B', text: 'Que a comunidade se recusou a ajudar durante a emergência' },
          { id: 'C', text: 'Que o evento foi cancelado por falta de voluntários' },
          { id: 'D', text: 'Que emergências ambientais nunca causam preocupação' }
        ],
        correctOptionId: 'A',
        explanation: 'A estrutura "Rarely have we witnessed..." inverte o auxiliar para dar ênfase à raridade e excepcionalidade da solidariedade demonstrada.'
      },
      {
        id: 'l-b2-inv-2',
        type: 'multiple_choice',
        questionText: 'Qual é o teor da diretriz estabelecida na Declaração 2?',
        options: [
          { id: 'A', text: 'Uma recomendação opcional que pode ser flexibilizada' },
          { id: 'B', text: 'Uma proibição categórica e absoluta ("Under no circumstances should...")' },
          { id: 'C', text: 'Uma instrução para deletar todos os e-mails recebidos' },
          { id: 'D', text: 'Uma permissão temporária para fins de urgência' }
        ],
        correctOptionId: 'B',
        explanation: '"Under no circumstances should..." expressa uma proibição absoluta e formal: sob hipótese alguma dados confidenciais podem transitar por e-mails desprotegidos.'
      },
      {
        id: 'l-b2-inv-3',
        type: 'multiple_choice',
        questionText: 'O que a frase "Not only did the renovation finish... but it also..." comunica?',
        options: [
          { id: 'A', text: 'Dois sucessos combinados: antecipação do prazo e respeito estrito ao orçamento' },
          { id: 'B', text: 'Que a obra atrasou consideravelmente' },
          { id: 'C', text: 'Que os gastos superaram o orçamento previsto' },
          { id: 'D', text: 'Que apenas metade da obra foi executada' }
        ],
        correctOptionId: 'A',
        explanation: 'A correlação enfática "Not only did... but it also..." destaca que a reforma alcançou dois feitos positivos simultâneos: agilidade e controle orçamentário.'
      }
    ]
  },
  {
    id: 'listening-b2-id-hedging-certainty',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b2',
    topic: 'Discurso Profissional & Ponderação',
    title: 'Distinguindo Nuances de Cautela e Convicção',
    description: 'Identifique expressões de atenuação (hedging: seems likely, tends to indicate) e convicção categórica.',
    objective: 'Discernir graus de certeza e polidez em deliberações e propostas profissionais.',
    instructions: 'Ouça as ponderações dos consultores e determine o grau de convicção em cada caso.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Hedging and Modality in Analytical Discussions',
      scenario: 'Consultores avaliando tendências de mercado',
      spokenText: 'Speaker A: Preliminary indicators tend to suggest that consumer appetite for subscription services might be stabilizing, though we should certainly wait for third quarter figures. Speaker B: The quarterly survey conclusively establishes that seventy-eight percent of our enterprise customers prioritize data sovereignty over processing speed. Speaker C: It would appear, at least from my vantage point, that reallocating budget toward retention could potentially yield stronger dividends than expanding cold outreach.',
      speechRate: 0.96,
      estimatedDurationSeconds: 26,
      transcript: 'Speaker A: Preliminary indicators tend to suggest that consumer appetite for subscription services might be stabilizing, though we should certainly wait for third-quarter figures.\nSpeaker B: The quarterly survey conclusively establishes that 78% of our enterprise customers prioritize data sovereignty over processing speed.\nSpeaker C: It would appear, at least from my vantage point, that reallocating budget toward retention could potentially yield stronger dividends than expanding cold outreach.',
      transcriptTranslation: 'Falante A: Indicadores preliminares tendem a sugerir que o apetite do consumidor por assinaturas pode estar se estabilizando, embora devamos certamente aguardar os dados do terceiro trimestre.\nFalante B: A pesquisa trimestral estabelece de forma conclusiva que 78% dos nossos clientes corporativos priorizam a soberania de dados em vez da velocidade de processamento.\nFalante C: Parece, ao menos sob minha perspectiva, que realocar orçamento para retenção poderia potencialmente render melhores dividendos do que expandir contatos frios.'
    },
    questions: [
      {
        id: 'l-b2-hc-1',
        type: 'multiple_choice',
        questionText: 'Qual dos três falantes expressa uma certeza respaldada em dados sem qualquer atenuação?',
        options: [
          { id: 'A', text: 'Falante A' },
          { id: 'B', text: 'Falante B ("conclusively establishes")' },
          { id: 'C', text: 'Falante C' },
          { id: 'D', text: 'Nenhum dos falantes' }
        ],
        correctOptionId: 'B',
        explanation: 'O Falante B utiliza a expressão categórica "conclusively establishes that 78%...", apresentando um dado comprovado sem ressalvas.'
      },
      {
        id: 'l-b2-hc-2',
        type: 'multiple_choice',
        questionText: 'O que evidencia que o Falante C está fazendo uma sugestão cautelosa e diplomática?',
        options: [
          { id: 'A', text: 'Ele impõe uma data limite inflexível para a equipe' },
          { id: 'B', text: 'Ele utiliza marcadores atenuadores como "It would appear", "from my vantage point" e "could potentially"' },
          { id: 'C', text: 'Ele desqualifica abertamente a opinião dos outros colegas' },
          { id: 'D', text: 'Ele recusa qualquer debate sobre orçamento' }
        ],
        correctOptionId: 'B',
        explanation: 'O uso de "hedging" ("It would appear...", "from my vantage point", "could potentially") é típico do inglês formal britânico e norte-americano para sugerir sem soar impositivo.'
      }
    ]
  },
  {
    id: 'listening-b2-id-mixed-conditionals',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b2',
    topic: 'Condicionais Mistas',
    title: 'Compreendendo Condicionais Mistas na Fala Real',
    description: 'Ouça frases combinando hipóteses do passado com reflexos presentes e vice-versa.',
    objective: 'Reconhecer conexões temporais complexas em frases como "If we had invested then, we would be leading now".',
    instructions: 'Ouça atentamente os cenários hipotéticos e responda sobre a relação de causa e efeito.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Mixed Conditional Hypotheses',
      scenario: 'Análise retrospectiva de decisões estratégicas',
      spokenText: 'Case one: If our founders had secured intellectual property rights five years ago, our company would not be facing this costly patent dispute today. Case two: If Marcus were more organized and attentive to details, he would not have overlooked the revised venue specifications in yesterday email.',
      speechRate: 0.95,
      estimatedDurationSeconds: 22,
      transcript: 'Case 1: If our founders had secured intellectual property rights five years ago, our company would not be facing this costly patent dispute today.\nCase 2: If Marcus were more organized and attentive to details, he would not have overlooked the revised venue specifications in yesterday\'s email.',
      transcriptTranslation: 'Caso 1: Se nossos fundadores tivessem protegido os direitos de propriedade intelectual há cinco anos, nossa empresa não estaria enfrentando essa dispendiosa disputa de patentes hoje.\nCaso 2: Se o Marcus fosse mais organizado e atento a detalhes, ele não teria deixado passar as especificações revisadas do local no e-mail de ontem.'
    },
    questions: [
      {
        id: 'l-b2-mc-1',
        type: 'multiple_choice',
        questionText: 'No Caso 1, qual é a situação real vivenciada pela empresa hoje?',
        options: [
          { id: 'A', text: 'A empresa registrou as patentes e está tranquila' },
          { id: 'B', text: 'A empresa está enfrentando uma disputa judicial onerosa porque não protegeu as patentes no passado' },
          { id: 'C', text: 'Os fundadores venderam a empresa no ano passado' },
          { id: 'D', text: 'Não houve nenhum erro passado' }
        ],
        correctOptionId: 'B',
        explanation: 'A condicional mista "If we had secured... we would not be facing... today" indica que uma omissão no passado (não patentear) gera um problema real no presente (disputa de patentes).'
      },
      {
        id: 'l-b2-mc-2',
        type: 'multiple_choice',
        questionText: 'No Caso 2, o que a estrutura "If Marcus were... he would not have overlooked" revela?',
        options: [
          { id: 'A', text: 'Marcus é extremamente atento e corrigiu o e-mail de todos' },
          { id: 'B', text: 'Uma característica geral de Marcus (falta de organização) causou um erro pontual ontem (ignorar as especificações)' },
          { id: 'C', text: 'Marcus nunca recebeu o e-mail de especificações' },
          { id: 'D', text: 'O local do evento foi cancelado permanentemente' }
        ],
        correctOptionId: 'B',
        explanation: 'Combina-se um traço presente ("If Marcus were more organized" - ele não é) com a consequência no passado ("he would not have overlooked yesterday").'
      }
    ]
  },
  {
    id: 'listening-b2-id-phrasal-polysemy',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'b2',
    topic: 'Phrasal Verbs Polissêmicos',
    title: 'Phrasal Verbs com Significados Variados pelo Contexto',
    description: 'Diferencie significados distintos de phrasal verbs comuns como "take up", "work out" e "put through".',
    objective: 'Interpretar phrasal verbs idiomáticos a partir das pistas contextuais no áudio.',
    instructions: 'Ouça as frases e selecione o significado específico de cada phrasal verb empregado.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Contextual Polysemy of Phrasal Verbs',
      scenario: 'Conversas cotidianas com usos figurados de phrasal verbs',
      spokenText: 'Sentence A: I decided to take up pottery on weekends to help unwind after long shifts. Sentence B: The antique dining table took up far too much floor space in our compact apartment. Sentence C: Do not worry about the unexpected schedule conflict; I am confident we can work out a reasonable compromise by noon.',
      speechRate: 0.96,
      estimatedDurationSeconds: 22,
      transcript: 'Sentence A: I decided to take up pottery on weekends to help unwind after long shifts.\nSentence B: The antique dining table took up far too much floor space in our compact apartment.\nSentence C: Don\'t worry about the unexpected schedule conflict; I\'m confident we can work out a reasonable compromise by noon.',
      transcriptTranslation: 'Frase A: Resolvi começar a fazer cerâmica aos fins de semana para ajudar a relaxar após longos plantões.\nFrase B: A mesa de jantar antiga ocupava espaço demais no nosso apartamento compacto.\nFrase C: Não se preocupe com o imprevisto na agenda; estou confiante de que podemos encontrar um bom acordo até o meio-dia.'
    },
    questions: [
      {
        id: 'l-b2-pv-1',
        type: 'multiple_choice',
        questionText: 'Na Frase A, qual é o significado de "take up"?',
        options: [
          { id: 'A', text: 'Abandonar um hábito antigo' },
          { id: 'B', text: 'Começar a praticar um novo hobby ou atividade' },
          { id: 'C', text: 'Comprar materiais caros' },
          { id: 'D', text: 'Criticar um passatempo' }
        ],
        correctOptionId: 'B',
        explanation: '"To take up a hobby" significa iniciar a prática de uma atividade ou passatempo.'
      },
      {
        id: 'l-b2-pv-2',
        type: 'multiple_choice',
        questionText: 'Na Frase B, o que significa a expressão "took up"?',
        options: [
          { id: 'A', text: 'Ocupar espaço físico ou volume' },
          { id: 'B', text: 'Custar muito dinheiro' },
          { id: 'C', text: 'Ser doada para um vizinho' },
          { id: 'D', text: 'Quebrar durante o transporte' }
        ],
        correctOptionId: 'A',
        explanation: 'Neste contexto físico, "take up floor space" significa ocupar espaço ou área em um cômodo.'
      },
      {
        id: 'l-b2-pv-3',
        type: 'multiple_choice',
        questionText: 'Na Frase C, o que "work out" significa?',
        options: [
          { id: 'A', text: 'Fazer exercícios aeróbicos na academia' },
          { id: 'B', text: 'Resolver um problema ou encontrar uma solução mutuamente aceitável' },
          { id: 'C', text: 'Recusar-se a negociar' },
          { id: 'D', text: 'Atrasar uma reunião deliberadamente' }
        ],
        correctOptionId: 'B',
        explanation: '"Work out a compromise/solution" significa solucionar, equacionar ou resolver satisfatoriamente uma divergência.'
      }
    ]
  },

  // --- 2. Compreenda o Diálogo (Listen to Dialogue) - 4 Atividades ---
  {
    id: 'listening-b2-dial-commercial-lease',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b2',
    topic: 'Negócios & Negociação Contratual',
    title: 'Negociando Cláusulas de Locação Comercial',
    description: 'Acompanhe a conversa entre proprietário e empreendedora discutindo carência para reformas e taxa de condomínio.',
    objective: 'Compreender concessões mútuas, contrapropostas e termos comerciais em uma negociação de aluguel.',
    instructions: 'Ouça o diálogo entre Mark e Sandra e avalie os acordos firmados.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Commercial Lease Terms Negotiation',
      scenario: 'Reunião entre proprietário de imóvel e locatária',
      spokenText: 'Sandra, I reviewed your proposed revisions for the retail storefront on Elm Street. While I understand you need time for acoustic remodeling, granting a three-month rent-free period is financially steep for us. I appreciate your candidness, Mark. However, installing specialized soundproofing and ventilation benefits the property in the long run. If three months is too burdensome, what if we agree on two months rent-free, and in exchange, I sign a three-year commitment instead of two? That definitely makes the equation more viable. If you extend the term to three years, I can accommodate the sixty-day grace period, provided that structural repairs remain your responsibility. That sounds completely fair. Send over the amended paperwork and I will sign it before Friday.',
      dialogueLines: [
        { speaker: 'Mark', gender: 'male', text: 'Sandra, I reviewed your proposed revisions for the retail storefront on Elm Street. While I understand you need time for acoustic remodeling, granting a three-month rent-free period is financially steep for us.', translation: 'Sandra, revisei suas propostas de alteração para a loja na Elm Street. Embora compreenda que precise de tempo para a reforma acústica, conceder três meses de carência é muito pesado financeiramente para nós.' },
        { speaker: 'Sandra', gender: 'female', text: 'I appreciate your candidness, Mark. However, installing specialized soundproofing and ventilation benefits the property in the long run. If three months is too burdensome, what if we agree on two months rent-free, and in exchange, I sign a three-year commitment instead of two?', translation: 'Agradeço sua franqueza, Mark. Contudo, instalar isolamento acústico e ventilação valoriza o imóvel a longo prazo. Se três meses é pesado, que tal acordarmos dois meses de carência e, em troca, assino um contrato de três anos em vez de dois?' },
        { speaker: 'Mark', gender: 'male', text: 'That definitely makes the equation more viable. If you extend the term to three years, I can accommodate the sixty-day grace period, provided that structural repairs remain your responsibility.', translation: 'Isso certamente torna a equação mais viável. Se você estender o prazo para três anos, posso conceder o período de carência de sessenta dias, contanto que reparos estruturais internos fiquem sob sua responsabilidade.' },
        { speaker: 'Sandra', gender: 'female', text: 'That sounds completely fair. Send over the amended paperwork and I will sign it before Friday.', translation: 'Parece perfeitamente justo. Envie a documentação retificada e assinarei antes de sexta-feira.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 36,
      transcript: 'Mark: Sandra, granting a 3-month rent-free period is financially steep for us.\nSandra: If 3 months is burdensome, what if we agree on 2 months, and I sign a 3-year commitment instead of 2?\nMark: If you extend to 3 years, I can accommodate 60 days grace, provided structural repairs remain your responsibility.\nSandra: That sounds completely fair. Send the amended paperwork and I\'ll sign before Friday.',
      transcriptTranslation: 'Mark: Sandra, conceder 3 meses de carência é pesado financeiramente.\nSandra: Se 3 meses é pesado, que tal 2 meses de carência em troca de um contrato de 3 anos em vez de 2?\nMark: Se estender para 3 anos, posso aceitar os 60 dias, desde que os reparos estruturais fiquem por sua conta.\nSandra: Justo. Mande o contrato corrigido que assino antes de sexta.'
    },
    questions: [
      {
        id: 'l-b2-cl-1',
        type: 'multiple_choice',
        questionText: 'Qual contraproposta Sandra faz para destravar a negociação com Mark?',
        options: [
          { id: 'A', text: 'Pagar o aluguel com um ano de antecedência' },
          { id: 'B', text: 'Reduzir a carência para dois meses e estender o contrato para três anos' },
          { id: 'C', text: 'Sublocar metade do espaço para uma cafeteria' },
          { id: 'D', text: 'Exigir que Mark pague integralmente a reforma' }
        ],
        correctOptionId: 'B',
        explanation: 'Sandra propõe reduzir a carência de três para dois meses em troca de prolongar o contrato de dois para três anos ("sign a three-year commitment instead of two").'
      },
      {
        id: 'l-b2-cl-2',
        type: 'multiple_choice',
        questionText: 'Qual condição Mark impõe para aceitar os 60 dias de carência (grace period)?',
        options: [
          { id: 'A', text: 'Sandra deve pagar taxa extra de condomínio adiantada' },
          { id: 'B', text: 'Os reparos estruturais devem permanecer sob responsabilidade dela' },
          { id: 'C', text: 'O espaço deve abrir aos domingos à noite' },
          { id: 'D', text: 'Ele terá direito a 10% dos lucros da loja' }
        ],
        correctOptionId: 'B',
        explanation: 'Mark estipula: "provided that structural repairs remain your responsibility".'
      }
    ]
  },
  {
    id: 'listening-b2-dial-workplace-conflict',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b2',
    topic: 'Gestão de Pessoas & Conflitos',
    title: 'Mediação de Sobrecarga entre Equipes',
    description: 'David e Rachel discutem o acúmulo de solicitações de suporte e chegam a um acordo operacional sustentável.',
    objective: 'Compreender expressão construtiva de insatisfação e formulação colaborativa de regras de trabalho.',
    instructions: 'Ouça o diálogo entre os líderes de equipe e identifique as medidas acordadas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Resolving Cross-Functional Workload Friction',
      scenario: 'Reunião de alinhamento entre gerentes de produto e atendimento',
      spokenText: 'David, do you have ten minutes? We need to address the volume of urgent ad-hoc tickets your marketing associates are routing directly to our engineering queue. I hear your frustration, Rachel. However, with the upcoming campaign launch next Tuesday, our team is under immense pressure to update landing page copy quickly. I understand marketing deadlines, but bypassing the standardized triage system disrupts ongoing sprint deliverables and burns out developers. How about we designate one dedicated liaison person per day to bundle and prioritize requests, rather than having twelve different people messaging engineers individually? That sounds like a pragmatic solution. I will appoint Julian as our sole point of contact starting tomorrow morning.',
      dialogueLines: [
        { speaker: 'Rachel', gender: 'female', text: 'David, do you have ten minutes? We need to address the volume of urgent ad-hoc tickets your marketing associates are routing directly to our engineering queue.', translation: 'David, você tem dez minutos? Precisamos falar sobre o volume de chamados urgentes e avulsos que seus analistas de marketing estão jogando diretamente na fila da engenharia.' },
        { speaker: 'David', gender: 'male', text: 'I hear your frustration, Rachel. However, with the upcoming campaign launch next Tuesday, our team is under immense pressure to update landing page copy quickly.', translation: 'Compreendo sua frustração, Rachel. No entanto, com o lançamento da campanha na próxima terça, nossa equipe está sob imensa pressão para atualizar os textos das páginas com urgência.' },
        { speaker: 'Rachel', gender: 'female', text: 'I understand marketing deadlines, but bypassing the standardized triage system disrupts ongoing sprint deliverables and burns out developers. How about we designate one dedicated liaison person per day to bundle and prioritize requests, rather than having twelve different people messaging engineers individually?', translation: 'Entendo os prazos do marketing, mas ignorar a triagem padrão desorganiza as entregas da sprint e esgota os desenvolvedores. Que tal definirmos um único intermediário por dia para agrupar e priorizar os pedidos, em vez de doze pessoas mandando mensagens avulsas aos engenheiros?' },
        { speaker: 'David', gender: 'male', text: 'That sounds like a pragmatic solution. I will appoint Julian as our sole point of contact starting tomorrow morning.', translation: 'Essa parece uma solução pragmática. Vou nomear o Julian como nosso ponto focal exclusivo a partir de amanhã de manhã.' }
      ],
      speechRate: 0.97,
      estimatedDurationSeconds: 34,
      transcript: 'Rachel: We need to address the ad-hoc tickets your marketing team is routing directly to engineering.\nDavid: With the campaign launch next Tuesday, we\'re under immense pressure.\nRachel: Bypassing triage disrupts sprint deliverables. Can we designate one liaison to bundle requests?\nDavid: Pragmatic solution. I\'ll appoint Julian as sole contact starting tomorrow.',
      transcriptTranslation: 'Rachel: Precisamos falar dos chamados avulsos que o marketing joga na engenharia.\nDavid: Estamos sob pressão para lançar a campanha na terça.\nRachel: Pular a triagem atrapalha as entregas. Podemos ter um único interlocutor para concentrar os pedidos?\nDavid: Boa ideia. Vou indicar o Julian como contato único a partir de amanhã.'
    },
    questions: [
      {
        id: 'l-b2-wc-1',
        type: 'multiple_choice',
        questionText: 'Qual era a principal reclamação de Rachel em relação à equipe de marketing?',
        options: [
          { id: 'A', text: 'Eles atrasavam a entrega de relatórios financeiros mensais' },
          { id: 'B', text: 'Estavam burlando o fluxo padrão de triagem e enviando pedidos urgentes diretamente aos desenvolvedores' },
          { id: 'C', text: 'Recusaram-se a participar da reunião de produto' },
          { id: 'D', text: 'Cancelaram a campanha de marketing unilateralmente' }
        ],
        correctOptionId: 'B',
        explanation: 'Rachel explica que "bypassing the standardized triage system disrupts ongoing sprint deliverables and burns out developers".'
      },
      {
        id: 'l-b2-wc-2',
        type: 'multiple_choice',
        questionText: 'Qual solução prática foi acordada entre David e Rachel?',
        options: [
          { id: 'A', text: 'Contratar cinco novos engenheiros imediatamente' },
          { id: 'B', text: 'Nomear Julian como ponto de contato único para centralizar e priorizar pedidos' },
          { id: 'C', text: 'Adiar o lançamento da campanha em um mês' },
          { id: 'D', text: 'Proibir o marketing de realizar qualquer alteração nas páginas' }
        ],
        correctOptionId: 'B',
        explanation: 'David concorda em canalizar todas as demandas através de um interlocutor exclusivo: "appoint Julian as our sole point of contact starting tomorrow morning".'
      }
    ]
  },
  {
    id: 'listening-b2-dial-symposium-logistics',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b2',
    topic: 'Eventos & Gestão de Projetos',
    title: 'Organizando um Simpósio Internacional',
    description: 'Leo e Maya discutem a logística de palestrantes internacionais, transmissão híbrida e acomodação.',
    objective: 'Captar decisões operacionais sobre horários, streaming online e planos de contingência técnica.',
    instructions: 'Acompanhe a conversa entre os coordenadores do evento e responda às questões.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'International Symposium Event Logistics',
      scenario: 'Planejamento de evento acadêmico híbrido',
      spokenText: 'Maya, have we received final confirmation from Dr. Chen regarding his keynote address? Yes, but because of flight restrictions, he will be delivering his presentation remotely from Singapore. That means we will need a dedicated technician monitoring the live video bridge to guarantee audio clarity for the in-person auditorium. Good point. We should also factor in the twelve-hour time zone discrepancy; his session is scheduled for nine in the morning our time, which will be nine at night for him. I already verified his availability for that window. Furthermore, we are pre-recording a backup copy of his slide deck tomorrow just in case an unexpected internet outage occurs during the live stream. Excellent foresight, Maya.',
      dialogueLines: [
        { speaker: 'Leo', gender: 'male', text: 'Maya, have we received final confirmation from Dr. Chen regarding his keynote address?', translation: 'Maya, já recebemos a confirmação final do Dr. Chen sobre a palestra principal dele?' },
        { speaker: 'Maya', gender: 'female', text: 'Yes, but because of flight restrictions, he will be delivering his presentation remotely from Singapore. That means we will need a dedicated technician monitoring the live video bridge to guarantee audio clarity for the in-person auditorium.', translation: 'Sim, mas devido a restrições de voo ele fará a apresentação remotamente de Singapura. Isso significa que precisaremos de um técnico dedicado cuidando do link de vídeo ao vivo para garantir áudio perfeito no auditório presencial.' },
        { speaker: 'Leo', gender: 'male', text: 'Good point. We should also factor in the twelve-hour time zone discrepancy; his session is scheduled for nine in the morning our time, which will be nine at night for him.', translation: 'Bom ponto. Também devemos considerar o fuso de doze horas: a sessão dele está marcada para as 9h da manhã no nosso horário, o que será 21h para ele.' },
        { speaker: 'Maya', gender: 'female', text: 'I already verified his availability for that window. Furthermore, we are pre-recording a backup copy of his slide deck tomorrow just in case an unexpected internet outage occurs during the live stream.', translation: 'Já verifiquei a disponibilidade dele para essa janela. Além disso, estamos pré-gravando uma cópia reserva dos slides dele amanhã, caso ocorra alguma queda inesperada de internet durante a transmissão.' },
        { speaker: 'Leo', gender: 'male', text: 'Excellent foresight, Maya.', translation: 'Excelente precaução, Maya.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 35,
      transcript: 'Leo: Did we get confirmation from Dr. Chen for his keynote?\nMaya: Yes, but he will present remotely from Singapore due to flight restrictions.\nLeo: We must factor in the 12-hour time zone difference.\nMaya: His slot is 9 AM here, 9 PM for him. We\'re also pre-recording a backup in case of internet outage.',
      transcriptTranslation: 'Leo: O Dr. Chen confirmou a palestra?\nMaya: Sim, mas apresentará online de Singapura por restrições de voo.\nLeo: Devemos lembrar do fuso de 12 horas.\nMaya: Será 9h aqui e 21h lá. Já agendamos uma gravação de reserva para o caso de falha de conexão.'
    },
    questions: [
      {
        id: 'l-b2-sl-1',
        type: 'multiple_choice',
        questionText: 'Por que o palestrante Dr. Chen não estará presente fisicamente no auditório?',
        options: [
          { id: 'A', text: 'Ele se recusou a viajar para o exterior' },
          { id: 'B', text: 'Restrições de voo obrigaram a apresentação a ser remota a partir de Singapura' },
          { id: 'C', text: 'O auditório presencial estava lotado' },
          { id: 'D', text: 'Ele perdeu o passaporte' }
        ],
        correctOptionId: 'B',
        explanation: 'Maya informa claramente: "because of flight restrictions, he will be delivering his presentation remotely from Singapore".'
      },
      {
        id: 'l-b2-sl-2',
        type: 'multiple_choice',
        questionText: 'Qual medida preventiva foi adotada pela organização caso a internet caia durante a transmissão?',
        options: [
          { id: 'A', text: 'Cancelar a sessão e devolver o dinheiro das inscrições' },
          { id: 'B', text: 'Pré-gravar uma cópia de segurança da apresentação com os slides' },
          { id: 'C', text: 'Substituir a palestra por um intervalo musical' },
          { id: 'D', text: 'Pedir que o público ligue para o Dr. Chen por telefone' }
        ],
        correctOptionId: 'B',
        explanation: 'Maya relata: "we are pre-recording a backup copy of his slide deck tomorrow just in case an unexpected internet outage occurs".'
      }
    ]
  },
  {
    id: 'listening-b2-dial-sustainable-dining',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'b2',
    topic: 'Alimentação & Sustentabilidade',
    title: 'Escolhas Alimentares e Impacto Ambiental',
    description: 'Julian e Clara discutem os prós e contras de dietas baseadas em plantas e a importância do consumo sazonal local.',
    objective: 'Compreender argumentos sobre pegada de carbono, sazonalidade e consumo consciente de alimentos.',
    instructions: 'Ouça o diálogo durante o jantar e identifique as perspectivas apresentadas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Nuanced Perspectives on Sustainable Food',
      scenario: 'Conversa reflexiva durante o jantar em um restaurante',
      spokenText: 'Clara, I notice you ordered the locally sourced mushroom risotto rather than the imported organic beef. Have you transitioned to a vegetarian diet? Not entirely, Julian. I consider myself a conscientious flexitarian. I still eat animal products occasionally, but I try to prioritize foods that carry a modest environmental footprint. Does eating strictly organic guarantee that, though? Not always. In fact, transporting organic produce via air freight across continents often generates more greenhouse gas emissions than buying conventional produce grown within fifty miles of your home. That is why seasonality and regional supply chains matter just as much as agricultural certification.',
      dialogueLines: [
        { speaker: 'Julian', gender: 'male', text: 'Clara, I notice you ordered the locally sourced mushroom risotto rather than the imported organic beef. Have you transitioned to a vegetarian diet?', translation: 'Clara, reparei que você pediu o risoto de cogumelos locais em vez da carne orgânica importada. Você virou vegetariana?' },
        { speaker: 'Clara', gender: 'female', text: 'Not entirely, Julian. I consider myself a conscientious flexitarian. I still eat animal products occasionally, but I try to prioritize foods that carry a modest environmental footprint.', translation: 'Não totalmente, Julian. Eu me considero uma flexitariana consciente. Como produtos de origem animal de vez em quando, mas procuro priorizar alimentos com baixa pegada ecológica.' },
        { speaker: 'Julian', gender: 'male', text: 'Does eating strictly organic guarantee that, though?', translation: 'Mas comer estritamente orgânico garante isso?' },
        { speaker: 'Clara', gender: 'female', text: 'Not always. In fact, transporting organic produce via air freight across continents often generates more greenhouse gas emissions than buying conventional produce grown within fifty miles of your home. That is why seasonality and regional supply chains matter just as much as agricultural certification.', translation: 'Nem sempre. Na verdade, transportar alimentos orgânicos por frete aéreo entre continentes costuma gerar mais emissões de gases de efeito estufa do que comprar alimentos convencionais cultivados a menos de cinquenta milhas de casa. Por isso a sazonalidade e as cadeias locais importam tanto quanto certificações.' }
      ],
      speechRate: 0.97,
      estimatedDurationSeconds: 33,
      transcript: 'Julian: Did you become a vegetarian, Clara?\nClara: I\'m a conscientious flexitarian; I prioritize a lower environmental footprint.\nJulian: Does organic guarantee low footprint?\nClara: Not always. Air-freighting organic food generates more emissions than buying local conventional food within 50 miles. Seasonality and regional supply chains matter.',
      transcriptTranslation: 'Julian: Virou vegetariana, Clara?\nClara: Sou flexitariana consciente; priorizo alimentos de menor impacto ambiental.\nJulian: O orgânico garante isso sempre?\nClara: Nem sempre. O frete aéreo de orgânicos distantes polui mais do que comprar alimentos convencionais locais a 50 milhas. A proximidade e a estação contam muito.'
    },
    questions: [
      {
        id: 'l-b2-sd-1',
        type: 'multiple_choice',
        questionText: 'Como Clara define seu hábito alimentar atual?',
        options: [
          { id: 'A', text: 'Vegana estrita' },
          { id: 'B', text: 'Flexitariana consciente (conscientious flexitarian)' },
          { id: 'C', text: 'Praticante de jejum intermitente rígido' },
          { id: 'D', text: 'Consumidora exclusiva de comida crua' }
        ],
        correctOptionId: 'B',
        explanation: 'Clara explica que é flexitariana: consome derivados animais com moderação, priorizando baixo impacto ambiental.'
      },
      {
        id: 'l-b2-sd-2',
        type: 'multiple_choice',
        questionText: 'Por que comprar produtos orgânicos importados por avião pode ser ambientalmente desfavorável?',
        options: [
          { id: 'A', text: 'Porque eles perdem todas as vitaminas no voo' },
          { id: 'B', text: 'Porque o frete aéreo intercontinental emite mais gases poluentes do que a produção local próxima' },
          { id: 'C', text: 'Porque são mais baratos que a comida comum' },
          { id: 'D', text: 'Porque estragam antes de pousar' }
        ],
        correctOptionId: 'B',
        explanation: 'Clara aponta: "transporting organic produce via air freight... generates more greenhouse gas emissions than buying conventional produce grown within fifty miles".'
      }
    ]
  },

  // --- 3. Situações da Vida Real (Real-Life Situations) - 4 Atividades ---
  {
    id: 'listening-b2-sit-transit-maintenance',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b2',
    topic: 'Transporte Público & Contingência',
    title: 'Anúncio de Manutenção Ferroviária e Ônibus de Conexão',
    description: 'Ouça o aviso sonoro na estação sobre interrupção de trens para troca de trilhos e operação de ônibus substitutos.',
    objective: 'Captar horários, rotas alternativas e procedimentos de transferência durante contingências no transporte público.',
    instructions: 'Ouça atentamente o comunicado de serviço da autoridade de trânsito e responda às perguntas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Subway Maintenance and Rail-Replacement Shuttle Announcement',
      scenario: 'Alto-falante do metrô informando operação especial',
      spokenText: 'Attention passengers on the Blue Metro Line. Due to emergency track rehabilitation between Central Square and Kensington Junction, train service through this sector is suspended until five a.m. on Monday. Frequent complimentary rail-replacement shuttle buses are operating from Bay Three on the upper concourse. Express shuttles bypass intermediate stops directly to Kensington, while local shuttles stop at all four intermediate stations. Passengers with valid transit smartcards should tap in as usual; no supplementary fare will be deducted for the bus transfer. Thank you for your cooperation.',
      speechRate: 0.95,
      estimatedDurationSeconds: 28,
      transcript: 'Attention passengers on the Blue Metro Line. Due to emergency track rehabilitation between Central Square and Kensington Junction, train service is suspended until 5 AM on Monday. Frequent rail-replacement shuttles operate from Bay 3. Express buses bypass intermediate stops; local buses serve all 4 stations. No supplementary fare applies for the transfer.',
      transcriptTranslation: 'Atenção passageiros da Linha Azul. Devido à manutenção emergencial nos trilhos entre Central Square e Kensington Junction, o serviço de trens está suspenso até segunda às 5h. Ônibus substitutos gratuitos saem da Baia 3. Ônibus expressos vão direto a Kensington; ônibus paradores atendem às 4 estações. Não há cobrança extra na baldeação.'
    },
    questions: [
      {
        id: 'l-b2-tm-1',
        type: 'multiple_choice',
        questionText: 'Até quando o trecho entre Central Square e Kensington Junction ficará suspenso?',
        options: [
          { id: 'A', text: 'Até sexta-feira à meia-noite' },
          { id: 'B', text: 'Até as 5h da manhã de segunda-feira (five a.m. on Monday)' },
          { id: 'C', text: 'Por duas semanas inteiras' },
          { id: 'D', text: 'Apenas durante a madrugada de hoje' }
        ],
        correctOptionId: 'B',
        explanation: 'O locutor afirma expressamente: "train service through this sector is suspended until five a.m. on Monday".'
      },
      {
        id: 'l-b2-tm-2',
        type: 'multiple_choice',
        questionText: 'Qual é a diferença entre os ônibus expressos e os locais que saem da Baia 3?',
        options: [
          { id: 'A', text: 'O expresso custa cinco dólares a mais' },
          { id: 'B', text: 'O expresso vai direto ao terminal sem paradas, enquanto o local atende às quatro estações intermediárias' },
          { id: 'C', text: 'O local só aceita passageiros com malas grandes' },
          { id: 'D', text: 'O expresso não opera no fim de semana' }
        ],
        correctOptionId: 'B',
        explanation: 'O aviso detalha: "Express shuttles bypass intermediate stops directly to Kensington, while local shuttles stop at all four intermediate stations".'
      },
      {
        id: 'l-b2-tm-3',
        type: 'multiple_choice',
        questionText: 'Qual é a política tarifária para a transferência aos ônibus substitutos?',
        options: [
          { id: 'A', text: 'É necessário pagar uma tarifa suplementar em dinheiro' },
          { id: 'B', text: 'A baldeação é gratuita, sem qualquer débito adicional no cartão de transporte' },
          { id: 'C', text: 'Apenas estudantes têm gratuidade' },
          { id: 'D', text: 'O cartão de transporte não é aceito nos ônibus' }
        ],
        correctOptionId: 'B',
        explanation: 'O comunicado esclarece: "no supplementary fare will be deducted for the bus transfer".'
      }
    ]
  },
  {
    id: 'listening-b2-sit-vet-consultation',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b2',
    topic: 'Saúde Animal & Cuidados Preventivos',
    title: 'Consulta Veterinária: Diagnóstico e Ajuste Alimentar',
    description: 'Acompanhe a médica veterinária explicando exames de sangue e recomendando mudança alimentar para um cão idoso.',
    objective: 'Compreender termos clínicos comuns, recomendações de dosagem e cuidados cotidianos de saúde.',
    instructions: 'Ouça as orientações da veterinária e responda às perguntas sobre o tratamento.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Veterinary Checkup and Geriatric Pet Care',
      scenario: 'Consultório veterinário durante retorno de exames',
      spokenText: 'Good morning, Mr. Harrison. I have thoroughly reviewed Buster blood panel results. His kidney and liver values look completely normal for a nine-year-old retriever, which is fantastic news. However, his joint inflammation markers are elevated, which explains the stiffness you noticed after morning walks. Rather than prescribing long-term pain medication right away, I strongly advise transitioning him to an anti-inflammatory joint supplement containing glucosamine and omega-3 fatty acids. Additionally, trimming just two pounds off his weight will relieve significant mechanical stress on his hips. Let us introduce the new dietary formula gradually over ten days to prevent digestive upset.',
      speechRate: 0.96,
      estimatedDurationSeconds: 32,
      transcript: 'Veterinarian: Buster\'s blood panel looks great for a 9-year-old retriever—liver and kidneys are normal. However, joint inflammation markers are elevated. Instead of long-term painkillers, I recommend a supplement with glucosamine and omega-3. Trimming two pounds will also ease hip pressure. Transition to the new food gradually over ten days to avoid digestive upset.',
      transcriptTranslation: 'Veterinária: Os exames do Buster estão ótimos para um cão de 9 anos: fígado e rins normais. Mas os marcadores de inflamação articular deram elevados. Em vez de analgésicos contínuos, recomendo suplemento de glucosamina e ômega-3. Perder um quilo aliviará os quadris. Troque a ração aos poucos ao longo de dez dias para evitar diarreia.'
    },
    questions: [
      {
        id: 'l-b2-vc-1',
        type: 'multiple_choice',
        questionText: 'Qual problema foi identificado nos exames do cachorro Buster?',
        options: [
          { id: 'A', text: 'Insuficiência renal grave' },
          { id: 'B', text: 'Marcadores de inflamação articular elevados, que explicam a rigidez motora' },
          { id: 'C', text: 'Perda acentuada de visão' },
          { id: 'D', text: 'Alergia alimentar aguda a carnes' }
        ],
        correctOptionId: 'B',
        explanation: 'A veterinária informa que os rins e fígado estão normais, mas "joint inflammation markers are elevated, which explains the stiffness".'
      },
      {
        id: 'l-b2-vc-2',
        type: 'multiple_choice',
        questionText: 'Como a veterinária orienta a introdução da nova alimentação?',
        options: [
          { id: 'A', text: 'Trocar abruptamente de um dia para o outro' },
          { id: 'B', text: 'Introduzir a nova fórmula gradualmente ao longo de dez dias para evitar desconforto digestivo' },
          { id: 'C', text: 'Alimentar o cão apenas com legumes cozidos' },
          { id: 'D', text: 'Deixar o cão em jejum por 48 horas antes da troca' }
        ],
        correctOptionId: 'B',
        explanation: 'A médica orienta: "introduce the new dietary formula gradually over ten days to prevent digestive upset".'
      }
    ]
  },
  {
    id: 'listening-b2-sit-deposit-walkthrough',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b2',
    topic: 'Moradia & Direitos do Inquilino',
    title: 'Vistoria Final de Imóvel e Devolução do Depósito',
    description: 'Ouça a conversa de vistoria entre proprietária e inquilino sobre pequenos reparos e devolução do caução.',
    objective: 'Distinguir desgaste natural pelo uso (wear and tear) de danos indenizáveis na locação residencial.',
    instructions: 'Acompanhe a vistoria dos cômodos e avalie as deduções discutidas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Move-Out Inspection and Security Deposit Walkthrough',
      scenario: 'Vistoria de entrega de chaves de apartamento alugado',
      spokenText: 'Well, Daniel, the apartment is remarkably spotless. The kitchen appliances are immaculate, and the carpets have clearly been professionally steam cleaned. There are just two items we must clarify. First, the small scuffs along the hallway baseboards fall under normal wear and tear, so there will be no deduction for that. However, the cracked tile near the balcony door was not documented on your move-in condition report. Replacing that specific porcelain tile will cost approximately seventy-five dollars. If you agree, I will deduct that amount from your two-thousand-dollar security deposit and transfer the remaining balance of nineteen hundred and twenty-five dollars to your bank account within three business days.',
      speechRate: 0.96,
      estimatedDurationSeconds: 34,
      transcript: 'Landlord: The apartment is spotless, Daniel. Small scuffs along hallway baseboards are normal wear and tear—no deduction. However, the cracked tile near the balcony wasn\'t on the move-in report; replacing it costs $75. I\'ll deduct that from your $2,000 deposit and transfer the remaining $1,925 within 3 business days.',
      transcriptTranslation: 'Proprietária: O apartamento está impecável, Daniel. Riscos no rodapé são desgaste natural, sem desconto. Mas a lajota trincada na sacada não constava no laudo de entrada e custa $75. Descontarei isso do caução de $2.000 e depositarei os $1.925 restantes em três dias úteis.'
    },
    questions: [
      {
        id: 'l-b2-dw-1',
        type: 'multiple_choice',
        questionText: 'Por que a proprietária não cobra pelos riscos nos rodapés do corredor?',
        options: [
          { id: 'A', text: 'Porque ela se esqueceu de olhar o corredor' },
          { id: 'B', text: 'Porque se enquadram como desgaste natural pelo uso legítimo (normal wear and tear)' },
          { id: 'C', text: 'Porque Daniel prometeu pintar o prédio todo' },
          { id: 'D', text: 'Porque o condomínio assumiu o custo' }
        ],
        correctOptionId: 'B',
        explanation: 'A proprietária esclarece que "scuffs along the hallway baseboards fall under normal wear and tear, so there will be no deduction for that".'
      },
      {
        id: 'l-b2-dw-2',
        type: 'multiple_choice',
        questionText: 'Quanto será restituído a Daniel do seu depósito caução original de dois mil dólares?',
        options: [
          { id: 'A', text: 'Nada, o valor total foi retido' },
          { id: 'B', text: '$1.925 dólares em até três dias úteis' },
          { id: 'C', text: '$1.500 dólares após trinta dias' },
          { id: 'D', text: '$2.000 dólares integrais' }
        ],
        correctOptionId: 'B',
        explanation: 'Após descontar $75 para a troca do azulejo quebrado, restam $1.925 a serem devolvidos em três dias úteis.'
      }
    ]
  },
  {
    id: 'listening-b2-sit-warranty-dispute',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'b2',
    topic: 'Direitos do Consumidor & Suporte Técnico',
    title: 'Disputa de Garantia de Equipamento Eletrônico',
    description: 'Ouça um cliente contestando a recusa inicial de assistência técnica para um laptop com defeito na placa-mãe.',
    objective: 'Compreender argumentação jurídica de consumidor, termos de garantia contratual e resolução amigável.',
    instructions: 'Acompanhe a conversa com o supervisor de atendimento e identifique os desdobramentos.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Customer Warranty Resolution and Technical Escalation',
      scenario: 'Ligação telefônica para serviço de atendimento ao consumidor',
      spokenText: 'Thank you for holding, Mr. Alvarez. My name is Gregory, customer resolutions supervisor. I understand your laptop motherboard failed eleven months into your one-year limited warranty, but our intake depot initially flagged the claim due to minor cosmetic scratches on the outer casing. That is correct, Gregory. Those hairline surface scratches are purely aesthetic and completely unrelated to the internal power failure. Under the statutory consumer protection provisions of my warranty agreement, component defects occurring within twelve months without liquid intrusion are fully covered. You are entirely correct, Mr. Alvarez. After reviewing our technician internal diagnostic log, there is zero evidence of user-inflicted damage. We are approving an expedited warranty replacement unit, which will be dispatched with priority overnight shipping today.',
      speechRate: 0.97,
      estimatedDurationSeconds: 35,
      transcript: 'Supervisor: Mr. Alvarez, I see your laptop motherboard failed at 11 months, but the depot initially flagged cosmetic scratches.\nCustomer: Those hairline scratches are purely aesthetic and unrelated to internal power failure. The 12-month warranty covers component defects.\nSupervisor: You are correct. The diagnostic log confirms zero user damage. We are approving an expedited replacement with priority shipping today.',
      transcriptTranslation: 'Supervisor: Sr. Alvarez, a placa-mãe falhou no 11º mês, mas a triagem recusou devido a riscos na carcaça.\nCliente: Riscos superficiais são estéticos e não têm relação com a pane elétrica. A garantia cobre defeitos de fabricação.\nSupervisor: O senhor tem toda razão. O laudo técnico confirma ausência de dano por mau uso. Autorizamos o envio de um aparelho novo com frete expresso hoje.'
    },
    questions: [
      {
        id: 'l-b2-wd-1',
        type: 'multiple_choice',
        questionText: 'Por que o centro de triagem havia recusado inicialmente o reparo do laptop?',
        options: [
          { id: 'A', text: 'O prazo de garantia de 12 meses já havia expirado há três anos' },
          { id: 'B', text: 'Devido a pequenos arranhões cosméticos superficiais na carcaça do aparelho' },
          { id: 'C', text: 'O cliente se recusou a fornecer a nota fiscal de compra' },
          { id: 'D', text: 'O computador apresentava sinais evidentes de imersão em água' }
        ],
        correctOptionId: 'B',
        explanation: 'O supervisor explica que o depósito de triagem havia apontado "minor cosmetic scratches on the outer casing" para negar o chamado.'
      },
      {
        id: 'l-b2-wd-2',
        type: 'multiple_choice',
        questionText: 'Qual decisão final foi tomada pelo supervisor Gregory?',
        options: [
          { id: 'A', text: 'Manter a recusa e cobrar pelo conserto' },
          { id: 'B', text: 'Aprovar a substituição imediata por um aparelho novo com frete prioritário no mesmo dia' },
          { id: 'C', text: 'Encaminhar o caso para a justiça arbitral' },
          { id: 'D', text: 'Oferecer apenas um desconto para compra de um novo modelo' }
        ],
        correctOptionId: 'B',
        explanation: 'O supervisor reconhece que os arranhões eram irrelevantes e autoriza "an expedited warranty replacement unit... dispatched with priority overnight shipping today".'
      }
    ]
  },

  // --- 4. Entenda o Inglês Natural (Natural Speech) - 3 Atividades ---
  {
    id: 'listening-b2-nat-screen-fatigue',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'b2',
    topic: 'Bem-Estar Digital & Hábitos',
    title: 'Fadiga Visual e Limites Digitais no Cotidiano',
    description: 'Ouça um depoimento espontâneo sobre como pequenos hábitos diários ajudam a combater a exaustão por telas.',
    objective: 'Acompanhar ritmo natural nativo, contrações coloquiais e transições de raciocínio sobre estilo de vida.',
    instructions: 'Ouça o relato em velocidade natural e responda às perguntas sobre as estratégias compartilhadas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Tackling Digital Screen Fatigue',
      scenario: 'Trecho de podcast de desenvolvimento pessoal e bem-estar',
      spokenText: 'By four in the afternoon, most of us stare at our monitors feeling this dull, fuzzy headache creeping up behind our eyes. For the longest time, I assumed chugging another double espresso was the only way to power through the afternoon slump. But honestly? Caffeine just masked the symptoms while leaving me feeling wired yet completely unfocused. What genuinely shifted the needle was adopting the twenty-twenty-twenty rule: every twenty minutes, look at an object at least twenty feet away for twenty seconds. It gives your optic nerves a much-needed break to recalibrate focus. Pair that with leaving your phone in another room during meals, and you will notice your mental fog lifting within days.',
      speechRate: 1.0,
      estimatedDurationSeconds: 32,
      transcript: 'By 4 PM, most of us stare at our screens with a dull headache creeping up. I used to think chugging another double espresso was the only way to power through. But honestly? Caffeine just masked symptoms while leaving me wired yet unfocused. What shifted the needle was the 20-20-20 rule: every 20 minutes, gaze at something 20 feet away for 20 seconds. Pair that with keeping your phone out of the dining room, and mental fog lifts within days.',
      transcriptTranslation: 'Às 16h, muitos encaram a tela com uma dor de cabeça incômoda surgindo atrás dos olhos. Eu achava que tomar outro café duplo era a única saída para vencer o cansaço. Mas o café só mascarava o sintoma e me deixava elétrico e desconcentrado. O que realmente mudou as coisas foi a regra 20-20-20: a cada 20 minutos, olhar para algo a 20 pés de distância por 20 segundos. Junte isso a comer sem celular na mesa e a névoa mental some em dias.'
    },
    questions: [
      {
        id: 'l-b2-sf-1',
        type: 'multiple_choice',
        questionText: 'O que o locutor descobriu sobre consumir café para combater o cansaço da tarde?',
        options: [
          { id: 'A', text: 'Que o café eliminava completamente todas as dores de cabeça' },
          { id: 'B', text: 'Que apenas mascarava os sintomas, deixando-o agitado ("wired"), porém desconcentrado' },
          { id: 'C', text: 'Que o café causava sonolência imediata' },
          { id: 'D', text: 'Que o café estragava o computador' }
        ],
        correctOptionId: 'B',
        explanation: 'O relato destaca: "Caffeine just masked the symptoms while leaving me feeling wired yet completely unfocused".'
      },
      {
        id: 'l-b2-sf-2',
        type: 'multiple_choice',
        questionText: 'Em que consiste a regra "20-20-20" recomendada no áudio?',
        options: [
          { id: 'A', text: 'Trabalhar 20 horas por semana e descansar 20 dias no mês' },
          { id: 'B', text: 'A cada 20 minutos de tela, olhar para algo a cerca de 20 pés (6 metros) de distância por 20 segundos' },
          { id: 'C', text: 'Gastar 20 dólares a cada 20 semanas em óculos escuros' },
          { id: 'D', text: 'Beber 20 copos de água mineral a cada 20 horas' }
        ],
        correctOptionId: 'B',
        explanation: 'A regra clássica oftalmológica é explicada pelo narrador: "every twenty minutes, look at an object at least twenty feet away for twenty seconds".'
      }
    ]
  },
  {
    id: 'listening-b2-nat-passive-architecture',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'b2',
    topic: 'Arquitetura & Sustentabilidade',
    title: 'Arquitetura Passiva e Climatização Natural',
    description: 'Ouça uma explanação espontânea sobre como a orientação solar e a ventilação cruzada reduzem o uso de ar condicionado.',
    objective: 'Compreender explicações conceituais com vocabulário técnico acessível e exemplos práticos.',
    instructions: 'Ouça o especialista e selecione as opções corretas sobre as técnicas de design passivo.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Harnessing Natural Physics in Passive Building Design',
      scenario: 'Palestra em um seminário sobre urbanismo sustentável',
      spokenText: 'Whenever people talk about green buildings, they instinctively picture expensive rooftop solar arrays or high-tech automated glass facades. But the most elegant energy solutions were perfected centuries before electrical grids even existed. Passive architecture relies on fundamental physics. By orienting living areas toward the prevailing winter sun and positioning window apertures to induce natural cross-ventilation, a structure can regulate indoor temperatures with minimal mechanical intervention. Incorporating dense thermal mass like rammed earth or unpolished stone allows walls to absorb daytime heat and release it gently during chilly evenings, slashing air conditioning dependency by up to sixty percent.',
      speechRate: 0.98,
      estimatedDurationSeconds: 33,
      transcript: 'When people mention green buildings, they picture pricey solar panels or high-tech glass facades. But passive architecture relies on fundamental physics. By orienting living areas toward winter sun and aligning window apertures for natural cross-ventilation, a house regulates temperature naturally. Dense thermal mass like rammed earth absorbs daytime heat and radiates it on cool nights, slashing cooling costs by up to 60%.',
      transcriptTranslation: 'Ao falar de prédios sustentáveis, pensam logo em painéis solares caros ou fachadas inteligentes. Mas a arquitetura passiva usa física básica. Posicionando as salas para o sol de inverno e alinhando janelas para ventilação cruzada, o prédio se climatiza sozinho. Paredes de pedra ou terra retêm calor durante o dia e o liberam nas noites frescas, cortando o uso de ar-condicionado em até 60%.'
    },
    questions: [
      {
        id: 'l-b2-pa-1',
        type: 'multiple_choice',
        questionText: 'Qual é a crítica implícita feita pelo palestrante no início da fala?',
        options: [
          { id: 'A', text: 'A eletricidade deveria ser banida das cidades' },
          { id: 'B', text: 'As pessoas tendem a associar sustentabilidade apenas a equipamentos caros em vez de princípios inteligentes de design passivo' },
          { id: 'C', text: 'Os painéis solares nunca funcionam em dias nublados' },
          { id: 'D', text: 'As janelas de vidro são proibidas em construções ecológicas' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele contrapõe a ilusão de que prédios ecológicos dependem de tecnologia caríssima ("expensive rooftop solar arrays") com a sabedoria da arquitetura passiva baseada em física elementar.'
      },
      {
        id: 'l-b2-pa-2',
        type: 'multiple_choice',
        questionText: 'Como a massa térmica (como pedra ou terra batida) funciona na regulação térmica da casa?',
        options: [
          { id: 'A', text: 'Reflete cem por cento da luz solar' },
          { id: 'B', text: 'Absorve o calor diurno e o irradia suavemente durante a noite fresca' },
          { id: 'C', text: 'Gera eletricidade por fricção molecular' },
          { id: 'D', text: 'Impede a entrada de oxigênio no ambiente' }
        ],
        correctOptionId: 'B',
        explanation: 'O palestrante explica que materiais densos "absorb daytime heat and release it gently during chilly evenings", reduzindo drasticamente o uso de ar condicionado.'
      }
    ]
  },
  {
    id: 'listening-b2-nat-career-pivot',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'b2',
    topic: 'Transição de Carreira & Maturidade',
    title: 'Mudança de Rumo Profissional aos Trinta Anos',
    description: 'Ouça uma reflexão pessoal autêntica sobre a coragem e os desafios práticos de migrar de área profissional.',
    objective: 'Compreender relatos reflexivos com expressões idiomáticas nativas e nuances de autoavaliação.',
    instructions: 'Acompanhe o depoimento e responda sobre os aprendizados compartilhados.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Pivoting Careers in Mid-Adulthood',
      scenario: 'Monólogo de entrevista em podcast sobre trajetória de vida',
      spokenText: 'Deciding to leave a comfortable corporate accounting career in my early thirties to become a landscape gardener felt like jumping out of a plane without double-checking the parachute. Friends thought I was having an early midlife crisis. But staying put out of fear of starting at the bottom would have been far more damaging in the long haul. Sure, my income took a substantial hit during the first two years, and waking up with blistered hands was a shock to the system. What surprised me, though, was how skills like budget tracking, supplier negotiation, and client management transferred seamlessly into running my own landscaping company. It turns out no experience is ever truly wasted.',
      speechRate: 0.98,
      estimatedDurationSeconds: 34,
      transcript: 'Leaving a secure corporate accounting career in my thirties to become a landscape gardener felt like jumping out of a plane. Friends thought I was having a crisis. But staying out of fear would have been worse. My income took a hit for two years, but skills like budgeting, supplier negotiation, and client relations transferred seamlessly into my landscaping firm. No experience is ever truly wasted.',
      transcriptTranslation: 'Largar uma carreira segura em contabilidade corporativa aos trinta anos para virar jardineiro paisagista pareceu pular de paraquedas sem checar o equipamento. Amigos acharam que era crise. Mas ficar parado por medo seria pior a longo prazo. Minha renda caiu nos primeiros dois anos, mas habilidades como gestão de orçamento, negociação com fornecedores e atendimento ao cliente se transferiram perfeitamente. Nenhuma experiência se perde.'
    },
    questions: [
      {
        id: 'l-b2-cp-1',
        type: 'multiple_choice',
        questionText: 'Qual metáfora o narrador usa para ilustrar o medo inicial ao mudar de carreira?',
        options: [
          { id: 'A', text: 'Caminhar no deserto sem água' },
          { id: 'B', text: 'Pular de um avião sem checar o paraquedas ("jumping out of a plane without double-checking the parachute")' },
          { id: 'C', text: 'Navegar em alto mar em uma tempestade' },
          { id: 'D', text: 'Subir uma montanha sem corda' }
        ],
        correctOptionId: 'B',
        explanation: 'O narrador diz expressamente: "felt like jumping out of a plane without double-checking the parachute".'
      },
      {
        id: 'l-b2-cp-2',
        type: 'multiple_choice',
        questionText: 'Qual conclusão tranquilizadora o narrador alcançou após a transição?',
        options: [
          { id: 'A', text: 'Que é necessário esquecer tudo o que aprendeu na carreira anterior' },
          { id: 'B', text: 'Que habilidades prévias de gestão e negociação foram altamente úteis na nova empresa ("no experience is ever wasted")' },
          { id: 'C', text: 'Que deveria ter permanecido na contabilidade para sempre' },
          { id: 'D', text: 'Que trabalhar com jardinagem não exige nenhum tipo de controle financeiro' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele conclui que competências de gestão, orçamentos e fornecedores foram cruciais para abrir seu negócio, provando que "no experience is ever truly wasted".'
      }
    ]
  }
];

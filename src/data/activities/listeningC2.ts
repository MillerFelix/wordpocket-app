import { Activity, ListeningQuestion } from '../../types/activity';

export const LISTENING_C2: Activity<ListeningQuestion>[] = [
  // --- 1. Ouça e Identifique (Listen and Identify) - 4 Atividades ---
  {
    id: 'listening-c2-id-archaic-optatives',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c2',
    topic: 'Retórica de Mestria & Expressões Fórmulas',
    title: 'Fórmulas Retóricas, Optativos e Expressões Arcaizantes',
    description: 'Identifique fórmulas oratórias sofisticadas (Far be it from me to, Suffice it to say, Come what may) na alta oratória.',
    objective: 'Reconhecer fórmulas consagradas do inglês culto empregadas para modular autoridade, cortesia e determinação.',
    instructions: 'Ouça as declarações proferidas em sessões plenárias e identifique a função pragmática de cada expressão.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Stylistic Optatives and Fixed Idioms in Classical Oratory',
      scenario: 'Discursos de alto nível em conferências magistrais e parlamentos',
      spokenText: 'Excerpt one: Far be it from me to cast aspersions on the integrity of this venerable assembly, yet the omissions in this balance sheet are staggering. Excerpt two: Suffice it to say that the geopolitical landscape has shifted so fundamentally that our previous doctrines are obsolete. Excerpt three: Come what may, we shall maintain an unyielding commitment to humanitarian law, even if international allies vacillate.',
      speechRate: 0.96,
      estimatedDurationSeconds: 27,
      transcript: 'Excerpt 1: Far be it from me to cast aspersions on the integrity of this venerable assembly, yet the omissions in this balance sheet are staggering.\nExcerpt 2: Suffice it to say that the geopolitical landscape has shifted so fundamentally that our previous doctrines are obsolete.\nExcerpt 3: Come what may, we shall maintain an unyielding commitment to humanitarian law, even if international allies vacillate.',
      transcriptTranslation: 'Trecho 1: Longe de mim lançar suspeitas sobre a integridade desta venerável assembleia, mas as omissões neste balanço são estarrecedoras.\nTrecho 2: Baste dizer que o cenário geopolítico mudou tão profundamente que nossas doutrinas anteriores tornaram-se obsoletas.\nTrecho 3: Aconteça o que acontecer (venha o que vier), manteremos nosso compromisso inflexível com o direito humanitário, mesmo que aliados internacionais vacilem.'
    },
    questions: [
      {
        id: 'l-c2-ao-1',
        type: 'multiple_choice',
        questionText: 'No Trecho 1, qual é o efeito retórico da expressão "Far be it from me to cast aspersions..."?',
        options: [
          { id: 'A', text: 'Um pedido sincero de desculpas por ter ofendido a plateia anteriormente' },
          { id: 'B', text: 'Uma apófase retórica: professa que não deseja insultar a assembleia enquanto apresenta uma crítica devastadora ao balanço' },
          { id: 'C', text: 'Uma declaração de amor e reverência irrestrita aos parlamentares' },
          { id: 'D', text: 'Uma confirmação de que o balanço contábil estava perfeito' }
        ],
        correctOptionId: 'B',
        explanation: 'A expressão "Far be it from me to..." é um recurso clássico de polidez aparente (apófase), no qual o orador finge hesitar em criticar, mas imediatamente desfere um julgamento severo ("omissions are staggering").'
      },
      {
        id: 'l-c2-ao-2',
        type: 'multiple_choice',
        questionText: 'O que a expressão idiomática culta "Come what may" comunica no Trecho 3?',
        options: [
          { id: 'A', text: 'Uma dúvida insuperável sobre o que fazer no futuro' },
          { id: 'B', text: 'Uma determinação categórica e inabalável que perdura sob quaisquer circunstâncias adversas' },
          { id: 'C', text: 'Um convite para uma festa beneficente no mês de maio' },
          { id: 'D', text: 'Um pedido para atrasar a votação até o ano que vem' }
        ],
        correctOptionId: 'B',
        explanation: '"Come what may" equivale a "custe o que custar" ou "aconteça o que acontecer", indicando resolução incondicional.'
      }
    ]
  },
  {
    id: 'listening-c2-id-deadpan-irony',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c2',
    topic: 'Entonação Implícita & Ironia Neutra',
    title: 'Ironia Fria e Atenuação Irônica (Deadpan Understatement)',
    description: 'Decodifique a ironia sofisticada sem modulação caricata, onde a discrepância semântica carrega o tom satírico.',
    objective: 'Reconhecer subentendidos mordazes expressos com voz perfeitamente serena e neutra (understatement britânico).',
    instructions: 'Ouça o tom e o conteúdo da declaração e identifique o verdadeiro julgamento do interlocutor.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Deadpan Understatement and Sardonic Irony in Formal Discourse',
      scenario: 'Crítica diplomática em painel de governança corporativa',
      spokenText: 'Speaker: To describe the third-quarter merger execution as an unmitigated triumph would perhaps be a fraction overambitious, given that our primary production facility caught fire, our enterprise software suffered a four-day global blackout, and our chief financial officer resigned by midday Tuesday. Nevertheless, the boardroom biscuits were delightfully fresh.',
      speechRate: 0.95,
      estimatedDurationSeconds: 24,
      transcript: 'Speaker: To describe the third-quarter merger execution as an unmitigated triumph would perhaps be a fraction overambitious, given that our primary facility caught fire, our software suffered a 4-day blackout, and our CFO resigned Tuesday. Nevertheless, the boardroom biscuits were delightfully fresh.',
      transcriptTranslation: 'Orador: Descrever a condução da fusão no terceiro trimestre como um triunfo retumbante seria talvez ligeiramente exagerado, considerando que nossa principal fábrica pegou fogo, nosso sistema sofreu um blecaute global de quatro dias e nosso diretor financeiro renunciou na terça ao meio-dia. Não obstante, os biscoitos da sala de reuniões estavam deliciosamente frescos.'
    },
    questions: [
      {
        id: 'l-c2-di-1',
        type: 'multiple_choice',
        questionText: 'Qual é o verdadeiro significado da fala do orador sobre a fusão no terceiro trimestre?',
        options: [
          { id: 'A', text: 'Ele considera a fusão um grande sucesso financeiro' },
          { id: 'B', text: 'Ele utiliza atenuação irônica (understatement) para denunciar que a operação foi um desastre absoluto e constrangedor' },
          { id: 'C', text: 'Ele pretende abrir uma fábrica de biscoitos finos' },
          { id: 'D', text: 'Ele culpa pessoalmente a secretária da diretoria' }
        ],
        correctOptionId: 'B',
        explanation: 'O orador combina ironia fria ("deadpan") com litotes ("a fraction overambitious") ao listar tragédias monumentais (incêndio, pane global, demissão do diretor), concluindo com o detalhe absurdo dos biscoitos frescos.'
      },
      {
        id: 'l-c2-di-2',
        type: 'multiple_choice',
        questionText: 'Por que o orador menciona "the boardroom biscuits were delightfully fresh" ao final?',
        options: [
          { id: 'A', text: 'Para destacar que o bufê era o ponto central do contrato' },
          { id: 'B', text: 'Como um recurso de anticlímax cômico, enfatizando a insignificância de um detalhe banal frente ao colapso geral' },
          { id: 'C', text: 'Para elogiar o cozinheiro executivo da empresa' },
          { id: 'D', text: 'Porque ele tem intolerância a glúten' }
        ],
        correctOptionId: 'B',
        explanation: 'O contraste entre o colapso estrutural da empresa e o elogio aos biscoitos é o clássico anticlímax britânico para ridicularizar a gestão.'
      }
    ]
  },
  {
    id: 'listening-c2-id-chiasmus-parallelism',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c2',
    topic: 'Figuras de Estilo & Quiasmo na Oratória',
    title: 'Quiasmo e Paralelismo Invertido no Discurso Filosófico',
    description: 'Identifique a estrutura simétrica invertida (chiasmus) usada para produzir efeitos aforísticos memoráveis.',
    objective: 'Reconhecer o cruzamento sintático no padrão AB-BA e extrair a síntese conceitual do aforismo falado.',
    instructions: 'Ouça atentamente a construção oratória e identifique a estrutura simétrica empregada.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Aphoristic Chiasmus in Philosophical Rhetoric',
      scenario: 'Conferência magistral de filosofia do direito',
      spokenText: 'Speaker: We must never permit our technology to determine our values, nor allow our values to be eclipsed by our technology. When institutions cease to serve humanity and force humanity to serve institutions, civilization forfeits its moral compass. Let us not negotiate out of fear, but let us never fear to negotiate.',
      speechRate: 0.95,
      estimatedDurationSeconds: 22,
      transcript: 'Speaker: We must never permit our technology to determine our values, nor allow our values to be eclipsed by our technology. When institutions cease to serve humanity and force humanity to serve institutions, civilization forfeits its moral compass. Let us not negotiate out of fear, but let us never fear to negotiate.',
      transcriptTranslation: 'Orador: Jamais devemos permitir que nossa tecnologia determine nossos valores, nem consentir que nossos valores sejam eclipsados pela tecnologia. Quando as instituições deixam de servir à humanidade e forçam a humanidade a servir às instituições, a civilização perde seu norte moral. Não negociemos pelo medo, mas jamais temamos negociar.'
    },
    questions: [
      {
        id: 'l-c2-cp-1',
        type: 'multiple_choice',
        questionText: 'Qual recurso estilístico estrutura a frase "institutions cease to serve humanity and force humanity to serve institutions"?',
        options: [
          { id: 'A', text: 'Aliteração consonantal simples' },
          { id: 'B', text: 'Quiasmo (estrutura cruzada que inverte os termos "institutions" e "humanity")' },
          { id: 'C', text: 'Onomatopeia expressiva' },
          { id: 'D', text: 'Pleonasmo involuntário' }
        ],
        correctOptionId: 'B',
        explanation: 'O quiasmo é a figura de linguagem clássica que inverte simetricamente os termos (servir à humanidade / humanidade servir às instituições), criando um aforismo de alto impacto ético.'
      },
      {
        id: 'l-c2-cp-2',
        type: 'multiple_choice',
        questionText: 'Qual é o apelo ético da frase final "Let us not negotiate out of fear, but let us never fear to negotiate"?',
        options: [
          { id: 'A', text: 'Uma recusa intransigente a qualquer tipo de diálogo diplomático' },
          { id: 'B', text: 'Um convite à coragem moral: não ceder à intimidação, mas manter a disposição para o diálogo substantivo' },
          { id: 'C', text: 'Uma ordem para que todos os exércitos ataquem preventivamente' },
          { id: 'D', text: 'Uma exigência de rendição incondicional' }
        ],
        correctOptionId: 'B',
        explanation: 'A famosa construção quiástica (adaptada de John F. Kennedy) defende que o diálogo deve nascer da força de princípios e não da fraqueza perante ameaças.'
      }
    ]
  },
  {
    id: 'listening-c2-id-fast-phonetic-assimilation',
    pillar: 'listening',
    type: 'listen_identify',
    level: 'c2',
    topic: 'Fonologia Avançada & Elusão Articulatória',
    title: 'Assimilação Fonética Extrema e Elusão na Fala Rápida Culta',
    description: 'Compreenda a fala rápida com processos de assimilação (good boy -> /gʊb bɔɪ/), elisão alveolar e glotalização.',
    objective: 'Decodificar elisões sonoras naturais e assimilações em inglês britânico e internacional em velocidade nativa plena.',
    instructions: 'Ouça as frases faladas em ritmo espontâneo acelerado e identifique as palavras exatas enunciadas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Rapid Articulatory Assimilation and Glottal Stops in Fluent Native Speech',
      scenario: 'Comentários espontâneos de bastidores em debates internacionais',
      spokenText: 'Sentence one: You should have kept quiet about the contract until Tuesday morning. Sentence two: That is the most pristine white paper I have read all year. Sentence three: We must adapt quickly or get left behind in the international market.',
      speechRate: 1.05,
      estimatedDurationSeconds: 19,
      transcript: 'Sentence 1: You should\'ve kept quiet about the contract until Tuesday morning.\nSentence 2: That\'s the most pristine white paper I\'ve read all year.\nSentence 3: We must adapt quickly or get left behind in the international market.',
      transcriptTranslation: 'Frase 1: Você deveria ter ficado quieto sobre o contrato até terça de manhã.\nFrase 2: Esse é o relatório mais impecável que li o ano inteiro.\nFrase 3: Precisamos nos adaptar rapidamente ou ficaremos para trás no mercado internacional.'
    },
    questions: [
      {
        id: 'l-c2-fa-1',
        type: 'multiple_choice',
        questionText: 'Na Frase 1, como a sequência "should have kept quiet" é pronunciada na fala conectada rápida?',
        options: [
          { id: 'A', text: 'Com pausas completas entre cada uma das palavras' },
          { id: 'B', text: 'Com elisão da semivogal e assimilação: /ˈʃʊdəv kep ˈkwaɪət/, onde o /t/ final de "kept" é elidido antes de "quiet"' },
          { id: 'C', text: 'Pronunciando apenas a primeira sílaba de cada termo' },
          { id: 'D', text: 'Com substituição de "quiet" por "loud"' }
        ],
        correctOptionId: 'B',
        explanation: 'Em velocidade natural nativa, o /t/ final de "kept" é omitido (elisão alveolar) antes da oclusiva seguinte /k/ em "quiet", soando como "kep quiet".'
      },
      {
        id: 'l-c2-fa-2',
        type: 'multiple_choice',
        questionText: 'Na Frase 2, o que ocorre foneticamente na junção "white paper"?',
        options: [
          { id: 'A', text: 'A palavra "paper" é omitida por completo' },
          { id: 'B', text: 'O /t/ alveolar de "white" sofre assimilação antecipatória labial com o /p/, soando frequentemente como "whipe paper" (/waɪp peɪpər/)' },
          { id: 'C', text: 'O falante soletra as letras em voz alta' },
          { id: 'D', text: 'A frase é dita ao contrário' }
        ],
        correctOptionId: 'B',
        explanation: 'A assimilação regressiva de ponto de articulação transforma a oclusiva alveolar /t/ em bilabial /p/ antes do fonema /p/ seguinte: "white paper" vira /waɪp peɪpər/.'
      }
    ]
  },

  // --- 2. Compreenda o Diálogo (Listen to Dialogue) - 4 Atividades ---
  {
    id: 'listening-c2-dial-diplomatic-treaty',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c2',
    topic: 'Diplomacia & Direito Internacional',
    title: 'A Negociação de Cláusulas de Verificação de Desarmamento',
    description: 'Dois diplomatas sêniores debatem a terminologia de protocolos de inspeção e salvaguardas de soberania.',
    objective: 'Compreender redações diplomáticas delicadas onde cada adjetivo define prerrogativas jurisdicionais soberanas.',
    instructions: 'Acompanhe a reunião de embaixadores e analise os impasses de redação.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Bilateral Treaty Formulation and Sovereign Verification Protocols',
      scenario: 'Sala reservada de negociações em cúpula multilateral',
      spokenText: 'Ambassador Moreau, our delegation cannot endorse the phrase unrestricted on-site inspections without prior judicial notification. That wording encroaches unacceptably upon sovereign domestic constitutional prerogatives. I take your point, Ambassador Vance. However, conditioning international inspection teams on forty-eight-hour advance notice renders the verification framework fundamentally toothless; it invites clandestine concealment of prohibited materials. What if we adopt the compromised language of expedited bilateral access upon substantiated reasonable suspicion, coupled with an immediate tripartite review panel to arbitrate disputes within four hours? That formulation establishes an adequate evidentiary threshold while preventing arbitrary intrusions. If your government accepts that compromise, we can finalize the treaty draft before the ministerial dinner tonight.',
      dialogueLines: [
        { speaker: 'Ambassador Vance', gender: 'male', text: 'Ambassador Moreau, our delegation cannot endorse the phrase unrestricted on-site inspections without prior judicial notification. That wording encroaches unacceptably upon sovereign domestic constitutional prerogatives.', translation: 'Embaixador Moreau, nossa delegação não pode endossar a expressão inspeções in loco irrestritas sem notificação judicial prévia. Essa redação infringe inaceitavelmente prerrogativas constitucionais soberanas internas.' },
        { speaker: 'Ambassador Moreau', gender: 'female', text: 'I take your point, Ambassador Vance. However, conditioning international inspection teams on forty-eight-hour advance notice renders the verification framework fundamentally toothless; it invites clandestine concealment of prohibited materials.', translation: 'Compreendo seu ponto, Embaixador Vance. No entanto, condicionar as equipes internacionais de inspeção a um aviso prévio de quarenta e oito horas esvazia totalmente a eficácia do tratado; isso estimula a ocultação clandestina de materiais proibidos.' },
        { speaker: 'Ambassador Moreau', gender: 'female', text: 'What if we adopt the compromised language of expedited bilateral access upon substantiated reasonable suspicion, coupled with an immediate tripartite review panel to arbitrate disputes within four hours?', translation: 'Que tal adotarmos a fórmula conciliatória de acesso bilateral expedito mediante suspeita razoável consubstanciada, combinada com um painel tripartite imediato para arbitrar controvérsias em até quatro horas?' },
        { speaker: 'Ambassador Vance', gender: 'male', text: 'That formulation establishes an adequate evidentiary threshold while preventing arbitrary intrusions. If your government accepts that compromise, we can finalize the treaty draft before the ministerial dinner tonight.', translation: 'Essa redação estabelece uma régua probatória adequada e previne intrusões arbitrárias. Se o seu governo aceitar esse acordo, podemos finalizar a minuta do tratado antes do jantar ministerial de hoje.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 43,
      transcript: 'Vance: We cannot endorse "unrestricted on-site inspections without notice"; it encroaches upon constitutional sovereignty.\nMoreau: But a 48-hour notice renders verification toothless and invites clandestine concealment.\nMoreau: What about "expedited access upon substantiated suspicion" with a 4-hour tripartite dispute panel?\nVance: That provides an evidentiary threshold against arbitrary intrusions. We can finalize the draft.',
      transcriptTranslation: 'Vance: Não podemos aceitar inspeções sem aviso prévio; fere a soberania constitucional.\nMoreau: Mas aviso de 48 horas desdentaria o tratado e facilitaria ocultação.\nMoreau: Que tal acesso rápido mediante suspeita consubstanciada, com comitê de 4 horas para dirimir dúvidas?\nVance: Isso dá respaldo probatório contra abusos. Podemos fechar o texto.'
    },
    questions: [
      {
        id: 'l-c2-dt-1',
        type: 'multiple_choice',
        questionText: 'Por que o Embaixador Vance rejeitava a expressão original "unrestricted on-site inspections"?',
        options: [
          { id: 'A', text: 'Porque o custo das viagens dos inspetores era elevado' },
          { id: 'B', text: 'Porque violava prerrogativas constitucionais de soberania nacional de seu país' },
          { id: 'C', text: 'Porque os inspetores não falavam o idioma local' },
          { id: 'D', text: 'Porque as fronteiras estavam permanentemente fechadas' }
        ],
        correctOptionId: 'B',
        explanation: 'Vance argumenta que a redação "encroaches unacceptably upon sovereign domestic constitutional prerogatives".'
      },
      {
        id: 'l-c2-dt-2',
        type: 'multiple_choice',
        questionText: 'Qual solução de consenso foi proposta pela Embaixadora Moreau para superar o impasse?',
        options: [
          { id: 'A', text: 'Adiar as negociações por mais dez anos' },
          { id: 'B', text: 'Acesso expedito condicionado a suspeita consubstanciada, com comitê tripartite para arbitrar litígios em 4 horas' },
          { id: 'C', text: 'Permitir inspeções apenas através de satélites comerciais' },
          { id: 'D', text: 'Eliminar qualquer tipo de verificação do tratado' }
        ],
        correctOptionId: 'B',
        explanation: 'Moreau propõe a redação conciliadora: "expedited bilateral access upon substantiated reasonable suspicion, coupled with an immediate tripartite review panel to arbitrate disputes within four hours".'
      }
    ]
  },
  {
    id: 'listening-c2-dial-museum-repatriation',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c2',
    topic: 'Patrimônio Histórico & Ética Museológica',
    title: 'A Repatriação de Antiguidades Coloniais',
    description: 'Dr. Kensington e Marcus Thorne debatem a restituição de artefatos históricos a seus países de origem.',
    objective: 'Compreender o embate ético entre a teoria do universalismo museológico e o imperativo de justiça restaurativa.',
    instructions: 'Ouça o debate entre o curador e o conselheiro e identifique as premissas epistemológicas em conflito.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Restitution Ethics and the Universal Museum Paradigm',
      scenario: 'Debate de conselho de curadores de uma instituição museológica metropolitana',
      spokenText: 'Marcus, returning these bronze liturgical reliquaries to the source community represents an indispensable gesture of post-colonial historical redress. We cannot continue maintaining legal title over treasures acquired under coercive imperial expeditions. With respect, Dr. Kensington, you are dismissing the foundational philosophy of the universal museum. By assembling artifacts from disparate civilizations under a single civic roof, we enable global citizens to appreciate cross-cultural syncretism and universal human genius in a neutral pedagogical space. Neutral pedagogical space? There is nothing neutral about celebrating objects severed from their living ceremonial contexts while descendants must apply for tourist visas merely to behold the sacred regalia of their own ancestors. Retaining them under the guise of cosmopolitan stewardship is simply moral complacency. You present a formidable ethical challenge, Kensington. Perhaps a bilateral custodial partnership with rotational physical residency could bridge this philosophical chasm.',
      dialogueLines: [
        { speaker: 'Dr. Kensington', gender: 'female', text: 'Marcus, returning these bronze liturgical reliquaries to the source community represents an indispensable gesture of post-colonial historical redress. We cannot continue maintaining legal title over treasures acquired under coercive imperial expeditions.', translation: 'Marcus, devolver estes relicários litúrgicos de bronze à comunidade de origem representa um gesto indispensável de reparação histórica pós-colonial. Não podemos continuar sustentando a posse jurídica de tesouros obtidos em expedições imperiais coercitivas.' },
        { speaker: 'Marcus Thorne', gender: 'male', text: 'With respect, Dr. Kensington, you are dismissing the foundational philosophy of the universal museum. By assembling artifacts from disparate civilizations under a single civic roof, we enable global citizens to appreciate cross-cultural syncretism and universal human genius in a neutral pedagogical space.', translation: 'Com o devido respeito, Dra. Kensington, você desconsidera a filosofia fundacional do museu universal. Ao reunir artefatos de diversas civilizações sob o mesmo teto, permitimos que cidadãos do mundo apreciem o sincretismo intercultural e o gênio humano universal em um espaço pedagógico neutro.' },
        { speaker: 'Dr. Kensington', gender: 'female', text: 'Neutral pedagogical space? There is nothing neutral about celebrating objects severed from their living ceremonial contexts while descendants must apply for tourist visas merely to behold the sacred regalia of their own ancestors. Retaining them under the guise of cosmopolitan stewardship is simply moral complacency.', translation: 'Espaço pedagógico neutro? Não há nada de neutro em celebrar objetos arrancados de seus contextos cerimoniais vivos enquanto descendentes precisam pedir vistos de turista para ver as insígnias sagradas de seus próprios antepassados. Reter essas peças sob o pretexto de zelo cosmopolita é pura complacência moral.' },
        { speaker: 'Marcus Thorne', gender: 'male', text: 'You present a formidable ethical challenge, Kensington. Perhaps a bilateral custodial partnership with rotational physical residency could bridge this philosophical chasm.', translation: 'Você apresenta um desafio ético formidável, Kensington. Talvez uma parceria de custódia compartilhada com residência física rotativa consiga superar esse abismo filosófico.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 44,
      transcript: 'Kensington: Returning these bronze reliquaries is essential post-colonial historical redress after coercive expeditions.\nThorne: But universal museums allow global citizens to appreciate cross-cultural genius in a neutral space.\nKensington: Nothing is neutral when objects are severed from rituals and descendants need visas to see their ancestors\' regalia.\nThorne: A formidable challenge. Perhaps a bilateral custodial partnership with rotational residency could bridge this chasm.',
      transcriptTranslation: 'Kensington: Devolver estes bronzes sagrados é reparação histórica inadiável após pilhagens imperiais.\nThorne: Mas museus universais promovem diálogo intercultural neutro para cidadãos globais.\nKensington: Não há neutralidade quando netos precisam de visto para ver peças arrancadas de seus cultos.\nThorne: Argumento poderoso. Uma custódia compartilhada com residência rotativa pode conciliar as posições.'
    },
    questions: [
      {
        id: 'l-c2-mr-1',
        type: 'multiple_choice',
        questionText: 'Qual argumento Marcus Thorne mobiliza para defender a permanência dos artefatos no museu metropolitano?',
        options: [
          { id: 'A', text: 'O museu precisa vender ingressos para pagar suas dívidas bancárias' },
          { id: 'B', text: 'A doutrina do museu universal, que promove o diálogo entre culturas e a apreciação do gênio humano em um espaço público' },
          { id: 'C', text: 'O país de origem não possui eletricidade para ligar lâmpadas' },
          { id: 'D', text: 'O museu comprou as peças legalmente em um supermercado' }
        ],
        correctOptionId: 'B',
        explanation: 'Thorne argumenta com base na filosofia do museu universal: reunir civilizações sob um único teto para promover apreciação intercultural neutra.'
      },
      {
        id: 'l-c2-mr-2',
        type: 'multiple_choice',
        questionText: 'Como a Dra. Kensington refuta a ideia de que o museu seja um "espaço pedagógico neutro"?',
        options: [
          { id: 'A', text: 'Denunciando que os artefatos foram roubados do culto vivo e que descendentes precisam pedir visto de turista para contemplar relíquias sagradas de seus ancestrais' },
          { id: 'B', text: 'Mostrando que as paredes do museu não foram pintadas de branco' },
          { id: 'C', text: 'Exigindo que o museu seja fechado e demolido' },
          { id: 'D', text: 'Afirmando que a arte clássica não tem valor estético' }
        ],
        correctOptionId: 'A',
        explanation: 'Kensington expõe a violência colonial implícita: objetos sagrados foram dessacralizados e descendentes enfrentam barreiras migratórias para vê-los.'
      }
    ]
  },
  {
    id: 'listening-c2-dial-musical-dissonance',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c2',
    topic: 'Estética Musical & Filosofia da Arte',
    title: 'A Dissonância e a Fenomenologia da Tensão Sonora',
    description: 'A musicóloga Eleanor Sterling e o maestro Julian Chen debatem o papel da dissonância não resolvida na música pós-tonal.',
    objective: 'Compreender análises estéticas avançadas sobre harmonia, consonância e a experiência auditiva contemporânea.',
    instructions: 'Acompanhe a conversa entre os musicistas e identifique as teses estéticas expostas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Dissonance, Resolution, and the Modern Auditory Horizon',
      scenario: 'Gravação de debate radiofônico sobre estética musical contemporânea',
      spokenText: 'Maestro Chen, in your interpretation of Alban Berg violin concerto, you stubbornly resist the conventional urge to soften the acoustic friction of the microtonal passages. Conventional ears crave resolution, Eleanor. Western tonal conditioning has conditioned audiences to treat dissonance as an aberration—a momentary spiritual turbulence that must inevitably subside into the reassuring harbor of the major triad. But to prematurely sweeten Berg harmonic astringency is to betray the existential truth of twentieth-century fractured experience. Dissonance is not an acoustic defect awaiting harmonic absolution; it is a legitimate ontological state. Yet, Julian, if tension is emancipated so completely that the psychological possibility of resolution is permanently foreclosed, does not sound risk collapsing into an undifferentiated grey noise where all expressive meaning evaporates? Only if the composer abandons form entirely. In Berg, the tension remains tragic precisely because the yearning for harmony haunts every lacerating cluster.',
      dialogueLines: [
        { speaker: 'Prof. Eleanor Sterling', gender: 'female', text: 'Maestro Chen, in your interpretation of Alban Berg violin concerto, you stubbornly resist the conventional urge to soften the acoustic friction of the microtonal passages.', translation: 'Maestro Chen, em sua interpretação do concerto para violino de Alban Berg, o senhor resiste tenazmente ao impulso convencional de atenuar o atrito sonoro das passagens microtonais.' },
        { speaker: 'Maestro Julian Chen', gender: 'male', text: 'Conventional ears crave resolution, Eleanor. Western tonal conditioning has conditioned audiences to treat dissonance as an aberration—a momentary spiritual turbulence that must inevitably subside into the reassuring harbor of the major triad.', translation: 'Ouvidos convencionais anseiam por resolução, Eleanor. O condicionamento tonal ocidental ensinou o público a tratar a dissonância como uma anomalia: uma turbulência passageira que precisa inevitavelmente desaguar no porto seguro da tríade maior.' },
        { speaker: 'Maestro Julian Chen', gender: 'male', text: 'But to prematurely sweeten Berg harmonic astringency is to betray the existential truth of twentieth-century fractured experience. Dissonance is not an acoustic defect awaiting harmonic absolution; it is a legitimate ontological state.', translation: 'Contudo, adoçar prematuramente a adstringência harmônica de Berg é trair a verdade existencial de um século XX fraturado. A dissonância não é um defeito à espera de absolvição harmônica; é um estado ontológico legítimo.' },
        { speaker: 'Prof. Eleanor Sterling', gender: 'female', text: 'Yet, Julian, if tension is emancipated so completely that the psychological possibility of resolution is permanently foreclosed, does not sound risk collapsing into an undifferentiated grey noise where all expressive meaning evaporates?', translation: 'No entanto, Julian, se a tensão for emancipada a ponto de abolir permanentemente a possibilidade psicológica de resolução, o som não corre o risco de desabar num ruído cinzento amorfo onde todo o sentido expressivo evapora?' },
        { speaker: 'Maestro Julian Chen', gender: 'male', text: 'Only if the composer abandons form entirely. In Berg, the tension remains tragic precisely because the yearning for harmony haunts every lacerating cluster.', translation: 'Apenas se o compositor abandonar a forma por completo. Em Berg, a tensão permanece trágica exatamente porque o anseio por harmonia assombra cada acorde dilacerante.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 43,
      transcript: 'Sterling: You resist softening the acoustic friction of Berg\'s microtonal passages.\nChen: Tonal conditioning treats dissonance as an anomaly awaiting resolution into a major triad. But sweetening Berg betrays 20th-century fractured truth. Dissonance is an ontological state.\nSterling: If tension is totally emancipated, doesn\'t sound collapse into undifferentiated grey noise?\nChen: Only without form. In Berg, tension remains tragic because the yearning for harmony haunts every cluster.',
      transcriptTranslation: 'Sterling: O senhor recusa suavizar a aspereza sonora de Berg.\nChen: O ouvido comum quer resolução tonal rápida. Mas adoçar Berg trai a verdade de um século despedaçado. A dissonância é legítima em si.\nSterling: Sem resolução, o som não vira um ruído cinzento sem sentido?\nChen: Só se não houver forma. Em Berg, a tensão é trágica porque o desejo de harmonia ronda cada acorde.'
    },
    questions: [
      {
        id: 'l-c2-md-1',
        type: 'multiple_choice',
        questionText: 'Por que o Maestro Julian Chen se recusa a amenizar a dissonância na obra de Alban Berg?',
        options: [
          { id: 'A', text: 'Porque os músicos da orquestra não sabem afinar os instrumentos' },
          { id: 'B', text: 'Porque a dissonância expressa a verdade existencial da experiência fraturada do século XX, constituindo um estado ontológico autêntico' },
          { id: 'C', text: 'Porque a partitura exige o uso de amplificadores de guitarra elétrica' },
          { id: 'D', text: 'Porque o público exigiu vaias durante o concerto' }
        ],
        correctOptionId: 'B',
        explanation: 'Chen defende que amenizar a aspereza de Berg trairia "the existential truth of twentieth-century fractured experience" e que a dissonância é um "legitimate ontological state".'
      },
      {
        id: 'l-c2-md-2',
        type: 'multiple_choice',
        questionText: 'O que preserva a dimensão trágica da música de Berg, segundo o Maestro Chen?',
        options: [
          { id: 'A', text: 'O fato de o anseio por harmonia assombrar e ecoar dentro de cada acorde dissonante ("yearning for harmony haunts every cluster")' },
          { id: 'B', text: 'A curta duração de cada movimento sinfônico' },
          { id: 'C', text: 'O uso de instrumentos de percussão militar' },
          { id: 'D', text: 'A presença de um narrador contando piadas ao fundo' }
        ],
        correctOptionId: 'A',
        explanation: 'Chen explica que a tensão não é ruído vazio porque conserva a memória da harmonia: "the tension remains tragic precisely because the yearning for harmony haunts every lacerating cluster".'
      }
    ]
  },
  {
    id: 'listening-c2-dial-transhumanist-ethics',
    pillar: 'listening',
    type: 'listen_dialogue',
    level: 'c2',
    topic: 'Bioética & Futuro da Humanidade',
    title: 'Aprimoramento Genético e a Condição Humana',
    description: 'Dra. Fiona Alvarez e o filósofo Soren Lindqvist debatem o impacto do melhoramento genético de linhagem germinativa na igualdade moral.',
    objective: 'Compreender debates bioéticos avançados sobre a mercantilização da biologia e a dissolução da solidariedade humana.',
    instructions: 'Acompanhe o debate acadêmico e identifique os argumentos bioéticos formulados.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Germline Genetic Editing and the Post-Human Horizon',
      scenario: 'Simpósio internacional de bioética e jurisprudência genética',
      spokenText: 'Soren, when you advocate for germline genetic enhancements under the banner of parental morphological freedom, you are turning a blind eye to the structural emergence of biological caste systems. The moment cognitive longevity and enhanced metabolic traits become purchasable consumer commodities, biological inequality will solidify economic disparity into our very cellular code. Fiona, your bioconservative anxiety presumes that nature is a benevolent lottery. But the evolutionary genetic roll of the dice is fundamentally arbitrary and cruel, conferring congenital misery upon millions. To categorically outlaw technologies that could eradicate monogenic hereditary disorders and expand human intellectual capacity out of fear of sociological abuse is an abdication of compassion. We do not ban public literacy programs merely because some individuals might read faster than others; we democratize access. Genetic enhancement will never be public literacy, Soren. Unlike public schooling, biological enhancements cannot be redistributed or renegotiated; they create irreversible speciation.',
      dialogueLines: [
        { speaker: 'Dr. Fiona Alvarez', gender: 'female', text: 'Soren, when you advocate for germline genetic enhancements under the banner of parental morphological freedom, you are turning a blind eye to the structural emergence of biological caste systems. The moment cognitive longevity and enhanced metabolic traits become purchasable consumer commodities, biological inequality will solidify economic disparity into our very cellular code.', translation: 'Soren, quando você defende o melhoramento genético germinativo sob o estandarte da liberdade morfológica parental, você fecha os olhos para o surgimento estrutural de castas biológicas. No momento em que longevidade cognitiva e aprimoramento metabólico virarem mercadorias de consumo, a desigualdade biológica petrificará a disparidade econômica em nosso próprio código celular.' },
        { speaker: 'Prof. Soren Lindqvist', gender: 'male', text: 'Fiona, your bioconservative anxiety presumes that nature is a benevolent lottery. But the evolutionary genetic roll of the dice is fundamentally arbitrary and cruel, conferring congenital misery upon millions. To categorically outlaw technologies that could eradicate monogenic hereditary disorders and expand human intellectual capacity out of fear of sociological abuse is an abdication of compassion. We do not ban public literacy programs merely because some individuals might read faster than others; we democratize access.', translation: 'Fiona, sua ansiedade bioconservadora supõe que a natureza seja uma loteria benevolente. Mas a roleta genética da evolução é arbitrária e cruel, distribuindo sofrimento congênito a milhões. Proibir categoricamente tecnologias capazes de erradicar doenças hereditárias monogênicas e expandir o intelecto humano por medo de abusos sociais é abdicar da compaixão. Não proibimos a alfabetização porque alguns leem mais rápido; nós democratizamos o acesso.' },
        { speaker: 'Dr. Fiona Alvarez', gender: 'female', text: 'Genetic enhancement will never be public literacy, Soren. Unlike public schooling, biological enhancements cannot be redistributed or renegotiated; they create irreversible speciation.', translation: 'O aprimoramento genético jamais será como a alfabetização, Soren. Ao contrário da escola pública, melhorias biológicas incorporadas ao DNA não podem ser redistribuídas nem renegociadas; elas criam uma especiação irreversível.' }
      ],
      speechRate: 0.98,
      estimatedDurationSeconds: 44,
      transcript: 'Alvarez: Genetic enhancement turns economic disparity into biological caste systems encoded in cellular DNA.\nLindqvist: Nature is an arbitrary, cruel lottery. Banning tools that eradicate hereditary diseases and expand intellect out of social fear lacks compassion. We democratize access, like literacy.\nAlvarez: Genetic edits are not literacy. Biological traits cannot be redistributed; they risk irreversible speciation.',
      transcriptTranslation: 'Alvarez: O aprimoramento genético petrificará desigualdades em castas biológicas escritas no DNA.\nLindqvist: A natureza é uma loteria cega e cruel. Banir a cura de doenças genéticas por medo social é falta de empatia; a saída é democratizar o acesso como a escola.\nAlvarez: DNA não é escola. Mudanças genéticas não podem ser redistribuídas e criam especiação irreversível.'
    },
    questions: [
      {
        id: 'l-c2-te-1',
        type: 'multiple_choice',
        questionText: 'Qual risco civilizatório irreversível é apontado pela Dra. Fiona Alvarez?',
        options: [
          { id: 'A', text: 'A falência de empresas de planos de saúde' },
          { id: 'B', text: 'A conversão de privilégios econômicos em castas biológicas permanentes e uma possível especiação humana irreversível' },
          { id: 'C', text: 'O fechamento de escolas de medicina' },
          { id: 'D', text: 'A escassez de remédios para febre comum' }
        ],
        correctOptionId: 'B',
        explanation: 'Fiona alerta que a transformação de traços genéticos em bens de consumo "will solidify economic disparity into our very cellular code" criando "irreversible speciation" (divisão da humanidade em espécies distintas).'
      },
      {
        id: 'l-c2-te-2',
        type: 'multiple_choice',
        questionText: 'Qual argumento central o Prof. Soren Lindqvist mobiliza contra o bioconservadorismo?',
        options: [
          { id: 'A', text: 'A roleta genética natural é arbitrária e cruel, e recusar o alívio do sofrimento por medo de desvios sociais é falta de compaixão' },
          { id: 'B', text: 'A clonagem já é praticada legalmente em todos os hospitais do planeta' },
          { id: 'C', text: 'O ser humano deve ser substituído por robôs imediatamente' },
          { id: 'D', text: 'As doenças genéticas foram criadas por cientistas' }
        ],
        correctOptionId: 'A',
        explanation: 'Lindqvist defende que a loteria natural não é benevolente ("arbitrary and cruel") e que banir ferramentas de cura e ampliação cognitiva por medo de abusos configura uma abdicação da compaixão.'
      }
    ]
  },

  // --- 3. Situações da Vida Real (Real-Life Situations) - 4 Atividades ---
  {
    id: 'listening-c2-sit-supreme-court-argument',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c2',
    topic: 'Direito Constitucional & Garantias Fundamentais',
    title: 'Sustentação Oral na Suprema Corte sobre Privacidade Digital',
    description: 'Ouça a inquirição entre um ministro da Suprema Corte e o defensor público sobre a busca de metadados telemáticos sem mandato.',
    objective: 'Interpretar argumentação jurídica de última instância sobre a doutrina da expectativa legítima de privacidade.',
    instructions: 'Acompanhe o debate jurídico de alto rigor e identifique as distinções constitucionais levantadas.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Supreme Court Oral Argument on Telemetric Warrantless Surveillance',
      scenario: 'Sessão solene de sustentação oral perante a Suprema Corte',
      spokenText: 'Counsel, does your client position not fundamentally eviscerate the third-party doctrine established in our canonical fourth amendment precedents? If a citizen willingly conveys geolocation breadcrumbs to a commercial cellular provider, how can they maintain a reasonable expectation of constitutional privacy against subsequent state subpoena? Justice Miller, the third-party doctrine was conceived in an era of episodic telephone operator dialing, not perpetual algorithmic tracking. When a mobile device generates millions of precise latitude coordinates every hour, tracking an individual cellular footprint ceases to be a mere collection of discrete transactional records; it creates a comprehensive, omniscient mosaic of the citizen physical movements, religious associations, medical consultations, and romantic intimacies. To apply twentieth-century analog precedents to persistent biometric telemetry is to sanction the wholesale dismantling of constitutional privacy by technological default.',
      speechRate: 0.98,
      estimatedDurationSeconds: 40,
      transcript: 'Justice: Does your position not eviscerate the third-party doctrine? If a citizen gives geolocation data to a carrier, how can they expect Fourth Amendment privacy against a subpoena?\nCounsel: The doctrine was conceived for episodic phone dialing, not perpetual algorithmic tracking. Millions of coordinates create an omniscient mosaic of medical, religious, and intimate life. Analog precedents cannot sanction warrantless telemetry.',
      transcriptTranslation: 'Ministro: Sua tese não destrói a doutrina de terceiros? Se o cidadão repassa localização à operadora, como alegar privacidade contra uma intimação judicial?\nDefensor: A doutrina foi criada para ligações esporádicas, não rastreamento contínuo. Bilhões de coordenadas formam um mosaico íntimo da vida religiosa, médica e afetiva. Regras analógicas não podem legitimar vigilância telemática sem mandado.'
    },
    questions: [
      {
        id: 'l-c2-sc-1',
        type: 'multiple_choice',
        questionText: 'Qual é o contra-argumento central do advogado contra a aplicação da doutrina tradicional de terceiros ao celular?',
        options: [
          { id: 'A', text: 'Os aparelhos telefônicos modernos são propriedade do governo federal' },
          { id: 'B', text: 'O rastreamento contínuo gera um mosaico onisciente de movimentos íntimos, médicos e religiosos, descaracterizando a analogia com registros telefônicos esporádicos do passado' },
          { id: 'C', text: 'As operadoras de celular não possuem computadores para armazenar dados' },
          { id: 'D', text: 'O cliente não sabia que possuía um aparelho celular' }
        ],
        correctOptionId: 'B',
        explanation: 'O advogado refuta a analogia antiga argumentando que a geolocalização ininterrupta cria um "omniscient mosaic" revelando intimidades médicas, políticas e religiosas protegidas pela constituição.'
      },
      {
        id: 'l-c2-sc-2',
        type: 'multiple_choice',
        questionText: 'O que o advogado adverte que aconteceria se a corte aplicasse cegamente jurisprudências analógicas antigas?',
        options: [
          { id: 'A', text: 'O preço dos aparelhos dobraria no varejo' },
          { id: 'B', text: 'O desmantelamento generalizado da privacidade constitucional por inércia tecnológica' },
          { id: 'C', text: 'O cancelamento imediato de todas as leis penais do país' },
          { id: 'D', text: 'A proibição de chamadas telefônicas internacionais' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele conclui expressamente que insistir em regras analógicas equivale a "sanction the wholesale dismantling of constitutional privacy by technological default".'
      }
    ]
  },
  {
    id: 'listening-c2-sit-parliamentary-banking-inquiry',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c2',
    topic: 'Economia Financeira & Inquirição Parlamentar',
    title: 'Comissão Parlamentar sobre Risco Sistêmico e Liquidez Bancária',
    description: 'Ouça a inquirição rigorosa de um deputado sobre a omissão de testes de estresse em derivativos de alta volatilidade.',
    objective: 'Compreender sabatinas formais de alta complexidade técnica sobre solvência bancária e supervisão financeira.',
    instructions: 'Acompanhe a audiência legislativa e responda sobre a negligência investigada.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Parliamentary Treasury Select Committee Hearing on Bank Insolvency',
      scenario: 'Comissão parlamentar de finanças investigando quebra de banco comercial',
      spokenText: 'Mr. Sterling, you sat as chief risk officer of Sovereign Trust for four years preceding its catastrophic government-funded bailout. In your internal audit reports submitted to the board in October, your mathematical risk models assumed that interest rates would remain historically suppressed in perpetuity. Did your quantitative department ever model an aggressive three-hundred-basis-point rate hike coupled with a correlated run on uninsured commercial deposits? The short answer, Committee Chair, is that while such extreme tail-risk scenarios were acknowledged in our theoretical risk appendices, our executive compensation metrics prioritized short-term yield maximization. Stress-testing for catastrophic contagion was deemed economically impractical during what we misjudged to be a stable macroeconomic plateau. In other words, Mr. Sterling, you deliberately gambled with public deposit security to inflate executive bonuses.',
      speechRate: 0.98,
      estimatedDurationSeconds: 40,
      transcript: 'MP: As Chief Risk Officer, your models assumed near-zero interest rates in perpetuity. Did you ever stress-test a 300-basis-point hike coupled with a deposit run?\nExecutive: Tail-risk scenarios were noted in theoretical appendices, but executive incentives favored immediate yield. Stress-testing for contagion was deemed impractical during what seemed a stable plateau.\nMP: In other words, you gambled with depositor security to inflate executive compensation.',
      transcriptTranslation: 'Deputada: Como diretor de risco, seus modelos presumiam juros zerados para sempre. Chegou a simular um aumento de 300 pontos-base com corrida aos depósitos?\nExecutivo: Cenários de cauda constavam em apêndices teóricos, mas nossos bônus priorizavam rendimento imediato. Simular contágio foi tido como inviável no que julgávamos um patamar estável.\nDeputada: Em suma, o senhor apostou a segurança dos correntistas para inflar seus próprios bônus.'
    },
    questions: [
      {
        id: 'l-c2-pb-1',
        type: 'multiple_choice',
        questionText: 'Qual falha grave de modelagem de risco foi admitida pelo executivo bancário perante o parlamento?',
        options: [
          { id: 'A', text: 'O banco não possuía computadores para rodar planilhas' },
          { id: 'B', text: 'Cenários de choque severo de juros foram relegados a apêndices teóricos secundários, pois as metas de remuneração privilegiavam lucros imediatos' },
          { id: 'C', text: 'O banco havia guardado ouro demais nos cofres' },
          { id: 'D', text: 'O banco contratou apenas estagiários para a diretoria de risco' }
        ],
        correctOptionId: 'B',
        explanation: 'O executivo admite que cenários extremos de risco de cauda ficaram apenas em apêndices teóricos porque os bônus da diretoria premiavam a rentabilidade imediata em detrimento da prudência.'
      },
      {
        id: 'l-c2-pb-2',
        type: 'multiple_choice',
        questionText: 'Qual conclusão contundente é sintetizada pela presidente da comissão parlamentar?',
        options: [
          { id: 'A', text: 'Que o banco agiu com exemplar prudência e merece mais verbas' },
          { id: 'B', text: 'Que os diretores apostaram levianamente com a segurança dos correntistas para inflar seus bônus pessoais' },
          { id: 'C', text: 'Que todos os clientes devem fechar suas contas bancárias imediatamente' },
          { id: 'D', text: 'Que os testes de estresse são ilegais no país' }
        ],
        correctOptionId: 'B',
        explanation: 'A parlamentar resume sem rodeios: "In other words, Mr. Sterling, you deliberately gambled with public deposit security to inflate executive bonuses".'
      }
    ]
  },
  {
    id: 'listening-c2-sit-phenomenology-lecture',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c2',
    topic: 'Filosofia da Consciência & Temporalidade',
    title: 'Aula Magna de Fenomenologia: A Percepção do Tempo',
    description: 'Acompanhe a exposição magistral sobre a retenção, a protensão e o fluxo temporal da consciência humana (Husserl).',
    objective: 'Compreender o discurso filosófico acadêmico em nível de pós-graduação avançada sobre a estrutura da subjetividade.',
    instructions: 'Ouça o excerto da preleção e responda às questões sobre a fenomenologia da temporalidade.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Husserlian Phenomenology of Internal Time Consciousness',
      scenario: 'Preleção magistral no Instituto de Estudos Avançados',
      spokenText: 'To conceptualize temporal consciousness as a sequence of discrete, punctilinear now-points is to fall victim to what Edmund Husserl identified as a fatal atomistic fallacy. When you perceive a musical melody, consciousness does not register isolated acoustic notes like beads on an abacus. Each fleeting acoustic vibration is enveloped in retention—an immediate, non-representational holding-on to the just-elapsed sound—while simultaneously anticipating the forthcoming harmonic cadence through intentional protension. The present is never an instantaneous knife-edge; it is an elastic, thick horizon: a living dynamic continuum wherein memory and anticipation interpenetrate to constitute the very fabric of subjective coherence.',
      speechRate: 0.96,
      estimatedDurationSeconds: 38,
      transcript: 'Professor: Conceiving time consciousness as punctilinear points is an atomistic fallacy. Hearing a melody, the mind does not register isolated notes like abacus beads. Each vibration is held in retention—preserving the just-elapsed sound—while anticipating the next cadence via protension. The present is an elastic, thick horizon where memory and anticipation interpenetrate.',
      transcriptTranslation: 'Professor: Tratar a consciência do tempo como pontos pontuais isolados é uma falácia atomista. Ao ouvir uma melodia, a mente não apreende notas soltas como contas de um ábaco. Cada som é retido na retenção (preservação do que acabou de ecoar) enquanto antecipa o acorde seguinte por protensão. O presente é um horizonte espesso e elástico onde memória e futuro se entrelaçam.'
    },
    questions: [
      {
        id: 'l-c2-pl-1',
        type: 'multiple_choice',
        questionText: 'Como a fenomenologia descreve o presente em contraposição à ideia do "ponto agora" pontual?',
        options: [
          { id: 'A', text: 'Como uma linha puramente matemática sem qualquer espessura psicológica' },
          { id: 'B', text: 'Como um horizonte elástico e denso ("thick horizon") onde passado imediato (retenção) e futuro imediato (protensão) se interpenetram' },
          { id: 'C', text: 'Como uma ilusão gerada por aparelhos de relógio mecânicos' },
          { id: 'D', text: 'Como um vácuo acústico destituído de significado' }
        ],
        correctOptionId: 'B',
        explanation: 'O filósofo ensina que o presente nunca é um corte instantâneo isolado, mas sim "an elastic, thick horizon: a living dynamic continuum wherein memory and anticipation interpenetrate".'
      },
      {
        id: 'l-c2-pl-2',
        type: 'multiple_choice',
        questionText: 'Qual metáfora o professor rejeita para explicar a percepção de uma melodia musical?',
        options: [
          { id: 'A', text: 'O eco das montanhas' },
          { id: 'B', text: 'Contas isoladas em um ábaco ("beads on an abacus")' },
          { id: 'C', text: 'A fita magnética de um gravador' },
          { id: 'D', text: 'O leito de um rio límpido' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele rejeita expressamente que as notas sejam percebidas como unidades isoladas: "consciousness does not register isolated acoustic notes like beads on an abacus".'
      }
    ]
  },
  {
    id: 'listening-c2-sit-climate-treaty-declaration',
    pillar: 'listening',
    type: 'real_life_situation',
    level: 'c2',
    topic: 'Geopolítica Ambiental & Créditos de Carbono',
    title: 'Discurso de Encerramento do Tratado Climático Global',
    description: 'Ouça a declaração final do presidente da cúpula sobre a integridade contábil dos mercados globais de carbono.',
    objective: 'Decodificar pronunciamentos multilaterais complexos com rigor conceitual sobre sustentabilidade e soberania.',
    instructions: 'Acompanhe o discurso solene de encerramento e avalie os princípios ratificados no acordo.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Plenary Closing Declaration on Article Six Carbon Market Integrity',
      scenario: 'Sessão plenária final de cúpula climática internacional',
      spokenText: 'Excellencies, distinguished delegates: After fourteen sleepless nights of arduous drafting, we have reached consensus on the implementation guidelines for Article Six. Let history record that this plenary categorically rejected the siren song of cosmetic carbon offsetting. Under the newly ratified operational rulebook, sovereign entities can no longer claim fictitious mitigation through paper forest concessions that would have remained standing regardless of investment. We have embedded mandatory corresponding adjustments to definitively eradicate the menace of double-counting. Climate finance must deliver real, measurable, permanent, and additional atmospheric mitigation. Any credit mechanism that prioritizes accounting sleight-of-hand over genuine industrial decarbonization is an insult to vulnerable island nations drowning under rising ocean tides.',
      speechRate: 0.98,
      estimatedDurationSeconds: 38,
      transcript: 'President: We reached consensus on Article 6. We rejected cosmetic offsetting. Entities can no longer claim fictitious mitigation via unthreatened forest concessions. Mandatory corresponding adjustments eliminate double-counting. Climate finance must deliver permanent, additional mitigation. Accounting tricks won\'t save drowning island nations.',
      transcriptTranslation: 'Presidente: Chegamos a um consenso sobre o Artigo 6. Rejeitamos compensações cosméticas. Países não poderão mais alegar créditos falsos com florestas que nunca estiveram sob risco. Ajustes obrigatórios eliminam a dupla contagem. O financiamento climático precisa gerar descarbonização real e adicional, não malabarismos contábeis.'
    },
    questions: [
      {
        id: 'l-c2-ct-1',
        type: 'multiple_choice',
        questionText: 'Qual prática de maquiagem contábil foi categoricamente banida pelas novas diretrizes ratificadas?',
        options: [
          { id: 'A', text: 'O plantio de árvores frutíferas em quintais urbanos' },
          { id: 'B', text: 'A geração de créditos fictícios sobre florestas que já estariam preservadas independentemente do financiamento (falta de adicionalidade)' },
          { id: 'C', text: 'A compra de veículos elétricos por embaixadas diplomáticas' },
          { id: 'D', text: 'O uso de energia eólica em ilhas oceânicas' }
        ],
        correctOptionId: 'B',
        explanation: 'O plenário proibiu expressamente a concessão de créditos de carbono fictícios por matas nativas que já estariam de pé sem intervenção ("paper forest concessions that would have remained standing regardless of investment").'
      },
      {
        id: 'l-c2-ct-2',
        type: 'multiple_choice',
        questionText: 'Qual mecanismo foi incorporado ao tratado para erradicar a fraude da "dupla contagem" de créditos?',
        options: [
          { id: 'A', text: 'Ajustes correspondentes obrigatórios ("mandatory corresponding adjustments")' },
          { id: 'B', text: 'O cancelamento de todas as moedas digitais' },
          { id: 'C', text: 'A proibição do comércio marítimo global' },
          { id: 'D', text: 'A extinção do comitê de auditoria da ONU' }
        ],
        correctOptionId: 'A',
        explanation: 'O presidente anuncia que o tratado instituiu "mandatory corresponding adjustments to definitively eradicate the menace of double-counting".'
      }
    ]
  },

  // --- 4. Entenda o Inglês Natural (Natural Speech) - 3 Atividades ---
  {
    id: 'listening-c2-nat-mono-transience-melancholy',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'c2',
    topic: 'Literatura, Estética & Existência',
    title: 'A Estética da Efemeridade e a Melancolia Reparadora',
    description: 'Ouça uma reflexão ensaística fluida e desprovida de artifícios sobre como a finitude confere beleza à experiência humana.',
    objective: 'Acompanhar prosa reflexiva de altíssimo quilate literário proferida em tom confidencial, íntimo e natural.',
    instructions: 'Ouça a meditação sobre transitoriedade e responda com base nas sutilezas da tese do orador.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'Mono-Essay: The Translucent Beauty of Impermanence',
      scenario: 'Ensaio em áudio gravado em estúdio intimista de literatura',
      spokenText: 'Modern consumer capitalism is obsessively structured around the juvenile denial of decay. We preserve, freeze, retouch, and embalm every surface, terrifyingly allergic to the ravages of time. Yet, the Japanese aesthetic of mono no aware reminds us that things are precious not in spite of their fleeting mortality, but precisely because of it. A cherry blossom petal cascading onto damp river stones moves the heart because its tenure in the sunlight is so exquisitely precarious. The moment you render beauty immutable—immortalized in impervious acrylic or silicon—you sanitize away the subtle melancholic ache that alone makes aesthetic experience transcendent. True maturity is finding solace in the transient nature of existence.',
      speechRate: 0.96,
      estimatedDurationSeconds: 34,
      transcript: 'Modern capitalism obsessively denies decay—retouching and freezing everything out of terror of time. Yet the aesthetic of "mono no aware" reminds us things are precious precisely because they are mortal. A falling cherry blossom moves us because its tenure is exquisitely precarious. Rendering beauty immutable strips away the melancholic ache that makes experience transcendent. Maturity finds solace in transience.',
      transcriptTranslation: 'O capitalismo moderno nega infantilmente o envelhecimento, retocando tudo por pavor do tempo. A sabedoria do "mono no aware" nos ensina o oposto: as coisas são preciosas justamente porque são efêmeras. A pétala da cerejeira comove porque seu tempo ao sol é breve e frágil. Fazer a beleza eterna e imutável mata a melancolia doce que torna a vida profunda. A maturidade reside em acolher o transitório.'
    },
    questions: [
      {
        id: 'l-c2-nm-1',
        type: 'multiple_choice',
        questionText: 'O que o conceito estético "mono no aware" ensina segundo a reflexão do ensaísta?',
        options: [
          { id: 'A', text: 'Que tudo deve ser congelado para nunca apodrecer' },
          { id: 'B', text: 'Que a beleza das coisas decorre precisamente de sua finitude e transitoriedade inerente' },
          { id: 'C', text: 'Que as flores devem ser colhidas antes de desabrocharem' },
          { id: 'D', text: 'Que o dinheiro é a única medida de perfeição estética' }
        ],
        correctOptionId: 'B',
        explanation: 'O ensaísta pontua que as coisas são comoventes e valiosas "precisely because of their fleeting mortality" (por sua mortalidade e brevidade), como uma flor que cai ao vento.'
      },
      {
        id: 'l-c2-nm-2',
        type: 'multiple_choice',
        questionText: 'Qual consequência nefasta advém da tentativa de tornar a beleza imutável e artificialmente eterna?',
        options: [
          { id: 'A', text: 'Aumento da poluição plástica nos oceanos' },
          { id: 'B', text: 'A perda da ressonância emocional melancólica que confere transcendência à experiência artística' },
          { id: 'C', text: 'A falência de galerias de arte contemporânea' },
          { id: 'D', text: 'O encarecimento de câmeras fotográficas profissionais' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele adverte: "The moment you render beauty immutable... you sanitize away the subtle melancholic ache that alone makes aesthetic experience transcendent".'
      }
    ]
  },
  {
    id: 'listening-c2-nat-monetization-of-intimacy',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'c2',
    topic: 'Sociologia Crítica & Mídias Digitais',
    title: 'A Mercantilização da Intimidade e o Afeto Parassocial',
    description: 'Ouça uma análise contundente e coloquial sobre como plataformas digitais converteram o calor humano em assinatura paga.',
    objective: 'Compreender diagnósticos sociológicos refinados expressos com verve retórica e vocabulário vivo.',
    instructions: 'Acompanhe a crítica cultural e avalie a tese da solidão monetizada.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'The Industrialization of Parasocial Affection',
      scenario: 'Conversa descontraída em programa de debate intelectual',
      spokenText: 'What fascinates and horrifies me in equal measure about modern live-streaming platforms is the systematic financialization of basic human companionship. We have engineered an urban society of acute, atomized loneliness, and then—with breathtaking venture-capital cynicism—we monetized the antidote. Vulnerable, isolated subscribers donate fifty dollars just to hear a creator in a distant bedroom pronounce their screen name and simulate thirty seconds of simulated intimate recognition. It is an algorithmic simulacrum of friendship—a unilateral transaction where emotional warmth is rented by the minute while genuine relational reciprocity is structurally impossible. It is the ultimate triumph of late capitalism: converting the aching human need to be witnessed into a recurring tier-three monthly subscription.',
      speechRate: 0.98,
      estimatedDurationSeconds: 35,
      transcript: 'Live-streaming platforms commodify basic companionship. We created atomized loneliness, and with venture cynicism, monetized the antidote. Isolated viewers donate $50 just to hear a creator say their handle and fake intimate warmth for 30 seconds. It is a one-way transactional simulacrum of friendship. The aching need to be witnessed has become a tier-3 recurring subscription.',
      transcriptTranslation: 'Plataformas de streaming mercantilizaram o afeto humano básico. Criamos uma solidão urbana atroz e, com cinismo financeiro, vendemos o remédio falso. Usuários isolados doam 50 dólares só para ouvir um influenciador dizer seu nome e simular carinho por 30 segundos. É um simulacro unilateral onde calor humano é alugado por minuto: a carência humana virou assinatura recorrente.'
    },
    questions: [
      {
        id: 'l-c2-mi-1',
        type: 'multiple_choice',
        questionText: 'Qual fenômeno social é denunciado pelo comentarista com a expressão "algorithmic simulacrum of friendship"?',
        options: [
          { id: 'A', text: 'A criação de robôs industriais para montagem de automóveis' },
          { id: 'B', text: 'A simulação comercial e unilateral de intimidade em plataformas de streaming onde a carência afetiva é alugada por dinheiro' },
          { id: 'C', text: 'O uso de aplicativos de mapas para encontrar amigos no trânsito' },
          { id: 'D', text: 'A troca de mensagens de texto entre membros da mesma família' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele denuncia a criação de amizades artificiais e unilaterais ("unilateral transaction where emotional warmth is rented by the minute"), nas quais a solidão é explorada como modelo de negócio por assinaturas.'
      },
      {
        id: 'l-c2-mi-2',
        type: 'multiple_choice',
        questionText: 'Por que uma amizade parassocial não substitui a convivência humana real?',
        options: [
          { id: 'A', text: 'Porque a conexão à internet frequentemente oscila' },
          { id: 'B', text: 'Porque a reciprocidade relacional autêntica é estruturalmente inexistente em uma transação financeira unilateral' },
          { id: 'C', text: 'Porque os influenciadores cobram taxas em moedas estrangeiras' },
          { id: 'D', text: 'Porque as telas de computador emitem luz azul prejudicial' }
        ],
        correctOptionId: 'B',
        explanation: 'O orador pontua que se trata de uma relação unilateral onde a "genuine relational reciprocity is structurally impossible", transformando carinho em mercadoria.'
      }
    ]
  },
  {
    id: 'listening-c2-nat-silence-and-civic-courage',
    pillar: 'listening',
    type: 'natural_speech',
    level: 'c2',
    topic: 'Ética Pública & Coragem Moral',
    title: 'A Cumplicidade do Silêncio Institucional',
    description: 'Ouça uma reflexão pungente sobre a responsabilidade moral do silêncio perante injustiças e a coragem do dissenso.',
    objective: 'Compreender discursos éticos apaixonados que entrelaçam filosofia política e responsabilidade individual.',
    instructions: 'Ouça o manifesto oral e identifique o imperativo ético defendido pelo interlocutor.',
    maxScore: 100,
    version: 1,
    listeningTrack: {
      title: 'The Weight of Complicit Silence in Bureaucratic Machinery',
      scenario: 'Alocução em congresso sobre direitos civis e ética pública',
      spokenText: 'History will judge our era not merely by the strident malice of bad actors, but far more severely by the comfortable, calculated silence of reasonable observers. It is astonishingly easy to persuade oneself that remaining quiet during moral emergencies is an act of diplomatic prudence—a sensible preservation of future institutional leverage. But leverage unused when fundamental rights are compromised is not wisdom; it is cowardly complicity masquerading as decorum. When a professional committee chooses silence to preserve its annual operating budget while marginalized communities absorb systemic harm, every member of that committee has traded their moral conscience for administrative tranquility. Real integrity begins the moment one accepts that speaking truth invariably incurs a personal cost.',
      speechRate: 0.98,
      estimatedDurationSeconds: 35,
      transcript: 'History judges an era not just by the malice of villains, but by the comfortable silence of reasonable observers. It is easy to delude oneself that staying quiet is diplomatic prudence or saving leverage for later. But unused leverage during moral emergencies is cowardly complicity disguised as decorum. True integrity starts when you accept that speaking truth incurs a personal cost.',
      transcriptTranslation: 'A história nos julgará não só pela maldade explícita, mas pelo silêncio cômodo e calculado dos homens moderados. É fácil fingir que o silêncio é prudência diplomática ou preservação de influência. Mas influência não usada na hora da injustiça é cumplicidade covarde disfarçada de decoro. A integridade real começa no momento em que se aceita que falar a verdade cobra um preço pessoal.'
    },
    questions: [
      {
        id: 'l-c2-sc-courage-1',
        type: 'multiple_choice',
        questionText: 'Qual desculpa comum é desmascarada pelo orador como mera "covardia disfarçada de decoro"?',
        options: [
          { id: 'A', text: 'Pedir aumento salarial no final do ano' },
          { id: 'B', text: 'Justificar o silêncio perante abusos éticos como se fosse "prudência diplomática" ou preservação de influência política' },
          { id: 'C', text: 'Comprar materiais de escritório de fornecedores locais' },
          { id: 'D', text: 'Viajar para o exterior durante as férias' }
        ],
        correctOptionId: 'B',
        explanation: 'O orador ataca a ilusão de quem cala fingindo prudência: "leverage unused when fundamental rights are compromised is not wisdom; it is cowardly complicity masquerading as decorum".'
      },
      {
        id: 'l-c2-sc-courage-2',
        type: 'multiple_choice',
        questionText: 'O que o orador estabelece como o marco inaugural da integridade moral autêntica?',
        options: [
          { id: 'A', text: 'O recebimento de prêmios governamentais de mérito cívico' },
          { id: 'B', text: 'A aceitação corajosa de que defender a verdade exige pagar um custo pessoal e profissional ("incurs a personal cost")' },
          { id: 'C', text: 'A recusa a falar em público sem um roteiro previamente aprovado' },
          { id: 'D', text: 'A aposentadoria compulsória de funcionários públicos' }
        ],
        correctOptionId: 'B',
        explanation: 'Ele conclui de forma marcante: "Real integrity begins the moment one accepts that speaking truth invariably incurs a personal cost".'
      }
    ]
  }
];

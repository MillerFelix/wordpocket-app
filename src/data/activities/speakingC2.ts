import { Activity, SpeakingQuestion } from '../../types/activity';

export const SPEAKING_C2: Activity<SpeakingQuestion>[] = [
  // --- 1. Ouça e Imite (Listen and Repeat) - 4 Atividades ---
  {
    id: 'speaking-c2-shadow-classical-parallelism',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c2',
    topic: 'Alta Oratória & Filosofia Moral',
    title: 'Paralelismo Clássico e Cadência Aforística de Maestria',
    description: 'Aprenda a entoar períodos oratórios magistrais com simetria rítmica perfeita e modulação de voz profunda.',
    objective: 'Dominar o fôlego, a ressonância torácica e as micro-pausas em períodos complexos de retórica clássica.',
    instructions: 'Ouça a interpretação oratória nobre e reproduza com cadência solene, controle respiratório e dicção impecável.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Discurso solene de cátedra perante acadêmicos e chefes de estado',
      checklist: [
        'Sustentação contínua da coluna de ar sem quebras ofegantes',
        'Cadência majestosa com cesuras harmônicas entre as orações',
        'Entonação conclusiva grave sem oscilações de insegurança'
      ]
    },
    questions: [
      {
        id: 's-c2-cp-1',
        type: 'speaking_item',
        itemTitle: 'Paralelismo Antitético de Maestria',
        contextScenario: 'Exponha a ilusão do controle total sobre os destinos humanos.',
        modelAudioText: 'In seeking to control everything, we comprehend nothing; in relinquishing the intoxicating illusion of control, we discover authentic mastery.',
        speechRate: 0.95,
        targetPhrase: 'In seeking to control everything, we comprehend nothing; in relinquishing the intoxicating illusion of control, we discover authentic mastery.',
        phoneticFocus: 'Simetria rítmica entre "comprehend nothing" e "discover authentic mastery" (/rɪˈlɪŋkwɪʃɪŋ/).',
        pronunciationTip: '"relinquishing" (/rɪˈlɪŋkwɪʃɪŋ/) com articulação fluida. Faça uma cesura clara no ponto e vírgula.',
        translation: 'Ao buscar controlar tudo, nada compreendemos; ao renunciar à inebriante ilusão de controle, descobrimos a maestria autêntica.',
        explanation: 'A alternância balanceada entre duas orações simétricas confere autoridade oratória máxima em nível de proficiência C2.'
      },
      {
        id: 's-c2-cp-2',
        type: 'speaking_item',
        itemTitle: 'Quiasmo Filosófico sobre a Linguagem',
        contextScenario: 'Reflita sobre a relação intrínseca entre o pensamento humano e os limites do vocabulário.',
        modelAudioText: 'We do not merely shape our language to articulate reality; our language silently sculpts the very contours of what we can imagine.',
        speechRate: 0.95,
        targetPhrase: 'We do not merely shape our language to articulate reality; our language silently sculpts the very contours of what we can imagine.',
        phoneticFocus: 'Inversão conceitual entre "shape our language" e "our language silently sculpts".',
        pronunciationTip: '"silently sculpts" (/ˈsaɪləntli skʌlpts/) com dicção nítida no encontro consonantal /lpts/.',
        translation: 'Não apenas moldamos nossa linguagem para articular a realidade; nossa linguagem esculpe silenciosamente os próprios contornos do que podemos conceber.',
        explanation: 'O quiasmo estilístico eleva a reflexão filosófica à categoria de aforismo atemporal.'
      },
      {
        id: 's-c2-cp-3',
        type: 'speaking_item',
        itemTitle: 'Síntese Ética sobre o Dever Cívico',
        contextScenario: 'Conclua uma alocução afirmando que a justiça duradoura depende da vigilância moral de cada geração.',
        modelAudioText: 'Justice is never an inherited domestic heirloom to be passively admired; it is an unyielding discipline to be reconstructed by every generation anew.',
        speechRate: 0.95,
        targetPhrase: 'Justice is never an inherited domestic heirloom to be passively admired; it is an unyielding discipline to be reconstructed by every generation anew.',
        phoneticFocus: '"inherited domestic heirloom" (/ˈerluːm/ - o "h" é mudo!) contraposto a "unyielding discipline".',
        pronunciationTip: 'Lembre-se: "heirloom" pronuncia-se sem som de "h": /ˈer-luːm/. Finalize com solenidade em "anew".',
        translation: 'A justiça nunca é uma relíquia doméstica herdada para ser admirada passivamente; é uma disciplina inflexível a ser reconstruída por cada geração novamente.',
        explanation: 'O contraste poético entre relíquia estática ("heirloom") e disciplina ativa consolida o fechamento com brilho épico.'
      }
    ]
  },
  {
    id: 'speaking-c2-shadow-epistemic-modesty',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c2',
    topic: 'Epistemologia & Deliberação Intelectual',
    title: 'Modéstia Epistêmica e Qualificação Dialética Refinada',
    description: 'Aprenda a expressar convicções profundas acompanhadas de prudência metodológica e respeito à complexidade.',
    objective: 'Modular a voz para emitir julgamentos categóricos temperados pela consciência das limitações humanas.',
    instructions: 'Ouça o modelo de oratória científica madura e reproduza com tom ponderado e reflexivo.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Palestra de encerramento em colóquio internacional de filosofia da mente',
      checklist: [
        'Atenuação melódica reflexiva em marcadores de ressalva',
        'Articulação fluida de terminologia epistemológica erudita',
        'Ausência de dogmatismo estridente na projeção vocal'
      ]
    },
    questions: [
      {
        id: 's-c2-em-1',
        type: 'speaking_item',
        itemTitle: 'Advertência contra o Dogmatismo Teórico',
        contextScenario: 'Alerte seus pares contra a tentação de confundir modelos matemáticos simplificados com a realidade viva.',
        modelAudioText: 'Be that as it may, we must remain ever vigilant against mistaking the mathematical elegance of our models for the messy recalcitrance of empirical reality.',
        speechRate: 0.95,
        targetPhrase: 'Be that as it may, we must remain ever vigilant against mistaking the mathematical elegance of our models for the messy recalcitrance of empirical reality.',
        phoneticFocus: '"messy recalcitrance of empirical reality" (/rɪˈkælsɪtrəns/).',
        pronunciationTip: '"recalcitrance" (/rɪˈkælsɪtrəns/). Mantenha tom comedido e lúcido.',
        translation: 'Seja como for, devemos permanecer sempre vigilantes para não confundir a elegância matemática de nossos modelos com a resistência teimosa da realidade empírica.',
        explanation: 'Expressar a falibilidade dos próprios modelos teóricos é o ápice do amadurecimento científico C2.'
      },
      {
        id: 's-c2-em-2',
        type: 'speaking_item',
        itemTitle: 'Reconhecimento da Incompletude Conceitual',
        contextScenario: 'Admitir que as descobertas da equipe abrem mais perguntas fundamentais do que encerram respostas.',
        modelAudioText: 'Far from presenting an exhaustive ontological closure, our findings merely delineate the fragile perimeter of our collective ignorance.',
        speechRate: 0.95,
        targetPhrase: 'Far from presenting an exhaustive ontological closure, our findings merely delineate the fragile perimeter of our collective ignorance.',
        phoneticFocus: '"exhaustive ontological closure" (/ˌɑːntəˈlɑːdʒɪkl/) e "fragile perimeter" (/pəˈrɪmɪtər/).',
        pronunciationTip: '"ontological" (/ˌɑːntəˈlɑːdʒɪkl/). Conclua em tom de reverência e curiosidade.',
        translation: 'Longe de apresentar um fechamento ontológico exaustivo, nossas descobertas apenas delineiam o perímetro frágil de nossa ignorância coletiva.',
        explanation: 'A metáfora socrática do perímetro da ignorância confere nobreza intelectual à fala.'
      },
      {
        id: 's-c2-em-3',
        type: 'speaking_item',
        itemTitle: 'Acolhimento da Dialética Adversária',
        contextScenario: 'Reconheça a contribuição crítica de correntes de pensamento opostas para o refinamento da sua tese.',
        modelAudioText: 'Notwithstanding our substantial theoretical divergences, I remain profoundly indebted to our interlocutors for interrogating our blind spots with such forensic rigor.',
        speechRate: 0.95,
        targetPhrase: 'Notwithstanding our substantial theoretical divergences, I remain profoundly indebted to our interlocutors for interrogating our blind spots with such forensic rigor.',
        phoneticFocus: '"Notwithstanding our substantial divergences" (/ˌnɑːtwɪðˈstændɪŋ/) e "forensic rigor" (/fəˈrensɪk ˈrɪɡər/).',
        pronunciationTip: '"indebted" (/ɪnˈdetɪd/ - o "b" é totalmente mudo!).',
        translation: 'Não obstante nossas divergências teóricas substanciais, permaneço profundamente grato aos nossos interlocutores por interrogarem nossos pontos cegos com tamanho rigor forense.',
        explanation: 'Elogiar o rigor crítico dos adversários demonstra serenidade e magnanimidade de alto nível.'
      }
    ]
  },
  {
    id: 'speaking-c2-shadow-deadpan-satire',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c2',
    topic: 'Crítica Cultural & Sátira Elegante',
    title: 'Ironia Fria e Sátira Culta sem Caricatura (Deadpan Satire)',
    description: 'Domine a arte da ironia britânica sofisticada, onde a crítica demolidora é proferida com cortesia glacial.',
    objective: 'Proferir declarações sarcásticas mantendo neutralidade facial e estabilidade acústica perfeita.',
    instructions: 'Ouça o humor seco nativo e reproduza o sarcasmo sutil com elegância desprovida de histrionismo.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Crônica de costumes em programa de ensaio literário na rádio pública',
      checklist: [
        'Voz serena e calma sem exageros cômicos histriônicos',
        'Contraste gritante entre a elegância das palavras e o absurdo do que é dito',
        'Finalização com anticlímax deliberadamente polido'
      ]
    },
    questions: [
      {
        id: 's-c2-ds-1',
        type: 'speaking_item',
        itemTitle: 'Sátira: Reuniões Corporativas Intermináveis',
        contextScenario: 'Comente sobre a proliferação de reuniões que servem apenas para adiar o trabalho real.',
        modelAudioText: 'To suggest that our three-hour cross-functional committee meeting achieved tangible breakthroughs would be a dazzling triumph of creative optimism.',
        speechRate: 0.95,
        targetPhrase: 'To suggest that our three-hour cross-functional committee meeting achieved tangible breakthroughs would be a dazzling triumph of creative optimism.',
        phoneticFocus: '"dazzling triumph of creative optimism" (/ˈdæzlɪŋ ˈtraɪʌmf/).',
        pronunciationTip: 'Fale "dazzling triumph" com a maior seriedade do mundo. A ironia reside na compostura.',
        translation: 'Sugerir que nossa reunião de comitê interdepartamental de três horas alcançou avanços tangíveis seria um triunfo deslumbrante de otimismo criativo.',
        explanation: 'Classificar o fracasso de uma reunião como "triunfo de otimismo criativo" é uma obra-prima de atenuação irônica.'
      },
      {
        id: 's-c2-ds-2',
        type: 'speaking_item',
        itemTitle: 'Sátira: Tendências de Autoajuda Instantânea',
        contextScenario: 'Ironize a promessa de gurus que garantem sabedoria existencial através de aplicativos de smartphone.',
        modelAudioText: 'How reassuring to learn that millennia of philosophical struggle can now be bypassed by downloading an algorithm that delivers mindfulness notifications between lunch and inbox triage.',
        speechRate: 0.95,
        targetPhrase: 'How reassuring to learn that millennia of philosophical struggle can now be bypassed by downloading an algorithm that delivers mindfulness notifications between lunch and inbox triage.',
        phoneticFocus: '"How reassuring to learn" (/ˌriːəˈʃʊrɪŋ/) contraposto a "mindfulness notifications".',
        pronunciationTip: '"triage" (/triˈɑːʒ/ ou /ˈtraɪædʒ/). Mantenha o tom impassível do início ao fim.',
        translation: 'Que reconfortante saber que milênios de reflexão filosófica podem agora ser superados baixando um algoritmo que envia notificações de atenção plena entre o almoço e a triagem de e-mails.',
        explanation: 'A antítese entre séculos de história humana e uma notificação de celular constrói uma sátira brilhante.'
      },
      {
        id: 's-c2-ds-3',
        type: 'speaking_item',
        itemTitle: 'Sátira: Arquitetura Corporativa Ostensiva',
        contextScenario: 'Critique um arranha-céu luxuoso construído por uma empresa que acaba de congelar salários de funcionários.',
        modelAudioText: 'Nothing proclaims a firm unshakeable commitment to fiscal austerity quite like inaugurating an eight-story marble atrium adorned with imported Swiss water cascades.',
        speechRate: 0.95,
        targetPhrase: 'Nothing proclaims a firm unshakeable commitment to fiscal austerity quite like inaugurating an eight-story marble atrium adorned with imported Swiss water cascades.',
        phoneticFocus: '"unshakeable commitment to fiscal austerity" versus "eight-story marble atrium".',
        pronunciationTip: '"atrium" (/ˈeɪtriəm/). Articule "Swiss water cascades" com serenidade glacial.',
        translation: 'Nada proclama tão bem o compromisso inabalável de uma empresa com a austeridade fiscal quanto inaugurar um átrio de mármore de oito andares decorado com cascatas suíças importadas.',
        explanation: 'Expor hipocrisia institucional através de justaposições visuais é a essência do humor cultivado britânico.'
      }
    ]
  },
  {
    id: 'speaking-c2-shadow-poetic-synthesis',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'c2',
    topic: 'Estética, Arte & Transcendência',
    title: 'Síntese Poética e Transcendência Estética na Fala',
    description: 'Explore a sonoridade lírica e a riqueza metafórica da língua inglesa em tributos fúnebres e ensaios humanistas.',
    objective: 'Conjugar precisão vocabular rara com musicalidade envolvente e comoção controlada.',
    instructions: 'Ouça a interpretação poética e reproduza a frase respeitando as pausas líricas e a respiração.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Tributo em memorial fúnebre ou inauguração de santuário ecológico',
      checklist: [
        'Vocalização calorosa, íntima e aveludada',
        'Pausas contemplativas respeitando a ressonância das palavras',
        'Cadência rítmica inspirada na tradição lírica anglo-saxã'
      ]
    },
    questions: [
      {
        id: 's-c2-ps-1',
        type: 'speaking_item',
        itemTitle: 'Tributo à Memória e ao Legado',
        contextScenario: 'Homenageie um mentor querido afirmando que sua influência permanece viva nas vidas que tocou.',
        modelAudioText: 'A life thoroughly lived does not vanish like breath on a cold window pane; it weaves itself irrevocably into the moral fabric of all who loved them.',
        speechRate: 0.95,
        targetPhrase: 'A life thoroughly lived does not vanish like breath on a cold window pane; it weaves itself irrevocably into the moral fabric of all who loved them.',
        phoneticFocus: '"does not vanish like breath on a cold window pane" (/ˈvænɪʃ/) e "weaves itself irrevocably" (/ɪˈrevəkəbli/).',
        pronunciationTip: 'Fale "breath on a cold window pane" com extrema suavidade. Deixe o som ecoar.',
        translation: 'Uma vida plenamente vivida não desaparece como o hálito no vidro frio de uma janela; ela se entrelaça irrevogavelmente no tecido moral de todos os que a amaram.',
        explanation: 'A metáfora da respiração no vidro frio traduz a transitoriedade com comovente elegância lírica.'
      },
      {
        id: 's-c2-ps-2',
        type: 'speaking_item',
        itemTitle: 'Meditação sobre o Silêncio na Natureza',
        contextScenario: 'Descreva a quietude primordial de uma floresta intocada antes do amanhecer.',
        modelAudioText: 'In the ancient cathedral of the primeval forest, silence is not an empty absence, but a luminous presence teeming with unseen life.',
        speechRate: 0.95,
        targetPhrase: 'In the ancient cathedral of the primeval forest, silence is not an empty absence, but a luminous presence teeming with unseen life.',
        phoneticFocus: '"ancient cathedral of the primeval forest" (/praɪˈmiːvl/) e "teeming with unseen life" (/ˈtiːmɪŋ/).',
        pronunciationTip: '"primeval" pronuncia-se /praɪ-MEE-vl/. Conduza a frase com reverência.',
        translation: 'Na antiga catedral da floresta primitiva, o silêncio não é uma ausência vazia, mas uma presença luminosa transbordando de vida oculta.',
        explanation: 'Redefinir o silêncio como presença luminosa exemplifica a prosa de alto teor fenomenológico.'
      },
      {
        id: 's-c2-ps-3',
        type: 'speaking_item',
        itemTitle: 'Aforismo sobre a Condição Humana',
        contextScenario: 'Conclua uma reflexão sobre a dignidade humana afirmando nossa busca perpétua por significado.',
        modelAudioText: 'We are fragile wanderers suspended between mystery and dust, whose only enduring nobility lies in our capacity for compassion and wonder.',
        speechRate: 0.95,
        targetPhrase: 'We are fragile wanderers suspended between mystery and dust, whose only enduring nobility lies in our capacity for compassion and wonder.',
        phoneticFocus: '"fragile wanderers suspended between mystery and dust" (/ˈwɑːndərərz/) e "compassion and wonder".',
        pronunciationTip: 'Respire pausadamente entre as orações. A palavra "wonder" deve soar aberta e luminosa.',
        translation: 'Somos caminhantes frágeis suspensos entre o mistério e a poeira, cuja única nobreza duradoura reside em nossa capacidade de compaixão e encantamento.',
        explanation: 'A linguagem aforística de fecho expressa o nível C2 de domínio humanista e estilístico pleno.'
      }
    ]
  },

  // --- 2. Treino de Sons (Sound Training) - 4 Atividades ---
  {
    id: 'speaking-c2-sound-acoustic-gemination',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c2',
    topic: 'Fonética Avançada: Geminação Consonântica na Fronteira de Palavras',
    title: 'Geminação Consonântica Acústica (That time, Black cat, Sub-branch)',
    description: 'Aprenda a sustentar consoantes idênticas em fronteiras de palavras sem emitir duas explosões nem fundir em consoante simples curta.',
    objective: 'Produzir a oclusão geminada estendida (dobro de duração acústica) sem quebra de ar entre os vocábulos.',
    instructions: 'Identifique no teste auditivo a duração da consoante e grave a sentença mantendo a sustentação geminada perfeita.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Laboratório de micro-fonética articulatória para precisão acústica profissional',
      focusSound: 'Geminação: quando uma palavra termina na mesma consoante que inicia a seguinte (ex: "that time", "unnamed", "sub-branch"), a oclusão é mantida por tempo estendido antes da soltura.',
      checklist: [
        'Não emitir duas explosões separadas: "that-uh time"',
        'Não encurtar para consoante simples: "thatime"',
        'Segurar a pressão articulatória por tempo dobrado e soltar apenas uma vez'
      ]
    },
    questions: [
      {
        id: 's-c2-ag-1',
        type: 'speaking_item',
        itemTitle: 'Geminação de Oclusiva Alveolar: That time',
        contextScenario: 'Frase que articula a junção de duas oclusivas /t/ adjacentes.',
        modelAudioText: 'At that time, international treaties were rarely ratified so expeditiously.',
        speechRate: 0.92,
        targetPhrase: 'At that time, international treaties were rarely ratified so expeditiously.',
        phoneticFocus: 'Geminação em "that time" (/ðætːaɪm/ - retenção prolongada do /t/).',
        pronunciationTip: 'Toque a ponta da língua atrás dos dentes superiores no final de "that" e segure a pressão antes de soltar o "time".',
        translation: 'Naquela época, tratados internacionais raramente eram ratificados de forma tão expedita.',
        explanation: 'A geminação de /t/ dura aproximadamente o dobro do tempo de uma oclusiva simples.',
        perceptionQuestion: {
          questionText: 'Como as palavras "that time" foram articuladas na fronteira consonântica?',
          audioText: 'that time',
          options: [
            { id: 'A', text: 'Com sustentação estendida da oclusão na língua e uma única soltura de ar (/ðætːaɪm/)' },
            { id: 'B', text: 'Com duas explosões separadas e uma vogal no meio: "that-i-time"' },
            { id: 'C', text: 'Omitindo a palavra "that"' },
            { id: 'D', text: 'Como uma consoante simples curta idêntica a "da-time"' }
          ],
          correctOptionId: 'A',
          explanation: 'Ocorre a geminação acústica com fechamento prolongado e soltura única.'
        }
      },
      {
        id: 's-c2-ag-2',
        type: 'speaking_item',
        itemTitle: 'Geminação de Oclusiva Bilabial: Sub-branch',
        contextScenario: 'Frase institucional com duas consoantes bilabiais sonoras /b/ contíguas.',
        modelAudioText: 'The regional sub-branch coordinates maritime logistics for the archipelago.',
        speechRate: 0.92,
        targetPhrase: 'The regional sub-branch coordinates maritime logistics for the archipelago.',
        phoneticFocus: 'Geminação em "sub-branch" (/sʌbːræntʃ/ - lábios fechados pelo dobro do tempo).',
        pronunciationTip: 'Feche os lábios no final de "sub" e mantenha a sonoridade das cordas vocais antes de soltar o "branch".',
        translation: 'A sub-sucursal regional coordena a logística marítima para o arquipélago.',
        explanation: 'Manter os lábios selados sem adicionar vogal parasita evita desvios típicos de sotaque estrangeiro.',
        perceptionQuestion: {
          questionText: 'Na expressão "sub-branch", quantos movimentos de abertura labial ocorrem entre as duas partes?',
          audioText: 'sub-branch',
          options: [
            { id: 'A', text: 'Apenas um movimento de abertura após uma retenção prolongada' },
            { id: 'B', text: 'Dois movimentos separados com um espaço de silêncio' },
            { id: 'C', text: 'Três movimentos' },
            { id: 'D', text: 'Os lábios não se tocam' }
          ],
          correctOptionId: 'A',
          explanation: 'Os lábios se fecham em "sub" e abrem apenas na transição para o "r" de "branch".'
        }
      },
      {
        id: 's-c2-ag-3',
        type: 'speaking_item',
        itemTitle: 'Geminação Nasal: Unnamed hero',
        contextScenario: 'Frase jornalística com junção das nasais alveolares /n/ em "unnamed".',
        modelAudioText: 'An unnamed official leaked the confidential environmental memorandum.',
        speechRate: 0.92,
        targetPhrase: 'An unnamed official leaked the confidential environmental memorandum.',
        phoneticFocus: 'Geminação nasal em "unnamed" (/ʌnˈneɪmd/).',
        pronunciationTip: 'Sustente o som nasal de /n/ por mais tempo: "un-named". Não engula o prefixo "un-".',
        translation: 'Uma autoridade não identificada vazou o memorando ambiental confidencial.',
        explanation: 'Encurtar "unnamed" para "named" inverte catastroficamente o sentido da frase de positivo para negativo.',
        perceptionQuestion: {
          questionText: 'Qual é a diferença acústica entre "unnamed" (não nomeado) e "named" (nomeado)?',
          audioText: 'unnamed',
          options: [
            { id: 'A', text: 'O som nasal de /n/ em "unnamed" é sustentado pelo dobro do tempo devido à junção do prefixo' },
            { id: 'B', text: 'São exatamente idênticas' },
            { id: 'C', text: 'A palavra "unnamed" termina com som de "s"' },
            { id: 'D', text: 'Não há diferença audível' }
          ],
          correctOptionId: 'A',
          explanation: 'A geminação morfológica em "unnamed" prolonga a ressonância nasal de /n/.'
        }
      }
    ]
  },
  {
    id: 'speaking-c2-sound-intonation-microglides',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c2',
    topic: 'Prosódia Emocional: Micro-Glides e Coloração Tonal',
    title: 'Micro-Variações Tonais (Micro-Glides) e Coloração Emocional da Voz',
    description: 'Aprenda a modular micro-curvas de frequência fundamental para expressar tolerância resignada, espanto sutil ou desprezo frio.',
    objective: 'Manipular a modulação de pitch microtonal para conferir camadas complexas de atitude à mesma frase.',
    instructions: 'Ouça as micro-variações no áudio, identifique o sentimento codificado e reproduza a frase com a mesma nuance.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Treinamento de controle tonal avançado para diplomatas e oradores internacionais',
      checklist: [
        'Modulação de pitch suave dentro da própria vogal tônica',
        'Expressão de condescendência polida através de tom descendente prolongado',
        'Controle preciso de dinâmica de volume sem estridência'
      ]
    },
    questions: [
      {
        id: 's-c2-mg-1',
        type: 'speaking_item',
        itemTitle: 'Micro-Glide: Tolerância Resignada (Weary Tolerance)',
        contextScenario: 'Responda a uma desculpa esfarrapada de um colega demonstrando que você já esperava a falha.',
        modelAudioText: 'I suppose we can overlook the delay just this once, if you insist.',
        speechRate: 0.92,
        targetPhrase: 'I suppose we can overlook the delay just this once, if you insist.',
        phoneticFocus: 'Micro-glide descendente vagaroso em "suppose" (/səˈpoʊz/) e em "once".',
        pronunciationTip: 'Deixe a voz deslizar lentamente para baixo em "suppose". Isso sinaliza cansaço resignado sem grosseria.',
        translation: 'Suponho que possamos relevar o atraso só desta vez, se você insiste.',
        explanation: 'O tom de tolerância cansada comunica descontentamento sutil sem entrar em confronto aberto.',
        perceptionQuestion: {
          questionText: 'Qual atitude psicológica o tom de voz transmite no áudio?',
          audioText: 'I suppose we can overlook the delay just this once, if you insist.',
          options: [
            { id: 'A', text: 'Tolerância resignada e cansaço perante uma desculpa previsível' },
            { id: 'B', text: 'Alegria eufórica e celebração' },
            { id: 'C', text: 'Ameaça violenta e raiva incontrolável' },
            { id: 'D', text: 'Total ignorância sobre o que aconteceu' }
          ],
          correctOptionId: 'A',
          explanation: 'O deslizamento tonal lento para o registro grave denota resignação complacente.'
        }
      },
      {
        id: 's-c2-mg-2',
        type: 'speaking_item',
        itemTitle: 'Micro-Glide: Ceticismo Glacial (Subtle Scorn)',
        contextScenario: 'Comente a afirmação absurda de que um projeto desastroso foi um sucesso financeiro.',
        modelAudioText: 'How utterly fascinating that your internal audit reached that conclusion.',
        speechRate: 0.92,
        targetPhrase: 'How utterly fascinating that your internal audit reached that conclusion.',
        phoneticFocus: 'Contorno ascendente-descendente tenso em "fascinating" (/ˈfæsɪneɪtɪŋ/).',
        pronunciationTip: 'Fale "utterly fascinating" com tom perfeitamente plano e polido. A frieza da voz expõe o ceticismo demolidor.',
        translation: 'Que absolutamente fascinante que sua auditoria interna tenha chegado a essa conclusão.',
        explanation: 'O ceticismo glacial é o recurso britânico mais refinado para desmascarar falsidades sem perder a compostura.',
        perceptionQuestion: {
          questionText: 'O que o falante realmente pensa sobre a conclusão da auditoria?',
          audioText: 'How utterly fascinating that your internal audit reached that conclusion.',
          options: [
            { id: 'A', text: 'Ele considera a conclusão ridícula e inverossímil, apesar de usar a palavra "fascinating"' },
            { id: 'B', text: 'Ele está genuinamente encantado e pretende copiar o relatório' },
            { id: 'C', text: 'Ele não entendeu o que foi dito' },
            { id: 'D', text: 'Ele quer contratar os mesmos auditores' }
          ],
          correctOptionId: 'A',
          explanation: 'A modulação prosódica fria contraria o sentido literal da palavra "fascinating", configurando sarcasmo supremo.'
        }
      },
      {
        id: 's-c2-mg-3',
        type: 'speaking_item',
        itemTitle: 'Micro-Glide: Reverência Sublime (Sublime Awe)',
        contextScenario: 'Comente a visão estarrecedora da aurora boreal no círculo polar ártico.',
        modelAudioText: 'The sheer luminous immensity of the polar night leaves one entirely speechless.',
        speechRate: 0.92,
        targetPhrase: 'The sheer luminous immensity of the polar night leaves one entirely speechless.',
        phoneticFocus: 'Respiração profunda e elevação melódica sustentada em "luminous immensity".',
        pronunciationTip: 'Projete uma voz suave e cheia de ar em "luminous immensity". Conclua em um sussurro controlado em "speechless".',
        translation: 'A pura imensidão luminosa da noite polar deixa a pessoa inteiramente sem palavras.',
        explanation: 'A respiração e a ressonância ampla transmitem o arrebatamento diante do sublime.'
        ,
        perceptionQuestion: {
          questionText: 'Como a voz expressa o sentimento de arrebatamento sublime perante a natureza?',
          audioText: 'leaves one entirely speechless',
          options: [
            { id: 'A', text: 'Com ressonância suave, fôlego expandido e desaceleração contemplativa' },
            { id: 'B', text: 'Com gritos estridentes e ritmo acelerado' },
            { id: 'C', text: 'Com risadas histéricas' },
            { id: 'D', text: 'Com monotonia burocrática' }
          ],
          correctOptionId: 'A',
          explanation: 'A desaceleração e a suavidade da emissão vocal codificam o estado contemplativo de deslumbramento.'
        }
      }
    ]
  },
  {
    id: 'speaking-c2-sound-vocal-tract-resonance',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c2',
    topic: 'Fisiologia Articulatória: Postura do Trato Vocal e Ressonância Faríngea',
    title: 'Postura do Trato Vocal, Altura Laríngea e Ressonância Culta',
    description: 'Aprenda a relaxar a mandíbula e estabilizar a laringe em posição baixa neutra para adquirir o timbre encorpado nativo.',
    objective: 'Ampliar o espaço faríngeo interno eliminando a nasalidade indesejada e o estrangulamento laríngeo na fala formal.',
    instructions: 'Observe no teste auditivo a ressonância torácica e reproduza a frase utilizando o espaço interno da faringe.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica de projeção vocal e fisiologia da fala pública avançada',
      focusSound: 'A postura do trato vocal do inglês culto requer o abaixamento suave da laringe e elevação do palato mole (espaço de bocejo contido), gerando timbre escuro e aveludado.',
      checklist: [
        'Sensação interna de início de bocejo para abrir a garganta',
        'Eliminação de ressonância nasal em vogais orais',
        'Projeção para frente com lábios ativos e mandíbula solta'
      ]
    },
    questions: [
      {
        id: 's-c2-vr-1',
        type: 'speaking_item',
        itemTitle: 'Ressonância Faríngea Profunda: Architecture and Monument',
        contextScenario: 'Frase que explora vogais abertas posteriores ressonantes.',
        modelAudioText: 'The classical architecture of the monument commands solemn contemplation.',
        speechRate: 0.92,
        targetPhrase: 'The classical architecture of the monument commands solemn contemplation.',
        phoneticFocus: 'Ressonância aberta em "architecture" (/ˈɑːrkɪtektʃər/) e "monument" (/ˈmɑːnjumənt/).',
        pronunciationTip: 'Abra a garganta como se estivesse segurando um ovo quente no fundo da boca. Sinta o peito vibrar.',
        translation: 'A arquitetura clássica do monumento inspira contemplação solene.',
        explanation: 'O espaço faríngeo ampliado é o que confere a autoridade vocal típica de oradores nativos de prestígio.',
        perceptionQuestion: {
          questionText: 'Qual característica acústica distingue a projeção vocal no áudio?',
          audioText: 'commands solemn contemplation',
          options: [
            { id: 'A', text: 'Timbre encorpado e ressonante gerado por trato vocal aberto sem nasalidade' },
            { id: 'B', text: 'Voz fina e anasalada na garganta' },
            { id: 'C', text: 'Falsete agudo' },
            { id: 'D', text: 'Voz sussurrada inaudível' }
          ],
          correctOptionId: 'A',
          explanation: 'A ressonância faríngea posterior produz o timbre aveludado e solene do inglês formal culto.'
        }
      },
      {
        id: 's-c2-vr-2',
        type: 'speaking_item',
        itemTitle: 'Eliminação de Nasalização Vocálica: Plant and Demand',
        contextScenario: 'Frase com vogais orais seguidas de consoantes nasais que devem permanecer puras sem nasalização precoce.',
        modelAudioText: 'The environmental plant will not expand without a formal demand.',
        speechRate: 0.92,
        targetPhrase: 'The environmental plant will not expand without a formal demand.',
        phoneticFocus: 'Vogal oral pura antes de consoante nasal em "plant" (/plænt/ ou /plɑːnt/) e "demand" (/dɪˈmænd/).',
        pronunciationTip: 'Em português dizemos "plã". Em inglês a vogal /æ/ é 100% oral e só vira nasal quando a língua toca o dente no /n/.',
        translation: 'A usina ambiental não irá expandir sem uma demanda formal.',
        explanation: 'Falantes de português tendem a nasalizar a vogal antes da consoante nasal; mantê-la oral confere clareza nativa.',
        perceptionQuestion: {
          questionText: 'Como deve ser pronunciada a vogal na palavra "demand" antes do som de "m" e "n"?',
          audioText: 'demand',
          options: [
            { id: 'A', text: 'Como vogal oral límpida, com o ar saindo exclusivamente pela boca até o momento do toque consonantal' },
            { id: 'B', text: 'Como uma vogal totalmente anasalada pelo nariz ("demãnd")' },
            { id: 'C', text: 'Com som de "u"' },
            { id: 'D', text: 'Omitindo a consoante final' }
          ],
          correctOptionId: 'A',
          explanation: 'No inglês padrão, as vogais antes de nasais preservam sua qualidade oral sem nasalização antecipada.'
        }
      },
      {
        id: 's-c2-vr-3',
        type: 'speaking_item',
        itemTitle: 'Abertura Posterior em Consoantes Velarizadas: All and Ball',
        contextScenario: 'Frase com vogal posterior aberta /ɔː/ combinada com Dark L velar.',
        modelAudioText: 'All dignitaries attended the inaugural ball in the great hall.',
        speechRate: 0.92,
        targetPhrase: 'All dignitaries attended the inaugural ball in the great hall.',
        phoneticFocus: 'Controle de ressonância posterior em "all" (/ɔːl/), "ball" (/bɔːl/) e "hall" (/hɔːl/).',
        pronunciationTip: 'Mantenha a mandíbula relaxada para baixo e a laringe estável. A boca fica em formato vertical oval.',
        translation: 'Todos os dignitários compareceram ao baile inaugural no grande salão.',
        explanation: 'A estabilidade vertical da mandíbula é a base anatômica da nobreza oratória da língua inglesa.',
        perceptionQuestion: {
          questionText: 'Qual é o formato labial ideal para a emissão correta da vogal /ɔː/ em "hall" e "ball"?',
          audioText: 'inaugural ball in the great hall',
          options: [
            { id: 'A', text: 'Abertura vertical ovalada e relaxada com mandíbula baixa' },
            { id: 'B', text: 'Lábios esticados horizontalmente como um sorriso' },
            { id: 'C', text: 'Boca totalmente fechada' },
            { id: 'D', text: 'Lábios mordidos pelos dentes' }
          ],
          correctOptionId: 'A',
          explanation: 'A vogal posterior /ɔː/ exige abertura vertical e espaço interno na cavidade bucal.'
        }
      }
    ]
  },
  {
    id: 'speaking-c2-sound-isochrony-metrics',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'c2',
    topic: 'Métrica Isochrônica & Ritmo Acentual de Maestria',
    title: 'Isocronia Rítmica e Estrutura de Pés Métricos no Inglês Falado',
    description: 'Aprenda a comprimir sílabas átonas entre batidas tônicas para manter o compasso rítmico perfeitamente isocrônico.',
    objective: 'Dominar o ritmo baseado em acentuação (stress-timed rhythm), onde o tempo entre batidas tônicas é constante independentemente do número de sílabas átonas.',
    instructions: 'Identifique o padrão métrico de pés acentuais no teste auditivo e grave a frase modelo com o metrônomo rítmico perfeito.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Treinamento de prosódia clássica e métrica poética avançada (iambic and trochaic cadence)',
      focusSound: 'Isocronia: sílabas átonas intermediárias encolhem e aceleram no tempo para que as tônicas ocorram em intervalos regulares.',
      checklist: [
        'Manter intervalo de tempo constante entre as palavras acentuadas',
        'Comprimir e relaxar as palavras estruturais intermediárias sem perder inteligibilidade',
        'Fluência contínua e hipnótica típica de grandes atores e oradores clássicos'
      ]
    },
    questions: [
      {
        id: 's-c2-im-1',
        type: 'speaking_item',
        itemTitle: 'Isocronia: Compressão de Sílabas Átonas',
        contextScenario: 'Frase que expande o número de sílabas entre os mesmos quatro pulsos acentuais.',
        modelAudioText: 'CATS CHASE MICE / The CATS have been CHASING the MICE.',
        speechRate: 0.94,
        targetPhrase: 'The CATS have been CHASING the MICE.',
        phoneticFocus: 'Compressão de "have been" e "-ing the" sem alterar a distância rítmica entre CATS, CHAS- e MICE.',
        pronunciationTip: 'Bata os dedos na mesa nas palavras CATS, CHAS- e MICE como um metrônomo. O tempo total é quase idêntico.',
        translation: 'Os gatos estiveram perseguindo os ratos.',
        explanation: 'O ritmo do inglês é isocrônico (stress-timed): sílabas átonas são comprimidas no tempo.',
        perceptionQuestion: {
          questionText: 'Por que a frase "The CATS have been CHASING the MICE" leva quase o mesmo tempo para ser dita que "CATS CHASE MICE"?',
          audioText: 'The CATS have been CHASING the MICE',
          options: [
            { id: 'A', text: 'Porque o inglês é uma língua de ritmo acentual (stress-timed), onde sílabas átonas se comprimem entre as batidas fortes' },
            { id: 'B', text: 'Porque o locutor cortou metade das palavras na edição' },
            { id: 'C', text: 'Porque o inglês não possui vogais átonas' },
            { id: 'D', text: 'Trata-se de uma anomalia gramatical' }
          ],
          correctOptionId: 'A',
          explanation: 'No ritmo stress-timed, a duração depende do número de pés tônicos, comprimindo sílabas intermediárias.'
        }
      },
      {
        id: 's-c2-im-2',
        type: 'speaking_item',
        itemTitle: 'Cadência Iâmbica Clássica: To strive, to seek...',
        contextScenario: 'Famoso verso aforístico do poema Ulysses de Tennyson recitado em cadência nobre.',
        modelAudioText: 'To strive, to seek, to find, and not to yield.',
        speechRate: 0.92,
        targetPhrase: 'To strive, to seek, to find, and not to yield.',
        phoneticFocus: 'Padrão iâmbico (átona-TÔNICA) /tə ˈstraɪv tə ˈsiːk tə ˈfaɪnd ənd ˈnɑːt tə ˈjiːld/.',
        pronunciationTip: 'Sinta o pulso iâmbico: ti-DUM ti-DUM ti-DUM ti-DUM ti-DUM. Projete a voz com heroísmo lírico.',
        translation: 'Lutar, buscar, achar e não ceder.',
        explanation: 'O pentâmetro iâmbico é a espinha dorsal de séculos de literatura e oratória na língua inglesa.',
        perceptionQuestion: {
          questionText: 'Qual é o padrão rítmico do verso "To strive, to seek, to find, and not to yield"?',
          audioText: 'To strive, to seek, to find, and not to yield',
          options: [
            { id: 'A', text: 'Cadência iâmbica: alternância regular de sílaba átona fraca seguida de sílaba tônica forte' },
            { id: 'B', text: 'Todas as sílabas com força igual (silábico puro)' },
            { id: 'C', text: 'Apenas a primeira sílaba é forte' },
            { id: 'D', text: 'Ritmo aleatório' }
          ],
          correctOptionId: 'A',
          explanation: 'O ritmo iâmbico (ti-DUM) dá cadência poética e solenidade clássica ao verso.'
        }
      },
      {
        id: 's-c2-im-3',
        type: 'speaking_item',
        itemTitle: 'Fluência em Encontros Consonantais Quádruplos: Twelfths and Prompts',
        contextScenario: 'Frase que desafia a musculatura bucal com os encontros consonantais mais densos da língua inglesa.',
        modelAudioText: 'The committee reviewed five twelfths of the artistic prompts yesterday.',
        speechRate: 0.92,
        targetPhrase: 'The committee reviewed five twelfths of the artistic prompts yesterday.',
        phoneticFocus: '"twelfths" (/twɛlfθs/ - quatro consoantes em sequência) e "prompts" (/prɑːmpts/).',
        pronunciationTip: 'Em "twelfths", articule o /l/, o /f/, o /θ/ e o /s/ sem adicionar vogais parasitas. Pratique devagar.',
        translation: 'O comitê revisou cinco doze avos dos temas artísticos ontem.',
        explanation: 'Dominar encontros consonantais complexos como /lfθs/ e /mpts/ sem truncar é a prova de fogo da dicção C2.',
        perceptionQuestion: {
          questionText: 'Quantas consoantes sucessivas sem nenhuma vogal intermediária compõem o final da palavra "twelfths" (/twɛlfθs/)?',
          audioText: 'twelfths',
          options: [
            { id: 'A', text: 'Quatro consoantes: /l/, /f/, /θ/ e /s/' },
            { id: 'B', text: 'Apenas duas consoantes' },
            { id: 'C', text: 'Três consoantes' },
            { id: 'D', text: 'Nenhuma consoante' }
          ],
          correctOptionId: 'A',
          explanation: 'A palavra "twelfths" possui um dos maiores encontros consonantais finais do inglês: /lfθs/.'
        }
      }
    ]
  },

  // --- 3. Respostas Rápidas (Rapid Response) - 4 Atividades ---
  {
    id: 'speaking-c2-rapid-philosophical-paradox',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c2',
    topic: 'Debate Intelectual de Fronteira & Filosofia',
    title: 'Respondendo a Paradoxos Filosóficos ao Vivo',
    description: 'Responda espontaneamente a provocações epistemológicas formuladas por plateias acadêmicas em simpósios internacionais.',
    objective: 'Desconstruir falsas dicotomias com velocidade mental, erudição serena e precisão conceitual instantânea.',
    instructions: 'Ouça o paradoxo desafiador e formule uma resposta que transcenda a contradição aparente.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Sessão plenária de perguntas e respostas em congresso mundial de ética contemporânea',
      checklist: [
        'Desconstrução imediata da premissa binária da pergunta',
        'Introdução de uma distinção ontológica ou conceitual refinada',
        'Fechamento sintético com clareza aforística'
      ]
    },
    questions: [
      {
        id: 's-c2-pp-1',
        type: 'speaking_item',
        itemTitle: 'Paradoxo: Determinismo vs Livre-Arbítrio',
        contextScenario: 'Um pesquisador afirma que a neurociência provou que o livre-arbítrio é uma ilusão molecular e pergunta por que punir crimes.',
        modelAudioText: 'If neurochemistry dictates every neuronal firing before conscious deliberation occurs, does not moral responsibility become an unscientific fiction?',
        speechRate: 0.95,
        targetPhrase: 'To conflate sub-personal neurochemical mechanisms with personal moral agency is a category error; responsibility operates not at the synaptic level, but within communicative normative communities.',
        sampleResponses: [
          'To conflate sub-personal neurochemical mechanisms with personal moral agency is a category error; responsibility operates not at the synaptic level, but within communicative normative communities.',
          'Physical determinism does not abolish ethics; it merely reminds us that moral accountability is an intersubjective social practice rather than a metaphysical substance.',
          'Tracing the physical substrate of thought does not invalidate the validity of reasons, just as analyzing the chemistry of ink does not explain the meaning of a poem.'
        ],
        pronunciationTip: '"category error... communicative normative communities" (/ˈkætəɡɔːri ˈerər/).',
        translation: 'Se a neuroquímica dita cada disparo neuronal antes de qualquer deliberação consciente, a responsabilidade moral não se torna uma ficção anticientífica?',
        explanation: 'Denunciar o erro de categoria (Gilbert Ryle) entre o nível sináptico e o nível social de normas desmantela o determinismo vulgar com brilhantismo.'
      },
      {
        id: 's-c2-pp-2',
        type: 'speaking_item',
        itemTitle: 'Paradoxo: A Tolerância com os Intolerantes',
        contextScenario: 'Um participante pergunta se uma sociedade verdadeiramente livre deve conceder liberdade irrestrita àqueles que pregam a destruição da liberdade.',
        modelAudioText: 'Does not a liberal democracy betray its foundational ethos the moment it outlaws movements that seek to dismantle democratic liberties?',
        speechRate: 0.95,
        targetPhrase: 'Tolerance is not a suicidal pact of non-resistance; it is an unwritten civic covenant whose protections are strictly conditioned on mutual reciprocity.',
        sampleResponses: [
          'Tolerance is not a suicidal pact of non-resistance; it is an unwritten civic covenant whose protections are strictly conditioned on mutual reciprocity.',
          'As Karl Popper demonstrated, boundless tolerance must inevitably extinguish itself; defending open society necessitates drawing unyielding boundaries against bad-faith actors.',
          'Democracy does not forfeit its soul by defending its institutional parameters; absolute non-interference in the face of tyranny is complicity, not liberty.'
        ],
        pronunciationTip: '"Tolerance is not a suicidal pact of non-resistance" (/ˈsuːɪsaɪdl pækt/).',
        translation: 'Uma democracia liberal não trai seu ethos fundacional no momento em que proíbe movimentos que buscam desmantelar as próprias liberdades democráticas?',
        explanation: 'Articular o paradoxo da tolerância de Popper definindo a tolerância como um pacto de reciprocidade resolve a questão com firmeza.'
      },
      {
        id: 's-c2-pp-3',
        type: 'speaking_item',
        itemTitle: 'Paradoxo: O Relativismo Cultural perante Direitos Universais',
        contextScenario: 'Um antropólogo questiona se os Direitos Humanos não seriam uma imposição etnocêntrica ocidental sobre culturas tradicionais.',
        modelAudioText: 'Is the universal declaration of human rights not merely an exercise in Western cultural imperialism masquerading as transcendental morality?',
        speechRate: 0.95,
        targetPhrase: 'While Western historical frameworks framed the vocabulary, the fundamental yearning to be protected from arbitrary state torture and degradation is universally human, not culturally proprietary.',
        sampleResponses: [
          'While Western historical frameworks framed the vocabulary, the fundamental yearning to be protected from arbitrary state torture and degradation is universally human, not culturally proprietary.',
          'Cultural diversity must be cherished, but cultural relativism becomes grotesque when weaponized by ruling elites to rationalize the subjugation of vulnerable individuals.',
          'Human dignity transcends regional provenance; the impulse to resist systemic oppression is voiced as fiercely by grassroots dissidents in the Global South as anywhere on earth.'
        ],
        pronunciationTip: '"culturally proprietary" (/ˈkʌltʃərəli prəˈpraɪəteri/) e "arbitrary state torture" (/ˈɑːrbɪtreri/).',
        translation: 'A declaração universal dos direitos humanos não seria apenas um exercício de imperialismo cultural ocidental fantasiado de moralidade transcendental?',
        explanation: 'Distinguir a formulação textual histórica do anseio universal por dignidade contra a opressão preserva a universalidade ética.'
      }
    ]
  },
  {
    id: 'speaking-c2-rapid-spontaneous-eulogy',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c2',
    topic: 'Oratória Fúnebre & Alta Dignidade Humana',
    title: 'Pronunciando Homenagens Póstumas e Tributos Espontâneos',
    description: 'Profira um tributo póstumo comovente com compostura e poesia fúnebre quando convidado a falar de surpresa em cerimônia solene.',
    objective: 'Honrar a memória de um líder comunitário ou cientista com palavras comoventes, ritmo nobre e contenção emocional.',
    instructions: 'Ouça o convite solene da presidência da sessão e improvise um tributo de dignidade impecável.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Cerimônia fúnebre de homenagem a um mentor intelectual e cívico',
      checklist: [
        'Acolhimento da dor compartilhada com serenidade',
        'Exaltação do exemplo de integridade ética do homenageado',
        'Consolação dos presentes através do dever de perpetuar seu legado'
      ]
    },
    questions: [
      {
        id: 's-c2-se-1',
        type: 'speaking_item',
        itemTitle: 'Tributo: O Mestre e Educador',
        contextScenario: 'O reitor convida você a falar em nome dos ex-alunos sobre um professor lendário que faleceu subitamente.',
        modelAudioText: 'Would you care to offer a few spontaneous words on behalf of the graduate body concerning Professor Sterling’s passing?',
        speechRate: 0.95,
        targetPhrase: 'Professor Sterling did not merely instruct our intellects; he awakened our moral conscience. His greatest monument is not carved in campus granite, but engraved in the integrity of every student he touched.',
        sampleResponses: [
          'Professor Sterling did not merely instruct our intellects; he awakened our moral conscience. His greatest monument is not carved in campus granite, but engraved in the integrity of every student he touched.',
          'To know him was to witness intellect purified by humility. He taught us to love the search for truth more than the comfort of dogma, and that flame will not be extinguished.',
          'In an era addicted to cynicism, he was an apostle of quiet intellectual grace. We mourn his physical departure, yet we celebrate the indelible light his teachings leave behind.'
        ],
        pronunciationTip: '"engraved in the integrity of every student" (/ɪnˈɡreɪvd/). Modulação quente e reverente.',
        translation: 'O senhor gostaria de proferir algumas palavras espontâneas em nome dos pós-graduandos a respeito do falecimento do Professor Sterling?',
        explanation: 'Lembrar que o maior monumento do mestre está na alma dos alunos ("engraved in integrity") é o ápice da oratória memorial.'
      },
      {
        id: 's-c2-se-2',
        type: 'speaking_item',
        itemTitle: 'Tributo: O Líder Humanitário Comunitário',
        contextScenario: 'A comunidade reúne-se em vigília por uma médica voluntária que dedicou a vida a áreas periféricas desassistidas.',
        modelAudioText: 'Dr. Evans lived with such quiet selflessness. How can we best encapsulate her contribution to our city?',
        speechRate: 0.95,
        targetPhrase: 'Elena never sought the transient spotlight of public acclaim; she quietly entered broken places with gentle hands, transforming despair into endurance through daily acts of consecrated service.',
        sampleResponses: [
          'Elena never sought the transient spotlight of public acclaim; she quietly entered broken places with gentle hands, transforming despair into endurance through daily acts of consecrated service.',
          'Her life was a luminous rebuke to indifference. She proved that one courageous individual, armed only with fierce compassion, can anchor the dignity of an entire community.',
          'We do not honor her by weeping in static despair, but by taking up the stethoscope of her compassion and continuing her unfinished ministry of healing.'
        ],
        pronunciationTip: '"transforming despair into endurance through daily acts of consecrated service" (/ˈkɑːnsɪkreɪtɪd/).',
        translation: 'A Dra. Evans viveu com tanta abnegação silenciosa. Como podemos resumir da melhor forma sua contribuição para a nossa cidade?',
        explanation: 'Destacar o serviço longe dos holofotes ("transient spotlight of public acclaim") enaltece a santidade cívica da homenageada.'
      },
      {
        id: 's-c2-se-3',
        type: 'speaking_item',
        itemTitle: 'Tributo: O Estadista Pacificador',
        contextScenario: 'O mediador internacional de um tratado histórico de reconciliação encerra sua trajetória terrena.',
        modelAudioText: 'What was the foundational virtue that allowed Ambassador Harris to bridge decades of bitter sectarian conflict?',
        speechRate: 0.95,
        targetPhrase: 'Arthur possessed that rarest of statesmanship virtues: the moral imagination to perceive the shared humanity in his fiercest adversaries without ever compromising the bedrock truth of justice.',
        sampleResponses: [
          'Arthur possessed that rarest of statesmanship virtues: the moral imagination to perceive the shared humanity in his fiercest adversaries without ever compromising the bedrock truth of justice.',
          'He knew that peace is not the mere absence of artillery fire, but the patient, agonizing labor of replacing inherited hatred with mutual accountability.',
          'Where others saw insurmountable historical grievances, he discovered the fragile embers of shared destiny. His legacy challenges us to pursue reconciliation with equal courage.'
        ],
        pronunciationTip: '"moral imagination to perceive shared humanity" (/ˈmɔːrəl ɪˌmædʒɪˈneɪʃn/).',
        translation: 'Qual foi a virtude fundacional que permitiu ao Embaixador Harris construir pontes sobre décadas de conflito sectário sangrento?',
        explanation: 'O conceito de "moral imagination" (John Paul Lederach) captura a genialidade dos pacificadores com densidade poética.'
      }
    ]
  },
  {
    id: 'speaking-c2-rapid-televised-debate-reframe',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c2',
    topic: 'Comunicação Midiática & Geopolítica Global',
    title: 'Ressignificando Provocações em Debates Televisados ao Vivo',
    description: 'Neutralize ataques retóricos e polarizações simplistas em entrevistas internacionais ao vivo com réplicas ágeis e profundas.',
    objective: 'Rejeitar a moldura hostil do entrevistador, reposicionar a questão em termos éticos mais amplos e sustentar autoridade.',
    instructions: 'Ouça a pergunta capciosa do âncora internacional e formule um reposicionamento elegante e contundente.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Entrevista ao vivo em canal de notícias global em horário nobre',
      checklist: [
        'Descarte elegante da dicotomia falsa imposta pelo entrevistador',
        'Reposicionamento da narrativa em princípios de interesse público universal',
        'Voz inabalável sem irritação ou pressa defensiva'
      ]
    },
    questions: [
      {
        id: 's-c2-tr-1',
        type: 'speaking_item',
        itemTitle: 'Provocação: Nacionalismo vs Ajuda Internacional',
        contextScenario: 'O apresentador pergunta se enviar ajuda alimentar ao exterior não é trair os cidadãos pobres do próprio país.',
        modelAudioText: 'Minister, is it not an insult to your own struggling domestic taxpayers to send hundreds of millions in overseas aid to foreign crises?',
        speechRate: 0.95,
        targetPhrase: 'That framing presents a false and dangerous zero-sum game. Investing in global epidemiological and food security is not foreign charity; it is enlightened self-interest that protects our own borders from catastrophic contagion and economic collapse.',
        sampleResponses: [
          'That framing presents a false and dangerous zero-sum game. Investing in global epidemiological and food security is not foreign charity; it is enlightened self-interest that protects our own borders from catastrophic contagion and economic collapse.',
          'A nation’s moral stature is not diminished by generosity; preventing humanitarian famine abroad stabilizes regional trade and directly safeguards domestic prosperity.',
          'We need not choose between helping our neighbors at home and preventing mass starvation abroad. A truly resilient nation possesses the capacity and the conscience to do both.'
        ],
        pronunciationTip: '"false and dangerous zero-sum game... enlightened self-interest" (/ˈzɪroʊ sʌm/ ... /ɪnˈlaɪtnd/).',
        translation: 'Ministro, não é um insulto aos seus próprios contribuintes endividados enviar centenas de milhões em ajuda humanitária para crises no exterior?',
        explanation: 'Enquadrar a ajuda externa como "enlightened self-interest" (interesse próprio esclarecido) desarma o populismo paroquial com sabedoria.'
      },
      {
        id: 's-c2-tr-2',
        type: 'speaking_item',
        itemTitle: 'Provocação: Acusação de Fraqueza Diplomática',
        contextScenario: 'O âncora insinua que negociar com um regime autoritário equivale a apaziguamento covarde.',
        modelAudioText: 'By sitting down at the negotiating table with an autocrat, are you not simply repeating the fatal historical mistake of naive appeasement?',
        speechRate: 0.95,
        targetPhrase: 'Diplomacy is not appeasement; it is the exhaustive, unyielding mobilization of statecraft to prevent the slaughter of young men and women on muddy battlefields. We negotiate from verified strength, not moral concession.',
        sampleResponses: [
          'Diplomacy is not appeasement; it is the exhaustive, unyielding mobilization of statecraft to prevent the slaughter of young men and women on muddy battlefields. We negotiate from verified strength, not moral concession.',
          'One does not make peace with friends; one negotiates with adversaries. Refusing to talk does not project strength—it merely abdicates historical responsibility to military slaughter.',
          'There is zero naivety in our posture. Our diplomatic engagement is coupled with verified enforcement sanctions and total military deterrence.'
        ],
        pronunciationTip: '"exhaustive, unyielding mobilization of statecraft" (/ˈsteɪtkræft/).',
        translation: 'Ao se sentar à mesa de negociações com um autocrata, o senhor não está simplesmente repetindo o erro histórico fatal do apaziguamento ingênuo?',
        explanation: 'Lembrar que a diplomacia é a arte de evitar carnificinas desnecessárias através da força institucional desmonta a provocação belicista.'
      },
      {
        id: 's-c2-tr-3',
        type: 'speaking_item',
        itemTitle: 'Provocação: O Custo da Transição Energética',
        contextScenario: 'O jornalista argumenta que leis ecológicas destroem empregos industriais e empobrecem os trabalhadores.',
        modelAudioText: 'Aren’t your ambitious carbon emission caps effectively sacrificing working-class manufacturing jobs at the altar of green ideology?',
        speechRate: 0.95,
        targetPhrase: 'What truly sacrifices manufacturing communities is clinging to obsolete twentieth-century fossil architectures while international competitors capture the global clean technology markets of the twenty-first century. This transition is an industrial modernization plan, not a sacrifice.',
        sampleResponses: [
          'What truly sacrifices manufacturing communities is clinging to obsolete twentieth-century fossil architectures while international competitors capture the global clean technology markets of the twenty-first century. This transition is an industrial modernization plan, not a sacrifice.',
          'The greatest economic catastrophe facing industrial families is unmitigated climate collapse and neglected innovation. Our policy retools traditional factories into high-wage clean energy powerhouses.',
          'Inaction is not a neutral economic policy; the costs of climate-induced supply chain collapse vastly outweigh the investments required to modernize our industrial manufacturing base.'
        ],
        pronunciationTip: '"clinging to obsolete twentieth-century fossil architectures" (/ˈɑːbsəliːt/).',
        translation: 'Suas metas ambiciosas de emissão de carbono não estão, na prática, sacrificando os empregos de fábrica da classe trabalhadora no altar da ideologia verde?',
        explanation: 'Inverter a acusação demonstrando que o verdadeiro sacrifício é manter tecnologias obsoletas reposiciona a transição como plano de liderança industrial.'
      }
    ]
  },
  {
    id: 'speaking-c2-rapid-personal-integrity-defense',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'c2',
    topic: 'Honra Pessoal & Dignidade Institucional',
    title: 'Respondendo a Difamações e Ataques à Integridade Pessoal',
    description: 'Responda a acusações de corrupção ou conflito de interesses com compostura esmagadora, fatos verificáveis e nobreza de espírito.',
    objective: 'Rechaçar calúnias sem descer ao nível do insulto, convidando a auditorias públicas e preservando a autoridade moral.',
    instructions: 'Ouça a insinuação desonesta do adversário e formule uma réplica de dignidade inquestionável.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Comitê de ética parlamentar ou assembleia pública de investidores',
      checklist: [
        'Tranquilidade absoluta sem traços de ansiedade defensiva',
        'Oferta aberta de verificação pericial independente irrestrita',
        'Condenação da difamação como expediente de desespero político'
      ]
    },
    questions: [
      {
        id: 's-c2-id-1',
        type: 'speaking_item',
        itemTitle: 'Insinuação: Enriquecimento Ilícito no Cargo',
        contextScenario: 'Um adversário político sugere que seu patrimônio pessoal cresceu de forma suspeita durante seu mandato público.',
        modelAudioText: 'Isn’t it remarkably convenient that your family real estate holdings expanded so dramatically while you oversaw municipal zoning approvals?',
        speechRate: 0.95,
        targetPhrase: 'Every single square foot of my family property was acquired decades prior to my public tenure, verified by exhaustive public tax filings; I welcome immediate, transparent scrutiny by independent prosecutors because the truth fears no sunlight.',
        sampleResponses: [
          'Every single square foot of my family property was acquired decades prior to my public tenure, verified by exhaustive public tax filings; I welcome immediate, transparent scrutiny by independent prosecutors because the truth fears no sunlight.',
          'My complete audited financial records have been publicly accessible on the ethics portal for seven years. Baseless insinuations cannot alter audited bank statements.',
          'When individuals lack substantive policy counter-arguments, they inevitably retreat into unsubstantiated character assassination. My public disclosures speak for themselves.'
        ],
        pronunciationTip: '"exhaustive public tax filings... truth fears no sunlight" (/ɪɡˈzɔːstɪv/).',
        translation: 'Não é notavelmente conveniente que o patrimônio imobiliário da sua família tenha se expandido tão dramaticamente enquanto o senhor fiscalizava as autorizações de zoneamento urbano?',
        explanation: 'Acolher a fiscalização com o aforismo "the truth fears no sunlight" destrói a calúnia com serenidade.'
      },
      {
        id: 's-c2-id-2',
        type: 'speaking_item',
        itemTitle: 'Insinuação: Conflito de Interesses com Antigos Empregadores',
        contextScenario: 'Um repórter insinua que uma decisão regulatória sua favoreceu a consultoria em que você trabalhou há uma década.',
        modelAudioText: 'How can the public trust your ruling when your former consulting firm represented the winning infrastructure bidder?',
        speechRate: 0.95,
        targetPhrase: 'I formally severed all financial, contractual, and advisory ties with that firm ten years ago, and I recused myself from initial procurement screening to ensure uncompromised institutional impartiality.',
        sampleResponses: [
          'I formally severed all financial, contractual, and advisory ties with that firm ten years ago, and I recused myself from initial procurement screening to ensure uncompromised institutional impartiality.',
          'Integrity is demonstrated by protocol: the contract was evaluated using blinded scoring criteria overseen by three independent international inspectors.',
          'My thirty-year record of unblemished civic service demonstrates unyielding allegiance to the public treasury, not to former corporate employers.'
        ],
        pronunciationTip: '"uncompromised institutional impartiality" (/ɪmˌpɑːrʃiˈæləti/).',
        translation: 'Como a população pode confiar em sua decisão quando sua antiga consultoria representou a empreiteira vencedora da licitação?',
        explanation: 'Comprovar que houve abstenção formal prévia (recusal) e avaliação às cegas anula a suspeita de favorecimento.'
      },
      {
        id: 's-c2-id-3',
        type: 'speaking_item',
        itemTitle: 'Insinuação: Covardia Política em Decisão Polêmica',
        contextScenario: 'Um opositor acusa você de ter vetado uma lei popular apenas por medo de perder prestígio em círculos de elite.',
        modelAudioText: 'You vetoed that bill because you lacked the spine to confront powerful corporate lobbyists, didn’t you?',
        speechRate: 0.95,
        targetPhrase: 'I vetoed that legislation because it was unconstitutional, legally flawed, and would have bankrupted our regional hospitals within eighteen months. Real courage is doing what preserves public safety even when it is politically unpopular.',
        sampleResponses: [
          'I vetoed that legislation because it was unconstitutional, legally flawed, and would have bankrupted our regional hospitals within eighteen months. Real courage is doing what preserves public safety even when it is politically unpopular.',
          'Panderers sign unexecutable bills for cheap applause; responsible leaders bear the brunt of public misunderstanding to prevent civic catastrophe.',
          'My veto was grounded in constitutional law and fiscal viability, not lobbyist pressure. I will never sacrifice the long-term health of our citizens for ephemeral popularity.'
        ],
        pronunciationTip: '"Real courage is doing what preserves public safety even when politically unpopular".',
        translation: 'O senhor vetou aquele projeto de lei porque lhe faltou coragem para peitar lobistas corporativos influentes, não foi?',
        explanation: 'Redefinir a coragem como a disposição de suportar incompreensão para salvar hospitais afirma liderança moral autêntica.'
      }
    ]
  },

  // --- 4. Fale em Situações Reais (Roleplay Situations) - 3 Atividades ---
  {
    id: 'speaking-c2-roleplay-peace-treaty',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'c2',
    topic: 'Diplomacia Internacional & Resolução de Conflitos',
    title: 'Simulação: Mediação de Tratado de Paz e Desmilitarização de Fronteira',
    description: 'Atue como diplomata plenipotenciário da ONU mediando a desescalada militar e a delimitação de um corredor humanitário entre duas potências regionais.',
    objective: 'Alinhar salvaguardas de segurança, recuo simultâneo de tropas e observadores neutros com terminologia de direito internacional humanitário.',
    instructions: 'Acompanhe as exigências do negociador adversário, defenda o cessar-fogo com imparcialidade e consolide a assinatura da minuta de paz.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Palácio de Conferências de Genebra em rodada confidencial de negociação de cessar-fogo',
      partnerRole: 'Enviado Especial da Potência Vizinha (General Kozlov)',
      userRole: 'Mediador Plenipotenciário das Nações Unidas (Você)',
      checklist: [
        'Desmilitarização bilateral simultânea e verificável de vinte quilômetros',
        'Garantia de corredor humanitário sob custódia exclusiva de forças de paz neutras',
        'Mecanismo de resolução de violações por telemetria de satélite independente'
      ]
    },
    questions: [
      {
        id: 's-c2-pt-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Propondo o Recuo Simultâneo de Artilharia Pesada',
        contextScenario: 'O General Kozlov exige que a outra parte retire suas tropas antes que seu país sequer cogite recuar uma única bateria de artilharia.',
        modelAudioText: 'Our high command will not order a single mechanized unit to withdraw until the separatists completely disarm and dismantle their fortifications along the riverbank.',
        speechRate: 0.95,
        targetPhrase: 'General Kozlov, unilateral pre-conditions have stalled these deliberations for six months; international mediation requires synchronized, phased withdrawal monitored by third-party telemetry.',
        sampleResponses: [
          'General Kozlov, unilateral pre-conditions have stalled these deliberations for six months; international mediation requires synchronized, phased withdrawal monitored by third-party telemetry.',
          'Demanding unilateral capitulation is not a peace negotiation; we must institute an hour-by-hour reciprocal disengagement protocol under blue-helmet observation.',
          'No sovereign entity accepts unilateral vulnerability under artillery sightlines. We propose a simultaneous ten-kilometer pullback verified by neutral satellite oversight.'
        ],
        pronunciationTip: '"synchronized, phased withdrawal monitored by third-party telemetry" (/ˈsɪŋkrənaɪzd feɪzd wɪðˈdrɔːəl/).',
        translation: 'Nosso alto-comando não ordenará a retirada de uma única unidade mecanizada até que os separatistas desarmem totalmente e desmantelem suas fortificações na margem do rio.',
        explanation: 'Substituir exigências unilaterais por recuo recíproco sincronizado ("synchronized, phased withdrawal") é a fórmula diplomática clássica.'
      },
      {
        id: 's-c2-pt-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Estabelecendo o Corredor Humanitário Neutro',
        contextScenario: 'Kozlov insiste que suas forças militares fiscalizem pessoalmente os comboios de alimentos e medicamentos para civis sitiados.',
        modelAudioText: 'If a humanitarian corridor is opened, our armed forces must retain the sovereign authority to inspect every supply truck entering the enclave to prevent weapons smuggling.',
        speechRate: 0.95,
        targetPhrase: 'Military inspection by either belligerent destroys civilian trust; humanitarian convoys must be sealed and escorted exclusively by neutral Red Cross and United Nations personnel.',
        sampleResponses: [
          'Military inspection by either belligerent destroys civilian trust; humanitarian convoys must be sealed and escorted exclusively by neutral Red Cross and United Nations personnel.',
          'To ensure absolute transparency without weaponization, cargo manifests will be digitally audited at external border depots by joint international inspection teams.',
          'Having active combatants inspect humanitarian aid is a violation of the Geneva Conventions. The corridor must remain an inviolable demilitarized sanctuary under international custody.'
        ],
        pronunciationTip: '"Military inspection by either belligerent destroys civilian trust" (/bəˈlɪdʒərənt/).',
        translation: 'Se um corredor humanitário for aberto, nossas forças armadas devem manter a prerrogativa soberana de inspecionar cada caminhão que entra no enclave para evitar contrabando de armas.',
        explanation: 'Garantir que apenas a Cruz Vermelha e a ONU operem o corredor protege a população civil contra chantagens militares.'
      },
      {
        id: 's-c2-pt-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Instituindo o Painel Tripartite de Resolução de Violações',
        contextScenario: 'Kozlov pergunta como o cessar-fogo evitará que tiros acidentais ou provocações de franco-atiradores reiniciem a guerra total.',
        modelAudioText: 'What guarantee do we have that a rogue militia sniper will not breach the truce, leaving our forces legally handcuffed from responding?',
        speechRate: 0.95,
        targetPhrase: 'We establish an immediate twenty-four-hour direct hotline between military liaison commanders, backed by an emergency tripartite arbitration panel to verify gunfire origin before retaliatory action.',
        sampleResponses: [
          'We establish an immediate twenty-four-hour direct hotline between military liaison commanders, backed by an emergency tripartite arbitration panel to verify gunfire origin before retaliatory action.',
          'An integrated acoustic sensor grid will pinpoint any muzzle flash within seconds, allowing our joint monitoring commission to isolate provocateurs without escalating into artillery exchanges.',
          'Every localized incident will be investigated by joint liaison officers within sixty minutes, preventing minor skirmishes from unraveling the broader bilateral peace framework.'
        ],
        pronunciationTip: '"twenty-four-hour direct hotline... tripartite arbitration panel" (/ˈhɑːtlaɪn/ ... /traɪˈpɑːrtaɪt/).',
        translation: 'Que garantia temos de que um franco-atirador rebelde não quebrará a trégua, deixando nossas forças de mãos atadas para retaliar?',
        explanation: 'A criação de canais diretos de comunicação e painel arbitral emergencial previne a escalada de acidentes de fronteira.'
      }
    ]
  },
  {
    id: 'speaking-c2-roleplay-whistleblower-editorial',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'c2',
    topic: 'Jornalismo Investigativo & Segurança Nacional',
    title: 'Simulação: Deliberação Editorial sobre Divulgação de Vazamento Governamental',
    description: 'Atue como editor-chefe em reunião a portas fechadas decidindo sobre a publicação de arquivos confidenciais de vigilância em massa ilegal.',
    objective: 'Ponderar o dever democrático de transparência contra riscos reais à segurança física de agentes em campo.',
    instructions: 'Acompanhe as ponderações do assessor jurídico do jornal e estabeleça o protocolo ético de publicação com tarjas protetivas.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Sala de reuniões da diretoria de redação de um jornal de circulação global',
      partnerRole: 'Advogado Especialista em Segurança Nacional (Arthur Pendelton)',
      userRole: 'Editora-Chefe de Jornalismo Investigativo (Você)',
      checklist: [
        'Afirmação do interesse público na denúncia de vigilância inconstitucional',
        'Tarjamento rigoroso (redaction) de nomes de agentes operacionais e fontes vulneráveis',
        'Notificação prévia com prazo de resposta para a agência estatal antes da publicação'
      ]
    },
    questions: [
      {
        id: 's-c2-we-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Afirmando o Dever Democrático de Divulgação',
        contextScenario: 'Arthur aconselha queimar os arquivos vazados pelo denunciante por medo de que o governo invoque a Lei de Espionagem contra o jornal.',
        modelAudioText: 'Publishing these classified intelligence cables will expose our editors to immediate criminal prosecution under the Espionage Act. I strongly advise destroying the leak.',
        speechRate: 0.95,
        targetPhrase: 'Arthur, when intelligence agencies conduct warrantless mass surveillance of private citizens in explicit violation of the constitution, exposing that abuse is the paramount constitutional function of a free press.',
        sampleResponses: [
          'Arthur, when intelligence agencies conduct warrantless mass surveillance of private citizens in explicit violation of the constitution, exposing that abuse is the paramount constitutional function of a free press.',
          'Suppressing verified evidence of systematic constitutional violations out of fear of state prosecution would render our newsroom an instrument of state censorship. We must publish responsibly.',
          'The public has an undeniable right to know when domestic intelligence boundaries have been subverted. Our duty is not to protect governmental tranquility, but to defend democratic truth.'
        ],
        pronunciationTip: '"warrantless mass surveillance... paramount constitutional function" (/ˈwɔːrəntləs mæs sɜːrˈveɪləns/).',
        translation: 'Publicar estes telegramas confidenciais de inteligência exporá nossos editores a processos criminais imediatos sob a Lei de Espionagem. Recomendo veementemente destruir o material.',
        explanation: 'Enquadrar a publicação como dever constitucional supremo ("paramount constitutional function") estabelece a nobreza da imprensa livre.'
      },
      {
        id: 's-c2-we-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Estabelecendo o Protocolo de Tarjamento Responsável (Redaction)',
        contextScenario: 'Arthur argumenta que o vazamento contém nomes de analistas civis e agentes de campo que podem sofrer represálias se expostos.',
        modelAudioText: 'The raw cache contains identities of undercover field translators in hostile environments. If their names appear, blood will be on our hands.',
        speechRate: 0.95,
        targetPhrase: 'We will not publish raw document dumps. Our investigative desk will rigorously redact all personal identifiers, cryptographic keys, and tactical deployment coordinates to safeguard innocent human lives.',
        sampleResponses: [
          'We will not publish raw document dumps. Our investigative desk will rigorously redact all personal identifiers, cryptographic keys, and tactical deployment coordinates to safeguard innocent human lives.',
          'Responsible journalism distinguishes systemic public policy from individual operational identities. Every sensitive name will be systematically excised before printing.',
          'We will apply forensic redactions across every page: zero operational intelligence will be disclosed, focusing exclusively on the structural architecture of the surveillance program.'
        ],
        pronunciationTip: '"rigorously redact all personal identifiers" (/ˈrɪɡərəsli rɪˈdækt/).',
        translation: 'Os arquivos brutos contêm as identidades de tradutores infiltrados em ambientes hostis. Se os nomes deles aparecerem, teremos sangue nas mãos.',
        explanation: 'A recusa a despejos brutos de dados ("raw dumps") e a garantia de tarjamento forense ("rigorously redact identifiers") diferenciam jornalismo de negligência.'
      },
      {
        id: 's-c2-we-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Concedendo Direito de Resposta Prévio ao Governo',
        contextScenario: 'Arthur pergunta se a agência de segurança terá oportunidade de apontar riscos concretos de segurança antes da impressão.',
        modelAudioText: 'Will you at least grant the Department of Justice forty-eight hours to review our intended redactions and respond to our allegations?',
        speechRate: 0.95,
        targetPhrase: 'Absolutely. We will transmit our specific editorial claims and redacted excerpts with a forty-eight-hour window, inviting their formal comment without conceding editorial veto power.',
        sampleResponses: [
          'Absolutely. We will transmit our specific editorial claims and redacted excerpts with a forty-eight-hour window, inviting their formal comment without conceding editorial veto power.',
          'Fairness demands formal pre-publication notice. We will provide our specific investigative questions and consider their security caveats while maintaining complete editorial independence.',
          'We adhere to rigorous journalistic protocol: forty-eight hours for governmental response to specific allegations, ensuring the published report reflects complete factual context.'
        ],
        pronunciationTip: '"inviting formal comment without conceding editorial veto power" (/vɪˈtəʊ paʊər/).',
        translation: 'A senhora concederá ao menos quarenta e oito horas para o Departamento de Justiça examinar os trechos tarjados e responder às acusações?',
        explanation: 'Dar prazo para resposta governamental sem ceder poder de veto assegura a retidão ética e a imunidade jurídica da publicação.'
      }
    ]
  },
  {
    id: 'speaking-c2-roleplay-ancestral-regalia',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'c2',
    topic: 'Antropologia, Direitos Indígenas & Patrimônio Sagrado',
    title: 'Simulação: Tribunal Ético de Restituição de Insígnias Sagradas Ancestrais',
    description: 'Atue como conselheiro-chefe em comissão mediando o pedido de repatriação incondicional de restos mortais e artefatos funerários sagrados.',
    objective: 'Articular a distinção entre mera propriedade patrimonial e direitos ontológicos fundamentais de dignidade dos povos originários.',
    instructions: 'Acompanhe as resistências institucionais do diretor do museu e construa uma resolução de devolução com dignidade cerimonial plena.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Câmara solene da comissão nacional de ética em patrimônio histórico',
      partnerRole: 'Diretor Geral do Museu Nacional de Belas Artes (Lord Sterling)',
      userRole: 'Relatora Especial de Justiça Restaurativa e Direitos Originários (Você)',
      checklist: [
        'Diferenciação categórica entre obras de arte profanas e restos ancestrais sagrados',
        'Reconhecimento da ilegitimidade de títulos de propriedade obtidos em expedições coercitivas',
        'Protocolo cerimonial de custódia e translado sob liderança dos anciãos originários'
      ]
    },
    questions: [
      {
        id: 's-c2-ar-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Desconstruindo a Tese da Propriedade Científica',
        contextScenario: 'Lord Sterling alega que os restos mortais ancestrais pertencem à humanidade como amostras antropológicas de estudo.',
        modelAudioText: 'These funerary skeletal remains and sacred headdresses represent irreplaceable scientific specimens vital for global paleoanthropological research.',
        speechRate: 0.95,
        targetPhrase: 'Lord Sterling, human ancestors are not specimens to be indefinitely curated under glass; holding sacred ceremonial regalia against the sovereign will of their descendants is an ongoing moral violation.',
        sampleResponses: [
          'Lord Sterling, human ancestors are not specimens to be indefinitely curated under glass; holding sacred ceremonial regalia against the sovereign will of their descendants is an ongoing moral violation.',
          'Scientific curiosity cannot override the fundamental human right to sacred burial. Treating ancestors as archival property perpetuates colonial dehumanization.',
          'No research imperative confers a moral license to hold sacred mortuary items hostage. Academic inquiry must bow before elemental human dignity.'
        ],
        pronunciationTip: '"sacred ceremonial regalia" (/ˈseɪkrɪd ˌserɪˈmoʊniəl rɪˈɡeɪliə/).',
        translation: 'Estes restos mortais funerários e cocares sagrados representam espécimes científicos insubstituíveis e vitais para a pesquisa paleoantropológica global.',
        explanation: 'Enfatizar que ancestrais não são espécimes ("ancestors are not specimens") desmonta a presunção colonialista da posse científica.'
      },
      {
        id: 's-c2-ar-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Refutando o Argumento da Capacidade de Preservação',
        contextScenario: 'Sterling argumenta que a aldeia indígena não possui câmaras com climatização de temperatura controlada para evitar a deterioração das penas.',
        modelAudioText: 'The indigenous community lacks climate-controlled hermetic vaults. If we surrender the feathered ceremonial masks, they will decay within decades.',
        speechRate: 0.95,
        targetPhrase: 'Paternalistic preservation arguments miss the ontological point: these sacred masks were consecrated to live, age, and naturally return to the earth through ceremonial cycles, not to endure as mummified curiosities in a metropolitan basement.',
        sampleResponses: [
          'Paternalistic preservation arguments miss the ontological point: these sacred masks were consecrated to live, age, and naturally return to the earth through ceremonial cycles, not to endure as mummified curiosities in a metropolitan basement.',
          'Conditioning human rights on Western climate-controlled technology is paternalistic arrogance. The community holds inherent spiritual sovereignty over how their regalia exists or dissolves.',
          'True preservation is spiritual vitality within living ceremonial practice, not petrified chemical suspension in an alienated display vitrine.'
        ],
        pronunciationTip: '"mummified curiosities in a metropolitan basement" (/ˈmʌmɪfaɪd ˌkjʊriˈɑːsətiz/).',
        translation: 'A comunidade indígena carece de cofres herméticos com temperatura controlada. Se entregarmos as máscaras cerimoniais de penas, elas se degradarão em poucas décadas.',
        explanation: 'Expor que certos objetos rituais foram feitos para cumprir seu ciclo natural de retorno à terra desmonta o fetichismo da conservação artificial.'
      },
      {
        id: 's-c2-ar-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Consolidando o Translado com Dignidade Restaurativa',
        contextScenario: 'Lord Sterling concorda com a restituição, mas pede uma cerimônia solene comemorativa que celebre a generosidade do museu.',
        modelAudioText: 'If our trustees approve restitution, we propose a joint press conference celebrating the museum’s magnanimous gift to the tribe.',
        speechRate: 0.95,
        targetPhrase: 'We cannot characterize the return of looted sacred property as a magnanimous gift. Let us hold a quiet, reverent ceremony acknowledging historical injustice, transferring custody with unconditional humility.',
        sampleResponses: [
          'We cannot characterize the return of looted sacred property as a magnanimous gift. Let us hold a quiet, reverent ceremony acknowledging historical injustice, transferring custody with unconditional humility.',
          'Framing restitution as philanthropic charity insults the historical grievance. The ceremony must be an act of institutional repentance and solemn repatriation.',
          'The transfer must be led by tribal elders on their terms. The museum’s role is not self-congratulation, but dignified restitution and long-overdue closure.'
        ],
        pronunciationTip: '"transferring custody with unconditional humility" (/ˈkʌstədi/ ... /hjuːˈmɪləti/).',
        translation: 'Se nossos conselheiros aprovarem a restituição, propomos uma coletiva de imprensa conjunta celebrando a generosa doação do museu à tribo.',
        explanation: 'Rejeitar o rótulo de "doação generosa" em favor de restituição solene e arrependimento institucional sela o exercício ético no mais alto nível de maestria humana e linguística.'
      }
    ]
  }
];

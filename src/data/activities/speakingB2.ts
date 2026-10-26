import { Activity, SpeakingQuestion } from '../../types/activity';

export const SPEAKING_B2: Activity<SpeakingQuestion>[] = [
  // --- 1. Ouça e Imite (Listen and Repeat) - 4 Atividades ---
  {
    id: 'speaking-b2-shadow-executive-emphasis',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b2',
    topic: 'Oratória & Apresentações Executivas',
    title: 'Ênfase e Ritmo em Apresentações Executivas',
    description: 'Aprenda a modular pausas estratégicas e entonação descendente conclusiva em reuniões corporativas.',
    objective: 'Praticar o ritmo acentual do inglês (stress-timing) ao destacar palavras-chave que conduzem a decisão do público.',
    instructions: 'Ouça o modelo profissional, preste atenção onde a voz ganha ênfase e grave sua repetição com clareza.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Apresentação de resultados e diretrizes estratégicas para diretoria',
      checklist: [
        'Pausa intencional de um segundo após conectores enfáticos',
        'Voz firme e assertiva sem tom hesitante ascendente no final',
        'Destaque melódico nas palavras portadoras de conteúdo'
      ]
    },
    questions: [
      {
        id: 's-b2-ee-1',
        type: 'speaking_item',
        itemTitle: 'Destaque Estratégico',
        contextScenario: 'Destaque o diferencial competitivo central do seu produto perante investidores.',
        modelAudioText: 'Crucially, what sets our solution apart is not merely speed, but seamless integration with legacy infrastructure.',
        speechRate: 0.95,
        targetPhrase: 'Crucially, what sets our solution apart is not merely speed, but seamless integration with legacy infrastructure.',
        phoneticFocus: 'Pausa após "Crucially," (/ˈkruːʃəli/) e contraste entre "merely speed" e "seamless integration".',
        pronunciationTip: 'Dê peso ao advérbio "Crucially" e faça uma respiração antes de "what sets our solution apart".',
        translation: 'Crucialmente, o que diferencia nossa solução não é apenas a velocidade, mas a integração perfeita com a infraestrutura legada.',
        explanation: 'Advérbios de enquadramento como "Crucially" estabelecem autoridade discursiva imediata.'
      },
      {
        id: 's-b2-ee-2',
        type: 'speaking_item',
        itemTitle: 'Conclusão Propositiva',
        contextScenario: 'Apresente uma recomendação de investimento baseada em dados concretos.',
        modelAudioText: 'Given the compelling quarterly metrics, our firm recommendation is to greenlight the pilot phase immediately.',
        speechRate: 0.95,
        targetPhrase: 'Given the compelling quarterly metrics, our firm recommendation is to greenlight the pilot phase immediately.',
        phoneticFocus: 'Entonação firme descendente em "greenlight the pilot phase immediately".',
        pronunciationTip: '"compelling" (/kəmˈpelɪŋ/) com tônica na segunda sílaba. Não hesite no verbo "greenlight".',
        translation: 'Diante das métricas trimestrais contundentes, nossa recomendação firme é aprovar a fase piloto imediatamente.',
        explanation: 'Terminar frases afirmativas com entonação descendente transmite segurança gerencial.'
      },
      {
        id: 's-b2-ee-3',
        type: 'speaking_item',
        itemTitle: 'Mitigação de Riscos',
        contextScenario: 'Tranquilize os acionistas demonstrando que contingências foram devidamente planejadas.',
        modelAudioText: 'While unexpected regulatory hurdles may emerge, our team has instituted robust contingency safeguards.',
        speechRate: 0.95,
        targetPhrase: 'While unexpected regulatory hurdles may emerge, our team has instituted robust contingency safeguards.',
        phoneticFocus: 'Contraste entre a concessão ("hurdles may emerge") e a resolução ("robust contingency safeguards").',
        pronunciationTip: '"hurdles" (/ˈhɜːrdlz/) e "safeguards" (/ˈseɪfɡɑːrdz/) com articulação clara.',
        translation: 'Embora obstáculos regulatórios inesperados possam surgir, nossa equipe instituiu salvaguardas robustas de contingência.',
        explanation: 'Equilibrar concessão e assertividade é uma das marcas de maturidade comunicativa no nível B2.'
      }
    ]
  },
  {
    id: 'speaking-b2-shadow-diplomatic-softening',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b2',
    topic: 'Comunicação Interpessoal & Diplomacia',
    title: 'Suavização Diplomática e Polidez em Discordâncias',
    description: 'Domine o uso de atenuadores (understatements) para transmitir notícias delicadas ou recusar solicitações com elegância.',
    objective: 'Empregar estruturas como "I am afraid that...", "With all due respect..." mantendo tom cortês e calmo.',
    instructions: 'Ouça o tom atenuado do modelo nativo e reproduza a frase preservando a polidez.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Alinhamento profissional delicado com clientes e parceiros',
      checklist: [
        'Modular a voz em tom sereno e colaborativo',
        'Evitar rispidez ou volume excessivo nas negativas',
        'Conectar locuções atenuadoras sem pausas abruptas'
      ]
    },
    questions: [
      {
        id: 's-b2-ds-1',
        type: 'speaking_item',
        itemTitle: 'Recusa Polida de Prazo',
        contextScenario: 'Comunique a um cliente que o prazo solicitado por ele é inviável sem sacrificar a qualidade.',
        modelAudioText: 'I am afraid that delivering the complete feature set by Friday would inevitably compromise overall quality.',
        speechRate: 0.95,
        targetPhrase: 'I am afraid that delivering the complete feature set by Friday would inevitably compromise overall quality.',
        phoneticFocus: '"I am afraid that" (/aɪm əˈfreɪd ðət/) como fórmula introdutória suavizadora.',
        pronunciationTip: 'Não traduza "I am afraid" como medo literal; é a fórmula clássica em inglês para "lamento informar que".',
        translation: 'Receio que entregar todos os recursos até sexta-feira comprometeria inevitavelmente a qualidade geral.',
        explanation: 'Usar "I am afraid that..." permite recusar sem soar rude ou inflexível.'
      },
      {
        id: 's-b2-ds-2',
        type: 'speaking_item',
        itemTitle: 'Divergência Respeitosa',
        contextScenario: 'Discorde respeitosamente da interpretação de um colega sênior em uma reunião.',
        modelAudioText: 'With all due respect, the latest customer feedback data paints a slightly different picture.',
        speechRate: 0.95,
        targetPhrase: 'With all due respect, the latest customer feedback data paints a slightly different picture.',
        phoneticFocus: 'Pausa suave após "respect," e ênfase atenuada em "slightly different picture".',
        pronunciationTip: '"With all due respect" (/wɪð ɔːl djuː rɪˈspekt/). Use o tom cordial para preservar a harmonia.',
        translation: 'Com todo o respeito, os dados mais recentes de feedback dos clientes mostram um quadro ligeiramente diferente.',
        explanation: 'A expressão "paints a slightly different picture" é uma forma elegante de demonstrar que a premissa anterior estava equivocada.'
      },
      {
        id: 's-b2-ds-3',
        type: 'speaking_item',
        itemTitle: 'Contraproposta Construtiva',
        contextScenario: 'Sugira uma alternativa viável após rejeitar uma proposta financeira onerosa.',
        modelAudioText: 'Perhaps we could explore phased billing milestones rather than requiring full prepayment upfront.',
        speechRate: 0.95,
        targetPhrase: 'Perhaps we could explore phased billing milestones rather than requiring full prepayment upfront.',
        phoneticFocus: '"Perhaps we could explore" com curva de entonação suave e aberta.',
        pronunciationTip: '"phased" (/feɪzd/) e "milestones" (/ˈmaɪlstoʊnz/).',
        translation: 'Talvez pudéssemos explorar pagamentos parcelados por etapas em vez de exigir adiantamento integral.',
        explanation: 'Iniciar com "Perhaps we could explore..." transforma uma exigência em um convite ao diálogo conjunto.'
      }
    ]
  },
  {
    id: 'speaking-b2-shadow-describing-trends',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b2',
    topic: 'Análise de Dados & Métricas',
    title: 'Descrevendo Tendências, Flutuações e Projeções',
    description: 'Desenvolva fluência ao narrar gráficos, padrões de crescimento e oscilações estatísticas com vocabulário apurado.',
    objective: 'Combinar verbos e advérbios de movimento (soared dramatically, stabilized moderately, dipped slightly) com ritmo natural.',
    instructions: 'Ouça as descrições analíticas e reproduza com cadência dinâmica e pronúncia exata.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Apresentação trimestral de desempenho financeiro e comercial',
      checklist: [
        'Variação de pitch tonal ao indicar subidas e quedas',
        'Pronúncia clara dos encontros consonantais em verbos no passado',
        'Articulação firme dos advérbios de intensidade'
      ]
    },
    questions: [
      {
        id: 's-b2-dt-1',
        type: 'speaking_item',
        itemTitle: 'Crescimento Expressivo',
        contextScenario: 'Descreva um aumento acentuado nas assinaturas mensais de um serviço digital.',
        modelAudioText: 'Following the marketing campaign, active user subscriptions surged dramatically by forty-two percent.',
        speechRate: 0.95,
        targetPhrase: 'Following the marketing campaign, active user subscriptions surged dramatically by forty-two percent.',
        phoneticFocus: '"surged dramatically" (/sɜːrdʒd drəˈmætɪkli/) com elevação de tom em "surged".',
        pronunciationTip: 'O verbo "surged" tem som de /d/ no final, sem sílaba extra: /sɜːrdʒd/.',
        translation: 'Após a campanha de marketing, as assinaturas de usuários ativos dispararam expressivamente em quarenta e dois por cento.',
        explanation: '"Surged dramatically" expressa crescimento veloz e substancial com precisão.'
      },
      {
        id: 's-b2-dt-2',
        type: 'speaking_item',
        itemTitle: 'Estabilização de Mercado',
        contextScenario: 'Comente a consolidação de custos após um período de grande volatilidade.',
        modelAudioText: 'Although operational expenses fluctuated in early spring, they have since leveled off at a sustainable baseline.',
        speechRate: 0.95,
        targetPhrase: 'Although operational expenses fluctuated in early spring, they have since leveled off at a sustainable baseline.',
        phoneticFocus: '"fluctuated" (/ˈflʌktʃueɪtɪd/) e a phrasal verb "leveled off" (/ˈlevld ɔːf/).',
        pronunciationTip: 'Conecte "leveled off" como uma unidade contínua: "le-vel-doff".',
        translation: 'Embora as despesas operacionais tenham oscilado no início da primavera, elas desde então se estabilizaram em um patamar sustentável.',
        explanation: '"Leveled off" é o phrasal verb padrão para descrever quando uma curva para de oscilar e fica estável.'
      },
      {
        id: 's-b2-dt-3',
        type: 'speaking_item',
        itemTitle: 'Queda Temporária',
        contextScenario: 'Explique que uma retração pontual não afeta as projeções positivas de longo prazo.',
        modelAudioText: 'While physical retail traffic dipped slightly in November, online conversions more than compensated for the deficit.',
        speechRate: 0.95,
        targetPhrase: 'While physical retail traffic dipped slightly in November, online conversions more than compensated for the deficit.',
        phoneticFocus: '"dipped slightly" (/dɪpt ˈslaɪtli/) e "compensated" (/ˈkɑːmpənseɪtɪd/).',
        pronunciationTip: '"dipped" soa com /t/ final (/dɪpt/). Diga "deficit" como /ˈdefɪsɪt/.',
        translation: 'Embora o movimento no varejo físico tenha caído ligeiramente em novembro, as conversões online compensaram amplamente o déficit.',
        explanation: 'Usar "dipped slightly" relativiza a queda como um evento brando e temporário.'
      }
    ]
  },
  {
    id: 'speaking-b2-shadow-negotiation-clauses',
    pillar: 'speaking',
    type: 'listen_repeat',
    level: 'b2',
    topic: 'Negócios & Acordos Comerciais',
    title: 'Negociação e Estabelecimento de Condições Contratuais',
    description: 'Treine a fala formal de negociação, formulando concessões e contrapartidas com segurança.',
    objective: 'Praticar o uso de condicionais como "Provided that...", "As long as..." em contexto executivo.',
    instructions: 'Ouça o posicionamento comercial e grave com firmeza e ritmo equilibrado.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Mesa de negociação de parceria comercial estratégica',
      checklist: [
        'Enunciação clara dos limites da proposta',
        'Pausas antes e depois da oração condicional',
        'Tom profissional colaborativo sem agressividade'
      ]
    },
    questions: [
      {
        id: 's-b2-nc-1',
        type: 'speaking_item',
        itemTitle: 'Condição de Volume',
        contextScenario: 'Ofereça um desconto sob a condição de um volume mínimo de encomendas.',
        modelAudioText: 'We can certainly accommodate an eight percent discount, provided that your team commits to quarterly volume thresholds.',
        speechRate: 0.95,
        targetPhrase: 'We can certainly accommodate an eight percent discount, provided that your team commits to quarterly volume thresholds.',
        phoneticFocus: '"provided that" (/prəˈvaɪdɪd ðæt/) e "thresholds" (/ˈθreʃhoʊldz/).',
        pronunciationTip: 'Atenção ao som do "th" em "thresholds" (/θ/).',
        translation: 'Podemos certamente conceder um desconto de oito por cento, contanto que sua equipe se comprometa com volumes mínimos trimestrais.',
        explanation: '"Provided that" é mais formal e enfático do que o simples "if".'
      },
      {
        id: 's-b2-nc-2',
        type: 'speaking_item',
        itemTitle: 'Garantia de Manutenção',
        contextScenario: 'Estabeleça a contrapartida de assistência técnica inclusa no contrato.',
        modelAudioText: 'In exchange for an exclusive three-year commitment, we will include comprehensive on-site maintenance at no additional charge.',
        speechRate: 0.95,
        targetPhrase: 'In exchange for an exclusive three-year commitment, we will include comprehensive on-site maintenance at no additional charge.',
        phoneticFocus: '"In exchange for" (/ɪn ɪksˈtʃeɪndʒ fər/) e "comprehensive" (/ˌkɑːmprɪˈhensɪv/).',
        pronunciationTip: 'Destaque "exclusive three-year commitment" com tom persuasivo.',
        translation: 'Em troca de um contrato de exclusividade de três anos, incluiremos manutenção completa no local sem custos adicionais.',
        explanation: '"In exchange for..." estrutura contrapropostas com clareza recíproca.'
      },
      {
        id: 's-b2-nc-3',
        type: 'speaking_item',
        itemTitle: 'Acordo Mútuo',
        contextScenario: 'Celebre o consenso alcançado e estabeleça o próximo passo documental.',
        modelAudioText: 'I believe we have established a mutually advantageous agreement, and I look forward to finalizing the documentation.',
        speechRate: 0.95,
        targetPhrase: 'I believe we have established a mutually advantageous agreement, and I look forward to finalizing the documentation.',
        phoneticFocus: '"mutually advantageous" (/ˈmjuːtʃuəli ˌædvənˈteɪdʒəs/).',
        pronunciationTip: '"advantageous" tem tônica na penúltima sílaba: /ˌæd-vən-TEY-jəs/.',
        translation: 'Acredito que estabelecemos um acordo mutuamente vantajoso e espero concluir a documentação em breve.',
        explanation: 'Expressar satisfação profissional consolida parcerias sólidas no encerramento de negociações.'
      }
    ]
  },

  // --- 2. Treino de Sons (Sound Training) - 4 Atividades ---
  {
    id: 'speaking-b2-sound-vowel-pairs',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b2',
    topic: 'Fonologia: /ɪ/ vs /iː/ em Contextos Profissionais',
    title: 'Distinção Crítica entre Vogal Curta /ɪ/ e Vogal Longa /iː/',
    description: 'Elimine confusões entre pares como fit/feet, ship/sheep, live/leave que alteram o sentido de frases formais.',
    objective: 'Reconhecer e produzir a diferença entre o som relaxado /ɪ/ e o som esticado tenso /iː/.',
    instructions: 'Responda ao teste auditivo identificando a palavra emitida e grave a frase modelo com os sons contrastados.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Laboratório de precisão vocálica para evitar mal-entendidos comunicativos',
      focusSound: 'O /ɪ/ (sit, fit) é curto, com lábios relaxados; o /iː/ (seat, feet) é tenso, com lábios esticados como num sorriso.',
      checklist: [
        'Não prolongar indevidamente o som curto relaxado /ɪ/',
        'Tensionar os cantos da boca ao pronunciar /iː/',
        'Clareza contextual ao alternar palavras parecidas na mesma oração'
      ]
    },
    questions: [
      {
        id: 's-b2-vp-1',
        type: 'speaking_item',
        itemTitle: 'Contraste: Fit vs Feet',
        contextScenario: 'Frase contrastando o adjetivo de adequação (fit) e a parte do corpo (feet).',
        modelAudioText: 'These durable hiking boots are a perfect fit for my feet.',
        speechRate: 0.92,
        targetPhrase: 'These durable hiking boots are a perfect fit for my feet.',
        phoneticFocus: 'Contraste entre "fit" (/fɪt/ - curto) e "feet" (/fiːt/ - longo).',
        pronunciationTip: 'Diga "fit" rápido sem sorrir; ao dizer "feet", estique os lábios suavemente.',
        translation: 'Estas botas de trilha duráveis são um encaixe perfeito para os meus pés.',
        explanation: 'Trocar /ɪ/ por /iː/ é um dos desvios mais frequentes de falantes de português.',
        perceptionQuestion: {
          questionText: 'Qual som vocálico está presente na palavra "fit" em "perfect fit"?',
          audioText: 'fit',
          options: [
            { id: 'A', text: 'O som vocálico curto e relaxado /ɪ/' },
            { id: 'B', text: 'O som vocálico longo e tenso /iː/' },
            { id: 'C', text: 'O ditongo /aɪ/' },
            { id: 'D', text: 'O som neutro /ə/' }
          ],
          correctOptionId: 'A',
          explanation: '"Fit" possui a vogal curta relaxada /fɪt/.'
        }
      },
      {
        id: 's-b2-vp-2',
        type: 'speaking_item',
        itemTitle: 'Contraste: Live vs Leave',
        contextScenario: 'Frase que reúne o verbo morar/viver (live) e o verbo partir/deixar (leave).',
        modelAudioText: 'They live in the city, but plan to leave early tomorrow morning.',
        speechRate: 0.92,
        targetPhrase: 'They live in the city, but plan to leave early tomorrow morning.',
        phoneticFocus: 'Contraste entre "live" (/lɪv/) e "leave" (/liːv/).',
        pronunciationTip: 'Não diga "leave" para os dois. "Live" tem o som relaxado como em "give".',
        translation: 'Eles moram na cidade, mas planejam partir bem cedo amanhã de manhã.',
        explanation: 'Diferenciar "live" e "leave" é vital para clareza temporal e espacial na fala.',
        perceptionQuestion: {
          questionText: 'Na audição isolada da palavra, qual termo foi enunciado?',
          audioText: 'leave',
          options: [
            { id: 'A', text: 'Leave (/liːv/ - partir / deixar)' },
            { id: 'B', text: 'Live (/lɪv/ - morar / viver)' },
            { id: 'C', text: 'Life (/laɪf/ - vida)' },
            { id: 'D', text: 'Leaf (/liːf/ - folha)' }
          ],
          correctOptionId: 'A',
          explanation: 'O áudio pronunciou /liːv/ com o som longo e a consoante sonora /v/ no final.'
        }
      },
      {
        id: 's-b2-vp-3',
        type: 'speaking_item',
        itemTitle: 'Contraste: Ship vs Sheep',
        contextScenario: 'Frase famosa pela distinção entre embarcação de carga (ship) e o animal ovelha (sheep).',
        modelAudioText: 'The cargo ship transported thirty wool sheep across the bay.',
        speechRate: 0.92,
        targetPhrase: 'The cargo ship transported thirty wool sheep across the bay.',
        phoneticFocus: 'Contraste entre "ship" (/ʃɪp/) e "sheep" (/ʃiːp/).',
        pronunciationTip: 'Em "ship", a boca quase não se mexe; em "sheep", há tensão nos lábios.',
        translation: 'O navio de carga transportou trinta ovelhas de lã pela baía.',
        explanation: 'A distinção de duração e tensão impede confusões cômicas no vocabulário.',
        perceptionQuestion: {
          questionText: 'Qual das alternativas contém o som longo /iː/?',
          audioText: 'sheep',
          options: [
            { id: 'A', text: 'Sheep (/ʃiːp/)' },
            { id: 'B', text: 'Ship (/ʃɪp/)' },
            { id: 'C', text: 'Shape (/ʃeɪp/)' },
            { id: 'D', text: 'Shop (/ʃɑːp/)' }
          ],
          correctOptionId: 'A',
          explanation: '"Sheep" é grafado com "ee" e pronunciado com a vogal longa /ʃiːp/.'
        }
      }
    ]
  },
  {
    id: 'speaking-b2-sound-dark-l',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b2',
    topic: 'Fonologia: O "Dark L" (/ɫ/) em Finais de Sílaba',
    title: 'O "Dark L" (/ɫ/) em Finais de Sílaba e Grupos Consonantais',
    description: 'Aprenda a não substituir o som de L no final de palavras (world, milk, cold, bottle) pelo som de "u" brasileiro.',
    objective: 'Elevar a parte posterior da língua em direção ao véu palatino ao articular o /ɫ/ em palavras como "world" e "people".',
    instructions: 'Identifique a pronúncia autêntica com dark L e grave a frase modelo mantendo o som na ponta e fundo da língua.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica fonética para aperfeiçoar o fechamento de sílabas com L velarizado',
      focusSound: 'O Dark L (/ɫ/) exige dois movimentos simultâneos: ponta da língua nos dentes superiores e dorso posterior arqueado para trás.',
      checklist: [
        'Evitar falar "miuki", "coude" ou "uordi"',
        'Sentir a resistência na garganta e o toque no palato',
        'Sustentar o som sem arredondar os lábios em formato de "u"'
      ]
    },
    questions: [
      {
        id: 's-b2-dl-1',
        type: 'speaking_item',
        itemTitle: 'Dark L com Consoante: World vs Word',
        contextScenario: 'Frase contrastando o planeta Terra (world) com vocábulo (word).',
        modelAudioText: 'She traveled around the world to find the right word for her poem.',
        speechRate: 0.92,
        targetPhrase: 'She traveled around the world to find the right word for her poem.',
        phoneticFocus: 'Contraste entre "world" (/wɜːrld/ com dark L) e "word" (/wɜːrd/ sem L).',
        pronunciationTip: 'Em "world", não arredonde os lábios como "uor-di". O L é sustentado: /wɜːr-ɫ-d/.',
        translation: 'Ela viajou ao redor do mundo para encontrar a palavra certa para o seu poema.',
        explanation: '"World" tem o dark L que faz a língua recuar antes de tocar o dente no /d/.',
        perceptionQuestion: {
          questionText: 'Qual palavra isolada foi dita no áudio?',
          audioText: 'world',
          options: [
            { id: 'A', text: 'World (/wɜːrld/ - mundo)' },
            { id: 'B', text: 'Word (/wɜːrd/ - palavra)' },
            { id: 'C', text: 'Work (/wɜːrk/ - trabalho)' },
            { id: 'D', text: 'Ward (/wɔːrd/ - ala hospitalar)' }
          ],
          correctOptionId: 'A',
          explanation: 'O áudio articulou o dark L intermediário característico de "world" (/wɜːrld/).'
        }
      },
      {
        id: 's-b2-dl-2',
        type: 'speaking_item',
        itemTitle: 'Dark L após Vogal: Milk and Cold',
        contextScenario: 'Frase cotidiana com palavras que frequentemente sofrem vocalização indevida para "u".',
        modelAudioText: 'Drinking cold milk on a chilly morning is quite refreshing.',
        speechRate: 0.92,
        targetPhrase: 'Drinking cold milk on a chilly morning is quite refreshing.',
        phoneticFocus: '"cold" (/koʊld/) e "milk" (/mɪlk/) com /ɫ/ velarizado.',
        pronunciationTip: 'Mantenha os lábios imóveis no final de "milk". Não diga "miuki".',
        translation: 'Beber leite gelado em uma manhã fresca é bastante revigorante.',
        explanation: 'O Dark L em "cold" e "milk" dá o timbre encorpado e autêntico à pronúncia nativa.',
        perceptionQuestion: {
          questionText: 'Como deve ser articulado o som de L na palavra "milk"?',
          audioText: 'milk',
          options: [
            { id: 'A', text: 'Com a língua tocando o céu da boca e o dorso arqueado (/ɫ/ velarizado)' },
            { id: 'B', text: 'Com os lábios arredondados como o som de "u" em "miuki"' },
            { id: 'C', text: 'Omitindo o L e falando apenas "mik"' },
            { id: 'D', text: 'Com som de "r" caipira' }
          ],
          correctOptionId: 'A',
          explanation: 'O inglês padrão utiliza o dark L velarizado (/ɫ/) e não a semivogal /w/ (som de u).'
        }
      },
      {
        id: 's-b2-dl-3',
        type: 'speaking_item',
        itemTitle: 'L Silábico Final: Bottle and Little',
        contextScenario: 'Frase com palavras terminadas em "-le" onde o L assume o valor de núcleo da sílaba.',
        modelAudioText: 'He placed the little glass bottle carefully on the shelf.',
        speechRate: 0.92,
        targetPhrase: 'He placed the little glass bottle carefully on the shelf.',
        phoneticFocus: '"little" (/ˈlɪtl/) e "bottle" (/ˈbɑːtl/) com L silábico (/l̩/).',
        pronunciationTip: 'Não adicione uma vogal entre o t e o l: passe do som de /t/ direto para o /l/.',
        translation: 'Ele colocou a pequena garrafa de vidro cuidadosamente na prateleira.',
        explanation: 'O L silábico não tem vogal intermediária audível; o ar escapa pelas laterais da língua.',
        perceptionQuestion: {
          questionText: 'Na palavra "bottle", quantas vogais audíveis existem na pronúncia nativa?',
          audioText: 'bottle',
          options: [
            { id: 'A', text: 'Apenas uma no início (/ɑː/ ou /ɒ/); a segunda sílaba é formada pelo L silábico' },
            { id: 'B', text: 'Duas vogais longas "o" e "e"' },
            { id: 'C', text: 'Três vogais' },
            { id: 'D', text: 'Nenhuma vogal' }
          ],
          correctOptionId: 'A',
          explanation: 'Em "bottle" (/ˈbɑːtl̩/), a segunda sílaba consiste unicamente na consoante líquida silábica.'
        }
      }
    ]
  },
  {
    id: 'speaking-b2-sound-tag-questions',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b2',
    topic: 'Entonação Pragmática em Tag Questions',
    title: 'Entonação Ascendente vs Descendente em Tag Questions',
    description: 'Descubra como a melodia da voz indica se você está apenas pedindo confirmação óbvia ou fazendo uma pergunta real.',
    objective: 'Dominar a entonação descendente (certeza/confirmação) e ascendente (dúvida genuína) no final das sentenças.',
    instructions: 'Ouça o áudio, identifique se a curva melódica sobe ou desce e repita com a entonação correta.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Comunicação conversacional avançada e checagem de alinhamento',
      focusSound: 'Voz descendente (falling pitch) = "concorde comigo, nós dois sabemos"; Voz ascendente (rising pitch) = "estou realmente em dúvida".',
      checklist: [
        'Curva melódica descendente suave para confirmação evidente',
        'Curva ascendente clara para dúvidas reais',
        'Ritmo natural sem pausas artificiais antes da tag'
      ]
    },
    questions: [
      {
        id: 's-b2-tq-1',
        type: 'speaking_item',
        itemTitle: 'Tag Descendente: Confirmação Óbvia',
        contextScenario: 'Comente sobre o clima agradável esperando concordância imediata do interlocutor.',
        modelAudioText: 'It is a gorgeous afternoon, isn’t it?',
        speechRate: 0.94,
        targetPhrase: 'It is a gorgeous afternoon, isn’t it?',
        phoneticFocus: 'Entonação descendente em "isn\'t it?" (falling pitch).',
        pronunciationTip: 'Deixe a voz cair no final de "isn\'t it". Isso sinaliza que você já sabe a resposta e quer cumplicidade.',
        translation: 'É uma tarde linda, não é?',
        explanation: 'Quando o falante tem certeza e busca apenas engajamento, a voz desce no final da tag.',
        perceptionQuestion: {
          questionText: 'Na frase do áudio, a entonação em "isn\'t it?" sobe ou desce?',
          audioText: 'It is a gorgeous afternoon, isn\'t it?',
          options: [
            { id: 'A', text: 'Desce (falling intonation - confirmação evidente)' },
            { id: 'B', text: 'Sobe acentuadamente (rising intonation - dúvida real)' },
            { id: 'C', text: 'Permanece monocórdica sem alteração' },
            { id: 'D', text: 'A tag foi sussurrada' }
          ],
          correctOptionId: 'A',
          explanation: 'A voz desce no final porque o falante não está com dúvida genuína sobre o clima.'
        }
      },
      {
        id: 's-b2-tq-2',
        type: 'speaking_item',
        itemTitle: 'Tag Ascendente: Dúvida Genuína',
        contextScenario: 'Pergunte a um colega se ele enviou o relatório, pois você não tem certeza se a tarefa foi feita.',
        modelAudioText: 'You haven’t submitted the budget report yet, have you?',
        speechRate: 0.94,
        targetPhrase: 'You haven’t submitted the budget report yet, have you?',
        phoneticFocus: 'Entonação ascendente em "have you?" (rising pitch).',
        pronunciationTip: 'Eleve o tom da voz na palavra "you" para demonstrar que você genuinamente não sabe se foi enviado.',
        translation: 'Você ainda não enviou o relatório de orçamento, enviou?',
        explanation: 'A entonação ascendente em tag questions transforma a frase em uma pergunta real de incerteza.',
        perceptionQuestion: {
          questionText: 'O que a entonação ascendente em "have you?" indica?',
          audioText: 'You haven\'t submitted the budget report yet, have you?',
          options: [
            { id: 'A', text: 'Uma dúvida real onde o falante não sabe se a ação foi realizada e espera resposta' },
            { id: 'B', text: 'Uma ordem autoritária de demissão imediata' },
            { id: 'C', text: 'Uma certeza absoluta onde não cabe resposta' },
            { id: 'D', text: 'Uma piada informal' }
          ],
          correctOptionId: 'A',
          explanation: 'Quando a melodia sobe (rising tone), trata-se de uma pergunta autêntica por falta de certeza.'
        }
      },
      {
        id: 's-b2-tq-3',
        type: 'speaking_item',
        itemTitle: 'Tag Mista: Alinhamento de Reunião',
        contextScenario: 'Confirme o horário da reunião das três horas com um colega de sala.',
        modelAudioText: 'Our design review starts at three, doesn’t it?',
        speechRate: 0.94,
        targetPhrase: 'Our design review starts at three, doesn’t it?',
        phoneticFocus: 'Leve subida em "three" seguida de queda suave em "doesn\'t it?".',
        pronunciationTip: 'Conecte "starts at three" e finalize com "doesn\'t it" fluido: /ˈdʌznt ɪt/.',
        translation: 'Nossa revisão de design começa às três, não é?',
        explanation: 'O domínio melódico das tag questions confere naturalidade nativa imediata ao aluno.',
        perceptionQuestion: {
          questionText: 'Como a expressão "doesn\'t it" soa na fala rápida conectada?',
          audioText: 'doesn\'t it',
          options: [
            { id: 'A', text: '/ˈdʌznt ɪt/ com o /t/ ligado suavemente na vogal /ɪ/' },
            { id: 'B', text: 'Como duas palavras separadas por uma pausa de dois segundos' },
            { id: 'C', text: 'Como "does not"' },
            { id: 'D', text: 'Omitindo a palavra "it"' }
          ],
          correctOptionId: 'A',
          explanation: 'Ocorre a ligação entre a consoante final /t/ de "doesn\'t" e a vogal inicial de "it".'
        }
      }
    ]
  },
  {
    id: 'speaking-b2-sound-stress-shifting',
    pillar: 'speaking',
    type: 'sound_training',
    level: 'b2',
    topic: 'Morfologia Acentual em Famílias de Palavras',
    title: 'Mudança de Sílaba Tônica em Palavras Cognatas Derivadas',
    description: 'Aprenda como a sílaba tônica se desloca quando adicionamos sufixos (PHO-to -> pho-TOG-ra-phy -> pho-to-GRAPH-ic).',
    objective: 'Produzir a acentuação móvel correta em famílias de termos acadêmicos e corporativos sem hesitação.',
    instructions: 'Identifique no teste auditivo a sílaba tônica correta e grave a sentença com o contraste rítmico perfeito.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Clínica de precisão acentual morfológica em vocabulário profissional',
      focusSound: 'Sufixos como "-graphy", "-ic" e "-tion" puxam a tônica para posições fixas previsíveis.',
      checklist: [
        'Acentuar a 1ª sílaba em "PHOtograph"',
        'Puxar para a 2ª sílaba em "phoTOGraphy"',
        'Puxar para a 3ª sílaba em "photoGRAPHic"'
      ]
    },
    questions: [
      {
        id: 's-b2-ss-fam-1',
        type: 'speaking_item',
        itemTitle: 'Família: Photograph vs Photography',
        contextScenario: 'Frase contrastando a foto (substantivo simples) com a profissão de fotografia.',
        modelAudioText: 'She took an exquisite photograph, inspiring her interest in documentary photography.',
        speechRate: 0.92,
        targetPhrase: 'She took an exquisite photograph, inspiring her interest in documentary photography.',
        phoneticFocus: 'Contraste entre /ˈfoʊtəɡræf/ (1ª sílaba) e /fəˈtɑːɡrəfi/ (2ª sílaba).',
        pronunciationTip: 'Fale "PHO-to-graph" com força no início; mude para "pho-TOG-ra-phy" com força na segunda sílaba.',
        translation: 'Ela tirou uma fotografia requintada, despertando seu interesse pela fotografia documental.',
        explanation: 'O sufixo "-y" em "-graphy" atrai a tônica para a sílaba anterior (/tɑː/).',
        perceptionQuestion: {
          questionText: 'Onde incide a sílaba tônica na palavra "photography"?',
          audioText: 'photography',
          options: [
            { id: 'A', text: 'Na segunda sílaba: /fəˈtɑːɡrəfi/' },
            { id: 'B', text: 'Na primeira sílaba: /ˈfoʊtəɡræfi/' },
            { id: 'C', text: 'Na última sílaba: /foʊtəɡræˈfiː/' },
            { id: 'D', text: 'Em nenhuma sílaba' }
          ],
          correctOptionId: 'A',
          explanation: '"Photography" possui a sílaba tônica estritamente na segunda sílaba: /fəˈtɑːɡrəfi/.'
        }
      },
      {
        id: 's-b2-ss-fam-2',
        type: 'speaking_item',
        itemTitle: 'Família: Economy vs Economic vs Economical',
        contextScenario: 'Frase contendo termos da economia com acentos tônicos alternados.',
        modelAudioText: 'A stable national economy depends on sound economic policies and economical energy use.',
        speechRate: 0.92,
        targetPhrase: 'A stable national economy depends on sound economic policies and economical energy use.',
        phoneticFocus: 'Contraste entre /ɪˈkɑːnəmi/ (2ª sílaba) e /ˌiːkəˈnɑːmɪk/ (3ª sílaba).',
        pronunciationTip: 'Diga "e-CON-o-my" e depois "eco-NOM-ic". O sufixo "-ic" sempre puxa a tônica para a sílaba anterior a ele.',
        translation: 'Uma economia nacional estável depende de políticas econômicas sólidas e do uso econômico de energia.',
        explanation: 'Palavras terminadas em "-ic" têm a tônica garantida na penúltima sílaba.',
        perceptionQuestion: {
          questionText: 'Qual regra fonética se aplica a palavras terminadas no sufixo "-ic" como "economic" e "scientific"?',
          audioText: 'economic',
          options: [
            { id: 'A', text: 'A sílaba tônica recai imediatamente antes do sufixo "-ic" (penúltima sílaba)' },
            { id: 'B', text: 'A tônica sempre recai na primeira sílaba da palavra' },
            { id: 'C', text: 'O sufixo "-ic" é sempre pronunciado como sílaba tônica' },
            { id: 'D', text: 'Não há regra definida' }
          ],
          correctOptionId: 'A',
          explanation: 'O sufixo "-ic" atrai a tônica para a sílaba imediatamente anterior (ex: e-co-NOM-ic, sci-en-TIF-ic).'
        }
      },
      {
        id: 's-b2-ss-fam-3',
        type: 'speaking_item',
        itemTitle: 'Família: Compete vs Competition vs Competitive',
        contextScenario: 'Frase que articula verbo, substantivo e adjetivo da raiz competitiva.',
        modelAudioText: 'Athletes must compete rigorously, as the annual competition is remarkably competitive.',
        speechRate: 0.92,
        targetPhrase: 'Athletes must compete rigorously, as the annual competition is remarkably competitive.',
        phoneticFocus: '"compete" (/kəmˈpiːt/), "competition" (/ˌkɑːmpəˈtɪʃn/), "competitive" (/kəmˈpetətɪv/).',
        pronunciationTip: 'Sinta o ritmo: com-PETE (2ª), com-pe-TI-tion (3ª), com-PET-i-tive (2ª).',
        translation: 'Atletas devem competir com rigor, pois a competição anual é extraordinariamente competitiva.',
        explanation: 'Dominar o deslocamento de tônica em famílias lexicais garante fala polida e fluida.',
        perceptionQuestion: {
          questionText: 'Na audição isolada, qual das três formas derivadas foi pronunciada?',
          audioText: 'competitive',
          options: [
            { id: 'A', text: 'Competitive (/kəmˈpetətɪv/ - adjetivo competitivo)' },
            { id: 'B', text: 'Competition (/ˌkɑːmpəˈtɪʃn/ - substantivo competição)' },
            { id: 'C', text: 'Compete (/kəmˈpiːt/ - verbo competir)' },
            { id: 'D', text: 'Competence (/ˈkɑːmpɪtəns/ - competência)' }
          ],
          correctOptionId: 'A',
          explanation: 'O áudio pronunciou /kəmˈpetətɪv/, com a tônica na segunda sílaba e terminação em "-ive".'
        }
      }
    ]
  },

  // --- 3. Respostas Rápidas (Rapid Response) - 4 Atividades ---
  {
    id: 'speaking-b2-rapid-objection-handling',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b2',
    topic: 'Vendas & Apresentação Comercial',
    title: 'Superando Objeções Inesperadas em Apresentações',
    description: 'Responda com agilidade mental a questionamentos sobre custo, tempo de implementação e complexidade.',
    objective: 'Reagir sem hesitação estruturando respostas com validação, contra-argumento e evidência prática.',
    instructions: 'Ouça a objeção formulada pelo investidor e grave sua réplica convincente.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Sessão de perguntas e respostas pós-apresentação com banca avaliadora',
      checklist: [
        'Acolhimento imediato da dúvida sem tom defensivo',
        'Apresentação de métrica ou prazo concreto',
        'Fechamento com pergunta de validação de alinhamento'
      ]
    },
    questions: [
      {
        id: 's-b2-ro-1',
        type: 'speaking_item',
        itemTitle: 'Objeção: Custo de Implantação Elevado',
        contextScenario: 'O cliente afirma que o investimento inicial é substancialmente superior ao da concorrência.',
        modelAudioText: 'Your software looks impressive, but the initial licensing cost is considerably higher than other market solutions.',
        speechRate: 0.95,
        targetPhrase: 'I appreciate that concern; however, our clients recoup that investment within six months through automated efficiency gains.',
        sampleResponses: [
          'I appreciate that concern; however, our clients recoup that investment within six months through automated efficiency gains.',
          'While the upfront licensing is higher, our lower maintenance costs make the total cost of ownership significantly cheaper over three years.',
          'That is a completely valid point; nevertheless, our platform includes premium features that competitors bill separately as expensive add-ons.'
        ],
        pronunciationTip: '"recoup that investment" (/rɪˈkuːp ðæt ɪnˈvestmənt/). Enfatize "within six months".',
        translation: 'Seu software parece impressionante, mas o custo inicial de licenciamento é consideravelmente maior do que o de outras soluções do mercado.',
        explanation: 'Focar no Retorno sobre o Investimento (ROI) e no custo total de posse (TCO) desarma a objeção de preço com elegância.'
      },
      {
        id: 's-b2-ro-2',
        type: 'speaking_item',
        itemTitle: 'Objeção: Complexidade de Treinamento',
        contextScenario: 'O diretor teme que a curva de aprendizado da equipe interna atrase a rotina diária.',
        modelAudioText: 'Our staff is already overwhelmed. Won’t transitioning to this new platform disrupt our ongoing daily workflows?',
        speechRate: 0.95,
        targetPhrase: 'Not at all; we provide hands-on onboarding sessions, and typical employees achieve full proficiency within five business days.',
        sampleResponses: [
          'Not at all; we provide hands-on onboarding sessions, and typical employees achieve full proficiency within five business days.',
          'We designed the interface specifically for intuitive adoption, and our migration team handles the data transfer seamlessly in the background.',
          'I completely understand that concern, which is why we offer dedicated support specialists during your first thirty days of deployment.'
        ],
        pronunciationTip: '"hands-on onboarding sessions" (/ˌhændz ˈɑːn ˈɑːnbɔːrdɪŋ/).',
        translation: 'Nossa equipe já está sobrecarregada. A transição para essa nova plataforma não vai atrapalhar nossos fluxos diários em andamento?',
        explanation: 'Garantir suporte guiado e citar o prazo curto de transição tranquiliza gestores avessos a atritos.'
      },
      {
        id: 's-b2-ro-3',
        type: 'speaking_item',
        itemTitle: 'Objeção: Dependência de Fornecedor Único',
        contextScenario: 'O cliente pergunta se seus dados ficarão aprisionados na plataforma caso decidam cancelar no futuro.',
        modelAudioText: 'What happens if we decide to terminate the contract? Will our data be trapped in your proprietary ecosystem?',
        speechRate: 0.95,
        targetPhrase: 'Absolutely not; you retain full data sovereignty and can export all records in standard open formats at any time.',
        sampleResponses: [
          'Absolutely not; you retain full data sovereignty and can export all records in standard open formats at any time.',
          'Our architecture strictly adheres to open standards, ensuring seamless data portability whenever you require it.',
          'You maintain complete ownership of your database, and our service level agreement guarantees export assistance without penalty.'
        ],
        pronunciationTip: '"full data sovereignty" (/fʊl ˈdeɪtə ˈsɑːvrənti/).',
        translation: 'O que acontece se decidirmos rescindir o contrato? Nossos dados ficarão presos no seu ecossistema proprietário?',
        explanation: 'Enfatizar a soberania de dados (data sovereignty) e padrões abertos elimina a desconfiança sobre "vendor lock-in".'
      }
    ]
  },
  {
    id: 'speaking-b2-rapid-critical-feedback',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b2',
    topic: 'Avaliação de Desempenho & Carreira',
    title: 'Recebendo e Respondendo a Feedbacks Construtivos',
    description: 'Responda com equilíbrio emocional e maturidade profissional a avaliações críticas sobre seu trabalho.',
    objective: 'Demonstrar escuta ativa, postura reflexiva e apresentação de plano de ação sem reagir defensivamente.',
    instructions: 'Ouça o feedback dado pelo seu gestor e formule uma resposta positiva e resolutiva.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Reunião individual (1-on-1) de alinhamento com seu líder de equipe',
      checklist: [
        'Agradecer o apontamento com maturidade',
        'Validar a observação sem inventar desculpas',
        'Propor uma medida prática imediata de correção'
      ]
    },
    questions: [
      {
        id: 's-b2-rcf-1',
        type: 'speaking_item',
        itemTitle: 'Feedback: Comunicação em Reuniões com Clientes',
        contextScenario: 'O gestor aponta que você usou jargões excessivamente técnicos que confundiram os diretores do cliente.',
        modelAudioText: 'In yesterday client meeting, some of your technical explanations seemed to overwhelm their business executives.',
        speechRate: 0.95,
        targetPhrase: 'Thank you for pointing that out. I will simplify my terminology and focus on business outcomes in future client syncs.',
        sampleResponses: [
          'Thank you for pointing that out. I will simplify my terminology and focus on business outcomes in future client syncs.',
          'I appreciate the honest feedback; I will make sure to calibrate my vocabulary to match their non-technical background next time.',
          'You are right; I got caught up in the architectural details. I will prepare executive summaries before our next presentation.'
        ],
        pronunciationTip: '"simplify my terminology" (/ˈsɪmplɪfaɪ maɪ ˌtɜːrməˈnɑːlədʒi/).',
        translation: 'Na reunião de clientes de ontem, algumas das suas explicações técnicas pareceram sobrecarregar os executivos de negócios deles.',
        explanation: 'Agradecer o apontamento e prometer foco em "business outcomes" converte uma crítica em demonstração de liderança.'
      },
      {
        id: 's-b2-rcf-2',
        type: 'speaking_item',
        itemTitle: 'Feedback: Prazos e Alertas Prévios',
        contextScenario: 'O líder avisa que atrasos de entrega devem ser comunicados com antecedência, não na véspera.',
        modelAudioText: 'It would really help the wider team if you flagged potential delivery roadblocks a few days earlier.',
        speechRate: 0.95,
        targetPhrase: 'Understood. I will provide daily standup updates whenever an unexpected dependency risks delaying our milestone.',
        sampleResponses: [
          'Understood. I will provide daily standup updates whenever an unexpected dependency risks delaying our milestone.',
          'That is a fair observation. I will make it a priority to communicate blockers immediately rather than trying to fix them in isolation.',
          'I hear you loud and clear. Starting today, I will log potential schedule risks in our shared dashboard well ahead of deadlines.'
        ],
        pronunciationTip: '"potential delivery roadblocks" (/pəˈtenʃl dɪˈlɪvəri ˈroʊdblɑːks/).',
        translation: 'Ajudaria muito a equipe como um todo se você sinalizasse potenciais entraves de entrega com alguns dias de antecedência.',
        explanation: 'Comprometer-se com alertas proativos ("flag blockers immediately") constrói confiança profissional sólida.'
      },
      {
        id: 's-b2-rcf-3',
        type: 'speaking_item',
        itemTitle: 'Feedback: Delegação de Tarefas',
        contextScenario: 'O gestor nota que você está sobrecarregado porque hesita em delegar atividades a colegas juniores.',
        modelAudioText: 'You are taking on too much solo workload. We need you to mentor junior colleagues by delegating routine tasks.',
        speechRate: 0.95,
        targetPhrase: 'You are completely right. I will organize walkthrough sessions this week to onboard the juniors onto routine tickets.',
        sampleResponses: [
          'You are completely right. I will organize walkthrough sessions this week to onboard the juniors onto routine tickets.',
          'I agree that I need to step back from execution. I will delegate the upcoming documentation audit to Maria and Alex.',
          'Point taken. I will schedule structured training so the junior analysts can confidently take over maintenance tasks.'
        ],
        pronunciationTip: '"walkthrough sessions" (/ˈwɔːkθruː ˈseʃnz/).',
        translation: 'Você está assumindo carga excessiva de trabalho sozinho. Precisamos que você oriente os colegas juniores delegando tarefas rotineiras.',
        explanation: 'Aceitar a transição de executor individual para mentor fortalece sua imagem para futuras promoções.'
      }
    ]
  },
  {
    id: 'speaking-b2-rapid-press-spokesperson',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b2',
    topic: 'Comunicação Institucional & Relações Públicas',
    title: 'Respondendo a Perguntas Difíceis da Imprensa',
    description: 'Atue como porta-voz institucional respondendo com prudência e objetividade a questionamentos jornalísticos.',
    objective: 'Empregar técnicas de transição ("bridging phrases") para conduzir a resposta a fatos verificados sem especulações.',
    instructions: 'Ouça a pergunta incisiva do repórter e formule uma resposta responsável e profissional.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Coletiva de imprensa após incidente técnico temporário',
      checklist: [
        'Manter tom calmo, empático e controlado',
        'Evitar especulações sobre causas não comprovadas',
        'Reafirmar compromisso com a apuração e assistência'
      ]
    },
    questions: [
      {
        id: 's-b2-ps-1',
        type: 'speaking_item',
        itemTitle: 'Pergunta: Rumores de Falha de Segurança',
        contextScenario: 'O repórter pergunta se dados confidenciais de usuários foram vazados durante a instabilidade.',
        modelAudioText: 'Reports on social media claim user passwords were leaked during the outage. Can you confirm or deny that?',
        speechRate: 0.95,
        targetPhrase: 'Our cybersecurity audits show zero indication of data leakage; all user credentials remain fully salted and encrypted.',
        sampleResponses: [
          'Our cybersecurity audits show zero indication of data leakage; all user credentials remain fully salted and encrypted.',
          'While we investigate the root cause, I can unequivocally state that customer databases remained isolated and protected.',
          'At this juncture, forensic telemetry confirms that the incident was strictly an internal routing failure with no external intrusion.'
        ],
        pronunciationTip: '"salted and encrypted" (/ˈsɔːltɪd ənd ɪnˈkrɪptɪd/).',
        translation: 'Relatos nas redes sociais afirmam que senhas de usuários vazaram durante o blecaute. O senhor pode confirmar ou desmentir isso?',
        explanation: 'Desmentir com base em auditoria forense concreta ("forensic telemetry confirms...") encerra a propagação de boatos.'
      },
      {
        id: 's-b2-ps-2',
        type: 'speaking_item',
        itemTitle: 'Pergunta: Compensação aos Usuários Afetados',
        contextScenario: 'A imprensa quer saber como os clientes prejudicados serão ressarcidos financeiramente.',
        modelAudioText: 'Small businesses lost revenue while your payment gateway was down. What compensation will you offer them?',
        speechRate: 0.95,
        targetPhrase: 'We deeply regret the disruption and will automatically issue service fee credits to all affected accounts on next month bill.',
        sampleResponses: [
          'We deeply regret the disruption and will automatically issue service fee credits to all affected accounts on next month bill.',
          'We take merchant trust seriously, and our leadership has authorized proactive billing credits alongside dedicated support outreach.',
          'We are actively reaching out to impacted business owners to credit transaction fees and ensure fair operational restitution.'
        ],
        pronunciationTip: '"automatically issue service fee credits" (/ˌɔːtəˈmætɪkli ˈɪʃuː/).',
        translation: 'Pequenos empresários perderam faturamento enquanto o gateway de pagamentos esteve fora do ar. Que compensação será oferecida a eles?',
        explanation: 'Oferecer créditos automáticos proativamente demonstra respeito e previne processos de clientes lesados.'
      },
      {
        id: 's-b2-ps-3',
        type: 'speaking_item',
        itemTitle: 'Pergunta: Previsão de Restabelecimento Pleno',
        contextScenario: 'O jornalista questiona quando os serviços estarão operando com cem por cento de capacidade.',
        modelAudioText: 'Can you guarantee that the platform will not suffer another relapse before markets open tomorrow morning?',
        speechRate: 0.95,
        targetPhrase: 'Our engineering teams have deployed redundant failovers, and we are monitoring capacity to ensure complete stability.',
        sampleResponses: [
          'Our engineering teams have deployed redundant failovers, and we are monitoring capacity to ensure complete stability.',
          'Systems are currently ninety-nine percent operational, and round-the-clock monitoring is in place across all regional clusters.',
          'While we avoid speculative guarantees, the core infrastructure has passed rigorous load tests and is operating within normal parameters.'
        ],
        pronunciationTip: '"redundant failovers" (/rɪˈdʌndənt ˈfeɪloʊvərz/).',
        translation: 'O senhor pode garantir que a plataforma não sofrerá outra recaída antes da abertura dos mercados amanhã de manhã?',
        explanation: 'Focar em redundâncias técnicas e monitoramento contínuo soa responsável sem criar falsas promessas imprudentes.'
      }
    ]
  },
  {
    id: 'speaking-b2-rapid-complex-explaining',
    pillar: 'speaking',
    type: 'rapid_response',
    level: 'b2',
    topic: 'Didática & Comunicação com Leigos',
    title: 'Explicando Conceitos Complexos em Linguagem Simples',
    description: 'Transforme jargões técnicos em metáforas intuitivas e exemplos cotidianos para públicos leigos.',
    objective: 'Praticar o uso de analogias claras ("It is essentially like...", "Think of it as...") com ritmo fluido.',
    instructions: 'Ouça a pergunta do cliente leigo e explique o conceito técnico de forma descomplicada.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Atendimento de suporte consultivo a um cliente não técnico',
      checklist: [
        'Uso de uma analogia cotidiana reconhecível',
        'Eliminação de siglas obscuras desnecessárias',
        'Confirmação da compreensão do interlocutor'
      ]
    },
    questions: [
      {
        id: 's-b2-ce-1',
        type: 'speaking_item',
        itemTitle: 'Conceito: Armazenamento em Nuvem',
        contextScenario: 'Um cliente idoso pergunta como seus documentos ficam seguros sem estarem gravados no computador físico dele.',
        modelAudioText: 'I still do not understand cloud storage. If my family photos are not saved on my laptop, where do they actually go?',
        speechRate: 0.95,
        targetPhrase: 'Think of the cloud like a digital safety deposit box in a bank; your photos are securely stored in high-security facilities.',
        sampleResponses: [
          'Think of the cloud like a digital safety deposit box in a bank; your photos are securely stored in high-security facilities.',
          'It is essentially like having a private locker accessible from any phone or computer with your personal key.',
          'Instead of keeping all your paper files in one drawer at home, they are held in a giant, climate-controlled vault with redundant backups.'
        ],
        pronunciationTip: '"digital safety deposit box" (/ˈdɪdʒɪtl ˈseɪfti dɪˈpɑːzɪt bɑːks/).',
        translation: 'Ainda não entendo o armazenamento em nuvem. Se minhas fotos de família não estão salvas no meu laptop, para onde elas vão na verdade?',
        explanation: 'A metáfora do cofre bancário ("safety deposit box") transmite segurança e tangibilidade para pessoas leigas.'
      },
      {
        id: 's-b2-ce-2',
        type: 'speaking_item',
        itemTitle: 'Conceito: Autenticação em Dois Fatores (2FA)',
        contextScenario: 'O usuário pergunta por que precisa receber um código no celular além de digitar sua senha usual.',
        modelAudioText: 'Why do I have to enter this extra six-digit code every time? Isn’t my password strong enough by itself?',
        speechRate: 0.95,
        targetPhrase: 'Think of it like having two different locks on your front door: even if someone steals your physical key, they still cannot get in without your second digital passcode.',
        sampleResponses: [
          'Think of it like having two different locks on your front door: even if someone steals your physical key, they still cannot get in without your second digital passcode.',
          'It is an extra layer of defense: your password is what you know, and your phone code is what you physically own.',
          'Even the strongest passwords can occasionally be leaked in data breaches; the second code guarantees nobody can log in without holding your actual device.'
        ],
        pronunciationTip: '"extra layer of defense" (/ˈekstrə ˈleɪər əv dɪˈfens/).',
        translation: 'Por que preciso digitar esse código extra de seis dígitos toda vez? Minha senha já não é forte o bastante por si só?',
        explanation: 'Comparar a duas fechaduras na porta de entrada exemplifica o valor da segurança em camadas de forma irrefutável.'
      },
      {
        id: 's-b2-ce-3',
        type: 'speaking_item',
        itemTitle: 'Conceito: Caching de Navegador',
        contextScenario: 'O cliente quer saber por que o site abre mais rápido após a primeira visita.',
        modelAudioText: 'Why does our company webpage load almost instantly the second time I open it, but took several seconds the first time?',
        speechRate: 0.95,
        targetPhrase: 'On your first visit, your browser downloads heavy images; for subsequent visits, it retrieves them from local memory to save time.',
        sampleResponses: [
          'On your first visit, your browser downloads heavy images; for subsequent visits, it retrieves them from local memory to save time.',
          'Think of it like keeping your favorite books on your bedside table rather than driving to the library every single time you want to read.',
          'Your browser keeps temporary copies of static logos so it does not have to request them over the internet on every page refresh.'
        ],
        pronunciationTip: '"retrieves them from local memory" (/rɪˈtriːvz ðəm/).',
        translation: 'Por que a página da nossa empresa carrega quase que instantaneamente na segunda vez que eu a abro, mas demorou vários segundos na primeira?',
        explanation: 'A analogia dos livros na cabeceira da cama desmistifica o conceito de cache local com leveza e clareza.'
      }
    ]
  },

  // --- 4. Fale em Situações Reais (Roleplay Situations) - 3 Atividades ---
  {
    id: 'speaking-b2-roleplay-hybrid-work',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'b2',
    topic: 'Carreira & Negociação de Trabalho',
    title: 'Simulação: Negociando Acordo de Trabalho Híbrido Flexível',
    description: 'Converse com sua gerente para formalizar dois dias semanais de home office mantendo compromisso com metas.',
    objective: 'Apresentar dados de produtividade, disponibilidade de comunicação e soluções para alinhamento presencial.',
    instructions: 'Acompanhe as ponderações da gerente em cada turno, argumente com base em métricas e celebre o acordo piloto.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Sala de reuniões da gerência de operações',
      partnerRole: 'Gerente de Departamento (Sarah)',
      userRole: 'Analista Sênior (Você)',
      checklist: [
        'Apresentação dos ganhos de produtividade em tarefas de foco profundo',
        'Garantia de presença nos dias de reunião estratégica de equipe',
        'Proposta de período de teste piloto de noventa dias'
      ]
    },
    questions: [
      {
        id: 's-b2-hw-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Propondo a Escala Flexível',
        contextScenario: 'Sarah pergunta qual assunto você gostaria de abordar. Proponha formalmente trabalhar de casa às terças e quintas.',
        modelAudioText: 'Thanks for scheduling this chat. What did you want to discuss regarding your schedule?',
        speechRate: 0.95,
        targetPhrase: 'Hi Sarah. I would like to propose transitioning to a hybrid arrangement, working remotely on Tuesdays and Thursdays to focus on deep analytical tasks.',
        sampleResponses: [
          'Hi Sarah. I would like to propose transitioning to a hybrid arrangement, working remotely on Tuesdays and Thursdays to focus on deep analytical tasks.',
          'Thanks for meeting with me, Sarah. I wanted to propose working from home two days a week to minimize commute time and maximize focused output.',
          'Good morning Sarah. I would love to explore a hybrid schedule where I handle complex report writing remotely on designated focus days.'
        ],
        pronunciationTip: '"hybrid arrangement" (/ˈhaɪbrɪd əˈreɪndʒmənt/) e "deep analytical tasks" (/ˌænəˈlɪtɪkl/).',
        translation: 'Obrigada por marcar essa conversa. O que você gostaria de discutir a respeito dos seus horários?',
        explanation: 'Vincular o home office a "deep analytical tasks" mostra foco em produtividade e não em conveniência pessoal.'
      },
      {
        id: 's-b2-hw-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Superando o Receio de Comunicação',
        contextScenario: 'Sarah teme que a equipe perca alinhamento e agilidade de resposta durante os dias remotos.',
        modelAudioText: 'I understand the appeal, but how will we handle collaborative design brainstorming and urgent client inquiries on those days?',
        speechRate: 0.95,
        targetPhrase: 'I will remain fully accessible via messaging throughout core business hours, and we can anchor all in-person brainstorming to Mondays and Wednesdays.',
        sampleResponses: [
          'I will remain fully accessible via messaging throughout core business hours, and we can anchor all in-person brainstorming to Mondays and Wednesdays.',
          'All team meetings can be grouped onto our office days, and I will maintain active status on our chat platform during remote days.',
          'I will establish transparent core availability hours and immediately join video calls whenever an urgent client emergency arises.'
        ],
        pronunciationTip: '"fully accessible throughout core business hours" (/kɔːr ˈbɪznəs ˈaʊərz/).',
        translation: 'Compreendo o apelo, mas como lidaremos com brainstormings colaborativos e dúvidas urgentes de clientes nesses dias?',
        explanation: 'Concentrar reuniões presenciais nos dias de escritório e garantir acessibilidade nos outros dias neutraliza o receio gerencial.'
      },
      {
        id: 's-b2-hw-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Proposta de Período Piloto',
        contextScenario: 'Sarah ainda parece ligeiramente receosa. Proponha um teste piloto de 90 dias avaliado por metas de entrega.',
        modelAudioText: 'It sounds reasonable on paper, but I need to make sure team performance metrics remain completely unaffected.',
        speechRate: 0.95,
        targetPhrase: 'How about we pilot this arrangement for ninety days? If my deliverables or team responsiveness drop in any way, we can immediately revert.',
        sampleResponses: [
          'How about we pilot this arrangement for ninety days? If my deliverables or team responsiveness drop in any way, we can immediately revert.',
          'Why don’t we run a three-month trial? We can review our sprint metrics at the end of each month to guarantee productivity holds up.',
          'Let us test it for two months. If there is any measurable drop in output, I will happily return to five days in person without hesitation.'
        ],
        pronunciationTip: '"pilot this arrangement" (/ˈpaɪlət ðɪs əˈreɪndʒmənt/).',
        translation: 'Parece razoável no papel, mas preciso ter certeza de que as métricas de desempenho da equipe permanecerão totalmente inalteradas.',
        explanation: 'Oferecer um teste reversível ("pilot for 90 days") remove o risco percebido e facilita a aprovação da chefia.'
      }
    ]
  },
  {
    id: 'speaking-b2-roleplay-flight-cancellation',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'b2',
    topic: 'Viagens & Direitos do Passageiro',
    title: 'Simulação: Reivindicando Reacomodação e Compensação de Voo',
    description: 'Converse com o agente do balcão de aeroporto após o cancelamento inesperado de um voo internacional.',
    objective: 'Exigir reacomodação em voo parceiro, voucher de alimentação e hospedagem em hotel mantendo postura polida e firme.',
    instructions: 'Acompanhe as respostas do atendente e utilize as regras de assistência aérea para garantir seus direitos.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Balcão de atendimento ao cliente em aeroporto internacional lotado',
      partnerRole: 'Agente de Atendimento Aéreo (David)',
      userRole: 'Passageiro em Conexão (Você)',
      checklist: [
        'Apresentação do bilhete de embarque e número de localizador',
        'Exigência de reacomodação no próximo voo disponível, mesmo de aliança parceira',
        'Solicitação de voucher de alimentação e traslado de hotel'
      ]
    },
    questions: [
      {
        id: 's-b2-fc-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Solicitando Reacomodação Prioritária',
        contextScenario: 'O atendente confirma que seu voo para Londres foi cancelado por manutenção da aeronave. Peça a opção de reacomodação mais rápida.',
        modelAudioText: 'I apologize, but Flight 402 to London has been cancelled due to mechanical issues. The next available flight on our airline is tomorrow night.',
        speechRate: 0.95,
        targetPhrase: 'I understand mechanical issues happen; however, I have an essential commitment tomorrow morning. Could you endorse my ticket to a partner carrier departing tonight?',
        sampleResponses: [
          'I understand mechanical issues happen; however, I have an essential commitment tomorrow morning. Could you endorse my ticket to a partner carrier departing tonight?',
          'Tomorrow night is too late for my schedule. Under airline passenger regulations, could you rebook me onto British Airways leaving at nine tonight?',
          'I appreciate your help, but I cannot wait twenty-four hours. Please check if Star Alliance partners have open seats departing this evening.'
        ],
        pronunciationTip: '"endorse my ticket to a partner carrier" (/ɪnˈdɔːrs maɪ ˈtɪkɪt tuː ə ˈpɑːrtnər ˈkæriər/).',
        translation: 'Peço desculpas, mas o voo 402 para Londres foi cancelado devido a problemas mecânicos. O próximo voo disponível na nossa companhia é amanhã à noite.',
        explanation: 'Pedir endosso para companhia aérea parceira ("endorse my ticket to a partner carrier") é o termo técnico que agiliza a solução.'
      },
      {
        id: 's-b2-fc-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Solicitando Vouchers de Assistência',
        contextScenario: 'O agente consegue um assento no voo de amanhã às 8h da manhã. Solicite hotel, transporte e voucher de alimentação para a noite.',
        modelAudioText: 'I managed to secure a confirmed seat on tomorrow eight a.m. departure with our partner airline. Here is your revised boarding pass.',
        speechRate: 0.95,
        targetPhrase: 'Thank you very much. Since the delay requires an overnight layover, could you please issue my hotel voucher, airport shuttle pass, and dinner meal vouchers?',
        sampleResponses: [
          'Thank you very much. Since the delay requires an overnight layover, could you please issue my hotel voucher, airport shuttle pass, and dinner meal vouchers?',
          'I appreciate that rebooking. Could you now provide the hotel accommodation voucher and food stipends covered under airline policy?',
          'That works much better, thanks. Please print my overnight accommodation vouchers and let me know where the hotel shuttle picks up.'
        ],
        pronunciationTip: '"hotel voucher, airport shuttle pass, and dinner meal vouchers".',
        translation: 'Consegui garantir um assento confirmado na partida de amanhã às 8h da manhã com nossa companhia parceira. Aqui está seu novo cartão de embarque.',
        explanation: 'Lembrar ao atendente que cancelamentos mecânicos obrigam a empresa a custear pernoite e refeições garante conforto.'
      },
      {
        id: 's-b2-fc-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Conferência da Bagagem Despachada',
        contextScenario: 'Certifique-se de que sua mala grande despachada será transferida diretamente para o novo voo da manhã.',
        modelAudioText: 'Here are your hotel and meal vouchers. The hotel shuttle departs from Door Three every twenty minutes.',
        speechRate: 0.95,
        targetPhrase: 'Perfect. Could you just confirm that my checked luggage will be automatically transferred onto tomorrow morning flight?',
        sampleResponses: [
          'Perfect. Could you just confirm that my checked luggage will be automatically transferred onto tomorrow morning flight?',
          'Wonderful. One last question: do I need to collect my checked suitcase downstairs, or will it be forwarded directly to London?',
          'Thank you for your excellent assistance. Please confirm that my bags are securely checked through to my final destination.'
        ],
        pronunciationTip: '"checked luggage will be automatically transferred" (/tʃekt ˈlʌɡɪdʒ/).',
        translation: 'Aqui estão seus vouchers de hotel e alimentação. A van do hotel sai da Porta Três a cada vinte minutos.',
        explanation: 'Conferir se a mala despachada segue direto ("checked through to final destination") evita extravios durante pernoites.'
      }
    ]
  },
  {
    id: 'speaking-b2-roleplay-neighbor-dispute',
    pillar: 'speaking',
    type: 'roleplay_situation',
    level: 'b2',
    topic: 'Cidadania & Convivência Comunitária',
    title: 'Simulação: Mediação Amigável de Ruídos e Limites com Vizinho',
    description: 'Converse com um vizinho sobre ensaios musicais noturnos e galhos de árvore que avançam sobre o seu telhado.',
    objective: 'Solucionar atritos comunitários com empatia, equilíbrio e acordos práticos sem apelar para conflitos judiciais.',
    instructions: 'Aborde o vizinho amigavelmente, formule seus pedidos com civilidade e chegue a um compromisso mútuo.',
    maxScore: 100,
    version: 1,
    speakingInfo: {
      scenario: 'Jardim da frente em um bairro residencial tranquilo',
      partnerRole: 'Vizinho (Robert)',
      userRole: 'Morador Vizinho (Você)',
      checklist: [
        'Abertura cordial com elogio ao talento musical do vizinho',
        'Explicação calma sobre o impacto do som após as 22h no sono dos filhos',
        'Acordo amigável para podar os galhos da cerca compartilhada'
      ]
    },
    questions: [
      {
        id: 's-b2-nd-1',
        type: 'speaking_item',
        itemTitle: 'Turno 1: Abordagem Amigável sobre o Horário de Som',
        contextScenario: 'Robert está no jardim. Cumprimente-o e converse sobre os ensaios de bateria dele após as dez da noite.',
        modelAudioText: 'Hey there! How is everything going next door? Enjoying the sunny weather?',
        speechRate: 0.95,
        targetPhrase: 'Hi Robert! Yes, the weather is wonderful. I actually wanted to have a quick, friendly word regarding evening music practice.',
        sampleResponses: [
          'Hi Robert! Yes, the weather is wonderful. I actually wanted to have a quick, friendly word regarding evening music practice.',
          'Good morning Robert! It is lovely outside. Do you have a quick minute? I wanted to touch base about sound levels later in the evening.',
          'Hey Robert, hope you are well. I was hoping we could chat briefly about finding a mutually convenient schedule for band rehearsals.'
        ],
        pronunciationTip: '"quick, friendly word" (/kwɪk ˈfrendli wɜːrd/). Mantenha um sorriso caloroso na voz.',
        translation: 'Olá! Como vão as coisas por aqui? Aproveitando o tempo ensolarado?',
        explanation: 'Iniciar com cordialidade desarma defesas e estabelece um canal produtivo de diálogo comunitário.'
      },
      {
        id: 's-b2-nd-2',
        type: 'speaking_item',
        itemTitle: 'Turno 2: Propondo um Limite de Horário Razoável',
        contextScenario: 'Robert pergunta se o som está alto. Explique que o som viaja pelas paredes e sugira encerrar os ensaios até as 21h30.',
        modelAudioText: 'Oh, has the sound been travelling across the fence? I usually practice drum rudiments after dinner.',
        speechRate: 0.95,
        targetPhrase: 'You play really well, but the bass vibrations carry into our children bedroom. Would it be possible to wrap up rehearsals by nine-thirty PM?',
        sampleResponses: [
          'You play really well, but the bass vibrations carry into our children bedroom. Would it be possible to wrap up rehearsals by nine-thirty PM?',
          'Your drumming sounds great, but it wakes our kids around ten. If you could finish before nine-thirty, that would help us immensely.',
          'We love that you are musical, but the acoustic resonance echoes late at night. Could we agree on a nine-thirty cutoff on weeknights?'
        ],
        pronunciationTip: '"wrap up rehearsals by nine-thirty PM" (/ræp ʌp rɪˈhɜːrslz/).',
        translation: 'Nossa, o som está passando pela cerca? Geralmente eu treino exercícios de bateria depois do jantar.',
        explanation: 'Elogiar o talento do vizinho antes de estabelecer o limite ("wrap up by 9:30") evita mágoas e gera cooperação imediata.'
      },
      {
        id: 's-b2-nd-3',
        type: 'speaking_item',
        itemTitle: 'Turno 3: Acertando a Poda dos Galhos',
        contextScenario: 'Robert concorda com o horário. Aproveite para combinar uma poda conjunta dos galhos da árvore que caem no telhado.',
        modelAudioText: 'I completely understand; I had no idea the kids could hear it. I will definitely stop by nine-thirty. Anything else on your mind?',
        speechRate: 0.95,
        targetPhrase: 'I really appreciate your neighborly cooperation, Robert. Also, if you need a hand, I would be happy to help you prune the oak branches over the driveway this Saturday.',
        sampleResponses: [
          'I really appreciate your neighborly cooperation, Robert. Also, if you need a hand, I would be happy to help you prune the oak branches over the driveway this Saturday.',
          'Thanks so much for understanding, Robert. On another note, would you mind if we trimmed back the low-hanging branches along the driveway together this weekend?',
          'You are a great neighbor, thanks. Whenever you have time, let us team up on Saturday with my hedge trimmer to tidy up the fence line.'
        ],
        pronunciationTip: '"neighborly cooperation" (/ˈneɪbərli koʊˌɑːpəˈreɪʃn/) e "prune the oak branches" (/pruːn/).',
        translation: 'Compreendo perfeitamente; não tinha ideia de que as crianças podiam ouvir. Vou parar com certeza antes das nove e meia. Mais alguma coisa?',
        explanation: 'Oferecer ajuda mútua ("happy to help you prune") reforça a camaradagem e transforma um potencial atrito em fortalecimento de laços.'
      }
    ]
  }
];

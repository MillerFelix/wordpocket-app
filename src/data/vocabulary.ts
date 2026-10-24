import { VocabWord } from '../types';

export const vocabularyData: VocabWord[] = [
  {
    id: 'resilient',
    word: 'Resilient',
    phonetic: '/rɪˈzɪl.jənt/',
    translation: 'Resiliente, resistente',
    partOfSpeech: 'adjetivo',
    category: 'trabalho',
    meaning: 'Capaz de resistir ou se recuperar rapidamente de condições difíceis.',
    exampleEn: 'The development team remained resilient through urgent production fixes.',
    examplePt: 'A equipe de desenvolvimento permaneceu resiliente durante correções urgentes de produção.',
    synonyms: ['adaptable', 'tough', 'tenacious'],
    senses: [
      {
        meaning: 'Capacidade psicológica de se adaptar a adversidades.',
        translation: 'Resiliente emocionalmente',
        exampleEn: 'He showed resilient determination despite several setbacks.',
        examplePt: 'Ele mostrou determinação resiliente apesar de vários contratempos.'
      },
      {
        meaning: 'Material ou sistema que retoma a forma ou função após estresse físico.',
        translation: 'Resistente, flexível',
        exampleEn: 'Our cloud architecture is resilient against localized network outages.',
        examplePt: 'Nossa arquitetura em nuvem é resistente a quedas localizadas de rede.'
      }
    ]
  },
  {
    id: 'insightful',
    word: 'Insightful',
    phonetic: '/ˈɪn.saɪt.fəl/',
    translation: 'Perspicaz, esclarecedor',
    partOfSpeech: 'adjetivo',
    category: 'trabalho',
    meaning: 'Que demonstra uma compreensão profunda, apurada e precisa de uma situação.',
    exampleEn: 'Her presentation offered insightful observations regarding consumer retention.',
    examplePt: 'A apresentação dela ofereceu observações perspicazes sobre a retenção de consumidores.',
    synonyms: ['perceptive', 'discerning', 'penetrating']
  },
  {
    id: 'streamline',
    word: 'Streamline',
    phonetic: '/ˈstriːm.laɪn/',
    translation: 'Otimizar, simplificar',
    partOfSpeech: 'verbo',
    category: 'tecnologia',
    meaning: 'Tornar um processo mais eficiente eliminando redundâncias e atritos desnecessários.',
    exampleEn: 'We refactored the pipeline to streamline code deployments.',
    examplePt: 'Refatoramos o pipeline para otimizar os deploys de código.',
    synonyms: ['optimize', 'simplify', 'rationalize'],
    senses: [
      {
        meaning: 'Organização de fluxos de trabalho e processos operacionais.',
        translation: 'Desburocratizar, agilizar',
        exampleEn: 'The company streamlined customer sign-ups to under two minutes.',
        examplePt: 'A empresa agilizou o cadastro de clientes para menos de dois minutos.'
      },
      {
        meaning: 'Desenho aerodinâmico ou com menor resistência física.',
        translation: 'Perfil aerodinâmico',
        exampleEn: 'Modern trains have streamlined aerodynamic noses.',
        examplePt: 'Trens modernos têm frentes aerodinâmicas com menor resistência.'
      }
    ]
  },
  {
    id: 'on-the-fence',
    word: 'On the fence',
    phonetic: '/ɒn ðə fɛns/',
    translation: 'Em cima do muro, indeciso',
    partOfSpeech: 'expressao',
    category: 'expressoes',
    meaning: 'Estar hesitante ou incapaz de escolher entre duas opções alternativas.',
    exampleEn: 'I’m still on the fence about whether to take the new contract.',
    examplePt: 'Ainda estou em cima do muro sobre aceitar o novo contrato.',
    synonyms: ['undecided', 'hesitant', 'ambivalent']
  },
  {
    id: 'figure-out',
    word: 'Figure out',
    phonetic: '/ˈfɪɡ.jər aʊt/',
    translation: 'Descobrir, resolver, compreender',
    partOfSpeech: 'phrasal-verb',
    category: 'cotidiano',
    meaning: 'Encontrar uma resposta, explicação ou solução lógica após análise.',
    exampleEn: 'Give me a second to figure out how this interface is configured.',
    examplePt: 'Dê-me um instante para descobrir como esta interface está configurada.',
    synonyms: ['solve', 'work out', 'comprehend'],
    senses: [
      {
        meaning: 'Entender a personalidade ou os motivos de alguém.',
        translation: 'Decifrar alguém',
        exampleEn: 'I can never figure him out when he stays quiet.',
        examplePt: 'Nunca consigo decifrá-lo quando ele fica em silêncio.'
      },
      {
        meaning: 'Calcular valores ou montantes matemáticos.',
        translation: 'Calcular, estimar',
        exampleEn: 'We need to figure out our total travel expenses.',
        examplePt: 'Precisamos calcular nossas despesas totais de viagem.'
      }
    ]
  },
  {
    id: 'seamless',
    word: 'Seamless',
    phonetic: '/ˈsiːm.ləs/',
    translation: 'Fluido, sem atrito, contínuo',
    partOfSpeech: 'adjetivo',
    category: 'tecnologia',
    meaning: 'Sem emendas visíveis ou interrupções; que transcorre com total harmonia.',
    exampleEn: 'The offline mode provides a seamless user experience during network drops.',
    examplePt: 'O modo offline proporciona uma experiência fluida durante quedas de rede.',
    synonyms: ['smooth', 'frictionless', 'unbroken']
  },
  {
    id: 'deploy',
    word: 'Deploy',
    phonetic: '/dɪˈplɔɪ/',
    translation: 'Implantar, publicar, posicionar',
    partOfSpeech: 'verbo',
    category: 'tecnologia',
    meaning: 'Colocar software, recursos ou sistemas em operação produtiva.',
    exampleEn: 'Automated tests run before we deploy the update to production.',
    examplePt: 'Testes automatizados rodam antes de implantarmos a atualização em produção.',
    synonyms: ['release', 'launch', 'implement']
  },
  {
    id: 'carry-on',
    word: 'Carry-on',
    phonetic: '/ˈkær.i.ɒn/',
    translation: 'Mala de mão, bagagem de cabine',
    partOfSpeech: 'substantivo',
    category: 'viagem',
    meaning: 'Bagagem pessoal compacta permitida dentro da cabine do avião.',
    exampleEn: 'Ensure your carry-on luggage meets the overhead bin guidelines.',
    examplePt: 'Certifique-se de que sua mala de mão atende às diretrizes do compartimento superior.'
  },
  {
    id: 'layover',
    word: 'Layover',
    phonetic: '/ˈleɪˌoʊ.vər/',
    translation: 'Conexão, escala de viagem',
    partOfSpeech: 'substantivo',
    category: 'viagem',
    meaning: 'Período de espera entre voos em um aeroporto intermediário.',
    exampleEn: 'We spent our three-hour layover browsing the airport bookstore.',
    examplePt: 'Passamos nossa escala de três horas olhando a livraria do aeroporto.',
    synonyms: ['stopover', 'transit']
  },
  {
    id: 'boarding-pass',
    word: 'Boarding pass',
    phonetic: '/ˈbɔːr.dɪŋ ˌpæs/',
    translation: 'Cartão de embarque',
    partOfSpeech: 'substantivo',
    category: 'viagem',
    meaning: 'Documento oficial ou bilhete digital que autoriza a entrada na aeronave.',
    exampleEn: 'Save your boarding pass to your mobile wallet for offline access.',
    examplePt: 'Salve seu cartão de embarque na carteira digital para acesso offline.'
  },
  {
    id: 'commute',
    word: 'Commute',
    phonetic: '/kəˈmjuːt/',
    translation: 'Deslocamento diário (casa-trabalho)',
    partOfSpeech: 'substantivo',
    category: 'cotidiano',
    meaning: 'A viagem rotineira de ida e volta entre residência e o local de trabalho ou estudo.',
    exampleEn: 'I use my forty-minute train commute to read non-fiction books.',
    examplePt: 'Aproveito meu deslocamento de trem de quarenta minutos para ler livros de não ficção.',
    synonyms: ['journey', 'daily travel']
  },
  {
    id: 'reliable',
    word: 'Reliable',
    phonetic: '/rɪˈlaɪ.ə.bəl/',
    translation: 'Confiável, consistente',
    partOfSpeech: 'adjetivo',
    category: 'cotidiano',
    meaning: 'Digno de confiança; consistente na qualidade e pontualidade.',
    exampleEn: 'A reliable backup system prevents unwanted loss of study progress.',
    examplePt: 'Um sistema de backup confiável evita a perda indesejada do progresso de estudo.',
    synonyms: ['dependable', 'trustworthy', 'steadfast']
  },
  {
    id: 'hit-the-books',
    word: 'Hit the books',
    phonetic: '/hɪt ðə bʊks/',
    translation: 'Estudar com afinco',
    partOfSpeech: 'expressao',
    category: 'expressoes',
    meaning: 'Expressão idiomática informal que significa dedicar-se intensamente aos estudos.',
    exampleEn: 'Final evaluations are next week, so it’s time to hit the books.',
    examplePt: 'As avaliações finais são na próxima semana, então é hora de estudar com afinco.'
  },
  {
    id: 'breakdown',
    word: 'Breakdown',
    phonetic: '/ˈbreɪk.daʊn/',
    translation: 'Detalhamento, divisão analítica; pane',
    partOfSpeech: 'substantivo',
    category: 'trabalho',
    meaning: 'Divisão de dados ou problemas complexos em componentes menores e fáceis de analisar.',
    exampleEn: 'Please email me a cost breakdown for each project phase.',
    examplePt: 'Por favor, envie-me por e-mail um detalhamento de custos para cada fase do projeto.',
    senses: [
      {
        meaning: 'Falha ou colapso mecânico/operacional.',
        translation: 'Pane, quebra mecânica',
        exampleEn: 'An unexpected server breakdown was resolved in twenty minutes.',
        examplePt: 'Uma pane inesperada no servidor foi resolvida em vinte minutos.'
      }
    ]
  },
  {
    id: 'turnaround',
    word: 'Turnaround',
    phonetic: '/ˈtɜːrn.ə.raʊnd/',
    translation: 'Tempo de entrega, reviravolta',
    partOfSpeech: 'substantivo',
    category: 'trabalho',
    meaning: 'Tempo gasto para receber, processar e devolver um pedido ou trabalho.',
    exampleEn: 'The client appreciated our swift turnaround on their urgent request.',
    examplePt: 'O cliente apreciou nosso tempo de entrega rápido para a solicitação urgente.'
  },
  {
    id: 'comprehensive',
    word: 'Comprehensive',
    phonetic: '/ˌkɑːm.prɪˈhen.sɪv/',
    translation: 'Abrangente, completo',
    partOfSpeech: 'adjetivo',
    category: 'academico',
    meaning: 'Que abrange todos ou quase todos os aspectos e elementos de um tema.',
    exampleEn: 'This guide provides a comprehensive overview of irregular conjugations.',
    examplePt: 'Este guia fornece uma visão abrangente das conjugações irregulares.',
    synonyms: ['exhaustive', 'thorough', 'all-inclusive']
  },
  {
    id: 'nuance',
    word: 'Nuance',
    phonetic: '/ˈnuː.ɑːns/',
    translation: 'Nuance, sutileza',
    partOfSpeech: 'substantivo',
    category: 'academico',
    meaning: 'Sutil diferença de significado, tom, cor ou expressão.',
    exampleEn: 'Paying attention to nuance helps you speak much more naturally.',
    examplePt: 'Prestar atenção às nuances ajuda você a falar de forma muito mais natural.',
    synonyms: ['subtlety', 'shade', 'refinement']
  },
  {
    id: 'tangible',
    word: 'Tangible',
    phonetic: '/ˈtæn.dʒə.bəl/',
    translation: 'Tangível, concreto, palpável',
    partOfSpeech: 'adjetivo',
    category: 'trabalho',
    meaning: 'Que pode ser percebido pelos sentidos ou comprovado na prática.',
    exampleEn: 'Daily practice yields tangible improvements in listening comprehension.',
    examplePt: 'A prática diária produz melhorias tangíveis na compreensão auditiva.',
    synonyms: ['concrete', 'palpable', 'measurable']
  },
  {
    id: 'take-for-granted',
    word: 'Take for granted',
    phonetic: '/teɪk fɔːr ˈɡræn.tɪd/',
    translation: 'Dar como certo, não valorizar',
    partOfSpeech: 'expressao',
    category: 'expressoes',
    meaning: 'Subestimar ou presumir algo sem reconhecer seu real valor.',
    exampleEn: 'Don’t take your language learning progress for granted; celebrate small wins.',
    examplePt: 'Não dê seu progresso no aprendizado por garantido; comemore as pequenas vitórias.'
  },
  {
    id: 'wrap-up',
    word: 'Wrap up',
    phonetic: '/ræp ʌp/',
    translation: 'Concluir, finalizar, embrulhar',
    partOfSpeech: 'phrasal-verb',
    category: 'trabalho',
    meaning: 'Encerrar uma reunião, atividade ou tarefa de forma satisfatória.',
    exampleEn: 'Let’s wrap up today’s standup with action items.',
    examplePt: 'Vamos concluir a reunião de hoje com os itens de ação.',
    synonyms: ['conclude', 'finalize', 'finish']
  },
  {
    id: 'leverage',
    word: 'Leverage',
    phonetic: '/ˈlev.ər.ɪdʒ/',
    translation: 'Aproveitar ao máximo, alavancar',
    partOfSpeech: 'verbo',
    category: 'trabalho',
    meaning: 'Utilizar algo já existente para obter vantagem máxima ou melhor resultado.',
    exampleEn: 'We leverage modern CSS grid features to build responsive desktop layouts.',
    examplePt: 'Aproveitamos recursos modernos do CSS Grid para construir layouts responsivos para desktop.'
  },
  {
    id: 'catch-22',
    word: 'Catch-22',
    phonetic: '/ˌkætʃ.twen.tiˈtuː/',
    translation: 'Beco sem saída, dilema paradoxal',
    partOfSpeech: 'expressao',
    category: 'expressoes',
    meaning: 'Situação problemática sem solução porque as condições necessárias dependem uma da outra.',
    exampleEn: 'Needing experience to get a job is a classic catch-22 for graduates.',
    examplePt: 'Precisar de experiência para conseguir um emprego é um clássico beco sem saída para recém-formados.'
  },
  {
    id: 'cutting-edge',
    word: 'Cutting-edge',
    phonetic: '/ˌkʌt.ɪŋ ˈedʒ/',
    translation: 'De vanguarda, de ponta',
    partOfSpeech: 'adjetivo',
    category: 'tecnologia',
    meaning: 'No mais alto e recente nível de desenvolvimento científico ou tecnológico.',
    exampleEn: 'The team adopted cutting-edge tools to accelerate software delivery.',
    examplePt: 'A equipe adotou ferramentas de ponta para acelerar a entrega de software.'
  },
  {
    id: 'feasible',
    word: 'Feasible',
    phonetic: '/ˈfiː.zə.bəl/',
    translation: 'Viável, exequível',
    partOfSpeech: 'adjetivo',
    category: 'trabalho',
    meaning: 'Possível de ser feito com facilidade ou conveniência nos prazos estipulados.',
    exampleEn: 'Building this feature offline-first is completely feasible.',
    examplePt: 'Construir este recurso com foco offline é totalmente viável.'
  },
  {
    id: 'get-by',
    word: 'Get by',
    phonetic: '/ɡet baɪ/',
    translation: 'Se virar, sobreviver com o que tem',
    partOfSpeech: 'phrasal-verb',
    category: 'cotidiano',
    meaning: 'Conseguir lidar com uma situação utilizando apenas o conhecimento ou recursos mínimos disponíveis.',
    exampleEn: 'With basic English vocabulary, you can easily get by at the airport.',
    examplePt: 'Com vocabulário básico de inglês, você consegue se virar tranquilamente no aeroporto.'
  }
];

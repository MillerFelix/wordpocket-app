import { LearningArticle } from '../../types/learning';

export const FUNDAMENTOS_ARTICLES: LearningArticle[] = [
  {
    id: 'pronomes-pessoais',
    title: 'Pronomes Pessoais: Sujeito e Objeto no Inglês',
    description: 'Aprenda quando usar I, you, he, she, it, we, they e como diferenciá-los de me, him, her, us e them sem cometer erros comuns.',
    categoryId: 'fundamentos',
    level: 'A1',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['pronomes', 'subject pronouns', 'object pronouns', 'sujeito', 'objeto', 'eu', 'ele', 'ela'],
    relatedArticleIds: ['verbo-to-be-presente', 'ordem-palavras-ingles', 'pronomes-adjetivos-possessivos'],
    sections: [
      {
        title: 'Por que o inglês nunca oculta o sujeito?',
        content: 'Em português, podemos dizer apenas "Fui ao mercado" ou "Está chovendo". Em inglês, isso é impossível: todo verbo exige um sujeito explícito, salvo no modo imperativo. Se não houver pessoa clara, usamos o pronome impessoal "it" (ex: "It is raining").',
        callout: {
          type: 'warning',
          title: 'Atenção com sujeitos ocultos',
          text: 'Nunca diga apenas "Is good" ou "Went home". O correto é sempre "It is good" e "I went home".'
        }
      },
      {
        title: 'Pronomes do Caso Reto (Subject Pronouns)',
        content: 'Estes pronomes realizam a ação do verbo e quase sempre vêm antes dele na frase afirmativa.',
        rules: [
          { title: 'I (Eu)', explanation: 'Sempre escrito com letra maiúscula, em qualquer posição da frase.', formula: 'I + verbo' },
          { title: 'You (Você / Vocês)', explanation: 'Serve tanto para singular quanto para plural; o contexto esclarece.', formula: 'You + verbo' },
          { title: 'He, She, It (Ele, Ela, Neutro)', explanation: 'He para homens, She para mulheres, It para animais, coisas, ideias ou tempo.', formula: 'He/She/It + verbo(s)' },
          { title: 'We (Nós) e They (Eles / Elas)', explanation: 'They é o plural de he, she e it.', formula: 'We/They + verbo' }
        ],
        examples: [
          { en: 'I study English every morning.', pt: 'Eu estudo inglês todas as manhãs.' },
          { en: 'She works at a technology company.', pt: 'Ela trabalha em uma empresa de tecnologia.' },
          { en: 'It is very cold outside today.', pt: 'Está muito frio lá fora hoje.' },
          { en: 'They live in Toronto.', pt: 'Eles moram em Toronto.' }
        ]
      },
      {
        title: 'Pronomes do Caso Oblíquo (Object Pronouns)',
        content: 'Estes pronomes recebem a ação do verbo ou vêm acompanhados de preposições (to, with, for, about).',
        rules: [
          { title: 'Tabela de Correspondência', explanation: 'I -> me | you -> you | he -> him | she -> her | it -> it | we -> us | they -> them' }
        ],
        examples: [
          { en: 'Can you call me later?', pt: 'Você pode me ligar mais tarde?' },
          { en: 'She invited him to the meeting.', pt: 'Ela o convidou para a reunião.' },
          { en: 'This message is for us.', pt: 'Esta mensagem é para nós.' },
          { en: 'I saw them at the supermarket.', pt: 'Eu os vi no supermercado.' }
        ],
        comparisons: [
          {
            labelA: 'Sujeito (Quem faz)',
            exampleA: 'She called him.',
            labelB: 'Objeto (Quem recebe)',
            exampleB: 'He called her.',
            explanation: 'Observe que "she" vira "her" quando recebe a ação, e "he" vira "him".'
          }
        ]
      },
      {
        title: 'Erros Mais Comuns de Brasileiros',
        content: 'Veja onde a maioria dos estudantes se confunde por tentar traduzir ao pé da letra:',
        mistakes: [
          {
            wrong: 'Him and me went to the party.',
            correct: 'He and I went to the party.',
            explanation: 'Antes do verbo ("went"), devemos usar pronomes sujeito (He and I), e não pronomes objeto.'
          },
          {
            wrong: 'Between you and I, this is hard.',
            correct: 'Between you and me, this is hard.',
            explanation: 'Após preposição ("between"), deve-se usar o pronome objeto "me", nunca "I".'
          },
          {
            wrong: 'Is raining today.',
            correct: 'It is raining today.',
            explanation: 'Fenômenos da natureza exigem o pronome impessoal "it" como sujeito obrigatório.'
          }
        ]
      }
    ],
    takeaways: [
      'O inglês nunca omite o sujeito do verbo na afirmativa e negativa.',
      'O pronome "I" (eu) é rigorosamente grafado em maiúscula em qualquer posição da frase.',
      '"It" é o sujeito obrigatório para tempo, clima, objetos e animais neutros.',
      'Use subject pronouns (I, he, she...) antes do verbo e object pronouns (me, him, her...) após verbos e preposições.'
    ]
  },
  {
    id: 'verbo-to-be-presente',
    title: 'Verbo To Be no Presente: Am, Is e Are Explicados',
    description: 'Entenda os dois significados fundamentais (ser e estar), como conjugar cada pessoa e como formar frases naturais sem travar.',
    categoryId: 'fundamentos',
    level: 'A1',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['verbo to be', 'am', 'is', 'are', 'ser', 'estar', 'presente', 'conjugacao'],
    relatedArticleIds: ['diferenca-to-be-outros-verbos', 'contracoes-comuns', 'construcao-frases-fundamentos'],
    sections: [
      {
        title: 'Os Dois Sentidos do To Be: Ser e Estar',
        content: 'Em português temos dois verbos distintos: "Eu sou feliz" (permanente/identidade) e "Eu estou cansado" (estado temporário). Em inglês, o verbo "to be" cobre as duas realidades. O contexto da frase é quem define o sentido.',
        examples: [
          { en: 'I am a doctor.', pt: 'Eu sou médico (profissão / identidade).' },
          { en: 'I am in London right now.', pt: 'Eu estou em Londres agora (localização / estado temporário).' },
          { en: 'She is tired.', pt: 'Ela está cansada.' },
          { en: 'She is Canadian.', pt: 'Ela é canadense.' }
        ]
      },
      {
        title: 'As Três Formas do Presente: Am, Is e Are',
        content: 'O verbo to be é o mais irregular do inglês. No presente simples ele possui três formatos exclusivos:',
        rules: [
          { title: 'Am', explanation: 'Usado exclusivamente com o pronome "I".', formula: 'I am' },
          { title: 'Is', explanation: 'Usado com terceira pessoa do singular: he, she, it ou substantivos no singular.', formula: 'He / She / It / The car + is' },
          { title: 'Are', explanation: 'Usado com você, nós e eles: you, we, they ou substantivos no plural.', formula: 'You / We / They / The books + are' }
        ],
        examples: [
          { en: 'I am ready.', pt: 'Eu estou pronto.' },
          { en: 'He is my brother.', pt: 'Ele é meu irmão.' },
          { en: 'The weather is great today.', pt: 'O clima está ótimo hoje.' },
          { en: 'We are late for the train.', pt: 'Nós estamos atrasados para o trem.' }
        ]
      },
      {
        title: 'Negativa e Pergunta: Autonomia Total',
        content: 'Ao contrário da maioria dos verbos em inglês, o verbo to be NÃO precisa do auxiliar do/does. Ele forma a negativa adicionando "not" diretamente e a pergunta invertendo sua posição com o sujeito.',
        rules: [
          { title: 'Forma Afirmativa', explanation: 'Sujeito + am/is/are + complemento', formula: 'You are an engineer.' },
          { title: 'Forma Negativa', explanation: 'Sujeito + am/is/are + not + complemento', formula: 'You are not (aren\'t) an engineer.' },
          { title: 'Forma Interrogativa', explanation: 'Am/Is/Are + sujeito + complemento?', formula: 'Are you an engineer?' }
        ],
        examples: [
          { en: 'Are you at home?', pt: 'Você está em casa?' },
          { en: 'Yes, I am. / No, I am not.', pt: 'Sim, estou. / Não, não estou.' },
          { en: 'Is Carlos from Brazil?', pt: 'O Carlos é do Brasil?' },
          { en: 'No, he isn\'t. He is from Portugal.', pt: 'Não, ele não é. Ele é de Portugal.' }
        ]
      },
      {
        title: 'Erros Clássicos de Brasileiros',
        content: 'O verbo to be costuma gerar confusões quando expressamos idade, frio, fome ou calor:',
        mistakes: [
          {
            wrong: 'I have 25 years old.',
            correct: 'I am 25 years old.',
            explanation: 'Em inglês, a idade é um estado do ser ("to be"), não uma posse ("have").'
          },
          {
            wrong: 'I have cold / I have hungry.',
            correct: 'I am cold / I am hungry.',
            explanation: 'Sensações físicas são estados do corpo, expressos com to be: I am hungry (estou com fome), I am thirsty (com sede).'
          },
          {
            wrong: 'Do you are happy?',
            correct: 'Are you happy?',
            explanation: 'Nunca use o auxiliar "do" junto com o verbo to be no presente simples.'
          }
        ]
      }
    ],
    takeaways: [
      'To be significa tanto "ser" quanto "estar"; o contexto define o sentido.',
      'Suas 3 formas no presente são: am (I), is (he/she/it/singular) e are (you/we/they/plural).',
      'Para negar, basta colocar "not" logo depois (is not = isn\'t, are not = aren\'t).',
      'Para perguntar, inverta a ordem: coloque o verbo antes do sujeito (Are you...? / Is he...?).',
      'Idade, fome, sede, frio e calor usam o verbo to be, nunca o verbo to have.'
    ]
  },
  {
    id: 'contracoes-comuns',
    title: 'Contrações no Inglês: I\'m, You\'re, Isn\'t, Don\'t e Outras',
    description: 'Descubra como os nativos encurtam palavras na fala e escrita cotidiana para soar naturais e fluir com clareza.',
    categoryId: 'fundamentos',
    level: 'A1',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['contracoes', 'short forms', 'don\'t', 'isn\'t', 'i\'m', 'you\'re', 'fluencia', 'apostrofo'],
    relatedArticleIds: ['verbo-to-be-presente', 'uso-do-does', 'como-formar-negativas'],
    sections: [
      {
        title: 'O que são contrações e por que usá-las?',
        content: 'Contrações são uniões de duas palavras em uma só, onde uma ou mais letras são substituídas por um apóstrofo (\'). Elas não são gírias nem erro gramatical: são a forma padrão de falar e escrever do cotidiano em todos os países de língua inglesa. Não usar contrações na fala casual soa robótico e artificial.',
        callout: {
          type: 'tip',
          title: 'Quando evitar contrações?',
          text: 'Evite contrações apenas em redações acadêmicas formais, contratos legais ou documentos oficiais de trabalho.'
        }
      },
      {
        title: 'Contrações com o Verbo To Be',
        content: 'No presente afirmativo e negativo, unimos o pronome ao verbo ou o verbo ao "not":',
        rules: [
          { title: 'I am -> I\'m', explanation: 'Pronúncia: /aɪm/. Ex: I\'m happy.' },
          { title: 'You are -> You\'re | We are -> We\'re | They are -> They\'re', explanation: 'Atenção à pronúncia: You\'re soa igual a "your", e They\'re soa igual a "their".' },
          { title: 'He is -> He\'s | She is -> She\'s | It is -> It\'s', explanation: 'Cuidado para não confundir it\'s (it is) com its (possessivo dele/dela).' },
          { title: 'Is not -> Isn\'t | Are not -> Aren\'t', explanation: 'I am not contrai como "I\'m not" (não existe "amn\'t").' }
        ],
        examples: [
          { en: 'I\'m leaving in five minutes.', pt: 'Eu estou saindo em cinco minutos.' },
          { en: 'She\'s not here today. / She isn\'t here today.', pt: 'Ela não está aqui hoje.' },
          { en: 'We\'re ready for the presentation.', pt: 'Nós estamos prontos para a apresentação.' },
          { en: 'They aren\'t coming to dinner.', pt: 'Eles não virão ao jantar.' }
        ]
      },
      {
        title: 'Contrações com Auxiliares e Modais',
        content: 'Os verbos auxiliares e modais formam grande parte das negativas mais ouvidas no inglês:',
        rules: [
          { title: 'Do not -> Don\'t', explanation: 'Usado para I, you, we, they no presente.' },
          { title: 'Does not -> Doesn\'t', explanation: 'Usado para he, she, it no presente.' },
          { title: 'Did not -> Didn\'t', explanation: 'Usado para todas as pessoas no passado.' },
          { title: 'Cannot -> Can\'t | Will not -> Won\'t', explanation: 'Won\'t é a contração irregular de will + not.' }
        ],
        examples: [
          { en: 'I don\'t understand this question.', pt: 'Eu não entendo esta pergunta.' },
          { en: 'He doesn\'t like spicy food.', pt: 'Ele não gosta de comida apimentada.' },
          { en: 'We didn\'t see anything unusual.', pt: 'Nós não vimos nada de anormal.' },
          { en: 'I won\'t forget your help.', pt: 'Eu não vou esquecer a sua ajuda.' }
        ]
      },
      {
        title: 'Cuidado com os Homófonos',
        content: 'Muitas contrações têm som idêntico a outras palavras em inglês, gerando erros ortográficos até entre nativos:',
        comparisons: [
          {
            labelA: 'It\'s (It is / It has)',
            exampleA: 'It\'s a lovely morning.',
            labelB: 'Its (Possessivo neutro)',
            exampleB: 'The cat licked its paws.',
            explanation: 'Se puder substituir por "it is", use o apóstrofo (It\'s). Se for posse ("daquilo"), use its sem apóstrofo.'
          },
          {
            labelA: 'You\'re (You are)',
            exampleA: 'You\'re doing great!',
            labelB: 'Your (Seu / Sua)',
            exampleB: 'Where is your bag?',
            explanation: 'You\'re = você é/está. Your = seu/sua.'
          }
        ]
      }
    ],
    takeaways: [
      'Contrações são a norma no inglês falado e informal escrito.',
      'O apóstrofo (\') indica a omissão de uma ou mais letras.',
      'A negativa de "I am" é sempre "I\'m not", nunca "amn\'t".',
      'Will + not se transforma em "won\'t" de forma irregular.',
      'Diferencie bem: it\'s (it is) vs its (dele/dela); you\'re (you are) vs your (seu).'
    ]
  },
  {
    id: 'diferenca-to-be-outros-verbos',
    title: 'Diferença Crucial: Verbo To Be vs Outros Verbos de Ação',
    description: 'Compreenda a fronteira que separa o To Be de todos os demais verbos em inglês e elimine o erro número um de iniciantes.',
    categoryId: 'fundamentos',
    level: 'A1',
    readingTimeMinutes: 5,
    isEssential: true,
    keywords: ['to be vs do', 'verbos de acao', 'auxiliares', 'regras gramaticais', 'diferencas'],
    relatedArticleIds: ['verbo-to-be-presente', 'uso-do-does', 'como-formar-negativas'],
    sections: [
      {
        title: 'Os Dois Mundos Verbais do Inglês',
        content: 'No inglês, os verbos dividem-se em dois universos fundamentais que nunca devem ser misturados no presente simples: o universo do verbo "to be" (ser/estar) e o universo de todos os outros verbos (trabalhar, comer, viver, falar, gostar).'
      },
      {
        title: 'Como Cada Grupo se Comporta',
        content: 'Veja a diferença estrutural nas afirmativas, negativas e perguntas:',
        rules: [
          {
            title: 'Mundo do To Be (Autossuficiente)',
            explanation: 'Não precisa de ajuda externa. Ele mesmo se inverte para perguntar e recebe o "not" para negar.',
            formula: 'He is happy. | He is not happy. | Is he happy?'
          },
          {
            title: 'Mundo dos Outros Verbos (Depende de Auxiliares)',
            explanation: 'Verbos comuns (like, work, go) não conseguem perguntar nem negar sozinhos no presente. Eles exigem os auxiliares DO e DOES.',
            formula: 'He works. | He doesn\'t work. | Does he work?'
          }
        ],
        comparisons: [
          {
            labelA: 'Frase com To Be (Estado/Identidade)',
            exampleA: 'She is an architect.',
            labelB: 'Frase com Ação (Outro verbo)',
            exampleB: 'She designs houses.',
            explanation: 'Na primeira temos "is" (ser/estar). Na segunda temos "designs" (verbo de ação pura).'
          },
          {
            labelA: 'Negativa com To Be',
            exampleA: 'They are not tired.',
            labelB: 'Negativa com Outro Verbo',
            exampleB: 'They do not work on Sundays.',
            explanation: 'To be usa "are not". Verbos comuns usam "do not + verbo base".'
          }
        ]
      },
      {
        title: 'O Erro Mais Frequente: Juntar To Be com Outro Verbo',
        content: 'Muitos estudantes colocam "am", "is" ou "are" antes de verbos simples por hábito do português:',
        mistakes: [
          {
            wrong: 'I am agree with you.',
            correct: 'I agree with you.',
            explanation: 'Em inglês, "agree" já é um verbo pleno que significa "concordar". Não se usa to be junto: diga "I agree" ou "I don\'t agree".'
          },
          {
            wrong: 'Do you are tired?',
            correct: 'Are you tired?',
            explanation: 'To be nunca aceita "do". Inverta o próprio verbo para fazer a pergunta.'
          },
          {
            wrong: 'He is work at Google.',
            correct: 'He works at Google. / He is working at Google.',
            explanation: 'Ou você usa o Simple Present para rotina ("He works"), ou o Present Continuous para ação agora ("He is working"). Nunca junte "is" com o verbo puro "work".'
          }
        ]
      }
    ],
    takeaways: [
      'O verbo To Be é autossuficiente: não aceita auxiliares como do ou does no presente.',
      'Verbos comuns (work, live, study, like) exigem do/does para perguntas e don\'t/doesn\'t para negativas.',
      'Nunca diga "I am agree"; diga sempre "I agree".',
      'Não junte to be com outro verbo no infinitivo sem a terminação "-ing" (contínuo).'
    ]
  },
  {
    id: 'construcao-frases-fundamentos',
    title: 'Como Construir Frases: Afirmativas, Negativas e Interrogativas',
    description: 'Domine a fórmula mestre para estruturar qualquer pensamento em inglês com clareza imediata e sem bloqueios mentais.',
    categoryId: 'fundamentos',
    level: 'A1',
    readingTimeMinutes: 6,
    isEssential: true,
    keywords: ['estruturas de frases', 'afirmativa', 'negativa', 'interrogativa', 'sintaxe', 'sujeito verbo objeto'],
    relatedArticleIds: ['ordem-palavras-ingles', 'como-formar-negativas', 'como-formular-perguntas'],
    sections: [
      {
        title: 'A Fórmula Universal do Inglês (S-V-O)',
        content: 'Enquanto o português permite inverter a ordem livremente ("Chegou a encomenda" ou "A encomenda chegou"), o inglês tem uma estrutura rígida e linear: Sujeito + Verbo + Objeto (S-V-O). Seguir essa ordem garante 90% de acerto nas suas frases básicas.',
        rules: [
          {
            title: 'Estrutura Afirmativa',
            explanation: '[Quem faz a ação] + [Ação realizada] + [Quem/O que recebe]',
            formula: 'Subject + Verb + Object'
          }
        ],
        examples: [
          { en: 'Maria drinks coffee every morning.', pt: 'Maria bebe café todas as manhãs.' },
          { en: 'We bought a new car yesterday.', pt: 'Nós compramos um carro novo ontem.' },
          { en: 'Alex loves classical music.', pt: 'Alex ama música clássica.' }
        ]
      },
      {
        title: 'Como Montar a Forma Negativa',
        content: 'Para negar em inglês, raramente colocamos apenas a palavra "no" antes do verbo. A regra geral exige um verbo auxiliar acompanhado da partícula "not":',
        rules: [
          {
            title: 'Fórmula Negativa Geral',
            explanation: 'Sujeito + Auxiliar + NOT + Verbo Principal (no infinitivo sem to) + Complemento',
            formula: 'Subject + Auxiliary + not + Main Verb + Object'
          }
        ],
        examples: [
          { en: 'I do not (don\'t) live here.', pt: 'Eu não moro aqui.' },
          { en: 'He does not (doesn\'t) speak Italian.', pt: 'Ele não fala italiano.' },
          { en: 'They did not (didn\'t) come to the party.', pt: 'Eles não vieram à festa.' }
        ]
      },
      {
        title: 'Como Montar a Forma Interrogativa',
        content: 'Para perguntar, o inglês utiliza o mecanismo da inversão: o verbo auxiliar ou o verbo to be passa para a frente do sujeito.',
        rules: [
          {
            title: 'Fórmula da Pergunta de Sim/Não',
            explanation: 'Auxiliar + Sujeito + Verbo Principal + Complemento?',
            formula: 'Auxiliary + Subject + Main Verb + Object?'
          },
          {
            title: 'Fórmula com Palavras Interrogativas (Wh- Questions)',
            explanation: 'Palavra de pergunta (What, Where, When, Why, How) + Auxiliar + Sujeito + Verbo Principal?',
            formula: 'Wh- word + Auxiliary + Subject + Main Verb?'
          }
        ],
        examples: [
          { en: 'Do you study English?', pt: 'Você estuda inglês?' },
          { en: 'Does she work on Saturdays?', pt: 'Ela trabalha aos sábados?' },
          { en: 'Where do you want to go?', pt: 'Onde você quer ir?' },
          { en: 'Why did they cancel the flight?', pt: 'Por que eles cancelaram o voo?' }
        ]
      },
      {
        title: 'Resumo das 3 Formas no Presente',
        content: 'Veja a mesma ideia expressa nas três estruturas:',
        comparisons: [
          {
            labelA: 'Afirmativa',
            exampleA: 'You speak English.',
            labelB: 'Negativa',
            exampleB: 'You don\'t speak English.',
            explanation: 'Adicionamos o auxiliar don\'t antes do verbo.'
          },
          {
            labelA: 'Afirmativa',
            exampleA: 'You speak English.',
            labelB: 'Interrogativa',
            exampleB: 'Do you speak English?',
            explanation: 'Movemos o auxiliar "Do" para antes do sujeito "You".'
          }
        ]
      }
    ],
    takeaways: [
      'A ordem padrão da afirmativa em inglês é rígida: Sujeito + Verbo + Objeto.',
      'A negativa padrão exige Auxiliar + NOT (don\'t / doesn\'t / didn\'t).',
      'A pergunta em inglês sempre começa com o auxiliar (ou to be) antes do sujeito.',
      'Quando o auxiliar entra na frase, o verbo principal volta à sua forma base (infinitivo).'
    ]
  }
];

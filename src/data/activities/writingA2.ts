import { Activity } from '../../types/activity';

export const WRITING_A2: Activity[] = [
  // 1. Complete as lacunas (A2) - Existente
  {
    id: 'writing-a2-fill-past',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a2',
    topic: 'Passado Simples & Verbos Irregulares',
    title: 'Relatando o Dia de Ontem',
    description: 'Complete as frases com o passado simples dos verbos irregulares mais comuns.',
    objective: 'Consolidar a ortografia das formas do Simple Past na narrativa de eventos passados.',
    instructions: 'Escreva a forma do passado do verbo indicado entre parênteses.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-fb-1',
        type: 'fill_blank',
        prompt: 'Complete com o passado de "buy" (comprar):',
        sentenceWithBlank: 'Yesterday, I ___ a new English grammar book online.',
        expectedAnswers: ['bought'],
        hint: 'Verbo irregular: buy -> ?',
        explanation: 'O passado simples de "buy" é a forma irregular "bought".'
      },
      {
        id: 'w-a2-fb-2',
        type: 'fill_blank',
        prompt: 'Complete com o passado de "go" (ir):',
        sentenceWithBlank: 'Last Friday, we ___ to an Italian restaurant with our friends.',
        expectedAnswers: ['went'],
        hint: 'Verbo irregular: go -> ?',
        explanation: 'O passado simples de "go" é "went".'
      },
      {
        id: 'w-a2-fb-3',
        type: 'fill_blank',
        prompt: 'Complete com o passado de "write" (escrever):',
        sentenceWithBlank: 'She ___ an email to her manager explaining the project status.',
        expectedAnswers: ['wrote'],
        hint: 'Verbo irregular: write -> ?',
        explanation: 'O passado simples de "write" é "wrote".'
      }
    ]
  },

  // 2. Complete as lacunas (A2) - Novo
  {
    id: 'writing-a2-fill-comparatives-superlatives',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a2',
    topic: 'Comparativos e Superlativos',
    title: 'Comparações de Qualidade e Tamanho',
    description: 'Complete as frases aplicando sufixos comparativos (-er, -est) ou palavras de comparação (more, most, better).',
    objective: 'Diferenciar comparativos de superioridade e superlativos em adjetivos curtos e longos.',
    instructions: 'Digite o comparativo ou superlativo correto para completar a frase.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-cs-1',
        type: 'fill_blank',
        prompt: 'Complete com o comparativo de "fast" (mais rápido):',
        sentenceWithBlank: 'The express train is much ___ than the local bus.',
        expectedAnswers: ['faster'],
        hint: 'Adicione -er ao adjetivo curto.',
        explanation: 'Para adjetivos curtos como fast, adicionamos "-er": faster than.'
      },
      {
        id: 'w-a2-cs-2',
        type: 'fill_blank',
        prompt: 'Complete com o comparativo irregular de "good" (melhor que):',
        sentenceWithBlank: 'Homemade soup is always ___ than canned soup.',
        expectedAnswers: ['better'],
        hint: 'Comparativo irregular de good.',
        explanation: 'O comparativo de superioridade de "good" é a forma irregular "better".'
      },
      {
        id: 'w-a2-cs-3',
        type: 'fill_blank',
        prompt: 'Complete com o superlativo de "expensive" (o mais caro de todos):',
        sentenceWithBlank: 'That luxury hotel is the ___ expensive place in the entire valley.',
        expectedAnswers: ['most'],
        hint: 'Palavra de superlativo para adjetivos longos: the ___ expensive.',
        explanation: 'Adjetivos longos usam "the most": the most expensive.'
      }
    ]
  },

  // 3. Complete as lacunas (A2) - Novo
  {
    id: 'writing-a2-fill-future-will-going',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a2',
    topic: 'Futuro com Will & Going To',
    title: 'Previsões e Planos com Will e Going To',
    description: 'Complete frases com formas de futuro para previsões espontâneas e intenções planejadas.',
    objective: 'Distinguir o uso de will e be going to.',
    instructions: 'Escreva a forma correta do auxiliar de futuro na lacuna.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-fw-1',
        type: 'fill_blank',
        prompt: 'Complete a decisão espontânea ("Eu te ajudo a carregar as malas"):',
        sentenceWithBlank: 'Don’t worry! I ___ help you carry those heavy grocery bags.',
        expectedAnswers: ['will', "'ll"],
        hint: 'Auxiliar de decisão tomada no momento da fala.',
        explanation: 'Para decisões tomadas no momento da fala ou ofertas de ajuda, usamos "will" (ou "\'ll").'
      },
      {
        id: 'w-a2-fw-2',
        type: 'fill_blank',
        prompt: 'Complete o plano prévio com "going to" ("Ela vai viajar para o Chile"):',
        sentenceWithBlank: 'She has already bought the tickets. She is ___ to visit Chile next month.',
        expectedAnswers: ['going'],
        hint: 'Parte da estrutura be + going + to.',
        explanation: 'Para planos e intenções já decididos, usamos a estrutura "be going to".'
      },
      {
        id: 'w-a2-fw-3',
        type: 'fill_blank',
        prompt: 'Complete a previsão com base no que se vê ("Olhe as nuvens escuras! Vai chover"):',
        sentenceWithBlank: 'Look at those dark clouds! It is going to ___ very soon.',
        expectedAnswers: ['rain'],
        hint: 'Verbo chover na forma base.',
        explanation: 'Após "is going to", o verbo principal fica na forma infinitiva base: "rain".'
      }
    ]
  },

  // 4. Complete as lacunas (A2) - Novo
  {
    id: 'writing-a2-fill-some-any-much-many',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a2',
    topic: 'Quantificadores (Some, Any, Much, Many)',
    title: 'Quantificando Substantivos e Alimentos',
    description: 'Complete com some, any, much ou many de acordo com o tipo de frase e substantivo.',
    objective: 'Dominar o uso de quantificadores em orações afirmativas, negativas e perguntas.',
    instructions: 'Digite o quantificador adequado no espaço em branco.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-qm-1',
        type: 'fill_blank',
        prompt: 'Complete a frase negativa ("Nós não temos nenhum leite na geladeira"):',
        sentenceWithBlank: 'We don’t have ___ milk in the refrigerator.',
        expectedAnswers: ['any'],
        hint: 'Quantificador usado em frases negativas.',
        explanation: 'Em frases negativas usamos "any" para indicar nenhum/qualquer.'
      },
      {
        id: 'w-a2-qm-2',
        type: 'fill_blank',
        prompt: 'Complete a pergunta sobre quantidade de itens contáveis ("Quantas maçãs?"):',
        sentenceWithBlank: 'How ___ apples did you buy at the farmers market?',
        expectedAnswers: ['many'],
        hint: 'Usado para substantivos contáveis no plural (apples).',
        explanation: 'Com substantivos contáveis no plural (apples, books, chairs), usamos "many".'
      },
      {
        id: 'w-a2-qm-3',
        type: 'fill_blank',
        prompt: 'Complete a pergunta sobre valor/dinheiro ("Quanto custa?"):',
        sentenceWithBlank: 'How ___ does that return train ticket cost?',
        expectedAnswers: ['much'],
        hint: 'Usado para substantivos incontáveis ou preços.',
        explanation: 'Para valores financeiros e coisas incontáveis, usamos "How much".'
      }
    ]
  },

  // 5. Ordene as frases (A2) - Existente
  {
    id: 'writing-a2-order-travel',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a2',
    topic: 'Viagens & Aeroporto',
    title: 'Perguntas de Viagem e Deslocamento',
    description: 'Ordene palavras para formular perguntas úteis em hotéis, aeroportos e estações.',
    objective: 'Praticar a estrutura de perguntas com auxiliares (did, do, can, where).',
    instructions: 'Ordene as palavras para criar a pergunta correta em inglês.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-so-1',
        type: 'sentence_order',
        prompt: 'Monte a pergunta: "Onde posso despachar minha bagagem?"',
        scrambledWords: ['check', 'Where', 'my', 'luggage', 'can', 'I'],
        expectedSentence: 'Where can I check my luggage',
        explanation: 'Estrutura de pergunta com modal: Wh-word (Where) + Modal (can) + Sujeito (I) + Verbo (check) + Objeto (my luggage).'
      },
      {
        id: 'w-a2-so-2',
        type: 'sentence_order',
        prompt: 'Monte a pergunta: "A que horas o café da manhã é servido?"',
        scrambledWords: ['is', 'What', 'breakfast', 'time', 'served'],
        expectedSentence: 'What time is breakfast served',
        explanation: 'What time + verbo to be (is) + sujeito (breakfast) + particípio (served).'
      },
      {
        id: 'w-a2-so-3',
        type: 'sentence_order',
        prompt: 'Monte a pergunta: "Você gostou da sua viagem para Londres?"',
        scrambledWords: ['Did', 'to', 'trip', 'London', 'enjoy', 'your', 'you'],
        expectedSentence: 'Did you enjoy your trip to London',
        explanation: 'Pergunta no passado: Auxiliar (Did) + Sujeito (you) + Verbo no infinitivo (enjoy) + Objeto (your trip to London).'
      }
    ]
  },

  // 6. Ordene as frases (A2) - Novo
  {
    id: 'writing-a2-order-past-continuous',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a2',
    topic: 'Passado Contínuo & Narrativas',
    title: 'Ações Contínuas no Passado',
    description: 'Ordene palavras para formar orações no Past Continuous combinadas com ações pontuais.',
    objective: 'Dominar a estrutura was/were + verbo-ing com conectores temporais (when, while).',
    instructions: 'Ordene as palavras para formar a oração correta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-pc-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Eu estava cozinhando o jantar quando o telefone tocou."',
        scrambledWords: ['when', 'dinner', 'cooking', 'was', 'the', 'rang', 'I', 'phone'],
        expectedSentence: 'I was cooking dinner when the phone rang',
        acceptedSentences: ['When the phone rang I was cooking dinner', 'I was cooking dinner when the phone rang.'],
        explanation: 'Ação em andamento no passado (I was cooking) interrompida por ação pontual (when the phone rang).'
      },
      {
        id: 'w-a2-pc-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Eles estavam caminhando no parque enquanto o sol se punha."',
        scrambledWords: ['were', 'in', 'park', 'walking', 'They', 'the'],
        expectedSentence: 'They were walking in the park',
        acceptedSentences: ['They were walking in the park.'],
        explanation: 'Sujeito plural (They) + auxiliar no passado (were) + verbo-ing (walking) + complemento (in the park).'
      },
      {
        id: 'w-a2-pc-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "O que você estava fazendo ontem às oito horas?"',
        scrambledWords: ['doing', 'were', 'What', 'eight', 'at', 'yesterday', 'you'],
        expectedSentence: 'What were you doing yesterday at eight',
        acceptedSentences: ['What were you doing at eight yesterday?'],
        explanation: 'Pergunta no passado contínuo: What + were + you + doing + tempo.'
      }
    ]
  },

  // 7. Ordene as frases (A2) - Novo
  {
    id: 'writing-a2-order-directions',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a2',
    topic: 'Orientações Urbanas (Imperativo)',
    title: 'Dando Direções e Instruções na Cidade',
    description: 'Ordene palavras para estruturar instruções claras de trânsito e localização.',
    objective: 'Praticar o modo imperativo para guiar pedestres e turistas.',
    instructions: 'Coloque as palavras na sequência de direção correta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-od-1',
        type: 'sentence_order',
        prompt: 'Monte a instrução: "Vire à esquerda no semáforo e siga em frente."',
        scrambledWords: ['the', 'at', 'left', 'straight', 'walk', 'Turn', 'light', 'and', 'traffic'],
        expectedSentence: 'Turn left at the traffic light and walk straight',
        acceptedSentences: ['Turn left at the traffic light and walk straight.'],
        explanation: 'Imperativo de direção: Turn left at the traffic light and walk straight.'
      },
      {
        id: 'w-a2-od-2',
        type: 'sentence_order',
        prompt: 'Monte a instrução: "A farmácia fica do outro lado da rua em frente à padaria."',
        scrambledWords: ['across', 'pharmacy', 'from', 'bakery', 'is', 'The', 'the'],
        expectedSentence: 'The pharmacy is across from the bakery',
        acceptedSentences: ['The pharmacy is across from the bakery.'],
        explanation: 'Sujeito (The pharmacy) + Verbo (is) + Preposição de lugar (across from) + Referência (the bakery).'
      },
      {
        id: 'w-a2-od-3',
        type: 'sentence_order',
        prompt: 'Monte a instrução: "Atravesse a rua e pegue o ônibus número doze."',
        scrambledWords: ['the', 'Cross', 'street', 'twelve', 'take', 'and', 'number', 'bus'],
        expectedSentence: 'Cross the street and take bus number twelve',
        acceptedSentences: ['Cross the street and take bus number twelve.'],
        explanation: 'Verbos no imperativo conectados por and: Cross the street and take bus number twelve.'
      }
    ]
  },

  // 8. Ordene as frases (A2) - Novo
  {
    id: 'writing-a2-order-advice-should',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a2',
    topic: 'Conselhos com Should & Recomendações',
    title: 'Dando Conselhos e Recomendações com Should',
    description: 'Ordene palavras para estruturar conselhos amigáveis sobre saúde, viagens e estudo.',
    objective: 'Dominar a estrutura Sujeito + should/shouldn\'t + verbo base.',
    instructions: 'Organize as palavras na ordem correta para criar a recomendação.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-os-1',
        type: 'sentence_order',
        prompt: 'Monte o conselho: "Você deve beber chá quente com mel para a garganta."',
        scrambledWords: ['honey', 'drink', 'with', 'tea', 'should', 'warm', 'You'],
        expectedSentence: 'You should drink warm tea with honey',
        acceptedSentences: ['You should drink warm tea with honey.'],
        explanation: 'Sujeito (You) + modal (should) + verbo base (drink) + complemento (warm tea with honey).'
      },
      {
        id: 'w-a2-os-2',
        type: 'sentence_order',
        prompt: 'Monte o conselho negativo: "Você não deve ficar acordado até muito tarde antes da prova."',
        scrambledWords: ['late', 'stay', 'up', 'should', 'not', 'You', 'too'],
        expectedSentence: 'You should not stay up too late',
        acceptedSentences: ["You shouldn't stay up too late", 'You should not stay up too late.'],
        explanation: 'Conselho negativo: You should not (ou shouldn\'t) + stay up + too late.'
      },
      {
        id: 'w-a2-os-3',
        type: 'sentence_order',
        prompt: 'Monte o conselho de viagem: "Nós devemos reservar os ingressos do museu com antecedência."',
        scrambledWords: ['advance', 'in', 'the', 'book', 'should', 'We', 'tickets'],
        expectedSentence: 'We should book the tickets in advance',
        acceptedSentences: ['We should book the tickets in advance.'],
        explanation: 'Sujeito (We) + should + verbo (book) + objeto (the tickets) + expressão (in advance).'
      }
    ]
  },

  // 9. Encontre e corrija o erro (A2) - Existente
  {
    id: 'writing-a2-error-prep',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a2',
    topic: 'Preposições & Concordância',
    title: 'Preposições de Tempo e Lugar (In, On, At)',
    description: 'Identifique e corrija o uso incorreto de preposições em frases cotidianas.',
    objective: 'Dominar a distinção entre in, on e at para dias, meses e horários.',
    instructions: 'Digite a preposição correta que substitui a palavra errada da frase.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-fe-1',
        type: 'find_fix_error',
        prompt: 'Antes de dias da semana não usamos "in". Digite a preposição correta:',
        sentenceWithError: 'The team meeting is scheduled in Monday morning.',
        errorWord: 'in',
        correction: 'on',
        explanationPt: 'Usamos "on" para dias da semana e datas específicas: "on Monday".',
        explanation: 'Regra de preposições de tempo: on Monday, on Friday, on weekends.'
      },
      {
        id: 'w-a2-fe-2',
        type: 'find_fix_error',
        prompt: 'Antes de horários específicos usamos outra preposição, não "in":',
        sentenceWithError: 'Our flight arrives in 7:30 PM.',
        errorWord: 'in',
        correction: 'at',
        explanationPt: 'Usamos "at" para horas exatas: "at 7:30 PM".',
        explanation: 'Horários pontuais exigem a preposição "at": at 8 o\'clock, at noon, at midnight.'
      },
      {
        id: 'w-a2-fe-3',
        type: 'find_fix_error',
        prompt: 'Corrija a preposição usada antes de meses do ano sem dia:',
        sentenceWithError: 'My vacation starts on July.',
        errorWord: 'on',
        correction: 'in',
        explanationPt: 'Para meses e anos (sem dia exato), usamos "in": "in July".',
        explanation: 'Meses isolados usam "in" (in July). Se houvesse o dia, seria "on" (on July 15th).'
      }
    ]
  },

  // 10. Encontre e corrija o erro (A2) - Novo
  {
    id: 'writing-a2-error-past-irregular',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a2',
    topic: 'Morfologia & Verbos Irregulares',
    title: 'Erros Comuns no Passado de Verbos Irregulares',
    description: 'Corrija verbos que foram indevidamente regularizados com o sufixo "-ed".',
    objective: 'Fixar a forma correta de verbos irregulares como go->went, buy->bought, eat->ate.',
    instructions: 'Identifique o verbo incorreto e escreva a forma correta do passado irregular.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-epi-1',
        type: 'find_fix_error',
        prompt: 'O verbo "go" não forma o passado com -ed. Digite a forma correta:',
        sentenceWithError: 'We goed to the shopping mall yesterday evening.',
        errorWord: 'goed',
        correction: 'went',
        explanationPt: 'O passado de "go" é irregular: "went", nunca "goed".',
        explanation: 'Verbo irregular fundamental: go -> went.'
      },
      {
        id: 'w-a2-epi-2',
        type: 'find_fix_error',
        prompt: 'O verbo "eat" não forma o passado adicionando -ed. Digite a forma correta:',
        sentenceWithError: 'They eated delicious pizza at the Italian restaurant.',
        errorWord: 'eated',
        correction: 'ate',
        explanationPt: 'O passado simples de "eat" é "ate".',
        explanation: 'Forma irregular: eat -> ate.'
      },
      {
        id: 'w-a2-epi-3',
        type: 'find_fix_error',
        prompt: 'O verbo "see" tem passado irregular. Corrija o termo incorreto:',
        sentenceWithError: 'I seed an incredible documentary on television last night.',
        errorWord: 'seed',
        correction: 'saw',
        explanationPt: 'O passado do verbo "see" é "saw".',
        explanation: 'Forma irregular do Simple Past: see -> saw.'
      }
    ]
  },

  // 11. Encontre e corrija o erro (A2) - Novo
  {
    id: 'writing-a2-error-adverbs',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a2',
    topic: 'Adjetivos vs Advérbios de Modo',
    title: 'Distinguindo Adjetivos e Advérbios',
    description: 'Corrija frases onde foi usado um adjetivo para modificar um verbo em vez de um advérbio em -ly.',
    objective: 'Reconhecer que verbos de ação exigem advérbios de modo (slowly, carefully, well).',
    instructions: 'Substitua a palavra inadequada pelo advérbio correto.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-ea-1',
        type: 'find_fix_error',
        prompt: 'Para modificar o verbo "walk", use o advérbio terminado em -ly, não o adjetivo:',
        sentenceWithError: 'The old gentleman walked very slow across the street.',
        errorWord: 'slow',
        correction: 'slowly',
        explanationPt: 'Para modificar a ação do verbo "walked", usamos o advérbio "slowly", e não o adjetivo "slow".',
        explanation: 'Advérbios de modo caracterizam a ação do verbo: walk slowly, drive carefully.'
      },
      {
        id: 'w-a2-ea-2',
        type: 'find_fix_error',
        prompt: 'Para dizer que alguém fala um idioma "bem", usamos o advérbio de "good":',
        sentenceWithError: 'Maria speaks English very good because she practices daily.',
        errorWord: 'good',
        correction: 'well',
        explanationPt: 'O advérbio correspondente a "good" é "well": "speaks very well".',
        explanation: 'Good é adjetivo (good book); well é advérbio de modo (speaks well).'
      },
      {
        id: 'w-a2-ea-3',
        type: 'find_fix_error',
        prompt: 'Corrija o termo que modifica a forma como ele dirigiu na chuva:',
        sentenceWithError: 'He drove very careful during the heavy snowstorm.',
        errorWord: 'careful',
        correction: 'carefully',
        explanationPt: 'O advérbio correto para modificar o verbo "drove" é "carefully".',
        explanation: 'Adjetivo careful -> advérbio carefully.'
      }
    ]
  },

  // 12. Encontre e corrija o erro (A2) - Novo
  {
    id: 'writing-a2-error-count-uncount',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a2',
    topic: 'Substantivos Incontáveis & Plurais',
    title: 'Substantivos Incontáveis Sem Plural',
    description: 'Corrija erros com substantivos incontáveis em inglês que não aceitam plural em -s (advice, information, furniture).',
    objective: 'Evitar o vício de pluralizar palavras incontáveis em inglês.',
    instructions: 'Identifique o substantivo indevidamente pluralizado e digite a forma correta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-ecu-1',
        type: 'find_fix_error',
        prompt: 'Em inglês, a palavra "advice" é incontável e não existe no plural. Corrija:',
        sentenceWithError: 'My teacher gave me great advices for my university application.',
        errorWord: 'advices',
        correction: 'advice',
        explanationPt: '"Advice" é um substantivo incontável em inglês e não tem forma no plural com "-s".',
        explanation: 'Substantivos incontáveis nunca recebem "s": advice, information, furniture.'
      },
      {
        id: 'w-a2-ecu-2',
        type: 'find_fix_error',
        prompt: 'Em inglês, "information" é sempre singular incontável. Digite a forma correta:',
        sentenceWithError: 'The tourist office gave us helpful informations about the city.',
        errorWord: 'informations',
        correction: 'information',
        explanationPt: '"Information" é incontável: não existe "informations" em inglês.',
        explanation: 'Usa-se "information" tanto para um dado isolado quanto para muitas informações.'
      },
      {
        id: 'w-a2-ecu-3',
        type: 'find_fix_error',
        prompt: 'A palavra "furniture" (móveis/mobília) é incontável. Corrija a palavra:',
        sentenceWithError: 'They bought beautiful furnitures for their new living room.',
        errorWord: 'furnitures',
        correction: 'furniture',
        explanationPt: '"Furniture" é incontável em inglês e engloba todos os móveis sem forma plural.',
        explanation: 'Mobília/móveis = furniture (incontável).'
      }
    ]
  },

  // 13. Resposta guiada (A2) - Existente
  {
    id: 'writing-a2-open-food',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'a2',
    topic: 'Alimentação & Restaurante',
    title: 'Descrevendo sua Refeição',
    description: 'Escreva um parágrafo curto descrevendo um prato ou restaurante que você recomenda.',
    objective: 'Construir descrições com adjetivos sensoriais e opiniões pessoais.',
    instructions: 'Escreva de 1 a 2 frases recomendando um prato ou restaurante.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-op-1',
        type: 'open_prompt',
        contextScenario: 'Um amigo quer uma recomendação culinária e pergunta: "Can you recommend a good place to eat and what to order?"',
        promptQuestion: 'Recomende um restaurante ou tipo de comida e explique por que é bom.',
        suggestedKeywords: ['recommend', 'delicious', 'because', 'restaurant', 'food'],
        minWords: 8,
        sampleAnswer: 'I recommend the Italian restaurant downtown because the pasta is delicious and fresh.',
        evaluationCriteria: {
          requiredKeywords: ['recommend', 'because'],
          minLength: 25
        },
        explanation: 'Use adjetivos como "delicious", "fresh", "tasty", "cozy" e conecte com "because" para justificar.'
      },
      {
        id: 'w-a2-op-2',
        type: 'open_prompt',
        contextScenario: 'Você está em um café e o garçom pergunta: "Are you ready to order or do you need a few more minutes?"',
        promptQuestion: 'Responda educadamente fazendo seu pedido de uma bebida e um lanche.',
        suggestedKeywords: ['I would like', 'please', 'coffee', 'sandwich'],
        minWords: 6,
        sampleAnswer: 'I would like a cup of coffee and a sandwich, please.',
        evaluationCriteria: {
          requiredKeywords: ['like', 'please'],
          minLength: 20
        },
        explanation: 'Para pedir de forma cortês em restaurantes e cafés, utilize "I would like [item], please" ou "Can I have [item], please?".'
      }
    ]
  },

  // 14. Resposta guiada (A2) - Novo
  {
    id: 'writing-a2-open-last-vacation',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'a2',
    topic: 'Viagens & Passado',
    title: 'Relatando Suas Últimas Férias',
    description: 'Escreva um pequeno relato sobre uma viagem ou passeio que você fez no passado recente.',
    objective: 'Praticar verbos no passado simples com conectores temporais (last year, because, visited).',
    instructions: 'Escreva de 2 a 3 frases em inglês relatando para onde foi e o que fez.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-ov-1',
        type: 'open_prompt',
        contextScenario: 'Em uma aula de conversação, o colega pergunta: "Where did you go on your last vacation and what did you do?"',
        promptQuestion: 'Responda relatando onde passou as férias e mencionando duas atividades realizadas.',
        suggestedKeywords: ['went to', 'visited', 'weather was', 'enjoyed', 'beach', 'mountains'],
        minWords: 10,
        sampleAnswer: 'Last year I went to the beach with my family. We swam in the ocean and visited historic places.',
        evaluationCriteria: {
          requiredKeywords: ['went', 'and'],
          minLength: 30
        },
        explanation: 'Use verbos no passado simples: "I went to...", "I visited...", "The weather was wonderful".'
      },
      {
        id: 'w-a2-ov-2',
        type: 'open_prompt',
        contextScenario: 'Um amigo pergunta sobre o transporte da viagem: "How did you travel there and was the trip comfortable?"',
        promptQuestion: 'Diga como viajou (carro, avião, ônibus) e se a viagem foi confortável.',
        suggestedKeywords: ['traveled by', 'comfortable', 'hours', 'trip was'],
        minWords: 8,
        sampleAnswer: 'We traveled by airplane and the trip was very comfortable.',
        evaluationCriteria: {
          requiredKeywords: ['by', 'trip'],
          minLength: 22
        },
        explanation: 'Expressões úteis: "We traveled by car/plane/bus", "The trip took [X] hours", "It was very comfortable".'
      }
    ]
  },

  // 15. Resposta guiada (A2) - Novo
  {
    id: 'writing-a2-open-polite-request',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'a2',
    topic: 'Comunicação Escrita & Hotel',
    title: 'Escrevendo um Pedido Educado para o Hotel',
    description: 'Redija uma mensagem curta e cortês para a recepção de um hotel solicitando toalhas extras ou late check-out.',
    objective: 'Praticar fórmulas de polidez escrita (Could you please, I would appreciate, Thank you).',
    instructions: 'Escreva uma mensagem formal ou semi-formal em inglês para o contexto solicitado.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a2-opr-1',
        type: 'open_prompt',
        contextScenario: 'Você está hospedado no quarto 204 e precisa de duas toalhas de banho extras.',
        promptQuestion: 'Escreva uma mensagem educada para a recepção pedindo as toalhas extras para o seu quarto.',
        suggestedKeywords: ['Could you please', 'room', 'towels', 'thank you'],
        minWords: 8,
        sampleAnswer: 'Hello! Could you please send two extra bath towels to room 204? Thank you very much.',
        evaluationCriteria: {
          requiredKeywords: ['please', 'room'],
          minLength: 25
        },
        explanation: 'Pedidos polidos utilizam: "Could you please send [item] to room [número]?", encerrando com agradecimento.'
      },
      {
        id: 'w-a2-opr-2',
        type: 'open_prompt',
        contextScenario: 'Seu voo sai tarde e você gostaria de fazer o check-out às 13h em vez de 11h.',
        promptQuestion: 'Pergunte cordialmente se é possível fazer late check-out às 13h.',
        suggestedKeywords: ['possible', 'late check-out', 'one PM', 'thank you'],
        minWords: 8,
        sampleAnswer: 'Is it possible to arrange a late check-out at 1:00 PM tomorrow? Thank you!',
        evaluationCriteria: {
          requiredKeywords: ['possible', 'check-out'],
          minLength: 22
        },
        explanation: 'Pergunte com gentileza: "Would it be possible to have a late check-out at 1:00 PM?" ou "Is it possible to check out later?".'
      }
    ]
  }
];

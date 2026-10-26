import { Activity } from '../../types/activity';

export const WRITING_A1: Activity[] = [
  // 1. Complete as lacunas (A1) - Existente [Index 0]
  {
    id: 'writing-a1-fill-intro',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a1',
    topic: 'Apresentações & Verbo To Be',
    title: 'Apresentação Pessoal e Origem',
    description: 'Complete as frases com as formas corretas do verbo to be e pronomes para se apresentar.',
    objective: 'Praticar o uso de am, is, are e pronomes básicos na apresentação pessoal.',
    instructions: 'Digite a palavra correta em inglês no campo em branco para completar a frase.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-fb-1',
        type: 'fill_blank',
        prompt: 'Complete com o verbo to be correto:',
        sentenceWithBlank: 'Hello! I ___ a software student from Brazil.',
        expectedAnswers: ['am', "'m"],
        hint: 'Primeira pessoa do singular do verbo to be.',
        explanation: 'Com o pronome "I", utilizamos a forma "am" (ou a contração "\'m").'
      },
      {
        id: 'w-a1-fb-2',
        type: 'fill_blank',
        prompt: 'Complete a frase informando de onde ela é:',
        sentenceWithBlank: 'This is Sarah. She ___ from Canada.',
        expectedAnswers: ['is', "'s"],
        hint: 'Terceira pessoa do singular (he/she/it).',
        explanation: 'Com a terceira pessoa "she", utilizamos a forma verbal "is".'
      },
      {
        id: 'w-a1-fb-3',
        type: 'fill_blank',
        prompt: 'Complete a pergunta sobre a cidade onde moram:',
        sentenceWithBlank: 'Where ___ you from?',
        expectedAnswers: ['are'],
        hint: 'Forma do verbo to be usada com "you".',
        explanation: 'Nas perguntas com "you", usamos a forma "are" antes do sujeito: "Where are you from?".'
      }
    ]
  },

  // 2. Ordene a frase (A1) - Existente [Index 1]
  {
    id: 'writing-a1-order-routine',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a1',
    topic: 'Rotina Diária & Hábitos',
    title: 'Construindo Frases de Rotina',
    description: 'Ordene as palavras para formar frases corretas sobre atividades do cotidiano.',
    objective: 'Fixar a ordem sintática básica Sujeito + Verbo + Objeto/Complemento no Simple Present.',
    instructions: 'Clique nas palavras na ordem correta para montar a frase.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-so-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Eu tomo café da manhã todas as manhãs."',
        scrambledWords: ['breakfast', 'I', 'every', 'morning', 'have'],
        expectedSentence: 'I have breakfast every morning',
        acceptedSentences: ['I eat breakfast every morning', 'Every morning I have breakfast', 'Every morning, I have breakfast'],
        explanation: 'A ordem padrão em inglês é Sujeito (I) + Verbo (have) + Objeto (breakfast) + Expressão temporal (every morning).'
      },
      {
        id: 'w-a1-so-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Ele trabalha em um escritório em São Paulo."',
        scrambledWords: ['in', 'works', 'an', 'office', 'He'],
        expectedSentence: 'He works in an office',
        acceptedSentences: ['He works in an office.'],
        explanation: 'Terceira pessoa do singular no presente adiciona -s ao verbo: He works in an office.'
      },
      {
        id: 'w-a1-so-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Nós estudamos inglês juntos à noite."',
        scrambledWords: ['English', 'study', 'We', 'together', 'at', 'night'],
        expectedSentence: 'We study English together at night',
        acceptedSentences: ['At night we study English together', 'At night, we study English together'],
        explanation: 'Sujeito (We) + Verbo (study) + Objeto (English) + Advérbio (together) + Preposição de tempo (at night).'
      }
    ]
  },

  // 3. Encontre e corrija o erro (A1) - Existente [Index 2]
  {
    id: 'writing-a1-error-plural',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a1',
    topic: 'Ortografia & Plurais',
    title: 'Correção de Plurais e Artigos',
    description: 'Encontre o erro gramatical ou ortográfico na frase e digite a forma correta.',
    objective: 'Reconhecer e corrigir erros comuns de concordância e plurais irregulares.',
    instructions: 'Identifique a palavra incorreta e digite a correção correta no campo.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-fe-1',
        type: 'find_fix_error',
        prompt: 'Na frase abaixo, o plural de "child" foi escrito incorretamente. Digite a palavra correta:',
        sentenceWithError: 'They have two childs playing in the garden.',
        errorWord: 'childs',
        correction: 'children',
        acceptedCorrections: ['two children'],
        explanationPt: 'O plural da palavra "child" é irregular: "children", não "childs".',
        explanation: 'Em inglês, "child" possui plural irregular: 1 child ➔ 2 children.'
      },
      {
        id: 'w-a1-fe-2',
        type: 'find_fix_error',
        prompt: 'O artigo antes de palavra iniciada por som de vogal está incorreto. Digite a forma correta:',
        sentenceWithError: 'I would like a apple for dessert.',
        errorWord: 'a',
        correction: 'an',
        acceptedCorrections: ['an apple'],
        explanationPt: 'Antes de sons vocálicos ("apple"), utilizamos o artigo indefinido "an".',
        explanation: 'Usa-se "an" antes de sons de vogal: "an apple", "an orange", "an hour".'
      },
      {
        id: 'w-a1-fe-3',
        type: 'find_fix_error',
        prompt: 'Corrija o verbo que não recebeu o -s da terceira pessoa no presente:',
        sentenceWithError: 'My sister live in Rio de Janeiro.',
        errorWord: 'live',
        correction: 'lives',
        acceptedCorrections: ['lives in'],
        explanationPt: 'Com sujeitos no singular (My sister = she), o verbo recebe "-s": "lives".',
        explanation: 'Regra geral do Simple Present na 3ª pessoa do singular: verbo + s (live ➔ lives).'
      }
    ]
  },

  // 4. Escrita livre guiada (A1) - Existente [Index 3]
  {
    id: 'writing-a1-open-intro',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'a1',
    topic: 'Comunicação Cotidiana',
    title: 'Escreva sua Apresentação',
    description: 'Produza uma resposta livre em inglês se apresentando em uma conversa inicial.',
    objective: 'Desenvolver a autonomia de escrita com informações pessoais básicas.',
    instructions: 'Leia a situação e escreva sua resposta completa em inglês no campo de texto.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-op-1',
        type: 'open_prompt',
        contextScenario: 'Você acabou de entrar em uma sala de estudos internacional e o colega pergunta: "Hi! What is your name and where are you from?"',
        promptQuestion: 'Responda dizendo seu nome e sua cidade ou país em inglês.',
        suggestedKeywords: ['My name is', 'I am', 'from', 'Brazil'],
        minWords: 5,
        sampleAnswer: 'Hello! My name is Lucas and I am from Brazil.',
        evaluationCriteria: {
          requiredKeywords: ['name', 'from'],
          minLength: 12
        },
        explanation: 'Em apresentações, expressões naturais incluem: "Hello, my name is..." ou "Hi, I\'m..." acompanhado de "I\'m from [país/cidade]".'
      },
      {
        id: 'w-a1-op-2',
        type: 'open_prompt',
        contextScenario: 'Um colega estrangeiro pergunta o que você gosta de fazer no seu tempo livre: "What do you like to do on weekends?"',
        promptQuestion: 'Escreva uma frase simples dizendo o que você gosta de fazer no fim de semana.',
        suggestedKeywords: ['I like to', 'watch', 'read', 'play', 'weekend'],
        minWords: 5,
        sampleAnswer: 'I like to read books and listen to music on weekends.',
        evaluationCriteria: {
          requiredKeywords: ['like'],
          minLength: 15
        },
        explanation: 'Para falar de preferências, use a estrutura "I like to [verbo]" ou "I enjoy [verbo-ing]".'
      }
    ]
  },

  // 5. Complete as lacunas (A1) - Novo
  {
    id: 'writing-a1-fill-possessives',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a1',
    topic: 'Pronomes Possessivos Básicos',
    title: 'Posse e Família: My, Your, His, Her',
    description: 'Complete as frases indicando posse com os pronomes possessivos corretos.',
    objective: 'Diferenciar my (meu), his (dele), her (dela) e our (nosso).',
    instructions: 'Digite o pronome possessivo adequado em inglês no espaço em branco.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-pos-1',
        type: 'fill_blank',
        prompt: 'Complete com o possessivo referente a "ele" (Daniel):',
        sentenceWithBlank: 'Daniel loves reading. ___ favorite hobby is fantasy books.',
        expectedAnswers: ['His'],
        hint: 'Possessivo masculino de terceira pessoa.',
        explanation: 'Para objetos ou características dele (Daniel = he), usamos o possessivo "his".'
      },
      {
        id: 'w-a1-pos-2',
        type: 'fill_blank',
        prompt: 'Complete com o possessivo referente a "ela" (Julia):',
        sentenceWithBlank: 'Julia lives in Curitiba. ___ apartment is near a beautiful park.',
        expectedAnswers: ['Her'],
        hint: 'Possessivo feminino de terceira pessoa.',
        explanation: 'Para objetos ou características dela (Julia = she), usamos o possessivo "her".'
      },
      {
        id: 'w-a1-pos-3',
        type: 'fill_blank',
        prompt: 'Complete com o possessivo referente a "nós" (We):',
        sentenceWithBlank: 'We study English together. ___ class starts at seven.',
        expectedAnswers: ['Our'],
        hint: 'Possessivo da primeira pessoa do plural (nossa).',
        explanation: 'O adjetivo possessivo correspondente a "we" é "our" (nosso/nossa).'
      }
    ]
  },

  // 6. Complete as lacunas (A1) - Novo
  {
    id: 'writing-a1-fill-present-habits',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a1',
    topic: 'Rotina & Verbos no Presente',
    title: 'Ações Cotidianas no Simple Present',
    description: 'Complete frases de hábitos diários aplicando as regras do presente simples.',
    objective: 'Praticar verbos cotidianos (drink, wake, work, study) na forma correta do sujeito.',
    instructions: 'Escreva a forma verbal adequada em inglês no espaço em branco.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-ph-1',
        type: 'fill_blank',
        prompt: 'Complete com o verbo "beber" (drink) no presente com "I":',
        sentenceWithBlank: 'Every morning, I ___ a glass of cold water before breakfast.',
        expectedAnswers: ['drink'],
        hint: 'Verbo base para primeira pessoa.',
        explanation: 'Com o pronome "I", usamos a forma base do verbo sem alteração: "I drink".'
      },
      {
        id: 'w-a1-ph-2',
        type: 'fill_blank',
        prompt: 'Complete com o verbo "trabalhar" (work) com 3ª pessoa singular (My brother):',
        sentenceWithBlank: 'My brother ___ at a local bakery downtown.',
        expectedAnswers: ['works'],
        hint: 'Adicione -s na terceira pessoa do singular.',
        explanation: 'Com sujeitos no singular (My brother = he), o verbo recebe "-s": "works".'
      },
      {
        id: 'w-a1-ph-3',
        type: 'fill_blank',
        prompt: 'Complete com o verbo "ensinar" (teach) com 3ª pessoa (Mrs. Clark):',
        sentenceWithBlank: 'Mrs. Clark ___ English to children on weekdays.',
        expectedAnswers: ['teaches'],
        hint: 'Verbos terminados em -ch recebem -es na 3ª pessoa.',
        explanation: 'Verbos que terminam em sons sibilantes como -ch recebem "-es": teach -> teaches.'
      }
    ]
  },

  // 7. Complete as lacunas (A1) - Novo
  {
    id: 'writing-a1-fill-can-ability',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'a1',
    topic: 'Modal Can & Habilidades',
    title: 'Expressando Capacidades com Can',
    description: 'Complete frases com o verbo modal "can" e sua forma negativa "cannot" ou "can\'t".',
    objective: 'Dominar o uso de can/can\'t para expressar o que você consegue ou não fazer.',
    instructions: 'Digite a forma do modal can ou o verbo principal adequado na lacuna.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-ca-1',
        type: 'fill_blank',
        prompt: 'Complete a frase dizendo que ela sabe tocar piano:',
        sentenceWithBlank: 'Elena is musical. She ___ play the piano very well.',
        expectedAnswers: ['can'],
        hint: 'Verbo modal para expressar habilidade.',
        explanation: 'Usamos "can" para indicar habilidade ou capacidade: "She can play".'
      },
      {
        id: 'w-a1-ca-2',
        type: 'fill_blank',
        prompt: 'Complete com a forma negativa contraída (não posso/não consigo):',
        sentenceWithBlank: 'I am sorry, but I ___ come to the party tonight.',
        expectedAnswers: ["can't", 'cannot'],
        hint: 'Contração negativa de can.',
        explanation: '"Can\'t" é a forma contraída mais natural de "cannot" no dia a dia.'
      },
      {
        id: 'w-a1-ca-3',
        type: 'fill_blank',
        prompt: 'Complete a pergunta de pedido educado com can:',
        sentenceWithBlank: '___ you open the window, please? It is warm here.',
        expectedAnswers: ['Can', 'Could'],
        hint: 'Verbo modal no início da pergunta.',
        explanation: 'Iniciamos perguntas de solicitação com o modal antes do sujeito: "Can you open...?".'
      }
    ]
  },

  // 8. Ordene a frase (A1) - Novo
  {
    id: 'writing-a1-order-likes',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a1',
    topic: 'Preferências & Lazer',
    title: 'Organizando Frases de Gostos e Lazer',
    description: 'Ordene palavras para expressar preferências pessoais com like, love e enjoy.',
    objective: 'Construir sentenças afirmativas e negativas sobre gostos e passatempos.',
    instructions: 'Reordene as palavras para formar a oração correta em inglês.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-ol-1',
        type: 'sentence_order',
        prompt: 'Ordene a frase sobre passear no parque:',
        scrambledWords: ['in', 'walk', 'the', 'I', 'like', 'park', 'to'],
        expectedSentence: 'I like to walk in the park',
        acceptedSentences: ['I like to walk in the park.'],
        explanation: 'Padrão Sujeito + like to + verbo de ação + local: "I like to walk in the park".'
      },
      {
        id: 'w-a1-ol-2',
        type: 'sentence_order',
        prompt: 'Organize a frase negativa no presente simples:',
        scrambledWords: ['tea', 'does', 'drink', 'He', 'not'],
        expectedSentence: 'He does not drink tea',
        acceptedSentences: ['He does not drink tea.', "He doesn't drink tea", "He doesn't drink tea."],
        explanation: 'Na negação com he/she/it, usamos "does not" e o verbo principal volta à forma base.'
      },
      {
        id: 'w-a1-ol-3',
        type: 'sentence_order',
        prompt: 'Forme a frase sobre cozinhar no fim de semana:',
        scrambledWords: ['weekends', 'She', 'loves', 'cooking', 'on'],
        expectedSentence: 'She loves cooking on weekends',
        acceptedSentences: ['She loves cooking on weekends.', 'On weekends she loves cooking', 'On weekends, she loves cooking.'],
        explanation: 'Após "love", podemos usar o verbo com "-ing" para atividades de lazer contínuas.'
      }
    ]
  },

  // 9. Ordene a frase (A1) - Novo
  {
    id: 'writing-a1-order-questions',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a1',
    topic: 'Perguntas Básicas com Do/Does',
    title: 'Estrutura de Perguntas no Presente',
    description: 'Aprenda a ordem de perguntas diretas com auxiliares Do e Does.',
    objective: 'Fixar a regra Auxiliar + Sujeito + Verbo Base em interrogações simples.',
    instructions: 'Posicione as palavras na ordem correta da pergunta em inglês.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-oq-1',
        type: 'sentence_order',
        prompt: 'Formule a pergunta sobre morar perto do centro:',
        scrambledWords: ['live', 'Do', 'downtown', 'near', 'you'],
        expectedSentence: 'Do you live near downtown',
        acceptedSentences: ['Do you live near downtown?'],
        explanation: 'Perguntas com "you" usam o auxiliar "Do": Do + you + live + complemento?'
      },
      {
        id: 'w-a1-oq-2',
        type: 'sentence_order',
        prompt: 'Formule a pergunta com 3ª pessoa (Does):',
        scrambledWords: ['speak', 'he', 'Does', 'Spanish'],
        expectedSentence: 'Does he speak Spanish',
        acceptedSentences: ['Does he speak Spanish?'],
        explanation: 'Com "he", o auxiliar é "Does" e o verbo "speak" permanece sem "s": Does he speak?'
      },
      {
        id: 'w-a1-oq-3',
        type: 'sentence_order',
        prompt: 'Formule a pergunta com palavra interrogativa (Where):',
        scrambledWords: ['Where', 'they', 'work', 'do'],
        expectedSentence: 'Where do they work',
        acceptedSentences: ['Where do they work?'],
        explanation: 'Ordem de Wh-questions: Wh-word (Where) + Auxiliar (do) + Sujeito (they) + Verbo (work)?'
      }
    ]
  },

  // 10. Ordene a frase (A1) - Novo
  {
    id: 'writing-a1-order-there-is',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'a1',
    topic: 'Existência com There is e There are',
    title: 'Descrevendo Lugares com There is / There are',
    description: 'Ordene frases que indicam existência de objetos e pessoas em um local.',
    objective: 'Praticar There is (singular) e There are (plural) em descrições do cotidiano.',
    instructions: 'Organize as palavras para formar frases afirmativas e negativas de existência.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-ti-1',
        type: 'sentence_order',
        prompt: 'Forme a frase sobre uma padaria na rua:',
        scrambledWords: ['bakery', 'There', 'is', 'a', 'this', 'on', 'street'],
        expectedSentence: 'There is a bakery on this street',
        acceptedSentences: ['There is a bakery on this street.'],
        explanation: '"There is" expressa a existência de um item no singular.'
      },
      {
        id: 'w-a1-ti-2',
        type: 'sentence_order',
        prompt: 'Forme a frase sobre árvores no jardim:',
        scrambledWords: ['many', 'are', 'There', 'in', 'trees', 'the', 'garden'],
        expectedSentence: 'There are many trees in the garden',
        acceptedSentences: ['There are many trees in the garden.'],
        explanation: '"There are" indica existência no plural: There are + many trees + in the garden.'
      },
      {
        id: 'w-a1-ti-3',
        type: 'sentence_order',
        prompt: 'Forme a frase negativa (não há leite na geladeira):',
        scrambledWords: ['is', 'no', 'milk', 'the', 'in', 'There', 'fridge'],
        expectedSentence: 'There is no milk in the fridge',
        acceptedSentences: ['There is no milk in the fridge.'],
        explanation: '"There is no + substantivo incontável" é uma forma elegante de negar existência em inglês.'
      }
    ]
  },

  // 11. Encontre e corrija o erro (A1) - Novo
  {
    id: 'writing-a1-error-he-she',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a1',
    topic: 'Concordância da 3ª Pessoa (-s)',
    title: 'Corrigindo a Terminação -s em Verbos',
    description: 'Identifique quando falta ou sobra o sufixo -s em verbos no presente simples.',
    objective: 'Evitar o erro mais frequente de iniciantes: omitir o -s com he/she/it.',
    instructions: 'Localize a palavra incorreta e digite a versão correta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-eh-1',
        type: 'find_fix_error',
        prompt: 'Corrija a concordância do verbo com "My sister" (she):',
        sentenceWithError: 'My sister live in a peaceful neighborhood.',
        errorWord: 'live',
        correction: 'lives',
        acceptedCorrections: ['lives in'],
        explanationPt: 'Com sujeitos femininos no singular (My sister = she), o verbo regular ganha "-s": "lives".',
        explanation: 'Com he, she ou it no presente, acrescentamos -s ao verbo: live ➔ lives.'
      },
      {
        id: 'w-a1-eh-2',
        type: 'find_fix_error',
        prompt: 'Corrija a forma do verbo irregular "have" com "Lucas":',
        sentenceWithError: 'Lucas haves a new blue bicycle.',
        errorWord: 'haves',
        correction: 'has',
        acceptedCorrections: ['has a'],
        explanationPt: 'A 3ª pessoa do singular do verbo "have" é "has", e nunca "haves".',
        explanation: 'Forma irregular: he has, she has, it has.'
      },
      {
        id: 'w-a1-eh-3',
        type: 'find_fix_error',
        prompt: 'Corrija o verbo após o pronome de primeira pessoa "I":',
        sentenceWithError: 'Every morning I drinks warm tea with honey.',
        errorWord: 'drinks',
        correction: 'drink',
        acceptedCorrections: ['I drink'],
        explanationPt: 'O pronome "I" utiliza a forma base do verbo sem o "-s": "I drink".',
        explanation: 'Apenas a 3ª pessoa do singular recebe -s no Simple Present. Com "I", fica "drink".'
      }
    ]
  },

  // 12. Encontre e corrija o erro (A1) - Novo
  {
    id: 'writing-a1-error-spelling-days',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a1',
    topic: 'Ortografia de Dias da Semana & Meses',
    title: 'Ortografia e Letras Maiúsculas em Dias e Meses',
    description: 'Corrija erros de grafia e maiúsculas obrigatórias em dias da semana e meses em inglês.',
    objective: 'Lembrar que dias da semana e meses sempre iniciam com letra maiúscula em inglês.',
    instructions: 'Reescreva a palavra incorreta com a ortografia e maiúscula adequadas.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-es-1',
        type: 'find_fix_error',
        prompt: 'Corrija o dia da semana escrito com inicial minúscula ou grafia incorreta:',
        sentenceWithError: 'We always visit the farmers market on sunday morning.',
        errorWord: 'sunday',
        correction: 'Sunday',
        acceptedCorrections: ['on Sunday'],
        explanationPt: 'Dias da semana em inglês sempre começam com letra maiúscula.',
        explanation: 'Em inglês, "Sunday", "Monday", etc. são nomes próprios e exigem inicial maiúscula.'
      },
      {
        id: 'w-a1-es-2',
        type: 'find_fix_error',
        prompt: 'Corrija a grafia do dia da semana quarta-feira:',
        sentenceWithError: 'Our soccer practice happens every Wenesday evening.',
        errorWord: 'Wenesday',
        correction: 'Wednesday',
        acceptedCorrections: ['every Wednesday'],
        explanationPt: 'A ortografia correta é "Wednesday", com "d" antes do "nes".',
        explanation: 'Grafia com "d" mudo: Wednesday.'
      },
      {
        id: 'w-a1-es-3',
        type: 'find_fix_error',
        prompt: 'Corrija a preposição de tempo usada com dias da semana:',
        sentenceWithError: 'The store is closed in Mondays.',
        errorWord: 'in',
        correction: 'on',
        acceptedCorrections: ['on Mondays'],
        explanationPt: 'Com dias da semana em inglês, a preposição correta é sempre "on" ("on Mondays").',
        explanation: 'Regra de preposição: on Mondays, on Tuesdays, on Sundays.'
      }
    ]
  },

  // 13. Encontre e corrija o erro (A1) - Novo
  {
    id: 'writing-a1-error-pronouns',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'a1',
    topic: 'Pronomes Objeto vs Sujeito',
    title: 'Corrigindo Me, Him, Her e Them',
    description: 'Diferencie pronomes sujeitos (I, he, they) de pronomes objetos (me, him, them).',
    objective: 'Identificar a posição do pronome em relação ao verbo para escolher a forma correta.',
    instructions: 'Substitua o pronome incorreto pela forma adequada.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-ep-1',
        type: 'find_fix_error',
        prompt: 'Corrija o pronome sujeito antes do verbo:',
        sentenceWithError: 'Me like playing acoustic guitar in my room.',
        errorWord: 'Me',
        correction: 'I',
        acceptedCorrections: ['I like'],
        explanationPt: 'Na posição de sujeito antes do verbo, usamos o pronome sujeito "I", não "me".',
        explanation: 'Pronome sujeito: I play, I like, I study.'
      },
      {
        id: 'w-a1-ep-2',
        type: 'find_fix_error',
        prompt: 'Corrija o pronome objeto após o verbo "call":',
        sentenceWithError: 'Please call he when you arrive at the station.',
        errorWord: 'he',
        correction: 'him',
        acceptedCorrections: ['call him'],
        explanationPt: 'Após verbos ou preposições, o pronome masculino vira objeto: "call him".',
        explanation: 'Pronome objeto masculino: he ➔ him.'
      },
      {
        id: 'w-a1-ep-3',
        type: 'find_fix_error',
        prompt: 'Corrija o pronome objeto após a preposição "with":',
        sentenceWithError: 'Sarah went to the cinema with they.',
        errorWord: 'they',
        correction: 'them',
        acceptedCorrections: ['with them'],
        explanationPt: 'Após preposições ("with", "for", "to"), usamos pronomes objetos: "with them".',
        explanation: 'Pronome objeto plural: they ➔ them.'
      }
    ]
  },

  // 14. Escrita livre guiada (A1) - Novo
  {
    id: 'writing-a1-open-favorite-food',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'a1',
    topic: 'Alimentação & Preferências',
    title: 'Escrevendo sobre sua Comida Favorita',
    description: 'Escreva frases sobre o prato ou lanche que você mais gosta.',
    objective: 'Usar vocabulário de alimentos e expressões simples de justificativa (because it is...).',
    instructions: 'Escreva em inglês respondendo: qual é sua comida preferida e quando você a come.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-off-1',
        type: 'open_prompt',
        contextScenario: 'Um colega de classe pergunta: "What is your favorite food and why do you like it?"',
        promptQuestion: 'Escreva qual é sua comida favorita e dê uma razão simples.',
        suggestedKeywords: ['My favorite food is', 'delicious', 'because', 'pizza', 'pasta'],
        minWords: 5,
        sampleAnswer: 'My favorite food is pasta because it is delicious and easy to cook.',
        evaluationCriteria: {
          requiredKeywords: ['favorite', 'because'],
          minLength: 15
        },
        explanation: 'Estruture sua preferência com "My favorite food is..." e justifique com "because it is...".'
      },
      {
        id: 'w-a1-off-2',
        type: 'open_prompt',
        contextScenario: 'Um amigo pergunta onde você prefere comer aos finais de semana: em casa ou fora?',
        promptQuestion: 'Responda dizendo se prefere comer em casa ou em um restaurante.',
        suggestedKeywords: ['I prefer to eat', 'at home', 'restaurant', 'with my family'],
        minWords: 5,
        sampleAnswer: 'I prefer to eat at home with my family on weekends.',
        evaluationCriteria: {
          requiredKeywords: ['eat', 'home'],
          minLength: 15
        },
        explanation: 'Use "I prefer to eat at home" ou "I like going to restaurants".'
      }
    ]
  },

  // 15. Escrita livre guiada (A1) - Novo
  {
    id: 'writing-a1-open-weekend-plans',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'a1',
    topic: 'Fim de Semana & Lazer',
    title: 'Escrevendo sobre seus Fins de Semana',
    description: 'Escreva frases contando o que você costuma fazer aos sábados e domingos.',
    objective: 'Praticar o presente simples com marcadores temporais de descanso (On Saturdays, on Sundays).',
    instructions: 'Descreva em inglês suas atividades típicas de descanso ou lazer.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-a1-owp-1',
        type: 'open_prompt',
        contextScenario: 'Um colega pergunta o que você faz no sábado de manhã: "What do you do on Saturday mornings?"',
        promptQuestion: 'Escreva uma frase sobre sua rotina no sábado de manhã.',
        suggestedKeywords: ['On Saturday', 'I wake up', 'clean', 'breakfast', 'park'],
        minWords: 5,
        sampleAnswer: 'On Saturday mornings, I wake up late and have a big breakfast.',
        evaluationCriteria: {
          requiredKeywords: ['Saturday'],
          minLength: 15
        },
        explanation: 'Inicie com "On Saturday mornings, I [ação]".'
      },
      {
        id: 'w-a1-owp-2',
        type: 'open_prompt',
        contextScenario: 'Um amigo quer saber como você relaxa no domingo à noite: "How do you relax on Sunday evening?"',
        promptQuestion: 'Escreva uma frase dizendo como você descansa antes de começar a semana.',
        suggestedKeywords: ['On Sunday evening', 'I watch', 'listen to music', 'read'],
        minWords: 5,
        sampleAnswer: 'On Sunday evening, I watch a good movie and drink tea at home.',
        evaluationCriteria: {
          requiredKeywords: ['Sunday'],
          minLength: 15
        },
        explanation: 'Para descrever lazer calmo: "I watch a movie", "I read a book", "I relax with my family".'
      }
    ]
  }
];

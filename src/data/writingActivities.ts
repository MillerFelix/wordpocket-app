import { Activity } from '../types/activity';

export const WRITING_ACTIVITIES: Activity[] = [
  // ==========================================
  // NÍVEL A1 — INICIANTE
  // ==========================================
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
        acceptedSentences: ['I eat breakfast every morning'],
        explanation: 'A ordem padrão em inglês é Sujeito (I) + Verbo (have) + Objeto (breakfast) + Expressão temporal (every morning).'
      },
      {
        id: 'w-a1-so-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Ele trabalha em um escritório em São Paulo."',
        scrambledWords: ['in', 'works', 'an', 'office', 'He'],
        expectedSentence: 'He works in an office',
        explanation: 'Terceira pessoa do singular no presente adiciona -s ao verbo: He works in an office.'
      },
      {
        id: 'w-a1-so-3',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Nós estudamos inglês juntos à noite."',
        scrambledWords: ['English', 'study', 'We', 'together', 'at', 'night'],
        expectedSentence: 'We study English together at night',
        explanation: 'Sujeito (We) + Verbo (study) + Objeto (English) + Advérbio (together) + Preposição de tempo (at night).'
      }
    ]
  },
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
        explanationPt: 'Com sujeitos no singular (My sister = she), o verbo recebe "-s": "lives".',
        explanation: 'Regra geral do Simple Present na 3ª pessoa do singular: verbo + s (live ➔ lives).'
      }
    ]
  },
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

  // ==========================================
  // NÍVEL A2 — BÁSICO
  // ==========================================
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

  // ==========================================
  // NÍVEL B1 — INTERMEDIÁRIO
  // ==========================================
  {
    id: 'writing-b1-fill-perfect',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b1',
    topic: 'Present Perfect & Experiências',
    title: 'Present Perfect e Particípios',
    description: 'Complete frases no Present Perfect para expressar experiências de vida e ações conectadas ao presente.',
    objective: 'Praticar a combinação have/has + Past Participle.',
    instructions: 'Digite a forma correta do verbo no particípio passado ou o auxiliar adequado.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-fb-1',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "see" (ver):',
        sentenceWithBlank: 'I have never ___ such an impressive presentation before.',
        expectedAnswers: ['seen'],
        hint: 'Particípio passado de see (see - saw - ?)',
        explanation: 'O particípio passado de "see" é "seen". A estrutura é have + seen.'
      },
      {
        id: 'w-b1-fb-2',
        type: 'fill_blank',
        prompt: 'Complete com a palavra que indica duração de tempo ("há 3 anos"):',
        sentenceWithBlank: 'They have worked on this project ___ three months.',
        expectedAnswers: ['for'],
        hint: 'Usado para períodos de duração (for vs since).',
        explanation: 'Usamos "for" para períodos de tempo ("for three months") e "since" para o ponto de partida ("since March").'
      },
      {
        id: 'w-b1-fb-3',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "choose" (escolher):',
        sentenceWithBlank: 'The committee has ___ the final candidate for the scholarship.',
        expectedAnswers: ['chosen'],
        hint: 'Particípio de choose (choose - chose - ?)',
        explanation: 'O particípio passado de "choose" é "chosen".'
      }
    ]
  },
  {
    id: 'writing-b1-order-cond',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b1',
    topic: 'Condicionais & Situações Hipotéticas',
    title: 'Segunda Condicional (If + Past, Would)',
    description: 'Construa orações hipotéticas sobre desejos, possibilidades e conselhos.',
    objective: 'Dominar a estrutura If + Simple Past, would + verbo base.',
    instructions: 'Organize as palavras para formar a oração condicional completa.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-so-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Se eu tivesse mais tempo livre, eu viajaria com mais frequência."',
        scrambledWords: ['free', 'I', 'had', 'more', 'travel', 'more', 'often', 'time', 'If', 'would', 'I'],
        expectedSentence: 'If I had more free time I would travel more often',
        acceptedSentences: [
          'If I had more free time, I would travel more often',
          'I would travel more often if I had more free time'
        ],
        explanation: 'Second Conditional: If + sujeito + passado (had) ..., sujeito + would + verbo base (travel).'
      },
      {
        id: 'w-b1-so-2',
        type: 'sentence_order',
        prompt: 'Monte o conselho clássico: "Se eu fosse você, eu aceitaria a oportunidade."',
        scrambledWords: ['were', 'I', 'accept', 'If', 'the', 'you', 'would', 'I', 'opportunity'],
        expectedSentence: 'If I were you I would accept the opportunity',
        acceptedSentences: ['If I were you, I would accept the opportunity'],
        explanation: 'Na estrutura formal de conselho da segunda condicional, usa-se "If I were you, I would...".'
      }
    ]
  },
  {
    id: 'writing-b1-error-work',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b1',
    topic: 'Trabalho & E-mails Profissionais',
    title: 'Precisão em Mensagens de Trabalho',
    description: 'Corrija erros comuns de vocabulário e "falsos amigos" em comunicações formais.',
    objective: 'Evitar interferências comuns do português em contexto profissional.',
    instructions: 'Substitua o termo inadequado pela palavra correta em inglês.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-fe-1',
        type: 'find_fix_error',
        prompt: 'Em inglês, "pretend" significa fingir. Para dizer que pretende fazer algo, use "intend" ou "plan":',
        sentenceWithError: 'I pretend to finish the quarterly report by tomorrow afternoon.',
        errorWord: 'pretend',
        correction: 'intend',
        acceptedCorrections: ['plan'],
        explanationPt: '"Pretend" é um falso amigo que significa fingir. Para pretender, use "intend" ou "plan".',
        explanation: 'Cuidado com falsos cognatos: pretend = fingir; intend / plan = pretender, planejar.'
      },
      {
        id: 'w-b1-fe-2',
        type: 'find_fix_error',
        prompt: 'Com a palavra "homework" ou "research", não usamos o verbo "make":',
        sentenceWithError: 'The research team made extensive analysis before launching.',
        errorWord: 'made',
        correction: 'did',
        acceptedCorrections: ['conducted', 'performed'],
        explanationPt: 'Colocação correta com pesquisa ou tarefas analíticas: "do research" ➔ passado "did".',
        explanation: 'Diferença entre Make e Do: tarefas analíticas, pesquisas e deveres usam "do" (do research, did analysis).'
      }
    ]
  },
  {
    id: 'writing-b1-open-email',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'b1',
    topic: 'Comunicação Profissional',
    title: 'Escreva um E-mail de Alinhamento',
    description: 'Redija uma mensagem objetiva avisando sobre um atraso e propondo novo horário.',
    objective: 'Praticar polidez, clareza e estrutura de e-mails profissionais curtos.',
    instructions: 'Escreva uma mensagem formal ou semi-formal em inglês para o contexto abaixo.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-op-1',
        type: 'open_prompt',
        contextScenario: 'Você está a caminho de uma reunião importante com clientes, mas o trânsito está travado. Você precisa enviar um e-mail avisando que chegará 15 minutos atrasado e se desculpando pelo transtorno.',
        promptQuestion: 'Escreva a mensagem avisando o atraso de 15 minutos e pedindo desculpas.',
        suggestedKeywords: ['apologize', 'running late', 'traffic', 'minutes', 'meeting'],
        minWords: 10,
        sampleAnswer: 'Dear team, I apologize but I am running 15 minutes late due to heavy traffic. I will join the meeting shortly.',
        evaluationCriteria: {
          requiredKeywords: ['late', 'minutes'],
          minLength: 30
        },
        explanation: 'Expressões ideais para atrasos profissionais: "I apologize for the delay", "I am running [X] minutes late", "Thank you for your patience".'
      },
      {
        id: 'w-b1-op-2',
        type: 'open_prompt',
        contextScenario: 'Após a reunião com um cliente internacional, você precisa enviar um breve e-mail agradecendo pelo tempo de todos e informando que a proposta atualizada segue em anexo.',
        promptQuestion: 'Escreva um e-mail curto de agradecimento mencionando o envio da proposta em anexo.',
        suggestedKeywords: ['thank you', 'meeting', 'attached', 'proposal', 'please let me know'],
        minWords: 10,
        sampleAnswer: 'Thank you for your time during our meeting today. I have attached the updated proposal for your review.',
        evaluationCriteria: {
          requiredKeywords: ['thank', 'attached'],
          minLength: 35
        },
        explanation: 'Fórmulas essenciais de e-mail de negócios: "Thank you for your time", "Please find attached...", "I have attached [document] for your review".'
      }
    ]
  }
];

export function getWritingActivities(level?: string): Activity[] {
  if (!level || level.toLowerCase() === 'all') {
    return WRITING_ACTIVITIES;
  }
  return WRITING_ACTIVITIES.filter((a) => a.level.toLowerCase() === level.toLowerCase());
}

export function getWritingActivityById(id: string): Activity | undefined {
  return WRITING_ACTIVITIES.find((a) => a.id === id);
}

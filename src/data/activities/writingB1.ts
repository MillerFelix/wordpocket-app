import { Activity } from '../../types/activity';

export const WRITING_B1: Activity[] = [
  // 1. Complete as lacunas (B1) - Existente
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

  // 2. Complete as lacunas (B1) - Novo
  {
    id: 'writing-b1-fill-passive-voice',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b1',
    topic: 'Voz Passiva no Presente e Passado',
    title: 'Construindo Frases na Voz Passiva',
    description: 'Complete frases na voz passiva com as formas corretas de to be + particípio passado.',
    objective: 'Dominar a estrutura de voz passiva (is made, was built, were notified).',
    instructions: 'Digite a forma correta do verbo auxiliar ou do particípio na lacuna.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-pv-1',
        type: 'fill_blank',
        prompt: 'Complete a frase na voz passiva passada ("O romance foi escrito em 1925"):',
        sentenceWithBlank: 'The famous novel ___ written by F. Scott Fitzgerald in 1925.',
        expectedAnswers: ['was'],
        hint: 'Passado do verbo to be para sujeito singular (The novel).',
        explanation: 'Com sujeito singular no passado, a voz passiva usa "was + particípio": was written.'
      },
      {
        id: 'w-b1-pv-2',
        type: 'fill_blank',
        prompt: 'Complete com o particípio de "build" (construir na voz passiva):',
        sentenceWithBlank: 'The new suspension bridge was ___ by international engineers last year.',
        expectedAnswers: ['built'],
        hint: 'Particípio passado de build (build - built - ?).',
        explanation: 'O particípio do verbo irregular "build" é "built".'
      },
      {
        id: 'w-b1-pv-3',
        type: 'fill_blank',
        prompt: 'Complete a passiva no presente plural ("Estes carros elétricos são produzidos na Alemanha"):',
        sentenceWithBlank: 'These eco-friendly vehicles ___ manufactured in Germany.',
        expectedAnswers: ['are'],
        hint: 'Verbo to be no presente para sujeito plural (vehicles).',
        explanation: 'Para sujeitos no plural no presente, a voz passiva usa "are + particípio": are manufactured.'
      }
    ]
  },

  // 3. Complete as lacunas (B1) - Novo
  {
    id: 'writing-b1-fill-modal-deduction',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b1',
    topic: 'Modais de Dedução & Certeza',
    title: 'Expressando Dedução: Must, Can\'t, Might',
    description: 'Complete frases dedutivas expressando certeza lógica, impossibilidade ou possibilidade.',
    objective: 'Diferenciar must be (deve ser / quase certeza), can\'t be (não pode ser) e might (pode ser).',
    instructions: 'Escreva o modal de dedução adequado no espaço em branco.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-md-1',
        type: 'fill_blank',
        prompt: 'Complete com o modal de certeza lógica ("As luzes estão acesas, ele DEVE estar em casa"):',
        sentenceWithBlank: 'All the living room lights are on. He ___ be home right now.',
        expectedAnswers: ['must'],
        hint: 'Modal usado para conclusões lógicas afirmativas quase certas.',
        explanation: 'Usamos "must" para deduções lógicas afirmativas: "He must be home" (Ele deve estar em casa).'
      },
      {
        id: 'w-b1-md-2',
        type: 'fill_blank',
        prompt: 'Complete com o modal de impossibilidade lógica ("Não pode ser verdade"):',
        sentenceWithBlank: 'That story ___ be true because I was with him the entire afternoon!',
        expectedAnswers: ["can't", 'cannot'],
        hint: 'Modal negativo de dedução para algo impossível.',
        explanation: 'Para deduções lógicas negativas de impossibilidade, usamos "can\'t": "That can\'t be true".'
      },
      {
        id: 'w-b1-md-3',
        type: 'fill_blank',
        prompt: 'Complete com o modal de possibilidade moderada ("Talvez/Pode ser que chova mais tarde"):',
        sentenceWithBlank: 'Take an umbrella with you; it ___ rain later this evening.',
        expectedAnswers: ['might', 'may'],
        hint: 'Modal de possibilidade (talvez chova).',
        explanation: 'Usamos "might" ou "may" para possibilidades incertas no futuro.'
      }
    ]
  },

  // 4. Complete as lacunas (B1) - Novo
  {
    id: 'writing-b1-fill-relative-pronouns',
    pillar: 'writing',
    type: 'fill_blank',
    level: 'b1',
    topic: 'Orações Relativas (Who, Which, Where, Whose)',
    title: 'Conectando Ideias com Pronomes Relativos',
    description: 'Complete frases complexas unindo orações com o pronome relativo adequado.',
    objective: 'Diferenciar who (pessoas), which (coisas), where (lugares) e whose (posse).',
    instructions: 'Digite o pronome relativo adequado no campo em branco.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-rp-1',
        type: 'fill_blank',
        prompt: 'Complete com o pronome relativo para pessoas ("O médico que me atendeu"):',
        sentenceWithBlank: 'The doctor ___ examined my sprained ankle was extremely professional.',
        expectedAnswers: ['who', 'that'],
        hint: 'Pronome relativo referente a pessoas.',
        explanation: 'Para pessoas, usamos "who" (ou "that"): The doctor who examined...'
      },
      {
        id: 'w-b1-rp-2',
        type: 'fill_blank',
        prompt: 'Complete com o pronome relativo para lugares ("A livraria onde comprei este romance"):',
        sentenceWithBlank: 'This is the charming bookstore ___ I found that rare mystery novel.',
        expectedAnswers: ['where'],
        hint: 'Pronome relativo de lugar.',
        explanation: 'Para indicar lugares onde algo acontece, usamos "where": the bookstore where I found...'
      },
      {
        id: 'w-b1-rp-3',
        type: 'fill_blank',
        prompt: 'Complete com o pronome relativo de posse ("O arquiteto cujo projeto venceu"):',
        sentenceWithBlank: 'We hired the architect ___ design won the sustainable building award.',
        expectedAnswers: ['whose'],
        hint: 'Pronome relativo que indica posse (cujo/cuja).',
        explanation: 'Para relações de posse ("cujo design"), usamos o pronome relativo "whose".'
      }
    ]
  },

  // 5. Ordene as frases (B1) - Existente
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

  // 6. Ordene as frases (B1) - Novo
  {
    id: 'writing-b1-order-third-conditional',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b1',
    topic: 'Terceira Condicional & Hipóteses Passadas',
    title: 'Terceira Condicional (If + Past Perfect, Would Have)',
    description: 'Construa orações complexas sobre fatos passados que não aconteceram e seus desfechos hipotéticos.',
    objective: 'Dominar a estrutura If + had + particípio, would have + particípio.',
    instructions: 'Ordene as palavras para estruturar a terceira condicional.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-tc-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Se nós tivéssemos saído mais cedo, nós não teríamos perdido o trem."',
        scrambledWords: ['earlier', 'we', 'left', 'have', 'the', 'missed', 'If', 'not', 'had', 'would', 'train'],
        expectedSentence: 'If we had left earlier we would not have missed the train',
        acceptedSentences: [
          'If we had left earlier, we would not have missed the train',
          'We would not have missed the train if we had left earlier'
        ],
        explanation: 'Third Conditional: If + had left ..., would not have missed the train.'
      },
      {
        id: 'w-b1-tc-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Ela teria ligado se soubesse a notícia."',
        scrambledWords: ['had', 'called', 'She', 'she', 'would', 'the', 'if', 'news', 'have', 'known'],
        expectedSentence: 'She would have called if she had known the news',
        acceptedSentences: ['If she had known the news she would have called'],
        explanation: 'Estrutura: Sujeito + would have + particípio (called) + if + had known the news.'
      }
    ]
  },

  // 7. Ordene as frases (B1) - Novo
  {
    id: 'writing-b1-order-indirect-questions',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b1',
    topic: 'Perguntas Indiretas e Corteses',
    title: 'Formulando Perguntas Indiretas Educadas',
    description: 'Converta perguntas diretas em fórmulas corteses: "Could you tell me where..." ou "Do you know if...".',
    objective: 'Reconhecer que perguntas indiretas mantêm a ordem afirmativa Sujeito + Verbo após a palavra interrogativa.',
    instructions: 'Coloque as palavras na ordem exata de polidez e sintaxe.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-iq-1',
        type: 'sentence_order',
        prompt: 'Monte a pergunta indireta cortês: "Você poderia me dizer onde fica a estação de trem?"',
        scrambledWords: ['train', 'is', 'where', 'tell', 'the', 'Could', 'me', 'station', 'you'],
        expectedSentence: 'Could you tell me where the train station is',
        acceptedSentences: ['Could you tell me where the train station is?'],
        explanation: 'Em perguntas indiretas, a oração subordinada usa a ordem afirmativa: where (wh-word) + the train station (sujeito) + is (verbo).'
      },
      {
        id: 'w-b1-iq-2',
        type: 'sentence_order',
        prompt: 'Monte a pergunta indireta: "Você sabe se o voo está no horário?"',
        scrambledWords: ['on', 'Do', 'flight', 'know', 'if', 'the', 'is', 'time', 'you'],
        expectedSentence: 'Do you know if the flight is on time',
        acceptedSentences: ['Do you know if the flight is on time?'],
        explanation: 'Fórmula indireta com if: Do you know if + sujeito (the flight) + verbo (is) + complemento (on time).'
      }
    ]
  },

  // 8. Ordene as frases (B1) - Novo
  {
    id: 'writing-b1-order-inversion-connectors',
    pillar: 'writing',
    type: 'sentence_order',
    level: 'b1',
    topic: 'Conectores de Contraste (Although, However, In spite of)',
    title: 'Estruturando Contrastes Complexos',
    description: 'Ordene palavras para formar orações coordenadas e subordinadas de contraste e concessão.',
    objective: 'Praticar o uso de conectores discursivos formais como although, despite e however.',
    instructions: 'Organize as palavras na ordem sintática correta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-oc-1',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Embora estivesse chovendo muito, eles aproveitaram o passeio ao ar livre."',
        scrambledWords: ['it', 'enjoyed', 'they', 'hard', 'raining', 'outdoor', 'Although', 'was', 'the', 'tour'],
        expectedSentence: 'Although it was raining hard they enjoyed the outdoor tour',
        acceptedSentences: ['Although it was raining hard, they enjoyed the outdoor tour'],
        explanation: 'Conector de concessão: Although + oração completa (it was raining hard), oração principal (they enjoyed the outdoor tour).'
      },
      {
        id: 'w-b1-oc-2',
        type: 'sentence_order',
        prompt: 'Monte a frase: "Apesar do trânsito pesado, nós chegamos ao aeroporto a tempo."',
        scrambledWords: ['airport', 'we', 'the', 'Despite', 'heavy', 'arrived', 'the', 'at', 'traffic', 'in', 'time'],
        expectedSentence: 'Despite the heavy traffic we arrived at the airport in time',
        acceptedSentences: ['Despite the heavy traffic, we arrived at the airport in time'],
        explanation: 'Preposição de contraste: Despite + sintagma nominal (the heavy traffic), oração (we arrived at the airport in time).'
      }
    ]
  },

  // 9. Encontre e corrija o erro (B1) - Existente
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

  // 10. Encontre e corrija o erro (B1) - Novo
  {
    id: 'writing-b1-error-collocations',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b1',
    topic: 'Colocações Verbais e Naturais',
    title: 'Corrigindo Colocações Verbais (Make vs Take vs Do)',
    description: 'Corrija verbos que não combinam naturalmente com o substantivo seguinte (take decision -> make decision).',
    objective: 'Aprender colocações verbais idiomáticas frequentes no inglês intermediário.',
    instructions: 'Identifique o verbo inadequado e escreva a colocação verbal correta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-ec-1',
        type: 'find_fix_error',
        prompt: 'Em inglês, não se diz "take a decision". O verbo padrão é "make":',
        sentenceWithError: 'The committee needs to take a final decision by Friday.',
        errorWord: 'take',
        correction: 'make',
        explanationPt: 'A colocação natural em inglês é "make a decision" (tomar uma decisão).',
        explanation: 'Colocação correta: make a decision.'
      },
      {
        id: 'w-b1-ec-2',
        type: 'find_fix_error',
        prompt: 'Com a palavra "mistake" (erro), usamos o verbo "make", não "do":',
        sentenceWithError: 'Don’t worry if you did a small grammar mistake in your draft.',
        errorWord: 'did',
        correction: 'made',
        explanationPt: 'Em inglês, cometer um erro é "make a mistake" (passado "made").',
        explanation: 'Colocação verbal obrigatória: make a mistake -> made a mistake.'
      }
    ]
  },

  // 11. Encontre e corrija o erro (B1) - Novo
  {
    id: 'writing-b1-error-since-for',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b1',
    topic: 'Present Perfect: Since vs For',
    title: 'Corrigindo Duração e Ponto de Partida (Since vs For)',
    description: 'Elimine a confusão comum entre períodos de duração (for three years) e pontos de início (since 2021).',
    objective: 'Dominar a distinção entre since e for associados a tempos perfeitos.',
    instructions: 'Substitua a preposição temporal incorreta pela forma adequada.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-sf-1',
        type: 'find_fix_error',
        prompt: 'Para indicar a duração total de tempo ("cinco anos"), usamos "for", não "since":',
        sentenceWithError: 'Marina has lived in this historic neighborhood since five years.',
        errorWord: 'since',
        correction: 'for',
        explanationPt: 'Usamos "for" para duração de tempo ("for five years") e "since" para ponto de início ("since 2019").',
        explanation: 'Regra de tempo perfeito: for + período (for 5 years); since + data/ponto no tempo (since 2019).'
      },
      {
        id: 'w-b1-sf-2',
        type: 'find_fix_error',
        prompt: 'Para um ponto específico no tempo ("segunda-feira passada"), usamos "since", não "for":',
        sentenceWithError: 'I have not seen my brother for last Monday.',
        errorWord: 'for',
        correction: 'since',
        explanationPt: 'Como "last Monday" é um momento de partida específico, a preposição correta é "since".',
        explanation: 'Ponto no passado definido = since (since last Monday, since breakfast).'
      }
    ]
  },

  // 12. Encontre e corrija o erro (B1) - Novo
  {
    id: 'writing-b1-error-gerund-infinitive',
    pillar: 'writing',
    type: 'find_fix_error',
    level: 'b1',
    topic: 'Gerúndio vs Infinitivo Após Verbos',
    title: 'Padrões Verbais: Gerúndio (-ing) vs Infinitivo',
    description: 'Corrija erros com verbos que exigem obrigatoriamente gerúndio (avoid doing, enjoy reading, consider moving).',
    objective: 'Reconhecer regências verbais que pedem a forma -ing e não o infinitivo com to.',
    instructions: 'Identifique o erro gramatical e digite a forma verbal correta.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-egi-1',
        type: 'find_fix_error',
        prompt: 'O verbo "avoid" (evitar) exige o verbo seguinte com terminação -ing, e não com "to":',
        sentenceWithError: 'During the rush hour, drivers should avoid to travel through downtown.',
        errorWord: 'to travel',
        correction: 'traveling',
        acceptedCorrections: ['travelling'],
        explanationPt: 'Após o verbo "avoid", o verbo subsequente deve estar no gerúndio: "avoid traveling".',
        explanation: 'Regência verbal: avoid + gerúndio (avoid doing, avoid traveling).'
      },
      {
        id: 'w-b1-egi-2',
        type: 'find_fix_error',
        prompt: 'A expressão "look forward to" é seguida de gerúndio (-ing):',
        sentenceWithError: 'I look forward to hear from you regarding the application.',
        errorWord: 'hear',
        correction: 'hearing',
        explanationPt: 'Na expressão formal "look forward to", a palavra "to" é preposição e exige a forma em -ing: "look forward to hearing".',
        explanation: 'Expressão clássica de e-mail formal: I look forward to hearing from you.'
      }
    ]
  },

  // 13. Resposta guiada (B1) - Existente
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
  },

  // 14. Resposta guiada (B1) - Novo
  {
    id: 'writing-b1-open-complaint-letter',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'b1',
    topic: 'Atendimento & Reclamação Formal',
    title: 'Redigindo uma Reclamação Formal Polida',
    description: 'Escreva uma mensagem formal para um serviço de hotelaria ou companhia aérea relatando um problema e solicitando solução.',
    objective: 'Praticar o equilíbrio entre firmeza, clareza e cortesia formal ao relatar insatisfações de serviço.',
    instructions: 'Escreva a mensagem de reclamação em inglês com introdução, relato do problema e solução esperada.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-ocr-1',
        type: 'open_prompt',
        contextScenario: 'Você comprou um fone de ouvido online, mas o produto chegou com defeito no lado esquerdo. Escreva um e-mail para o suporte da loja solicitando a troca ou o reembolso.',
        promptQuestion: 'Escreva a mensagem formal relatando o defeito do fone e pedindo a troca do produto ou devolução do dinheiro.',
        suggestedKeywords: ['writing to report', 'defective', 'replacement', 'refund', 'order number'],
        minWords: 12,
        sampleAnswer: 'Dear Customer Support, I am writing to report that the headphones I ordered arrived defective. Could you please arrange a replacement or issue a full refund?',
        evaluationCriteria: {
          requiredKeywords: ['writing', 'refund'],
          minLength: 35
        },
        explanation: 'Fórmulas clássicas de correspondência formal: "I am writing to report that...", "Could you please arrange a replacement or refund?".'
      },
      {
        id: 'w-b1-ocr-2',
        type: 'open_prompt',
        contextScenario: 'O ar-condicionado do seu quarto de hotel não está resfriando e faz um barulho constante. Escreva uma mensagem para a gerência pedindo o conserto ou troca de quarto.',
        promptQuestion: 'Solicite polidamente que a equipe de manutenção verifique o aparelho ou providencie outro quarto.',
        suggestedKeywords: ['air conditioning', 'not working', 'could you please', 'change rooms', 'thank you'],
        minWords: 10,
        sampleAnswer: 'Good evening. The air conditioning in room 302 is not working properly. Could you please send someone to check it or move us to another room?',
        evaluationCriteria: {
          requiredKeywords: ['room', 'working'],
          minLength: 35
        },
        explanation: 'Exponha a situação sem agressividade e dê opções práticas: "could you please inspect it or transfer us to another room?".'
      }
    ]
  },

  // 15. Resposta guiada (B1) - Novo
  {
    id: 'writing-b1-open-opinion-essay',
    pillar: 'writing',
    type: 'open_prompt',
    level: 'b1',
    topic: 'Argumentação & Estilo de Vida',
    title: 'Expressando Opinião sobre Trabalho e Vida Moderna',
    description: 'Escreva um parágrafo argumentativo estruturado ponderando as vantagens e desvantagens do trabalho remoto ou híbrido.',
    objective: 'Articular opiniões pessoais com conectores lógicos (in my opinion, furthermore, however, on the one hand).',
    instructions: 'Escreva um parágrafo argumentativo em inglês com tese, justificativa e conclusão.',
    maxScore: 100,
    version: 1,
    questions: [
      {
        id: 'w-b1-ooe-1',
        type: 'open_prompt',
        contextScenario: 'Em um fórum de debate internacional sobre modelos de trabalho, perguntam: "Do you prefer working from home, in an office, or a hybrid model, and why?"',
        promptQuestion: 'Escreva sua opinião argumentando qual modelo você prefere e apontando uma vantagem principal.',
        suggestedKeywords: ['In my opinion', 'prefer', 'because', 'flexibility', 'balance', 'hybrid'],
        minWords: 12,
        sampleAnswer: 'In my opinion, the hybrid model is ideal because it combines the flexibility of home with the valuable personal connection of the office.',
        evaluationCriteria: {
          requiredKeywords: ['opinion', 'because'],
          minLength: 40
        },
        explanation: 'Inicie com marcadores de opinião: "In my opinion...", "From my perspective...", e sustente com "because" ou "furthermore".'
      },
      {
        id: 'w-b1-ooe-2',
        type: 'open_prompt',
        contextScenario: 'Um blog de viagens pergunta aos leitores: "Is it better to travel alone or with friends/family?"',
        promptQuestion: 'Defenda sua preferência entre viajar sozinho ou acompanhado, justificando com um argumento claro.',
        suggestedKeywords: ['I believe', 'traveling', 'freedom', 'share experiences', 'better because'],
        minWords: 12,
        sampleAnswer: 'I believe traveling with friends is better because sharing unforgettable experiences and laughter creates memories that last a lifetime.',
        evaluationCriteria: {
          requiredKeywords: ['believe', 'because'],
          minLength: 40
        },
        explanation: 'Use conectores causais e adjetivos ricos: "I believe...", "sharing experiences creates memories that last a lifetime".'
      }
    ]
  }
];

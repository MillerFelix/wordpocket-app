export interface EnglishTip {
  id: string;
  topic: string;
  title: string;
  explanation: string;
  exampleEn: string;
  examplePt: string;
}

export const ENGLISH_TIPS: EnglishTip[] = [
  {
    id: 'make-vs-do',
    topic: 'Vocabulário',
    title: 'Make vs. Do',
    explanation: 'Use "make" para criar, produzir ou construir algo novo. Use "do" para tarefas rotineiras, obrigações e ações em geral.',
    exampleEn: 'I need to do my chores before I make dinner.',
    examplePt: 'Preciso fazer minhas tarefas antes de preparar o jantar.'
  },
  {
    id: 'actually-false-friend',
    topic: 'Falsos Cognatos',
    title: 'Actually não é "atualmente"',
    explanation: '"Actually" significa "na verdade" ou "realmente". Para expressar "atualmente", use "currently" ou "nowadays".',
    exampleEn: 'I thought he was angry, but actually he was just tired.',
    examplePt: 'Achei que ele estava bravo, mas na verdade estava apenas cansado.'
  },
  {
    id: 'in-time-vs-on-time',
    topic: 'Preposições',
    title: 'In time vs. On time',
    explanation: '"On time" refere-se à hora exata e pontualidade. "In time" significa a tempo de fazer algo antes que seja tarde.',
    exampleEn: 'The bus was on time, so we arrived in time for the meeting.',
    examplePt: 'O ônibus foi pontual, então chegamos a tempo para a reunião.'
  },
  {
    id: 'say-vs-tell',
    topic: 'Verbos',
    title: 'Say vs. Tell',
    explanation: '"Tell" sempre exige a pessoa com quem se fala (tell someone). "Say" foca no que foi dito, sem citar quem ouve.',
    exampleEn: 'Please tell me the truth, don’t just say everything is fine.',
    examplePt: 'Por favor me conte a verdade, não diga apenas que está tudo bem.'
  },
  {
    id: 'borrow-vs-lend',
    topic: 'Vocabulário',
    title: 'Borrow vs. Lend',
    explanation: '"Borrow" é pegar emprestado de alguém. "Lend" é emprestar algo seu para outra pessoa.',
    exampleEn: 'Can I borrow your umbrella? I can lend you my jacket.',
    examplePt: 'Posso pegar seu guarda-chuva emprestado? Posso te emprestar minha jaqueta.'
  },
  {
    id: 'at-on-in-time',
    topic: 'Preposições',
    title: 'At, On e In com tempo',
    explanation: 'Use "at" para horários específicos (at 8 AM), "on" para dias e datas (on Monday) e "in" para meses, anos e períodos (in July).',
    exampleEn: 'The class starts at 9 AM on Friday in August.',
    examplePt: 'A aula começa às 9h na sexta-feira em agosto.'
  },
  {
    id: 'much-vs-many',
    topic: 'Quantificadores',
    title: 'Much vs. Many',
    explanation: 'Use "many" com substantivos contáveis no plural (books, days). Use "much" com palavras incontáveis (money, time, water).',
    exampleEn: 'We don’t have much time, but we have many tasks.',
    examplePt: 'Não temos muito tempo, mas temos muitas tarefas.'
  },
  {
    id: 'look-forward-to',
    topic: 'Expressões',
    title: 'Look forward to + -ING',
    explanation: 'A expressão "look forward to" (esperar ansiosamente por algo) exige o verbo seguinte obrigatoriamente com terminação "-ing".',
    exampleEn: 'I look forward to meeting you tomorrow.',
    examplePt: 'Estou ansioso para encontrar você amanhã.'
  },
  {
    id: 'listen-vs-hear',
    topic: 'Percepção',
    title: 'Hear vs. Listen',
    explanation: '"Hear" é a capacidade involuntária de captar sons. "Listen" exige intenção e atenção consciente ao que é dito.',
    exampleEn: 'Did you hear that sound? Listen to me carefully!',
    examplePt: 'Você ouviu aquele som? Escute-me com atenção!'
  },
  {
    id: 'lose-vs-loose',
    topic: 'Erros Comuns',
    title: 'Lose vs. Loose',
    explanation: '"Lose" (som de Z) é o verbo perder. "Loose" (som de S) é o adjetivo frouxo, solto ou folgado.',
    exampleEn: 'Be careful not to lose your watch; the strap is loose.',
    examplePt: 'Cuidado para não perder seu relógio; a pulseira está frouxa.'
  },
  {
    id: 'intend-vs-pretend',
    topic: 'Falsos Cognatos',
    title: 'Pretend não é "pretender"',
    explanation: '"Pretend" significa fingir. Quando quiser dizer que pretende fazer algo, use o verbo "intend" ou "plan".',
    exampleEn: 'I intend to study abroad, so don’t pretend you didn’t know.',
    examplePt: 'Pretendo estudar no exterior, então não finja que não sabia.'
  },
  {
    id: 'good-at',
    topic: 'Preposições',
    title: 'Good at (e não "good in")',
    explanation: 'Para indicar que alguém tem habilidade ou facilidade em algo, use sempre a estrutura "good at" seguida de verbo no gerúndio ou substantivo.',
    exampleEn: 'She is very good at speaking in public.',
    examplePt: 'Ela é muito boa em falar em público.'
  }
];

/**
 * Retorna uma dica estável para o dia atual com base no calendário.
 * Mantém a mesma dica durante todo o dia sem alterações a cada renderização.
 */
export function getDailyTip(date: Date = new Date()): EnglishTip {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = Math.abs(dayOfYear) % ENGLISH_TIPS.length;
  return ENGLISH_TIPS[index];
}

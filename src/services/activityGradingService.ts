import { Activity, ActivityGradingResult, QuestionGrading, WritingQuestion, ReadingQuestion } from '../types/activity';

/**
 * Normaliza textos para comparação determinística justa
 * (remove pontuação periférica desnecessária, múltiplos espaços e converte para minúsculas)
 */
export function normalizeText(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:]+$/, '') // remove pontuação final
    .replace(/\s+/g, ' ');
}

/**
 * Remove apóstrofos e contrações equivalentes para flexibilizar correção
 * ex: "don't" <-> "do not", "i'm" <-> "i am"
 */
export function normalizeContractions(text: string): string {
  return normalizeText(text)
    .replace(/’/g, "'")
    .replace(/n't\b/g, ' not')
    .replace(/'m\b/g, ' am')
    .replace(/'re\b/g, ' are')
    .replace(/'s\b/g, ' is')
    .replace(/'ll\b/g, ' will')
    .replace(/'ve\b/g, ' have')
    .replace(/'d\b/g, ' would');
}

/**
 * Corrige uma questão do tipo Complete a Frase (Fill in the blank)
 */
function gradeFillBlank(
  q: Extract<WritingQuestion, { type: 'fill_blank' }>,
  userAnswer: string
): QuestionGrading {
  const cleanUser = normalizeText(userAnswer || '');
  const isMatch = q.expectedAnswers.some((ans) => {
    return normalizeText(ans) === cleanUser || normalizeContractions(ans) === normalizeContractions(cleanUser);
  });

  return {
    questionId: q.id,
    isCorrect: isMatch,
    scorePercent: isMatch ? 100 : 0,
    userAnswer: (userAnswer || '').trim(),
    expectedAnswer: q.expectedAnswers[0],
    feedback: isMatch 
      ? 'Excelente! Preenchimento exato e gramaticalmente adequado.' 
      : `Incorreto. A resposta esperada era "${q.expectedAnswers[0]}".`,
    explanation: q.explanation
  };
}

/**
 * Corrige uma questão do tipo Organize as Palavras (Sentence Order)
 */
function gradeSentenceOrder(
  q: Extract<WritingQuestion, { type: 'sentence_order' }>,
  userAnswer: string
): QuestionGrading {
  const cleanUser = normalizeText(userAnswer || '');
  const accepted = [q.expectedSentence, ...(q.acceptedSentences || [])];

  const isMatch = accepted.some((sentence) => {
    return normalizeText(sentence) === cleanUser || normalizeContractions(sentence) === normalizeContractions(cleanUser);
  });

  return {
    questionId: q.id,
    isCorrect: isMatch,
    scorePercent: isMatch ? 100 : 0,
    userAnswer: (userAnswer || '').trim(),
    expectedAnswer: q.expectedSentence,
    feedback: isMatch 
      ? 'Frase perfeitamente ordenada!' 
      : `Ordem incorreta. Frase correta: "${q.expectedSentence}".`,
    explanation: q.explanation
  };
}

/**
 * Corrige uma questão do tipo Corrija o Erro (Find and Fix Error)
 */
function gradeFindFixError(
  q: Extract<WritingQuestion, { type: 'find_fix_error' }>,
  userAnswer: string
): QuestionGrading {
  const cleanUser = normalizeText(userAnswer || '');
  const accepted = [q.correction, ...(q.acceptedCorrections || [])];

  const isMatch = accepted.some((c) => {
    return normalizeText(c) === cleanUser || normalizeContractions(c) === normalizeContractions(cleanUser);
  });

  return {
    questionId: q.id,
    isCorrect: isMatch,
    scorePercent: isMatch ? 100 : 0,
    userAnswer: (userAnswer || '').trim(),
    expectedAnswer: q.correction,
    feedback: isMatch
      ? 'Muito bem! Erro identificado e corrigido com precisão.'
      : `Correção não identificada. A forma correta era "${q.correction}".`,
    explanation: q.explanation
  };
}

/**
 * Avalia flexivelmente uma resposta livre de escrita (Open Prompt)
 * Sem exigir correspondência literal, avaliando contexto, vocabulário e extensão.
 */
function gradeOpenPrompt(
  q: Extract<WritingQuestion, { type: 'open_prompt' }>,
  userAnswer: string
): QuestionGrading {
  const cleanUser = normalizeContractions(userAnswer || '');
  const words = cleanUser.split(/\s+/).filter(Boolean);
  const minWords = q.minWords || 3;

  if (words.length < minWords) {
    return {
      questionId: q.id,
      isCorrect: false,
      scorePercent: 30,
      userAnswer: (userAnswer || '').trim(),
      expectedAnswer: q.sampleAnswer,
      feedback: `Sua resposta foi muito curta (mínimo sugerido: ${minWords} palavras). Tente elaborar um pouco mais.`,
      explanation: q.explanation
    };
  }

  // Verifica palavras-chave e padrões essenciais se existirem
  const required = q.evaluationCriteria?.requiredKeywords || [];
  const foundKeywords = required.filter((kw) => cleanUser.includes(normalizeText(kw)));

  let scorePercent = 100;
  let feedback = 'Excelente resposta! Você comunicou a ideia de forma clara e natural.';

  if (required.length > 0) {
    const keywordRatio = foundKeywords.length / required.length;
    if (keywordRatio >= 0.7) {
      scorePercent = 100;
      feedback = 'Ótima resposta! Você utilizou os elementos essenciais da situação comunicativa.';
    } else if (keywordRatio >= 0.3) {
      scorePercent = 75;
      feedback = 'Boa resposta! Conseguimos entender a mensagem, mas você pode enriquecê-la incluindo mais detalhes sugeridos.';
    } else {
      scorePercent = 60;
      feedback = 'Mensagem compreensível. Para maior precisão, tente utilizar mais termos do contexto.';
    }
  }

  return {
    questionId: q.id,
    isCorrect: scorePercent >= 60,
    scorePercent,
    userAnswer: (userAnswer || '').trim(),
    expectedAnswer: q.sampleAnswer,
    feedback,
    explanation: q.explanation
  };
}

/**
 * Corrige uma questão de múltipla escolha (Reading / Compreensão de texto)
 */
function gradeMultipleChoice(
  q: ReadingQuestion,
  userAnswer: string
): QuestionGrading {
  const cleanUser = (userAnswer || '').trim().toUpperCase();
  const cleanExpected = (q.correctOptionId || '').trim().toUpperCase();
  const isMatch = cleanUser.length > 0 && cleanUser === cleanExpected;

  const correctOption = q.options.find((o) => o.id.toUpperCase() === cleanExpected);
  const userOption = q.options.find((o) => o.id.toUpperCase() === cleanUser);

  const expectedStr = correctOption ? `(${correctOption.id}) ${correctOption.text}` : cleanExpected;
  const userStr = userOption ? `(${userOption.id}) ${userOption.text}` : (userAnswer || 'Não respondida');

  return {
    questionId: q.id,
    isCorrect: isMatch,
    scorePercent: isMatch ? 100 : 0,
    userAnswer: userStr,
    expectedAnswer: expectedStr,
    feedback: isMatch
      ? 'Correto! Excelente identificação e interpretação da alternativa.'
      : `Incorreto. A alternativa correta era a (${cleanExpected}): "${correctOption?.text || ''}".`,
    explanation: q.explanation
  };
}

/**
 * Motor central de correção para qualquer atividade padronizada (Writing, Reading, etc.)
 */
export function gradeActivity(
  activity: Activity,
  answers: Record<string, string>
): ActivityGradingResult {
  const questionsGrading: QuestionGrading[] = activity.questions.map((q) => {
    const userAns = answers[q.id] || '';

    switch (q.type) {
      case 'fill_blank':
        return gradeFillBlank(q as Extract<WritingQuestion, { type: 'fill_blank' }>, userAns);
      case 'sentence_order':
        return gradeSentenceOrder(q as Extract<WritingQuestion, { type: 'sentence_order' }>, userAns);
      case 'find_fix_error':
        return gradeFindFixError(q as Extract<WritingQuestion, { type: 'find_fix_error' }>, userAns);
      case 'open_prompt':
        return gradeOpenPrompt(q as Extract<WritingQuestion, { type: 'open_prompt' }>, userAns);
      case 'multiple_choice':
        return gradeMultipleChoice(q as ReadingQuestion, userAns);
      default:
        return {
          questionId: (q as any).id,
          isCorrect: false,
          scorePercent: 0,
          userAnswer: userAns,
          expectedAnswer: '',
          feedback: 'Tipo de questão desconhecido.',
          explanation: ''
        };
    }
  });

  const totalQuestions = questionsGrading.length;
  const correctCount = questionsGrading.filter((g) => g.isCorrect).length;
  const totalEarnedPercent = questionsGrading.reduce((acc, curr) => acc + curr.scorePercent, 0);
  const finalScore = totalQuestions > 0 ? Math.round(totalEarnedPercent / totalQuestions) : 0;
  const pointsPerQuestion = 10;
  const earnedPoints = Math.round((finalScore / 100) * (totalQuestions * pointsPerQuestion));

  return {
    activityId: activity.id,
    pillar: activity.pillar,
    level: activity.level,
    type: activity.type,
    score: finalScore,
    earnedPoints,
    totalPoints: totalQuestions * pointsPerQuestion,
    correctCount,
    totalQuestions,
    questionsGrading,
    completedAt: new Date().toISOString()
  };
}

export const activityGradingService = {
  gradeActivity,
  normalizeText,
  normalizeContractions
};


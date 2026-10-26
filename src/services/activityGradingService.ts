import { Activity, ActivityGradingResult, QuestionGrading, WritingQuestion, ReadingQuestion, SpeakingQuestion, AnyQuestion } from '../types/activity';

/**
 * Normaliza variações de apóstrofos e aspas para formas canônicas ASCII.
 * Suporta apóstrofo padrão, aspas curvas do iOS/macOS/Android, acento agudo e crase.
 */
export function normalizeApostrophes(text: string): string {
  if (!text) return '';
  return text
    .replace(/[\u2018\u2019\u02BC\u02BB\u00B4`]/g, "'")
    .replace(/[\u201C\u201D"]/g, '"');
}

/**
 * Normaliza textos para comparação determinística justa:
 * - Converte variações de apóstrofos para apóstrofo simples (')
 * - Converte para minúsculas
 * - Remove pontuação periférica (pontos, vírgulas, interrogações, exclamações, aspas no início ou fim)
 * - Colapsa espaços múltiplos e remove espaços extras nas bordas
 */
export function normalizeText(text: string): string {
  if (!text) return '';
  return normalizeApostrophes(text)
    .trim()
    .toLowerCase()
    .replace(/^[.,!?;:"'–—\s]+|[.,!?;:"'–—\s]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normaliza uma sentença inteira preservando a ordem das palavras,
 * mas tolerando variações de pontuação interna como vírgulas e dois-pontos.
 */
export function normalizeSentence(text: string): string {
  if (!text) return '';
  return normalizeText(text)
    .replace(/[.,!?;:"'–—]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Expande contrações do inglês para sua forma canônica completa
 * de forma rigorosa e bidirecional (ex: "don't" <-> "do not", "i'm" <-> "i am",
 * "can't" <-> "can not", "won't" <-> "will not", e formas isoladas como "'m" -> "am").
 */
export function expandContractions(text: string): string {
  if (!text) return '';
  let s = normalizeText(text);

  // 1. Formas contraídas isoladas (respostas de lacuna como "'m", "'s", "'re", etc.)
  if (s === "'m") return 'am';
  if (s === "'s") return 'is';
  if (s === "'re") return 'are';
  if (s === "'ve") return 'have';
  if (s === "'ll") return 'will';
  if (s === "'d") return 'would';

  // 2. Formas irregulares ou que diferem da regra geral de "n't"
  s = s
    .replace(/\bcannot\b/g, 'can not')
    .replace(/\bcan't\b/g, 'can not')
    .replace(/\bwon't\b/g, 'will not')
    .replace(/\bshan't\b/g, 'shall not')
    .replace(/\blet's\b/g, 'let us');

  // 3. Negações regulares terminadas em n't
  s = s.replace(/\b([a-z]+)n't\b/g, '$1 not');

  // 4. Pronomes ou sujeitos com contrações de verbos auxiliares
  s = s
    .replace(/\b([a-z]+)'m\b/g, '$1 am')
    .replace(/\b([a-z]+)'re\b/g, '$1 are')
    .replace(/\b([a-z]+)'ll\b/g, '$1 will')
    .replace(/\b([a-z]+)'ve\b/g, '$1 have')
    .replace(/\b([a-z]+)'d\b/g, '$1 would')
    // Contração 's após pronomes e advérbios interrogativos/demonstrativos
    .replace(/\b(it|he|she|that|there|what|who|where|here)'s\b/g, '$1 is');

  return s.replace(/\s+/g, ' ').trim();
}

/**
 * Mantido para compatibilidade retroativa com código existente
 */
export const normalizeContractions = expandContractions;

/**
 * Corrige uma questão do tipo Complete a Frase (Fill in the blank)
 * Suporta:
 * - Correspondência exata da lacuna (ex: "bought", "children")
 * - Formas contraídas e expandidas (ex: "'m" <-> "am", "'s" <-> "is")
 * - Inclusão do pronome precedente (ex: usuário digita "I am" ou "I'm" em vez de apenas "am")
 * - Digitação da sentença inteira com a lacuna preenchida
 * - Espaços e pontuações periféricas toleradas
 */
function gradeFillBlank(
  q: Extract<WritingQuestion, { type: 'fill_blank' }>,
  userAnswer: string
): QuestionGrading {
  const cleanUser = normalizeText(userAnswer || '');
  const cleanUserExpanded = expandContractions(cleanUser);

  // 1. Respostas alternativas esperadas diretamente na lacuna
  const candidateExpected = [...q.expectedAnswers];

  // 2. Se o usuário digitou a frase completa preenchida
  // Ex: "Hello! I am a software student from Brazil."
  const parts = q.sentenceWithBlank.split('___');
  const fullSentenceExpected = q.expectedAnswers.map((ans) =>
    normalizeSentence(`${parts[0]}${ans}${parts[1] || ''}`)
  );

  // 3. Se a frase tiver sujeito imediatamente anterior à lacuna (ex: "I ___", "She ___")
  // e o estudante repetir o pronome (ex: "I am", "I'm", "She is", "She's")
  const precedingWords = parts[0].trim().split(/\s+/);
  const immediateSubject = precedingWords[precedingWords.length - 1]; // ex: "I" ou "She"
  const candidateWithSubject = immediateSubject
    ? q.expectedAnswers.map((ans) => normalizeText(`${immediateSubject} ${ans}`))
    : [];

  const isMatch = cleanUser.length > 0 && (
    candidateExpected.some((ans) => {
      const cleanAns = normalizeText(ans);
      const cleanAnsExpanded = expandContractions(cleanAns);
      return (
        cleanAns === cleanUser ||
        cleanAnsExpanded === cleanUserExpanded ||
        cleanAnsExpanded === cleanUser ||
        cleanAns === cleanUserExpanded
      );
    }) ||
    fullSentenceExpected.some((fullExp) => {
      const cleanFullUser = normalizeSentence(userAnswer || '');
      return (
        fullExp === cleanFullUser ||
        expandContractions(fullExp) === expandContractions(cleanFullUser)
      );
    }) ||
    candidateWithSubject.some((subjAns) => {
      return (
        subjAns === cleanUser ||
        expandContractions(subjAns) === cleanUserExpanded
      );
    })
  );

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
 * Preserva estritamente a ordem sintática das palavras enquanto tolera
 * variações pontuais em pontuação como vírgulas e pontos finais.
 */
function gradeSentenceOrder(
  q: Extract<WritingQuestion, { type: 'sentence_order' }>,
  userAnswer: string
): QuestionGrading {
  const cleanUser = normalizeSentence(userAnswer || '');
  const cleanUserExpanded = expandContractions(cleanUser);
  const accepted = [q.expectedSentence, ...(q.acceptedSentences || [])];

  const isMatch = cleanUser.length > 0 && accepted.some((sentence) => {
    const cleanExp = normalizeSentence(sentence);
    const cleanExpExpanded = expandContractions(cleanExp);
    return (
      cleanExp === cleanUser ||
      cleanExpExpanded === cleanUserExpanded
    );
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
 * Suporta:
 * - A palavra/termo corrigido isolado (ex: "children")
 * - Variações alternativas cadastradas (ex: "plan" para "intend")
 * - A sentença completa com a substituição do erro aplicada
 */
function gradeFindFixError(
  q: Extract<WritingQuestion, { type: 'find_fix_error' }>,
  userAnswer: string
): QuestionGrading {
  const cleanUser = normalizeText(userAnswer || '');
  const cleanUserExpanded = expandContractions(cleanUser);
  const cleanUserSentence = normalizeSentence(userAnswer || '');
  const cleanUserSentenceExpanded = expandContractions(cleanUserSentence);

  const acceptedCorrections = [q.correction, ...(q.acceptedCorrections || [])];

  // Frases completas corrigidas aceitas
  const fullCorrectedSentences = q.errorWord
    ? acceptedCorrections.map((corr) => {
        const regex = new RegExp(`\\b${q.errorWord}\\b`, 'i');
        return normalizeSentence(q.sentenceWithError.replace(regex, corr));
      })
    : [];

  const isMatch = cleanUser.length > 0 && (
    acceptedCorrections.some((c) => {
      const cleanCorr = normalizeText(c);
      const cleanCorrExpanded = expandContractions(cleanCorr);
      return (
        cleanCorr === cleanUser ||
        cleanCorrExpanded === cleanUserExpanded
      );
    }) ||
    fullCorrectedSentences.some((fullExp) => {
      return (
        fullExp === cleanUserSentence ||
        expandContractions(fullExp) === cleanUserSentenceExpanded
      );
    })
  );

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
  const cleanUser = expandContractions(userAnswer || '');
  const words = cleanUser.split(/\s+/).filter(Boolean);
  const minWords = q.minWords || 3;

  if (words.length === 0) {
    return {
      questionId: q.id,
      isCorrect: false,
      scorePercent: 0,
      userAnswer: '',
      expectedAnswer: q.sampleAnswer,
      feedback: 'Nenhuma resposta foi inserida.',
      explanation: q.explanation
    };
  }

  if (words.length < minWords) {
    const partialScore = Math.min(30, Math.round((words.length / minWords) * 30));
    return {
      questionId: q.id,
      isCorrect: false,
      scorePercent: partialScore,
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
 * Corrige ou avalia um item/turno do pilar de Speaking (Fala)
 */
function gradeSpeakingItem(
  q: SpeakingQuestion,
  userAnswer: string
): QuestionGrading {
  // Se o item contiver questão de percepção auditiva (ex: pares mínimos / identificação sonora)
  if (q.perceptionQuestion) {
    const cleanUser = (userAnswer || '').trim().toUpperCase();
    const cleanExpected = (q.perceptionQuestion.correctOptionId || '').trim().toUpperCase();
    const isMatch = cleanUser.length > 0 && cleanUser === cleanExpected;

    const correctOption = q.perceptionQuestion.options.find((o) => o.id.toUpperCase() === cleanExpected);
    const userOption = q.perceptionQuestion.options.find((o) => o.id.toUpperCase() === cleanUser);

    const expectedStr = correctOption ? `(${correctOption.id}) ${correctOption.text}` : cleanExpected;
    const userStr = userOption ? `(${userOption.id}) ${userOption.text}` : (userAnswer || 'Não respondida');

    return {
      questionId: q.id,
      isCorrect: isMatch,
      scorePercent: isMatch ? 100 : 0,
      userAnswer: userStr,
      expectedAnswer: expectedStr,
      feedback: isMatch
        ? 'Percepção correta! Você distinguiu com precisão o som e a palavra correspondente.'
        : `Identificação incorreta. A opção correta era a (${cleanExpected}): "${correctOption?.text || ''}".`,
      explanation: q.perceptionQuestion.explanation || q.explanation
    };
  }

  // Para itens de produção oral (ouça e imite, resposta rápida, diálogo):
  const cleanAns = (userAnswer || '').trim();
  const isPracticed = cleanAns.length > 0 && cleanAns !== 'unpracticed';
  const sample = q.targetPhrase || (q.sampleResponses && q.sampleResponses[0]) || '';

  return {
    questionId: q.id,
    isCorrect: isPracticed,
    scorePercent: isPracticed ? 100 : 0,
    userAnswer: isPracticed
      ? (cleanAns.startsWith('recorded:') ? 'Gravação e prática oral realizada' : cleanAns)
      : 'Prática oral não executada',
    expectedAnswer: sample,
    feedback: isPracticed
      ? 'Turno de fala concluído com sucesso! Compare sua pronúncia com o áudio nativo e revise as orientações.'
      : 'Exercício não praticado. Ouça o modelo e grave sua voz para concluir.',
    explanation: q.pronunciationTip || q.explanation
  };
}

/**
 * Motor central de correção para qualquer atividade padronizada (Writing, Reading, Listening, Speaking)
 */
export function gradeActivity(
  activity: Activity,
  answers: Record<string, string>
): ActivityGradingResult {
  const questionsGrading: QuestionGrading[] = activity.questions.map((q: AnyQuestion) => {
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
      case 'speaking_item':
        return gradeSpeakingItem(q as SpeakingQuestion, userAns);
      default:
        return {
          questionId: q.id,
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
  normalizeSentence,
  normalizeApostrophes,
  expandContractions,
  normalizeContractions
};


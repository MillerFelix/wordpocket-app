import { PracticeExercise } from '../types/progress';

export const PRACTICE_EXERCISES: Record<string, PracticeExercise> = {
  'listening-easy': {
    id: 'listening-easy-1',
    skillId: 'listening',
    difficulty: 'easy',
    title: 'Compreensão de Palavras e Sons',
    instruction: 'Ouça o áudio com atenção e selecione a tradução ou palavra falada correta.',
    questions: [
      {
        id: 'l1',
        prompt: 'Ouça a palavra em inglês e escolha o significado correto:',
        audioText: 'knowledge',
        options: ['Conhecimento', 'Reconhecer', 'Lembrança', 'Curiosidade'],
        correctIndex: 0,
        explanation: '"Knowledge" significa conhecimento em inglês (/ˈnɑː.lɪdʒ/).'
      },
      {
        id: 'l2',
        prompt: 'Ouça o verbo irregular pronunciado e identifique seu particípio passado:',
        audioText: 'speak',
        options: ['spoke', 'spoken', 'speaking', 'speaks'],
        correctIndex: 1,
        explanation: 'O verbo "speak" tem como particípio passado a forma "spoken" (speak, spoke, spoken).'
      },
      {
        id: 'l3',
        prompt: 'Ouça a frase curta e escolha o sentido correto:',
        audioText: 'Practice makes progress',
        options: [
          'A prática traz progresso',
          'O progresso é difícil',
          'Pratique sem pressa',
          'Aprenda com paciência'
        ],
        correctIndex: 0,
        explanation: '"Practice makes progress" é uma expressão comum que valoriza a evolução diária.'
      }
    ]
  },
  'speaking-easy': {
    id: 'speaking-easy-1',
    skillId: 'speaking',
    difficulty: 'easy',
    title: 'Articulação e Pares Fonéticos',
    instruction: 'Ouça o modelo de voz nativa, repita em voz alta e identifique a pronúncia correta.',
    questions: [
      {
        id: 's1',
        prompt: 'Ouça a pronúncia da palavra "thought" e escolha qual som inicial corresponde ao TH desvozeado (/θ/):',
        audioText: 'thought',
        options: ['Som de F fechado', 'Som dental suave com ponta da língua nos dentes (/θ/)', 'Som de T forte', 'Som de D'],
        correctIndex: 1,
        explanation: 'Em "thought" (/θɔːt/), o dígrafo TH é desvozeado, articulado com a ponta da língua entre os dentes.'
      },
      {
        id: 's2',
        prompt: 'Ouça a expressão "Nice to meet you" e observe a conexão fonética (linking sound):',
        audioText: 'Nice to meet you',
        options: ['As palavras são isoladas com pausas', 'O final de "meet" conecta-se suavemente ao "you"', 'Apenas a primeira palavra é enfatizada', 'O som final é mudo'],
        correctIndex: 1,
        explanation: 'Em inglês natural, "meet you" sofre assimilação e soa fluido, como /miːtʃuː/.'
      }
    ]
  },
  'reading-easy': {
    id: 'reading-easy-1',
    skillId: 'reading',
    difficulty: 'easy',
    title: 'Compreensão de Sentenças Curtas',
    instruction: 'Leia o texto em inglês com atenção e responda à pergunta de interpretação.',
    questions: [
      {
        id: 'r1',
        prompt: 'Texto: "Sarah has lived in London since 2018. She works as a designer and loves exploring the city on weekends."\n\nPergunta: O que Sarah faz nos finais de semana?',
        options: [
          'Trabalha como designer',
          'Muda-se de cidade',
          'Adora explorar a cidade',
          'Estuda história'
        ],
        correctIndex: 2,
        explanation: 'O texto afirma diretamente: "loves exploring the city on weekends".'
      },
      {
        id: 'r2',
        prompt: 'Texto: "Although the weather was cloudy, they decided to go for a walk in the park."\n\nPergunta: O que a palavra "Although" expressa nesta frase?',
        options: ['Causa ou motivo', 'Contraste ou concessão (embora / apesar de)', 'Tempo cronológico', 'Conclusão'],
        correctIndex: 1,
        explanation: '"Although" é uma conjunção concessiva que significa "embora" ou "apesar de que".'
      }
    ]
  },
  'writing-easy': {
    id: 'writing-easy-1',
    skillId: 'writing',
    difficulty: 'easy',
    title: 'Construção e Conjugação de Frases',
    instruction: 'Complete a frase com a forma verbal ou ordenação gramatical correta.',
    questions: [
      {
        id: 'w1',
        prompt: 'Complete a lacuna com o Simple Past de "write":\n"Yesterday, Lucas _______ a letter in English."',
        options: ['written', 'wrote', 'writes', 'writing'],
        correctIndex: 1,
        explanation: 'O Simple Past do verbo irregular "write" é "wrote".'
      },
      {
        id: 'w2',
        prompt: 'Qual é a ordem correta das palavras para formar a pergunta?',
        options: [
          'Where do you learn English?',
          'Where you do learn English?',
          'Do where you learn English?',
          'Learn you where English do?'
        ],
        correctIndex: 0,
        explanation: 'A ordem padrão de perguntas em inglês é: Pronome interrogativo (Where) + Auxiliar (do) + Sujeito (you) + Verbo base (learn).'
      }
    ]
  }
};

export function getExerciseForSkill(skillId: string, difficulty = 'easy'): PracticeExercise {
  const key = `${skillId}-${difficulty}`;
  if (PRACTICE_EXERCISES[key]) {
    return PRACTICE_EXERCISES[key];
  }
  // Fallback para easy da habilidade
  return (
    PRACTICE_EXERCISES[`${skillId}-easy`] ||
    PRACTICE_EXERCISES['listening-easy']
  );
}

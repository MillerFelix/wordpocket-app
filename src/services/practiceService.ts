import { PRACTICE_SKILLS, getSkillConfig } from '../data/practiceSkills';
import { PRACTICE_EXERCISES, getExerciseForSkill } from '../data/practiceExercises';
import { PracticeDifficulty, PracticeSkillConfig, PracticeSkillId } from '../types';
import { PracticeExercise } from '../types/progress';

/**
 * Serviço de Prática e Habilidades de Aprendizagem do Word Pocket.
 *
 * Arquitetura:
 * - Centraliza o acesso aos 4 pilares: Listening, Speaking, Reading e Writing.
 * - Fornece acesso aos exercícios e configurações das habilidades.
 * - Prepara o desacoplamento para futuras atividades especializadas de cada modalidade.
 */

export const practiceService = {
  /**
   * Retorna as configurações de todos os 4 pilares de habilidades.
   */
  getAllSkills(): PracticeSkillConfig[] {
    return PRACTICE_SKILLS;
  },

  /**
   * Retorna a contagem de habilidades disponíveis.
   */
  getSkillsCount(): number {
    return PRACTICE_SKILLS.length;
  },

  /**
   * Obtém a configuração de uma habilidade específica pelo seu identificador.
   */
  getSkillById(id: PracticeSkillId): PracticeSkillConfig {
    return getSkillConfig(id);
  },

  /**
   * Obtém os exercícios para uma habilidade e nível de dificuldade selecionados.
   */
  getExercise(skillId: PracticeSkillId | string, difficulty: PracticeDifficulty = 'easy'): PracticeExercise {
    return getExerciseForSkill(skillId, difficulty);
  },

  /**
   * Retorna os exercícios padrão cadastrados.
   */
  getAllExercises(): Record<string, PracticeExercise> {
    return PRACTICE_EXERCISES;
  }
};

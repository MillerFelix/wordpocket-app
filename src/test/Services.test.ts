import { describe, it, expect } from 'vitest';
import { verbsService } from '../services/verbsService';
import { vocabularyService } from '../services/vocabularyService';
import { practiceService } from '../services/practiceService';

describe('Data Services Layer Architectural Tests', () => {
  describe('verbsService', () => {
    it('returns all 200 irregular verbs and correct count', () => {
      expect(verbsService.getAll()).toHaveLength(200);
      expect(verbsService.getCount()).toBe(200);
    });

    it('finds verbs by id and infinitive', () => {
      const verbById = verbsService.getById('break');
      expect(verbById).toBeDefined();
      expect(verbById?.infinitive).toBe('break');

      const verbByInfinitive = verbsService.getByInfinitive('break');
      expect(verbByInfinitive).toBeDefined();
      expect(verbByInfinitive?.translation).toContain('quebrar');
    });

    it('extracts alphabet letters for quick alphabetical filters', () => {
      const letters = verbsService.getAlphabetLetters();
      expect(letters).toContain('B');
      expect(letters).toContain('W');
      expect(letters.length).toBeGreaterThan(15);
    });

    it('filters verbs by search query, group and letter', () => {
      const filtered = verbsService.filter({ search: 'speak', group: 'all', letter: 'all' });
      expect(filtered.length).toBeGreaterThan(0);
      expect(filtered[0].infinitive).toBe('speak');

      const byGroup = verbsService.filter({ group: 'identical' });
      expect(byGroup.length).toBeGreaterThan(0);
      expect(byGroup.every((v) => v.group === 'identical')).toBe(true);
    });

    it('supports reverse translation and any form lookup', () => {
      const pastMatch = verbsService.findByAnyForm('went');
      expect(pastMatch).toBeDefined();
      expect(pastMatch?.verb.infinitive).toBe('go');
      expect(pastMatch?.matchedForm).toBe('pastSimple');

      const ptMatch = verbsService.findByTranslation('ir');
      expect(ptMatch).toBeDefined();
      expect(ptMatch?.infinitive).toBe('go');
    });
  });

  describe('vocabularyService', () => {
    it('returns full dictionary and correct count', () => {
      expect(vocabularyService.getAll().length).toBeGreaterThan(0);
      expect(vocabularyService.getCount()).toBe(vocabularyService.getAll().length);
    });

    it('finds vocab items by id, word and translation', () => {
      const item = vocabularyService.getByWord('resilient');
      expect(item).toBeDefined();
      expect(item?.translation.toLowerCase()).toContain('resiliente');

      const ptMatch = vocabularyService.findByTranslation('resiliente');
      expect(ptMatch).toBeDefined();
      expect(ptMatch?.word.toLowerCase()).toBe('resilient');
    });

    it('filters vocab by search query and category', () => {
      const techResults = vocabularyService.filter({ category: 'tecnologia' });
      expect(techResults.every((w) => w.category === 'tecnologia')).toBe(true);
    });
  });

  describe('practiceService', () => {
    it('returns all 4 English skills', () => {
      const skills = practiceService.getAllSkills();
      expect(skills).toHaveLength(4);
      expect(skills.map((s) => s.id)).toEqual(['listening', 'speaking', 'reading', 'writing']);
      expect(practiceService.getSkillsCount()).toBe(4);
    });

    it('returns skill config by id', () => {
      const listening = practiceService.getSkillById('listening');
      expect(listening.nameEn).toBe('Listening');
      expect(listening.namePt).toBe('Escuta');
    });

    it('retrieves practice exercise with questions for a skill and difficulty', () => {
      const exercise = practiceService.getExercise('listening', 'easy');
      expect(exercise).toBeDefined();
      expect(exercise.skillId).toBe('listening');
      expect(exercise.difficulty).toBe('easy');
      expect(exercise.questions.length).toBeGreaterThan(0);
    });
  });
});

import React, { useState, useEffect } from 'react';
import { PracticeSkillId } from '../../types';
import { practiceService } from '../../services/practiceService';
import { PracticeHub } from './PracticeHub';
import { PracticeSkillView } from './PracticeSkillView';

interface PracticeViewProps {
  initialSkill?: PracticeSkillId | null;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ initialSkill = null }) => {
  const [selectedSkill, setSelectedSkill] = useState<PracticeSkillId | null>(initialSkill);

  useEffect(() => {
    if (initialSkill) {
      setSelectedSkill(initialSkill);
    }
  }, [initialSkill]);

  const handleSelectSkill = (skillId: PracticeSkillId) => {
    setSelectedSkill(skillId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    setSelectedSkill(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedSkill) {
    const config = practiceService.getSkillById(selectedSkill);
    return (
      <PracticeSkillView
        skill={config}
        onBack={handleBackToHub}
        onSelectOtherSkill={handleSelectSkill}
      />
    );
  }

  return <PracticeHub onSelectSkill={handleSelectSkill} />;
};

import { LearningCategory } from '../../types/learning';

export const LEARNING_CATEGORIES: LearningCategory[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos do inglês',
    shortTitle: 'Fundamentos',
    description: 'Pronomes, verbo to be, contrações e bases indispensáveis para construir qualquer frase com segurança.',
    badge: 'Bases Essenciais',
    accentColor: '#176BFF', // Electric Blue
    bgLight: 'bg-[#E1ECFC]',
    borderLight: 'border-[#BED7FA]',
    gradientClass: 'from-[#176BFF] to-[#26D9FF]',
    order: 1
  },
  {
    id: 'gramatica',
    title: 'Gramática',
    shortTitle: 'Gramática',
    description: 'Tempos verbais fundamentais, auxiliares, artigos, substantivos contáveis e preposições explicados sem complicação.',
    badge: 'Estruturas',
    accentColor: '#6545F5', // Purple
    bgLight: 'bg-[#EDE8FD]',
    borderLight: 'border-[#DDD4FB]',
    gradientClass: 'from-[#6545F5] to-[#8B5CF6]',
    order: 2
  },
  {
    id: 'formacao-frases',
    title: 'Formação de frases',
    shortTitle: 'Formar Frases',
    description: 'A ordem natural das palavras, como formular perguntas e negativas, o papel dos auxiliares e o uso de conectivos.',
    badge: 'Sintaxe & Ordem',
    accentColor: '#00BFA5', // Vibrant Teal
    bgLight: 'bg-[#E0F7F4]',
    borderLight: 'border-[#A7F3D0]',
    gradientClass: 'from-[#00BFA5] to-[#10B981]',
    order: 3
  },
  {
    id: 'vocabulario',
    title: 'Vocabulário e expressões',
    shortTitle: 'Vocabulário',
    description: 'Expressões frequentes do dia a dia, falsos cognatos perigosos, combinações naturais (collocations) e termos parecidos.',
    badge: 'Léxico Real',
    accentColor: '#F59E0B', // Warm Amber
    bgLight: 'bg-[#FEF3C7]',
    borderLight: 'border-[#FDE68A]',
    gradientClass: 'from-[#F59E0B] to-[#F97316]',
    order: 4
  },
  {
    id: 'situacoes-reais',
    title: 'Inglês para situações reais',
    shortTitle: 'Situações Reais',
    description: 'Comunicação para o mundo real: apresentações, viagens, restaurantes, rotina diária e pedir informações.',
    badge: 'Prático & Diário',
    accentColor: '#FF6534', // Coral / Red-Orange
    bgLight: 'bg-[#FFEAE1]',
    borderLight: 'border-[#FFD0C0]',
    gradientClass: 'from-[#FF6534] to-[#F43F5E]',
    order: 5
  },
  {
    id: 'revisao',
    title: 'Revisão de conceitos',
    shortTitle: 'Revisão',
    description: 'Guia antidúvidas: os tropeços mais comuns de brasileiros, confusões de tempos verbais e regras fáceis de lembrar.',
    badge: 'Guia Antidúvidas',
    accentColor: '#EC4899', // Pink / Rose
    bgLight: 'bg-[#FCE7F3]',
    borderLight: 'border-[#FBCFE8]',
    gradientClass: 'from-[#EC4899] to-[#6545F5]',
    order: 6
  }
];

export function getCategoryById(id: string): LearningCategory | undefined {
  return LEARNING_CATEGORIES.find((cat) => cat.id === id);
}

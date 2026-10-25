import { PracticeSkillConfig, PracticeSkillId } from '../types';

export const PRACTICE_SKILLS: PracticeSkillConfig[] = [
  {
    id: 'listening',
    nameEn: 'Listening',
    namePt: 'Escuta',
    tagline: 'Compreensão Auditiva',
    objective: 'Desenvolver a compreensão do inglês falado em velocidade e pronúncia natural.',
    activitiesTag: 'Áudios & Diálogos',
    futureActivities: [
      'Ouvir palavras e identificar fonemas em inglês',
      'Compreender frases e diálogos contextuais curtos',
      'Identificar termos e expressões falados em velocidade nativa'
    ],
    difficultyInfo: {
      easy: {
        label: 'Iniciante (A1–A2)',
        desc: 'Palavras isoladas, ritmo calmo e pronúncia pausada com modelo nativo.'
      },
      medium: {
        label: 'Intermediário (B1–B2)',
        desc: 'Frases completas, diálogos do cotidiano e pequenas variações de sotaque.'
      },
      hard: {
        label: 'Avançado (C1–C2)',
        desc: 'Áudios em velocidade nativa real, reduções fonéticas e expressões informais.'
      }
    },
    accentColor: '#176BFF',
    badgeBg: 'bg-[#E1ECFC]',
    badgeText: 'text-[#176BFF]',
    gradientClass: 'bg-gradient-listening',
    shadowClass: 'shadow-colored-listening'
  },
  {
    id: 'speaking',
    nameEn: 'Speaking',
    namePt: 'Fala',
    tagline: 'Pronúncia & Produção Oral',
    objective: 'Praticar a pronúncia, ritmo vocal e a produção oral com modelo nativo.',
    activitiesTag: 'Voz & Pronúncia',
    futureActivities: [
      'Ouvir modelo de voz nativa e comparar entonação',
      'Repetir palavras e pares mínimos com foco fonético',
      'Praticar expressões e respostas rápidas do dia a dia'
    ],
    difficultyInfo: {
      easy: {
        label: 'Iniciante (A1–A2)',
        desc: 'Vocábulos essenciais, sons consonantais básicos e vogais curtas.'
      },
      medium: {
        label: 'Intermediário (B1–B2)',
        desc: 'Ritmo de orações, linking sounds e entonação de perguntas e respostas.'
      },
      hard: {
        label: 'Avançado (C1–C2)',
        desc: 'Fluência contínua, expressões idiomáticas e articulação rápida.'
      }
    },
    accentColor: '#6545F5',
    badgeBg: 'bg-[#EDE8FD]',
    badgeText: 'text-[#6545F5]',
    gradientClass: 'bg-gradient-speaking',
    shadowClass: 'shadow-colored-speaking'
  },
  {
    id: 'reading',
    nameEn: 'Reading',
    namePt: 'Leitura',
    tagline: 'Leitura & Interpretação',
    objective: 'Desenvolver a compreensão rápida e fluida de textos e frases em inglês.',
    activitiesTag: 'Textos & Artigos',
    futureActivities: [
      'Ler textos curtos e parágrafos estruturados',
      'Compreender frases e vocabulário contextualizado',
      'Interpretar mensagens e responder perguntas diretas'
    ],
    difficultyInfo: {
      easy: {
        label: 'Iniciante (A1–A2)',
        desc: 'Textos curtos de 2 a 3 frases com vocabulário direto do dia a dia.'
      },
      medium: {
        label: 'Intermediário (B1–B2)',
        desc: 'Pequenos artigos, e-mails profissionais e situações práticas de viagem.'
      },
      hard: {
        label: 'Avançado (C1–C2)',
        desc: 'Textos analíticos, nuances de linguagem formal e interpretação crítica.'
      }
    },
    accentColor: '#0BAE90',
    badgeBg: 'bg-[#DCF8F1]',
    badgeText: 'text-[#0A9B80]',
    gradientClass: 'bg-gradient-reading',
    shadowClass: 'shadow-colored-reading'
  },
  {
    id: 'writing',
    nameEn: 'Writing',
    namePt: 'Escrita',
    tagline: 'Escrita & Construção de Frases',
    objective: 'Praticar a ortografia, ordenação sintática e a elaboração de frases em inglês.',
    activitiesTag: 'Estrutura & Frases',
    futureActivities: [
      'Completar lacunas com a palavra ou conjugação correta',
      'Organizar palavras em ordem sintática natural',
      'Escrever respostas curtas para perguntas contextuais'
    ],
    difficultyInfo: {
      easy: {
        label: 'Iniciante (A1–A2)',
        desc: 'Completar palavras-chave e organizar frases simples (Suj + Verbo + Obj).'
      },
      medium: {
        label: 'Intermediário (B1–B2)',
        desc: 'Construção de frases compostas, uso de conectivos e tempos perfeitos.'
      },
      hard: {
        label: 'Avançado (C1–C2)',
        desc: 'Redação de respostas elaboradas, vocabulário acadêmico e precisão sintática.'
      }
    },
    accentColor: '#FF5B26',
    badgeBg: 'bg-[#FFEAE1]',
    badgeText: 'text-[#E04D1B]',
    gradientClass: 'bg-gradient-writing',
    shadowClass: 'shadow-colored-writing'
  }
];

export function getSkillConfig(id: PracticeSkillId): PracticeSkillConfig {
  const skill = PRACTICE_SKILLS.find((s) => s.id === id);
  return skill || PRACTICE_SKILLS[0];
}

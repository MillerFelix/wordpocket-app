/**
 * Word Pocket — Design System & Color Tokens
 *
 * Centralized, strongly-typed color system and theme tokens.
 *
 * Architectural Separation:
 * 1. Global Brand (Blue Pulse):
 *    - Electric Blue (#176BFF): Logo, primary actions, global navigation, focus rings
 *    - Deep Blue (#2446C8): Deep gradients, contrast accents
 *    - Luminous Cyan (#26D9FF): Luminous details, gradient sparks
 *
 * 2. Three Pillar Identities:
 *    - Verbos Irregulares: Violet / Purple (#6545F5)
 *    - Vocabulário: Mint / Emerald (#19D9B4 / #0A9B80)
 *    - Tradutor: Tangerine / Coral (#FF6534 / #E04D1B)
 *
 * 3. Neutral Surfaces & Reading Comfort:
 *    - Soft translucent cards (white/85, ice blue #F0F6FF)
 *    - Dark charcoal text (#160F2E) and slate neutral (#52456F)
 *    - Designed for prolonged reading and study sessions without eye fatigue
 */

export interface PillarTheme {
  readonly id: 'verbs' | 'vocab' | 'translator';
  readonly name: string;
  readonly primary: string;
  readonly dark: string;
  readonly subtle: string;
  readonly border: string;
  readonly badgeBg: string;
  readonly badgeText: string;
  readonly gradient: string;
  readonly shadow: string;
}

export const THEME_TOKENS = {
  // Global Blue Pulse Brand Identity
  brand: {
    primary: '#176BFF',
    deep: '#2446C8',
    cyan: '#26D9FF',
    subtle: '#E1ECFC',
    border: '#BED7FA',
    gradient: 'linear-gradient(135deg, #26D9FF 0%, #176BFF 50%, #2446C8 100%)',
    shadow: '0 8px 24px -4px rgba(23, 107, 255, 0.40)',
  },

  // Three Pillars with Distinct, Recovered Identities
  pillars: {
    verbs: {
      id: 'verbs',
      name: 'Verbos Irregulares',
      primary: '#6545F5',
      dark: '#5528DB',
      subtle: '#EDE8FD',
      border: '#D9CEFC',
      badgeBg: 'bg-[#EDE8FD]',
      badgeText: 'text-[#6545F5]',
      gradient: 'linear-gradient(135deg, #6545F5 0%, #7C4DF8 50%, #9D75FB 100%)',
      shadow: '0 8px 24px -4px rgba(101, 69, 245, 0.40)',
    },
    vocab: {
      id: 'vocab',
      name: 'Vocabulário',
      primary: '#19D9B4',
      dark: '#0A9B80',
      subtle: '#DCF8F1',
      border: '#B6F5E8',
      badgeBg: 'bg-[#DCF8F1]',
      badgeText: 'text-[#0A9B80]',
      gradient: 'linear-gradient(135deg, #0BAE90 0%, #15C7A5 45%, #22E1BC 100%)',
      shadow: '0 8px 24px -4px rgba(11, 174, 144, 0.40)',
    },
    translator: {
      id: 'translator',
      name: 'Tradutor',
      primary: '#FF6534',
      dark: '#E04D1B',
      subtle: '#FFEAE1',
      border: '#FFD2C2',
      badgeBg: 'bg-[#FFEAE1]',
      badgeText: 'text-[#E04D1B]',
      gradient: 'linear-gradient(135deg, #FF5B26 0%, #FF6E38 45%, #FF8D54 100%)',
      shadow: '0 8px 24px -4px rgba(255, 91, 38, 0.40)',
    },
  } satisfies Record<string, PillarTheme>,

  // Neutral Reading Surfaces (High Contrast, Low Fatigue)
  surfaces: {
    appBackground: '#D4E5FE',
    card: 'rgba(255, 255, 255, 0.88)',
    cardHover: 'rgba(255, 255, 255, 0.96)',
    ice: '#F0F6FF',
    textMain: '#160F2E',
    textMuted: '#52456F',
    border: 'rgba(255, 255, 255, 0.90)',
    borderSubtle: '#BED7FA',
  },

  // State colors
  status: {
    success: '#0A9B80',
    favorite: '#F52E91',
    warning: '#FF6534',
    info: '#176BFF',
  },
} as const;

export type ThemeTokens = typeof THEME_TOKENS;
export type PillarType = keyof typeof THEME_TOKENS.pillars;

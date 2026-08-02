export type ThemeId =
  | 'classic-dark'
  | 'clean-light'
  | 'royal-dark'
  | 'emerald-dark'
  | 'sapphire-dark'
  | 'sandstone-light';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  kannadaName: string;
  type: 'light' | 'dark';
  description: string;
  badge: string;
  colors: {
    bg: string;
    card: string;
    primary: string;
    accent: string;
    text: string;
  };
}

export const THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'classic-dark',
    name: 'Classic Slate & Gold',
    kannadaName: 'ಕ್ಲಾಸಿಕ್ ಸ್ಲೇಟ್ & ಗೋಲ್ಡ್',
    type: 'dark',
    description: 'Deep slate background with rich warm gold accents (Default)',
    badge: 'Default Dark',
    colors: {
      bg: '#0f172a',
      card: '#1e293b',
      primary: '#f59e0b',
      accent: '#d97706',
      text: '#f8fafc',
    },
  },
  {
    id: 'clean-light',
    name: 'Clean Light',
    kannadaName: 'ಕ್ಲೀನ್ ಲೈಟ್ (ಶುಭ್ರ ಪ್ರಕಾಶ)',
    type: 'light',
    description: 'Fresh, high-contrast light theme with crisp slate typography & amber highlights',
    badge: 'Light Theme',
    colors: {
      bg: '#f8fafc',
      card: '#ffffff',
      primary: '#d97706',
      accent: '#0284c7',
      text: '#0f172a',
    },
  },
  {
    id: 'royal-dark',
    name: 'Royal Karnataka',
    kannadaName: 'ರಾಯಲ್ ಕರ್ನಾಟಕ (ಕೇಸರಿ & ಸುವರ್ಣ)',
    type: 'dark',
    description: 'Rich crimson maroon and saffron gold inspired by Karnataka cultural heritage',
    badge: 'Heritage Dark',
    colors: {
      bg: '#18080c',
      card: '#2a0e14',
      primary: '#f97316',
      accent: '#fbbf24',
      text: '#fff1f2',
    },
  },
  {
    id: 'emerald-dark',
    name: 'Emerald Forum',
    kannadaName: 'ಎಮರಾಲ್ಡ್ ಫೋರಂ (ಮರಕತ ಕ್ಷೇತ್ರ)',
    type: 'dark',
    description: 'Deep forest emerald green representing social growth & sustainability',
    badge: 'Emerald Dark',
    colors: {
      bg: '#061a14',
      card: '#0d2820',
      primary: '#10b981',
      accent: '#34d399',
      text: '#ecfdf5',
    },
  },
  {
    id: 'sapphire-dark',
    name: 'Midnight Sapphire',
    kannadaName: 'ಮಿಡ್‌ನೈಟ್ ಸಫೈರ್ (ನೀಲಮಣಿ)',
    type: 'dark',
    description: 'Deep ocean indigo with electric cyan and sapphire highlights',
    badge: 'Ocean Dark',
    colors: {
      bg: '#090d1e',
      card: '#111736',
      primary: '#38bdf8',
      accent: '#60a5fa',
      text: '#f0f9ff',
    },
  },
  {
    id: 'sandstone-light',
    name: 'Warm Sandstone',
    kannadaName: 'ವಾರ್ಮ್ ಸ್ಯಾಂಡ್‌ಸ್ಟೋನ್ (ಚಂದನದ ಬಣ್ಣ)',
    type: 'light',
    description: 'Soft warm ivory sandstone base with rich terracotta earth tones',
    badge: 'Warm Light',
    colors: {
      bg: '#faf8f5',
      card: '#ffffff',
      primary: '#c2410c',
      accent: '#b45309',
      text: '#1c1917',
    },
  },
];

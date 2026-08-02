import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeId, ThemeConfig, THEME_CONFIGS } from '../types/theme';

interface ThemeContextType {
  currentTheme: ThemeConfig;
  setThemeId: (id: ThemeId) => void;
  isDarkMode: boolean;
  toggleLightDark: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('ktf_theme') as ThemeId;
    if (saved && THEME_CONFIGS.some((t) => t.id === saved)) {
      return saved;
    }
    return 'classic-dark';
  });

  const currentTheme = THEME_CONFIGS.find((t) => t.id === themeId) || THEME_CONFIGS[0];
  const isDarkMode = currentTheme.type === 'dark';

  const setThemeId = (newThemeId: ThemeId) => {
    setThemeIdState(newThemeId);
    localStorage.setItem('ktf_theme', newThemeId);
  };

  const toggleLightDark = () => {
    if (isDarkMode) {
      setThemeId('clean-light');
    } else {
      setThemeId('classic-dark');
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', currentTheme.id);

    if (currentTheme.type === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setThemeId, isDarkMode, toggleLightDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

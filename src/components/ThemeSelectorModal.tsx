import React, { useState } from 'react';
import { X, Check, Palette, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { THEME_CONFIGS } from '../types/theme';

interface ThemeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'EN' | 'KN';
}

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({ isOpen, onClose, lang }) => {
  const { currentTheme, setThemeId } = useTheme();
  const [filter, setFilter] = useState<'all' | 'light' | 'dark'>('all');

  if (!isOpen) return null;

  const filteredThemes = THEME_CONFIGS.filter((theme) => {
    if (filter === 'light') return theme.type === 'light';
    if (filter === 'dark') return theme.type === 'dark';
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{lang === 'KN' ? 'ಥೀಮ್ ಮತ್ತು ಶೈಲಿ ಆಯ್ಕೆ' : 'Appearance & Themes'}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-medium">
                  6 Themes Available
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'KN'
                  ? 'ನಿಮ್ಮ ಇಷ್ಟದ ಲೈಟ್ ಅಥವಾ ಡಾರ್ಕ್ ಥೀಮ್ ಆಯ್ಕೆಮಾಡಿ'
                  : 'Customize your Karnataka Thinkers Forum visual layout with light or dark themes'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-100/60 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              All Themes ({THEME_CONFIGS.length})
            </button>
            <button
              onClick={() => setFilter('light')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                filter === 'light'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Light Themes ({THEME_CONFIGS.filter((t) => t.type === 'light').length})</span>
            </button>
            <button
              onClick={() => setFilter('dark')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                filter === 'dark'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Dark Themes ({THEME_CONFIGS.filter((t) => t.type === 'dark').length})</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Instant live preview</span>
          </div>
        </div>

        {/* Theme Cards Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredThemes.map((theme) => {
            const isActive = currentTheme.id === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => setThemeId(theme.id)}
                className={`group relative cursor-pointer rounded-2xl p-4 transition-all duration-200 border-2 flex flex-col justify-between ${
                  isActive
                    ? 'border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 shadow-md ring-2 ring-amber-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/60'
                }`}
              >
                {/* Active Checkmark Badge */}
                {isActive && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white p-1 rounded-full shadow-md">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className="space-y-3">
                  {/* Theme Header & Type Badge */}
                  <div className="flex items-start justify-between gap-2 pr-6">
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {theme.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 mt-0.5">
                        {theme.kannadaName}
                      </p>
                    </div>
                  </div>

                  {/* Mode Badge */}
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      theme.type === 'light'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-800 text-slate-200 border border-slate-700'
                    }`}
                  >
                    {theme.type === 'light' ? <Sun className="w-3 h-3 text-amber-600" /> : <Moon className="w-3 h-3 text-amber-400" />}
                    <span>{theme.badge}</span>
                  </span>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[32px]">
                    {theme.description}
                  </p>

                  {/* Mini Preview Box */}
                  <div
                    className="p-3 rounded-xl border space-y-2 overflow-hidden shadow-inner"
                    style={{
                      backgroundColor: theme.colors.bg,
                      borderColor: 'rgba(148, 163, 184, 0.2)',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: theme.colors.primary }}
                        />
                        <div
                          className="w-12 h-2 rounded"
                          style={{ backgroundColor: theme.colors.text, opacity: 0.8 }}
                        />
                      </div>
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.colors.accent }}
                      />
                    </div>
                    <div
                      className="p-2 rounded-lg border text-[10px] font-medium flex items-center justify-between"
                      style={{
                        backgroundColor: theme.colors.card,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        color: theme.colors.text,
                      }}
                    >
                      <span>Preview Card</span>
                      <span
                        className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white"
                        style={{ backgroundColor: theme.colors.primary }}
                      >
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Color Palette Dots Bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Palette
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 shadow-xs"
                      style={{ backgroundColor: theme.colors.bg }}
                      title={`Background: ${theme.colors.bg}`}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 shadow-xs"
                      style={{ backgroundColor: theme.colors.card }}
                      title={`Card: ${theme.colors.card}`}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 shadow-xs"
                      style={{ backgroundColor: theme.colors.primary }}
                      title={`Primary Accent: ${theme.colors.primary}`}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 shadow-xs"
                      style={{ backgroundColor: theme.colors.accent }}
                      title={`Secondary Accent: ${theme.colors.accent}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Active: <span className="font-bold text-amber-600 dark:text-amber-400">{currentTheme.name}</span> ({currentTheme.type === 'light' ? 'Light Mode' : 'Dark Mode'})
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-md flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>{lang === 'KN' ? 'ಆಯ್ಕೆ ಸ್ವೀಕರಿಸಿ' : 'Apply Theme'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

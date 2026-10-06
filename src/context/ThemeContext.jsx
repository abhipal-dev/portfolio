import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  emerald: {
    id: 'emerald',
    name: 'Radar Emerald',
    icon: '🟢',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    primary: 'from-emerald-500 via-teal-400 to-cyan-500',
    button: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/25',
    accentText: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    glow: 'bg-emerald-500/15',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    ring: 'ring-emerald-500/30',
  },
  cyan: {
    id: 'cyan',
    name: 'Electric Cyan',
    icon: '⚡',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    primary: 'from-cyan-400 via-sky-400 to-blue-500',
    button: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-cyan-500/25',
    accentText: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/50',
    glow: 'bg-cyan-500/15',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    ring: 'ring-cyan-500/30',
  },
  amber: {
    id: 'amber',
    name: 'Cyber Amber',
    icon: '🔥',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    primary: 'from-amber-400 via-orange-400 to-rose-500',
    button: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-amber-500/25',
    accentText: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    glow: 'bg-amber-500/15',
    tag: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    ring: 'ring-amber-500/30',
  },
};

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'emerald';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
  }, [themeId]);

  const currentTheme = themes[themeId] || themes.emerald;

  return (
    <ThemeContext.Provider value={{ currentTheme, themeId, setThemeId, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

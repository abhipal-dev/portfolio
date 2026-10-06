import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  sapphire: {
    id: 'sapphire',
    name: 'Obsidian Sapphire',
    icon: '💎',
    badge: 'bg-blue-500/10 text-sky-400 border-blue-500/30',
    primary: 'from-blue-400 via-sky-400 to-indigo-400',
    button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20',
    accentText: 'text-sky-400',
    accentBorder: 'border-sky-500/40',
    accentBg: 'bg-sky-500/10',
    borderHover: 'hover:border-sky-500/40',
    glow: 'bg-blue-500/10',
    tag: 'bg-blue-500/10 text-sky-300 border-blue-500/20',
    ring: 'ring-blue-500/30',
  },
  emerald: {
    id: 'emerald',
    name: 'Terminal Mint',
    icon: '⚡',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    primary: 'from-emerald-400 via-teal-400 to-cyan-400',
    button: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/20',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/40',
    accentBg: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/40',
    glow: 'bg-emerald-500/10',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    ring: 'ring-emerald-500/30',
  },
  titanium: {
    id: 'titanium',
    name: 'Titanium Slate',
    icon: '✦',
    badge: 'bg-slate-800 text-slate-200 border-slate-700',
    primary: 'from-slate-100 via-slate-300 to-slate-400',
    button: 'bg-slate-100 hover:bg-white text-slate-950 font-bold shadow-lg shadow-white/10',
    accentText: 'text-slate-200',
    accentBorder: 'border-slate-500/40',
    accentBg: 'bg-slate-800/80',
    borderHover: 'hover:border-slate-500/40',
    glow: 'bg-slate-500/10',
    tag: 'bg-slate-800 text-slate-300 border-slate-700',
    ring: 'ring-slate-500/30',
  },
};

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'sapphire';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
  }, [themeId]);

  const currentTheme = themes[themeId] || themes.sapphire;

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

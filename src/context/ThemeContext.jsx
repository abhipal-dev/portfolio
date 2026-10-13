import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  titanium: {
    id: 'titanium',
    name: 'Monochrome Craft',
    icon: '✦',
    badge: 'bg-zinc-900 text-zinc-200 border-zinc-800',
    primary: 'text-zinc-100',
    button: 'bg-zinc-100 hover:bg-white text-zinc-950 font-semibold shadow-sm active:scale-[0.98]',
    logo: 'bg-zinc-100 text-zinc-950 font-mono font-black',
    accentText: 'text-zinc-100',
    accentBorder: 'border-zinc-700',
    accentBg: 'bg-zinc-900',
    borderHover: 'hover:border-zinc-600',
    glow: 'bg-transparent',
    tag: 'bg-zinc-900 text-zinc-300 border-zinc-800',
    ring: 'ring-zinc-700',
    indicator: 'bg-zinc-200',
  },
  amber: {
    id: 'amber',
    name: 'Signal Amber',
    icon: '⚡',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    primary: 'text-amber-400',
    button: 'bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold shadow-sm active:scale-[0.98]',
    logo: 'bg-amber-400 text-zinc-950 font-mono font-black',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500/30',
    accentBg: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/40',
    glow: 'bg-transparent',
    tag: 'bg-zinc-900 text-amber-300 border-zinc-800',
    ring: 'ring-amber-500/30',
    indicator: 'bg-amber-400',
  },
  sapphire: {
    id: 'sapphire',
    name: 'Nordic Blue',
    icon: '✦',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    primary: 'text-sky-400',
    button: 'bg-sky-400 hover:bg-sky-300 text-zinc-950 font-semibold shadow-sm active:scale-[0.98]',
    logo: 'bg-sky-400 text-zinc-950 font-mono font-black',
    accentText: 'text-sky-400',
    accentBorder: 'border-sky-500/30',
    accentBg: 'bg-sky-500/10',
    borderHover: 'hover:border-sky-500/40',
    glow: 'bg-transparent',
    tag: 'bg-zinc-900 text-sky-300 border-zinc-800',
    ring: 'ring-sky-500/30',
    indicator: 'bg-sky-400',
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

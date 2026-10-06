import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentTheme, themeId, setThemeId, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer text-slate-100 hover:text-white transition-colors"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${currentTheme.primary} flex items-center justify-center font-mono font-bold text-sm text-slate-950 shadow-md group-hover:scale-105 transition-transform`}>
              &lt;/&gt;
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-slate-200 transition-all">
                {portfolioData.personal.name}
              </span>
              <span className={`text-[11px] ${currentTheme.accentText} font-mono block -mt-1 font-semibold`}>
                .mobile
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Switcher & Links */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Selector Pills */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-full border border-slate-800" title="Switch Color Theme">
              {Object.values(themes).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setThemeId(t.id)}
                  className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1 ${
                    themeId === t.id
                      ? `${t.badge} font-bold shadow-sm scale-105`
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title={`Switch to ${t.name}`}
                >
                  <span>{t.icon}</span>
                  <span className="text-[10px] hidden lg:inline">{t.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors border border-transparent hover:border-slate-700/60"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors border border-transparent hover:border-slate-700/60"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            
            <a
              href={portfolioData.personal.resumeUrl}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${currentTheme.button} transition-all active:scale-95 shadow-md`}
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                const keys = Object.keys(themes);
                const nextIdx = (keys.indexOf(themeId) + 1) % keys.length;
                setThemeId(keys[nextIdx]);
              }}
              className="p-2 text-xs font-mono rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              title="Toggle Theme"
            >
              {currentTheme.icon}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-slate-950/98 border-b border-slate-800/90 backdrop-blur-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Theme Bar */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Color Palette:</span>
              <div className="flex gap-2">
                {Object.values(themes).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setThemeId(t.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono ${
                      themeId === t.id ? t.badge : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {t.icon} {t.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
              <a
                href={portfolioData.personal.resumeUrl}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${currentTheme.button}`}
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

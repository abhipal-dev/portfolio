import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileText,
  ChevronRight,
} from 'lucide-react';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { num: '01', name: 'Work', href: '#projects' },
    { num: '02', name: 'Philosophy', href: '#about' },
    { num: '03', name: 'RFCs', href: '#architecture' },
    { num: '04', name: 'Releases', href: '#releases' },
    { num: '05', name: 'Stack', href: '#skills' },
    { num: '06', name: 'Experience', href: '#experience' },
    { num: '07', name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled || isOpen
          ? 'bg-[#080a0f]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-sm'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Identity: Monospaced Engineering Stamp */}
          <a
            href="#"
            className="flex items-center gap-3 group text-zinc-100 hover:text-white transition-colors shrink-0"
          >
            <div className={`w-8 h-8 rounded border border-zinc-700/80 ${currentTheme.logo} flex items-center justify-center font-mono font-bold text-xs shadow-sm`}>
              AP
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors leading-none">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10.5px] font-mono text-zinc-400 mt-0.5 tracking-wider">
                REACT NATIVE • 3.5Y
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Editorial Numbered Markers */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1.5 py-1"
              >
                <span className="text-zinc-400 text-[10px]">{link.num}</span>
                <span className="font-sans font-medium text-xs normal-case">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Utility Toolbar */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Minimalist Theme Cycle */}
            <button
              onClick={() => {
                const keys = Object.keys(themes);
                const nextIdx = (keys.indexOf(themeId) + 1) % keys.length;
                setThemeId(keys[nextIdx]);
              }}
              className="px-2.5 py-1 rounded border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 text-[11px] font-mono flex items-center gap-1.5 transition-all"
              title="Toggle Color System"
            >
              <span className="w-2 h-2 rounded-full border border-zinc-600 inline-block bg-current" />
              <span>{currentTheme.name}</span>
            </button>

            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded border border-zinc-800/60 hover:border-zinc-700 bg-zinc-900/40 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded border border-zinc-800/60 hover:border-zinc-700 bg-zinc-900/40 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            
            <a
              href={portfolioData.personal.resumeUrl}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider ${currentTheme.button} transition-all`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                const keys = Object.keys(themes);
                const nextIdx = (keys.indexOf(themeId) + 1) % keys.length;
                setThemeId(keys[nextIdx]);
              }}
              className="p-1.5 text-xs font-mono rounded border border-zinc-800 bg-zinc-900 text-zinc-300"
              title="Cycle Theme"
            >
              {currentTheme.icon}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-1.5 text-zinc-300 hover:text-white border border-zinc-800 bg-zinc-900 rounded transition-colors"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Redesigned Native-Feel Mobile Menu Overlay & Drawer */}
      {isOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
          className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-150"
        >
          <div className="bg-[#090b10] border-b border-zinc-800 shadow-xl max-h-[calc(100vh-56px)] overflow-y-auto p-4 sm:p-6 space-y-4">
            
            {/* Clean Monospaced Navigation Links */}
            <nav className="divide-y divide-zinc-800/60 border border-zinc-800 rounded bg-zinc-950/60">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3.5 text-zinc-300 hover:text-white hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-400">{link.num}</span>
                    <span className="font-semibold text-sm tracking-tight">{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
            </nav>
            
            {/* Theme Selector Strip */}
            <div className="p-3 rounded border border-zinc-800 bg-zinc-950/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>PALETTE_SELECT:</span>
                <span className="text-zinc-200 font-semibold">{currentTheme.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded bg-zinc-900 border border-zinc-800/80">
                {Object.values(themes).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setThemeId(t.id)}
                    className={`py-1.5 px-2 rounded text-xs font-mono flex items-center justify-center gap-1.5 transition-all ${
                      themeId === t.id
                        ? `${t.badge} font-bold shadow-sm`
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span>{t.icon}</span>
                    <span className="text-[11px] truncate">{t.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-sky-400"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <a
                href={portfolioData.personal.resumeUrl}
                onClick={() => setIsOpen(false)}
                className={`flex-1 p-2.5 rounded text-center text-xs font-mono font-bold tracking-wider ${currentTheme.button} flex items-center justify-center gap-2 transition-all`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL RESUME (PDF)</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

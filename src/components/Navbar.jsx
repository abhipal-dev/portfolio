import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileText,
  Sparkles,
  Smartphone,
  User,
  ShieldCheck,
  Cpu,
  Terminal,
  FolderGit2,
  Briefcase,
  Mail,
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
    { name: 'About', href: '#about', icon: User },
    { name: 'Releases', href: '#releases', icon: ShieldCheck, badge: '100+ Updates' },
    { name: 'Architecture', href: '#architecture', icon: Cpu },
    { name: 'Skills', href: '#skills', icon: Terminal },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#080c16]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand - Protected from Wrapping */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer text-slate-100 hover:text-white transition-colors shrink-0"
          >
            <div className={`w-9 h-9 rounded-xl ${currentTheme.button} flex items-center justify-center font-mono font-bold text-xs text-white shadow-md group-hover:scale-105 transition-transform shrink-0`}>
              &lt;AP/&gt;
            </div>
            <div className="whitespace-nowrap shrink-0">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-slate-200 transition-all block whitespace-nowrap">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] text-sky-400 font-mono block -mt-1 font-semibold whitespace-nowrap">
                React Native Lead
              </span>
            </div>
          </a>

          {/* Desktop Nav Items - Clean pill design on xl screens */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0c111e]/90 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200 font-mono flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30">
                    100+
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Theme Switcher & Links */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Theme Selector Pills */}
            <div className="flex items-center gap-1 bg-[#0c111e] p-1 rounded-full border border-slate-800" title="Switch Color Palette">
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
                  <span className="text-[10px] hidden 2xl:inline">{t.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors border border-transparent hover:border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-xl transition-colors border border-transparent hover:border-slate-700"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            
            <a
              href={portfolioData.personal.resumeUrl}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${currentTheme.button} transition-all active:scale-95 shadow-md`}
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Controls */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Quick Theme Cycle Button */}
            <button
              onClick={() => {
                const keys = Object.keys(themes);
                const nextIdx = (keys.indexOf(themeId) + 1) % keys.length;
                setThemeId(keys[nextIdx]);
              }}
              className="p-2 text-xs font-mono rounded-xl bg-[#0c111e] border border-slate-800 text-slate-300 hover:text-white active:scale-95 transition-all"
              title="Cycle Theme"
            >
              {currentTheme.icon}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-300 hover:text-white bg-[#0c111e] hover:bg-slate-800 border border-slate-800 rounded-xl transition-all active:scale-95"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
          className="xl:hidden fixed inset-x-0 top-[60px] bottom-0 bg-black/75 backdrop-blur-md z-50 animate-in fade-in duration-200"
        >
          <div className="bg-[#0b0f1a] border-b border-slate-800/90 shadow-2xl max-h-[calc(100vh-61px)] overflow-y-auto p-4 sm:p-6 space-y-4">
            
            {/* Navigation Cards Grid */}
            <nav className="grid grid-cols-1 gap-1.5">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0e1424]/60 border border-slate-800/80 hover:border-slate-700 hover:bg-[#12192e] text-slate-200 hover:text-white transition-all active:scale-[0.99] group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold tracking-tight">{link.name}</span>
                        {link.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {link.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
                  </a>
                );
              })}
            </nav>
            
            {/* Mobile Segmented Theme Bar */}
            <div className="p-3.5 rounded-xl bg-[#0e1424]/90 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Color Palette:</span>
                <span className="text-slate-300 font-semibold">{currentTheme.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800/80">
                {Object.values(themes).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setThemeId(t.id)}
                    className={`py-1.5 px-2 rounded-md text-xs font-mono flex items-center justify-center gap-1.5 transition-all ${
                      themeId === t.id
                        ? `${t.badge} font-bold shadow-sm`
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{t.icon}</span>
                    <span className="text-[11px] truncate">{t.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Socials & Full-Width Resume Button */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1424] border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1424] border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>

              <a
                href={portfolioData.personal.resumeUrl}
                onClick={() => setIsOpen(false)}
                className={`flex-1 p-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider ${currentTheme.button} flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all`}
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

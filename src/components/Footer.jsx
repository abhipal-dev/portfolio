import React from 'react';
import { ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a12] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs font-mono text-sky-400">React Native Mobile Engineer</span>
              <span className="text-xs font-mono text-slate-500">© {new Date().getFullYear()}</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Agra, India • 3.5+ Years Exp • Open to Remote & Immediate Relocation
            </p>
          </div>

          {/* Direct contact & Socials */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
            >
              {portfolioData.personal.email}
            </a>

            <div className="h-4 w-px bg-slate-800" />

            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-slate-800 ml-2"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

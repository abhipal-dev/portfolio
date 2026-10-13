import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#06080e] py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-zinc-100">
                {portfolioData.personal.name}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">React Native Mobile Engineer</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-500">© {CURRENT_YEAR}</span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Agra, India • 3.5+ Years Exp • Open to Remote & Relocation
            </p>
          </div>

          {/* Direct contact & Socials */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {portfolioData.personal.email}
            </a>

            <div className="h-3.5 w-px bg-zinc-800" />

            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded transition-colors border border-zinc-800/60"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded transition-colors border border-zinc-800/60"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded transition-colors border border-zinc-800 ml-2"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

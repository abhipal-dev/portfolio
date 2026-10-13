import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">06 //</span>
            <span>CHRONOLOGY & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            Career Timeline & Production Milestones
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            3.5+ years of full-time engineering — architecting React Native mobile systems, managing multi-tier fleet ecosystems, and bridging native engines with hybrid web diagnostic canvases.
          </p>
        </div>

        {/* Career Timeline Ledger */}
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Meta Column: Period & Location */}
                <div className="lg:col-span-4 space-y-1.5 font-mono text-xs">
                  <div className="text-zinc-200 font-bold tracking-wider">
                    {exp.period}
                  </div>
                  <div className="text-zinc-400">
                    {exp.location}
                  </div>
                  {exp.focusBadge && (
                    <div className="pt-2">
                      <span className="inline-block px-2 py-0.5 rounded text-[10.5px] bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {exp.focusBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Content Column: Role, Company, Accomplishments */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-300 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Key Technical Accomplishments:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Tag Strip */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.skills?.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Education Sub-Section */}
        <div className="mt-12 pt-8 border-t border-zinc-850">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
            Academic Background
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.education?.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded border border-zinc-850 bg-zinc-950/40 space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-zinc-200 font-semibold">{edu.degree}</span>
                  <span>{edu.period}</span>
                </div>
                <div className="text-xs text-zinc-400">
                  {edu.institution} • {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

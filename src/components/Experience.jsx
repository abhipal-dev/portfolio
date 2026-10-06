import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Leading React Native mobile engineering alongside deep experience in web development, bidirectional WebViews, and real-time mobility ecosystems.
          </p>
        </div>

        {/* Alternating Left-Right Timeline */}
        <div className="relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 via-purple-500 to-slate-800 space-y-12 md:space-y-16">
          {portfolioData.experience.map((exp, index) => {
            const isLeft = index % 2 === 0; // Alternates left and right
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/30 z-10">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                </div>

                {/* Content Card (One Side) */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl shadow-black/20 group">
                    
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Focus Badge */}
                    {exp.focusBadge && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Sparkles className="w-3 h-3 text-emerald-400" />
                          {exp.focusBadge}
                        </span>
                      </div>
                    )}

                    {/* Role Title & Company */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    {/* Role Overview */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievement Bullets */}
                    <div className="border-t border-slate-800/80 pt-3.5 mb-4">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Key Responsibilities & Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Skills Pills */}
                    {exp.skills && (
                      <div className="border-t border-slate-800/80 pt-3 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-indigo-300 border border-slate-700/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

                {/* Empty Balancing Side on Desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>

        {/* Education Section - Side by Side Cards */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Academic Foundations</h3>
              <p className="text-xs text-slate-400">Computer Science & Application Degrees</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 flex flex-col justify-between gap-4 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700/60">
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{edu.location}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <div className="text-sm text-indigo-400 font-medium mt-0.5">{edu.institution}</div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

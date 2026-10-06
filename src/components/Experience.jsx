import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, Code2, Smartphone, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Leading React Native mobile engineering with deep experience across web development, bidirectional WebViews, and real-time mobility platforms.
          </p>
        </div>

        {/* Experience Cards - Full Width Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-slate-800">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-12 sm:pl-16">
              
              {/* Timeline Node Indicator */}
              <div className="absolute left-1.5 sm:left-3.5 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-md shadow-indigo-500/30">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>

              {/* Full-Width Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl shadow-black/30">
                
                {/* Header: Badges & Period */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    {exp.focusBadge && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        {exp.focusBadge}
                      </span>
                    )}
                  </div>

                  <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-indigo-400">
                    {exp.company}
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Bullets */}
                <div className="space-y-2.5 mb-6 border-t border-slate-800/80 pt-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Responsibilities & Technical Achievements:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Used in Role */}
                {exp.skills && (
                  <div className="border-t border-slate-800/80 pt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 uppercase mr-1">Skills:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-indigo-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
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

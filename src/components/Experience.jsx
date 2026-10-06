import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { currentTheme } = useTheme();

  return (
    <section id="experience" className="py-24 relative bg-[#090d16]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            3.5+ years of production engineering — leading React Native mobile architecture alongside deep experience in web development, bidirectional WebViews, and real-time mobility ecosystems.
          </p>
        </div>

        {/* Linear Stacked Career Timeline */}
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#0c111e] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-sky-300 border border-blue-500/20 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {exp.period}
                  </span>
                  {exp.focusBadge && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
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

              {/* Role Title & Company */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="text-sm font-semibold text-sky-400 mt-1 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{exp.company}</span>
                </div>
              </div>

              {/* Role Overview */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Key Highlights */}
              <div className="border-t border-slate-800/80 pt-4 mb-5">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Technical Achievements:
                </h4>
                <ul className="space-y-2.5">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Skills Pills */}
              {exp.skills && (
                <div className="border-t border-slate-800/80 pt-4 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-sky-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Academic Foundations</h3>
              <p className="text-xs text-slate-400 font-mono">Computer Applications & Software Engineering Degrees</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c111e] border border-slate-800 hover:border-slate-700 flex flex-col justify-between gap-4 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-sky-300 border border-slate-700">
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{edu.location}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <div className="text-sm text-sky-400 font-medium mt-0.5">{edu.institution}</div>
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

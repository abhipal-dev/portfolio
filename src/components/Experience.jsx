import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            My professional journey, academic foundations, and key milestones in software engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-800">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20 z-10">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-6">
                <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 transition-colors shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <div className="text-sm font-semibold text-indigo-300 mb-3">{exp.company}</div>

                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <span>Academic Background</span>
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="text-lg font-bold text-slate-100">{edu.degree}</div>
                  <div className="text-sm text-indigo-400 font-medium">{edu.institution}</div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400">{edu.description}</p>
                </div>
                <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700/60 self-start md:self-center">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

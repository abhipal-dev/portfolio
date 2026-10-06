import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Calendar, UserCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0c111e] border border-slate-700/80 rounded-2xl p-4 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-sky-400 border border-blue-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </span>

            {project.period && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.period}</span>
              </span>
            )}

            {project.role && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{project.role}</span>
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-snug">{project.title}</h3>
          <p className="text-sm sm:text-base font-medium text-slate-300">{project.tagline}</p>
        </div>

        {/* Full Description & Highlights */}
        <div className="mt-6 space-y-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-5">
          <p className="text-slate-300 leading-relaxed">{project.description}</p>

          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 font-semibold flex items-center gap-1.5">
              <span>Production Implementation Highlights:</span>
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 font-semibold">
              Technologies & Modules:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 border border-slate-700 text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all shadow-md shadow-blue-600/30"
          >
            <LinkedinIcon className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

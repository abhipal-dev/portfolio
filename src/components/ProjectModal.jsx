import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Calendar, UserCheck, KeyRound, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

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

            {project.isLive && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-sm animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>LIVE APPLICATION READY</span>
              </span>
            )}

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

        {/* Live Application & Interactive Test Credentials Banner */}
        {project.testCredentials && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-sky-950/40 via-[#070e1c] to-[#0c1628] border-2 border-sky-500/50 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE PRODUCTION DEMO
                  </span>
                  <span className="text-xs font-mono text-slate-400">Deployed on Render Cloud</span>
                </div>
                <h4 className="text-base font-bold text-white mt-1 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-sky-400" />
                  <span>Test Accounts & Login Credentials</span>
                </h4>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25 active:scale-95 transition-all text-center"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Experience the multi-tier role scoping in action: log in as a <strong className="text-white">Doctor</strong> to inspect your assigned patient therapy heatmap, as a <strong className="text-white">Clinic Admin</strong> to manage staff & applications, as a <strong className="text-white">Patient</strong> to play dichoptic games, or as <strong className="text-white">Superadmin</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {project.testCredentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#080d19] border border-slate-800 hover:border-sky-500/40 transition-colors flex flex-col justify-between gap-2.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{cred.role}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {cred.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{cred.description}</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80 font-mono text-xs">
                    <div className="space-y-0.5">
                      <div>
                        <span className="text-slate-500 text-[10px]">User: </span>
                        <span className="text-slate-200 font-bold">{cred.username}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px]">Pass: </span>
                        <span className="text-slate-200 font-bold">{cred.password}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(`${cred.username}`, `user-${idx}`)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] transition-colors"
                      title="Copy username"
                    >
                      {copiedKey === `user-${idx}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Login</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white transition-all shadow-md shadow-sky-600/30"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-[#131c31] hover:bg-[#1a2642] text-slate-200 border border-slate-700/80 transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

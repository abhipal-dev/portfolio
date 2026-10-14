import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  KeyRound,
  Copy,
  Check,
  ShieldCheck,
  Smartphone,
  Box,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal({ project, onClose, displayTitle }) {
  const { currentTheme } = useTheme();
  const [copiedKey, setCopiedKey] = useState(null);

  if (!project) return null;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const hasStoreLinks = project.playStoreUrl || project.appStoreUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#090b10] border border-zinc-700/80 rounded p-6 sm:p-8 shadow-2xl text-zinc-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold">
              {project.category}
            </span>

            {hasStoreLinks ? (
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                VERIFIED STORE RELEASE
              </span>
            ) : project.isLive ? (
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                LIVE DEMO PLATFORM
              </span>
            ) : (
              <span className="text-sky-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                PRODUCTION SYSTEM
              </span>
            )}

            {project.period && (
              <>
                <span className="text-zinc-600">•</span>
                <span>{project.period}</span>
              </>
            )}

            {project.role && (
              <>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-300 font-medium">{project.role}</span>
              </>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight leading-snug">
            {displayTitle || project.title}
          </h3>
          <p className="text-sm font-medium text-zinc-300">{project.tagline}</p>
        </div>

        {/* ========================================================================= */}
        {/* DUAL-STORE VERIFIED APP STORE & GOOGLE PLAY DOWNLOADS                    */}
        {/* ========================================================================= */}
        {hasStoreLinks && (
          <div className="mt-6 p-5 rounded border border-zinc-700/80 bg-zinc-900/70 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                  <span>● OFFICIAL PRODUCTION BINARIES</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 font-normal">APP STORE & GOOGLE PLAY</span>
                </div>
                <h4 className="text-base font-bold text-zinc-100 mt-0.5">
                  Verified Store Distribution
                </h4>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 self-start sm:self-auto">
                React Native Production
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded border border-zinc-750 bg-[#070b14] hover:border-emerald-500/60 hover:bg-[#091122] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Box className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Available on</div>
                      <div className="text-sm font-bold text-white flex items-center gap-1">
                        Google Play
                        <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 truncate max-w-[170px]">
                        {project.playStorePackage}
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded border border-zinc-750 bg-[#070b14] hover:border-sky-500/60 hover:bg-[#091122] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Download on the</div>
                      <div className="text-sm font-bold text-white flex items-center gap-1">
                        Apple App Store
                        <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        App ID: {project.appStoreId}
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* Enterprise Telematics & Security Notice */}
            {project.enterpriseNotice && (
              <div className="p-3 rounded bg-zinc-950/80 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed font-mono text-[11px]">
                  <strong className="text-zinc-200">Enterprise Telematics Policy: </strong>
                  <span className="text-zinc-400">{project.enterpriseNotice}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Live Application & Interactive Test Credentials Banner (For LazyEye) */}
        {project.testCredentials && (
          <div className="mt-6 p-5 rounded border border-zinc-750 bg-zinc-900/60 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="text-emerald-400 font-bold">● CLOUD HOSTED</span>
                  <span>•</span>
                  <span>RENDER PLATFORM (HTTPS)</span>
                </div>
                <h4 className="text-base font-bold text-zinc-100 mt-1 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-emerald-400" />
                  <span>Evaluation Accounts & Credentials</span>
                </h4>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-xs font-mono font-bold tracking-wider ${currentTheme.button} transition-all`}
                >
                  <span>LAUNCH LIVE PORTAL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Multi-tier role scoping in action: log in as <strong className="text-zinc-100">Doctor</strong> to inspect your assigned patient therapy heatmap, as <strong className="text-zinc-100">Clinic Admin</strong> to manage patient queue, as <strong className="text-zinc-100">Patient</strong> to launch dichoptic games, or as <strong className="text-zinc-100">Superadmin</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {project.testCredentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded border border-zinc-800 bg-zinc-950/70 flex flex-col justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-zinc-200">{cred.role}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {cred.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">{cred.description}</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-850 font-mono text-xs">
                    <div className="space-y-0.5">
                      <div>
                        <span className="text-zinc-500 text-[10px]">User: </span>
                        <span className="text-zinc-200 font-bold">{cred.username}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-[10px]">Pass: </span>
                        <span className="text-zinc-200 font-bold">{cred.password}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(`${cred.username}`, `user-${idx}`)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-[11px] transition-colors"
                      title="Copy username"
                    >
                      {copiedKey === `user-${idx}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Copy</span>
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
        <div className="mt-6 space-y-5 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800 pt-5">
          <p className="text-zinc-300 leading-relaxed">{project.description}</p>

          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
              Production Implementation Highlights:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
              Technologies & Modules:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
          >
            CLOSE
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <Box className="w-3.5 h-3.5" />
                <span>GOOGLE PLAY</span>
              </a>
            )}

            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-sky-500/40 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>APP STORE</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-mono font-bold tracking-wider ${currentTheme.button} transition-all`}
              >
                <span>OPEN PLATFORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

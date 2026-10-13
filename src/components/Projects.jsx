import React, { useState } from 'react';
import {
  ExternalLink,
  Eye,
  KeyRound,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { currentTheme } = useTheme();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Mobility & Fleet', 'Healthcare & WebViews', 'GPS & Telemetry'];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  const flagshipProject = portfolioData.projects.find((p) => p.id === 'lazyeye-platform');
  const otherProjects = filteredProjects.filter((p) => p.id !== 'lazyeye-platform');

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">01 //</span>
              <span>SELECTED PRODUCTION WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
              Production Applications & Fleet Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Real-world cross-platform mobile systems built on React Native — from three-sided taxi ecosystems running across Oman to clinical neuro-vision digital therapeutics with native WebView bridges.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded border border-zinc-800 bg-zinc-950/60 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  filter === cat
                    ? 'bg-zinc-800 text-zinc-100 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. HERO PROJECT: LAZYEYE MOBILE CLINICAL PLATFORM (When visible under filter) */}
        {(filter === 'All' || filter === 'Healthcare & WebViews') && flagshipProject && (
          <div className="mb-12 rounded border border-zinc-700/80 bg-zinc-950/80 overflow-hidden shadow-sm">
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Specs & Architectural Highlights */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold">
                    FLAGSHIP // CLINICAL DIGITAL THERAPEUTICS
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    LIVE PRODUCTION PLATFORM
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">{flagshipProject.period}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 leading-tight">
                    {flagshipProject.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                    <span className="text-zinc-300 font-medium">{flagshipProject.role}</span>
                    <span>•</span>
                    <span>BARE REACT NATIVE 0.87.1 (API 37)</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-zinc-850">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Architectural Milestones:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {flagshipProject.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {flagshipProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Primary Project Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-mono font-bold tracking-wider ${currentTheme.button} transition-all`}
                    >
                      <span>LAUNCH LIVE PLATFORM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href="https://github.com/abhipal-dev/lazyEye-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>VIEW REPOSITORY</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>FULL SPECS</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Evaluator Console & Test Accounts */}
              <div className="lg:col-span-5 rounded border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-200">
                    <KeyRound className="w-4 h-4 text-emerald-400" />
                    <span>TEST PORTALS FOR RECRUITERS</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">4 ROLES SEEDED</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Log in directly to the live cloud platform (<a href={flagshipProject.liveUrl} target="_blank" rel="noreferrer" className="text-zinc-100 underline hover:text-white">lazyeye.onrender.com</a>) using seeded evaluation credentials:
                </p>

                <div className="space-y-2 font-mono text-xs">
                  {flagshipProject.testCredentials?.map((cred, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded border border-zinc-800/80 bg-zinc-950/70 space-y-1 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-zinc-200">{cred.role}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                          {cred.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-400 text-[11px]">
                        <span>User: <strong className="text-zinc-200">{cred.username}</strong></span>
                        <span>Pass: <strong className="text-zinc-200">{cred.password}</strong></span>
                      </div>
                      <div className="text-[10.5px] text-zinc-400 pt-0.5">
                        {cred.description}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-zinc-400 pt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict data isolation across Optometrist, Admin & Patient tiers.</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. THREE-SIDED MOBILITY & FLEET APPLICATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="rounded border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-colors p-6 sm:p-7 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10.5px] text-zinc-300">
                    {project.category}
                  </span>
                  <span>{project.period}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100 leading-snug">
                    {project.title}
                  </h3>
                  {project.role && (
                    <div className="text-xs font-mono text-zinc-400 mt-1">
                      {project.role}
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 text-xs text-zinc-300 pt-2 border-t border-zinc-900">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-3 border-t border-zinc-900">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 text-[10.5px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10.5px] font-mono rounded bg-zinc-900 text-zinc-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer Link */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-zinc-400" />
                    <span>CASE STUDY</span>
                  </button>

                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-400 hover:text-zinc-100 flex items-center gap-1"
                    title="View details"
                  >
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}

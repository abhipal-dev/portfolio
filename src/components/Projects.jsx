import React, { useState } from 'react';
import {
  ExternalLink,
  Eye,
  ArrowUpRight,
  ShieldCheck,
  Smartphone,
  Navigation,
} from 'lucide-react';
import { portfolioData, CONFIG } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { currentTheme } = useTheme();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [revealCompanyNames, setRevealCompanyNames] = useState(CONFIG.revealCompanyProjectNames);

  const categories = ['All', 'Mobility & Fleet', 'GPS & Telemetry', 'Healthcare & WebViews'];

  const getTitle = (p) => {
    if (!p) return '';
    return revealCompanyNames ? (p.companyTitle || p.title) : (p.anonymousTitle || p.title);
  };

  const flagshipProject = portfolioData.projects.find((p) => p.id === 'ride-hailing-ecosystem');

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  const otherProjects = filteredProjects.filter((p) => p.id !== 'ride-hailing-ecosystem');

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">01 //</span>
              <span>SELECTED PRODUCTION WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
              Production Fleet & Mobility Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Real-world cross-platform mobile systems built on React Native at Softcruise Technologies — from 3-sided ride-hailing suites and enterprise GPS tracking engines to clinical neuro-vision digital therapeutics.
            </p>
          </div>

          {/* Minimalist Filter Tabs & Confidential Names Switch */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Confidential Names Toggle Pill */}
            <button
              onClick={() => setRevealCompanyNames(!revealCompanyNames)}
              className="px-3 py-1.5 text-xs font-mono rounded border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 flex items-center gap-2 transition-colors shadow-sm"
              title="Toggle between generic professional titles and confidential client company names"
            >
              <span className={`w-2 h-2 rounded-full ${revealCompanyNames ? 'bg-amber-400' : 'bg-emerald-400'}`} />
              <span className="text-zinc-400">Client Names:</span>
              <span className="text-zinc-100 font-semibold">{revealCompanyNames ? 'Revealed' : 'Safe / Generic'}</span>
            </button>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1 p-1 rounded border border-zinc-800 bg-zinc-950/60 shrink-0">
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
        </div>

        {/* 1. PRIMARY FLAGSHIP PROJECT: 3-SIDED RIDE-HAILING & FLEET ECOSYSTEM */}
        {(filter === 'All' || filter === 'Mobility & Fleet') && flagshipProject && (
          <div className="mb-12 rounded border border-zinc-700/80 bg-zinc-950/80 overflow-hidden shadow-sm">
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Specs & Architectural Highlights */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold">
                    FLAGSHIP // 3-SIDED MOBILITY & FLEET
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    COMMERCIAL PRODUCTION
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">{flagshipProject.period}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 leading-tight">
                    {getTitle(flagshipProject)}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                    <span className="text-zinc-300 font-medium">{flagshipProject.role}</span>
                    <span>•</span>
                    <span>SOFTCRUISE TECHNOLOGIES</span>
                    <span>•</span>
                    <span>REACT NATIVE</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Key Architectural Milestones */}
                <div className="space-y-2 pt-2 border-t border-zinc-855">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Core Engineering Milestones:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed"><strong className="text-zinc-100">Three-Sided State Synchronization:</strong> Coordinated state machines across Rider, Driver, and Kiosk Tablet with dynamic dispatch waves.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed"><strong className="text-zinc-100">60 FPS Map Telemetry:</strong> Imperative camera animations via animateCamera with bearing interpolation, eliminating React render stalls.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed"><strong className="text-zinc-100">High-Priority FCM Dispatches:</strong> Foreground services and custom notification channels waking killed-state phones instantly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed"><strong className="text-zinc-100">Sub-Millisecond MMKV Persistence:</strong> Synchronous C++ JSI storage restoring active trips instantly during device reboots.</span>
                    </li>
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
                  <a
                    href="#hero"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-mono font-bold tracking-wider ${currentTheme.button} transition-all`}
                  >
                    <span>TEST IN DEVICE WORKBENCH</span>
                    <Smartphone className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>FULL ARCHITECTURE SPECS</span>
                  </button>
                </div>
              </div>

              {/* Right Column: 3-Actor Mobility Architecture Matrix */}
              <div className="lg:col-span-5 rounded border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-200">
                    <Navigation className="w-4 h-4 text-emerald-400" />
                    <span>3-ACTOR MOBILITY ECOSYSTEM</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">SYNCHRONIZED</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Three interconnected production clients communicating with central web dispatch:
                </p>

                <div className="space-y-2.5 font-mono text-xs">
                  {/* Actor 1: Rider */}
                  <div className="p-3 rounded border border-zinc-800/80 bg-zinc-950/70 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <span className="font-bold text-zinc-200">Rider Mobile App</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-900 text-sky-400 border border-zinc-800">
                        iOS & Android
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Live Google Maps pickup/drop, dynamic route polyline, driver bearing interpolation, multi-tier fare estimate, and OTP ride start.
                    </p>
                  </div>

                  {/* Actor 2: Driver */}
                  <div className="p-3 rounded border border-zinc-800/80 bg-zinc-950/70 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-bold text-zinc-200">Driver Partner Console</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-900 text-emerald-400 border border-zinc-800">
                        Foreground GPS
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Headless JS background telemetry, high-priority heads-up FCM dispatch alerts, shift ledger, and turn-by-turn navigation.
                    </p>
                  </div>

                  {/* Actor 3: Kiosk */}
                  <div className="p-3 rounded border border-zinc-800/80 bg-zinc-950/70 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="font-bold text-zinc-200">Walk-Up Kiosk Terminal</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-900 text-amber-400 border border-zinc-800">
                        Lock-Task Mode
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Android Screen Pinning / startLockTask for hotel & airport tablets with thermal receipt and digital QR code dispatch.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-zinc-400 pt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sub-10m GPS proximity waves • Arabic RTL & English.</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. OTHER MOBILITY & SYSTEMS APPLICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => {
            const isLazyEye = project.id === 'lazyeye-platform';

            return (
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
                      {getTitle(project)}
                    </h3>
                    <div className="text-xs font-mono text-zinc-400 mt-1 flex items-center gap-1.5">
                      <span className="text-zinc-300 font-medium">{project.role}</span>
                      <span>•</span>
                      <span className="text-[11px] text-zinc-500">{project.clientBadge}</span>
                    </div>
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

                  {/* Footer Link & Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{isLazyEye ? 'SPECS & LOGINS' : 'CASE STUDY'}</span>
                    </button>

                    {isLazyEye && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                        title="Launch live platform"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
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
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            displayTitle={getTitle(selectedProject)}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}

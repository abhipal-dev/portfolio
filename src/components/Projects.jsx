import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight, Eye, Calendar, UserCheck, Smartphone, MapPin, Share2, KeyRound } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { currentTheme } = useTheme();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Mobility & Fleet', 'GPS & Telemetry', 'Healthcare & WebViews'];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRODUCTION MOBILE APPLICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Mobility & Fleet Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Production React Native apps powering real-time ride-hailing, vehicle telemetry tracking, and enterprise mobile workflows.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? `${currentTheme.button} shadow-md`
                    : 'bg-[#0c111e] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-2xl transition-all duration-300 overflow-hidden shadow-lg ${
                project.highlighted
                  ? 'bg-gradient-to-b from-[#0e1628] via-[#0c111e] to-[#0c111e] border-2 border-sky-500/50 hover:border-sky-400 shadow-sky-950/50 ring-1 ring-sky-500/20'
                  : 'bg-[#0c111e]/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="p-4 sm:p-7 flex-1 flex flex-col">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 font-medium">
                      {project.category}
                    </span>
                    {project.isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-sm animate-pulse">
                        <Sparkles className="w-3 h-3 text-sky-400" />
                        <span>LIVE FULL-STACK DEMO</span>
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {project.period}
                    </span>
                    {project.featured && !project.isLive && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Production
                      </span>
                    )}
                  </div>
                </div>

                {/* Role badge */}
                {project.role && (
                  <div className="mb-2 text-xs font-semibold text-emerald-400 flex items-center gap-1 font-mono">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{project.role}</span>
                  </div>
                )}

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Key Technical Highlights Preview */}
                <ul className="mt-4 space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-400 font-mono flex-shrink-0 mt-0.5">▹</span>
                      <span className="leading-relaxed line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Test Credentials Banner (If available) */}
                {project.testCredentials && (
                  <div className="mt-4 p-3 rounded-xl bg-[#070d1a] border border-sky-500/30 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-sky-300 mb-2 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <KeyRound className="w-3.5 h-3.5 text-sky-400" />
                        <span>Interactive Test Credentials:</span>
                      </span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-200 underline font-semibold"
                        >
                          <span>Open Live App</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-[10.5px]">
                      <div className="px-2 py-1 rounded bg-[#0b1224] border border-slate-800 text-slate-300 flex items-center justify-between">
                        <span><strong className="text-sky-400">Doctor:</strong> dr_sarah</span>
                        <span className="text-slate-400">doctor123</span>
                      </div>
                      <div className="px-2 py-1 rounded bg-[#0b1224] border border-slate-800 text-slate-300 flex items-center justify-between">
                        <span><strong className="text-emerald-400">Admin:</strong> admin</span>
                        <span className="text-slate-400">admin123</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800/40 text-slate-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#080c14] border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span><span className="hidden sm:inline">View Full </span>Case Study</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-white border border-sky-500/40 transition-all shadow-sm"
                      title="Launch Live Application"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Details`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View Project on LinkedIn"
                  >
                    <ArrowUpRight className="w-4 h-4 text-sky-400" />
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

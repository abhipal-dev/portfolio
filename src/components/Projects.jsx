import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight, Eye, Calendar, UserCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
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
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
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
              className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 overflow-hidden shadow-lg shadow-black/20"
            >
              {/* Card Header Top Accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-400 border border-slate-700/60">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {project.period}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400">
                        <Sparkles className="w-3 h-3" /> Production
                      </span>
                    )}
                  </div>
                </div>

                {/* Role badge if available */}
                {project.role && (
                  <div className="mb-2 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{project.role}</span>
                  </div>
                )}

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-3 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Key Highlight Bullets Preview */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300/90 border-t border-slate-800/60 pt-3">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="line-clamp-2">
                      • {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800/40 text-slate-400">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-indigo-400" />
                  <span>View Case Study & Highlights</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} LinkedIn Details`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View Project Details"
                  >
                    <ArrowUpRight className="w-4 h-4 text-indigo-400" />
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

import React, { useState } from 'react';
import {
  Smartphone,
  FileCode,
  Terminal,
  Compass,
  Layers,
  Map,
  MapPin,
  Navigation,
  Radio,
  Route,
  Send,
  Bell,
  BellRing,
  Sparkles,
  Cpu,
  Zap,
  Database,
  RefreshCw,
  ExternalLink,
  FileText,
  Share2,
  Activity,
  Palette,
  Languages,
  Layout,
  Box,
  Cloud,
  ShieldCheck,
  Network,
  GitBranch,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Smartphone,
  FileCode,
  Terminal,
  Compass,
  Layers,
  Map,
  MapPin,
  Navigation,
  Radio,
  Route,
  Send,
  Bell,
  BellRing,
  Sparkles,
  Cpu,
  Zap,
  Database,
  RefreshCw,
  ExternalLink,
  FileText,
  Share2,
  Activity,
  Palette,
  Languages,
  Layout,
  Box,
  Cloud,
  ShieldCheck,
  Network,
  GitBranch,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'mobile', label: 'React Native (Core Focus)' },
    { id: 'webview', label: 'WebViews & Data Bridges' },
    { id: 'maps', label: 'Maps, GPS & Telemetry' },
    { id: 'background', label: 'Push & Background' },
    { id: 'storage', label: 'Storage & Caching' },
    { id: 'devops', label: 'Builds & Store Release' },
  ];

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return [
        ...(portfolioData.skills.mobile || []).map((s) => ({ ...s, cat: 'Core Mobile' })),
        ...(portfolioData.skills.webview || []).map((s) => ({ ...s, cat: 'WebViews & Bridges' })),
        ...(portfolioData.skills.maps || []).map((s) => ({ ...s, cat: 'Maps & GPS' })),
        ...(portfolioData.skills.background || []).map((s) => ({ ...s, cat: 'Push & Background' })),
        ...(portfolioData.skills.storage || []).map((s) => ({ ...s, cat: 'Storage & Offline' })),
        ...(portfolioData.skills.devops || []).map((s) => ({ ...s, cat: 'Builds & Releases' })),
      ];
    }
    return (portfolioData.skills[activeCategory] || []).map((s) => ({
      ...s,
      cat: categories.find((c) => c.id === activeCategory)?.label || '',
    }));
  };

  const displayedSkills = getSkillsToDisplay();

  return (
    <section id="skills" className="py-24 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mobile Tech Stack & Core Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Specialized frameworks, map APIs, telemetry caching, and release tooling powering production Android and iOS apps.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayedSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Smartphone;
            return (
              <div
                key={index}
                className="group relative p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200 flex flex-col items-center text-center gap-3 hover:-translate-y-1 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-slate-800/80 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600/80 transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white">
                    {skill.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-center gap-1 text-[11px] text-slate-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{skill.level}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

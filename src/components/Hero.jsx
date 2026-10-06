import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import MobileShowcase from './MobileShowcase';

export default function Hero() {
  const { currentTheme } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ${currentTheme.glow} rounded-full blur-[160px] pointer-events-none transition-colors duration-700`}
      />

      {/* Modern Engineering Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Intent Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1424] border border-slate-800 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300">Open for Full-Time Roles • Remote & Relocation</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I'm <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>{portfolioData.personal.name}</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>{portfolioData.personal.role}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md font-mono bg-blue-500/10 text-sky-400 border border-blue-500/20 font-semibold">
                  3.5+ Years Exp
                </span>
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized in <strong className="text-white font-semibold">Real-Time GPS Tracking</strong>, <strong className="text-white font-semibold">Google Maps SDK</strong>, multi-app mobility platforms (Rider, Driver, and Kiosk Terminal), and advanced <strong className="text-white font-semibold">WebView bidirectional postMessage data bridges</strong>. Deployed production applications across Android (Gradle) and iOS (Xcode).
            </p>

            {/* Quick Contact & Location Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0c111e] border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {portfolioData.personal.location}
              </span>

              {/* 1-Click Copy Email Chip */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0c111e] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors max-w-full"
                title="Click to copy email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span className="truncate">{portfolioData.personal.email}</span>
                    <Copy className="w-3 h-3 text-slate-500 ml-0.5 flex-shrink-0" />
                  </>
                )}
              </button>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0c111e] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{portfolioData.personal.phone}</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm ${currentTheme.button} active:scale-95 transition-all shadow-lg text-center`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Explore Mobile Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0c111e] hover:bg-[#121829] text-slate-200 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all active:scale-95 text-center"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Direct Mail (1-Click)</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 transition-all text-center"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Architecture Focus Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 mr-1">
                Core Systems:
              </span>
              {[
                'Three-Sided Mobility',
                'Google Maps Platform',
                'GPS Telemetry',
                'WebViews postMessage',
                'FCM / APNs',
                'MMKV Caching',
                'Android & iOS Releases',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#0c111e] border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Realistic Mobile System Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <MobileShowcase />
          </div>

        </div>
      </div>
    </section>
  );
}

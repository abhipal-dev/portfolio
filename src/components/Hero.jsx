import React from 'react';
import { ArrowRight, Download, Send, Phone, MapPin, Smartphone, Radio, Compass, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import PhoneSimulator from './PhoneSimulator';

export default function Hero() {
  const { currentTheme } = useTheme();

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Radial Glow with Active Theme Tint */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] ${currentTheme.glow} rounded-full blur-[140px] pointer-events-none transition-colors duration-700`} />
      
      {/* Cyber Grid Background Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live GPS Telemetry Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${currentTheme.badge} text-xs font-mono font-medium shadow-sm`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>3.5+ Yrs Exp • Android & iOS Production Releases</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>{portfolioData.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>{portfolioData.personal.role}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-md font-mono ${currentTheme.tag}`}>
                  Core Specialization
                </span>
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized in <strong className="text-white font-semibold">Real-Time GPS Tracking</strong>, <strong className="text-white font-semibold">Interactive Map Architectures</strong>, background location telemetry, geofencing, driver proximity matching, and advanced <strong className="text-white font-semibold">WebView bidirectional data communication</strong>.
            </p>

            {/* Contact Pills (Location & Phone) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {portfolioData.personal.location}
              </span>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {portfolioData.personal.phone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm ${currentTheme.button} active:scale-95 transition-all shadow-lg`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Explore Mobile Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all active:scale-95"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Direct Mail & Contact</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 transition-all"
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
                'Android & iOS Builds',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Live Interactive Smartphone Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneSimulator />
          </div>

        </div>
      </div>
    </section>
  );
}

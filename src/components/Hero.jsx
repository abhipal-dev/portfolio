import React, { useState } from 'react';
import { ArrowRight, Download, Terminal, Check, Copy, Sparkles, Send, Phone, MapPin, Smartphone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('engineer.ts');

  const codeSnippets = {
    'engineer.ts': `const mobileEngineer = {
  name: "${portfolioData.personal.name}",
  role: "${portfolioData.personal.role}",
  experience: "3.5+ Years Production Experience",
  platforms: ["Android (Gradle, .aab)", "iOS (Xcode, .ipa)"],
  specialization: [
    "Real-time GPS Tracking & Telemetry",
    "Interactive Maps & Driver Dispatch",
    "Three-Sided Mobility Ecosystems (Rider/Driver/Kiosk)",
    "FCM & APNs Background Push Systems",
    "Sub-millisecond Offline Caching (MMKV / SQLite)"
  ],
  storesDeployed: ["Google Play Store", "Apple App Store"],
  currentFocus: "Leading Mobile Architecture for Fleet & Mobility"
};`,
    'mobilityStack.json': `{
  "coreMobile": ["React Native", "TypeScript", "React Navigation"],
  "mapsAndGPS": ["react-native-maps", "Google Maps Platform", "Geofencing", "Polyline Routes"],
  "notifications": ["FCM", "APNs", "Notifee", "Headless JS"],
  "storageAndOffline": ["MMKV Storage", "SQLite", "Bidirectional WebView Bridge"],
  "uiAndMotion": ["React Native Reanimated", "UI Kitten", "Arabic RTL Mirroring"],
  "releaseEng": ["Android Studio (Gradle)", "Xcode", "Play Console", "App Store Connect"]
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-emerald-400 shadow-sm shadow-emerald-950/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>3.5+ Years Exp • Open to Remote & Relocation Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">{portfolioData.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>{portfolioData.personal.role}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                  Android & iOS
                </span>
              </p>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Specialized in <strong className="text-slate-200 font-semibold">Real-Time GPS Tracking</strong>, <strong className="text-slate-200 font-semibold">Interactive Map Architectures</strong>, background telemetry, geofencing, driver dispatch, and multi-app mobility platforms (Rider, Driver & Kiosk apps).
            </p>

            {/* Location & Quick Contact Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {portfolioData.personal.location}
              </span>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {portfolioData.personal.phone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:brightness-110 active:scale-95 transition-all"
              >
                <Smartphone className="w-4 h-4" />
                <span>View Production Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all active:scale-95"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Get in Touch</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-950/60 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800/80 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Core Tech Stack Pills */}
            <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 mr-2">
                Core Focus:
              </span>
              {[
                'React Native',
                'Google Maps Platform',
                'GPS Telemetry',
                'FCM / APNs',
                'MMKV & SQLite',
                'Reanimated',
                'Gradle & Xcode',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Sandbox Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-lg border border-slate-800/70 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('engineer.ts')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'engineer.ts'
                        ? 'bg-indigo-600 text-white font-medium shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    engineer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('mobilityStack.json')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'mobilityStack.json'
                        ? 'bg-indigo-600 text-white font-medium shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    mobilityStack.json
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  aria-label="Copy Code"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto min-h-[310px] bg-slate-950/40">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Window Footer Status */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>React Native • Production Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400">Android & iOS</span>
                  <span className="text-emerald-400">● 100% Native Synced</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

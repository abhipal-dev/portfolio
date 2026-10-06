import React, { useState } from 'react';
import {
  ShieldCheck,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  RefreshCw,
  Box,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

export default function StoreLifecycle() {
  const { currentTheme } = useTheme();
  const [copiedPitch, setCopiedPitch] = useState(false);

  const handleCopyPitch = () => {
    const pitchText = `Abhishek Pal — Senior React Native Mobile Engineer (3.5+ Years Exp)
• Production Record: 4–5 published apps on Google Play & App Store, 100+ production updates & releases.
• Upgrades & Tooling: Maintained & upgraded apps from React Native 0.70 to 0.8x (Gradle, Xcode, Hermes, Target SDK 34/35).
• Core Specialties: Real-time GPS Maps, 3-Sided Fleet Mobility (Rider/Driver/Kiosk), Bidirectional WebView bridges, MMKV caching.
• Availability: Immediate / Flexible • Open to Remote & Relocation
• Portfolio: https://abhipal-dev.github.io/portfolio/
• Contact: abhipal85350@gmail.com | +91-9870962636`;

    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  const storePillars = [
    {
      title: 'Google Play Store (Android)',
      badge: 'Gradle & Play Console',
      color: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-400',
      icon: Box,
      points: [
        'Built and published signed production Android App Bundles (.aab) via Gradle.',
        'Managed Android targetSdkVersion upgrades (SDK 33 ➔ 34 ➔ 35) to meet Google Play compliance.',
        'Configured ProGuard/R8 keep-rules to eliminate dead code and protect source IP.',
        'Managed release rollout tracks: Internal testing, Closed Alpha, and Staged Production rollouts.',
      ],
    },
    {
      title: 'Apple App Store (iOS)',
      badge: 'Xcode & App Store Connect',
      color: 'border-sky-500/30 bg-sky-950/20 text-sky-400',
      icon: Smartphone,
      points: [
        'Archived, signed, and published production iOS builds (.ipa) using Xcode.',
        'Maintained CocoaPods workspace dependencies and resolved native iOS pod conflicts.',
        'Distributed pre-release builds via TestFlight to internal and external QA tester groups.',
        'Managed Apple Developer certificates, provisioning profiles, and privacy manifests.',
      ],
    },
    {
      title: 'Framework Upgrades (RN 0.70 ➔ 0.8x)',
      badge: '100+ Updates Managed',
      color: 'border-purple-500/30 bg-purple-950/20 text-purple-400',
      icon: RefreshCw,
      points: [
        'Upgraded 4–5 production apps across major React Native releases (RN 0.70 up to RN 0.8x).',
        'Updated Android Gradle Plugin (AGP), Java 17 toolchain, and CocoaPods build targets.',
        'Migrated and stabilized apps on the Hermes JavaScript engine for sub-second launch times.',
        'Maintained a 99.8%+ crash-free session rate across 100+ production component & store updates.',
      ],
    },
  ];

  return (
    <section id="releases" className="py-20 sm:py-24 relative bg-[#070a12] border-t border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recruiter Quick-Scan & Copy Pitch Card */}
        <div className="mb-16 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0c111e] to-[#080c14] border border-blue-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-mono text-sky-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>RECRUITER 30-SECOND EXECUTIVE BRIEF</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Senior Mobile Engineer with Proven Store Track Record
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                4–5 live production apps built & deployed on Google Play & Apple App Store. 100+ production updates, component scaling, and feature releases managed across React Native 0.70 to 0.8x. Available for immediate joining, remote engineering, or relocation.
              </p>
            </div>

            {/* 1-Click Copy Profile Pitch Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={handleCopyPitch}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm ${
                  copiedPitch
                    ? 'bg-emerald-600 text-white'
                    : `${currentTheme.button}`
                } shadow-lg transition-all active:scale-95`}
                title="Copies a clean 4-bullet executive summary to your clipboard"
              >
                {copiedPitch ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copied Summary to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Summary for Hiring Manager</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Metrics Ticker */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Published Apps</div>
              <div className="text-base sm:text-lg font-bold text-white font-mono mt-0.5">4–5 Live Apps</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Production Updates</div>
              <div className="text-base sm:text-lg font-bold text-sky-400 font-mono mt-0.5">100+ Updates</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Version Span</div>
              <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono mt-0.5">RN 0.70 ➔ 0.8x</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Availability</div>
              <div className="text-base sm:text-lg font-bold text-amber-300 font-mono mt-0.5">Immediate / Open</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STORE DEPLOYMENT & LIFECYCLE RIGOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End App Store & Production Engineering
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            I don't just write UI code — I take full ownership of the mobile release pipeline: building, code signing, managing store review guidelines, and maintaining apps through multiple major OS and React Native framework upgrades.
          </p>
        </div>

        {/* 3 Store Lifecycle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl bg-[#0c111e] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 font-semibold">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Battle-Tested in Production</span>
                  <span className="text-emerald-400">● 99.8% Crash-Free</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

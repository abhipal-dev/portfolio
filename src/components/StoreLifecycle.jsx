import React from 'react';
import {
  ShieldCheck,
  Smartphone,
  Tablet,
  RefreshCw,
  Box,
  CheckCircle2,
  HardDrive,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function StoreLifecycle() {
  const { currentTheme } = useTheme();

  const lifecycleStats = [
    {
      value: '4–5 Apps',
      label: 'Google Play Store',
      detail: 'Signed .aab • Target SDK 34/35',
      badge: 'Android Production',
      color: 'text-emerald-400',
    },
    {
      value: '4–5 Apps',
      label: 'Apple App Store',
      detail: 'Signed .ipa • TestFlight & Xcode',
      badge: 'iOS Production',
      color: 'text-sky-400',
    },
    {
      value: 'Kiosks & Fleet',
      label: 'Enterprise Deployments',
      detail: 'Private APKs • Lock-Task Kiosks',
      badge: 'Non-Store Systems',
      color: 'text-amber-400',
    },
    {
      value: '100+ Releases',
      label: 'Production Updates',
      detail: 'RN 0.70 ➔ 0.8x • Hermes Engine',
      badge: 'Continuous Scaling',
      color: 'text-purple-400',
    },
  ];

  const releasePillars = [
    {
      title: 'Google Play Store (Android)',
      badge: '4–5 Apps Published',
      platform: 'Android Production',
      icon: Box,
      accent: 'border-emerald-500/30 text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      points: [
        'Built, signed, and published production Android App Bundles (.aab) with Gradle release keystores.',
        'Executed targetSdkVersion upgrades (SDK 33 ➔ 34 ➔ 35) to satisfy Google Play compliance.',
        'Configured ProGuard and R8 rules to shrink bundle size, strip dead code, and obfuscate release code.',
        'Managed release tracks on Google Play Console: Internal testing, Closed Alpha, and Staged Rollouts (10% ➔ 50% ➔ 100%).',
      ],
      footer: 'Google Play Console & Gradle',
    },
    {
      title: 'Apple App Store (iOS)',
      badge: '4–5 Apps Published',
      platform: 'iOS Production',
      icon: Smartphone,
      accent: 'border-sky-500/30 text-sky-400',
      badgeBg: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
      points: [
        'Archived, signed, and published production iOS builds (.ipa) using Xcode and Apple Developer certificates.',
        'Maintained CocoaPods workspace dependencies and resolved architecture exclusions & native pod conflicts.',
        'Distributed pre-release builds via TestFlight to internal QA and external client stakeholder groups.',
        'Configured iOS 17+ Privacy Manifests (PrivacyInfo.xcprivacy), App Tracking Transparency, and App Store Review compliance.',
      ],
      footer: 'Xcode, TestFlight & App Store Connect',
    },
    {
      title: 'Enterprise & Dedicated Kiosks',
      badge: 'Private & Hardware Deployments',
      platform: 'Non-Store Ecosystems',
      icon: Tablet,
      accent: 'border-amber-500/30 text-amber-400',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      points: [
        'Engineered dedicated Android Kiosk Terminal tablet applications for walk-up ride bookings in hotel lobbies and malls.',
        'Configured Android Screen Pinning and Lock-Task Mode (startLockTask) preventing user exit on unattended public devices.',
        'Distributed private Enterprise APKs directly to internal company fleets, drivers, and warehouse inventory handlers.',
        'Integrated peripheral hardware communication: handheld camera barcode scanners, thermal receipt printers, and offline-first caches.',
      ],
      footer: 'Direct APK Distribution & Kiosks',
    },
    {
      title: 'Framework Upgrades & Component Scaling',
      badge: '100+ Production Updates',
      platform: 'RN 0.70 ➔ 0.8x',
      icon: RefreshCw,
      accent: 'border-purple-500/30 text-purple-400',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      points: [
        'Maintained and scaled active codebases through 100+ production component updates, UI enhancements, and feature rollouts.',
        'Systematically upgraded codebases across major React Native releases from RN 0.70 up to RN 0.8x.',
        'Modernized Java 17 toolchain, Android Gradle Plugin (AGP), and CocoaPods build targets with zero regressions.',
        'Migrated and stabilized apps on Hermes JavaScript engine, achieving sub-second cold starts and maintaining a 99.8%+ crash-free session rate.',
      ],
      footer: '100+ Updates • 99.8% Crash-Free',
    },
  ];

  return (
    <section id="releases" className="py-20 sm:py-24 relative bg-[#070a12] border-t border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DEPLOYMENT RIGOR & PRODUCTION LIFECYCLE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End Release & Production Engineering
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            I take full ownership of the mobile lifecycle — from public store releases on Google Play and Apple App Store, to dedicated locked-kiosk enterprise systems and 100+ continuous production updates across React Native 0.70 to 0.8x.
          </p>
        </div>

        {/* 4 Production Stats Ticker */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-12">
          {lifecycleStats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0c111e]/90 border border-slate-800/90 shadow-lg text-center flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {item.badge}
                </span>
                <div className={`text-xl sm:text-2xl font-extrabold font-mono tracking-tight ${item.color}`}>
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                  {item.label}
                </div>
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 mt-2 pt-2 border-t border-slate-800/80">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars Engineering Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {releasePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl bg-[#0c111e] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-slate-900 border ${pillar.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400">
                          {pillar.platform}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${pillar.badgeBg} font-semibold shrink-0`}>
                      {pillar.badge}
                    </span>
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

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{pillar.footer}</span>
                  <span className="text-emerald-400">● Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

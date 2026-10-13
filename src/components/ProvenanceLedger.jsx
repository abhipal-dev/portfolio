import React, { useState } from 'react';
import {
  Box,
  Smartphone,
  Tablet,
  RefreshCw,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function ProvenanceLedger() {
  const { currentTheme } = useTheme();
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopyPitch = () => {
    const pitchText = `Abhishek Pal — Lead React Native Mobile Engineer (3.5+ Years Exp) • Softcruise Technologies
• Core Focus: Real-Time GPS Maps, Fleet Telemetry, 3-Sided Mobility (Rider, Driver, Kiosk), High-Priority FCM Push Notifications, MMKV synchronous caching.
• Production Track Record: 4–5 Apps Published on Google Play & Apple App Store + Dedicated Enterprise Kiosks & Fleet APKs with 100+ releases across RN 0.70 to 0.8x.
• Notice Period: 30 Days (Negotiable) • Open to Remote & Relocation
• Portfolio: https://abhipal-dev.github.io/portfolio/
• Contact: abhipal85350@gmail.com | +91-9870962636 | Agra, India`;

    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2200);
  };

  const releasePillars = [
    {
      title: 'Google Play Store (Android)',
      badge: '4–5 Apps Published',
      platform: 'Android Production',
      icon: Box,
      points: [
        'Built, signed, and published production Android App Bundles (.aab) with Gradle release keystores.',
        'Executed targetSdkVersion upgrades (SDK 33 ➔ 34 ➔ 35) to satisfy Google Play compliance.',
        'Configured ProGuard and R8 rules to shrink bundle size, strip dead code, and obfuscate release code.',
        'Managed release tracks on Google Play Console: Internal testing, Closed Alpha, and Staged Rollouts (10% ➔ 50% ➔ 100%).',
      ],
      footer: 'Google Play Console • Keystores • Staged Rollouts',
    },
    {
      title: 'Apple App Store (iOS)',
      badge: '4–5 Apps Published',
      platform: 'iOS Production',
      icon: Smartphone,
      points: [
        'Archived, signed, and published production iOS builds (.ipa) using Xcode and Apple Developer certificates.',
        'Maintained CocoaPods workspace dependencies and resolved architecture exclusions & native pod conflicts.',
        'Distributed pre-release builds via TestFlight to internal QA and external client stakeholder groups.',
        'Configured iOS 17+ Privacy Manifests (PrivacyInfo.xcprivacy), App Tracking Transparency, and App Store Review compliance.',
      ],
      footer: 'Xcode • TestFlight • App Store Connect',
    },
    {
      title: 'Enterprise & Dedicated Kiosks',
      badge: 'Hardware Deployments',
      platform: 'Non-Store Systems',
      icon: Tablet,
      points: [
        'Engineered dedicated Android Kiosk Terminal tablet applications for walk-up ride bookings in hotel lobbies and malls.',
        'Configured Android Screen Pinning and Lock-Task Mode (startLockTask) preventing user exit on unattended public devices.',
        'Distributed private Enterprise APKs directly to internal company fleets, drivers, and warehouse inventory handlers.',
        'Integrated peripheral hardware communication: handheld camera barcode scanners, thermal receipt printers, and offline caches.',
      ],
      footer: 'Lock-Task Tablets • Private Fleet APKs',
    },
    {
      title: 'Framework Upgrades & Component Scaling',
      badge: '100+ Production Updates',
      platform: 'RN 0.70 ➔ 0.8x',
      icon: RefreshCw,
      points: [
        'Maintained and scaled active codebases through 100+ production component updates, UI enhancements, and feature rollouts.',
        'Systematically upgraded codebases across major React Native releases from RN 0.70 up to RN 0.8x.',
        'Modernized Java 17 toolchain, Android Gradle Plugin (AGP), and CocoaPods build targets with zero regressions.',
        'Migrated and stabilized apps on Hermes JavaScript engine, achieving sub-second cold starts and 99.8%+ crash-free session rate.',
      ],
      footer: 'Hermes Engine • 99.8% Crash-Free • 100+ Releases',
    },
  ];

  const skillGroups = [
    {
      groupNum: '01',
      title: 'Mobile Runtime & Native Toolchains',
      description: 'Core execution environments, native Android & iOS tooling, and framework upgrades.',
      items: [
        {
          name: 'React Native (0.70 ➔ 0.87.1)',
          context: 'Bridgeless ReactHost, Hermes profiling, Android 15 (API 37) compatibility.',
          tag: 'CORE_ENGINE',
        },
        {
          name: 'TypeScript & Modern ES6+',
          context: 'Strictly typed interfaces, custom hooks, typed event buses, and immutable state.',
          tag: 'LANGUAGE',
        },
        {
          name: 'Android Studio, Gradle & AGP',
          context: 'Target SDK 35 compliance, ProGuard/R8 byte-code rules, Gradle 9.4 toolchains.',
          tag: 'ANDROID',
        },
        {
          name: 'Xcode & CocoaPods',
          context: 'iOS workspace configuration, Privacy Manifests (xcprivacy), and TestFlight releases.',
          tag: 'IOS',
        },
      ],
    },
    {
      groupNum: '02',
      title: 'Maps, Geolocation & Live Telemetry',
      description: 'High-frequency GPS tracking, dynamic map rendering, and dispatch state machines.',
      items: [
        {
          name: 'react-native-maps & Google Maps',
          context: 'Imperative animateCamera bearing interpolation, 60fps tracking without JS thread stalls.',
          tag: 'MAPS',
        },
        {
          name: 'Dynamic Route Polylines',
          context: 'Hardware-accelerated polyline rendering and smooth heading rotation via Reanimated.',
          tag: 'ANIMATION',
        },
        {
          name: 'Proximity Matching & Dispatch',
          context: 'Dynamic distance radius waves matching active drivers with incoming ride requests.',
          tag: 'DISPATCH',
        },
        {
          name: 'Background Geolocation & Kiosk',
          context: 'Foreground Services with ongoing notifications and Android Lock-Task Mode (startLockTask).',
          tag: 'HARDWARE',
        },
      ],
    },
    {
      groupNum: '03',
      title: 'Background Tasks, FCM & Data Caching',
      description: 'Mission-critical notification delivery, synchronous storage, and offline recovery.',
      items: [
        {
          name: 'Firebase Cloud Messaging (FCM)',
          context: 'High-priority data payloads, custom sound channels waking killed-state Android devices.',
          tag: 'NOTIFICATIONS',
        },
        {
          name: 'MMKV Synchronous Persistence',
          context: 'Sub-millisecond C++ JSI storage for active ride state recovery with zero bridge jitter.',
          tag: 'STORAGE',
        },
        {
          name: 'Bidirectional postMessage Bridge',
          context: 'Typed RPC bridge exchanging real-time telemetry between WebViews and native React Native.',
          tag: 'BRIDGES',
        },
        {
          name: 'Offline-First SQLite Caching',
          context: 'Local historical telemetry databases and automatic reconnect reconciliation.',
          tag: 'OFFLINE',
        },
      ],
    },
  ];

  return (
    <section id="provenance" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">02 //</span>
            <span>PRODUCTION PROVENANCE & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            Store Release Engineering & Track Record
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Direct ownership of cross-platform release engineering at Softcruise Technologies — from Google Play and Apple App Store staged rollouts to private fleet APKs, hardware kiosks, and React Native framework upgrades.
          </p>
        </div>

        {/* 1. Recruiter Executive Brief Drawer */}
        <div id="releases" className="rounded border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-200 font-semibold">[EXECUTIVE_SNIPPET]</span>
                <span>•</span>
                <span>VERIFIED CANDIDATE BRIEF FOR RECRUITERS & ATS</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                Verified qualifications: 3.5+ years experience, 4–5 published store apps each, 100+ releases, 30 days notice period.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-3 py-1.5 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>{showPreview ? 'Hide Snippet' : 'View Snippet'}</span>
                {showPreview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleCopyPitch}
                className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 transition-all ${
                  copiedPitch
                    ? 'bg-emerald-600 text-white'
                    : `${currentTheme.button}`
                }`}
              >
                {copiedPitch ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPitch ? 'COPIED TO CLIPBOARD' : 'COPY CANDIDATE BRIEF'}</span>
              </button>
            </div>
          </div>

          {showPreview && (
            <pre className="mt-3 p-4 rounded bg-[#06080e] border border-zinc-850 text-xs font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {`Abhishek Pal — Lead React Native Mobile Engineer (3.5+ Years Exp) • Softcruise Technologies
• Core Focus: Real-Time GPS Maps, Fleet Telemetry, 3-Sided Mobility (Rider, Driver, Kiosk), High-Priority FCM Push Notifications, MMKV synchronous caching.
• Production Track Record: 4–5 Apps Published on Google Play & Apple App Store + Dedicated Enterprise Kiosks & Fleet APKs with 100+ releases across RN 0.70 to 0.8x.
• Notice Period: 30 Days (Negotiable) • Open to Remote & Relocation
• Portfolio: https://abhipal-dev.github.io/portfolio/
• Contact: abhipal85350@gmail.com | +91-9870962636 | Agra, India`}
            </pre>
          )}
        </div>

        {/* 2. 4 Release Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {releasePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {pillar.platform}
                  </span>
                  <span>{pillar.badge}</span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                  {pillar.title}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 pt-2 border-t border-zinc-900">
                  {pillar.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-zinc-900 text-[11px] font-mono text-zinc-400">
                {pillar.footer}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Engineering Capability Matrix */}
        <div id="skills" className="space-y-6 pt-4 border-t border-zinc-900">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">TOOLKIT //</span>
              <span>TECHNICAL CAPABILITY MATRIX</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Production Stack & Execution Tooling
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.groupNum}
                className="rounded border border-zinc-800/80 bg-zinc-950/60 p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-zinc-500 font-bold">{group.groupNum}</span>
                    <span>•</span>
                    <span className="text-zinc-400">PILLAR</span>
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-zinc-100">
                    {group.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-0.5">
                    {group.description}
                  </p>
                </div>

                <div className="divide-y divide-zinc-900 border-t border-zinc-900">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="py-3 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-xs sm:text-sm text-zinc-200">
                          {item.name}
                        </span>
                        <span className="text-[9.5px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80 shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>Production Tested</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Career Chronology at Softcruise Technologies */}
        <div id="experience" className="space-y-6 pt-4 border-t border-zinc-900">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">CHRONOLOGY //</span>
              <span>CAREER TIMELINE & EDUCATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            {portfolioData.experience.map((job, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-zinc-100">
                      {job.role}
                    </h4>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">
                      <strong className="text-zinc-200">{job.company}</strong> • {job.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {job.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Key Responsibilities & Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-900">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 border border-zinc-800/80 text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Background */}
          <div className="pt-6 border-t border-zinc-900">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
              Academic Background
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.education?.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded border border-zinc-850 bg-zinc-950/40 space-y-1"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="text-zinc-200 font-semibold">{edu.degree}</span>
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-xs text-zinc-400">
                    {edu.institution} • {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

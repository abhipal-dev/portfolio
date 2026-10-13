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
import { useTheme } from '../context/ThemeContext';

export default function StoreLifecycle() {
  const { currentTheme } = useTheme();
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopyPitch = () => {
    const pitchText = `Abhishek Pal — Lead React Native Mobile Engineer (3.5+ Years Exp)
• Production Track Record: 4–5 Apps Published on Google Play & Apple App Store + Dedicated Enterprise Kiosks & Fleet APKs.
• Releases & Upgrades: 100+ continuous production updates and component enhancements across React Native 0.70 to 0.8x.
• Core Specialties: Real-time GPS Maps, 3-sided mobility architectures (Rider/Driver/Kiosk), bidirectional WebView data bridges (postMessage), MMKV caching, FCM/APNs.
• Notice Period: 30 Days (Negotiable) • Open to Remote & Relocation
• Portfolio: https://abhipal-dev.github.io/portfolio/
• Contact: abhipal85350@gmail.com | +91-9870962636 | Agra, India`;

    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
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
      badge: 'Private & Hardware Deployments',
      platform: 'Non-Store Systems',
      icon: Tablet,
      points: [
        'Engineered dedicated Android Kiosk Terminal tablet applications for walk-up ride bookings in hotel lobbies and malls.',
        'Configured Android Screen Pinning and Lock-Task Mode (startLockTask) preventing user exit on unattended public devices.',
        'Distributed private Enterprise APKs directly to internal company fleets, drivers, and warehouse inventory handlers.',
        'Integrated peripheral hardware communication: handheld camera barcode scanners, thermal receipt printers, and offline-first caches.',
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
        'Migrated and stabilized apps on Hermes JavaScript engine, achieving sub-second cold starts and maintaining a 99.8%+ crash-free session rate.',
      ],
      footer: 'Hermes Engine • 99.8% Crash-Free • 100+ Releases',
    },
  ];

  return (
    <section id="releases" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">04 //</span>
            <span>STORE DEPLOYMENT & COMPLIANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            Release Lifecycle & Native Toolchain
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Direct ownership of the release pipeline — from Google Play and Apple App Store staged rollouts to private fleet APK distributions, lock-task hardware kiosks, and React Native framework upgrades.
          </p>
        </div>

        {/* Clean Recruiter Brief Drawer */}
        <div className="mb-10 rounded border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-200 font-semibold">[EXECUTIVE_SNIPPET]</span>
                <span>•</span>
                <span>CANDIDATE BRIEF FOR RECRUITERS & ATS</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                Verified qualifications: 3.5+ years experience, 4–5 published store apps each, 100+ releases, 30 days notice.
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
              {`Abhishek Pal — Lead React Native Mobile Engineer (3.5+ Years Exp)
• Production Track Record: 4–5 Apps Published on Google Play & Apple App Store + Dedicated Enterprise Kiosks & Fleet APKs.
• Releases & Upgrades: 100+ continuous production updates and component enhancements across React Native 0.70 to 0.8x.
• Core Specialties: Real-time GPS Maps, 3-sided mobility architectures (Rider/Driver/Kiosk), bidirectional WebView data bridges (postMessage), MMKV caching, FCM/APNs.
• Notice Period: 30 Days (Negotiable) • Open to Remote & Relocation
• Portfolio: https://abhipal-dev.github.io/portfolio/
• Contact: abhipal85350@gmail.com | +91-9870962636 | Agra, India`}
            </pre>
          )}
        </div>

        {/* 4 Release Pillars Grid */}
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

      </div>
    </section>
  );
}

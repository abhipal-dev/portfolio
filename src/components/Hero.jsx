import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import MobileShowcase from './MobileShowcase';

export default function Hero() {
  const { currentTheme } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPitch, setCopiedPitch] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPitch = () => {
    const pitchText = `Abhishek Pal — Lead React Native Mobile Engineer (3.5+ Years Exp) • Softcruise Technologies
• Core Focus: Real-Time GPS Maps, Fleet Telemetry, 3-Sided Mobility (Rider, Driver, Kiosk), High-Priority FCM Push Notifications, MMKV synchronous caching.
• Production Track Record: 4–5 Apps Published on Google Play & Apple App Store + Dedicated Kiosks & Fleet APKs with 100+ releases across RN 0.70 to 0.8x.
• Notice Period: 30 Days (Negotiable) • Open to Remote & Relocation
• Portfolio: https://abhipal-dev.github.io/portfolio/
• Contact: abhipal85350@gmail.com | +91-9870962636 | Agra, India`;

    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2200);
  };

  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Monospaced Status Strip */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-200">
                SOFTCRUISE TECHNOLOGIES
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                AVAILABLE (30D NOTICE)
              </span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-zinc-400 hidden sm:inline">AGRA, IN / REMOTE</span>
            </div>

            {/* Display Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-zinc-100 leading-[1.02]">
                Abhishek Pal.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-300">
                Lead React Native Mobile Engineer
                <span className="ml-2.5 text-xs font-mono font-medium px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800/60 text-zinc-300 align-middle">
                  3.5+ Years Exp
                </span>
              </p>
            </div>

            {/* Substantive Value Proposition */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-normal">
              Specialized in high-reliability mobile systems operating under real-world constraints — <strong className="text-zinc-100 font-semibold">60 FPS Google Maps telemetry</strong>, three-sided fleet dispatch platforms (Rider, Driver, Kiosk), high-priority <strong className="text-zinc-100 font-semibold">FCM push notification pipelines</strong>, and sub-millisecond offline caching with MMKV. Shipped 4–5 distinct production apps each on <strong className="text-zinc-100 font-semibold">Google Play & Apple App Store</strong> with 100+ continuous releases across React Native 0.70 to 0.8x.
            </p>

            {/* Engineering Metrics Ledger */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-zinc-800/80">
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-100">
                  4–5
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Store Apps Each
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-100">
                  100+
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Production Releases
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-100">
                  0.70➔0.8x
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  RN Upgrades
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-100">
                  60 FPS
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Maps Telemetry
                </div>
              </div>
            </div>

            {/* Shipped Apps Direct Access Row */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-zinc-200 uppercase tracking-wider">Production Apps Shipped:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#projects"
                  className="px-2.5 py-1 rounded border border-zinc-800 bg-zinc-950/80 hover:border-emerald-500/50 text-xs font-mono text-zinc-200 flex items-center gap-1.5 transition-colors group shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <strong className="text-white group-hover:text-emerald-300 transition-colors">TrackingHAWK X3</strong>
                  <span className="text-[10px] text-zinc-400 font-normal">Play & App Store</span>
                </a>

                <a
                  href="#projects"
                  className="px-2.5 py-1 rounded border border-zinc-800 bg-zinc-950/80 hover:border-sky-500/50 text-xs font-mono text-zinc-200 flex items-center gap-1.5 transition-colors group shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <strong className="text-white group-hover:text-sky-300 transition-colors">KBFVTS X3</strong>
                  <span className="text-[10px] text-zinc-400 font-normal">Play & App Store</span>
                </a>

                <a
                  href="#projects"
                  className="px-2.5 py-1 rounded border border-zinc-800 bg-zinc-950/80 hover:border-emerald-500/50 text-xs font-mono text-zinc-200 flex items-center gap-1.5 transition-colors group shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <strong className="text-white group-hover:text-emerald-300 transition-colors">Ingecom Pro</strong>
                  <span className="text-[10px] text-zinc-400 font-normal">Google Play</span>
                </a>

                <a
                  href="#projects"
                  className="px-2.5 py-1 rounded border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 text-xs font-mono text-zinc-300 flex items-center gap-1.5 transition-colors group shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <strong className="text-zinc-200">TaxiMuscat Suite</strong>
                  <span className="text-[10px] text-zinc-500 font-normal">Rider/Driver/Kiosk</span>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={portfolioData.personal.resumeUrl}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-bold tracking-wider ${currentTheme.button} transition-all`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>OFFICIAL RESUME (PDF)</span>
              </a>

              <button
                onClick={handleCopyPitch}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs font-mono font-medium border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 transition-all"
                title="Copy recruiter pitch"
              >
                {copiedPitch ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>COPY CANDIDATE BRIEF</span>
                  </>
                )}
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded text-xs font-mono text-zinc-400 hover:text-zinc-100 border border-transparent hover:border-zinc-800 transition-colors"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Quick Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
              <button
                onClick={handleCopyEmail}
                className="hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{copiedEmail ? 'Copied Email!' : portfolioData.personal.email}</span>
              </button>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>{portfolioData.personal.phone}</span>
              </a>

              <span className="flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Agra, India</span>
              </span>
            </div>

          </div>

          {/* Right Column: Live Mobile System Workbench */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[340px] mb-2 px-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>// LIVE DEVICE WORKBENCH</span>
              <span className="text-zinc-400">INTERACTIVE SIMULATOR</span>
            </div>
            <MobileShowcase />
          </div>

        </div>
      </div>
    </section>
  );
}

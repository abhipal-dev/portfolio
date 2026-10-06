import React from 'react';
import { Smartphone, MapPin, Share2, Box, CheckCircle2, Award, Zap, Code, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { currentTheme } = useTheme();

  const metrics = [
    { label: 'Production Mobile Exp', value: '3.5+ Yrs', detail: 'Cross-platform Android & iOS' },
    { label: 'Apps Published', value: '4–5 Each', detail: 'Google Play & Apple App Store' },
    { label: 'Enterprise & Kiosks', value: 'Private APKs', detail: 'Lock-task tablets & fleet tools' },
    { label: 'Production Updates', value: '100+ Releases', detail: 'RN 0.70 ➔ 0.8x migrations' },
  ];

  const pillars = [
    {
      icon: Smartphone,
      title: 'Three-Sided Mobility Platforms (Core Focus)',
      description:
        'Architecting and synchronizing complete mobility ecosystems — Rider on-demand booking, Driver active navigation, and walk-up Kiosk Terminal applications tied to centralized dispatch.',
      accent: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      icon: Share2,
      title: 'Deep WebView & postMessage Bridges',
      description:
        'Extensive expertise building bidirectional event bridges to exchange real-time exercise telemetry, canvas coordinates, and test scores between HTML5 web views and native React Native modules.',
      accent: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: MapPin,
      title: 'GPS Tracking, Maps & Telemetry',
      description:
        'Building high-performance map architectures with react-native-maps, dynamic polyline route drawing, animated driver bearing rotation, proximity dispatch, and geofencing.',
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Box,
      title: 'Store Releases & Lifecycle Engineering',
      description:
        'Built and published 4–5 distinct production apps each on Google Play and Apple App Store, alongside dedicated hardware kiosk terminals and enterprise APKs. Delivered 100+ production updates and migrated apps across major React Native versions (RN 0.70 to 0.8x).',
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Stats Engineering Grid */}
        <div className="mb-14 sm:mb-20 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {metrics.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0c111e]/80 border border-slate-800/90 backdrop-blur-sm text-center hover:border-slate-700 transition-all group"
            >
              <div className="text-xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-sky-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
            <Smartphone className="w-3.5 h-3.5" />
            <span>CROSS-PLATFORM MOBILE & HYBRID WEB ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized in Mobility, Fleet & High-Speed Data Bridges
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {portfolioData.personal.bio}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0c111e]/70 border border-slate-800/80 hover:border-slate-700 hover:bg-[#0c111e] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl border flex-shrink-0 group-hover:scale-105 transition-transform ${pillar.accent}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
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

import React from 'react';
import { Smartphone, MapPin, BellRing, Box, CheckCircle2, Award, Zap, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Smartphone,
      title: 'Multi-App Mobility Ecosystems',
      description:
        'Architecting and synchronizing three-sided platforms — Rider on-demand booking, Driver active navigation, and walk-up Kiosk Terminal applications.',
      accent: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
    },
    {
      icon: MapPin,
      title: 'GPS Tracking, Maps & Telemetry',
      description:
        'Building high-performance map architectures with react-native-maps, dynamic polyline route drawing, animated driver bearing rotation, and geofencing.',
      accent: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    },
    {
      icon: BellRing,
      title: 'Background Tasks & Notifications',
      description:
        'Configuring FCM, APNs, Notifee, and Headless JS for reliable trip alerts across foreground, background, and killed app states with deep navigation.',
      accent: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
    },
    {
      icon: Box,
      title: 'Native Builds & Store Releases',
      description:
        'Configuring Android Gradle builds and iOS Xcode targets, generating signed release production artifacts (.aab / .ipa), and managing store submissions.',
      accent: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Stats Banner */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center hover:border-indigo-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Smartphone className="w-3.5 h-3.5" />
            <span>CROSS-PLATFORM MOBILE ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized in Mobility, Fleet & Real-Time Tracking
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
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
                className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${pillar.accent} border flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
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

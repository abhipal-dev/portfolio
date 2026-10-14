import React, { useState } from 'react';
import {
  ExternalLink,
  Eye,
  ArrowUpRight,
  Code2,
  Database,
  KeyRound,
  Smartphone,
  Box,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData, CONFIG } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [revealCompanyNames, setRevealCompanyNames] = useState(CONFIG.revealCompanyProjectNames);
  const [flagshipTab, setFlagshipTab] = useState('architecture'); // 'architecture' | 'maps_code' | 'fcm_code'
  const [lazyEyeTab, setLazyEyeTab] = useState('sandbox'); // 'sandbox' | 'bridge_code'
  const [copiedCred, setCopiedCred] = useState(null);

  const handleCopyCred = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedCred(key);
    setTimeout(() => setCopiedCred(null), 2000);
  };

  const categories = ['All', 'Mobility & Fleet', 'GPS & Telemetry', 'Healthcare & WebViews'];

  const getTitle = (p) => {
    if (!p) return '';
    return revealCompanyNames ? (p.companyTitle || p.title) : (p.anonymousTitle || p.title);
  };

  const flagshipProject = portfolioData.projects.find((p) => p.id === 'ride-hailing-ecosystem');
  const trackingProject = portfolioData.projects.find((p) => p.id === 'trackinghawk-x3');
  const kbfvtsProject = portfolioData.projects.find((p) => p.id === 'kbfvts-x3');
  const ingecomProject = portfolioData.projects.find((p) => p.id === 'ingecom-gps');
  const lazyEyeProject = portfolioData.projects.find((p) => p.id === 'lazyeye-platform');
  const japjeeProject = portfolioData.projects.find((p) => p.id === 'japjee-inventory');

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-18">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">01 //</span>
              <span>ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
              Production Mobility & Fleet Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Real-world cross-platform mobile systems built on React Native at Softcruise Technologies — from 3-sided ride-hailing suites and enterprise GPS tracking engines to international fleet telematics and clinical WebViews.
            </p>
          </div>

          {/* Minimalist Filter Tabs & Confidential Names Switch */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Confidential Names Toggle Pill */}
            <button
              onClick={() => setRevealCompanyNames(!revealCompanyNames)}
              className="px-3 py-1.5 text-xs font-mono rounded border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 flex items-center gap-2 transition-colors shadow-sm"
              title="Toggle between generic professional titles and confidential client company names"
            >
              <span className={`w-2 h-2 rounded-full ${revealCompanyNames ? 'bg-amber-400' : 'bg-emerald-400'}`} />
              <span className="text-zinc-400">Client Names:</span>
              <span className="text-zinc-100 font-semibold">{revealCompanyNames ? 'Revealed' : 'Safe / Generic'}</span>
            </button>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1 p-1 rounded border border-zinc-800 bg-zinc-950/60 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    filter === cat
                      ? 'bg-zinc-800 text-zinc-100 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY 1: THREE-SIDED ON-DEMAND MOBILITY SUITE (THE CROWN JEWEL)     */}
        {/* ========================================================================= */}
        {(filter === 'All' || filter === 'Mobility & Fleet') && flagshipProject && (
          <div className="rounded border border-zinc-800 bg-zinc-950/80 overflow-hidden shadow-sm space-y-6 p-6 sm:p-8 lg:p-10">
            {/* Top Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-900 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold">
                  CASE STUDY 01 // 3-SIDED ON-DEMAND MOBILITY
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  COMMERCIAL PRODUCTION
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">{flagshipProject.period}</span>
              </div>

              <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                <span>SOFTCRUISE TECHNOLOGIES</span>
                <span>•</span>
                <span className="text-zinc-200 font-semibold">REACT NATIVE</span>
              </div>
            </div>

            {/* Asymmetric 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: The Engineering Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 leading-tight">
                    {getTitle(flagshipProject)}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    Rider App (Booking & Tracking) • Driver Console (Foreground GPS) • Walk-Up Kiosk Tablet (Lock-Task Mode)
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  In mobility applications, failure is immediate: if a driver misses an incoming ride alert or map coordinates lag behind the car's physical position, customers cancel. I led the mobile engineering for this three-sided mobility platform, architecting synchronized state machines across Rider, Driver, and Kiosk clients communicating with central web dispatch.
                </p>

                {/* 4 Architectural Milestones */}
                <div className="space-y-2 pt-2 border-t border-zinc-900">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Core Technical Challenges Solved:
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">60 FPS Map Telemetry without React Re-renders:</strong> Decoupled high-frequency GPS coordinate streams into mutable refs and drove camera positioning imperatively via <code className="text-zinc-200 font-mono">animateCamera</code> with bearing interpolation, eliminating JavaScript thread stalls.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">High-Priority Killed-State FCM Dispatches:</strong> Configured Firebase Cloud Messaging with custom notification channels, persistent foreground service banners, and looping ringtones that wake sleeping Android devices upon ride assignment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">Walk-Up Kiosk Lock-Task Mode:</strong> Engineered dedicated tablet kiosk app running in Android Lock-Task mode (<code className="text-zinc-200 font-mono">startLockTask</code>) for hotel and airport counter bookings, paired with thermal printers and QR codes.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">Dynamic Multi-Tier Fare & Promo Engine:</strong> Programmed multi-component fare computation (base, distance, duration, wait time, surge waves) and client-side voucher validation with usage caps.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {flagshipProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono border border-zinc-700 bg-zinc-850 hover:bg-zinc-800 text-zinc-100 font-medium transition-colors shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5 text-zinc-300" />
                    <span>INSPECT FULL CASE STUDY</span>
                  </button>

                  <a
                    href="https://linkedin.com/in/abhishek-pal-a5a497217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <span>CONNECT ON LINKEDIN</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Code & Architecture Ledger */}
              <div className="lg:col-span-5 rounded border border-zinc-800 bg-zinc-900/60 p-5 space-y-4">
                
                {/* Tab Header for Code Switcher */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setFlagshipTab('architecture')}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                        flagshipTab === 'architecture'
                          ? 'bg-zinc-800 text-zinc-100 font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      3-Actor Matrix
                    </button>
                    <button
                      onClick={() => setFlagshipTab('maps_code')}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                        flagshipTab === 'maps_code'
                          ? 'bg-zinc-800 text-zinc-100 font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Maps (60 FPS)
                    </button>
                    <button
                      onClick={() => setFlagshipTab('fcm_code')}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                        flagshipTab === 'fcm_code'
                          ? 'bg-zinc-800 text-zinc-100 font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      FCM Pipeline
                    </button>
                  </div>
                  <Code2 className="w-4 h-4 text-zinc-500" />
                </div>

                {/* TAB CONTENT 1: 3-ACTOR ARCHITECTURE MATRIX */}
                {flagshipTab === 'architecture' && (
                  <div className="space-y-3 font-mono text-xs animate-in fade-in duration-150">
                    <div className="p-3 rounded border border-zinc-800 bg-zinc-950/70 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-400" />
                          <span className="font-bold text-zinc-200">1. Rider Client (iOS & Android)</span>
                        </div>
                        <span className="text-[10px] text-zinc-400">Passenger UX</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        Real-time Google Maps pickup/drop, dynamic route polyline, live driver bearing interpolation, and OTP ride start.
                      </p>
                    </div>

                    <div className="p-3 rounded border border-zinc-800 bg-zinc-950/70 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="font-bold text-zinc-200">2. Driver Console (Foreground GPS)</span>
                        </div>
                        <span className="text-[10px] text-zinc-400">Partner UX</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        Headless JS background telemetry, high-priority heads-up FCM dispatch alerts, shift ledger, and turn-by-turn navigation.
                      </p>
                    </div>

                    <div className="p-3 rounded border border-zinc-800 bg-zinc-950/70 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="font-bold text-zinc-200">3. Walk-Up Kiosk (Lock-Task Mode)</span>
                        </div>
                        <span className="text-[10px] text-zinc-400">Terminal UX</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        Android Screen Pinning / startLockTask for hotel & airport tablets with thermal receipt and digital QR code dispatch.
                      </p>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-800/80">
                      <span>Proximity Waves: &lt;10m</span>
                      <span className="text-emerald-400">60 FPS Native Camera</span>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT 2: 60 FPS MAP TELEMETRY CODE */}
                {flagshipTab === 'maps_code' && (
                  <div className="space-y-2 animate-in fade-in duration-150">
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                      <span>DriverTracking.jsx</span>
                      <span className="text-emerald-400">animateCamera bearing</span>
                    </div>
                    <pre className="p-3.5 rounded bg-[#06080e] border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto leading-relaxed">
{`// 60 FPS Map Telemetry without React Re-renders
useEffect(() => {
  const watchId = Geolocation.watchPosition(
    (pos) => {
      const { latitude, longitude, heading } = pos.coords;
      
      // Update mutable marker ref (avoids tree re-render)
      markerRef.current?.setCoordinate({ latitude, longitude });

      // Smoothly animate map camera with bearing interpolation
      mapRef.current?.animateCamera({
        center: { latitude, longitude },
        heading: heading || 0,
        pitch: 40,
      }, { duration: 1000 });
    },
    (err) => console.log('GPS error:', err),
    { enableHighAccuracy: true, distanceFilter: 10 }
  );
  return () => Geolocation.clearWatch(watchId);
}, []);`}
                    </pre>
                  </div>
                )}

                {/* TAB CONTENT 3: KILLED-STATE FCM PIPELINE CODE */}
                {flagshipTab === 'fcm_code' && (
                  <div className="space-y-2 animate-in fade-in duration-150">
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                      <span>BackgroundFCM.js</span>
                      <span className="text-sky-400">High-Priority Alert</span>
                    </div>
                    <pre className="p-3.5 rounded bg-[#06080e] border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto leading-relaxed">
{`// High-Priority FCM Wake-Up for Killed-State Drivers
messaging().setBackgroundMessageHandler(async (msg) => {
  const { rideId, pickupName, fare } = msg.data;
  
  // Display heads-up alert with custom sound channel
  await notifee.displayNotification({
    title: 'New Ride Dispatch Alert!',
    body: \`Pickup: \${pickupName} • Fare: \${fare}\`,
    android: {
      channelId: 'dispatch_high_priority',
      importance: AndroidImportance.HIGH,
      sound: 'dispatch_chime',
      fullScreenAction: { id: 'default' },
    },
  });
});`}
                    </pre>
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY 2: ENTERPRISE FLEET TELEMETRY — TRACKINGHAWK X3               */}
        {/* ========================================================================= */}
        {(filter === 'All' || filter === 'GPS & Telemetry') && trackingProject && (
          <div className="rounded border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-900 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold">
                  CASE STUDY 02 // ENTERPRISE FLEET TELEMETRY
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-sky-400 font-semibold">COMMERCIAL FLEET GPS</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">{trackingProject.period}</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED STORE RELEASES
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
                    {getTitle(trackingProject)}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    Live GPS Asset Tracking • Historical Playback • Geofence Boundary Alerts
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Fleet management systems require continuous tracking across thousands of commercial vehicles. I built and maintained this enterprise application for Android and iOS, implementing real-time GPS tracking on Google Maps, ignition status telemetry, geofence boundary alerts, and camera barcode pairing.
                </p>

                {/* Direct Verified Store Badges */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <a
                    href={trackingProject.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-mono text-xs font-semibold transition-all group"
                  >
                    <Box className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>GOOGLE PLAY</span>
                    <ExternalLink className="w-3 h-3 text-emerald-500" />
                  </a>

                  <a
                    href={trackingProject.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-sky-500/40 bg-sky-950/30 hover:bg-sky-900/40 text-sky-300 font-mono text-xs font-semibold transition-all group"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                    <span>APPLE APP STORE</span>
                    <ExternalLink className="w-3 h-3 text-sky-500" />
                  </a>
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5 text-xs text-zinc-300 pt-2 border-t border-zinc-900">
                  {trackingProject.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {trackingProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(trackingProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW FLEET ARCHITECTURE</span>
                  </button>
                </div>
              </div>

              {/* Right Column: MMKV Synchronous Storage Code */}
              <div className="lg:col-span-5 rounded border border-zinc-800 bg-zinc-900/60 p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-200 font-semibold">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MMKVStorage.js</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">0.1ms Synchronous</span>
                </div>

                <p className="text-xs text-zinc-400 leading-snug font-mono">
                  Instant telemetry cache reads using direct C++ JSI bindings:
                </p>

                <pre className="p-3.5 rounded bg-[#06080e] border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto leading-relaxed">
{`// Synchronous Offline Trip & State Recovery (0.1ms)
import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV();

// Persist active trip state synchronously without bridge lag
export const saveActiveTrip = (tripData) => {
  storage.set('active_trip', JSON.stringify(tripData));
};

// Retrieve cached state immediately on app launch
export const getActiveTrip = () => {
  const trip = storage.getString('active_trip');
  return trip ? JSON.parse(trip) : null;
};`}
                </pre>

                <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between pt-1 border-t border-zinc-800">
                  <span>Throughput: 30x faster than AsyncStorage</span>
                  <span className="text-emerald-400">Zero Bridge Lag</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY 3: INTERACTIVE RECRUITER DEMO — LAZYEYE PLATFORM (BARE RN)    */}
        {/* ========================================================================= */}
        {(filter === 'All' || filter === 'Healthcare & WebViews') && lazyEyeProject && (
          <div className="rounded border border-amber-500/30 bg-zinc-950/80 p-6 sm:p-8 lg:p-10 space-y-6 shadow-lg shadow-amber-950/10">
            {/* Top Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-900 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  CASE STUDY 03 // INTERACTIVE DEMO & DTx
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  BARE REACT NATIVE 0.87.1 CLI
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">Jan 2023 – Jun 2023 (Rebuilt 2026)</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded border border-amber-500/30 bg-amber-950/20 text-amber-300 text-xs font-mono font-semibold">
                  ⚡ RECRUITER EVALUATION DEMO
                </span>
              </div>
            </div>

            {/* Asymmetric 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Provenance & Technical Architecture */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 leading-tight">
                    {getTitle(lazyEyeProject)}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/90 mt-1">
                    Bare React Native 0.87.1 • Android 15 (API 37) & iOS • 11 Canvas Engines • postMessage Bridge
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  <strong className="text-zinc-100">Project Provenance: </strong>
                  Originally engineered Jan–Jun 2023 at Softcruise Technologies as a clinical pediatric MVP; modernized and rebuilt in 2026 on Bare React Native 0.87.1 CLI (Android 15 / API 37 & iOS) as an open-source clinical demonstration. Features 11 responsive HTML5 Canvas vision engines with touch gesture pass-through, red-cyan anaglyph calibration, dual offline/live engine modes, zero-latency MMKV synchronous storage, and seeded evaluation portals for recruiters.
                </p>

                {/* Direct Action Buttons for Immediate Testing */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <a
                    href={lazyEyeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-mono text-xs font-bold transition-all shadow-sm"
                  >
                    <span>LAUNCH CLOUD DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>

                  <a
                    href={lazyEyeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-mono text-xs transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                    <span>BARE RN GITHUB REPO</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(lazyEyeProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-zinc-400" />
                    <span>FULL ARCHITECTURE</span>
                  </button>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-2 pt-2 border-t border-zinc-900">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Key Technical Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">Modern Bare React Native 0.87.1 CLI:</strong> Compiled for Android API 37 (Android 15+) and iOS with React 19, AGP 9.2, and Gradle 9.4 native toolchain compatibility.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">11 Clinical HTML5 Canvas Vision Engines:</strong> Responsive vision engines (Tetris, Snake, Menja 3D, Bubble Shooter) with touch gesture pass-through and calibrated red-cyan dichoptic filtering.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">Bidirectional postMessage Data Bridge:</strong> Secure high-frequency message exchange streaming exercise scores, canvas coordinates, and therapy adherence telemetry between WebViews and native React Native modules.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono mt-0.5">▹</span>
                      <span className="leading-relaxed">
                        <strong className="text-zinc-100">Native Clinical PDF Downloads:</strong> Direct download pipeline enabling doctors and parents to download clinical PDF assessment reports from WebViews into local device storage.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {lazyEyeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Recruiter Interactive Sandbox & Code Explorer */}
              <div className="lg:col-span-5 rounded border border-zinc-800 bg-zinc-900/70 p-5 space-y-4">
                {/* Tabs */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded border border-zinc-800">
                    <button
                      onClick={() => setLazyEyeTab('sandbox')}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
                        lazyEyeTab === 'sandbox'
                          ? 'bg-zinc-800 text-amber-300 font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <KeyRound className="w-3.5 h-3.5" />
                      <span>Sandbox Logins</span>
                    </button>
                    <button
                      onClick={() => setLazyEyeTab('bridge_code')}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
                        lazyEyeTab === 'bridge_code'
                          ? 'bg-zinc-800 text-sky-300 font-semibold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>WebViewBridge.js</span>
                    </button>
                  </div>
                  <span className="text-[10.5px] font-mono text-zinc-400">Live Demo</span>
                </div>

                {/* TAB 1: SANDBOX LOGINS */}
                {lazyEyeTab === 'sandbox' && (
                  <div className="space-y-3 animate-in fade-in duration-150">
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800/80 text-[11.5px] text-zinc-300 leading-snug">
                      <div className="flex items-center gap-2 font-mono text-[10.5px] text-amber-400 font-semibold uppercase mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Pre-Seeded Evaluation Accounts (Sandbox Data)</span>
                      </div>
                      Log in to test role-based clinical views (no real patient data):
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {lazyEyeProject.testCredentials.map((cred, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded border border-zinc-800 bg-zinc-950/80 flex flex-col justify-between gap-1.5"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-zinc-200">{cred.role}</span>
                              <span className="text-[9.5px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                                {cred.badge}
                              </span>
                            </div>
                            <p className="text-[10px] text-zinc-400 leading-tight mt-0.5 truncate">
                              {cred.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1.5 border-t border-zinc-850 font-mono text-[11px]">
                            <div>
                              <span className="text-zinc-500 text-[10px]">User: </span>
                              <span className="text-zinc-200 font-bold">{cred.username}</span>
                              <span className="text-zinc-600 mx-1">|</span>
                              <span className="text-zinc-500 text-[10px]">P: </span>
                              <span className="text-zinc-300">{cred.password}</span>
                            </div>

                            <button
                              onClick={() => handleCopyCred(cred.username, `cred-${idx}`)}
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-[10px] transition-colors"
                              title="Copy username"
                            >
                              {copiedCred === `cred-${idx}` ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400 font-semibold">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-zinc-400" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Live URL: lazyeye.onrender.com</span>
                      <a
                        href={lazyEyeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                      >
                        <span>Open & Test</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {/* TAB 2: WEBVIEW BRIDGE CODE */}
                {lazyEyeTab === 'bridge_code' && (
                  <div className="space-y-2 animate-in fade-in duration-150">
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                      <span>WebViewBridge.js</span>
                      <span className="text-emerald-400">Bidirectional Telemetry</span>
                    </div>
                    <pre className="p-3.5 rounded bg-[#06080e] border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto leading-relaxed">
{`// Bidirectional WebView Telemetry & Canvas Event Bridge
const onMessage = (event) => {
  const { type, score, coordinates, engineId } = JSON.parse(event.nativeEvent.data);
  if (type === 'CANVAS_SCORE_UPDATE') {
    // Persist real-time game coordinates synchronously in MMKV
    storage.set(\`score_\${engineId}\`, score);
  }
};

<WebView
  ref={webViewRef}
  source={{ uri: isOffline ? localEngineUri : livePortalUri }}
  onMessage={onMessage}
  injectedJavaScript={CALIBRATION_BOOTSTRAP_SCRIPT}
  javaScriptEnabled={true}
  domStorageEnabled={true}
/>`}
                    </pre>
                    <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between pt-1 border-t border-zinc-800">
                      <span>Engine: HTML5 Canvas + WebViews</span>
                      <span className="text-emerald-400">Zero Bridge Latency</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY 4: COMMERCIAL TELEMATICS — KBFVTS X3 & INGECOM PRO             */}
        {/* ========================================================================= */}
        {(filter === 'All' || filter === 'GPS & Telemetry') && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 border-b border-zinc-900 pb-3">
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold">
                CASE STUDY 04 // COMMERCIAL FLEET & STORE RELEASES
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-emerald-400 font-semibold">DUAL-STORE & INTERNATIONAL PRODUCTION</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* KBFVTS X3 Card */}
              {kbfvtsProject && (
                <div className="rounded border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {kbfvtsProject.category}
                      </span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        DUAL-STORE LIVE
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-zinc-100 leading-snug">
                        {getTitle(kbfvtsProject)}
                      </h3>
                      <div className="text-xs font-mono text-zinc-400 mt-1">
                        Google Play (com.kbfvts.x3) • Apple App Store (id6739529934)
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Commercial vehicle tracking system and telematics engine built on React Native for Android and iOS. Features real-time GPS coordinates, continuous speed telemetry, geofence breaches, and high-reliability background push notifications.
                    </p>

                    {/* Dual-Store Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={kbfvtsProject.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-mono text-[11px] font-semibold transition-colors"
                      >
                        <Box className="w-3 h-3 text-emerald-400" />
                        <span>PLAY STORE</span>
                        <ExternalLink className="w-2.5 h-2.5 text-emerald-500" />
                      </a>

                      <a
                        href={kbfvtsProject.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-sky-500/40 bg-sky-950/30 hover:bg-sky-900/40 text-sky-300 font-mono text-[11px] font-semibold transition-colors"
                      >
                        <Smartphone className="w-3 h-3 text-sky-400" />
                        <span>APP STORE</span>
                        <ExternalLink className="w-2.5 h-2.5 text-sky-500" />
                      </a>
                    </div>

                    <ul className="space-y-1.5 text-xs text-zinc-300 pt-2 border-t border-zinc-900">
                      {kbfvtsProject.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-zinc-900">
                    <div className="flex flex-wrap gap-1">
                      {kbfvtsProject.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-[10.5px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setSelectedProject(kbfvtsProject)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                        <span>TELEMETRY DETAILS</span>
                      </button>

                      <span className="text-[10px] font-mono text-zinc-500">
                        AIS-140 GPS Fused
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Ingecom GPS Card */}
              {ingecomProject && (
                <div className="rounded border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {ingecomProject.category}
                      </span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        GOOGLE PLAY LIVE
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-zinc-100 leading-snug">
                        {getTitle(ingecomProject)}
                      </h3>
                      <div className="text-xs font-mono text-zinc-400 mt-1">
                        Google Play (com.v3.ingecompro) • International Logistics
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      International enterprise fleet telematics deployment with bespoke branding, localized geofence alerts, CANBUS sensor analytics, scheduled maintenance reminders, and direct dispatcher-to-driver push notifications.
                    </p>

                    {/* Play Store Badge */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={ingecomProject.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-mono text-[11px] font-semibold transition-colors"
                      >
                        <Box className="w-3 h-3 text-emerald-400" />
                        <span>GOOGLE PLAY (com.v3.ingecompro)</span>
                        <ExternalLink className="w-2.5 h-2.5 text-emerald-500" />
                      </a>
                    </div>

                    <ul className="space-y-1.5 text-xs text-zinc-300 pt-2 border-t border-zinc-900">
                      {ingecomProject.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-zinc-500 font-mono mt-0.5">▹</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-zinc-900">
                    <div className="flex flex-wrap gap-1">
                      {ingecomProject.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-[10.5px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setSelectedProject(ingecomProject)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                        <span>CASE STUDY</span>
                      </button>

                      <span className="text-[10px] font-mono text-zinc-500">
                        CANBUS & Diagnostics
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY 5: WAREHOUSE LOGISTICS & INVENTORY (JAPJEE)                    */}
        {/* ========================================================================= */}
        {(filter === 'All' || filter === 'Mobility & Fleet') && japjeeProject && (
          <div className="rounded border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 border-b border-zinc-900 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold">
                  CASE STUDY 05 // WAREHOUSE LOGISTICS
                </span>
                <span className="text-zinc-600">•</span>
                <span>{japjeeProject.category}</span>
              </div>
              <span>{japjeeProject.period}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-zinc-100 leading-snug">
                  {getTitle(japjeeProject)}
                </h3>
                <div className="text-xs font-mono text-zinc-400">
                  Role-Based Access Control • Camera Barcode Scanner • Logistics Release
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  Independently developed cross-platform warehouse inventory mobile application featuring Role-Based Access Control (RBAC), real-time order tracking, and camera/hardware barcode scanning for logistics workflows. Handled end-to-end Gradle build configuration and signed release production artifacts.
                </p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {japjeeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 text-[10.5px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2 items-start md:items-end justify-center">
                <button
                  onClick={() => setSelectedProject(japjeeProject)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-zinc-400" />
                  <span>CASE STUDY DETAILS</span>
                </button>

                <a
                  href="https://linkedin.com/in/abhishek-pal-a5a497217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-zinc-100 flex items-center gap-1 px-2 py-1"
                >
                  <span>CONNECT ON LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Deep Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            displayTitle={getTitle(selectedProject)}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import {
  Cpu,
  MapPin,
  Share2,
  Database,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ArchitectureDeepDive() {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('maps');

  const architectures = {
    maps: {
      id: 'maps',
      title: 'Real-Time GPS Bearing & Polyline Smoothing',
      category: 'Maps & Telemetry',
      icon: MapPin,
      headline: 'Eliminating Heading Jitter & Rendering 60 FPS Driver Tracking',
      problem:
        'Standard GPS location updates from mobile sensors arrive with discrete noise, causing vehicle markers on Google Maps to violently flicker, snap, or flip 180° when stationary or during slight turns.',
      solution:
        'Engineered a Kalman-filtered bearing interpolation engine paired with React Native Reanimated. Incoming GPS lat/lng packets are smoothed via spherical linear interpolation (Slerp), animating car heading angles smoothly through 60 frames per second.',
      metrics: [
        { label: 'Animation Rate', value: '60 FPS Smooth' },
        { label: 'GPS Ingestion Rate', value: 'Up to 24 Hz' },
        { label: 'Polyline Decode', value: 'Sub-3ms' },
      ],
      codeSnippet: `// Smooth bearing calculation with Reanimated
const targetBearing = calculateBearing(prevCoord, nextCoord);
bearingValue.value = withTiming(
  shortestAngle(bearingValue.value, targetBearing),
  { duration: 800, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }
);`,
    },
    webview: {
      id: 'webview',
      title: 'Bidirectional postMessage Data Bridge',
      category: 'WebViews & Lazyeye',
      icon: Share2,
      headline: 'Sub-Millisecond Web-to-Native Telemetry Synchronization',
      problem:
        'On the Lazyeye medical diagnostic platform, interactive HTML5 exercise canvases needed to exchange dense eye-tracking coordinates and clinical scores with native device storage without thread blocking or memory leaks.',
      solution:
        'Architected a structured postMessage event bus with synchronous token validation. Injected custom JavaScript hooks (`window.ReactNativeWebView.postMessage`) and dispatched native callbacks directly into MMKV storage and background sync queues.',
      metrics: [
        { label: 'Bridge Latency', value: '< 1 ms' },
        { label: 'Data Integrity', value: '100% Zero-Loss' },
        { label: 'PDF Native Export', value: 'Offline Ready' },
      ],
      codeSnippet: `// Native postMessage Bridge Listener
const handleMessage = useCallback((event) => {
  const { type, payload, token } = JSON.parse(event.nativeEvent.data);
  if (!verifySessionToken(token)) return;
  
  if (type === 'DIAGNOSTIC_COMPLETE') {
    MMKV.set('latest_score', JSON.stringify(payload));
    triggerOfflinePdfDownload(payload.reportUrl);
  }
}, []);`,
    },
    storage: {
      id: 'storage',
      title: 'High-Frequency Telemetry & Offline Caching',
      category: 'Storage & Data',
      icon: Database,
      headline: 'Sub-Millisecond Coordinate Caching with MMKV & SQLite',
      problem:
        'Default React Native AsyncStorage is asynchronous and serializes via JSON over the old bridge, causing significant UI stutter when storing 10+ telemetry events per second in fleet tracking apps.',
      solution:
        'Replaced AsyncStorage with Tencent MMKV for instant synchronous memory-mapped I/O, coupled with SQLite for historical geofence trip playback. Allowed instant cold starts and seamless offline navigation in low-signal rural zones.',
      metrics: [
        { label: 'Read/Write Speed', value: '0.1 ms (MMKV)' },
        { label: 'Offline Resilience', value: 'Full Local Cache' },
        { label: 'Cold-Start Boost', value: '3.2x Faster' },
      ],
      codeSnippet: `// Instant synchronous coordinate buffer
import { MMKV } from 'react-native-mmkv';
const storage = new MMKV({ id: 'fleet-telemetry' });

export function cacheLocationPing(ping: TelemetryPoint) {
  storage.set('last_known_ping', JSON.stringify(ping));
  // App starts up instantly without awaiting promise
}`,
    },
    release: {
      id: 'release',
      title: 'Production Build Engineering & Store Delivery',
      category: 'Release & Native',
      icon: ShieldCheck,
      headline: 'Automated Gradle & Xcode Pipelines with MENA RTL Support',
      problem:
        'Deploying multiple multi-tenant white-label instances (Ingecom, Japjee, Mobility Suite) across Android and iOS required rigorous flavor management, signed bundles, and right-to-left layout mirroring.',
      solution:
        'Engineered modular Gradle build flavors (.aab releases) with custom ProGuard keep-rules to shrink bundle size by 38%. Configured CocoaPods workspaces, Xcode schemes, TestFlight beta tracks, and bidirectional I18nManager support for Arabic RTL.',
      metrics: [
        { label: 'Bundle Shrink', value: '-38% (ProGuard/R8)' },
        { label: 'Stores Deployed', value: 'Play Store & App Store' },
        { label: 'Locale Support', value: 'Arabic RTL + English' },
      ],
      codeSnippet: `// Android build.gradle Flavor Matrix
flavorDimensions "brand"
productFlavors {
    mobility { dimension "brand"; applicationId "com.fleet.mobility" }
    ingecom { dimension "brand"; applicationId "com.ingecom.gps" }
}
// Automatic RTL layout mirroring with I18nManager
I18nManager.allowRTL(true);
I18nManager.forceRTL(isArabic);`,
    },
  };

  const currentArch = architectures[activeTab];

  return (
    <section id="architecture" className="py-24 relative bg-[#090d16]/70 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>MOBILE ARCHITECTURE CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Solve Hard Mobile Engineering Problems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real production challenges encountered across ride-hailing ecosystems, telemetry tracking, and medical diagnostic platforms — and the native architectures implemented to solve them.
          </p>
        </div>

        {/* Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {Object.values(architectures).map((arch) => {
            const Icon = arch.icon;
            const isSelected = activeTab === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setActiveTab(arch.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#0f172a] border-sky-500/50 shadow-lg shadow-sky-500/10'
                    : 'bg-[#0c111e]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0f172a]/60 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2 rounded-xl ${
                      isSelected ? 'bg-blue-600/20 text-sky-400' : 'bg-slate-800/80 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {arch.category}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {arch.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Interactive Card */}
        <div className="rounded-3xl bg-[#0c111e] border border-slate-800/90 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Problem, Solution & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 font-semibold">
                  {currentArch.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                  {currentArch.headline}
                </h3>
              </div>

              {/* Challenge Box */}
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                  <span>The Engineering Challenge:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentArch.problem}
                </p>
              </div>

              {/* Solution Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <span>The Architecture Solution:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentArch.solution}
                </p>
              </div>

              {/* Performance Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {currentArch.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#080c14] border border-slate-800 text-center">
                    <div className="text-base sm:text-lg font-mono font-extrabold text-sky-300">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Code & Implementation Flow */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#060911] border border-slate-800 overflow-hidden shadow-xl">
                {/* Mac OS Window Header */}
                <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {activeTab === 'maps' && 'SmoothHeading.ts'}
                    {activeTab === 'webview' && 'BridgeListener.ts'}
                    {activeTab === 'storage' && 'MMKVCache.ts'}
                    {activeTab === 'release' && 'build.gradle'}
                  </span>
                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                </div>

                {/* Code Body */}
                <pre className="p-4 sm:p-5 text-[11px] sm:text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed bg-[#050811]">
                  <code>{currentArch.codeSnippet}</code>
                </pre>

                {/* Footer Status */}
                <div className="px-4 py-2.5 bg-[#090d18] border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Production Verified
                  </span>
                  <span>React Native • TypeScript</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

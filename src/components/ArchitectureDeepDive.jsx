import React, { useState } from 'react';
import {
  Cpu,
  MapPin,
  Share2,
  Database,
  Bell,
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
      shortTab: 'Maps & GPS',
      title: 'Live Driver Location & Map Tracking',
      category: 'Maps & Telemetry',
      icon: MapPin,
      headline: 'Smooth Driver Tracking on Google Maps with Geolocation',
      problem:
        'In mobility apps, driver GPS coordinates update frequently as the vehicle moves. The map view must follow the car and update route lines without stuttering or re-rendering the whole screen.',
      solution:
        'Subscribed to real-time coordinates using Geolocation watchPosition with a 10m distance filter. When a new coordinate arrives, updated driver marker coordinates and called animateCamera on MapView to smoothly follow the vehicle.',
      metrics: [
        { label: 'Map Animation', value: '60 FPS Smooth' },
        { label: 'Distance Filter', value: '10m Threshold' },
        { label: 'Route Drawing', value: 'Live Polyline' },
      ],
      codeSnippet: `// Live Driver Location Tracking with react-native-maps
useEffect(() => {
  const watchId = Geolocation.watchPosition(
    (position) => {
      const { latitude, longitude, heading } = position.coords;
      
      // Update marker coordinates in state
      setDriverCoords({ latitude, longitude });

      // Smoothly animate map camera to follow vehicle
      mapRef.current?.animateCamera({
        center: { latitude, longitude },
        heading: heading || 0,
        pitch: 40,
      });
    },
    (err) => console.log('Location watch error:', err),
    { enableHighAccuracy: true, distanceFilter: 10 }
  );

  return () => Geolocation.clearWatch(watchId);
}, []);`,
    },
    webview: {
      id: 'webview',
      shortTab: 'WebView Bridge',
      title: 'Bidirectional postMessage Data Bridge',
      category: 'WebViews & Lazyeye',
      icon: Share2,
      headline: 'Seamless Communication Between Web Apps & React Native',
      problem:
        'On the Lazyeye platform, the medical diagnostic exercise canvas was built in HTML5. When a child completed visual tests, the test scores and PDF report links needed to be sent to React Native native storage.',
      solution:
        'Engineered a postMessage bridge using react-native-webview. The web app calls window.ReactNativeWebView.postMessage(JSON.stringify(data)), and React Native listens via the onMessage handler to parse results, update state, and trigger offline PDF downloads.',
      metrics: [
        { label: 'Bridge Latency', value: '< 1 ms Speed' },
        { label: 'Data Delivery', value: '100% Reliable' },
        { label: 'Clinical PDF', value: 'Offline Download' },
      ],
      codeSnippet: `// React Native WebView onMessage Listener (Lazyeye)
const onWebViewMessage = (event) => {
  try {
    const data = JSON.parse(event.nativeEvent.data);
    
    if (data.type === 'TEST_COMPLETED') {
      // 1. Save clinical assessment score to local storage
      saveAssessmentScore(data.score);

      // 2. Trigger native PDF download for doctors/parents
      downloadReportPdf(data.reportPdfUrl);
    }
  } catch (error) {
    console.error('Invalid postMessage data', error);
  }
};

<WebView
  ref={webViewRef}
  source={{ uri: 'https://lazyeye.onrender.com/user' }}
  onMessage={onWebViewMessage}
/>`,
    },
    notifications: {
      id: 'notifications',
      shortTab: 'Push & Dispatch',
      title: 'Background Push Alerts & Ride Dispatch',
      category: 'Push & Background',
      icon: Bell,
      headline: 'Reliable Trip Alerts in Foreground, Background & Killed States',
      problem:
        'Drivers often have the screen locked or app minimized when a new ride request is dispatched. The app must wake up and display a high-priority heads-up notification with sound so the driver never misses a booking.',
      solution:
        'Integrated Firebase Cloud Messaging (@react-native-firebase/messaging) with Notifee. Configured a background message handler to display high-importance sound and vibration alerts, and implemented deep linking to open the ride acceptance screen in one tap.',
      metrics: [
        { label: 'Dispatch Alerts', value: 'Instant Delivery' },
        { label: 'App States', value: 'Foreground & Killed' },
        { label: 'Deep Linking', value: '1-Tap Acceptance' },
      ],
      codeSnippet: `// Background Ride Dispatch Handler (FCM + Notifee)
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  const { tripId, pickupAddress, fare } = remoteMessage.data;

  // Display high-priority trip alert with sound & action
  await notifee.displayNotification({
    title: '🚕 New Ride Request Available',
    body: \`Pickup: \${pickupAddress} • ₹\${fare}\`,
    android: {
      channelId: 'dispatch_alerts',
      importance: AndroidImportance.HIGH,
      pressAction: { id: 'accept_trip', launchActivity: 'default' },
    },
    data: { tripId },
  });
});`,
    },
    storage: {
      id: 'storage',
      shortTab: 'Fast Caching',
      title: 'Instant Local Caching with MMKV',
      category: 'Storage & Caching',
      icon: Database,
      headline: 'Sub-Millisecond Cold Starts & Offline State Management',
      problem:
        'Standard AsyncStorage is asynchronous and communicates over the React Native bridge. Reading user authentication tokens and active ride status during app launch caused noticeable white-screen loading delays.',
      solution:
        'Implemented Tencent MMKV for fast synchronous key-value storage. Replaced asynchronous storage calls with sub-millisecond synchronous reads, allowing the app to restore user session and cached trips immediately on launch without network waiting.',
      metrics: [
        { label: 'Read/Write Speed', value: '< 0.1 ms (MMKV)' },
        { label: 'Cold-Start Time', value: 'Instant Launch' },
        { label: 'Offline Mode', value: 'Full Local Cache' },
      ],
      codeSnippet: `// Fast Synchronous Storage with MMKV
import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV();

// Save active ride state synchronously (0.1ms)
export const saveActiveTrip = (tripData) => {
  storage.set('active_trip', JSON.stringify(tripData));
};

// Retrieve cached trip on app launch without awaiting promises
export const getActiveTrip = () => {
  const trip = storage.getString('active_trip');
  return trip ? JSON.parse(trip) : null;
};`,
    },
  };

  const currentArch = architectures[activeTab];

  return (
    <section id="architecture" className="py-20 sm:py-24 relative bg-[#090d16]/70 border-t border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>PRACTICAL MOBILE ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build Production Mobile Features
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Real solutions implemented in production React Native apps — clean, scalable, and battle-tested across ride-hailing ecosystems and medical diagnostic platforms.
          </p>
        </div>

        {/* Selector Tabs: Responsive 2-Col on Mobile, 4-Col on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {Object.values(architectures).map((arch) => {
            const Icon = arch.icon;
            const isSelected = activeTab === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setActiveTab(arch.id)}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between gap-2 sm:gap-3 min-w-0 ${
                  isSelected
                    ? 'bg-[#0f172a] border-sky-500/50 shadow-lg shadow-sky-500/10'
                    : 'bg-[#0c111e]/70 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                      isSelected ? 'bg-blue-600/20 text-sky-400' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold truncate text-slate-300">
                    {arch.shortTab}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold line-clamp-1 sm:line-clamp-2 leading-snug ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                  {arch.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Interactive Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0c111e] border border-slate-800/90 shadow-2xl p-4 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Problem, Solution & Metrics */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 min-w-0">
              <div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 font-semibold inline-block">
                  {currentArch.category}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-2 sm:mt-3 leading-snug">
                  {currentArch.headline}
                </h3>
              </div>

              {/* Challenge Box */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-1">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold">
                  The Engineering Challenge:
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentArch.problem}
                </p>
              </div>

              {/* Solution Box */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  The Architecture Solution:
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentArch.solution}
                </p>
              </div>

              {/* Performance Metrics Bar: Responsive Mobile Stacking */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
                {currentArch.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#080c14] border border-slate-800 flex sm:flex-col items-center sm:justify-center justify-between gap-1 text-left sm:text-center"
                  >
                    <div className="text-xs sm:text-base font-mono font-extrabold text-sky-300">
                      {m.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Code & Implementation Flow */}
            <div className="lg:col-span-5 min-w-0 w-full">
              <div className="rounded-xl sm:rounded-2xl bg-[#060911] border border-slate-800 overflow-hidden shadow-xl">
                {/* Mac OS Window Header */}
                <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0a0f1d] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate max-w-[180px]">
                    {activeTab === 'maps' && 'DriverTracking.jsx'}
                    {activeTab === 'webview' && 'WebViewBridge.jsx'}
                    {activeTab === 'notifications' && 'BackgroundFCM.js'}
                    {activeTab === 'storage' && 'MMKVStorage.js'}
                  </span>
                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                </div>

                {/* Code Body */}
                <pre className="p-3 sm:p-5 text-[10px] sm:text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed bg-[#050811] max-w-full">
                  <code>{currentArch.codeSnippet}</code>
                </pre>

                {/* Footer Status */}
                <div className="px-3.5 py-2 bg-[#090d18] border-t border-slate-800/80 flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Production Ready
                  </span>
                  <span>React Native</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

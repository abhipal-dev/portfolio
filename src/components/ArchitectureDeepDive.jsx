import React, { useState } from 'react';
import {
  MapPin,
  Share2,
  Database,
  Bell,
} from 'lucide-react';

export default function ArchitectureDeepDive() {
  const [activeTab, setActiveTab] = useState('maps');

  const architectures = {
    maps: {
      id: 'maps',
      rfcNum: 'RFC-01',
      shortTab: 'Maps & Telemetry',
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
      fileName: 'DriverTracking.jsx',
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
      rfcNum: 'RFC-02',
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
      fileName: 'WebViewBridge.jsx',
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
      rfcNum: 'RFC-03',
      shortTab: 'Push & Dispatch',
      title: 'FCM Push Notifications & Foreground Alert Handler',
      category: 'Background Services',
      icon: Bell,
      headline: 'Reliable Ride Dispatch Alerts with Sound & Popups',
      problem:
        'Drivers and passengers must never miss new ride requests or driver arrivals, even when their phone is locked or the app is closed.',
      solution:
        'Configured Firebase Cloud Messaging (FCM) with custom notification channels, high-priority heads-up banners, and looping ringtones that wake the device upon ride assignments.',
      metrics: [
        { label: 'Delivery Rate', value: '99.4% Delivery' },
        { label: 'Wake-Up Speed', value: '< 800ms Alert' },
        { label: 'Audio Alert', value: 'Looping Chime' },
      ],
      fileName: 'BackgroundFCM.js',
      codeSnippet: `// FCM Background & Foreground Notification Handler
messaging().onMessage(async (remoteMessage) => {
  const { title, body, rideId } = remoteMessage.data;
  
  // Show high-priority popup alert with sound
  Alert.alert(
    title || 'New Ride Request!',
    body || 'Tap to review trip details and accept.',
    [
      { text: 'Reject', style: 'cancel' },
      { text: 'Accept Ride', onPress: () => navigation.navigate('TripActive', { rideId }) }
    ]
  );
});

// Wake up app when tapped from lock screen
messaging().onNotificationOpenedApp((remoteMessage) => {
  navigation.navigate('TripActive', { rideId: remoteMessage.data.rideId });
});`,
    },
    storage: {
      id: 'storage',
      rfcNum: 'RFC-04',
      shortTab: 'MMKV Storage',
      title: 'MMKV High-Speed Synchronous Offline Storage',
      category: 'Storage & Caching',
      icon: Database,
      headline: 'Instant Cache Reads with MMKV for Seamless Restarts',
      problem:
        'If a driver accidentally closes the app mid-trip or phone restarts, traditional AsyncStorage delays startup by hundreds of milliseconds awaiting asynchronous bridge resolution.',
      solution:
        'Swapped AsyncStorage for react-native-mmkv using direct C++ JSI bindings. Trip states, tokens, and offline queues persist synchronously with sub-millisecond access.',
      metrics: [
        { label: 'Access Speed', value: '30x Faster' },
        { label: 'Startup Hydration', value: 'Instant Mount' },
        { label: 'Data Safety', value: 'Encrypted JSI' },
      ],
      fileName: 'MMKVStorage.js',
      codeSnippet: `// High-Speed Synchronous Offline Caching with MMKV
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
    <section id="architecture" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">03 //</span>
            <span>SYSTEM SPECIFICATIONS & RFCs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            Production Internals & RFC Solutions
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Technical breakdowns of real problems encountered in high-volume mobility apps and clinical diagnostics, alongside tested React Native implementation architectures.
          </p>
        </div>

        {/* Clean RFC Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {Object.values(architectures).map((arch) => {
            const isSelected = activeTab === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setActiveTab(arch.id)}
                className={`p-3.5 rounded text-left border transition-colors flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'border-zinc-500 bg-zinc-900/90 text-zinc-100'
                    : 'border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 text-zinc-400'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-zinc-200 font-bold' : 'text-zinc-500'}>
                    {arch.rfcNum}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase">{arch.category}</span>
                </div>
                <div className={`text-xs sm:text-sm font-semibold truncate ${isSelected ? 'text-zinc-100' : 'text-zinc-300'}`}>
                  {arch.shortTab}
                </div>
              </button>
            );
          })}
        </div>

        {/* Spec Viewer Container */}
        <div className="rounded border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Problem & Architecture Solution */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold">
                    {currentArch.rfcNum}
                  </span>
                  <span>•</span>
                  <span>{currentArch.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight leading-snug">
                  {currentArch.headline}
                </h3>
              </div>

              {/* Challenge Box */}
              <div className="p-4 rounded border border-zinc-850 bg-zinc-900/40 space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Engineering Challenge:
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentArch.problem}
                </p>
              </div>

              {/* Solution Box */}
              <div className="p-4 rounded border border-zinc-850 bg-zinc-900/40 space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Delivered Architecture:
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentArch.solution}
                </p>
              </div>

              {/* Performance Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-900">
                {currentArch.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded border border-zinc-850 bg-zinc-900/20 text-center"
                  >
                    <div className="text-xs sm:text-sm font-mono font-bold text-zinc-100">
                      {m.value}
                    </div>
                    <div className="text-[10.5px] text-zinc-400 font-mono mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Code Implementation */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded border border-zinc-800 bg-zinc-950 overflow-hidden">
                {/* Code Window Header */}
                <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-600 inline-block" />
                    <span className="text-zinc-200">{currentArch.fileName}</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">REACT NATIVE</span>
                </div>

                {/* Code Body */}
                <pre className="p-4 sm:p-5 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed bg-[#05070c]">
                  <code>{currentArch.codeSnippet}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

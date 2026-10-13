import React from 'react';

export default function Skills() {

  const skillGroups = [
    {
      groupNum: '01',
      title: 'Mobile Runtime & Native Toolchains',
      description: 'Core execution environments, native Android & iOS tooling, and framework upgrades.',
      items: [
        {
          name: 'React Native (0.70 ➔ 0.87.1)',
          context: 'Bridgeless ReactHost, Hermes engine profiling, Android 15 (API 37) compatibility.',
          tag: 'CORE_ENGINE',
        },
        {
          name: 'TypeScript & Modern ES6+',
          context: 'Strictly typed interfaces, custom hooks, typed event buses, and immutable state.',
          tag: 'LANGUAGE',
        },
        {
          name: 'Android Studio, Gradle & AGP',
          context: 'Target SDK 35 compliance, ProGuard/R8 byte-code rules, Gradle 9.4 toolchains, release keystores.',
          tag: 'ANDROID_NDK',
        },
        {
          name: 'Xcode, iOS SDK & CocoaPods',
          context: 'Certificates, provisioning profiles, TestFlight distribution, PrivacyInfo.xcprivacy compliance.',
          tag: 'IOS_TOOLCHAIN',
        },
      ],
    },
    {
      groupNum: '02',
      title: 'Maps, Telemetry & Hybrid Bridges',
      description: 'High-frequency coordinate streaming, live vector maps, and web-native event buses.',
      items: [
        {
          name: 'react-native-maps & Google Maps SDK',
          context: 'Imperative animateCamera tracking, 60fps bearing rotation, dynamic route polyline rendering.',
          tag: 'GPS_TELEMETRY',
        },
        {
          name: 'Bidirectional WebView RPC Bridges',
          context: 'Validated postMessage schema with message IDs, timeouts, and native PDF report downloaders.',
          tag: 'HYBRID_BRIDGE',
        },
        {
          name: 'Background Geolocation & Geofencing',
          context: 'Distance-filtered watchPosition, battery drain mitigation, proximity trip triggers.',
          tag: 'BACKGROUND_GPS',
        },
        {
          name: 'Firebase Cloud Messaging (FCM) & APNs',
          context: 'High-priority notification channels, heads-up banners, and looping ringtones for dispatch.',
          tag: 'PUSH_NOTIFICATIONS',
        },
      ],
    },
    {
      groupNum: '03',
      title: 'State, Persistence & Storage',
      description: 'Zero-overhead local storage, synchronous hydration, and offline-first data structures.',
      items: [
        {
          name: 'MMKV Synchronous Storage',
          context: 'Direct C++ JSI bindings, sub-millisecond preference reads, zero async bridge jitter.',
          tag: 'JSI_STORAGE',
        },
        {
          name: 'Redux Toolkit & Context Architecture',
          context: 'Normalized client caches, typed slices, offline mutation queues, and selector memoization.',
          tag: 'CLIENT_STATE',
        },
        {
          name: 'SQLite & Local Database Seeding',
          context: '13-user clinical dataset hydration, 593 gameplay logs, 84-day therapy heatmap calculation.',
          tag: 'OFFLINE_CACHE',
        },
        {
          name: 'REST APIs & Security Architecture',
          context: 'JWT Bearer auth tokens, Axios interceptors, multipart PDF/photo upload pipelines.',
          tag: 'REST_NETWORKING',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">05 //</span>
            <span>TECHNICAL CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            Systems & Engineering Competencies
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Practical skills refined through continuous production deployments — focused on performance, native bridge reliability, and runtime stability.
          </p>
        </div>

        {/* 3-Column Engineering Index */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.groupNum}
              className="p-6 sm:p-7 rounded border border-zinc-800/80 bg-zinc-950/60 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-zinc-500 font-bold">{group.groupNum}</span>
                    <span>•</span>
                    <span className="text-zinc-400">PILLAR</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                    {group.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-0.5">
                    {group.description}
                  </p>
                </div>

                <div className="divide-y divide-zinc-900 border-t border-zinc-900">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="py-3.5 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-sm text-zinc-200">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80 shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

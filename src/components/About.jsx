import React from 'react';

export default function About() {

  const principles = [
    {
      num: '01',
      tag: 'REACT-NATIVE-MAPS // ZERO_RE_RENDER_TELEMETRY',
      title: '60 FPS Map Telemetry Without React Tree Re-renders',
      description:
        'In high-frequency mobility apps (TaxiMuscat), driver coordinates stream at 1–5 Hz. Binding raw GPS ticks to React state causes constant component re-renders that stall the JS thread. I decouple location streaming into mutable refs and drive camera positioning imperatively via animateCamera with bearing interpolation.',
      detail: 'Measured: Steady 60fps gesture handling during continuous route polyline streaming.',
    },
    {
      num: '02',
      tag: 'MMKV_JSI // ZERO_OVERHEAD_PERSISTENCE',
      title: 'Synchronous MMKV Persistence Over Async Bridge Jitter',
      description:
        'AsyncStorage introduces serial asynchronous bridge round-trips that introduce screen flicker and race conditions during initial app mount. In LazyEye Mobile, I implemented synchronous MMKV with zero-overhead JSI bindings, enabling instant preference hydration, offline tokens, and clinical settings on the very first frame.',
      detail: 'Zero bridge serialization penalty • 30x faster read/write throughput than AsyncStorage.',
    },
    {
      num: '03',
      tag: 'WEBVIEW_BRIDGE // VALIDATED_POSTMESSAGE_RPC',
      title: 'Bidirectional WebView RPC Bridges for Clinical Engines',
      description:
        'For complex digital therapeutics requiring HTML5 Canvas physics, I architect typed postMessage bridges with sequence IDs, response acknowledgments, and timeout guards. Native sensors stream calibrated chromatic filter coefficients to the web canvas, and score events pipe back to native state reliably.',
      detail: 'Zero frame drop across 11 playable dichoptic clinical game engines.',
    },
    {
      num: '04',
      tag: 'STORE_DISCIPLINE // ZERO_CRASH_UPGRADE_LIFECYCLE',
      title: 'Production Store Hygiene & Long-Term Upgrade Discipline',
      description:
        'Having upgraded production codebases from React Native 0.70 through to 0.87.1, I navigate major native toolchain breaking changes — Gradle 9.4/AGP 9.2, Android Target SDK 35 edge-to-edge enforcements, Hermes memory profiling, CocoaPods linkage issues, and ProGuard/R8 byte-code stripping for lean APK binaries.',
      detail: '4–5 apps published on each store • 100+ production updates deployed.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">02 //</span>
            <span>SYSTEMS PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            How I Engineer Mobile Software
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-1">
            Mobile applications run in inherently hostile environments — spotty 3G/LTE edge networks, aggressive OS battery terminators, device thermal throttling, and disparate hardware screens. My work is focused on building resilient, deterministic architectures that respect device hardware and never leave users stranded.
          </p>
        </div>

        {/* 4 Architectural Principles (Structured Editorial List) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((p) => (
            <div
              key={p.num}
              className="p-6 sm:p-7 rounded border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-zinc-500 font-bold">{p.num}</span>
                  <span className="text-[11px] text-zinc-400 truncate max-w-[280px]">{p.tag}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="text-emerald-400">▹</span>
                <span>{p.detail}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

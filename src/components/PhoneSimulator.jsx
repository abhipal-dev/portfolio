import React, { useState, useEffect } from 'react';
import { Navigation, Wifi, Battery, MapPin, Car, Radio, Shield, Check, Phone, ArrowUpRight, Play, RefreshCw, Terminal, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function PhoneSimulator() {
  const { currentTheme } = useTheme();
  const [activeScreen, setActiveScreen] = useState('rider');
  const [driverAccepted, setDriverAccepted] = useState(false);
  const [speed, setSpeed] = useState(44);
  const [radarPings, setRadarPings] = useState(3);

  // Simulate subtle speed fluctuation for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => Math.min(62, Math.max(32, prev + Math.floor(Math.random() * 7) - 3)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px]">
      
      {/* Background Ambient Glow */}
      <div className={`absolute -inset-2 rounded-[3.5rem] ${currentTheme.glow} blur-2xl opacity-60 pointer-events-none transition-colors duration-500`} />

      {/* Outer Phone Shell */}
      <div className="relative rounded-[3rem] bg-slate-900 border-[6px] border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
        
        {/* Top Speaker & Dynamic Island Notch */}
        <div className="relative bg-slate-950 px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none border-b border-slate-800/50">
          <span>09:41</span>
          {/* Dynamic Island Pill */}
          <div className="w-20 h-4 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center gap-1.5 px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] text-slate-300 font-sans font-medium tracking-tight">GPS LIVE</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Screen Viewport */}
        <div className="h-[430px] bg-slate-950/95 overflow-hidden flex flex-col justify-between relative">
          
          {/* Screen Content: RIDER APP */}
          {activeScreen === 'rider' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200">
              {/* Mini Map View */}
              <div className="relative h-[240px] rounded-2xl bg-[#070b14] border border-slate-800 overflow-hidden">
                {/* Map Grid Roads (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-20 40 L380 40 M-20 120 L380 120 M-20 200 L380 200" stroke="#334155" strokeWidth="6" />
                  <path d="M80 -20 L80 260 M180 -20 L180 260 M280 -20 L280 260" stroke="#334155" strokeWidth="6" />
                  {/* Dynamic Route Polyline */}
                  <path
                    d="M 60 170 Q 140 160 180 90 T 260 50"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeDasharray="6 3"
                  />
                </svg>

                {/* Pickup Marker */}
                <div className="absolute left-[50px] top-[155px] flex items-center gap-1">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-pulse-ring" />
                    <span className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
                      P
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[9px] font-mono text-emerald-300">
                    Pickup
                  </span>
                </div>

                {/* Moving Driver Car Marker */}
                <div className="absolute right-[55px] top-[40px] flex items-center gap-1 animate-car">
                  <div className="p-1 rounded-full bg-slate-900 border border-indigo-400 text-indigo-300 shadow-md">
                    <Car className="w-4 h-4" />
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[9px] font-mono text-indigo-300">
                    3m away
                  </span>
                </div>

                {/* Live ETA Floating Badge */}
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] font-mono flex items-center gap-1.5 shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-semibold">Driver Approaching</span>
                </div>
              </div>

              {/* Bottom Trip Sheet */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Toyota Camry (Hybrid)</div>
                    <div className="text-[10px] font-mono text-slate-400">UP-80-AB-1234 • White</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-emerald-400 font-mono">₹280.00</div>
                    <div className="text-[9px] text-slate-400 font-mono">Cash / UPI</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">Start Ride PIN:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold tracking-widest">
                    4 9 2 1
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Screen Content: DRIVER RADAR */}
          {activeScreen === 'driver' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200">
              {/* Telemetry Dashboard */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400">SPEED (GPS)</div>
                  <div className="text-2xl font-extrabold text-white font-mono">{speed} <span className="text-xs font-normal text-slate-400">km/h</span></div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400">IGNITION</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono mt-1 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE / ON
                  </div>
                </div>
              </div>

              {/* Radar Scanner View */}
              <div className="relative h-[160px] rounded-2xl bg-[#050912] border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* Circular Radar Rings */}
                <div className="absolute w-36 h-36 rounded-full border border-slate-800" />
                <div className="absolute w-24 h-24 rounded-full border border-slate-800/80" />
                <div className="absolute w-12 h-12 rounded-full border border-slate-700/60" />
                
                {/* Radar Sweep Line */}
                <div className="absolute w-36 h-36 rounded-full overflow-hidden animate-radar pointer-events-none">
                  <div className="w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/30 to-transparent" />
                </div>

                {/* Center Vehicle Marker */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40">
                  <Car className="w-3.5 h-3.5" />
                </div>

                {/* Dispatched Pin nearby */}
                <div className="absolute right-8 top-6 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <div className="absolute right-8 top-6 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white" />
              </div>

              {/* Incoming Trip Request Sheet */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white">New Ride Dispatch</span>
                  <span className="text-[10px] font-mono text-amber-400">1.4 km pickup</span>
                </div>
                <div className="text-[10px] text-slate-400 mb-2 font-mono">Agra Cantt ➔ Taj East Gate</div>
                <button
                  onClick={() => setDriverAccepted(!driverAccepted)}
                  className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                    driverAccepted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold hover:brightness-110 active:scale-95'
                  }`}
                >
                  {driverAccepted ? '✓ Trip Accepted — Navigating' : 'Accept Ride (₹320)'}
                </button>
              </div>
            </div>
          )}

          {/* Screen Content: KIOSK STATION */}
          {activeScreen === 'kiosk' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center">
                  <div className="text-[11px] font-bold text-indigo-300">WALK-UP KIOSK TERMINAL</div>
                  <div className="text-[9px] text-slate-400 font-mono">Hotel Radisson • Station #02</div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Quick Destinations:
                </div>

                {['Airport Terminal 1', 'Railway Station', 'Taj Mahal East Gate'].map((dest, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-indigo-500/40 cursor-pointer"
                  >
                    <span className="text-xs font-medium text-slate-200">{dest}</span>
                    <span className="text-[11px] font-mono text-indigo-400 font-bold">Book ➔</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-1">
                <div className="text-[10px] text-slate-400 font-mono">Instant Driver Assigned</div>
                <div className="text-sm font-bold text-white">Driver: Vikram Singh</div>
                <div className="text-[10px] font-mono text-emerald-400">Arriving in 2 mins at Kiosk Bay</div>
              </div>
            </div>
          )}

          {/* Screen Content: WEBVIEW BRIDGE CONSOLE */}
          {activeScreen === 'bridge' && (
            <div className="flex-1 p-3 flex flex-col justify-between animate-in fade-in duration-200 font-mono text-[10.5px]">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <div className="text-indigo-400 font-bold text-[11px] mb-1">WebView postMessage Bridge</div>
                <div className="text-[9px] text-slate-400">Bidirectional Telemetry Stream</div>
              </div>

              <div className="flex-1 my-2 p-2 rounded-lg bg-[#050811] border border-slate-800 overflow-y-auto space-y-1.5 text-slate-400 text-[10px]">
                <div className="text-emerald-400">&gt; [WebView ➔ Native]</div>
                <div className="pl-2 text-slate-300">postMessage(&#123; type: "CANVAS_INTERACTION", score: 98, quota: 15 &#125;)</div>
                <div className="text-cyan-400">&gt; [Native ➔ WebView]</div>
                <div className="pl-2 text-slate-300">injectJavaScript("window.__syncTelemetry()")</div>
                <div className="text-purple-400">&gt; [MMKV Cache]</div>
                <div className="pl-2 text-slate-300">Cached 14.8kb payload in 0.2ms</div>
                <div className="text-amber-400">&gt; [PDF Bridge]</div>
                <div className="pl-2 text-slate-300">Native document written to storage</div>
              </div>

              <div className="p-1.5 rounded bg-slate-900 text-[9px] text-slate-400 text-center border border-slate-800">
                ● 100% Zero-Loss Communication
              </div>
            </div>
          )}

          {/* Bottom Screen Switcher Bar */}
          <div className="bg-slate-950 px-2 py-2 border-t border-slate-800/80 grid grid-cols-4 gap-1">
            <button
              onClick={() => setActiveScreen('rider')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeScreen === 'rider'
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🗺️ Rider
            </button>
            <button
              onClick={() => setActiveScreen('driver')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeScreen === 'driver'
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🚘 Radar
            </button>
            <button
              onClick={() => setActiveScreen('kiosk')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeScreen === 'kiosk'
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📟 Kiosk
            </button>
            <button
              onClick={() => setActiveScreen('bridge')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeScreen === 'bridge'
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ⚡ Bridge
            </button>
          </div>

        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="bg-slate-950 py-1.5 flex justify-center">
          <div className="w-28 h-1 bg-slate-700 rounded-full" />
        </div>
      </div>

    </div>
  );
}

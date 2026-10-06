import React, { useState, useEffect } from 'react';
import {
  Wifi,
  Battery,
  MapPin,
  Car,
  Radio,
  Navigation,
  Shield,
  Clock,
  Phone,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function MobileShowcase() {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('rider');
  const [driverAccepted, setDriverAccepted] = useState(false);
  const [speed, setSpeed] = useState(48);
  const [livePings, setLivePings] = useState(24);

  // Subtle telemetry jitter for realistic live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => Math.min(64, Math.max(38, prev + Math.floor(Math.random() * 5) - 2)));
      setLivePings((prev) => (prev === 24 ? 25 : 24));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px]">
      
      {/* Ambient Backlight (Sleek, Not Overwhelming) */}
      <div
        className={`absolute -inset-2 rounded-[3.5rem] ${currentTheme.glow} blur-2xl opacity-50 pointer-events-none transition-colors duration-500`}
      />

      {/* Modern High-End Device Chassis */}
      <div className="relative rounded-[3rem] bg-[#0c1019] border-[5px] border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
        
        {/* iOS Dynamic Island & Status Bar */}
        <div className="relative bg-[#090d16] px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none border-b border-slate-800/60">
          <span className="font-semibold text-slate-300">09:41</span>
          
          {/* Dynamic Island Pill */}
          <div className="h-4 px-2.5 bg-black rounded-full border border-slate-800 flex items-center justify-center gap-1.5 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] text-slate-300 font-sans font-medium tracking-tight">
              {activeTab === 'rider' && 'Rider GPS Active'}
              {activeTab === 'driver' && 'Driver Telemetry'}
              {activeTab === 'kiosk' && 'Terminal Mode'}
              {activeTab === 'bridge' && 'postMessage Bridge'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[10px] text-slate-500 font-mono">5G</span>
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Viewport Screen Content */}
        <div className="h-[440px] bg-[#070a12] overflow-hidden flex flex-col justify-between relative select-none">
          
          {/* TAB 1: RIDER APPLICATION PREVIEW */}
          {activeTab === 'rider' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200">
              {/* Realistic Map Viewport */}
              <div className="relative h-[240px] rounded-2xl bg-[#0b101c] border border-slate-800/80 overflow-hidden shadow-inner">
                {/* Vector Map Arterial Roads */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  {/* Grid of secondary roads */}
                  <path d="M-20 45 L380 45 M-20 120 L380 120 M-20 195 L380 195" stroke="#1e293b" strokeWidth="4" />
                  <path d="M70 -20 L70 260 M165 -20 L165 260 M260 -20 L260 260" stroke="#1e293b" strokeWidth="4" />
                  {/* Highway */}
                  <path d="M-10 80 Q 150 110 370 60" stroke="#334155" strokeWidth="8" fill="none" />
                  {/* Real-time Dynamic Route Polyline */}
                  <path
                    d="M 60 170 C 110 160, 140 100, 240 55"
                    fill="none"
                    stroke="url(#routeGrad)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                  />
                </svg>

                {/* Pickup Location Marker */}
                <div className="absolute left-[52px] top-[152px] flex items-center gap-1.5">
                  <div className="relative">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-extrabold shadow-lg">
                      P
                    </span>
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-[#0f172a]/95 border border-slate-700 text-[9px] font-mono text-emerald-300 shadow">
                    Agra Cantt
                  </div>
                </div>

                {/* Approaching Driver Marker */}
                <div className="absolute right-[65px] top-[42px] flex items-center gap-1.5">
                  <div className="p-1 rounded-full bg-blue-600 text-white border-2 border-white shadow-lg animate-pulse">
                    <Car className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-[#0f172a]/95 border border-slate-700 text-[9px] font-mono text-sky-300 shadow">
                    2m away (850m)
                  </div>
                </div>

                {/* Live Floating Status Header */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <div className="px-2.5 py-1 rounded-lg bg-[#0c1220]/90 border border-slate-800 text-[10px] font-mono flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-semibold">Driver Dispatched</span>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-[#0c1220]/90 border border-slate-800 text-[10px] font-mono text-slate-300">
                    GPS: {livePings} Hz
                  </div>
                </div>
              </div>

              {/* Ride Details Bottom Sheet */}
              <div className="p-3 rounded-xl bg-[#0c111e] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white border border-slate-700">
                      VS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        Vikram Singh
                        <span className="text-[10px] text-amber-400 font-mono">★ 4.9</span>
                      </div>
                      <div className="text-[9.5px] font-mono text-slate-400">Toyota Camry • UP-80-AB-1234</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-emerald-400 font-mono">₹280.00</div>
                    <div className="text-[9px] text-slate-400 font-mono">Paid via UPI</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">Start Ride Verification OTP:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold tracking-widest">
                    4 9 2 1
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DRIVER PARTNER CONSOLE */}
          {activeTab === 'driver' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200">
              {/* Telemetry Metric Gauges */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[9px] font-mono text-slate-400 uppercase">GPS Speed</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">{speed} <span className="text-[9px] font-normal text-slate-500">km/h</span></div>
                </div>
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[9px] font-mono text-slate-400 uppercase">Heading</div>
                  <div className="text-lg font-bold text-sky-400 font-mono mt-0.5">NE 42°</div>
                </div>
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[9px] font-mono text-slate-400 uppercase">Shift Total</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">₹2,480</div>
                </div>
              </div>

              {/* Live Telemetry Map Tracker */}
              <div className="relative h-[170px] rounded-2xl bg-[#0b101c] border border-slate-800 flex flex-col justify-between p-3 overflow-hidden">
                <div className="flex items-center justify-between text-[10px] font-mono z-10">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE & DISPATCHING
                  </span>
                  <span className="text-slate-400">Lat: 27.1751° N</span>
                </div>

                {/* Subtle Radar Concentric Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-28 h-28 rounded-full border border-sky-400" />
                  <div className="w-16 h-16 rounded-full border border-sky-400" />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 border-t border-slate-800/80 pt-2">
                  <span>Accuracy: ±1.8m (Fused)</span>
                  <span className="text-sky-300">MMKV Cache: 0.1ms</span>
                </div>
              </div>

              {/* Incoming Ride Dispatch Card */}
              <div className="p-3 rounded-xl bg-[#0c111e] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-bold text-white">Ride Dispatch Alert</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold">1.2 km pickup</span>
                </div>
                <div className="text-[10px] font-mono text-slate-300 flex items-center justify-between">
                  <span>Agra Cantt ➔ Taj East Gate</span>
                  <span className="text-emerald-400 font-bold">Fare: ₹320</span>
                </div>
                <button
                  onClick={() => setDriverAccepted(!driverAccepted)}
                  className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                    driverAccepted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white active:scale-95'
                  }`}
                >
                  {driverAccepted ? '✓ Trip Accepted — Navigating Route' : 'Accept Ride Request'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: WALK-UP KIOSK TERMINAL */}
          {activeTab === 'kiosk' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center">
                  <div className="text-xs font-bold text-sky-300">WALK-UP KIOSK TERMINAL</div>
                  <div className="text-[9.5px] text-slate-400 font-mono">Hotel Radisson Blu • Station #02</div>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 pt-1">
                  Instant Booking Hubs:
                </div>

                {[
                  { name: 'Airport Terminal 1 (IGR)', eta: '2 mins', fare: '₹450' },
                  { name: 'Agra Fort Heritage Bay', eta: '3 mins', fare: '₹180' },
                  { name: 'Taj Mahal East Gate', eta: '1 min', fare: '₹220' },
                ].map((station, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-[#0c111e] border border-slate-800 flex items-center justify-between hover:border-sky-500/40 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-medium text-white">{station.name}</div>
                      <div className="text-[9.5px] font-mono text-emerald-400">Driver Bay ETA: {station.eta}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold font-mono text-sky-400">{station.fare}</div>
                      <div className="text-[9px] text-slate-400 font-mono">Book ➔</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-2.5 rounded-xl bg-[#0c111e] border border-slate-800 text-center text-[10px] font-mono text-slate-400">
                Tablet Kiosk Mode (Locked Task) • Thermal Ticket / QR Support
              </div>
            </div>
          )}

          {/* TAB 4: WEBVIEW POSTMESSAGE BRIDGE (LAZYEYE) */}
          {activeTab === 'bridge' && (
            <div className="flex-1 p-3 flex flex-col justify-between animate-in fade-in duration-200 font-mono text-[10.5px]">
              <div className="p-2.5 rounded-xl bg-[#0c111e] border border-slate-800 text-slate-300">
                <div className="text-sky-400 font-bold text-xs flex items-center justify-between">
                  <span>WebView postMessage Bridge</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Sync Latency: &lt;1ms
                  </span>
                </div>
                <div className="text-[9.5px] text-slate-400 mt-0.5">
                  Bidirectional Event Channel (Lazyeye Platform)
                </div>
              </div>

              {/* Event Stream Terminal Output */}
              <div className="flex-1 my-2 p-2.5 rounded-xl bg-[#050811] border border-slate-800/90 overflow-y-auto space-y-1.5 text-[10px]">
                <div className="text-sky-400">&gt; [Web Canvas ➔ React Native]</div>
                <div className="pl-2 text-slate-300">
                  postMessage(&#123; type: "EXERCISE_SCORE", score: 98, eye: "OD" &#125;)
                </div>

                <div className="text-emerald-400">&gt; [React Native Bridge Handler]</div>
                <div className="pl-2 text-slate-300">
                  onMessage: payload validated with SHA-256 token
                </div>

                <div className="text-purple-400">&gt; [MMKV Native Persistence]</div>
                <div className="pl-2 text-slate-300">
                  Wrote 14.8kb telemetry blob in 0.2ms
                </div>

                <div className="text-amber-400">&gt; [Clinical PDF Pipeline]</div>
                <div className="pl-2 text-slate-300">
                  RNFS.downloadFile() ➔ Saved to device storage
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#0c111e] text-[9.5px] text-slate-400 text-center border border-slate-800 flex items-center justify-center gap-1.5">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Zero Data Loss • Strict Cross-Origin Validation</span>
              </div>
            </div>
          )}

          {/* Bottom Screen Navigation Tab Bar */}
          <div className="bg-[#090d16] px-2 py-2 border-t border-slate-800/80 grid grid-cols-4 gap-1">
            <button
              onClick={() => setActiveTab('rider')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeTab === 'rider'
                  ? 'bg-blue-600/20 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Rider
            </button>
            <button
              onClick={() => setActiveTab('driver')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeTab === 'driver'
                  ? 'bg-blue-600/20 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Driver
            </button>
            <button
              onClick={() => setActiveTab('kiosk')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeTab === 'kiosk'
                  ? 'bg-blue-600/20 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Kiosk
            </button>
            <button
              onClick={() => setActiveTab('bridge')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                activeTab === 'bridge'
                  ? 'bg-blue-600/20 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bridge
            </button>
          </div>

        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="bg-[#090d16] py-1.5 flex justify-center">
          <div className="w-28 h-1 bg-slate-700 rounded-full" />
        </div>
      </div>

    </div>
  );
}

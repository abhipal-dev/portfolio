import React, { useState, useEffect } from 'react';
import {
  Wifi,
  Battery,
  Car,
  Play,
  Eye,
} from 'lucide-react';

export default function MobileShowcase() {
  const [activeTab, setActiveTab] = useState('rider');
  const [driverAccepted, setDriverAccepted] = useState(false);
  const [speed, setSpeed] = useState(48);
  const [livePings, setLivePings] = useState(24);
  const [lazyEyeEngineMode, setLazyEyeEngineMode] = useState('offline'); // 'offline' | 'live'
  const [lazyEyeScore, setLazyEyeScore] = useState(127);
  const [sessionStarted, setSessionStarted] = useState(false);

  // Subtle telemetry jitter for realistic live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => Math.min(64, Math.max(38, prev + Math.floor(Math.random() * 5) - 2)));
      setLivePings((prev) => (prev === 24 ? 25 : 24));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[315px] sm:max-w-[340px]">

      {/* Modern High-End Device Chassis */}
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-[#0c1019] border-[4px] sm:border-[5px] border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
        
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
              {activeTab === 'lazyeye' && 'LazyEye Mobile • RN 0.87.1'}
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

          {/* TAB 4: LAZYEYE MOBILE DIGITAL THERAPEUTICS PREVIEW */}
          {activeTab === 'lazyeye' && (
            <div className="flex-1 p-3 flex flex-col justify-between animate-in fade-in duration-200 text-slate-100 select-none">
              {/* App Top Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center relative overflow-hidden">
                    <span className="w-2 h-4 bg-rose-500 rounded-l-full" />
                    <span className="w-2 h-4 bg-sky-500 rounded-r-full" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white leading-none">LazyEye Therapy</div>
                    <div className="text-[8.5px] text-sky-400 font-mono mt-0.5">Vision Patient • Abhishek</div>
                  </div>
                </div>

                {/* Dual Engine Switcher Button */}
                <button
                  onClick={() => setLazyEyeEngineMode((m) => (m === 'offline' ? 'live' : 'offline'))}
                  className={`px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold transition-all border ${
                    lazyEyeEngineMode === 'offline'
                      ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                      : 'bg-sky-500/15 text-sky-300 border-sky-400/30'
                  }`}
                  title="Toggle between offline local HTML5 canvas engines and live Render web portal"
                >
                  {lazyEyeEngineMode === 'offline' ? '⚡ OFFLINE ENGINE' : '● LIVE CLOUD'}
                </button>
              </div>

              {/* Patient Banner & Streak */}
              <div className="flex items-center justify-between my-1.5 p-2 rounded-xl bg-[#0c111e] border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center font-bold text-xs text-white shadow-sm">
                      AP
                    </div>
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-black" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Abhishek Pal</div>
                    <div className="text-[9px] text-slate-400 font-mono">Active Clinical Rx</div>
                  </div>
                </div>

                <div className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold font-mono flex items-center gap-1">
                  <span>🔥</span>
                  <span>4d streak</span>
                </div>
              </div>

              {/* Daily Regimen Card (Real SQLite Metrics) */}
              <div className="p-2.5 rounded-xl bg-gradient-to-b from-[#0c1324] to-[#070b16] border border-sky-500/30 shadow-md space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-mono text-slate-400 font-bold tracking-wider">TODAY'S REGIMEN</span>
                  <span className="font-mono text-sky-400 font-bold">25 / 25 mins (100%)</span>
                </div>

                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full w-full" />
                </div>

                {/* 3 Real Metrics */}
                <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-800/60 text-center font-mono">
                  <div>
                    <div className="text-xs font-bold text-white">20</div>
                    <div className="text-[8px] text-slate-400">Sessions</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400">395m</div>
                    <div className="text-[8px] text-slate-400">Total Time</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-sky-400">{lazyEyeScore}</div>
                    <div className="text-[8px] text-slate-400">High Score</div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  onClick={() => {
                    setSessionStarted(true);
                    setLazyEyeScore((s) => s + 5);
                    setTimeout(() => setSessionStarted(false), 1800);
                  }}
                  className="w-full py-1.5 px-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-[10.5px] flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20 active:scale-95 transition-all"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>
                    {sessionStarted ? '✓ +5 Pts! Telemetry Recorded' : 'Start Session • Snake Macular'}
                  </span>
                </button>
              </div>

              {/* Anaglyph Lens Status & Clinical Evidence Card */}
              <div className="p-2 rounded-lg bg-[#0c111e] border border-slate-800/80 flex items-center justify-between text-[9px] font-mono">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>OS Red</span>
                  <span className="text-slate-600">•</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>OD Green</span>
                </div>
                <span className="text-sky-400 font-semibold">NEI-NIH 2.4x Study</span>
              </div>

              {/* TaxiMuscat-Style Floating Bottom Tab Bar Preview */}
              <div className="p-1 rounded-2xl bg-[#0e1628] border border-slate-700/80 shadow-lg flex items-center justify-around text-[9px] font-mono">
                <div className="px-2.5 py-1 rounded-xl bg-sky-500/20 text-sky-300 font-bold border border-sky-400/40 flex flex-col items-center">
                  <span>Overview</span>
                  <span className="w-1 h-1 rounded-full bg-sky-400 mt-0.5" />
                </div>
                <div className="px-2 py-1 text-slate-400">Games (11)</div>
                <div className="px-2 py-1 text-slate-400">84d Map</div>
                <div className="px-2 py-1 text-slate-400">Profile</div>
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
              onClick={() => setActiveTab('lazyeye')}
              className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center flex items-center justify-center gap-1 ${
                activeTab === 'lazyeye'
                  ? 'bg-blue-600/20 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-2.5 h-2.5 text-sky-400" />
              <span>LazyEye</span>
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


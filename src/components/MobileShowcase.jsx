import React, { useState, useEffect } from 'react';
import {
  Wifi,
  Battery,
  Car,
  Bell,
  Navigation,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Radio,
  RotateCcw,
} from 'lucide-react';

export default function MobileShowcase() {
  const [activeTab, setActiveTab] = useState('fleet'); // 'fleet' | 'fcm' | 'driver' | 'kiosk'
  const [speed, setSpeed] = useState(52);
  const [livePings, setLivePings] = useState(25);
  const [ignitionOn, setIgnitionOn] = useState(true);
  const [geofenceBreach, setGeofenceBreach] = useState(false);
  const [fcmAlertActive, setFcmAlertActive] = useState(false);
  const [tripAccepted, setTripAccepted] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState('TrackingHAWK X3');

  // Subtle telemetry jitter for realistic live GPS telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      if (ignitionOn) {
        setSpeed((prev) => Math.min(68, Math.max(42, prev + Math.floor(Math.random() * 5) - 2)));
      } else {
        setSpeed(0);
      }
      setLivePings((prev) => (prev === 25 ? 24 : 25));
    }, 2000);
    return () => clearInterval(interval);
  }, [ignitionOn]);

  const triggerFcmAlert = () => {
    setFcmAlertActive(true);
    setTripAccepted(false);
  };

  const triggerGeofenceBreach = () => {
    setGeofenceBreach(true);
    setTimeout(() => setGeofenceBreach(false), 3500);
  };

  return (
    <div className="relative mx-auto w-full max-w-[325px] sm:max-w-[350px]">

      {/* Modern High-End Device Chassis */}
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-[#0c1019] border-[4px] sm:border-[5px] border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
        
        {/* iOS Dynamic Island & Status Bar */}
        <div className="relative bg-[#090d16] px-5 pt-3 pb-2 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none border-b border-slate-800/60 z-30">
          <span className="font-semibold text-slate-300">09:41</span>
          
          {/* Dynamic Island Pill */}
          <div className="h-4 px-2.5 bg-black rounded-full border border-slate-800 flex items-center justify-center gap-1.5 shadow-inner">
            <span className={`w-1.5 h-1.5 rounded-full ${ignitionOn ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span className="text-[9px] text-slate-300 font-sans font-medium tracking-tight">
              {activeTab === 'fleet' && (ignitionOn ? 'Fleet Telemetry • 60 FPS' : 'Ignition OFF • Idle')}
              {activeTab === 'fcm' && (fcmAlertActive ? '🚨 FCM Heads-Up Alert' : 'FCM Background Active')}
              {activeTab === 'driver' && 'Driver Bearing • NE 42°'}
              {activeTab === 'kiosk' && 'Tablet Lock-Task Mode'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[10px] text-slate-500 font-mono">5G</span>
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Viewport Screen Content */}
        <div className="h-[460px] bg-[#070a12] overflow-hidden flex flex-col justify-between relative select-none">
          
          {/* ========================================================================= */}
          {/* TAB 1: ENTERPRISE FLEET TELEMETRY (TrackingHAWK / KBFVTS / Ingecom)      */}
          {/* ========================================================================= */}
          {activeTab === 'fleet' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200 text-slate-100">
              
              {/* Vehicle Selector Pills */}
              <div className="grid grid-cols-3 gap-1 bg-[#090e1a] p-1 rounded-xl border border-slate-800/90 text-center text-[9px] font-mono">
                {[
                  { id: 'TrackingHAWK X3', label: 'TrackingHAWK' },
                  { id: 'KBFVTS X3', label: 'KBFVTS X3' },
                  { id: 'Ingecom GPS', label: 'Ingecom Pro' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVehicle(v.id)}
                    className={`py-1 rounded-lg transition-all ${
                      activeVehicle === v.id
                        ? 'bg-sky-600 text-white font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              {/* Vector Map Viewport */}
              <div className="relative h-[210px] rounded-2xl bg-[#0b101c] border border-slate-800/80 overflow-hidden shadow-inner mt-2">
                {/* SVG Vector Map */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="fleetRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                  {/* Road Grid */}
                  <path d="M-20 40 L380 40 M-20 110 L380 110 M-20 180 L380 180" stroke="#1e293b" strokeWidth="4" />
                  <path d="M60 -20 L60 260 M160 -20 L160 260 M260 -20 L260 260" stroke="#1e293b" strokeWidth="4" />
                  {/* Arterial Highway */}
                  <path d="M-10 70 Q 150 100 370 50" stroke="#334155" strokeWidth="7" fill="none" />
                  {/* Dynamic Route Polyline */}
                  <path
                    d="M 50 160 C 100 150, 130 90, 230 50"
                    fill="none"
                    stroke="url(#fleetRouteGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="6 3"
                  />
                </svg>

                {/* Geofence Boundary Circle */}
                <div
                  className={`absolute left-[30px] top-[40px] w-36 h-36 rounded-full border-2 border-dashed transition-all duration-300 pointer-events-none ${
                    geofenceBreach
                      ? 'border-amber-400 bg-amber-500/20 animate-pulse'
                      : 'border-emerald-500/30 bg-emerald-500/5'
                  }`}
                />

                {/* Live Vehicle Marker */}
                <div className="absolute right-[85px] top-[45px] flex items-center gap-1.5 z-10">
                  <div className={`p-1.5 rounded-full text-white border-2 border-white shadow-xl transition-all ${
                    ignitionOn ? 'bg-emerald-600 animate-pulse' : 'bg-slate-700'
                  }`}>
                    <Car className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-[#0f172a]/95 border border-slate-700 text-[9px] font-mono text-emerald-300 shadow">
                    UP-80-AB-1234
                  </div>
                </div>

                {/* Geofence Status Pill */}
                <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0b1324]/90 border border-slate-800 text-[9px] font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${geofenceBreach ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
                  <span className="text-slate-200">
                    {geofenceBreach ? '⚠️ BREACH: Zone Alpha' : 'Geofence: Inside Depot A'}
                  </span>
                </div>

                {/* GPS Stream Rate Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#0b1324]/90 border border-slate-800 text-[9px] font-mono text-sky-300">
                  Fused GPS: {livePings} Hz
                </div>
              </div>

              {/* Live Gauges Strip */}
              <div className="grid grid-cols-3 gap-1.5 mt-2">
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase">GPS Speed</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {speed} <span className="text-[8.5px] font-normal text-slate-500">km/h</span>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase">Ignition</div>
                  <button
                    onClick={() => setIgnitionOn(!ignitionOn)}
                    className={`mt-0.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all border ${
                      ignitionOn
                        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                        : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                    }`}
                    title="Click to toggle engine ignition state"
                  >
                    {ignitionOn ? 'ON • RUNNING' : 'OFF • IDLE'}
                  </button>
                </div>
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase">MMKV Latency</div>
                  <div className="text-base font-bold text-sky-400 font-mono mt-0.5">0.1ms</div>
                </div>
              </div>

              {/* Interactive Telemetry Action Strip */}
              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={triggerGeofenceBreach}
                  className="flex-1 py-1.5 px-2 rounded-lg bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 text-amber-300 font-mono text-[9.5px] font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span>Simulate Geofence Alert</span>
                </button>
                <div className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[8.5px] font-mono text-slate-400">
                  AIS-140 Compliant
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: HIGH-PRIORITY FCM DISPATCH SIMULATOR (KILLED-STATE WAKE-UP)        */}
          {/* ========================================================================= */}
          {activeTab === 'fcm' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200 text-slate-100 relative">
              
              {/* Simulated Dropping Heads-Up Banner */}
              {fcmAlertActive ? (
                <div className="p-3 rounded-2xl bg-gradient-to-b from-[#141d33] to-[#0c1222] border-2 border-sky-400/80 shadow-2xl shadow-sky-500/20 space-y-2.5 animate-in slide-in-from-top duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="p-1 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                        <Bell className="w-3.5 h-3.5 animate-bounce" />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          High-Priority Ride Dispatch
                        </div>
                        <div className="text-[9px] font-mono text-sky-300">
                          Channel: dispatch_high_priority • Sound Looped
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                      WAKE DEVICE
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#080d1a] border border-slate-800 space-y-1 font-mono text-[10px]">
                    <div className="flex justify-between text-slate-300">
                      <span>Pickup: <strong className="text-white">Agra Cantt</strong></span>
                      <span className="text-emerald-400 font-bold">₹320.00</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                      <span>Destination: Taj East Gate</span>
                      <span>ETA: 1.2 km</span>
                    </div>
                  </div>

                  {tripAccepted ? (
                    <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center font-mono text-xs font-bold flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Trip Accepted • Start OTP: 4921</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setFcmAlertActive(false)}
                        className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs transition-colors"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() => setTripAccepted(true)}
                        className="py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-bold shadow-md shadow-emerald-600/30 active:scale-95 transition-all"
                      >
                        Accept Ride
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Idle FCM Listening State */
                <div className="p-4 rounded-2xl bg-[#0c111e] border border-slate-800 space-y-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 mx-auto flex items-center justify-center">
                    <Radio className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">FCM Background Service Active</div>
                    <p className="text-[10px] text-slate-400 font-mono mt-1 leading-snug">
                      Listening on Firebase Cloud Messaging & Notifee headless task handler. Tested across killed, background & doze states.
                    </p>
                  </div>
                  <button
                    onClick={triggerFcmAlert}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>⚡ Simulate Incoming FCM Dispatch</span>
                  </button>
                </div>
              )}

              {/* FCM Architecture Diagram / Specs */}
              <div className="p-2.5 rounded-xl bg-[#090e1a] border border-slate-800/90 space-y-1.5 font-mono text-[9px] text-slate-400">
                <div className="text-slate-300 font-bold uppercase tracking-wider text-[8.5px] border-b border-slate-800 pb-1">
                  Killed-State Pipeline Specs:
                </div>
                <div className="flex justify-between">
                  <span>Android Channel:</span>
                  <span className="text-sky-300">Importance.HIGH</span>
                </div>
                <div className="flex justify-between">
                  <span>FullScreenAction:</span>
                  <span className="text-emerald-400">Enabled (Wakes Screen)</span>
                </div>
                <div className="flex justify-between">
                  <span>Background Handler:</span>
                  <span className="text-slate-200">Headless JS / Notifee</span>
                </div>
              </div>

              {fcmAlertActive && (
                <button
                  onClick={() => { setFcmAlertActive(false); setTripAccepted(false); }}
                  className="py-1 text-[9px] font-mono text-slate-400 hover:text-white flex items-center justify-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset FCM Simulator</span>
                </button>
              )}

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: DRIVER BEARING & 60 FPS MAP CAMERA                                 */}
          {/* ========================================================================= */}
          {activeTab === 'driver' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200 text-slate-100">
              
              {/* Telemetry Metric Gauges */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase">Camera Pitch</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">40°</div>
                </div>
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase">Bearing</div>
                  <div className="text-base font-bold text-sky-400 font-mono mt-0.5">NE 42°</div>
                </div>
                <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center">
                  <div className="text-[8.5px] font-mono text-slate-400 uppercase">Shift Total</div>
                  <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">₹2,480</div>
                </div>
              </div>

              {/* Turn-by-Turn Instruction Pill */}
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between text-xs font-mono mt-2">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-sky-400 transform rotate-45" />
                  <div>
                    <div className="text-white font-bold text-[11px]">In 250m, Turn Right</div>
                    <div className="text-[9px] text-slate-400">onto Fatehabad Road</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-400">2 mins</span>
              </div>

              {/* Radar Simulation */}
              <div className="relative h-[150px] rounded-2xl bg-[#0b101c] border border-slate-800 flex flex-col justify-between p-3 overflow-hidden mt-2">
                <div className="flex items-center justify-between text-[9px] font-mono z-10">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    DISPATCHING WAVE #1
                  </span>
                  <span className="text-slate-400">Lat: 27.1751° N</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                  <div className="w-28 h-28 rounded-full border border-sky-400" />
                  <div className="w-16 h-16 rounded-full border border-sky-400" />
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 z-10 border-t border-slate-800/80 pt-1.5">
                  <span>Radius: &lt; 1.5 km</span>
                  <span className="text-emerald-400">Imperative animateCamera</span>
                </div>
              </div>

              <div className="text-[9px] font-mono text-slate-400 text-center mt-1">
                Zero JavaScript Thread Lag • Mutable Coordinates
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: WALK-UP KIOSK TABLET TERMINAL                                      */}
          {/* ========================================================================= */}
          {activeTab === 'kiosk' && (
            <div className="flex-1 p-3.5 flex flex-col justify-between animate-in fade-in duration-200 text-slate-100">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center">
                  <div className="text-xs font-bold text-sky-300">WALK-UP KIOSK TERMINAL</div>
                  <div className="text-[9px] text-slate-400 font-mono">Hotel Radisson Blu • Station #02</div>
                </div>

                <div className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400 pt-0.5">
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
                      <div className="text-[9px] font-mono text-emerald-400">Driver Bay ETA: {station.eta}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold font-mono text-sky-400">{station.fare}</div>
                      <div className="text-[8.5px] text-slate-400 font-mono">Book ➔</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-2 rounded-xl bg-[#0c111e] border border-slate-800 text-center text-[9px] font-mono text-slate-400">
                Tablet Screen Pinning • startLockTask • Thermal QR Print
              </div>
            </div>
          )}

          {/* Bottom Screen Navigation Tab Bar */}
          <div className="bg-[#090d16] px-2 py-2 border-t border-slate-800/80 grid grid-cols-4 gap-1">
            <button
              onClick={() => setActiveTab('fleet')}
              className={`py-1.5 px-1 rounded-lg text-[9.5px] font-mono transition-all text-center ${
                activeTab === 'fleet'
                  ? 'bg-blue-600/25 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fleet GPS
            </button>
            <button
              onClick={() => setActiveTab('fcm')}
              className={`py-1.5 px-1 rounded-lg text-[9.5px] font-mono transition-all text-center flex items-center justify-center gap-1 ${
                activeTab === 'fcm'
                  ? 'bg-blue-600/25 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bell className="w-2.5 h-2.5 text-sky-400" />
              <span>FCM Alert</span>
            </button>
            <button
              onClick={() => setActiveTab('driver')}
              className={`py-1.5 px-1 rounded-lg text-[9.5px] font-mono transition-all text-center ${
                activeTab === 'driver'
                  ? 'bg-blue-600/25 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Driver 60fps
            </button>
            <button
              onClick={() => setActiveTab('kiosk')}
              className={`py-1.5 px-1 rounded-lg text-[9.5px] font-mono transition-all text-center ${
                activeTab === 'kiosk'
                  ? 'bg-blue-600/25 text-sky-300 font-bold border border-blue-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Kiosk
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

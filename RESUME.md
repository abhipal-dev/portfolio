# ABHISHEK PAL
**Lead React Native Mobile Engineer | Maps, GPS & Mobility Systems | 200+ Production Updates (SDK 32 ➔ 35)**  
Agra, India (Open to Remote & Relocation) • Notice Period: 30 Days (Negotiable)  
Email: [abhipal85350@gmail.com](mailto:abhipal85350@gmail.com) • Phone: [+91-9870962636](tel:+919870962636)  
LinkedIn: [linkedin.com/in/abhishek-pal-a5a497217](https://linkedin.com/in/abhishek-pal-a5a497217) • GitHub: [github.com/abhipal-dev](https://github.com/abhipal-dev) • Portfolio: [abhipal-dev.github.io/portfolio](https://abhipal-dev.github.io/portfolio)

---

## PROFESSIONAL SUMMARY
Lead React Native Mobile Engineer with **3.5+ years of production experience** architecting, scaling, and maintaining high-performance cross-platform Android and iOS applications. Built and published **6–7 distinct production applications on each store** (Google Play Store & Apple App Store) and enterprise tablet kiosk stations, delivering **200+ continuous production updates** with **targetSdkVersion 32 to 35 compliance (Android 12L ➔ 15)** since Jan 2023. Core technical specialization in **real-time GPS map tracking**, **60 FPS marker animations**, **mission-critical FCM & Notifee push delivery (<0.1% miss rate across killed/doze states)**, and **sub-millisecond MMKV C++ JSI offline caching**. Owned solo mobile delivery for **TrackingHAWK X3**, engineered the 3-sided **TaxiMuscat** mobility ecosystem (Rider, Driver, Kiosk), and built the **LazyEye** clinical digital therapeutics platform integrated with the **Iris** autonomous clinical AI copilot (Google Gemini Tool Calling).

---

## KEY TECHNICAL SKILLS
- **Core Mobile & Multi-App Architectures:** React Native (RN 0.70 ➔ 0.8x), TypeScript, JavaScript (ES6+), React.js, React Navigation, Multi-App Ecosystems (Rider, Driver, Kiosk)
- **Maps, GPS & Mobility (Core Specialization):** React Native Maps, Google Maps Platform, Real-time GPS Tracking, Location Telemetry, Geofencing, Polyline Routes, ETA Calculation, Driver Dispatch & Proximity Matching, Walk-up Kiosk Workflows
- **Push Notifications & Background Processing:** Firebase Cloud Messaging (FCM), APNs, Notifee, Headless JS, Background Task Handlers, Notification-driven Deep Navigation (<0.1% Miss Rate in Doze/Killed States)
- **Storage & Offline Architecture:** MMKV Storage (C++ JSI), SQLite, Sub-Millisecond Telemetry Caching, Offline Synchronization Strategies, Exponential Backoff Sync Queue
- **AI Agent & Clinical Tool Integration:** Google Gemini Function Calling, Autonomous Agent Architecture ("Iris"), Clinical Tool Calling, Structured SOAP Note Generation, Cryptographic Thought-Signature Verification
- **WebViews & Data Bridges:** WebView Integration, Bidirectional WebView-to-App Communication (postMessage bridge), Native File Downloads & Local Document Storage
- **UI, Animation & Localization:** React Native Reanimated, UI Kitten, React Native Paper, Responsive Layouts, Dynamic Arabic/English RTL and LTR Mirroring
- **Builds, Release & Regulatory Lifecycle:** Android Studio (Gradle), Xcode (CocoaPods), Google Play Console, Apple App Store Connect, Production Artifacts (.aab/.ipa), targetSdkVersion 32➔35 Compliance, Git

---

## PROFESSIONAL EXPERIENCE

### Softcruise Technology Pvt. Ltd. | Agra, India *(Jan 2023 – Present)*

**Lead React Native Mobile Engineer** | *Jun 2023 – Present*
- **Technical Leadership & Delivery:** Lead mobile architecture and technical execution across commercial fleet tracking suites (TrackingHAWK X3, KBFVTS X3, Ingecom Pro) and the 3-sided ride-hailing platform (TaxiMuscat Rider, Driver, Kiosk), mentoring developers on native crash debugging and Hermes memory profiling.
- **Store Releases & Compliance (200+ Updates):** Configure Android Gradle builds and iOS Xcode targets, generate signed release artifacts (.aab / .ipa), and manage release tracks, store reviews, and live rollouts for 6–7 apps on each store across 200+ production updates with targetSdkVersion 32 ➔ 35 compliance and annual Google Play target mandates.
- **Architectural Decision — Synchronous MMKV Migration:** Spearheaded the architectural migration from legacy AsyncStorage to MMKV C++ JSI storage across all mobility apps, eliminating async bridge serialization overhead for high-frequency GPS telemetry and resolving startup race conditions.
- **Real-Time 60 FPS GPS Maps & Telemetry:** Engineered 60 FPS interactive map tracking using react-native-maps with live vehicle speed, ignition sensing, historical route playback, animated driver bearing rotation, and geofence boundary crossing alerts powered by React Native Reanimated.
- **Mission-Critical FCM & Notifee Push Delivery:** Configured high-priority FCM and Notifee foreground service channels with wake-locks and notification action handlers, ensuring driver trip alerts reliably trigger audible sound and vibration with <0.1% miss rate across killed and doze states.

**Lead Mobile & Web Engineer (Healthcare Platform MVP)** | *Jan 2023 – Jun 2023*
- **Healthcare MVP Leadership & AI Agent Extension:** Led mobile development and technical execution for the LazyEye pediatric visual assessment MVP; engineered bidirectional WebView postMessage bridges, responsive clinical dashboards, native PDF download pipelines, and recently integrated the autonomous Iris clinical AI copilot with real-time tool calling.

---

## KEY PROJECTS

### 1. TaxiMuscat — Three-Sided Ride-Hailing Platform & Tablet Kiosk Ecosystem
*Lead React Native Mobile Engineer | Mar 2024 – Present*  
*(Tech: React Native, React Native Maps, Reanimated, FCM, Notifee, Axios, Laravel, Kiosk, RTL)*
- **Three-Sided Platform Architecture:** Lead mobile development across Rider App (booking & live tracking), Driver App (trip requests, turn-by-turn navigation, telemetry), and Kiosk Terminal App (tablet kiosk walk-up bookings for airports, hotels, malls) synchronized with central Web Dispatch.
- **Kiosk Terminal Workflows:** Engineered dedicated tablet kiosk app supporting rapid walk-up ride bookings, automated nearby driver matching, ESC/POS thermal receipt printing, and unattended kiosk mode lockdown.
- **Interactive 60 FPS Map & Driver Tracking:** Built real-time map interfaces using react-native-maps with smooth animated driver marker movement, bearing rotation, and dynamic polyline route drawing powered by React Native Reanimated.
- **Dispatch Engine & Ride Lifecycle:** Implemented real-time GPS dispatch matching incoming requests with eligible nearby drivers based on distance radius waves, vehicle category, OTP ride verification, and full trip state machine.
- **Multi-Currency Digital Wallet & Apple Pay:** Architected multi-currency wallet (OMR, INR, USD) with dynamic multipliers; integrated Apple Pay and AmwalPay native checkout; engineered automated commission deduction on cash trips.
- **Adaptive Location Telemetry, FCM Alerts & MENA RTL:** Implemented background GPS location streaming with distance-filter throttling (switching between stationary and moving intervals) and Kalman filtering to eliminate GPS drift/jitter; configured high-priority FCM/Notifee alerts and full Arabic RTL layout mirroring.

### 2. TrackingHAWK X3 — Enterprise Fleet Management & GPS Telemetry
*Lead React Native Mobile Engineer (Solo Delivery) | Jun 2023 – Present*  
*(Tech: React Native, Google Maps, SQLite, MMKV, FCM, Background Handlers, Barcode)*  
*Verified Store Releases: [Google Play (com.softcruise.application.trackinghawkx3)](https://play.google.com/store/apps/details?id=com.softcruise.application.trackinghawkx3) • [App Store (id6738086577)](https://apps.apple.com/in/app/trackinghawk-x3/id6738086577)*
- **Dual-Store Production Ownership:** Built, signed, and independently maintained enterprise fleet-tracking application for Android and iOS across multiple major production releases.
- **Real-Time Vehicle Tracking & Ray-Casting Geofencing:** Engineered live GPS vehicle tracking on maps with vehicle speed, ignition sensing, historical route playback, and real-time polygon boundary evaluation (ray casting) alerting fleet managers on boundary crosses.
- **Offline Caching & Background Alerts:** Implemented SQLite and MMKV storage for sub-millisecond local caching of vehicle telemetry; configured background notification handlers to alert fleet managers to critical vehicle events (speeding, geofence breaches, ignition changes) when app is closed.
- **Asset Check-In & In-App WebViews:** Integrated camera and hardware barcode/QR scanning modules for driver-vehicle pairing; implemented customized in-app WebViews with local caching for offline document and historical report inspection.

### 3. KBFVTS X3 — Commercial Fleet Telematics & Vehicle Tracking Platform
*Lead React Native Mobile Engineer | Jan 2024 – Present*  
*(Tech: React Native, React Native Maps, Play Console, App Store Connect, FCM, MMKV)*  
*Verified Store Releases: [Google Play (com.kbfvts.x3)](https://play.google.com/store/apps/details?id=com.kbfvts.x3) • [App Store (id6739529934)](https://apps.apple.com/in/app/kbfvts-x3/id6739529934)*
- **Dual-Store Verified Releases:** Independently compiled, tested, and published commercial vehicle tracking suite on Google Play and Apple App Store.
- **Fleet Telematics & Speed Logging:** Continuous GPS vehicle tracking with speed threshold alerts, ignition sensing, idle duration monitoring, and geofence entry/exit detection.
- **Hermes Profiling & Background FCM:** Optimized multi-marker map clusters, eliminating memory leaks and ensuring smooth 60 FPS scrolling across budget Android hardware; configured FCM and APNs background services for instant emergency triggers.
- **Live Diagnostics & Fuel Analytics:** Built reporting modules tracking engine operating parameters, idling fuel burn calculations, and driver speeding infractions with local offline queuing.

### 4. Ingecom GPS (Ingecom Pro) & Japjee Inventory Platform
*Lead React Native Mobile Engineer | Jan 2024 – Present*  
*(Tech: React Native, Google Play, RBAC, Barcode Scanning, CANBUS)*  
*Verified Store Release: [Google Play (com.v3.ingecompro)](https://play.google.com/store/apps/details?id=com.v3.ingecompro)*
- **Ingecom GPS White-labeling:** Customized and deployed white-labeled international client instances with localized geofence alerts, CANBUS sensor analytics, and scheduled maintenance notifications.
- **Japjee Inventory:** Independently developed cross-platform inventory management application with Role-Based Access Control (RBAC), real-time order tracking, and barcode scanning for warehouse workflows.
- **Multi-Tenant Data Security:** Architected secure tenant data isolation with encrypted JWT session storage and localized map tile caching for offline warehouse inspections.

### 5. LazyEye — Digital Therapeutics (DTx) & Autonomous Clinical AI Platform
*Lead Mobile & Web Engineer (Team Lead) | Jan 2023 – Jun 2023 (Modernized 2026)*  
*(Tech: Bare RN 0.87.1 CLI, React 19, Gemini AI Tool Calling, MMKV, Canvas WebViews, postMessage, Laravel API)*  
*Live Clinical Platform: [https://lazyeye.onrender.com](https://lazyeye.onrender.com) • Recruiter Sandbox: Doctor (`dr_sarah` / `doctor123`), Patient (`abhicoder` / `4567`)*
- **Autonomous Clinical AI Agent ("Iris"):** Architected an autonomous clinical copilot using Google Gemini Function Calling; implemented 4 medical database tools (`get_cohort_compliance_radar`, `get_patient_clinical_profile`, `recommend_contrast_adjustment`, `generate_soap_clinical_note`) with cryptographic thought-signature preservation to audit adherence and auto-generate structured SOAP clinical reports.
- **Agentic Dichoptic Contrast Attenuation:** Connected Iris clinical AI telemetry directly to 11 responsive HTML5 canvas vision therapy engines (Tetris, Snake, Menja 3D, Bubble Shooter, etc.), dynamically adjusting red-cyan anaglyph color contrast to treat amblyopic suppression scotomas.
- **Clinical DTx Mobile Architecture:** Built on modern Bare React Native 0.87.1 CLI targeting Android API 37 (Android 15+) and iOS with React 19; features an instant persistent switcher between zero-latency offline HTML5 canvas engines and the live cloud portal (https://lazyeye.onrender.com).
- **High-Frequency WebView Data Bridge & Offline MMKV Queue:** Engineered secure bidirectional postMessage event bridge streaming exercise telemetry and scores between HTML5 web views and native storage; developed fault-tolerant MMKV session queue with exponential backoff retry.
- **Mobile Touch Controller & Gestures:** Built on-screen virtual D-Pad and Action button HUD with haptic feedback (`navigator.vibrate`) and Web Audio synthesis; added canvas touch swipe steering, PWA manifest (standalone mode), and viewport protection.
- **Real Clinical Datasets & 84-Day Compliance Heatmap:** Integrated authentic SQLite clinical records (13 users, 593 gameplay records) dynamically computing daily dosage compliance, 5-day streak counters, and an interactive 84-day therapy adherence heatmap.

---

## TECHNICAL LEADERSHIP & TOOLCHAINS
- **Store Release & Regulatory Governance:** Managed release tracks, signing pipelines, store review audits, and production rollouts for 6–7 apps on each store across 200+ continuous production updates with targetSdkVersion 32 ➔ 35 compliance and annual Google Play target mandates.
- **Cross-Platform Build Toolchains:** Proficient with Gradle 8.x/9.x, Android NDK, ProGuard/R8 optimization, CocoaPods, Xcode build phases, Hermes flags, automated CI/CD release scripting, and conducting rigorous architectural peer reviews.
- **Hardware & IoT Peripheral Integration:** Integrated ESC/POS thermal printers, CANBUS telemetry protocols, Android Kiosk lockdown mode, Bluetooth/USB scanning peripherals, and Kalman-filtered GPS algorithms for real-world enterprise mobility.

---

## EDUCATION & CERTIFICATIONS
- **Master of Computer Applications (MCA)** | *2021 – 2023*  
  Hindustan Institute of Management and Computer Science, Mathura • Focus: Advanced Software Engineering, Distributed Databases & Mobile Systems
- **Bachelor of Computer Applications (BCA)** | *2018 – 2021*  
  Uttam Institute of Technology and Management, Agra • Focus: Object-Oriented Programming, Data Structures, Web Systems & Database Architecture
- **Core Practices & Tooling:** Production React Native Performance Tuning • Hermes Memory Profiling • C++ JSI & MMKV Local Storage • Google Play & App Store Compliance (SDK 32➔35) • Agile Sprint Delivery

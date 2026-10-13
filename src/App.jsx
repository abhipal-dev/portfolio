import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProvenanceLedger from './components/ProvenanceLedger';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#080a0f] text-zinc-100 selection:bg-zinc-700 selection:text-white font-sans transition-colors duration-200">
        {/* Top Architectural Navbar */}
        <Navbar />

        {/* Cohesive Narrative Flow: Hero ➔ Case Studies ➔ Provenance & Releases ➔ Contact */}
        <main className="relative z-10">
          <Hero />
          <Projects />
          <ProvenanceLedger />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

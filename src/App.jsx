import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StoreLifecycle from './components/StoreLifecycle';
import ArchitectureDeepDive from './components/ArchitectureDeepDive';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#080a0f] text-zinc-100 selection:bg-zinc-700 selection:text-white font-sans transition-colors duration-200">
        {/* Top Architectural Navbar */}
        <Navbar />

        {/* Main Content Flow: Projects Front and Center */}
        <main className="relative z-10">
          <Hero />
          <Projects />
          <About />
          <ArchitectureDeepDive />
          <StoreLifecycle />
          <Skills />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

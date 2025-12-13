import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero, { Overview } from './components/sections/Hero';
import Organization from './components/sections/Organization';
import ProductMetrics from './components/sections/ProductMetrics';
import Engineering from './components/sections/Engineering';
import QualityAndChallenges from './components/sections/QualityAndChallenges';
import FuturePlan from './components/sections/FuturePlan';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical', 
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-500/30 selection:text-brand-900 font-sans">
      <Navigation />
      
      <main className="flex flex-col relative overflow-hidden">
        <Hero />
        
        {/* Content Wrapper */}
        <div className="relative z-20 bg-white">
          <Overview />
          <Organization />
          <ProductMetrics />
          <Engineering />
          <QualityAndChallenges />
          <FuturePlan />
        </div>
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm bg-secondary border-t border-slate-200">
        <div className="mb-4 font-bold text-slate-900">COMPANY INC.</div>
        &copy; 2025 Year End Report. Internal Use Only.
      </footer>
    </div>
  );
}

export default App;
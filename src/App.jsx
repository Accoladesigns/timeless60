import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleHero            from './components/ParticleHero';
import TimelessQuoteSection    from './components/TimelessQuoteSection';
import MemoriesHorizontalSection from './components/MemoriesHorizontalSection';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // After all child useEffects have run and their GSAP spacers are
    // inserted, force a full recalculation so every section's ScrollTrigger
    // has the correct scroll position.  rAF guarantees we run after the
    // browser has committed the layout from child effects.
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main>
      <ParticleHero />
      <TimelessQuoteSection />
      <MemoriesHorizontalSection />
    </main>
  );
}

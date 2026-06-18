/**
 * TimelessQuoteSection.jsx
 *
 * Full-viewport section pinned after the particle hero.
 * Scroll sequence (normalised 0 → 1):
 *   0.00 – 0.50  background dark (#07070f) → old-paper beige (#F2E6D0)
 *   0.30 – 0.62  radial glow rises
 *   0.55 – 0.75  line 1 reveals
 *   0.72 – 0.90  line 2 reveals
 *   0.90 – 1.00  hold
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TimelessQuoteSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function TimelessQuoteSection() {
  const sectionRef = useRef(null);
  const bgRef      = useRef(null);
  const glowRef    = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg      = bgRef.current;
    const glow    = glowRef.current;
    const line1   = line1Ref.current;
    const line2   = line2Ref.current;
    if (!section || !bg || !glow || !line1 || !line2) return;

    // ── Set initial states ─────────────────────────────────────────────────
    gsap.set(bg,   { backgroundColor: '#07070f' });
    gsap.set(glow, { opacity: 0, scale: 0.80 });
    gsap.set([line1, line2], { opacity: 0, y: 32, filter: 'blur(10px)' });

    // ── Build scrub timeline ───────────────────────────────────────────────
    const tl = gsap.timeline();

    // Background: dark → old-paper beige (0% → 50%)
    tl.fromTo(bg,
      { backgroundColor: '#07070f' },
      { backgroundColor: '#F2E6D0', duration: 0.50, ease: 'power1.inOut' },
      0
    );

    // Radial glow rises (30% → 62%)
    tl.fromTo(glow,
      { opacity: 0, scale: 0.80 },
      { opacity: 1, scale: 1,   duration: 0.32, ease: 'power2.out' },
      0.30
    );

    // Line 1 (55% → 75%)
    tl.fromTo(line1,
      { opacity: 0, y: 32, filter: 'blur(10px)' },
      { opacity: 1, y: 0,  filter: 'blur(0px)', duration: 0.20, ease: 'power3.out' },
      0.55
    );

    // Line 2 (72% → 90%)
    tl.fromTo(line2,
      { opacity: 0, y: 32, filter: 'blur(10px)' },
      { opacity: 1, y: 0,  filter: 'blur(0px)', duration: 0.18, ease: 'power3.out' },
      0.72
    );

    // Hold
    tl.to({}, { duration: 0.10 }, 0.90);

    // ── ScrollTrigger: pin + scrub ─────────────────────────────────────────
    const st = ScrollTrigger.create({
      trigger:    section,
      start:      'top top',
      end:        '+=2400',  // 2400px of virtual scroll space
      pin:        true,
      pinSpacing: true,
      scrub:      0.8,
      animation:  tl,
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="timeless-section" ref={sectionRef}>
      {/* Animated background layer */}
      <div className="timeless-bg" ref={bgRef} />

      {/* Film-grain texture overlay */}
      <div className="timeless-grain" aria-hidden="true" />

      {/* Warm radial glow behind the quote */}
      <div className="timeless-glow" ref={glowRef} aria-hidden="true" />

      {/* Quote */}
      <div className="timeless-quote-wrap">
        <h2 className="timeless-quote">
          <span ref={line1Ref}>The deepest roots are never seen,</span>
          <span ref={line2Ref}>but everyone remembers the shade.</span>
        </h2>
      </div>
    </section>
  );
}

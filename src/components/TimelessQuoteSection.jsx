/**
 * TimelessQuoteSection.jsx
 *
 * The section immediately after the particle hero.
 * Transitions from near-black → old paper beige as the user scrolls.
 * The quote appears line-by-line using a GSAP scrub timeline.
 *
 * Scroll sequence (normalised 0 → 1):
 *   0.00 – 0.30  dark hold (portrait still fresh in mind)
 *   0.30 – 0.68  background dark → old-paper beige (#F2E6D0)
 *   0.45 – 0.72  radial glow rises
 *   0.65 – 0.78  line 1 reveals
 *   0.78 – 0.90  line 2 reveals
 *   0.90 – 1.00  final state holds
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
    gsap.set(glow, { opacity: 0, scale: 0.72 });
    gsap.set([line1, line2], {
      opacity: 0,
      y: 32,
      filter: 'blur(10px)',
    });

    // ── Build scrub timeline ───────────────────────────────────────────────
    // All positions are normalised: 0 = scroll start, 1 = scroll end.
    // We create a 1-second timeline and let scrub drive it.
    const tl = gsap.timeline();

    // Dark hold (0% → 30%) — nothing changes, lets portrait linger
    tl.to({}, { duration: 0.30 }, 0);

    // Background: dark → old-paper beige (30% → 68%)
    tl.fromTo(bg,
      { backgroundColor: '#07070f' },
      { backgroundColor: '#F2E6D0', duration: 0.38, ease: 'power1.inOut' },
      0.30
    );

    // Radial glow rises (45% → 72%)
    tl.fromTo(glow,
      { opacity: 0, scale: 0.80 },
      { opacity: 1, scale: 1,   duration: 0.27, ease: 'power2.out' },
      0.45
    );

    // Line 1 (65% → 78%)
    tl.fromTo(line1,
      { opacity: 0, y: 32, filter: 'blur(10px)' },
      { opacity: 1, y: 0,  filter: 'blur(0px)',
        duration: 0.13, ease: 'power3.out' },
      0.65
    );

    // Line 2 (78% → 90%)
    tl.fromTo(line2,
      { opacity: 0, y: 32, filter: 'blur(10px)' },
      { opacity: 1, y: 0,  filter: 'blur(0px)',
        duration: 0.12, ease: 'power3.out' },
      0.78
    );

    // Hold — pad to 1.0 so final state settles
    tl.to({}, { duration: 0.10 }, 0.90);

    // ── ScrollTrigger: pin + scrub ─────────────────────────────────────────
    const st = ScrollTrigger.create({
      trigger:    section,
      start:      'top top',
      end:        '+=2400',  // 2400px of virtual scroll space
      pin:        true,
      pinSpacing: true,
      scrub:      1.8,       // slight lag for cinematic feel
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

/**
 * TimelessQuoteSection.jsx
 *
 * The section immediately after the particle hero.
 * Starts IMMEDIATELY as old-paper beige — no dark period, no black flash
 * when the hero releases. The glow and quote lines animate in on scroll.
 *
 * Scroll sequence (normalised 0 → 1):
 *   0.00 – 0.40  radial glow rises
 *   0.30 – 0.60  line 1 reveals
 *   0.55 – 0.82  line 2 reveals
 *   0.82 – 1.00  final state holds
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
    // Background starts BEIGE immediately — no dark period, no black flash
    // when the hero releases.
    gsap.set(bg,   { backgroundColor: '#F2E6D0' });
    gsap.set(glow, { opacity: 0, scale: 0.72 });
    gsap.set([line1, line2], {
      opacity: 0,
      y: 32,
      filter: 'blur(10px)',
    });

    // ── Build scrub timeline ───────────────────────────────────────────────
    const tl = gsap.timeline();

    // Radial glow rises (0% → 40%)
    tl.fromTo(glow,
      { opacity: 0, scale: 0.80 },
      { opacity: 1, scale: 1,   duration: 0.40, ease: 'power2.out' },
      0
    );

    // Line 1 (30% → 60%)
    tl.fromTo(line1,
      { opacity: 0, y: 32, filter: 'blur(10px)' },
      { opacity: 1, y: 0,  filter: 'blur(0px)',
        duration: 0.30, ease: 'power3.out' },
      0.30
    );

    // Line 2 (55% → 82%)
    tl.fromTo(line2,
      { opacity: 0, y: 32, filter: 'blur(10px)' },
      { opacity: 1, y: 0,  filter: 'blur(0px)',
        duration: 0.27, ease: 'power3.out' },
      0.55
    );

    // Hold — pad to 1.0 so final state settles
    tl.to({}, { duration: 0.18 }, 0.82);

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

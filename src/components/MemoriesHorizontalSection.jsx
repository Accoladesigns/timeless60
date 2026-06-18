/**
 * MemoriesHorizontalSection.jsx
 *
 * Cinematic horizontal memory gallery.
 * Vertical scroll moves 7 warm memory cards horizontally, like
 * memories passing through time. Continues from the quote section's
 * beige into a sunlit golden palette.
 *
 * ── Edit image list here ────────────────────────────────────────
 * Change src extensions to match your actual files (.jpg/.jpeg/.png/.webp).
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MemoriesHorizontalSection.css';

gsap.registerPlugin(ScrollTrigger);

// ── Image list (edit src/alt/fit here) ──────────────────────────────────────
const memoryImages = [
  { src: '/1.jpeg', alt: 'A cherished moment with family', fit: 'cover' },
  { src: '/2.jpeg', alt: 'A memory from the journey',      fit: 'cover' },
  { src: '/3.jpeg', alt: 'Together through the years',     fit: 'cover' },
  { src: '/4.jpeg', alt: 'Warmth and laughter',            fit: 'cover' },
  { src: '/5.jpeg', alt: 'A quiet, golden moment',         fit: 'cover' },
  { src: '/6.jpeg', alt: 'Roots and belonging',            fit: 'cover' },
  { src: '/7.jpeg', alt: 'Sixty years of love',            fit: 'cover' },
];

// Rotation per card (degrees) — keep elegant and subtle
const ROTATIONS = [-2, 1, -1, 2, -1.5, 1.5, -0.8];

// ────────────────────────────────────────────────────────────────────────────

export default function MemoriesHorizontalSection() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const cardRefs   = useRef([]);
  const innerRefs  = useRef([]);
  const dustRef    = useRef(null);
  const tweenRef   = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile       = window.innerWidth <= 768;

    // ── Dust particles — lightweight 2D canvas, warm floating motes ──────
    const dustCanvas = dustRef.current;
    let dustRaf;

    if (dustCanvas && !prefersReduced && !isMobile) {
      const ctx = dustCanvas.getContext('2d');

      const resizeDust = () => {
        dustCanvas.width  = window.innerWidth;
        dustCanvas.height = window.innerHeight;
      };
      resizeDust();

      const motes = Array.from({ length: 38 }, () => ({
        x:  Math.random() * window.innerWidth,
        y:  Math.random() * window.innerHeight,
        r:  Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.10,
        vy: -(Math.random() * 0.20 + 0.05),
        a:  Math.random() * 0.14 + 0.04,
      }));

      const tickDust = () => {
        ctx.clearRect(0, 0, dustCanvas.width, dustCanvas.height);
        for (const m of motes) {
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(205, 140, 35, ${m.a})`;
          ctx.fill();
          m.x += m.vx;
          m.y += m.vy;
          if (m.y < -4) { m.y = dustCanvas.height + 4; m.x = Math.random() * dustCanvas.width; }
          if (m.x < -4)                m.x = dustCanvas.width + 4;
          if (m.x > dustCanvas.width + 4) m.x = -4;
        }
        dustRaf = requestAnimationFrame(tickDust);
      };
      tickDust();

      const onDustResize = () => resizeDust();
      window.addEventListener('resize', onDustResize, { passive: true });

      // Attach cleanup for the resize listener
      section._cleanDustResize = () => window.removeEventListener('resize', onDustResize);
    }

    // ── Mobile / reduced-motion: CSS handles scroll-snap layout ──────────
    if (prefersReduced || isMobile) {
      return () => {
        cancelAnimationFrame(dustRaf);
        section._cleanDustResize?.();
      };
    }

    // ── Card active-state update ──────────────────────────────────────────
    // Uses offsetLeft + GSAP transform x instead of getBoundingClientRect
    // so there is no forced layout reflow in the hot update path.
    const cards  = cardRefs.current;
    const inners = innerRefs.current;

    function updateCards() {
      const tx      = gsap.getProperty(track, 'x') || 0;
      const vwCx    = window.innerWidth / 2;
      const maxDist = window.innerWidth * 0.88;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;

        const cardCx = card.offsetLeft + card.offsetWidth / 2 + tx;
        const dist   = Math.abs(cardCx - vwCx);
        const t      = Math.min(dist / maxDist, 1);   // 0 = centre, 1 = edge

        gsap.set(card, {
          opacity: 1 - t * 0.55,           // 1.00 → 0.45
          scale:   1 - t * 0.07,           // 1.00 → 0.93
          filter:  `blur(${(t * 1.4).toFixed(2)}px)`,
          overwrite: 'auto',
        });

        // Subtle internal parallax — image drifts opposite to card motion
        if (inners[i]) {
          gsap.set(inners[i], {
            x: (cardCx - vwCx) * 0.028,
            overwrite: 'auto',
          });
        }
      }
    }

    // ── Horizontal scroll tween ───────────────────────────────────────────
    tweenRef.current = gsap.to(track, {
      x:    () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        id:                  'memories-hscroll',
        trigger:             section,
        start:               'top top',
        end:                 () => `+=${track.scrollWidth - window.innerWidth}`,
        pin:                 true,
        pinSpacing:          true,
        scrub:               1.2,
        invalidateOnRefresh: true,
        onUpdate:            updateCards,
        onRefresh:           updateCards,
      },
    });

    // Set initial card states (before any scroll)
    updateCards();

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(dustRaf);
      section._cleanDustResize?.();
      ScrollTrigger.getById('memories-hscroll')?.kill();
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section className="mem-section" ref={sectionRef} aria-label="Memory gallery">
      {/* Warm dust motes */}
      <canvas className="mem-dust" ref={dustRef} aria-hidden="true" />

      {/* Radial sunlight glow */}
      <div className="mem-glow" aria-hidden="true" />

      {/* Subtle section label — remove if not needed */}
      <span className="mem-label" aria-hidden="true">Memories</span>

      {/* Horizontal memory track */}
      <div className="mem-track" ref={trackRef} role="list" aria-label="Family memories">

        {/* Leading breathing space */}
        <div className="mem-lead" aria-hidden="true" />

        {memoryImages.map((img, i) => (
          <div
            key={i}
            className="mem-card"
            style={{ '--rot': `${ROTATIONS[i] ?? 0}deg` }}
            ref={el => { cardRefs.current[i] = el; }}
            role="listitem"
          >
            {/* Inner wrapper is the parallax target */}
            <div
              className="mem-inner"
              ref={el => { innerRefs.current[i] = el; }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                draggable="false"
                style={{ objectFit: img.fit }}
              />
            </div>
          </div>
        ))}

        {/* Trailing breathing space */}
        <div className="mem-trail" aria-hidden="true" />
      </div>
    </section>
  );
}

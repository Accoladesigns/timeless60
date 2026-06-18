/**
 * InviteSection.jsx — Final section of Deepak's 60th tribute.
 *
 * Warm golden invitation with floating particles, glass card,
 * GSAP scroll-triggered staggered entrance, and two action buttons.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './InviteSection.css';

gsap.registerPlugin(ScrollTrigger);

// ── Event details ────────────────────────────────────────────────────────────
const inviteDetails = {
  preline:    'With love, we invite you to be a part of',
  title:      "Deepak's 60th",
  subtitle:   'An evening filled with memories, laughter, love, and moments planned with all our heart.',
  date:       '21st May',
  time:       '4:00 PM – 7:00 PM',
  venue:      'Flamboyante',
  address:    'Cuffe Parade',
  timingNote: 'We request everyone to reach by 4:00 PM, as we have planned a few special activities that need everyone\'s presence, attention, and love.',
  rsvp:       '+91 88799 36869',
  closing:    'Your presence will make this celebration complete.',
};

const whatsappMessage = encodeURIComponent(
  "Hello, I would love to confirm my presence for Deepak's 60th Birthday celebration on 21st June from 4:00 PM to 7:00 PM at Flamboyante, Cuffe Parade. I will make sure to reach on time for the planned activities."
);
const rsvpLink       = `https://wa.me/918879936869?text=${whatsappMessage}`;
const directionsLink = 'https://maps.app.goo.gl/UEZHNTG4DQggUtXf9';

// ────────────────────────────────────────────────────────────────────────────

export default function InviteSection() {
  const sectionRef  = useRef(null);
  const canvasRef   = useRef(null);
  const glowRef     = useRef(null);
  const cardRef     = useRef(null);
  const prelineRef  = useRef(null);
  const titleRef    = useRef(null);
  const subtitleRef = useRef(null);
  const detailsRef  = useRef(null);
  const noteRef     = useRef(null);
  const actionsRef  = useRef(null);
  const closingRef  = useRef(null);
  const dividerRef  = useRef(null);

  // ── Floating golden particles ─────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const count = window.innerWidth <= 768 ? 18 : 36;
    const motes = Array.from({ length: count }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.6 + 0.5,
      vx: (Math.random() - 0.5) * 0.08,
      vy: -(Math.random() * 0.18 + 0.04),
      a:  Math.random() * 0.09 + 0.03,
      pa: Math.random() * Math.PI * 2, // phase for opacity pulse
      ps: Math.random() * 0.004 + 0.002,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const m of motes) {
        m.pa += m.ps;
        const alpha = m.a * (0.6 + 0.4 * Math.sin(m.pa));
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 148, 30, ${alpha})`;
        ctx.fill();
        m.x += m.vx;
        m.y += m.vy;
        if (m.y < -6) { m.y = canvas.height + 6; m.x = Math.random() * canvas.width; }
        if (m.x < -6) m.x = canvas.width + 6;
        if (m.x > canvas.width + 6) m.x = -6;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // ── GSAP entrance ─────────────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animated = [
      prelineRef.current,
      titleRef.current,
      subtitleRef.current,
      dividerRef.current,
      detailsRef.current,
      noteRef.current,
      actionsRef.current,
      closingRef.current,
    ].filter(Boolean);

    if (prefersReduced) {
      gsap.set([glowRef.current, cardRef.current, ...animated],
        { opacity: 1, y: 0, scale: 1, filter: 'none' });
      return;
    }

    // Initial state
    gsap.set(glowRef.current, { opacity: 0, scale: 0.80 });
    gsap.set(cardRef.current,  { opacity: 0, y: 30, scale: 0.98 });
    gsap.set(animated,          { opacity: 0, y: 40, filter: 'blur(12px)' });
    gsap.set(titleRef.current,  { scale: 0.97 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start:   'top 70%',
        once:    true,
      },
      defaults: { ease: 'power3.out' },
    });

    // 1. Background glow
    tl.to(glowRef.current, { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' }, 0);

    // 2. Card shell
    tl.to(cardRef.current,  { opacity: 1, y: 0, scale: 1, duration: 1.0 }, 0.15);

    // 3. Pre-line
    tl.to(prelineRef.current,  { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.80 }, 0.40);

    // 4. Title
    tl.to(titleRef.current, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.0 }, 0.65);

    // 5. Subtitle
    tl.to(subtitleRef.current, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75 }, 0.95);

    // 6. Divider
    tl.to(dividerRef.current,  { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.50 }, 1.15);

    // 7. Details grid
    tl.to(detailsRef.current,  { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75 }, 1.28);

    // 8. Timing note
    tl.to(noteRef.current,     { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.70 }, 1.60);

    // 9. Action buttons
    tl.to(actionsRef.current,  { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.70 }, 1.90);

    // 10. Closing
    tl.to(closingRef.current,  { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.65 }, 2.18);

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="invite-section" ref={sectionRef} aria-label="Event invitation">

      {/* Grain + golden gradient background handled in CSS */}

      {/* Floating gold particles */}
      <canvas className="invite-canvas" ref={canvasRef} aria-hidden="true" />

      {/* Radial glow */}
      <div className="invite-glow" ref={glowRef} aria-hidden="true" />

      {/* Glass card */}
      <div className="invite-card" ref={cardRef}>

        <p className="invite-preline" ref={prelineRef}>
          {inviteDetails.preline}
        </p>

        <h2 className="invite-title" ref={titleRef}>
          {inviteDetails.title}
        </h2>

        <p className="invite-subtitle" ref={subtitleRef}>
          {inviteDetails.subtitle}
        </p>

        <div className="invite-divider" ref={dividerRef} aria-hidden="true" />

        <div className="invite-details" ref={detailsRef}>
          <div className="invite-detail">
            <span>Date</span>
            <strong>{inviteDetails.date}</strong>
          </div>
          <div className="invite-detail">
            <span>Time</span>
            <strong>{inviteDetails.time}</strong>
          </div>
          <div className="invite-detail">
            <span>Venue</span>
            <strong>{inviteDetails.venue}</strong>
          </div>
          <div className="invite-detail">
            <span>Location</span>
            <strong>{inviteDetails.address}</strong>
          </div>
        </div>

        <p className="invite-note" ref={noteRef}>
          {inviteDetails.timingNote}
        </p>

        <div className="invite-actions" ref={actionsRef}>
          <a
            className="invite-button invite-button-primary"
            href={rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Confirm attendance on WhatsApp — ${inviteDetails.rsvp}`}
          >
            Confirm on WhatsApp
          </a>
          <a
            className="invite-button invite-button-secondary"
            href={directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open venue in Google Maps"
          >
            Get Directions
          </a>
        </div>

        <p className="invite-closing" ref={closingRef}>
          {inviteDetails.closing}
        </p>

      </div>
    </section>
  );
}

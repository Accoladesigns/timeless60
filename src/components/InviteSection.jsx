/**
 * InviteSection.jsx
 *
 * Final section of the tribute website.
 * Edit inviteDetails below to update all event copy in one place.
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './InviteSection.css';

gsap.registerPlugin(ScrollTrigger);

// ── Edit event details here ──────────────────────────────────────────────────
const inviteDetails = {
  preline:  'With love, we invite you to celebrate',
  title:    "Deepak's 60th",
  subtitle: 'An evening of memories, warmth, and togetherness.',
  date:     '21st May',
  time:     '4:00 PM – 7:00 PM',
  venue:    'Relish Banquets',
  address:  'Churchgate',
  rsvp:     '+91 99679 96613',
  closing:  'Your presence will make this day complete.',
};

const whatsappMessage = encodeURIComponent(
  "Hello, I would like to confirm my presence for Deepak's 60th celebration on 21st May, 4:00 PM to 7:00 PM at Relish Banquets, Churchgate."
);
const rsvpLink = `https://wa.me/919967996613?text=${whatsappMessage}`;

// ────────────────────────────────────────────────────────────────────────────

export default function InviteSection() {
  const sectionRef  = useRef(null);
  const prelineRef  = useRef(null);
  const titleRef    = useRef(null);
  const subtitleRef = useRef(null);
  const detailsRef  = useRef(null);
  const buttonRef   = useRef(null);
  const closingRef  = useRef(null);
  const glowRef     = useRef(null);
  const dividerRef  = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Just make everything visible
      gsap.set(
        [prelineRef.current, titleRef.current, subtitleRef.current,
         detailsRef.current, buttonRef.current, closingRef.current,
         glowRef.current, dividerRef.current],
        { opacity: 1, y: 0, scale: 1, filter: 'none' }
      );
      return;
    }

    // ── Set initial hidden states ────────────────────────────────────────
    const elements = [
      prelineRef.current,
      titleRef.current,
      subtitleRef.current,
      dividerRef.current,
      detailsRef.current,
      buttonRef.current,
      closingRef.current,
    ];

    gsap.set(elements, { opacity: 0, y: 38, filter: 'blur(10px)' });
    gsap.set(titleRef.current, { scale: 0.97 });
    gsap.set(glowRef.current,  { opacity: 0, scale: 0.85 });

    // ── Staggered entrance timeline ──────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start:   'top 75%',
        once:    true,          // play once, no re-trigger on scroll up
      },
      defaults: { ease: 'power3.out' },
    });

    // Glow first — sets the atmosphere
    tl.to(glowRef.current, {
      opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out',
    }, 0);

    // Pre-line
    tl.to(prelineRef.current, {
      opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85,
    }, 0.25);

    // Main title
    tl.to(titleRef.current, {
      opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.0,
    }, 0.55);

    // Subtitle
    tl.to(subtitleRef.current, {
      opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75,
    }, 0.90);

    // Divider
    tl.to(dividerRef.current, {
      opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.55,
    }, 1.10);

    // Details block
    tl.to(detailsRef.current, {
      opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75,
    }, 1.25);

    // CTA button
    tl.to(buttonRef.current, {
      opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.70,
    }, 1.60);

    // Closing line
    tl.to(closingRef.current, {
      opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.65,
    }, 1.90);

    return () => {
      ScrollTrigger.getAll()
        .filter(st => st.vars?.trigger === section)
        .forEach(st => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="invite-section" ref={sectionRef} aria-label="Event invitation">

      {/* Background glow */}
      <div className="invite-glow" ref={glowRef} aria-hidden="true" />

      {/* Centered card */}
      <div className="invite-card">

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

        <dl className="invite-details" ref={detailsRef}>
          <div className="invite-detail-row">
            <dt>Date</dt>
            <dd>{inviteDetails.date}</dd>
          </div>
          <div className="invite-detail-row">
            <dt>Time</dt>
            <dd>{inviteDetails.time}</dd>
          </div>
          <div className="invite-detail-row">
            <dt>Venue</dt>
            <dd>{inviteDetails.venue}</dd>
          </div>
          <div className="invite-detail-row">
            <dt>Location</dt>
            <dd>{inviteDetails.address}</dd>
          </div>
        </dl>

        <div className="invite-cta" ref={buttonRef}>
          <a
            className="invite-button"
            href={rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Confirm attendance on WhatsApp — ${inviteDetails.rsvp}`}
          >
            Confirm on WhatsApp
          </a>
        </div>

        <p className="invite-closing" ref={closingRef}>
          {inviteDetails.closing}
        </p>

      </div>
    </section>
  );
}

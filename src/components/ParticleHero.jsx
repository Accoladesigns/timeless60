/**
 * ParticleHero.jsx
 *
 * WebGL particle portrait hero for Deepak Parikh at 60.
 *
 * Flow:
 *  1. Loads /deepak-hero-particles.png into an offscreen canvas.
 *  2. Samples every visible pixel into a Three.js BufferGeometry.
 *  3. Camera starts very close (abstract particle cloud).
 *  4. Scrolling pins the section and drives the camera zoom-out,
 *     gradually revealing the full portrait + "60".
 *  5. Mouse / touch softly repels nearby particles.
 *
 * Dependencies: three, gsap (ScrollTrigger)
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sampleImageToParticles } from '../utils/sampleImageToParticles';
import './ParticleHero.css';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// GLSL: Vertex shader
// Each particle's position is updated every frame by the JS physics loop and
// written back to the BufferAttribute.  Here we only handle per-vertex sizing
// (perspective-correct) and colour pass-through.
// ─────────────────────────────────────────────────────────────────────────────
const VERT = /* glsl */ `
  attribute vec3  aColor;
  attribute float aSize;

  uniform float uPixelRatio;
  uniform float uOpacity;

  varying vec3  vColor;
  varying float vOpacity;

  void main() {
    vColor   = aColor;
    vOpacity = uOpacity;

    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    float depth = max(0.001, -mvPos.z);

    // Perspective-correct point size — tuned for ~2px crisp dots at
    // the final reveal distance (camera z ≈ 2.2).
    float sz = aSize * uPixelRatio * 3.2 / depth;
    gl_PointSize = clamp(sz, uPixelRatio * 0.5, uPixelRatio * 5.0);

    gl_Position = projectionMatrix * mvPos;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// GLSL: Fragment shader
// Circular particle with a brighter core and a soft fade at the edge.
// AdditiveBlending means overlapping bright particles create natural glow.
// ─────────────────────────────────────────────────────────────────────────────
const FRAG = /* glsl */ `
  varying vec3  vColor;
  varying float vOpacity;

  void main() {
    float dist = length(gl_PointCoord - 0.5);

    // Hard circle — discard outside radius.
    if (dist > 0.5) discard;

    // Single-pixel anti-alias at the very edge for sub-pixel smoothness,
    // but NO soft glow and NO brightened core. Razor-sharp dots.
    float alpha = 1.0 - smoothstep(0.46, 0.5, dist);

    gl_FragColor = vec4(vColor, alpha * vOpacity);
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Per-device configuration
// ─────────────────────────────────────────────────────────────────────────────
const DEVICE_CFG = {
  mobile:  { targetCount: 10_000, mouseRadius: 0.50, mouseStrength: 0.007 },
  tablet:  { targetCount: 22_000, mouseRadius: 0.40, mouseStrength: 0.010 },
  desktop: { targetCount: 55_000, mouseRadius: 0.35, mouseStrength: 0.014 },
};

// World-space width of the mapped image plane (Three.js units).
const IMAGE_SCALE = 2.8;

// Camera Z positions: start (abstract close-up) → end (full reveal).
const CAM_Z_START = 0.18;  // very close — abstract bokeh cloud
const CAM_Z_END   = 2.2;   // far enough to see full portrait clearly

// Maximum Z-spread of particles at scroll=0 (collapses to 0 at scroll=1).
// Particles only scatter in negative Z (behind the z=0 plane),
// so the camera at positive Z always sees them all.
const DEPTH_SPREAD = 0.45;

// Spring & damping (all per 60 fps frame; scaled by dt each loop).
const SPRING    = 0.030; // XY pull-toward-target strength
const SPRING_Z  = 0.028; // Z collapse strength
const DAMP_BASE = 0.88;  // velocity damping per 60 fps frame

// Idle float amplitude (world units) and angular speed.
const IDLE_AMP = 0.006;
const IDLE_SPD = 0.50;


// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function ParticleHero() {
  const heroRef = useRef(null); // the 100vh canvas host — GSAP pins this
  const rafRef  = useRef(null);

  useEffect(() => {
    const sticky = heroRef.current;
    if (!sticky) return;

    // ── Reduced-motion: skip WebGL, show static fallback ─────────────────
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // ── Device config ─────────────────────────────────────────────────────
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw <= 768;
    const cfg = vw <= 768 ? DEVICE_CFG.mobile
               : vw <= 1024 ? DEVICE_CFG.tablet
               : DEVICE_CFG.desktop;

    const MOUSE_RAD  = cfg.mouseRadius;
    const MOUSE_STR  = cfg.mouseStrength;
    const MOUSE_RAD2 = MOUSE_RAD * MOUSE_RAD;

    // ── Three.js bootstrap ────────────────────────────────────────────────
    const canvas = document.createElement('canvas');
    sticky.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
    });
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(vw, vh);
    renderer.setClearColor(0x000000, 1);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, vw / vh, 0.001, 100);
    camera.position.set(0, -0.04, CAM_Z_START);

    // ── Runtime state ──────────────────────────────────────────────────────
    let points = null;
    let geo    = null;
    let mat    = null;

    // Particle typed arrays (set after image loads)
    let N      = 0;
    let origX  = null;
    let origY  = null;
    let depths = null;
    let posArr = null; // live Float32Array feeding the BufferAttribute
    let velX   = null; // x displacement velocity (mouse repulsion)
    let velY   = null; // y displacement velocity (mouse repulsion)

    // Scroll
    let rawProgress    = 0;
    let smoothProgress = 0;

    // Pointer
    let ptrX = 0;
    let ptrY = 0;
    let ptrActive = false;

    // Time
    let t       = 0;
    let lastNow = performance.now();

    // ── ScrollTrigger pin — created BEFORE image loads ───────────────────
    // This must happen here (not inside img.onload) so the 2400px spacer
    // exists in the DOM before TimelessQuoteSection's useEffect runs its
    // own ScrollTrigger.create().  React runs sibling useEffects in tree
    // order, so hero fires first — but image loading is async and would
    // otherwise create the spacer too late for the quote trigger.
    ScrollTrigger.create({
      trigger:    sticky,
      start:      'top top',
      end:        '+=2400',
      pin:        true,
      pinSpacing: true,
      onUpdate(self) {
        rawProgress = self.progress;
      },
    });

    // ── Load image ────────────────────────────────────────────────────────
    let destroyed = false;
    const img = new Image();

    img.onload = () => {
      if (destroyed) return;

      // ── Sample image into particle data ───────────────────────────────
      const sampled = sampleImageToParticles({
        img,
        targetCount: cfg.targetCount,
        imageScale:  IMAGE_SCALE,
      });

      N      = sampled.count;
      origX  = sampled.origX;
      origY  = sampled.origY;
      depths = sampled.depths;

      // Live position + velocity arrays
      posArr = new Float32Array(N * 3);
      velX   = new Float32Array(N);
      velY   = new Float32Array(N);

      // Initialise positions: XY at image, Z spread for depth
      for (let i = 0; i < N; i++) {
        posArr[i * 3]     = origX[i];
        posArr[i * 3 + 1] = origY[i];
        posArr[i * 3 + 2] = depths[i] * DEPTH_SPREAD;
      }

      // ── Geometry ──────────────────────────────────────────────────────
      geo = new THREE.BufferGeometry();
      const posAttr   = new THREE.BufferAttribute(posArr, 3);
      posAttr.setUsage(THREE.DynamicDrawUsage); // hint: updated every frame
      geo.setAttribute('position', posAttr);
      geo.setAttribute('aColor', new THREE.BufferAttribute(sampled.colors, 3));
      geo.setAttribute('aSize',  new THREE.BufferAttribute(sampled.sizes,  1));

      // ── Material ──────────────────────────────────────────────────────
      mat = new THREE.ShaderMaterial({
        vertexShader:   VERT,
        fragmentShader: FRAG,
        uniforms: {
          uPixelRatio: { value: dpr },
          uOpacity:    { value: 0.65 },
        },
        transparent: true,
        blending:    THREE.AdditiveBlending,
        depthWrite:  false,
        depthTest:   false,
      });

      points = new THREE.Points(geo, mat);
      scene.add(points);

      // ── Kick off the render loop ───────────────────────────────────────
      lastNow = performance.now();
      rafRef.current = requestAnimationFrame(loop);
    };

    img.onerror = () => {
      console.warn(
        '[ParticleHero] Could not load /deepak-hero-particles.png — ' +
        'place the image in the /public folder and reload.'
      );
    };

    img.src = '/deepak-hero-particles.png';

    // ─────────────────────────────────────────────────────────────────────
    // RENDER LOOP
    // ─────────────────────────────────────────────────────────────────────
    function loop() {
      rafRef.current = requestAnimationFrame(loop);

      const now = performance.now();
      // dt: elapsed time normalised to a 60 fps frame.
      // Capped at 4 so a tab coming back from background doesn't explode.
      const dt = Math.min((now - lastNow) / 16.667, 4);
      lastNow  = now;
      t += dt * 0.016; // wall-clock seconds (approx)

      // ── Smooth scroll progress (for particle physics only) ───────────
      // smoothProgress intentionally lags rawProgress — gives the particle
      // spring/depth/idle a nice organic feel while camera is decoupled.
      smoothProgress += (rawProgress - smoothProgress) * 0.09;
      const sp = smoothProgress;

      // ── Camera — driven by rawProgress directly (no lag) ─────────────
      // Using rawProgress (not smoothProgress) guarantees the portrait is
      // fully revealed before the pin releases regardless of scroll speed.
      // Zoom target is reached at rawProgress 0.60, giving 40% hold time.
      const camProg    = Math.min(rawProgress / 0.60, 1.0);
      const targetCamZ = CAM_Z_START + camProg * (CAM_Z_END - CAM_Z_START);
      const targetCamY = (1 - camProg) * -0.04;
      // Fast lerp (0.18) so camera catches the target within a few frames.
      camera.position.z += (targetCamZ - camera.position.z) * 0.18 * dt;
      camera.position.y += (targetCamY - camera.position.y) * 0.18 * dt;

      // Subtle forward tilt that flattens as the portrait reveals
      if (points) {
        points.rotation.x += ((1 - camProg) * 0.055 - points.rotation.x) * 0.10 * dt;
      }

      // ── Depth spread: collapses to 0 as scroll progresses ─────────────
      const depthMult = Math.max(0, 1 - sp * 1.3) * DEPTH_SPREAD;

      // ── Opacity: brightens on reveal ──────────────────────────────────
      if (mat) {
        mat.uniforms.uOpacity.value += (0.62 + sp * 0.38 - mat.uniforms.uOpacity.value) * 0.05 * dt;
      }

      // ── Skip particle physics if geometry not ready ───────────────────
      if (!N || !posArr || !geo) {
        renderer.render(scene, camera);
        return;
      }

      // ── Pointer → world space at z = 0 plane ──────────────────────────
      // Approximation: project mouse NDC through the camera frustum onto z=0.
      const fovRad = (camera.fov * Math.PI) / 180;
      const cz     = camera.position.z;
      const planeH = 2 * Math.tan(fovRad / 2) * cz;
      const planeW = planeH * camera.aspect;
      const mwx    = ptrX * (planeW * 0.5);
      const mwy    = ptrY * (planeH * 0.5);

      // Pre-compute damping raised to dt (frame-rate-independent decay)
      const damp = Math.pow(DAMP_BASE, dt);

      // ── Per-particle physics ──────────────────────────────────────────
      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        const px = posArr[i3];
        const py = posArr[i3 + 1];
        const pz = posArr[i3 + 2];

        // Target position
        const tx = origX[i];
        const ty = origY[i];
        const tz = depths[i] * depthMult;

        // Idle float — each particle has its own phase via depths[]
        const ph  = depths[i] * 6.2832; // phase seed in [0, 2π]
        const idX = Math.sin(t * IDLE_SPD + ph) * IDLE_AMP;
        const idY = Math.cos(t * IDLE_SPD * 0.73 + ph * 1.31) * IDLE_AMP;

        // Mouse / touch repulsion
        let repX = 0;
        let repY = 0;
        if (ptrActive) {
          const dx = px - mwx;
          const dy = py - mwy;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RAD2 && d2 > 1e-8) {
            const d = Math.sqrt(d2);
            const f = (1.0 - d / MOUSE_RAD) * MOUSE_STR * dt;
            repX = (dx / d) * f;
            repY = (dy / d) * f;
          }
        }

        // Spring force toward (target + idle)
        const sx = (tx + idX - px) * SPRING * dt;
        const sy = (ty + idY - py) * SPRING * dt;
        const sz = (tz        - pz) * SPRING_Z * dt;

        // Integrate velocity (mouse repulsion adds impulse, spring pulls back)
        velX[i] = (velX[i] + sx + repX) * damp;
        velY[i] = (velY[i] + sy + repY) * damp;

        posArr[i3]     = px + velX[i];
        posArr[i3 + 1] = py + velY[i];
        posArr[i3 + 2] = pz + sz;
      }

      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Event listeners
    // ─────────────────────────────────────────────────────────────────────
    const onMouseMove = (e) => {
      ptrX = (e.clientX / window.innerWidth)  * 2 - 1;
      ptrY = -(e.clientY / window.innerHeight) * 2 + 1;
      ptrActive = true;
    };
    const onMouseLeave = () => { ptrActive = false; };

    const onTouchMove = (e) => {
      if (!e.touches.length) return;
      ptrX = (e.touches[0].clientX / window.innerWidth)  * 2 - 1;
      ptrY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      ptrActive = true;
    };
    const onTouchEnd = () => { ptrActive = false; };

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (mat) mat.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    };

    window.addEventListener('mousemove',  onMouseMove,          { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove',  onTouchMove,          { passive: true });
    window.addEventListener('touchend',   onTouchEnd,           { passive: true });
    window.addEventListener('resize',     onResize);

    // ─────────────────────────────────────────────────────────────────────
    // Cleanup
    // ─────────────────────────────────────────────────────────────────────
    return () => {
      destroyed = true;

      cancelAnimationFrame(rafRef.current);

      window.removeEventListener('mousemove',  onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('resize',     onResize);

      ScrollTrigger.getAll().forEach((st) => st.kill());

      geo?.dispose();
      mat?.dispose();
      renderer.dispose();

      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return (
    <div className="particle-hero" ref={heroRef}>
      {/* Three.js canvas is injected here by the useEffect */}

      {/* Reduced-motion / no-JS fallback */}
      <noscript>
        <img
          src="/deepak-hero-particles.png"
          alt="Deepak Parikh at 60"
          className="particle-fallback"
        />
      </noscript>
    </div>
  );
}

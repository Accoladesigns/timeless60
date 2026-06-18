/**
 * sampleImageToParticles.js
 *
 * Converts an HTMLImageElement into typed arrays for a Three.js particle system.
 * Returns only pixels that are bright/colourful enough to be worth rendering —
 * dark/transparent pixels (the background) are discarded.
 *
 * The image is mapped to a centred world-space plane whose total width
 * equals `imageScale` Three.js units.  The height is derived from the image
 * aspect ratio so nothing is stretched.
 *
 * @param {object}           opts
 * @param {HTMLImageElement} opts.img          - Fully loaded image element
 * @param {number}           opts.targetCount  - Desired particle count (approximate)
 * @param {number}           opts.imageScale   - Width of the mapped plane in world units
 *
 * @returns {{
 *   origX:  Float32Array,   // original world-space X per particle
 *   origY:  Float32Array,   // original world-space Y per particle
 *   depths: Float32Array,   // random value in [-1, 1] — used as Z-spread seed
 *   colors: Float32Array,   // interleaved R,G,B in [0,1]
 *   sizes:  Float32Array,   // point size hint per particle
 *   count:  number          // actual particle count
 * }}
 */
export function sampleImageToParticles({ img, targetCount, imageScale }) {
  const W = img.naturalWidth;
  const H = img.naturalHeight;

  if (W === 0 || H === 0) {
    console.error('[sampleImageToParticles] Image has zero dimensions.');
    return { origX: new Float32Array(0), origY: new Float32Array(0), depths: new Float32Array(0), colors: new Float32Array(0), sizes: new Float32Array(0), count: 0 };
  }

  // ── Offscreen canvas ──────────────────────────────────────────────────────
  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0);
  const { data } = ctx.getImageData(0, 0, W, H);

  // ── Stride: how many pixels to skip to hit ~targetCount particles ─────────
  // We accept every (stride × stride) pixel block.  Some will be discarded
  // (dark/transparent) so actual count will be slightly under target.
  const stride = Math.max(1, Math.floor(Math.sqrt((W * H) / targetCount)));

  // ── First pass: count valid pixels ───────────────────────────────────────
  let validCount = 0;
  for (let y = 0; y < H; y += stride) {
    for (let x = 0; x < W; x += stride) {
      const idx = (y * W + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      // Perceptual brightness (ITU-R BT.601)
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      if (brightness > 0.03 && a > 20) validCount++;
    }
  }

  // ── Allocate typed arrays ─────────────────────────────────────────────────
  const origX  = new Float32Array(validCount);
  const origY  = new Float32Array(validCount);
  const depths = new Float32Array(validCount);
  const colors = new Float32Array(validCount * 3);
  const sizes  = new Float32Array(validCount);

  // ── Image aspect ratio ────────────────────────────────────────────────────
  const aspect = H / W;

  // ── Second pass: populate arrays ──────────────────────────────────────────
  let i = 0;
  for (let y = 0; y < H; y += stride) {
    for (let x = 0; x < W; x += stride) {
      const idx = (y * W + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      const rn = r / 255;
      const gn = g / 255;
      const bn = b / 255;
      const brightness = 0.299 * rn + 0.587 * gn + 0.114 * bn;

      if (brightness <= 0.03 || a <= 20) continue;

      // ── World-space position ──────────────────────────────────────────────
      // X: left edge = -imageScale/2, right edge = +imageScale/2
      // Y: top = +imageScale*aspect/2, bottom = -imageScale*aspect/2
      origX[i] = ((x / W) - 0.5) * imageScale;
      origY[i] = -(((y / H) - 0.5) * imageScale * aspect);

      // ── Depth seed ───────────────────────────────────────────────────────
      // Deterministic-ish via position so particles keep their depth identity
      // across frames; randomness still looks organic.
      depths[i] = -Math.random(); // [-1, 0]: particles scatter behind z=0
      // Camera sits at positive Z looking toward -Z, so all particles
      // are always in front of the camera regardless of scroll progress.

      // ── Colour ───────────────────────────────────────────────────────────
      colors[i * 3]     = rn;
      colors[i * 3 + 1] = gn;
      colors[i * 3 + 2] = bn;

      // ── Size: slightly larger for brighter particles ──────────────────────
      // Range: ~0.7 (dim) to ~2.2 (very bright)
      sizes[i] = 0.7 + brightness * 1.5;

      i++;
    }
  }

  return { origX, origY, depths, colors, sizes, count: i };
}

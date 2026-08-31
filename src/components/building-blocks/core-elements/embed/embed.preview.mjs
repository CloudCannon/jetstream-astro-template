import { band, cropCorners, media, preview } from "../../../../../scripts/previews/kit.mjs";

// Crop marks rather than a photo glyph — the cue for "third-party frame"
// instead of "picture", which a plain surface cannot convey.
const B = band(560);
const H = 340;

export default preview({
  width: 560,
  title: "Embed",
  draw: [
    media(B.left, 0, B.w, H),
    cropCorners(B.left, 0, B.w, H, { inset: 60, insetY: 56, arm: 96, legH: 88 }),
  ],
});

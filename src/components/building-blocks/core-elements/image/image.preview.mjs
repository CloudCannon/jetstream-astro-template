import { band, media, photoGlyph, preview } from "../../../../../scripts/previews/kit.mjs";

// A single media surface carrying the sun-and-peaks placeholder glyph.
const B = band(560);
const H = 340;

export default preview({
  width: 560,
  title: "Image",
  draw: [media(B.left, 0, B.w, H), photoGlyph(B.left, 0, B.w, H)],
});

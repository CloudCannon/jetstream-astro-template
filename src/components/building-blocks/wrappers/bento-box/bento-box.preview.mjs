import { band, media, photoGlyph, preview } from "../../../../../scripts/previews/kit.mjs";

// Deliberately uneven cells — spanning tiles are exactly what separates a bento
// box from the uniform `grid`.
const B = band(960);
const GAP = 30;
const ROW_H = 220;
const WIDE = Math.round((B.w - GAP) * 0.62);
const NARROW = B.w - GAP - WIDE;

const cell = (x, y, w, h) => [media(x, y, w, h), photoGlyph(x, y, w, h)];

export default preview({
  width: 960,
  title: "Bento box",
  draw: [
    cell(B.left, 0, WIDE, ROW_H),
    cell(B.left + WIDE + GAP, 0, NARROW, ROW_H * 2 + GAP),
    cell(B.left, ROW_H + GAP, Math.round((WIDE - GAP) / 2), ROW_H),
    cell(
      B.left + Math.round((WIDE - GAP) / 2) + GAP,
      ROW_H + GAP,
      WIDE - GAP - Math.round((WIDE - GAP) / 2),
      ROW_H
    ),
  ],
});

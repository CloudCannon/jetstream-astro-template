import {
  band,
  bar,
  centerX,
  dot,
  lines,
  media,
  photoGlyph,
  plate,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Centred header over a lattice of bordered feature cards, the first spanning
// two columns — the uneven grid is this section's signature.
const B = band(1120);
const GAP = 30;
const ROW_H = 210;
const GRID_Y = 250;
const HALF = Math.round((B.w - GAP) / 2);
const THIRD = Math.round((B.w - GAP * 2) / 3);

const card = (x, y, w, h) => [
  plate(x, y, w, h),
  media(x + 24, y + 24, w - 48, h - 100),
  photoGlyph(x + 24, y + 24, w - 48, h - 100),
  bar(x + 24, y + h - 60, Math.round(w * 0.5), "label"),
];

export default preview({
  width: 1120,
  title: "Feature grid",
  draw: [
    dot(B.cx, 26, 26),
    centerX(B.cx, [bar(0, 78, 600, "display")]),
    centerX(B.cx, lines(0, 148, [780, 660], { align: "center", within: 780 })),
    card(B.left, GRID_Y, HALF, ROW_H),
    card(B.left + HALF + GAP, GRID_Y, HALF, ROW_H),
    [0, 1, 2].map((i) => card(B.left + i * (THIRD + GAP), GRID_Y + ROW_H + GAP, THIRD, ROW_H)),
  ],
});

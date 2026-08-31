import {
  band,
  columns,
  media,
  photoGlyph,
  preview,
  repeat,
} from "../../../../../scripts/previews/kit.mjs";

// An even three-across, two-down lattice. Uniform cells are the point — the
// bento box preview is the one that varies them.
const B = band(960);
const COLS = 3;
const GAP = 30;
const CELL = Math.round((B.w - GAP * (COLS - 1)) / COLS);
const ROW_H = 220;

export default preview({
  width: 960,
  title: "Grid",
  draw: repeat(2, (r) =>
    columns(B.left, COLS, CELL + GAP, () => [
      media(0, r * (ROW_H + GAP), CELL, ROW_H),
      photoGlyph(0, r * (ROW_H + GAP), CELL, ROW_H),
    ])
  ),
});

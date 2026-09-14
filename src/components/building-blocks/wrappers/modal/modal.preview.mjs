import {
  band,
  bar,
  lines,
  panel,
  pill,
  plate,
  preview,
  box,
  glyph,
} from "../../../../../scripts/previews/kit.mjs";

// A raised panel over a dimmed page — the backdrop is what makes it read as a
// modal rather than a card.
const B = band(1120);
const DIALOG_W = 620;
const DIALOG_H = 380;
const DX = B.cx - DIALOG_W / 2;

export default preview({
  width: 1120,
  title: "Modal",
  draw: [
    box(B.left, 0, B.w, 560, { fill: panel, r: 0 }),
    plate(DX, 90, DIALOG_W, DIALOG_H),
    bar(DX + 40, 140, 340, "heading"),
    box(DX + DIALOG_W - 76, 138, 36, 36, { r: 18, fill: glyph }),
    lines(DX + 40, 208, [540, 500, 420]),
    pill(DX + 40, 380, 190, 66, { variant: "ink", label: 96 }),
    pill(DX + 250, 380, 170, 66, { variant: "ghost", label: 80 }),
  ],
});

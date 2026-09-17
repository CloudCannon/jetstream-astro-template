import {
  band,
  box,
  centerX,
  lines,
  media,
  panel,
  photoGlyph,
  preview,
  bar,
} from "../../../../../scripts/previews/kit.mjs";

// The generic wrapper: a padded, tinted band holding arbitrary stacked blocks.
// It has no fixed content, so the padding frame is the subject.
const B = band(1120);
const H = 520;
const PAD = 70;
const INNER = B.w - PAD * 2;

export default preview({
  width: 1120,
  title: "Custom section",
  draw: [
    box(B.left, 0, B.w, H, { fill: panel, r: 0 }),
    centerX(B.cx, [bar(0, PAD, 460, "display")]),
    centerX(B.cx, lines(0, PAD + 74, [740, 640], { align: "center", within: 740 })),
    media(B.left + PAD, 250, INNER, 200),
    photoGlyph(B.left + PAD, 250, INNER, 200),
  ],
});

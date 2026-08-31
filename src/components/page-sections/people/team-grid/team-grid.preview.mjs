import {
  band,
  bar,
  centerX,
  dot,
  lines,
  media,
  photoGlyph,
  preview,
  repeat,
} from "../../../../../scripts/previews/kit.mjs";

// Centred header over a row of portrait cards, each with a name and role — the
// portrait aspect plus two-line caption reads as people, not features.
const B = band(1120);
const COUNT = 4;
const GAP = 30;
const CARD_W = Math.round((B.w - GAP * (COUNT - 1)) / COUNT);
const IMG_H = 300;
const Y = 220;

export default preview({
  width: 1120,
  title: "Team grid",
  draw: [
    dot(B.cx, 26, 26),
    centerX(B.cx, [bar(0, 78, 560, "display")]),
    centerX(B.cx, lines(0, 142, [720, 600], { align: "center", within: 720 })),
    repeat(COUNT, (i) => {
      const x = B.left + i * (CARD_W + GAP);
      const w = i === COUNT - 1 ? B.right - x : CARD_W;

      return [
        media(x, Y, w, IMG_H),
        photoGlyph(x, Y, w, IMG_H),
        bar(x, Y + IMG_H + 26, Math.round(w * 0.7), "label"),
        bar(x, Y + IMG_H + 58, Math.round(w * 0.5), "body"),
      ];
    }),
  ],
});

import {
  band,
  bar,
  centerX,
  dots,
  lines,
  media,
  photoGlyph,
  plate,
  preview,
  repeat,
} from "../../../../../scripts/previews/kit.mjs";

// Header over a row of equal cards plus position dots — a carousel of cards
// rather than of full-width slides.
const B = band(1120);
const COUNT = 3;
const GAP = 34;
const CARD_W = Math.round((B.w - GAP * (COUNT - 1)) / COUNT);
const CARD_H = 330;
const Y = 210;

export default preview({
  width: 1120,
  title: "Feature carousel grid",
  draw: [
    centerX(B.cx, [bar(0, 0, 560, "display")]),
    centerX(B.cx, lines(0, 70, [740, 600], { align: "center", within: 740 })),
    repeat(COUNT, (i) => {
      const x = B.left + i * (CARD_W + GAP);
      // The last card absorbs the rounding remainder so the row lands exactly
      // on the band edge.
      const w = i === COUNT - 1 ? B.right - x : CARD_W;

      return [
        plate(x, Y, w, CARD_H),
        media(x + 26, Y + 26, w - 52, 170),
        photoGlyph(x + 26, Y + 26, w - 52, 170),
        bar(x + 26, Y + 224, Math.round(w * 0.55), "label"),
        bar(x + 26, Y + 262, w - 52, "body"),
        bar(x + 26, Y + 288, w - 130, "body"),
      ];
    }),
    dots(B.cx, Y + CARD_H + 50, 4, 0),
  ],
});

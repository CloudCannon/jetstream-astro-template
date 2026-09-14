import {
  band,
  bar,
  centerX,
  lines,
  media,
  photoGlyph,
  pill,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Everything centred over a wide image — display-scale type marks it as a hero,
// not a CTA.
const B = band(1120);
const IMG_H = 300;
const IMG_Y = 400;

export default preview({
  width: 1120,
  title: "Hero center",
  draw: [
    centerX(B.cx, [bar(0, 20, 220, "label")]),
    centerX(B.cx, [bar(0, 64, 900, "display"), bar(0, 124, 620, "display")]),
    centerX(B.cx, lines(0, 208, [820, 700], { align: "center", within: 820 })),
    centerX(B.cx, [
      pill(0, 290, 230, 76, { variant: "ink", label: 110 }),
      pill(260, 290, 200, 76, { variant: "ghost", label: 90 }),
    ]),
    media(B.left, IMG_Y, B.w, IMG_H),
    photoGlyph(B.left, IMG_Y, B.w, IMG_H),
  ],
});

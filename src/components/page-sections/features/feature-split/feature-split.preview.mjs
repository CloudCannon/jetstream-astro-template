import {
  band,
  bar,
  lines,
  media,
  photoGlyph,
  pill,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Copy column beside a portrait image — taller and narrower than the CTA split,
// which is what tells them apart.
const B = band(1120);
const IMG_W = 400;
const GAP = 90;
const COPY_W = B.w - IMG_W - GAP;
const IMG_H = 520;

export default preview({
  width: 1120,
  title: "Feature split",
  draw: [
    bar(B.left, 60, 200, "label"),
    bar(B.left, 106, COPY_W, "display"),
    bar(B.left, 162, Math.round(COPY_W * 0.6), "display"),
    lines(B.left, 240, [COPY_W, COPY_W - 70, COPY_W - 30, 320]),
    pill(B.left, 380, 230, 74, { variant: "ink", label: 110 }),
    media(B.left + COPY_W + GAP, 0, IMG_W, IMG_H),
    photoGlyph(B.left + COPY_W + GAP, 0, IMG_W, IMG_H),
  ],
});

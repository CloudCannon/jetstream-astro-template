import {
  band,
  bar,
  lines,
  media,
  photoGlyph,
  pill,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Copy on one side, image on the other — the asymmetry is what separates this
// from `cta-center`.
const B = band(1120);
const COPY_W = 520;
const GAP = 80;
const IMG_W = B.w - COPY_W - GAP;
const IMG_H = 400;

export default preview({
  width: 1120,
  title: "CTA split",
  draw: [
    bar(B.left, 40, 460, "display"),
    bar(B.left, 96, 340, "display"),
    lines(B.left, 176, [520, 470, 400]),
    pill(B.left, 300, 220, 74, { variant: "ink", label: 110 }),
    pill(B.left + 250, 300, 190, 74, { variant: "ghost", label: 90 }),
    media(B.left + COPY_W + GAP, 0, IMG_W, IMG_H),
    photoGlyph(B.left + COPY_W + GAP, 0, IMG_W, IMG_H),
  ],
});

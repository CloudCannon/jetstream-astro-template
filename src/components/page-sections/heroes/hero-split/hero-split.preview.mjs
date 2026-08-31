import {
  band,
  bar,
  lines,
  media,
  photoGlyph,
  pill,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Hero copy beside a tall image — display type at the largest scale is what
// separates this from `feature-split`.
const B = band(1120);
const IMG_W = 480;
const GAP = 80;
const COPY_W = B.w - IMG_W - GAP;
const IMG_H = 480;

export default preview({
  width: 1120,
  title: "Hero split",
  draw: [
    bar(B.left, 40, 210, "label"),
    bar(B.left, 90, COPY_W, "display"),
    bar(B.left, 150, COPY_W, "display"),
    bar(B.left, 210, Math.round(COPY_W * 0.55), "display"),
    lines(B.left, 300, [COPY_W, COPY_W - 60, 400]),
    pill(B.left, 400, 240, 78, { variant: "ink", label: 112 }),
    pill(B.left + 270, 400, 200, 78, { variant: "ghost", label: 92 }),
    media(B.left + COPY_W + GAP, 0, IMG_W, IMG_H),
    photoGlyph(B.left + COPY_W + GAP, 0, IMG_W, IMG_H),
  ],
});

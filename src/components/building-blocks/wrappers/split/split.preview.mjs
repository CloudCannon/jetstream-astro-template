import {
  band,
  lines,
  media,
  photoGlyph,
  pill,
  preview,
  bar,
} from "../../../../../scripts/previews/kit.mjs";

// Two columns of equal weight — copy one side, media the other.
const B = band(960);
const COL = 450;
const GAP = B.w - COL * 2;
const H = 420;

export default preview({
  width: 960,
  title: "Split",
  draw: [
    bar(B.left, 40, 380, "display"),
    lines(B.left, 130, [450, 400, 430, 300]),
    pill(B.left, 300, 200, 68, { variant: "ink", label: 100 }),
    media(B.left + COL + GAP, 0, COL, H),
    photoGlyph(B.left + COL + GAP, 0, COL, H),
  ],
});

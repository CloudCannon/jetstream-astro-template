import {
  band,
  bar,
  lines,
  media,
  photoGlyph,
  pill,
  plate,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Image, copy and an action inside one bordered plate — the enclosing border is
// the component; everything inside is filler.
const B = band(760);
const PAD = 40;
const IMG_H = 240;

export default preview({
  width: 760,
  title: "Card",
  draw: [
    plate(B.left, 0, B.w, 560),
    media(B.left + PAD, PAD, B.w - PAD * 2, IMG_H),
    photoGlyph(B.left + PAD, PAD, B.w - PAD * 2, IMG_H),
    bar(B.left + PAD, PAD + IMG_H + 34, 360, "heading"),
    lines(B.left + PAD, PAD + IMG_H + 84, [680, 620, 500]),
    pill(B.left + PAD, 440, 200, 68, { variant: "ink", label: 100 }),
  ],
});

import {
  band,
  media,
  photoGlyph,
  preview,
  repeat,
  STROKE,
  subject,
} from "../../../../../scripts/previews/kit.mjs";

// A main image over a thumbnail strip — the strip is the distinguishing feature
// against the generic `carousel`.
const B = band(960);
const MAIN_H = 400;
const THUMB = 140;
const GAP = 22;
const COUNT = 5;
const STRIP_W = COUNT * THUMB + (COUNT - 1) * GAP;
const ACTIVE = 1;

export default preview({
  width: 960,
  title: "Image carousel",
  draw: [
    media(B.left, 0, B.w, MAIN_H),
    photoGlyph(B.left, 0, B.w, MAIN_H),
    repeat(COUNT, (i) => {
      const x = B.cx - STRIP_W / 2 + i * (THUMB + GAP);
      const y = MAIN_H + 30;

      return [
        media(x, y, THUMB, THUMB, i === ACTIVE ? { stroke: subject, sw: STROKE.active } : {}),
        photoGlyph(x, y, THUMB, THUMB),
      ];
    }),
  ],
});

import { band, bar, caret, field, preview, rule } from "../../../../../scripts/previews/kit.mjs";

// A select-style field, but segmented into day / month / year — that internal
// division is what separates it from a plain dropdown at thumbnail size.
const B = band(560);
const H = 76;
const MID = 34 + H / 2;

export default preview({
  width: 560,
  title: "Date",
  draw: [
    bar(B.left, 0, 180, "label"),
    field(B.left, 34, B.w, H),
    bar(B.left + 24, MID - 6, 40, "body"),
    rule(B.left + 84, MID - 8, 12, { h: 4 }),
    bar(B.left + 110, MID - 6, 40, "body"),
    rule(B.left + 170, MID - 8, 12, { h: 4 }),
    bar(B.left + 196, MID - 6, 64, "body"),
    caret(B.right - 56, MID - 6, 28),
  ],
});

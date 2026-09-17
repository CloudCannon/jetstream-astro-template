import { band, bar, caret, field, preview } from "../../../../../scripts/previews/kit.mjs";

// Field plus a caret: the "this opens a menu" cue.
const B = band(560);
const H = 76;

export default preview({
  width: 560,
  title: "Select",
  draw: [
    bar(B.left, 0, 180, "label"),
    field(B.left, 34, B.w, H),
    bar(B.left + 24, 34 + H / 2 - 6, 190, "body"),
    caret(B.right - 56, 34 + H / 2 - 6, 28),
  ],
});

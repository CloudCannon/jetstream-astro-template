import { band, bar, preview, rule } from "../../../../../scripts/previews/kit.mjs";

// Term / description pairs separated by hairlines — the two-column rhythm is
// the whole identity of a definition list.
const B = band(560);
const TERM = 160;
const DESC_X = 220;
const ROW = 80;

export default preview({
  width: 560,
  title: "Definition list",
  draw: [0, 1, 2].map((i) => [
    bar(B.left, i * ROW, TERM, "label"),
    bar(B.left + DESC_X, i * ROW, B.w - DESC_X, "body"),
    bar(B.left + DESC_X, i * ROW + 26, B.w - DESC_X - 120, "body"),
    i < 2 && rule(B.left, i * ROW + 62, B.w),
  ]),
});

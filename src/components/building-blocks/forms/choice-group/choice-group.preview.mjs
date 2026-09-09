import { band, bar, checkbox, preview } from "../../../../../scripts/previews/kit.mjs";

// Stacked options with one ticked — the mark column plus a selected row is the
// identity of a checkbox / radio group.
const B = band(560);
const D = 32;
const ROW = 60;
const CHECKED = 1;

export default preview({
  width: 560,
  title: "Choice group",
  draw: [
    bar(B.left, 0, 180, "label"),
    [0, 1, 2].map((i) => [
      checkbox(B.left, 40 + i * ROW, D, i === CHECKED),
      bar(B.left + D + 24, 40 + i * ROW + 8, B.w - D - 24 - (i === 2 ? 120 : 0), "label"),
    ]),
  ],
});

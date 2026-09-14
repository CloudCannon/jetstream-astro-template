import { band, bar, field, pill, preview } from "../../../../../scripts/previews/kit.mjs";

// The container: stacked labelled fields finishing in a submit action. The
// whole point is the sequence, so it needs more than one row.
const B = band(560);
const ROW = 116;

export default preview({
  width: 560,
  title: "Form",
  draw: [
    [0, 1].map((i) => [bar(B.left, i * ROW, 170, "label"), field(B.left, i * ROW + 30, B.w, 70)]),
    bar(B.left, 2 * ROW, 170, "label"),
    field(B.left, 2 * ROW + 30, B.w, 130),
    pill(B.left, 2 * ROW + 186, 220, 74, { variant: "ink", label: 110 }),
  ],
});

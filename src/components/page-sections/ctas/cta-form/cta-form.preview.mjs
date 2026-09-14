import { band, bar, field, lines, pill, preview } from "../../../../../scripts/previews/kit.mjs";

// Copy beside a stack of form fields — the fields are the whole difference from
// the other two CTAs.
const B = band(1120);
const COPY_W = 520;
const GAP = 80;
const FORM_X = B.left + COPY_W + GAP;
const FORM_W = B.w - COPY_W - GAP;
const ROW = 110;

export default preview({
  width: 1120,
  title: "CTA form",
  draw: [
    bar(B.left, 30, 470, "display"),
    bar(B.left, 86, 330, "display"),
    lines(B.left, 166, [520, 480, 390]),
    [0, 1].map((i) => [
      bar(FORM_X, i * ROW, 150, "label"),
      field(FORM_X, i * ROW + 30, FORM_W, 66),
    ]),
    bar(FORM_X, 2 * ROW, 150, "label"),
    field(FORM_X, 2 * ROW + 30, FORM_W, 120),
    pill(FORM_X, 2 * ROW + 172, FORM_W, 70, { variant: "ink", label: 130 }),
  ],
});

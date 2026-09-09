import { band, pill, preview } from "../../../../../scripts/previews/kit.mjs";

// A single full-width filled action — a submit button is wider and lonelier
// than the two-variant `button` preview.
const B = band(560);

export default preview({
  width: 560,
  title: "Submit",
  draw: pill(B.left, 0, B.w, 80, { variant: "ink", label: 160 }),
});

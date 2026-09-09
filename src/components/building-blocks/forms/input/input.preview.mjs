import { band, bar, field, preview } from "../../../../../scripts/previews/kit.mjs";

// Label above an empty field — the baseline form control the others vary from.
const B = band(560);

export default preview({
  width: 560,
  title: "Input",
  draw: [bar(B.left, 0, 180, "label"), field(B.left, 34, B.w, 76)],
});

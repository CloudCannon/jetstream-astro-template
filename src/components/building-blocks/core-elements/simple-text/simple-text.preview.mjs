import { band, lines, preview } from "../../../../../scripts/previews/kit.mjs";

// Label-scale and single-paragraph — heavier and shorter than `text`, which is
// what separates the two in the picker.
const B = band(560);

export default preview({
  width: 560,
  title: "Simple text",
  draw: lines(B.left, 0, [560, 420], { size: "label", gap: 18 }),
});

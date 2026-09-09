import { band, lines, preview } from "../../../../../scripts/previews/kit.mjs";

// A prose block: the ragged right edge is what makes this read as body copy.
const B = band(560);

export default preview({
  width: 560,
  title: "Text",
  draw: lines(B.left, 0, [560, 520, 545, 480, 300]),
});

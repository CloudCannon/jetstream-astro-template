import { band, bar, preview } from "../../../../../scripts/previews/kit.mjs";

// Two display bars: a heading is a display-scale block, and the ragged second
// line is what stops it reading as a single unstyled bar.
const B = band(560);

export default preview({
  width: 560,
  title: "Heading",
  draw: [bar(B.left, 0, B.w, "display"), bar(B.left, 58, 380, "display")],
});

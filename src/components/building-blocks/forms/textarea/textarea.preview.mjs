import { band, bar, field, preview } from "../../../../../scripts/previews/kit.mjs";

// Same field treatment as `input`, but tall — the height is the only thing
// that distinguishes the two, so it has to be unmistakable.
const B = band(560);

export default preview({
  width: 560,
  title: "Textarea",
  draw: [bar(B.left, 0, 180, "label"), field(B.left, 34, B.w, 220)],
});

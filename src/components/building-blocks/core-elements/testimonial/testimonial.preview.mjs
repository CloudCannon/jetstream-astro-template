import { band, bar, dot, lines, preview } from "../../../../../scripts/previews/kit.mjs";

// Quote block over an avatar-and-attribution row — the round avatar beside two
// short bars is what separates this from a plain text block.
const B = band(560);
const AV = 34;
const ATTR_Y = 150;

export default preview({
  width: 560,
  title: "Testimonial",
  draw: [
    lines(B.left, 0, [560, 530, 470], { size: "label", gap: 16 }),
    dot(B.left + AV, ATTR_Y + AV, AV),
    bar(B.left + AV * 2 + 24, ATTR_Y + 18, 210, "label"),
    bar(B.left + AV * 2 + 24, ATTR_Y + 44, 150, "body"),
  ],
});

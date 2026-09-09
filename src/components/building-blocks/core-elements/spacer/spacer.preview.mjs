import { band, box, lines, preview, rule, subject } from "../../../../../scripts/previews/kit.mjs";

// The component is empty space, so the preview has to measure it: two content
// blocks, `subject`-weight rules marking the boundaries, and a spine joining
// them. Faint rules made this read as an accidental gap rather than a spacer.
const B = band(560);
const TOP = 100;
const BOTTOM = 232;

export default preview({
  width: 560,
  title: "Spacer",
  draw: [
    lines(B.left, 0, [560, 480]),
    rule(B.left, TOP, B.w, { h: 5, fill: subject }),
    box(B.cx - 3, TOP + 5, 6, BOTTOM - TOP - 5, { r: 3, fill: subject }),
    rule(B.left, BOTTOM, B.w, { h: 5, fill: subject }),
    lines(B.left, BOTTOM + 44, [560, 430]),
  ],
});

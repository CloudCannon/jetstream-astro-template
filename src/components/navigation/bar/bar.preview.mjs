import { band, bar, box, panel, pill, preview, tile } from "../../../../scripts/previews/kit.mjs";

// Logo left, links centre, action right, all on one tinted band running the
// full width — the horizontal bar is the component.
const B = band(1120);
const H = 96;
const MID = H / 2;

export default preview({
  width: 1120,
  title: "Navigation bar",
  draw: [
    box(B.left, 0, B.w, H, { fill: panel, r: 0 }),
    tile(B.left + 36, MID - 24, 48),
    bar(B.left + 100, MID - 8, 130, "label"),
    [0, 1, 2].map((i) => bar(B.cx - 190 + i * 140, MID - 8, 100, "label")),
    pill(B.right - 200, MID - 30, 164, 60, { variant: "ink", label: 84 }),
  ],
});

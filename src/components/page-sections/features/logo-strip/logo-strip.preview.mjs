import { band, centerX, preview, repeat, tile, bar } from "../../../../../scripts/previews/kit.mjs";

// A short lead-in line above a single row of evenly-spaced marks.
const B = band(1120);
const COUNT = 6;
const D = 120;
const GAP = Math.round((B.w - COUNT * D) / (COUNT - 1));

export default preview({
  width: 1120,
  title: "Logo strip",
  draw: [
    centerX(B.cx, [bar(0, 0, 340, "label")]),
    repeat(COUNT, (i) => tile(B.left + i * (D + GAP), 70, D)),
  ],
});

import {
  band,
  bar,
  box,
  columns,
  dot,
  panel,
  preview,
  repeat,
  rule,
} from "../../../../scripts/previews/kit.mjs";

// Link columns above a legal strip with social marks — the multi-column block
// plus the bottom rule is the footer shape.
const B = band(1120);
const H = 440;
const COLS = 4;
const PITCH = 260;

export default preview({
  width: 1120,
  title: "Footer",
  draw: [
    box(B.left, 0, B.w, H, { fill: panel, r: 0 }),
    columns(B.left + 60, COLS, PITCH, () => [
      bar(0, 60, 140, "label"),
      repeat(4, (i) => bar(0, 104 + i * 34, i % 2 ? 150 : 190, "body")),
    ]),
    rule(B.left + 60, 330, B.w - 120),
    bar(B.left + 60, 370, 300, "body"),
    repeat(3, (i) => dot(B.right - 60 - 22 - i * 60, 380, 22)),
  ],
});

import {
  band,
  bar,
  box,
  glyph,
  panel,
  pill,
  preview,
  rule,
  tile,
} from "../../../../scripts/previews/kit.mjs";

// A narrow drawer with a close control and stacked full-width rows — the tall
// portrait panel is the giveaway.
const W = 520;
const H = 640;
const B = band(W);

export default preview({
  width: W,
  exempt: true,
  title: "Mobile navigation",
  draw: [
    box(B.left, 0, W, H, { fill: panel, r: 0 }),
    tile(B.left + 36, 40, 48),
    box(B.left + W - 84, 46, 36, 36, { r: 18, fill: glyph }),
    [0, 1, 2, 3].map((i) => [
      bar(B.left + 36, 150 + i * 84, i % 2 ? 300 : 250, "heading"),
      rule(B.left + 36, 150 + i * 84 + 54, W - 72),
    ]),
    pill(B.left + 36, 520, W - 72, 72, { variant: "ink", label: 120 }),
  ],
});

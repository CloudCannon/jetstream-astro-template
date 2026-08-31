import {
  band,
  bar,
  box,
  ink,
  onInk,
  panel,
  preview,
  rule,
} from "../../../../scripts/previews/kit.mjs";

// A vertical rail beside the page content — the left column plus the content
// area is what says "side navigation" rather than "list".
const B = band(960);
const RAIL_W = 300;
const H = 520;
const ROW = 72;
const ACTIVE = 1;

export default preview({
  width: 960,
  title: "Side navigation",
  draw: [
    box(B.left, 0, RAIL_W, H, { fill: panel, r: 0 }),
    [0, 1, 2, 3, 4].map((i) => {
      const y = 40 + i * ROW;
      const on = i === ACTIVE;

      return [
        on && box(B.left + 16, y - 12, RAIL_W - 32, 52, { fill: ink }),
        bar(B.left + 40, y + 6, i % 2 ? 150 : 190, "label", on ? { fill: onInk } : {}),
      ];
    }),
    bar(B.left + RAIL_W + 60, 40, 380, "display"),
    [0, 1, 2, 3, 4, 5].map((i) => rule(B.left + RAIL_W + 60, 130 + i * 44, B.w - RAIL_W - 60)),
  ],
});

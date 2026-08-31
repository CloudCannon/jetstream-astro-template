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

// The link set on its own, with one item marked current — the active state is
// what distinguishes this from the outer `bar`.
const B = band(760);
const H = 88;
const ITEM_W = 160;
const GAP = 20;
const ACTIVE = 1;

export default preview({
  width: 760,
  title: "Main navigation",
  draw: [
    box(B.left, 0, B.w, H, { fill: panel, r: 0 }),
    [0, 1, 2, 3].map((i) => {
      const x = B.left + 20 + i * (ITEM_W + GAP);
      const on = i === ACTIVE;

      return [
        on && box(x, 14, ITEM_W, H - 28, { fill: ink }),
        bar(x + Math.round((ITEM_W - 96) / 2), H / 2 - 8, 96, "label", on ? { fill: onInk } : {}),
      ];
    }),
    rule(B.left, H, B.w),
  ],
});

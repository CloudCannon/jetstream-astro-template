import {
  band,
  bar,
  box,
  ink,
  onInk,
  preview,
  STROKE,
  glyph,
  paper,
} from "../../../../../scripts/previews/kit.mjs";

// One outlined shell divided into equal cells with a single filled cell — a
// segmented control, not a row of separate buttons.
const B = band(560);
const H = 72;
const COUNT = 3;
const CELL = Math.round(B.w / COUNT);
const ACTIVE = 0;

export default preview({
  width: 560,
  title: "Segments",
  draw: [
    box(B.left, 0, B.w, H, { fill: paper, stroke: glyph, sw: STROKE.control }),
    [0, 1, 2].map((i) => {
      const x = B.left + i * CELL;
      const on = i === ACTIVE;
      const w = i === COUNT - 1 ? B.w - i * CELL : CELL;

      return [
        on && box(x, 0, w, H, { fill: ink }),
        bar(x + Math.round((w - 90) / 2), H / 2 - 6, 90, "body", on ? { fill: onInk } : {}),
      ];
    }),
  ],
});

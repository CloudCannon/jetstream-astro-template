import {
  band,
  bar,
  box,
  dot,
  ink,
  lines,
  preview,
  repeat,
} from "../../../../../scripts/previews/kit.mjs";

// A continuous spine with dated nodes down it — the connecting line is the
// component, so it has to run through every node.
const B = band(960);
const SPINE_X = B.left + 200;
const NODE_R = 18;
const ROW = 130;
const ROWS = 4;
const TOP = 70;

export default preview({
  width: 960,
  title: "Timeline",
  draw: [
    bar(B.left, 0, 520, "display"),
    box(SPINE_X - 3, TOP, 6, (ROWS - 1) * ROW + 20, { r: 3 }),
    repeat(ROWS, (i) => {
      const y = TOP + i * ROW;

      return [
        bar(B.left, y - 6, 150, "label"),
        dot(SPINE_X, y + 4, NODE_R, { fill: i === 0 ? ink : undefined }),
        bar(SPINE_X + 60, y - 10, 380, "heading"),
        lines(SPINE_X + 60, y + 30, [700, 560]),
      ];
    }),
  ],
});

import {
  band,
  bar,
  box,
  dot,
  glyph,
  ink,
  lines,
  navButton,
  preview,
  repeat,
  subject,
} from "../../../../../scripts/previews/kit.mjs";

// A left-aligned header over a spine that runs *across* the section, nodes
// strung along it and the entries hanging beneath. It is a horizontal carousel,
// so the prev/next pair bottom-right is part of the silhouette.
const B = band(1120);
const COLS = 3;
const CARD_W = 350;
const PITCH = Math.round((B.w - CARD_W) / (COLS - 1));
const SPINE_Y = 140;
const SPINE_H = 6;
const NODE_R = 18;
const NAV_Y = 430;

export default preview({
  width: 1120,
  title: "Timeline",
  draw: [
    bar(B.left, 0, 520, "display"),
    lines(B.left, 68, [1080, 700], { fill: subject }),
    box(B.left, SPINE_Y, B.w, SPINE_H, { r: SPINE_H / 2, fill: subject }),
    repeat(COLS, (i) => {
      const x = B.left + i * PITCH;

      return [
        dot(x + 40, SPINE_Y + SPINE_H / 2, NODE_R, { fill: ink }),
        bar(x, 210, 130, "label"),
        bar(x, 250, 290, "heading"),
        lines(x, 300, [340, 300, 250]),
      ];
    }),
    navButton(B.right - 140, NAV_Y, "left", { fill: glyph }),
    navButton(B.right - 40, NAV_Y, "right"),
  ],
});

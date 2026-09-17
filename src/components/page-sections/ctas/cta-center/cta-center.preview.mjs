import {
  band,
  bar,
  centerX,
  dot,
  lines,
  pill,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Everything on the centre line: eyebrow, heading, copy, then paired actions.
const B = band(960);

export default preview({
  width: 960,
  title: "CTA center",
  draw: [
    dot(B.cx, 30, 30),
    centerX(B.cx, [bar(0, 90, 200, "label")]),
    centerX(B.cx, [bar(0, 134, B.w, "display"), bar(0, 190, 560, "display")]),
    centerX(B.cx, lines(0, 262, [800, 680], { align: "center", within: 800 })),
    centerX(B.cx, [
      pill(0, 340, 220, 74, { variant: "ink", label: 110 }),
      pill(250, 340, 190, 74, { variant: "ghost", label: 90 }),
    ]),
  ],
});

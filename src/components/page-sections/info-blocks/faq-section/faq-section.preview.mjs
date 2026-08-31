import {
  band,
  bar,
  caret,
  centerX,
  dot,
  lines,
  plate,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Centred header over accordion rows with the first one open.
const B = band(960);
const OPEN_H = 190;
const ROW_H = 82;
const GAP = 18;
const Y = 210;

export default preview({
  width: 960,
  title: "FAQ section",
  draw: [
    dot(B.cx, 26, 26),
    centerX(B.cx, [bar(0, 78, B.w, "display")]),
    centerX(B.cx, lines(0, 140, [700, 580], { align: "center", within: 700 })),
    plate(B.left, Y, B.w, OPEN_H),
    bar(B.left + 32, Y + 32, 420, "label"),
    caret(B.right - 66, Y + 38, 30),
    lines(B.left + 32, Y + 90, [820, 760, 600]),
    [1, 2].map((i) => {
      const y = Y + OPEN_H + GAP + (i - 1) * (ROW_H + GAP);

      return [
        plate(B.left, y, B.w, ROW_H),
        bar(B.left + 32, y + 33, i === 1 ? 500 : 380, "label"),
        caret(B.right - 66, y + 38, 30),
      ];
    }),
  ],
});

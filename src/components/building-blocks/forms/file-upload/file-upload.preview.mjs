import { band, bar, field, preview, poly, glyph } from "../../../../../scripts/previews/kit.mjs";

// A dashed drop zone with an upward arrow — dashes plus direction are what say
// "drop a file here" rather than "type here".
const B = band(560);
const H = 200;
const CX = B.cx;

export default preview({
  width: 560,
  title: "File upload",
  draw: [
    bar(B.left, 0, 180, "label"),
    field(B.left, 34, B.w, H, { dash: "14 12" }),
    poly(
      [
        [CX - 34, 34 + 108],
        [CX + 34, 34 + 108],
        [CX, 34 + 62],
      ],
      { fill: glyph, round: 6 }
    ),
    bar(CX - 70, 34 + 132, 140, "body"),
  ],
});

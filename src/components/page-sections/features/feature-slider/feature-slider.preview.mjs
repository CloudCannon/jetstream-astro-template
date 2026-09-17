import {
  band,
  bar,
  centerX,
  dots,
  lines,
  media,
  panel,
  photoGlyph,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Header over one wide slide with its neighbours cropped at both edges.
const B = band(1120);
const SLIDE_W = 820;
const PEEK = 130;
const H = 340;
const Y = 220;

export default preview({
  width: 1120,
  title: "Feature slider",
  draw: [
    centerX(B.cx, [bar(0, 0, 520, "display")]),
    centerX(B.cx, lines(0, 70, [760, 620], { align: "center", within: 760 })),
    media(B.left, Y + 40, PEEK, H - 80, { fill: panel }),
    media(B.cx - SLIDE_W / 2, Y, SLIDE_W, H),
    photoGlyph(B.cx - SLIDE_W / 2, Y, SLIDE_W, H),
    media(B.right - PEEK, Y + 40, PEEK, H - 80, { fill: panel }),
    dots(B.cx, Y + H + 50, 4, 1),
  ],
});

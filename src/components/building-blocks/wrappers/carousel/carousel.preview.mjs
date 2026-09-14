import {
  band,
  dots,
  media,
  navButton,
  panel,
  photoGlyph,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// One slide centred with its neighbours cropped at the edges, nav discs and
// position dots — the peeking neighbours are what say "carousel".
const B = band(1120);
const H = 400;
const MAIN = 640;
const PEEK = 200;
const GAP = 20;

export default preview({
  width: 1120,
  title: "Carousel",
  draw: [
    media(B.left, 40, PEEK, H - 80, { fill: panel }),
    media(B.cx - MAIN / 2, 0, MAIN, H),
    photoGlyph(B.cx - MAIN / 2, 0, MAIN, H),
    media(B.right - PEEK, 40, PEEK, H - 80, { fill: panel }),
    navButton(B.cx - MAIN / 2 - GAP - 40, H / 2, "left"),
    navButton(B.cx + MAIN / 2 + GAP + 40, H / 2, "right"),
    dots(B.cx, H + 60, 4, 1),
  ],
});

import {
  band,
  bar,
  dot,
  lines,
  media,
  photoGlyph,
  plate,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// The icon | eyebrow-over-heading | subtext header row, then the feature card
// with its counter row — that header layout is unique to this hero.
const B = band(1120);
const CARD_Y = 210;
const CARD_H = 360;
const CARD_IMG_W = 440;

export default preview({
  width: 1120,
  title: "Hero card",
  draw: [
    dot(B.left + 44, 66, 44),
    bar(B.left + 120, 20, 200, "label"),
    bar(B.left + 120, 54, 560, "display"),
    lines(B.right - 340, 24, [340, 300, 250]),
    plate(B.left, CARD_Y, B.w, CARD_H),
    media(B.left + 30, CARD_Y + 30, CARD_IMG_W, CARD_H - 60),
    photoGlyph(B.left + 30, CARD_Y + 30, CARD_IMG_W, CARD_H - 60),
    bar(B.left + CARD_IMG_W + 70, CARD_Y + 40, 180, "label"),
    bar(B.left + CARD_IMG_W + 70, CARD_Y + 76, 480, "heading"),
    lines(B.left + CARD_IMG_W + 70, CARD_Y + 128, [540, 480, 420]),
    [0, 1, 2].map((i) => [
      bar(B.left + CARD_IMG_W + 70 + i * 190, CARD_Y + 250, 120, "display"),
      bar(B.left + CARD_IMG_W + 70 + i * 190, CARD_Y + 302, 150, "body"),
    ]),
  ],
});

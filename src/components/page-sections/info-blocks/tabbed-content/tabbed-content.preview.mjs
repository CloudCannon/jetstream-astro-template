import {
  band,
  bar,
  box,
  ink,
  lines,
  media,
  onInk,
  photoGlyph,
  preview,
  rule,
} from "../../../../../scripts/previews/kit.mjs";

// Header, then a tab strip with the active tab filled, then the revealed panel.
const B = band(1120);
const TAB_W = 220;
const TAB_GAP = 24;
const ACTIVE = 0;
const STRIP_Y = 170;
const PANEL_Y = 290;

export default preview({
  width: 1120,
  title: "Tabbed content",
  draw: [
    bar(B.left, 0, 200, "label"),
    bar(B.left, 44, 640, "display"),
    lines(B.left, 110, [820, 700]),
    [0, 1, 2].map((i) => {
      const x = B.left + i * (TAB_W + TAB_GAP);
      const on = i === ACTIVE;

      return [
        on && box(x, STRIP_Y, TAB_W, 68, { fill: ink }),
        bar(
          x + Math.round((TAB_W - 120) / 2),
          STRIP_Y + 28,
          120,
          "body",
          on ? { fill: onInk } : {}
        ),
      ];
    }),
    rule(B.left, STRIP_Y + 78, B.w),
    media(B.left, PANEL_Y, 520, 300),
    photoGlyph(B.left, PANEL_Y, 520, 300),
    bar(B.left + 580, PANEL_Y + 20, 420, "heading"),
    lines(B.left + 580, PANEL_Y + 80, [540, 500, 520, 380]),
  ],
});

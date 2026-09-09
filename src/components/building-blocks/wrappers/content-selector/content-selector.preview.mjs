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

// A tab strip with one active tab over the revealed panel — the underline on
// the active tab is what separates this from `segments`.
const B = band(960);
const TAB_W = 200;
const TAB_GAP = 24;
const ACTIVE = 0;
const PANEL_Y = 110;

export default preview({
  width: 960,
  title: "Content selector",
  draw: [
    [0, 1, 2].map((i) => {
      const x = B.left + i * (TAB_W + TAB_GAP);
      const on = i === ACTIVE;

      return [
        on && box(x, 0, TAB_W, 64, { fill: ink }),
        bar(x + Math.round((TAB_W - 110) / 2), 26, 110, "body", on ? { fill: onInk } : {}),
      ];
    }),
    rule(B.left, 72, B.w),
    media(B.left, PANEL_Y, 420, 300),
    photoGlyph(B.left, PANEL_Y, 420, 300),
    bar(B.left + 470, PANEL_Y + 20, 340, "heading"),
    lines(B.left + 470, PANEL_Y + 76, [490, 440, 470, 330]),
  ],
});

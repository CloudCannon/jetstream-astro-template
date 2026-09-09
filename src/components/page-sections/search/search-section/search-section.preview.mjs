import {
  band,
  bar,
  box,
  field,
  ink,
  lines,
  onInk,
  pill,
  preview,
  repeat,
  rule,
} from "../../../../../scripts/previews/kit.mjs";

// Heading and copy over a search field with filter tabs and result rows — the
// field plus the result list is what distinguishes it from a hero.
const B = band(960);
const FIELD_Y = 150;
const FIELD_H = 82;
const BTN_W = 200;
const TABS_Y = 270;
const TAB_W = 180;
const RESULTS_Y = 360;

export default preview({
  width: 960,
  title: "Search section",
  draw: [
    bar(B.left, 0, 520, "display"),
    lines(B.left, 66, [760, 620]),
    field(B.left, FIELD_Y, B.w - BTN_W - 20, FIELD_H),
    bar(B.left + 30, FIELD_Y + FIELD_H / 2 - 6, 260, "body"),
    pill(B.right - BTN_W, FIELD_Y, BTN_W, FIELD_H, { variant: "ink", label: 100 }),
    repeat(2, (i) => {
      const x = B.left + i * (TAB_W + 20);
      const on = i === 0;

      return [
        on && box(x, TABS_Y, TAB_W, 56, { fill: ink }),
        bar(x + Math.round((TAB_W - 100) / 2), TABS_Y + 22, 100, "body", on ? { fill: onInk } : {}),
      ];
    }),
    repeat(3, (i) => {
      const y = RESULTS_Y + i * 100;

      return [
        bar(B.left, y, 480 - i * 40, "heading"),
        lines(B.left, y + 40, [B.w, B.w - 180]),
        rule(B.left, y + 84, B.w),
      ];
    }),
  ],
});

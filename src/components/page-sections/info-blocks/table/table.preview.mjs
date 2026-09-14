import {
  band,
  bar,
  box,
  panel,
  preview,
  repeat,
  rule,
} from "../../../../../scripts/previews/kit.mjs";

// A header band over ruled rows of aligned cells — the column alignment is what
// makes it read as tabular rather than as a list.
const B = band(1120);
const COLS = 4;
const COL_W = Math.round(B.w / COLS);
const HEAD_H = 72;
const ROW_H = 66;
const ROWS = 5;
const Y = 130;

export default preview({
  width: 1120,
  title: "Table",
  draw: [
    bar(B.left, 0, 520, "display"),
    box(B.left, Y, B.w, HEAD_H, { fill: panel, r: 0 }),
    repeat(COLS, (c) => bar(B.left + c * COL_W + 28, Y + 28, COL_W - 90, "label")),
    repeat(ROWS, (r) => {
      const y = Y + HEAD_H + r * ROW_H;

      return [
        rule(B.left, y, B.w),
        repeat(COLS, (c) =>
          bar(B.left + c * COL_W + 28, y + 26, COL_W - 90 - (c === COLS - 1 ? 40 : 0), "body")
        ),
      ];
    }),
    rule(B.left, Y + HEAD_H + ROWS * ROW_H, B.w),
  ],
});

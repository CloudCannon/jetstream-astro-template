import { band, bar, caret, lines, plate, preview } from "../../../../../scripts/previews/kit.mjs";

// Collapsed rows with one open — a stack of identical closed rows would read as
// a list, so the expanded panel has to be shown.
const B = band(760);
const ROW_H = 86;
const OPEN_H = 200;
const GAP = 20;

export default preview({
  width: 760,
  title: "Accordion",
  draw: [
    plate(B.left, 0, B.w, OPEN_H),
    bar(B.left + 32, 34, 380, "label"),
    caret(B.right - 66, 40, 30),
    lines(B.left + 32, 96, [640, 590, 470]),
    [1, 2].map((i) => {
      const y = OPEN_H + GAP + (i - 1) * (ROW_H + GAP);

      return [
        plate(B.left, y, B.w, ROW_H),
        bar(B.left + 32, y + 35, i === 1 ? 420 : 330, "label"),
        caret(B.right - 66, y + 40, 30),
      ];
    }),
  ],
});

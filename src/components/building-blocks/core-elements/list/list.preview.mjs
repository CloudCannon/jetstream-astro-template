import { band, bar, dot, preview } from "../../../../../scripts/previews/kit.mjs";

// Marker plus copy per row — the left gutter of markers is the identity.
const B = band(560);
const ROW = 52;
const TEXT_X = 56;

export default preview({
  width: 560,
  title: "List",
  draw: [0, 1, 2, 3].map((i) => [
    dot(B.left + 14, i * ROW + 8, 14),
    bar(B.left + TEXT_X, i * ROW, B.w - TEXT_X - (i % 2 ? 90 : 0), "label"),
  ]),
});

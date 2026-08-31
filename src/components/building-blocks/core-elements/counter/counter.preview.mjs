import { band, bar, preview } from "../../../../../scripts/previews/kit.mjs";

// Three stats in a row — the component is only ever used as a set, and a lone
// number bar would be indistinguishable from a heading.
const B = band(560);
const COL = 160;
const PITCH = 200;

export default preview({
  width: 560,
  title: "Counter",
  draw: [0, 1, 2].map((i) => [
    bar(B.left + i * PITCH, 0, COL, "display"),
    bar(B.left + i * PITCH, 60, COL - 40, "body"),
  ]),
});

import { band, bar, box, dot, ink, paper, preview } from "../../../../../scripts/previews/kit.mjs";

// A filled track up to the knob, faint after it — the two-tone track is what
// reads as a slider rather than a divider.
const B = band(560);
const TRACK_Y = 46;
const TRACK_H = 10;
const KNOB_X = B.left + Math.round(B.w * 0.62);

export default preview({
  width: 560,
  title: "Range",
  draw: [
    bar(B.left, 0, 180, "label"),
    box(B.left, TRACK_Y, B.w, TRACK_H, { r: TRACK_H / 2 }),
    box(B.left, TRACK_Y, KNOB_X - B.left, TRACK_H, { r: TRACK_H / 2, fill: ink }),
    dot(KNOB_X, TRACK_Y + TRACK_H / 2, 24, { fill: ink }),
    dot(KNOB_X, TRACK_Y + TRACK_H / 2, 12, { fill: paper }),
  ],
});

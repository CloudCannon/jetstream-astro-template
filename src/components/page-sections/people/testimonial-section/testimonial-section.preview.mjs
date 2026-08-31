import {
  band,
  bar,
  box,
  dot,
  lines,
  preview,
  surface,
} from "../../../../../scripts/previews/kit.mjs";

// One quote on a raised panel with the attribution row beneath — a single large
// quote is the whole section, so it is drawn at display scale.
const B = band(960);
const PANEL_H = 340;
const PAD = 60;

export default preview({
  width: 960,
  title: "Testimonial section",
  draw: [
    box(B.left, 0, B.w, PANEL_H, { fill: surface }),
    lines(B.left + PAD, PAD, [840, 780, 620], { size: "heading", gap: 20 }),
    dot(B.left + PAD + 34, PANEL_H - 96, 34),
    bar(B.left + PAD + 92, PANEL_H - 116, 240, "label"),
    bar(B.left + PAD + 92, PANEL_H - 86, 170, "body"),
  ],
});

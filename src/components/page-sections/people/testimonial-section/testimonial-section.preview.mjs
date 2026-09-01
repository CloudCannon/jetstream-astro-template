import {
  band,
  bar,
  box,
  dot,
  lines,
  preview,
  surface,
} from "../../../../../scripts/previews/kit.mjs";

// A raised panel split side by side: the attribution column on the left — round
// avatar with the name and role stacked under it — and the quote set large
// beside it. The quote sitting *next to* the author, not above, is what
// separates this section from the standalone testimonial block.
const B = band(960);
const PANEL_H = 340;
const AUTHOR_CX = B.left + 170;
const AVATAR_R = 48;
const QUOTE_X = B.left + 300;

export default preview({
  width: 960,
  title: "Testimonial section",
  draw: [
    box(B.left, 0, B.w, PANEL_H, { fill: surface }),
    dot(AUTHOR_CX, 130, AVATAR_R),
    bar(AUTHOR_CX - 80, 198, 160, "label"),
    lines(AUTHOR_CX - 75, 222, [150, 110], { align: "center", within: 150 }),
    lines(QUOTE_X, 111, [600, 540, 380], { size: "heading", gap: 20 }),
  ],
});

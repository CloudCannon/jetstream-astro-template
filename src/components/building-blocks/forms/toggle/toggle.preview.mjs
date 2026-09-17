import { band, bar, preview, toggle } from "../../../../../scripts/previews/kit.mjs";

// Label on the left, switch hard right — the split row is the pattern.
const B = band(560);
const SW_W = 104;
const SW_H = 56;

export default preview({
  width: 560,
  title: "Toggle",
  draw: [bar(B.left, SW_H / 2 - 8, 300, "label"), toggle(B.right - SW_W, 0, SW_W, SW_H, true)],
});

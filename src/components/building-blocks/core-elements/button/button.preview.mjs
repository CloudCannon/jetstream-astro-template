import { band, pill, preview } from "../../../../../scripts/previews/kit.mjs";

// The two variants side by side: filled primary, outlined secondary. Showing
// both is what distinguishes this from any other single-control preview.
const B = band(560);
const H = 76;
const PRIMARY_W = 300;
const GAP = 40;

export default preview({
  width: 560,
  title: "Button",
  draw: [
    pill(B.left, 0, PRIMARY_W, H, { variant: "ink", label: 120 }),
    pill(B.left + PRIMARY_W + GAP, 0, B.w - PRIMARY_W - GAP, H, { variant: "ghost", label: 96 }),
  ],
});

import { band, pill, preview } from "../../../../../scripts/previews/kit.mjs";

// Several actions sharing one row — the grouping is the component, so it needs
// three buttons of differing weight, not one.
const B = band(760);
const H = 76;
const GAP = 28;
const W1 = 260;
const W2 = 220;

export default preview({
  width: 760,
  title: "Button group",
  draw: [
    pill(B.left, 0, W1, H, { variant: "ink", label: 120 }),
    pill(B.left + W1 + GAP, 0, W2, H, { variant: "ghost", label: 100 }),
    pill(B.left + W1 + GAP + W2 + GAP, 0, B.w - W1 - W2 - GAP * 2, H, {
      variant: "ghost",
      label: 90,
    }),
  ],
});

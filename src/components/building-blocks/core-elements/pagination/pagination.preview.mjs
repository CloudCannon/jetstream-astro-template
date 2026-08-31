import {
  band,
  bar,
  box,
  ink,
  navButton,
  onInk,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// Prev / next discs bracketing numbered pages, with the current page filled —
// the active state is the only thing that says "pagination" and not "tabs".
const B = band(560);
const R_NAV = 34;
const PAGE = 56;
const GAP = 16;
const CY = R_NAV;
const ACTIVE = 1;

export default preview({
  width: 560,
  title: "Pagination",
  draw: [
    navButton(B.left + R_NAV, CY, "left", { r: R_NAV, half: 15, reach: 9, stem: 8 }),
    [0, 1, 2, 3].map((i) => {
      const x = B.left + 2 * R_NAV + 30 + i * (PAGE + GAP);
      const on = i === ACTIVE;

      return [
        box(x, CY - PAGE / 2, PAGE, PAGE, on ? { fill: ink } : {}),
        bar(x + 18, CY - 6, 20, "body", on ? { fill: onInk } : {}),
      ];
    }),
    navButton(B.right - R_NAV, CY, "right", { r: R_NAV, half: 15, reach: 9, stem: 8 }),
  ],
});

import { dot, preview, R, tile } from "../../../../../scripts/previews/kit.mjs";

// exempt: a lone icon is a 200px square mark. Stretched to the 560 band it
// would read as a giant plate rather than an icon.
const D = 200;

export default preview({
  width: D,
  exempt: true,
  title: "Icon",
  draw: [tile(0, 0, D, { r: R.tile }), dot(D / 2, D / 2, 46)],
});

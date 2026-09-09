import { band, media, playDisc, preview } from "../../../../../scripts/previews/kit.mjs";

// Same media surface as `image`, but the play disc is the distinguishing mark.
const B = band(560);
const H = 315;

export default preview({
  width: 560,
  title: "Video",
  draw: [media(B.left, 0, B.w, H), playDisc(B.cx, H / 2, 52)],
});

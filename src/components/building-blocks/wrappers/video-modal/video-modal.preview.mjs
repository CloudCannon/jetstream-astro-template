import {
  band,
  box,
  glyph,
  media,
  panel,
  playDisc,
  plate,
  preview,
} from "../../../../../scripts/previews/kit.mjs";

// The modal shell, but the dialog body is a video surface with a play disc.
const B = band(1120);
const DIALOG_W = 720;
const DIALOG_H = 440;
const DX = B.cx - DIALOG_W / 2;
const PAD = 28;

export default preview({
  width: 1120,
  title: "Video modal",
  draw: [
    box(B.left, 0, B.w, 600, { fill: panel, r: 0 }),
    plate(DX, 80, DIALOG_W, DIALOG_H),
    media(DX + PAD, 80 + PAD, DIALOG_W - PAD * 2, DIALOG_H - PAD * 2),
    playDisc(B.cx, 80 + DIALOG_H / 2, 62),
    box(DX + DIALOG_W - 66, 96, 36, 36, { r: 18, fill: glyph }),
  ],
});

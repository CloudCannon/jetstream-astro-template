import {
  band,
  bar,
  box,
  glyph,
  paper,
  preview,
  STROKE,
} from "../../../../../scripts/previews/kit.mjs";

// A dashed, empty field at reduced opacity — this component renders nothing a
// visitor can see, so the preview has to depict absence rather than a control.
// Drawn with `box` rather than `field` because only `box` carries opacity.
const B = band(560);

export default preview({
  width: 560,
  title: "Hidden field",
  draw: [
    bar(B.left, 0, 180, "label", { opacity: 0.45 }),
    box(B.left, 34, B.w, 76, {
      fill: paper,
      stroke: glyph,
      sw: STROKE.field,
      dash: "10 10",
      opacity: 0.5,
    }),
  ],
});

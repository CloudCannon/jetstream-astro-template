import { band, lines, preview, rule, subject } from "../../../../../scripts/previews/kit.mjs";

// A rule only reads as a divider when there is content either side of it, and
// the rule itself has to carry the `subject` role — in the faint `line` role it
// disappears at thumbnail size and the preview looks like two text blocks.
const B = band(560);

export default preview({
  width: 560,
  title: "Divider",
  draw: [
    lines(B.left, 0, [560, 470, 520]),
    rule(B.left, 112, B.w, { h: 6, fill: subject }),
    lines(B.left, 156, [560, 500]),
  ],
});

import {
  band,
  bar,
  centerX,
  dot,
  glyph,
  lines,
  photoGlyph,
  preview,
  repeat,
  rule,
  STROKE,
  subject,
  surface,
} from "../../../../../scripts/previews/kit.mjs";

// Centred header over three member cards. Each card leads with the name and
// role, then a rule tipped with a dot, and hangs a large *round* portrait off
// the right below it — caption-above-circle is this card's signature, and the
// only thing that separates it from a feature card.
const B = band(1120);
const COLS = 3;
const CARD_W = 350;
const PITCH = Math.round((B.w - CARD_W) / (COLS - 1));
const RULE_Y = 267;
const PORTRAIT_R = 110;
const PORTRAIT_CY = 410;
const GLYPH_D = Math.round(PORTRAIT_R * 1.35);

export default preview({
  width: 1120,
  title: "Team grid",
  draw: [
    centerX(B.cx, [bar(0, 0, 560, "display")]),
    centerX(B.cx, lines(0, 66, [760], { align: "center", within: 760 })),
    repeat(COLS, (i) => {
      const x = B.left + i * PITCH;
      const cx = x + CARD_W - PORTRAIT_R;

      return [
        bar(x, 150, 250, "heading"),
        lines(x, 194, [230, 140], { fill: subject }),
        rule(x + 9, RULE_Y, 200, { fill: glyph, h: STROKE.active }),
        dot(x + 9, RULE_Y + STROKE.active / 2, 9, { fill: glyph }),
        dot(cx, PORTRAIT_CY, PORTRAIT_R, { fill: surface }),
        photoGlyph(cx - GLYPH_D / 2, PORTRAIT_CY - GLYPH_D / 2, GLYPH_D, GLYPH_D),
      ];
    }),
  ],
});

// Rosey keys are derived from the `data-prop` values the building blocks already
// emit for CloudCannon inline editing, so a component gets translated without
// every call site having to name a key.

/**
 * `.` is CloudCannon's data-API path delimiter. The connector saves an edit with
 * `file.data.set({ slug: `${roseyKey}.value` })`, so a dotted key like
 * "price.prefix" resolves to a nested path that doesn't exist and the edit is
 * silently dropped. Rosey's build-time substitution matches the whole key string
 * and doesn't care, which is what makes this so easy to miss: the translated site
 * looks correct and only editing is broken.
 */
export function roseyKeyFromProp(prop: unknown): string | null {
  if (typeof prop !== "string" || prop.trim() === "") return null;
  return prop.replace(/\./g, "_");
}

/**
 * Spread the result onto the innermost text element. Pass `data-rosey={false}` at
 * a call site to opt a value out (names, prices, other values that don't
 * translate). With no `data-prop` to derive from, nothing is emitted — which is
 * how non-editable instances stay untranslated.
 */
export function resolveRosey(
  roseyProp: unknown,
  effectiveDataProp: unknown
): { "data-rosey"?: string } {
  if (roseyProp === false) return {};
  if (typeof roseyProp === "string" && roseyProp) return { "data-rosey": roseyProp };
  const derived = roseyKeyFromProp(effectiveDataProp);

  return derived ? { "data-rosey": derived } : {};
}

/**
 * A nav row carries "label extras" when it renders an icon or a subtext line
 * alongside its name. Rows with extras need a taller, wrapping layout, so the
 * nav components add a `has-label-extras` class when this returns true.
 */
export function navItemHasLabelExtras(item: { iconName?: unknown; subtext?: unknown }): boolean {
  const iconName = typeof item?.iconName === "string" ? item.iconName.trim() : "";
  const subtext = typeof item?.subtext === "string" ? item.subtext.trim() : "";

  return Boolean(iconName || subtext);
}

// Whether a component should derive `data-prop` values from its own prop names.
// That identity only holds for a standalone block, where the stored object's keys
// are the prop names. Anywhere else the parent names the field explicitly.

/**
 * Three states, not two:
 *
 * - `true` / `false` — the call site's explicit choice, and it always wins.
 *   `renderBlock` forwards its own flag down, which is how an inert subtree
 *   (the component-docs preview) keeps real blocks from tagging themselves.
 * - `undefined` — a CloudCannon re-render, which strips the prop but keeps the
 *   stored `_component` / `_uuid`. Defaulting to `false` here would make every
 *   block editable once and then dead for the rest of the session.
 *
 * `_uuid` is checked alongside `_component` because some item structures carry
 * only the former — `listItems` is the one in this repo.
 */
export function isEditable(props: Record<string, unknown>): boolean {
  const { useDefaultEditableBinding, _component, _uuid } = props;

  if (typeof useDefaultEditableBinding === "boolean") {
    return useDefaultEditableBinding;
  }

  return Boolean(_component || _uuid);
}

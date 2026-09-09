# Changelog

> This template is continuously improved and does not follow strict versioned releases.
> Updates below reflect incremental changes to the latest version.

## September 9, 2026

- Added component previews. Each component has a preview recipe compiled to an SVG thumbnail shown in the component picker, built with `previews:build`.
- Added optional icons and subtext to navigation items.
- Added background images and video to sections, with focal point and overlay controls.
- Added an animated background variant, `Highlight Radial Gradient Animated`.
- Added blog tag icons, set in the new _Tags_ data file. Post tags now come from that file rather than a hardcoded list.
- Added a scroll indicator to the Table section and reworked its mobile design.
- Added elevation and focus-ring shadow tokens in `_shadows.css`.
- Changed page hero and CTA fields from arrays to single objects (breaking changes to `heroSections` and `ctaSections`, now `heroSection` and `ctaSection`).
- Reworked Bento Box into a responsive column-span grid and removed the separate Bento Box Grid component (breaking changes: `columns`, `minRowHeight` and the `none` gap option are gone, and `colSpan`/`rowSpan` are now numeric `columnSpan`/`rowSpan`).
- Updated carousels to show the next and previous slides either side of the active one, and restyled navigation sizing and shadows.
- Standardized component inputs and removed unused props, including `headingSize` on Search Section.
- Fixed Bento Box spans in the Visual Editor, along with overhang rendering, section overflow, table alignment and filter appearance.

## May 4, 2026

- Upgraded base template (Astro Component Starter → v1.0.2)
  - Summary: Added light/dark theme toggle, video modal and image carousel components and page transitions. Standardized component prop naming (breaking changes to alignment props and Video/Button components). Improved carousel with gap support and fraction indicators, enhanced navigation with split-link support, better SEO with meta keywords and article-specific Open Graph tags. Fixed component documentation, carousel visual editor issues, modal scrolling, and blog pagination titles.
  - Full details: [Astro Component Starter Changelog](https://github.com/CloudCannon/astro-component-starter/blob/main/CHANGELOG.md#102---2026-04-13)

## March 12, 2026

- Initial release of template

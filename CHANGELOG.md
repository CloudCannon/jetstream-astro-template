# Changelog

> This template is continuously improved and does not follow strict versioned releases.
> Updates below reflect incremental changes to the latest version.

## September 9, 2026

- Documented the CloudCannon CLI dev server in the README and Project Tour: install `@cloudcannon/cli`, `cloudcannon login`, `npm run build`, then `cloudcannon dev dist` to edit local files in CloudCannon
- Renamed the README _Setup_ section to _Getting Started_
- Corrected `package.json` `engines.node` to `>=24.0.0` to match `.nvmrc` and the README prerequisites
- Documented the CloudCannon agent skills in the README, including how to install them with `npx skills add CloudCannon/agent-skills`
- Added `AGENTS.md`, describing the project for AI coding agents and which skill to use for which task
- Gitignored `.agents/`, so skills installed locally are not committed
- Rewrote the `changelog` Cursor rule to match this changelog's dated format instead of Keep a Changelog

## May 4, 2026

- Upgraded base template (Astro Component Starter → v1.0.2)
  - Summary: Added light/dark theme toggle, video modal and image carousel components and page transitions. Standardized component prop naming (breaking changes to alignment props and Video/Button components). Improved carousel with gap support and fraction indicators, enhanced navigation with split-link support, better SEO with meta keywords and article-specific Open Graph tags. Fixed component documentation, carousel visual editor issues, modal scrolling, and blog pagination titles.
  - Full details: [Astro Component Starter Changelog](https://github.com/CloudCannon/astro-component-starter/blob/main/CHANGELOG.md#102---2026-04-13)

## March 12, 2026

- Initial release of template

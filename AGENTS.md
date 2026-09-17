# Working on Jetstream with AI agents

Jetstream is an [Astro](https://astro.build/) marketing template built on the
[Astro Component Starter](https://github.com/CloudCannon/astro-component-starter) and configured for editing in
[CloudCannon](https://cloudcannon.com/). Content lives in `src/content/`, components in `src/components/`, and the
editing experience is configured in `cloudcannon.config.yml` plus the per-component
`*.cloudcannon.inputs.yml` / `*.cloudcannon.structure-value.yml` files.

## Two sets of skills

**Template skills** — committed to this repo in [`.cursor/skills/`](.cursor/skills). These cover how _this_
component library works: its three-file component pattern, its design tokens, its content files.

**CloudCannon skills** — installed from [CloudCannon/agent-skills](https://github.com/CloudCannon/agent-skills), not
committed here. These cover CloudCannon itself, independent of any one template. Install with
`npx skills add CloudCannon/agent-skills` (writes to `.agents/skills/`, which is gitignored) or, in Claude Code,
`/plugin marketplace add CloudCannon/agent-skills` then `/plugin install agent-skills@cloudcannon`.

When both could apply, prefer the template skill for anything about this repo's components and structure, and the
CloudCannon skill for anything about CloudCannon's configuration format or editing features.

## Which skill to use when

| You are…                                                                            | Use                          |
| ----------------------------------------------------------------------------------- | ---------------------------- |
| Building a new component, building block, wrapper, or page section                  | `create-component`           |
| Turning a screenshot of a UI section into a component                               | `screenshot-to-component`    |
| Assembling a page from existing components, populating `pageSections` YAML          | `page-content-authoring`     |
| Changing colors, fonts, spacing, or other design tokens; matching a brand           | `theming`                    |
| Adding or switching a font, or debugging font loading                               | `adding-fonts`               |
| Editing navigation, footer, or SEO data (`mainNav.json`, `footer.json`, `seo.json`) | `site-data-navigation`       |
| Writing blog posts, or using components inside MDX                                  | `blog-mdx-content`           |
| Wiring `data-prop` / `data-children-prop` bindings on a component                   | `editable-regions`           |
| A component is missing from the picker, or the Visual Editor won't update           | `debug-cloudcannon`          |
| Porting an existing site's pages and branding into this component library           | `migrate-existing-site`      |
| Editing `cloudcannon.config.yml` — collections, inputs, structures, collection URLs | `cloudcannon-configuration`  |
| Adding visual editing to a site that doesn't have it yet                            | `cloudcannon-visual-editing` |
| Setting up MDX components or inline HTML for the Content Editor                     | `cloudcannon-snippets`       |
| Onboarding a site to CloudCannon end to end                                         | `migrate-to-cloudcannon`     |
| Making the site translatable with Rosey                                             | `make-site-multilingual`     |
| Filling in or updating Rosey locale files                                           | `translate-site`             |
| Facing a request with more than one sensible answer — before building it            | `brainstorming`              |

The last six are CloudCannon skills; the rest ship with this template. Two pairs overlap by name: use
`migrate-existing-site` to bring a site _into this component library_, and `migrate-to-cloudcannon` to get a site
_onto CloudCannon_; use `debug-cloudcannon` for problems with this template's components, and
`cloudcannon-configuration` for problems with the config file itself.

## Repo conventions

- **Node.js 24+** (`.nvmrc`). `npm run dev` serves on port 4321; `npm run build` outputs to `dist/`.
- **Run `npm run check` before finishing** — it runs ESLint, Stylelint, and Prettier. `npm run check:fix` applies fixes.
- **Adding or updating packages:** use `npm run deps:sync`, not plain `npm install`. See the README for why.
- **Changelog:** add a dated entry at the top of `CHANGELOG.md` for user-facing changes. This project does not use
  semantic versions or an `[Unreleased]` section.
- **Editing experience changes:** verify them with the CloudCannon dev server (`npm run build`, then
  `cloudcannon dev dist`) and check the config with `cloudcannon validate`.

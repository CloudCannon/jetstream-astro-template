# Working on Jetstream with AI agents

Jetstream is an [Astro](https://astro.build/) marketing template built on the
[Astro Component Starter](https://github.com/CloudCannon/astro-component-starter) and configured for editing in
[CloudCannon](https://cloudcannon.com/). Content lives in `src/content/`, components in `src/components/`, and the
editing experience is configured in `cloudcannon.config.yml` plus the per-component
`*.cloudcannon.inputs.yml` / `*.cloudcannon.structure-value.yml` files.

## Skills

Two sets of skills apply to this repo.

**Template skills** — committed in [`.cursor/skills/`](.cursor/skills), covering how _this_ component library works:
its three-file component pattern, its design tokens, its content files. To see what's available:

```bash
awk 'FNR<=3 && /^(name|description):/ {print FILENAME": "$0}' .cursor/skills/*/SKILL.md
```

**CloudCannon skills** — from [CloudCannon/agent-skills](https://github.com/CloudCannon/agent-skills), covering
CloudCannon itself, independent of any one template. Not committed here. To see what's available:

```bash
npx skills add cloudcannon/agent-skills --list
```

Install with `npx skills add cloudcannon/agent-skills --skill <names>` (writes to `.agents/skills/`, which is
gitignored), or in Claude Code with `/plugin marketplace add CloudCannon/agent-skills` then
`/plugin install agent-skills@cloudcannon`.

**Read the list before starting non-trivial work** — each skill's description says when it applies. A skill installed
mid-session may not appear in your skill tool until the session restarts; when that happens, read its `SKILL.md`
directly and follow it.

When both sets could apply, prefer the template skill for anything about this repo's components and structure, and the
CloudCannon skill for anything about CloudCannon's configuration format or editing features. Two pairs overlap by
name: use `migrate-existing-site` to bring a site _into this component library_, and `migrate-to-cloudcannon` to get a
site _onto CloudCannon_; use `debug-cloudcannon` for problems with this template's components, and
`cloudcannon-configuration` for problems with the config file itself.

## Repo conventions

- **Node.js 24+** (`.nvmrc`). `npm run dev` serves on port 4321; `npm run build` outputs to `dist/`.
- **Run `npm run check` before finishing** — it runs ESLint, Stylelint, and Prettier. `npm run check:fix` applies fixes.
- **Adding or updating packages:** use `npm run deps:sync`, not plain `npm install`. See the README for why.
- **Changelog:** add a dated entry at the top of `CHANGELOG.md` for user-facing changes. This project does not use
  semantic versions or an `[Unreleased]` section.
- **Editing experience changes:** verify them with the CloudCannon dev server (`npm run build`, then
  `cloudcannon dev dist`) and check the config with `cloudcannon validate`.

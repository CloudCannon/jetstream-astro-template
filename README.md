# Jetstream

Jetstream is a polished, high-performance marketing website template for Astro. Browse through a [live demo](https://crawling-submarine.cloudvent.net/).

> [!NOTE]
> This template is built with [Astro 6](https://astro.build/) and the [Astro Component Starter](https://cloudcannon.com/templates/astro-component-starter/).

![Jetstream template screenshot](_screenshot.png)

[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register#sites/connect/github/cloudcannon/jetstream-astro-template)

## Features

- **Modern Architecture**: Built with Astro for optimal performance and minimal JavaScript
- **Visual Editing**: Visual editing with [CloudCannon](https://cloudcannon.com/) editable regions - edit directly on the pages
- **Component Library**: Reusable, componentized architecture for better maintainability
- **Image Optimization**: Astro's built-in image optimization for all images
- **Accessibility**: Fully accessible navigation and components
- **Design Tokens**: CSS variables for consistent theming
- **Blog System**: Complete blog with pagination and category pages
- **SEO Optimized**: Pre-configured for search engine optimization

## Getting Started

1. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/)
   or Astro locally).

### Local Development

Jetstream is built with [Astro](https://astro.build/) and modern CSS for a lean, performant development experience.

```bash
npm install
npm run dev
```

Your site is available at [localhost:4321](http://localhost:4321).

### Editing Locally with CloudCannon

Run CloudCannon against your local files with the [CloudCannon CLI](https://cloudcannon.com/documentation/developer-reference/cli/)
dev server. This is the fastest way to iterate on `cloudcannon.config.yml`, inputs, and structures —
you see the editing experience without committing and pushing first.

1. Install the CLI and log in (requires Node.js 24+):

   ```bash
   npm install --global @cloudcannon/cli
   cloudcannon login
   ```

2. Build the site, so the dev server has output to serve:

   ```bash
   npm run build
   ```

3. Start CloudCannon locally, pointing it at the build output:

   ```bash
   cloudcannon dev dist
   ```

The dev server runs on port `10101` by default and opens CloudCannon in your browser, pointed at the
files in this repo. Content edits sync to disk as you make them; re-run `npm run build` after changing
components or templates to refresh the preview.

Before you commit configuration changes, validate them:

```bash
cloudcannon validate
```

The dev server is a development tool only — editors never access it. See
[Build your editing experience locally](https://cloudcannon.com/blog/build-your-editing-experience-locally-with-the-cloudcannon-dev-server/)
for the full workflow.

### AI Agent Skills

If you build with an AI coding agent (Claude Code, Cursor, Copilot, and others), install
[CloudCannon's agent skills](https://github.com/CloudCannon/agent-skills). They teach your agent how CloudCannon
configuration, editable regions, and snippets actually work, so it stops guessing.

```bash
npx skills add cloudcannon/agent-skills --all
```

To see what's on offer before installing anything, or to install a subset:

```bash
npx skills add cloudcannon/agent-skills --list
npx skills add cloudcannon/agent-skills --skill <names>
```

Other useful flags and commands:

| Command                           | What it does                                                  |
| --------------------------------- | ------------------------------------------------------------- |
| `--all`                           | Install every skill for every detected agent, without prompts |
| `-l`, `--list`                    | List the skills in the repository without installing          |
| `-g`, `--global`                  | Install for your user account instead of just this project    |
| `npx skills ls`                   | List the skills you have installed, project and global        |
| `npx skills update`               | Update installed skills to their latest versions              |
| `npx skills remove`               | Remove installed skills                                       |
| `npx skills experimental_install` | Restore the exact skills recorded in `skills-lock.json`       |

Skills install to `.agents/skills/`, with agent-specific directories such as `.claude/skills/` and `agent/skills/`
pointing at them. Those directories are gitignored, but `skills-lock.json` is committed — so a teammate can restore
the same set and versions you used.

In Claude Code you can install them as a plugin instead:

```
/plugin marketplace add CloudCannon/agent-skills
/plugin install agent-skills@cloudcannon
```

This template also ships its own skills in [`.cursor/skills/`](.cursor/skills), covering tasks specific to this
component library. See [AGENTS.md](AGENTS.md) for which skill to reach for when.

## Site Details

### Tech Stack

- **Astro**: Static site generation with component islands architecture
- **CSS**: Modern CSS with custom properties and cascade layers
- **Lightning CSS**: Fast CSS processing and optimization
- **TypeScript**: Type-safe component development

## Editing

Jetstream features advanced visual editing capabilities with CloudCannon's split configuration, allowing for intuitive content management and real-time preview.

### Visual Editing

- **Live Preview**: See changes instantly as you edit
- **Component-based**: Edit reusable components directly in context
- **Split Configuration**: Modern CloudCannon setup for enhanced editing experience

### Content Management

#### Posts

- Add, update or remove posts in the _Posts_ collection
- Automatic pagination and category organization
- Rich content editing with live preview

#### Site Configuration

- **SEO**: Centralized company information reused across the site
- **Navigation**: Fully accessible, responsive navigation management
- **Footer**: Configurable footer elements and links

## Prerequisites

- Node.js >= 24.0.0

## Updating Dependencies

When adding, removing, or updating packages (on macOS especially), use:

```bash
npm run deps:sync
```

This regenerates `package-lock.json` with resolutions for all target platforms (Linux, Windows, macOS) so CI doesn't break. Plain `npm install` on macOS silently strips Linux-only peer dependencies out of the lockfile, which causes `npm ci` to fail on GitHub Actions.

You can verify the lockfile is CI-ready at any time with:

```bash
npm run deps:check
```

## Learn More

For more details on the component architecture and development workflow, view the [Astro Component Starter README](https://github.com/CloudCannon/astro-component-starter).

- [CloudCannon documentation](https://cloudcannon.com/documentation/) — configuration, editing, and build reference
- [CloudCannon CLI reference](https://cloudcannon.com/documentation/developer-reference/cli/) — `cloudcannon dev`, `validate`, and more
- [CloudCannon agent skills](https://github.com/CloudCannon/agent-skills) — skills for working on CloudCannon sites with AI agents

## License

MIT

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

## Setup

1. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/)
   or Astro locally).

### Local Development

Jetstream is built with [Astro](https://astro.build/) and modern CSS for a lean, performant development experience.

```bash
npm install
npm run dev
```

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

## Multilingual

The site is built in English, then [Rosey](https://rosey.app/) produces the French and German copies after the Astro build. English is served at the root, with the other languages under `/fr/` and `/de/`. Translations are edited in CloudCannon's Visual Editor by the [Rosey CloudCannon Connector](https://rosey.cc/) (RCC).

Two systems share the job. Short, shared strings are Rosey keys, translated once and substituted into every locale copy. Blog posts are whole documents, so Astro builds those per locale from their own content files before Rosey ever runs — see [The blog: split by directory](#the-blog-split-by-directory).

### The pipeline

`.cloudcannon/postbuild` runs four steps:

1. `rosey generate` — scans the built HTML for `data-rosey` keys into `rosey/base.json`
2. `rosey-cloudcannon-connector write-locales` — syncs those keys into `rosey/locales/{fr,de}.json` and writes the locale manifest the browser client fetches
3. `rosey build` — writes the translated copies of the site
4. `pagefind` — indexes last, so each locale gets its own search index

**CloudCannon needs `CLOUDCANNON_SYNC_PATHS=/rosey/`** so the files generated during the build are committed back. It's preset in `.cloudcannon/initial-site-settings.json` for new sites; existing sites need it added in their site settings. Without it, translations are lost on every build.

### How content gets keys

Keys are **derived from the `data-prop` attributes** the building blocks already emit for inline editing (`src/components/utils/roseyKey.ts`) — so tagging a new component usually means nothing extra. Each page-builder block namespaces its own keys with its `_uuid`, giving keys like `about:9c1e…:heading` that survive reordering.

- `data-rosey={false}` at a call site opts a value out (names, prices, post frontmatter).
- Nav and footer links use their own text as the key, under a `nav:` / `footer:` namespace, so the desktop and mobile menus share one translation each.
- Tag labels live under a shared `tags:` root, so a label is translated once for the listing, the tag page and the post breadcrumb. Tag slugs stay in English — only labels translate.
- `<title>` and the meta description are opt-in per route via a `roseySeo` prop on the layout. They aren't on the page, so they're only reachable through the **Locales** collection.

### The blog: split by directory

Whole articles are too much prose to translate through Rosey keys, so the blog uses **split-by-directory** instead: `src/content/blog_fr/` and `blog_de/` hold real content files, and `src/pages/[locale]/blog/` builds them natively. Rosey still runs over those pages and translates the shared chrome around the body — breadcrumb, "Latest News", "Share this article" — because it leaves pages that already exist at a locale URL in place.

Three of the thirteen posts are translated. The other ten are English-only and simply don't appear in `/fr/blog/` or `/de/blog/` listings; Rosey's own copies of the English pages keep them reachable rather than 404ing.

Four things hold it together:

- **Filenames match the English original.** The route derives the slug from the filename, so `/fr/blog/x/` lines up with `/blog/x/`.
- **`roseyRoot` is the English-equivalent path** (`blog/${slug}`), not the page's own URL — otherwise `/fr/blog/x/` would mint a duplicate `fr/blog/x:…` key set instead of sharing the English page's.
- **`tag`, `image`, `date` and `author` stay byte-identical.** `tag` is the URL segment _and_ the taxonomy key; only its visible label is translated, through the shared `tags:` root.
- **`paginate()` gets `props`, not just `params`.** Route params don't reach `Astro.props`, and a missing `locale` renders `/undefined/blog/2/`.

Post pages set `hideLocaleSwitcher`: the body is translated by editing the locale's own content file, so a switcher there offers nothing. The listing and tag pages keep theirs, because their headings and chips _are_ keyed.

In CloudCannon the locale collections are `disable_add` — a new post is created in the English `blog` collection and then copied across, so the filenames can't drift apart. Post dates are formatted with the locale's `dateLocale`, so French pages don't show English month names.

### What isn't translated

Post frontmatter carries no Rosey keys — it's translated natively in the locale's content file, so those elements opt out with `data-rosey={false}`. Slugs stay English in every locale (`rosey/base.urls.json` values stay `null`). Structured data (JSON-LD) and Open Graph tags are left untranslated.

### Adding a language

1. Add the code to `locales` in `src/components/utils/locales.ts`, with its `blogCollection` and `dateLocale`
2. Create `src/content/blog_<code>/` and register the collection in `src/content.config.ts`
3. Add it to `--locales` in `.cloudcannon/postbuild`
4. Add a `data_config.locales_<code>` entry and a `blog_<code>` collection in `cloudcannon.config.yml`

For more details on the component architecture and development workflow, view the [Astro Component Starter README](https://github.com/CloudCannon/astro-component-starter).

## License

MIT

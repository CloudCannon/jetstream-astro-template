import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const contentBlockSchema = z.object({ _component: z.string() }).passthrough();
const docsViewerSizeSchema = z.enum(["sm", "md", "lg", "xl"]);

/**
 * Routes an entry by its file path, unless front matter sets a `permalink`.
 *
 * Astro's own override key is `slug`, which the glob loader reads with no config.
 * We deliberately don't use it: CloudCannon's `url` template can't reference a front
 * matter field named after one of its fixed placeholders (`[slug]`).
 *
 */
const permalinkOrPath = ({ entry, data }: { entry: string; data: Record<string, unknown> }) =>
  typeof data.permalink === "string" && data.permalink
    ? data.permalink
    : entry.replace(/\.mdx?$/, "");

const pageSchema = z.object({
  url: z.string().optional(),
  permalink: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  image: z.string().optional(),
  canonical: z.string().optional(),
  pageSections: z.array(contentBlockSchema).optional(),
  heroSections: z.array(contentBlockSchema).optional(),
  ctaSections: z.array(contentBlockSchema).optional(),
  cta: z.any().optional(),
});

const docsPageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  contentSections: z.array(contentBlockSchema),
});

const docsComponentSchema = z.object({
  title: z.string().optional(),
  name: z.string().optional(),
  order: z.number().optional(),
  overview: z.string().optional(),
  defaultSize: docsViewerSizeSchema.optional(),
  spacing: z.string().optional().nullable(),
  component: z.string().optional(),
  component_path: z.string().optional(),
  blocks: z
    .union([z.record(z.string(), z.any()), z.array(z.record(z.string(), z.any()))])
    .optional(),
  slots: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        fallback_for: z.string().optional().nullable(),
        child_component: z
          .object({
            name: z.string(),
            props: z.array(z.string()).optional(),
          })
          .optional()
          .nullable(),
      })
    )
    .optional(),
  examples: z
    .union([
      z.array(
        z.object({
          title: z.string().optional(),
          slugs: z.array(z.string()),
          size: docsViewerSizeSchema.optional(),
        })
      ),
      z.null(),
    ])
    .optional()
    .transform((val) => {
      if (!val) return [];

      return val.map((example) => ({
        title:
          example.title ||
          (example.slugs?.[0]
            ? example.slugs[0].replace(/-/g, " ").charAt(0).toUpperCase() +
              example.slugs[0].replace(/-/g, " ").slice(1)
            : "Example"),
        slugs: example.slugs,
        size: example.size,
      }));
    }),
});

const pagesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
    generateId: permalinkOrPath,
  }),
  schema: pageSchema,
});

const docsPagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/component-docs/content/pages" }),
  schema: docsPageSchema,
});

const docsComponentsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/component-docs/content/components" }),
  schema: docsComponentSchema,
});

const blogPostSchema = z.object({
  permalink: z.string().optional().nullable(),
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  author: z.string().default("Anonymous"),
  image: z.string().optional(),
  image_alt: z.string().optional(),
  tag: z.string().default("Uncategorized"),
  counters: z.array(z.any()).optional(),
  keywords: z.array(z.string()).optional(),
});

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/blog",
    generateId: permalinkOrPath,
  }),
  schema: blogPostSchema,
});

const teamSchema = z.object({
  uuid: z.string(),
  name: z.string(),
  role: z.string(),
  imageSource: z.string(),
  hoverImageSource: z.string().optional(),
  imageAlt: z.string(),
  order: z.number().optional().nullable(),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: teamSchema,
});

export const collections = {
  pages: pagesCollection,
  "docs-pages": docsPagesCollection,
  "docs-components": docsComponentsCollection,
  blog: blogCollection,
  team: teamCollection,
};

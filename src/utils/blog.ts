import tagsData from "@data/tags.json";
import { getCollection } from "astro:content";

/** Used when the Tags data file has no icon for a tag, or no default of its own. */
const FALLBACK_TAG_ICON = "tag";

/**
 * Icon for a blog tag, looked up in the Tags data file. Tags created while
 * writing a post won't be in that file yet, so they fall back to the default.
 */
export function getTagIcon(tag?: string): string {
  const match = tagsData.tags.find(
    (entry) => entry.name.trim().toLowerCase() === tag?.trim().toLowerCase()
  );

  return match?.icon || tagsData.defaultIcon || FALLBACK_TAG_ICON;
}

/** Blog posts newest-first (for index and tag archives). */
export async function getBlogPostsSortedByDate() {
  const posts = await getCollection("blog");

  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** CMS `pages` entry with id `blog` and its hero `pageSections`. */
export async function loadBlogPageContext() {
  let blogPage: any;
  let heroSections: any[] = [];

  try {
    const pages = await getCollection("pages");

    blogPage = pages.find((p: any) => p.id === "blog");

    if (blogPage?.data?.pageSections) {
      heroSections = blogPage.data.pageSections;
    }
  } catch (e) {
    console.error("Failed to load blog page data:", e);
  }

  return { blogPage, heroSections };
}

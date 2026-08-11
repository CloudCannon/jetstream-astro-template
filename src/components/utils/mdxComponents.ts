// Lets MDX posts use any building block without importing it. Key is the PascalCase
// filename, so <CtaCenter /> resolves to CtaCenter.astro.
const modules = {
  ...import.meta.glob("../building-blocks/**/*.astro", { eager: true }),
  ...import.meta.glob("../page-sections/**/*.astro", { eager: true }),
};

export const mdxComponents: Record<string, any> = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => {
    const parts = path.split("/");

    return [parts[parts.length - 1].replace(".astro", ""), (module as any).default];
  })
);

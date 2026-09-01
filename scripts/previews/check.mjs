/**
 * Fast component-preview coverage check (no browser, no build).
 *
 * Previews are authored as co-located `*.preview.mjs` recipes and compiled to
 * SVGs by `previews:build` (deterministic, browser-free). This check is the
 * cheap coherence gate: it only reads files and asserts the preview set lines up.
 *
 *   node scripts/previews/check.mjs
 *
 * Fails (exit 1) if:
 *   - a component (any `*.cloudcannon.structure-value.yml` with a
 *     `value._component`) has no sibling `*.preview.mjs` recipe;
 *   - a component has no `public/component-previews/<_component>.svg`;
 *   - an SVG under `public/component-previews/` matches no component (orphan);
 *   - a component's structure YAML is missing the
 *     `gallery.image: public/component-previews/<_component>.svg` wiring, or
 *     still carries that SVG as a block's own `image:` (the icon slot, which
 *     belongs to `icon:`).
 *
 * The "are the committed SVGs in sync with their recipes?" drift guard is
 * `previews:build --check`, run alongside this in `previews:check`.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, sep } from "node:path";
import { glob, globSync } from "glob";
import * as yaml from "js-yaml";
import { previewImagePath, snippetWantsGalleryImage } from "./wire-yaml.mjs";

const root = join(dirname(new URL(import.meta.url).pathname), "..", "..");
const previewsDir = join(root, "public", "component-previews");

// 1. Discover components — exactly the set build.mjs previews.

const structureFiles = await glob("src/components/**/*.cloudcannon.structure-value.yml", {
  cwd: root,
});

// component key -> the structure-value file it came from.
const componentFile = new Map();

for (const file of structureFiles) {
  const key = yaml.load(readFileSync(join(root, file), "utf8"))?.value?._component;

  if (key) componentFile.set(key, file);
}

const components = [...componentFile.keys()].sort();

if (!components.length) {
  console.error("No structure-value files with a value._component found.");
  process.exit(1);
}

// 2a. Recipe presence: every component has a sibling `*.preview.mjs`.

const recipeless = [];

for (const component of components) {
  const componentDir = dirname(join(root, componentFile.get(component)));

  if (!globSync("*.preview.mjs", { cwd: componentDir }).length) {
    recipeless.push(component);
  }
}

// 2b. Coverage: every component has a built SVG.

const expectedSvgs = new Set(components.map((component) => `${component}.svg`));
const missing = components.filter(
  (component) => !existsSync(join(previewsDir, `${component}.svg`))
);

// 3. Orphans: every SVG maps back to a component.

const svgFiles = globSync("**/*.svg", {
  cwd: previewsDir,
}).map((file) => file.split(sep).join("/"));

const orphans = svgFiles.filter((svg) => !expectedSvgs.has(svg)).sort();

// 4. Wiring: every component's preview blocks put its SVG in the gallery slot,
//    and leave the icon slot to `icon:`.

const unwired = [];

/**
 * Check one `preview:` / `picker_preview:` block, collecting what is wrong.
 * @param {object} block     the parsed block, or undefined
 * @param {string} imagePath expected `gallery.image`
 * @param {boolean} wantsGallery false when the gallery binds a content key
 * @returns {string[]} problems, empty when the block is correct
 */
function blockProblems(block, imagePath, wantsGallery) {
  const problems = [];

  if (block?.image === imagePath) {
    problems.push("drop `image:` — the icon slot belongs to `icon:`");
  }

  if (!wantsGallery) return problems;

  if (block?.gallery?.image !== imagePath) {
    problems.push(`needs \`gallery.image: ${imagePath}\``);
  } else if (block.gallery.fit !== "cover") {
    problems.push("needs `gallery.fit: cover`");
  }

  return problems;
}

for (const component of components) {
  const file = componentFile.get(component);
  const imagePath = previewImagePath(component);
  const doc = yaml.load(readFileSync(join(root, file), "utf8")) ?? {};
  const problems = [
    ...blockProblems(doc.preview, imagePath, true),
    ...blockProblems(doc.picker_preview, imagePath, true),
  ];

  if (problems.length) unwired.push({ file, problems });

  // Components that are also MDX snippets carry the same thumbnail in their
  // snippets YAML, so the snippet picker matches the structure picker.
  const snippetFile = file.replace(
    /\.cloudcannon\.structure-value\.yml$/,
    ".cloudcannon.snippets.yml"
  );

  if (existsSync(join(root, snippetFile))) {
    const snippetSource = readFileSync(join(root, snippetFile), "utf8");
    // A gallery bound to a content key keeps the author's own image there.
    const wantsGallery = snippetWantsGalleryImage(snippetSource);
    // A snippets file nests everything one level under the snippet name.
    const snippet = Object.values(yaml.load(snippetSource) ?? {})[0] ?? {};
    const snippetProblems = blockProblems(snippet.preview, imagePath, wantsGallery);

    if (snippetProblems.length) unwired.push({ file: snippetFile, problems: snippetProblems });
  }
}

// 5. Report.

if (!recipeless.length && !missing.length && !orphans.length && !unwired.length) {
  console.log(`ok     ${components.length} components, ${svgFiles.length} previews in sync`);
  process.exit(0);
}

if (recipeless.length) {
  console.error(`MISSING recipe for ${recipeless.length} component(s):`);
  for (const component of recipeless) {
    console.error(`   ${component} -> needs a sibling <name>.preview.mjs`);
  }
}

if (missing.length) {
  console.error(`MISSING preview SVG for ${missing.length} component(s):`);
  for (const component of missing) {
    console.error(`   ${component} -> public/component-previews/${component}.svg`);
  }
}

if (orphans.length) {
  console.error(`ORPHAN preview SVG(s) with no matching component:`);
  for (const svg of orphans) console.error(`   public/component-previews/${svg}`);
}

if (unwired.length) {
  console.error(`UNWIRED — preview blocks not in the expected shape:`);
  for (const { file, problems } of unwired) {
    console.error(`   ${file}: ${problems.join("; ")}`);
  }
}

console.error(
  `\nPreview drift detected. Add any missing \`*.preview.mjs\` recipe, then run ` +
    `\`npm run previews:build\` to (re)compile SVGs and wire them in.`
);
process.exit(1);

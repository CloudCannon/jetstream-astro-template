/**
 * Syncs DOM changes in the CloudCannon editor to component runtime state.
 *
 * This works around two editor-only quirks:
 *
 *   1. CloudCannon cannot re-render props on a component's root element
 *      (handled via direct style sync, e.g. bento-box spans).
 *   2. CloudCannon's editable-regions uses React's `renderToStaticMarkup`
 *      to render Astro components, which strips inline `<script>` tags.
 *      That means components whose behaviour lives in a client `<script>`
 *      (e.g. Carousel / ImageCarousel Embla setup) never initialise in
 *      the editor, so we initialise them here instead.
 *
 * Logs editor mutations to the console in dev; silent in production.
 */

import {
  destroyCarousel,
  setupAllCarousels,
  setupCarousel,
} from "./src/components/building-blocks/wrappers/carousel/setup";
import {
  destroyImageCarousel,
  setupAllImageCarousels,
  setupImageCarousel,
} from "./src/components/building-blocks/wrappers/image-carousel/setup";

const DEBUG = import.meta.env.DEV;

function log(...args) {
  if (DEBUG) console.log("[editor-live-sync]", ...args);
}

/*
  Column spans only apply from this breakpoint up; below it every item is full
  width. The inline styles written here have to respect that or they would
  override the responsive rules in BentoBoxItem's stylesheet.
*/
const BENTO_COLUMN_QUERY = "(width >= 768px)";

/**
 * The grid child is normally `.bento-box-item`, but CloudCannon wraps a
 * re-rendered array item in `<editable-array-item>`, and that wrapper becomes
 * the grid child instead. Style whichever element is actually in the grid, and
 * clear the other so a stale span cannot survive a re-render.
 */
function bentoGridTarget(spanEl) {
  const item = spanEl.closest(".bento-box-item");

  if (!item) return null;

  const wrapper = item.parentElement;
  const wrapped = wrapper?.tagName === "EDITABLE-ARRAY-ITEM";

  return { target: wrapped ? wrapper : item, stale: wrapped ? item : null };
}

function syncBentoBoxSpans(spanEl) {
  const grid = bentoGridTarget(spanEl);

  if (!grid) return;

  // Attribute names must match what BentoBoxItem renders: data-column-span / data-row-span.
  const colSpan = Number(spanEl.dataset.columnSpan) || 1;
  const rowSpan = Number(spanEl.dataset.rowSpan) || 1;
  const columnsActive = window.matchMedia(BENTO_COLUMN_QUERY).matches;

  grid.target.style.gridColumn = columnsActive && colSpan > 1 ? `span ${colSpan}` : "";
  grid.target.style.gridRow = rowSpan > 1 ? `span ${rowSpan}` : "";

  if (grid.stale) {
    grid.stale.style.gridColumn = "";
    grid.stale.style.gridRow = "";
  }
}

function syncAllBentoBoxSpans(root = document) {
  for (const spanEl of root.querySelectorAll("[data-column-span], [data-row-span]")) {
    syncBentoBoxSpans(spanEl);
  }
}

const BENTO_BOX_ATTRS = ["data-column-span", "data-row-span"];

/**
 * Carousel config is read from attributes on `.carousel-inner` at
 * Embla init time, so any change to those attributes, the inline
 * style (CSS vars like `--slide-width`), or the slide list requires
 * a full destroy + re-init of the Embla instance.
 */
const CAROUSEL_INNER_ATTRS = [
  "data-show-indicators",
  "data-show-arrows",
  "data-loop",
  "data-align",
  "data-slides-to-scroll",
  "data-autoplay",
  "data-autoscroll",
  "style",
];

/**
 * ImageCarousel only reads `data-loop` from its root for Embla config.
 * Image list and arrow visibility are rendered conditionally, so those
 * are handled via childList mutations below.
 */
const IMAGE_CAROUSEL_ROOT_ATTRS = ["data-loop"];

function makeResetScheduler({ destroy, init, label }) {
  const pending = new Set();
  let scheduled = false;

  function queue(el, reason) {
    if (!el) return;

    log(`queue ${label} reset:`, reason, el);
    pending.add(el);

    if (scheduled) return;
    scheduled = true;

    requestAnimationFrame(() => {
      scheduled = false;

      const items = [...pending];

      pending.clear();

      for (const target of items) {
        if (!target.isConnected) {
          log(`skipping detached ${label}`, target);
          continue;
        }

        log(`destroying + re-initialising ${label}`, target);
        destroy(target);
        init(target);
      }
    });
  }

  return queue;
}

const queueCarouselReset = makeResetScheduler({
  destroy: destroyCarousel,
  init: setupCarousel,
  label: "carousel",
});

const queueImageCarouselReset = makeResetScheduler({
  destroy: destroyImageCarousel,
  init: setupImageCarousel,
  label: "image-carousel",
});

function initNewComponents(root) {
  if (root.nodeType !== Node.ELEMENT_NODE) return;

  const newCarousels = [];

  if (root.classList?.contains("carousel") && !root.hasAttribute("data-embla-initialized")) {
    newCarousels.push(root);
  }

  root
    .querySelectorAll(".carousel:not([data-embla-initialized])")
    .forEach((el) => newCarousels.push(el));

  for (const el of newCarousels) {
    log("initialising new carousel", el);
    setupCarousel(el);
  }

  const newImageCarousels = [];

  if (root.classList?.contains("image-carousel") && !root.hasAttribute("data-embla-initialized")) {
    newImageCarousels.push(root);
  }

  root
    .querySelectorAll(".image-carousel:not([data-embla-initialized])")
    .forEach((el) => newImageCarousels.push(el));

  for (const el of newImageCarousels) {
    log("initialising new image-carousel", el);
    setupImageCarousel(el);
  }
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    const { type, target, attributeName } = mutation;

    if (type === "attributes") {
      if (BENTO_BOX_ATTRS.includes(attributeName)) {
        syncBentoBoxSpans(target);
        continue;
      }

      if (!(target instanceof Element)) continue;

      if (
        CAROUSEL_INNER_ATTRS.includes(attributeName) &&
        target.classList.contains("carousel-inner")
      ) {
        queueCarouselReset(target.closest(".carousel"), `attr:${attributeName}`);
        continue;
      }

      if (
        IMAGE_CAROUSEL_ROOT_ATTRS.includes(attributeName) &&
        target.classList.contains("image-carousel")
      ) {
        queueImageCarouselReset(target, `attr:${attributeName}`);
        continue;
      }
    }

    if (type === "childList") {
      if (target instanceof Element) {
        if (target.classList.contains("track")) {
          queueCarouselReset(target.closest(".carousel"), "slides changed");
        }

        if (target.classList.contains("main-track") || target.classList.contains("thumbs-strip")) {
          queueImageCarouselReset(target.closest(".image-carousel"), "images changed");
        }

        if (target.classList.contains("image-carousel")) {
          // showArrows toggles .arrow-prev / .arrow-next in/out
          queueImageCarouselReset(target, "arrows toggled");
        }
      }

      for (const node of mutation.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;

        if (node.dataset?.columnSpan || node.dataset?.rowSpan) {
          syncBentoBoxSpans(node);
        }

        for (const child of node.querySelectorAll("[data-column-span], [data-row-span]")) {
          syncBentoBoxSpans(child);
        }

        initNewComponents(node);
      }
    }
  }
});

observer.observe(document.body, {
  attributes: true,
  attributeFilter: [...BENTO_BOX_ATTRS, ...CAROUSEL_INNER_ATTRS, ...IMAGE_CAROUSEL_ROOT_ATTRS],
  childList: true,
  subtree: true,
});

// Initialise any components already in the editor DOM.
setupAllCarousels();
setupAllImageCarousels();

// Apply spans to items already on the page. Without this the grid keeps whatever
// layout the static build produced until the first mutation happens to fire.
syncAllBentoBoxSpans();

// Column spans come and go at the breakpoint, so re-apply when it changes.
window.matchMedia(BENTO_COLUMN_QUERY).addEventListener("change", () => {
  syncAllBentoBoxSpans();
});

log("observer active", {
  bentoAttrs: BENTO_BOX_ATTRS,
  carouselAttrs: CAROUSEL_INNER_ATTRS,
  imageCarouselAttrs: IMAGE_CAROUSEL_ROOT_ATTRS,
});

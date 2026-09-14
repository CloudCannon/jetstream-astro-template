/**
 * Custom horizontal scroll indicator for the Table component.
 *
 * On narrow screens the comparison table overflows horizontally, so the
 * native scrollbar is replaced with the pill indicator above the table:
 * the thumb width reflects how much of the table is visible, its offset
 * reflects the scroll position, and dragging it scrolls the table.
 *
 * The distance scrolled from each end is also published as `--scroll-start`
 * and `--scroll-end` on the scroller, which the styles in `Table.astro` use to
 * fade out an edge once the table has been scrolled past it.
 *
 * Progressive enhancement: the indicator ships hidden, the native scrollbar is
 * only suppressed once this has run, and the two custom properties default to
 * `0px` — so without the script the table is simply a constrained, natively
 * scrollable box (e.g. in the CloudCannon editor's static render).
 */

const MIN_THUMB_WIDTH = 32;

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

export function setupTableScroll(section: HTMLElement): void {
  if (section.hasAttribute("data-table-scroll-initialized")) return;

  const container = section.querySelector<HTMLElement>(".table-container");
  const track = section.querySelector<HTMLElement>(".table-scroll-progress-track");
  const thumb = track?.querySelector<HTMLElement>(".table-scroll-progress-thumb");
  const progress = track?.closest<HTMLElement>(".table-scroll-progress");

  if (!container || !track || !thumb || !progress) return;

  section.setAttribute("data-table-scroll-initialized", "true");
  container.setAttribute("data-scroll-custom", "true");

  const update = () => {
    const overflow = container.scrollWidth - container.clientWidth;
    const scrolledFromStart = clamp(container.scrollLeft, 0, Math.max(overflow, 0));

    container.style.setProperty("--scroll-start", `${scrolledFromStart}px`);
    container.style.setProperty("--scroll-end", `${Math.max(overflow, 0) - scrolledFromStart}px`);

    if (overflow <= 1) {
      progress.hidden = true;
      return;
    }

    progress.hidden = false;

    const trackWidth = track.clientWidth;
    const visibleRatio = container.clientWidth / container.scrollWidth;
    const thumbWidth = clamp(trackWidth * visibleRatio, MIN_THUMB_WIDTH, trackWidth);
    const maxOffset = trackWidth - thumbWidth;
    const offset = clamp((container.scrollLeft / overflow) * maxOffset, 0, maxOffset);

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.transform = `translateX(${offset}px)`;
  };

  let frame = 0;

  const scheduleUpdate = () => {
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = 0;
      update();
    });
  };

  container.addEventListener("scroll", scheduleUpdate, { passive: true });

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(scheduleUpdate);

    observer.observe(container);

    const table = container.querySelector(".comparison-table");

    if (table) observer.observe(table);
  } else {
    window.addEventListener("resize", scheduleUpdate);
  }

  let dragging = false;

  const scrollToPointer = (clientX: number) => {
    const rect = track.getBoundingClientRect();
    const thumbWidth = thumb.offsetWidth;
    const maxOffset = rect.width - thumbWidth;
    const overflow = container.scrollWidth - container.clientWidth;

    if (maxOffset <= 0 || overflow <= 0) return;

    const offset = clamp(clientX - rect.left - thumbWidth / 2, 0, maxOffset);

    container.scrollLeft = (offset / maxOffset) * overflow;
  };

  track.addEventListener("pointerdown", (event: PointerEvent) => {
    dragging = true;
    track.setPointerCapture(event.pointerId);
    scrollToPointer(event.clientX);
  });

  track.addEventListener("pointermove", (event: PointerEvent) => {
    if (dragging) scrollToPointer(event.clientX);
  });

  const endDrag = (event: PointerEvent) => {
    if (!dragging) return;

    dragging = false;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  };

  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);

  update();
}

export function setupAllTableScrolls(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>(".table-section").forEach((el) => setupTableScroll(el));
}

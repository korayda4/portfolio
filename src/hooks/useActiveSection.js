import { useEffect, useState } from "react";

// Tracks which feed section is under the reading line. The feed scrolls
// inside its own container on desktop and with the window on small screens,
// so both are observed.
export function useActiveSection(ids, scrollerRef) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    let frame = 0;

    const isAtBottom = () => {
      const ownScroll = scroller.scrollHeight > scroller.clientHeight + 1;
      if (ownScroll) {
        return scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight < 4;
      }
      const doc = document.documentElement;
      return doc.scrollHeight - window.scrollY - window.innerHeight < 4;
    };

    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.3;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= readingLine) current = id;
      }

      setActive(isAtBottom() ? ids[ids.length - 1] : current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    scroller.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids, scrollerRef]);

  return active;
}

export function scrollToSection(id, behavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior, block: "start" });
  history.replaceState(null, "", `#${id}`);
}

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CaretLeft, CaretRight, X } from "phosphor-react";

// Full-size viewer for memory cards and certificates.
// items: [{ image, title, subtitle, period }]; index: open item, or null when closed.
export default function Lightbox({ items, index, onChange, onClose }) {
  const closeRef = useRef(null);
  const isOpen = index != null;
  const item = isOpen ? items[index] : null;
  const hasMany = items.length > 1;

  // Scroll lock and focus handling run once per open, not on every step.
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (!hasMany) return;
      if (event.key === "ArrowRight") onChange((index + 1) % items.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, index, items.length, hasMany, onChange, onClose]);

  const step = (delta) => (event) => {
    event.stopPropagation();
    onChange((index + delta + items.length) % items.length);
  };

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.figure
            key={item.image}
            className="lightbox-figure"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={item.image} alt={`${item.title} — ${item.subtitle}`} />
            <figcaption>
              <div>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
              <span className="mono">
                {hasMany ? `${index + 1} / ${items.length} · ` : ""}
                {item.period}
              </span>
            </figcaption>
          </motion.figure>

          {hasMany && (
            <>
              <button className="btn btn-icon lightbox-nav lightbox-prev" onClick={step(-1)} aria-label="Previous">
                <CaretLeft size={16} />
              </button>
              <button className="btn btn-icon lightbox-nav lightbox-next" onClick={step(1)} aria-label="Next">
                <CaretRight size={16} />
              </button>
            </>
          )}

          <button ref={closeRef} className="btn btn-icon lightbox-close" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

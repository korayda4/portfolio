import React from "react";
import { motion } from "framer-motion";
import { SECTIONS } from "../data/profile";

// Logo tile with a monogram fallback, used for companies and products.
// bare: no frame or background, for logos that carry their own shape.
export function Mark({ name, logo, size = 32, bare = false }) {
  const initials = name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={`mark ${bare ? "mark-bare" : ""}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.32) }}
      aria-hidden="true"
    >
      {logo ? <img src={logo} alt="" loading="lazy" /> : <span className="mark-initials">{initials}</span>}
    </span>
  );
}

// Section numbers follow the order in SECTIONS, so reordering never needs manual renumbering.
export function SectionHead({ id, title, aside }) {
  const position = SECTIONS.findIndex((section) => section.id === id);
  const label = SECTIONS[position]?.label ?? "";
  const index = `${String(position + 1).padStart(2, "0")} — ${label}`;

  return (
    <header className="section-head">
      <div>
        <span className="label">{index}</span>
        <h2>{title}</h2>
      </div>
      {aside && <div className="section-head-aside">{aside}</div>}
    </header>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.section>
  );
}

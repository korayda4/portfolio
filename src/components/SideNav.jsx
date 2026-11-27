import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Code,
  EnvelopeSimple,
  FilePdf,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  SquaresFour,
  Stack,
  Star,
} from "phosphor-react";
import { PROFILE, SECTIONS } from "../data/profile";
import { CV_CONFIG } from "../data/cvConfig";
import { scrollToSection } from "../hooks/useActiveSection";

const SECTION_ICONS = {
  overview: SquaresFour,
  experience: Briefcase,
  education: GraduationCap,
  featured: Star,
  projects: Code,
  stack: Stack,
  contact: EnvelopeSimple,
};

const EXTERNAL = [
  { label: "View CV", href: CV_CONFIG.routePath, icon: FilePdf, external: false },
  { label: "GitHub", href: PROFILE.links.github, icon: GithubLogo, external: true },
  { label: "LinkedIn", href: PROFILE.links.linkedin, icon: LinkedinLogo, external: true },
];

export default function SideNav({ active }) {
  return (
    <nav className="sidenav" aria-label="Sections">
      <div className="sidenav-group">
        <span className="label sidenav-title">Portfolio</span>
        {SECTIONS.map(({ id, label }) => {
          const Icon = SECTION_ICONS[id];
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-item ${isActive ? "is-active" : ""}`}
              aria-current={isActive ? "true" : undefined}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(id);
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
              <Icon size={17} weight={isActive ? "fill" : "regular"} />
              <span className="nav-text">{label}</span>
            </a>
          );
        })}
      </div>

      <div className="sidenav-group sidenav-external">
        <span className="label sidenav-title">Elsewhere</span>
        {EXTERNAL.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            className="nav-item"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon size={17} />
            <span className="nav-text">{label}</span>
            {external && <ArrowUpRight size={12} className="nav-trail" />}
          </a>
        ))}
      </div>

      <div className="sidenav-foot">
        <span className="sidenav-copy">© 2026 {PROFILE.name}</span>
      </div>
    </nav>
  );
}

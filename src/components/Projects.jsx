import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "phosphor-react";
import { PROJECTS, PROJECT_FILTERS } from "../data/profile";
import { Section, SectionHead } from "./ui";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const counts = useMemo(() => {
    const result = { all: PROJECTS.length };
    for (const project of PROJECTS) {
      result[project.category] = (result[project.category] || 0) + 1;
    }
    return result;
  }, []);

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <SectionHead
        id="projects"
        title="Repositories & client work"
        aside={<span className="count">{PROJECTS.length}</span>}
      />

      <div className="tabs" role="tablist" aria-label="Filter projects">
        {PROJECT_FILTERS.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={filter === id}
            className={`tab ${filter === id ? "is-active" : ""}`}
            onClick={() => setFilter(id)}
          >
            {label}
            <span className="tab-count">{counts[id] || 0}</span>
            {filter === id && <motion.span layoutId="tab-underline" className="tab-underline" />}
          </button>
        ))}
      </div>

      <ul className="repo-list">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.name}
              layout
              className="repo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="repo-main">
                <div className="repo-title">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="repo-name">
                    {project.name}
                  </a>
                  <span className={`badge badge-${project.category}`}>{project.badge}</span>
                </div>
                <p className="repo-desc">{project.description}</p>
                <div className="repo-meta">
                  {project.stack.map((tech, i) => (
                    <span key={tech} className="repo-tech">
                      {i === 0 && <span className="lang-dot" />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-icon repo-open"
                aria-label={`Open ${project.name}`}
              >
                <ArrowUpRight size={16} />
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Section>
  );
}

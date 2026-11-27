import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown } from "phosphor-react";
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { STACK_CORE_PLUS, STACK_PRIMARY, STACK_SECONDARY } from "../data/profile";
import { Section, SectionHead } from "./ui";

const PRIMARY_ICONS = {
  mongodb: SiMongodb,
  express: SiExpress,
  react: SiReact,
  node: SiNodedotjs,
  next: SiNextdotjs,
  rn: TbBrandReactNative,
  ts: SiTypescript,
};

const SECONDARY_COUNT = STACK_SECONDARY.reduce((sum, group) => sum + group.items.length, 0);

export default function StackTable() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Section id="stack">
      <SectionHead
        id="stack"
        title="Core stack"
        aside={<span className="count">MERN</span>}
      />

      <ul className="core-stack">
        {STACK_PRIMARY.map(({ id, name, role, note }) => {
          const Icon = PRIMARY_ICONS[id];
          return (
            <li key={id} className="core-tile">
              <span className="core-role label">{role}</span>
              <Icon className="core-icon" aria-hidden="true" />
              <span className="core-name">{name}</span>
              <span className="core-note">{note}</span>
            </li>
          );
        })}
      </ul>

      <ul className="core-plus">
        {STACK_CORE_PLUS.map(({ id, name, note }) => {
          const Icon = PRIMARY_ICONS[id];
          return (
            <li key={id} className="core-plus-tile">
              <Icon className="core-plus-icon" aria-hidden="true" />
              <span className="core-plus-text">
                <strong>{name}</strong>
                <small>{note}</small>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="toolkit">
        <button
          className="toolkit-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>
            <strong>{open ? "Hide extended toolkit" : "Show extended toolkit"}</strong>
            <small>
              {SECONDARY_COUNT} more tools across {STACK_SECONDARY.length} areas — incl. iOS, Supabase & CI/CD
            </small>
          </span>
          <CaretDown size={16} className={`toolkit-caret ${open ? "is-open" : ""}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="toolkit"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <dl className="stack-table">
                {STACK_SECONDARY.map(({ group, items }) => (
                  <div key={group} className="stack-row">
                    <dt className="label">{group}</dt>
                    <dd className="chips">
                      {items.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

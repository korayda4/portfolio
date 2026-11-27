import React from "react";
import { EDUCATION } from "../data/profile";
import { Mark, Section, SectionHead } from "./ui";

export default function Education() {
  return (
    <Section id="education">
      <SectionHead id="education" title="Education" />

      <ol className="card experience">
        {EDUCATION.map((item) => (
          <li key={item.school} className="job">
            <Mark name={item.school} size={48} />
            <div className="job-body">
              <h3>{item.school}</h3>
              <p className="job-org">{item.degree}</p>
              <span className="job-period">{item.period}</span>
              {item.note && <p className="job-text">{item.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

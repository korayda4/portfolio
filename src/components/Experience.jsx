import React from "react";
import { CalendarBlank, Diamond } from "phosphor-react";
import { EXPERIENCE } from "../data/profile";
import { Mark, Section, SectionHead } from "./ui";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseMonth(value) {
  if (!value) {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  }
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

function formatMonth(value) {
  const { year, month } = parseMonth(value);
  return `${MONTHS[month - 1]} ${year}`;
}

// LinkedIn counts both the first and the last month.
function formatDuration(start, end) {
  const a = parseMonth(start);
  const b = parseMonth(end);
  const total = (b.year - a.year) * 12 + (b.month - a.month) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

function Period({ start, end }) {
  return (
    <span className="job-period">
      {formatMonth(start)} — {end ? formatMonth(end) : "Present"} · {formatDuration(start, end)}
    </span>
  );
}

function CareerBreak({ job }) {
  return (
    <li className="job job-break">
      <span className="mark" style={{ width: 48, height: 48 }} aria-hidden="true">
        <CalendarBlank size={22} />
      </span>
      <div className="job-body">
        <div className="job-head">
          <div>
            <h3>{job.role}</h3>
            <p className="job-org">{job.company}</p>
            <Period start={job.start} end={job.end} />
          </div>
          {!job.end && <span className="badge badge-live">Ongoing</span>}
        </div>
      </div>
    </li>
  );
}

function Role({ job }) {
  return (
    <li className="job">
      <Mark name={job.company} logo={job.logo} size={48} />
      <div className="job-body">
        <h3>{job.role}</h3>
        <p className="job-org">
          {job.company}
          {job.type && ` · ${job.type}`}
        </p>
        <Period start={job.start} end={job.end} />
        {job.location && (
          <span className="job-place">
            {job.location}
            {job.mode && ` · ${job.mode}`}
          </span>
        )}

        {job.summary?.map((paragraph) => (
          <p key={paragraph} className="job-text">
            {paragraph}
          </p>
        ))}

        {job.points && (
          <ul className="job-points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {job.skills && (
          <p className="job-skills">
            <Diamond size={13} weight="fill" />
            <span>
              {job.skills.join(", ")}
              {job.moreSkills ? ` and +${job.moreSkills} skills` : ""}
            </span>
          </p>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  const roles = EXPERIENCE.filter((job) => job.kind !== "break").length;

  return (
    <Section id="experience">
      <SectionHead
        id="experience"
        title="Experience"
        aside={<span className="count">{roles}</span>}
      />

      <ol className="card experience">
        {EXPERIENCE.map((job) =>
          job.kind === "break" ? (
            <CareerBreak key={`${job.role}-${job.start}`} job={job} />
          ) : (
            <Role key={`${job.company}-${job.start}`} job={job} />
          )
        )}
      </ol>
    </Section>
  );
}

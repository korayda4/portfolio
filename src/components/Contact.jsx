import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { PROFILE } from "../data/profile";
import { Section, SectionHead } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const links = [
    { label: "GitHub", value: `github.com/${PROFILE.handle}`, href: PROFILE.links.github, icon: GithubLogo },
    { label: "LinkedIn", value: "in/koraydemir1", href: PROFILE.links.linkedin, icon: LinkedinLogo },
  ];

  return (
    <Section id="contact">
      <SectionHead id="contact" title="Let’s build something" />

      <div className="card contact">
        <p className="contact-lede">
          For projects, collaborations or a quick question — email is the fastest way to reach me.
        </p>

        <div className="email-row">
          <EnvelopeSimple size={18} className="email-icon" />
          <span className="email-value mono">{PROFILE.email}</span>
          <button className="btn" onClick={copyEmail} aria-live="polite">
            {copied ? <Check size={14} weight="bold" /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
          <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
            Write
          </a>
        </div>

        <div className="contact-links">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Icon size={18} />
              <span>
                <strong>{label}</strong>
                <small>{value}</small>
              </span>
              <ArrowUpRight size={14} className="contact-arrow" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

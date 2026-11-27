import React from "react";
import { DownloadSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { PROFILE } from "../data/profile";
import { CV_CONFIG } from "../data/cvConfig";

export default function TopBar() {
  return (
    <header className="topbar">
      <a href="/" className="brand" aria-label={`${PROFILE.name} — home`}>
        <img className="brand-avatar" src={PROFILE.avatar} alt="" width={28} height={28} />
        <span className="brand-path">
          <span>{PROFILE.handle}</span>
          <span className="brand-sep">/</span>
          <strong>portfolio</strong>
        </span>
      </a>

      <div className="topbar-actions">
        <a
          className="btn btn-ghost btn-icon"
          href={PROFILE.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubLogo size={18} />
        </a>
        <a
          className="btn btn-ghost btn-icon"
          href={PROFILE.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinLogo size={18} />
        </a>
        <a className="btn btn-primary" href={CV_CONFIG.fileUrl} download={CV_CONFIG.downloadFileName}>
          <DownloadSimple size={15} weight="bold" />
          <span>Download CV</span>
        </a>
      </div>
    </header>
  );
}

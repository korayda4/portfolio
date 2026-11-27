import React, { useCallback, useState } from "react";
import { Cards, DownloadSimple, FilePdf, MapPin, Medal, Sparkle, Translate } from "phosphor-react";
import { CERTIFICATIONS, LANGUAGES, MARKS, MEMORIES, PROFILE } from "../data/profile";
import { CV_CONFIG } from "../data/cvConfig";
import Lightbox from "./Lightbox";

const GALLERIES = { memories: MEMORIES, certs: CERTIFICATIONS };

// Justified rows: images keep their own aspect ratio and every row fills the width
// at one shared height. A row closes once its summed aspect ratio reaches the target.
const ROW_RATIO = 2.8;
const CERT_ROWS = CERTIFICATIONS.reduce(
  (rows, cert, index) => {
    const row = rows[rows.length - 1];
    const sum = row.reduce((total, item) => total + item.ratio, 0);
    if (row.length && sum >= ROW_RATIO * 0.9) rows.push([]);
    rows[rows.length - 1].push({ cert, index, ratio: cert.width / cert.height });
    return rows;
  },
  [[]]
);

// Fixed right rail: only the essentials, sized to fit without scrolling.
function Block({ icon: Icon, title, aside, children }) {
  return (
    <section className="cv-block">
      <header className="cv-block-head">
        <span className="label">
          <Icon size={13} />
          {title}
        </span>
        {aside && <span className="cv-block-aside mono">{aside}</span>}
      </header>
      {children}
    </section>
  );
}

export default function CvPanel() {
  // { gallery: "memories" | "certs", index } while the viewer is open
  const [viewer, setViewer] = useState(null);
  const close = useCallback(() => setViewer(null), []);
  const step = useCallback((index) => setViewer((v) => v && { ...v, index }), []);

  return (
    <aside className="cv" aria-label="Profile">
      <section className="cv-identity">
        <div className="cv-cover" aria-hidden="true" />
        <img className="cv-avatar" src={PROFILE.avatar} alt={PROFILE.name} width={72} height={72} />
        <h2 className="cv-name">{PROFILE.name}</h2>
        <p className="cv-headline">{PROFILE.headline}</p>
        <p className="cv-focus">{PROFILE.focus}</p>

        <div className="cv-meta">
          <span>
            <MapPin size={13} />
            {PROFILE.location}
          </span>
          <span>
            <Translate size={13} />
            {LANGUAGES.map((lang) => `${lang.name} (${lang.level})`).join(" · ")}
          </span>
        </div>

        <div className="cv-actions">
          <a className="btn btn-primary" href={CV_CONFIG.fileUrl} download={CV_CONFIG.downloadFileName}>
            <DownloadSimple size={15} weight="bold" />
            Download CV
          </a>
          <a className="btn" href={CV_CONFIG.routePath}>
            <FilePdf size={15} />
            View
          </a>
        </div>
      </section>

      <Block icon={Cards} title="Memories">
        {MEMORIES.map((memory, index) => (
          <button
            key={memory.id}
            className="memory"
            onClick={() => setViewer({ gallery: "memories", index })}
            aria-label={`Open ${memory.title} card`}
          >
            <img className="memory-thumb" src={memory.image} alt="" width={memory.width} height={memory.height} />
            <span className="memory-text">
              <strong>{memory.title}</strong>
              <small>{memory.subtitle}</small>
              <small className="mono">{memory.period}</small>
            </span>
          </button>
        ))}
      </Block>

      <Block icon={Sparkle} title="Marks">
        <ul className="marks">
          {MARKS.map((mark) => {
            const body = (
              <>
                <img src={mark.image} alt="" />
                <span>
                  <strong>{mark.name}</strong>
                  <small>{mark.caption}</small>
                </span>
              </>
            );
            return (
              <li key={mark.name}>
                {mark.link ? (
                  <a className="mark-row" href={mark.link} target="_blank" rel="noopener noreferrer">
                    {body}
                  </a>
                ) : (
                  <div className="mark-row">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Block>

      <Block icon={Medal} title="Certifications" aside={CERTIFICATIONS.length}>
        <div className="cert-gallery">
          {CERT_ROWS.map((row) => (
            <div key={row[0].cert.id} className="cert-row">
              {row.map(({ cert, index, ratio }) => (
                <button
                  key={cert.id}
                  className="cert-thumb"
                  style={{ flexGrow: ratio, aspectRatio: `${cert.width} / ${cert.height}` }}
                  onClick={() => setViewer({ gallery: "certs", index })}
                  aria-label={`Open ${cert.title}`}
                  title={cert.title}
                >
                  <img src={cert.image} alt="" loading="lazy" width={cert.width} height={cert.height} />
                </button>
              ))}
            </div>
          ))}
        </div>
      </Block>

      <Lightbox
        items={viewer ? GALLERIES[viewer.gallery] : []}
        index={viewer ? viewer.index : null}
        onChange={step}
        onClose={close}
      />
    </aside>
  );
}

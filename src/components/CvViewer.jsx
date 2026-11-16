import React, { useEffect } from "react";
import { ArrowLeft, DownloadSimple } from "phosphor-react";
import { CV_CONFIG } from "../data/cvConfig";

export default function CvViewer() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = CV_CONFIG.title;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="cv-viewer-root">
      <iframe
        src={CV_CONFIG.inlineUrl}
        title={CV_CONFIG.title}
        className="cv-iframe"
      />

      <div className="cv-floating-bar">
        <a href="/" className="cv-pill-btn cv-pill-back">
          <ArrowLeft size={16} weight="bold" />
          <span>Portfolio</span>
        </a>
        <a
          href={CV_CONFIG.fileUrl}
          download={CV_CONFIG.downloadFileName}
          className="cv-pill-btn cv-pill-download"
        >
          <DownloadSimple size={16} weight="bold" />
          <span>Download PDF</span>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cv-viewer-root {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: var(--hero-primary, #1e293b);
          overflow: hidden;
        }

        .cv-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          background: #1e293b;
        }

        .cv-floating-bar {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 9999px;
          background: rgba(30, 41, 59, 0.88);
          border: 1px solid rgba(203, 213, 225, 0.25);
          backdrop-filter: blur(14px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.45);
        }

        .cv-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 9999px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }

        .cv-pill-btn:hover {
          transform: translateY(-1px);
        }

        .cv-pill-back {
          color: var(--hero-secondary, #cbd5e1);
          background: rgba(203, 213, 225, 0.08);
          border: 1px solid rgba(203, 213, 225, 0.2);
        }

        .cv-pill-back:hover {
          background: rgba(203, 213, 225, 0.16);
          color: #ffffff;
        }

        .cv-pill-download {
          color: var(--hero-primary, #1e293b);
          background: var(--hero-accent, #6ee7b7);
          border: 1px solid transparent;
        }

        .cv-pill-download:hover {
          background: #86efac;
        }

        @media (max-width: 600px) {
          .cv-floating-bar {
            bottom: 16px;
            right: 16px;
            left: 16px;
            justify-content: space-between;
          }

          .cv-pill-btn {
            flex: 1;
            justify-content: center;
            padding: 10px 12px;
            font-size: 0.82rem;
          }
        }
      `}} />
    </div>
  );
}

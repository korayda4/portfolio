import React from "react";
import { motion } from "framer-motion";
import { DownloadSimple, FilePdf, ArrowRight } from "phosphor-react";
import { CV_CONFIG, HERO_CONTENT, HERO_THEME } from "../data/cvConfig";

export default function Hero() {
  return (
    <section className="container hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="hero-content"
      >
        <div className="hero-badge-row">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>{HERO_CONTENT.badge}</span>
          </div>
          <div className="palette-dots" aria-hidden="true">
            <span style={{ backgroundColor: HERO_THEME.primary }} />
            <span style={{ backgroundColor: HERO_THEME.secondary }} />
            <span style={{ backgroundColor: HERO_THEME.accent }} />
          </div>
        </div>

        <h1 className="hero-title">{HERO_CONTENT.name}</h1>
        <p className="hero-role">{HERO_CONTENT.role}</p>

        <p className="hero-description">{HERO_CONTENT.description}</p>

        <div className="hero-stack">
          {HERO_CONTENT.stack.map((tech) => (
            <span key={tech} className="hero-stack-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="hero-actions">
          <a
            href={CV_CONFIG.fileUrl}
            download={CV_CONFIG.downloadFileName}
            className="hero-btn hero-btn-primary"
          >
            <DownloadSimple size={18} weight="bold" />
            <span>Download CV</span>
          </a>
          <a href={CV_CONFIG.routePath} className="hero-btn hero-btn-secondary">
            <FilePdf size={18} weight="bold" />
            <span>View CV</span>
          </a>
          <a href="#quests" className="hero-btn hero-btn-ghost">
            <span>Projects</span>
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="hero-visual"
      >
        <div className="hero-ambient-glow" />
        <div className="hero-image-card">
          <img
            src="/hero.png"
            alt={`${HERO_CONTENT.name} — ${HERO_CONTENT.role}`}
            className="hero-image"
          />
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
          min-height: 88vh;
          padding-top: 120px;
          padding-bottom: 48px;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge-row {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 9999px;
          background: rgba(203, 213, 225, 0.08);
          border: 1px solid rgba(203, 213, 225, 0.22);
          color: var(--hero-secondary, #cbd5e1);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--hero-accent, #6ee7b7);
          box-shadow: 0 0 10px rgba(110, 231, 183, 0.6);
        }

        .palette-dots {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 10px;
          border-radius: 9999px;
          background: rgba(30, 41, 59, 0.65);
          border: 1px solid rgba(203, 213, 225, 0.16);
        }

        .palette-dots span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .hero-title {
          font-family: 'Outfit', sans-serif;
          text-transform: none;
          font-size: clamp(2.75rem, 6vw, 4.25rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #f8fafc;
          margin-bottom: 10px;
          text-shadow: none;
        }

        .hero-role {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.15rem, 2.2vw, 1.5rem);
          font-weight: 500;
          color: var(--hero-accent, #6ee7b7);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .hero-description {
          font-size: 1.08rem;
          color: var(--hero-secondary, #cbd5e1);
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 26px;
          font-weight: 300;
        }

        .hero-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 34px;
        }

        .hero-stack-pill {
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--hero-secondary, #cbd5e1);
          background: rgba(30, 41, 59, 0.55);
          border: 1px solid rgba(203, 213, 225, 0.2);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-btn:hover {
          transform: translateY(-2px);
        }

        .hero-btn-primary {
          background: var(--hero-accent, #6ee7b7);
          color: var(--hero-primary, #1e293b);
          box-shadow: 0 8px 24px rgba(110, 231, 183, 0.2);
        }

        .hero-btn-primary:hover {
          background: #86efac;
        }

        .hero-btn-secondary {
          background: rgba(203, 213, 225, 0.1);
          color: #f8fafc;
          border: 1px solid rgba(203, 213, 225, 0.28);
        }

        .hero-btn-secondary:hover {
          background: rgba(203, 213, 225, 0.18);
          border-color: rgba(203, 213, 225, 0.45);
        }

        .hero-btn-ghost {
          color: var(--hero-secondary, #cbd5e1);
          padding: 12px 14px;
        }

        .hero-btn-ghost:hover {
          color: var(--hero-accent, #6ee7b7);
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-ambient-glow {
          position: absolute;
          width: 85%;
          height: 85%;
          border-radius: 28px;
          background: radial-gradient(circle, rgba(110, 231, 183, 0.12) 0%, transparent 72%);
          filter: blur(24px);
          z-index: 0;
          pointer-events: none;
        }

        .hero-image-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 460px;
          border-radius: 20px;
          padding: 10px;
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(203, 213, 225, 0.25);
          box-shadow: 0 24px 48px rgba(15, 23, 42, 0.35);
          backdrop-filter: blur(10px);
        }

        .hero-image {
          width: 100%;
          display: block;
          border-radius: 14px;
          object-fit: cover;
        }

        @media (max-width: 992px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
            padding-top: 110px;
          }

          .hero-content {
            align-items: center;
          }

          .hero-stack,
          .hero-actions {
            justify-content: center;
          }

          .hero-image-card {
            max-width: 400px;
          }
        }
      `}} />
    </section>
  );
}

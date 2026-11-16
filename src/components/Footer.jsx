import React from "react";
import { GithubLogo, LinkedinLogo, Heart, Globe, Cpu } from "phosphor-react";
import { CV_CONFIG } from "../data/cvConfig";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          {/* Branding Section */}
          <div className="footer-brand">
            <div className="pixel-font footer-logo">
              KORAY<span style={{ color: "var(--accent)" }}>.EXE</span>
            </div>
            <p className="footer-tagline">
              Engineering high-performance digital experiences with pixel-perfect precision.
            </p>
            <div className="footer-status-bar">
              <span className="status-item"><Globe size={14} /> ONLINE</span>
              <span className="status-item"><Cpu size={14} /> REACT GENIUS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="pixel-font">World Map</h4>
            <div className="link-group">
              <a href="#">Spawn Point</a>
              <a href="#inventory">Inventory</a>
              <a href="#quests">Active Quests</a>
              <a href="#workbench">The Signal</a>
              <a href={CV_CONFIG.routePath}>CV</a>
            </div>
          </div>

          {/* Social Presence */}
          <div className="footer-social">
            <h4 className="pixel-font">Connect</h4>
            <div className="social-stack">
              <a href="https://github.com/korayda4" target="_blank" rel="noopener noreferrer" className="social-pill">
                <GithubLogo size={20} weight="fill" /> <span>GITHUB</span>
              </a>
              <a href="https://www.linkedin.com/in/koraydemir1/" target="_blank" rel="noopener noreferrer" className="social-pill">
                <LinkedinLogo size={20} weight="fill" /> <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-copyright">
            <span className="pixel-font">© 2026 KORAY DEMIR</span>
            <div className="made-with">
              MADE WITH <Heart size={14} weight="fill" color="#e74c3c" /> AND A LOT OF COFFEE
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-main {
          background: #1e272e;
          padding: 80px 0 40px 0;
          border-top: 4px solid var(--accent);
          color: #fff;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        .footer-logo { font-size: 1.5rem; margin-bottom: 15px; }
        .footer-tagline { 
          color: rgba(255,255,255,0.6); 
          line-height: 1.6; 
          margin-bottom: 24px;
          max-width: 320px;
        }
        .footer-status-bar {
          display: flex;
          gap: 15px;
        }
        .status-item {
          font-size: 0.65rem;
          font-family: 'Silkscreen', cursive;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.05);
          padding: 6px 12px;
          border-radius: 4px;
        }

        .footer-links h4, .footer-social h4 {
          font-size: 1rem;
          color: var(--accent);
          margin-bottom: 25px;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .link-group a {
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          transition: 0.2s;
        }
        .link-group a:hover { color: var(--accent); transform: translateX(5px); }

        .social-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .social-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.05);
          padding: 12px 20px;
          text-decoration: none;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
          transition: 0.2s;
        }
        .social-pill:hover { background: rgba(255,255,255,0.1); border-color: var(--accent); }
        .social-pill span { font-family: 'Silkscreen', cursive; font-size: 0.75rem; }

        .footer-bottom { text-align: center; }
        .footer-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin-bottom: 30px;
        }
        .footer-copyright {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
        }
        .made-with { display: flex; align-items: center; gap: 8px; }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand { grid-column: span 2; text-align: center; }
          .footer-brand .footer-tagline { margin-left: auto; margin-right: auto; }
          .footer-status-bar { justify-content: center; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; text-align: center; }
          .footer-brand { grid-column: span 1; }
          .footer-links, .footer-social { display: flex; flex-direction: column; align-items: center; }
          .footer-copyright { flex-direction: column; gap: 15px; }
        }
      `}} />
    </footer>
  );
}

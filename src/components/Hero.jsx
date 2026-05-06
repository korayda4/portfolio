import React from "react";
import { motion } from "framer-motion";
import { DownloadSimple, RocketLaunch } from "phosphor-react";

export default function Hero() {
  return (
    <section className="container hero-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <div className="mc-button primary hero-badge">
          LEVEL 99 SOFTWARE GENIUS
        </div>
        <h1 className="hero-title">
          Software <br />
          <span style={{ color: "var(--accent)" }}>Genius</span>
        </h1>
        <p className="hero-description">
          Crafting legendary digital worlds with React, Next.js, and Mobile technologies. Voxel-perfect code and high-performance engineering.
        </p>
        
        <div className="hero-actions">
          <a href="#quests" className="mc-button">VIEW QUESTS</a>
          <a href="/resume.pdf" download className="mc-button primary">
            DOWNLOAD CV <DownloadSimple size={18} weight="bold" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-visual float"
      >
        <div className="visual-frame" />
        <img 
          src="/hero.png" 
          alt="Software Genius Hero" 
          className="hero-image"
        />
        
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="glass-block floating-chip"
        >
          <RocketLaunch size={20} color="var(--accent)" />
          <span>FAST BUILD</span>
        </motion.div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          min-height: 90vh;
          padding-top: 120px; /* Compensation for fixed header */
          padding-bottom: 60px;
        }
        .hero-badge {
          margin-bottom: 24px; 
          font-size: 0.7rem;
          padding: 8px 16px;
        }
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1;
          margin-bottom: 32px;
          color: #fff;
          text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
        }
        .hero-description {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 48px;
          max-width: 600px;
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hero-visual {
          position: relative;
        }
        .visual-frame {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 100%;
          height: 100%;
          border: 4px solid var(--accent);
          z-index: -1;
          border-radius: 8px;
        }
        .hero-image {
          width: 100%;
          border-radius: 8px;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.3);
          border: 4px solid rgba(255,255,255,0.2);
        }
        .floating-chip {
          position: absolute;
          bottom: -20px;
          left: -20px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Silkscreen', cursive;
          font-size: 0.7rem;
          background: rgba(0,0,0,0.7);
        }

        @media (max-width: 992px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
            padding-top: 100px; /* Slightly less on mobile but still enough */
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual {
            max-width: 500px;
            margin: 0 auto;
          }
          .hero-title { font-size: 2.5rem; }
          .hero-description { font-size: 1rem; }
        }
      `}} />
    </section>
  );
}

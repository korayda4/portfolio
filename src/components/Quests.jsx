import React from "react";
import { motion } from "framer-motion";
import { ArrowSquareOut } from "phosphor-react";
import { projects } from "../data/projects";

export default function Quests() {
  return (
    <section id="quests" className="container section-padding">
      <div className="section-header">
        <h2 className="pixel-font">Active Quests</h2>
        <p>A collection of React, Next.js, and Mobile missions.</p>
      </div>

      <div className="quests-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-block quest-card"
          >
            <div className="quest-header">
              <h3 className="pixel-font quest-title">{project.title}</h3>
              <div className="quest-status">
                QUEST COMPLETE
              </div>
            </div>
            
            <p className="quest-description">
              {project.description}
            </p>

            <div className="quest-tags">
              {project.tech.split(' / ').map(t => (
                <span key={t} className="quest-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="quest-footer">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mc-button" 
                style={{ width: "100%", justifyContent: "center", fontSize: "0.8rem" }}
              >
                OPEN PROJECT <ArrowSquareOut size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .quests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        .quest-card {
          padding: 24px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: 100%;
        }
        .quest-header {
          display: flex; 
          justify-content: space-between; 
          align-items: flex-start;
          gap: 12px;
        }
        .quest-title {
          font-size: 1.1rem; 
          color: var(--accent);
          line-height: 1.2;
        }
        .quest-status {
          background: var(--grass-primary);
          padding: 4px 8px;
          font-size: 0.55rem;
          color: #000;
          font-family: 'Silkscreen', cursive;
          border-radius: 2px;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .quest-description {
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          line-height: 1.6;
          flex-grow: 1;
        }
        .quest-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .quest-tag {
          font-size: 0.6rem;
          background: rgba(0,0,0,0.4);
          padding: 4px 10px;
          borderRadius: 2px;
          color: var(--accent);
          fontFamily: 'Silkscreen', cursive;
          border: 1px solid rgba(253, 203, 110, 0.3);
        }
        .quest-footer {
          margin-top: auto;
          padding-top: 16px;
        }

        @media (max-width: 600px) {
          .quests-grid {
            grid-template-columns: 1fr;
          }
          .quest-title {
            font-size: 1rem;
          }
        }
      `}} />
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  FigmaLogo, 
  GithubLogo, 
  Terminal, 
  Lightning,
  Cube,
  Cloud,
  FileTs,
  BracketsCurly,
  ProjectorScreenChart
} from "phosphor-react";

const skills = [
  { name: "TypeScript", icon: <FileTs weight="bold" /> },
  { name: "Next.js", icon: <Globe weight="bold" /> },
  { name: "React Native", icon: <Cpu weight="bold" /> },
  { name: "TailwindCSS", icon: <Lightning weight="bold" /> },
  { name: "React", icon: <Code weight="bold" /> },
  { name: "JavaScript", icon: <BracketsCurly weight="bold" /> },
  { name: "Git", icon: <Terminal weight="bold" /> },
  { name: "GitHub", icon: <GithubLogo weight="bold" /> },
  { name: "Cloudflare", icon: <Cloud weight="bold" /> },
  { name: "Node.js", icon: <Database weight="bold" /> },
  { name: "Vite", icon: <Lightning weight="fill" /> },
  { name: "Three.js", icon: <Cube weight="bold" /> }
];

export default function Inventory() {
  // Duplicate skills for seamless loop
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="inventory" className="inventory-marquee-section">
      <div className="section-header container">
        <h2 className="pixel-font">Mastery Marquee</h2>
        <p>A continuous stream of legendary technologies.</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {marqueeSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="marquee-item glass-block">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name pixel-font">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .inventory-marquee-section {
          padding: 80px 0;
          overflow: hidden;
          background: rgba(0,0,0,0.1);
        }
        
        .marquee-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 200px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--sky-bottom) 0%, transparent 100%);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--sky-bottom) 0%, transparent 100%);
        }

        .marquee-content {
          display: flex;
          gap: 20px;
          animation: marquee 30s linear infinite;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .skill-icon {
          font-size: 1.5rem;
          color: var(--accent);
          display: flex;
          align-items: center;
        }

        .skill-name {
          font-size: 0.8rem;
          color: #fff;
          letter-spacing: 1px;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .marquee-item {
            padding: 8px 16px;
          }
          .skill-icon { font-size: 1.2rem; }
          .skill-name { font-size: 0.7rem; }
        }
      `}} />
    </section>
  );
}

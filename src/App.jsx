import React, { useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import TopBar from "./components/TopBar";
import SideNav from "./components/SideNav";
import Overview from "./components/Overview";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import StackTable from "./components/StackTable";
import Contact from "./components/Contact";
import CvPanel from "./components/CvPanel";
import CvViewer from "./components/CvViewer";
import { CV_CONFIG } from "./data/cvConfig";
import { PROFILE, SECTIONS } from "./data/profile";
import { scrollToSection, useActiveSection } from "./hooks/useActiveSection";
import "./App.css";

const SECTION_IDS = SECTIONS.map((section) => section.id);

function Portfolio() {
  const feedRef = useRef(null);
  const active = useActiveSection(SECTION_IDS, feedRef);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!SECTION_IDS.includes(id)) return undefined;
    // Wait for images to settle so the jump lands on the right section.
    const jump = () => scrollToSection(id, "auto");
    if (document.readyState === "complete") jump();
    else window.addEventListener("load", jump, { once: true });
    return () => window.removeEventListener("load", jump);
  }, []);

  return (
    <div className="shell">
      <TopBar />
      <div className="workspace">
        <SideNav active={active} />

        <main className="feed" ref={feedRef}>
          <div className="feed-inner">
            <Overview />
            <Experience />
            <Education />
            <Featured />
            <Projects />
            <StackTable />
            <Contact />

            <footer className="feed-footer">
              <span>© 2026 {PROFILE.name}</span>
              <span>Built with React & Vite</span>
            </footer>
          </div>
        </main>

        <CvPanel />
      </div>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "").toLowerCase();

  return (
    <MotionConfig reducedMotion="user">
      {path === CV_CONFIG.routePath ? <CvViewer /> : <Portfolio />}
    </MotionConfig>
  );
}

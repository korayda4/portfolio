import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, List, X, House, IdentificationBadge, Briefcase, ChatCircleText } from "phosphor-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#", icon: <House size={20} /> },
    { name: "Inventory", href: "#inventory", icon: <IdentificationBadge size={20} /> },
    { name: "Quests", href: "#quests", icon: <Briefcase size={20} /> },
    { name: "Workbench", href: "#workbench", icon: <ChatCircleText size={20} /> }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`header-main ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="container header-container-flex">
          <div className="glass-block header-inner">
            <div className="pixel-font logo-text">
              KORAY<span style={{ color: "var(--accent)" }}>.EXE</span>
            </div>
            
            <nav className="desktop-nav">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="nav-link">
                  {item.name}
                </a>
              ))}
              <a 
                href="https://github.com/korayda4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mc-button github-btn"
              >
                <GithubLogo size={18} weight="fill" />
                <span>GITHUB</span>
              </a>
            </nav>

            <button 
              className="mobile-toggle mc-button" 
              onClick={() => setIsOpen(true)}
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Minecraft Construction Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <div className="mobile-menu-portal">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="menu-backdrop"
              onClick={() => setIsOpen(false)}
            />
            
            <div className="bottom-sheet-minecraft">
              <div className="construction-grid-main">
                {[...Array(9)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.04, type: "spring", stiffness: 260, damping: 18 }}
                    className="minecraft-build-block"
                  />
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="sheet-content-overlay"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sheet-handle-mc" />
                <div className="sheet-header-mc">
                  <h3 className="pixel-font">QUEST MENU</h3>
                  <button className="close-btn-mc" onClick={() => setIsOpen(false)}>
                    <X size={20} weight="bold" />
                  </button>
                </div>

                <div className="sheet-links-mc">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="mc-link-item"
                    >
                      <div className="mc-icon-box">{item.icon}</div>
                      <span className="mc-link-text">{item.name}</span>
                    </motion.a>
                  ))}
                  
                  <motion.a
                    href="https://github.com/korayda4"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mc-button primary mc-github-btn"
                  >
                    <GithubLogo size={24} weight="fill" /> OPEN GITHUB
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .header-main {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s;
        }
        .header-main.scrolled {
          padding: 10px 0;
        }
        .header-container-flex {
          display: flex;
          justify-content: center;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 30px;
          width: 100%;
          max-width: 1100px;
          background: rgba(30, 39, 46, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .logo-text { font-size: 1.3rem; color: #fff; }
        .desktop-nav { display: flex; gap: 30px; align-items: center; }
        .nav-link {
          text-decoration: none;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          opacity: 0.8;
          transition: 0.2s;
        }
        .nav-link:hover { opacity: 1; color: var(--accent); }
        .github-btn { 
          padding: 8px 16px; 
          font-size: 0.75rem; 
          gap: 10px;
          background: #2f3640;
          border-color: #57606f;
        }
        .mobile-toggle { display: none; padding: 10px; }

        @media (max-width: 992px) {
          .header-inner { padding: 10px 20px; }
          .desktop-nav { display: none; }
          .mobile-toggle { display: flex; }
          .logo-text { font-size: 1.1rem; }
        }

        /* Portal & Bottom Sheet remains consistent with construction logic */
        .mobile-menu-portal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 999999;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .menu-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
          z-index: -1;
        }
        .bottom-sheet-minecraft { width: 100%; min-height: 520px; position: relative; }
        .construction-grid-main {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          z-index: 0;
        }
        .minecraft-build-block {
          background: #1e272e;
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: inset 4px 4px 0px rgba(255,255,255,0.03), inset -4px -4px 0px rgba(0,0,0,0.3);
        }
        .minecraft-build-block:nth-child(1),
        .minecraft-build-block:nth-child(2),
        .minecraft-build-block:nth-child(3) { border-top: 4px solid var(--accent); }
        .sheet-content-overlay { position: relative; z-index: 1; padding: 40px 24px; width: 100%; }
        .sheet-handle-mc { width: 40px; height: 4px; background: rgba(255,255,255,0.1); margin: 0 auto 30px auto; }
        .sheet-header-mc { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .mc-link-item { 
          display: flex; align-items: center; gap: 16px; padding: 18px; 
          background: rgba(255,255,255,0.03); border: 2px solid rgba(255,255,255,0.07); 
          text-decoration: none; color: #fff;
        }
        .mc-icon-box { width: 44px; height: 44px; background: rgba(253, 203, 110, 0.08); color: var(--accent); display: flex; align-items: center; justify-content: center; }
        .mc-link-text { font-family: 'Silkscreen', cursive; font-size: 0.9rem; }
      `}} />
    </>
  );
}

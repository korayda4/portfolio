import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Inventory from "./components/Inventory";
import Quests from "./components/Quests";
import Workbench from "./components/Workbench";
import Footer from "./components/Footer";
import CvViewer from "./components/CvViewer";
import { CV_CONFIG } from "./data/cvConfig";
import "./App.css";

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "").toLowerCase();
  const isCvRoute = normalizedPath === CV_CONFIG.routePath;

  if (isCvRoute) {
    return <CvViewer />;
  }

  return (
    <div className="app-root">
      <div className="sky-overlay" />
      
      <Header />
      
      <main>
        <Hero />
        <Inventory />
        <Quests />
        <Workbench />
      </main>

      <Footer />
    </div>
  );
}

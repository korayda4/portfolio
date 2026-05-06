import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Inventory from "./components/Inventory";
import Quests from "./components/Quests";
import Workbench from "./components/Workbench";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
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

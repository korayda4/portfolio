import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./App.css";
import BackgroundCircles from "./components/BackgroundCircles";

export default function App() {
  return (
    <div className="app-root">
      <BackgroundCircles />
      <Header />
      <Projects />
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ icon, title, link, index, type }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-type">{type}</div>
      <a
        className="card-link"
        href={link}
        target="_blank"
        rel="noreferrer"
        title="Go to project"
      >
        <FiExternalLink size={20} />
      </a>
    </motion.div>
  );
}

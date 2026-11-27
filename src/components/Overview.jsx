import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin } from "phosphor-react";
import { PROFILE, STATS } from "../data/profile";

export default function Overview() {
  return (
    <motion.section
      id="overview"
      className="section overview"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <span className="label">01 — Overview</span>
      <h1 className="display">{PROFILE.intro}</h1>
      <p className="lede">{PROFILE.summary}</p>

      <div className="meta-row">
        <span>
          <MapPin size={14} />
          {PROFILE.location}
        </span>
        <span>
          <Clock size={14} />
          {PROFILE.timezone}
        </span>
      </div>

      <dl className="stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat">
            <dt className="stat-label">{stat.label}</dt>
            <dd className="stat-value">
              {stat.value}
              {stat.unit && <span className="stat-unit">{stat.unit}</span>}
            </dd>
            <dd className="stat-note">{stat.note}</dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
}

import React from "react";
import { ArrowUpRight } from "phosphor-react";
import { FEATURED } from "../data/profile";
import { Mark, Section, SectionHead } from "./ui";

function Chips({ items }) {
  if (!items?.length) return null;
  return (
    <div className="chips">
      {items.map((item) => (
        <span key={item} className="chip">
          {item}
        </span>
      ))}
    </div>
  );
}

// Product logos render without a frame; wide wordmarks keep their proportions.
function ProductLogo({ item, size }) {
  if (item.logoWide) {
    return <img className="product-wordmark" src={item.logo} alt="" style={{ height: size * 0.75 }} />;
  }
  return <Mark name={item.name} logo={item.logo} size={size} bare={Boolean(item.logo)} />;
}

export default function Featured() {
  const [lead, ...rest] = FEATURED;

  return (
    <Section id="featured">
      <SectionHead id="featured" title="Products in production" />

      <article className="card feature-lead">
        <div className="feature-top">
          <ProductLogo item={lead} size={52} />
          <div className="feature-title">
            <h3>{lead.name}</h3>
            <p>{lead.tagline}</p>
          </div>
          <a className="btn" href={lead.link} target="_blank" rel="noopener noreferrer">
            {lead.linkLabel}
            <ArrowUpRight size={13} />
          </a>
        </div>

        <p className="feature-desc">{lead.description}</p>

        <dl className="feature-metrics">
          {lead.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>

        <Chips items={lead.stack} />
      </article>

      <div className="feature-pair">
        {rest.map((item) => (
          <article key={item.id} className="card feature-small">
            <div className="feature-top">
              <ProductLogo item={item} size={40} />
              <div className="feature-title">
                <h3>{item.name}</h3>
                <p>{item.tagline}</p>
              </div>
            </div>
            <p className="feature-desc">{item.description}</p>
            <Chips items={item.stack} />
          </article>
        ))}
      </div>
    </Section>
  );
}

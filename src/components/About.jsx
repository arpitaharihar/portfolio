import React from "react";
import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="band">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">About</span>
          <h2>{aboutData.heading}</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p.replace(/Arpita Harihar/g, '<b>Arpita Harihar</b>').replace(/Power BI/g, '<b>Power BI</b>').replace(/Excel/g, '<b>Excel</b>') }} />
            ))}
          </div>
          <div className="facts">
            {aboutData.facts.map((fact, idx) => (
              <div className="fact" key={idx}>
                <span className="t">{fact.title}</span>
                {fact.desc && <span className="d">{fact.desc}</span>}
                {fact.sub && <span className="s">{fact.sub}</span>}
                {fact.chips && (
                  <div className="chips">
                    {fact.chips.map((chip, cIdx) => (
                      <span className="chip" key={cIdx}>
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { journeyTimeline, certifications } from "../data/portfolioData";
import { Award } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Journey</span>
          <h2>Where I've studied and trained.</h2>
        </div>
        <div className="timeline">
          {journeyTimeline.map((item, idx) => (
            <div className="tl" key={idx}>
              <span className="when">{item.when}</span>
              <h3>{item.role}</h3>
              <span className="where">{item.where}</span>
              {item.body && <p className="body">{item.body}</p>}
            </div>
          ))}
        </div>

        <ul className="certs" aria-label="Certificates and Awards">
          {certifications.map((cert, idx) => (
            <li className={cert.win ? "win" : ""} key={idx}>
              <span>
                {cert.win && <Award size={14} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle", color: "var(--accent-ink)" }} />}
                {cert.title}
              </span>
              <small>{cert.issuer}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

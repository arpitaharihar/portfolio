import React from "react";
import { focusAreas } from "../data/portfolioData";

export default function Focus() {
  return (
    <section id="focus">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">What I do</span>
          <h2>Three things I do well.</h2>
        </div>
        <div className="focus">
          {focusAreas.map((item, idx) => (
            <article key={idx} className="focus-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.chips && item.chips.length > 0 && (
                <div className="chips">
                  {item.chips.map((chip, cIdx) => (
                    <span className="chip" key={cIdx}>
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

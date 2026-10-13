import React from "react";
import { techStack } from "../data/portfolioData";
import { Code, Database, BarChart3, Workflow, Wrench } from "lucide-react";

export default function TechStack() {
  const iconMap = {
    "Programming & Analysis": <Code size={18} className="stack-icon" aria-hidden="true" />,
    "Databases & Warehousing": <Database size={18} className="stack-icon" aria-hidden="true" />,
    "Analytics & Visualization": <BarChart3 size={18} className="stack-icon" aria-hidden="true" />,
    "Data Processes": <Workflow size={18} className="stack-icon" aria-hidden="true" />,
    "Tools & Workflow": <Wrench size={18} className="stack-icon" aria-hidden="true" />
  };

  return (
    <section id="stack" className="band">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Tech stack</span>
          <h2>The tools I use most.</h2>
          <p>
            From analytical query engines and cloud databases to end-to-end ETL/ELT pipelines and production-ready BI dashboards.
          </p>
        </div>
        <div className="stack">
          {techStack.map((category, idx) => (
            <div className="stack-card" key={idx}>
              <div className="stack-card-header">
                {iconMap[category.title]}
                <div>
                  <h3>{category.title}</h3>
                  {category.subtitle && <span className="stack-sub">{category.subtitle}</span>}
                </div>
              </div>
              <ul>
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

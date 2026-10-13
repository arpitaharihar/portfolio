import React from "react";
import { workflowSteps } from "../data/portfolioData";

export default function Workflow() {
  return (
    <section id="process" className="band">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Workflow</span>
          <h2>How a project moves from data to decision.</h2>
          <p>This is the order I followed in my Customer Behavior Analysis project.</p>
        </div>
        <div className="pipe">
          {workflowSteps.map((step) => (
            <div className="step" key={step.step}>
              <div className="step-badge-row">
                <span className="step-num">{step.step}</span>
                <span className="step-track" aria-hidden="true"></span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="tools">{step.tools}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

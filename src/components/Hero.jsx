import React from "react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="role">
            <span className="dot" aria-hidden="true"></span>
            {personalInfo.role}
          </div>
          <h1>{personalInfo.name}</h1>
          <p className="lede">
            {personalInfo.ledeHeadline}
            <b>{personalInfo.ledeHighlight}</b>
            {personalInfo.ledeSuffix}
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">
              See my projects
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

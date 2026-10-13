import React from "react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {personalInfo.name}</span>
        <span>Built around data, one dashboard at a time.</span>
      </div>
    </footer>
  );
}

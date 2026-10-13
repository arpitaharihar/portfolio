import React from "react";
import { personalInfo } from "../data/portfolioData";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {currentYear} {personalInfo.name}</span>
        <span>Built around data, one dashboard at a time.</span>
      </div>
    </footer>
  );
}

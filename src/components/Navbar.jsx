import React, { useState } from "react";
import { triggerResumeDownload } from "../utils/resumeDownload";
import { Download, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    triggerResumeDownload();
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top">
          Portfolio<span>.</span>
        </a>
        <nav aria-label="Sections">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#focus">Focus</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            type="button"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="btn sm outline nav-resume-btn"
            onClick={handleDownload}
            type="button"
            title="Download Arpita's Resume PDF"
          >
            <Download size={14} aria-hidden="true" />
            <span>{downloading ? "Downloading..." : "Resume"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

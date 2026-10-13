import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { triggerResumeDownload } from "../utils/resumeDownload";
import { Copy, Check, Download, ExternalLink, Mail } from "lucide-react";

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
      },
      () => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
      }
    );
  };

  const handleDownload = () => {
    setDownloading(true);
    triggerResumeDownload();
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <section id="contact" className="band">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Contact</span>
          <h2>Contact me</h2>
          <p>Looking for a data analyst intern or junior analyst? Send me a message.</p>
        </div>
        <div className="contact-grid">
          {/* Email Item */}
          <div className="c-item">
            <span className="t">Email</span>
            <span className="val" id="v-email">{personalInfo.email}</span>
            <div className="row">
              <button
                className={`mini ${copiedKey === "email" ? "active-copy" : ""}`}
                type="button"
                onClick={() => handleCopy("email", personalInfo.email)}
              >
                {copiedKey === "email" ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedKey === "email" ? "Copied" : "Copy"}</span>
              </button>
              <a className="mini" href={`mailto:${personalInfo.email}`} title="Send an email">
                <Mail size={14} />
                <span>Compose</span>
              </a>
            </div>
          </div>

          {/* Resume Item */}
          <div className="c-item" id="resume-card">
            <span className="t">Resume</span>
            <span className="val">{personalInfo.resumeFileName}</span>
            <div className="row">
              <button
                className="mini js-resume"
                type="button"
                onClick={handleDownload}
                title="Download PDF Resume"
              >
                <Download size={14} />
                <span>{downloading ? "Downloading..." : "Download PDF"}</span>
              </button>
              <a
                className="mini"
                href={`/${personalInfo.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Open resume in new tab"
              >
                <ExternalLink size={14} />
                <span>View</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Item */}
          <div className="c-item">
            <span className="t">LinkedIn</span>
            <span className="val">linkedin.com/in/arpita-harihar</span>
            <div className="row">
              <a
                className="mini"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                <span>Open profile</span>
              </a>
            </div>
          </div>

          {/* GitHub Item */}
          <div className="c-item">
            <span className="t">GitHub</span>
            <span className="val">github.com/arpitaharihar</span>
            <div className="row">
              <a
                className="mini"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                <span>Open profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

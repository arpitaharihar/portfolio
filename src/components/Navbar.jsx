import React, { useState, useEffect } from "react";
import { triggerResumeDownload } from "../utils/resumeDownload";
import { Download, Sun, Moon, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [downloading, setDownloading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    triggerResumeDownload();
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key and on screen resize to desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        closeMenu();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#stack", label: "Stack" },
    { href: "#focus", label: "Focus" },
    { href: "#process", label: "Process" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top" onClick={closeMenu}>
            Portfolio<span>.</span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Desktop Navigation" className="desktop-nav">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
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

            {/* Desktop Resume Download */}
            <button
              className="btn sm outline nav-resume-btn"
              onClick={handleDownload}
              type="button"
              title="Download Arpita's Resume PDF"
            >
              <Download size={14} aria-hidden="true" />
              <span>{downloading ? "Downloading..." : "Resume"}</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              type="button"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <nav
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-header-text">
            <span className="mobile-drawer-title">Navigation</span>
            <span className="mobile-drawer-subtitle">Select a section</span>
          </div>
          <button
            className="mobile-drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            title="Close menu"
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item, idx) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                <span className="mobile-nav-num">0{idx + 1}</span>
                <span className="mobile-nav-text">{item.label}</span>
                <ArrowRight size={16} className="mobile-nav-arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <button
            className="btn primary mobile-drawer-resume-btn"
            onClick={() => {
              handleDownload();
              closeMenu();
            }}
            type="button"
          >
            <Download size={16} aria-hidden="true" />
            <span>{downloading ? "Downloading Resume..." : "Download Resume PDF"}</span>
          </button>
          <a
            href="#contact"
            className="btn outline mobile-drawer-contact-btn"
            onClick={closeMenu}
          >
            Get in touch
          </a>
        </div>
      </nav>
    </>
  );
}

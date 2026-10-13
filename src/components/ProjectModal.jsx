import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Sparkles } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          type="button"
          aria-label="Close project modal"
          title="Close (Esc)"
        >
          <X size={18} />
        </button>

        <div className="modal-header">
          <div className="modal-meta">
            <span className="label">{project.category}</span>
            <span className="modal-yr">{project.year}</span>
          </div>
          <h2 id="modal-title">{project.title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-desc">{project.description}</p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Highlights & Deliverables</h4>
              <ul className="modal-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="modal-check-icon" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-section">
            <h4 className="modal-section-title">Technologies & Methods</h4>
            <div className="chips">
              {project.chips.map((chip, idx) => (
                <span className="chip" key={idx}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-outcome">
            <div className="modal-outcome-header">
              <Sparkles size={16} className="outcome-icon" aria-hidden="true" />
              <span>Outcome & Business Impact</span>
            </div>
            <p>{project.outcome}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn outline sm modal-cancel-btn" onClick={onClose} type="button">
            Close
          </button>
          <a
            className="btn primary sm modal-action-btn"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View project on GitHub</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

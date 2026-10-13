import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterMap = {
    all: projects,
    powerbi: projects.filter((p) => p.chips.includes("Power BI")),
    python: projects.filter((p) => p.chips.includes("Python") || p.chips.includes("MySQL")),
    excel: projects.filter((p) => p.chips.includes("Excel"))
  };

  const filteredProjects = filterMap[filter] || projects;

  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Projects</span>
          <h2>Analytics work, from raw data to dashboard.</h2>
          <p>
            Each project starts with a business problem, cleans the data, calculates the metrics and ends in something interactive.
          </p>
        </div>

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            type="button"
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === "powerbi" ? "active" : ""}`}
            onClick={() => setFilter("powerbi")}
            type="button"
          >
            Power BI ({filterMap.powerbi.length})
          </button>
          <button
            className={`filter-btn ${filter === "python" ? "active" : ""}`}
            onClick={() => setFilter("python")}
            type="button"
          >
            Python & SQL ({filterMap.python.length})
          </button>
          <button
            className={`filter-btn ${filter === "excel" ? "active" : ""}`}
            onClick={() => setFilter("excel")}
            type="button"
          >
            Excel ({filterMap.excel.length})
          </button>
        </div>

        <div className="projects compact-grid">
          {filteredProjects.map((proj) => {
            const previewChips = proj.chips.slice(0, 3);
            const extraCount = proj.chips.length - previewChips.length;

            return (
              <article
                className="proj proj-compact"
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(proj);
                  }
                }}
                aria-label={`View details for ${proj.title}`}
              >
                <div className="proj-top">
                  <span className="label">{proj.category}</span>
                  <span className="yr">{proj.year}</span>
                </div>

                <h3 className="proj-title">{proj.title}</h3>
                
                <p className="proj-short-desc">{proj.shortDescription}</p>

                <div className="chips proj-preview-chips">
                  {previewChips.map((chip, idx) => (
                    <span className="chip" key={idx}>
                      {chip}
                    </span>
                  ))}
                  {extraCount > 0 && (
                    <span className="chip chip-more">+{extraCount} more</span>
                  )}
                </div>

                <div className="proj-hover-hint" aria-hidden="true">
                  <Sparkles size={14} className="sparkle-icon" />
                  <span>Click me for more details</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </div>

                <div className="proj-bottom-actions">
                  <button
                    className="details-text-btn"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(proj);
                    }}
                  >
                    Quick view
                  </button>
                  <a
                    className="github-icon-link"
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${proj.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>GitHub</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detail Popup Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

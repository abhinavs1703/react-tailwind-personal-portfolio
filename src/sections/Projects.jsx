import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { projects } from "../data/portfolio";

const filters = ["All work", "Data & BI", "Automation", "AI & ML", "Engineering", "Product"];

function ProjectVisual({ project }) {
  if (project.visualType === "image") {
    return <div className="work-visual work-image"><img src={project.image} alt={project.imageAlt} loading="lazy" /><span className="visual-stamp">CASE {project.number}</span></div>;
  }
  return (
    <div className="work-visual process-visual" aria-label={project.title + " workflow illustration"}>
      <span className="process-label">Workflow map / {project.number}</span>
      <div className="process-flow">
        {project.flow.map((step, index) => <div className="process-step" key={step}><span className="process-index">{String(index + 1).padStart(2, "0")}</span><span>{step}</span>{index < project.flow.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}</div>)}
      </div>
      <span className="process-footnote">Illustrated from the documented workflow</span>
    </div>
  );
}

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [expandedProject, setExpandedProject] = useState("kpi-monitoring");
  const visibleProjects = activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter);

  const chooseFilter = (filter) => {
    setActiveFilter(filter);
    const firstMatch = filter === "All work" ? projects[0] : projects.find((project) => project.category === filter);
    setExpandedProject(firstMatch ? firstMatch.id : null);
  };

  const toggleProject = (projectId) => setExpandedProject((current) => current === projectId ? null : projectId);

  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="section-rail"><span className="section-number">02 / Selected work</span><span className="vertical-label">Problems, approaches, outcomes</span></div>
      <div className="section-main">
        <div className="section-intro work-intro">
          <div><p className="eyebrow">A collection of real builds and concepts</p><h2 id="work-title">Different problems.<br /><em>Practical answers.</em></h2></div>
          <p className="section-lede">From operational analytics to AI-assisted workflows and deployed models, each project starts with a problem to understand—not a technology to show off.</p>
        </div>
        <div className="work-controls">
          <span className="eyebrow">Filter by discipline</span>
          <div className="filter-list" role="group" aria-label="Filter projects">
            {filters.map((filter) => <button key={filter} type="button" className={"filter-button" + (activeFilter === filter ? " is-active" : "")} aria-pressed={activeFilter === filter} onClick={() => chooseFilter(filter)}>{filter}<span>{filter === "All work" ? projects.length : projects.filter((project) => project.category === filter).length}</span></button>)}
          </div>
        </div>
        <div className="work-list" aria-live="polite">
          {visibleProjects.map((project) => {
            const isExpanded = expandedProject === project.id;
            const panelId = "project-detail-" + project.id;
            return (
              <article className={"work-entry" + (isExpanded ? " is-expanded" : "")} key={project.id}>
                <button type="button" className="work-entry-trigger" aria-expanded={isExpanded} aria-controls={panelId} onClick={() => toggleProject(project.id)}>
                  <span className="work-index">{project.number}</span>
                  <span className="work-name-wrap"><span className="work-meta"><span>{project.category}</span><span>{project.year}</span></span><span className="work-title">{project.title}</span><span className="work-summary">{project.summary}</span></span>
                  <span className="work-toggle" aria-hidden="true">{isExpanded ? <Minus size={21} /> : <ArrowDownRight size={21} />}</span>
                </button>
                {isExpanded && (
                  <div className="work-detail" id={panelId}>
                    <ProjectVisual project={project} />
                    <div className="detail-copy">
                      <div className="detail-section"><span className="eyebrow">The problem</span><p>{project.challenge}</p></div>
                      <div className="detail-section"><span className="eyebrow">How it was approached</span><p>{project.approach}</p></div>
                      <div className="outcome-grid">{project.outcomes.map((item) => <div className="outcome-item" key={item.value + item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
                      <div className="detail-bottom"><div className="stack-list" aria-label="Technologies used">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <div className="work-endnote"><span className="endnote-mark" aria-hidden="true">✳</span><p>Project links are provided only where a specific public repository or prototype is available. Workflow illustrations are explanatory, not live service integrations.</p></div>
      </div>
    </section>
  );
};
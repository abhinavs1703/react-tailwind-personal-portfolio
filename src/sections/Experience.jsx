import { ArrowUpRight } from "lucide-react";
import { experience, education, profile } from "../data/portfolio";

const recognitions = [
  { year: "2025", title: "Winner — Innovation Week", detail: "VIT flagship technology competition" },
  { year: "2025", title: "Winner — ETL Design for AI-Powered Multi-Agent Systems", detail: "VIT Expo" },
  { year: "2025", title: "Runner-up — Yantra Inquizitorius Technical Quiz", detail: "Among 200+ participants" },
  { year: "2024", title: "Project Lead — Team Cipher Drone Development Initiative", detail: "March–October 2024" }
];

export const Experience = () => (
  <section id="path" className="section path-section" aria-labelledby="path-title">
    <div className="section-rail"><span className="section-number">03 / Path</span><span className="vertical-label">Experience and recognition</span></div>
    <div className="section-main">
      <div className="section-intro two-column-intro">
        <div><p className="eyebrow">The work behind the work</p><h2 id="path-title">Learn by building.<br /><em>Improve by making.</em></h2></div>
        <p className="section-lede">My foundation is in electrical and electronics engineering; the work has moved across data, software, machine learning, operations, and automation.</p>
      </div>
      <div className="experience-entry">
        <div className="experience-date"><span>{experience.year}</span><span>Internship</span></div>
        <div className="experience-content">
          <div className="experience-heading"><div><h3>{experience.role}</h3><p>{experience.company} <span>·</span> {experience.location}</p></div><span className="experience-marker" aria-hidden="true">01</span></div>
          <p className="experience-summary">{experience.description}</p>
          <ul className="contribution-list">{experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
        </div>
      </div>
      <div className="recognition-block">
        <div className="recognition-heading"><span className="eyebrow">Recognition / leadership</span><p>Milestones that reflect persistence, teamwork, and a habit of taking on real problems.</p></div>
        <div className="recognition-list">{recognitions.map((item) => <div className="recognition-row" key={item.title}><span className="recognition-year">{item.year}</span><strong>{item.title}</strong><span>{item.detail}</span></div>)}</div>
      </div>
      <div className="profile-outro">
        <span className="eyebrow">Continuing the practice</span>
        <p>Interested in entry-level roles across automation, data analytics, reporting, operations analytics, and AI-assisted workflow automation. Education: {education.degree} at {education.institution}, {education.result}.</p>
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
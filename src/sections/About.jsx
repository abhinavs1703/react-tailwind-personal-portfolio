import { ArrowUpRight } from "lucide-react";
import { capabilities, education, profile } from "../data/portfolio";

const proof = [
  { value: "10K+", label: "industrial telemetry records prepared" },
  { value: "60%", label: "less manual data preparation in internship work" },
  { value: "₹25L", label: "institutional research grant" },
  { value: "500+", label: "coding and SQL problems solved" }
];

export const About = () => (
  <section id="approach" className="section approach-section" aria-labelledby="approach-title">
    <div className="section-rail"><span className="section-number">01 / Approach</span><span className="vertical-label">A little about the work</span></div>
    <div className="section-main">
      <div className="section-intro two-column-intro">
        <div><p className="eyebrow">Not technology for its own sake</p><h2 id="approach-title">Useful systems start with <em>clear thinking.</em></h2></div>
        <p className="section-lede">I enjoy finding the point where careful engineering meets an everyday problem: data that needs structure, a process that repeats, a model that needs a usable path, or a report that should arrive without someone rebuilding it by hand.</p>
      </div>
      <div className="capability-list">
        {capabilities.map((item) => (
          <article className="capability-row" key={item.number}>
            <span className="row-number">{item.number}</span><h3>{item.title}</h3>
            <div className="capability-description"><p>{item.description}</p><span className="tools-line">{item.tools}</span></div>
            <span className="row-mark" aria-hidden="true"><ArrowUpRight size={19} /></span>
          </article>
        ))}
      </div>
      <div className="proof-strip" aria-label="Selected facts and outcomes">
        <div className="proof-heading"><span className="eyebrow">Evidence, not adjectives</span><p>A few concrete markers from my work so far.</p></div>
        {proof.map((item) => <div className="proof-item" key={item.value + item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </div>
      <div className="education-line">
        <span className="eyebrow">The foundation</span>
        <div><strong>{education.institution}</strong><span>{education.degree}</span><span>{education.period} <b>·</b> {education.result}</span></div>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">Professional profile <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  </section>
);
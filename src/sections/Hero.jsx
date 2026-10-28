import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const disciplines = ["Software", "Applied AI", "Data systems", "Workflow design"];

export const Hero = () => (
  <section className="hero-section" aria-labelledby="hero-title">
    <div className="hero-topline">
      <span><span className="status-dot" /> Portfolio / Field notes</span>
      <span>Independent practice <b>—</b> 2026</span>
    </div>
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">A practical approach to complicated work</p>
        <h1 id="hero-title">I make complex work <em>work better.</em></h1>
        <div className="hero-bottomline">
          <p className="hero-intro">I’m {profile.name} — a VIT graduate working across software, data, applied AI, and automation. I turn messy inputs and repetitive steps into useful systems people can understand, run, and improve.</p>
          <a className="text-link hero-link" href="#work"><span>Explore selected work</span><ArrowDownRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Portrait of Abhinav Srivastava">
        <div className="portrait-index">AS / 001</div>
        <img src="/profile-photo.jpg" alt="Abhinav Srivastava" fetchPriority="high" />
        <div className="portrait-caption"><span>Curiosity, made practical.</span><span className="caption-rule" /><span>Gurugram, IN</span></div>
        <div className="portrait-side-note" aria-hidden="true">BUILD / MEASURE / IMPROVE</div>
      </div>
    </div>
    <div className="discipline-rail" aria-label="Areas of work">
      <span className="rail-label">Working across</span>
      {disciplines.map((discipline, index) => <span className="discipline-item" key={discipline}><span className="discipline-number">0{index + 1}</span>{discipline}</span>)}
      <a className="rail-outbound" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
    </div>
  </section>
);
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export const Contact = () => (
  <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <div className="contact-topline"><span>04 / Open channel</span><span>{profile.location}</span></div>
    <div className="contact-content">
      <p className="eyebrow">Have a practical problem in mind?</p>
      <h2 id="contact-title">Let’s make<br /><em>something useful.</em></h2>
      <p className="contact-copy">I’m interested in teams that value clear thinking, dependable systems, and work that makes a measurable difference.</p>
      <a className="contact-email" href={"mailto:" + profile.email}><Mail size={20} aria-hidden="true" /><span>{profile.email}</span><ArrowUpRight size={22} aria-hidden="true" /></a>
    </div>
    <div className="contact-footerline"><span>Open to conversations about work, collaboration, and ideas.</span><a className="contact-back-top" href="#top">Back to the beginning <ArrowDownRight size={17} aria-hidden="true" /></a></div>
  </section>
);
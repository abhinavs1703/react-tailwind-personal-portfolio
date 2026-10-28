import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export const Footer = () => (
  <footer className="site-footer">
    <a href="#top" className="footer-wordmark">AS<span>.</span></a>
    <p>Built with intent by {profile.name}.</p>
    <div className="footer-links">
      <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
      <a href={"mailto:" + profile.email}>Email <ArrowUpRight size={14} aria-hidden="true" /></a>
    </div>
    <span className="footer-year">© {new Date().getFullYear()}</span>
  </footer>
);
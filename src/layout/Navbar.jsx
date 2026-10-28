import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const navigation = [
  { href: "#work", label: "Selected work" },
  { href: "#approach", label: "Approach" },
  { href: "#path", label: "Path" }
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={"site-header" + (compact ? " is-compact" : "")}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Abhinav Srivastava, home">
          <span className="wordmark-mark">AS<span>.</span></span>
          <span className="wordmark-caption">Systems / data / automation</span>
        </a>
        <div className="desktop-navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <a className="nav-contact" href="#contact"><span>Start a conversation</span><ArrowUpRight size={16} aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((current) => !current)}>
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </nav>
      <div id="mobile-navigation" className={"mobile-navigation" + (menuOpen ? " is-open" : "")} hidden={!menuOpen}>
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu}><span className="mobile-link-index">0{index + 1}</span>{item.label}<ArrowUpRight size={17} aria-hidden="true" /></a>
        ))}
        <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={closeMenu}><span className="mobile-link-index">↗</span>LinkedIn<ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </header>
  );
};
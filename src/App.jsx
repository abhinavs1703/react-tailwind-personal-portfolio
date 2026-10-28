import { useEffect, useState } from 'react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, window.scrollY / distance) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <div id="top" className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="reading-progress" aria-hidden="true" style={{transform:'scaleX('+progress+')'}} />
    <Navbar />
    <main id="main-content">
      <Hero />
      <div className="proof-band" aria-label="Selected outcomes">
        <div className="proof-band-label">Work, measured<span>↓</span></div>
        {[['10K+','records prepared'],['60%','less manual preparation'],['₹25L','research grant'],['12+','KPIs defined']].map(([value,label])=><div className="proof-stat" key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>;
}
export default App;
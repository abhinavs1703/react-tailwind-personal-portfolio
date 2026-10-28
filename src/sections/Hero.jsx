import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

export const Hero = () => <section className="hero-section" aria-labelledby="hero-title">
  <div className="hero-meta"><span><i className="hero-live-dot" />Portfolio / 2026</span><span>{profile.location}<b> · </b>Open to the right opportunity</span></div>
  <div className="hero-layout">
    <div className="hero-copy">
      <p className="eyebrow"><span>01</span> A practical kind of curiosity</p>
      <h1 id="hero-title">I make complex things <em>work better.</em></h1>
      <p className="hero-description">I’m Abhinav Srivastava—a VIT graduate working across software, data, applied AI, and automation to turn messy inputs and repetitive work into useful systems.</p>
      <div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowDownRight size={18} aria-hidden="true" /></a><a className="button-text" href={profile.linkedin} target="_blank" rel="noreferrer">Professional profile <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className="hero-note"><span>FIELD NOTE / 001</span><p>Less busywork. Better signals. Systems people can actually use.</p></div>
    </div>
    <div className="hero-art">
      <div className="hero-art-ruler"><span>BUILD</span><span>MEASURE</span><span>IMPROVE</span></div>
      <div className="hero-art-stage"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="hero-image-frame"><img src="/profile-photo.jpg" alt="Portrait of Abhinav Srivastava" fetchPriority="high" /></div><span className="art-sticker sticker-one">DATA<br/>→ SIGNAL</span><span className="art-sticker sticker-two">MAKE<br/>IT USEFUL</span><span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span></div>
      <div className="hero-art-caption"><span>Curiosity, made practical.</span><span>AS / 001</span></div>
      <div className="hero-art-side"><span>AUTOMATE</span><span>ANALYSE</span><span>BUILD</span><span>IMPROVE</span></div>
    </div>
  </div>
  <a className="scroll-cue" href="#work"><span>Follow the thread</span><span className="scroll-cue-line"/><ArrowDownRight size={16} aria-hidden="true" /></a>
</section>;
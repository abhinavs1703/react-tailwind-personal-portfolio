import { ArrowDownRight } from 'lucide-react';
import { capabilities } from '../data/portfolio';

export const About = () => <section id="method" className="method-section" aria-labelledby="method-title">
  <div className="method-topline"><span><b>03</b> How I work</span><span>The method behind the making <ArrowDownRight size={16} aria-hidden="true"/></span></div>
  <div className="method-intro"><h2 id="method-title">Technology is the tool.<br/><em>Usefulness is the point.</em></h2><p>I enjoy the space between a messy real-world problem and a system that makes it easier to handle. My approach moves from understanding the signal to building something reliable, explainable, and repeatable.</p></div>
  <div className="method-steps">{capabilities.map(item=><article className="method-step" key={item.number}><span className="method-number">{item.number}</span><div className="method-step-title"><h3>{item.title}</h3><span className="method-arrow" aria-hidden="true">↗</span></div><p>{item.text}</p><span className="method-tools">{item.tools}</span></article>)}</div>
  <div className="method-end"><span className="end-symbol" aria-hidden="true">↳</span><p>Good work is more than a clever demo. It should be understandable, measured, documented, and possible to improve.</p></div>
</section>;
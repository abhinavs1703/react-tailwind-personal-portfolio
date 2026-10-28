import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

export const Contact = () => <section id="contact" className="contact-section" aria-labelledby="contact-title">
  <div className="contact-kicker"><span><b>05</b> Your move</span><span>Good work starts with a conversation</span></div>
  <div className="contact-body"><p className="eyebrow">Open channel / {profile.location}</p><h2 id="contact-title">Have a real problem?<br/><em>Let’s make it better.</em></h2><p className="contact-blurb">I’m looking for opportunities across automation, data analytics, reporting, operations analytics, and applied AI—especially where thoughtful engineering can remove friction from everyday work.</p><a className="email-link" href={'mailto:'+profile.email}><Mail size={22} aria-hidden="true"/><span>{profile.email}</span><ArrowUpRight size={23} aria-hidden="true"/></a></div>
  <div className="contact-bottom"><span>Clear thinking. Useful systems. Better outcomes.</span><a href="#top">Back to the beginning <span aria-hidden="true">↑</span></a></div>
</section>;
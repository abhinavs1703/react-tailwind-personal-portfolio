import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio';

const links = [{href:'#work',label:'Work'},{href:'#method',label:'How I work'},{href:'#journey',label:'The path'}];
export const Navbar = () => {
 const [open,setOpen]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24);window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll);},[]);
 useEffect(()=>{if(!open)return undefined;const onKeyDown=e=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKeyDown);return()=>window.removeEventListener('keydown',onKeyDown);},[open]);
 const close=()=>setOpen(false);
 return <header className={'site-header'+(scrolled?' is-scrolled':'')}><nav className="nav-inner" aria-label="Main navigation">
  <a className="brand-lockup" href="#top" onClick={close} aria-label="Abhinav Srivastava, home"><span className="brand-monogram">A<span>S</span><i>.</i></span><span className="brand-wording">Systems in motion<span>Software · Data · Automation</span></span></a>
  <div className="desktop-links">{links.map((link,index)=><a key={link.href} href={link.href}><span>0{index+1}</span>{link.label}</a>)}</div>
  <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={16} aria-hidden="true"/></a>
  <button className="menu-toggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-links" onClick={()=>setOpen(v=>!v)}>{open?<X size={21}/>:<Menu size={21}/>}</button>
 </nav><div id="mobile-links" className={'mobile-links'+(open?' is-open':'')} hidden={!open}>{links.map((link,index)=><a key={link.href} href={link.href} onClick={close}><span>0{index+1}</span>{link.label}<ArrowUpRight size={16}/></a>)}<a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={close}><span>↗</span>LinkedIn<ArrowUpRight size={16}/></a></div></header>;
};
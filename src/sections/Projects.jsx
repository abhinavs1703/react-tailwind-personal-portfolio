import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Plus, X } from 'lucide-react';
import { projects } from '../data/portfolio';

const filters = ['All work','Data & BI','Automation','AI & ML','Engineering','Product'];

export const Projects = () => {
  const [activeFilter,setActiveFilter] = useState('All work');
  const [openId,setOpenId] = useState('kpi-monitoring');
  const filtered = activeFilter === 'All work' ? projects : projects.filter(p=>p.category===activeFilter);
  const chooseFilter = filter => { setActiveFilter(filter); const first = filter === 'All work' ? projects[0] : projects.find(p=>p.category===filter); setOpenId(first ? first.id : null); };
  return <section id="work" className="work-section" aria-labelledby="work-title">
    <div className="section-heading"><div><p className="eyebrow"><span>02</span> Proof of work</p><h2 id="work-title">Built to solve.<br/><em>Made to matter.</em></h2></div><p className="section-intro-copy">Eight projects, different kinds of problems. Open each study to follow the thinking, the build, and what came out of it.</p></div>
    <div className="work-toolbar"><span className="toolbar-label">Explore by discipline</span><div className="filter-list" role="group" aria-label="Filter projects">{filters.map(filter=><button key={filter} type="button" className={'filter-chip'+(activeFilter===filter?' is-active':'')} aria-pressed={activeFilter===filter} onClick={()=>chooseFilter(filter)}>{filter}<sup>{filter==='All work'?projects.length:projects.filter(p=>p.category===filter).length}</sup></button>)}</div></div>
    <div className="projects-list" aria-live="polite">
      {filtered.map(project=>{const expanded=openId===project.id;const detailsId='details-'+project.id;return <article key={project.id} className={'project-entry'+(project.featured&&activeFilter==='All work'?' project-featured':'')+(expanded?' is-open':'')}>
        <button className="project-trigger" type="button" aria-expanded={expanded} aria-controls={detailsId} onClick={()=>setOpenId(expanded?null:project.id)}><span className="project-count">{project.number}<i>{project.year}</i></span><span className="project-title-block"><span className="project-category">{project.category}</span><span className="project-title">{project.title}</span><span className="project-intro">{project.intro}</span></span><span className="project-plus" aria-hidden="true">{expanded?<X size={21}/>:<Plus size={21}/>}</span></button>
        <div className="project-art-wrap"><img className="project-art" src={project.visual} alt={project.alt} loading={project.number==='01'?'eager':'lazy'} /></div>
        {expanded&&<div className="project-details" id={detailsId}><div className="detail-column"><p className="detail-label">The challenge</p><p>{project.challenge}</p></div><div className="detail-column"><p className="detail-label">The approach</p><p>{project.approach}</p></div><div className="project-results">{project.results.map(([value,label])=><div className="result-item" key={value+label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="project-foot"><div className="stack-line">{project.stack.map(item=><span key={item}>{item}</span>)}</div>{project.link&&<a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={17} aria-hidden="true"/></a>}</div></div>}
      </article>})}
    </div>
    <div className="work-footer"><span className="work-footer-mark">✳</span><p>Custom illustrations summarise each project; they are not presented as live product screenshots. Links appear only where a specific public repository or prototype is available.</p><a href="#method" className="section-next">What connects them? <ArrowDownRight size={17}/></a></div>
  </section>;
};
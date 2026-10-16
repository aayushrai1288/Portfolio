import { useMemo, useState } from 'react';
import { projects, highlights, roles } from './data.js';

const EMAIL = 'aayush_r@ma.iitr.ac.in';
const PHONE = '8604673474';

function Icon({ name, size = 18, strokeWidth = 1.8, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };
  const paths = {
    arrow: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    down: <><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    code: <><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 5-4 14"/></>,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><path d="M13 15h4"/></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.2-.4-3.7 1.4a12.8 12.8 0 0 0-6.8 0C5.9 1.4 4.7 1.8 4.7 1.8a4.7 4.7 0 0 0-.1 3.5A5.1 5.1 0 0 0 3.2 8.8c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.7V22"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></>,
    sparkle: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
    trophy: <><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/></>,
    academic: <><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3.1 2.6 6.9 2.6 10 0v-5M21 9v6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
  };
  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

function BrandMark() {
  return <a className="brand" href="#home" aria-label="Aayush Rai, back to top">
    <span className="brand-mark">AR<span>.</span></span>
    <span className="brand-wordmark">AAYUSH RAI<small>PORTFOLIO / 2026</small></span>
  </a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['Work', '#work'], ['About', '#about'], ['Achievements', '#achievements'], ['Contact', '#contact']];
  return <header className="site-header">
    <div className="header-inner shell">
      <BrandMark />
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
      </button>
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href={`mailto:${EMAIL}?subject=Hello%20Aayush`} onClick={closeMenu}>Let’s talk <Icon name="arrow" size={14} /></a>
      </nav>
    </div>
  </header>;
}

function MiniSystemGraphic() {
  return <div className="system-graphic" aria-label="Abstract system architecture illustration">
    <div className="graphic-topline"><span><i className="live-dot" /> LIVE THINKING</span><span>FIG. 001 / AR</span></div>
    <div className="orbital-stage">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbital-core"><span>AR</span><small>MnC</small></div>
      <span className="orbit-node node-a" />
      <span className="orbit-node node-b" />
      <span className="orbit-node node-c" />
      <span className="orbit-label label-a">SYSTEMS</span>
      <span className="orbit-label label-b">ML / AI</span>
      <span className="orbit-label label-c">ALGORITHMS</span>
    </div>
    <div className="graphic-footline"><span>BUILD → MEASURE → IMPROVE</span><span className="mono">29° 52' N / 77° 54' E</span></div>
  </div>;
}

function Hero() {
  return <section className="hero section-pad" id="home">
    <div className="hero-grid shell">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> MATHEMATICS × COMPUTING <span className="eyebrow-muted">/ IIT ROORKEE</span></div>
        <h1>I build things<br />that <span className="headline-accent">think<span className="headline-period">.</span></span><br />And systems<br className="mobile-break" /> that <span className="headline-outline">scale.</span></h1>
        <p className="hero-description">I’m Aayush — a Mathematics & Computing student exploring the space between low-level systems, machine learning, and algorithmic problem-solving.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <Icon name="arrow" size={17} /></a>
          <a className="button button-ghost" href="/aayush-rai-resume.pdf" target="_blank" rel="noreferrer">View résumé <Icon name="external" size={15} /></a>
        </div>
        <div className="hero-meta">
          <span><Icon name="pin" size={15} /> Roorkee, India</span>
          <span className="meta-separator" />
          <span>BS–MS · Class of 2028</span>
        </div>
      </div>
      <div className="hero-art-wrap">
        <div className="art-orbit-halo" />
        <MiniSystemGraphic />
        <div className="floating-note floating-note-top"><span className="note-index">01</span><span>Curiosity<br /><b>as a system</b></span></div>
        <div className="floating-note floating-note-bottom"><span className="note-pulse" /><span>Always learning.<br /><b>Always shipping.</b></span></div>
        <div className="art-coordinate">FIGURE A — A WORK IN PROGRESS</div>
      </div>
    </div>
    <div className="hero-bottom shell"><span>SCROLL TO EXPLORE</span><a href="#work" aria-label="Scroll to selected work"><Icon name="down" size={17} /></a><span className="hero-bottom-right">DESIGNED WITH INTENT <b>✳</b></span></div>
  </section>;
}

function SectionHeading({ index, eyebrow, title, description, id }) {
  return <div className="section-heading" id={id}>
    <div className="section-heading-left"><span className="section-index">{index}</span><span className="section-eyebrow">{eyebrow}</span></div>
    <div className="section-heading-main"><h2>{title}</h2>{description && <p>{description}</p>}</div>
  </div>;
}

function ProjectArtwork({ type }) {
  if (type === 'server') return <div className="project-art art-server" aria-hidden="true">
    <div className="server-stack"><div><i /><i /><i /><b>NODE_01</b></div><div><i /><i /><i /><b>NODE_02</b></div><div><i /><i /><i /><b>NODE_03</b></div></div>
    <div className="server-packet packet-one" /><div className="server-packet packet-two" /><span className="art-coordinate coord-right">THREAD_POOL :: ACTIVE</span>
  </div>;
  if (type === 'memory') return <div className="project-art art-memory" aria-hidden="true">
    <div className="memory-label">MEMORY MAP <span>0x00FF</span></div>
    <div className="memory-grid">{Array.from({ length: 28 }, (_, i) => <i key={i} className={`memory-cell cell-${(i * 7 + 3) % 5}`} />)}</div>
    <div className="memory-legend"><span><i /> ALLOCATED</span><span><i /> FREE</span><span><i /> FRAGMENTED</span></div>
  </div>;
  if (type === 'docunova') return <div className="project-art art-docunova" aria-hidden="true">
    <div className="doc-page"><div className="doc-page-head"><i /><span>DOCUMENT / 042</span></div><b>Context is<br />everything.</b><div className="doc-line wide" /><div className="doc-line" /><div className="doc-line short" /><div className="doc-highlight">semantic match · 0.94</div></div>
    <div className="doc-query"><Icon name="sparkle" size={17} /><span>Retrieval complete</span><b>→</b></div>
    <div className="doc-connector" />
  </div>;
  return <div className="project-art art-vision" aria-hidden="true">
    <div className="vision-grid" />
    <div className="vision-target"><i /><i /><i /><i /><span>BATTERY<br /><b>0.979</b></span></div>
    <div className="vision-readout"><span>YOLOv9</span><b>OBJECT DETECTED</b><small>FRAME_00384.JPG</small></div>
  </div>;
}

function WorkSection() {
  const [filter, setFilter] = useState('all');
  const filters = [
    { id: 'all', label: 'All projects' },
    { id: 'systems', label: 'Systems' },
    { id: 'ai', label: 'Applied AI' },
    { id: 'vision', label: 'Computer vision' },
  ];
  const visibleProjects = useMemo(() => projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'vision') return project.category === 'vision';
    if (filter === 'ai') return project.category === 'ai';
    return project.category === filter;
  }), [filter]);

  return <section className="work-section section-pad" id="work">
    <div className="shell">
      <SectionHeading index="01" eyebrow="SELECTED WORK" title={<>Proof of work<span className="headline-period">.</span></>} description="A few things I’ve built, from close-to-the-metal C++ systems to AI that makes documents and the physical world easier to understand." />
      <div className="work-toolbar">
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((item) => <button key={item.id} className={`filter-button ${filter === item.id ? 'is-active' : ''}`} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id}>{item.label}</button>)}
        </div>
        <span className="work-count">SHOWING <b>{String(visibleProjects.length).padStart(2, '0')}</b> / 04</span>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => <article className={`project-card reveal project-${project.visual}`} key={project.id}>
          <div className="project-card-visual"><ProjectArtwork type={project.visual} /><span className="project-number">{project.number} <span>— {project.year}</span></span><span className="project-type">{project.categoryLabel}</span></div>
          <div className="project-card-body">
            <div className="project-title-row"><div><p className="project-subtitle">{project.subtitle}</p><h3>{project.title}</h3></div>{project.demo ? <a className="project-external" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}><Icon name="arrow" size={18} /></a> : project.github ? <a className="project-external" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><Icon name="github" size={18} /></a> : <span className="project-external project-external-static" aria-hidden="true"><Icon name="arrow" size={18} /></span>}</div>
            <p className="project-description">{project.description}</p>
            <div className="project-detail"><span className="detail-dot" />{project.detail}</div>
            <div className="tech-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </div>
        </article>)}
      </div>
      <div className="project-footnote"><span className="footnote-symbol">↳</span><p>Interested in the implementation details? <a href={`mailto:${EMAIL}?subject=Let%E2%80%99s%20talk%20about%20your%20projects`}>Ask me about a build <Icon name="arrow" size={13} /></a></p><span className="footnote-note">REPOSITORY LINKS COMING SOON</span></div>
    </div>
  </section>;
}

function AboutSection() {
  return <section className="about-section section-pad" id="about">
    <div className="shell">
      <SectionHeading index="02" eyebrow="A LITTLE ABOUT ME" title={<>Theory, meet<br />implementation<span className="headline-period">.</span></>} description="I like understanding what happens under the abstraction—and then building something useful with that understanding." />
      <div className="about-grid">
        <div className="about-statement">
          <span className="quote-mark">“</span>
          <p>Curious about how things work. Motivated by making them work <em>better.</em></p>
          <div className="about-statement-footer"><span>— AAYUSH RAI</span><span>MATHEMATICS & COMPUTING</span></div>
        </div>
        <div className="about-detail-column">
          <p className="body-copy">I’m pursuing a BS–MS in Mathematics and Computing at IIT Roorkee. My interests live at the intersection of rigorous problem-solving and practical engineering: operating systems, networking, machine learning, and computer vision.</p>
          <p className="body-copy">Outside projects, competitive programming keeps me sharp, while working with campus teams has taught me to coordinate people and deliver when details matter.</p>
          <div className="education-card">
            <div className="education-icon"><Icon name="academic" size={21} /></div>
            <div className="education-main"><span className="micro-label">EDUCATION / 2023—2028</span><h3>Indian Institute of Technology, Roorkee</h3><p>BS–MS · Mathematics and Computing</p></div>
            <div className="education-score"><b>8.825</b><small>CGPA</small></div>
          </div>
          <div className="skills-block">
            <span className="micro-label">TOOLS & TERRITORIES</span>
            <div className="skills-list"><span>C++</span><span>Python</span><span>Operating Systems</span><span>Networking</span><span>Data Structures</span><span>Machine Learning</span><span>Computer Vision</span><span>RAG / LLMs</span></div>
            <p className="skills-note">A snapshot of work across my projects—not an exhaustive list of every tool I’ve used.</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

function AchievementsSection() {
  return <section className="achievements-section section-pad" id="achievements">
    <div className="shell">
      <SectionHeading index="03" eyebrow="SIGNALS, NOT NOISE" title={<>A few numbers<span className="headline-period">.</span></>} description="Milestones from competitive programming, hackathons, and the long game of learning." />
      <div className="achievement-grid">
        {highlights.map((item, index) => <article className={`achievement-card reveal achievement-card-${index + 1}`} key={item.value}>
          <div className="achievement-card-top"><span className="achievement-index">0{index + 1} / 04</span><Icon name={item.icon === 'spark' ? 'sparkle' : item.icon} size={20} /></div>
          <strong>{item.value}</strong><p>{item.label}</p>
          <span className="achievement-watermark">{['✳', '↗', '⌘', '∑'][index]}</span>
        </article>)}
      </div>
      <div className="extra-achievements">
        <div className="extra-achievement"><span className="extra-icon">01</span><div><b>JEE Advanced 2023</b><span>All India Rank 2758</span></div><Icon name="arrow" size={15} /></div>
        <div className="extra-achievement"><span className="extra-icon">02</span><div><b>JEE Main 2023</b><span>99.65 percentile · AIR 4140</span></div><Icon name="arrow" size={15} /></div>
        <div className="extra-achievement"><span className="extra-icon">03</span><div><b>Competitive programming</b><span>Codeforces Expert · CodeChef 4-Star</span></div><Icon name="arrow" size={15} /></div>
      </div>
    </div>
  </section>;
}

function JourneySection() {
  return <section className="journey-section section-pad" id="journey">
    <div className="shell">
      <SectionHeading index="04" eyebrow="BEYOND THE TERMINAL" title={<>Good work is<br />a team sport<span className="headline-period">.</span></>} description="A few roles that shaped how I work with people, not just code." />
      <div className="timeline-list">
        {roles.map((role, i) => <article className="timeline-item reveal" key={role.role}>
          <div className="timeline-index"><span>0{i + 1}</span><i /></div>
          <div className="timeline-date">{role.date}</div>
          <div className="timeline-content"><h3>{role.role}</h3><p className="timeline-org">{role.org}</p><p>{role.description}</p></div>
          <Icon name="arrow" size={17} className="timeline-arrow" />
        </article>)}
      </div>
    </div>
  </section>;
}

function ContactSection() {
  return <section className="contact-section section-pad" id="contact">
    <div className="contact-glow" />
    <div className="shell contact-shell">
      <div className="contact-topline"><span><span className="live-dot" /> OPEN CHANNEL</span><span>ROORKEE, INDIA · IST</span></div>
      <div className="contact-content">
        <div className="contact-heading"><span className="section-eyebrow">HAVE A GOOD PROBLEM?</span><h2>Let’s make<br />something <em>matter.</em></h2></div>
        <div className="contact-card"><p>I’m always interested in thoughtful engineering, interesting research, and conversations that lead somewhere.</p><a className="contact-email" href={`mailto:${EMAIL}`}><span>{EMAIL}</span><Icon name="arrow" size={19} /></a><div className="contact-links"><a href="https://codeforces.com/profile/AntiMaTTeR_007" target="_blank" rel="noreferrer"><Icon name="terminal" size={16} /> Codeforces <Icon name="external" size={12} /></a><a href="https://www.codechef.com/users/aayu_iitr" target="_blank" rel="noreferrer"><Icon name="code" size={16} /> CodeChef <Icon name="external" size={12} /></a><a href={`tel:${PHONE}`}><Icon name="phone" size={16} /> {PHONE}</a></div></div>
      </div>
      <div className="contact-bottomline"><span>BUILD WITH CURIOSITY.</span><span>SHIP WITH CARE. <b>✳</b></span></div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><BrandMark /><p>Designed and built with intention.<br /><span>© {new Date().getFullYear()} Aayush Rai</span></p><a href="#home" className="back-top">BACK TO TOP <span>↑</span></a></div></footer>;
}

export default function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <Hero />
      <WorkSection />
      <AboutSection />
      <AchievementsSection />
      <JourneySection />
      <ContactSection />
    </main>
    <Footer />
  </>;
}

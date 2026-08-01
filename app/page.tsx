"use client";

import { useEffect, useState } from "react";

const values = [
  ["01", "Identity", "We build from conviction, not comparison."],
  ["02", "Nobility", "Excellence with integrity and honour."],
  ["03", "Creativity", "Bold imagination, beautifully executed."],
  ["04", "Service", "Innovation that solves meaningful problems."],
  ["05", "Legacy", "People and systems designed to outlive us."],
];

const capabilities = [
  "Software Development", "Product Design", "Brand Identity",
  "Creative Studio", "Innovation Consulting", "The Academy",
];

const pathways = [
  ["01", "Discover", "Find your spark"],
  ["02", "Learn", "Build your foundation"],
  ["03", "Create", "Ship meaningful work"],
  ["04", "Lead", "Raise other builders"],
];

const portfolio = [
  { number: "01", name: "Promise Point", type: "Agriculture · Manufacturing", description: "A digital presence for a woman-led cassava innovation company transforming sustainably grown cassava into premium starch, flour, and value-added products.", tags: ["Web Experience", "Brand Story", "Agriculture"], visual: "promise", accent: "GROW", url: "https://promisepointgtnl.com/" },
  { number: "02", name: "SOSO Care", type: "Healthtech · Insurtech · Impact", description: "A healthcare insurance ecosystem that lets people access quality care with cash or recyclable waste across thousands of hospitals and pharmacies.", tags: ["Digital Platform", "Product Systems", "Healthtech"], visual: "care", accent: "CARE", url: "https://www.sosocare.com/" },
  { number: "03", name: "Care Cova", type: "Healthcare · Finance", description: "A healthcare-financing experience built around a simple promise: receive care now and pay later through a more accessible digital journey.", tags: ["Product Design", "Web Platform", "Fintech"], visual: "mobility", accent: "COVA", url: "https://www.carecova.com/" },
  { number: "04", name: "Revi AI", type: "Proptech · Artificial Intelligence", description: "An AI-powered real-estate assistant created to make property discovery and customer conversations faster, smarter, and always available.", tags: ["AI Product", "Conversational UX", "Proptech"], visual: "promise", accent: "REVI", url: "https://www.reviai.ai/" },
  { number: "05", name: "AfricaMedTech", type: "Healthtech · Emergency Care", description: "A virtual hospital connecting people to real-time doctors, nurses, emergency response, ambulance dispatch, consultations, pharmacy, and home care.", tags: ["Healthcare Platform", "Realtime", "Product Design"], visual: "care", accent: "AMT", url: "https://africamedtech.com/" },
  { number: "06", name: "Easypedia Foods", type: "Agriculture · Ecommerce", description: "A commerce experience bringing farm products—from cassava flour and starch to natural African produce—closer to customers and global markets.", tags: ["Ecommerce", "Web Experience", "Food Systems"], visual: "promise", accent: "FOOD", url: "https://easypediafoods.com/" },
  { number: "07", name: "PowerStove", type: "Climate · Clean Energy", description: "A digital platform for an African clean-energy company creating innovative cooking solutions and advancing sustainable household energy.", tags: ["Climate Tech", "Digital Platform", "Clean Energy"], visual: "mobility", accent: "POWER", url: "https://powerstove.africa/" },
];

function Mark({ small = false }: { small?: boolean }) {
  return <span className={`mark ${small ? "small" : ""}`} aria-hidden="true"><i/><i/><i/><i/></span>;
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1900);
    const observer = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add("seen")),
      { threshold: .12 },
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <main>
      <div className={`intro ${loaded ? "gone" : ""}`}>
        <div className="draw-line"/><Mark/>
        <p>Where Kingdom meets Innovation.</p>
        <small>SAINT&apos;S SPARKS</small>
      </div>

      <nav>
        <a className="brand" href="#top"><Mark small/><b>SAINT&apos;S<br/>SPARKS</b></a>
        <div className={`navlinks ${menu ? "open" : ""}`}>
          <a href="#vision">Vision</a><a href="#work">What we do</a>
          <a href="#portfolio">Portfolio</a><a href="#lab">The Lab</a><a href="#academy">Academy</a>
        </div>
        <a className="navcta" href="#contact">Start something <span>↗</span></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation"><i/><i/></button>
      </nav>

      <section className="hero" id="top">
        <div className="grid"/><div className="glow"/>
        <div className="solar" aria-hidden="true">
          <i className="ring a"/><i className="ring b"/><div className="core"><Mark/></div>
        </div>
        <div className="hero-copy">
          <p className="kicker"><i/> Creative innovation collective · Global vision</p>
          <h1>Building<br/><em>builders.</em></h1>
          <div className="hero-foot">
            <p>We raise exceptional people, build transformative products, and advance Kingdom-centred innovation with world-class execution.</p>
            <a href="#vision">Explore <b>↓</b></a>
          </div>
        </div>
        <small className="side">BUILDING KINGDOM INNOVATORS FOR GLOBAL IMPACT</small>
      </section>

      <section className="manifest section" id="vision">
        <p className="label reveal"><b>01</b> Our reason for being</p>
        <div className="manifest-copy reveal">
          <small>More than a company.</small>
          <h2>We are a <em>movement</em> raising creators who know who they are—and build what the world has never seen.</h2>
        </div>
        <p className="manifest-note reveal"><Mark small/> At the intersection of faith, technology, creativity, and culture, sparks of potential become systems of lasting impact.</p>
      </section>

      <section className="dna section">
        <p className="label light reveal"><b>02</b> The DNA</p>
        <header className="split reveal"><h2>Five values.<br/>One <em>identity.</em></h2><p>Not words on a wall. The operating system behind everything we create.</p></header>
        <div className="value-list">
          {values.map(v => <article className="reveal" key={v[1]}><small>{v[0]}</small><h3>{v[1]}</h3><p>{v[2]}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="services section" id="work">
        <p className="label reveal"><b>03</b> What we do</p>
        <header className="split reveal"><h2>One collective.<br/><em>Infinite</em> possibility.</h2><p>Strategy, technology, design, and people—connected into one living system.</p></header>
        <div className="service-stage reveal">
          <div className="service-core"><Mark/><small>SAINT&apos;S SPARKS</small></div>
          {capabilities.map((c, i) => <button onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className={`service s${i+1} ${active===i?"active":""}`} key={c}><small>0{i+1}</small>{c}</button>)}
          <div className="service-info"><small>0{active+1} / 06</small><h3>{capabilities[active]}</h3><p>{["Digital products built to scale with clarity and purpose.","Human experiences shaped with intelligence and beauty.","Distinct identities that move across culture and markets.","Stories, motion, and campaigns with a point of view.","Ideas transformed into practical paths for growth.","Practical learning that turns potential into mastery."][active]}</p></div>
        </div>
      </section>

      <section className="portfolio-intro section" id="portfolio">
        <p className="label reveal"><b>04</b> Client portfolio</p>
        <header className="split reveal"><h2>Built for<br/><em>impact.</em></h2><p>Products, platforms, and digital experiences created with ambitious organisations solving meaningful problems.</p></header>
        <div className="portfolio-rule reveal"><span>SAINT&apos;S SPARKS PRODUCT + CLIENT WORK</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="showcase">
        <div className="product-art">
          <div className="screen">
            <header><Mark small/><b>TALIM</b><i/></header>
            <div><small>EDUCATION, BRILLIANTLY CONNECTED.</small><h3>One school.<br/>One intelligent system.</h3><span/><span/><span/></div>
          </div>
        </div>
        <div className="project-copy reveal">
          <small>SELECTED WORK / 2026</small><h2>Talim</h2>
          <p>A connected school ecosystem bringing learning, people, operations, and finance into one beautiful experience.</p>
          <div><b>PRODUCT</b><b>SOFTWARE</b><b>EDTECH</b></div>
          <a href="https://www.mytalim.com/" target="_blank" rel="noreferrer">View project ↗</a>
        </div>
      </section>

      <section className="portfolio-list">
        {portfolio.map((project) => (
          <article className={`portfolio-item ${project.visual}`} key={project.name}>
            <div className="portfolio-visual reveal">
              <span className="visual-index">{project.number}</span><strong>{project.accent}</strong>
              {project.visual === "mobility" && <div className="route-map"><i/><i/><i/><b/></div>}
              {project.visual === "care" && <div className="care-pulse"><i/><i/><b>+</b></div>}
              {project.visual === "promise" && <div className="growth-lines"><i/><i/><i/><i/></div>}
              <small>SAINT&apos;S SPARKS / SELECTED WORK</small>
            </div>
            <div className="portfolio-copy reveal">
              <div className="portfolio-meta"><span>{project.number} / 07</span><span>{project.type}</span></div>
              <h3>{project.name}</h3><p>{project.description}</p>
              <div className="portfolio-tags">{project.tags.map(tag => <b key={tag}>{tag}</b>)}</div>
              <a href={project.url} target="_blank" rel="noreferrer">Visit project <span>↗</span></a>
            </div>
          </article>
        ))}
        <div className="portfolio-close section reveal">
          <p>Have a meaningful problem worth solving?</p>
          <a href="#contact">Let&apos;s create the next case study. <span>↗</span></a>
        </div>
      </section>

      <section className="lab section" id="lab">
        <div className="future">FUTURE</div>
        <p className="label light reveal"><b>04</b> The Innovation Lab</p>
        <header className="split reveal"><h2>Looking around<br/>the <em>next corner.</em></h2><p>Experiments, research, artificial intelligence, and ideas that are still becoming.</p></header>
        <div className="lab-grid">
          <article className="ai reveal"><div className="ai-orb"><i/><i/><b>AI</b></div><small>EXPERIMENT 001</small><h3>Intelligence with intention</h3><p>Human-centred AI designed to amplify wisdom—not replace it.</p></article>
          <article className="signal reveal"><div>{[1,2,3,4,5].map(n=><i key={n}/>)}</div><small>RESEARCH</small><h3>Signals</h3><p>Tracking shifts shaping technology and culture.</p></article>
          <article className="future-card reveal"><b>12</b><small>IN DEVELOPMENT</small><h3>Future products</h3><p>Venture concepts moving from insight to prototype.</p></article>
        </div>
      </section>

      <section className="academy section" id="academy">
        <p className="label reveal"><b>05</b> The Academy</p>
        <header className="split reveal"><h2>Potential is a spark.<br/><em>Mastery</em> is the journey.</h2><p>From first curiosity to confident leadership, we build the whole innovator.</p></header>
        <div className="road reveal">{pathways.map(p=><article key={p[0]}><small>{p[0]}</small><i/><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</div>
        <div className="tracks reveal">{["Software Engineering","Product Design","Artificial Intelligence","Cybersecurity","Creative Arts","Product Leadership"].map(x=><span key={x}>{x}<b>↗</b></span>)}</div>
      </section>

      <section className="community section">
        <div className="network" aria-hidden="true"><i/><i/><i/><div><Mark/><small>TOGETHER</small></div>{["BU","DE","CR","LE","ST","ME"].map((x,i)=><b className={`p${i+1}`} key={x}>{x}</b>)}</div>
        <div className="community-copy reveal"><p className="label light"><b>06</b> The community</p><h2>Different sparks.<br/>One <em>fire.</em></h2><p>Builders, designers, creators, leaders, students, and mentors—connected by a desire to create what matters.</p><a className="light-btn" href="#contact">Join the movement <b>↗</b></a></div>
      </section>

      <section className="impact section">
        <p className="label reveal"><b>07</b> The impact so far</p>
        <div className="stats"><div><b>100<em>+</em></b><p>Builders raised</p></div><div><b>50<em>+</em></b><p>Projects delivered</p></div><div><b>10<em>+</em></b><p>Innovation programmes</p></div><div><b>∞</b><p>Global vision</p></div></div>
      </section>

      <section className="careers section">
        <div className="reveal"><p className="label light"><b>08</b> Careers</p><h2>We&apos;re looking<br/>for <em>builders.</em></h2><p>People who believe their work can become an act of service.</p><a className="light-btn" href="#contact">Find your place <b>↗</b></a></div>
        <aside className="reveal"><article><small>01</small><b>Own the outcome.</b></article><article><small>02</small><b>Stay deeply curious.</b></article><article><small>03</small><b>Build beyond yourself.</b></article></aside>
      </section>

      <section className="contact section" id="contact">
        <p className="kicker reveal"><i/> The next spark could be yours</p>
        <h2 className="reveal">Let&apos;s build<br/><em>what matters.</em></h2>
        <a className="contact-btn reveal" href="mailto:hello@saintssparks.com">Start a conversation <b>↗</b></a>
        <div className="contact-foot"><small>ABUJA · NIGERIA · GLOBAL</small><span>Instagram · LinkedIn · X / Twitter</span></div>
      </section>

      <footer>
        <div className="brand"><Mark/><b>SAINT&apos;S SPARKS</b></div>
        <p>We don&apos;t just build products.<br/>We build people. We build ideas.<br/><strong>We build the future.</strong></p>
        <div><small>© 2026 SAINT&apos;S SPARKS</small><small>BUILDING KINGDOM INNOVATORS FOR GLOBAL IMPACT</small><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}

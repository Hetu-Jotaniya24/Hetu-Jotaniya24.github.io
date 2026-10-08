import { useEffect, useMemo, useState, type SVGProps } from 'react'
import {
  about,
  expertise,
  insights,
  nav,
  process,
  profile,
  technology,
  values,
  work,
} from './data'

const portrait = `${import.meta.env.BASE_URL}portrait.png`

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props} />
  )
}

const skillIcons = [
  <Icon key="ai">
    <path d="M12 3v3M12 18v3M4.9 6.5l2.1 2.1M17 15.4l2.1 2.1M3 12h3M18 12h3M4.9 17.5 7 15.4M17 8.6l2.1-2.1" />
    <circle cx="12" cy="12" r="3.2" />
  </Icon>,
  <Icon key="product">
    <rect x="4" y="5" width="16" height="14" rx="2" />
    <path d="M8 9h8M8 13h5" />
  </Icon>,
  <Icon key="mobile">
    <rect x="8" y="3.5" width="8" height="17" rx="2" />
    <path d="M11 17.5h2" />
  </Icon>,
  <Icon key="web">
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4c2.4 2.6 3.6 5.3 3.6 8S14.4 17.4 12 20c-2.4-2.6-3.6-5.3-3.6-8S9.6 6.6 12 4Z" />
  </Icon>,
  <Icon key="auto">
    <path d="M4 8h10l3-3 3 3M20 16H10l-3 3-3-3" />
  </Icon>,
  <Icon key="emerge">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 5a10 4.5 0 0 1 0 14A10 4.5 0 0 1 12 5Z" />
    <path d="M5 12h14" />
  </Icon>,
]

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openInsight, setOpenInsight] = useState<number | null>(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headline = useMemo(() => {
    const [before, after] = profile.headline.split(profile.accentWord)
    return (
      <>
        {before}
        <span className="accent">{profile.accentWord}</span>
        {after}
      </>
    )
  }, [])

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="container nav-inner">
          <a className="logo" href="#top">
            <span className="mark">HJ</span>
            <span className="logo-name">{profile.name}</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Start a Conversation <Arrow />
          </a>
          <button
            className="menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
        <nav className={menuOpen ? 'mobile-nav open' : 'mobile-nav'}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href={`mailto:${profile.email}`} onClick={() => setMenuOpen(false)}>
            Start a Conversation
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="hero-card reveal">
              <div className="hero-copy">
                <p className="eyebrow">{profile.role}</p>
                <p className="marker">Ideas Build Better Tomorrows</p>
                <h1>{headline}</h1>
                <p className="lead">{profile.summary}</p>
                <div className="tag-row">
                  {profile.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                    Start a Conversation <Arrow />
                  </a>
                  <a className="btn btn-ghost" href="#work">
                    Explore My Work →
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img className="portrait" src={portrait} alt={profile.name} />
                <div className="impact">
                  <p className="eyebrow">What I do</p>
                  <h3>
                    From idea to <span className="accent">impact.</span>
                  </h3>
                  <p>Product thinking, modern technology and a focus on real-world solutions.</p>
                  <div className="impact-row">
                    <div className="impact-item">
                      <Icon>
                        <path d="M9 18c6 0 8-6 9-12-3 1-5 2-7 4-1-3-3-5-5-6 0 6 1 10 3 14Z" />
                      </Icon>
                      Think
                    </div>
                    <div className="impact-item">
                      <Icon>
                        <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
                        <path d="M12 12 4 7.5M12 12v9M12 12l8-4.5" />
                      </Icon>
                      Build
                    </div>
                    <div className="impact-item">
                      <Icon>
                        <path d="M4 16h4v4H4zM10 10h4v10h-4zM16 6h4v14h-4z" />
                      </Icon>
                      Scale
                    </div>
                    <div className="impact-item">
                      <Icon>
                        <circle cx="9" cy="8" r="2.2" />
                        <circle cx="16" cy="9" r="2" />
                        <path d="M4.5 17c.6-2.3 2.3-3.5 4.5-3.5s3.9 1.2 4.5 3.5M14 13.8c1.7 0 3.1.8 3.8 2.7" />
                      </Icon>
                      People
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <span key={copy}>
                {[...profile.tags, 'Think', 'Build', 'Scale', 'People'].map((word) => (
                  <span className="ticker-item" key={word}>
                    {word}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <section className="section" id="about">
          <div className="container">
            <article className="panel reveal">
              <p className="eyebrow">{about.eyebrow}</p>
              <h3>{about.title}</h3>
              <div className="stack">
                <p className="mantra">{about.lead}</p>
                <p className="muted">{about.body}</p>
                <p className="muted">{about.close}</p>
                <p className="mantra">{about.mantra}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">Expertise</p>
                <h2>A calm stack for ambitious products.</h2>
              </div>
              <p>Practical capability across AI, product engineering, mobile, web, automation, and emerging technology.</p>
            </div>
            <div className="grid-3">
              {expertise.map((item, index) => (
                <article className="skill-card reveal" key={item.title}>
                  <div className="skill-icon">{skillIcons[index]}</div>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.body}</p>
                  <div className="chips">
                    {item.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">Selected Work</p>
                <h2>Products built for the real world.</h2>
              </div>
              <p>
                A selection of products and digital experiences across mobile, web, AI, e-commerce,
                healthcare, travel, construction, social, and connected technologies.
              </p>
            </div>
            <div className="grid-2">
              {work.map((project) => (
                <article className="work-card reveal" key={project.title}>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.body}</p>
                  <p className="focus">{project.focus}</p>
                  {'app' in project || 'website' in project ? (
                    <div className="links">
                      {'app' in project && project.app ? (
                        <a href={project.app} target="_blank" rel="noreferrer">
                          App Store
                        </a>
                      ) : null}
                      {'website' in project && project.website ? (
                        <a href={project.website} target="_blank" rel="noreferrer">
                          Website
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="approach">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">How I Work</p>
                <h2>From understanding to evolution.</h2>
              </div>
              <p>A clear path from the problem to a product that can grow.</p>
            </div>
            <div className="process">
              {process.map((item) => (
                <article className="step reveal" key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="technology">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">Technology</p>
                <h2>Chosen for the problem, not the trend.</h2>
              </div>
            </div>
            <div className="tech">
              {technology.map((group) => (
                <div className="tech-group reveal" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">What I Bring</p>
                <h2>Depth, judgment, and follow-through.</h2>
              </div>
            </div>
            <div className="values">
              {values.map((item, index) => (
                <article className="value-card reveal" key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="insights">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">Insights</p>
                <h2>Ideas, technology & product thinking.</h2>
              </div>
            </div>
            <div className="insights">
              {insights.map((item, index) => {
                const open = openInsight === index
                return (
                  <article className="insight reveal" key={item.title}>
                    <button
                      aria-expanded={open}
                      onClick={() => setOpenInsight(open ? null : index)}
                    >
                      <h3>{item.title}</h3>
                      <i>{open ? '–' : '+'}</i>
                    </button>
                    {open ? <p>{item.body}</p> : null}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      <footer className="footer" id="footer">
        <div className="container footer-inner">
          <p>
            <strong>{profile.name}</strong>
            <br />
            {profile.role}
          </p>
          <p>AI · Product Engineering · Mobile · Web · Automation</p>
          <div className="footer-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <a
        className="wa-float"
        href={profile.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 17.3L1 23l5.8-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5ZM12 21.1a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 21.1Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.3-.4.2-.3a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.6-.5-.5-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.5 4 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </a>
    </>
  )
}

export default App

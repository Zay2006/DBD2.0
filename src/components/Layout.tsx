import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'

const titles: Record<string, string> = {
  '/': 'Driven by Design — Multimedia Visual Storytelling',
  '/work': 'Work — Driven by Design',
  '/hire': 'Hire — Driven by Design',
  '/programs': 'Programs — Driven by Design',
  '/story-driven': 'Story Driven — Driven by Design',
  '/books': 'Books — Driven by Design',
  '/shop': 'Shop — Driven by Design',
  '/about': 'About Michael L. Clay — Driven by Design',
  '/contact': 'Contact — Driven by Design',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? 'Driven by Design'
  }, [pathname])
  return null
}

function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const onHero = pathname === '/' && !scrolled

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const className = [
    'header',
    onHero ? 'on-dark' : 'solid',
    open ? 'open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={className}>
      <div className="header-inner">
        <NavLink to="/" end className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">DBD</span>
          <span className="brand-text">
            <strong>Driven by Design</strong>
            <span>Creative Agency</span>
          </span>
        </NavLink>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn" style={{ color: '#fffaf3' }}>
            Let's talk
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h2>Tell the story while it is still in the room.</h2>
          <p className="muted" style={{ color: 'rgba(244,239,230,0.7)' }}>
            {site.sentence}
          </p>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3>Studio</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.proofing} target="_blank" rel="noreferrer">
                Client galleries
              </a>
            </li>
            <li>
              <a href={site.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.legal}
        </span>
        <span>South Jersey · Philadelphia · On the road</span>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { asset, nav, type NavItem } from '../data/site'

const titles: Record<string, string> = {
  '/': 'Driven by Design Creative Agency LLC - Multimedia Visual Storytelling',
  '/my-journey': 'My Journey - Driven by Design',
  '/classes': 'The Art of Visual Storytelling - Driven by Design',
  '/story-driven': 'Story Driven - Driven by Design',
  '/books': 'Books - Driven by Design',
  '/filmmaking': 'Filmmaking - Driven by Design',
  '/documentary-trailers': 'Documentary Trailers - Driven by Design',
  '/family-photography': 'Family Photography - Driven by Design',
  '/commercial-photography': 'Commercial Photography - Driven by Design',
  '/testimonials': 'Testimonials - Driven by Design',
  '/contact': 'Contact Me - Driven by Design',
  '/shop': 'Shop - Driven by Design',
  '/packages': 'Packages - Driven by Design',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? 'Driven by Design Creative Agency'
  }, [pathname])
  return null
}

function NavLinkItem({ item, onClick }: { item: NavItem; onClick: () => void }) {
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" onClick={onClick}>
        {item.label}
      </a>
    )
  }
  return (
    <NavLink to={item.to ?? '/'} onClick={onClick}>
      {item.label}
    </NavLink>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={`header site-bar${open ? ' open' : ''}`}>
      <div className="header-inner">
        <NavLink to="/" end className="brand" onClick={() => setOpen(false)}>
          <img className="site-logo" src={asset('/images/dbd-logo.png')} alt="Driven by Design" />
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
          {nav.map((item) =>
            item.children ? (
              <div className="has-sub" key={item.label}>
                <NavLinkItem item={item} onClick={() => setOpen(false)} />
                <div className="subnav">
                  {item.children.map((child) => (
                    <NavLinkItem key={child.label} item={child} onClick={() => setOpen(false)} />
                  ))}
                </div>
              </div>
            ) : (
              <NavLinkItem key={item.label} item={item} onClick={() => setOpen(false)} />
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="orig-footer">
      Driven by Design Creative Agency LLC. Copyright © 2017
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <Outlet />
      {pathname === '/' ? null : <Footer />}
    </>
  )
}

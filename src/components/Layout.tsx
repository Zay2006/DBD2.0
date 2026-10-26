import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { asset, nav, site, type NavItem } from '../data/site'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title =
      pathname === '/'
        ? 'Driven by Design Creative Agency LLC - Multimedia Visual Storytelling'
        : 'Driven by Design Creative Agency'
  }, [pathname])
  return null
}

function isExternal(href: string) {
  return !href.startsWith(site.live)
}

function NavLinkItem({ item, onClick }: { item: NavItem; onClick: () => void }) {
  if (item.href) {
    const external = isExternal(item.href)
    return (
      <a
        href={item.href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick}
      >
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

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <Outlet />
    </>
  )
}

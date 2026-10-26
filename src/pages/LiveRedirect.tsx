import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { liveUrlFor, site } from '../data/site'

export default function LiveRedirect() {
  const { pathname } = useLocation()
  const dest = liveUrlFor(pathname)

  useEffect(() => {
    if (dest) window.location.replace(dest)
  }, [dest])

  if (dest) {
    return (
      <main id="main" className="orig-section">
        <div className="orig-copy" style={{ textAlign: 'center' }}>
          <h2>Opening the live page</h2>
          <p>
            This rebuild keeps the homepage. Everything else lives on the
            current studio site.
          </p>
          <a className="orig-btn solid" href={dest}>
            Continue to {new URL(dest).hostname}
          </a>
        </div>
      </main>
    )
  }

  return (
    <main id="main" className="orig-section">
      <div className="orig-copy" style={{ textAlign: 'center' }}>
        <h2>Page not found</h2>
        <p>This page wandered off the board.</p>
        <p>
          <Link className="orig-btn solid" to="/">
            Home
          </Link>
        </p>
        <p>
          <a href={site.live}>Visit the live studio site</a>
        </p>
      </div>
    </main>
  )
}

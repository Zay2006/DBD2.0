import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="main" className="page-hero">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>This page wandered off.</h1>
        <p className="lede">Try the work, the game, or write Michael directly.</p>
        <div className="btn-row">
          <Link className="btn" to="/">
            Home
          </Link>
          <Link className="btn outline" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </main>
  )
}

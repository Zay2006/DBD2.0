import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="main" className="orig-section">
      <div className="orig-copy" style={{ textAlign: 'center' }}>
        <h2>Page not found</h2>
        <p>This page wandered off the board.</p>
        <Link className="orig-btn solid" to="/">
          Home
        </Link>
      </div>
    </main>
  )
}

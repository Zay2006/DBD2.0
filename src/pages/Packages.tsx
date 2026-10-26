import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { asset } from '../data/site'

export default function Packages() {
  return (
    <main id="main">
      <OrigHero image={asset('/images/garry.jpg')} title="Packages" />
      <section className="orig-section">
        <div className="orig-grid">
          <article className="orig-card">
            <h3>Event Coverage</h3>
            <p className="orig-price">$250 / hr</p>
            <ul className="orig-list">
              <li>Performances</li>
              <li>1 camera setup</li>
              <li>B-roll coverage</li>
              <li>Minimum 2 hours</li>
              <li>REC709 files</li>
              <li>Editing not included</li>
              <li>Travel not included</li>
            </ul>
            <Link className="orig-btn solid" to="/contact">
              Contact Me
            </Link>
          </article>
          <article className="orig-card">
            <h3>Custom Project</h3>
            <p className="orig-price">?</p>
            <p>Tell us about your custom project!</p>
            <Link className="orig-btn solid" to="/contact">
              Contact Me
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}

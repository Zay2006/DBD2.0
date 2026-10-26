import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { asset, site } from '../data/site'

export default function Shop() {
  return (
    <main id="main">
      <OrigHero image={asset('/images/story-board.png')} title="Shop" />
      <section className="orig-section">
        <div className="orig-grid">
          <article className="orig-card">
            <img src={asset('/images/story-cards.jpg')} alt="Story Driven for Professionals" />
            <h3>Story Driven for Professionals</h3>
            <p>Story Driven: Unlocking Writer’s Block is a fun &amp; interactive creative writing board game.</p>
            <p className="orig-price">Visit the game site</p>
            <a className="orig-btn solid" href={site.storyDriven}>
              Buy / learn more
            </a>
          </article>
          <article className="orig-card">
            <img src={asset('/images/book-ifound.jpg')} alt="I Found A Reason To Speak" />
            <h3>I Found A Reason To Speak</h3>
            <p>Purchase on Amazon &amp; Kindle.</p>
            <a className="orig-btn solid" href={site.amazonBook} target="_blank" rel="noreferrer">
              Amazon
            </a>
          </article>
        </div>
        <p className="orig-copy" style={{ textAlign: 'center', marginTop: '2rem' }}>
          Non-profits needing a purchase order: email {site.email}.{' '}
          <Link to="/contact">Contact Me</Link>
        </p>
      </section>
    </main>
  )
}

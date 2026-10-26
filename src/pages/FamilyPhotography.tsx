import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { asset } from '../data/site'

const offers = [
  { title: 'Weddings', body: 'Your big day is one to be cherished and we want to be a part of capturing those moments for you' },
  { title: 'Portraits', body: 'Let us help you create family memories that can stand the test of time' },
  { title: 'Events', body: 'Our love for candid photography is expressed in settings where families reunite for a time of conversation and laughter' },
  { title: 'Pop Up', body: 'These sessions are great for surprises and customers who may not have the time for a full portrait session' },
]

export default function FamilyPhotography() {
  return (
    <main id="main">
      <OrigHero
        image={asset('/images/family.jpg')}
        kicker="Lifestyle"
        title="Portraits, Weddings, Events & Pop Up"
        ctas={[
          { label: 'Client Portfolio', href: 'https://proof.dbdcreativeagency.com/' },
          { label: 'Commercial Photography', to: '/commercial-photography' },
        ]}
      />
      <section className="orig-section">
        <div className="orig-grid">
          {offers.map((item) => (
            <article className="orig-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="orig-band">
        <h2>Family Portraiture</h2>
        <p>See our investment models below</p>
      </section>
      <section className="orig-section">
        <div className="orig-grid">
          <article className="orig-card">
            <h3>Weddings</h3>
            <p className="orig-price">Starting at $2,500</p>
            <ul className="orig-list">
              <li>Comes in 3 packages</li>
              <li>Up to 6, 8, or 10 hours of coverage</li>
              <li>Professional editing</li>
              <li>Online proofing</li>
              <li>Digitals included</li>
              <li>Travel included (up to 25 miles)</li>
            </ul>
          </article>
          <article className="orig-card">
            <h3>Portraits</h3>
            <p className="orig-price">$700</p>
            <ul className="orig-list">
              <li>Up to 2 hours</li>
              <li>Up to 4 people</li>
              <li>10x10 book</li>
              <li>Digitals included</li>
              <li>Travel included (up to 25 miles)</li>
            </ul>
          </article>
          <article className="orig-card">
            <h3>Events</h3>
            <p className="orig-price">$350 / hr</p>
            <ul className="orig-list">
              <li>2 hour minimum</li>
              <li>Professional editing</li>
              <li>Online viewing</li>
              <li>Digitals included</li>
            </ul>
          </article>
          <article className="orig-card">
            <h3>Pop Up</h3>
            <p className="orig-price">$300</p>
            <ul className="orig-list">
              <li>Up to 1 hour</li>
            </ul>
          </article>
        </div>
        <p className="orig-copy" style={{ textAlign: 'center', marginTop: '2rem' }}>
          Contact us if you would like to see our wedding packages.{' '}
          <Link to="/contact">Contact</Link>
        </p>
      </section>
    </main>
  )
}

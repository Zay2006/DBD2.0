import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { asset } from '../data/site'

const services = [
  { title: 'Headshots', body: 'Let us speak for you before your audience meets you (social media & speaking engagements)' },
  { title: 'Product & Service Photography', body: "Your brand’s imagery is the first impression a potential client sees. Let us give you a product that represents your target audience." },
  { title: 'Event', body: 'Let us be there for you by capturing your important moments of your business venture' },
]

export default function CommercialPhotography() {
  return (
    <main id="main">
      <OrigHero
        image={asset('/images/jhec-cover.jpg')}
        title="Investment Breakdown"
        subtitle="See our investment model details below"
      />
      <section className="orig-section">
        <div className="orig-grid">
          {services.map((item) => (
            <article className="orig-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="orig-section alt">
        <div className="orig-grid">
          <article className="orig-card">
            <h3>Day Rate</h3>
            <p className="orig-price">$2,000</p>
            <p>Up to 8 hours</p>
          </article>
          <article className="orig-card">
            <h3>Day Rate</h3>
            <p className="orig-price">$1,200</p>
            <p>Up to 4 hours</p>
          </article>
          <article className="orig-card">
            <h3>Event Photography</h3>
            <p className="orig-price">$350 / hr</p>
            <p>2 hour minimum</p>
          </article>
          <article className="orig-card">
            <h3>Add-ons</h3>
            <ul className="orig-list">
              <li>Licensing & usage: $300</li>
              <li>File administration: $300</li>
              <li>Same day delivery: $300</li>
              <li>Retouching: $30 per image</li>
              <li>Food styling: $500</li>
              <li>Additional photographer: $500</li>
            </ul>
          </article>
        </div>
        <p className="orig-copy" style={{ marginTop: '2rem' }}>
          Exclusive rights: images are licensed for commercial use with non-exclusive rights unless requested. Contact for exclusive copyright.
        </p>
        <p className="orig-copy">
          <Link className="orig-btn solid" to="/contact">
            Contact
          </Link>
        </p>
      </section>
    </main>
  )
}

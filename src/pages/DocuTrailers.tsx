import OrigHero from '../components/OrigHero'
import { asset } from '../data/site'

export default function DocuTrailers() {
  return (
    <main id="main">
      <OrigHero image={asset('/images/hancock.jpg')} title="Docu Trailers" />
      <section className="orig-section">
        <div className="orig-grid">
          <article className="orig-card">
            <img src={asset('/images/hancock.jpg')} alt="315 Hancock Squad" />
            <h3>315 Hancock Squad</h3>
            <p>Documentary still</p>
          </article>
          <article className="orig-card">
            <img src={asset('/images/garry.jpg')} alt="On the Garry" />
            <h3>On the Garry</h3>
            <p>Family oral history</p>
          </article>
        </div>
      </section>
    </main>
  )
}

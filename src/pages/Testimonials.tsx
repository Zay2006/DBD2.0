import OrigHero from '../components/OrigHero'
import { origTestimonials } from '../data/original'
import { asset } from '../data/site'

export default function Testimonials() {
  return (
    <main id="main">
      <OrigHero
        image={asset('/images/mccarter.jpg')}
        title="Testimonials"
        subtitle="Filmmaking | Photography | Classes | Story Driven"
      />
      <section className="orig-section">
        {origTestimonials.map((item) => (
          <article className="quote-block" key={item.name}>
            <p className="orig-kicker">{item.cat}</p>
            <h2>{item.name}</h2>
            <p>“{item.quote}”</p>
          </article>
        ))}
      </section>
    </main>
  )
}

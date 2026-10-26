import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { journey } from '../data/original'
import { asset } from '../data/site'

export default function MyJourney() {
  return (
    <main id="main">
      <OrigHero
        image={asset('/images/michael.jpg')}
        title="Michael L. Clay"
        subtitle="Multimedia Visual Storyteller"
        ctas={[{ label: 'Contact Me', to: '/contact' }]}
      />
      <section className="orig-band">
        <h2>My Journey</h2>
        <p>Updated periodically</p>
      </section>
      <section className="orig-section">
        <div className="journey-list">
          {journey.map((item) => (
            <article className="journey-item" key={`${item.year}-${item.title}`}>
              <time>{item.year}</time>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="orig-section alt">
        <div className="orig-copy">
          <h2>My Journey Continues</h2>
          <p>
            Michael L. Clay is a listener, a helper, a man of many talents who wears those hats proudly to aid others in cultivating their stories. His forms of expression are filmmaking, photography, creative writing and educational programming.
          </p>
          <p>
            As CEO of Driven by Design Creative Agency LLC, his work has lived with the Smithsonian Center for Folklife &amp; Cultural Heritage, the Library of Congress Community on the Line collection, the African American Museum of Philadelphia, and the University of Pennsylvania MAKUU Center for <em>On the Garry: A Generation of Oral Traditions</em>.
          </p>
          <p>
            In January 2025, his love for teaching creative writing became Story Driven: Unlocking Writer’s Block. In summer 2026, he and his wife staged Shining a Light On Our Stories on a 1,200 sq ft version of the board.
          </p>
          <p>
            Follow me as I continue on this journey helping those who help others...
          </p>
          <Link className="orig-btn solid" to="/contact">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  )
}

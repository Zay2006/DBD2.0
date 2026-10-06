import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { partners, testimonials, timeline } from '../data/site'

export default function About() {
  return (
    <main id="main">
      <PageHero
        kicker="About"
        title="Michael L. Clay is a listener who happens to carry cameras."
        lede="Multimedia visual storyteller, teaching artist, and lifestyle photographer. He would rather seal a true moment than arrange one."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <img
            src="/images/michael.jpg"
            alt="Michael L. Clay seated outdoors in profile"
          />
          <div>
            <p>
              Michael started in 2009 with friends from Rutgers Business School in Camden, then spent the next years teaching entrepreneurship, photographing families with his wife, and learning that the work was always the story underneath the assignment.
            </p>
            <p>
              As the principal of Driven by Design Creative Agency, he works with individuals, small businesses, and organizations who serve children and families. Film, stills, classrooms, a board game, and a book are different tools for the same job: take a story off the paper and walk it to the people who need it.
            </p>
            <p>
              He has made work with the Smithsonian Center for Folklife &amp; Cultural Heritage, the Library of Congress, the African American Museum of Philadelphia, and the University of Pennsylvania MAKUU Center, where <em>On the Garry: A Generation of Oral Traditions</em> played with conversations about family.
            </p>
            <p className="muted">Certified Professional Photographer · Lean Six Sigma · PPA</p>
            <div className="btn-row">
              <Link className="btn" to="/contact">
                Work with Michael
              </Link>
              <Link className="btn outline" to="/work">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Places</p>
          <div className="partners">
            {partners.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <p className="kicker">Selected years</p>
          <h2 style={{ marginBottom: '1.2rem' }}>The journey, edited.</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="t-item" key={item.year}>
                <time>{item.year}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Letters</p>
              <h2>What collaborators actually said.</h2>
            </div>
          </div>
          <div className="quotes">
            {testimonials.map((item) => (
              <blockquote className="quote" key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

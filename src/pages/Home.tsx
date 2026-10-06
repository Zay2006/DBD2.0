import { Link } from 'react-router-dom'
import WorkGrid from '../components/WorkGrid'
import { partners, site, testimonials } from '../data/site'

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <img
          src="/images/hero-loc.jpg"
          alt="Community members soul line dancing, photographed for the Library of Congress"
        />
        <div className="hero-copy">
          <p className="museum-label">
            Community on the Line · Library of Congress
          </p>
          <h1>True stories, sealed in time.</h1>
          <p className="lede">{site.sentence}</p>
          <div className="btn-row">
            <Link className="btn" to="/work">
              See the work
            </Link>
            <Link className="btn ghost" to="/contact">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Who it's for</p>
              <h2>Three doors. One storyteller.</h2>
            </div>
            <p className="lede" style={{ maxWidth: '34ch' }}>
              Michael does not pose the room. He listens, then makes stills, films, classrooms, and games that carry a family's or organization's voice.
            </p>
          </div>
          <div className="doors">
            <Link className="door" to="/hire">
              <span className="num">01</span>
              <h3>Organizations</h3>
              <p>
                Documentary photography and film for schools, nonprofits, theatres, and businesses that serve children and families.
              </p>
              <span>Hire the studio →</span>
            </Link>
            <Link className="door" to="/programs">
              <span className="num">02</span>
              <h3>Schools</h3>
              <p>
                Residencies where students write, shoot, and edit their own stories — aligned with ELA and social-emotional learning.
              </p>
              <span>See programs →</span>
            </Link>
            <Link className="door" to="/story-driven">
              <span className="num">03</span>
              <h3>Families</h3>
              <p>
                Portraits, a writing game, a family book, and a life-size board that gets people talking across generations.
              </p>
              <span>Play Story Driven →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Selected work</p>
              <h2>The photograph should already be talking.</h2>
            </div>
            <Link className="btn outline" to="/work">
              Full archive
            </Link>
          </div>
          <WorkGrid limit={6} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">Story Driven</p>
            <h2>A board game that meets writers where they are.</h2>
            <p className="lede">
              Thirty to sixty minutes. More than ten ways to play. Built for classrooms, counseling, and the kitchen table.
            </p>
            <p>
              In 2026 Michael and his wife took a 1,200 square-foot version on the lawn. Families became the pieces, wrote, and filmed. The small board is in more than ten states.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/story-driven">
                Learn the game
              </Link>
              <Link className="btn outline" to="/shop">
                Shop
              </Link>
            </div>
          </div>
          <img
            src="/images/story-cards.jpg"
            alt="Story Driven board game with challenge, genre, and practice cards"
            className="contain"
          />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">From the people in the room</p>
              <h2>Proof, not adjectives.</h2>
            </div>
          </div>
          <div className="quotes">
            {testimonials.slice(0, 3).map((item) => (
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

      <section className="section ink">
        <div className="wrap cta-band">
          <div>
            <p className="kicker">Places the work has lived</p>
            <h2>Smithsonian. Library of Congress. Your classroom next.</h2>
            <div className="partners" style={{ marginTop: '1.4rem' }}>
              {partners.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
          <Link className="btn" to="/contact">
            Start a project
          </Link>
        </div>
      </section>
    </main>
  )
}

import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

export default function Books() {
  return (
    <main id="main">
      <PageHero
        kicker="Books"
        title="Start the conversation."
        lede="Poetry, photographs, and family testimony — written so a household has a reason to speak."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <img
            src="/images/book-ifound.jpg"
            alt="Cover of I Found a Reason to Speak: Oneness for a Generation"
            className="contain"
          />
          <div>
            <p className="kicker">2024</p>
            <h2>I Found a Reason to Speak: Oneness for a Generation</h2>
            <p className="lede">
              A picturesque collection of poems Michael curated while walking, watching how nature conserves itself, and rebuilding a bond with his family.
            </p>
            <p>
              The hardest relationships to build can be with family. The book is an invitation back into that work — listen, ask, and speak.
            </p>
            <blockquote className="quote" style={{ marginTop: '1.2rem' }}>
              <p>
                “Clay's wordsmithing lays upon a field of advocacy, creating a landscape that honors ancestors, the familiar and the personal.”
              </p>
              <footer>
                <strong>Karen “Queen Nur” Abdul-Malik</strong>
                2020 Zora Neale Hurston Award, National Association of Black Storytellers
              </footer>
            </blockquote>
            <div className="btn-row">
              <a className="btn" href={site.amazonBook} target="_blank" rel="noreferrer">
                Find it on Amazon
              </a>
              <Link className="btn outline" to="/contact">
                Invite a reading
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split reverse">
          <div>
            <p className="kicker">In progress</p>
            <h2>Uncle Mike &amp; Me</h2>
            <p className="lede">
              Michael's first children's book — still in the making, not vaporware with a 2022 stamp. When it is ready, it will live here.
            </p>
            <p>
              Until then, the family documentary <em>On the Garry: A Generation of Oral Traditions</em> and the Story Driven board are the other doors into the same house.
            </p>
          </div>
          <img
            src="/images/book-signing.jpg"
            alt="Guests at the first book signing in December 2024"
          />
        </div>
      </section>
    </main>
  )
}

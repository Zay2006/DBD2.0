import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Programs() {
  return (
    <main id="main">
      <PageHero
        kicker="Programs"
        title="Students as writers, directors, and camera operators."
        lede="Customizable residencies that grow English language arts through creative writing and film — in the classroom, not as an add-on assembly."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap program-list">
          <article className="split">
            <div>
              <p className="kicker">01 · Flagship</p>
              <h2>Art of Visual Storytelling</h2>
              <p className="lede">
                A standalone curriculum that can also align with yours. Individual and group projects. Interactive at every section.
              </p>
              <ul>
                <li>Aligns with NJ Common Core ELA literacy and writing standards</li>
                <li>Follows Marzano's desired effects of the 41 elements</li>
                <li>Uses social-emotional learning techniques and tools</li>
                <li>Prepares students for NJSLA / PARCC-style writing</li>
              </ul>
              <p className="muted">
                Brought to Cooper's Poynt Family School in Camden with 2nd and 3rd graders — they wrote and shot an episode. Teachers called the engagement monumental.
              </p>
            </div>
            <img
              src="/images/avs.jpg"
              alt="Students at Cooper's Poynt rehearsing their visual story"
            />
          </article>

          <article className="split reverse">
            <div>
              <p className="kicker">02</p>
              <h2>Creator's Corner</h2>
              <p className="lede">
                An introduction to cinematography with the phones students already have. Practice plus imagination — special effects included.
              </p>
              <p>
                Critical thinking, creative writing, and in-camera effects. Taught with Perkins Center for the Arts and in classrooms that need a way in without a full kit.
              </p>
            </div>
            <img
              src="/images/hancock.jpg"
              alt="Youth standing for a documentary portrait"
            />
          </article>

          <article className="split">
            <div>
              <p className="kicker">03</p>
              <h2>Finding My Niche'</h2>
              <p className="lede">
                A self-paced class for hobbyists and freelancers learning camera, light, and the long road of choosing a photography practice.
              </p>
              <p>
                Topics include niches, camera settings, lighting, and the mistakes Michael actually made across fifteen years. Available as a $19.99 ebook or a $99.99 class.
              </p>
              <div className="btn-row">
                <Link className="btn" to="/shop">
                  Shop the class
                </Link>
                <Link className="btn outline" to="/contact">
                  Book a residency
                </Link>
              </div>
            </div>
            <img
              src="/images/finding-niche.jpg"
              alt="Cover for Finding My Niche photography class"
            />
          </article>
        </div>
      </section>
    </main>
  )
}

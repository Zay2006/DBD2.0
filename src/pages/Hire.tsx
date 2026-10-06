import { Link } from 'react-router-dom'
import InquiryForm from '../components/InquiryForm'
import PageHero from '../components/PageHero'

export default function Hire() {
  return (
    <main id="main">
      <PageHero
        kicker="Hire"
        title="Photography and film for people who serve children and families."
        lede="Corporate headshots, product and event work, family portraiture, interviews, and documentaries. Non-exclusive commercial licensing is the default; exclusive rights are available."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <p className="kicker">Photography</p>
            <h2>Still pictures that already know the audience.</h2>
            <p>
              Headshots for speaking and social. Product and service images that match who you serve. Event coverage that keeps the candids and the handshake.
            </p>
            <p className="muted">
              Commercial days are billed as a day rate plus licensing. Retouching beyond color, crop, and sort is additional. Travel up to 25 miles is included, excluding tolls. Same-day delivery is an additional $300.
            </p>
          </div>
          <img src="/images/headshots.jpg" alt="Professional outdoor headshot" />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split reverse">
          <div>
            <p className="kicker">Film</p>
            <h2>Commercial, interview, performance, documentary.</h2>
            <p>
              From a classroom residency film to a four-spot awards package shot on a deadline. Michael writes, directs, photographs, and edits — and will tell you what the cut needs before the camera comes out.
            </p>
            <p className="muted">
              Recent films include On the Garry, Whitesbog oral histories, EduSports, World Cafe Live, Creator's Corner, and Polo Ridge's Garden State Awards set.
            </p>
          </div>
          <img
            src="/images/hancock.jpg"
            alt="Documentary still from a youth film project"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Investment</p>
              <h2>Family and event photography</h2>
            </div>
            <p className="muted" style={{ maxWidth: '32ch' }}>
              Wedding coverage starts at $2,500. Ask for the three packages (6, 8, or 10 hours). Digitals and online proofing are included.
            </p>
          </div>
          <div className="price-grid">
            <article className="price">
              <h3>Portraits</h3>
              <p className="amount">$700</p>
              <ul>
                <li>Up to 2 hours</li>
                <li>Up to 4 people</li>
                <li>Professional editing and online viewing</li>
                <li>10×10 book and digitals</li>
                <li>Travel up to 25 miles</li>
              </ul>
            </article>
            <article className="price">
              <h3>Events</h3>
              <p className="amount">$350 / hr</p>
              <ul>
                <li>2-hour minimum</li>
                <li>Commercial or family events</li>
                <li>Editing, online viewing, digitals</li>
                <li>Travel up to 25 miles</li>
              </ul>
            </article>
            <article className="price">
              <h3>Pop-up</h3>
              <p className="amount">$300</p>
              <ul>
                <li>Up to 1 hour</li>
                <li>For short windows and surprises</li>
                <li>Editing, online viewing, digitals</li>
                <li>Travel up to 15 miles</li>
              </ul>
            </article>
            <article className="price">
              <h3>Weddings</h3>
              <p className="amount">from $2,500</p>
              <ul>
                <li>Three packages: 6, 8, or 10 hours</li>
                <li>Professional editing</li>
                <li>Online proofing and digitals</li>
                <li>Travel up to 25 miles</li>
              </ul>
            </article>
          </div>
          <p className="muted" style={{ marginTop: '1.5rem' }}>
            We keep ownership of the work and license it to you for ordinary business use. Exclusive copyright is available for an additional fee. We do not mix commercial advertising types on the same day.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/contact">
              Request a date
            </Link>
            <a className="btn outline" href="https://proof.dbdcreativeagency.com/" target="_blank" rel="noreferrer">
              Client galleries
            </a>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap-narrow">
          <InquiryForm heading="Tell me the date and the story." />
        </div>
      </section>
    </main>
  )
}

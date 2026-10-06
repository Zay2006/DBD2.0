import InquiryForm from '../components/InquiryForm'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

export default function Contact() {
  return (
    <main id="main">
      <PageHero
        kicker="Contact"
        title="Let's work together."
        lede="Photography, videography, teaching artist residencies, creative writing, and board-game programs. South Jersey, Philadelphia, and travel by arrangement."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <InquiryForm />
          <div>
            <p className="kicker">Studio</p>
            <h2>Michael L. Clay</h2>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram @dbdcreativeagency
              </a>
              <br />
              <a href={site.proofing} target="_blank" rel="noreferrer">
                Client proofing galleries
              </a>
            </p>
            <p className="muted">
              Say who you are, the date if you have one, and what the story needs to do in the world. Michael will write back.
            </p>
            <img
              src="/images/michael.jpg"
              alt="Michael L. Clay"
              style={{ marginTop: '1.5rem', maxHeight: '28rem', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

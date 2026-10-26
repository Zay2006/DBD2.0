import OrigHero from '../components/OrigHero'
import { asset, site } from '../data/site'

export default function Contact() {
  return (
    <main id="main">
      <OrigHero image={asset('/images/michael.jpg')} title="Contact Me" />
      <section className="orig-section">
        <div className="orig-copy" style={{ textAlign: 'center' }}>
          <h2>Let&apos;s Work Together</h2>
          <p>Michael L. Clay</p>
          <p>Photography | Videography | Teaching Artist | Creative Writing | Board &amp; Card Game Development</p>
          <p>
            Email:{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            Phone: <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </section>
    </main>
  )
}

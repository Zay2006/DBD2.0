import WorkGrid from '../components/WorkGrid'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

export default function Work() {
  return (
    <main id="main">
      <PageHero
        kicker="Work"
        title="A monograph, not a mood board."
        lede="Documentary stills and films made with families, schools, theatres, and cultural institutions. Click any frame to open it."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <WorkGrid tallFirst />
          <p className="muted" style={{ marginTop: '2rem' }}>
            Full client galleries live at{' '}
            <a href={site.proofing} target="_blank" rel="noreferrer">
              proof.dbdcreativeagency.com
            </a>
            . Films and spoken-word pieces are on{' '}
            <a href={site.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

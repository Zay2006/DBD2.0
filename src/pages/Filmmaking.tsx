import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { filmProjects } from '../data/original'
import { asset } from '../data/site'

const types = [
  { title: 'Commercial', body: 'Capture the essence of your organization’s story to captivate your target market' },
  { title: 'Interviews', body: "Visual commentary conducted to enhance your brand's solidity to your consumers" },
  { title: 'Performances', body: 'Reach your audience through programming and performance' },
  { title: 'Lifestyle', body: "I love capturing families' moments in time. It brings a warmness to their hearts and memories that last." },
]

export default function Filmmaking() {
  return (
    <main id="main">
      <OrigHero
        image={asset('/images/garry.jpg')}
        title="Filmmaking"
        subtitle="Types of Video Production"
        ctas={[{ label: 'Rate Packages', to: '/packages' }]}
      />
      <section className="orig-section">
        <div className="orig-copy" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Commercial, Interview, Lifestyle &amp; Social Media Intro</h2>
        </div>
        <div className="orig-grid">
          {types.map((item) => (
            <article className="orig-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="orig-section alt">
        <div className="orig-copy">
          {filmProjects.map((item) => (
            <p key={item.title}>
              <strong>{item.title}</strong>
              <br />
              {item.role}
            </p>
          ))}
        </div>
      </section>
      <section className="orig-band">
        <h2>We would love to learn more about YOUR Story!!!!</h2>
        <div style={{ marginTop: '1.2rem' }}>
          <Link className="orig-btn ghost" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}

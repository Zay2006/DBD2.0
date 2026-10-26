import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { asset, site } from '../data/site'

const points = [
  'Alleviates writing anxiety.',
  'The starter kit to creative writing.',
  'Creative writing through your own lens.',
  'An enrichment and learning assessment tool for professionals.',
  'Helps its players think outside the box (ELA Writing, Vocabulary & SEL).',
  'Develop future script writers.',
  'Child & parent engagement.',
  'Bringing families together to share stories.',
  'Fun for the entire family.',
]

export default function StoryDriven() {
  return (
    <main id="main">
      <OrigHero image={asset('/images/story-cards.jpg')} title="Story Driven" />
      <section className="orig-section">
        <div className="orig-copy" style={{ textAlign: 'center' }}>
          <h2>A fun, educational and interactive board game to aid different levels of writers at their pace.</h2>
          <div className="orig-grid" style={{ marginTop: '2rem', textAlign: 'left' }}>
            <div className="orig-card">
              <h3>For All Ages</h3>
              <p>4–6 Players</p>
            </div>
            <div className="orig-card">
              <h3>30–60 Minutes</h3>
              <p>Over 10 types of gameplay</p>
            </div>
          </div>
          <ul className="orig-list" style={{ marginTop: '1.5rem', textAlign: 'left' }}>
            {points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <blockquote style={{ marginTop: '2rem', fontStyle: 'italic', color: '#333' }}>
            “What I really love is that this is a learning tool. This is going to get our students excited for writing!!! They will be able to grapple with vocabulary and themes. You could customize the play style to your classroom needs.”
          </blockquote>
          <div className="orig-hero-ctas" style={{ marginTop: '2rem' }}>
            <a className="orig-btn solid" href={site.storyDriven}>
              Visit the game site
            </a>
            <Link className="orig-btn solid" to="/shop" style={{ background: '#fff', color: '#207cbe', border: '1px solid #207cbe' }}>
              Shop
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

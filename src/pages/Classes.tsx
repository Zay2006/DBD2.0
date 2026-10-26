import { Link } from 'react-router-dom'
import OrigHero from '../components/OrigHero'
import { asset } from '../data/site'

export default function Classes() {
  return (
    <main id="main">
      <OrigHero
        image={asset('/images/avs.jpg')}
        title="The Art of Visual Storytelling TM"
        ctas={[{ label: 'Contact Us', to: '/contact' }]}
      />
      <section className="orig-section">
        <div className="orig-copy">
          <h2>The Art of Visual Storytelling TM</h2>
          <p>
            The Art of Visual Storytelling TM is a program that develops and enhances student understanding of English Language Arts (ELA) through creative writing and film production right in their classroom. Each section of our customizable curriculum is met with an interactive component to cultivate students’ creative and critical thinking. This is accomplished through both individual and group projects.
          </p>
          <p className="orig-kicker">Features</p>
          <ul className="orig-list">
            <li>AVS is a standalone curriculum</li>
            <li>Options: can align with your curriculum</li>
            <li>Uses SEL (Social Emotional Learning) techniques and tools</li>
          </ul>
        </div>
      </section>
      <section className="orig-band">
        <h2>The endless possibilities...</h2>
      </section>
      <section className="orig-section">
        <div className="orig-copy">
          <h2>Cooper&apos;s Poynt Family School</h2>
          <p>
            Here&apos;s an introduction to what the students created with the Art of Visual Storytelling TM at Cooper&apos;s Poynt Family School.
          </p>
          <img src={asset('/images/avs.jpg')} alt="Students in The Art of Visual Storytelling" />
        </div>
      </section>
      <section className="orig-band">
        <h2>Interested in having this class at your school?</h2>
        <p>Contact me to set an appointment for a presentation!</p>
        <div style={{ marginTop: '1.2rem' }}>
          <Link className="orig-btn ghost" to="/contact">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  )
}

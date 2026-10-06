import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const faqs = [
  {
    q: 'Is this a digital game?',
    a: 'No. Story Driven is a physical board game with cards. There is also a life-size 1,200 square-foot version that travels for family events.',
  },
  {
    q: 'What grade is it for?',
    a: 'It is not locked to a grade. The game meets players at their writing level, from early emergent to fluent, with more than ten types of play including practice cards.',
  },
  {
    q: 'Is it tied to a curriculum?',
    a: 'It is a standalone enrichment and assessment tool. It can sit beside any ELA, SEL, or counseling curriculum. Bring your own prompt, play, then return to the game.',
  },
  {
    q: 'Do you have to finish a story in six minutes?',
    a: 'No. Players write throughout the whole game. It is not meant to be rushed.',
  },
  {
    q: 'Do you offer professional development?',
    a: 'Yes. Michael leads PD for teachers, counselors, and teaching artists on using Story Driven in classrooms and family programs. Write to book a date.',
  },
]

const states = [
  'Alabama',
  'Connecticut',
  'Illinois',
  'Indiana',
  'Maryland',
  'New Jersey',
  'New York',
  'North Carolina',
  'Ohio',
  'Pennsylvania',
  'Tennessee',
  'Virginia',
]

export default function StoryDriven() {
  return (
    <main id="main">
      <PageHero
        kicker="Story Driven"
        title="Unlocking writer's block — at the table and on the lawn."
        lede="A fun, educational board game that helps different levels of writers work at their own pace. Thirty to sixty minutes. More than ten ways to play."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <img
            src="/images/story-cards.jpg"
            alt="Story Driven board and cards"
          />
          <div>
            <p className="kicker">The tabletop game</p>
            <h2>Writing through your own lens.</h2>
            <ul>
              <li>Alleviates writing anxiety</li>
              <li>Starter kit for creative writing</li>
              <li>ELA writing, vocabulary, and SEL</li>
              <li>Child and parent engagement</li>
              <li>Assessment tool for professionals</li>
              <li>A path toward script writing</li>
            </ul>
            <div className="stat-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="stat">
                <b>30–60 min</b>
                <span>Typical play</span>
              </div>
              <div className="stat">
                <b>4–6</b>
                <span>Players</span>
              </div>
            </div>
            <div className="btn-row">
              <Link className="btn" to="/shop">
                Story Driven for professionals · $300
              </Link>
              <Link className="btn outline" to="/contact">
                Book PD or a family event
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split reverse">
          <div>
            <p className="kicker">Shining a Light on Our Stories</p>
            <h2>Families become the pieces.</h2>
            <p className="lede">
              In summer 2026 Michael and his wife ran a three-part series on a life-size board. Families walked it, wrote, and filmed their own stories. The big board is now on the road.
            </p>
            <p>
              It is built for family conversation: roots, grief, humor, and the thing nobody has said yet.
            </p>
          </div>
          <img
            src="/images/story-life.jpg"
            alt="Life-sized Story Driven board on a lawn"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">In play across</p>
          <h2 style={{ marginBottom: '1.2rem' }}>More than ten states</h2>
          <div className="states">
            {states.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap-narrow faq">
          <p className="kicker">Questions</p>
          <h2 style={{ marginBottom: '1.4rem' }}>Told by its players</h2>
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}

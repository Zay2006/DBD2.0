import OrigHero from '../components/OrigHero'
import { asset, site } from '../data/site'

export default function Books() {
  return (
    <main id="main">
      <OrigHero image={asset('/images/book-ifound.jpg')} title="Book" />
      <section className="orig-section">
        <div className="orig-copy">
          <img src={asset('/images/book-cover.jpg')} alt="I Found A Reason To Speak cover" style={{ maxWidth: '18rem', margin: '0 auto 1.5rem' }} />
          <h2>I Found A Reason To Speak: Oneness for a Generation</h2>
          <p>
            is a picturesque collection of poems, the author curated in his walk, observing nature’s conservation to build a stronger bond with his family. The poems reflect how his words and actions changed when he took the time to listen and engage.
          </p>
          <p>
            One of the author’s mentors told him, “Attitudes, beliefs and behaviors are the most difficult things to change about the human condition. They are the most critical things we need to change as a human collective in order to move forward.”
          </p>
          <p>
            The hardest relationships to build can be with family. After so many failed attempts, I gave up. I spent years writing off and on in my journal. Mentors helped me gravitate back towards my family and I’m glad they did.
          </p>
          <p>
            <strong>Start the conversation.</strong>
          </p>
          <p>
            “I Found a Reason to Speak profoundly guides the reader on a journey through the lens of the author&apos;s storytelling seasoned with photographic testimony.” — Karen “Queen Nur” Abdul-Malik
          </p>
          <p>
            “Your book brought me much peace and inspiration. It was written very clearly with much emotion and gave a very positive outlook for the future of families.” — Mrs. Ortiz
          </p>
          <a className="orig-btn solid" href={site.amazonBook} target="_blank" rel="noreferrer">
            Purchase on Amazon
          </a>
        </div>
      </section>
      <section className="orig-band">
        <h2>Events</h2>
        <p>Stay updated</p>
      </section>
      <section className="orig-section">
        <div className="orig-copy">
          <p>
            <strong>Story Driven: Shining A Light Day 2</strong> — Piece Studios, July 12, 2026
          </p>
          <p>
            <strong>Scenes on Paper: Multigenerational Scrapbooking</strong> — African American Museum of Philadelphia, March 31, 2026
          </p>
          <p>
            <strong>Archiving Our Family Stories</strong> — MAKUU Center, March 19, 2026
          </p>
          <p>
            <strong>1st Book Signing was a success!!!</strong> — December 7, 2024
          </p>
          <img src={asset('/images/book-signing.jpg')} alt="First book signing" />
        </div>
      </section>
    </main>
  )
}

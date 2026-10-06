import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

const products = [
  {
    title: "Story Driven for Professionals",
    price: '$300',
    image: '/images/story-board.png',
    alt: 'Story Driven board game',
    body: 'The physical writing game for classrooms, counselors, and teaching artists. Meets students at their writing level. Aligns with ELA, writing, and SEL.',
    to: '/contact',
    cta: 'Inquire to order',
  },
  {
    title: "Finding My Niche' e-book",
    price: '$19.99',
    image: '/images/finding-niche.jpg',
    alt: "Cover of Finding My Niche ebook",
    body: 'A look at the photography fields Michael tried, and the troubles on the way to a practice that actually fits.',
    href: `mailto:${site.email}?subject=${encodeURIComponent("Order Finding My Niche' e-book")}`,
    cta: 'Email to purchase',
  },
  {
    title: "Finding My Niche' class",
    price: '$99.99',
    image: '/images/finding-niche.jpg',
    alt: "Finding My Niche class artwork",
    body: 'Self-paced class for hobbyists and freelancers: camera settings, lighting, niches, and the long apprenticeship of getting good.',
    href: `mailto:${site.email}?subject=${encodeURIComponent("Order Finding My Niche' class")}`,
    cta: 'Email to enroll',
  },
]

export default function Shop() {
  return (
    <main id="main">
      <PageHero
        kicker="Shop"
        title="Games, classes, and a book you can put on the table."
        lede="Orders for Story Driven and the photography class go through the studio so Michael can match the right kit or PD date. The family book is on Amazon."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="product-grid">
            {products.map((item) => (
              <article className="product" key={item.title}>
                <img src={item.image} alt={item.alt} />
                <div className="product-body">
                  <h2>{item.title}</h2>
                  <p className="amount">{item.price}</p>
                  <p>{item.body}</p>
                  {'to' in item && item.to ? (
                    <Link className="btn" to={item.to} style={{ marginTop: 'auto' }}>
                      {item.cta}
                    </Link>
                  ) : (
                    <a className="btn" href={item.href} style={{ marginTop: 'auto' }}>
                      {item.cta}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="muted" style={{ marginTop: '2rem' }}>
            Looking for <em>I Found a Reason to Speak</em>?{' '}
            <a href={site.amazonBook} target="_blank" rel="noreferrer">
              Buy it on Amazon
            </a>
            , or <Link to="/books">read about the book</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}

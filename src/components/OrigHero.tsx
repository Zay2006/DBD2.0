import { Link } from 'react-router-dom'

type Cta = { label: string; to?: string; href?: string }

type OrigHeroProps = {
  image: string
  kicker?: string
  title: string
  subtitle?: string
  ctas?: Cta[]
}

export default function OrigHero({ image, kicker, title, subtitle, ctas }: OrigHeroProps) {
  return (
    <section className="orig-hero">
      <img src={image} alt="" />
      <div className="orig-hero-copy">
        {kicker ? <p className="orig-kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="orig-sub">{subtitle}</p> : null}
        {ctas && ctas.length > 0 ? (
          <div className="orig-hero-ctas">
            {ctas.map((cta) =>
              cta.href ? (
                <a key={cta.label} className="orig-btn ghost" href={cta.href}>
                  {cta.label}
                </a>
              ) : (
                <Link key={cta.label} className="orig-btn ghost" to={cta.to ?? '/'}>
                  {cta.label}
                </Link>
              ),
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}

type PageHeroProps = {
  kicker: string
  title: string
  lede: string
}

export default function PageHero({ kicker, title, lede }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </header>
  )
}

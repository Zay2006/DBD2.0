import { useEffect, useMemo, useState } from 'react'
import { type WorkItem, work } from '../data/site'

const filters = ['All', 'Photography', 'Film', 'Community'] as const

type WorkGridProps = {
  limit?: number
  tallFirst?: boolean
}

export default function WorkGrid({ limit, tallFirst = false }: WorkGridProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [active, setActive] = useState<WorkItem | null>(null)

  const items = useMemo(() => {
    const list =
      filter === 'All' ? work : work.filter((item) => item.category === filter)
    return typeof limit === 'number' ? list.slice(0, limit) : list
  }, [filter, limit])

  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      {limit ? null : (
        <div className="filters" role="tablist" aria-label="Filter work">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              className={name === filter ? 'chip active' : 'chip'}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}
      <div className="work-grid">
        {items.map((item, index) => (
          <button
            type="button"
            key={`${item.src}-${item.title}`}
            className={tallFirst && index % 5 === 0 ? 'work-card tall' : 'work-card'}
            onClick={() => setActive(item)}
          >
            <img src={item.src} alt={item.alt} />
            <span className="work-card-caption">
              <h3>{item.title}</h3>
              <p>
                {item.caption} · {item.category}
              </p>
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <p>
              {active.title} — {active.caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}

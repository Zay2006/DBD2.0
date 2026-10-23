import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset, mapNodes, partners, testimonials } from '../data/site'

const INTRO_SRC = asset('/audio/dbd-intro.mp3')
const INTRO_KEY = 'dbd-intro-seen'

const NODE_POINTS: Record<string, { x: number; y: number }> = {
  about: { x: 50, y: 14 },
  work: { x: 18, y: 26 },
  hire: { x: 82, y: 26 },
  programs: { x: 11, y: 52 },
  story: { x: 89, y: 52 },
  books: { x: 20, y: 78 },
  shop: { x: 80, y: 78 },
  contact: { x: 50, y: 90 },
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [gateOpen, setGateOpen] = useState(() => {
    if (typeof window === 'undefined') return true
    return sessionStorage.getItem(INTRO_KEY) !== '1'
  })
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(74)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => setCurrent(audio.currentTime)
    const onMeta = () => setDuration(audio.duration || 74)
    const onEnd = () => setPlaying(false)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnd)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnd)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  function markSeen() {
    sessionStorage.setItem(INTRO_KEY, '1')
    setGateOpen(false)
  }

  async function playIntro() {
    markSeen()
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    try {
      await audio.play()
    } catch {
      setPlaying(false)
    }
  }

  function skipIntro() {
    audioRef.current?.pause()
    markSeen()
  }

  async function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
      } catch {
        setPlaying(false)
      }
    } else {
      audio.pause()
    }
  }

  function toggleMute() {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !audio.muted
    setMuted(audio.muted)
  }

  return (
    <main id="main" className="home-map">
      <audio ref={audioRef} src={INTRO_SRC} preload="auto" />

      {gateOpen ? (
        <section className="intro-gate" aria-label="Studio introduction">
          <img
            src={asset('/images/hero-loc.jpg')}
            alt="Community members soul line dancing, photographed for the Library of Congress"
          />
          <div className="intro-gate-copy">
            <p className="museum-label">Driven by Design · 1:14</p>
            <h1>Listen first.</h1>
            <p className="lede">
              A one-minute introduction from Michael Clay, then a map of every door in the studio.
            </p>
            <div className="btn-row">
              <button type="button" className="btn" onClick={() => void playIntro()}>
                Play the intro
              </button>
              <button type="button" className="btn ghost" onClick={skipIntro}>
                Skip to the map
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="mindmap" aria-label="Studio mind map">
          <img
            className="mindmap-bg"
            src={asset('/images/hero-loc.jpg')}
            alt=""
          />
          <svg className="mindmap-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {mapNodes.map((node) => {
              const point = NODE_POINTS[node.id]
              if (!point) return null
              return (
                <path
                  key={node.id}
                  d={`M 50 50 Q ${50 + (point.x - 50) * 0.35} ${point.y < 50 ? point.y + 8 : point.y - 8} ${point.x} ${point.y}`}
                />
              )
            })}
          </svg>

          <div className="mindmap-hub">
            <span className="brand-mark">DBD</span>
            <p className="kicker">The studio</p>
            <h1>Driven by Design</h1>
            <p>Pick a branch. Every path is a way into the work.</p>
          </div>

          {mapNodes.map((node) => {
            const point = NODE_POINTS[node.id]
            const className = `mindmap-node mindmap-node-${node.id}`
            const body = (
              <>
                <span className="kicker">{node.kicker}</span>
                <strong>{node.label}</strong>
                <span>{node.hint}</span>
              </>
            )
            const style = {
              left: `${point.x}%`,
              top: `${point.y}%`,
            }
            if (node.href) {
              return (
                <a
                  key={node.id}
                  className={className}
                  style={style}
                  href={node.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {body}
                </a>
              )
            }
            return (
              <Link key={node.id} className={className} style={style} to={node.to ?? '/'}>
                {body}
              </Link>
            )
          })}

          <div className="audio-dock">
            <button type="button" className="chip" onClick={() => void togglePlay()}>
              {playing ? 'Pause intro' : 'Play intro'}
            </button>
            <span className="audio-time">
              {formatTime(current)} / {formatTime(duration)}
            </span>
            <button type="button" className="chip" onClick={toggleMute}>
              {muted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        </section>
      )}

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">From the people in the room</p>
              <h2>Proof, not adjectives.</h2>
            </div>
          </div>
          <div className="quotes">
            {testimonials.slice(0, 3).map((item) => (
              <blockquote className="quote" key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section ink">
        <div className="wrap cta-band">
          <div>
            <p className="kicker">Places the work has lived</p>
            <h2>Smithsonian. Library of Congress. Your classroom next.</h2>
            <div className="partners" style={{ marginTop: '1.4rem' }}>
              {partners.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
          <Link className="btn" to="/contact">
            Start a project
          </Link>
        </div>
      </section>
    </main>
  )
}

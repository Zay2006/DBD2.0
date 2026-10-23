import { useEffect, useMemo, useRef, useState, type PointerEvent } from 'react'
import { asset, mapClusters, mapNodes, site } from '../data/site'

const INTRO_SRC = asset('/audio/dbd-intro.mp3')
const HERO_SRC = asset('/images/hero-loc.jpg')
const RING = 2 * Math.PI * 21

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function branchPath(x: number, y: number) {
  const midX = 50 + (x - 50) * 0.34
  const midY = y < 50 ? y + 9 : y - 9
  return `M 50 50 Q ${midX.toFixed(2)} ${midY.toFixed(2)} ${x} ${y}`
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const stageRef = useRef<HTMLElement | null>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(74)
  const [hovered, setHovered] = useState<string | null>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [reduceMotion, setReduceMotion] = useState(false)

  const active = mapNodes.find((node) => node.id === hovered) ?? null
  const progress = duration > 0 ? Math.min(current / duration, 1) : 0

  const dust = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: 8 + ((i * 17) % 84),
        y: 10 + ((i * 23) % 78),
        delay: (i * 0.7) % 6,
        duration: 10 + (i % 5) * 2,
      })),
    [],
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    const enter = window.setTimeout(() => setReady(true), 40)
    document.body.classList.add('on-home')
    return () => {
      media.removeEventListener('change', sync)
      window.clearTimeout(enter)
      document.body.classList.remove('on-home')
    }
  }, [])

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

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || window.innerWidth <= 960) return
    const rect = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    })
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

  const bgShift = reduceMotion
    ? undefined
    : {
        transform: `translate3d(${pointer.x * -18}px, ${pointer.y * -14}px, 0) scale(1.08)`,
      }

  return (
    <main
      id="main"
      ref={stageRef}
      className={[
        'home-stage',
        ready ? 'is-ready' : '',
        playing ? 'is-playing' : '',
        active ? 'is-focused' : '',
        reduceMotion ? 'reduce-motion' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        setHovered(null)
        setPointer({ x: 0, y: 0 })
      }}
    >
      <audio ref={audioRef} src={INTRO_SRC} preload="auto" />

      <div className="stage-bg" style={bgShift}>
        <img src={HERO_SRC} alt="" />
        {mapNodes.map((node) => (
          <img
            key={node.id}
            src={node.image}
            alt=""
            className={active?.id === node.id ? 'is-live' : ''}
          />
        ))}
      </div>
      <div className="stage-veil" />
      <div className="stage-dust" aria-hidden="true">
        {dust.map((spec) => (
          <span
            key={spec.id}
            style={{
              left: `${spec.x}%`,
              top: `${spec.y}%`,
              animationDelay: `${spec.delay}s`,
              animationDuration: `${spec.duration}s`,
            }}
          />
        ))}
      </div>

      <section className="mindmap" aria-label="Studio mind map">
        <svg className="mindmap-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {mapNodes.map((node, index) => (
            <path
              key={node.id}
              d={branchPath(node.x, node.y)}
              pathLength={1}
              className={active?.id === node.id ? 'is-active' : ''}
              style={{ animationDelay: `${180 + index * 70}ms` }}
            />
          ))}
        </svg>

        <div className="map-hub">
          <div className="hub-ring" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <circle className="hub-ring-track" cx="24" cy="24" r="21" />
              <circle
                className="hub-ring-progress"
                cx="24"
                cy="24"
                r="21"
                style={{ strokeDashoffset: RING * (1 - (playing ? progress : 0)) }}
              />
            </svg>
            <img className="hub-logo" src={asset('/images/dbd-logo.png')} alt="" />
          </div>
          <p className="kicker">{active ? active.kicker : 'Product & Services'}</p>
          <h1>Driven by Design</h1>
          <p className="hub-line">
            {active
              ? active.hint
              : 'For individual(s), orgs and businesses who service children and families.'}
          </p>
          <div className="hub-audio">
            <button
              type="button"
              className="intro-play"
              onClick={() => void togglePlay()}
              aria-pressed={playing}
            >
              {playing ? 'Pause intro' : 'Play the intro'}
            </button>
            <span className="audio-time">
              {formatTime(current)} / {formatTime(duration)}
            </span>
            <button type="button" className="hub-chip" onClick={toggleMute}>
              {muted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        </div>

        {mapClusters.map((cluster) => (
          <div className={`map-cluster map-cluster-${cluster.id}`} key={cluster.id}>
            <p className="cluster-label">{cluster.label}</p>
            {mapNodes
              .filter((node) => node.cluster === cluster.id)
              .map((node, index) => (
                <a
                  key={node.id}
                  className={`mindmap-node mindmap-node-${node.id}${active?.id === node.id ? ' is-active' : ''}`}
                  href={node.href}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    animationDelay: `${280 + index * 80}ms`,
                  }}
                  onPointerEnter={() => setHovered(node.id)}
                  onFocus={() => setHovered(node.id)}
                  onPointerLeave={() => setHovered((id) => (id === node.id ? null : id))}
                  onBlur={() => setHovered((id) => (id === node.id ? null : id))}
                >
                  <span className="kicker">{node.kicker}</span>
                  <strong>{node.label}</strong>
                  <span>{node.hint}</span>
                </a>
              ))}
          </div>
        ))}
      </section>

      <p className="stage-note">
        Opens pages on {site.live.replace('https://', '')}
      </p>
    </main>
  )
}

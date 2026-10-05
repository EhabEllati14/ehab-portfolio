import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FiChevronDown, FiChevronUp, FiPause, FiPlay } from 'react-icons/fi'

const stops = [
  { label: 'Age 5', text: 'Math, puzzles, and logic — the obsession started early. Not just playing games, but understanding the rules behind them.' },
  { label: 'Age 15', text: 'Led a volunteer travel team to Cyprus. First real lesson in coordinating people, handling pressure, and earning trust as a leader.' },
  { label: 'High School', text: 'Chose the scientific track for physics and math. Scored 99 in the national final exam, then chose Computer Science over medicine — knowing where the future was.' },
  { label: 'Year 3', text: 'Added a Business Administration minor. Because building great products is not just about code — it is about understanding markets, people, and strategy.' },
  { label: 'CS Club', text: 'Elected Team Lead of the Computer Science club and IT Student Ambassador. Ran career events, startup workshops, and helped students go from dreaming to executing.' },
  { label: 'Startup', text: 'Founded a company at 20. Built the MVP. Secured funding from Switzerland. Put it on hold to finish university — but never stopped thinking like a founder.' },
  { label: 'Erasmus+', text: 'Selected for the Erasmus+ Exchange Program in Messina, Italy. Earned the Honor List abroad while building real cross-cultural skills and friendships across Europe.' },
]

const ROW_H = 128
const NODE_Y = 14
const DRIVE_MS = 900
const DWELL_MS = 2600
const EASE = 'cubic-bezier(.4,0,.2,1)'

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-journey-copper'
const ctl = `w-12 h-12 inline-flex items-center justify-center rounded-xl border border-journey-cream/[0.08] text-journey-muted hover:border-journey-cream/[0.28] hover:text-journey-ink transition-colors duration-200 ${focusRing}`

type Dir = 'down' | 'up'

function Rover({ moving, dir }: { moving: boolean; dir: Dir }) {
  const wheel = moving ? 'rover-wheel-spin' : ''

  return (
    <svg width="52" height="64" viewBox="0 0 52 64" fill="none" className="overflow-visible">
      {/* Dust trails behind the rover, so it flips below the wheels when driving up */}
      {moving && (
        <g transform={dir === 'up' ? 'translate(0 64) scale(1 -1)' : undefined} className="stroke-journey-muted" strokeWidth="1.5" strokeLinecap="round">
          <line className="rover-dust" x1="14" y1="-4" x2="14" y2="-10"/>
          <line className="rover-dust [animation-delay:.15s]" x1="26" y1="-6" x2="26" y2="-14"/>
          <line className="rover-dust [animation-delay:.3s]" x1="38" y1="-4" x2="38" y2="-10"/>
        </g>
      )}
      <g className={moving ? 'rover-bob' : undefined}>
        <line x1="26" y1="4" x2="26" y2="13" className="stroke-journey-cream" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="4" r="3.2" className={`fill-journey-copper stroke-journey-bg ${moving ? '' : 'rover-tip-glow'}`} strokeWidth="1.5"/>
        <rect x="9" y="12" width="34" height="23" rx="8" className="fill-journey-cream stroke-journey-bg" strokeWidth="1.5"/>
        <rect x="13" y="17" width="26" height="12" rx="6" className="fill-journey-bg"/>
        {moving ? (
          <>
            <circle cx="20.5" cy="23" r="2.6" className="fill-journey-copper"/>
            <circle cx="31.5" cy="23" r="2.6" className="fill-journey-copper"/>
          </>
        ) : (
          <>
            <path d="M17.5 24.5 Q20.5 20 23.5 24.5" className="stroke-journey-copper" strokeWidth="2" strokeLinecap="round"/>
            <path d="M28.5 24.5 Q31.5 20 34.5 24.5" className="stroke-journey-copper" strokeWidth="2" strokeLinecap="round"/>
          </>
        )}
        <rect x="22" y="35" width="8" height="4" className="fill-journey-muted"/>
      </g>
      <rect x="11" y="39" width="30" height="14" rx="5" className="fill-journey-cream stroke-journey-bg" strokeWidth="1.5"/>
      <line x1="22" y1="44" x2="30" y2="44" className="stroke-journey-deep" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="22" y1="48" x2="30" y2="48" className="stroke-journey-deep" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16.5" cy="46" r="2" className="fill-journey-ink stroke-journey-deep" strokeWidth="1"/>
      <circle cx="35.5" cy="46" r="2" className="fill-journey-ink stroke-journey-deep" strokeWidth="1"/>
      <circle cx="7" cy="50" r="7" className="fill-journey-tire stroke-journey-cream" strokeWidth="1.5"/>
      <circle cx="45" cy="50" r="7" className="fill-journey-tire stroke-journey-cream" strokeWidth="1.5"/>
      <g className={`stroke-journey-muted ${wheel}`} strokeWidth="1.2" strokeLinecap="round">
        <line x1="2" y1="50" x2="12" y2="50"/>
        <line x1="4.5" y1="45.67" x2="9.5" y2="54.33"/>
        <line x1="4.5" y1="54.33" x2="9.5" y2="45.67"/>
      </g>
      <g className={`stroke-journey-muted ${wheel}`} strokeWidth="1.2" strokeLinecap="round">
        <line x1="40" y1="50" x2="50" y2="50"/>
        <line x1="42.5" y1="45.67" x2="47.5" y2="54.33"/>
        <line x1="42.5" y1="54.33" x2="47.5" y2="45.67"/>
      </g>
      <circle cx="7" cy="50" r="1.6" className="fill-journey-cream"/>
      <circle cx="45" cy="50" r="1.6" className="fill-journey-cream"/>
    </svg>
  )
}

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const moveTimer = useRef<number>()
  const inView = useInView(sectionRef, { margin: '-20% 0px' })
  const reduceMotion = useReducedMotion()

  const [active, setActive] = useState(0)
  const [moving, setMoving] = useState(false)
  const [dir, setDir] = useState<Dir>('down')
  const [playing, setPlaying] = useState(!reduceMotion)
  const [tops, setTops] = useState(() => stops.map((_, i) => i * ROW_H))
  const n = stops.length

  const go = (i: number) => {
    if (i === active) return
    window.clearTimeout(moveTimer.current)
    setDir(i > active ? 'down' : 'up')
    setActive(i)
    if (reduceMotion) return
    setMoving(true)
    moveTimer.current = window.setTimeout(() => setMoving(false), DRIVE_MS)
  }

  const manual = (i: number) => {
    setPlaying(false)
    go(i)
  }

  const togglePlay = () => {
    if (!playing) go((active + 1) % n)
    setPlaying(!playing)
  }

  // Tour only advances while the section is on screen
  useEffect(() => {
    if (!playing || !inView) return
    const t = window.setTimeout(() => go((active + 1) % n), DWELL_MS)
    return () => window.clearTimeout(t)
  }, [playing, inView, active])

  useEffect(() => () => window.clearTimeout(moveTimer.current), [])

  // Rows grow past ROW_H when text wraps on narrow screens, so follow their real positions
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return
    const measure = () => setTops(Array.from(list.children, el => (el as HTMLElement).offsetTop))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(list)
    return () => ro.disconnect()
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="py-28 sm:py-36 bg-journey-bg text-journey-cream" aria-label="Journey">
      <div className="section-wrap grid lg:grid-cols-[380px_minmax(0,1fr)] gap-x-24 gap-y-20">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          className="flex flex-col gap-3 self-start lg:sticky lg:top-28">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-journey-copper">Journey</p>
          <h2 className="display-lg text-journey-ink">The road<br /><span className="bg-gradient-to-r from-journey-cream to-journey-copper bg-clip-text text-transparent">so far.</span></h2>
          <p className="mt-7 text-base leading-[26px] text-journey-body max-w-lg">Seven stops, one route. Follow the rover from the first puzzle to the latest project.</p>

          <div className="mt-10 flex items-center gap-3">
            <button onClick={togglePlay}
              className={`inline-flex items-center gap-2 h-12 px-7 rounded-2xl bg-journey-cream text-journey-deep font-heading font-bold text-sm hover:bg-journey-ink hover:scale-105 transition-all duration-200 ${focusRing}`}>
              {playing ? <FiPause size={16} aria-hidden="true"/> : <FiPlay size={16} aria-hidden="true"/>}
              {playing ? 'Pause Tour' : 'Play Tour'}
            </button>
            <button onClick={() => manual((active - 1 + n) % n)} aria-label="Previous stop" className={ctl}>
              <FiChevronUp size={16} aria-hidden="true"/>
            </button>
            <button onClick={() => manual((active + 1) % n)} aria-label="Next stop" className={ctl}>
              <FiChevronDown size={16} aria-hidden="true"/>
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-journey-cream/5 flex items-baseline gap-4" aria-live={playing ? 'off' : 'polite'}>
            <div className="stat-num text-journey-copper">{String(active + 1).padStart(2, '0')}</div>
            <div className="flex flex-col gap-0.5">
              <div className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-journey-muted">Stop of {String(n).padStart(2, '0')}</div>
              <div className="font-heading font-bold text-lg leading-snug text-journey-ink">{stops[active].label}</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.2, duration:0.6 }}
          className="relative ml-7 lg:ml-0 pl-12 lg:pl-16">
          <div className="absolute left-0 top-[14px] w-0.5 -ml-px rounded-sm bg-journey-cream/[0.12]" style={{ height: tops[n - 1] }} aria-hidden="true"/>
          <div className="absolute left-0 top-[14px] w-0.5 -ml-px rounded-sm bg-journey-copper" style={{ height: tops[active], transition: `height ${DRIVE_MS}ms ${EASE}` }} aria-hidden="true"/>

          <ol ref={listRef}>
            {stops.map((s, i) => (
              <li key={s.label} className="group relative min-h-[128px] pb-5">
                <div className={`absolute -left-[53px] lg:-left-[69px] top-[9px] w-2.5 h-2.5 rounded-full border-2 ${i < active ? 'bg-journey-copper border-journey-copper' : 'bg-journey-bg border-journey-cream/[0.28]'} ${i === active ? 'opacity-0' : ''}`} aria-hidden="true"/>
                <button onClick={() => manual(i)} aria-current={i === active ? 'step' : undefined}
                  className={`inline-flex items-center h-7 px-3 rounded-full border text-[0.7rem] font-semibold tracking-[0.08em] transition-colors duration-[250ms] ${focusRing} ${i === active ? 'bg-journey-cream text-journey-deep border-journey-cream' : 'bg-journey-cream/[0.06] text-journey-copper border-journey-cream/20'}`}>
                  {s.label}
                </button>
                <p className={`mt-2.5 max-w-[480px] text-sm leading-relaxed transition-colors duration-[250ms] ${i === active ? 'text-journey-ink' : 'text-journey-muted group-hover:text-journey-body'}`}>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="absolute -left-[26px] top-0 w-[52px] h-16 pointer-events-none" aria-hidden="true"
            style={{ transform: `translateY(${tops[active] + NODE_Y - 46}px)`, transition: `transform ${DRIVE_MS}ms ${EASE}` }}>
            <Rover moving={moving} dir={dir}/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

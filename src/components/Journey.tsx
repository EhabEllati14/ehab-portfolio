import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { journeyStops } from '../data/journey'
import { useJourneyTour } from '../hooks/useJourneyTour'
import StopCounter from './journey/StopCounter'
import Timeline from './journey/Timeline'
import TourControls from './journey/TourControls'

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const inView = useInView(timelineRef, { margin: '-20% 0px' })
  const { active, moving, dir, playing, select, togglePlay } = useJourneyTour(journeyStops.length, inView)

  const n = journeyStops.length
  const stop = journeyStops[active]
  const controls = {
    playing,
    atStart: active === 0,
    atEnd: active === n - 1,
    onToggle: togglePlay,
    onPrev: () => select(active - 1),
    onNext: () => select(active + 1),
  }

  return (
    <section id="journey" className="py-28 sm:py-36 section-border bg-journey-bg text-journey-cream" aria-label="Journey">
      <div className="section-wrap grid lg:grid-cols-[380px_minmax(0,1fr)] gap-x-24 gap-y-10">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          className="flex flex-col gap-3 self-start lg:sticky lg:top-28">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-journey-copper">Journey</p>
          <h2 className="display-lg text-journey-ink">The road<br /><span className="bg-gradient-to-r from-journey-cream to-journey-copper bg-clip-text text-transparent">so far.</span></h2>
          <p className="mt-7 text-base leading-[26px] text-journey-body max-w-lg">Eight stops, one route. Follow the rover from the first puzzle to today.</p>

          <div className="hidden lg:block">
            <div className="mt-10">
              <TourControls {...controls}/>
            </div>
            <div className="mt-10 pt-6 border-t border-journey-cream/5">
              <StopCounter index={active} total={n} label={stop.label}/>
            </div>
          </div>
        </motion.div>

        <motion.div ref={timelineRef} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.2, duration:0.6 }}>
          {/* Below lg the columns stack, so the controls ride along with the timeline instead of scrolling away */}
          <div className="lg:hidden sticky top-16 z-20 -mx-6 px-6 py-3 mb-12 flex items-center justify-between gap-3 bg-journey-bg/95 backdrop-blur border-b border-journey-cream/5">
            <TourControls compact {...controls}/>
            <p className="font-heading font-bold text-sm text-journey-copper" aria-hidden="true">
              {String(active + 1).padStart(2, '0')} <span className="text-journey-muted">/ {String(n).padStart(2, '0')}</span>
            </p>
          </div>
          <Timeline stops={journeyStops} active={active} moving={moving} dir={dir} onSelect={select}/>
        </motion.div>

        <p className="sr-only" aria-live="polite">
          {playing ? '' : `Stop ${active + 1} of ${n}: ${stop.label}. ${stop.text}`}
        </p>
      </div>
    </section>
  )
}

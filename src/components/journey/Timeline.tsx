import { useLayoutEffect, useRef, useState } from 'react'
import type { JourneyStop } from '../../types'
import { DRIVE_MS, type Dir } from '../../hooks/useJourneyTour'
import Rover from './Rover'
import TimelineStop from './TimelineStop'

const NODE_Y = 14
const EASE = 'cubic-bezier(.4,0,.2,1)'

interface TimelineProps {
  stops: JourneyStop[]
  active: number
  moving: boolean
  dir: Dir
  onSelect: (index: number) => void
}

export default function Timeline({ stops, active, moving, dir, onSelect }: TimelineProps) {
  const listRef = useRef<HTMLOListElement>(null)
  const [tops, setTops] = useState(() => stops.map(() => 0))
  const last = stops.length - 1

  // Rows grow when text wraps on narrow screens, so follow their real positions
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return
    const measure = () => {
      const next = Array.from(list.children, el => (el as HTMLElement).offsetTop)
      setTops(prev => (prev.length === next.length && prev.every((t, i) => t === next[i]) ? prev : next))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(list)
    return () => ro.disconnect()
  }, [])

  // Only a drive animates; a re-measure after resize or font load snaps into place
  const drive = (prop: string) => (moving ? `${prop} ${DRIVE_MS}ms ${EASE}` : 'none')

  return (
    <div className="relative ml-7 lg:ml-0 pl-12 lg:pl-16">
      <div className="absolute left-0 top-[14px] w-0.5 -ml-px rounded-sm bg-journey-cream/[0.12]" style={{ height: tops[last] }} aria-hidden="true"/>
      <div className="absolute left-0 top-[14px] w-0.5 -ml-px rounded-sm bg-journey-copper" style={{ height: tops[active], transition: drive('height') }} aria-hidden="true"/>

      <ol ref={listRef}>
        {stops.map((s, i) => (
          <TimelineStop key={s.id} stop={s} index={i} total={stops.length} active={i === active} passed={i < active} onSelect={() => onSelect(i)}/>
        ))}
      </ol>

      <div className="absolute -left-[26px] top-0 w-[52px] h-16 pointer-events-none" aria-hidden="true"
        style={{ transform: `translateY(${tops[active] + NODE_Y - 46}px)`, transition: drive('transform') }}>
        <Rover moving={moving} dir={dir}/>
      </div>
    </div>
  )
}

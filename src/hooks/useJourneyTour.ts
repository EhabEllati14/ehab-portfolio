import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export const DRIVE_MS = 900
const DWELL_MS = 2600

export type Dir = 'down' | 'up'

export function useJourneyTour(count: number, inView: boolean) {
  const moveTimer = useRef<number>()
  const reduceMotion = useReducedMotion()

  const [active, setActive] = useState(0)
  const [moving, setMoving] = useState(false)
  const [dir, setDir] = useState<Dir>('down')
  const [playing, setPlaying] = useState(!reduceMotion)

  const go = (i: number) => {
    if (i === active) return
    window.clearTimeout(moveTimer.current)
    setDir(i > active ? 'down' : 'up')
    setActive(i)
    if (reduceMotion) return
    setMoving(true)
    moveTimer.current = window.setTimeout(() => setMoving(false), DRIVE_MS)
  }

  // Manual picks pause the tour and stop at the ends; only autoplay loops back to the start
  const select = (i: number) => {
    if (i < 0 || i >= count) return
    setPlaying(false)
    go(i)
  }

  const togglePlay = () => setPlaying(p => !p)

  // Tour only advances while the timeline is on screen
  useEffect(() => {
    if (!playing || !inView) return
    const t = window.setTimeout(() => go((active + 1) % count), DWELL_MS)
    return () => window.clearTimeout(t)
  }, [playing, inView, active])

  useEffect(() => () => window.clearTimeout(moveTimer.current), [])

  return { active, moving, dir, playing, select, togglePlay }
}

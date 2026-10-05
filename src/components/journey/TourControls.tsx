import { FiChevronDown, FiChevronUp, FiPause, FiPlay } from 'react-icons/fi'
import { focusRing } from './styles'

interface TourControlsProps {
  playing: boolean
  atStart: boolean
  atEnd: boolean
  compact?: boolean
  onToggle: () => void
  onPrev: () => void
  onNext: () => void
}

export default function TourControls({ playing, atStart, atEnd, compact, onToggle, onPrev, onNext }: TourControlsProps) {
  // aria-disabled rather than disabled, so keyboard focus is not dropped at either end of the route
  const step = `${compact ? 'w-10 h-10' : 'w-12 h-12'} inline-flex items-center justify-center rounded-xl border border-journey-copper/40 text-journey-muted hover:border-journey-copper hover:text-journey-ink transition-colors duration-200 aria-disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:hover:border-journey-copper/40 aria-disabled:hover:text-journey-muted ${focusRing}`

  return (
    <div className={`flex items-center ${compact ? 'gap-2' : 'gap-3'}`}>
      <button onClick={onToggle}
        className={`inline-flex items-center gap-2 ${compact ? 'h-10 px-5 rounded-xl' : 'h-12 px-7 rounded-2xl'} bg-journey-cream text-journey-deep font-heading font-bold text-sm hover:bg-journey-ink hover:scale-105 transition-all duration-200 ${focusRing}`}>
        {playing ? <FiPause size={16} aria-hidden="true"/> : <FiPlay size={16} aria-hidden="true"/>}
        {playing ? 'Pause Tour' : 'Play Tour'}
      </button>
      <button onClick={onPrev} aria-label="Previous stop" aria-disabled={atStart} className={step}>
        <FiChevronUp size={16} aria-hidden="true"/>
      </button>
      <button onClick={onNext} aria-label="Next stop" aria-disabled={atEnd} className={step}>
        <FiChevronDown size={16} aria-hidden="true"/>
      </button>
    </div>
  )
}

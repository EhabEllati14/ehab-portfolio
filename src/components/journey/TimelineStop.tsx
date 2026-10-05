import type { JourneyStop } from '../../types'
import { focusRing } from './styles'

interface TimelineStopProps {
  stop: JourneyStop
  index: number
  total: number
  active: boolean
  passed: boolean
  onSelect: () => void
}

export default function TimelineStop({ stop, index, total, active, passed, onSelect }: TimelineStopProps) {
  const textId = `journey-stop-${stop.id}`

  return (
    <li className="group relative min-h-[128px] pb-5">
      <div className={`absolute -left-[53px] lg:-left-[69px] top-[9px] w-2.5 h-2.5 rounded-full border-2 ${passed ? 'bg-journey-copper border-journey-copper' : 'bg-journey-bg border-journey-cream/[0.28]'} ${active ? 'opacity-0' : ''}`} aria-hidden="true"/>
      <button onClick={onSelect} aria-current={active ? 'step' : undefined} aria-label={`${stop.label} — stop ${index + 1} of ${total}`} aria-describedby={textId}
        className={`inline-flex items-center h-7 px-3 rounded-full border text-[0.7rem] font-semibold tracking-[0.08em] transition-colors duration-[250ms] ${focusRing} ${active ? 'bg-journey-cream text-journey-deep border-journey-cream' : 'bg-journey-cream/[0.06] text-journey-copper border-journey-copper/40 hover:bg-journey-cream/[0.12] hover:border-journey-copper'}`}>
        {stop.label}
      </button>
      <p id={textId} className={`mt-2.5 max-w-[480px] text-sm leading-relaxed transition-colors duration-[250ms] ${active ? 'text-journey-ink' : 'text-journey-muted group-hover:text-journey-body'}`}>{stop.text}</p>
    </li>
  )
}

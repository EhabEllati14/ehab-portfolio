import type { Dir } from '../../hooks/useJourneyTour'

interface RoverProps {
  moving: boolean
  dir: Dir
}

export default function Rover({ moving, dir }: RoverProps) {
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
        {/* Blinks only during a drive, so nothing keeps flashing while the tour is paused */}
        <circle cx="26" cy="4" r="3.2" className={`fill-journey-copper stroke-journey-bg ${moving ? 'rover-tip-glow' : ''}`} strokeWidth="1.5"/>
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

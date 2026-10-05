interface StopCounterProps {
  index: number
  total: number
  label: string
}

export default function StopCounter({ index, total, label }: StopCounterProps) {
  return (
    <div className="flex items-baseline gap-4">
      <div className="stat-num text-journey-copper">{String(index + 1).padStart(2, '0')}</div>
      <div className="flex flex-col gap-0.5">
        <div className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-journey-muted">Stop of {String(total).padStart(2, '0')}</div>
        <div className="font-heading font-bold text-lg leading-snug text-journey-ink">{label}</div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { IconType } from 'react-icons'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  icon?: IconType
  tag?: string
  light?: boolean
}

export default function SectionHeading({ title, subtitle, icon: Icon, tag }: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className="mb-14"
    >
      {(tag || Icon) && (
        <p className="section-tag">
          {Icon && <Icon size={13} aria-hidden="true" />}
          {tag}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 text-base max-w-2xl">{subtitle}</p>
      )}
      <div className="divider" />
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3">{title}</h2>
      {subtitle && <p className="text-slate-400 text-base max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-300 mx-auto rounded-full mt-3" aria-hidden="true" />
    </motion.div>
  )
}

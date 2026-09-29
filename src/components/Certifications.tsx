import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/certifications'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section-padding bg-slate-900/50" aria-label="Certifications and Courses">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeading
          title="Courses & Certifications"
          subtitle="Continuous learning across AI engineering, machine learning, cloud, and data science."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.45, ease: 'easeOut' }}
              className={`glass-card p-5 flex items-start gap-4 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 ${
                cert.id === 1 ? 'border-accent/30 glow-accent sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{cert.icon}</span>
              <div className="min-w-0">
                <h3 className="font-heading font-semibold text-white text-sm leading-snug mb-1 truncate-2">
                  {cert.name}
                </h3>
                <p className="text-accent text-xs font-medium mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <FiCalendar size={10} aria-hidden="true" />
                  <span>{cert.period}</span>
                  {cert.period.includes('Present') && (
                    <span className="ml-1 w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" aria-hidden="true" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

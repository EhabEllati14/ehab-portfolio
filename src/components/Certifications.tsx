import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiShield, FiCpu, FiBarChart2, FiSearch, FiCode, FiCloud, FiZap } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/certifications'

const certIcons = [FiZap, FiCloud, FiCpu, FiBarChart2, FiBarChart2, FiSearch, FiCode]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section-padding" style={{ background: 'rgba(15,23,42,0.4)' }} aria-label="Certifications and Courses">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous investment in AI engineering, machine learning, cloud, and data science."
          icon={FiShield}
          tag="Courses & Certs"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const Icon = certIcons[i] ?? FiZap
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`glass-card-hover p-5 flex items-start gap-4 ${
                  cert.id === 1 ? 'border-sky-400/20' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-sky-400/8 border border-sky-400/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className="text-sky-400" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-white text-sm leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sky-400 text-xs font-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                    <FiCalendar size={10} aria-hidden="true" />
                    <span>{cert.period}</span>
                    {cert.period.includes('Present') && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block ml-0.5"
                        aria-label="In progress"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

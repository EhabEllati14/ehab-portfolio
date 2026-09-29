import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { experiences } from '../data/experience'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding" aria-label="Work Experience">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="7 internships across AI, full-stack, backend engineering, and data — spanning Palestine, Europe, and the US."
        />

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
                  className={`relative sm:flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden sm:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-slate-900 z-10"
                    aria-hidden="true"
                  />

                  <div className={`sm:w-[46%] ${exp.highlight ? 'glass-card border-accent/30 glow-accent' : 'glass-card'} p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1`}>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-heading font-semibold text-white text-base leading-tight mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                          <FiBriefcase size={12} aria-hidden="true" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      {exp.highlight && (
                        <span className="flex-shrink-0 text-xs bg-accent/15 text-accent border border-accent/30 rounded-full px-2.5 py-0.5 font-medium">
                          Latest
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-slate-400 text-xs mb-4">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={11} aria-hidden="true" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar size={11} aria-hidden="true" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-4" role="list">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="text-accent mt-1.5 flex-shrink-0 text-xs" aria-hidden="true">▸</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-slate-700/60 text-slate-300 rounded-md border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

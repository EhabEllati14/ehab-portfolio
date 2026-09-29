import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { experiences } from '../data/experience'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-primary" aria-label="Work Experience">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="7 internships across AI, full-stack, backend, and data engineering with companies in Europe, the Middle East, and the US."
          icon={FiTrendingUp}
          tag="Experience"
        />

        <div ref={ref} className="relative">
          {/* Center line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(56,189,248,0.4), transparent)' }}
            aria-hidden="true"
          />

          <div className="space-y-7">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative sm:flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  {/* Dot */}
                  <div
                    className="hidden sm:flex absolute left-1/2 top-7 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 border-2 border-primary z-10 items-center justify-center"
                    aria-hidden="true"
                  />

                  <div
                    className={`sm:w-[46%] glass-card p-6 transition-all duration-300 hover:-translate-y-1 ${
                      exp.highlight
                        ? 'border-sky-400/25 shadow-lg shadow-sky-400/5'
                        : 'hover:border-white/12'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-heading font-semibold text-white text-base leading-snug mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-sky-400 text-sm font-medium">
                          <FiBriefcase size={12} aria-hidden="true" />
                          {exp.company}
                        </div>
                      </div>
                      {exp.highlight && (
                        <span className="flex-shrink-0 text-xs bg-sky-400/10 text-sky-400 border border-sky-400/20 rounded-full px-2.5 py-0.5 font-semibold">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-slate-500 text-xs mb-5">
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={11} className="text-slate-600" aria-hidden="true" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={11} className="text-slate-600" aria-hidden="true" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-5" role="list">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-slate-400 text-sm">
                          <span
                            className="w-1 h-1 rounded-full bg-sky-400 mt-2 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-white/4 text-slate-400 rounded-md border border-white/6"
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

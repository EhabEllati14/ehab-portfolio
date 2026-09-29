import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { educationList } from '../data/education'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding bg-slate-900/50" aria-label="Education">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="A strong academic foundation blending Computer Science and Business Administration."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.55, ease: 'easeOut' }}
              className="glass-card p-6 hover:border-accent/30 hover:glow-accent transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{edu.badge}</span>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm leading-snug mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-accent text-sm font-medium">{edu.degree}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-slate-400 text-xs mb-4">
                <span className="flex items-center gap-1">
                  <FiCalendar size={11} aria-hidden="true" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin size={11} aria-hidden="true" />
                  {edu.location}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {edu.gpa && (
                  <span className="flex items-center gap-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded-full px-2.5 py-0.5 font-semibold">
                    <FiAward size={10} aria-hidden="true" />
                    GPA {edu.gpa}
                  </span>
                )}
                {edu.average && (
                  <span className="text-xs bg-accent/10 text-accent border border-accent/20 rounded-full px-2.5 py-0.5 font-semibold">
                    Avg {edu.average}
                  </span>
                )}
                {edu.distinction && (
                  <span className="text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full px-2.5 py-0.5 font-semibold">
                    🏅 Distinction
                  </span>
                )}
                {edu.honorList && (
                  <span className="text-xs bg-purple-400/10 text-purple-400 border border-purple-400/20 rounded-full px-2.5 py-0.5 font-semibold">
                    {edu.honorList}
                  </span>
                )}
              </div>

              {/* Relevant Courses */}
              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-auto">
                  <p className="text-slate-500 text-xs font-medium mb-2 uppercase tracking-wider">
                    Relevant Courses
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2 py-0.5 bg-slate-700/60 text-slate-300 rounded-md border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

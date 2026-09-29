import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { educationList } from '../data/education'

const degreeIcons = [FiBookOpen, FiAward, FiGlobe]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding" style={{ background: 'rgba(15,23,42,0.4)' }} aria-label="Education">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="A strong academic foundation combining Computer Science and Business Administration, with international experience through Erasmus+."
          icon={FiBookOpen}
          tag="Education"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {educationList.map((edu, i) => {
            const Icon = degreeIcons[i] ?? FiBookOpen
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.13, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card-hover p-6 flex flex-col"
              >
                {/* Icon + Institution */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-sky-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-sm leading-snug mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-sky-400 text-xs font-medium leading-snug">{edu.degree}</p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
                  <FiCalendar size={11} className="text-slate-600" aria-hidden="true" />
                  {edu.period}
                  {edu.location && (
                    <>
                      <span className="text-slate-700">·</span>
                      <span>{edu.location}</span>
                    </>
                  )}
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.gpa && (
                    <span className="flex items-center gap-1 text-xs bg-sky-400/8 text-sky-400 border border-sky-400/15 rounded-md px-2.5 py-1 font-semibold">
                      <FiAward size={10} aria-hidden="true" />
                      GPA {edu.gpa}
                    </span>
                  )}
                  {edu.average && (
                    <span className="text-xs bg-sky-400/8 text-sky-400 border border-sky-400/15 rounded-md px-2.5 py-1 font-semibold">
                      Avg {edu.average}
                    </span>
                  )}
                  {edu.distinction && (
                    <span className="text-xs bg-amber-400/8 text-amber-400 border border-amber-400/15 rounded-md px-2.5 py-1 font-semibold">
                      Distinction
                    </span>
                  )}
                  {edu.honorList && (
                    <span className="text-xs bg-violet-400/8 text-violet-400 border border-violet-400/15 rounded-md px-2.5 py-1 font-semibold">
                      {edu.honorList}
                    </span>
                  )}
                </div>

                {/* Courses */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-auto">
                    <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
                      Relevant Courses
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2 py-0.5 bg-white/4 text-slate-400 rounded-md border border-white/6"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

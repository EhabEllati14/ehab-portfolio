import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiGlobe } from 'react-icons/fi'
import { educationList } from '../data/education'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-28 sm:py-36 border-t border-white/5" aria-label="Education">
      <div className="section-wrap">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="label-sm mb-3">Education</p>
          <h2 className="display-lg">Where I<br />learned.</h2>
        </motion.div>

        <div ref={ref} className="space-y-0">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-10 py-10 border-b border-white/5 last:border-0 group hover:border-white/10 transition-colors duration-300"
            >
              {/* Left: dates + location */}
              <div className="pt-0.5">
                <p className="text-slate-600 text-xs font-medium mb-2">{edu.period}</p>
                {edu.location && (
                  <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                    <FiGlobe size={10} aria-hidden="true" />
                    {edu.location}
                  </div>
                )}
              </div>

              {/* Right */}
              <div>
                <h3 className="font-heading font-bold text-white text-lg leading-snug mb-1 group-hover:text-accent transition-colors duration-200">
                  {edu.institution}
                </h3>
                <p className="text-accent text-sm font-semibold mb-5">{edu.degree}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {edu.gpa && (
                    <span className="flex items-center gap-1.5 chip text-[0.65rem]">
                      <FiAward size={10} aria-hidden="true" />
                      GPA {edu.gpa}
                    </span>
                  )}
                  {edu.average && (
                    <span className="chip text-[0.65rem]">Avg {edu.average}</span>
                  )}
                  {edu.distinction && (
                    <span
                      style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(251,191,36,0.2)', color: '#fbbf24' }}
                      className="chip text-[0.65rem]"
                    >
                      Distinction
                    </span>
                  )}
                  {edu.honorList && (
                    <span
                      style={{ background: 'rgba(167,139,250,0.08)', borderColor: 'rgba(167,139,250,0.2)', color: '#a78bfa' }}
                      className="chip text-[0.65rem]"
                    >
                      {edu.honorList}
                    </span>
                  )}
                </div>

                {edu.courses && edu.courses.length > 0 && (
                  <div className="mb-4">
                    <p className="label-sm text-slate-600 mb-2 text-[0.62rem]">Courses</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map(c => (
                        <span key={c} className="pill">{c}</span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.description && (
                  <p className="text-slate-500 text-sm leading-relaxed mt-4 border-l-2 border-accent/20 pl-4 italic">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

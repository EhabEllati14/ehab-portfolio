import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { experiences } from '../data/experience'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 sm:py-36 border-t border-white/5" aria-label="Work Experience">
      <div className="section-wrap">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
          >
            <p className="label-sm mb-3">Experience</p>
            <h2 className="display-lg">Where I've<br />built things.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity:0 }} whileInView={{ opacity:1 }}
            viewport={{ once:true }} transition={{ delay:0.2 }}
            className="text-slate-600 text-sm max-w-xs leading-relaxed"
          >
            7 internships across AI, full-stack, backend, and data engineering — with companies in Europe, the Middle East, and the US.
          </motion.p>
        </div>

        <div ref={ref} className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity:0, y:20 }}
              animate={isInView ? { opacity:1, y:0 } : {}}
              transition={{ delay:i*0.08, duration:0.55, ease:[0.22,1,0.36,1] }}
              className="group grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-10 py-10 border-b border-white/5 hover:border-white/10 transition-colors duration-300 last:border-0"
            >
              {/* Left: meta */}
              <div className="pt-0.5">
                <p className="text-slate-600 text-xs font-medium mb-2">{exp.period}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{exp.location}</p>
                {exp.highlight && (
                  <span className="inline-block mt-3 chip text-[0.65rem]">Current</span>
                )}
              </div>

              {/* Right: content */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-heading font-bold text-white text-lg leading-snug group-hover:text-accent transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <FiArrowUpRight
                    size={16}
                    className="text-slate-700 group-hover:text-accent transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-accent text-sm font-semibold mb-5">{exp.company}</p>

                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent/60 mt-2 flex-shrink-0" aria-hidden="true"/>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(t => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

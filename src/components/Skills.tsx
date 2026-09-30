import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 sm:py-36 border-t border-white/5" aria-label="Technical Skills">
      <div className="section-wrap">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
          >
            <p className="label-sm mb-3">Skills</p>
            <h2 className="display-lg">What I build<br />with.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity:0 }} whileInView={{ opacity:1 }}
            viewport={{ once:true }} transition={{ delay:0.2 }}
            className="text-slate-600 text-sm max-w-xs leading-relaxed"
          >
            A toolkit spanning AI engineering, backend systems, full-stack development, and cloud infrastructure.
          </motion.p>
        </div>

        {/* Horizontal scrolling marquee-style on mobile, grid on desktop */}
        <div ref={ref} className="space-y-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity:0, y:16 }}
              animate={isInView ? { opacity:1, y:0 } : {}}
              transition={{ delay:ci*0.07, duration:0.55 }}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="label-sm">{cat.name}</span>
                <div className="flex-1 h-px bg-white/5" aria-hidden="true"/>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity:0, scale:0.9 }}
                    animate={isInView ? { opacity:1, scale:1 } : {}}
                    transition={{ delay:ci*0.07 + si*0.02, duration:0.3 }}
                    className="pill cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

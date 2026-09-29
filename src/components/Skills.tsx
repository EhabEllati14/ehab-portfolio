import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding bg-slate-900/50" aria-label="Technical Skills">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive toolkit built across AI, backend, full-stack, and cloud engineering."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="glass-card p-6 hover:border-accent/30 hover:glow-accent transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                <h3 className="font-heading font-semibold text-white text-sm group-hover:text-accent transition-colors duration-200">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.08 + j * 0.03, duration: 0.3 }}
                    className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 hover:border-accent/40 transition-all duration-150 cursor-default"
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

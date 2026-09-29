import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiServer, FiLayout, FiDatabase, FiCpu, FiCloud, FiCheckSquare, FiZap } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { skillCategories } from '../data/skills'

const categoryIcons = [FiCode, FiServer, FiLayout, FiDatabase, FiCpu, FiCloud, FiCheckSquare]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(15,23,42,0.4)' }} aria-label="Technical Skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive toolkit built across AI engineering, backend systems, full-stack development, and cloud infrastructure."
          icon={FiZap}
          tag="Skills"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[i] ?? FiCode
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-sky-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.07 + j * 0.025, duration: 0.3 }}
                      className="px-2.5 py-1 text-xs font-medium text-sky-300/80 bg-sky-400/6 border border-sky-400/12 rounded-lg hover:bg-sky-400/15 hover:text-sky-300 hover:border-sky-400/30 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

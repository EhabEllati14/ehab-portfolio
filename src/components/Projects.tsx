import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiBox, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding bg-primary" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Hands-on builds spanning AI systems, full-stack platforms, and machine learning applications."
          icon={FiBox}
          tag="Projects"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card-hover p-6 flex flex-col group ${
                project.featured ? 'border-sky-400/15' : ''
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0"
                      aria-label="Featured project"
                    />
                  )}
                  <h3 className="font-heading font-semibold text-white text-sm leading-snug group-hover:text-sky-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-1.5 rounded-lg text-slate-600 hover:text-white hover:bg-white/8 transition-all duration-150"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <FiArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-sky-400/6 text-sky-400/70 border border-sky-400/10 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="https://github.com/EhabEllati14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-sky-400/40 text-slate-400 hover:text-white bg-white/3 hover:bg-white/6 font-heading font-medium rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-primary text-sm"
          >
            <FiGithub size={15} aria-hidden="true" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

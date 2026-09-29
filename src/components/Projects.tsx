import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiStar } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Hands-on builds spanning AI systems, full-stack applications, and machine learning."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              className={`glass-card p-6 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 ${
                project.featured ? 'border-accent/20' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <FiStar
                      size={14}
                      className="text-yellow-400 fill-yellow-400 flex-shrink-0"
                      aria-label="Featured project"
                    />
                  )}
                  <h3 className="font-heading font-semibold text-white text-sm leading-snug group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <FiGithub size={16} aria-hidden="true" />
                  </a>
                )}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-accent/10 text-accent/80 border border-accent/15 rounded-md"
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
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/EhabEllati14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 hover:border-accent text-accent hover:bg-accent/10 font-heading font-medium rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <FiGithub size={16} aria-hidden="true" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

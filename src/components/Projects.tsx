import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-28 sm:py-36 border-t border-white/5" aria-label="Projects">
      <div className="section-wrap">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
          >
            <p className="label-sm mb-3">Projects</p>
            <h2 className="display-lg">Things I've<br />built.</h2>
          </motion.div>
          <motion.a
            initial={{ opacity:0 }} whileInView={{ opacity:1 }}
            viewport={{ once:true }} transition={{ delay:0.25 }}
            href="https://github.com/EhabEllati14"
            target="_blank" rel="noopener noreferrer"
            className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white text-sm font-medium rounded-xl transition-all duration-200 hover:bg-white/4"
            aria-label="View all on GitHub"
          >
            <FiGithub size={14} aria-hidden="true"/>
            View all on GitHub
          </motion.a>
        </div>

        <div ref={ref}>
          {/* Featured: large row layout */}
          <div className="space-y-0 mb-0">
            {featured.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity:0, y:24 }}
                animate={isInView ? { opacity:1, y:0 } : {}}
                transition={{ delay:i*0.1, duration:0.6, ease:[0.22,1,0.36,1] }}
                className="group grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-12 py-10 border-b border-white/5 hover:border-white/10 transition-colors duration-300"
              >
                {/* Number */}
                <div className="hidden sm:flex items-start pt-1">
                  <span
                    className="font-heading font-black text-stroke text-5xl w-16 text-right leading-none select-none"
                    aria-hidden="true"
                  >
                    {String(i+1).padStart(2,'0')}
                  </span>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-heading font-bold text-white text-xl leading-snug group-hover:text-accent transition-colors duration-200">
                      {p.name}
                    </h3>
                    {p.github && (
                      <a
                        href={p.github} target="_blank" rel="noopener noreferrer"
                        className="flex-shrink-0 p-1.5 text-slate-700 hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:translate-x-0.5"
                        aria-label={`${p.name} on GitHub`}
                      >
                        <FiArrowUpRight size={18} aria-hidden="true"/>
                      </a>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => <span key={t} className="pill">{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Rest: 2-col compact */}
          <div className="grid sm:grid-cols-2 gap-0">
            {rest.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity:0, y:20 }}
                animate={isInView ? { opacity:1, y:0 } : {}}
                transition={{ delay:featured.length*0.1 + i*0.08, duration:0.5 }}
                className={`group py-10 border-b border-white/5 hover:border-white/10 transition-colors duration-300 ${i%2===0 ? 'sm:pr-10 sm:border-r' : 'sm:pl-10'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-white text-base leading-snug group-hover:text-accent transition-colors duration-200">
                    {p.name}
                  </h3>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 text-slate-700 hover:text-white transition-all duration-200"
                      aria-label={`${p.name} on GitHub`}>
                      <FiArrowUpRight size={15} aria-hidden="true"/>
                    </a>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

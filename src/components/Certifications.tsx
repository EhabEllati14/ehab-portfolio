import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../data/certifications'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-28 sm:py-36 border-t border-white/5" aria-label="Certifications">
      <div className="section-wrap">

        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="mb-20"
        >
          <p className="label-sm mb-3">Certifications</p>
          <h2 className="display-lg">Always<br />learning.</h2>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-0">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity:0, y:16 }}
              animate={isInView ? { opacity:1, y:0 } : {}}
              transition={{ delay:i*0.06, duration:0.5 }}
              className={`group py-8 border-b border-white/5 hover:border-white/10 transition-colors duration-300 ${
                i%2===0 ? 'sm:pr-10 sm:border-r' : 'sm:pl-10'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm leading-snug mb-1 group-hover:text-accent transition-colors duration-200">
                    {cert.name}
                  </h3>
                  <p className="text-accent text-xs font-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-slate-600 text-xs">
                    <span>{cert.period}</span>
                    {cert.period.includes('Present') && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-label="In progress" aria-hidden="true"/>
                    )}
                  </div>
                </div>
                {cert.id === 1 && (
                  <span className="chip text-[0.62rem] flex-shrink-0">Active</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

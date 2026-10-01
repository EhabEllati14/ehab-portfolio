import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../data/certifications'
import { useTheme } from '../context/ThemeContext'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isDark = useTheme()
  const borderBase = isDark ? 'border-white/5 hover:border-white/10' : 'border-slate-200 hover:border-slate-300'

  return (
    <section id='certifications' className='py-28 sm:py-36 section-border' aria-label='Certifications'>
      <div className='section-wrap'>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='mb-20'>
          <p className='label-sm mb-3'>Certifications</p>
          <h2 className={isDark ? 'display-lg text-white' : 'display-lg text-slate-900'}>Always learning.</h2>
        </motion.div>
        <div ref={ref} className='grid sm:grid-cols-2 gap-0'>
          {certifications.map((cert, i) => {
            const side = i % 2 === 0 ? 'sm:pr-10 sm:border-r ' : 'sm:pl-10 '
            const cls = 'group py-8 border-b transition-colors duration-300 ' + side + borderBase
            return (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.06, duration: 0.5 }} className={cls}>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className={isDark ? 'font-heading font-semibold text-sm leading-snug mb-1 text-white group-hover:text-accent transition-colors' : 'font-heading font-semibold text-sm leading-snug mb-1 text-slate-900 group-hover:text-accent transition-colors'}>{cert.name}</h3>
                    <p className='text-accent text-xs font-medium mb-2'>{cert.issuer}</p>
                    <div className={isDark ? 'flex items-center gap-2 text-xs text-slate-600' : 'flex items-center gap-2 text-xs text-slate-400'}>
                      <span>{cert.period}</span>
                      {cert.period.includes('Present') && <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' aria-hidden='true' />}
                    </div>
                  </div>
                  {cert.id === 1 && <span className='chip text-[0.62rem] flex-shrink-0'>Active</span>}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
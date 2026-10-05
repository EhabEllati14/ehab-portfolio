import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { num: '3.5', label: 'GPA', sub: 'out of 4.0' },
  { num: '90%', label: 'Major Avg', sub: 'CS' },
  { num: '92%', label: 'Minor Avg', sub: 'Business' },
  { num: '5x', label: 'Honor List', sub: 'Distinction' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isDark = useTheme()

  const textMain = isDark ? 'text-slate-400' : 'text-slate-600'
  const textMuted = isDark ? 'text-slate-600' : 'text-slate-400'

  return (
    <section id="about" className={`py-28 sm:py-36 section-border`} aria-label="About">
      <div className="section-wrap">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <p className="label-sm mb-3">About</p>
            <h2 className={`display-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>The story<br />behind the engineer.</h2>
          </motion.div>
          <motion.a initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.3 }}
            href="/Ehab_Ellati_CV.pdf" download="Ehab_Ellati_CV.pdf"
            className="self-start sm:self-auto flex items-center gap-2 px-6 py-3 bg-accent text-white font-heading font-bold text-sm rounded-2xl hover:bg-sky-400 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/25">
            <FiDownload size={14} aria-hidden="true"/>
            Download CV
          </motion.a>
        </div>

        <div ref={ref} className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 self-start">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity:0, y:16 }} animate={isInView ? { opacity:1, y:0 } : {}} transition={{ delay:i*0.08, duration:0.55 }}>
                <div className="stat-num gt2 mb-0.5">{s.num}</div>
                <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{s.label}</div>
                <div className={`text-xs mt-0.5 ${textMuted}`}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity:0, y:12 }} animate={isInView ? { opacity:1, y:0 } : {}} transition={{ delay:0.35, duration:0.6 }} className={`space-y-4 text-base leading-relaxed ${textMain}`}>
            <p>I am a Computer Science graduate with Distinction and a Minor in Business Administration. Not just an engineer who writes code — someone who understands systems, communicates across teams, and thinks about products from both a technical and business lens.</p>
            <p>I have worked across 7 internships in AI, full-stack, backend, and data engineering with companies in the Netherlands, Saudi Arabia, the US, and more. Fast learner. High ownership. Builder at heart.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


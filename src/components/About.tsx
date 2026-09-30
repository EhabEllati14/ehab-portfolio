import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const stats = [
  { num: '3.5', label: 'GPA', sub: 'out of 4.0' },
  { num: '90%', label: 'Major Avg', sub: 'CS' },
  { num: '92%', label: 'Minor Avg', sub: 'Business' },
  { num: '5×', label: 'Honor List', sub: 'Distinction' },
]

const story = [
  { mark: 'Age 5', text: 'Math, puzzles, and logic — the obsession started early. Not just playing games, but understanding the rules behind them.' },
  { mark: 'Age 15', text: 'Led a volunteer travel team to Cyprus. First real lesson in coordinating people, handling pressure, and earning trust as a leader.' },
  { mark: 'High School', text: 'Chose the scientific track for physics and math. Scored 99 in the national final exam, then chose Computer Science over medicine — knowing where the future was.' },
  { mark: 'Year 3', text: 'Added a Business Administration minor. Because building great products isn\'t just about code — it\'s about understanding markets, people, and strategy.' },
  { mark: 'CS Club', text: 'Elected Team Lead of the Computer Science club and IT Student Ambassador. Ran career events, startup workshops, and helped students go from dreaming to executing.' },
  { mark: 'Startup', text: 'Founded a company at 20. Built the MVP. Secured funding from Switzerland. Put it on hold to finish university — but never stopped thinking like a founder.' },
  { mark: 'Erasmus+', text: 'Selected for the Erasmus+ Exchange Program in Messina, Italy. Earned the Honor List abroad while building real cross-cultural skills and friendships across Europe.' },
  { mark: 'Today', text: 'Working at the intersection of AI, engineering, and business. Looking for the right team and the right problem to go deep on.' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 sm:py-36" aria-label="About">
      <div className="section-wrap">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
          >
            <p className="label-sm mb-3">About</p>
            <h2 className="display-lg">The story<br />behind the engineer.</h2>
          </motion.div>
          <motion.a
            initial={{ opacity:0 }} whileInView={{ opacity:1 }}
            viewport={{ once:true }} transition={{ delay:0.3 }}
            href="/Ehab_Ellati_CV.pdf" download="Ehab_Ellati_CV.pdf"
            className="self-start sm:self-auto flex items-center gap-2 px-6 py-3 bg-accent text-bg font-heading font-bold text-sm rounded-2xl hover:bg-sky-300 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25"
          >
            <FiDownload size={14} aria-hidden="true"/>
            Download CV
          </motion.a>
        </div>

        <div ref={ref} className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">

          {/* Left: Stats + intro text */}
          <div>
            {/* Big numbers */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-14">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity:0, y:16 }}
                  animate={isInView ? { opacity:1, y:0 } : {}}
                  transition={{ delay:i*0.08, duration:0.55 }}
                >
                  <div className="stat-num gt2 mb-0.5">{s.num}</div>
                  <div className="text-white text-sm font-semibold">{s.label}</div>
                  <div className="text-slate-600 text-xs mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
            </div>

            <div className="thin-line mb-10" aria-hidden="true"/>

            {/* Bio */}
            <motion.div
              initial={{ opacity:0, y:12 }}
              animate={isInView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.35, duration:0.6 }}
              className="space-y-4 text-slate-500 text-base leading-relaxed"
            >
              <p>
                I'm a Computer Science graduate with Distinction and a Minor in Business Administration.
                Not just an engineer who writes code — someone who understands systems, communicates across
                teams, and thinks about products from both a technical and business lens.
              </p>
              <p>
                I've worked across 7 internships in AI, full-stack, backend, and data engineering with
                companies in the Netherlands, Saudi Arabia, the US, and more.
                Fast learner. High ownership. Builder at heart.
              </p>
            </motion.div>
          </div>

          {/* Right: Story timeline */}
          <div>
            <p className="label-sm mb-8">Journey</p>
            <div className="relative space-y-0">
              {story.map((s, i) => (
                <motion.div
                  key={s.mark}
                  initial={{ opacity:0, x:16 }}
                  animate={isInView ? { opacity:1, x:0 } : {}}
                  transition={{ delay:i*0.06, duration:0.5, ease:[0.22,1,0.36,1] }}
                  className="group relative pl-6 pb-8 last:pb-0 border-l border-white/6 hover:border-accent/30 transition-colors duration-300"
                >
                  {/* dot */}
                  <div
                    className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full border-2 border-bg bg-slate-700 group-hover:bg-accent group-hover:border-accent transition-all duration-300"
                    aria-hidden="true"
                  />
                  <div className="chip mb-2 text-[0.65rem]">{s.mark}</div>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                    {s.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

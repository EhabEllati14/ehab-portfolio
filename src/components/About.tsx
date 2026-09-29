import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload, FiMapPin } from 'react-icons/fi'

const stats = [
  { label: 'GPA', value: '3.5 / 4.0', icon: '🎓' },
  { label: 'Major Average', value: '90%', icon: '📈' },
  { label: 'Minor Average', value: '92%', icon: '💼' },
  { label: 'Honor List', value: '5×', icon: '🏆' },
  { label: 'Tawjihi Score', value: '99', icon: '⭐' },
]

const milestones = [
  { age: 'Age 5', text: 'Developed a love for mathematics and logic puzzles — always thinking in patterns and systems.' },
  { age: 'Age 15', text: 'Led a volunteer travel team to Cyprus — discovered a passion for leadership, teamwork, and cross-cultural connection.' },
  { age: 'Grade 10', text: "Chose the scientific track driven by physics, math, and logical thinking — the foundation of today's engineering mindset." },
  { age: 'Tawjihi', text: 'Achieved a score of 99 in the Palestinian high school final exam — choosing Computer Science over medicine, seeing the future in technology.' },
  { age: 'University', text: 'Graduated with Distinction (GPA 3.5/4.0, 5× Honor List). Added a Business Administration minor in Year 3 — because building great products also means communicating, selling, and leading.' },
  { age: 'CS Club', text: 'Selected as Team Lead of the Computer Science club and IT Student Ambassador — organized events to help fellow students launch their careers and startup dreams.' },
  { age: 'Startup', text: 'Co-founded a startup at age 20, built an MVP, and secured funding from Switzerland. Paused to finish university — but never stopped thinking like a founder.' },
  { age: 'Erasmus+', text: 'Selected for the Erasmus+ Exchange Program at the University of Messina, Italy. Made the Honor List while gaining technical and cultural experience across Europe.' },
  { age: 'Today', text: 'Working at the intersection of AI, software engineering, and business — building intelligent systems and growing into a complete engineer and innovator.' },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3">{children}</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-300 mx-auto rounded-full" aria-hidden="true" />
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding" aria-label="About Ehab Ellati">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeading>About Me</SectionHeading>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <FiMapPin size={14} aria-hidden="true" />
              <span>Jerusalem, Israel</span>
              <span className="text-accent">•</span>
              <span className="text-green-400">Fresh CS Graduate</span>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              I'm a Computer Science graduate with Distinction from Birzeit University, with a Minor in Business
              Administration. My journey into technology started at age 5 with a fascination for math and logic — and
              it's only accelerated since then.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              I'm not just a developer who writes code. I think about systems, communicate across teams, understand
              business problems, and build solutions that actually matter. That's why I added a Business Administration
              minor — because the best engineers also understand people, strategy, and impact.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              I've interned across 7 companies in AI, full-stack, backend, and data engineering — remotely across
              Palestine, Europe, and the US. I love learning fast, shipping high-quality work, and being part of teams
              that build things that last.
            </p>

            <a
              href="/Ehab_Ellati_CV.pdf"
              download="Ehab_Ellati_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-sky-400 text-slate-900 font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <FiDownload size={16} aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          {/* Right: Stats + Timeline */}
          <div>
            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass-card p-4 text-center hover:border-accent/30 transition-all duration-200 hover:glow-accent"
                >
                  <div className="text-2xl mb-1" aria-hidden="true">{stat.icon}</div>
                  <div className="font-heading font-bold text-xl text-accent">{stat.value}</div>
                  <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Journey Timeline */}
            <h3 className="font-heading font-semibold text-lg text-white mb-5">My Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent" aria-hidden="true" />
              <div className="space-y-5 pl-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.age}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    className="relative"
                  >
                    <div
                      className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-slate-900"
                      aria-hidden="true"
                    />
                    <span className="inline-block text-xs font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-0.5 mb-1">
                      {m.age}
                    </span>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

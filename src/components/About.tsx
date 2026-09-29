import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload, FiMapPin, FiTrendingUp, FiAward, FiBookOpen, FiStar } from 'react-icons/fi'

const stats = [
  { label: 'GPA', value: '3.5 / 4.0', icon: FiAward },
  { label: 'Major Average', value: '90%', icon: FiTrendingUp },
  { label: 'Minor Average', value: '92%', icon: FiBookOpen },
  { label: 'Honor List', value: '5×', icon: FiStar },
  { label: 'High School Final', value: '99', icon: FiAward },
]

const milestones = [
  {
    age: 'Age 5',
    text: 'Developed a deep love for mathematics and logic — always thinking in patterns, solving puzzles, and building mental models.',
  },
  {
    age: 'Age 15',
    text: 'Led a volunteer travel team to Cyprus — an early lesson in leadership, cross-cultural communication, and coordinating people toward a shared goal.',
  },
  {
    age: 'High School',
    text: 'Chose the scientific track driven by physics, math, and logical thinking. Scored 99 in the final exam and chose Computer Science over medicine, knowing it was where I belonged.',
  },
  {
    age: 'University',
    text: 'Graduated with Distinction, GPA 3.5/4.0, and 5× Honor List. In Year 3, added a Business Administration minor to bridge the gap between building products and understanding the people and markets they serve.',
  },
  {
    age: 'Leadership',
    text: 'Selected as Team Lead of the Computer Science club and IT Student Ambassador — organized career events, startup workshops, and helped fellow students turn ambitions into plans.',
  },
  {
    age: 'Startup',
    text: 'Founded a startup at 20, built an MVP, and secured international funding from Switzerland. Put it on hold to complete university — but the founder mindset never left.',
  },
  {
    age: 'Erasmus+',
    text: 'Selected for the Erasmus+ Exchange Program at the University of Messina, Italy. Earned the Honor List while building relationships with peers from across Europe and sharpening both technical and cross-cultural skills.',
  },
  {
    age: 'Today',
    text: 'Working at the intersection of AI engineering, software development, and business strategy. Building intelligent systems, growing fast, and looking for the team and problem worth pouring into.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding bg-primary" aria-label="About Ehab Ellati">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-tag"><FiBookOpen size={13} aria-hidden="true" />About Me</p>
          <h2 className="section-title">The Story Behind the Engineer</h2>
          <div className="divider" />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
              <FiMapPin size={13} className="text-sky-400" aria-hidden="true" />
              <span className="text-slate-400">Jerusalem, Israel</span>
              <span className="text-slate-700">·</span>
              <span className="text-green-400 font-medium text-xs">Open to Opportunities</span>
            </div>

            <div className="space-y-5 text-slate-400 text-base leading-relaxed mb-10">
              <p>
                I'm a Computer Science graduate with Distinction and a Minor in Business Administration.
                My path into technology started early — at 5, I was fascinated by math and logic. That curiosity never stopped.
              </p>
              <p>
                What separates me from most engineers is that I don't just write code. I understand systems,
                communicate across functions, and think about products from both an engineering and business perspective.
                That's exactly why I added the Business Administration minor — to become a more complete builder.
              </p>
              <p>
                I've worked across 7 internships in AI, full-stack, backend, and data engineering — with companies
                in the Netherlands, Saudi Arabia, the US, and more. I learn fast, take ownership seriously, and build
                things with long-term quality in mind.
              </p>
            </div>

            <a
              href="/Ehab_Ellati_CV.pdf"
              download="Ehab_Ellati_CV.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-primary"
            >
              <FiDownload size={15} aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          {/* Right: Stats + Timeline */}
          <div>
            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="glass-card p-4 text-center hover:border-sky-400/25 transition-all duration-250"
                >
                  <stat.icon size={16} className="text-sky-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="font-heading font-bold text-xl text-white">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <h3 className="font-heading font-semibold text-base text-slate-300 uppercase tracking-widest mb-6">
              My Journey
            </h3>
            <div className="relative">
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(to bottom, #38bdf8, transparent)' }}
                aria-hidden="true"
              />
              <div className="space-y-7 pl-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.age}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.06 * i, duration: 0.5 }}
                    className="relative"
                  >
                    <div
                      className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-sky-400 border-2 border-primary"
                      aria-hidden="true"
                    />
                    <span className="inline-block text-xs font-semibold text-sky-400 bg-sky-400/8 border border-sky-400/15 rounded-md px-2.5 py-0.5 mb-1.5">
                      {m.age}
                    </span>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.text}</p>
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

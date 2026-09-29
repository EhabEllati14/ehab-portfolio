import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,189,248,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(6,182,212,0.10) 0%, transparent 55%), #0f172a',
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-24 pb-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-accent font-body font-medium text-sm sm:text-base tracking-widest uppercase mb-3"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-4"
            >
              Ehab <span className="gradient-text">Ellati</span>
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-6 h-10"
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'AI & GenAI Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Problem Solver & Builder',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent"
              />
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              CS graduate with Distinction building AI-powered systems, scalable backends, and innovative solutions.
              Passionate about LLMs, RAG, and turning complex ideas into clean, working code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 bg-accent hover:bg-sky-400 text-slate-900 font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View My Work
              </button>
              <a
                href="/Ehab_Ellati_CV.pdf"
                download="Ehab_Ellati_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 border border-accent/50 hover:border-accent text-accent hover:bg-accent/10 font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <FiDownload size={16} aria-hidden="true" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/EhabEllati14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-accent/50 transition-all duration-200 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehab-ellati/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-accent/50 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} aria-hidden="true" />
              </a>
              <a
                href="mailto:ellatiehab@gmail.com"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-accent/50 transition-all duration-200 hover:scale-110"
                aria-label="Send Email"
              >
                <FiMail size={20} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Animated glow ring */}
              <div
                className="absolute -inset-1 rounded-full opacity-75 animate-pulse-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #38bdf8, #06b6d4, #0284c7, #38bdf8)',
                  filter: 'blur(4px)',
                }}
                aria-hidden="true"
              />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-accent/40 bg-slate-800">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGKXhj4A5YZLQ/profile-displayphoto-shrink_400_400/B4DZb4NRZPG4Ag-/0/1747986215897?e=1753920000&v=beta&t=nnELCVFkEJf3xA3zXYT_5c4tQx4P7G7pWJQOVxJNqAg"
                  alt="Ehab Ellati — Software Engineer & AI/GenAI Specialist"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center bg-slate-800"><span class="font-heading font-black text-7xl gradient-text">EE</span></div>'
                    }
                  }}
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-800 border border-accent/30 rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                Open to Opportunities
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center pb-8"
        >
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-accent transition-colors duration-200 animate-float"
            aria-label="Scroll down"
          >
            <span className="text-xs font-body">Scroll down</span>
            <FiArrowDown size={16} aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

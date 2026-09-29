import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiCode, FiCpu } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

// Stable LinkedIn photo via unavatar proxy — no expiry
const PHOTO_URL = 'https://unavatar.io/linkedin/ehab-ellati'
// Direct fallback (LinkedIn CDN)
const PHOTO_FALLBACK = 'https://media.licdn.com/dms/image/v2/D4D03AQGKXhj4A5YZLQ/profile-displayphoto-shrink_400_400/B4DZb4NRZPG4Ag-/0/1747986215897?e=1756944000&v=beta&t=nnELCVFkEJf3xA3zXYT_5c4tQx4P7G7pWJQOVxJNqAg'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
      aria-label="Hero"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(56,189,248,0.14) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 30% at 85% 85%, rgba(6,182,212,0.08) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(56,189,248,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pt-28 pb-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            <motion.div
              custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-6 border border-sky-400/20 bg-sky-400/5 rounded-full px-4 py-1.5"
            >
              <FiCode size={12} aria-hidden="true" />
              Software Engineer · AI & GenAI
            </motion.div>

            <motion.h1
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-5"
            >
              Ehab<br /><span className="gradient-text">Ellati</span>
            </motion.h1>

            <motion.div
              custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="font-body text-lg sm:text-xl text-slate-400 mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Building intelligent AI systems',
                  2200,
                  'Crafting scalable backends',
                  2200,
                  'Bridging engineering and business',
                  2200,
                  'Turning ideas into working products',
                  2200,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              CS graduate with Distinction. Experienced across AI engineering, full-stack development,
              and scalable backend systems. I build things that are fast, intelligent, and built to last.
            </motion.p>

            <motion.div
              custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-primary"
              >
                <FiCpu size={15} aria-hidden="true" />
                View My Work
              </button>
              <a
                href="/Ehab_Ellati_CV.pdf"
                download="Ehab_Ellati_CV.pdf"
                className="flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-sky-400/50 text-slate-300 hover:text-white bg-white/4 hover:bg-white/8 font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-primary"
              >
                <FiDownload size={15} aria-hidden="true" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              custom={5} initial="hidden" animate="visible" variants={fadeUp}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/EhabEllati14"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8 hover:border-white/20 transition-all duration-200 text-sm font-medium"
                aria-label="GitHub Profile"
              >
                <FiGithub size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ehab-ellati/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8 hover:border-white/20 transition-all duration-200 text-sm font-medium"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="mailto:ellatiehab@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8 hover:border-white/20 transition-all duration-200 text-sm font-medium"
                aria-label="Send Email"
              >
                <FiMail size={16} aria-hidden="true" />
                Email
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex flex-col items-center"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-40 animate-spin-slow pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 30%, #38bdf8 50%, transparent 70%)',
                }}
                aria-hidden="true"
              />
              {/* Glow layer */}
              <div
                className="absolute -inset-1.5 rounded-full opacity-50 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-sky-400/30 bg-slate-800/80 shadow-2xl shadow-black/50">
                <img
                  src={PHOTO_URL}
                  alt="Ehab Ellati"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    const img = e.currentTarget
                    if (img.src !== PHOTO_FALLBACK) {
                      img.src = PHOTO_FALLBACK
                    } else {
                      img.style.display = 'none'
                      const parent = img.parentElement
                      if (parent) {
                        parent.innerHTML =
                          '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f172a,#1e293b)"><span style="font-family:Poppins,sans-serif;font-weight:900;font-size:5rem;background:linear-gradient(to right,#38bdf8,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent">EE</span></div>'
                      }
                    }
                  }}
                />
              </div>

              {/* Status pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900 border border-white/10 rounded-full px-4 py-2 text-xs font-semibold text-slate-300 whitespace-nowrap shadow-xl">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                Open to Opportunities
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center pb-10"
        >
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-sky-400 transition-colors duration-200 animate-float group"
            aria-label="Scroll to about section"
          >
            <FiArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDownRight } from 'react-icons/fi'

const PHOTO_FALLBACK = 'https://media.licdn.com/dms/image/v2/D4D03AQGKXhj4A5YZLQ/profile-displayphoto-shrink_400_400/B4DZb4NRZPG4Ag-/0/1747986215897?e=1756944000&v=beta&t=nnELCVFkEJf3xA3zXYT_5c4tQx4P7G7pWJQOVxJNqAg'

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero">
      {/* Noise / glow bg */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div style={{
          position:'absolute', inset:0,
          background:'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(56,189,248,0.09) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(129,140,248,0.07) 0%, transparent 55%)',
        }}/>
        {/* Large ghost text in background */}
        <div style={{
          position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          fontFamily:'Poppins,sans-serif', fontWeight:900,
          fontSize:'clamp(8rem,22vw,22rem)', lineHeight:1,
          color:'rgba(56,189,248,0.025)', userSelect:'none', whiteSpace:'nowrap', pointerEvents:'none',
          letterSpacing:'-0.04em',
        }}>
          EHAB
        </div>
      </div>

      <div className="section-wrap w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="chip">Software Engineer · AI & GenAI</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true"/>
                Open to work
              </span>
            </motion.div>

            {/* Name — massive */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.2, ease:[0.22,1,0.36,1] }}
            >
              <h1 className="display-xl mb-3">
                Ehab<br />
                <span className="gt">Ellati</span>
              </h1>
            </motion.div>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ delay:0.55 }}
              className="text-slate-400 text-lg sm:text-xl font-body mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Building intelligent AI systems.',2200,
                  'Crafting scalable backends.',2200,
                  'Bridging engineering and business.',2200,
                  'Turning ideas into real products.',2200,
                ]}
                wrapper="span" speed={55} repeat={Infinity}
              />
            </motion.div>

            {/* Short bio */}
            <motion.p
              initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.65, duration:0.6 }}
              className="text-slate-500 text-base leading-relaxed max-w-lg mb-10"
            >
              CS graduate with Distinction. 7 internships across AI, full-stack, and backend engineering.
              Jerusalem, Israel.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.75, duration:0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => go('projects')}
                className="group flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-heading font-bold text-sm rounded-2xl hover:bg-sky-300 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
              >
                View My Work
                <FiArrowDownRight size={15} className="group-hover:rotate-45 transition-transform duration-200" aria-hidden="true"/>
              </button>
              <a
                href="/Ehab_Ellati_CV.pdf" download="Ehab_Ellati_CV.pdf"
                className="flex items-center gap-2 px-7 py-3.5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 font-heading font-semibold text-sm rounded-2xl transition-all duration-200 hover:scale-105 hover:bg-white/4"
              >
                <FiDownload size={14} aria-hidden="true"/>
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ delay:0.9 }}
              className="flex items-center gap-3"
            >
              {[
                { href:'https://github.com/EhabEllati14', icon:FiGithub, label:'GitHub' },
                { href:'https://www.linkedin.com/in/ehab-ellati/', icon:FiLinkedin, label:'LinkedIn' },
                { href:'mailto:ellatiehab@gmail.com', icon:FiMail, label:'Email' },
              ].map(({ href, icon:Icon, label }) => (
                <a
                  key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={16} aria-hidden="true"/>
                </a>
              ))}
              <span className="h-5 w-px bg-white/10 mx-1" aria-hidden="true"/>
              <span className="text-slate-600 text-xs">ellatiehab@gmail.com</span>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
            transition={{ delay:0.25, duration:0.9, ease:[0.22,1,0.36,1] }}
            className="hidden lg:flex flex-col items-center relative"
          >
            {/* Blurred glow behind photo */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background:'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)', filter:'blur(30px)' }}
              aria-hidden="true"
            />
            {/* Photo frame */}
            <div className="relative w-64 xl:w-80 aspect-square rounded-3xl overflow-hidden border border-white/8"
              style={{ background:'#0d1117' }}>
              <img
                src={PHOTO_FALLBACK}
                alt="Ehab Ellati"
                className="w-full h-full object-cover object-top"
                loading="eager"
                onError={(e) => {
                  const img = e.currentTarget
                  img.style.display = 'none'
                  const p = img.parentElement
                  if (p) p.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0d1117,#1e293b)"><span style="font-family:Poppins,sans-serif;font-weight:900;font-size:5rem;background:linear-gradient(135deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent">EE</span></div>'
                }}
              />
              {/* Overlay gradient bottom */}
              <div
                className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
                style={{ background:'linear-gradient(to top, #0d1117, transparent)' }}
                aria-hidden="true"
              />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y:[0,-6,0] }} transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut' }}
              className="absolute -left-16 top-1/4 bg-surface border border-white/8 rounded-2xl px-4 py-3 text-center shadow-2xl"
            >
              <div className="font-heading font-black text-2xl text-accent">5×</div>
              <div className="text-xs text-slate-500 mt-0.5">Honor List</div>
            </motion.div>
            <motion.div
              animate={{ y:[0,6,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:0.8 }}
              className="absolute -right-14 bottom-1/4 bg-surface border border-white/8 rounded-2xl px-4 py-3 text-center shadow-2xl"
            >
              <div className="font-heading font-black text-2xl text-accent">7</div>
              <div className="text-xs text-slate-500 mt-0.5">Internships</div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.3 }}
          className="mt-16 flex items-center gap-3"
        >
          <div className="thin-line max-w-xs" aria-hidden="true"/>
          <button
            onClick={() => go('about')}
            className="text-xs text-slate-600 hover:text-accent transition-colors duration-200 whitespace-nowrap font-medium tracking-wide"
            aria-label="Scroll to about"
          >
            Scroll to explore
          </button>
        </motion.div>
      </div>
    </section>
  )
}

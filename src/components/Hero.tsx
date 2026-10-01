import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDownRight } from 'react-icons/fi'

const PHOTO = 'https://media.licdn.com/dms/image/v2/D4D03AQGKXhj4A5YZLQ/profile-displayphoto-shrink_400_400/B4DZb4NRZPG4Ag-/0/1747986215897?e=1756944000&v=beta&t=nnELCVFkEJf3xA3zXYT_5c4tQx4P7G7pWJQOVxJNqAg'

const SYMBOLS = ['</>', '{}', 'fn()', 'AI', 'ML', 'if', '=>', '[]', '01', '10', 'pi', 'dx', 'RAG', 'LLM', '...']

interface Particle {
  x: number; y: number; vx: number; vy: number
  symbol: string; size: number; alpha: number; alphaDir: number
}

function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const make = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      size: Math.random() * 5 + 9,
      alpha: Math.random() * 0.07 + 0.03,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
    })

    for (let i = 0; i < 38; i++) particles.push(make())

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = '#38bdf8'
        ctx.font = `600 ${p.size}px 'Inter', monospace`
        ctx.fillText(p.symbol, p.x, p.y)
        ctx.restore()
        p.x += p.vx; p.y += p.vy
        p.alpha += p.alphaDir * 0.0004
        if (p.alpha > 0.11 || p.alpha < 0.02) p.alphaDir *= -1
        if (p.x < -60) p.x = canvas.width + 20
        if (p.x > canvas.width + 60) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        if (p.y > canvas.height + 20) p.y = -20
      }

      // draw subtle connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 120) * 0.04
            ctx.strokeStyle = '#38bdf8'
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  )
}

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Canvas animation */}
      <AnimatedCanvas />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 65% 45%, rgba(56,189,248,0.07) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 20% 65%, rgba(129,140,248,0.05) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(7rem, 20vw, 20rem)',
            lineHeight: 1,
            color: 'rgba(56,189,248,0.022)',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          EHAB
        </span>
      </div>

      <div className="section-wrap w-full pt-24 pb-16 relative">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <span className="chip">AI Engineer & Software Engineer</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                Open to work
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="display-xl mb-4">
                Ehab<br />
                <span className="gt">Ellati</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="text-slate-400 text-lg sm:text-xl font-body mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Building intelligent AI systems.', 2200,
                  'Crafting scalable backends.', 2200,
                  'Bridging engineering and business.', 2200,
                  'Turning ideas into real products.', 2200,
                ]}
                wrapper="span" speed={55} repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-slate-500 text-base leading-relaxed max-w-lg mb-10"
            >
              CS graduate with Distinction. 7 internships across AI, full-stack, and backend engineering. Jerusalem, Israel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <button
                onClick={() => go('projects')}
                className="group flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-heading font-bold text-sm rounded-2xl hover:bg-sky-300 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
              >
                View My Work
                <FiArrowDownRight size={15} className="group-hover:rotate-45 transition-transform duration-200" aria-hidden="true" />
              </button>
              <a
                href="/Ehab_Ellati_CV.pdf" download="Ehab_Ellati_CV.pdf"
                className="flex items-center gap-2 px-7 py-3.5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 font-heading font-semibold text-sm rounded-2xl transition-all duration-200 hover:scale-105 hover:bg-white/4"
              >
                <FiDownload size={14} aria-hidden="true" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3"
            >
              {[
                { href: 'https://github.com/EhabEllati14', icon: FiGithub, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/ehab-ellati/', icon: FiLinkedin, label: 'LinkedIn' },
                { href: 'mailto:ellatiehab@gmail.com', icon: FiMail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
              <span className="h-5 w-px bg-white/10 mx-1" aria-hidden="true" />
              <span className="text-slate-600 text-xs hidden sm:inline">ellatiehab@gmail.com</span>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center relative mt-8 lg:mt-0"
          >
            {/* Glow behind photo */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)',
                filter: 'blur(28px)',
              }}
              aria-hidden="true"
            />

            {/* Photo frame */}
            <div
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
              style={{ background: '#0d1117' }}
            >
              {!photoError ? (
                <img
                  src={PHOTO}
                  alt="Ehab Ellati"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0d1117, #1e293b)' }}
                >
                  <span
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 900,
                      fontSize: '5rem',
                      background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    EE
                  </span>
                </div>
              )}
              {/* Bottom fade overlay */}
              <div
                className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(13,17,23,0.8), transparent)' }}
                aria-hidden="true"
              />
            </div>

            {/* Floating stat: Honor List */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-14 top-1/4 hidden sm:block bg-surface border border-white/8 rounded-2xl px-4 py-3 text-center shadow-2xl"
            >
              <div className="font-heading font-black text-2xl text-accent">5x</div>
              <div className="text-xs text-slate-500 mt-0.5">Honor List</div>
            </motion.div>

            {/* Floating stat: Internships */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -right-12 bottom-1/4 hidden sm:block bg-surface border border-white/8 rounded-2xl px-4 py-3 text-center shadow-2xl"
            >
              <div className="font-heading font-black text-2xl text-accent">7</div>
              <div className="text-xs text-slate-500 mt-0.5">Internships</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-14 flex items-center gap-3"
        >
          <div className="thin-line max-w-xs" aria-hidden="true" />
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

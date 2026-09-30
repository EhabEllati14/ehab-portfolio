import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(links.map(l => l.id))

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-bg/80 backdrop-blur-2xl border-b border-white/5' : ''}`}>
      <div className="section-wrap flex items-center justify-between h-16">
        <button onClick={() => go('home')} className="font-heading font-black text-base text-white tracking-tight hover:text-accent transition-colors duration-200">
          Ehab<span className="text-accent">.</span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-0" aria-label="Main navigation">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                active === l.id ? 'text-accent' : 'text-slate-500 hover:text-slate-200'
              }`}
              aria-current={active === l.id ? 'page' : undefined}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-bg/95 backdrop-blur-2xl border-b border-white/5 px-6 pb-5 pt-2"
            aria-label="Mobile navigation"
          >
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`block w-full text-left py-2.5 text-sm font-medium border-b border-white/4 last:border-0 transition-colors duration-150 ${
                  active === l.id ? 'text-accent' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

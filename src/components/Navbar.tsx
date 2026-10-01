import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
}

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

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
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

  const navBg = scrolled
    ? isDark
      ? 'bg-bg/85 backdrop-blur-2xl border-b border-white/5'
      : 'bg-white/90 backdrop-blur-2xl border-b border-black/8 shadow-sm'
    : ''

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${navBg}`}>
      <div className="section-wrap flex items-center justify-between h-16">
        <button
          onClick={() => go('home')}
          className={`font-heading font-black text-base tracking-tight transition-colors duration-200 ${isDark ? 'text-white hover:text-accent' : 'text-slate-900 hover:text-accent'}`}
        >
          Ehab<span className="text-accent">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0" aria-label="Main navigation">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                active === l.id
                  ? 'text-accent'
                  : isDark
                    ? 'text-slate-500 hover:text-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
              }`}
              aria-current={active === l.id ? 'page' : undefined}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-110 ${
              isDark
                ? 'border-white/8 text-slate-400 hover:text-yellow-300 hover:border-yellow-300/30 hover:bg-yellow-300/5'
                : 'border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun size={14} aria-hidden="true" /> : <FiMoon size={14} aria-hidden="true" />}
          </button>

          {/* Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-150 ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX size={20} aria-hidden="true" /> : <FiMenu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={`md:hidden border-b px-6 pb-5 pt-2 ${isDark ? 'bg-bg/95 backdrop-blur-2xl border-white/5' : 'bg-white/95 backdrop-blur-2xl border-slate-200'}`}
            aria-label="Mobile navigation"
          >
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`block w-full text-left py-3 text-sm font-medium border-b last:border-0 transition-colors duration-150 ${
                  active === l.id
                    ? 'text-accent'
                    : isDark
                      ? 'text-slate-400 hover:text-white border-white/4'
                      : 'text-slate-500 hover:text-slate-900 border-slate-100'
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

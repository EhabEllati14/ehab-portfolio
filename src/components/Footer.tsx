import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const isDark = useTheme()
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const sl = [
    { href: 'https://github.com/EhabEllati14', icon: FiGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ehab-ellati/', icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'mailto:ellatiehab@gmail.com', icon: FiMail, label: 'Email' },
  ]
  return (
    <footer className={isDark ? 'border-t border-white/5 py-12' : 'border-t border-slate-200 py-12'} role="contentinfo">
      <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-6">
        <button onClick={() => go('home')} className={isDark ? 'font-heading font-black text-base text-white hover:text-accent transition-colors' : 'font-heading font-black text-base text-slate-900 hover:text-accent transition-colors'}>Ehab<span className="text-accent">.</span></button>
        <p className={isDark ? 'text-xs text-slate-600' : 'text-xs text-slate-400'}>2026 Ehab Ellati. All rights reserved.</p>
        <div className="flex items-center gap-2">
          {sl.map(({ href, icon: Icon, label }) => (<a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={isDark ? 'w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-slate-600 hover:text-accent hover:border-accent/30 transition-all hover:scale-110' : 'w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/50 transition-all hover:scale-110'} aria-label={label}><Icon size={14} /></a>))}
        </div>
      </div>
    </footer>
  )
}
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12" role="contentinfo">
      <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-6">
        <button onClick={() => go('home')} className="font-heading font-black text-base text-white hover:text-accent transition-colors duration-200 tracking-tight">
          Ehab<span className="text-accent">.</span>
        </button>
        <p className="text-slate-600 text-xs order-last sm:order-none">
          © 2026 Ehab Ellati. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {[
            { href:'https://github.com/EhabEllati14', icon:FiGithub, label:'GitHub' },
            { href:'https://www.linkedin.com/in/ehab-ellati/', icon:FiLinkedin, label:'LinkedIn' },
            { href:'mailto:ellatiehab@gmail.com', icon:FiMail, label:'Email' },
          ].map(({ href, icon:Icon, label }) => (
            <a key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-slate-600 hover:text-white hover:border-white/20 transition-all duration-200 hover:scale-110"
              aria-label={label}>
              <Icon size={14} aria-hidden="true"/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

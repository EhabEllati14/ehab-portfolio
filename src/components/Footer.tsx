import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/6 py-10 px-4" style={{ background: 'rgba(8,13,20,0.95)' }} role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <button
              onClick={() => scrollTo('home')}
              className="font-heading font-black text-xl text-white hover:text-sky-400 transition-colors duration-200 mb-1 block"
              aria-label="Back to top"
            >
              Ehab <span className="text-sky-400">Ellati</span>
            </button>
            <p className="text-slate-600 text-xs">Software Engineer · AI & GenAI Specialist</p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { href: 'https://github.com/EhabEllati14', icon: FiGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/ehab-ellati/', icon: FiLinkedin, label: 'LinkedIn' },
              { href: 'mailto:ellatiehab@gmail.com', icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-500 hover:text-white hover:border-sky-400/30 transition-all duration-200 hover:scale-110"
                aria-label={label}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/4 text-center">
          <p className="text-slate-600 text-xs">
            © 2026 Ehab Ellati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

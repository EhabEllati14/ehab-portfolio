import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900/80 border-t border-white/10 py-10 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <button
              onClick={() => scrollTo('home')}
              className="font-heading font-black text-2xl gradient-text mb-1 hover:opacity-80 transition-opacity duration-200"
              aria-label="Back to top"
            >
              Ehab Ellati
            </button>
            <p className="text-slate-500 text-xs">Software Engineer | AI & GenAI Specialist</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/EhabEllati14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-accent/40 transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/ehab-ellati/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-accent/40 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} aria-hidden="true" />
            </a>
            <a
              href="mailto:ellatiehab@gmail.com"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-accent/40 transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <FiMail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1.5 flex-wrap">
            <span>© 2026 Ehab Ellati. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center gap-1">
              Built with <FiHeart size={12} className="text-red-400 fill-red-400" aria-hidden="true" /> and React + TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

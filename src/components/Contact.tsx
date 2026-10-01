import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const FORMSPREE = 'https://formspree.io/f/xwpbkdgo'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isDark = useTheme()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (form.message.trim().length < 10) e.message = 'At least 10 characters'
    return e
  }
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setStatus('loading')
    try {
      const r = await fetch(FORMSPREE, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(form) })
      setStatus(r.ok ? 'success' : 'error')
      if (r.ok) setForm({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }

  const inpCls = 'w-full bg-transparent border-b py-3 text-sm outline-none transition-colors duration-200 ' + (isDark ? 'border-white/10 focus:border-accent/60 text-white placeholder-slate-700' : 'border-slate-300 focus:border-accent text-slate-900 placeholder-slate-400')
  const h2Cls = 'display-lg mb-8 ' + (isDark ? 'text-white' : 'text-slate-900')
  const bodyCls = 'text-base leading-relaxed mb-12 ' + (isDark ? 'text-slate-500' : 'text-slate-600')

  return (
    <section id='contact' className='py-28 sm:py-36 section-border' aria-label='Contact'>
      <div className='section-wrap'>
        <div ref={ref} className='grid lg:grid-cols-2 gap-16 lg:gap-24'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <p className='label-sm mb-3'>Contact</p>
            <h2 className={h2Cls}>Let us talk.</h2>
            <p className={bodyCls}>Open to new roles, interesting projects, and good conversations. I respond within 24 hours.</p>
            <div className='space-y-6 mb-12'>
              {[{ icon: FiMail, label: 'Email', val: 'ellatiehab@gmail.com', href: 'mailto:ellatiehab@gmail.com' as string | undefined },
                { icon: FiPhone, label: 'Phone', val: '+972 52-992-1360', href: 'tel:+972529921360' as string | undefined },
                { icon: FiMapPin, label: 'Location', val: 'Jerusalem, Israel', href: undefined as string | undefined },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className='flex items-center gap-4'>
                  <div className={isDark ? 'w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center flex-shrink-0' : 'w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0'}>
                    <Icon size={14} className='text-accent' aria-hidden='true' />
                  </div>
                  <div>
                    <p className={isDark ? 'text-xs mb-0.5 text-slate-600' : 'text-xs mb-0.5 text-slate-400'}>{label}</p>
                    {href ? <a href={href} className={isDark ? 'text-sm font-medium text-slate-300 hover:text-accent transition-colors' : 'text-sm font-medium text-slate-700 hover:text-accent transition-colors'}>{val}</a>
                           : <p className={isDark ? 'text-sm font-medium text-slate-300' : 'text-sm font-medium text-slate-700'}>{val}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-3'>
              {[{ href: 'https://github.com/EhabEllati14', icon: FiGithub, label: 'GitHub' }, { href: 'https://www.linkedin.com/in/ehab-ellati/', icon: FiLinkedin, label: 'LinkedIn' }].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target='_blank' rel='noopener noreferrer'
                  className={isDark ? 'flex items-center gap-2 px-4 py-2 border border-white/8 hover:border-white/20 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/4 transition-all hover:scale-105' : 'flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-slate-400 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all hover:scale-105'}
                  aria-label={label}><Icon size={13} aria-hidden='true' />{label}</a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.6 }}>
            {status === 'success' ? (
              <div className='h-full min-h-[320px] flex flex-col items-center justify-center text-center'>
                <div className='w-14 h-14 rounded-full border border-green-400/20 flex items-center justify-center mb-5'><FiCheckCircle size={26} className='text-green-400' /></div>
                <h3 className={isDark ? 'font-heading font-bold text-xl mb-2 text-white' : 'font-heading font-bold text-xl mb-2 text-slate-900'}>Sent.</h3>
                <p className={isDark ? 'text-sm mb-7 text-slate-500' : 'text-sm mb-7 text-slate-600'}>I will get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className='px-6 py-2.5 bg-accent text-white font-heading font-bold text-sm rounded-2xl hover:bg-sky-400 transition-all'>Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className='space-y-8' noValidate aria-label='Contact form'>
                {[{ id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', ac: 'name' }, { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', ac: 'email' }].map(({ id, label, type, placeholder, ac }) => (
                  <div key={id}>
                    <label htmlFor={id} className={isDark ? 'label-sm block mb-2 text-[0.65rem] text-slate-600' : 'label-sm block mb-2 text-[0.65rem] text-slate-400'}>{label}</label>
                    <input id={id} name={id} type={type} value={form[id as keyof typeof form]} onChange={handle} placeholder={placeholder} autoComplete={ac} aria-invalid={!!errors[id]} className={inpCls} />
                    {errors[id] && <p role='alert' className='mt-1 flex items-center gap-1 text-red-400 text-xs'><FiAlertCircle size={11} />{errors[id]}</p>}
                  </div>
                ))}
                <div>
                  <label htmlFor='message' className={isDark ? 'label-sm block mb-2 text-[0.65rem] text-slate-600' : 'label-sm block mb-2 text-[0.65rem] text-slate-400'}>Message</label>
                  <textarea id='message' name='message' rows={5} value={form.message} onChange={handle} placeholder='Tell me about your project or opportunity...' aria-invalid={!!errors.message} className={inpCls + ' resize-none'} />
                  {errors.message && <p role='alert' className='mt-1 flex items-center gap-1 text-red-400 text-xs'><FiAlertCircle size={11} />{errors.message}</p>}
                </div>
                {status === 'error' && <p role='alert' className='flex items-center gap-2 text-red-400 text-sm'><FiAlertCircle size={13} />Something went wrong. Email me at ellatiehab@gmail.com</p>}
                <button type='submit' disabled={status === 'loading'} className='group flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white font-heading font-bold text-sm rounded-2xl hover:bg-sky-400 transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'>
                  {status === 'loading' ? <><span className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />Sending...</> : <><FiSend size={13} />Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const FORMSPREE = 'https://formspree.io/f/xwpbkdgo'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [errors, setErrors] = useState<Record<string,string>>({})
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const validate = () => {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (form.message.trim().length < 10) e.message = 'At least 10 characters'
    return e
  }

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]:value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]:'' }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setStatus('loading')
    try {
      const r = await fetch(FORMSPREE, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(r.ok ? 'success' : 'error')
      if (r.ok) setForm({ name:'', email:'', message:'' })
    } catch { setStatus('error') }
  }

  const inp = `w-full bg-transparent border-b border-white/10 focus:border-accent/60 py-3 text-white placeholder-slate-700 text-sm outline-none transition-colors duration-200`

  return (
    <section id="contact" className="py-28 sm:py-36 border-t border-white/5" aria-label="Contact">
      <div className="section-wrap">

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.6 }}
          >
            <p className="label-sm mb-3">Contact</p>
            <h2 className="display-lg mb-8">Let's<br />talk.</h2>
            <p className="text-slate-500 text-base leading-relaxed mb-12">
              Open to new roles, interesting projects, and good conversations.
              I respond within 24 hours.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon:FiMail, label:'Email', val:'ellatiehab@gmail.com', href:'mailto:ellatiehab@gmail.com' },
                { icon:FiPhone, label:'Phone', val:'+972 52-992-1360', href:'tel:+972529921360' },
                { icon:FiMapPin, label:'Location', val:'Jerusalem, Israel', href:undefined },
              ].map(({ icon:Icon, label, val, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-accent" aria-hidden="true"/>
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-slate-300 text-sm font-medium hover:text-accent transition-colors duration-150">{val}</a>
                      : <p className="text-slate-300 text-sm font-medium">{val}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href:'https://github.com/EhabEllati14', icon:FiGithub, label:'GitHub' },
                { href:'https://www.linkedin.com/in/ehab-ellati/', icon:FiLinkedin, label:'LinkedIn' },
              ].map(({ href, icon:Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white/8 hover:border-white/20 rounded-xl text-slate-400 hover:text-white text-xs font-medium transition-all duration-200 hover:bg-white/4"
                  aria-label={label}>
                  <Icon size={13} aria-hidden="true"/>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={isInView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.15, duration:0.6 }}
          >
            {status === 'success' ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full border border-green-400/20 flex items-center justify-center mb-5">
                  <FiCheckCircle size={26} className="text-green-400" aria-hidden="true"/>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Sent.</h3>
                <p className="text-slate-500 text-sm mb-7">I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-accent text-bg font-heading font-bold text-sm rounded-2xl hover:bg-sky-300 transition-all duration-200">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-8" noValidate aria-label="Contact form">
                {[
                  { id:'name', label:'Name', type:'text', placeholder:'Your full name', ac:'name' },
                  { id:'email', label:'Email', type:'email', placeholder:'your@email.com', ac:'email' },
                ].map(({ id, label, type, placeholder, ac }) => (
                  <div key={id}>
                    <label htmlFor={id} className="label-sm text-slate-600 mb-2 block">{label}</label>
                    <input id={id} name={id} type={type}
                      value={form[id as keyof typeof form]}
                      onChange={handle}
                      placeholder={placeholder}
                      autoComplete={ac}
                      aria-invalid={!!errors[id]}
                      className={inp}
                    />
                    {errors[id] && (
                      <p role="alert" className="mt-1 flex items-center gap-1 text-red-400 text-xs">
                        <FiAlertCircle size={11} aria-hidden="true"/>{errors[id]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="label-sm text-slate-600 mb-2 block">Message</label>
                  <textarea id="message" name="message" rows={5}
                    value={form.message} onChange={handle}
                    placeholder="Tell me about your project or opportunity..."
                    aria-invalid={!!errors.message}
                    className={`${inp} resize-none`}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1 flex items-center gap-1 text-red-400 text-xs">
                      <FiAlertCircle size={11} aria-hidden="true"/>{errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p role="alert" className="flex items-center gap-2 text-red-400 text-sm">
                    <FiAlertCircle size={13} aria-hidden="true"/>
                    Something went wrong. Email me at ellatiehab@gmail.com
                  </p>
                )}

                <button type="submit" disabled={status==='loading'}
                  className="group flex items-center gap-2.5 px-7 py-3.5 bg-accent text-bg font-heading font-bold text-sm rounded-2xl hover:bg-sky-300 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status==='loading'
                    ? <><span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" aria-hidden="true"/>Sending...</>
                    : <><FiSend size={13} aria-hidden="true"/>Send Message</>
                  }
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

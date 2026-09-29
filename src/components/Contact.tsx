import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiMessageSquare } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpbkdgo'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) {
      e.message = 'Message is required.'
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters.'
    }
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-slate-900/80 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400/60 focus:border-sky-400/40 transition-all duration-200'

  return (
    <section id="contact" className="section-padding bg-primary" aria-label="Contact Ehab Ellati">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to new roles, collaboration, and interesting conversations."
          icon={FiMessageSquare}
          tag="Contact"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Whether you have a role, a project, or just want to connect — my inbox is always open.
              I respond within 24 hours.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: FiMail, label: 'Email', value: 'ellatiehab@gmail.com', href: 'mailto:ellatiehab@gmail.com' },
                { icon: FiPhone, label: 'Phone', value: '+972 52-992-1360', href: 'tel:+972529921360' },
                { icon: FiMapPin, label: 'Location', value: 'Jerusalem, Israel', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center flex-shrink-0 group-hover:border-sky-400/30 transition-colors duration-200">
                    <Icon size={17} className="text-sky-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-300 text-sm font-medium hover:text-sky-400 transition-colors duration-150">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/EhabEllati14"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 glass-card hover:border-sky-400/30 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                aria-label="GitHub"
              >
                <FiGithub size={15} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ehab-ellati/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 glass-card hover:border-sky-400/30 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'success' ? (
              <div className="glass-card p-12 flex flex-col items-center justify-center text-center min-h-[320px]">
                <div className="w-14 h-14 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center mb-5">
                  <FiCheckCircle size={28} className="text-green-400" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Message Sent</h3>
                <p className="text-slate-500 text-sm mb-7">I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-105"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5" noValidate aria-label="Contact form">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', autoComplete: 'email' },
                ].map(({ id, label, type, placeholder, autoComplete }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-slate-400 text-sm font-medium mb-1.5">
                      {label} <span className="text-sky-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={id} name={id} type={type}
                      value={form[id as keyof FormState]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      autoComplete={autoComplete}
                      aria-describedby={errors[id as keyof FormErrors] ? `${id}-error` : undefined}
                      aria-invalid={!!errors[id as keyof FormErrors]}
                      className={`${inputBase} ${errors[id as keyof FormErrors] ? 'border-red-500/40' : 'border-white/8 hover:border-white/14'}`}
                    />
                    {errors[id as keyof FormErrors] && (
                      <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1 text-red-400 text-xs">
                        <FiAlertCircle size={11} aria-hidden="true" />
                        {errors[id as keyof FormErrors]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-1.5">
                    Message <span className="text-sky-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-500/40' : 'border-white/8 hover:border-white/14'}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 flex items-center gap-1 text-red-400 text-xs">
                      <FiAlertCircle size={11} aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p role="alert" className="flex items-center gap-2 text-red-400 text-sm">
                    <FiAlertCircle size={14} aria-hidden="true" />
                    Something went wrong. Email me directly at ellatiehab@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-primary"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={14} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

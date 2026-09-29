import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
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
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-slate-800/60 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200'

  return (
    <section id="contact" className="section-padding" aria-label="Contact Ehab Ellati">
      <div className="container-max max-w-6xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to new opportunities, collaborations, and interesting conversations."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Whether you have a role, a project, or just want to connect — my inbox is always open. I respond within
              24 hours.
            </p>

            <div className="space-y-5 mb-8">
              <a
                href="mailto:ellatiehab@gmail.com"
                className="flex items-center gap-4 group"
                aria-label="Send email to Ehab"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                  <FiMail size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-accent transition-colors duration-200">
                    ellatiehab@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+972529921360"
                className="flex items-center gap-4 group"
                aria-label="Call Ehab"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                  <FiPhone size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Phone</p>
                  <p className="text-white text-sm font-medium group-hover:text-accent transition-colors duration-200">
                    +972 52-992-1360
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <FiMapPin size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Location</p>
                  <p className="text-white text-sm font-medium">Jerusalem, Israel</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/EhabEllati14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 glass-card hover:border-accent/40 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                aria-label="GitHub Profile"
              >
                <FiGithub size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ehab-ellati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 glass-card hover:border-accent/40 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === 'success' ? (
              <div className="glass-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <FiCheckCircle size={48} className="text-green-400 mb-4" aria-hidden="true" />
                <h3 className="font-heading font-bold text-xl text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 bg-accent hover:bg-sky-400 text-slate-900 font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5" noValidate aria-label="Contact form">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-1.5">
                    Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    className={`${inputBase} ${errors.name ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 flex items-center gap-1 text-red-400 text-xs">
                      <FiAlertCircle size={11} aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-1.5">
                    Email <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className={`${inputBase} ${errors.email ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 flex items-center gap-1 text-red-400 text-xs">
                      <FiAlertCircle size={11} aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-1.5">
                    Message <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
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
                    Something went wrong. Please try emailing me directly at ellatiehab@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-heading font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={15} aria-hidden="true" />
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

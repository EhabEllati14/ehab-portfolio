import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity:0, scale:0.8 }}
          animate={{ opacity:1, scale:1 }}
          exit={{ opacity:0, scale:0.8 }}
          transition={{ duration:0.2 }}
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-2xl bg-accent text-bg flex items-center justify-center hover:bg-sky-300 transition-all duration-200 hover:scale-110 shadow-xl shadow-accent/20"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={16} aria-hidden="true"/>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

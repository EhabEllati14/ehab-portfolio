import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div
      style={{
        background: isDark ? '#06080f' : '#f8fafc',
        minHeight: '100vh',
        transition: 'background 0.3s ease',
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

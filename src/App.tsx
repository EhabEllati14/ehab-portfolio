import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <ThemeContext.Provider value={isDark}>
      <div className={isDark ? 'dark' : 'light'} style={{ minHeight: '100vh' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

        <main id="main-content">
          <Hero />
          <About />
          <Journey />
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
    </ThemeContext.Provider>
  )
}


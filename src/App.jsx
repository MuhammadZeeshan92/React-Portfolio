import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const projects = [
    {
      title: 'Weather Pulse',
      description: 'Lightweight weather intelligence experience fetching real-time conditions with clean UI micro-interactions optimized for any device.',
      stack: 'HTML • CSS • JavaScript',
      live: 'https://dev-zeewheatherapp.netlify.app/',
      code: 'https://github.com/MuhammadZeeshan92/WEB-ASCEND-PROJECT-5',
    },
    {
      title: 'Tic Tac Toe Arena',
      description: 'Two-player browser game focusing on turn logic, win-state detection, and responsive layout for quick casual play.',
      stack: 'HTML • CSS • JavaScript',
      live: 'https://dev-zeetictactoe.netlify.app/',
      code: 'https://github.com/MuhammadZeeshan92/TIC-TAC-Toe',
    },
    {
      title: 'Stone Paper Scissor',
      description: 'Animated RPS challenge featuring instant feedback, score tracking, and playful interface polish.',
      stack: 'HTML • CSS • JavaScript',
      live: 'https://dev-zeestonepaperscissor.netlify.app/',
      code: 'https://github.com/MuhammadZeeshan92/Stone-Paper-Scissor',
    },
  ]

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Header navLinks={navLinks} />
      <main className={`flex flex-col gap-24 px-6 pb-16 pt-32 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Projects items={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
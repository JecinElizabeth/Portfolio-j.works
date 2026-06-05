'use client'

import { useEffect, useState } from 'react'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Journey } from '@/components/journey'
import { Quote } from '@/components/quote'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SmoothScrollProvider>
      <div className={`${isLoaded ? 'page-loaded' : 'page-loading'}`}>
        {/* Grain Overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Custom Cursor (Desktop only) */}
        <CustomCursor />

        {/* Scroll Reveal Observer */}
        <ScrollReveal />

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Section Transition Spacer */}
        <div className="h-[120px] bg-[#0A0A0A] max-md:h-[60px]" aria-hidden="true" />

        {/* White Content Panel */}
        <main className="relative z-10 shadow-[0_-60px_100px_rgba(0,0,0,0.4)]">
          <Projects />
          <Skills />
          <Journey />
        </main>

        {/* Quote/About Section */}
        <Quote />

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}

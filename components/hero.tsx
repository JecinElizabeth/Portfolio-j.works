'use client'

import { useEffect, useState } from 'react'
import { AnimatedMesh } from './animated-mesh'

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const words = [
    'tech enthusiast',
    'problem solver',
    'AI explorer',
    'creative developer',
    'data nerd',
  ]

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (isTyping) {
      if (displayText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentWordIndex, words])

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center px-[var(--content-padding)] overflow-hidden bg-[#0A0A0A]"
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AnimatedMesh />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[800px]">
        <h1 className="font-sans text-[clamp(48px,7vw,96px)] font-normal leading-[1.15] tracking-[-0.02em]">
          <span className="text-[#707070]">Sup, I&apos;m </span>
          <span className="text-white font-semibold">Jecin.</span>
        </h1>

        <h2 className="font-sans text-[clamp(48px,7vw,96px)] font-normal leading-[1.15] tracking-[-0.02em] mt-0">
          <span className="text-[#707070]">I&apos;m a </span>
          <span className="text-white">{displayText}</span>
          <span
            className="inline-block text-white ml-0.5"
            style={{ animation: 'blink-cursor 1s step-end infinite' }}
          >
            |
          </span>
        </h2>

        <p className="text-[#707070] text-[clamp(14px,1.1vw,17px)] max-w-[340px] mt-6 leading-[1.6]">
          Passionately creating innovative digital experiences, rooted in user needs.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <button
          onClick={handleScrollToProjects}
          className="w-[32px] h-[52px] border border-[rgba(255,255,255,0.2)] rounded-full relative cursor-pointer bg-transparent transition-all duration-300 hover:border-[rgba(255,255,255,0.4)]"
          aria-label="Scroll to projects"
        >
          <div
            className="w-1 h-1 bg-white rounded-full absolute left-1/2 -translate-x-1/2"
            style={{ animation: 'scroll-dot 1.8s cubic-bezier(0.76, 0, 0.24, 1) infinite', top: '10px' }}
          />
        </button>
      </div>
    </section>
  )
}

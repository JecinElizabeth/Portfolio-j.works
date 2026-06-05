'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#about', label: 'About' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    document.body.style.overflow = ''
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-100 flex items-center justify-between px-5 py-5 md:px-[30px] transition-all duration-400 border-b ${
          isScrolled
            ? 'bg-[rgba(10,10,10,0.8)] backdrop-blur-[20px] border-[rgba(255,255,255,0.05)]'
            : 'bg-transparent border-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          className="flex items-center gap-2.5 bg-transparent border-none text-white cursor-pointer font-sans text-[15px] p-2 transition-opacity duration-200 hover:opacity-70"
          onClick={openMenu}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
          </svg>
          <span>Menu</span>
        </button>

        <Link
          href="#hero"
          className="font-mono font-medium text-base tracking-[-0.01em] text-white transition-opacity duration-200 hover:opacity-80"
          aria-label="Home"
          onClick={(e) => handleLinkClick(e, '#hero')}
        >
          j.works
        </Link>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-200 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!isMenuOpen}
      >
        <button
          className="absolute top-5 right-5 p-5 bg-transparent border-none text-white text-[28px] cursor-pointer transition-opacity duration-200 hover:opacity-70"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {menuLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="font-sans text-[clamp(32px,5vw,48px)] font-semibold text-white opacity-70 transition-all duration-200 hover:opacity-100 hover:translate-x-2"
            onClick={(e) => handleLinkClick(e, link.href)}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {link.label}
          </a>
        ))}

        <div className="flex gap-6 mt-5">
          <a
            href="https://linkedin.com/in/jecin-e-245597296"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-normal font-mono opacity-50 text-white hover:opacity-80 transition-opacity duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jecinelizabeth@gmail.com"
            className="text-base font-normal font-mono opacity-50 text-white hover:opacity-80 transition-opacity duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </>
  )
}

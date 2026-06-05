'use client'

export function Footer() {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#about', label: 'About' },
  ]

  const connectLinks = [
    { href: 'https://linkedin.com/in/jecin-e-245597296', label: 'LinkedIn', external: true },
    { href: 'mailto:jecinelizabeth@gmail.com', label: 'Email', external: false },
    { href: 'tel:+918122612382', label: 'Phone', external: false },
  ]

  return (
    <footer className="py-20 px-[var(--content-padding)] bg-white text-[#0A0A0A] max-md:py-[60px]">
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_auto] gap-10 items-start max-lg:grid-cols-2 max-lg:gap-y-10 max-lg:gap-x-[30px] max-md:grid-cols-1 max-md:gap-[30px]">
        {/* Brand */}
        <div className="reveal">
          <div className="font-mono text-[48px] font-medium leading-none tracking-[-0.02em] text-[#0A0A0A] max-lg:text-[36px] max-md:text-[32px]">
            j.works
          </div>
        </div>

        {/* Credits */}
        <div className="reveal reveal-delay-1">
          <div className="text-sm font-semibold uppercase tracking-[0.1em] text-[#A0A0A0] mb-4">
            Credits
          </div>
          <span className="block text-[15px] text-[#4A4A4A] py-0.5">© Jecin E.R. – 2025</span>
          <span className="block text-[15px] text-[#4A4A4A] py-0.5">Chennai, India</span>
        </div>

        {/* Navigate */}
        <div className="reveal reveal-delay-2">
          <div className="text-sm font-semibold uppercase tracking-[0.1em] text-[#A0A0A0] mb-4">
            Navigate
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-base text-[#0A0A0A] py-1 transition-colors duration-200 hover:text-[#3B82F6]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Connect */}
        <div className="reveal reveal-delay-3">
          <div className="text-sm font-semibold uppercase tracking-[0.1em] text-[#A0A0A0] mb-4">
            Connect
          </div>
          {connectLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="block text-base text-[#0A0A0A] py-1 transition-colors duration-200 hover:text-[#3B82F6]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col items-center reveal reveal-delay-4">
          <button
            onClick={handleBackToTop}
            className="w-14 h-14 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center cursor-pointer bg-transparent text-[#0A0A0A] transition-all duration-200 hover:bg-[#0A0A0A] hover:text-white group"
            aria-label="Back to top"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
          <span className="mt-2 text-xs text-[#4A4A4A]">Back to top</span>
        </div>
      </div>

      <div className="mt-20 pt-5 border-t border-[#F0F0F0] flex justify-between items-center text-sm text-[#A0A0A0] max-md:flex-col max-md:gap-3 max-md:items-start max-md:mt-10">
        <span>Designed with intention.</span>
        <span>Built with code.</span>
      </div>
    </footer>
  )
}

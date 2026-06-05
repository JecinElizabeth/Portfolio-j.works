'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -20px 0px',
        }
      )

      revealElements.forEach((el) => observer.observe(el))

      return () => {
        revealElements.forEach((el) => observer.unobserve(el))
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return null
}

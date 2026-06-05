'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only activate on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return

    const dot = dotRef.current
    if (!dot) return

    const ease = 0.18

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      dot.classList.add('visible')
    }

    const handleMouseLeave = () => {
      dot.classList.remove('visible')
    }

    const handleMouseEnter = () => {
      dot.classList.add('visible')
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Smooth follow animation
    let animationId: number
    const animate = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * ease
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * ease

      dot.style.left = `${dotPos.current.x}px`
      dot.style.top = `${dotPos.current.y}px`

      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)

    // Hover effects on interactive elements
    const interactiveEls = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], .project-card'
    )

    const handleInteractiveEnter = () => dot.classList.add('hover')
    const handleInteractiveLeave = () => dot.classList.remove('hover')

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleInteractiveEnter)
      el.addEventListener('mouseleave', handleInteractiveLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(animationId)

      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleInteractiveEnter)
        el.removeEventListener('mouseleave', handleInteractiveLeave)
      })
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" />
}

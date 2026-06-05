'use client'

import { useEffect, useRef } from 'react'

export function AnimatedMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      // Draw flowing mesh lines
      const lineCount = 80
      const amplitude = 60
      const frequency = 0.008

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath()
        const baseY = (height * 0.3) + (i * (height * 0.6) / lineCount)

        for (let x = 0; x <= width; x += 3) {
          const wave1 = Math.sin(x * frequency + time * 0.5 + i * 0.1) * amplitude
          const wave2 = Math.sin(x * frequency * 1.5 + time * 0.3 + i * 0.15) * (amplitude * 0.5)
          const wave3 = Math.sin(x * frequency * 0.5 + time * 0.7 + i * 0.05) * (amplitude * 0.3)
          
          const y = baseY + wave1 + wave2 + wave3

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      time += 0.015
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

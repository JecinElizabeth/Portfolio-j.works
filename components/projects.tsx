'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  backgroundText: string
  mockupImage?: string
}

const projects: Project[] = [
  {
    id: 'mindbridge',
    title: 'MindBridge',
    subtitle: 'AI-powered mental wellness companion',
    tags: ['AI', 'NLP', 'Python'],
    backgroundText: 'MINDBRIDGE',
    mockupImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20MindBrigde-hpLQ62OeZri13NVlKksVSrHQkuPAyA.png',
  },
  {
    id: 'campus',
    title: 'Campus Reimagined',
    subtitle: 'University website redesign',
    tags: ['UI/UX', 'Figma', 'Research'],
    backgroundText: 'CAMPUS',
    mockupImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Campus%20Reimagined-phgyPfhvhUpgcPdXxWGCH71HPAIxWx.jpeg',
  },
  {
    id: 'datalens',
    title: 'DataLens',
    subtitle: 'Analytics dashboard for business insights',
    tags: ['Data', 'Power BI', 'Python'],
    backgroundText: 'DATALENS',
    mockupImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DataLens-16LUfOmjge0u4AWAbNTuMMeTf1shLg.jpeg',
  },
]

function ScrollingText({ text }: { text: string }) {
  return (
    <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
      <div className="flex animate-scroll-text whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-[clamp(120px,18vw,280px)] font-extrabold text-transparent tracking-[-0.03em] mx-8"
            style={{
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.08)',
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -8 : 8, 0, index % 2 === 0 ? 8 : -8])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200])

  const springConfig = { stiffness: 100, damping: 30 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)
  const scaleSpring = useSpring(scale, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10
    setMousePosition({ x, y })
  }

  return (
    <div
      ref={cardRef}
      className="relative min-h-screen flex items-center justify-center py-20"
      style={{ perspective: '1500px' }}
    >
      {/* Scrolling Background Text */}
      <ScrollingText text={project.backgroundText} />

      {/* 3D Card */}
      <motion.div
        className="relative z-10 w-full max-w-[1000px] mx-auto px-[var(--content-padding)]"
        style={{
          rotateX: isHovered ? -mousePosition.y : rotateXSpring,
          rotateY: isHovered ? mousePosition.x : rotateYSpring,
          scale: scaleSpring,
          opacity,
          translateZ: z,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mockup Frame */}
        <div
          className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl"
          style={{
            boxShadow: isHovered
              ? '0 60px 120px rgba(0, 0, 0, 0.4), 0 20px 60px rgba(0, 0, 0, 0.3)'
              : '0 40px 80px rgba(0, 0, 0, 0.3), 0 15px 40px rgba(0, 0, 0, 0.2)',
            transform: 'translateZ(50px)',
          }}
        >
          {/* Device Frame Top Bar */}
          <div className="h-8 bg-[#2a2a2a] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Screen Content */}
          <div className="aspect-[16/10] bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
            {project.mockupImage ? (
              <img
                src={project.mockupImage}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[120px] font-bold text-white/10">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Project Info */}
        <motion.div
          className="mt-8 text-center"
          style={{ transform: 'translateZ(30px)' }}
        >
          <h3 className="text-[clamp(24px,3vw,40px)] font-semibold text-[#0a0a0a] mb-2">
            {project.title}
          </h3>
          <p className="text-[#707070] text-base mb-4">{project.subtitle}</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-[#e0e0e0] text-sm text-[#4a4a4a] bg-white transition-all duration-200 hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="bg-white text-[#0A0A0A] rounded-t-3xl relative z-10 overflow-hidden max-md:rounded-t-2xl">
      {/* Section Header */}
      <div className="pt-[120px] pb-10 px-[var(--content-padding)] max-md:pt-[60px]">
        <h2 className="font-sans text-[clamp(36px,5vw,72px)] font-bold text-[#0A0A0A] leading-[1.1] tracking-[-0.02em] reveal">
          Selected works
          <sup className="text-[0.35em] align-super text-[#707070] font-normal ml-2">({projects.length})</sup>
        </h2>
      </div>

      {/* 3D Project Cards */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}

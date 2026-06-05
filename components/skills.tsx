'use client'

export function Skills() {
  const skills = [
    { category: 'Languages', items: 'Python · Java · C · SQL · HTML/CSS' },
    { category: 'AI & ML', items: 'BERT · NLP · Emotion Classification · Machine Learning · Streamlit' },
    { category: 'Data', items: 'Power BI · Excel · Data Analysis · Data Interpretation · API Integration' },
    { category: 'Design', items: 'Figma · UI/UX Principles · Information Architecture' },
    { category: 'Core CS', items: 'DBMS · OOP · Problem Solving · Data Structures' },
  ]

  return (
    <section id="skills" className="py-[120px] px-[var(--content-padding)] bg-white text-[#0A0A0A] max-md:py-[60px]">
      <div className="mb-20 reveal max-md:mb-10">
        <h2 className="font-sans text-[clamp(36px,4.5vw,72px)] font-bold text-[#0A0A0A] leading-[1.1] tracking-[-0.02em]">
          Skills & tools
        </h2>
      </div>

      <div className="w-full">
        {skills.map((skill, index) => (
          <div
            key={skill.category}
            className={`flex flex-row items-baseline py-6 border-b border-[#F0F0F0] transition-colors duration-200 hover:bg-[#FAFAFA] reveal reveal-delay-${
              index + 1
            } ${index === 0 ? 'border-t' : ''} max-md:flex-col max-md:gap-2`}
          >
            <div className="w-[200px] shrink-0 font-semibold text-base text-[#0A0A0A] max-md:w-full">
              {skill.category}
            </div>
            <div className="flex-1 text-[#4A4A4A] text-base leading-[1.8]">
              {skill.items}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

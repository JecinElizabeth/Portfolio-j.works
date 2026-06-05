'use client'

export function Journey() {
  const journeyItems = [
    {
      name: 'SRM Institute of Science and Technology',
      role: 'B.Tech CSE — CGPA: 9.21',
      date: '2023 – 2027',
      location: 'Chennai',
    },
    {
      name: 'Altair',
      role: 'Data Science Virtual Intern',
      date: '2024',
      location: 'Virtual',
    },
    {
      name: 'VEI Technologies',
      role: 'MERN Stack Intern',
      date: '2024',
      location: 'Virtual',
    },
    {
      name: 'SSVM World School',
      role: 'Class 12: 78% · Class 10: 82%',
      date: '2016 – 2023',
      location: 'Coimbatore',
    },
  ]

  return (
    <section
      id="journey"
      className="py-[120px] px-[var(--content-padding)] bg-white text-[#0A0A0A] rounded-b-3xl max-md:py-[60px] max-md:rounded-b-2xl"
    >
      <div className="mb-20 reveal max-md:mb-10">
        <h2 className="font-sans text-[clamp(36px,4.5vw,72px)] font-bold text-[#0A0A0A] leading-[1.1] tracking-[-0.02em]">
          Journey so far<sup className="text-[0.35em] align-super text-[#4A4A4A] font-normal ml-1">(4)</sup>
        </h2>
      </div>

      <div className="w-full">
        {journeyItems.map((item, index) => (
          <div
            key={item.name}
            className={`grid grid-cols-[2fr_1.5fr_1fr_1fr] py-6 border-b-2 border-[#0A0A0A] items-center gap-5 transition-all duration-200 hover:bg-[#FAFAFA] hover:border-l-[3px] hover:border-l-[#3B82F6] hover:pl-4 reveal ${
              index === 0 ? 'border-t-2' : ''
            } max-lg:grid-cols-2 max-lg:gap-3 max-md:grid-cols-1 max-md:gap-2 max-md:py-5`}
          >
            <div className="font-medium text-lg text-[#0A0A0A] max-md:text-base">{item.name}</div>
            <div className="text-base text-[#4A4A4A]">{item.role}</div>
            <div className="text-base text-[#4A4A4A]">{item.date}</div>
            <div className="text-base text-[#4A4A4A]">{item.location}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

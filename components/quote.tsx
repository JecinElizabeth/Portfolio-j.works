'use client'

export function Quote() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0A0A0A] text-white flex items-center px-[var(--content-padding)] py-[120px] relative rounded-b-3xl overflow-hidden max-md:flex-col max-md:gap-10 max-md:pt-20 max-md:pb-20 max-md:min-h-fit max-md:rounded-b-2xl"
    >
      <div className="reveal max-w-[900px] max-md:max-w-full pr-[350px] max-lg:pr-[280px] max-md:pr-0">
        <p className="font-sans text-[clamp(28px,4vw,64px)] font-normal leading-[1.25] text-[#707070] tracking-[-0.01em]">
          I believe technology should feel like a conversation, not a command. The best systems are the
          ones you forget are even there — they just{' '}
          <em className="text-white not-italic font-semibold">work</em>, quietly making life a little
          easier.
        </p>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-[var(--content-padding)] w-[300px] h-auto rounded-2xl overflow-hidden reveal max-lg:w-[240px] max-md:static max-md:translate-y-0 max-md:w-full max-md:max-w-[300px]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/self-avator-Lu5CzesEAgUaO9oGz1enJuN226a8qy.png"
          alt="Frontend & UI/UX Developer avatar"
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  )
}

import React from 'react'

function Hero() {
  return (
    <section id="hero" className="mx-auto flex w-full max-w-5xl flex-col gap-10 text-center md:gap-12">
      <p className="text-sm uppercase tracking-[0.35em] text-white/60">Frontend & backend Engineer</p>
      <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        Crafting immersive digital systems that feel effortless and perform flawlessly.
      </h1>
      <p className="text-lg text-white/70 sm:text-xl">
        I help ambitious teams launch standout products with thoughtful design, scalable architecture, and a focus on measurable outcomes.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a href="#projects" className="rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-teal-500/25 transition hover:-translate-y-1 hover:shadow-cyan-500/40">
          View Work
        </a>
        <a href="#about" className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white/90 transition hover:-translate-y-1 hover:border-white/50">
          Learn More
        </a>
      </div>
    </section>
  )
}

export default Hero


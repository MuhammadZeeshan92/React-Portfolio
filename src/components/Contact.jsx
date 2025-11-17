import React from 'react'

function Contact() {
  return (
    <section id="contact" className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5 p-10 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-teal-200/80">Let&apos;s collaborate</p>
      <h2 className="text-3xl font-semibold">Have a problem worth solving?</h2>
      <p className="text-base text-white/70">I partner with founders and teams to move from concept to launch with clarity, precision, and style.</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a href="mailto:hello@novadev.studio" className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:-translate-y-1">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/muhammad-zeeshan-535408380" className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/90 transition hover:-translate-y-1 hover:border-teal-200/60" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact


import React from 'react'

function Projects({ items }) {
  return (
    <section id="projects" className="mx-auto flex w-full max-w-6xl flex-col gap-12">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-teal-200/80">Projects</p>
        <h2 className="text-3xl font-semibold">Selected Work</h2>
        <p className="text-base text-white/70">High-impact launches spanning SaaS, commerce, and operations.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(project => (
          <article key={project.title} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition duration-300 hover:-translate-y-2 hover:border-teal-200/40 hover:shadow-2xl hover:shadow-teal-500/20">
            <div className="h-12 w-12 rounded-2xl bg-white/10" />
            <div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-white/70">{project.description}</p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{project.stack}</p>
            <div className="flex gap-4 text-sm font-semibold">
              <a href={project.live} className="text-teal-200 transition hover:text-white" target="_blank" rel="noreferrer">
                Live ↗
              </a>
              <a href={project.code} className="text-white/70 transition hover:text-white" target="_blank" rel="noreferrer">
                Code ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects


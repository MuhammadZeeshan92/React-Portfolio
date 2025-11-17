import React from 'react'

function About() {
  return (
    <section id="about" className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-teal-200/80">About</p>
        <h2 className="text-3xl font-semibold">Practical full-stack builder with CS roots</h2>
        <p className="text-base text-white/80">
          I am a Computer Science student and full-stack developer focused on building practical, maintainable applications. I started with C++ and OOP, strengthened my problem-solving and algorithmic thinking, and now build projects using the MERN stack and Flutter.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Core strengths & expertise</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>• MERN Stack — React (Zustand, Context API), Node.js, Express.js, MongoDB, authentication</li>
            <li>• Flutter — cross-platform apps, state management, API integration</li>
            <li>• Languages & fundamentals — C++, OOP, data structures & algorithms, algorithmic thinking, clean code, problem solving</li>
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Tools & practical skills</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>• Real-time apps: Practicing Socket.io</li>
            <li>• DevOps basics: Docker (implemented via projects), Git, CI/CD fundamentals</li>
            <li>• Data & AI: NumPy, Pandas, Matplotlib, Seaborn; currently studying Statistics & Probability as foundation for ML</li>
            <li>• Design & soft skills: Adobe Photoshop, basic UI principles, communication</li>
          </ul>
        </div>
      </div>
      <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Professional development</h3>
        <ul className="space-y-3 text-sm text-white/80">
          <li>• Web Ascend — enrolled to revise MERN concepts and strengthen project work</li>
          <li>• Awefera — learning AI/ML/Deep Learning and soft skills; building projects at each step</li>
        </ul>
        <p className="text-sm text-white/70">
          I document what I learn and build, and I’m open to collaboration, mentorship, and projects that push my skills further.
        </p>
      </div>
    </section>
  )
}

export default About


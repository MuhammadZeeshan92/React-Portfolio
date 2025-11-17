import React from 'react'

function Header({ navLinks }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/5 bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-white transition hover:text-teal-300">Nova Dev</a>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-white/70 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-teal-300 hover:text-white">
          Let&apos;s Talk
        </a>
      </div>
    </header>
  )
}

export default Header


import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-center text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Zee Dev</span>
        <div className="flex justify-center gap-6">
          {['Twitter', 'Dribbble', 'GitHub'].map(platform => (
            <a key={platform} href="https://github.com/MuhammadZeeshan92" className="transition hover:text-white">
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer


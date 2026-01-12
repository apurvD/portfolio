import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="brand text-white font-bold">Portfolio - Apurv Deshpande</Link>

        <button
          onClick={() => setOpen(o => !o)}
          className="sm:hidden text-white"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className={`sm:flex gap-6 items-center ${open ? 'flex flex-col' : 'hidden sm:flex'}`}>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/#experience" className="nav-link">Experience</a></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><a href="/#certifications" className="nav-link">Certifications</a></li>
          <li><a href="/#about" className="nav-link">About</a></li>
          <li><a href="/#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

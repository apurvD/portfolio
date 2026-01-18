import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleNav = () => {
    setOpen(prev => !prev)
  }

  return (
    <nav className={`topnav ${open ? 'responsive' : ''}`}>
      <center>
        <Link to="/" className="active">Portfolio - Apurv Deshpande</Link>

        <a href="/#experience">Experience</a>
        <Link to="/projects">Projects</Link>
        <a href="/#certifications">Certifications</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </center>
    </nav>
  )
}
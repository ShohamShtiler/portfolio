import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          Shoham Shtiler
        </a>

        <button
          className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__nav ${isOpen ? 'is-open' : ''}`}>
          <ul className="navbar__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

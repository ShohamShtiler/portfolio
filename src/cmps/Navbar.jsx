import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_LINKS = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(['home', 'about', 'projects', 'contact'])

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
            {NAV_LINKS.map(({ href, label, id }) => (
              <li key={id}>
                <a
                  href={href}
                  className={activeId === id ? 'is-active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

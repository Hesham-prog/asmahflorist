import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Flower2, Phone, Menu, X } from 'lucide-react'
import { getWhatsAppLinkGeneral } from '../data/products'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Asmah Florist Logo" className="navbar-logo-img" />
          <div className="logo-text">
            <span className="logo-name">Asmah</span>
            <span className="logo-sub">Florist</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Katalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Tentang Kami
            </NavLink>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="navbar-cta">
          <a
            href={getWhatsAppLinkGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-wa-btn"
            id="navbar-whatsapp-btn"
          >
            <Phone size={16} />
            <span>Hubungi Kami</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li>
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              🏠 Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              🌸 Katalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
              💫 Tentang Kami
            </NavLink>
          </li>
          <li>
            <a
              href={getWhatsAppLinkGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mobile-wa-btn"
            >
              📱 Hubungi via WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCode, FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import './Nav.css'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand">
          <FaCode className="brand-icon" />
          <span>Sakshi Lokhande</span>
        </Link>
      <div className="nav-links">
        <Link to="/" className={isActive('/') ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>
          About
        </Link>
        <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>
          Skills
        </Link>
        <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/experience" className={isActive('/experience') ? 'active' : ''}>
          Experience
        </Link>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
          Contact
        </Link>
      </div>
        <button className="hamburger-menu" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <FaBars />
        </button>
      </nav>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}

export default Nav

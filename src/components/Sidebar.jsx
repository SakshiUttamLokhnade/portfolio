import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = (path) => {
    navigate(path)
    onClose()
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Sakshi Lokhande</h3>
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
        <nav className="sidebar-nav">
          <Link
            to="/"
            className={`sidebar-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`sidebar-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={`sidebar-link ${isActive('/skills') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/skills')}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`sidebar-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/projects')}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={`sidebar-link ${isActive('/experience') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/experience')}
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className={`sidebar-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

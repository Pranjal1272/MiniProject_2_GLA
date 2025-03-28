"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
          <span>PetShielders</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-toggle-icon"></span>
        </button>

        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/pets" className="navbar-link">
            Get a Friend
          </Link>
         
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/Rescue" className="btn btn-primary">
            Rescue
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
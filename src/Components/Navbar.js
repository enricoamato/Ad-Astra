import React from 'react'

const Navbar = () => {
  return (
      <nav className="navbarContainer">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA API</a></li>
          <li><a href="./CV-ENG.pdf" download>Resume</a></li>
        </ul>
      </nav>
  )
}

export default Navbar

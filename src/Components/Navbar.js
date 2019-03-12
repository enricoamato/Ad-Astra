import React from 'react'

const Navbar = () => {
  return (
      <nav className="navbarContainer">
        <ul>
          <li><a href="https://api.nasa.gov/">Home</a></li>
          <li><a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA API</a></li>
          <li><a href="https://api.nasa.gov/">About</a></li>
          <li><a href="https://api.nasa.gov/">Resume</a></li>
        </ul>
      </nav>
  )
}

export default Navbar

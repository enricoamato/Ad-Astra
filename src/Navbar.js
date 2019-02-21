import React from 'react'

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <nav>
        <ul>
          <a href="#">Home</a>
          <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA API</a>
          <a href="#">About</a>
          <a href="#">Resume</a>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

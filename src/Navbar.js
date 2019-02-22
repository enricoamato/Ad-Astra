import React from 'react'

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <nav>
        <ul>
          <a href="https://api.nasa.gov/">Home</a>
          <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA API</a>
          <a href="https://api.nasa.gov/">About</a>
          <a href="https://api.nasa.gov/">Resume</a>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Gallery from './Gallery'

function AppRouter() {
  return(
    <Router>
      <div>
        <nav className="navbar-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery/">Gallery</Link>
            </li>
            <li>
              <a href="https://api.nasa.gov/">NASA API</a>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/gallery/" exact component={Gallery} />
        <Route path="https://api.nasa.gov/" />

      </div>
    </Router>
  )
}

export default AppRouter

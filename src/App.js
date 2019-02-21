import React from 'react'
import MainLandingPage from './MainLandingPage'
import Apod from './Apod'
import Navbar from './Navbar'

class App extends React.Component {



  render() {
    return(
      <div>
        <Navbar />
        <MainLandingPage />
        <Apod />
      </div>

    )
  }
} //class

export default App

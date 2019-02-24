import React from 'react'
import MainLandingPage from './MainLandingPage'
import Apod from './Apod'
import Navbar from './Navbar'
import PreviousApod from './PreviousApod'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: undefined,
      date: undefined,
      explanation: undefined,
      mediaUrl: undefined,
      media_type: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    const endpoint = 'https://api.nasa.gov/planetary/apod?'
    const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
    fetch(`${endpoint}api_key=${key}`)
      .then(res => res.json())
      .then(res => this.setState({
        total: res,
        date: res.date,
        explanation: res.explanation,
        mediaUrl: res.url,
        media_type: res.media_type,
        isLoading: false
      }))
  }

  render() {
    const {mediaUrl, date, explanation, isLoading, media_type} = this.state
    if(!isLoading){
    return(
      <div>
        <Navbar />
        <MainLandingPage />
        <Apod
          mediaUrl={mediaUrl}
          date={date}
          explanation={explanation}
          isLoading={isLoading}
          media_type={media_type}
        />
        <PreviousApod
          mediaUrl={mediaUrl}
          date={date}
        />
      </div>
    )}else{
      return(
        <div>
          <Navbar />
          <MainLandingPage />
          <h1>Loading...</h1>
        </div>
      )
    }
  }
} //class

export default App

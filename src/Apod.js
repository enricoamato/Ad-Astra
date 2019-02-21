import React from 'react'

class Apod extends React.Component {
  state = {
    total: undefined,
    date: undefined,
    explanation: undefined,
    apodPicUrl: undefined,
    isLoading: true,
    resParam: undefined
  }

  componentDidMount() {
    const endpoint = 'https://api.nasa.gov/planetary/apod'
    const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
    fetch(`${endpoint}?api_key=${key}`)
      .then(res => res.json())
      .then(res => this.setState({
        total: res,
        date: res.date,
        explanation: res.explanation,
        apodPicUrl: res.hdurl,
        isLoading: false
      }))
  }

  render() {

    if(!this.state.isLoading){
      return(
        <div className="apod">
          <h1>Astronomy Picture of the Day</h1>
          <h4>{this.state.date}</h4>
          <a href={this.state.apodPicUrl} target="_blank" rel="noopener noreferrer">
            <img alt="apodPic" src={this.state.apodPicUrl} />
          </a>
          <p>{this.state.explanation}</p>
          <button className="fullscreenPic">VIEW FULL SCREEN PIC</button>
        </div>
      )
    } else {
      return(
        <h1>Loading</h1>
      )
    }

  } //render
} //Apod class

export default Apod

import React from 'react'

class Apod extends React.Component {
  state = {
    date: undefined,
    explanation: undefined,
    apodPicUrl: undefined
  }

  componentDidMount() {
    const endpoint = 'https://api.nasa.gov/planetary/apod'
    const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
    fetch(`${endpoint}?api_key=${key}`)
      .then(res => res.json())
      .then(res => this.setState({
        date: res.date,
        explanation: res.explanation,
        apodPicUrl: res.hdurl
      }))
  }

  render() {
    return(
      <div className="apod">
        <h1>Astronomy Picture of the Day</h1>
        <h4>{this.state.date}</h4>
        <a href={this.state.apodPicUrl} target="_blank">
          <img alt="apodPic" src={this.state.apodPicUrl} />
        </a>
        <p>{this.state.explanation}</p>

          <button className="fullscreenPic">VIEW FULL SCREEN PIC</button>

      </div>
    )
  }
} //Apod class

export default Apod

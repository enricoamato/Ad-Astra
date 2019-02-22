import React from 'react'
import PreviousApod from './PreviousApod'

class Apod extends React.Component {
  constructor() {
    super()
    this.state = {
      total: undefined,
      date: undefined,
      explanation: undefined,
      apodPicUrl: undefined,
      isLoading: true,
      resParam: undefined
    }
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

    const {apodPicUrl, date} = this.state
    if(!this.state.isLoading){
      return(
        <div className="container">
          <div className="apod">
            <h1>Astronomy Picture of the Day</h1>
            <h4>{this.state.date}</h4>

            <div className="apodImgSection">
              <a href={this.state.apodPicUrl} target="_blank" rel="noopener noreferrer">
                <img className="mainImg" alt="apodPic" src={this.state.apodPicUrl} />
              </a>
            </div>

            <p>{this.state.explanation}</p>
            <PreviousApod
              apodPicUrl={apodPicUrl}
              date={date}
            />
          </div>
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

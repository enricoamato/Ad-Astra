import React from 'react'
import MainLandingPage from './MainLandingPage'
import Apod from './Apod'
import Navbar from './Navbar'
// import PreviousApod from './PreviousApod'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: undefined,
      date: undefined,
      explanation: undefined,
      mediaUrl: undefined,
      mediaType: undefined,
      isLoading: true,
      value: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    const endpoint = 'https://api.nasa.gov/planetary/apod?'
    const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
    fetch(`${endpoint}api_key=${key}`)
      .then(res => {
        try {
          console.log(res.ok, res.status)
          if(res.ok){
            console.log(res)
            return res.json()
          .then(res => this.setState({
            date: res.date,
            explanation: res.explanation,
            mediaUrl: res.url,
            mediaType: res.media_type,
            isLoading: false
          }))
        } else {
          console.log('error')
          }
        }
        catch(error){
          console.log(res)
        }
      })
    }

  search() {
      const endpoint = 'https://api.nasa.gov/planetary/apod?'
      const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
      fetch(`${endpoint}api_key=${key}&date=${this.state.value}`)
        .then(res => {
          try {
            console.log(res.ok, res.status)
            if(res.ok){
              console.log(res)
              return res.json()
            .then(res => this.setState({
              date: res.date,
              explanation: res.explanation,
              mediaUrl: res.url,
              mediaType: res.media_type,
              isLoading: false
            }))
          } else {
            console.log('error')
            }
          }
          catch(error){
            console.log(res)
          }
        })
      }


  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.search()
    }
  }

  render() {
    const {mediaUrl, date, explanation, isLoading, mediaType} = this.state
    if(!isLoading){
    return(
      <div>
        <Navbar />
        <div className="apodSearch">
          <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeHolder="YYYY-MM-DD"></input>
          <button onClick={this.search}>Search</button>
        </div>
        <MainLandingPage />
        <Apod
          mediaUrl={mediaUrl}
          date={date}
          explanation={explanation}
          isLoading={isLoading}
          mediaType={mediaType}
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

/*

*/
//onKeyPress={this.handleKeyPress} onChange={this.handleChange}
//onClick={this.search}

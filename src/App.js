import React from 'react'
import MainLandingPage from './MainLandingPage'
import Apod from './Apod'
import Navbar from './Navbar'


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
      title: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.search = this.search.bind(this)
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
            isLoading: false,
            title: res.title
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

  search(value) {
      const endpoint = 'https://api.nasa.gov/planetary/apod?'
      const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
      fetch(`${endpoint}api_key=${key}&date=${value}`)
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
              isLoading: false,
              title: res.title
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

  handleChange(input) {
    console.log(input)
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.search()
    }
  }

  render() {
    const {mediaUrl, date, explanation, isLoading, mediaType, title} = this.state
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
          mediaType={mediaType}
          title={title}
          handleChange={this.handleChange}
          search={this.search}
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
  <div className="apodSearch">
    <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder="YYYY-MM-DD"></input>
    <button onClick={this.search}>Search</button>
  </div>
*/
//onKeyPress={this.handleKeyPress} onChange={this.handleChange}
//onClick={this.search}

import React from 'react'
import Title from './Title'
import Apod from './Apod'
import PreviousApod from './PreviousApod'


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
          if(res.ok){
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
            if(res.ok){
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
        <Title />
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
        <PreviousApod
          date={date}
        />
      </div>
    )}else{
      return(
        <div>
          <Title />
          <h1>Loading...</h1>
        </div>
      )
    }
  }
} //class

export default App

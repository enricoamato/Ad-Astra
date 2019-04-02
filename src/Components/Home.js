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
    this.getKeyIndexes = this.getKeyIndexes.bind(this)
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



  getKeyIndexes(str){
    var keyIndexes = [0]
    for(var i=0; i<str.length - 1; i++){
      if(str[i] === '.'){
        keyIndexes.push(i)
      }
    }
    return keyIndexes
  }

  getFormattedText(explanation){
    var keyIndexes = this.getKeyIndexes(this.state.explanation)

    var i = 0
    var j = 2
    var paragraph = []
    var buffer = null

    while(keyIndexes[j] <= keyIndexes[keyIndexes.length - 1]){
      buffer  = explanation.slice((keyIndexes[i]), (keyIndexes[j]) + 1)
      paragraph.push(buffer)
      i = i + 2
      j = j + 2
      if(i >= 1){
        buffer  = explanation.slice((keyIndexes[i]) + 1, (keyIndexes[j]) + 1)
        paragraph.push(buffer)
        i = i + 2
        j = j + 2
      }
    }

    const listParagraphs = paragraph.map((paragraph, index) =>
      <li key={index} className="paragraph">{paragraph}</li>
    )
    return listParagraphs
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
          explanation={this.getFormattedText(explanation)}
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

//<button onClick={this.outputFormattedParagraph(explanation)} />

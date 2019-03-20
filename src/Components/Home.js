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
    // this.getKeyIndexes = this.getKeyIndexes.bind(this)
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

  // stringToArray(str){
  //   var arrExplanation = []
  //   for(var i=0; i<str.length; i++){
  //     arrExplanation.push(str.charAt(i))
  //   }
  //   return arrExplanation
  // }
  //
  // getKeyIndexes(arr){
  //   var keyIndexes = [0]
  //   for(var i=0; i<arr.length - 1; i++){
  //     if(arr[i] === '.'){
  //       keyIndexes.push(i)
  //     }
  //   }
  //   return keyIndexes
  // }
  //
  // getFormattedText(explanation){
  //   var arrExplanation = this.stringToArray(explanation)
  //   var keyIndexes = this.getKeyIndexes(arrExplanation)
  //
  //   console.log(keyIndexes)
  //
  //   var i = 0
  //   var firstParagraph = []
  //   var buffer = null
  //
  //   while( i < keyIndexes.length){
  //     buffer  = arrExplanation.slice(keyIndexes[i], keyIndexes[i + 2])
  //     firstParagraph.push(buffer)
  //     i = i + 2
  //     if(i > 1){
  //       buffer  = arrExplanation.slice((keyIndexes[i] + 2), keyIndexes[i + 2])
  //       firstParagraph.push(buffer)
  //       i = i + 2
  //     }
  //   }
  //   return firstParagraph
  //   }
  //
  //
  // outputFormattedParagraph(explanation) {
  //   var completedArray = this.getFormattedText(explanation)
  //   console.log(completedArray)
  // }

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

//<button onClick={this.outputFormattedParagraph(explanation)} />

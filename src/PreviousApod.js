import React from 'react'

class PreviousApod extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: undefined,
      oldDate: props.date,
      newDate: undefined,
      explanation: undefined,
      mediaUrl: undefined,
      mediaType: undefined,
      isLoading: true
    }
  }

  mediaType(){
    if(this.state.mediaType === 'video'){
      return <iframe src={this.state.mediaUrl} allowFullScreen={true} title="nasa"></iframe>
    }else{
      return <img src={this.state.mediaUrl} alt="Apod"></img>
    }
  }

  getPreviousDate(date){
    var splittedDate = date.split("-");
    var year = splittedDate[0]
    var month = splittedDate[1]
    var day = splittedDate[2]

    var thirtyone = [1,3,5,7,8,10,12]
    var thirty = [4,6,9,11]
    var twentyeight = [2]

    var typeDay = undefined
    var newMonth = undefined

    var lastDayOfMonth = {
      "thirtyone" : "31",
      "thirty" : "30",
      "twentyeight" : "28"
    }

    if(+day <= 1){
      if(! +month <= 1){
        newMonth = +month -1
        if(newMonth in thirtyone){
          typeDay = "thirtyone"
        }
        else if(newMonth in thirty){
          typeDay = "thirty"
        }
        else if(newMonth in twentyeight){
          typeDay = "twentyeight"
        }
        var newDay = lastDayOfMonth.get(typeDay)
      }
      else{
        newMonth = "NULL"
        newDay = "NULL"
        year = "NULL"
      }
    }else{
      newDay = +day - 1
      newMonth = month
    }
    var newDate = `${year}-${newMonth}-${newDay}`
    return newDate
  }

  componentDidMount(){
    const endpoint = 'https://api.nasa.gov/planetary/apod?'
    const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
    fetch(`${endpoint}api_key=${key}&date=${this.getPreviousDate(this.state.oldDate)}`)
      .then(res => res.json())
      .then(res => this.setState({
        newDate: res.date,
        explanation: res.explanation,
        mediaUrl: res.url,
        mediaType: res.media_type,
        isLoading: false
      }))
  }



  render(){
    return(
      <div className="previousApod">
        <a href={this.state.mediaUrl} target="_blank" rel="noopener noreferrer">
          <h2>Previous APOD</h2>
        </a>
          {this.mediaType()} <br/>
          <p>{this.state.explanation}</p>

      </div>
    )
  }
}

export default PreviousApod

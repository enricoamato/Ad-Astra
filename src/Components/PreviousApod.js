import React from 'react'

class PreviousApod extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todayDate: props.date,
      previousDates: [],
      previousMediaUrls: [],
      previousTitles: [],
      previousMediaType: [],
      isLoading: undefined
    }
    this.handleDate = this.handleDate.bind(this)
    this.loadPreviousApods = this.loadPreviousApods.bind(this)
    this.loadPreviousApods = this.loadPreviousApods.bind(this)
  }

  mediaType(num){
    if(this.state.previousMediaType[num] === 'video'){
      return(
        <div className="apod-media">
          <iframe src={this.state.previousMediaUrls[num]} allowFullScreen={true} title="nasa"></iframe>
        </div>
      )
    }else{
      return(
        <div className="apod-media">
          <a href={this.state.previousMediaUrls[num]}><img alt="nasa" src={this.state.previousMediaUrls[num]}></img></a>
        </div>
      )

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
    var newMonth = undefined
    var newDay = undefined

    if(+day <= 1){
      if(! +month <= 1){
        newMonth = +month -1
        if(newMonth in thirtyone){
          newDay = '31'
        }
        else if(newMonth in thirty){
          newDay = '30'
        }
        else if(newMonth in twentyeight){
          newDay = '28'
        }
      }
      else{
        newMonth = "NULL"
        newDay = "NULL"
        year = "NULL"
      }
    }
    else{
      newDay = +day - 1
      newMonth = +month
    }
    var newDate = `${year}-${newMonth}-${newDay}`
    return newDate
  }

  handleDate() { //fill an array with n previous dates (e.g. 3)
    var writableDate = this.state.todayDate
    const dateArray = []
    for(var i = 0; i < 3; i++){
      writableDate = this.getPreviousDate(writableDate)
      dateArray.push(writableDate)
    }
    this.setState({ previousDates: [...dateArray] })
  }


  requestPreviousApods(){
    const {previousDates} = this.state
    this.setState({ isLoading: true })
    const endpoint = 'https://api.nasa.gov/planetary/apod?'
    const key = '2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4'
      for(var i=0; i<previousDates.length; i++){
        setTimeout( () => {}, 100)
        const req = `${endpoint}api_key=${key}&date=${previousDates[i]}`
        fetch(req)
          .then(res => {
            try {
              if(res.ok) {
                return res.json()
          .then(res =>
            this.setState({
              previousMediaUrls: [...this.state.previousMediaUrls, res.url],
              previousTitles: [...this.state.previousTitles, res.title],
              previousMediaType: [...this.state.previousMediaType, res.media_type],
              previousDates: [...this.state.previousDates, res.date]
            }))
              }else {
              console.log('error')
              }
            }
            catch(error) {
              console.log(res)
            }
          }
          ) //final then
      } this.setState({ isLoading: false })
    }


  loadPreviousApods() {
    this.handleDate()
    setTimeout( () => {this.requestPreviousApods()}, 100)
  }

  apodOutput() {
    // document.getElementById('particles-js').style.height = '240vh';
    const {previousTitles, previousDates} = this.state
    return(

      <div>
        <div className="previous-apod-container">
          <div className="previous-apod-title"><h5>{previousTitles[0]}</h5></div>
          <div className="previous-apod-date"><h5>{previousDates[0]}</h5></div>
          {this.mediaType(0)}
        </div>

        <div className="previous-apod-container">
          <div className="previous-apod-title"><h5>{previousTitles[1]}</h5></div>
          <div className="previous-apod-date"><h5>{previousDates[1]}</h5></div>
          {this.mediaType(1)}
        </div>

        <div className="previous-apod-container">
          <div className="previous-apod-title"><h5>{previousTitles[2]}</h5></div>
          <div className="previous-apod-date"><h5>{previousDates[2]}</h5></div>
          {this.mediaType(2)}
        </div>

      </div>

    )
  }

  render() {
    const {isLoading, previousMediaUrls, previousTitles, previousMediaType} = this.state
    if(!isLoading & previousMediaUrls.length >= 3 & previousTitles.length >= 3 & previousMediaType.length >= 3){
      return(
        <div className="animated bounceInUp">
          {this.apodOutput()}
        </div>
      )
    } else {
      return(
        <div className="load-button">
            <button onClick={this.loadPreviousApods}>Load Previous Apods</button>
        </div>
      )
    }
  }
}

export default PreviousApod

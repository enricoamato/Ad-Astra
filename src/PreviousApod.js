import React from 'react'

const PreviousApod = (props) => {

  const splitDate = () => {
    console.log("pino")
  }

  console.log(props.date)
  return(
    <div className="previousApod">
      <img src={props.mediaUrl} alt="apod media"></img>
      <span>{props.date}</span>
    </div>
  )
}

export default PreviousApod


// -----------------------------------------------------------------------------
// import React from 'react'
//
// const PreviousApod = (props) => {
//   if(props.date !== undefined){
//     return (
//       <div className="previousApod">
//         <img src={props.mediaUrl} alt="prevApod"></img>
//       </div>
//     )
//   }
// }
// export default PreviousApod

// -----------------------------------------------------------------------------

// class PreviousApod extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       total: undefined,
//       date: undefined,
//       explanation: undefined,
//       mediaUrl: undefined,
//       isLoading: true,
//       resParam: undefined
//     }
//   }
//
//   splitDate = date => {
//     console.log(date)
//     var pino = date.split("-")
//     return pino
//   }
//
//   getPreviousDate = splittedDate => {
//     var year = +splittedDate[0]
//     var month = +splittedDate[1]
//     var day = +splittedDate[2]
//
//     var thirtyone = [1,3,5,7,8,10,12]
//     var thirty = [4,6,9,11]
//     var twentyeight = [2]
//
//     const monthLenght = {
//       "thirtyone" : "31",
//       "thirty" : "30",
//       "twentyeight" : "28"
//     }
//
//     var previousDate = `${year}-${month}-${day-1}`
//     console.log(previousDate)
//     return previousDate
//   }
//
//   apiCall(goodDate){
//     const endpoint = 'https://api.nasa.gov/planetary/apod?'
//     const key = '&api_key=2RameM4Tr39cfFBVk0hNhySsBeOONh1lEgK5rrp4&'
//     const date = '&date=${goodDate}&'
//     fetch(`${endpoint}${key}${date}`)
//       .then(res => res.json())
//       .then(res => this.setState({
//         total: res,
//         date: res.date,
//         explanation: res.explanation,
//         mediaUrl: res.hdurl,
//         isLoading: false
//       }))
//   }
//
//   render(){
//     if(this.state.date !== undefined){
//       const splittedDate = this.splitDate(this.state.date)
//       const prevDay = this.getPreviousDate(splittedDate)
//       this.apiCall(prevDay)
//       return (
//         <div className="previousApod">
//           <img src={this.state.mediaUrl} alt="prevApod"></img>
//           <h3>{prevDay}</h3>
//         </div>
//       )
//     }
//
//     else {
//       return (
//         <div className="previousApod">
//           <img src={this.state.mediaUrl} alt="prevApod"></img>
//         </div>
//       )
//     }
//   }
// }

import React from 'react'
// import PreviousApod from './PreviousApod'

const Apod = (props) =>  {

  function mediaType(){
    if(props.media_type === 'video'){
      return <iframe src={props.mediaUrl} frameborder="0" allowfullscreen="true" title="nasa"></iframe>
    }else{
      return <img src={props.mediaUrl} alt="Apod"></img>
    }
  }


  if(!props.isLoading){
      return(
        <div className="apod">
          <h1>Astronomy Picture of the Day</h1>
          <h4>{props.date}</h4>
          <div className="apodMedia">
            <a href={props.mediaUrl} target="_blank" rel="noopener noreferrer">
              {mediaType()}
            </a>
          </div>
          <p>{props.explanation}</p>
        </div>
      )
    } else {
      return(
        <h1>Loading</h1>
      )
    }

} //Apod Closing


export default Apod

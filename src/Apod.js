import React from 'react'

const Apod = (props) =>  {

  function mediaType(){
    if(props.mediaType === 'video'){
      return <iframe src={props.mediaUrl} allowFullScreen={true} title="nasa"></iframe>
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

import React from 'react'
import Search from './Search'

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
        <div className="apod-container animated bounceInUp">
          <Search
            handleChange={props.handleChange}
            search={props.search}
          />
          <br/>

          <h3>{props.title}</h3>
          <h3>{props.date}</h3>

          <div className="apod-media">
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
}


export default Apod

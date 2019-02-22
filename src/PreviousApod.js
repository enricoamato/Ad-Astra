import React from 'react'

const PreviousApod = (props) => {

  const dayDecrease = () => props.date


  console.log(dayDecrease())

  return (
    <div className="previousApod">
      <img src={props.apodPicUrl} alt="prevApod"></img>
      <p>{}</p>
    </div>
  )
}

export default PreviousApod

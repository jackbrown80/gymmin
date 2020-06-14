import React from 'react'
import CreateProgrammeCard from './CreateProgrammeCard'
import '../css/Programmes.css'

const Programmes = (props) => {
  const programmesExist = Object.keys(props.programmes).length !== 0
  let title = ""
  let text = ""
  let textButton = ""

  if (programmesExist){
    title = "WELCOME!"
    text = "You've already created a programme so use that!"
    textButton = "You can choose to create another one if you like."
  } else {
    title = "NO PROGRAMMES"
     text = "Looks like you haven't got any programmes yet!"
     textButton = "No worries, it's quick and easy to create your own and get started!"
  }
  return (
    <div className="programmes-wrapper">
    <CreateProgrammeCard
      title={title}
      text={text}
      textButton={textButton}
      className="create-card"
    />
    <h1 className="programmes-title">PROGRAMMES</h1>
    <p className="create-prompt">
      Please create a programme to get started.
    </p>
  </div>
  )
}

export default Programmes

import React from 'react'
import CreateProgrammeCard from './CreateProgrammeCard'
import '../css/Programmes.css'
import SignOutButton from './SignOutButton'
import * as ROUTES from '../constants/routes'


const Home = (props) => {
  

  const programmesExist = Object.keys(props.programmes).length !== 0
  let title = ''
  let text = ''
  let textButton = ''

  if (programmesExist) {
    title = 'WELCOME!'
    text = "Looks like you've already created a programme, you can use that!"
    textButton = 'You can choose to create another one if you like.'
  } else {
    title = 'NO PROGRAMMES'
    text = "Looks like you haven't got any programmes yet!"
    textButton =
      "No worries, it's quick and easy to create your own and get started!"
  }

  const renderProgrammes = () => {
    if (programmesExist) {
      return (
        <div className="programmes-wrapper cards">
          <div className="card-wrapper">Hi</div>
        </div>
      )
    } else {
      return (
        <div>
          <p className="create-prompt">
            Please create a programme to get started.
          </p>
          <SignOutButton></SignOutButton>
        </div>
      )
    }
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
      {renderProgrammes()}
    </div>
  )
}

export default Home

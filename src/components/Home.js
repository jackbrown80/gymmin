import React, { useState, useEffect } from 'react'
import '../css/NoProgrammes.css'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import '../css/Programmes.css'
import SignOutButton from './SignOutButton'

const WelcomeCard = (props) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(ROUTES.CREATE_PROGRAMME)
  }

  let text = ''
  let textButton = ''

  if (props.programmesExist) {
    text = "Looks like you've already created a programme, you can use that!"
    textButton = 'You can choose to create another one if you like.'
  } else {
    text = "Looks like you haven't got any programmes yet!"
    textButton =
      "No worries, it's quick and easy to create your own and get started!"
  }

  return (
    <div className="card-wrapper">
      <h1 className="card-title">WELCOME!</h1>
      <p className="card-text">{text}</p>
      <div className="text-button">
        <p className="card-text second">{textButton}</p>
        <button className="orange-cta" onClick={handleClick}>
          CREATE
        </button>
      </div>
    </div>
  )
}

const NoProgrammes = () => {
  return (
    <div>
      <p className="create-prompt">Please create a programme to get started.</p>
      <SignOutButton></SignOutButton>
    </div>
  )
}

const Programmes = () => {
  return (
    <div className="programmes-wrapper cards">
      <div className="card-wrapper">Hi</div>
    </div>
  )
}

const Home = (props) => {
  const [programmesExist, setProgrammesExist] = useState(
    props.programmes !== null
  )

  useEffect(() => {
    setProgrammesExist(props.programmes !== null)
  }, [props.programmes])

  return (
    <div className="programmes-wrapper">
      <WelcomeCard
        className="create-card"
        programmesExist={programmesExist}
      />
      <h1 className="programmes-title">PROGRAMMES</h1>
      {programmesExist ? <Programmes /> : <NoProgrammes />}
    </div>
  )
}

export default Home

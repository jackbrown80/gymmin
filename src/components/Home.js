import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import SignOutButton from './SignOutButton'
import {
  WelcomeCardWrapper,
  WelcomeCardTitle,
  WelcomeCardText,
  WelcomeCardCtaWrapper,
  WelcomeCardCtaText,
  WelcomeCardCtaButton,
  HomeWrapper,
  Title,
  NoProgrammesPrompt
} from '../styles/Home.styles'

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
    <WelcomeCardWrapper>
      <WelcomeCardTitle>WELCOME!</WelcomeCardTitle>
      <WelcomeCardText>{text}</WelcomeCardText>
      <WelcomeCardCtaWrapper>
        <WelcomeCardCtaText>{textButton}</WelcomeCardCtaText>
        <WelcomeCardCtaButton onClick={handleClick}>
          CREATE
        </WelcomeCardCtaButton>
      </WelcomeCardCtaWrapper>
    </WelcomeCardWrapper>
  )
}

const NoProgrammes = () => {
  return (
    <div>
      <NoProgrammesPrompt>Please create a programme to get started.</NoProgrammesPrompt>
      <SignOutButton></SignOutButton>
    </div>
  )
}

const renderProgrammes = () => {
  return (
    <div>
      Programmes to come...
      <SignOutButton></SignOutButton>
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
    <HomeWrapper>
      <WelcomeCard programmesExist={programmesExist} />
      <Title>PROGRAMMES</Title>
      {programmesExist ? renderProgrammes() : <NoProgrammes />}
    </HomeWrapper>
  )
}

export default Home

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import SignOutButton from './SignOutButton'
import ProgrammeCard from './ProgrammeCard'
import {
  WelcomeCardWrapper,
  WelcomeCardTitle,
  WelcomeCardText,
  WelcomeCardCtaWrapper,
  WelcomeCardCtaText,
  WelcomeCardCtaButton,
  HomeWrapper,
  Title,
  NoProgrammesPrompt,
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
      <NoProgrammesPrompt>
        Please create a programme to get started.
      </NoProgrammesPrompt>
      <SignOutButton></SignOutButton>
    </div>
  )
}

const Home = (props) => {
  const [programmesExist, setProgrammesExist] = useState(
    props.programmes !== null
  )
  const history = useHistory()

  useEffect(() => {
    setProgrammesExist(props.programmes !== null)
  }, [props.programmes])

  const renderProgrammes = () => {
    const arrowClick = (key) => {
      history.push(`${ROUTES.PROGRAMME}/${key.slice(9)}`)
    }
    return Object.keys(props.programmes).map((key) => (
      <ProgrammeCard
        title={props.programmes[key].name}
        key={key}
        desc={`Created: ${props.programmes[key].created}`}
        arrowClick={() => arrowClick(key)}
      ></ProgrammeCard>
    ))
  }

  return (
    <HomeWrapper>
      <WelcomeCard programmesExist={programmesExist} />
      <Title>PROGRAMMES</Title>
      {programmesExist ? renderProgrammes() : <NoProgrammes />}
    </HomeWrapper>
  )
}

export default Home

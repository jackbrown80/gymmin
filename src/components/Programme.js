import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import ProgrammeCard from './ProgrammeCard'
import {
  ProgrammeWrapper,
  Title,
  FooterWrapper,
  FooterButton,
} from '../styles/Programme.styles'

const Workouts = (props) => {
  return <div>Workouts</div>
}

const NoWorkouts = (props) => {
  return <div></div>
}

const Programme = (props) => {
  const history = useHistory()
  const { programmeId } = useParams()

  const renderWorkouts = () => {
    const arrowClick = (key) => {
      history.push(`${ROUTES.PROGRAMME}/${programmeId}${ROUTES.RECORD_WORKOUT}/${key.slice(7)}`)
    }
    return Object.keys(
      props.programmes[`programme${programmeId}`].workouts
    ).map((key) => (
      <ProgrammeCard
        title={props.programmes[`programme${programmeId}`].workouts[key].name}
        key={key}
        desc={`Not Yet Started`}
        arrowClick={() => arrowClick(key)}
      ></ProgrammeCard>
    ))
  }

  const goBack = () => {
    history.push(ROUTES.HOME)
  }

  const editProgramme = () => {}

  return (
    <ProgrammeWrapper>
      <Title>
        {props.programmes !== null
          ? props.programmes[`programme${programmeId}`].name
          : null}
      </Title>
      {props.programmes !== null ? renderWorkouts() : <NoWorkouts></NoWorkouts>}
      <FooterWrapper>
        <FooterButton cancel onClick={goBack}>
          BACK
        </FooterButton>
        <FooterButton save onClick={editProgramme}>
          EDIT
        </FooterButton>
      </FooterWrapper>
    </ProgrammeWrapper>
  )
}

export default Programme

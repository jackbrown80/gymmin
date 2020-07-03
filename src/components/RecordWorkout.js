import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { withFirebase } from './Firebase'

import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {
  Wrapper,
  Title,
  FooterWrapper,
  FooterButton,
} from '../styles/RecordWorkout.style'
import RecordExerciseCard from './RecordExerciseCard'

const RecordWorkoutBase = (props) => {
  const history = useHistory()
  const [tempExercises, setTempExercises] = useState(null)
  const { programmeId, workoutId } = useParams()

  const renderExerciseCards = () => {
    return Object.keys(
      props.programmes[`programme${programmeId}`].workouts[
        `workout${workoutId}`
      ].exercises
    ).map((key) => (
      <RecordExerciseCard
        key={key}
        exerciseId={key}
        programmes={props.programmes}
        programmeId={programmeId}
        workoutId={workoutId}
        setTempExercises={setTempExercises}
      ></RecordExerciseCard>
    ))
  }

  const saveWorkout = () => {
    let prevExercises = { ...tempExercises }
    Object.keys(prevExercises).forEach((exerciseKey) => {
      Object.keys(prevExercises[exerciseKey].sets).forEach((setsKey) => {
        prevExercises[exerciseKey].sets[setsKey].prevWeight =
          prevExercises[exerciseKey].sets[setsKey].newWeight
      })
    })

    props.firebase.db
      .ref(
        `users/${props.authUser.uid}/programmes/programme${programmeId}/workouts/workout${workoutId}/exercises`
      )
      .set(prevExercises)

    history.push(ROUTES.HOME)
  }

  const goBack = () => {
    history.push(`${ROUTES.PROGRAMME}/${programmeId}`)
  }

  const isInvalid = tempExercises === null


  return (
    <Wrapper>
      <Title>
        {props.programmes !== null
          ? props.programmes[`programme${programmeId}`].workouts[
              `workout${workoutId}`
            ].name
          : null}
      </Title>
      {props.programmes !== null ? renderExerciseCards() : null}
      <FooterWrapper>
        <FooterButton cancel onClick={() => goBack()}>BACK</FooterButton>
        <FooterButton save onClick={() => saveWorkout()} disabled={isInvalid}>
          SAVE
        </FooterButton>
      </FooterWrapper>
    </Wrapper>
  )
}

const RecordWorkout = withFirebase(RecordWorkoutBase)

export default RecordWorkout

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {} from '../styles/RecordExerciseCard.style'
import {
  CardWrapper,
  Title,
  RepsDetailsWrapper,
  RepsDetailsHeader,
  Heading,
  SetWrapper,
  Divider,
  SetValue,
  InputValue,
  PrevWeightValue,
} from '../styles/RecordExerciseCard.style'

const RecordExerciseCard = (props) => {
  const history = useHistory()
  const refObj = {}
  const [exercise, setExercise] = useState({})

  Object.keys(
    props.programmes[`programme${props.programmeId}`].workouts[
      `workout${props.workoutId}`
    ].exercises[props.exerciseId].sets
  ).forEach((key) => {
    refObj[`reps${key}`] = React.createRef()
    refObj[`prevWeight${key}`] = React.createRef()
    refObj[`newWeight${key}`] = React.createRef()
  })

  const updateSets = (key, property, value) => {
    let prevExercise = {
      ...props.programmes[`programme${props.programmeId}`].workouts[
        `workout${props.workoutId}`
      ].exercises,
    }
    prevExercise[props.exerciseId].sets[key][property] = value
    props.setTempExercises(prevExercise)
  }

  return (
    <CardWrapper>
      <Title>
        {props.programmes[`programme${props.programmeId}`].workouts[
          `workout${props.workoutId}`
        ].exercises[props.exerciseId] !== null
          ? props.programmes[`programme${props.programmeId}`].workouts[
              `workout${props.workoutId}`
            ].exercises[props.exerciseId].name
          : null}
      </Title>
      <RepsDetailsWrapper>
        <RepsDetailsHeader>
          <Heading>SET</Heading>
          <Heading>REPS</Heading>
          <Heading>PREV. WEIGHT</Heading>
          <Heading>NEW WEIGHT</Heading>
        </RepsDetailsHeader>
        {props.programmes[`programme${props.programmeId}`].workouts[
          `workout${props.workoutId}`
        ].exercises[props.exerciseId].sets !== null ? (
          Object.keys(
            props.programmes[`programme${props.programmeId}`].workouts[
              `workout${props.workoutId}`
            ].exercises[props.exerciseId].sets
          ).map((key) => (
            <div key={key}>
              <Divider></Divider>
              <SetWrapper>
                <SetValue>
                  {
                    props.programmes[`programme${props.programmeId}`].workouts[
                      `workout${props.workoutId}`
                    ].exercises[props.exerciseId].sets[key].set
                  }
                </SetValue>
                <InputValue
                  placeholder="?"
                  type="number"
                  ref={refObj[`reps${key}`]}
                  onChange={() =>
                    updateSets(key, 'reps', refObj[`reps${key}`].current.value)
                  }
                ></InputValue>
                <PrevWeightValue>
                  {
                    props.programmes[`programme${props.programmeId}`].workouts[
                      `workout${props.workoutId}`
                    ].exercises[props.exerciseId].sets[key].prevWeight
                  }
                </PrevWeightValue>
                <InputValue
                  placeholder="?"
                  type="number"
                  ref={refObj[`newWeight${key}`]}
                  onChange={() =>
                    updateSets(
                      key,
                      'newWeight',
                      refObj[`newWeight${key}`].current.value
                    )
                  }
                ></InputValue>
              </SetWrapper>
            </div>
          ))
        ) : (
          <div>Hi</div>
        )}
      </RepsDetailsWrapper>
    </CardWrapper>
  )
}

export default RecordExerciseCard

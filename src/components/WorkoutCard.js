import React, { useState, useEffect } from 'react'
import {
  CardWrapper,
  TitleWrapper,
  WorkoutNameInput,
  AddButton,
  DeleteButton,
  ExercisesWrapper,
  ExercisesHeader,
  ExerciseTitle,
  SetsTitle,
  Divider,
  ExerciseWrapper,
  ExerciseNameInput,
  SetsInput,
} from '../styles/WorkoutCard.styles'

const WorkoutCard = (props) => {
  const initialExercises = JSON.parse(
    window.localStorage.getItem(`${props.index}/exercises`)
  ) || { exercise1: {} }
  const initialExercisesIncDeleted = JSON.parse(
    window.localStorage.getItem(`${props.index}/exercisesIncDeleted`)
  ) || ['exercise1']

  // Adds a 'todos' property to state object and creates addToDo function which is used to update the state. Intital state of todos is set to the local storage
  const [workout, setWorkout] = useState({
    name: props.index,
    exercises: { exercise1: { name: '', sets: 0 }, ...initialExercises },
  })

  const [exercisesIncDeleted, setExercisesIncDeleted] = useState(
    initialExercisesIncDeleted
  )
  // Each time App rerenders update local storage with the new state
  useEffect(() => {
    // Stringify turns the object into a string so it can be stored correctly
    window.localStorage.setItem(
      `${props.index}/exercises`,
      JSON.stringify(workout.exercises)
    )
    window.localStorage.setItem(
      `${props.index}/exercisesIncDeleted`,
      JSON.stringify(exercisesIncDeleted)
    )
  })

  const saveWorkout = () => {
    let prevWorkouts = { ...props.workouts }
    prevWorkouts[props.index] = workout
    props.setWorkouts(prevWorkouts)
  }

  const addExercise = () => {
    let prevExercisesIncDeleted = [...exercisesIncDeleted]
    const exercisesCount = Object.keys(prevExercisesIncDeleted).length
    prevExercisesIncDeleted.push(`exercise${exercisesCount + 1}`)
    setExercisesIncDeleted(prevExercisesIncDeleted)

    let prevWorkout = { ...workout }

    prevWorkout.exercises[`exercise${exercisesIncDeleted.length + 1}`] = {}
    setWorkout(prevWorkout)
  }

  const deleteExercise = (key) => {
    let prevWorkout = { ...workout }
    delete prevWorkout.exercises[key]
    setWorkout(prevWorkout)
  }

  const refObj = {}

  const updateExercise = (key, nameOrSets, name) => {
    let prevWorkout = { ...workout }
    prevWorkout.exercises[key][nameOrSets] = name
    setWorkout(prevWorkout)

    saveWorkout()
  }

  const updateWorkoutName = (name) => {
    let prevWorkout = { ...workout }
    prevWorkout.name = name
    setWorkout(prevWorkout)

    saveWorkout()
  }

  Object.keys(workout.exercises).forEach((key) => {
    refObj[`name${key}`] = React.createRef()
    refObj[`sets${key}`] = React.createRef()
    refObj[`workoutName${props.index}`] = React.createRef()
  })

  const exercisesExist = Object.keys(workout.exercises).length !== 0
  return (
    <CardWrapper>
      <TitleWrapper>
        <WorkoutNameInput
          placeholder={props.index.toUpperCase()}
          ref={refObj[`workoutName${props.index}`]}
          onChange={() =>
            updateWorkoutName(refObj[`workoutName${props.index}`].current.value)
          }
        />
        <AddButton onClick={addExercise}>+</AddButton>
        <DeleteButton onClick={() => props.deleteWorkout(props.index)}>
          ×
        </DeleteButton>
      </TitleWrapper>
      <ExercisesWrapper>
        <ExercisesHeader>
          <ExerciseTitle>EXERCISE</ExerciseTitle>
          <SetsTitle>SETS</SetsTitle>
        </ExercisesHeader>
        {exercisesExist
          ? Object.keys(workout.exercises).map((key) => (
              <div key={key}>
                <Divider></Divider>
                <ExerciseWrapper>
                  <ExerciseNameInput
                    type="text"
                    placeholder={key}
                    ref={refObj[`name${key}`]}
                    onChange={() =>
                      updateExercise(
                        key,
                        'name',
                        refObj[`name${key}`].current.value
                      )
                    }
                  />
                  <SetsInput
                    type="number"
                    placeholder="3"
                    ref={refObj[`sets${key}`]}
                    onChange={() =>
                      updateExercise(
                        key,
                        'sets',
                        refObj[`sets${key}`].current.value
                      )
                    }
                  />
                  <DeleteButton onClick={() => deleteExercise(key)}>
                    ×
                  </DeleteButton>
                </ExerciseWrapper>
              </div>
            ))
          : null}
      </ExercisesWrapper>
    </CardWrapper>
  )
}

export default WorkoutCard

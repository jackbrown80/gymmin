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
  const initialExercises =
    JSON.parse(window.localStorage.getItem(`${props.index}/exercises`)) || {}

  // Adds a 'todos' property to state object and creates addToDo function which is used to update the state. Intital state of todos is set to the local storage
  const [workout, setWorkout] = useState({
    name: props.index,
    exercises: {
      [`exercise${Date.now()}`]: { name: '', sets: 0 },
      ...initialExercises,
    },
  })

  // Each time App rerenders update local storage with the new state
  useEffect(() => {
    // Stringify turns the object into a string so it can be stored correctly
    window.localStorage.setItem(
      `${props.index}/exercises`,
      JSON.stringify(workout.exercises)
    )
  })

  useEffect(() => {
    let prevWorkouts = { ...props.workouts }

    prevWorkouts[props.index] = workout
    props.setWorkouts(prevWorkouts)
  }, [workout])

  const saveWorkout = () => {
    let prevWorkouts = { ...props.workouts }

    prevWorkouts[props.index] = workout
    props.setWorkouts(prevWorkouts)
  }

  const addExercise = () => {
    let prevWorkout = { ...workout }

    prevWorkout.exercises[`exercise${Date.now()}`] = { name: '', sets: 0 }
    setWorkout(prevWorkout)
  }

  const deleteExercise = (key) => {
    let prevWorkout = { ...workout }
    delete prevWorkout.exercises[key]
    setWorkout(prevWorkout)
  }

  const refObj = {}

  const updateExercise = (key, property, value) => {
    let prevWorkout = { ...workout }
    if (property === 'sets') {
      let sets = {}
      for (let index = 0; index < value; index++) {
        sets[`set${index + 1}`] = {
          set: index + 1,
          reps: 0,
          prevWeight: 'NA',
          newWeight: 0,
        }
      }
      prevWorkout = { ...workout }
      prevWorkout.exercises[key][property] = sets
      setWorkout(prevWorkout)
    } else {
      prevWorkout = { ...workout }
      prevWorkout.exercises[key][property] = value
      setWorkout(prevWorkout)
    }
  }

  const updateWorkoutName = (name) => {
    let prevWorkout = { ...workout }
    prevWorkout.name = name
    setWorkout(prevWorkout)
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
          placeholder="Workout Name"
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
        {exercisesExist ? (
          Object.keys(workout.exercises).map((key) => (
            <div key={key}>
              <Divider></Divider>
              <ExerciseWrapper>
                <ExerciseNameInput
                  type="text"
                  value={workout.exercises[key].name}
                  placeholder="Exercise Name"
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
        ) : (
          <div>Hi</div>
        )}
      </ExercisesWrapper>
    </CardWrapper>
  )
}

export default WorkoutCard

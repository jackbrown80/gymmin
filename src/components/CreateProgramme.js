import React, { useState, useEffect } from 'react'
import '../css/CreateProgrammes.css'
import WorkoutCard from './WorkoutCard'
import { useHistory } from 'react-router-dom'
import { withFirebase } from './Firebase'
import * as ROUTES from '../constants/routes'

const NoWorkouts = () => {
  return (
    <p className="add-prompt">
      Click the add button (+) in the top right to add a workout
    </p>
  )
}

const Workouts = (props) => {
  return (
    <div>
      {Object.keys(props.workouts).map((key) => (
        <WorkoutCard
          key={key}
          index={key}
          deleteWorkout={props.deleteWorkout}
          setProgrammes={props.setProgrammes}
          setWorkouts={props.setWorkouts}
          workouts={props.workouts}
        />
      ))}
    </div>
  )
}

const CreateProgrammeBase = (props) => {
  // Get intial workouts state from local storage, if it doesn't exist set it to 0. Parse turns it from a string to an object
  const initialWorkouts =
    JSON.parse(window.localStorage.getItem('workouts')) || 0
  const initialWorkoutsIncDeleted =
    JSON.parse(window.localStorage.getItem('workoutsIncDeleted')) || []

  // Adds a 'todos' property to state object and creates addToDo function which is used to update the state. Intital state of todos is set to the local storage
  const [workouts, setWorkouts] = useState(initialWorkouts)
  const [workoutsIncDeleted, setWorkoutsIncDeleted] = useState(
    initialWorkoutsIncDeleted
  )
  const history = useHistory()

  // Each time App rerenders update local storage with the new state
  useEffect(() => {
    // Stringify turns the object into a string so it can be stored correctly
    window.localStorage.setItem('workouts', JSON.stringify(workouts))
    window.localStorage.setItem(
      'workoutsIncDeleted',
      JSON.stringify(workoutsIncDeleted)
    )
  })

  const addWorkout = () => {
    let prevWorkoutsIncDeleted = [...workoutsIncDeleted]
    const workoutsCount = Object.keys(prevWorkoutsIncDeleted).length
    prevWorkoutsIncDeleted.push(`workout${workoutsCount + 1}`)
    setWorkoutsIncDeleted(prevWorkoutsIncDeleted)

    let prevWorkouts = { ...workouts }
    prevWorkouts[`workout${workoutsCount + 1}`] = {}
    setWorkouts(prevWorkouts)
  }

  const deleteWorkout = (key) => {
    let prevWorkouts = { ...workouts }
    delete prevWorkouts[key]
    setWorkouts(prevWorkouts)
    window.localStorage.removeItem(`${key}/exercises`)
    window.localStorage.removeItem(`${key}/exercisesIncDeleted`)
  }

  const saveProgramme = () => {
    let prevProgrammes = {
      ...props.programmes,
    }

    const programmesCount = Object.keys(prevProgrammes).length
    prevProgrammes[`programme${programmesCount + 1}`] = workouts
    props.firebase.db
      .ref(`users/${props.authUser.uid}/programmes`)
      .set(prevProgrammes)
    history.push(ROUTES.HOME)
  }

  const goBack = () => {
    window.localStorage.clear()
    history.push('/programmes')
  }

  const workoutsExist = Object.keys(workouts).length !== 0

  return (
    <div className="create-prog-wrapper">
      <div className="create-row">
        <h1 className="programmes-title create">CREATE PROGRAMME</h1>
        <button className="add-button" onClick={addWorkout}></button>
      </div>
      {workoutsExist ? (
        <Workouts
          workouts={workouts}
          deleteWorkout={deleteWorkout}
          setWorkouts={setWorkouts}
          setProgrammes={props.setProgrammes}
        />
      ) : (
        <NoWorkouts />
      )}
      <div className="back-next">
        <button className="back orange-cta" onClick={goBack}>
          CANCEL
        </button>
        <button className="next orange-cta" onClick={saveProgramme}>
          SAVE
        </button>
      </div>
    </div>
  )
}

const CreateProgramme = withFirebase(CreateProgrammeBase)

export default CreateProgramme

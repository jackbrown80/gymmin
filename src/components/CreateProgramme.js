import React, { useState, useEffect } from 'react'
import WorkoutCard from './WorkoutCard'
import { useHistory } from 'react-router-dom'
import { withFirebase } from './Firebase'
import * as ROUTES from '../constants/routes'
import {
  Wrapper,
  TitleWrapper,
  ProgrammeName,
  AddButton,
  FooterWrapper,
  FooterButton,
  AddPrompt,
} from '../styles/CreateProgramme.styles'
import {
  getDate,
} from '../helpers/helpers'

const NoWorkouts = () => {
  return (
    <AddPrompt>
      Click the add button (+) in the top right to add a workout
    </AddPrompt>
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

  const programmeNameRef = React.createRef()

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

    prevProgrammes[`programme${Date.now()}`] = {
      name: programmeNameRef.current.value,
      ...workouts,
      created: getDate()
    }

    props.firebase.db
      .ref(`users/${props.authUser.uid}/programmes`)
      .set(prevProgrammes)
    history.push(ROUTES.HOME)
  }

  const cancel = () => {
    window.localStorage.clear()
    history.push(ROUTES.HOME)
  }

  const workoutsExist = Object.keys(workouts).length !== 0

  return (
    <Wrapper>
      <TitleWrapper>
        <ProgrammeName
          placeholder="PROGRAMME"
          ref={programmeNameRef}
        ></ProgrammeName>
        <AddButton onClick={addWorkout}>+</AddButton>
      </TitleWrapper>
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
      <FooterWrapper>
        <FooterButton cancel onClick={cancel}>
          CANCEL
        </FooterButton>
        <FooterButton save onClick={saveProgramme}>
          SAVE
        </FooterButton>
      </FooterWrapper>
    </Wrapper>
  )
}

const CreateProgramme = withFirebase(CreateProgrammeBase)

export default CreateProgramme

import React, { useState, useEffect } from 'react'
import '../css/CreateProgrammes.css'
import WorkoutCard from './WorkoutCard'

const CreateProgramme = (props) => {
  // Get intial workouts state from local storage, if it doesn't exist set it to 0. Parse turns it from a string to an object
  const initialWorkouts = JSON.parse(window.localStorage.getItem('workouts')) || 0
  // Adds a 'todos' property to state object and creates addToDo function which is used to update the state. Intital state of todos is set to the local storage
  const [workouts, setWorkouts] = useState(initialWorkouts)
  // Each time App rerenders update local storage with the new state
  useEffect(() => {
    // Stringify turns the object into a string so it can be stored correctly
    window.localStorage.setItem('workouts', JSON.stringify(workouts))
  })

  const addWorkout = () => {
    let prevWorkouts = { ...workouts }
    const workoutsCount = Object.keys(prevWorkouts).length
    prevWorkouts[`workout${workoutsCount + 1}`] = {}
    setWorkouts(prevWorkouts)
  }

  const workoutsExist = Object.keys(workouts).length !== 0
  if (workoutsExist) {
    return (
      <div className="create-prog-wrapper">
        <div className="create-row">
          <h1 className="programmes-title create">CREATE PROGRAMME</h1>
          <button className="add-button" onClick={addWorkout}></button>
        </div>
        {Object.keys(workouts).map(key => (
            <WorkoutCard key={key} index={key}/>
        ))}
      </div>
    )
  } else {
    return (
      <div className="create-prog-wrapper">
        <div className="create-row">
          <h1 className="programmes-title create">CREATE PROGRAMME</h1>
          <button className="add-button" onClick={addWorkout}></button>
        </div>
        <p>NO WORKOUTS YOU NONCE CREATE ONE</p>
      </div>
    )
  }
}

export default CreateProgramme

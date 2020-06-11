import React, { useState, useEffect } from 'react'
import '../css/WorkoutCard.css'
import Modal from './Modal'

const WorkoutCard = (props) => {
  const [showModal, setShowModal] = useState(false)
  const initialExercises =
    JSON.parse(window.localStorage.getItem(`${props.index}/exercises`)) || {}
  const initialExercisesIncDeleted =
    JSON.parse(
      window.localStorage.getItem(`${props.index}/exercisesIncDeleted`)
    ) || []

  // Adds a 'todos' property to state object and creates addToDo function which is used to update the state. Intital state of todos is set to the local storage
  const [exercises, setExercises] = useState(initialExercises)
  const [exercisesIncDeleted, setExercisesIncDeleted] = useState(
    initialExercisesIncDeleted
  )
  // Each time App rerenders update local storage with the new state
  useEffect(() => {
    // Stringify turns the object into a string so it can be stored correctly
    window.localStorage.setItem(
      `${props.index}/exercises`,
      JSON.stringify(exercises)
    )
    window.localStorage.setItem(
      `${props.index}/exercisesIncDeleted`,
      JSON.stringify(exercisesIncDeleted)
    )
  })

  const addExercise = () => {
    let prevExercisesIncDeleted = [...exercisesIncDeleted]
    const exercisesCount = Object.keys(prevExercisesIncDeleted).length
    prevExercisesIncDeleted.push(`exercise${exercisesCount + 1}`)
    setExercisesIncDeleted(prevExercisesIncDeleted)

    let prevExercises = { ...exercises }
    prevExercises[`exercise${exercisesIncDeleted.length + 1}`] = {}
    setExercises(prevExercises)
  }

  const deleteExercise = (key) => {
    let prevExercises = { ...exercises }
    delete prevExercises[key]
    setExercises(prevExercises)
  }

  const handleExerciseRowClick = () => {console.log('hi');
  }

  const exercisesExist = Object.keys(exercises).length !== 0
  if (exercisesExist) {
    return (
      <div className="card-wrapper workout">
        <div className="create-row">
          <h1 className="programmes-title workout">BACK AND BIS</h1>
          <button className="add-button workout" onClick={addExercise}></button>
        </div>
        <div className="exercises-wrapper">
          <div className="create-row workout">
            <p className="exercises-header">EXERCISES</p>
            <p className="sets-reps-header">SETS & REPS</p>
            <p className="delete"></p>
          </div>
          {Object.keys(exercises).map((key) => (
            <div key={key}>
              <hr className="divider workout"></hr>
              <div className="create-row workout">
                <button className="row-button" onClick={handleExerciseRowClick}>
                  <p className="exercise-name">{key}</p>
                  <p className="sets-reps">12, 10, 8, 6</p>
                </button>
                <button className="delete" onClick={() => deleteExercise(key)}>
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="card-wrapper workout">
        <div className="create-row">
          <h1 className="programmes-title workout">BACK AND BIS</h1>
          <button className="add-button workout" onClick={addExercise}></button>
        </div>
        <div className="exercises-wrapper">
          <div className="create-row workout">
            <p className="exercises-header">EXERCISES</p>
            <p className="sets-reps-header">SETS & REPS</p>
            <p className="delete"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkoutCard

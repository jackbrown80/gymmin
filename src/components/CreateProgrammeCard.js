import React from 'react'
import '../css/NoProgrammes.css'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'


const CreateProgrammeCard = (props) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(ROUTES.CREATE_PROGRAMME)
  }
  return (
    <div className="card-wrapper">
      <h1 className="card-title">{props.title}</h1>
      <p className="card-text">{props.text}</p>
      <div className="text-button">
        <p className="card-text second">{props.textButton}</p>
        <button className="orange-cta" onClick={handleClick}>
          CREATE
        </button>
      </div>
    </div>
  )
}

export default CreateProgrammeCard

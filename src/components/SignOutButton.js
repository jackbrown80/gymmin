import React from 'react'
import { withFirebase } from './Firebase'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const SignOutButton = (props) => {
  const history = useHistory()

  const doSignOut = () => {
    props.firebase.doSignOut()
    history.push(ROUTES.LANDING)
  }
  return (
    <button type="button" onClick={doSignOut}>
      SIGN OUT
    </button>
  )
}

export default withFirebase(SignOutButton)

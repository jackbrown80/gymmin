import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { withFirebase } from './Firebase'
import SignIn from './SignIn'

const Landing = (props) => {
  const history = useHistory()

  useEffect(() => {
    props.authUser ? history.push(ROUTES.HOME) : console.log('signup');
  }, [props.authUser, history])

  return <SignIn></SignIn>
}

export default withFirebase(Landing)

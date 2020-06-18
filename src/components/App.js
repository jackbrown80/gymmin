// Have skipped session handling with higher order components

import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../svg/logo.svg'
import '../css/App.css'
import SignIn from './SignIn'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import CreateProgramme from './CreateProgramme'
import * as ROUTES from '../constants/routes'
import SignUp from './SignUp'
import { withFirebase } from './Firebase'

function App(props) {
  const [authUser, setAuthUser] = useState(null)
  
  const initialProgrammes =
  JSON.parse(window.localStorage.getItem('programmes')) || {}
  
  const [programmes, setProgrammes] = useState(initialProgrammes)

  // Everytime App re-renders, check if there has been a change to the Auth status and update the authState
  useEffect(() => {
    props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? setAuthUser(authUser) : setAuthUser(null)
    })
  })

  return (
    <Router>
      <div className="App">
        <header>
          <Logo className="logo" />
        </header>
        <Route path={ROUTES.LANDING} exact></Route>
        <Route path={ROUTES.LOGIN} render={() => <SignIn />}></Route>
        <Route path={ROUTES.SIGN_UP} render={() => <SignUp />}></Route>
        <Route
          path={ROUTES.HOME}
          render={() => (
            <Home programmes={programmes} setProgrammes={setProgrammes} authUser={authUser} />
          )}
        ></Route>
        <Route
          path={ROUTES.CREATE_PROGRAMME}
          render={() => (
            <CreateProgramme
              programmes={programmes}
              setProgrammes={setProgrammes}
              authUser={authUser}
            />
          )}
        ></Route>
        <Route path={ROUTES.PASSWORD_FORGET}></Route>
      </div>
    </Router>
  )
}

export default withFirebase(App)

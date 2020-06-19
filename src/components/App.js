// Have skipped session handling with higher order components

import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../svg/logo.svg'
import SignIn from './SignIn'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import CreateProgramme from './CreateProgramme'
import * as ROUTES from '../constants/routes'
import SignUp from './SignUp'
import { withFirebase } from './Firebase'
import { AppContainer, LogoWrapper } from '../styles/App.styles'

const App = (props) => {
  const [authUser, setAuthUser] = useState(null)
  const [programmes, setProgrammes] = useState(null)
  const [programmesLoading, setProgrammesLoading] = useState(false)

  // Everytime App re-renders, check if there has been a change to the Auth status and update the authState
  useEffect(() => {
    const listener = props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null)
    })
    // This is the clean up function and run when the component unmounts - stops memory leaks
    return () => {
      listener()
    }
  })

  useEffect(() => {
    setProgrammesLoading(true)

    if (authUser !== null) {
      props.firebase
        .getProgrammesByUid(authUser.uid)
        .on('value', (snapshot) => {
          setProgrammes(snapshot.val())
          setProgrammesLoading(false)
        })
    }
  }, [authUser, props.firebase])

  return (
    <Router>
      <AppContainer>
        <header>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </header>
        <Route path={ROUTES.LANDING} exact></Route>
        <Route path={ROUTES.SIGN_IN} render={() => <SignIn />}></Route>
        <Route path={ROUTES.SIGN_UP} render={() => <SignUp />}></Route>
        <Route
          path={ROUTES.HOME}
          render={() => (
            <Home
              programmes={programmes}
              setProgrammes={setProgrammes}
              authUser={authUser}
            />
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
      </AppContainer>
    </Router>
  )
}

export default withFirebase(App)

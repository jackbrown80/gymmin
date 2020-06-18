import React, { useState } from 'react'
import '../css/Login.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { withFirebase } from './Firebase'
import * as ROUTES from '../constants/routes'

const SignInBase = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const history = useHistory()

  const emailRef = React.createRef()
  const passwordRef = React.createRef()

  const doSignIn = () => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('')
        setPassword('')
        history.push(ROUTES.HOME)
      })
      .catch((error) => setError(error))
  }

  const doSignInWithProvider = (provider) => {
    props.firebase
      .doSignInWithPopUp(provider)
      .then((authUser) => {
        return props.firebase.getUserbyUid(authUser.user.uid).set({
          email: '',
          firstName: '',
          lastName: '',
        })
      })
      .then(() => {
        history.push(ROUTES.HOME)
      })
      .catch((error) => setError(error))
  }

  const onChange = (setStateFunc, value) => {
    setStateFunc(value)
  }

  const isInvalid = password === '' || email === ''

  return (
    <div>
      <p className="tagline">Making sure you are always making progress!</p>
      <div className="forms-wrapper">
        <form>
          <h1 className="title">SIGN IN</h1>
          <input
            type="email"
            placeholder="Email"
            className="input email"
            ref={emailRef}
            onChange={() => onChange(setEmail, emailRef.current.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input password"
            ref={passwordRef}
            onChange={() => onChange(setPassword, passwordRef.current.value)}
          />
          <div className="forgot-wrapper">
            <a href="/">Forgot Password?</a>
          </div>
          <div className="button-row">
            <button
              type="button"
              className="lets-go"
              disabled={isInvalid}
              onClick={() => doSignIn()}
            >
              LET'S GO
            </button>
          </div>
          {error && <p>{error.message}</p>}
        </form>
        <form>
          <div className="or-divider">
            <hr className="divider"></hr>
            <span>Or</span>
            <hr className="divider"></hr>
          </div>
          <button
            type="button"
            className="input alt-login facebook"
            onClick={() => doSignInWithProvider('Facebook')}
          >
            Login with Facebook
          </button>
          <br />
          <button
            type="button"
            className="input alt-login google"
            onClick={() => doSignInWithProvider('Google')}
          >
            Login with Google
          </button>
        </form>
      </div>
      <p className="new-account">
        Don't have an account?{' '}
        <Link to={ROUTES.SIGN_UP} className="link">
          Sign Up
        </Link>
      </p>
    </div>
  )
}

// This wraps it in the higher order component created in Firebase/context, so that it can access Firebase
const SignIn = withFirebase(SignInBase)

export default SignIn

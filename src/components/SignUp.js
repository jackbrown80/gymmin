import React, { useState } from 'react'
import '../css/Login.css'
import { useHistory } from 'react-router-dom'
import { withFirebase } from './Firebase'
import * as ROUTES from '../constants/routes'


const SignUpBase = (props) => {
  const history = useHistory()

  // Initialising state for all input fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [error, setError] = useState(null)

  // Creating refs for all input fields
  const firstNameRef = React.createRef()
  const lastNameRef = React.createRef()
  const emailRef = React.createRef()
  const passwordOneRef = React.createRef()
  const passwordTwoRef = React.createRef()

  const doSignUp = () => {
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        return props.firebase.getUserbyUid(authUser.user.uid).set({
          email,
          firstName,
          lastName,
        })
      })
      .then(() => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPasswordOne('')
        setPasswordTwo('')
        history.push(ROUTES.HOME)
      })
      .catch((error) => setError(error))
  }

  const onChange = (setStateFunc, value) => {
    setStateFunc(value)
  }

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    firstName === '' ||
    lastName === '' ||
    email === ''

  return (
    <div>
      <p className="tagline">Making sure you are always making progress!</p>
      <div className="forms-wrapper">
        <form>
          <h1 className="title">SIGN UP</h1>
          <input
            type="text"
            placeholder="First Name"
            className="input email"
            ref={firstNameRef}
            onChange={() => onChange(setFirstName, firstNameRef.current.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input email"
            ref={lastNameRef}
            onChange={() => onChange(setLastName, lastNameRef.current.value)}
          />
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
            ref={passwordOneRef}
            onChange={() =>
              onChange(setPasswordOne, passwordOneRef.current.value)
            }
          />
          <input
            type="password"
            placeholder="Retype Password"
            className="input password"
            ref={passwordTwoRef}
            onChange={() =>
              onChange(setPasswordTwo, passwordTwoRef.current.value)
            }
          />
          <button
            type="button"
            className="lets-go"
            disabled={isInvalid}
            onClick={() => doSignUp()}
          >
            SIGN UP
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    </div>
  )
}

// This wraps it in the higher order component created in Firebase/context, so that it can access Firebase
const SignUp = withFirebase(SignUpBase)

export default SignUp

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { withFirebase } from './Firebase'
import * as ROUTES from '../constants/routes'
import {
  Tagline,
  FormWrapper,
  Title,
  Input,
  SignUpButton,
} from '../styles/SignUp.styles'

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
      <Tagline>Making sure you are always making progress!</Tagline>
      <FormWrapper>
        <form>
          <Title>SIGN UP</Title>
          <Input
            user
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
            onChange={() => onChange(setFirstName, firstNameRef.current.value)}
          />
          <Input
            user
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
            onChange={() => onChange(setLastName, lastNameRef.current.value)}
          />
          <Input
            mail
            type="email"
            placeholder="Email"
            ref={emailRef}
            onChange={() => onChange(setEmail, emailRef.current.value)}
          />
          <Input
            lock
            type="password"
            placeholder="Password"
            ref={passwordOneRef}
            onChange={() =>
              onChange(setPasswordOne, passwordOneRef.current.value)
            }
          />
          <Input
            lock
            type="password"
            placeholder="Retype Password"
            ref={passwordTwoRef}
            onChange={() =>
              onChange(setPasswordTwo, passwordTwoRef.current.value)
            }
          />
          <SignUpButton
            type="button"
            disabled={isInvalid}
            onClick={() => doSignUp()}
          >
            SIGN UP
          </SignUpButton>
          {error && <p>{error.message}</p>}
        </form>
      </FormWrapper>
    </div>
  )
}

// This wraps it in the higher order component created in Firebase/context, so that it can access Firebase
const SignUp = withFirebase(SignUpBase)

export default SignUp

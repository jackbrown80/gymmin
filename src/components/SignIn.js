import React, { useState } from 'react'
import '../css/Login.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { withFirebase } from './Firebase'
import * as ROUTES from '../constants/routes'
import {
  Tagline,
  FormsWrapper,
  Title,
  EmailInput,
  PasswordInput,
  ForgotPasswordWrapper,
  ForgotPasswordLink,
  SignInButton,
  DividerWrapper,
  DividerLine,
  FacebookLoginButton,
  GoogleLoginButton,
  SignUpPrompt,
} from '../styles/Signin.styles'

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
      <Tagline>Making sure you are always making progress!</Tagline>
      <FormsWrapper>
        <form>
          <Title>SIGN IN</Title>
          <EmailInput
            type="email"
            placeholder="Email"
            ref={emailRef}
            onChange={() => onChange(setEmail, emailRef.current.value)}
          />
          <PasswordInput
            type="password"
            placeholder="Password"
            ref={passwordRef}
            onChange={() => onChange(setPassword, passwordRef.current.value)}
          />
          <ForgotPasswordWrapper>
            <ForgotPasswordLink href="/">Forgot Password?</ForgotPasswordLink>
          </ForgotPasswordWrapper>
          <SignInButton
            type="button"
            disabled={isInvalid}
            onClick={() => doSignIn()}
          >
            LET'S GO
          </SignInButton>
          {error && <p>{error.message}</p>}
        </form>
        <form>
          <DividerWrapper>
            <DividerLine></DividerLine>
            <span>Or</span>
            <DividerLine></DividerLine>
          </DividerWrapper>
          <FacebookLoginButton
            type="button"
            onClick={() => doSignInWithProvider('Facebook')}
          >
            Login with Facebook
          </FacebookLoginButton>
          <br />
          <GoogleLoginButton
            type="button"
            onClick={() => doSignInWithProvider('Google')}
          >
            Login with Google
          </GoogleLoginButton>
        </form>
      </FormsWrapper>
      <SignUpPrompt>
        Don't have an account?{' '}
        <Link to={ROUTES.SIGN_UP} className="link">
          Sign Up
        </Link>
      </SignUpPrompt>
    </div>
  )
}

// This wraps it in the higher order component created in Firebase/context, so that it can access Firebase
const SignIn = withFirebase(SignInBase)

export default SignIn

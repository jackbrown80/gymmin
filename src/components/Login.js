import React from 'react'
import '../css/Login.css'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const handleLogin = (e) => {
    e.preventDefault()
    console.log('hi')
    history.push('/programmes')
    e.currentTarget.form.reset()
  }
  return (
    <div>
      <p className="tagline">Making sure you are always making progress!</p>
      <div className="forms-wrapper">
        <form>
          <h1 className="title">LOGIN</h1>
          <input type="email" placeholder="Email" className="input email" />
          <input
            type="password"
            placeholder="Password"
            className="input password"
          />
          <div className="forgot-wrapper">
            <a href="/">Forgot Password?</a>
          </div>
          <button type="submit" className="lets-go" onClick={handleLogin}>
            LET'S GO
          </button>
        </form>
        <form>
          <div className="or-divider">
            <hr className="divider"></hr>
            <span>Or</span>
            <hr className="divider"></hr>
          </div>
          <button className="input alt-login facebook">
            Login with Facebook
          </button>
          <br />
          <button className="input alt-login google">Login with Google</button>
        </form>
      </div>
      <p className="new-account">
        <a href="/">Create a new account</a>
      </p>
    </div>
  )
}

export default Login

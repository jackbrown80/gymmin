import React from 'react'
import '../css/Login.css'

const Login = () => {
  return (
    <div className="wrapper">
      <form>
        <h1 className="title">LOGIN</h1>
        <input
          type="email"
          placeholder="Email"
          className="input email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input password"
          required
        />
        <div className="forgot-wrapper">
          <a href="/">Forgot Password?</a>
        </div>
        <button type="submit" className="lets-go">
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
          Continue with Facebook
        </button>
        <br />
        <button className="input alt-login google">Continue with Google</button>
      </form>
    </div>
  )
}

export default Login

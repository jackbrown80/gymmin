import React from 'react'
import { ReactComponent as Logo } from '../svg/logo.svg'
import '../css/App.css'
import Login from './Login'

function App() {
  return (
    <div className="App">
      <header>
        <Logo className="logo" />
      </header>
      <p className="tagline">Making sure you are always making progress!</p>
      <Login />
      <p className="new-account">
        <a href="/">Create a new account</a>
      </p>
    </div>
  )
}

export default App

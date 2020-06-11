import React, { useState } from 'react'
import { ReactComponent as Logo } from '../svg/logo.svg'
import '../css/App.css'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Programmes from './Programmes'
import CreateProgramme from './CreateProgramme'


function App() {

  const [programmes, setProgrammes] = useState({})

  return (
    <Router>
      <div className="App">
        <header>
          <Logo className="logo" />
        </header>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/programmes" exact render={() => <Programmes programmes={programmes} setProgrammes={setProgrammes}/>}></Route>
          <Route path="/programmes/create" render={() => <CreateProgramme programmes={programmes} setProgrammes={setProgrammes}/>}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

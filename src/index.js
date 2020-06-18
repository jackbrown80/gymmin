import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase'

ReactDOM.render(
  // Firebase instance is created within the Firebase class and passed as a value prop
  // This means that Firebase is only instantiated once and it is injects to all components via React Context API
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

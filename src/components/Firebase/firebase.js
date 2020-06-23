import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyDPq45uLNOw5FvWHHZXI83a5Xx-IXUNhrY',
  authDomain: 'gymmin-93caf.firebaseapp.com',
  databaseURL: 'https://gymmin-93caf.firebaseio.com',
  projectId: 'gymmin-93caf',
  storageBucket: 'gymmin-93caf.appspot.com',
  messagingSenderId: '525261553650',
  appId: '1:525261553650:web:3e5997d58a3670a615f56b',
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
    this.db = app.database()
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignInWithPopUp = (provider) => this.auth.signInWithPopup(new app.auth[`${provider}AuthProvider`]())

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  // *** User API ***

  getUserbyUid = uid => this.db.ref(`users/${uid}`)

  getAllUsers = () => this.db.ref(`users/`)

  getProgrammesByUid = (uid) => this.db.ref(`users/${uid}/programmes`)

}

export default Firebase

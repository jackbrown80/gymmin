import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPq45uLNOw5FvWHHZXI83a5Xx-IXUNhrY",
    authDomain: "gymmin-93caf.firebaseapp.com",
    databaseURL: "https://gymmin-93caf.firebaseio.com",
})

console.log(firebaseApp.database());

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base

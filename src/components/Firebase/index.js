// This index file is used to encapsulate all the Firebase stuff, it exports all necessary functionalities

import FirebaseContext, { withFirebase } from './context'
import Firebase from './firebase'

export default Firebase

export { FirebaseContext, withFirebase }
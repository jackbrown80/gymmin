import React from 'react'

// Contexts stops props drilling and allows us to tunnel props through components implicitly
const FirebaseContext = React.createContext(null)

// Higher order component
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)

export default FirebaseContext

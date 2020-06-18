import React from 'react'
import {withFirebase} from './Firebase'

const SignOutButton = (props) => (
    <button type="button" onClick={props.firebase.doSignOut}>
        SIGN OUT
    </button>
)

export default withFirebase(SignOutButton)
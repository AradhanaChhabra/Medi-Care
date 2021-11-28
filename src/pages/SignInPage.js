import React from 'react'
import SignIn from '../Components/SignIn'

export default function SignInPage(props){
    return (
        <SignIn loginHandler={props.loginHandler} />
    )
}


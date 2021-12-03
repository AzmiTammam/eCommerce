import React from 'react'
import Login from '../../components/Sign/Login'
import Register from "../../components/Sign/Register"

const SignInPage = ({handleCurrentUser}) => {
    return (
        <div>
            <Login  handleCurrentUser={handleCurrentUser}/>
            <Register />
        </div>
    )
}

export default SignInPage

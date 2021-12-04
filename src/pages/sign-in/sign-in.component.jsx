import React from 'react'
import Login from '../../components/Sign/Login'
import Register from "../../components/Sign/Register"
import './sign-in.styles.css'

const SignInPage = ({handleCurrentUser}) => {
    return (
        <div className="SignComponents">
            <Login  handleCurrentUser={handleCurrentUser}/>
            <Register />
            
        </div>
    )
}

export default SignInPage

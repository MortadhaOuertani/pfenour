import React from 'react'
import '../components/style/login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="nav"></div>
            <div className="logincontainer">
                <div className="loginform">
                    <h1>Login</h1>
                    <input type='email' className='logininput' placeholder='Email'></input>
                    <input type='password' className='logininput' placeholder='Password'></input>
                    <Link to="/register" className='registerlink'>Make an account?</Link>
                    <Link className='loginbutton' to="/">LOGIN</Link>
                </div>
            </div>
        </>
    )
}

export default Login
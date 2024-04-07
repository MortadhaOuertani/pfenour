import React from 'react'
import '../components/style/Register.css'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <>
            <div className="nav"></div>
            <div className="Registercontainer">
                <div className="Registerform">
                    <h1>Register</h1>
                    <input type='email' className='Registerinput' placeholder='Email'></input>
                    <input type='password' className='Registerinput' placeholder='Password'></input>
                    <input type='password' className='Registerinput' placeholder='Repeat Password'></input>
                    <Link to="/login" className='registerlink'>Already have an account?</Link>
                    <Link className='Registerbutton' to="/">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Register